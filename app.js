// alert('Soy un alert');

// 1. entrada datos usuario para cambiar tema
// const seleccionTema = confirm('¿Deseas el tema oscuro en la landing?....');
// console.log(seleccionTema);

// 2. Evaluar la selección del usuario para escoger el tema
// console.log(document.querySelector('body').classList);
// if(seleccionTema) {
    //     document.querySelector('body').classList.add('dark');
    //     // console.log(document.querySelector('body'));
// }

// solucion 2
// let main = seleccionTema => {
//     return seleccionTema ? document.querySelector('body').classList.add('dark') : '';
// }

// main(seleccionTema);
// solucion 3
const seleccionTema2 = confirm('¿Deseas el tema oscuro en la landing?....') ? document.querySelector('body').classList.add('dark') : '';
// 3. ejecutar la seleccion