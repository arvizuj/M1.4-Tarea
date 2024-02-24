const servicio = require("./servicioDatosP");

async function procesoDatos() {
    try {
        await servicio.getDatos(1, 3000);
        await servicio.getDatos(2, 500);
        await servicio.getDatos(3, 4000);
        await servicio.getDatos(4, 700);
        await servicio.getDatos(5, 3500);
    } catch (error) {
        console.error(error);
    }
}
 
procesoDatos().then(() => {
    console.log('Programa terminado.');
})
.catch((error) => {
    console.error('Se ha presentado un error:', error);
});