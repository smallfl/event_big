<script setup lang="ts">
import {ref} from 'vue'

//定义数据模型
const registerData = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})


//定义校验规则
const checkPass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerData.value.new_pwd) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules = {
  old_pwd: [
    {required: true, message: '请输入旧密码', trigger: 'blur'},
  ],
  new_pwd: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}]
  ,
  re_pwd: [
    {validator: checkPass, trigger: 'blur'}]
}

import {userPasswordUpdateService,} from '@/api/user.js'


const router = useRouter();
import {useTokenStore} from '@/stores/token.js'

const tokenStore = useTokenStore();
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";


//修改用户密码
const updateUserPassword = async () => {
  try {
    let result = await userPasswordUpdateService({
      old_pwd: registerData.value.old_pwd,
      new_pwd: registerData.value.new_pwd,
      re_pwd: registerData.value.re_pwd
    });
    //清空token
    tokenStore.removeToken();
    //跳转到登录页面
    router.push('/login')
    ElMessage.success(result.msg ? result.msg : '修改成功,请重新登录');

  } catch (error) {
    ElMessage.error('修改密码失败');
  }
}

</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>修改密码</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form :model="registerData" :rules="rules" label-width="100px" size="large">
          <el-form-item label="输入旧密码" prop="old_pwd">
            <el-input type="password" v-model="registerData.old_pwd"></el-input>
          </el-form-item>
          <el-form-item label="输入新密码" prop="new_pwd">
            <el-input type="password" v-model="registerData.new_pwd"></el-input>
          </el-form-item>
          <el-form-item label="再次新密码" prop="re_pwd">
            <el-input type="password" v-model="registerData.re_pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateUserPassword">修改密码</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>