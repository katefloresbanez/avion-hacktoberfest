const typer = (str, cb) => {
    var strOut = ""
    str.split('').forEach((it, index) => {
        setTimeout( () => {
            console.clear()
            strOut += it
            console.log(strOut)
        }, 100 * index)
     });
     if (cb) {
         setTimeout(() => {
            cb(str)
         }, 100 * str.length)
     }
 }

const blink = (str) => {
    console.clear()
    console.log(`${str} :)`)
    setTimeout(() => {
        console.clear()
        console.log(`${str} ;)`)
    }, 200)
    setTimeout(() => {
        console.clear()
        console.log(`${str} :)`)
    }, 400)
 }

typer("Roman was here", blink)
