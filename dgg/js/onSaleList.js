$(function(){
  var curPage = 0
  var pageSize = 16
  var renderList = [];
  var length = 0
  var allList = [
    {
      imgUrl: "./img/cover/1.png",
      value: 10,
      max: "25万",
      name: '十倍幸运',
      dir: "0",
      id: 1
    },
    {
      imgUrl: "./img/cover/2.png",
      value: 20,
      max: "100万",
      name: '国宝',
      dir: "0",
      id: 2
    },
    {
      imgUrl: "./img/cover/3.png",
      value: 20,
      max: "100万",
      name: '好彩头',
      dir: "0",
      id: 3
    },
    {
      imgUrl: "./img/cover/4.png",
      value: 20,
      max: "100万",
      name: '点石成金',
      dir: "0",
      id: 4
    },
    {
      imgUrl: "./img/cover/5.png",
      value: 10,
      max: "25万",
      name: '中国红10元',
      dir: "0",
      id: 5
    },
    {
      imgUrl: "./img/cover/6.png",
      value: 20,
      max: "100万",
      name: '大熊猫',
      dir: "0",
      id: 6
    },
    {
      imgUrl: "./img/cover/7.png",
      value: 20,
      max: "100万",
      name: '五虎将',
      dir: "0",
      id: 7
    },
    {
      imgUrl: "./img/cover/8.png",
      value: 30,
      max: "100万",
      name: '大吉大利',
      dir: "0",
      id: 8
    },
    {
      imgUrl: "./img/cover/9.png",
      value: 50,
      max: "100万",
      name: '中国龙',
      dir: "0",
      id: 9
    },
    {
      imgUrl: "./img/cover/10.png",
      value: 20,
      max: "100万",
      name: '中国红20元',
      dir: "0",
      id: 10
    },
    {
      imgUrl: "./img/cover/11.png",
      value: 5,
      max: "10万",
      name: '麻辣6',
      dir: "0",
      id: 11
    },
    {
      imgUrl: "./img/cover/12.png",
      value: 10,
      max: "100万",
      name: '锦鲤10元',
      dir: "0",
      id: 12
    },
    {
      imgUrl: "./img/cover/13.png",
      value: 2,
      max: "1.5万",
      name: '太空寻宝',
      dir: "1",
      id: 13
    },
    {
      imgUrl: "./img/cover/14.png",
      value: 10,
      max: "25万",
      name: '绿翡翠9',
      dir: "0",
      id: 14
    },
    {
      imgUrl: "./img/cover/15.png",
      value: 5,
      max: "10万",
      name: '中国红5元',
      dir: "0",
      id: 15
    },
    {
      imgUrl: "./img/cover/16.png",
      value: 20,
      max: "100万",
      name: '7',
      dir: "0",
      id: 16
    },
    {
      imgUrl: "./img/cover/17.png",
      value: 10,
      max: "30万",
      name: '出7致胜',
      dir: "0",
      id: 17
    },
    {
      imgUrl: "./img/cover/18.png",
      value: 10,
      max: "25万",
      name: '通吃',
      dir: "0",
      id: 18
    },
    {
      imgUrl: "./img/cover/19.png",
      value: 10,
      max: "88万",
      name: '红包来啦',
      dir: "0",
      id: 19
    },
    {
      imgUrl: "./img/cover/20.png",
      value: 20,
      max: "100万",
      name: '爱赢爱冰雪',
      dir: "0",
      id: 20
    },
  ];

  // 初始渲染
  var list = filterArray(allList, "");
  render(list);


  // 点击价格筛选
  $(".moneyValuePrice").click(function (e) {
    $(this).siblings("div").removeClass("moneyValuePrice-active");
    $(this).addClass("moneyValuePrice-active");
    $("#list").empty()
    curPage = 0
    var value = e.currentTarget.dataset.value;
    list = filterArray(allList, value)
    render(list);
    pageNation(length);
  });

  // 点击票
  $('.sale-item').click(function (e) {
    var id = e.currentTarget.dataset.id || 1
    var dir = e.currentTarget.dataset.dir || 1
    var url = './onSaleItem_colum.shtml'
    if (dir == 1) {
      url = './onSaleItem_row.shtml'
    }
    window.location.href = url + '?id=' + id
  })
  // 点击切页
  $('.number').click(function () {
    $(this).addClass("active");
    $(this).siblings("li").removeClass("active");
    if ($(this).text() == '...') {
      return
    } else if ($(this).text() == "上一页") {
      curPage = curPage - 1;      
    } else if ($(this).text() == "下一页") {
      curPage = curPage + 1;
    } else  {
      curPage = $(this).text() - 1;
    }
    $("#list").empty();
    showCurList();
    pageNation(length);
  })


  // 筛选
  function filterArray(list, value) {
    var temporaryList = []
    if (!value) {
      temporaryList = list || []
      return temporaryList;
    }
    for (var k = 0; k < list.length; k++) {
      if (list[k] && list[k].value == value) {
        temporaryList.push(list[k]);
      }
    }

    return temporaryList;
  }

  // 渲染
  function render(list) {
    renderList = []
    length = Math.ceil(list.length / pageSize); // 向上取整
    console.log(length)
    for (var i = 0; i < length; i++) {
      var curList = list.slice(i * pageSize, i * pageSize + pageSize);
      renderList.push(curList);
    }
    showCurList()
    pageNation(length);
  }

  // 分页器
  function pageNation(length) {
    var pageHtml = '<ul class="m-pager">';
    if (curPage != 0) {
      pageHtml += '<li class="number u-pad10 ' +
        (curPage == 0 ? "no" : "") +
        ')">上一页</li> ';
    }
    for (var p = 0; p < length; p++) {
      var page = p + 1
      pageHtml +=
        '<li class="number ' +
        (p == curPage ? "active" : "") + '"'
        + '>' 
        + page
        '</li>';
      if (length > 6 && p == 5) {
        pageHtml += '<li class="number u-pad10">...</li>';
      }
    }

    if ((curPage + 1) != length) {
      pageHtml +=
        '<li class="number u-pad10 ' +
        (curPage == length - 1 ? "no" : "") +
        '">下一页</li>';
    }
    
    pageHtml += "</ul>";
    $("#mPage").html(pageHtml);
  }

  function showCurList() {
    if (
      renderList.length > 0 &&
      renderList[curPage] &&
      renderList[curPage].length
    ) {
      var a = $('<div class="sale-list"></div>');
      var array = renderList[curPage];
      for (var j = 0; j < array.length; j++) {
        $(a).append(
          '<div class="sale-item" data-id="' + array[j].id + '"data-dir="' + array[j].dir + '">' +
            '<div class="sale-item-img" style="background: url(' +
            array[j].imgUrl +
            ') no-repeat;"></div>' +
            '<div class="multiple">'+ array[j].name + '</div>' +
            '<div class="sale-item-bottom">' +
            '<div class="first-price">面值：' +
            array[j].value +
            "元</div>" +
            '<div class="second-prize">最高奖金：' +
            array[j].max +
            "元</div>" +
            "</div>" +
            "</div>"
        );
      }
      $("#list").html(a);
    } else {
    }
  }
  
})