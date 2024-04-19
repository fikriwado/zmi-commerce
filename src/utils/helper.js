const stringToSlug = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(' - ', '-')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export { stringToSlug }
