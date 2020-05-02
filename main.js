//Controllo tasti slider

//Interazione per il tasto next
$(".next").click(function() {
    //Individuo l'elemento active e gli tolgo l'active
    var current_image = $("img.active");
    current_image.removeClass("active");

    //Individuo l'elemento successivo. Se presente, sposto l'active all'elemento successivo, altrimenti riparto dal primo elemento
    var next_image = current_image.next();

    if (next_image.length != 0) {
        next_image.addClass("active");
    } else {
        $(".photos img:first-child").addClass("active");
    }
})

//Interazione per il tasto prev
$(".prev").click(function() {
    //Individuo l'elemento active e gli tolgo l'active
    var current_image = $("img.active");
    current_image.removeClass("active");

    //Individuo l'elemento successivo. Se presente, sposto l'active all'elemento successivo, altrimenti riparto dal primo elemento
    var prev_image = current_image.prev();

    if (prev_image.length != 0) {
        prev_image.addClass("active");
    } else {
        $(".photos img:last-of-type").addClass("active");
    }
})
