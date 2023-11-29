import './css/index.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Initialize, useServerSide, getFullData,GenerateNewData } from 'components/logical/ServerSide';

ReactDOM.render(
  <React.StrictMode>
    <useServerSide>
      <App />
    </useServerSide>
  </React.StrictMode>,
  document.getElementById("root")
);

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js">
</script>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console .log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
