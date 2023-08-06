import React from 'react';
import App from './app/App.jsx';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './app/ErrorBoundary/ErrorBoundary.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>somwthing went wrong</p>}>
      <App />
    </ErrorBoundary>
    
  </React.StrictMode>
);
