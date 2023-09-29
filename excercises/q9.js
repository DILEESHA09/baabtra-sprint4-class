function check (x,y,z){
if (x<y && x<z){
    console.log("x is the lowest number");
}
 else if (y<x && y<z){
    console.log( "y is the lowest number");
 }
else {
    console.log( "z is the lowest number");
}
}
 check(10,20,30)
 check(50,40,60)
 check( 100,200,70)