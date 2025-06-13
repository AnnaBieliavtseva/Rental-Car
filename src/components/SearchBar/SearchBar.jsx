import Select from 'react-select';
import css from './SearchBar.module.css';
import { Form, Formik } from 'formik';
import { SelectStyles } from '@utils/SelectStyles';
import { SingleValue } from '@utils/SelectSingleValue';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '@redux/filters/slice';
import { brandsMapper } from '@utils/index';
import { prices } from '@constants/constants';
import { selectFilters } from '@redux/filters/selectors';
import { mileageInputFormatter } from '../../utils';

function SearchBar({ brands }) {
  const dispatch = useDispatch();
  const brandsOptions = brandsMapper(brands);
  const filters = useSelector(selectFilters);

  const initialFormValues = {
    brands: filters.brand
      ? brandsOptions.find(option => option.value === filters.brand)
      : null,
    prices: filters.rentalPrice
      ? prices.find(option => option.value === filters.rentalPrice)
      : null,
    mileageFrom: filters.minMileage || '',
    mileageTo: filters.maxMileage || '',
  };

  const handleSubmit = values => {
    dispatch(
      setFilters({
        brand: values.brands?.value || null,
        rentalPrice: values.prices?.value || null,
        minMileage: values.mileageFrom || '',
        maxMileage: values.mileageTo || '',
      })
    );
  };

  const handleReset = resetForm => {
    dispatch(
      setFilters({
        brand: null,
        rentalPrice: null,
        minMileage: '',
        maxMileage: '',
      })
    );
    resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue, handleSubmit, resetForm, values }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <div className={css.selectWrapper}>
              <label className={css.label}>Car brand</label>
              <Select
                options={brandsOptions}
                styles={SelectStyles}
                placeholder="Choose a brand"
                value={values.brands}
                onChange={option => setFieldValue('brands', option)}
              />
            </div>
            <div className={css.selectWrapper}>
              <label className={css.label}>Price/ 1 hour</label>
              <Select
                options={prices}
                styles={SelectStyles}
                placeholder="Choose a price"
                value={values.prices}
                onChange={option => setFieldValue('prices', option)}
                components={{ SingleValue }}
                getOptionLabel={option => `${option.value}`}
              />
            </div>
            <div>
              <label className={css.label}>Сar mileage / km</label>
              <div className={css.mileageWrapper}>
                <input
                  name="mileageFrom"
                  placeholder="From"
                  className={css.field}
                  value={
                    values.mileageFrom
                      ? `From ${mileageInputFormatter(values.mileageFrom)}`
                      : ''
                  }
                  onChange={e => {
                    const input = e.target.value.replace(/[^\d]/g, '');
                    setFieldValue('mileageFrom', input);
                  }}
                />
                <input
                  name="mileageTo"
                  placeholder="To"
                  className={css.field}
                  value={
                    values.mileageTo
                      ? `To ${mileageInputFormatter(values.mileageTo)}`
                      : ''
                  }
                  onChange={e => {
                    const input = e.target.value.replace(/[^\d]/g, '');
                    setFieldValue('mileageTo', input);
                  }}
                />
              </div>
            </div>
            <button className={css.btn} type="sumbit">
              Search
            </button>
            <button
              className={css.resetBtn}
              type="button"
              onClick={() => handleReset(resetForm)}
            >
              Reset filters
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchBar;
