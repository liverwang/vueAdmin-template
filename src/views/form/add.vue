<template>
  <div class="app-modal">
    <el-dialog title="新增账号" :visible.sync="isDialogVisible" width="30%" :before-close="onCancel">
      <el-form :model="form" ref="form" :rules="rules" label-width="80px">
        <el-form-item label="账号" prop="account">
          <el-input prefix-icon="el-icon-mobile-phone" v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input prefix-icon="el-icon-view" type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入登录账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onCancel() {
      this.$emit('dialog-cancel')
    }
  }
}
</script>
