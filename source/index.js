///entry파일

//index.js 파일을 번들링을 해야함  => public폴더안에

import a from "./hello.js";
import b from "./world.js";
document.querySelector("#root").innerHTML = a + b;
