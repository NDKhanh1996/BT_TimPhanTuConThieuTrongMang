let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]
let arr: number[] = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(i) === -1){
        arr.push(i)
    }
}

console.log(arr)