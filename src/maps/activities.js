'use strict';


module.exports = function(doc) {
  return {
    parlementaire: doc.parlementaire,
    activity: {
      name: doc["description de l'activité professionnelle à la date de l'élection"],
      amount: doc["rémunération ou gratification perçue"]
    }
  }
};
