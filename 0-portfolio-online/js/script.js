// change content on click

$('#en').click(function () {
    $('h1').html('Hi,<br>I am Marta');
    $('.text-about-2 p').text('I am a junior Front End Developerem. I am looking for a job that will let me develop my skills and keep putting me on new challenges. I am familiar with technologies: HMTL5, CSS3, SASS, JavaScript, jQuery, Bootstrap, git, looking forward to learn new ones. Perfect position would be in the multinational environment.');
    $(".projects-container a:eq(0) .project p").text('Graphic/animation made in pure CSS3 presenting a character from my favorite cartoon.');
    $(".projects-container a:eq(1) .project h3").text('Photographer');
    $(".projects-container a:eq(1) .project p").text('Simple, intuitive site for a freelance photographer. Coded in pure HTML5/CSS3 with addition of jQuery.');
    $(".projects-container a:eq(2) .project h3").text('Touché restaurant');
    $(".projects-container a:eq(2) .project p").text('Single-page restaurant website. Created using HTML5, CSS3, SASS and jQuery library.');
    $(".projects-container a:eq(3) .project p").text('Virtual instrument that enables you to play by using computer keyboard. Coded in pure HTML5, CSS3, JavaScript.');
    $("#pl").removeClass('pl');
});

$('#pl').click(function () {
    $('h1').html('Cześć,<br>jestem Marta');
    $('.text-about-2 p').text('Jestem początkującym Front End Developerem. Szukam pracy, która pozwoli mi się wykazać i rozwinąć. Swobodnie poruszam się w technologiach: HMTL5, CSS3, SASS, JavaScript, jQuery, Bootstrap, git, chętnie nauczę się kolejnych. Ideałem byłaby praca w środowiku międzynarodowym.');
    $(".projects-container a:eq(0) .project p").text('Grafika/animacja zrobiona w czystym CSS3, przedstawiająca postać z ulubionej kreskówki.');
    $(".projects-container a:eq(1) .project h3").text('fotograf');
    $(".projects-container a:eq(1) .project p").text('Prosta, intuicyjna strona dla fotografa freelancera. Kodowana w czystym HTML5/CSS3, z dodatkiem jQuery.');
    $(".projects-container a:eq(2) .project h3").text('restauracja Touché');
    $(".projects-container a:eq(2) .project p").text('Strona restauracji typu single-page. Stworzona z użyciem technologii HTML5, CSS3, SASS oraz gotowych bibliotek jQuery.');
    $(".projects-container a:eq(3) .project p").text('Wirtualny instrument umożliwiający granie za pomocą klawiatury komputera. Kodowany w czystym HTML5, CSS3, JavaScript.');
});