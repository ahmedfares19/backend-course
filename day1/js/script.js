// function testing(params) {
//     console.log("hello");
// }
// console.log('55' + 'AA' + testing);
// console.log('55' + '0' - 22);
// console.log('55' + '10f' + null);
// console.log('55' + 'AA' + undefined);


obj = {
    name:'ahmed',
    go:function(){
        console.log('from go');
        return this
    },
    printName:function () {
        console.log('from print');
        return this;
    }
}
obj.go().go().go().go().printName();