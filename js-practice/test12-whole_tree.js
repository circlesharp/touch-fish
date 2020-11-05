const originTree = [{"id":"0","text":"所有分类","children":[{"id":"58e6ee4369c7ef1100ad2f06","text":"饮料","level":1,"parent_id":"","children":[{"id":"58f0922f0c8ea811005dbaa5","text":"碳酸饮料","level":2,"parent_id":"58e6ee4369c7ef1100ad2f06","children":[{"id":"5f03dd987277850010215de4","BarCode":"6928804014686","Name":"雪碧零卡330mlSleek Can","CategoryID":"58f0922f0c8ea811005dbaa5","ParentCategoryID":"58e6ee4369c7ef1100ad2f06","ImageUrl":"https://res.yopoint.com/product/20190402/227781fdb0f2faf05933ad70d7b2f488.png","ImageFixWidthUrl":"https://res.yopoint.com/product/20190402/df27a2c629bd6111a3a6b88a3ba6c3d4.png","Stock":1}]}]},{"id":"58f094160f5dbd1100568db3","text":"零食","level":1,"parent_id":"","children":[{"id":"59093ab8b9128e1100e477d5","text":"饼干","level":2,"parent_id":"58f094160f5dbd1100568db3","children":[{"id":"5f5ad82b7baf0f00103ad0f7","BarCode":"6901180993486","Name":"嘉士利饼干","CategoryID":"59093ab8b9128e1100e477d5","ParentCategoryID":"58f094160f5dbd1100568db3","ImageUrl":"https://res.yopoint.com/product/20181123/b3b2b7f3729a4a12b562f12be33958c0.png","ImageFixWidthUrl":"https://res.yopoint.com/product/20181123/b3b2b7f3729a4a12b562f12be33958c0.png","Stock":1}]}]},{"id":"5993b34ac01923000f0cd13a","text":"数码产品","level":1,"parent_id":"","children":[{"id":"59842f99ca5d4b000fb14580","text":"3D眼镜","level":2,"parent_id":"5993b34ac01923000f0cd13a","children":[{"id":"5f17b59dabe83b0010951076","BarCode":"6911988012012","Name":"大熊公仔娃娃1","CategoryID":"59842f99ca5d4b000fb14580","ParentCategoryID":"5993b34ac01923000f0cd13a","ImageUrl":"http://dev-res.yopoint.cc/resource/20200721/ee9e6effa5f2f3878750dbff47082126.jpg","ImageFixWidthUrl":"http://dev-res.yopoint.cc/resource/20200720/47d93f021b5a72425bd26c784a5014b6.jpg","Stock":1}]}]},{"id":"5c71595549b1a5001351a2f6","text":"其他","level":1,"parent_id":"","children":[{"id":"5c715963d3b8950011f866b5","text":"未分类","level":2,"parent_id":"5c71595549b1a5001351a2f6","children":[{"id":"5f03e81e7277850010215f30","BarCode":"6925303723910","Name":"统一冰红茶1L","CategoryID":"5c715963d3b8950011f866b5","ParentCategoryID":"5c71595549b1a5001351a2f6","ImageUrl":"https://res.yopoint.com/product/20190528/d10d58e747f583f6f554018e98419cd0.png","ImageFixWidthUrl":"https://res.yopoint.com/product/20190528/4733bc75b0e1c505d42ff8274d799ae3.png","Stock":1}]}]}],"level":0}];

const makeWholeBranchTree = originTree => {
  const wholeTree = {
    text: '全部',
    level: 1,
    children: [],
  };
  originTree[0].children.forEach(cate => {
    wholeTree.children.push({
      text: cate.text,
      level: 2,
      children: [],
    });
    cate.children.forEach(group => {
      group.children.forEach(goods => {
        goods.rufundNum = goods.Stock;
        wholeTree.children[wholeTree.children.length - 1].children.push(goods);
      });
    });
  });
  originTree[0].children.unshift(wholeTree);
  return originTree;
};

const changeRefundNum = (arr, barcode, refundNum) => {
  if (Array.isArray(arr)) {
    arr.forEach((item, key) => {
      if ('children' in item) changeRefundNum(item.children, barcode, refundNum);
      else if (item.BarCode === barcode) item.rufundNum = refundNum;
    });
  }
}

// makeWholeBranchTree(originTree)
console.log(JSON.stringify(makeWholeBranchTree(originTree), null, 2));
