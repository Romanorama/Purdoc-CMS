const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("static");

  // Copy admin folder for Decap CMS
  eleventyConfig.addPassthroughCopy("admin");

  // Add a safe filter that marks content as not needing escaping
  eleventyConfig.addFilter("safe", function(value) {
    if (!value) return "";
    const nunjucks = require("nunjucks");
    return new nunjucks.runtime.SafeString(value);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
