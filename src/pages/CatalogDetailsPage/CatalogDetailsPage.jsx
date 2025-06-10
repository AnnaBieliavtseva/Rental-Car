import { useParams } from 'react-router-dom';
import CarDetails from '@components/CarDetails/CarDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCarById } from '@redux/vehicles/operations';
import { selectCar, selectIsLoading } from '@redux/vehicles/selectors';
import css from './CatalogDetailsPage.module.css';
import Loader from '@components/Loader/Loader';
import BookingForm from '../../components/BookingForm/BookingForm';

function CatalogDetailsPage() {
  const { id: carId } = useParams();
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (carId) {
      dispatch(getCarById(carId));
    }
  }, [dispatch, carId]);

  const car = useSelector(selectCar);

  if (isLoading || !car) return <Loader />;
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img src={car.img} alt={car.model} className={css.img} />
        <BookingForm />
      </div>
      <CarDetails car={car} />
    </div>
  );
}

export default CatalogDetailsPage;
