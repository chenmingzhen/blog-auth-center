# blog-auth-center

## SSO单点登录系统


### 未登录流程图

![process](./src/assets/image/sso.png)

### 退出流程图

![process](./src/assets/image/sso退出系统.png)

1.接收所有应用的退出请求

2.调用后台退出接口

3.删除顶级域名下的Cookie

4.重定向