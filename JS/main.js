
var textIn = document.getElementById('input-textbox');
var textOut = document.getElementById("output-textbox");

function process(input) {
    var command = input.split(" ")[0];

    if(command == "help") { 
        return "Help dialog";
    }else{
        return "Unknown command: " + input + ". Please type /help for a list of commands.";
    }
}

function go() {
    var input = textIn.value;
    textIn.value = "";
    output(process(input));
}

function output(text){
    textOut.value += text + "\n";
}

function createPlayer(){
    output("Please Type Your Name")
    // Wait for player response and set it as a variable.
}

createPlayer();
