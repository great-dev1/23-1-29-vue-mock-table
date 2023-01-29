import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

mock.onGet("/users", { parmas: { page: 0 } }).reply((config) => {
  const users = [
    {
      "id": 155,
      "firstName": "Ignacia",
      "lastName": "Motley"
    },
    {
      "id": 609,
      "firstName": "Hanh",
      "lastName": "Connelly"
    },
    {
      "id": 140,
      "firstName": "Yer",
      "lastName": "Sorenson"
    },
    {
      "id": 312,
      "firstName": "Flavia",
      "lastName": "Napier"
    },
    {
      "id": 716,
      "firstName": "Rubin",
      "lastName": "Razo"
    },
    {
      "id": 936,
      "firstName": "Janeen",
      "lastName": "Switzer"
    },
    {
      "id": 531,
      "firstName": "Jestine",
      "lastName": "Borrego"
    },
    {
      "id": 994,
      "firstName": "Na",
      "lastName": "Shearer"
    },
    {
      "id": 516,
      "firstName": "Arla",
      "lastName": "Britton"
    },
    {
      "id": 690,
      "firstName": "Caitlin",
      "lastName": "Thorne"
    },
    {
      "id": 565,
      "firstName": "Melynda",
      "lastName": "Segura"
    },
    {
      "id": 874,
      "firstName": "Leonie",
      "lastName": "Ruby"
    },
    {
      "id": 105,
      "firstName": "Bonny",
      "lastName": "Hillman"
    },
    {
      "id": 112,
      "firstName": "Epifania",
      "lastName": "Blum"
    },
    {
      "id": 606,
      "firstName": "Elisha",
      "lastName": "Cochrane"
    },
    {
      "id": 541,
      "firstName": "Sommer",
      "lastName": "Lear"
    },
    {
      "id": 857,
      "firstName": "Mavis",
      "lastName": "Guest"
    },
    {
      "id": 738,
      "firstName": "Nida",
      "lastName": "Kelso"
    },
    {
      "id": 367,
      "firstName": "Sheena",
      "lastName": "Holcomb"
    },
    {
      "id": 162,
      "firstName": "Giovanni",
      "lastName": "Pressley"
    },
    {
      "id": 365,
      "firstName": "Maisha",
      "lastName": "Rawlings"
    },
    {
      "id": 613,
      "firstName": "Lettie",
      "lastName": "Epps"
    },
    {
      "id": 433,
      "firstName": "Rocco",
      "lastName": "Gant"
    },
    {
      "id": 856,
      "firstName": "Tova",
      "lastName": "Coyle"
    },
    {
      "id": 896,
      "firstName": "Tari",
      "lastName": "Mancuso"
    },
    {
      "id": 79,
      "firstName": "Tora",
      "lastName": "Prince"
    },
    {
      "id": 59,
      "firstName": "Lashon",
      "lastName": "Dunaway"
    },
    {
      "id": 378,
      "firstName": "Corey",
      "lastName": "Schaffer"
    },
    {
      "id": 33,
      "firstName": "Nanci",
      "lastName": "Middleton"
    },
    {
      "id": 390,
      "firstName": "Carmon",
      "lastName": "Lavender"
    },
    {
      "id": 633,
      "firstName": "Tameika",
      "lastName": "Minter"
    },
    {
      "id": 109,
      "firstName": "Thalia",
      "lastName": "Thorn"
    },
    {
      "id": 489,
      "firstName": "Kesha",
      "lastName": "Montano"
    }
  ];

  const limit = 10;
  let { page } = config.params;

  return [200, {
    count: users.length,
    results: users.slice(page * limit, (page + 1) * limit)
  }]
});