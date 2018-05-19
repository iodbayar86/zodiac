// ARRAY OF OBJECTS CONTAINING EACH ZODIAC SIGN'S CONTENT
var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.jpg"
	}
];


function horoscope() {
	
	var userdata = document.getElementById("userdata");
		console.log(userdata);
		console.log("users value is: " + userdata.value);

	for(var i = 0; i < zodiac.length; i = i + 1) {
		
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		if(userdata.value.toLowerCase() === zodiac[i].sign) {
		
			console.log("if statement ran");
			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].fortune);

		
			document.getElementById("yourSign").textContent = userdata.value;

			document.getElementById("icon").src = zodiac[i].image;
		
			document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].fortune;

		
			return;
		};
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};


