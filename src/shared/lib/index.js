export const getLimitOffset = (pagination) => {
  return {
    limit: pagination.pageSize,
    offset: pagination.pageSize * (pagination.page - 1),
  };
};
