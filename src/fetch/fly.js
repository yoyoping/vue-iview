import Fly from "flyio";
import ApiUri from "./api";
import { Throttle } from "@utils/app";
import { Message } from "iview";
// import { createHashHistory } from 'history' // hashRouter编程式跳转
// 函数节流（防止同时执行多次错误信息）
const Throttle_ = new Throttle();

// 函数节流函数报错函数
const TToast = () => {
  Throttle_(() => {
    Message.warning("系统繁忙，请稍后再试！", 2);
  }, 2000);
};

// 添加请求拦截器
Fly.interceptors.request.use(config => {
  config.baseURL =
    process.env.NODE_ENV === `production`
      ? `/`
      : `https://www.easy-mock.com/mock/5a62bc9868c0d85c378988bf/yoyoping`;
  // 给所有请求添加自定义header
  config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  config.headers["x-access-token"] = localStorage["token"] || "";
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
  config.timeout = 30000;
  return config;
});

// 添加响应拦截器
Fly.interceptors.response.use(
  (response, promise) => {
    const data = response.data;
    if (data.retCode === 200) {
      return data;
    } else {
      if (data.retCode === 401) {
        // 未登录
        localStorage.clear();
        // createHashHistory().push('/login')
      }
      return promise.reject(data);
    }
  },
  (error, promise) => {
    if (!error.response) {
      TToast();
      return;
    }
    if (error.response.status === 500) {
      TToast();
    } else if (error.response.status === 404) {
      Throttle_(() => {
        Message.warning("资源未找到", 2);
      }, 2000);
    } else {
      Throttle_(() => {
        Message.warning(error.msg, 2);
      }, 2000);
    }
    return promise.reject(error);
  }
);

const Fetch = params => {
  const { code, method, ...param } = params;
  // 请求的url
  let uri = ApiUri[code].uri;
  // 获取传给后端的参数
  if (method) {
    return Fly[method](uri, param);
  }
  return Fly.get(uri, param);
};

export default Fetch;
