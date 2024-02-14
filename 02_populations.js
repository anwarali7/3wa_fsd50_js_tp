console.log('####################');

const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

// 1.
populations.sort((a, b) => a.name.length - b.name.length);
console.log("\n\n1.\nTableau populations trié par ordre croissant de longueur de nom");
console.table(populations);

// 2.
populations.forEach((person) => {
  person.lenName = person.name.length;
})
console.log("\n\n2.\nTableau populations avec longueur de nom");
console.table(populations);

// 3.
const groupNames = populations.reduce((acc, person) => {
  if (acc.length === 0) {
    acc.push([person]);
    return acc;
  }
  const lastGroup = acc.at(-1);
  const lastPerson = lastGroup.at(-1);
  if (lastPerson.lenName === person.lenName) {
    lastGroup.push(person);
    return acc;
  }
  acc.push([person]);
  return acc;
}, []);

console.log("\n\n3.\nPersonnes regroupées par longueur de nom");
console.log(groupNames);

// 4.
const relations = [
  { id: 0, relation: [1, 2, 4] },
  { id: 3, relation: [7, 8] },
  { id: 4, relation: [2, 7, 8, 11] },
  { id: 5, relation: [1, 2, 4] },
  { id: 7, relation: [2, 3, 5, 9] },
  { id: 9, relation: [1, 2, 4, 8, 11] },
  { id: 11, relation: [1, 2, 9, 10,] },
]

populations.forEach((person) => {
  person.relations = [];

  // person.relation = relations.relation;

  // Trouver les relations de la personne (find)
  const found = relations.find((relation) => {
    return relation.id === person.id
  })

  if (found === undefined) {
    return;
  }

  // console.log(found)
  const relationIds = found.relation;
  // console.log(relationIds);

  relationIds.forEach((relationId) => {
    const relationName = (populations.find((p) => p.id === relationId)).name;
    person.relations.push(relationName);
  })

  // console.log(person);

})
console.log("\n\n4.\nTableau populations avec relations");
console.table(populations);


populations.sort((a, b) => a.relations.length - b.relations.length);
console.log("\n\n4.\nTableau populations trié par ordre croissant de nombre de relations");
console.table(populations);

const maxRelations = populations.at(-1);
console.log("\n\n4.\nLa personne qui a le plus de relations: ", maxRelations);
