// change content on click

$('#en').click(function () {
    $('h1').html('Hi,<br>I am Marta');
    $('.text-about-2 p').text('I am a junior Front End Developerem, after 2-months course. I am looking for a job that will let me develop my skills and keep putting me on new challenges. I am familiar with technologies: HMTL5, CSS3, SASS, JavaScript, jQuery, Bootstrap, git, looking forward to learn new ones. Perfect position would be in the multinational environment.');
    $(".portfolio div:eq(1) p").text('Graphic/animation made in pure CSS3 presenting a character from my favorite cartoon.');
    $(".portfolio div:eq(2) h3").text('Photographer');
    $(".portfolio div:eq(2) p").text('Simple, intuitive site for a freelance photographer. Coded in pure HTML5/CSS3 with addition of jQuery.');
    $(".portfolio div:eq(3) h3").text('Touché restaurant');
    $(".portfolio div:eq(3) p").text('Single-page restaurant website. Created using HTML5, CSS3, SASS and jQuery library.');
    $(".portfolio div:eq(4) p").text('Virtual instrument that enables you to play by using computer keyboard. Coded in pure HTML5, CSS3, JavaScript.');
});

$('#pl').click(function () {
    $('h1').html('Cześć,<br>jestem Marta');
    $('.text-about-2 p').text('Jestem początkującym Front End Developerem, po 2-miesięcznym kursie. Szukam pracy, która pozwoli mi się wykazać i rozwinąć. Swobodnie poruszam się w technologiach: HMTL5, CSS3, SASS, JavaScript, jQuery, Bootstrap, git, chętnie nauczę się kolejnych. Ideałem byłaby praca w środowiku międzynarodowym.');
    $(".portfolio div:eq(1) p").text('Grafika/animacja zrobiona w czystym CSS3, przedstawiająca postać z ulubionej kreskówki.');
    $(".portfolio div:eq(2) h3").text('fotograf');
    $(".portfolio div:eq(2) p").text('Prosta, intuicyjna strona dla fotografa freelancera. Kodowana w czystym HTML5/CSS3, z dodatkiem jQuery.');
    $(".portfolio div:eq(3) h3").text('restauracja Touché');
    $(".portfolio div:eq(3) p").text('Strona restauracji typu single-page. Stworzona z użyciem technologii HTML5, CSS3, SASS oraz gotowych bibliotek jQuery.');
    $(".portfolio div:eq(4) p").text('Wirtualny instrument umożliwiający granie za pomocą klawiatury komputera. Kodowany w czystym HTML5, CSS3, JavaScript.');
});