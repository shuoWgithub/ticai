$(function(){
  var curPage = 0
  var pageSize = 2
  var allList = [
    {
      imgUrl: "./img/cover/1.png",
      value: 10,
      max: "25万",
    },
    {
      imgUrl: "./img/cover/2.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/3.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/4.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/5.png",
      value: 10,
      max: "25万",
    },
    {
      imgUrl: "./img/cover/6.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/7.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/8.png",
      value: 30,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/9.png",
      value: 50,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/10.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/11.png",
      value: 5,
      max: "10万",
    },
    {
      imgUrl: "./img/cover/12.png",
      value: 10,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/13.png",
      value: 2,
      max: "1.5万",
    },
    {
      imgUrl: "./img/cover/14.png",
      value: 10,
      max: "25万",
    },
    {
      imgUrl: "./img/cover/15.png",
      value: 5,
      max: "10万",
    },
    {
      imgUrl: "./img/cover/16.png",
      value: 20,
      max: "100万",
    },
    {
      imgUrl: "./img/cover/17.png",
      value: 10,
      max: "30万",
    },
    {
      imgUrl: "./img/cover/18.png",
      value: 10,
      max: "25万",
    },
    {
      imgUrl: "./img/cover/19.png",
      value: 10,
      max: "88万",
    },
    {
      imgUrl: "./img/cover/20.png",
      value: 20,
      max: "100万",
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
  });

  // 点击切页
  $('.number').click(function () {
    $(this).addClass("active");
    $(this).siblings("li").removeClass("active");
    curPage = $(this).text() - 1;
    console.log(curPage);
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
    var renderList = [];
    var length = Math.ceil(list.length / pageSize); // 向上取整
    for (var i = 0; i < length; i++) {
      var curList = list.slice(i * pageSize, i * pageSize + pageSize);
      renderList.push(curList);
    }
    if (
      renderList.length > 0 &&
      renderList[curPage] &&
      renderList[curPage].length
    ) {
      var a = $('<div class="sale-list"></div>');
      var array = renderList[curPage];
      for (var j = 0; j < array.length; j++) {
        $(a).append(
          '<div class="sale-item">' +
            '<div class="sale-item-img" style="background: url(' +
            array[j].imgUrl +
            ') no-repeat;"></div>' +
            '<div class="multiple">超级加倍50元</div>' +
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

    pageNation(length);
  }

  // 分页器
  function pageNation(length) {
    var pageHtml = '<ul class="m-pager">';
    if (curPage != 0) {
      pageHtml += '<li class="number u-pad10 ' +
        (curPage == 0 ? "no" : "") +
        ')">&nbsp;上一页</li> ';
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
        pageHtml += '<li class="number u-pad10">...&nbsp;</li>';
      }
    }

    if ((curPage + 1) != length) {
      pageHtml +=
        '<li class="number u-pad10 ' +
        (curPage == length - 1 ? "no" : "") +
        '">下一页&nbsp;</li>';
    }
    
    pageHtml += "</ul>";
    $("#mPage").html(pageHtml);
  }
  
})