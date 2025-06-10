import { Field, Form, Formik } from 'formik';
import css from './BookingForm.module.css';
import DatePicker from 'react-datepicker';
import Calendar from '../Calendar/Calendar';
import toast from 'react-hot-toast';

const initialFormValues = {
  name: '',
  email: '',
  bookingDate: null,
  comment: '',
};

function BookingForm() {
  const handleSubmit = (values, { resetForm }) => {
    if (!values) return;
    console.log(values);
    resetForm();
    toast.success('Successfully booked the car');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values, dirty }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.field}
            ></Field>
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.field}
            ></Field>
            <Calendar
              value={values.bookingDate}
              onChange={date => setFieldValue('bookingDate', date)}
            />
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={css.fieldTextArea}
            ></Field>
            <button className="btn" type="submit" disabled={!dirty}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;
