
let artistasPreferidos;
let mostrarCancionMasPopular;
const artistasMusicaClasica = ["Debussy", "Bach"];
const artistasKpop = ["The Rose", "Hopipolla"];

const artistaDebussy = {
    nombre: "Debussy",
    canciones: ["Sonata para violonchelo y piano", "En blanc et noir", "Sonata para flauta, viola y arpa", "Rapsodia para clarinete y piano", "Clair de Lune"],
    inicioCarrera: 1880 
}
let cancionPopularDebussy = "Clair de Lune";
let cancionPopularDebussyfind = 
artistaDebussy.canciones.find(function(cancion) {
    return cancion === cancionPopularDebussy;
})

let cancionesFiltradasDebussy =
artistaDebussy.canciones.filter(function(nombre){
    return nombre.length > 20;
});
const artistaBach = {
    nombre: "Bach",
    canciones: ["Cantata Herz und Mund und Tat und Leben, BWV 147", "Concierto de Brandeburgo No. 6 en si bemol mayor, BWV 1051", "Concierto de Brandeburgo No. 5 en re mayor, BWV 1050", "Concierto de Brandeburgo No. 4 en sol mayor, BWV 1049", "Tocata y fuga en re menor,  BWV 565"],
    inicioCarrera: 1651
}
let cancionPopularBach = "Tocata y fuga en re menor,  BWV 565";
let cancionPopularBachfind = 
artistaBach.canciones.find(function(cancion) {
    return cancion === cancionPopularBach;
})
const artistaTheRose = {
    nombre: "The Rose",
    canciones: ["Childhood", "Black rose", "Shift", "Yes", "Sorry"],
    inicioCarrera: 2017
}
let cancionPopularTheRose = "Sorry";
let cancionPopularTheRosefind = 
artistaTheRose.canciones.find(function(cancion) {
    return cancion === cancionPopularTheRose;
})
const artistaHopipolla = {
    nombre: "Hopipolla",
    canciones: ["Unnatural", "Your ocean", "The love", "About time", "Our song"],
    inicioCarrera: 2019
}
let cancionPopularHopipolla = "About time";
let cancionPopularHopipollafind = 
artistaHopipolla.canciones.find(function(cancion) {
    return cancion === cancionPopularHopipolla;
})




let estiloPreferido = prompt(`Escoge tu estilo musical favorito (escribe el número a continuación).\n 1-. Música clásica\n 2-. K-pop`);

if (estiloPreferido == 1) {
   alert("Estos son algunos artistas de música clásica:\n" + artistasMusicaClasica.join("\n"));
    artistasPreferidos = prompt("¿De qué artista quieres que te muestre canciones? (Escribe el nombre en mayúsulas)\n" + artistasMusicaClasica.join("\n"));

    if (artistasPreferidos === "DEBUSSY") {
       alert("Estos son algunas de sus piezas musicales:\n" + artistaDebussy.canciones.join("\n"));
       mostrarCancionMasPopular = prompt("¿Deseas que te muestre la más popular? (Escribe SI o NO)")

       if (mostrarCancionMasPopular === "SI") {
        alert("Esta es la pieza más popular de Debussy:\n " + cancionPopularDebussyfind);
     } else if (mostrarCancionMasPopular === "NO") {
        alert("Muy bien :)");
     } else {
        alert("Opción no válida");
     }

    } else if (artistasPreferidos === "BACH") {
       alert("Estos son algunas de sus piezas musicales:\n" + artistaBach.canciones.join("\n"));
       mostrarCancionMasPopular = prompt("¿Deseas que te muestre la más popular? (Escribe SI o NO)")

       if (mostrarCancionMasPopular === "SI") {
        alert("Esta es la pieza más popular de Bach:\n" + cancionPopularBachfind);
     } else if (mostrarCancionMasPopular === "NO") {
        alert("Muy bien :)");
     } else {
        alert("Opción no válida");
     }
    } else {
       alert("Opción no válida");
    }

} else if (estiloPreferido == 2) {
   alert("Estos son algunos artistas de K-pop:\n" + artistasKpop.join("\n"));
    artistasPreferidos = prompt("¿De qué artista quieres que te muestre canciones? (Escribe el nombre en mayúsulas)\n" + artistasKpop.join("\n"));
    
    if (artistasPreferidos === "THE ROSE") {
       alert("Estos son algunas de sus canciones son:\n" + artistaTheRose.canciones.join("\n"));
       mostrarCancionMasPopular = prompt("¿Deseas que te muestre la más popular? (Escribe SI o NO)")

       if (mostrarCancionMasPopular === "SI") {
        alert("Esta es la pieza más popular de The Rose:\n" + cancionPopularTheRosefind);
     } else if (mostrarCancionMasPopular === "NO") {
        alert("Muy bien :)");
     } else {
        alert("Opción no válida");
     }
    } else if (artistasPreferidos === "HOPIPOLLA") {
       alert("Estos son algunas de sus canciones son:\n" + artistaHopipolla.canciones.join("\n"));
       mostrarCancionMasPopular = prompt("¿Deseas que te muestre la más popular? (Escribe SI o NO)")

       if (mostrarCancionMasPopular === "SI") {
        alert("Esta es la pieza más popular de Hopipolla:\n" + cancionPopularHopipollafind);
     } else if (mostrarCancionMasPopular === "NO") {
        alert("Muy bien :)");
     } else {
        alert("Opción no válida");
     }
    } else {
       alert("Opción no válida");
    }
} else {
   alert("Opción no válida");
}


    
console.log(cancionesFiltradasDebussy)