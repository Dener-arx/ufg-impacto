







function Select(value){

    let Choice = getProjectByType(value);

    Choice = getDescription(Choice);
    return Choice;
}


//Search("cultura", Extensao )

function Search(value, Entry){

    let Array = getProjectByWord(value, Entry);

    console.log(Array);
}
