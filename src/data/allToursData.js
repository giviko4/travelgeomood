// src/data/allToursData.js

import { destinations } from './destinationsData';
import { specialTours } from './specialToursData';

// ვაერთიანებთ ორივე მასივს ერთ, სრულყოფილ სიაში
export const allTours = [...destinations, ...specialTours];