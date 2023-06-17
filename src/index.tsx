import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AuthProvider } from '@/app/providers/AuthProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundery';
import App from './app/App';
import './app/styles/index.scss';

import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root not found. Error occured while trying to mount application!');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <AuthProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AuthProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
