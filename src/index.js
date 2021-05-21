// Add shims and polyfills
import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";
import './style.css';

import { define } from "hybrids";
import DoubleOrQuits from "./DoubleOrQuits";


// Enable HMR for development
if (process.env.NODE_ENV !== "production") module.hot.accept();

// Define imported web component
define("double-or-quits", DoubleOrQuits);