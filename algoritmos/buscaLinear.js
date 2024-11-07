function buscaLinear(list, item) {
    let i = 0
    while (list[i] !== item) {
        i++
    }
    console.log(`${i}ª tentativas: o item que desejado é ${item}`)
}