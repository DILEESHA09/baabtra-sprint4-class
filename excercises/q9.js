x= Number(prompt("enter first number"))
y = Number(prompt("enter second number"))
z = Number(prompt("enter third number"))

    if(x<y){
  if (x<z){
    console.log(`${x} is the lowest number`);
  }
}
if(y<x){
    if (y<z){
      console.log(`${y} is the lowest number`);
    }
  }
  if(z<x){
    if (z<y){
      console.log(`${z} is the lowest number`);
    }
  }
  
  







// function check (x,y,z){
// if (x<y && x<z){
//     console.log("x is the lowest number");
// }
//  else if (y<x && y<z){
//     console.log( "y is the lowest number");
//  }
// else {
//     console.log( "z is the lowest number");
// }
// }
//  check(10,20,30)
//  check(50,40,60)
//  check( 100,200,70)