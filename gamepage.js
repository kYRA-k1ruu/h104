// generation of random value
var y = Math.floor(Math.random() * 10+1);

// count of attempts
// until hit
  
// function for the number sent by the user
var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRATUALATIONS!!!"+playername+"YOU GUESSED IT RIGHT IN" + guess + "GUESS");


}

else if (x > y )
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
}
else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATED NUMBER")
}

function playAgain(){
    y = Math.floor(Math.random()* 10+1);
}