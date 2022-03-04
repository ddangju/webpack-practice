const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    ////__dirname= webpack.config.js가 위치하고 있는 경로를 알려주는 변수,
    ///두번째 인자는 최종적인 결과물의 위치
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle .js",
  },

  //// webpack --entry ./source/index.js ==output =path ./public/index_bundle.js
  //라는 경로와 같다. config.js에 저장하여 사용한다.
  /// npx webpack --config webpack.config.js를 실행하면 이 안에 잇는 내용들을 읽어서 실행한다.
  ///1. 커맨드라인에서 옵션을 주어 명렁어로 핸들링하기
  ///2. config 내부에 웹팩설정을 설정하여 실행 가능
};
