// ======================
// https://regexone.com/
// regex practice
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
 * Lesson 1 An Introduction
 * 
 * Everything is essentially a character,
 * and we are writing patterns to match a special sequence of characters
 * (also known as a string).
 * 
 * \d => in place of any digit from 0 to 9.
 * 
 * Pattern matches anywhere within the string,
 * not just starting at the first character.
 */
(function() {
  const testCollection = ['abc123xyz', 'define "123"', 'var g = 123'];
  const regexCollection = [/123/, /\d\d\d/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 2 The Dot (wildcard)
 * 
 * In some card games, the Joker is a wildcard,
 * and can represent any card in the deck.
 * 
 * . => wildcard, can match any single character
 * (letter, digit, whitespace, everything).
 * 
 * \. => period, escape the dot by using a slash.
 */
(function() {
  const testCollection = ['cat.', '896.', '	?=+.', 'abc1']; // skip 'abc1'
  const regexCollection = [/\./];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 3 Matching specific characters
 * 
 * [] => There is a  method for matching specific characters
 * using regular expressions, by defining them inside square brackets.
 * 
 * [a, b, c] => only match a single a, b, or c letter and nothing else.
 */
(function() {
  const testCollection = ['can', 'man', 'fan', 'dan', 'ran', 'pan']; // skip 'abc1'
  const regexCollection = [/[cmf]an/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 4 Excluding specific characters
 * 
 * [^] => excludes specific characters.
 * 
 * [^abc] => match any single character except for the letter a, b, or c.
 */
(function() {
  const testCollection = ['hog', 'dog', 'bog']; // skip 'bog'
  const regexCollection = [/[hd]og/, /[^b]og/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 5 Character ranges
 * 
 * [-] => matching a character in list of sequential characters
 * by using the dash to indicate a character range
 * 
 * [0-6], [^n-p], [A-Za-z0-9_] (\w)
 */
(function() {
  const testCollection = ['Ana', 'Bob', 'Cpc', 'aax', 'bby', 'ccz']; // skip 'aax', 'bby', 'ccz'
  const regexCollection = [/[A-C]../];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 6 Catching repeating
 * 
 * {} => to specify how many repetitions of each character we want
 * using the curly braces notation.
 * 
 * {3}, {1, 3} (no more than 3, but no less than once)
 */
(function() {
  const testCollection = ['wazzzzzup', 'wazzzup', 'wazup']; // skip 'wazup'
  const regexCollection = [/z{2,}/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 7 Match an arbitrary number of characters
 * 
 * * => Kleene Star, 0 or more
 * + => Kleene Plus, 1 or more
 */
(function() {
  const testCollection = ['aaaabcc', 'aabbbbc', 'aacc', 'a']; // skip 'a'
  const regexCollection = [/[bc]+/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 8 Characters optional
 * 
 * ? => denotes optionality (0 or 1)
 */
(function() {
  const testCollection = ['1 file found?', '2 files found?', '24 files found?', 'No files found.']; // skip 'No files found.'
  const regexCollection = [/\d+\sfiles?/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 9 All this whitespace
 * 
 * \s => space, tab(\t), new line(\n), carriage return(\r)
 */
(function() {
  const testCollection = ['   abc', '	abc', '           abc', 'abc']; // skip 'abc'
  const regexCollection = [/\s+abc/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 10 Starting and ending
 * 
 * It is often best practice to write as specific regular expressions as possible
 * to ensure that we don't get false positives when matching against real world text.
 * 
 * ^(hat) => the start of the line
 * $(dollar sign) => the end of the line
 */
(function() {
  const testCollection = ['Mission: successful', 'Last Mission: unsuccessful']; // skip 'Last Mission: unsuccessful'
  const regexCollection = [/^Mission/];

  myTest({testCollection, regexCollection});
});


/**
 * Lesson 11 Match groups
 * 
 * Regular express allow us to not just match text but also to
 * extract information for further processing.
 * 
 * This is done by defining groups of characters and capturing them
 * using the special parentheses ( and ) metacharacters.
 * 
 * Any subpattern inside a pair of parentheses will be captured as a group.
 */
(function() {
  const testCollection = ['file_record_transcript.pdf', 'file_07241999.pdf', 'testfile_fake.pdf.tmp']; // skip 'testfile_fake.pdf.tmp'
  const regexCollection = [/^(file_.+)\.pdf$/];

  myMatch({testCollection, regexCollection});
});


/**
 * Lesson 12 Nested groups
 * 
 * the results of the captured groups are in the order
 * in which they are defined (in order by open parenthesis).
 */
(function() {
  const testCollection = ['Jan 1987', 'May 1969', 'Aug 2011'];
  const regexCollection = [/([A-Z][a-z]+\s(\d{4}))/];

  myMatch({testCollection, regexCollection});
});


/**
 * Lesson 13 More group work
 * 
 * non-capturing groups => allow you to match the group
 * but not have it show up in the results.
 */
(function() {
  const testCollection = ['1280x720', '1920 * 1600', '1024 x 768'];
  const regexCollection = [/(\d+)(?:\s*[x*]\s*)(\d+)/];

  myMatch({testCollection, regexCollection});
});


/**
 * Lesson 14 It's all conditional
 * 
 * | => OR, aka. pipe, denote different possible sets of characters.
 */
(function() {
  const testCollection = [
    'I love cats',
    'I love dogs',
    'I love logs',
    'I love cogs',
  ];
  const regexCollection = [/I\slove\s(?:cats|dogs)/];

  myMatch({testCollection, regexCollection});
})();


/**
 * Lesson 15 Other special characters
 * 
 * \D => non-digit
 * \S => non-whitespace
 * \W => non-alphanumeric
 * \b => matches the boundary between a word and a non-word character.
 */
(function() {
  const testCollection = [
    'I love cats',
    'I love dogs',
    'I love logs',
    'I love cogs',
  ];
  const regexCollection = [/I\slove\s(?:cats|dogs)/];

  myMatch({testCollection, regexCollection});
})();
