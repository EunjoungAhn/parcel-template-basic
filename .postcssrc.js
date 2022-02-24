/*
import와 export 는 ESM 라는 표준 자바스크립트 언어를 지원한다.
하지만, 노드에서는 CommonJS를 지원한다.
*/
//import autoprefixer from 'autoprefixer'
//const autoprefixer = require('autoprefixer') //module.exports

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    //autoprefixer
    require('autoprefixer')
  ]
}

/*
ESM은 브라우저에서 동작하는 개념이고 현재 postcssrc 파일은 
번들러를 변환하는 방식을 사용하기 때문에 브라우저가 아닌 노드js를
사용하게 되는 것이다.
*/

