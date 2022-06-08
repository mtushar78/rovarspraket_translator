
function rovToNormal(text) {
    let roverspraket = text;
    let i = 0;
    while (roverspraket.charAt(i + 2) !== "") {
        if (!(/^[aeiou]$/i).test(roverspraket.charAt(i))
            && roverspraket.charAt(i) === roverspraket.charAt(i + 2)
            && roverspraket.charAt(i + 1) === 'o') {
            roverspraket = roverspraket.replace('o' + roverspraket.charAt(i + 2), '');

            console.log('i: ' + roverspraket.charAt(i))
            console.log('1+1: ' + roverspraket.charAt(i + 1))
            console.log('1+2: ' + roverspraket.charAt(i + 2))
            // console.log(roverspraket)
            console.log(roverspraket)
            console.log("---------------------------------------")
        }
        i++;
    }
    return roverspraket;
}

function normalToRov(text) {
    // let text = req.body.text;
    let roverspraket = '';
    // console.log(text.slice(0,3));
    for (let i = 0; i < text.length; i++) {
        if ((/^[aeiou]$/i).test(text.charAt(i)) || text.charAt(i)===" " || text.charAt(i)==="," || text.charAt(i)===".") {
            //if vowel
            console.log('from if: ' + text.charAt(i))
            roverspraket = roverspraket + text.charAt(i);
        }
        else {
            // stubborn => sostotubobboborornon
            console.log('from else: ' + text.charAt(i))
            roverspraket = roverspraket + text.charAt(i) + 'o' + text.charAt(i);
            console.log('sliced: ' + roverspraket);
        }
    }
    return roverspraket;
}

module.exports = {normalToRov, rovToNormal}