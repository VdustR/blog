const path = require("node:path");
const { createRequire } = require("node:module");

const coreRequire = createRequire(
  require.resolve("@docusaurus/core/package.json"),
);
const mdxLoaderPackage = coreRequire.resolve(
  "@docusaurus/mdx-loader/package.json",
);
const mdxLoaderRequire = createRequire(mdxLoaderPackage);
const imageSizeRoot = path.dirname(mdxLoaderRequire.resolve("image-size"));

const { HEIF } = require(path.join(imageSizeRoot, "types/heif.cjs"));
const { ICNS } = require(path.join(imageSizeRoot, "types/icns.cjs"));
const { JXL } = require(path.join(imageSizeRoot, "types/jxl.cjs"));

const box = (size, name) => {
  const value = Buffer.alloc(8);
  value.writeUInt32BE(size, 0);
  value.write(name, 4, "ascii");
  return value;
};

const icns = Buffer.alloc(16);
icns.write("icns");
icns.writeUInt32BE(16, 4);
icns.write("ic07", 8);
icns.writeUInt32BE(0, 12);

const jxl = Buffer.concat([
  box(12, "ftyp"),
  Buffer.from("jxl "),
  box(0, "jxlp"),
]);

const heif = Buffer.alloc(36);
box(36, "meta").copy(heif, 0);
box(24, "iprp").copy(heif, 12);
box(16, "ipco").copy(heif, 20);
box(0, "ispe").copy(heif, 28);

const cases = [
  ["ICNS", () => ICNS.calculate(icns)],
  ["JXL", () => JXL.calculate(jxl)],
  ["HEIF", () => HEIF.calculate(heif)],
];

for (const [name, calculate] of cases) {
  try {
    calculate();
    throw new Error(`${name} accepted a zero-sized structure`);
  } catch (error) {
    if (!String(error).includes("zero-sized")) {
      throw error;
    }
  }
}

console.log("image-size rejects zero-sized ICNS, JXL, and HEIF structures");
