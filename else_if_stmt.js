const mark = 40;
 if(mark>= 90 && mark <=100){ //40>= 90 && 40<= 100 F
    console.log('A+');
 }
else if (mark>= 80 && mark <90) {
    console.log('A');
}
else if (mark>= 70 && mark <80) {
    console.log('B+');
}
else if (mark>= 60 && mark <70) {
    console.log('B');
}
else if (mark>= 50 && mark <60) {
    console.log('C+');
}
else if (mark>= 40 && mark <50) {
    console.log('C');
}
else if (mark>= 30 && mark <40) {
    console.log('D');  
}
else if (mark>= 0 && mark <30) {
    console.log('FAIL');
}
else {
    console.log("invalid mark");
}
console.log("hello");