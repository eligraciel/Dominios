
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var arrExt = ['.net', '.us', '.io', '.es'];
let pronombre;
let adjetivo;
let nombre;


for (i=0; i<pronoun.length; i++) {
    pronombre = pronoun[i];
    for (j=0; j<adj.length; j++) {
        adjetivo = adj[j];
        for (n=0; n<noun.length; n++) {
            let ext = Math.floor(Math.random()*4);
            nombre = noun[n];
            console.log(pronombre + adjetivo + nombre + arrExt[ext]);
        }
    }

}

//act

