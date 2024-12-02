let text = prompt("");
let count = 0;
for(let i = 0; i < text.length; i++) {
    if(text[i] == '0' || text[i] == '1' || text[i] == '2' || text[i] == '3' || text[i] == '4' || text[i] == '5' || text[i] == '6' || text[i] == '7' ||text[i] == '8' || text[i] == '9') {
        count++;
    }
}

console.log(count);