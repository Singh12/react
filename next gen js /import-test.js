// this is default export so you can choose what ever name you want ot use to process.
import person from 'test.js';
import per from 'test.js';
// const key word and used for specific target to call in curly braces.
//Name Export use the exact key word to define it that are using by import
import {baseData} from 'test.js';
import {clean} from './utility.js';


// you can use as a aliases 
import {clean as Clean} from './test.js';

import * as bundled from 'test.js';
// bundel.clean like if you have multiple thing to import