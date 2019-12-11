"use strict";
const autoload = use('Application/Config/autoload');
const path = use('path');

let helpers = {
   baseURL: () => {
      return 'This is base url';
   },
   assetURL: () => {
      return 'This is asset url';
   }
};
let user_helpers = autoload.helpers;
for (let h = 0; h < user_helpers.length; h++) {
   let help = use(path.join('Application/helpers', user_helpers[h]));
   Object.keys(help).forEach((v, i) => {
      helpers[v] = help[v];
   });
   // console.log(help);
}
// console.log(helpers);
module.exports = helpers;