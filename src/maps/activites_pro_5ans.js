'use strict';


module.exports = function(doc) {
  return {
    parlementaire: doc.parlementaire,
    activites_pro_5ans: {
      name: doc["description de l'activité professionnelle exercée au cours des 5 dernières années"],
      amount: doc["rémunération ou gratification perçue"]
    }
  }
};
