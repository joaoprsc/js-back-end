const quadrado = function(x){
    return x * x;
}

console.log(quadrado(12))

console.log(Math.sqrt(144))

function frasepronta(nome, sobrenome){
return `Boa noite Sr ${nome} ${sobrenome}`;
}

console.log(frasepronta("Joao","Priscio"))


function soma(num1,num2){
    return num1 + num2;
}

function multiplica(n1,n2){
    return n1 * n2;
}

console.log(multiplica(soma(1,1), soma(1,1)))