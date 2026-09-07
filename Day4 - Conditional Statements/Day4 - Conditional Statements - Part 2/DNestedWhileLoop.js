console.log("Nested While Loop - Where Outer Loop is True, Where Inner Loop is True,")
let i = 1;
let j = 1;

while(i<5)
{
        console.log("i is printed",i);
    i++;
    while(j<5)
    {
        console.log("j is printed",j);
         j++;
    }
}

console.log("Nested While Loop - Where Outer Loop is True, Where Inner Loop is False,")
 i = 1;
 j = 45;

while(i<5)
{
        console.log("i is printed",i);
    i++;
    while(j<5)
    {
        console.log("j is printed",j);
        j++;
    }
}

console.log("Nested While Loop - Where Inner Loop is True, Where Outer Loop is False,")
 i = 12;
 j = 1;

while(i<5)
{
        console.log("i is printed",i);
    i++;
    while(j<5)
    {
        console.log("j is printed",j);
        j++;
    }
}

console.log("Nested While Loop - Both False")
 i = 34;
 j = 45;

while(i<5)
{
        console.log("i is printed",i);
    i++;
    while(j<5)
    {
        console.log("j is printed",j);
        j++;
    }
}