import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Calendar.module.css';

const CustomInput = forwardRef(function Calendar(
  { onClick, placeholder, value },
  ref
) {
  return (
    <button
      className={css.customDateInput}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      <span>{value || placeholder}</span>
    </button>
  );
});

const Calendar = ({ value, onChange }) => {
  const formatWeekDay = weekDayName => {
    return weekDayName.substring(0, 3);
  };
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      dateFormat="dd.MM.yyyy"
      formatWeekDay={formatWeekDay}
      customInput={<CustomInput />}
      weekStartsOn={1}
      calendarStartDay={1}
      showPopperArrow={false}
      placeholderText="Booking date"
    />
  );
};

export default Calendar;
