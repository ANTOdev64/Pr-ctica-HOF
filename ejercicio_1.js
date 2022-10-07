function square (x) { return (x*x); } // f
function double (x) { return (x*2) ; } // g

function composedValue ( square , double , x )
{
    return square(double(x))
}
console .log ( composedValue ( square , double , 3 ) ); // 36