window.__i10c = {

    getInputValue: function (inputEle) {
        return inputEle.value;
    },

    setInputValue: function (inputEle, val) {
        inputEle.value = val;
    },

    getAllInputValues: function () {
        var elements = document.getElementsByTagName('input');
        for (var i = 0; i < elements.length; i++) {
            console.log("Found " + elements[i].value);
        }
    }
};

setInterval(window.__i10c.getAllInputValues, 2000);