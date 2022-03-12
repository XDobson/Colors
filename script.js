let temp = null
let carrot = Math.floor(Math.random() * 256)
let potato = Math.floor(Math.random() * 256)
let lettuce = Math.floor(Math.random() * 256)
let change = true;
function up() {
    if (carrot <= 255 && carrot >= 0) {
        carrot = carrot + (Math.floor(Math.random() * 7) - 3)
    }
    else if (carrot >= 255) {
        carrot = carrot - 2
    } else if (carrot <= 0) {
        carrot = carrot + 2
    }
    if (potato <= 255 && potato >= 0) {
        potato = potato + (Math.floor(Math.random() * 7) - 3)
    }
    else if (potato >= 255) {
        potato = potato - 2
    } else if (potato <= 0) {
        potato = potato + 2
    }
    if (lettuce <= 255 && lettuce >= 0) {
        lettuce = lettuce + (Math.floor(Math.random() * 7) - 3)
    }
    else if (lettuce >= 255) {
        lettuce = lettuce - 2
    } else if (lettuce <= 0) {
        lettuce = lettuce + 2
    }

    document.body.style.background = "rgb(" + (carrot) + "," + (potato) + "," + (lettuce) + ",1)"
    if (change == true) {
        return null
    }
    else {
        loop()
    }
}
function loop() {
    temp = setTimeout(up, 1);
    console.log("=======================");
    console.log("Carrot:" + carrot);
    console.log("Potato:" + potato);
    console.log("Lettuce:" + lettuce);
}
function jumpercable() {
    if (change == false) {
        change = true
        document.getElementById("hyper").style.background = "rgb(255,50,50)"
    } else {
        change = false
        document.getElementById("hyper").style.background = "rgb(50,255,50)"
        carrot = Math.floor(Math.random() * 256)
        potato = Math.floor(Math.random() * 256)
        lettuce = Math.floor(Math.random() * 256)
        loop()
    }
}
function zwoop() {
    document.body.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
}