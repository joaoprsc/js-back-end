const nomes = ['Pedro', 'Ana', 'Ale', 'Adriel', 'Paula'];
const notas = [10,8,5,7,9];

let listaNotasAlunos = [nomes,notas];

for(let i=0;i<=4;i++){
    console.log(`Aluno ${listaNotasAlunos[0][i]}, tirou nota ${listaNotasAlunos[1][i]}`);
}