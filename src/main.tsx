import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-multi-carousel/lib/styles.css';

// Local
import { QUERY_CLIENT } from './shared/consts/QUERY_CLIENT';
import { theme } from './shared/styled-components/theme';
import { store } from './shared/store';
import RouterApp from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={QUERY_CLIENT}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />

          <RouterApp />
        </ThemeProvider>
      </Provider>

      {import.meta.env.MODE !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </BrowserRouter>,
);
