// Write your solution in this file!
const employee = {
    name:"jamie",

    streetAddress:{
        position:"24 ,gelnwood",
        code:"70002",
        city:"alexadria"

    },

};

function updateEmployeeWithKeyAndValue(employee,key,value) {
     
    const newEmployee={...employee};
    newEmployee[key]=value
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

employee[key]=value;
return employee;    

};
function deleteFromEmployeeByKey(employee,key){

    const nwemployee={...employee};
    delete nwemployee.key;

    return nwemployee;
};

 