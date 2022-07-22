var obverse = true
$('.preserve').click(function(){
  if(obverse){
    $('.back').css('transform', ' rotateY(0deg)')
    $('.back').css('z-index', '2')
    $('.front').css('transform', 'rotateY(180deg)')
    $('.front').css('z-index', '1')
  }else{
    $('.front').css('transform', ' rotateY(0deg)')
    $('.front').css('z-index', '2')
    $('.back').css('transform', 'rotateY(180deg)')
    $('.back').css('z-index', '1')
  } 
  obverse = !obverse
})