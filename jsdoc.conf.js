module.exports = {
  opts: {
    destination: "./doc/api",
    recurse: true
  },
  plugins: ["plugins/markdown"],
  source: {
    include: ["README.md", "./lib"]
  }
};
