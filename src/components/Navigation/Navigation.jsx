import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';
import Logo from '../../assets/Logo.svg';

const navLinkCLass = ({ isActive }) => {
  return clsx('navItem', isActive && 'active');
};

function Navigation() {
  return (
    <header className={css.header}>
      <img src={Logo} alt="Logo Rental Car"></img>
      <nav className={css.nav}>
        <NavLink to="/" className={navLinkCLass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navLinkCLass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
