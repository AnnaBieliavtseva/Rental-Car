import css from './ContainerWrapper.module.css';

function ContainerWrapper({ children }) {
  return <div className={css.container}>{children}</div>;
}

export default ContainerWrapper;
