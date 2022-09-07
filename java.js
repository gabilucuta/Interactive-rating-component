function seeRating(){
     var value = document.querySelector('input[name="radio"]:checked').value;    
     document.getElementById("secondCont").style.display = "block"; 
     document.getElementById('mySpan').innerHTML = value;
}