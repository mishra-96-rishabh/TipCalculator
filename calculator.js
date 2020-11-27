class Restaurant {
	// constructor method to get variables externally
	constructor( bill , percent , people ) { 
		// object to store tip calculation formulas
		this.Formulas = {
			// calculate tip percentage
			tip: percent * bill / 100 ,
			tipPercent: function() { return this.tip ; } ,
			
			// tip to be given individually (each person)
			individualTip: function() { return this.tip / people ; } ,
			
			// total amount after adding the tip percentage
			totalAmount: function() { return Number( bill )  + this.tip ; } ,
			
			// final amount to be given to each person
			paidPerPerson: function() { return this.totalAmount() / people ; }
		} ;
	}

	// static method to access a function from outside the class
	// below function gets the input value by using the value property(.value) for each input element and
	// attach them to a dump array (tempArray) named variables.
	static GET_VARIABLES( array , tempArray) {
		for( var i = 0 ; i < array.length ; i++ ) {
			tempArray[ i ] = array[ i ].value ;
		}
	}

	// for each variables value, DEFINE_VARIABLES function detects whether the item is a number or not
	// to attach it to a new array named values
	static DEFINE_VARIABLES( item , index ) {
			if( isNaN( Number( item ) ) || item == "" ) {
				window.alert( "Please enter the correct values" ) ;		
			}
			else if( item < 0 ) {
				window.alert( "Values can't be negative" ) ;
			}
			else {
				values[ index ] = item ;
			}
	}
}

// get input variables by using the querySelectorAll() property and hence the need for dumping
// variables to an array.
var input = document.getElementsByClassName( "TipForm" )[ 0 ].querySelectorAll( "input" ) ;
var variables = [] ;
var values = [] ;

var OUTPUT = document.getElementById( "OUTPUT" ) ;

function Print_Restaurant_Variables() {
	Restaurant.GET_VARIABLES( input , variables ) ;
	
	// forEach() method to sort the variables array as the values array
	variables.forEach( Restaurant.DEFINE_VARIABLES ) ;
	
	// checking if number of people is a whole number
	if( parseInt( values[ 2 ] ) == values[ 2 ] ) {
		// values[ 0 ] = Bill , values[ 1 ] = tip % , values[ 2 ] = number of people
		var obj = new Restaurant( values[ 0 ] , values[ 1 ] , values[ 2 ] ) ;
	
		OUTPUT.innerHTML = "" ;	// clearing the previous values
		// display the calculated values
		OUTPUT.innerHTML += "<br><br>Tip (per person) = $" + obj.Formulas.individualTip().toFixed( 2 ) ;
		OUTPUT.innerHTML += "<br><br>Total tip = $" + obj.Formulas.tipPercent().toFixed( 2 ) ;
		OUTPUT.innerHTML += "<br><br>Total (per person) = $" + obj.Formulas.paidPerPerson().toFixed( 2 ) ;
		OUTPUT.innerHTML += "<br><br>Total amount = $" + obj.Formulas.totalAmount().toFixed( 2 ) ;
	}
	else {
		window.alert( "Number of person can't be in fractional form!!" ) ;
		OUTPUT.innerHTML = "" ;
	}  
}

