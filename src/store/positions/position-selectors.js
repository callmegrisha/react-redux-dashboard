export const selectAllPositions = (state) => state.positions;
export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((position) => {
    const positionFilters = [].concat(
      position.role,
      position.level,
      ...position.languages,
      ...position.tools
    );

    // every проверяет каждый фильтр
    // если все значения соответствуют - true
    // если не соответствуют - false
    return filters.every((filter) => positionFilters.includes(filter));
  });
};
