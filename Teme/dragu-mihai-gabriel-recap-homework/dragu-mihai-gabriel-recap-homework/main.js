//Write example for object & example for array

const personMike = {
//  'first-name': 'Mike',
//  'last-name': Jhonson
};
personMike['first-name'] = 'Mike';
personMike['last-name'] = 'Jhonson';
console.log(personMike);  


const personJulia = {
//  'first-name': 'Julia',
//  'last-name': 'Robertson'
};
personJulia['first-name'] = 'Julia';
personJulia['last-name'] = 'Robertson';
console.log(personJulia);

const personRemy = {
//  'first-name': 'Remy',
//  'last-name': 'Lebeau'
};
personRemy['first-name'] = 'Remy';
personRemy['last-name'] = 'Lebeau';
console.log(personRemy);


let listOfPersons = [personMike, personJulia, personRemy];
console.log(listOfPersons);

listOfPersons[1]['age'] = 25;
console.log(listOfPersons);