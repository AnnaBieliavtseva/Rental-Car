import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const CatalogDetailsPage = lazy(() =>
  import('./pages/CatalogDetailsPage/CatalogDetailsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/catalog"
            element={
              <ContainerWrapper>
                <Catalog />
              </ContainerWrapper>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <ContainerWrapper>
                <CatalogDetailsPage />
              </ContainerWrapper>
            }
          />
          <Route
            path="*"
            element={
              <ContainerWrapper>
                <NotFoundPage />
              </ContainerWrapper>
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
