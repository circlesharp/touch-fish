// ==================================================================
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
// MDN - regexp
// ==================================================================


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
 * Assertions 断言
 * 
 * include boundaries, which indicate the beginnings and endings
 * of lines and words, and other patterns indicating in some way
 * that a match is possible (including look-ahead, look-behind,
 * and conditional expressions).
 * 
 * 表示一个匹配在某些条件下发生。
 * 包括先行断言、后行断言和条件表达式
 * 
 * Boundary-type assertions:
 * ^ =>
 * $ =>
 * \b => Matches a word boundary, the position where a word character is not
 *  follow or preceded by another word-character. Note that a matched word boundary
 *  is not included in the match.
 * \B => Matches a non-word boundary, a position where the previous and next
 *  character are of the same type: either both must be words, or both must be non-words.
 * 
 * Other assertions:
 * x(?=y) => lookahead assertion, matches 'x' only if 'x' is followed by 'y'.
 * x(?!y) => negative lookahead assertion
 * (?<=y)x => lookbehind assertion
 * (?<!y)x => negative lookbehind assertion
 */
(function() {
  const testCollection = [
    'A quick fox', "Hello, I'm Tom, very nice to meet you. "
  ];
  const regexCollection = [
    /\w+$/,
    /\b\w+\b/g,
    /\B\w+\B/g,
    /\w+(?= fox)/,
  ];
  // myMatch({testCollection, regexCollection});

  let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];
  let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));
  // console.log(fruitsStartsWithNotA);

  // Select descriptions that contains 'en' or 'ed' words endings:
  let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];
  let enEdSelection = fruitsWithDescription.filter(fruit => /(?:ed|en)\b/.test(fruit));
  // console.log(enEdSelection);

  let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";
  let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/ig;
  let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/ig;
  // console.log(
  //   orangeNotLemon.match(selectNotLemonRegex),
  //   orangeNotLemon.match(selectNotOrangeRegex),
  // );

  /* 断言是可以组合使用的 */
  let testStr = 'abcdef';
  let regexAssert = /(?<=a)b(\w+(?=e))(\w+)/;
  console.log(testStr.match(regexAssert));
});


/**
 * Character classes 字符类
 * 
 * Character classes distinguish kinds of characters such as, for example,
 * distinguishing between letters and digit.
 */
(function() {
  let randomData = "015 354 8787 687351 3512 8735";
  let regexpFourDigits = /\b\d{4}\b/g;
  // console.log(randomData.match(regexpFourDigits));

  let aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
  let regexpWordStartingWithA = /\b[Aa]\w+/g;
  // console.log(aliceExcerpt.match(regexpWordStartingWithA));
})();


/**
 * Groups and ranges 组和范围
 * 
 * x|y => matches either 'x' or 'y'
 * 
 * [xyz], [a-b] => matches any one of the enclosed characters.
 *  can specify a range of characters by using a hyphen.
 *  but, if the hyphen appears as the first or last character
 *  enclosed in the square brackets, it is taken as a literal hyphen.
 * [^xyz], [^a-b] => a negated or complemented character class.
 * 
 * (?:x) => non-capturing group, matches 'x' but does not remember the match.
 * (x) => capturing group, matches x and remembers the match.
 * \n => (where 'n' is a positive integer), a back reference to the last substring
 *  matching the n parenthetical(left parentheses) in the regexp.
 * 
 * (?<Name>x) => Named capturing group
 *  Matches 'x' and stores it on the groups property of the returned matches
 *  under the name specified by <Name>.
 * \k<Name> => A back reference to the last substring matching the Named capture group
 *  specified by <Name>; \k is used literally here to indicate the beginning of a back
 *  reference to a Named capture group.
 * 
 */
(function() {
  let sentence = "Do you copy? Sir, yes Sir!";
  let regexNamedCapturingGroup = /(?<name>\w+), yes \k<name>/;
  // console.log(sentence.match(regexNamedCapturingGroup));

  let aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
  let regexpVowels = /[aeiou]/g;
  // console.log(aliceExcerpt.match(regexpVowels).length);

  let personList = `First_Name: John, Last_Name: Doe
                    First_Name: Jane, Last_Name: Smith`;
  let regexpNamesCap = /First_Name: (\w+), Last_Name: (\w+)/g;
  // console.log(regexpNamesCap.exec(personList));
  // console.log(regexpNamesCap.exec(personList));

  let regexpNamesNam = /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
  let nameRst = regexpNamesNam.exec(personList);
  console.log(nameRst.groups.firstName, nameRst.groups.lastName);
});


/**
 * Quantifiers 量词
 * 
 * Quantifiers indicate numbers of ITEM to match. (item refers not only to singular characters,
 *  but also includes character classes, Unicode property escapes, groups and ranges.)
 * 
 * x* => 0 or more times.
 * x+ => 1 or more times.
 * x{n,m} => 
 * x? => 0 or 1 times.
 *  If used immediately after any of the quantifiers *, +, ?, or {},
 *  makes the quantifier non-greedy (matching the minimum number of times).
 */
(function() {
  /* Repeated pattern */
  let delicateMessage = "This is Spartaaaaaaa";
  let wordEndingWithAs = /\b\w+a+\b/;
  // console.log(delicateMessage.match(wordEndingWithAs));

  /* Counting characters */
  let sentence = "Why do I have to learn multiplication table?";
  let regexCollectionCounting = [
    /\b\w\b/g,
    /\b\w{1,6}\b/g,
    /\b\w{13,}\b/g,
  ]
  // myMatch({testCollection: [sentence], regexCollection: regexCollectionCounting});

  /* Optional character */
  let britishText = "He asked his neighbour a favour.";
  let americanText = "He asked his neighbor a favor.";
  let regexpEnding = /\w+ou?r/g; // our, or
  // myMatch({testCollection: [britishText, americanText], regexCollection: [regexpEnding]});

  /* Greedy versus non-greedy */
  let text = "I must be getting somewhere near the centre of the earth.";
  let greedyRegexp = /[\w ]+/;
  let nonGreedyRegexp = /[\w ]+?/;
  myMatch({testCollection: [text], regexCollection: [greedyRegexp, nonGreedyRegexp]});
})();
