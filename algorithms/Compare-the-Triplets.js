// Problem: Compare the Triplets
// Platform: HackerRank

function compareTriplets(a, b) {
let c = [0,0];
for(let i=0, j=0; i<a.length && j<b.length; i++, j++){
        if(a[i]>b[j]){
            c[0] = c[0] + 1;
        }
        else if(b[j]>a[i]){
            c[1] = c[1] + 1;
        }
}
return c;
}
