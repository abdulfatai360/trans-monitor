export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;

  return items.length < pageSize
    ? items
    : items.slice(startIndex, startIndex + pageSize);
};
