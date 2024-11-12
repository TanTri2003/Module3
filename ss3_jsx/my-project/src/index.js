import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const customer = [
  {
    id: 1,
    name: "tri"
  },
  {
    id: 2,
    name: "tri2"
  }
]
const header = <div>
  <h1>header</h1>
</div>
const table =
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {customer.map((e, i) => (
        <tr key={e.id}>
          <td>{i + 1}</td>
          <td>{e.id}</td>
          <td>{e.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
const footer = <>
  <h1>Footer</h1>
</>
const contain = <div>
  {header}
  {table}
  {footer}
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // contain
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
