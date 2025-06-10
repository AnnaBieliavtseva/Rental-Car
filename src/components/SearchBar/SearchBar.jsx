import Select from 'react-select';
import css from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import { SelectStyles } from '@utils/SelectStyles';
import { SingleValue } from '@utils/SelectSingleValue';
import { useDispatch } from 'react-redux';
import { setFilters } from '@redux/filters/slice';
import { brandsMapper } from '@utils/index';
import { prices } from '../../constants/constants';

const initialFormValues = {
  brands: '',
  prices: '',
  mileageFrom: '',
  mileageTo: '',
};

function SearchBar({ brands }) {
  const dispatch = useDispatch();

  const brandsOptions = brandsMapper(brands);

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
        {({ setFieldValue, handleSubmit, resetForm }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <div className={css.selectWrapper}>
              <label className={css.label}>Car brand</label>
              <Select
                options={brandsOptions}
                styles={SelectStyles}
                placeholder="Choose a brand"
                onChange={option => setFieldValue('brands', option)}
              />
            </div>
            <div className={css.selectWrapper}>
              <label className={css.label}>Price/ 1 hour</label>
              <Select
                options={prices}
                styles={SelectStyles}
                placeholder="Choose a price"
                onChange={option => setFieldValue('prices', option)}
                components={{ SingleValue }}
                getOptionLabel={option => `${option.value}`}
              />
            </div>
            <div>
              <label className={css.label}>Сar mileage / km</label>
              <div className={css.mileageWrapper}>
                <Field
                  name="mileageFrom"
                  placeholder="From"
                  className={css.field}
                />
                <Field
                  name="mileageTo"
                  placeholder="To"
                  className={css.field}
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
