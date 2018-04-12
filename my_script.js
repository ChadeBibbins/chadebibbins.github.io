
function sayHello() {
    alert("Hi Chade!");
}

function sayHey() {
  alert("What's Up Aaliyah");
}

function sayHi() {
  alert("Hola Armonn");
}

function sayHola(name) {
  alert("Hi, " +name);
}

function ow(){
  alert("That Hurt!");
}
 var score = 0;
 function incrementscore (){
   //alert("add by one to score")
   score=score+1
   $('#s').text(score);
   if(score >=10){
     $('#fivepointbutton').css('display', 'inline');
   }
  }
function addfive (){
  score= score + 5
  $('#s').text(score);

}
