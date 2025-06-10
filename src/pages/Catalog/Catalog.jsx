import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/vehicles/operations';
import { selectCars } from '../../redux/vehicles/selectors';
import CatalogCardsList from '../../components/CatalogCardsList/CatalogCardsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import css from './Catalog.module.css';

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  console.log(cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleBtnClick = () => {};

  return (
    <div className={css.container}>
      <SearchBar />
      <CatalogCardsList cars={cars} />
      <button className={css.loadMore} onClick={handleBtnClick}>
        Load More
      </button>
    </div>
  );
}

export default Catalog;
