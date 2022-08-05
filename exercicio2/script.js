let idade = 18;
let isConcluiuEnsinoMedio = true ;
let isCursandoOutraFaculdade = true;

if( idade >= 18 && isConcluiuEnsinoMedio && !isCursandoOutraFaculdade ){
    console.log("Essa pessoa é maior de idade, terminou o ensino médio e não está cursando faculdade.")
} else if ( idade < 18 && !isConcluiuEnsinoMedio ) {
    console.log("Essa pessoa não é maior de idade e não terminou o ensino médio.")
} else  if ( idade >= 18 && !isConcluiuEnsinoMedio ) {
    console.log("Essa pessoa é maior de idade e ainda não terminou o ensino medio.")
} else { 
    console.log("Dados invalidos.")
}
