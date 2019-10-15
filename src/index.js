const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output_string = ''; 
    let sub_string = '';

    for (let i = 0; i < expr.length ; i += 2 )
    {
            if (expr[i] == 0 && expr[i+1] == 0){
            continue;
            }
            else{
                if (expr[i] == 1 && expr[i+1] == 0){
                    sub_string += '.';
                }
                else{
                    if (expr[i] == 1 && expr[i+1] == 1){
                        sub_string += '-';
                    }
                    else {
                        if (expr[i] == '*'){
                            i += 10;
                            output_string += ' ';
                        }
                    }
                }
            }

            if(i != 0 && i % 10 == 8 || i == expr.length - 2){
                output_string += MORSE_TABLE[sub_string];
                sub_string = '';
            }
    }

    return output_string;
}

module.exports = {
    decode
}


/*var output_string = ''
    var new_array = string.split('**********')
    for(var i = 0; i < new_array.length; i++){
        output_string += MORSE_TABLE[new_array[i]]
    }
    return output_string*/