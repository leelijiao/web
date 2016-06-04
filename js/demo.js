var getMessage = function() {
  var url = "post.html";
  // $.get(url).success(function(rs) {
  //   var result = $.parseJSON(rs);
  //   var tplData = {
  //     "list": result.data
  //   }
  //   console.log(result);
  //   var tpl = $("#list-tpl").html();
  //   var html = juicer(tpl, tplData);
  //   $("body").html(html);
  // });

  var url = "post.html";
  var postData = {};
  $.get(url).success(function(rs) {
    var resultData = JSON.parse(rs);
    var tplData = {
      list: resultData.data
    };
    var tpl = $("#list-tpl").html();
    var htmlText = juicer(tpl, tplData);
    $("#list-content").append(htmlText);
  });
};

var dleteAll = function() {
  $(document).on("click", ".delete-all-button", function() {
    var deleteNumber = $("#list-content tr input[type=checkbox]:checked").length;
    var deleteIds = new Array();
    if(deleteNumber > 0) {
      for(var i = 0; i < deleteNumber; i++) {
        var deleteId = $("#list-content input[type=checkbox]:checked").eq(i).data("id");
        deleteIds.push(deleteId);
      }
      var url = "deleteAll.html";
      var postData = {
        "deleteIds": deleteIds
      };
      $.post(url, postData).success(function(rs) {
        alert("删除成功");
      });
    } else {
      alert("你他妈没选择");
    }
  });
};

var deleteItem = function() {
  var url = "delete.html";
  $(document).on("click", "#list-content .delete-button", function() {
    var deleteId = $(this).data("id");
    if(deleteId != undefined) {
      var postData = {"id": id};
      $.post(url, postData).suucess(function(rs) {
        alert("删除成功");
      });
    }
  });
};

$(function() {
  getMessage();
  deleteItem();
  dleteAll();
});
