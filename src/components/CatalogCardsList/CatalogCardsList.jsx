import CatalogCard from '../CatalogCard/CatalogCard';
import css from './CatalogCardsList.module.css';

function CatalogCardsList({ cars }) {
  return (
    <div>
      <ul className={css.container}>
        {cars.map((car, idx) => (
          <li key={`${car.id}-${idx}`}>
            <CatalogCard {...car} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogCardsList;
