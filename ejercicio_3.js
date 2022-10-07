function isEven ( num ) { return ( num %2 == 0) ; }
function find ( arr , f )
{
    let yesEven = []
    for (let num of arr)
    {
        if (f(num))
        {
            yesEven.push(num)
        }
    }
    return yesEven
}
isEven (3) // false
isEven (4) // true
result = find ([1 , 3, 5, 4, 2] , isEven );
console .log (" find result :", result ); // [4 , 2]