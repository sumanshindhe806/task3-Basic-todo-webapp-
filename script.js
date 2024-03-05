const inputbox=document.getElementById('input-box');
const liscontainer=document.getElementById('list-container');
 function addtask(){
    if(inputbox.value === '')
    {
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        liscontainer.appendChild(li);

        
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        }
        inputbox.value="";
        savedata();
 }
 liscontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();

    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
 }, false);

function savedata(){
    localStorage.setItem("data",liscontainer.innerHTML);
 }
 function showtask()
 {
    liscontainer.innerHTML=localStorage.getItem("data");
 }
 showtask();

 function showdata()
 {

 }