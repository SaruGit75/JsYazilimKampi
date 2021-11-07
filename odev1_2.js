function broNumbers(no1, no2){
    var t1 = 0  // toplamlari tuttugumuz degiskenler.
    var t2 = 0

    // console.log(parseInt(no1 / 7))

    for (let i = 1; i < no1; i++) {
        if (no1 % i == 0) {
            t1 = t1 + i
        }    
    }
    for (let i = 1; i < no2; i++) {
        if (no2 % i == 0) {
            t2 = t2 + i
        }    
    }

    if (t1 == no2 && t2 == no1) {
        console.log("Bu sayilar arkadas sayilardir." + no1 + " & " + no2)
    }
    else{
        console.log("Bu sayilar arkadas sayilar degildir." + no1 + " & " + no2)
    }
}


var no1 = 123 
var no2 = 18416

broNumbers(no1, no2)