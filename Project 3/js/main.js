/* your javascript is all included here */
function helloWorld(){
    //window.alert("Hello World");
}

function showPage(pageId){
    let page = document.querySelectorAll('.page-section');
    page.forEach(function(page){
    page.style.display = 'none';});
    document.getElementById(pageId).style.display = 'block'; 
}