const algoliasearch = require('algoliasearch');

let images = [];

const categories = [
  {
    "percentage": 8,
    "label": "Equipements électrique et fournitures",
    "id": "ab27aab7-8477-46ff-91b2-cd0cb01b4b02"
  },
  {
    "percentage": 7,
    "label": "Accessoires pour ordinateurs",
    "id": "f51b20f3-a77c-451c-b63a-aad085f9f60e"
  },
  {
    "percentage": 5,
    "label": "Gaz & butane",
    "id": "3abef54e-e68b-4267-94b6-564a484833f0"
  },
  {
    "percentage": 5,
    "label": "Livre & Audible",
    "id": "529c615f-8fed-4526-a488-14205029ef49"
  },
  {
    "percentage": 5,
    "label": "Boissons alcoolisées",
    "id": "8ad89746-c2ff-4d4d-909f-1d57027790b4"
  },
  {
    "percentage": 6,
    "label": "Santé & médecine",
    "id": "484c2c2a-2dd0-4b35-ab0c-455c088d1073"
  },
  {
    "percentage": 5,
    "label": "Fourniture de jardin",
    "id": "7c06a140-ec5e-4c3a-8473-8103216a8ae1"
  },
  {
    "percentage": 7,
    "label": "Consoles de Jeux-Vidéo",
    "id": "3add62de-d8a7-472f-bf3f-ccf78b16493a"
  },
  {
    "percentage": 10,
    "label": "Fournitures électriques industrielles",
    "id": "7a5325f6-9a41-49d8-b752-54935b4bee7a"
  },
  {
    "percentage": 8,
    "label": "Agriculture",
    "id": "43539254-f797-44e9-8124-7805d91dabab"
  },
  {
    "percentage": 5,
    "label": "Fournitures de bureau et scolaires",
    "id": "b014378a-914c-4cfa-b6ec-0eb865fd8024"
  },
  {
    "percentage": 5,
    "label": "Billets d'avions & Réservation d'Hotels",
    "id": "d2f8ab04-700a-491d-86fa-7e439fce3602"
  },
  {
    "percentage": 5,
    "label": "Produits pour animaux de compagnie",
    "id": "8ca6323a-2e6f-49a1-b60d-57cf5af7749c"
  },
  {
    "percentage": 5,
    "label": "Logiciels, Jeux Vidéos",
    "id": "f73ac5dd-a662-49b7-9fbe-23f8dd12eb3d"
  },
  {
    "percentage": 7,
    "label": "Outils & matériel",
    "id": "1e28a9d4-c168-4d82-abde-193e04d55d24"
  },
  {
    "percentage": 7,
    "label": "Autres",
    "id": "c0becdcc-8dcb-4973-84cc-ecaf178fba4b"
  },
  {
    "percentage": 10,
    "label": "Bagages, sacs et étuis",
    "id": "7efa2be0-25ff-457b-add2-8d93f3697ae0"
  },
  {
    "percentage": 5,
    "label": "Sécurité & protection",
    "id": "fb4c7bd0-01d1-44b2-af87-73c4359621c9"
  },
  {
    "percentage": 7,
    "label": "Electronique grand public",
    "id": "ab077e93-7cfc-417e-959c-fa4c582cc846"
  },
  {
    "percentage": 7,
    "label": "Articles de sport",
    "id": "92c037b9-c9e7-4aa8-b6a9-58c9ec1535e0"
  },
  {
    "percentage": 6,
    "label": "Pneus",
    "id": "2da3c33a-df0f-43e0-aeee-881e09c2c0f0"
  },
  {
    "percentage": 8,
    "label": "Beauté, Santé, epiceries",
    "id": "515fabad-2977-4c38-9f96-3033d262f2ee"
  },
  {
    "percentage": 5,
    "label": "Travail métallurgique",
    "id": "558ec8ab-30c5-4b09-870a-63017772465a"
  },
  {
    "percentage": 5,
    "label": "Vetements, chaussures",
    "id": "efa0ff09-0a09-4fb0-82ba-7c2cb382b416"
  },
  {
    "percentage": 4,
    "label": "Aliments & boissons",
    "id": "ffd74d35-13f7-4503-bbd4-6d70e375b022"
  },
  {
    "percentage": 5,
    "label": "Emballages & impressions",
    "id": "46223168-eb74-4251-b5ae-80ef6c817ae3"
  },
  {
    "percentage": 5,
    "label": "Jouets, enfants, bébés",
    "id": "d87cfaa5-28d0-4162-a2f4-3b69b9059d58"
  },
  {
    "percentage": 10,
    "label": "Services commerciaux",
    "id": "783f9b73-6ca2-46c4-a128-55aa4b2be818"
  },
  {
    "percentage": 5,
    "label": "Parfums & bien être",
    "id": "f0f08129-9987-4150-a608-132f0c37b3aa"
  },
  {
    "percentage": 7,
    "label": "Lumières & éclairages",
    "id": "6be7786c-98a5-4de3-94bc-c576979759f7"
  },
  {
    "percentage": 8,
    "label": "Sanitaire",
    "id": "1531ba05-d023-4bd7-a2f4-53482a9ac9dc"
  },
  {
    "percentage": 8,
    "label": "Horlogerie, bijouterie, lunetterie",
    "id": "598392db-20d3-48f0-be1b-0e22c87a4756"
  },
  {
    "percentage": 10,
    "label": "Véhicules & accessoires",
    "id": "aeb4309c-ebc4-4054-b0db-6744e02710bc"
  },
  {
    "percentage": 10,
    "label": "Produits chimiques",
    "id": "0b26f54e-a40e-4d59-9302-c10a6c734b82"
  }
]

