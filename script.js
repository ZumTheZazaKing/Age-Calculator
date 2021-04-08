const calculateButton = document.querySelector('#calculate');
const output = document.querySelector('#output');

function calculate(){

    let birthdate = document.querySelector('#birthdate').value;
    

    if(birthdate == ""){

        alert('Please enter a date');

    } else {

        let currentDay = new Date().getUTCDate();

        let currentMonth = new Date().getMonth() + 1;
    
        let currentYear = new Date().getFullYear();
    
    
    
        birthdate = birthdate.split("-");
    
    
    
        let birthYear = birthdate[0];
    
        let birthMonth = birthdate[1];
    
        let birthDay = birthdate[2];
    
        
    
        let outputYear = currentYear - birthYear;
    
        let outputMonth = Math.abs(currentMonth - birthMonth);
    
        let outputDay = Math.abs(currentDay - birthDay);
    
        output.innerHTML = "You are " + outputYear + " years, " + outputMonth + " months and <br> " + outputDay + " days old!";

    }

}

calculateButton.addEventListener('click', calculate);