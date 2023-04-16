/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if(employee.profession === 'developer'){
      console.log(employee)
    }
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if(employee.profession === 'developer'){
      console.log(employee)
    }
  })
}

function addData() {
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newEmployee);
  console.log(newEmployee)
}

function removeAdmin() {
  const otherEmployees = arr.filter((employee) => {
    return  employee.profession !== 'admin'
  })

  console.log(otherEmployees)
}

function concatenateArray() {
  let newArr = [
    { id: 10, name: "Muskan", age: "22", profession: "sales" },
    { id: 22, name: "jack", age: "21", profession: "manager" },
    { id: 33, name: "karen", age: "24", profession: "product engineer" },
  ]

  const concantArray = [] 

  arr.forEach((emp) => {
    concantArray.push(emp)
  })

  newArr.forEach((emp) => {
    concantArray.push(emp);
  })

  console.log(concantArray)
}
