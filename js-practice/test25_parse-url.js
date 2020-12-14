const info1 = {
  "errMsg": "scanCode:ok",
  "result": "https://dev-c.yopoint.cc/cabinet/wx66d8fc647bdbe03e?CID=5f519ebf4405f00010750ef5&q=12684",
  "scanType": "QR_CODE",
  "charSet": "UTF-8",
  "rawData": "aHR0cHM6Ly9kZXYtYy55b3BvaW50LmNjL2NhYmluZXQvd3g2NmQ4ZmM2NDdiZGJlMDNlP0NJRD01ZjUxOWViZjQ0MDVmMDAwMTA3NTBlZjUmcT0xMjY4NA=="
};

const info2 = {
  "errMsg": "scanCode:ok",
  "result": "971796993188",
  "scanType": "QR_CODE",
  "charSet": "UTF-8",
  "rawData": "OTcxNzk2OTkzMTg4"
};

const parseScanResult = result => {
  if (result.includes('?')) return parseSearchParams(result);
  return { Code: result };
}

const parseSearchParams = url => {
  const searchParamsString = url.split("?")[1];
  return searchParamsString.split('&').reduce((searchParams, curKV) => {
    const [k, v] = curKV.split('=').map(decodeURIComponent);
    searchParams[k] = v;
    return searchParams;
  }, {});
}

{
  console.log(
    parseScanResult(info1.result),
    parseScanResult(info2.result),
  );
}

{
  const url = 'http://brand-1.yopoint.cc/#/forgetPwdBrand?current=3&Hash=b1579af3862c6766b9bab22f86219876&UserName=trz@yopoint.com&ExpireStamp=1607935208';
  console.log(parseScanResult(url));
}

