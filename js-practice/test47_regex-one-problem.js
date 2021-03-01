// ======================
// https://regexone.com/
// regex problem
// ======================

const myTest = ({testCollection, regexCollection}) => {
  regexCollection.forEach(regex => {
    testCollection.forEach(testItem => {
      console.log(regex.test(testItem));
    });
  });
}

const myMatch = ({testCollection, regexCollection}) => {
  regexCollection.forEach(regex => {
    testCollection.forEach(testItem => {
      console.log(testItem.match(regex));
    });
  });
}


/**
 * Problem 01 Matching a decimal numbers
 * 
 * decimal point
 * positive and negative
 * significant digits
 * exponents
 * different representations (comma used to separate thousands and millions)
 */
(function() {
  const testCollection = [
    '3.14529',
    '-255.34',
    '128',
    '1.9e10',
    '123,340.00',
    '720p',
  ];
  const regexCollection = [/^-?\d+(?:,\d+)*(?:\.\d+(?:e\d+)?)?$/];

  myMatch({testCollection, regexCollection});
});


/**
 * Problem 2 Matching phone numbers
 * 
 */
(function() {
  const testCollection = [
    '415-555-1234', // 415
    '650-555-2345', // 650
    '(416)555-3456', // 416
    '202 555 4567', // 202
    '4035555678', // 403
    '1 416 555 9292' // 416
  ];
  const regexCollection = [/(?:\d\s)?\(?(\d{3})\)?/];

  myMatch({testCollection, regexCollection});
});


/**
 * Problem 3 Matching emails
 * 
 * name +address @ company .xx .xx
 */
(function() {
  const testCollection = [
    'tom@hogwarts.com',
    'tom.riddle@hogwarts.com',
    'tom.riddle+regexone@hogwarts.com',
    'tom@hogwarts.eu.com',
    'potter@hogwarts.com',
    'harry@hogwarts.com',
    'hermione+regexone@hogwarts.com',
  ];
  const regexCollection = [/^(\w+(?:\.\w+)*)(?:\+\w+)?@(?:\w+)(?:\.\w+)?(?:\.\w+)/]; // name +address @ company .xx .xx

  myMatch({testCollection, regexCollection});
});


/**
 * Problem 4 Matching HTML
 */
// 略 答案太简单，但实际上很复杂


/**
 * Problem 5 Matching specific filenames
 * 
 */
(function() {
  const testCollection = [
    '.bash_profile',
    'workspace.doc',
    'img0912.jpg', // img0912 jpg
    'updated_img0912.png', // updated_img0912 png
    'documentation.html',
    'favicon.gif', // favicon gif
    'img0912.jpg.tmp',
    'access.lock',
  ];
  const regexCollection = [/^(\w+)\.(jpg|png|gif)$/];

  myMatch({testCollection, regexCollection});
});


/**
 * Problem 6 Trimming whitespace from start and end of line
 * 
 * 前一个严谨一点，采用 \s?word 的策略，但是如果 word 还有特殊符号就挂了
 * 第二个是参考答案，不严谨，最后的 \s 还保留着
 * 第三个简直完美 ?<!
 * 还可以使用 replace: replace(/(^\s*)|(\s*$)/g, "")
 * 
 * x(?=y) => 先行断言: 匹配 x 仅当后面跟着 y
 * (?<=y)x => 后行断言: 匹配 x 仅当后面跟着 y
 * x(?!y) => 正向否定查找: 匹配 x 仅当后面不跟着 y
 * (?<!y)x => 反向否定查找: 匹配 x 仅当后面不跟着 y
 */
(function() {
  const testCollection = [
    '				The quick brown fox.   ',
    '	   jumps over the lazy dog.',
  ];
  const regexCollection = [
    /^\s*((?:\s?\w+)*)/,
    /^\s*(.*)\s*$/,
    /^\s*(.*(?<!\s))\s*$/,
  ];

  myMatch({testCollection, regexCollection});
});


/**
 * Problem 7: Extracting information from a log file
 * 
 * extract the filename, method name and line number of line of the stack trace.
 */
(function() {
  const testCollection = [
    'E/( 1553):   at widget.List.fillFrom(ListView.java:709)',
    'E/( 1553): java.lang.StringIndexOutOfBoundsException',
  ];
  const regexCollection = [/(?<=\.)(\w+)\(([\w\.]+):(\d+)\)/];

  myMatch({testCollection, regexCollection});
});


/**
 * Problem 8 Parsing and extracting data from a URL
 * 
 * scheme => describes the protocol to communicate with
 * host => describes the source of the resource
 * port (optional) => same
 * resource path => describes the location at the source for resource.
 * 
 * extract the protocol, host and port
 */
(function() {
  const testCollection = [
    'ftp://file_server.com:21/top_secret/life_changing_plans.pdf',
    'https://regexone.com/lesson/introduction#section',
    'file://localhost:4040/zip_file',
    'https://s3cur3-server.com:9999/',
  ];
  const regexCollection = [/^(\w+):\/\/([^\/:]+):?(\d+)?\//];

  myMatch({testCollection, regexCollection});
})();
