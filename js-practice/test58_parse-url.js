const tests = [
  'https://c.yopoint.com/cabinet/wx21cbadf63f793cba?CID=605462941ee059001188416a&q=36106&n=1',
  'https://dev-c.yopoint.cc/cabinet/wx66d8fc647bdbe03e?CID=5f519ebf4405f00010750ef5&q=12684'
];

const parse = url => {
  const params = {};
  const cidURL = url.match(/c\.yopoint\.\S+\/cabinet\/(\S+)\?(\S+)/);

  if (cidURL) {
    cidURL[2].split("&").forEach(i => {
      const [key, value] = i.split('=')
      params[key] = value
    });
  }
  return params;
}

for (const url of tests)
  console.log(parse(url))
