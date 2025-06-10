import { NavLink } from 'react-router-dom';


function NotFoundPage() {
  return (
    <main>
      <div>
        <p>404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <div>
          <NavLink to="/" className="btn">
            Go back home
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
