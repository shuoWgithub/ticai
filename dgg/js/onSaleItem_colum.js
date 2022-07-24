var result = {
  dggName: "国宝招财，公益有爱1",
  dggFrontImg: "./img/test/colum1.png",
  dggBackImg: "./img/test/colum2.png",
  dggDetail: {
    name: "国宝",
    faceValue: 20,
    ticketNumber: 3,
    maxAward: 100000,
    winningChance: 8,
    playIntroduce: "刮中奖符号",
    playRule: "刮开覆盖膜如果出现“国宝”标志即中该标志下方所示的金额；如果出现“顶刮呱“标志即中得该标志下放所示金额的5倍。中奖奖金兼中兼得。",
    setting: [
      {
        level: 1,
        money: 1000000
      },
      {
        level: 2,
        money: 1000000
      },
      {
        level: 3,
        money: 1000000
      },
      {
        level: 4,
        money: 1000000
      },
      {
        level: 5,
        money: 1000000
      },
      {
        level: 6,
        money: 1000000
      },
      {
        level: 7,
        money: 1000000
      },
      {
        level: 8,
        money: 1000000
      },
      {
        level: 9,
        money: 1000000
      },
    ]
  }
}


$('.left-content1 .title').html(result.dggName)
$('.front').html('<img src="' + result.dggFrontImg + '"alt="">')
$('.back').html('<img src="' + result.dggBackImg + '"alt="">')
if (result.dggDetail) {
  $('.right-content1 .name').html(result.dggDetail.name || '顶呱刮')
  if (result.dggDetail.faceValue) {
    // 面值
    $('#award').append('<div class="price-value">'
        + '<span>面值：</span>'
        + '<span class="color1">' + result.dggDetail.faceValue + '</span>'
        + '<span>元</span>'
        + '</div>')
  }
  // 套票张数
  if (result.dggDetail.ticketNumber) {
    $('#award').append('<div class="price-value">'
        + '<span>套票张数：</span>'
        + '<span class="color1">' + result.dggDetail.ticketNumber + '</span>'
        + '<span>张</span>'
        + '</div>')
  }
  // 最高奖金
  if (result.dggDetail.maxAward) {
    $('#award').append('<div class="price-value">'
        + '<span>最高奖金：</span>'
        + '<span class="color1">' + result.dggDetail.maxAward + '</span>'
        + '<span>元</span>'
        + '</div>')
  }
  // 中奖机会
  if (result.dggDetail.winningChance) {
    $('#award').append('<div class="price-value">'
        + '<span>中奖机会：</span>'
        + '<span class="color1">' + result.dggDetail.winningChance + '</span>'
        + '<span>次</span>'
        + '</div>')
  }
  // 游戏介绍
  if(result.dggDetail.playIntroduce) {
    $('.how-play .how-play-content').html(result.dggDetail.playIntroduce)
  }
  // 游戏规则
  if(result.dggDetail.playRule) {
    $('.how-play-rule .how-play-content').html(result.dggDetail.playRule)
  }
  // 奖级设置
  if(result.dggDetail.setting) {
    var htmlStr = ''
    var setting = result.dggDetail.setting || []
    for(var i = 0; i < setting.length; i++) { 
      htmlStr += '<tr class=' + (i % 2 == 1 ? 'tr_num2' : '') + '>'
              + '<td>' + setting[i].level + '</td>'
              + '<td>' + setting[i].money + '元</td>'
              + '</tr>'
    }
    $('.table').append(htmlStr)
  }
}


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