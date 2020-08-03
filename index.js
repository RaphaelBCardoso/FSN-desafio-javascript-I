const NomeEscola = " Nova Escola";

// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
                      {nome:"Edson",notas:[],cursos:[],faltas:2},
                      {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
                      {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
                      {nome:"Carlos",notas:[],cursos:[],faltas:0},
                      {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação


function adicionarAluno(nome, notas, cursos, faltas){

    if(typeof nome === "string"){
        let novoAluno = {
            nome: nome,
            notas: [],
            cursos: [],
            faltas: faltas
        }
        alunosDaEscola.push(novoAluno);
        console.log("Aluno " + nome + " adicionado com sucesso!");
    }else{
        console.log("Desculpe, não foi possível adicionar o aluno.")
    }
}
    
const listarAlunos = () => {
    console.log("-".repeat(20));
    console.log(NomeEscola); 

alunosDaEscola.forEach((aluno) => {

console.log("-".repeat(20));
console.log("Nome: " + aluno.nome);
console.log("Nota: " + aluno.notas);
console.log("Curso: " + aluno.cursos.forEach(aluno => {
    console.log("Nome do curso: " + aluno.nomeDoCurso);
    console.log("Data da matricula: " + aluno.dataMatricula);
}));
console.log("Faltas: " + aluno.faltas);
console.log("-".repeat(20));
    });
};

listarAlunos();

// falta colocar mensagem de não encontrado
function buscarAlunos(nome) {
    let alunoEncontrado = alunosDaEscola.find(function(aluno) {
    if (aluno.nome == nome) {
        console.log ("Aluno " + nome + " encontrado");
    }
    }
)};

function matricularAluno (nome, curso) {
    if (aluno != undefined) {
        aluno.cursos.push(curso);
        let cursos = {
            nomeDoCurso: curso,
            data: new Date
        }
        console.log("Aluno " + nome + "matriculado no curso " + curso + "com sucesso.")
    }
}


function aplicarFalta(aluno) {
    if (aluno != undefined && aluno.cursos != "") {
        aluno.faltas = aluno.faltas ++;
        console.log("Falta cadastrada com sucesso.")
    } else {
        if (aluno = undefined) {
            console.log("Aluno não cadastrado.")
        } else {
            console.log("Aluno não matriculado em nenhum curso.")
        }
    }
}

aplicarFalta("Lucca");

function aplicarNota(aluno, nota) {
    if (aluno != undefined && aluno.cursos != "") {
        aluno.notas.push(nota);
        console.log("Nota cadastrada com sucesso.")
    } else {
        if (aluno = undefined) {
            console.log("Aluno não cadastrado.")
        } else {
            console.log("Aluno não matriculado em nenhum curso.")
        }
    }
}

function aprovarAluno(aluno){
//falta fazer.
}