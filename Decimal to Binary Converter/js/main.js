// const result = document.getElementById('result');
// const submit = document.getElementById('submit');

// function binary(e){
//     e.preventDefault();

//     const num = document.getElementById('number').value;

//     if(num === ''){
//         alert('Please Insert a Number')
//     }else if(num < 0){
//         alert('Please insert a positive Number')
//     }else{
//         result.style.visibility='visible';
//     }

//     //Converting

//     binaryNumber = Number(num).toString(2);
//     result.innerText = binaryNumber;
// };

// submit.addEventListener('click' , binary);



let enterNumber = document.querySelector("#number")
let result = document.querySelector('#result');
let submit = document.querySelector('#submit');

submit.addEventListener('click',function(rashik){
    rashik.preventDefault();
    // console.log("rashik");
    let numbers=Number(enterNumber.value);
    let binary=numbers.toString(2);
    result.innerText=binary;
    result.style.visibility='visible';
})