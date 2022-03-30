$('.f-1').hover(function(){
    $('.f-1').toggleClass('fath');
    if($('.f-2').hasClass('fath')){
        $('.f-2').removeClass('fath'); 
    }else{
        $('.f-2').addClass('fath'); 
    }
});
$('.f-2').hover(function(){
    $('.f-2').addClass('fath');
});
$('.f-3').hover(function(){
    $('.f-3').toggleClass('fath');
    if($('.f-2').hasClass('fath')){
        $('.f-2').removeClass('fath'); 
    }else{
        $('.f-2').addClass('fath'); 
    }
});
 
$('.fz').click(function(){
$('.click-none').removeClass('dip')
$('.click-none2').addClass('dip')
});
$('.fz2').click(function(){
    $('.click-none2').removeClass('dip')
    $('.click-none').addClass('dip')
    });
















    $('.tabb1').fadeOut();
    $('.tabb2').fadeOut();
    $('.tab').click(function(){
        $('.tabb').fadeToggle();
        $('.tabb1').fadeOut();
        $('.tabb2').fadeOut();
        $('.for-act3').removeClass('active');
        $('.for-act2').removeClass('active');
        $('.for-act').toggleClass('active');
        });
        $('.tab2').click(function(){
            $('.tabb1').fadeToggle();
            $('.tabb').fadeOut();
            $('.tabb2').fadeOut();
            $('.for-act3').removeClass('active');
            $('.for-act').removeClass('active');
            $('.for-act2').toggleClass('active');
            });
            $('.tab3').click(function(){
                $('.tabb2').fadeToggle();
                $('.tabb1').fadeOut();
                $('.tabb').fadeOut();
                $('.for-act2').removeClass('active');
                $('.for-act').removeClass('active');
                $('.for-act3').toggleClass('active');
                });
