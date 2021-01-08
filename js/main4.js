$(function(){
    $('#typo .inner')
    .css('top', '-150px')
    .on('click', function(){
        $('#typo .inner').animate({
            top: '100px'
        },
        2000,
        'swing',
        function(){
            $('#typo .inner')
            .animate({
                top: '-100px'
            },
            200,
            function(){
                $('#typo .inner')
                .animate({
                    top: '0px'
                })
            });
        });
    });
});

