const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const orderBy = (listaAlunos,atributoOrdenacao,atributoVisualizacao) =>{
    var resultado = [];
    var atributo = [];
    atributo.push(atributoOrdenacao);
    atributo.push(atributoVisualizacao);
    listaAlunos.forEach(alunos => {
        var aux = {};
        atributo.map(atributos =>{
            aux[atributos] = alunos[atributos];
        })
        resultado.push(aux);
        resultado.sort((a,b)=>a.nota-b.nota);
    });
    return resultado;
}


console.log("Array original",alunos);

console.log("Funcao OrderBy",orderBy(alunos, 'nota', 'nome'));