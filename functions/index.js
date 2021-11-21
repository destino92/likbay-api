//const algoliasearch = require('algoliasearch');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

  const { event: { data } } = JSON.parse(event.body);
  const product = {
      "objectID": data.new.id,
      "nom": data.new.nom,
      "category": data.new.category,
      "detail": data.new.detail,
      "etat": data.new.etat,
      "marque": data.new.marque,
      "prix": data.new.prix,
      "poids": data.new,
      "subscription": data.new.subscription,
      "coupon": data.new.coupon,
      "guarantie": data.new.guarantie
    };

  console.log(data);
  console.log(product);

  return { statusCode: 200, body: JSON.stringify(data) };


  {/*const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
  const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;

  var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
  var index = client.initIndex('test_LIKBAY');

  try {
    const record = await index.saveObject({...data.new, objectID: data.new.id});
    console.log(record)
    return { statusCode: 200, body: JSON.stringify(record) };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }*/}

}

module.exports = { handler }