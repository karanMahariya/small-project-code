const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    // console.log(button);
button.addEventListener('click' , displayCode,false);
});
function displayCode(e){
    console.log(e);
    console.log(e.target.id);
    if(e.target.id === 'grey'){
        document.body.style.color = 'white';
        document.body.style.transition = '.35s ease-in-out';
        document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'white'){
        document.body.style.color = 'black';
        document.body.style.transition = '.35s ease-in-out';
        document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'blue'){
        document.body.style.color = 'white';
        document.body.style.transition = '.35s ease-in-out';
        document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'yellow'){
        document.body.style.color = 'black';
        document.body.style.transition = '.35s ease-in-out';
        document.body.style.backgroundColor = e.target.id;
    }
}