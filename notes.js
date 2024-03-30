let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check-icon");
let xIcon = document.getElementById("x-icon");

let i=0;

xIcon.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click",function(){
    createNote();
})

function typeNote(){

    if(container3.style.display == "none"){    //create note & delete button to hide and display add note
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}

function createNote(){                        //input text for notes
    
 let noteText = document.getElementById("note-text").value; 
 let element1 = document.createElement('div');
 let element2 = document.createElement('h1');

 element2.innerHTML = noteText;

element1.setAttribute("style","width:260px; height:260px; font-size:25px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4)");
element1.style.margin = margin();
element1.style.background = color()
element1.style.transform = rotate()

element1.appendChild(element2);
 container2.insertAdjacentElement("afterbegin",element1);

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

 checkIcon.addEventListener('click', ()=>{           //just tried arrow function :)
    typeNote();
    container3.style.display="none";
 })

}

function margin(){
    let random_margin = ['-15px', '1px', '5px','15px','10px', '20px'];  // to generate a random number
     
    return random_margin[Math.floor(Math.random()*random_margin.length)];
   
}

function rotate(){
    let random_rotate = ['rotate(3deg)','rotate(1deg)','rotate(-1deg)','rotate.-3deg)','rotate(-5deg)','rotate(-10deg)'];  // to generate a rotation degree
    
    return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}

function color(){
    let random_color = ['#c2ff3d','#ff3de8','#3dc2ff','#04e022','#bc83e6','#ebb328']; 
    if(i>random_color.length-1){
        i=0;
    }
    return random_color[i++]
}
