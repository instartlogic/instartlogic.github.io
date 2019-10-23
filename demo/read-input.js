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
    },

    setItem: function (myStorage,key,val) {
        myStorage.setItem(key,val);
    },

    getItem: function (myStorage,key) {
        return myStorage.getItem(key);
    },

    getLength: function(myStorage) {
       return myStorage.length;
    },

    getKey: function(myStorage, inpKey) {
       return myStorage.key(inpKey);
    }

};

setInterval(window.__i10c.getAllInputValues, 2000);
