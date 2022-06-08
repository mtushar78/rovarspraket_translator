
function rovToNormal(text) {
    let rovarspraket = text;
    let i = 0;
    while (rovarspraket.charAt(i + 2) !== "") {
        // console.log('i= ' + i)
        // console.log('i: ' + rovarspraket.charAt(i))
        // console.log('i+1: ' + rovarspraket.charAt(i + 1))
        // console.log('i+2: ' + rovarspraket.charAt(i + 2))
        // console.log('after : ' + rovarspraket)
        if (!(/^[aeiou]$/i).test(rovarspraket.charAt(i))
            && rovarspraket.charAt(i) === rovarspraket.charAt(i + 2)
            && rovarspraket.charAt(i + 1) === 'o') {


            console.log('before : '+rovarspraket)
            console.log('i= ' + i)
            console.log('i: ' + rovarspraket.charAt(i))
            console.log('i+1: ' + rovarspraket.charAt(i + 1))
            console.log('i+2: ' + rovarspraket.charAt(i + 2))
            // rovarspraket = rovarspraket.replace('o' + rovarspraket.charAt(i + 2), '');
            rovarspraket = rovarspraket.slice(0,i+1)+rovarspraket.slice(i+3);
            console.log('after : '+rovarspraket)

            console.log("---------------------------------------")
        }
        i++;
    }
    return rovarspraket;
}

function normalToRov(text) {
    // let text = req.body.text;
    let rovarspraket = '';
    // console.log(text.slice(0,3));
    for (let i = 0; i < text.length; i++) {
        if ((/^[aeiou]$/i).test(text.charAt(i)) || text.charAt(i) === " " || text.charAt(i) === "," || text.charAt(i) === ".") {
            //if vowel
            console.log('from if: ' + text.charAt(i))
            rovarspraket = rovarspraket + text.charAt(i);
        }
        else {
            // stubborn => sostotubobboborornon
            console.log('from else: ' + text.charAt(i))
            rovarspraket = rovarspraket + text.charAt(i) + 'o' + text.charAt(i);
            console.log('sliced: ' + rovarspraket);
        }
    }
    return rovarspraket;
}

module.exports = { normalToRov, rovToNormal }