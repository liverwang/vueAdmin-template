let baseUrl = '/'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin'
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin'
}

if (process.env.BUILD_ENV === 'dev') {
  baseUrl = '/' // 编译开发环境
} else if (process.env.BUILD_ENV === 'test') {
  baseUrl = '/' // 编译测试环境
} else if (process.env.BUILD_ENV === 'pre') {
  baseUrl = '/' // 编译预发环境
}

export { baseUrl }
