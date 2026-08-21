import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow text", type: "string" }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
      description: "Wrap the part you want in brass/italic with *asterisks*, e.g. Rooms built around *how light lands* in them.",
    }),
    defineField({ name: "statementQuote", title: "Statement quote", type: "text" }),
    defineField({ name: "statementSignature", title: "Statement signature", type: "string" }),
    defineField({
      name: "contactHeadline",
      title: "Contact headline",
      type: "string",
      description: "Same *asterisk* rule applies here.",
    }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
  ],
});
