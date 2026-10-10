/* eslint-disable no-extend-native -- Simulate the upstream pollution precondition; restore every property in finally. */
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

// Exercise the installed transitive packages without adding direct dependencies.
async function installed(...chain) {
  let require = createRequire(import.meta.url);
  let entry;
  for (const name of chain) {
    entry = require.resolve(name);
    require = createRequire(entry);
  }
  return import(pathToFileURL(entry));
}

const { default: Tinypool } = await installed("oxfmt", "tinypool");
const { default: uri } = await installed(
  "@astrojs/check",
  "@astrojs/language-server",
  "volar-service-yaml",
  "yaml-language-server",
  "ajv",
  "fast-uri",
);
const filename = resolve("scripts/fixtures/security-worker.mjs");

test("worker construction ignores inherited execArgv and env", async () => {
  let pool;
  const keys = ["execArgv", "env"];
  const saved = keys.map((key) =>
    Object.getOwnPropertyDescriptor(Object.prototype, key),
  );
  try {
    Object.prototype.execArgv = ["--conditions=blog-inherited-option"];
    Object.prototype.env = { BLOG_INHERITED_OPTION: "inherited" };
    pool = new Tinypool({ filename, minThreads: 1, maxThreads: 1 });
    const result = await pool.run("ok");
    assert.equal(result.value, "ok");
    assert.ok(!result.execArgv.includes("--conditions=blog-inherited-option"));
    assert.equal(result.inheritedEnv, undefined);
  } finally {
    keys.forEach((key, index) => {
      if (saved[index])
        Object.defineProperty(Object.prototype, key, saved[index]);
      else delete Object.prototype[key];
    });
    await pool?.destroy();
  }
});

test("run ignores an inherited filename and preserves explicit options", async () => {
  const pool = new Tinypool({ filename, minThreads: 1, maxThreads: 1 });
  const saved = Object.getOwnPropertyDescriptor(Object.prototype, "filename");
  try {
    Object.prototype.filename = resolve(
      "scripts/fixtures/inherited-worker.mjs",
    );
    const result = await pool.run("ok", {
      signal: new AbortController().signal,
    });
    assert.equal(result.value, "ok");
    assert.equal(
      await pool.run("ok", { filename: Object.prototype.filename }),
      "inherited worker",
    );
  } finally {
    if (saved) Object.defineProperty(Object.prototype, "filename", saved);
    else delete Object.prototype.filename;
    await pool.destroy();
  }
});

test("URI serialization rejects authority injection and preserves valid ports", () => {
  for (const port of [
    "@evil.example",
    "8080/path",
    "8080?query",
    "8080#fragment",
    -1,
    1.5,
  ]) {
    assert.throws(
      () => uri.serialize({ scheme: "http", host: "trusted.example", port }),
      TypeError,
    );
  }
  assert.equal(
    uri.serialize({ scheme: "http", host: "trusted.example", port: 8080 }),
    "http://trusted.example:8080/",
  );
  assert.equal(
    uri.resolve("https://example.com/base/", "../post"),
    "https://example.com/post",
  );
  assert.equal(uri.normalize("//%41.com"), "//a.com");
  assert.equal(uri.equal("//%41.com/Path", "//a.com/path"), false);
});
