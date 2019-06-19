import "bootstrap";
// app/javascript/packs/application.js
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { initMapbox } from '../plugins/init_mapbox';
//import { initAutocomplete } from '../plugins/init_autocomplete';
//import { initASelect2 } from '../plugins/init_select2';

initMapbox();
//initAutocomplete();
//initSelect2();
