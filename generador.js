N = process.argv[2];
let registros = [];

const asignaturas = [
    {clave: 33524, nombre: "Álgebra Superior"},
    {clave: 33533, nombre: "Química"},
    {clave: 33538, nombre: "Electricidad y Magnetismo"},
    {clave: 33556, nombre: "Ingeniería Económica"},
    {clave: 36293, nombre: "Inteligencia Artificial"},
    {clave: 36299, nombre: "Sistemas Operativos"}
];

function incializarCreditos() {
    return Math.floor(Math.random() * (9 - 4) + 4);
}

function incializarCalificación() {
    return Math.fround(Math.random() * 101).toFixed(2);
}

function inicializarFecha() {
    const min = new Date(2021, 0, 1);
    const max = new Date(2023, 5, 30);
    return new Date(Math.random() * (max.getTime() - min.getTime()) + min.getTime());
}

function generar(N, registros) {
    for(let i = 0; i < N; i++) {
        const asignatura = asignaturas[Math.floor(Math.random() * asignaturas.length)];
        registros.push(new Object);
        registros[i].clave = asignatura.clave;
        registros[i].creditos = incializarCreditos();
        registros[i].nombre = asignatura.nombre;
        registros[i].calificacion = incializarCalificación();
        registros[i].fecha = inicializarFecha();
    }
}

try {
    if(isNaN(N) || N <= 0) {
        throw new Error("La cantidad de registros a generar no puede ser menor que 1.")
    } 

    generar(N, registros);

    console.log(N + " registros creados: ");
    console.log(registros);

    const limite = new Date(2022, 0, 1);
    const filtrado = registros.filter((registro) => (registro.calificacion > 59 && registro.fecha > limite));
    const mapeado = filtrado.map(filtrado => ({
        clave: filtrado.clave,
        calificacion: filtrado.calificacion,
        fechaStr: `${filtrado.fecha.getFullYear()}/${filtrado.fecha.getMonth() + 1}/${filtrado.fecha.getDate()}`
    }));
    console.log("Registros con calificación mayor que 59 y fecha posterior a 2022/01/01:");
    console.log(mapeado);

} catch(Error){
    console.error(Error.message);
}