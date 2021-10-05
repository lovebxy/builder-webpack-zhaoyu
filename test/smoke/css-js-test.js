const glob = require("glob-all");
describe("Checking generated css files", () => {
  it("should generate css files", (done) => {
    const files = glob.sync([
      "./dist/index_*.js",
      "./dist/index_*.css",
      "./dist/search*.js",
      "./dist/search*.css",
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error("no css files generator");
    }
  });
});