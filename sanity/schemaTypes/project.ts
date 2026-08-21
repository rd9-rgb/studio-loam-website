import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "finish", title: "Finish", type: "string" }),
    defineField({ name: "scope", title: "Scope", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    defineField({
      name: "image",
      title: "Render / Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
