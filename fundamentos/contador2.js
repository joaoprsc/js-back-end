function contador2(n){
    return n * (n+1) / 2;
}
var t1 = performance.now();
contador2(10000000000);
var t2 = performance.now();
console.log(`time elapsed: ${(t2-t1) / 1000} seconds.`);
