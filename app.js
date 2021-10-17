
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var arrExt = ['.net', '.com', '.io', '.es'];
let pronombre;
let adjetivo;
let nombre;


for (let i=0; i<pronoun.length; i++) {
    pronombre = pronoun[i];
    for (let j=0; j<adj.length; j++) {
        adjetivo = adj[j];
        for (let n=0; n<noun.length; n++) {
            nombre = noun[n];
            for (let m=0; m<arrExt.length;m++) {
                console.log(pronombre + adjetivo + nombre + arrExt[m]);
            }
        }
    }

}

//act