const subscriptions = [
  {
    "label": "Bronze",
    "id": "90819173-1744-40e6-b3d9-d0a6f74e22c1"
  },
  {
    "label": "Argent",
    "id": "cf557f30-bcbb-41a8-855e-56616a59cf96"
  },
  {
    "label": "Or",
    "id": "7ca6408c-adcf-4929-80de-f5c0822ae12f"
  },
  {
    "label": "Diamant",
    "id": "f30e2b79-8dbb-49aa-8311-8a57df9170cf"
  }
]

const getImages = (o) => {
  for (const [key, value] of Object.entries(o)) {
    images.push(value);
  }
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

  const { event: { op, data } } = JSON.parse(event.body);

  console.log(op);

  // env vars
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
  const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;

  var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
  var index = client.initIndex('test_LIKBAY');


  if(data.new.images)
    getImages(data.new.images)

  const newProduct = {
      "objectID": data.new.id,
      "nom": data.new.nom,
      "category": categories.find(x => x.id === data.new.category).label,
      "detail": data.new.detail,
      "etat": data.new.etat,
      "marque": data.new.marque,
      "prix": data.new.prix,
      "subscription": subscriptions.find(x => x.id === data.new.subscription).label,
      "coupon": data.new.coupon,
      "guarantie": data.new.guarantie,
      "images": images,
      "poids": data.new.poids
    };

  console.log(data);
  console.log(newProduct);

  switch (op) {
    case 'INSERT':
      index.addObjects([newProduct], function(err, content) {
        if (err) {
          console.error(err);
          res.json({error: true, data: err});
          return;
        }
        console.log(content);
        res.json({error: false, data: content});
      });

      break;
    case 'UPDATE':
      index.saveObjects([newProduct], function(err, content) {
        if (err) {
          console.error(err);
          res.json({error: true, data: err});
          return;
        }
        console.log(content);
        res.json({error: false, data: content});
      });

      break;
    case 'DELETE':
      index.deleteObjects([data.old.objectID], function(err, content) {
        if (err) {
          console.error(err);
          res.json({error: true, data: err});
          return;
        }
        console.log(content);
        res.json({error: false, data: content});
      });

      break;
    default:
      console.log(`Sorry, we are out of ${op}.`);
  }

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