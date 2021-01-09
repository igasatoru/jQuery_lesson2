$(function(){
    $('#typo').typoShadow();
    $('h1').typoShadow();

    $('h1').css('color', 'red');
    // $('#typo .inner').css('transform','rotate(10deg)');
    // $('.page-main > div:nth-child(1) .inner').css('opacity',0.5);

    /*
    $('#typo').on('mouseover', function(){
        $('#typo').css('color','#ebc000');
    });
    */
    /*
    $('#typo').on('click', function(){
        $('#typo').css('background-color','#ebc000');
        $('h1').css('color','yellow');
    });
    */
    $('#typo').on('mouseover', function(){
        $('#typo .inner').animate({
            // opacity: 0,
            // fontSize: '0px',
            color: 'red'
        },
        1000
        );
    })
    .on('mouseout', function(){
        $('#typo .inner').animate({
            color: 'black'
        },
        1000
        );
    });
});

