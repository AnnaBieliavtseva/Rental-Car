import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '@redux/vehicles/operations';
import {
  selectCars,
  selectCurrentPage,
  selectTotalPages,
} from '@redux/vehicles/selectors';
import CatalogCardsList from '@components/CatalogCardsList/CatalogCardsList';
import SearchBar from '@components/SearchBar/SearchBar';
import css from './Catalog.module.css';
import { selectFilters } from '@redux/filters/selectors';
import { resetCars } from '@redux/vehicles/slice';
import { getBrands } from '@redux/brands/operations';
import { selectBrands } from '@redux/brands/selectors';
import Loader from '@components/Loader/Loader';
import { selectIsLoading } from '@redux/vehicles/selectors';

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);
  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const bottomRef = useRef(null);
  const isFirstPage = currentPage === 1 && cars.length === 0;
  



  useEffect(() => {
    dispatch(resetCars());
    dispatch(getCars({ page: 1, filters }));
    dispatch(getBrands());
  }, [dispatch, filters]);

  const handleBtnClick = () => {
    const nextPage = Number(currentPage || 1) + 1;
    dispatch(getCars({ page: nextPage, filters })).then(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  if (isFirstPage || !cars) return <Loader />;

  return (
    <div className={css.container}>
      <SearchBar brands={brands} />
      {cars.length ? (
        <CatalogCardsList cars={cars} />
      ) : (
        <p className={css.textError}>
          There are no matches for your filters. Please try again
        </p>
      )}
      <div ref={bottomRef} />
      {cars.length && currentPage < totalPages && (
        <button className={css.loadMore} onClick={handleBtnClick}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default Catalog;
