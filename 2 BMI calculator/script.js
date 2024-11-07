const form = document.querySelector("form");
// console.log(form);
form.addEventListener("submit", function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');

if(height === '' || height<= 0 || isNaN(height)){
result.innerHTML = `please enter valid height ${height}`;
}
else if(weight === '' || weight<= 0 || isNaN(weight)){
    result.innerHTML = `please enter valid weight ${weight}`;
}
else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // const span = document.createElement("span");
    // span.appendChild(document.createTextNode(bmi));
    // result.appendChild(span);
    
    // console.log(result);
    if (bmi > 18.6 && bmi <=24.9) {
        result.textContent = bmi + " -Noraml Weight";
    }else if (bmi <=18.6) {
        result.textContent = bmi + " -Under Weight";
    }
    else{
        result.textContent = bmi + " -Over Weight";
    }

}
},false);