import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/styles/custom-bootstrap.scss';
import './i18n';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Register the service worker
serviceWorkerRegistration.register();