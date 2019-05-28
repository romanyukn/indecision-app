// You can redefine a VAR

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//You can NOT redefine LET but you can reassign

let nameLet = 'Joe';
//let nameLet = 'Julie'; NO
nameLet = 'Julie';
console.log('nameLet', nameLet);

//You can NOT redefine and reassign CONST
const nameConst = 'Kate';
//nameConst = 'Mary'; NO
//const nameConst = 'Mary'; NO
console.log('nameConst', nameConst);