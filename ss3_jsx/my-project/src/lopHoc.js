import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const listHocSinh = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
const table = <table>
  <thead>
    <tr>
      <th>company</th>
      <th>contact</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    {customer.map((e, i) => (
      <tr >
        <td>{e.company}</td>
        <td>{e.contain}</td>
        <td>{e.country}</td>
      </tr>
    ))}
  </tbody>
</table>




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  contain
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
