// lib/slugify.js
export default function slugify(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric
      .replace(/\s+/g, "-") // replace spaces with -
      .replace(/-+/g, "-"); // collapse multiple -
  }