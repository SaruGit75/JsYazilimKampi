function greatNumbers(a) {
    var total = 0

    for (let i = 0; i <= a + 1; i++) {
        if(a % i == 0){
            total += i
        }
    }
    if(total == 2 * a){
        console.log(a)
    }
}


for(let a = 1; a < 1000; a++){
    greatNumbers(a)
}

