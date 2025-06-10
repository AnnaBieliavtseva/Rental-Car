export const mileageFormatter = mileage => {
  return mileage.toLocaleString('en-US').replace(/,/g, ' ') + ' km';
};
