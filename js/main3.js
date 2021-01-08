$(function(){
    $('#typo .inner')
    .on('mouseover', function(){
        $('#typo .inner').css({
            color: '#ebc000',
            backgrounColor: '#ae5e9b'
        });
    })
    .on('mouseout', function(){
        $('#typo .inner').css({
            color: '',
            backgroundColor: ''
        });
    });
});

