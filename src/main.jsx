import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <Toaster />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
