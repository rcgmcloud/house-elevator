/*jslint node: true */
'use strict';

module.exports = {
goto: _goto
}

function _goto(lvl, btn){
  if(typeof lvl !== 'number' || lvl > 3 || lvl < 0){
    return 0;
  }
  if(typeof btn !== 'string' || Number(btn) > 3 || Number(btn) < 0){
    return 0;
  }

  var dif = (lvl - Number(btn)) *-1;

  return dif;
}
