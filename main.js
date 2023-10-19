let arabic = document.getElementById("arabic")
let english = document.getElementById("english")
let title = document.getElementById("title")
let Welcome = document.getElementById("Welcome-Text")
let About = document.getElementById("About-text")
let best = document.getElementById("best-text")
let Contact = document.getElementById('Contact-text')
arabic.onclick = ()=>{
    setLanguage("arabic")
    localStorage.setItem("lang","arabic")
}
english.onclick = ()=>{
    setLanguage("english")
    localStorage.setItem("lang","english")

}
onload = ()=>{
    setLanguage(localStorage.getItem("lang"))
}
function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        title.innerHTML = "زكرياء جس49"
        Welcome.innerHTML = "مرحبا بكم في موقعي"
        About.innerHTML = "المزيد عنا"
        best.innerHTML = "انا الافضل هنا"
        Contact.innerHTML = "تواصل معنا"
    }else if(getLanguage === "english"){
        title.innerHTML = "ZakariaJS49"
        Welcome.innerHTML = "Welcome To My WebSite"
        About.innerHTML = "About US"
        best.innerHTML = "I Am The Best One Here"
        Contact.innerHTML = "Contact US"
    }
}