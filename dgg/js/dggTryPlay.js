$(function(){
  // 图对应的标题
  var titleArr = [
    '点石成金好运随心',
    "国宝招财，公益有爱",
    "锦鲤附体，好运随你",
    "十足运气，“辣”手好戏",
    "十倍幸运，精彩十倍",
    "“中国红”红遍中国"
  ]
  // 6个呱呱卡分别对应的中奖结果类型
  var awardImgCount = [5, 6, 5, 5, 6, 5]
  // 6个呱呱卡分别对应的中奖奖金
  var awardMoneys = [
    [40, 0, 0, 1000, 500],
    [20, 400, 0, 100, 60, 0],
    [0, 50, 10, 20, 0, 100],
    [100, 0, 0, 50, 300],
    [60, 0, 0, 50, 20, 100],
    [20, 500, 0, 0, 50]
  ]
  var awardMoney = 0

  // 右侧对应的信息
  var rightContent = [
    {
      name: "点石成金",
      award: [
        {
          title: "面值",
          value: "20",
          unit: "元"
        },
        {
          title: "套票张数",
          value: "1",
          unit: "张"
        },
        {
          title: "最高奖金",
          value: "1000,000",
          unit: "元"
        },
        {
          title: "中奖机会",
          value: "20",
          unit: "次"
        }
      ],
      introduce: "匹配中奖数字和刮中奖标志。",
      rule: "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果出现“金币”标志即中得该标志下方所示的金额；如果出现“人民币”标志即中得该标志下方所示金额的5倍；如果出现“金砖”标志即中得刮开区内所示的20个金额之和。中奖奖金兼中兼得",
      tabel: ['1,000,000元', "500,000元", "20,000元", "10,000元", "5,000元", "1,000元", "500元", '100元', '80元', '60元', '40元', '20元']
    },
    {
      name: "国宝",
      award: [
        {
          title: "面值",
          value: "20",
          unit: "元"
        },
        {
          title: "套票张数",
          value: "6",
          unit: "张"
        },
        {
          title: "最高奖金",
          value: "1000,000",
          unit: "元"
        },
        {
          title: "中奖机会",
          value: "18",
          unit: "次"
        }
      ],
      introduce: "刮中奖符号。",
      rule: "刮开覆盖膜如果出现“国宝”标志即中得该标志下方所示的金额；如果出现“顶呱刮”标志即中得该标志下方所示金额的5倍。中奖奖金兼中兼得。",
      tabel: ['1,000,000元', "10,000元", "3,000元", "600元", "400元", '100元', '60元', '30元', '20元']
    },
    {
      name: "锦鲤10元",
      award: [
        {
          title: "面值",
          value: "10",
          unit: "元"
        },
        {
          title: "套票张数",
          value: "3",
          unit: "张"
        },
        {
          title: "最高奖金",
          value: "250,000",
          unit: "元"
        },
        {
          title: "中奖机会",
          value: "12",
          unit: "次"
        }
      ],
      introduce: "刮中奖符号。",
      rule: "刮开覆盖膜，如果出现“锦鲤”标志，即中得该标志下方所示的金额；如果出现“顶呱刮”标志，即中得该标志下方所示金额的3倍。中奖奖金兼中兼得。",
      tabel: ['250,000元', "10,000元", "1,000元", "500元", "100元", '50元', '30元', '20元', '10元']
    },
    {
      name: "麻辣6",
      award: [
        {
          title: "面值",
          value: "5",
          unit: "元"
        },
        {
          title: "套票张数",
          value: "1",
          unit: "张"
        },
        {
          title: "最高奖金",
          value: "100,000",
          unit: "元"
        },
        {
          title: "中奖机会",
          value: "8",
          unit: "次"
        }
      ],
      introduce: "匹配中奖数字和刮中奖标志。",
      rule: "刮开覆盖膜如果你的号码中任意一个号码与麻辣号码之一相同即中得该号码下方所示的金额；如果出现“辣椒”标志即中得该标志下方所示金额的6倍。中奖奖金兼中兼得。",
      tabel: ['100,000元', "1,000元", "600元", "300元", "100元", '50元', '40元', '20元', '10元','5元']
    },
    {
      name: "十倍幸运",
      award: [
        {
          title: "面值",
          value: "10",
          unit: "元"
        },
        {
          title: "套票张数",
          value: "1",
          unit: "张"
        },
        {
          title: "最高奖金",
          value: "250,000",
          unit: "元"
        },
        {
          title: "中奖机会",
          value: "10",
          unit: "次"
        }
      ],
      introduce: "匹配中奖数字和刮中奖标志。",
      rule: "中奖奖金兼中兼得！刮开覆盖膜如果在任意一场游戏中的任意号码与中奖号码相同即中得该场游戏右方所示的金额；如果出现“双鱼”标志即中得该场游戏右方所示金额的10倍。",
      tabel: ['250,000元', "5,000元", "1,600元", "800元", "400元", "100元", '50元', '30元', '20元', '10元']
    },
    {
      name: "中国红20元",
      award: [
        {
          title: "面值",
          value: "20",
          unit: "元"
        },
        {
          title: "套票张数",
          value: "1",
          unit: "张"
        },
        {
          title: "最高奖金",
          value: "1,000,000",
          unit: "元"
        },
        {
          title: "中奖机会",
          value: "21",
          unit: "次"
        }
      ],
      introduce: "匹配中奖数字和刮中奖标志。",
      rule: "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果出现“红”标志即中得该标志下方所示金额的2倍；如果出现“灯笼”标志即中得该标志下方所示金额的5倍；如果出现“中国结”标志即中得刮开区内所示的20个金额之和。如果在幸运奖区出现金额标志即中得该金额。中奖奖金兼中兼得",
      tabel: ['1,000,000元', "100,000元", "10,000元", "5000元", "1000元", "500元", '200元', '50元', '30元', '20元']
    }
  ]
  var params = window.location.search || ''
  var id = 1
  if (params.indexOf('?') > -1) {
    let paramArr = []
    params = params.slice(1)
    paramArr = params.split('&')
    if (paramArr.length) {
      for(var i = 0; i < paramArr.length; i++) {
        var item = paramArr[i]
        var itemArr = item.split('=')
        if (itemArr.length > 0 && itemArr[0] == 'id') {
          id = itemArr[1]
        }
      }
    }
  }
  $('#title').html(titleArr[id -1])
  $('#imgA').attr('src', "./img/shigua/"+ id + "/1.png")
  $('#imgB').attr('src', "./img/shigua/"+ id + "/2.png")
  $('#imgC').attr('src', "./img/shigua/"+ id + "/3.png")
  $('#imgD').attr('src', "./img/shigua/"+ id + "/4.png")
  getAwardOne()
  if (id == 1) {
    $('.content').css('width', "390px")
    $('.u-conImg').css('height', '309px')
    $('#redux').attr('src', "./img/shigua/"+ id + "/2.png")
    $('#redux').css({
      'width':'390px',
      'height': '309px'
    })   
  } else if (id == 2) {
    $('.content').css('width', "390px")
    $('.u-conImg').css('height', '202px')
    $('#redux').attr('src', "./img/shigua/"+ id + "/2.png")
    $('#redux').css({
      'width':'390px',
      'height': '202px'
    })
  } else if (id == 3) {
    $('.content').css({
      "height": "585px"
    })
    $('.u-conImg').css('height', '141px')
    $('#redux').attr('src', "./img/shigua/"+ id + "/2.png")
    $('#redux').css({
      'width':'390px',
      'height': '141px'
    })
  } else if (id == 4) {
    $('.content').css({
      'width': "580px",
      "height": "auto"
    })
    $('.test').css({
      'display': 'flex',
      "flex-direction": "row"
    })
    $('.u-headImg').css({
      'width': '267px',
      "height": '580px'
    })
    $('.u-fotImg').css({
      'width': '14px',
      "height": '580px'
    })
    $('.u-conImg').css({
      'width': '300px',
      "height": '580px'
    })
    $('#redux').attr('src', "./img/shigua/"+ id + "/2.png")
    $('#redux').css({
      'width':'300px',
      'height': '580px'
    })
  } else if (id == 5) {
    $('.content').css('width', "520px")
    $('.u-conImg').css('height', '602px')
    $('#redux').attr('src', "./img/shigua/"+ id + "/2.png")
    $('#redux').css({
      'width':'520px',
      'height': '602px'
    })
  } else if (id == 6) {
    $('.content').css('width', "390px")
    $('.u-conImg').css('height', '424px')
    $('#redux').attr('src', "./img/shigua/"+ id + "/2.png")
    $('#redux').css({
      'width':'390px',
      'height': '424px'
    })
  }
  
  $('#redux').eraser({
   size: 40,
   completeRatio: 0.8,
   completeFunction: function () {
    try{
      $("#redux").eraser("clear");
    }catch(e){}
    if(awardMoney > 0){
      $('#zj-value').html(awardMoney + '元');
      $('.g-maskZj').show();
    }else{
      $('.g-maskWzj').show();
    }
   }
  });

  
  // 名字
  $('#dgg-name').html(rightContent[id -1].name)
  // 奖金信息
  var awardArr = rightContent[id -1].award || []
  if (awardArr.length) {
    for(var awardIndex = 0; awardIndex < awardArr.length; awardIndex++) {
      var awardObj = awardArr[awardIndex]
      if(awardObj.title == '套票张数') continue
      $('#award').append('<div class="price-value">'
        + '<span>' + awardObj.title + '：</span>'
        + '<span class="color1">' + awardObj.value + '</span>'
        + '<span>' + awardObj.unit + '</span>'
        + '</div>')
    }
  }
  // 玩法介绍
  $('.how-play .how-play-content').html(rightContent[id -1].introduce)
  // 游戏规则
  $('.how-play-rule .how-play-content').html(rightContent[id -1].rule)
  // 奖级设置
  var tabelArr = rightContent[id -1].tabel || []
  if (tabelArr.length) {
    for(var id1 = 0; id1 < tabelArr.length; id1++) {
      var tr_num2 = id1 % 2 ? 'tr_num2' : ''
      $('.table').append('<tr class="' + tr_num2 + '">'
      + '<td>' + (id1 + 1) + '</td>'
      + '<td>' + tabelArr[id1] + '</td>'
      + '</tr>')
    }
  }

  // 翻转
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

  // 再来一次
  $('.tryAgain').click(function () {
    $("#redux").eraser("reset");
    $(".g-maskWzj").hide();
    $(".g-maskZj").hide();
    getAwardOne()
  })
  // 兑奖
  $('.cash').click(function () {
    $("#redux").eraser("clear");
  })

  // 随机生成一个中奖结果
  function getAwardOne () {
    let a = Math.random();
    let b = a * awardImgCount[id - 1]
    let c = Math.floor(b) //向下取整
    awardMoney = awardMoneys[id - 1][c]
    $('#finally').attr('src', "./img/shigua/" + id + "/2-" + c + ".png")
  }
});