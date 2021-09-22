function fibonacci(n) {
    let a= 0, b=1, sum;
    if( n == 0 ) {
        return a;
    }
    for(let i = 2 ; i <= n; i++) {
        sum = a+b;
        a = b;
        b = sum;
    }
    return b;
}

// 0 1 1 2 3 5 8