/* eslint-disable no-undef */
const assert = require("assert");
const base = require("../../lib/webpack.base");

describe("webpack.base.js test case", () => {
  const baseConfig = base;

  it("entry", () => {
    assert.equal(
      baseConfig.entry.index,
      "/Users/cpselvis/my-project/builder-webpack/test/smoke/template/src/index/index.js"
    );
    assert.equal(
      baseConfig.entry.search,
      "/Users/cpselvis/my-project/builder-webpack/test/smoke/template/src/search/index.js"
    );
  });
});
