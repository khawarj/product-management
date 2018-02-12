import 'babel-polyfill';
import React from "react";
import {render} from 'react-dom';

import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import HomePage from "./components/home/HomePage"


render(
    <HomePage/>,
    document.getElementById("app")
);