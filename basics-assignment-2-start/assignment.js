const task3Element = document.getElementById('task-3');


function emptyAlert(){
    alert("some text of my choosing");
}

function nameAlert(name){
    alert(name);
}

emptyAlert();
nameAlert('Maria');


task3Element.addEventListener('click', emptyAlert);

function concat(str1, str2, str3){
    var comb = str1 + str2 + str3;
    return comb;
}

alert(concat('I', "love", "you"));