
var Correct = 0;
var Wrong = 0;

$(document).ready(function(){
var questions = [
 {

    Q: "2 + 2 = ",
    A: 4

  },
  {

    Q: "12 - 4 = ",
    A: 8

  }, 
  {

    Q: "3 x 3 = ",
    A: 9

  },

  {

    Q: "10 / 5 =",
    A: 2

  },

];






function Qmaker(){
for (i=0;i<questions.length;i++) {


var X = $(document.createElement("p"))
var Y = $(document.createElement("input"))
Y.attr("id", i)
$(X).html(questions[i].Q)
X.append(Y)
$("#Questions").append(X)


}};

Qmaker()







document.getElementById("Submit").addEventListener("click", function (event) {
  event.preventDefault()


for (i=0;i<questions.length;i++)  {

var Y = document.getElementById(i)

if (parseInt($(Y).val()) === questions[i].A)

{console.log("Correct"), Correct += 1;}

else {console.log("wrong"), Wrong += 1;}

console.log( "Correct:",Correct,"Wrong:",Wrong)

}

$("#finalScore").html("Final Score")
$("#Score").html(Correct+"/"+questions.length)

if (Correct === questions.length){ $("#Message").html("Perfect Score")}
else {$("#Message").html("Study and try again!")}

  $("#button").html("")
  
  var Reset = $("<button></button>").text("Restart");
  $(Reset).addClass("btn waves-effect waves-light blue")

  $("#button").append(Reset)

});





})
