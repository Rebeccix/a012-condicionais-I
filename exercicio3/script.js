const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase();

const nacionalidadeSliced = nacionalidade.slice(0, nacionalidade.length - 1)

if ( nacionalidadeSliced === 'brasileir') {
    console.log("Nacionalidade Brasileiro(a)")
} else if ( nacionalidadeSliced === 'argentin') {
    console.log("Nacionalidade Argentino(a)")
} else if ( nacionalidadeSliced === 'uruguai') {
    console.log("Nacionalidade Uruguaio(a)")
} else if ( nacionalidadeSliced === 'chilen') {
    console.log("Nacionalidade Chileno(a)")
} else if ( nacionalidadeSliced === 'colombian') {
    console.log("Nacionalidade Colombiano(a)")
} else { 
    console.log("Nacionalidade não encontrada.")
}