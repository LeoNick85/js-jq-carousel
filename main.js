//Controllo tasti slider

//Interazione per il tasto next
$(".next").click(next_photo);

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

//Istruzioni per cambiare immagine tramite click su pallino
$(".fa-circle").click(function() {
    //Salvo la posizione del pallino cliccato
    var nth_clicked_dot = $(this).index() + 1;
    var nth_old_dot = $(".active-dot").index() + 1;

    //Tolgo l'active dal pallino precedente e lo aggiungo a quello nuovo
    $(".fa-circle:nth-child(" + nth_old_dot + ")").removeClass("active-dot");
    $(".fa-circle:nth-child(" + nth_clicked_dot + ")").addClass("active-dot");

    //Tolgo l'active dalla foto vecchia e lo metto a quella cliccata
    $(".photos img:nth-child(" + nth_old_dot + ")").removeClass("active");
    $(".photos img:nth-child(" + nth_clicked_dot + ")").addClass("active");
})



//Avvio l'autoplay a caricamento pagina
autoplay();


// Avvio l'autoplay se utente clicca play relativo
$(".autoplay.play").click(function(){
    autoplay();
    console.log("play");
});

//Interrompo l'autoplay
$(".autoplay.pause").click(function(){
    clearInterval(autoplay_on);
    console.log("pausa");
});


//FUNZIONI
//Funzione per autoplay per far scorrere automaticamente le immagini ogni 3 secondi
function autoplay() {
    autoplay_on = setInterval(next_photo, 3000);
};

//Funzione per passare all'immagine successiva, aggiornando anche il relativo pallino
function next_photo() {
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
}
