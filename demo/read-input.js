window.__i10c = {
    elements: document.getElementsByTagName('input'),

    getInputValue: function(inputEle) {
        return inputEle.value;
    },

    setInputValue: function(inputEle, val) {
        inputEle.value = val;
    },

    getAllInputValues: function() {
        for (var i = 0; i < this.elements.length; i++) {
            console.log("Found " + this.elements[i].value);
        }
    }
};

setInterval(window.__i10c.getAllInputValues, 2000);