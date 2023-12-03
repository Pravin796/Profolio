function myfunc() {
    let event = document.body;
    event.classList.toggle("mode"); 

    let event2 = document.getElementById("projects");
    event2.classList.toggle("mode2"); 

    let event3 = document.getElementById("contact");
    event3.classList.toggle("mode3");
    
    let event4 = document.getElementById("footers");
    event4.classList.toggle("mode4");

    let event5 = document.querySelector(".box");
    event5.classList.toggle("mode5");
}

 let main_icon = document.querySelector(".menu_icon_box");
 let box = document.querySelector(".box");
 main_icon.onclick = function (){
    main_icon.classList.toggle("active");
    box.classList.toggle("active");
 }

 document.onclick = function(e){
    if(!main_icon.contains(e.target) && !box.contains(e.target)){
        main_icon.classList.remove("active");
        box.classList.remove("active");
    }
 }

