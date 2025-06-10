import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('./catalog');
  };

  return (
    <div className={css.hero}>
      <div className={css.overlay}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className="btn" onClick={handleBtnClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
}

export default HomePage;
