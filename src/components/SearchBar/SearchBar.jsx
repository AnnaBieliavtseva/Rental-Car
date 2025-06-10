import Select from 'react-select';
import css from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import { SelectStyles } from '../../utils/SelectStyles';

const options = [
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Audi', label: 'Audi' },
  { value: 'Bentley', label: 'Bentley' },
];
const prices = [
  { value: '30', label: '30' },
  { value: '40', label: '40' },
  { value: '50', label: '50' },
  { value: '60', label: '60' },
  { value: '70', label: '70' },
  { value: '80', label: '80' },
];

const initialFormValues = {
  brands: '',
  prices: '',
  mileageFrom: '',
  mileageTo: '',
};

function SearchBar() {
  return (
    <div className={css.container}>
      <Formik
        initialValues={initialFormValues}
        // onSubmit={handleSubmit}

        enableReinitialize
      >
        <Form className={css.form}>
          <Select
            options={options}
            styles={SelectStyles}
            placeholder="Choose a brand"
          />
          <Select
            options={prices}
            styles={SelectStyles}
            placeholder="Choose a price"
          />
          <Field name="mileageFrom" placeholder="From" className={css.field} />
          <Field name="mileageTo" placeholder="To" className={css.field} />
          <button className="btn">Search</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;
