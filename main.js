//Controllo tasti slider

//Interazione per il tasto next
$(".next").click(function() {
    //Individuo l'elemento active e gli tolgo l'active
    var current_image = $("img.active");
    current_image.removeClass("active");

    //Individuo il pallino attivo e tolgo l'active-dot
    var current_dot = $(".active-dot");
    current_dot.removeClass("active-dot");

    //Individuo l'elemento successivo e il relativo pallino. Se presente, sposto l'active all'elemento successivo, altrimenti riparto dal primo elemento
    var next_image = current_image.next();
    var next_dot = current_dot.next();

    if (next_image.length != 0) {
        next_image.addClass("active");
        next_dot.addClass("active-dot");
    } else {
        $(".photos img:first-child").addClass("active");
        $(".img-selector .fa-circle:first-child").addClass("active-dot");
    }
})

//Interazione per il tasto prev
$(".prev").click(function() {
    //Individuo l'elemento active e gli tolgo l'active
    var current_image = $("img.active");
    current_image.removeClass("active");

    //Individuo il pallino attivo e tolgo l'active-dot
    var current_dot = $(".active-dot");
    current_dot.removeClass("active-dot");

    //Individuo l'elemento e il pallino successivo. Se presente, sposto l'active all'elemento successivo, altrimenti riparto dal primo elemento
    var prev_image = current_image.prev();
    var prev_dot = current_dot.prev();

    if (prev_image.length != 0) {
        prev_image.addClass("active");
        prev_dot.addClass("active-dot");
    } else {
        $(".photos img:last-of-type").addClass("active");
        $(".img-selector .fa-circle:last-child").addClass("active-dot");
    }
})
