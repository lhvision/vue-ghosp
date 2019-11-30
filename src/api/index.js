// 引入ajax
import ajax from './ajax'
// 定义一个常量,设置地址
const BASE = '/api'
// 根据经纬度获取位置详情
export const reqAddress = ({longitude, latitude}) => ajax.get(BASE + `/position/${latitude},${longitude}`)
// 获取食品分类列表
export const reqCategorys = () => ajax({
  method: 'GET',
  url: BASE + `/index_category`,
  // headers: {
  //   needToken: true // 标识: 需要携带token
  // }
})
// 根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax({
  method: 'GET',
  url: BASE + `/shops`,
  params: {
    longitude,
    latitude
  }
})
// 发送短信验证码
export const reqSendcode = (phone) => ajax({
  method: 'GET',
  url: BASE + `/sendcode`,
  params: {
    phone
  }
})
// 用户名和密码和图形验证码
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax({
  method: 'POST',
  url: BASE + `/login_pwd`,
  data: {
    name,
    pwd,
    captcha
  }
})
// 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax({
  method: 'POST',
  url: BASE + `/login_sms`,
  data: {
    phone,
    code
  }
})
// 自动登录
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: BASE + '/auto_login',
  headers: {
    needToken: true // 标识: 需要携带token
  }
})

// 获取点餐
export const reqGoods = () => ajax('/goods')
// 获取评价
export const reqRatings = () => ajax('/ratings')
// 获取商家
export const reqInfo = () => ajax('/info')
