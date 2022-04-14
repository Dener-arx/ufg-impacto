





// Retorna ingressos do ano recebido.
function getDateIngressos(value){

    data = IngressosByDate(value);
    return data

}

// Retorna dados de estudantes agrupados por municipio e cursos
function getEstudantesData(){

    data = getEstudantes();
    return data;

}

// Retorna desvinculos do ano recebido.
function getDateDesvinculo(value){
    
    data = DesvinculosByDate(value);
    return data

}