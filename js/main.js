/*silder jquery plug*/
$(document).ready(function(){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1300,
      responsive: true,
    });
  });

  ///posts

  var posts=[
    {
        title: "Prueba de título 6",
        date: 'Publicado el '+ moment().format('Do ') +"de "+ moment().format('MMMM ') + moment().format('YYYY '),
        content: 'Lorem ipsum ALTA PRUEBA PARA VER EL ORDEN adipiscing elit. Aliquam ornare eros vel semper ultricies. Pellentesque maximus est et lectus viverra, id volutpat odio facilisis. Nulla pulvinar mi ac turpis pellentesque imperdiet. Suspendisse congue mi eget diam suscipit, a suscipit diam auctor. Duis id sodales neque. Nullam ut laoreet felis, eget congue mi. Nam at lobortis lorem. Maecenas id viverra sapien, condimentum cursus orci. Sed dolor quam, pretium a arcu a, scelerisque dictum nullaed enim erat, ullamcorper ut ex faucibus, imperdiet luctus diam',
    },
    {
        title: "Prueba de título 1",
        date: 'Publicado el '+ moment().format('Do ') +"de "+ moment().format('MMMM ') + moment().format('YYYY '),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare eros vel semper ultricies. Pellentesque maximus est et lectus viverra, id volutpat odio facilisis. Nulla pulvinar mi ac turpis pellentesque imperdiet. Suspendisse congue mi eget diam suscipit, a suscipit diam auctor. Duis id sodales neque. Nullam ut laoreet felis, eget congue mi. Nam at lobortis lorem. Maecenas id viverra sapien, condimentum cursus orci. Sed dolor quam, pretium a arcu a, scelerisque dictum nullaed enim erat, ullamcorper ut ex faucibus, imperdiet luctus diam',
    },
    {
        title: "Prueba de título 2",
        date: 'Publicado el '+ moment().format('Do ') +"de "+ moment().format('MMMM ') + moment().format('YYYY '),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare eros vel semper ultricies. Pellentesque maximus est et lectus viverra, id volutpat odio facilisis. Nulla pulvinar mi ac turpis pellentesque imperdiet. Suspendisse congue mi eget diam suscipit, a suscipit diam auctor. Duis id sodales neque. Nullam ut laoreet felis, eget congue mi. Nam at lobortis lorem. Maecenas id viverra sapien, condimentum cursus orci. Sed dolor quam, pretium a arcu a, scelerisque dictum nullaed enim erat, ullamcorper ut ex faucibus, imperdiet luctus diam',
    },
    {
        title: "Prueba de título 3",
        date: 'Publicado el '+ moment().format('Do ') +"de "+ moment().format('MMMM ') + moment().format('YYYY '),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare eros vel semper ultricies. Pellentesque maximus est et lectus viverra, id volutpat odio facilisis. Nulla pulvinar mi ac turpis pellentesque imperdiet. Suspendisse congue mi eget diam suscipit, a suscipit diam auctor. Duis id sodales neque. Nullam ut laoreet felis, eget congue mi. Nam at lobortis lorem. Maecenas id viverra sapien, condimentum cursus orci. Sed dolor quam, pretium a arcu a, scelerisque dictum nullaed enim erat, ullamcorper ut ex faucibus, imperdiet luctus diam',
    },
{
        title: "Prueba de título 4",
        date: 'Publicado el '+ moment().format('Do ') +"de "+ moment().format('MMMM ') + moment().format('YYYY '),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare eros vel semper ultricies. Pellentesque maximus est et lectus viverra, id volutpat odio facilisis. Nulla pulvinar mi ac turpis pellentesque imperdiet. Suspendisse congue mi eget diam suscipit, a suscipit diam auctor. Duis id sodales neque. Nullam ut laoreet felis, eget congue mi. Nam at lobortis lorem. Maecenas id viverra sapien, condimentum cursus orci. Sed dolor quam, pretium a arcu a, scelerisque dictum nullaed enim erat, ullamcorper ut ex faucibus, imperdiet luctus diam',
    }
];

posts.forEach((item, index)=> {
    var post = `
    <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button">Leer más...</a>
    </article>`;
    $("#articulos").append(post);
});

///SCROLL

var scroll= $("#scroll");
    $(scroll).click(function(e){
        e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
});

///LOGIN FALSO

$('#login').submit(function(){
    var form_name = $('#form_name').val();
    localStorage.setItem('form_name', form_name);
});

var form_name = localStorage.getItem('form_name');

if(form_name != null && form_name != undefined){
    $('#saludo').html('Hola '+ form_name + ' Bienvenida campeona');
    $('#saludo').append('<a href="#" id="logout"> Cerrar sesión </a>');
    
    $('#logout').click(function(){
        localStorage.clear();
        location.reload();
    });
};
//else(alert("introduce los datos correctamente"))



































