let count = 0;
function increaseCount (){
    count++;//increment the count by 1
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function increaseCount(){
    count++;
    displayCount();
}

function checkCountValue(){
    if(count===10){
        alert("Your instagram posted gained 10 follower !");
    }else if(count === 20){
        alert("Your Instagram post gained 20 followers keep it up")
    }
}
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}