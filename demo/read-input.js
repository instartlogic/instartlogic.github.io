window.__i10c = {};

window.__i10c.getInputValue = (inputEle) => {
    return inputEle.val;
}

window.__i10c.setInputValue = (inputEle, val) => {
    inputEle.value = val;
}

window.__i10c.allInputValue = () => {
    var elements = document.getElementsByTagName('input');
    for (var i = 0; i < elements.length; i++) {
        console.log("Found " + elements[i].value);
    }
};