function destacar() {

	var diaDestaque = document.querySelector('input')
	var diasDoMes = document.querySelectorAll('td')

	for(var c = 0; c < diasDoMes.length; c++) {

		if(diasDoMes[c].textContent == diaDestaque.value && diaDestaque.value != ''){

			diasDoMes[c].style.backgroundColor = 'orange';

		} else{

			diasDoMes[c].style.backgroundColor = 'black';
		}

	}
console.log(diasDoMes)
}