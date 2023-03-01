14 задание 1
const jsonString = '
{
  "list": [
    {
    "lang": "en",
    "name": "Ivan",
    "second": "Ivanov",
    "age": "35",
    "prof": "teacher"
  },
  {
    "lang": "ru",
    "name": "Petr",
    "second": "Petrov",
    "age": "58",
    "prof": "driver"
  }
]
}
';
const data = JSON.parse(jsonString);
const list = data.list;

const result = {
  category: list.category,
  lang: list.lang,
  name: list.name,
  second: list.second,
  age: list.value,
  prof: list.prof,
};
console.log('result', result);


14 задание 2
const json = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(json);
console.log(data);

