function runAfter(fn: () => void) { // here it is void has the below function does not return anything : if it returns some thing then insted of void specify the return type
    setTimeout(fn, 1000);
}

runAfter(()=>{
    console.log('hi there')
})