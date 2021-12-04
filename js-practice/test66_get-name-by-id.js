const address = [
  {
    id: 1,
    name: '北京市',
    children: [
      {
        id: 11,
        name: '海淀区',
        children: [
          {
            id: 111,
            name: '中关村',
          },
        ],
      },
      {
        id: 12,
        name: '朝阳区',
      },
    ],
  },
  {
    id: 2,
    name: '河北省',
  },
];

function getNameById(address, id) {
  if (!address) return null;

  for (const child of address) {
    if (child.id === id) {
      return child.name;
    }

    const childRst = getNameById(child.children, id);
    if (childRst) {
      return childRst;
    }
  }

  return null;
}

for (let id of [1, 11, 111, 12, 2, 3]) {
  const rst = getNameById(address, id);
  console.log(rst);
}
