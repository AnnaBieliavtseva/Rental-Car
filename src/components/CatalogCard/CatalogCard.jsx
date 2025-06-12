import { useNavigate } from 'react-router-dom';
import css from './CatalogCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '@redux/vehicles/selectors';
import Loader from '../Loader/Loader';
import { mileageFormatter } from '@utils';
import { toggleFavourite } from '@redux/favourites/slice';
import { selectFavourites } from '@redux/favourites/selectors';


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
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const city = address.split(',').splice(1, 1);
  const country = address.split(',').splice(2, 2);
  const formattedMileage = mileageFormatter(mileage);
  const favourites = useSelector(selectFavourites);
  const isFavourite = favourites.includes(id);

  const handleBtnClick = id => {
    navigate(`/catalog/${id}`);
  };

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite(id));
  };

  if (isLoading) return <Loader />;

  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img src={img} alt={model} className={css.img} />
        <button className={css.favourite} onClick={handleFavouriteClick}>
          {isFavourite ? (
            <svg className={css.icon}>
              <use href="/sprite.svg#favourite" />
            </svg>
          ) : (
            <svg className={css.iconFilled}>
              <use href="/sprite.svg#favourite-filled" />
            </svg>
          )}
        </button>
      </div>
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
