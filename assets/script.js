let count = 0;

document.getElementById("decreaseBtn10").onclick = function(){
    count -=10;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("decreaseBtn5").onclick = function(){
    count -=5;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
    
}
document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
    
}
document.getElementById("increaseBtn5").onclick = function(){
    count +=5;
    document.getElementById("countLabel").innerHTML = count;
    
}
document.getElementById("increaseBtn10").onclick = function(){
    count +=10;
    document.getElementById("countLabel").innerHTML = count;
    
}