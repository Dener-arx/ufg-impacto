





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


// Pega Projetos pelo Tipo
function getProjectByType(value){
    
    if (value === "Ensino" ){
        return Ensino;
    }
    if (value === "Extensão" ){
        return Extensao;
    }
    if (value === "Pesquisa" ){
        return Pesquisa;
    }

}

// Pega Projetos por palavra na descrição
function getProjectByWord(value, Entry){
    let i = 0;
    let len = Entry.length;
    let Array = [];


    for ( i ; i<len ; i++ ){
        if (Entry[i].resumo_projeto.includes(value)) {
            Array.push(Entry[i]);
        }
        
    }

    return Array;
}

// Pega Descrição de Projetos;
function getDescription(Entry){
    let i = 0;
    let len = Entry.length;
    let text;
    for ( i ; i<len ; i++ ){
        text += Entry[i].resumo_projeto;
    }
    text = filterWords(text);



    return text;


}

// Conta as repetições de palavras nas descrições.
// Falta remover palavras menores que 3 letras.
function filterWords(text){
    let words = text.replace(/[,.-]/g, '').split(" ");

    let array = [];
    let i = 0;

    for (let i = 0; i < words.length; i++) {
        let exists = array.findIndex(a => a.name.toLowerCase() === words[i].toLowerCase());
        if (exists > -1) array[exists].weight++;
        else array.push({
          name: words[i],
          weight: 1
        });
    }

    let array2 = [];

    for ( i = 0 ; i<array.length ; i++ ){
        if(array[i].name.length > 6 ){
            if( array[i].weight > 5 ){
                array2.push(array[i]);
            }
        }
    }

    // Ensino Name.length > 4 e Weight > 1 

    return array2;

    
}





