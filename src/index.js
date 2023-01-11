import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomCursor } from "react-svg-cursor";
import svg from "./assets/cursor.svg";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <>
    <App />
    <CustomCursor
      component={svg}
      isDisabled={false}
      width={50}
      height={50}
      zIndex={420}
      transform="translate(-30%, -10%) rotateZ(-22deg)"
    />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
