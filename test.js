const minify = require('html-minifier-terser').minify;

it("compress html", async () => {
    const result = minify('<p title="blah" id="moo">foo</p>', {
        removeAttributeQuotes: true
    });


    expect(result).toMatchSnapshot("result");
});