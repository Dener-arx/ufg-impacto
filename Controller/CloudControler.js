






// Recebe valor de tipo de projeto e retorna descrição de todos eles. 
function Select(type){

    let array = getProjectByType(type);

    array = getDescription(array, type);
    return array;
}

// Busca projetos do tipo 'type' que contem a palavra 'word'.
function Search(word, type){

    let Entry = getProjectByType(type);

    let Array = getProjectByWord(word, Entry);

    return Array;
}


