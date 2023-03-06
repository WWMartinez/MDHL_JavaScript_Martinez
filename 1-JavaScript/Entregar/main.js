let miNombre = prompt("Ingrese su nombre: ")
let miApellido = prompt("Ingrese su apellido: ")
let miEdad = parseInt(prompt("Ingrese su edad: "))
let miMascota = prompt("Ingrese el nombre de su mascota: ")
let edadMascota = parseInt(prompt("Ingrese la edad de su mascota: "))

alert("Nombre: " + miNombre + "\nApellido: " + miApellido + "\nEdad: " + miEdad + "\nMascota: " + miMascota + "\nEdad de la mascota: " + edadMascota)

let nombreCompleto = miNombre.concat(" " ,miApellido)
alert("Su nombre completo es: " + nombreCompleto)

alert("Nombre Completo: " + nombreCompleto + "\nNombre: " + miNombre + "\nApellido: " + miApellido + "\nEdad: " + miEdad + "\nMascota: " + miMascota + "\nEdad de la mascota: " + edadMascota)

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

alert("Suma de edades: " + sumaEdades + "\nResta de edades: " + restaEdades + "\nProducto de edades: " + productoEdades + "\nDivision de edades: " + divisionEdades)

var alumno = {
    nombre: "Lautaro",
    apellido : "Martinez",
    edad : 21,
    estudios : "MindHub",
    pendiente : "Task2"
}

console.table(alumno);