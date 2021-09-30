$(document).ready(function() {
    ShowTabs('prove')
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});


$(".tbs").click(function(e) {
    let dt = $(this).data();
    let ct = e.target;
    $(this).removeClass('chicle');
    if (dt.ac === false) {
        showTb()
        $(this).addClass('active-tab');
        ShowTabs(dt.tbs);
        dt.ac = true;
    } else {}
})

function showTb() {
    $('.tbs').each(function(key, value) {
        let dts = $(this).data();
        dts.ac = false;
        $(this).removeClass('active-tab');
    });
}

function ShowTabs(keys) {
    $(".contens").children().each(function(key, value) {
        let ids = value.id;
        $('#' + ids).css('display', 'none');
        if (ids === keys) {
            $('#' + ids).css('display', 'block');
        } else {
            $('#' + ids).css('display', 'none');

        }

    });

}

$('.view-noso').click(function(e) {
    console.log(e);
    let ds = $(this).data();
    if (ds.ac == false) {
        $(this).text('Ver menos...')
        let paf = e.target.nextElementSibling;
        paf.classList.remove('d-none')
        ds.ac = true
    } else {
        $(this).text('Ver más...')
        let paf = e.target.nextElementSibling;
        paf.classList.add('d-none')
        ds.ac = false
    }

});

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
})

var tendencias = document.querySelector('#ten-Slide')
var carousel = new bootstrap.Carousel(tendencias, {
    interval: 10,
    wrap: false
})

$('#senSubs').click(function(e) {
    let emails = $("#sucribirse").val();
    if (emails === '') {
        // alert('Ingrese su Email');
        $.jnoty("Ingrese su Email", {
            life: 2000,
            sticky: true,
            header: 'Alerta',
            theme: 'jnoty-warning',
            icon: 'fa fa-info-circle'
        });
        return;
    }

    const url = "helpers/senEmail.php"
    const formData = new FormData();
    formData.append('metodo', 'suscribcion');
    formData.append('email', emails);
    fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(async(response) => {
            if (response.status === 200) {
                let res = await response.json();
                if (res.status) {
                    $.jnoty(res.message, {
                        life: 2000,
                        header: 'Exito',
                        sticky: true,
                        theme: 'jnoty-success',
                        icon: 'fa fa-check-circle'
                    });
                    $("#sucribirse").val('')
                } else {
                    $.jnoty(res.message, {
                        life: 2000,
                        header: 'Error',
                        sticky: true,
                        theme: 'jnoty-danger',
                        icon: 'fa fa-check-circle'
                    });
                }
            }
        })
        .catch(error => {
            console.log(error);
        })


});

$('#sContacto').click(function(e) {
    let namec = $("#name").val();
    let emailc = $("#email").val();
    let msgc = $("#message").val();

    if (namec === '') {
        $.jnoty("Ingrese su Nombres", {
            life: 2000,
            sticky: true,
            header: 'Alerta',
            theme: 'jnoty-warning',
            icon: 'fa fa-info-circle'
        });
        return;
    }

    if (emailc === '') {
        $.jnoty("Ingrese su Email", {
            life: 2000,
            sticky: true,
            header: 'Alerta',
            theme: 'jnoty-warning',
            icon: 'fa fa-info-circle'
        });
        return;
    }

    if (msgc === '') {
        $.jnoty("Ingrese un Mensaje", {
            life: 2000,
            sticky: true,
            header: 'Alerta',
            theme: 'jnoty-warning',
            icon: 'fa fa-info-circle'
        });
        return;
    }

    const url = "helpers/senEmail.php"
    const formData = new FormData();
    formData.append('metodo', 'contacto');
    formData.append('nombre', namec);
    formData.append('email', emailc);
    formData.append('mensaje', msgc);
    fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(async(response) => {
            if (response.status === 200) {
                let res = await response.json();
                if (res.status) {
                    $.jnoty(res.message, {
                        life: 2000,
                        header: 'Exito',
                        sticky: true,
                        theme: 'jnoty-success',
                        icon: 'fa fa-check-circle'
                    });
                    $("#name").val('');
                    $("#email").val('');
                    $("#message").val('')
                } else {
                    $.jnoty(res.message, {
                        life: 2000,
                        header: 'Error',
                        sticky: true,
                        theme: 'jnoty-danger',
                        icon: 'fa fa-check-circle'
                    });
                }
            }
        })
        .catch(error => {
            $.jnoty(error, {
                life: 2000,
                header: 'Error',
                sticky: true,
                theme: 'jnoty-danger',
                icon: 'fa fa-check-circle'
            });
            // console.log(error);
        })


});