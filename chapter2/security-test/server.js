const express = require('express'); // require함수로 express 모듈을 가져온다.
const app = express(); // express 모듈을 사용하여 app 객체를 생성한다.
const port = 3000; // 포트를 3000으로 설정한다.

app.get('/', (req, res, next) => { // GET 메소드로 / 경로에 접속하면 실행되는 콜백함수를 정의한다.
    res.send('Top Page!'); // 'Top Page!'를 응답으로 보낸다.
});

app.listen(port, () => { // 서버를 실행한다.
    console.log(`Server is running at http://localhost:${port}`); // 서버가 실행되면 콘솔에 출력한다.
});