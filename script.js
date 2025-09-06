const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');

calculatorContainer.addEventListener('click', e => {
    if (e.target.nodeName === "BUTTON") {
        switch (e.target.textContent) {
            case "c":
                clear();
                break;
            case "del":
                deleteOneValue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
});

function clear() {
    displayArea.textContent = "";
}

function addToDisplayArea(value) {
    displayArea.textContent = displayArea.textContent + value;
}

function deleteOneValue(){
let CarrentContent= displayArea.textContent;
displayArea.textContent=CarrentContent.substring(0,CarrentContent.length - 1)

}

function evaluate (){
try {

let calculation = math.evaluate(displayArea.textContent);
displayArea.textContent=calculation;
}

catch (error){
    displayArea.textContent= "Invalid operation";
    console.error(error);

}
}