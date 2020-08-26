import { login, logout } from "@/api/auth";
import { PcCookie, Key } from "@/utils/cookie";

//状态
const state = {
  userInfo: PcCookie.get(Key.userInfoKey)
    ? JSON.parse(PcCookie.get(Key.userInfoKey))
    : null, // 用户信息对象
  accessToken: PcCookie.get(Key.accessTokenKey), // 访问令牌字符串
  refreshToken: PcCookie.get(Key.refreshTokenKey), // 刷新令牌字符串
};

//改变状态值
const mutations = {
  SET_USER_STATE(state, data) {
    const { userInfo, access_token, refresh_token } = data;
    state.userInfo = userInfo;
    state.accessToken = access_token;
    state.refreshToken = refresh_token;
    // 保存到cookie中
    PcCookie.set(Key.userInfoKey, userInfo);
    PcCookie.set(Key.accessTokenKey, access_token);
    PcCookie.set(Key.refreshTokenKey, refresh_token);
  },
  //重置用户状态，退出和登录失败调用
  RESET_USER_STATE(state) {
    // 状态置空
    state.userInfo = null;
    state.accessToken = null;
    state.refreshToken = null;
    // 移除cookie
    PcCookie.remove(Key.userInfoKey);
    PcCookie.remove(Key.accessTokenKey);
    PcCookie.remove(Key.refreshTokenKey);
  },
};

//定义行为

const actions = {
  UserLogin({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { code, data } = response;
          if (code === 20000) {
            //状态赋值
            commit("SET_USER_STATE", data);
          }
          resolve(response);
        })
        .catch((error) => {
          //状态重置
          commit("RESET_USER_STATE");
          reject(error);
        });
    });
  },
  UserLogout({ state, commit }, redirectURL) {
    logout(state.accessToken)
      .then(() => {
        // 重置状态
        commit("RESET_USER_STATE");
        // 退出后，重写向地址，如果没有传重写向到登录页 /
        window.location.href = redirectURL || "/";
      })
      .catch(() => {
        // 重置状态
        commit("RESET_USER_STATE");
        window.location.href = redirectURL || "/";
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
