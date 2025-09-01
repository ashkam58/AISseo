// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    readingTime: { type: "string", required: false },
    seo: {
      type: "nested",
      of: {
        title: { type: "string", required: true },
        description: { type: "string", required: true }
      },
      required: true
    },
    schema: {
      type: "nested",
      of: {
        type: { type: "string", required: true },
        provider: { type: "string", required: true }
      },
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc.slug}`
    }
  }
}));
var Course = defineDocumentType(() => ({
  name: "Course",
  filePathPattern: `courses/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    level: { type: "string", required: true },
    duration: { type: "string", required: true },
    priceINR: { type: "number", required: true },
    priceAED: { type: "number", required: true },
    audience: { type: "list", of: { type: "string" }, required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    short: { type: "string", required: true },
    seo: {
      type: "nested",
      of: {
        title: { type: "string", required: true },
        description: { type: "string", required: true }
      },
      required: true
    },
    schema: {
      type: "nested",
      of: {
        type: { type: "string", required: true },
        provider: { type: "string", required: true }
      },
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/courses/${doc.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Course]
});
export {
  Blog,
  Course,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HTYUCLM6.mjs.map
