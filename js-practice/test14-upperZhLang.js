function upperZhLang(lang) {
  let lowerLang = lang.toLowerCase();
  if (lowerLang.indexOf('en') === 0) return 'en';
  if (lowerLang === 'zh-tw') return 'zh-TW';
  return 'zh-CN';
};

console.log(
  upperZhLang('en'),
  upperZhLang('en-us'),
  upperZhLang('zh-cn'),
  upperZhLang('zh-CN'),
);
