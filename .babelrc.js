module.exports = {
  //하나의 객체 데이터를 내보내자
  presets: ['@babel/preset-env'],
  //async와 await을 사용할 수 있다.
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}