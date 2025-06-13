import { Field, Form, Formik } from 'formik';
import css from './BookingForm.module.css';
import Calendar from '../Calendar/Calendar';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  bookingDate: null,
  comment: '',
};

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required'),
  bookingDate: Yup.date().required('Booking date is required'),
  comment: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

function BookingForm() {
  const handleSubmit = (values, { resetForm }) => {
    if (!values) return;
    // console.log(values);
    resetForm();
    toast.success('Successfully booked the car');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        {({ setFieldValue, values, dirty, errors, touched }) => (
          <Form className={css.form}>
            <div className={css.fieldWrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.field}
              ></Field>
              {errors.name && touched.name && (
                <div className={css.error}>{errors.name}</div>
              )}
            </div>
            <div className={css.fieldWrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.field}
              ></Field>
              {errors.email && touched.email && (
                <div className={css.error}>{errors.email}</div>
              )}
            </div>
            <div className={css.fieldWrapper}>
              <Calendar
                value={values.bookingDate}
                onChange={date => setFieldValue('bookingDate', date)}
              />
              {errors.bookingDate && touched.bookingDate && (
                <div className={css.error}>{errors.bookingDate}</div>
              )}
            </div>

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
