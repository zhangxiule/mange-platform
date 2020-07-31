<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">管理平台</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" class="iconfont icon-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" class="iconfont icon-mima"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm(param)">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            flag: 1,
            param: {
                username: 'admin',
                password: '123123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs.login.validate(valid => {
                if (valid) {
                    console.log('111')
                    console.log(formName)
                    this.$http.get("/api/login").then(Response => {
                        console.log(Response)
                    })
                } else {
                    console.log('2222')
                }
            })
            // this.$refs.login.validate(valid => {
            //     if (valid) {
            //         this.$message.success('登录成功');
            //         localStorage.setItem('ms_username', this.param.username);
            //         this.$router.push('/');
            //     } else {
            //         this.$message.error('请输入账号和密码');
            //         console.log('error submit!!');
            //         return false;
            //     }
            // });
        },
    },
};
</script>

<style scoped>
.login-wrap {
    width: 100%;
    height: 100%;
    background-image: url(../../../static/img/login-bg.jpg);
    background-size: 100% 100%;
     position: fixed;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #000;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #000;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>