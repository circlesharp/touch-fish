/**
 * 转换偏移大概误差10m
 * 坐标转换，百度地图坐标转换成腾讯地图坐标
 * lng 腾讯经度（pointy）
 * lat 腾讯纬度（pointx）
 * 经度>纬度
 */
function bMapToQQMap(lng, lat) {
  if (lng == null || lng == '' || lat == null || lat == '') return [lng, lat];
  const x_pi = (3.14159265358979324 * 3000.0) / 180.0;
  const x = parseFloat(lng) - 0.0065;
  const y = parseFloat(lat) - 0.006;
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
  var lng = (z * Math.cos(theta)).toFixed(7);
  var lat = (z * Math.sin(theta)).toFixed(7);
  return [lng, lat];
}

/**
 * 坐标转换，腾讯地图转换成百度地图坐标
 * lng 腾讯经度（pointy）
 * lat 腾讯纬度（pointx）
 * 经度>纬度
 */
function qqMapToBMap(lng, lat) {
  if (lng == null || lng == '' || lat == null || lat == '') return [lng, lat];
  const x_pi = 3.14159265358979324;
  const x = parseFloat(lng);
  const y = parseFloat(lat);
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  var lng = +(z * Math.cos(theta) + 0.0065).toFixed(6);
  var lat = +(z * Math.sin(theta) + 0.006).toFixed(6);
  return [lng, lat];
}

(function () {
  let qq = {
    longitude: 113.91897183081056,
    latitude: 22.582112686229316,
  }

  let [bLng, bLat] = qqMapToBMap(qq.longitude, qq.latitude);
  let [qLng, qLat] = bMapToQQMap(bLng, bLat);

  console.log(bLng, bLat);
  console.log(qLng, qLat);
  console.log(qq.longitude, qq.latitude);
})();
