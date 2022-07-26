var params = window.location.search || ''
var id = 1
if (params.indexOf('?') > -1) {
  let paramArr = []
  params = params.slice(1)
  paramArr = params.split('&')
  if (paramArr.length) {
    for (var i = 0; i < paramArr.length; i++) {
      var item = paramArr[i]
      var itemArr = item.split('=')
      if (itemArr.length > 0 && itemArr[0] == 'id') {
        id = itemArr[1]
      }
    }
  }
}



var arr = {
  1: {
    name: '十倍幸运',
    subname: '十倍幸运，精彩十倍',
    faceValue: '10',
    ticketNumber: '1',
    maxAward: '250,000',
    winningChance: '10',
    playIntroduce: '匹配中奖数字和刮中奖标志。',
    playRule: '中奖奖金兼中兼得！刮开覆盖膜如果在任意一场游戏中的任意号码与中奖号码相同即中得该场游戏右方所示的金额；如果出现“双鱼”标志即中得该场游戏右方所示金额的10倍。',
    setting: "1_250,000元-2_5,000元-3_1,600元-4_800元-5_400元-6_100元-7_50元-8_30元-9_20元-10_10元"
  },
  2: {
    name: "国宝",
    subname: '国宝招财，公益有爱',
    faceValue: 20,
    ticketNumber: 6,
    maxAward: '1,000,000',
    winningChance: 18,
    playIntroduce: "刮中奖符号",
    playRule: "刮开覆盖膜如果出现“国宝”标志即中该标志下方所示的金额；如果出现“顶刮呱“标志即中得该标志下放所示金额的5倍。中奖奖金兼中兼得。",
    setting: "1_1,000,000元-2_10,000元-3_3,000元-4_600元-5_400元-6_100元-7_60元-8_30元-9_20元"
  },
  3: {
    name: "好彩头",
    subname: '鸿运当头 就刮好彩头',
    faceValue: 20,
    ticketNumber: 2,
    maxAward: '1,000,000',
    winningChance: 12,
    playIntroduce: "找中奖符号",
    playRule: "刮开覆盖膜，如果出现钱袋标志，即中得该标志下方所示的金额；如果出现金条标志，即中得该标志下方所示金额的5倍；如果出现元宝标志，即中得该标志下方所示金额的10倍。中奖奖金兼中兼得。",
    setting: "1_1,000,000元-2_100,000元-3_10,000元-4_5,000元-5_1,000元-6_500元-7_150元-8_60元-9_30元-10_20元"
  },
  4: {
    "name": "点石成金",
    "subname": "点石成金好运随心",
    "faceValue": "20",
    "ticketNumber": "1",
    "maxAward": "1,000,000",
    "winningChance": "20",
    "playIntroduce": "匹配中奖数字和刮中奖标志。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果出现“金币”标志即中得该标志下方所示的金额；如果出现“人民币”标志即中得该标志下方所示金额的5倍；如果出现“金砖”标志即中得刮开区内所示的20个金额之和。中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_500,000元-3_20,000元-4_10,000元-5_5,000元-6_1,000元-7_500元-8_100元-9_80元-10_60元-11_40元-12_20元"
  },
  5: {
    "name": "中国红10元",
    "subname": "“中国红”红遍中国",
    "faceValue": "10",
    "ticketNumber": "1",
    "maxAward": "250,000",
    "winningChance": "13",
    "playIntroduce": "匹配中奖数字和刮中奖标志。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果出现“红”标志即中得该标志下方所示金额的2倍；如果出现“灯笼”标志即中得该标志下方所示金额的5倍。如果在幸运奖区出现金额标志即中得该金额。中奖奖金兼中兼得。",
    "setting": "1_250,000元-2_10,000元-3_1,000元-4_500元-5_200元-6_100元-7_50元-8_20元-9_10元"
  },
  6: {
    "name": "大熊猫",
    "subname": "国宝“大熊猫”憨态可掬",
    "faceValue": "20",
    "ticketNumber": "1",
    "maxAward": "1,000,000",
    "winningChance": "21",
    "playIntroduce": "刮中奖符号。",
    "playRule": "主游戏：刮开覆盖膜，如果出现“国宝”标志，即中得该标志下方所示的金额；如果出现“顶呱刮”标志，即中得该标志下方所示金额的5倍。\n幸运游戏：刮开幸运游戏覆盖膜，如果出现金额标志，即中得该金额。\n中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_100,000元-3_10,000元-4_3,000元-5_600元-6_400元-7_100元-8_50元-9_30元-10_20元"
  },
  7: {
    "name": "五虎将",
    "subname": "五虎上将 好运势不可挡",
    "faceValue": "20",
    "ticketNumber": "5",
    "maxAward": "1,000,000",
    "winningChance": "20",
    "playIntroduce": "找中奖符号",
    "playRule": "刮开覆盖膜，如果出现5个中奖标志中的任意一个标志，即中得该标志下方所示的金额。中奖奖金兼中兼得。中奖标志为“青龙偃月刀”、“ 丈八蛇矛”、“青釭剑”、“虎头湛金枪”、“铁胎弓”",
    "setting": "1_1,000,000元-2_100,000元-3_10,000元-4_1,000元-5_500元-6_300元-7_100元-8_50元-9_30元-10_20元"
  },
  8: {
    "name": "",
    "subname": "大吉大利，横扫百万",
    "faceValue": "30",
    "ticketNumber": "1",
    "maxAward": "1,000,000",
    "winningChance": "30",
    "playIntroduce": "匹配中奖数字，刮相同号码和中奖符号3种玩法。",
    "playRule": "游戏一：刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额。\n游戏二：刮开覆盖膜如果在任意一排游戏中出现两个相同的号码即中得该排游戏右方所示的金额。\n游戏三：刮开覆盖膜如果出现“橘子”标志即中得该标志下方所示的金额；如果出现“钞票”标志即中得该标志下方所示金额的2倍。中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_300,000元-3_30,000元-4_3,000元-5_1,000元-6_300元-7_100元-8_50元-9_30元"
  },
  9: {
    "name": "中国龙",
    "subname": "龙的传人就要刮龙票",
    "faceValue": "50",
    "ticketNumber": "1",
    "maxAward": "1,000,000",
    "winningChance": "39",
    "playIntroduce": "刮奖金符号和匹配中奖数字。",
    "playRule": "游戏一：刮开覆盖膜，如果出现“￥100”标志，即中得100元；\n游戏二：刮开覆盖膜，如果出现“￥150”标志，即中得150元；\n游戏三：刮开覆盖膜，如果出现“￥600”标志，即中得600元；\n游戏四：刮开覆盖膜，如果出现“￥800”标志，即中得800元。\n游戏五：刮开覆盖膜，如果你的号码中任意一个号码与中奖号码相同，即中得该号码下方所示的金额；\n如果你的号码中任意一个号码与翻倍号码相同，即中得该号码下方所示金额的2倍。中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_100,000元-3_10,000元-4_1,000元-5_800元-6_600元-7_150元-8_100元-9_50元"
  },
  10: {
    "name": "中国红20元",
    "subname": "“中国红”红遍中国",
    "faceValue": "20",
    "ticketNumber": "1",
    "maxAward": "1,000,000",
    "winningChance": "21",
    "playIntroduce": "匹配中奖数字和刮中奖标志。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果出现“红”标志即中得该标志下方所示金额的2倍；如果出现“灯笼”标志即中得该标志下方所示金额的5倍；如果出现“中国结”标志即中得刮开区内所示的20个金额之和。如果在幸运奖区出现金额标志即中得该金额。中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_100,000元-3_10,000元-4_5,000元-5_1,000元-6_500元-7_200元-8_50元-9_30元-10_20元"
  },
  11: {
    "name": "麻辣6",
    "subname": "十足运气，“辣”手好戏",
    "faceValue": "5",
    "ticketNumber": "1",
    "maxAward": "100,000",
    "winningChance": "8",
    "playIntroduce": "匹配中奖数字和刮中奖标志。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与麻辣号码之一相同即中得该号码下方所示的金额；如果出现“辣椒”标志即中得该标志下方所示金额的6倍。中奖奖金兼中兼得。\n",
    "setting": "1_100,000元_2_1,000元-3_600元-4_300元-5_100元-6_50元-7_40元-8_20元-9_10元-10_5元"
  },
  12: {
    "name": "锦鲤",
    "subname": "锦鲤附体，好运随你",
    "faceValue": "20",
    "ticketNumber": "3",
    "maxAward": "1,000,000",
    "winningChance": "20",
    "playIntroduce": "刮中奖符号。",
    "playRule": "刮开覆盖膜，如果出现“锦鲤”标志，即中得该标志下方所示的金额；如果出现“顶呱刮”标志，即中得该标志下方所示金额的3倍；如果出现“龙”标志，即中得该标志下方所示金额的10倍。中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_100,000元-3_10,000元-4_1,000元-5_500元-6_200元-7_100元-8_50元-9_30元-10_20元"
  },
  13: {
    "name": "太空寻宝",
    "subname": "太空寻宝，宝藏不少",
    "faceValue": "2",
    "ticketNumber": "1",
    "maxAward": "15,000",
    "winningChance": "1",
    "playIntroduce": "刮相同标志。",
    "playRule": "刮开覆盖膜如果同一个金额出现3次即中得该金额；如果同一个金额出现两次并同时出现一个“土星”标志即中得该金额的2倍。",
    "setting": "1_15,000元-2_1,000元-3_500元-4_100元-5_50元-6_20元-7_10元-8_5元-9_2元"
  },
  14: {
    "name": "绿翡翠9",
    "subname": "魅力绿翡翠，好运常相随",
    "faceValue": "10",
    "ticketNumber": "1",
    "maxAward": "250,000",
    "winningChance": "12",
    "playIntroduce": "匹配中奖数字和刮中奖标志。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码右方所示的金额；如果出现“九翡翠”标志即中得该标志右方所示金额的9倍。中奖奖金兼中兼得。",
    "setting": "1_250,000元-2_9,000元-3_900元-4_450元-5_180元-6_90元-7_50元-8_20元-9_15元-10_10元"
  },
  15: {
    "name": "中国红5元",
    "subname": "“中国红”红遍中国",
    "faceValue": "5",
    "ticketNumber": "1",
    "maxAward": "100,000",
    "winningChance": "9",
    "playIntroduce": "匹配中奖数字和刮中奖标志。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果出现“红”标志即中得该标志下方所示金额的2倍。如果在幸运奖区出现金额标志即中得该金额。中奖奖金兼中兼得。",
    "setting": "1_100,000元-2_1,000元-3_500元-4_200元-5_100元-6_50元-7_20元-8_10元-9_5元"
  },
  16: {
    "name": "7",
    "subname": "好运如7而至",
    "faceValue": "20",
    "ticketNumber": "4",
    "maxAward": "1,000,000",
    "winningChance": "20",
    "playIntroduce": "刮中奖符号。",
    "playRule": "刮开覆盖膜如果出现“7”标志即中得该标志下方所示的金额；如果出现“77”标志即中得该标志下方所示金额的2倍；如果出现“777”标志即中得该标志下方所示金额的3倍。中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_70,000元-3_7,000元-4_700元-5_300元-6_100元-7_70元-8_50元-9_30元-10_20元"
  },
  17: {
    "name": "出7制胜",
    "subname": "出7制胜 势不可挡",
    "faceValue": "10",
    "ticketNumber": "5",
    "maxAward": "300,000",
    "winningChance": "16",
    "playIntroduce": "刮中奖符号。",
    "playRule": "刮开覆盖膜如果出现\"7\"标志即中得该标志下方所示的金额；如果出现\"77\"标志即中得该标志下方所示金额的2倍。中奖奖金兼中兼得。",
    "setting": "1_300,000元-2_70,000元-3_7,000元-4_500元-5_200元-6_100元-7_50元-8_20元-9_10元"
  },
  18: {
    "name": "通吃",
    "subname": "奖金通吃 惊喜刺激",
    "faceValue": "10",
    "ticketNumber": "1",
    "maxAward": "250,000",
    "winningChance": "12",
    "playIntroduce": "匹配中奖数字。",
    "playRule": "刮开覆盖膜如果你的号码中任意一个号码与中奖号码之一相同即中得该号码下方所示的金额；如果你的号码中任意一个号码与通吃号码之一相同即中得刮开区内所示的12个金额之和！中奖奖金兼中兼得。",
    "setting": "1_250,000元-2_1,000元-3_500元-4_200元-5_50元-6_20元-7_10元"
  },
  19: {
    "name": "红包",
    "subname": "刮体彩红包，牛年步步高",
    "faceValue": "10",
    "ticketNumber": "1",
    "maxAward": "880,000",
    "winningChance": "8",
    "playIntroduce": "刮奖金标志和红包标志。",
    "playRule": "主玩法：刮开覆盖膜，如果出现金额标志，即中得该金额。主玩法中奖奖金兼中兼得。\n附加玩法：刮开覆盖膜，如果出现红包标志，即根据红包的个数中得下方奖金对照表中所对应的金额。附加玩法中奖奖金不可兼中兼得。\n总中奖金额=主玩法中奖金额+附加玩法中奖金额。",
    "setting": "1_880,000元-2_88,000元-3_8,800元-4_880元-5_600元-6_100元-7_80元-8_50元-9_30元-10_20元-11_10元"
  },
  20: {
    "name": "爱赢爱冰雪",
    "subname": "爱赢爱冰雪",
    "faceValue": "20",
    "ticketNumber": "1",
    "maxAward": "1,000,000",
    "winningChance": "20",
    "playIntroduce": "找中奖金额+数字匹配",
    "playRule": "游戏一：刮开覆盖膜，如果出现金额标志，即中得该金额。\n游戏二：刮开覆盖膜，如果你的号码中任意一个号码与中奖号码之一相同，即中得该号码下方所示的金额；如果出现\"爱心\"标志，即中得该标志下方所示金额的两倍。\n中奖奖金兼中兼得。",
    "setting": "1_1,000,000元-2_100,000元-3_10,000元-4_1,000元-5_500元-6_200元-7_100元-8_50元-9_30元-10_20元"
  }
}

