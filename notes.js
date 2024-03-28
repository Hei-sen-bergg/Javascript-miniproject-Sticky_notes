var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

var i=0;

xIcon.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click",function(){
    createNote();
})

function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}

function createNote(){
 var noteText = document.getElementById("note-text").value;
 var element1 = document.createElement('div');
 var element2 = document.createElement('h1');

 element2.innerHTML = noteText;

element2.setAttribute("style","width:260px; height:260px; font-size:25px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4)");
element2.style.margin = margin();
element2.style.background = color()
element2.style.transform = rotate()

element1.appendChild(element2);
 container2.insertAdjacentElement('beforeend',element1);

 element1.addEventListener("mouseenter", function(){
    element1.style.transform = "scale(1.1)";
 })

 element1.addEventListener("mouseleave", function(){
    element1.style.transform = "scale(1)";
 })

 element1.addEventListener("dblclick", function(){
    element1.remove();
 })

 document.getElementById("note-text").value = "";

}

function margin(){
    var random_margin = ['-15px', '1px', '5px','15px','10px', '20px'];
    // to generate a random number 
    return random_margin[Math.floor(Math.random()*random_margin.length)];
   
}

function rotate(){
    var random_rotate = ['rotate(3deg)','rotate(1deg)','rotate(-1deg)','rotate.-3deg)','rotate(-5deg)','rotate(-10deg)'];
    // to generate a rotation degree
    return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}

function color(){
    var random_color = ['#c2ff3d','#ff3de8','#3dc2ff','#04e022','#bc83e6','#ebb328'];
    if(i>random_color.length-1){
        i=0;
    }
    return random_color[i++]
}