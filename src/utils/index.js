export const mileageFormatter = mileage => {
  return mileage.toLocaleString('en-US').replace(/,/g, ' ') + ' km';
};
export const mileageInputFormatter = mileage => {
  return new Intl.NumberFormat('en-US').format(mileage);
};

export const brandsMapper = brands => {
  return brands.map(brand => ({
    value: brand,
    label: brand,
  }));
};
