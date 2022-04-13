






//
function Select(type){

    let array = getProjectByType(type);

    array = getDescription(array);
    return array;
}

// Busca projetos do tipo x que contem a palavra ''.
function Search(word, type){

    let Entry = getProjectByType(type);

    let Array = getProjectByWord(word, Entry);

    return Array;
}


