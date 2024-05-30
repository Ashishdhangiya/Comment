function addText() {
    if (newText.value !== null) {
        text.innerHTML += text.innerHTML ? "<hr>" + newText.value : newText.value;
        newText.value = ""
    }
}