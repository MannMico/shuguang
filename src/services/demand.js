import fetch from '@/libs/fetch';

export function addDemad({
  nickname, //	String	联系人姓名
  phone, //	String	联系电话
  company, //	String	客户公司或品牌
  mode_ids, //	Number[]	合作方式ID数组
  detail_demand, //	String	详细需求
  country, //	Number	所在地区 - 国家
  province, //	Number	所在地区 - 省份
  city, //	Number	所在地区 - 城市
  publish_time, //	Date	期待发布时间
  vcode //	String	验证码
}) {
  return fetch.post('/demand/addDemand', {
    nickname,
    phone,
    company,
    mode_ids,
    detail_demand,
    country,
    province,
    city,
    publish_time,
    vcode
  });
}

/**
 *
 *
 * @export
 * @param {*} { service_code 产品服务简码(kuajietong:跨界通、xiaoyida:效益达、haoyimai:好易卖) , }
 * @returns
 */
export function getCooperationModes({ service_code }) {
  return fetch.post('/demand/getCooperationModes', {
    service_code
  });
}

export function planResult() {}
