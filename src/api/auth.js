import request from "@/utils/request";

//数据格式
const headers = { "Content-Type": "application/x-www-form-urlencoded" };

// 请求头添加 Authorization: Basic client_id:client_secret
const auth = {
  username: "blog-admin", //client_id  mxg-blog-admin
  password: "123456",
};

export function login(data) {
  return request({
    headers,
    auth,
    url: "/auth/login",
    method: "post",
    params: data,
  });
}

//获取协议
export function getAggrentment() {
  return request({
    url: `${window.location.href}/xieyi.html`, //  /public/xieyi.html
    method: "get",
  });
}

//查询用户名是否被注册
export function getUserByUsername(username) {
  return request({
    url: `/system/api/user/username/${username}`,
    method: "get",
  });
}

// 提交注册数据
export function register(data) {
  return request({
    headers,
    auth,
    url: `/system/api/user/register`,
    method: "post",
    params: data,
  });
}

//退出系统
export function logout(accessToken) {
  return request({
    url: `/auth/logout`,
    method: "get",
    params: { accessToken },
  });
}
