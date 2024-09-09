let n = 30;

function counter (){
    console.log(n);
    n--;

    if(n < 0){
        clearInterval(interval_id);
    }
}

const interval_id = setInterval( counter, 1000);

// 'break' for loops
// 'clearInterval' for intervals