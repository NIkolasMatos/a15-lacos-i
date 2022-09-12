let coxinha = prompt('Você aceita uma coxinha? [S/N]')
let valor = 0
let coxa = 0

while (coxinha.toUpperCase() === 'S') {
    coxinha = prompt('Você aceita uma coxinha? [S/N]')
    valor += 2.5
    coxa += 1
}
console.log(`Já está satisfeito? Ok você comeu ${coxa} coxinhas, sua conta deu ${valor} reais.`)