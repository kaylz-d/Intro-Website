var what = document.getElementById("whatButton");
var textArea = document.getElementById("textArea");

var responseList = ["Hehe", "Haha", "Hihi"];
var buttonResponseList = ["Okay...", "Erm...", "Ok."];
var count = 0;

// i miss my code.org libraries

what.addEventListener("click", updateText);

function updateText() {
    textArea.textContent = responseList[count];
    what.innerText = buttonResponseList[count];

    if (count < responseList.length) {
        count++;
    }
    else {
        textArea.textContent = "I'm done talking with you. Scroll down!";
        //textArea.classList.add("section-2After");
        //what.classList.add("whatAfter");

        if (what.classList.contains("whatAfter")) {
            what.classList.remove("whatAfter");
            console.log(what.classList[0]);
        }
        else {
            what.classList.add("whatAfter");
        }
    }
    
}

what.addEventListener("mouseover", dramaticText);

