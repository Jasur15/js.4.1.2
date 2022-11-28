let ism = prompt("Ismingizni liriting")
let hozirgi = +prompt("Hozirgi yilni kiriting")
let tyili = +prompt("Tug'ilgan yilingizni kiriting")
function age (a=hozirgi,b=tyili) {
    return a-b
}
console.log(ism+", yoshingiz "+age(hozirgi,tyili) +" da");