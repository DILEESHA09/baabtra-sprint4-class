document.write('external js')
a = 10
b = "20"

 name = "dileesha    khasna "
marks = [ 50,60,70,80]
student = {
    name:"dileesha",
    isactve:true,
    age:25,
    place:"calicut",
    address:{
        street_name:"vellimadukunnu",
        city: "calicut",
        zipcode: 673012
    }
}

console.log(a)
console.log(b)
console.log(name)
console.log(marks)
console.log(student)

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(name))
console.log(typeof(marks))
console.log(typeof(student))
console.log(typeof(student.isactve))

console.log(marks[3])
console.log(student.address)
console.log(student.address.city)
console.log(student["name"])
console.log(student["age"])
