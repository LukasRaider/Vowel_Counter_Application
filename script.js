function countVowels() {
    var text = document.getElementById("inputText").value;
    var vowelCount = 0;

    text = text.toLowerCase(); // Convert to lowercase

    for (var i = 0; i < text.length; i++) {
        if (isVowel(text[i])) { // Corrected: pass the character to the isVowel function
            vowelCount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}
