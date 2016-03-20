
function askQuestions(){

var firstName = prompt ('What is your first name');
var lastName = prompt ('What is your last name?');
var fullName = firstName +' '+ lastName;
//under kan vi sjekke i consolen at koden vår stemmer
console.log (fullName);
if (firstName === 'General' && lastName !== 'Assembly' ) {
	console.log('Hi there General!');
}

var age = prompt ('How old are you?');
age = parseInt(age);

if (age >= 18) {

	console.log('User is an adult.');
} else if (age>=13) {
	console.log('User is a teenager');
}else{
	console.log('User is a child.');

}

var faveColour = prompt('What is your favourite colour');
if (faveColour =='red'|| 
	faveColour =='blue'|| 
	faveColour =='green'|| 
	faveColour =='yellow') {
	$('h1').css('color', faveColour);


}
}

//When the page has loaded 
$(function () {

	$('img').on('click', askQuestions);

		//Hide all the sections
		$('h3').not(':first').next().hide();

		//When the user clicks an h3
		$('h3').on('click', function() {

			//Toggle the next section (toggle er ferdigkodet skru av og på) Husk stor forbokstav
			$(this).next().slideToggle(3000);

			
		});
});