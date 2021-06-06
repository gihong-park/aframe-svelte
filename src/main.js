import './global.css';

import App from './App.svelte';
// import * as AFRAME from 'aframe';
require("aframe-physics-system/dist/aframe-physics-system");

const app = new App({
	target: document.querySelector("a-scene"),
});

export default app;
