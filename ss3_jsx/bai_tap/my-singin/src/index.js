import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const singIn =
<container class="container">
<form class="form">
    <div class="row mb-3">
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder='Email'/>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder='Password'/>
      </div>
    </div>
    <div class="col-auto">
    <div class="check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2"/>
      <label class="form-check-label" for="autoSizingCheck2">
        Remember me
      </label>
    </div>
  </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
    <label class="year">11/09/2024</label>
  </form>
</container>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  singIn
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
