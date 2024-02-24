const ataqueGolpe = function() {
    return "Atacando con golpe demoledor";
}

const ataqueRayo = function() {
    return "Atacando con rayo fulminante";
}

const ataquePatada = function() {
    return "Atacando con patada destructora";
}

const ataqueFuego = function() {
    return "Atacando con lanzallamas infernal";
}

const ataqueExplosivo = function() {
    return "Atacando con bombas explosivas";
}

let atacar = function(ataque) {
    return function(atacado) {
        return ataque() + " a " + atacado;
    }
}

console.log(atacar(ataqueExplosivo)('Personaje 1'));
console.log(atacar(ataqueFuego)('Personaje 2'));
console.log(atacar(ataqueGolpe)('Personaje 1'));
console.log(atacar(ataquePatada)('Personaje 2'));