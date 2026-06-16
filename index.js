var shift = 0;
let mode = "encrypt";
$("#encrypt").on("click", function(){
    $("#encrypt").toggleClass("mode_pressed");
    $("#decrypt").toggleClass("mode_pressed");
    $("#run_code").text("Encrypt");
    mode = mode === 'decrypt' ? 'encrypt' : 'decrypt';
})

$("#decrypt").on("click", function(){
    shift *= -1;
    $("#encrypt").toggleClass("mode_pressed");
    $("#decrypt").toggleClass("mode_pressed");
    $("#run_code").text("Decrypt");
    $("#run_code").toggleClass("brown");
    // Toggles the mode
    mode = mode === 'encrypt' ? 'decrypt' : 'encrypt';

})

$("#run_code").on("click", function(){
    const text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = caesarCipher(text, shift);
})

$("#up").on("click", function(){
    if (shift > -26 && shift < 26) {
        if (mode === "encrypt"){

        }
        shift++;
        $("#shift_display").text(shift);
    }
})
$("#down").on("click", function(){
    if (shift > -26 && shift < 26) {
        shift--;
        $("#shift_display").text(shift);
    }
})
function caesarCipher(str, shift) {
  // Handle negative shifts and shifts greater than 26
  const normalizedShift = ((shift % 26) + 26) % 26;
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
      }

      return char;
    })
    .join("");
}

