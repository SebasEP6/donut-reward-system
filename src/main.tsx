import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import PageContainer from './components/Container';
import { ThemeProvider } from 'styled-components';
import './assets/styles/index.css';
import { defaultTheme } from './assets/styles/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </ThemeProvider>
  </React.StrictMode>,
)
