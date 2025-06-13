export const selectCars = state => state.vehicles.items;
export const selectCar = state => state.vehicles.currentCar;
export const selectIsLoading = state => state.vehicles.loading;
export const selectCurrentPage = state => state.vehicles.currentPage;
export const selectTotalPages = state => state.vehicles.totalPages;
