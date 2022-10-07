function square (x) { return (x*x); }
function mymap (arr , f)
{
    let procesado = []
    for (let num of arr)
    {
        procesado.push(f(num))
    }
    return procesado
}
result1 = mymap ([1 , 2 , 3 , 4, 5] , square );
result2 = mymap ([1 , 4 , 9 , 16 , 25] , Math . sqrt );
console .log (" result1 :", result1 ); // [1 , 4, 9, 16 , 25]
console .log (" result2 :", result2 ); // [1 , 2, 3, 4, 5]