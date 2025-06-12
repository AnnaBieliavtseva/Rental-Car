import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={css.container}>
      <p>404</p>
      <h1>Page not found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <div>
        <NavLink to="/" className="btn">
          Go back home
        </NavLink>
      </div>
    </div>
  );
}

export default NotFoundPage;