var result = arr[id]
console.log(result)

var result1 = {
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


$('.left-content1 .title').html(result.name)
// $('.front').html('<img src="' + result.dggFrontImg + '"alt="">')
// $('.back').html('<img src="' + result.dggBackImg + '"alt="">')
if(result.subname) {
    $('.right-content1 .name').html(result.subname || '顶呱刮')
if (result.faceValue) {
  // 面值
  $('#award').append('<div class="price-value">'
    + '<span>面值：</span>'
    + '<span class="color1">' + result.faceValue + '</span>'
    + '<span>元</span>'
    + '</div>')
}
// 套票张数
if (result.ticketNumber) {
  $('#award').append('<div class="price-value">'
    + '<span>套票张数：</span>'
    + '<span class="color1">' + result.ticketNumber + '</span>'
    + '<span>张</span>'
    + '</div>')
}
// 最高奖金
if (result.maxAward) {
  $('#award').append('<div class="price-value">'
    + '<span>最高奖金：</span>'
    + '<span class="color1">' + result.maxAward + '</span>'
    + '<span>元</span>'
    + '</div>')
}
// 中奖机会
if (result.winningChance) {
  $('#award').append('<div class="price-value">'
    + '<span>中奖机会：</span>'
    + '<span class="color1">' + result.winningChance + '</span>'
    + '<span>次</span>'
    + '</div>')
}
// 游戏介绍
if (result.playIntroduce) {
  $('.how-play .how-play-content').html(result.playIntroduce)
}
// 游戏规则
if (result.playRule) {
  $('.how-play-rule .how-play-content').html(result.playRule)
}
// 奖级设置
if (result.setting) {
  var settingArr = result.setting.split('-')
  var htmlStr = ''
  for (var i = 0; i < settingArr.length; i++) {
    var setting = settingArr[i].split("_") || []
    htmlStr += '<tr class=' + (i % 2 == 1 ? 'tr_num2' : '') + '>'
      + '<td>' + setting[0] + '</td>'
      + '<td>' + setting[1] + '</td>'
      + '</tr>'
  }
  $('.table').append(htmlStr)
}
}


var obverse = true
$('.preserve').click(function () {
  if (obverse) {
    $('.back').css('transform', ' rotateY(0deg)')
    $('.back').css('z-index', '2')
    $('.front').css('transform', 'rotateY(180deg)')
    $('.front').css('z-index', '1')
  } else {
    $('.front').css('transform', ' rotateY(0deg)')
    $('.front').css('z-index', '2')
    $('.back').css('transform', 'rotateY(180deg)')
    $('.back').css('z-index', '1')
  }
  obverse = !obverse
})