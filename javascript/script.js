<!--jQuery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="js/scripts.js"></script>

<script>

$(document).ready(function(){

//Contains the operators
var operators = ["+", "/", "-", "*", "%"];

//Contains the decimal value
var decimal = ["."];

//Contains the curren inputs
var totalString;

//Contains the input string
var input = [""];

//Contains the numvers
var numbers = [0,1,2,3,4,5,6,7,8,9];

//Returns the value of the calculator
function getValue(value){
	if(decimal.includes(input[input.length -1] === true && value===".")){
		console.log("Duplicated '.' ");
	}else if(input.length == 1 && operators.includes(value)===false){
		input.push(value);
	}else if(operators.includes(input[input.length-1]) === false){
		input.push(value);
	}else if(numbers.includes(Number(value))){
		input.push(value);
	}

	update();
}

//Returns the resulting string
function getTotal(){
	totalString = input.join("");
	$("#result").html(eval(totalString));
}

//Updates the resulting string
function update(){
	totalString = input.join("");
	$("#result").html(totalString);
}

//Functions for when a button is clicked
$("button").click(function(){
	if(this.id === "clearAll"){
		input = [""];
		update();
	}else if(this.id === 'backOne'){
		input.pop();
		update();
	}else if(this.id === "total"){
		getTotal();
	}else if(this.id === "C"){
		input=[""];
		update();
	}else{

		if(input[input.length -1].indexOf("+", "-", "/", "*", ".", "%") === -1){
			getValue(this.id);
		}
		else{
			getValue(this.id);
		}
	}
});

//work on
$("#result").keypress(function(event){

	if(event.keyCode == 13){
		console.log("fsafsaf");
	}

});



});


</script>
