// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Balloon Latam",
    about: "Creación de producto infantil en coordinación con una agrupación de artesanos, en Melipeuco.",
}, {
    figure: "media/foto-02.jpg",
    title: "Mujeres Campesinas de Melipeuco",
    about: "Elaboración de una identidad de marca para la misma agrupación con la que se trabajó.",
}, {
    figure: "media/foto-03.jpg",
    title: "Maggi",
    about: "Rediseño de la caluga Maggi tanto en Packaging como producto alimenticio.",
}, {
    figure: "media/foto-04.jpg",
    title: "Rediseño",
    about: "Un Packaging fácil de reciclar como de abrir, conservando mejor su contenido.",
}, {
    figure: "media/foto-05.jpg",
    title: "CONAF",
    about: "Una mochila de emergencia para evacuar rápidamente a personas con movilidad reducida.",
}, {
    figure: "media/foto-06.jpg",
    title: "Manual",
    about: "Instrucciones gráficas sencillas y de fácil recordatorio para el usuario, intuitivo.",
}, {
    figure: "media/foto-07.jpg",
    title: "Parquemet zoológico Metropolitano de Santiago",
    about: "Mejoramiento del recinto de los lémures de cola anillada, desarrollo de un puente disuasivo.",
}, {
    figure: "media/foto-08.jpg",
    title: "SAUTER",
    about: "Producto fabricado con sandalias reutilizables, sirviendo como plataforma de salto.",
}, {
    figure: "media/foto-09.jpg",
    title: "Manual",
    about: "Instalación sencilla, adaptable a distintos árboles para engancharse, rebote seguro.",
}, {
    figure: "media/foto-010.jpg",
    title: "Luminaria",
    about: "Luminaria de acompañamiento por las noches e insomnios recurrentes.",
}, {
    figure: "media/foto-011.jpg",
    title: "Construcción",
    about: "Pensado como un espantacuco, refleja luces de diferentes colores chochando al medio de sólido.",
}, {
    figure: "media/foto-012.jpg",
    title: "Silla",
    about: "Mueblería diseñada para inducción, pensadas para contextos en Malls o zonas recreativas.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
