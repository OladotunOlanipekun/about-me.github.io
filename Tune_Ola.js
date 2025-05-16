
//Doing arithmatic math

function doMath() {
    const firstnumber = parseFloat(document.forms.mathEquation.firstnumber.value);
    const secondnumber = parseFloat(document.forms.mathEquation.secondnumber.value);
    const operator = document.forms.mathEquation.operator.value;
    let result;
	let symbol = '';

    switch (operator) {
        case 'addition':
            result = firstnumber + secondnumber;
			symbol = '+';
            alert(`The result of adding ${firstnumber} and ${secondnumber} is ${result}`);
            break;

        case 'subtraction':
            result = firstnumber - secondnumber;
			symbol = '-';
            alert(`The result of subtracting ${firstnumber} and ${secondnumber} is ${result}`);
            break;

        case 'multiplication':
            result = firstnumber * secondnumber;
			symbol = '*';
            alert(`The result of multiplying ${firstnumber} and ${secondnumber} is ${result}`);
            break;

        case 'division':
            if (secondnumber == 0) {
                alert('Cannot divide by 0!');
            } else {
                result = firstnumber / secondnumber;
				symbol = '/';
                alert(`The result of dividing ${firstnumber} and ${secondnumber} is ${result}`);
            }
            break;
	}
document.getElementById("math-result").innerHTML = `The result of ${firstnumber} ${symbol} ${secondnumber} is ${result}`
}

//Finding the fatorial

function findFact() {
    const factnum = parseInt(document.forms.factorial.factnum.value);
    let factorial = 1;
    for (let i = 2; i <= factnum; i++) {
        factorial *= i;
    }
    document.getElementById("fact-result").innerHTML = `Factorial of ${factnum} is ${factorial}`;
}


function getFib() {
	const fibnum = parseInt(document.forms.fibonacci.fibnum.value);
	let fibSeries = [0, 1];
    for (let i = 2; i < fibnum; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    
	 document.getElementById("fib-result").innerHTML = `
        Fibonacci numbers up to position ${fibnum}: ${fibSeries.slice(0, fibnum + 1).join(", ")}
    `;
}
	


function findNumbers() {
	const firstnumber = parseFloat(document.forms.numbers.firstnumber.value);
    const secondnumber = parseFloat(document.forms.numbers.secondnumber.value);
    const thirdnumber = parseFloat(document.forms.numbers.thirdnumber.value);
	
	let max = Math.max(firstnumber, secondnumber, thirdnumber);
	let min = Math.min(firstnumber, secondnumber, thirdnumber);
	let range = max - min;
	
	alert(`The range is: ${range} the max is: ${max} and the min is: ${min}`); 
	
	document.getElementById("result").innerHTML = `Range: ${range}, Max: ${max}, Min: ${min}`;
}


function signedUp() {
	const firstname = document.forms.SignupAnime.firstname.value;
	const lastname = document.forms.SignupAnime.lastname.value;
	const email = document.forms.SignupAnime.email.value;
	const zipcode = document.forms.SignupAnime.zipcode.value;
	
	const animes = [];
	const checkboxes = document.forms.SignupAnime.anime;
	
	for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            animes.push(checkboxes[i].value);
        }
    }
	
	document.getElementById("check-result").innerHTML = `
        <strong>Thanks for signing up, ${firstname} ${lastname}!</strong><br>
        Email: ${email}<br>
        ZIP Code: ${zipcode}<br>
        Starting Animes: ${animes.length > 0 ? animes.join(", ") : "None selected"}
    `;
}