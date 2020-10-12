// fn for bot harvest busting

$(window).on("load", function(){
    // need to wait for on load, otherwise sometimes this will not attach on the default $ 'ready'
    $('a[data-mail]').on('click', function() {
        window.location = 'mailto:' + $(this).data('mail')+'@'+ $(this).data('domain')+'?subject=Inquiry from MLD Website';
    });
});
