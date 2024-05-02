const express = require('express'); // require함수로 express 모듈을 가져온다.
const app = express(); // express 모듈을 사용하여 app 객체를 생성한다.
const port = 3000; // 포트를 3000으로 설정한다.

// app.get('/', (req, res, next) => { // GET 메소드로 / 경로에 접속하면 실행되는 콜백함수를 정의한다.
//     res.send('Top Page!'); // 'Top Page!'를 응답으로 보낸다.
// });

// app.use((req, res, next) => { // 모든 요청에 대해 실행되는 미들웨어 함수를 정의한다. 
// : 미들웨어 함수는 요청과 응답 오브젝트에 접근할 수 있으며, 요청-응답 주기를 종료할 수 있다.
app.use(express.static("public")); // public 디렉토리를 정적 파일을 제공하는 디렉토리로 설정한다.

app.listen(port, () => { // 서버를 실행한다.
    console.log(`Server is running at http://localhost:${port}`); // 서버가 실행되면 콘솔에 출력한다.
});