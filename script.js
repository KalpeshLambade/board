function assignTask(){
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then(json => giveTask(json));
}

function giveTask(task){
    var divFromHtml =document.getElementById("main");
   
    showTasks= `<div id='task'><h2>${task.type}</h2><p>${task.activity}</p></div>`;

    divFromHtml.innerHTML =showTasks;
}