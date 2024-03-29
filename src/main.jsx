import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faArrowLeft, faSpinner);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
