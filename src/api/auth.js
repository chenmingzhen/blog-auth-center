import request from '@/utils/request';

//数据格式
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

// 请求头添加 Authorization: Basic client_id:client_secret
const auth={
    username:'mxg-blog-admin',//client_id
    password:'123456'
}

export function login(data){
    return request({
        headers,
        auth,
        url:'/auth/login',
        method:'post',
        params:data
    })
}