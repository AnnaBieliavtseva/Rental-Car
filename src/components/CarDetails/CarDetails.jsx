import { mileageFormatter } from '@utils';
import css from './CarDetails.module.css';

function CarDetails({
  car: {
    year,
    brand,
    model,
    rentalConditions,
    id,
    address,
    rentalPrice,
    type,
    fuelConsumption,
    engineSize,
    mileage,
    description,
    functionalities,
  },
}) {
  const onlyDigits = id.replace(/\D/g, '');
  const formattedUIId = onlyDigits.slice(-4);
  const formattedMileage = mileageFormatter(mileage);

  return (
      <div className={css.container}>
      <h2 className={css.title}>
        {brand} {model}, {year}
        <span className={css.id}>Id: {formattedUIId}</span>
      </h2>
      <div className={css.info}>
        <div className={css.iconWrapper}>
          <svg className={css.icon}>
            <use href="/sprite.svg#location" />
          </svg>
          <p>{address}</p>
        </div>
        <p>Mileage: {formattedMileage}</p>
      </div>
      <p className={css.price}>{rentalPrice} $</p>
      <p className={css.descr}>{description}</p>
      <div className={css.detailsListWrapper}>
        <div>
          <h3 className={css.detailsListTitle}>Rental Conditions:</h3>
          <ul className={css.detailsList}>
            {rentalConditions.map((item, idx) => (
              <li key={`cond-${idx}`}>
                <svg className={css.icon}>
                  <use href="/sprite.svg#check-circle" />
                </svg>
                <p> {item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={css.detailsListTitle}>Car Specifications:</h3>
          <ul className={css.detailsList}>
            <li>
              <svg className={css.icon}>
                <use href="/sprite.svg#calendar" />
              </svg>
              <p>Year: {year}</p>
            </li>
            <li>
              <svg className={css.icon}>
                <use href="/sprite.svg#car" />
              </svg>
              <p>Type: {type}</p>
            </li>
            <li>
              <svg className={css.icon}>
                <use href="/sprite.svg#fuel-pump" />
              </svg>
              <p>Fuel Consumption: {fuelConsumption}</p>
            </li>
            <li>
              <svg className={css.icon}>
                <use href="/sprite.svg#gear" />
              </svg>
              <p>Engine Size: {engineSize}</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={css.detailsListTitle}>
            Accessories and functionalities:
          </h3>
          <ul className={css.detailsList}>
            {functionalities.map((item, idx) => (
              <li key={`func-${idx}`}>
                <svg className={css.icon}>
                  <use href="/sprite.svg#check-circle" />
                </svg>
                <p> {item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
