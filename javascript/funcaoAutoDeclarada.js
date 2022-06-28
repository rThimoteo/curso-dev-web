//IIFE - Immediately invoked function expression

var a = {
    number: 2
};

(function (b) {
    console.log('Função auto declarada')
    console.log(b.number)
})(a)