console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


console.log("For Loop Started");
console.log("Situation one");
for (let i = 1; i<=5;i++)
{
 console.log(i);
   
}

console.log("Situation two");
for (let i = 1; i<=10;i++)
{
 console.log(i*2);
   
}

console.log("Situation Three");
for (let i = 2; i<=20;i+=2)
{
 console.log(i);
   
}

console.log("Situation Four");
for (let i = 1; i<=10;i++)
{
    if(i%2==0)
    {
         console.log(i);

    }
}

console.log("Situation Five");
for (let i = 1; i<=10;i++)
{
    if(!(i%2==0))
    {
         console.log(i);

    }
}



console.log("Situation Six");
for (let i = 1; i<=10;i++)
{
    if(i%2==0)
    {
         console.log(i);

    }
    else  if(!(i%2==0))
    {
         console.log(i);

    }
}

console.log("Situation Seven");
for (let i = 5; i>=1;i--)
{
 console.log(i);
   
}


console.log("Situation Eight");
for (let i = 10; i>=1;i--)
{
    if(i%2==0)
    {
         console.log("if Block");
         console.log(i);

    }
    else  if(!(i%2==0))
    {
           console.log("else if Block");
         console.log(i);

    }
}

console.log("Situation Nine");
for (let i = 1; i<=10;i++)
{
    if(!(i%2==0))
    {
         console.log(i);
         break;

    }
}

console.log("Situation Ten");
for (let i = 1; i<=10; i++)
{
    console.log(i)
}
console.log("Situation Eleven");

  for(let i = 1; i<10; i++)  // Starts the loop from 1
        {

            if (i%2==0)  // 5 Iteration is skipped as continue helps to continue the loop but skip the iteration whichever condition is true;
            {
                 //console.log("Here Continue block starts and skip the 5th Iteration");
                continue;

            }
            console.log(i);
        }
        console.log("Situation 12");

let nameA = "JavaScript";
 for(let i = 0; i<nameA.length; i++)  // Starts the loop from 1
        {
        let a = nameA.charAt(i);

            if(a=='a')
            {

                continue;
            }
            console.log(a);
        }








