function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    console.log(name);
    const password= document.getElementById('password').value;
    const confirmPassword= document.getElementById('confirmPassword').value;
    
    if(name == ''){
        alert('Please enter your name!');
        return;
    }

    if(name.length <= 3 || name.length >= 14){
        alert('The name must be between 3 and 14 characters!');
        return;
    } 

    if(name[0] != name[0].toUpperCase()){
        alert('The first letter must be uppercase');
        return;
    }

    if(!name.match(/^[a-zA-Z]+$/)){
        alert('All the characters in the name field must be letters!');
        return;
    }

    if(!phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)){             // accept phone numbers with + or without
        alert('The phone number you entered is invalid!');                              // /^\d{10}$/ - for numbers without +
        return;
    }

    if(password.search(/(?=.*[!#$%&? "'.])/) < 0){
        alert('Your password need to have at least one special character!');
        return;
    }

    if(password.length <= 8 || password.length >= 24){
        alert('The password must be between 8 and 24 characters!');
        return;
    }

    
    if(!password.match(/(?=.*[A-Z])/)){
        alert('The password should contain at least 1 uppercase character!')
        return;
    }
    

    if(password != confirmPassword){
        alert('The entered password does not match!');
        return;
    }
}