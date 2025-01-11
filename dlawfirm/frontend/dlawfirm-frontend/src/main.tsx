import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { Layout } from './components/admin/Layout.tsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Layout>
        <App />
      </Layout>

    </BrowserRouter>
  </StrictMode>,
)