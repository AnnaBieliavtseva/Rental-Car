import { useNavigate } from 'react-router-dom';
import css from './CatalogCard.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/vehicles/selectors';
import Loader from '../Loader/Loader';
import { mileageFormatter } from '../../utils';

function CatalogCard({
  id,
  year,
  brand,
  model,
  type,
  img,
  address,
  rentalPrice,
  rentalCompany,
  mileage,
}) {
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const city = address.split(',').splice(1, 1);
  const country = address.split(',').splice(2, 2);
  const formattedMileage = mileageFormatter(mileage)
   

  const handleBtnClick = id => {
    navigate(`/catalog/${id}`);
  };

  if (isLoading) return <Loader />;

  return (
    <div className={css.container}>
      <img src={img} alt={model} className={css.img} />
      <div className={css.cardContent}>
        <div className={css.modelWrapper}>
          <p>
            {brand}
            <span className={css.accent}> {model}</span>, {year}
          </p>
          <p>${rentalPrice}</p>
        </div>
        <div className={css.infoList}>
          <ul className={css.infoWrapper}>
            <li>{city}</li>
            <li>{country}</li>
            <li>{rentalCompany} </li>
          </ul>
          <ul className={css.infoWrapper}>
            <li>{type}</li>
            <li> {formattedMileage}</li>
          </ul>
        </div>
      </div>
      <button className="btn" onClick={() => handleBtnClick(id)}>
        Read More
      </button>
    </div>
  );
}

export default CatalogCard;
