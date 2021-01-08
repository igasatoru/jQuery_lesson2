$(function(){
    $('#typo')
    .on('mouseover', function(){
        $('#typo').stop(true).animate({
            backgroundColor:'#ae5e9b'
        },
        500
    )
    .on('mouseout', function(){
        $('#typo').stop(true).animate({
            backgroundColor: '#3498db'
        },
        500
    );
    
    });
});
});

