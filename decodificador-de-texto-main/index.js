let input = document.getElementById("input-text")
let output = document.getElementById("output-text");
let encrypt = document.getElementById("encrypt-btn");
let decrypt = document.getElementById("decrypt-btn");
let copy = document.getElementById("copy")

const Cryptography = (text)=>{
    const keys = {
        "e":"enter",
        "i":"imes",
        "a":"ai",
        "o":"ober",
        "u":"ufat"
    };

    let newtext = ''
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        newtext += keys[letter] || letter;
      }
      return newtext;
};

const Decryption = (text) => {
    const keys = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };

    let newtext = text;
    for (let key in keys) {
      const pattern = new RegExp(key, 'g');
      newtext = newtext.replace(pattern, keys[key]);
    }

    return newtext;
  }

const hasUpper =   (str) => /[A-Z]/.test(str);
const hasAccented = (str) => /[à-ü]/.test(str);


encrypt.addEventListener("click",()=>{
    if (hasUpper(input.value) || hasAccented(input.value)) {
      adv.style.color = "red"
      icon.style.backgroundColor= "red"

    } else {
      output.innerHTML = `${Cryptography(input.value)}`
      input.value =""
      output.style.display = "block";
      msgadv.style.display = "none"
      copy.style.display = "block";

    }
})

decrypt.addEventListener("click",()=>{
    if (hasUpper(input.value) || hasAccented(input.value)) {
      adv.style.color = "red"
      icon.style.backgroundColor= "red"

    } else {
      output.innerHTML = `${Decryption(input.value)}`
      input.value =""

    }

    })

copy.addEventListener("click",()=>{
    output.select();
    document.execCommand("copy");
  })




