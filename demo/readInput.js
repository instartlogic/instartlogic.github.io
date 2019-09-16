(function () {
    var elements = document.getElementsByTagName('input');
    for (el of elements) {
        console.log(`Found ${el.value}`);
    }
});