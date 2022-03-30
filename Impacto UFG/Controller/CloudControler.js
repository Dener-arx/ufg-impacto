







function Select(value){

    let Choice = {};

    if (value === "Ensino" ){
        Choice = Ensino;
    }
    if (value === "Extensão" ){
        Choice = Extensao;
    }
    if (value === "Pesquisa" ){
        Choice = Pesquisa;
    }

    Choice = getDescription(Choice);
    return Choice;
}


