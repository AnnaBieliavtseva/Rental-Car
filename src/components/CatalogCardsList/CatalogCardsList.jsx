import CatalogCard from '../CatalogCard/CatalogCard';
import css from './CatalogCardsList.module.css'

function CatalogCardsList({ cars }) {
  return (
    <div>
      <ul className={css.container}>
        {cars.map(
          ({
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
          }) => (
            <li key={id}>
              <CatalogCard
                id={id}
                year={year}
                brand={brand}
                model={model}
                type={type}
                img={img}
                address={address}
                rentalPrice={rentalPrice}
                rentalCompany={rentalCompany}
                mileage={mileage}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default CatalogCardsList;
