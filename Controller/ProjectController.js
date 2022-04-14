













// Recebe valor de tipo de projeto e retorna projetos equivalentes 
function Select(value){

    let Choice = getProjectByType(value);

    Choice = groupProject(Choice);
    return Choice;

}




