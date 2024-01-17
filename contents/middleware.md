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
