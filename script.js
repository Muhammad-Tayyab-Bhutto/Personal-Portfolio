let sidemenu = document.getElementById("sidemenu");
function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-200px";
}
let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents')
function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}
// script for form submition
// GitHub Code Link for Getting Code To send message in google excel sheet (https://github.com/jamiewilson/form-to-google-sheets)

const scriptUrl = 'https://script.google.com/macros/s/AKfycbwMF0jHACKlrRgx9RDW64jVKdxAa3driAroZm3jwYGNTAhVNlZYF6pQ6OLq8ZptaEyK/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e=>{
    e.preventDefault();
    fetch(scriptUrl, {method: 'POST', body: new FormData(form)}).then(response=>{
        msg.innerHTML = "Thanks, Your Message Has Been Delevered.";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});


