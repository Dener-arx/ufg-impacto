





// Pega conjunto de Ingressos do mesmo ano
function IngressosByDate(value){
    let Ingressos = groupIngressos(In);
    let i;
    for( i=0 ; i<Ingressos.length ; i++ ){
        if ( value === Ingressos[i].Ano_Ingresso ){
            return Ingressos[i].row;
        }
    }
}

//Pega Conjunto de Estudantes agrupados por Municipio e Curso
function getEstudantes(){

    let Estudantes = groupEstudantes(Es);
    return Estudantes;

}

// Pega conjunto de desvinculos do mesmo ano
function DesvinculosByDate(value){
    let Desvinculos = groupoDesvinculos(De);
    let i;
    for( i=0 ; i<Desvinculos.length ; i++ ){
        if ( value === Desvinculos[i].Ano_desvinculo ){
            return Desvinculos[i].row;
        }
    }

}

//Agrupa Ingressos
function groupIngressos(Array){
    let map = Array.reduce((r, { Ano_Ingresso,...rest }) => {
        let key = `${Ano_Ingresso}`;
        r[key] = r[key] || { Ano_Ingresso, row: [] };
        r[key]["row"].push(rest)
        return r;
      }, {})
      
      Array = Object.values(map)
      return Array
}

//Agrupa Estudantes
function groupEstudantes(Array){
    let map = Array.reduce((r, { Municipio, Curso, ...rest }) => {
        let key = `${Municipio}-${Curso}`;
        r[key] = r[key] || { Municipio, Curso, row: [] };
        r[key]["row"].push(rest)
        return r;
      }, {})
      
      Array = Object.values(map)
    
    map = Array.reduce((r, { Municipio, ...rest }) => {
        let key = `${Municipio}`;
        r[key] = r[key] || { Municipio, Cursos: [] };
        r[key]["Cursos"].push(rest)
        return r;
      }, {})
    
      Array = Object.values(map)

    return Array

}

//Agrupa Desvinculos
function groupoDesvinculos(Array){
    
    let map = Array.reduce((r, { Ano_desvinculo,...rest }) => {
        let key = `${Ano_desvinculo}`;
        r[key] = r[key] || { Ano_desvinculo, row: [] };
        r[key]["row"].push(rest)
        return r;
      }, {})
      
      Array = Object.values(map)
      return Array

}


