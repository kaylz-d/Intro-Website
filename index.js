var button = document.getElementById("testButton");

button.addEventListener("click", handleFunction)

function handleFunction() {
    // make sure to have classes in quotes
    
    if (button.classList.contains("buttonAfter")) {
        button.classList.remove("buttonAfter");
        console.log(button.classList[0])
    }
    else {
        button.classList.add("buttonAfter")
    }
    // TO-DO: make a dashboard of functional javascript things
    // whoever has the most thingies wins

    // live a little - Mr. Cabal
    // GPA doesn't matter. make ur essays good - Brian Wang
}