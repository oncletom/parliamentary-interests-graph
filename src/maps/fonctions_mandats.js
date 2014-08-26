'use strict';


module.exports = function(doc) {
  return {
    parlementaire: doc.parlementaire,
    fonctions_mandats: {
      name: doc["identification des fonctions et mandats électifs"],
      duration: doc["date de début et de fin de fonction et mandat"],
      amount: doc["rémunérations, indemnités ou gratifications perçues"]
    }
  }
};
