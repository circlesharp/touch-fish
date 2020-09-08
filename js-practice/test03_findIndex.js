const o = [1, 2, 3, 4];
const n = [3, 4, 5, 6];

const on = Array.from(new Set([...o, ...n]))

// console.log(o, n, on)

const t = [24,12,6,9,2,4,16];
const x = t.sort((a, b) => b - a);

// console.log(t, x)

const item = {"BarCode":"6970076780349","ImageUrl":"https://res.yopoint.com/product/20171225/aa3a6f5440bc5ccf9ddf4c23f285acb5.jpg","Name":"乐纯酸奶抹茶风味","DepotQty":0,"Qty":30,"ReplenisherQty":58,"TotalStock":0,"_id":"6970076780349","ProductVO":{"Name":"乐纯酸奶抹茶风味","BoxGauges":[1]},"Tips":"0件0个","BoxGauge":1,"RealQty":0,"_index":0,"_rowKey":25};
const arr = [{"_id":"6970076780349","TotalStock":0,"BarCode":"6970076780349","TotalOutStock":30,"Name":"乐纯酸奶抹茶风味","Qty":0,"ReplenisherQty":58,"BoxGauges":[1],"ImageUrl":"https://res.yopoint.com/product/20171225/aa3a6f5440bc5ccf9ddf4c23f285acb5.jpg"},{"_id":"9555613800451","TotalStock":0,"BarCode":"9555613800451","TotalOutStock":50,"Name":"芭迪苹果果汁饮料（含椰果）350ml","Qty":0,"ReplenisherQty":69,"BoxGauges":[1],"ImageUrl":"https://res.yopoint.com/product/20170921/ece0f861da96e8c9d59c089d2d519a38.png"},{"_id":"8888888888888","TotalStock":0,"BarCode":"8888888888888","TotalOutStock":10,"Name":"培西","Qty":0,"ReplenisherQty":8,"BoxGauges":[1],"ImageUrl":"https://res.yopoint.com/product/20180910/d8aa24f6f536dc2a915e243bd4c9d2eb.png"},{"_id":"6972096684850","TotalStock":0,"BarCode":"6972096684850","TotalOutStock":30,"Name":"MOTI 一次性电子烟 (小蜡笔) 薄荷烟草","Qty":0,"ReplenisherQty":0,"BoxGauges":[1],"ImageUrl":"http://dev-res.yopoint.cc/resource/20191203/f7a02d3c4eb0cac3cd9ecc088345d88e.jpg"},{"_id":"6970360610017","TotalStock":0,"BarCode":"6970360610017","TotalOutStock":10,"Name":"酒鬼花生","Qty":0,"ReplenisherQty":0,"BoxGauges":[1],"ImageUrl":"https://res.yopoint.com/product/20190709/7fe4e389f52af9395384d41dea22b3d6.png"}];

const findIdx = (arr, item) =>
  arr.findIndex(i => i.BarCode === item.BarCode)

// console.log(findIdx(arr, item))

const test = ({a, b, c = 33}) => {
  console.log(a, b, c);
}

test({a:1, b:2})
