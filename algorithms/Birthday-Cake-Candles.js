// Problem:  Birthday Cake Candles
// Platform: HackerRank

function birthdayCakeCandles(candles) {
    let max = candles[0];
for(let i=1; i<candles.length; i++){
    if(candles[i]>max){
        max = candles[i];
    }
}
let count = 0;
for(let i=0; i<candles.length; i++){
    if(candles[i]===max){
        count++;
    }
}
    return count;
}    
