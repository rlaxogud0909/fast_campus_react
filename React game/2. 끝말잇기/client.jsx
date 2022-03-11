// 노드의 모듈 시스템으로 리액트를 불러옴
const React = require("react");
const ReactDom = require("react-dom");

// moudle.exports를 했기 때문
// const WordRelay = require("./WordRelay");
const WordRealyHook = require("./WordRelayHook");

ReactDom.render(<WordRealyHook />, document.querySelector("#root"));
