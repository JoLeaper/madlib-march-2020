// 1. Get elements from their ids.
// 2. Create input variables for ALL variables.
// 3. Create madlib container.
// 4. Create input container.
// 5. Create button.
// 6. Add event listener to button.
// 7. Create function that hides input container with mab libs.

const buttonPress = document.getElementById('button');

buttonPress.addEventListener('click', () => {
    const input1 = document.getElementById('number1');
    const input = input1.value; 
    console.log(input);
});