




Project = P.content;


// Ordena projetos por UA primeiro e então por titulo
function UASort(){

}


// Pega Descrição de todos os Projetos;
// Receber valores individualmente dos tres tipos de projetos.
function getDescription(){
    let i = 0;
    let len = Project.length;
    let array;
    for ( i ; i<len ; i++ ){
        array += Project[i].resumo_projeto;
    }
    return array;
}

// Conta as repetições de palavras nas descrições.
// Falta remover palavras menores que 3 letras.
function countWords(){
    let array = getDescription();
    let words = array.replace(/[^a-zA-Z ]/g, "").split(" ");


    obj = {};
    let i = 0;
    let len = words.length

    for (i = 0; i < len; i++) {
        if (obj[words[i]] === undefined) {
            obj[words[i]] = 1;
        } else {
            obj[words[i]]++;
        }
    }
}








// Pega Projetos de Ensino
function getEnsino(){
    let i = 0;
    let len = Project.length;
    let Ensino;
    for ( i ; i<len ; i++ ){
        if (Project[i].tipo_projeto.indexOf("Ensino") > -1) {
            //Criar Array de Objetos;
            //console.log(Project[i]);
        }
    }
    return Ensino;
}

// Pega Projetos de Extensão
function getExtensao(){
    let i = 0;
    let len = Project.length;
    let Extensao;
    for ( i ; i<len ; i++ ){
        if (Project[i].tipo_projeto.indexOf("Extensão") > -1) {
            //Criar Array de Objetos;
            //console.log(Project[i]);
        }
    }
    return Extensao;
}

// Pega Projetos de Pesquisa
function getPesquisa(){
    let i = 0;
    let len = Project.length;
    let Pesquisa;
    for ( i ; i<len ; i++ ){
        if (Project[i].tipo_projeto.indexOf("Pesquisa") > -1) {
            //Criar Array de Objetos;
            //console.log(Project[i]);
        }
    }
    return Pesquisa;
}



