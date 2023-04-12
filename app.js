var input = document.getElementById("d");


function v(num){
    d.innerHTML += num; 
}
function de(){
    d.innerHTML = d.innerHTML.slice(0,-1);

}
function c(){
    d.innerHTML = "";
}
function e(){
    try{
        d.innerHTML = eval(d.innerHTML);
}
 catch(err){
    swal("Syntax Error ❌ ");
 }
 if(d.innerHTML == "undefined"){
    d.innerHTML = "";
 }
}


