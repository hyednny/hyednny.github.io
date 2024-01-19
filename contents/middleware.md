---
date: '2024-01-15'
title: 'Express.js Middleware'
categories: ['Node.js', 'Express', 'Project']
summary: 'Express.js Middleware'
thumbnail: './middleware.png'
---

### Middleware 란 ?

미들웨어란 클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하려는 중간(미들) 목적에 맞게 처리를 하는 거쳐가는 함수들입니다. </br>
미들웨어 함수에 대한 엑세스 next 함수를 이용해서 다음 미들웨어로 현재 요청을 넘길 수 있습니다.</br>
next를 통해 순차적으로 처리되기 때문에 순서가 중요합니다. </br>

- express.json : JSON 형식의 요청 본문을 파싱하는 미들웨어입니다. </br></br>
- Cors : [Cors](https://hyednny.github.io/cors/)에 대한 설정과 설명은 따로 포스팅을 했습니다. </br></br>
- Helmet : 보안 관련 HTTP 헤더를 설정하여 웹 애플리케이션의 보안성을 향상시키는 역할을 합니다. </br></br>
- Morgan : HTTP 요청에 대한 로깅을 처리하는 미들웨어입니다. </br></br>
- CookieParser : 쿠키를 파싱하고 쉽게 다룰 수 있도록 도와주는 역할을 합니다. </br>
  클라이언트로부터 수신된 쿠키를 쉽게 읽을 수 있고, 서버에서 클라이언트로 쿠키를 설정할 수 있습니다. </br>

자세한 미들웨어 설명은 [Express.js Middleware](https://expressjs.com/en/guide/using-middleware.html) 공식 문서를 참고하면 됩니다.
