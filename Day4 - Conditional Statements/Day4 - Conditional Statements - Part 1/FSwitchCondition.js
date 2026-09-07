let today = "Friday";
let todayA = "Wednesday";
let todayB = "Funday";


console.log("Situation one without break Keyword")

switch (today) {

    case "Sunday":
    {
     console.log("This is Sunday")
    }
    case "Monday":
    {
     console.log("This is Sunday")
    }
     case "Tuesday":
    {
     console.log("This is Tuesday")
    }
    case "Wednesday":
    {
     console.log("This is Wednesday")
    }
    case "Thursday":
    {
     console.log("This is Thursday")
    }
    case "Friday":
    {
     console.log("This is Friday")
    }
    case "Saturday":
    {
     console.log("This is Saturday")
    }
}

console.log("Situation Two -  Keyword with break Keyword")

switch (todayA) {

    case "Sunday":
    {
     console.log("This is Sunday")
     break;
    }
    case "Monday":
    {
     console.log("This is Sunday")
    break;
    }
     case "Tuesday":
    {
     console.log("This is Tuesday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Wednesday")
          break;
    }
    case "Thursday":
    {
     console.log("This is Thursday")
    break;
    }
    case "Friday":
    {
     console.log("This is Friday")
     break;
    }
    case "Saturday":
    {
     console.log("This is Saturday")
    }
}

 
console.log("Situation Three -  Keyword with default Keyword")

switch (todayB) {

    case "Sunday":
    {
     console.log("This is Sunday")
     break;
    }
    case "Monday":
    {
     console.log("This is Sunday")
    break;
    }
     case "Tuesday":
    {
     console.log("This is Tuesday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Wednesday")
          break;
    }
    case "Thursday":
    {
     console.log("This is Thursday")
    break;
    }
    case "Friday":
    {
     console.log("This is Friday")
     break;
    }
    case "Saturday":
    {
     console.log("This is Saturday")
    }
    //default "Test":  -- Compile Time Error as Default doesnt accept any Value
    default :

    {
     console.log("No Day is Found")

    }
}

console.log("Situation Four -  Keyword with true Condition Keyword Includes if Else as well")

switch (todayA) {

    case "Sunday":
    {
     console.log("This is Sunday")
     break;
    }
    case "Monday":
    {
     console.log("This is Sunday")
    break;
    }
     case "Tuesday":
    {
     console.log("This is Tuesday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Wednesday")
     if(5>4)
     {
             console.log("This Is True ")

     }
          break;
    }
    case "Thursday":
    {
     console.log("This is Thursday")
    break;
    }
    case "Friday":
    {
     console.log("This is Friday")
     break;
    }
    case "Saturday":
    {
     console.log("This is Saturday")
    }
    //default "Test":  -- Compile Time Error as Default doesnt accept any Value
    default :

    {
     console.log("No Day is Found")

    }
}








console.log("Situation Five -  Keyword with multiple true Condition Keyword")

switch (todayA) {

    case "Wednesday":
    {
     console.log("This is Sunday")
     
    }
    case "Wednesday":
    {
     console.log("This is Sunday")
    break;
    }
     case "Wednesday":
    {
     console.log("This is Tuesday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Wednesday")
     if(5>4)
     {
             console.log("This Is True ")

     }
          break;
    }
    case "Wednesday":
    {
     console.log("This is Thursday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Friday")
     break;
    }
    case "Wednesday":
    {
     console.log("This is Saturday")
    }
    //default "Test":  -- Compile Time Error as Default doesnt accept any Value
    default :

    {
     console.log("No Day is Found")

    }
}

console.log("Situation Six -  Multiple Default Check")

switch (todayA) {

    case "Wednesday":
    {
     console.log("This is Sunday")
     
    }
    case "Wednesday":
    {
     console.log("This is Sunday")
    break;
    }
     case "Wednesday":
    {
     console.log("This is Tuesday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Wednesday")
     if(5>4)
     {
             console.log("This Is True ")

     }
          break;
    }
    case "Wednesday":
    {
     console.log("This is Thursday")
    break;
    }
    case "Wednesday":
    {
     console.log("This is Friday")
     break;
    }
    case "Wednesday":
    {
     console.log("This is Saturday")
    }
    //default "Test":  -- Compile Time Error as Default doesnt accept any Value
    default :

    {
     console.log("No Day is Found A")

    }
    // default : Multiple Default is not Allowed

    // {
    //  console.log("No Day is Found B")

    // }
}













