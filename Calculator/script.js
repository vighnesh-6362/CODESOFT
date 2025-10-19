let input = document.getElementById('calc-display');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        switch(buttonText) {
            case '=':
                try {
                    string = eval(string).toString();
                } catch {
                    string = "Error";
                }
                input.value = string;
                break;
            case 'AC':
                string = "";
                input.value = "0";
                break;
            case 'DEL':
                string = string.slice(0, -1);
                input.value = string || "0";
                break;
            default:
                if (input.value === "0" || input.value === "Error") {
                    string = buttonText;
                } else {
                    string += buttonText;
                }
                input.value = string;
                break;
        }
    });
});