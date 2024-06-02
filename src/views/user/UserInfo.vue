<script setup lang="ts">
import {ref} from 'vue'
import useUserInfoStore from '@/stores/userIndo.js'

const userStore = useUserInfoStore()


const userInfo = ref({...userStore.info})
const rules = {
  nickname: [
    {required: true, message: '请输入昵称', trigger: 'blur'},
    {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}],
  email: [
    {required: true, message: '请输入邮箱地址', trigger: 'blur'},
    {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}]
}

import {userUpdateService} from '@/api/user.js'
import {ElMessage} from "element-plus";

const updateUserInfo = async () => {
  let result = await userUpdateService(userInfo.value)
  ElMessage.success(result.msg ? result.msg : '修改成功');
  userStore.setUserInfo(userInfo.value)
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>基本资料</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form :model="userInfo" :rules="rules" label-width="100px" size="large">
          <el-form-item label="登录名称">
            <el-input v-model="userInfo.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户昵称" prop="nickname">
            <el-input v-model="userInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="email">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateUserInfo">提交修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>

</style>