
function ChangeValue(number, isAdding){

    // Check if we are adding to either add or substract number
    isAdding ? number.innerHTML++ : number.innerHTML--;

    // Just to make sure there are no negative values 
    if (number.innerHTML < 0) number.innerHTML = 0;
}

