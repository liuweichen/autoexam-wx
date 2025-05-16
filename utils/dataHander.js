var app = getApp()


//得到Lib名称排序
function getLibsName() {
  var name_order = app.globalData.name_order;
  var libsName = [];
  for (var i = 0; i < name_order.length; i++) {
    libsName.push(name_order[i][0]);
  }
  return libsName
}

//得到指定Lib下的题库名
function getSubsName() {
  var libName = app.globalData.selectLib;
  var name_order = app.globalData.name_order;
  var subsName = [];
  for (var i = 0; i < name_order.length; i++) {
    if (name_order[i][0] == libName) {
      subsName = name_order[i].slice(1);
      break;
    }
  }
  return subsName
}

//乱序
function outOfOrder(items) {
  var newitems = items.slice(0);
  var len = items.length;
  //将列表随机打乱3*len次
  for (var i = 0; i < 3 * len; i++) {
    //得到随机数
    var rnd = parseInt(Math.random() * len, 10);
    //交换选项
    var item = newitems[0];
    newitems[0] = newitems[rnd];
    newitems[rnd] = item;
  }
  return newitems;
}

module.exports = {
  getLibsName,
  getSubsName,
  outOfOrder
}
