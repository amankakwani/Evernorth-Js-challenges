const input  = document.getElementById("todo");
const btn = document.getElementById("add");
const list = document.getElementById("Mylist");

btn.addEventListener("click",()=>{
    const task = input.value.trim();
    if(task === "") return ;

    const thelist = document.createElement("li");
    thelist.textContent= task;

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "delete";
    dltbtn.onclick = ()=> thelist.remove();

    thelist.appendChild(dltbtn);
    list.appendChild(thelist);

    input.value = "";
});