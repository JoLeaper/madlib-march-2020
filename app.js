// 1. Get elements from their ids.
// 2. Create input variables for ALL variables.
// 3. Create madlib container.
// 4. Create input container.
// 5. Create button.
// 6. Add event listener to button.
// 7. Create function that hides input container with mab libs.

const buttonPress = document.getElementById('button');

//inputs
const input1 = document.getElementById('number1');
const input2 = document.getElementById('noun1');
const input3 = document.getElementById('noun2');
const input4 = document.getElementById('verb1');
const input5 = document.getElementById('verb2');
const input6 = document.getElementById('noun3');
const input7 = document.getElementById('adjective1');
const input8 = document.getElementById('noun4');
const input9 = document.getElementById('adjective2');
const input10 = document.getElementById('noun5');
const input11 = document.getElementById('verb2');
const input12 = document.getElementById('verb3');
const input13 = document.getElementById('adjective3');
const input14 = document.getElementById('noun6');
const input15 = document.getElementById('verb4');
//

//spans
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');
const span5 = document.getElementById('span5');
const span6 = document.getElementById('span6');
const span7 = document.getElementById('span7');
const span8 = document.getElementById('span8');
const span9 = document.getElementById('span9');
const span10 = document.getElementById('span10');
const span11 = document.getElementById('span11');
const span12 = document.getElementById('span12');
const span13 = document.getElementById('span13');
const span14 = document.getElementById('span14');
const span15 = document.getElementById('span15');
const span16 = document.getElementById('span16');
const span17 = document.getElementById('span17');
const span18 = document.getElementById('span18');
//
// mad lib container
const madLib = document.getElementById('mad-libs');
//

//input container
const inputContainer = document.getElementById('inputs');
//

buttonPress.addEventListener('click', () => {
    span1.textContent = input1.value;
    span2.textContent = input2.value;
    span3.textContent = input3.value;
    span4.textContent = input4.value;
    span5.textContent = input5.value;
    span6.textContent = input6.value;
    span7.textContent = input7.value;
    span8.textContent = input8.value;
    span9.textContent = input9.value;
    span10.textContent = input10.value;
    span11.textContent = input11.value;
    span12.textContent = input12.value;
    span13.textContent = input13.value;
    span14.textContent = input14.value;
    span15.textContent = input15.value;
    span16.textContent = input4.value;
    span17.textContent = input4.value;
    span18.textContent = input4.value;
    inputContainer.style.display = 'none';
    madLib.style.display = 'flex';
    console.log(madLib.textContent);
});