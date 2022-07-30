import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Импорт библиотеки react-DOM и путь генерации приложения "root" */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/* То, что мы хотим зарендерить "App" */
root.render(
  <App />
);
