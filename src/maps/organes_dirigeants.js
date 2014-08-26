'use strict';


module.exports = function(doc) {
  return {
    parlementaire: doc.parlementaire,
    organes_dirigeants: {
      entity: doc["identification de l'organisme public ou privé ou de la société"],
      description: doc["description de l'activité (participation aux organses dirigeants) à la date de l'élection ou au cours des 5 dernières années"],
      amount: doc["rémunération ou gratification perçue"]
    }
  }
};
