function check(){
    img = document.getElementById('captured_image');
  clssifier.classify(img, gotResult);
  
}

function gotResult(){

    if(error){
      console.error(error);
    }
    
} else{
console.log(results);
document.getElementById("results_name").innerHTML = results[0].label;
document.getElementById("results_name").innerHTML = results[0].label;

if(results[0].label == "This is so looking amazing" )
{
document.getElementById("update_gesture").innerHTML = "	&#128076;";

}
if(results[0].label == "All the best" )
{
document.getElementById("update_gesture").innerHTML = "&#128077;";

}

if(results[0].label == "That was a marvelious victory" )
{
document.getElementById("update_gesture").innerHTML = "&#9996;";
}
}