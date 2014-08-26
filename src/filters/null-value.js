'use strict';

var NULL_VALUES = ['NÉANT'];

module.exports = function(data) {
  for (var key in data){
    if (NULL_VALUES.indexOf(data[key]) !== -1) {
      return {};
    }
  }

  return { doc: data };
};
