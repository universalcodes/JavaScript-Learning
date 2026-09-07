let numberA = 56;
let numberB = 561;
let numberC = 1256;

console.log('Situation One - Where if Block is True')

if(numberA == 56){
    console.log("This is true A value is printed")
}
else if (numberA == 561)
{
    console.log("This is false A value not is printed")

}
else if (numberA == 5611)
{
    console.log("This is false A value not is printed")

}

console.log('Situation Two - Where if Block is False but if else if true')

if(numberA == 561){
    console.log("This is false A value not is printed")
}
else if (numberA == 56)
{
        console.log("This is true A value is printed within the else if ")


}
else if (numberA == 5611)
{
    console.log("This is false A value not is printed")

}



console.log('Situation Three - Where if Block is False but if else if true')

if(numberA == 56){
    console.log("This is false A value not is printed Parent If")
}
else if (numberA == 56)
{
        console.log("This is true A value is printed within the else if ")


}
else if (numberA == 5611)
{
    console.log("This is false A value not is printed")

}

console.log('Situation Four - Where if Block is False but if else if true')

if(numberA == 561){
    console.log("This is false A value not is printed Parent If")
}
else if (numberA == 56)
{
        console.log("Second - If else if This is true A value is printed within the else if ")


}
else if (numberA == 56)
{
        console.log("Third - If else if This is true A value is printed within the else if ")

}


console.log('Situation Five - All if, Else are If are False')

if(numberA == 561){
    console.log("This is false A value not is printed Parent If")
}
else if (numberA == 561)
{
        console.log("Second - If else if This is true A value is printed within the else if ")


}
else if (numberA == 156)
{
        console.log("Third - If else if This is true A value is printed within the else if ")

}
else{
            console.log("No Number Found Else Block is Executed. ")

}
/*
console.log('Situation Six - Compile Error')

if(numberA == 561){
    console.log("This is false A value not is printed Parent If")
}
else{
            console.log("No Number Found Else Block is Executed. ")

}

else if (numberA == 561)
{
        console.log("Second - If else if This is true A value is printed within the else if ")


}
else if (numberA == 156)
{
        console.log("Third - If else if This is true A value is printed within the else if ")

}
console.log('Situation Seven - Compile Error')

if(numberA == 561){
    console.log("This is false A value not is printed Parent If")
}
else if (numberA == 561)
{
        console.log("Second - If else if This is true A value is printed within the else if ")


}
else{

}
else if (numberA == 156)
{
        console.log("Third - If else if This is true A value is printed within the else if ")

}
else{
            console.log("No Number Found Else Block is Executed. ")

}
*/

