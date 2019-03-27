import axios from "axios";
import qs from "qs";
import ApiUrl from "./api";
import { Notification, Throttle } from "@utils";
// import history from '@utils/history'
import { createHashHistory } from "history"; // hashRouter编程式跳转

// 函数节流（防止同时执行多次错误信息）
const Throttle_ = new Throttle();
// 创建axios实例
const Axios = axios.create({
  // timeout: 5000
});

Axios.defaults.baseURL = process.env.NODE_ENV === `production` ? `/` : ``;
// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    if (config.method !== `get`) {
      config.data = qs.stringify(config.data);
    }
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    Notification("error", "错误提示", `网络服务错误，请稍后尝试`);
    return Promise.reject(error);
  }
);
// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    const data = response.data;
    // if (data.msg) { // 判断是否有msg资产管理的msg返回，如果有则需要多一层判断
    //   if (data.retCode === 0 && data.msgCode === 0) {
    //     return data
    //   }
    // } else {
    //   if (data.retCode === 0) {
    //     return data
    //   }
    // }
    if (data.retCode === 0) {
      return data;
    } else {
      Throttle_(() => {
        Notification("error", "错误提示", data.reason);
      }, 2000);
      if (data.retCode === 2) {
        // history.push('/login') // 不支持hashRouter跳转
        createHashHistory().push("/login");
      }
      return Promise.reject(data);
    }
  },
  error => {
    if (error.response.status === 500) {
      Throttle_(() => {
        Notification("error", "错误提示", "服务器内部错误");
      }, 2000);
    } else if (error.response.status === 404) {
      Throttle_(() => {
        Notification("error", "错误提示", `资源未找到`);
      }, 2000);
    } else {
      Throttle_(() => {
        Notification("error", "错误提示", error.response.data.reason);
      }, 2000);
    }
    return Promise.reject(error);
  }
);
const Fetch = params => {
  // 请求的url
  let url_ = ApiUrl[params[`urlCode`]].url;
  // 请求的方法类型
  const method_ = params.method || `GET`;
  // 获取传给后端的参数
  let param = JSON.parse(JSON.stringify(params));
  delete param[`urlCode`];
  delete param.method;
  if (method_ === `GET`) {
    return Axios.get(
      url_,
      param.params
        ? param
        : {
            params: param
          }
    );
  }
  return Axios.post(url_, param);
};

export default Fetch;
