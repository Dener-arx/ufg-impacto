













// Functions called from Projetos 
function Select(value){

    let Choice = getProjectByType(value);

    Choice = groupProject(Choice);
    return Choice;

}




