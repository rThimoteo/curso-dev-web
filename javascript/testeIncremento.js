for (i=0 ; i<5 ; i++){
    console.log(i+1);
}

funcs = [];

for (i=0 ; i<10 ; i++){
    funcs.push(function() {
        console.log(i)
    })
}
