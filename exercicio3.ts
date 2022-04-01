const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const pick = (listaAlunos,atributo1,atributo2)=>{
    
    var resultado = [];
    var atributo = [];
    atributo.push(atributo1);
    atributo.push(atributo2);
    listaAlunos.forEach(alunos => {

        var aux = {};
        atributo.map(atributos =>{
            aux[atributos] = alunos[atributos];
        })
        resultado.push(aux);
    });
    return resultado;
}

console.log("Array original",alunos);

console.log("Funcao pick",pick(alunos, 'nome', 'nota'));