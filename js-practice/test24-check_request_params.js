/**
 * 在调试阶段发送请求时候，在控制台输出 params
 * @param {object} params params
 * @param {boolean} isStringify true ? JSON.stringify : table
 */
const checkRequestParams = (params, isStringify = false) => {
  const env = process.env.NODE_ENV;
  if (env === 'production') return;
  const disParams = {};
  disassembleObj(disParams, params);
  if (isStringify) console.log(JSON.stringify(params, null, 2));
  else console.table(disParams, ['value', '0', '1', '2', '3', '4']);
};

const disassembleObj = (des, src, name, prefix = '') => {
  const _prefix = name != null ? `${prefix}_${name}` : '';
  const _name = prefix !== '' ? `${prefix}_${name}` : name;
  if (Object.prototype.toString.call(src) === '[object Object]') {
    Object.keys(src).forEach(k => {
      disassembleObj(des, src[k], k, _prefix);
    });
  } else {
    des[_name] = src;
  }
};
