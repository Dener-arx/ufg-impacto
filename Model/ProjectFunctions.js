





let Ensino = getType("Ensino");
let Extensao = getType("Extensão");
let Pesquisa = getType("Pesquisa");


// Pega Projetos pelo tipo 
function getType(type){
    let i = 0;
    let len = P.content.length;
    let Array = [];
    for ( i ; i<len ; i++ ){
        if (P.content[i].tipo_projeto.indexOf(type) > -1) {
            Array.push(P.content[i]);
        }
    }
    Array = UASort(Array);
    return Array;
}

// Ordena projetos por UA primeiro e então por titulo
function UASort(Entry){
    Entry.sort((a,b) => 
    a.nome_unidade_projeto.localeCompare(b.nome_unidade_projeto) ||
    a.titulo_projeto.localeCompare(b.titulo_projeto))
    return Entry;
}

// Agrupa Projetos por UA
function groupProject(Array){
    let map = Array.reduce((r, { id_unidade_projeto, sigla_unidade_projeto, nome_unidade_projeto,...rest }) => {
        let key = `${id_unidade_projeto}-${sigla_unidade_projeto}-${nome_unidade_projeto}`;
        r[key] = r[key] || { id_unidade_projeto, sigla_unidade_projeto, nome_unidade_projeto, Projects: [] };
        r[key]["Projects"].push(rest)
        return r;
      }, {})
      
      Array = Object.values(map)
      return Array
}

// Pega Descrição de Projetos;
function getDescription(Entry){
    let i = 0;
    let len = Entry.length;
    let array;
    for ( i ; i<len ; i++ ){
        array += Entry[i].resumo_projeto;
    }

    return array;
}

// Conta as repetições de palavras nas descrições.
// Falta remover palavras menores que 3 letras.
function countWords(array){
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
    return obj;
}





