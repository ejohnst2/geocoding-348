import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { initAutocomplete } from '../plugins/init_autocomplete';
import { initMapbox } from '../plugins/initMapbox';

initMapbox();
initAutocomplete();
