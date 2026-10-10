export default (value) => ({
  value,
  execArgv: process.execArgv,
  inheritedEnv: process.env.BLOG_INHERITED_OPTION,
});
