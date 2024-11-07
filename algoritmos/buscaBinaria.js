function binarySearch(list, item) {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]
       
        if (guess === item) {
            return mid
        } 
        else if(guess > item) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
        
    }
    return null
}
// function buscaLinear(list, item) {
//     let i = 0
//     while (list[i] !== item) {
//         i++
//     }
//     console.log(`${i}ª tentativas: o item que desejado é ${item}`)
// }

const arrayOrdenado = Array.from({ length: 1000 }, (v, i) => i + 1);

console.time('meu timer');
console.log(binarySearch(arrayOrdenado, 5))
console.timeEnd('meu timer');