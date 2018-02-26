const gulp = require('gulp')
const axios = require('axios')

// 触发服务端部署脚本
gulp.task('server', async () => {
  const {data: {message}} = await axios({
    method: 'POST',
    url: 'http://101.132.113.122:3008/publish',
    data: JSON.stringify({
      key: process.env.ELEME_PUBLISH_KEY
    })
  })
  console.log(message)
})

gulp.task('default', ['server'])
