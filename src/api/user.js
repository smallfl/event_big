import request from "@/utils/request.js";
//提供注册接口函数
export const userRegisterService = (registerData) => {
    //借助UrlSearchParams完成传递
    const params = new URLSearchParams();
    for (let key in registerData){
        params.append(key,registerData[key]);
    }
    return request.post('/user/register',params)
}

//提供登录接口函数
export const userLoginService = (loginData) => {
    //借助UrlSearchParams完成传递
    const params = new URLSearchParams();
    for (let key in loginData){
        params.append(key,loginData[key]);
    }
    return request.post('/user/login',params)
}

//获取用户想详情信息
export const userInfoService = () => {
    return request.get('/user/userInfo')
}

//更新用户信息
export const userUpdateService = (userData) => {
    // //借助UrlSearchParams完成传递
    // const params = new URLSearchParams();
    // for (let key in userData){
    //     params.append(key,userData[key]);
    // }
    return request.put('/user/update',userData)
}

//更新用户头像
export const userAvatarUpdateService = (avatarUrl) => {
    const params = new URLSearchParams();
    params.append('avatarUrl',avatarUrl);
    return request.patch('/user/updateAvatar',params)
}

//更新用户密码
export const userPasswordUpdateService = (passwordData) => {

    return request.patch('/user/updatePwd',passwordData)
}