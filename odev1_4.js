function primeNumbers(a) {
    var flag = 0
    for(let i = 2; i <= a; i++){
        if(a % i == 0){
            flag++
        }
    }
    if(flag == 1){
        console.log(a)
    }
}



for (let i = 0; i < 1000; i++) {
    primeNumbers(i)
}
