const ap = document.createElement('div');
const ar = document.createElement('div');
ap.id = 'app';
ar.classList.add('list-repo');
document.body.append(ap);


import {Search} from "./modul/search.js";
import {View} from "./modul/view.js";

new Search(new View());


ap.append(ar);