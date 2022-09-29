import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('sabre-ibe'));
// root.render(
//   <React.StrictMode>
//     <App myApp/>
//   </React.StrictMode>
// );
// window.initFinanceWidget = function() {
  const WidgetDivs = document.querySelectorAll('.sabre-ibe');

  WidgetDivs.forEach(Div => {
    ReactDOM.render(
      <React.StrictMode>
        <App domElement={Div} />
      </React.StrictMode>,
      Div
    );
  });
// }
// reportWebVitals();
