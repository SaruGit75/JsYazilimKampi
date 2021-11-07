function isPrime(numbers) {
    var flag = 0

    for(let i = 0; i <= numbers.length - 1; i++){   //7
        for (let j = 2; j <= numbers[i]; j++) {
            if(numbers[i] < 0){
                continue
            }
            if(numbers[i] % j == 0){
                flag++
            }
        }
        if(flag == 1){
            console.log(numbers[i] + " -> Sayi Asaldır.")
        }
        else{
            console.log(numbers[i] + " -> Sayi Asal Degildir")
        }
        flag = 0
    }
}


var numbers = [12, 4, 7, -5, 2, 90, 11, 3, 37, 111]

isPrime(numbers)