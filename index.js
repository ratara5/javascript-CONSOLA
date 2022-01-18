//console.assert(5<3) error en la aserción
console.assert(5>3)
console.log("hola")
document.write("hola")
//console.clear() //on websites
console.error('¿Qué hiciste?')
console.info('Info, se usa más el console.log') //console.log en un mensaje de depuración
//console.clear() //a pesar del clear, las varianbles quedan almacenadas (?)
console.table([1,2,3,4,5,6,7,8]) //dar F5
console.warn('precacución')
console.dir([1,2,3,4,5,6,7,8]) //provee más info que el .table
console.count()
console.count()
console.count()
console.count()
console.count()
console.countReset()
console.count()
console.countReset() //contar cuántas veces se ejecuta la función
function sumar(num1,num2){
    num1+num2
    console.count()
}

sumar(1,2)
sumar(1,2)
sumar(1,2)
sumar(1,2)
sumar(1,2)

console.group("grupo")
console.group("subgrupo")
console.group("subsubgrupo")
console.groupEnd("subsubgrupo") //salir del grupo 'subsubgrupo'
console.groupEnd("grupo") //salir del grupo 'grupo'

console.clear()

console.time() //initialize
console.timeLog() //register
console.timeEnd() //finish

console.log("%cTexto", "color:red;background:black;padding:20px 100px;border:3px solid blue")
