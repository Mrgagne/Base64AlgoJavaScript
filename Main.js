function initalize() {
    let textToConvert = document.getElementById("textToEncode").value;
    toCharArray(textToConvert);
}

function toCharArray(aString) {
    let charArray = aString.split('');
    convertCharsToBinary(charArray);
}

function convertCharsToBinary(anArray) {
    for (i = 0; i < anArray.length; i++) {
        console.log(anArray[i].charCodeAt(0).toString(2))
    }
}

