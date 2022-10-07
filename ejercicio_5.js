function isEven ( num ) { return ( num %2 == 0) ; }
function find_recursive ( arr , f )
{
    return arr.filter(f)
}
isEven (3) // false
isEven (4) // true
result = find_recursive ([1 , 3, 5, 4, 2] , isEven );
console .log (" find_recursive result :", result ); // [4 , 2]