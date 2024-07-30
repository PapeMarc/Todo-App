import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Todo } from './components/types.tsx';

const reactRoot = ReactDOM.createRoot(document.getElementById('root')!);

reactRoot.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
)