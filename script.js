let meuArray = ["cachorro", "gato", "coelho", "calopsita", "cobra"];

for(let i = 0; i < meuArray.length; i = i += 1) {
    console.log(meuArray[i]);
};



//let var1 = 5;
//let var2 = 4;

//let resultado1 = var1 + var2;

//console.log(resultado1);
//console.log(typeof(resultado1));

let variavelArray = [5,4,8,9,"abc", -7];
console.log(variavelArray[0]);

let variavelObjeto = {
    nome: "Alexis",
    idade: 21,
    altura: "180cm",
    cpf: "084.916.171-16",
    endereco: {
        rua: "abc",
        bairro: "sobral",
        numero: 212,
        apartamento: {
            tamanho: "35m2",
            danos: "SIM"
        }
    }
};

console.log(variavelObjeto);

console.log(variavelObjeto.nome);

console.log(variavelObjeto.endereco.apartamento.danos);

if (variavelObjeto.idade > 17){
    console.log("Ele vai jogar di bola")
} else {
    console.log("Meu fi quer jogar di bola?")
};


/*
let variavel1 = 0;
variavel1 = "sarrador profissional, berti lucas"

const PI = 3.14;

console.log(typeof(variavel1));

PI = 3.15;
*/