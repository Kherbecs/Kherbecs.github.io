function Bigger() {
    document.getElementById("userinput").style.fontSize = "1.5em";
}
function TextDecoration() {
    if (document.getElementById("fancy").checked) {
        document.getElementById("userinput").style.fontWeight = "bold";
        document.getElementById("userinput").style.color = "blue";
        document.getElementById("userinput").style.textDecoration = "underline";
    }
    else if (document.getElementById("boring").checked) {
        document.getElementById("userinput").style.fontWeight = "normal";
        document.getElementById("userinput").style.color = "black";
        document.getElementById("userinput").style.textDecoration = "none";
    }
}
function Moo() {
    var uppercaseText = document.getElementById("userinput").value.toUpperCase();
    document.getElementById("userinput").value = uppercaseText;
    var text = document.getElementById("userinput").value;
    document.getElementById("userinput").value = text.split(".").join("-Moo.");
}
