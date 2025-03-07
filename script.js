/*Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente 
os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura das pessoas do gênero Masculino;
- O número de pessoas do gênero Feminino.*/

const pessoas = [
    { altura: 1.70, genero: 'Masculino' },
    { altura: 1.79, genero: 'Feminino' },
    { altura: 1.60, genero: 'Masculino' },
    { altura: 1.75, genero: 'Feminino' },
    { altura: 1.85, genero: 'Masculino' },
    { altura: 1.70, genero: 'Feminino' },
    { altura: 1.90, genero: 'Masculino' },
    { altura: 1.55, genero: 'Feminino' },
    { altura: 1.77, genero: 'Masculino' },
    { altura: 1.66, genero: 'Feminino' },
    { altura: 1.80, genero: 'Masculino' },
    { altura: 1.73, genero: 'Feminino' },
    { altura: 1.79, genero: 'Masculino' },
    { altura: 1.65, genero: 'Feminino' },
    { altura: 1.92, genero: 'Masculino' }
];

let maiorAltura = -Infinity;
let menorAltura = Infinity;
let somaAlturaMasculino = 0;
let contadorMasculino = 0;
let contadorFeminino = 0;

for (let i = 0; i < pessoas.length; i++) {
    let pessoa = pessoas[i];

    if (pessoa.altura > maiorAltura) {
        maiorAltura = pessoa.altura;
    }

    if (pessoa.altura < menorAltura) {
        menorAltura = pessoa.altura;
    }

    if (pessoa.genero === 'Masculino') {
        somaAlturaMasculino += pessoa.altura;
        contadorMasculino++;
    }

    if (pessoa.genero === 'Feminino') {
        contadorFeminino++;
    }
}

let mediaAlturaMasculino = 0;
if (contadorMasculino > 0) {
    mediaAlturaMasculino = somaAlturaMasculino / contadorMasculino;
}

console.log("Maior altura:", maiorAltura, "metros");
console.log("Menor altura:", menorAltura, "metros");
console.log("Média de altura dos homens:", mediaAlturaMasculino.toFixed(2), "metros");
console.log("Número de mulheres:", contadorFeminino);

let resultado = `
    <p><strong>Maior altura:</strong> ${maiorAltura} metros</p>
    <p><strong>Menor altura:</strong> ${menorAltura} metros</p>
    <p><strong>Média de altura dos homens:</strong> ${mediaAlturaMasculino.toFixed(2)} metros</p>
    <p><strong>Número de mulheres:</strong> ${contadorFeminino}</p>
`;

document.getElementById('resultado').innerHTML = resultado;
