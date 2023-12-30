---
date: '2023-02-02'
title: '콜백 지옥 해결 방법 Promise, async/await'
categories: ['Web', 'JavaScript']
summary: 'Promise, async/await'
thumbnail: './hoisting.png'
---

### 비동기 처리 방법

JavaScript에서 비동기 처리 방법으로 Callback, Promise, async/await 이렇게 3가지가 있다.

- Callback: 함수 안에 함수를 넣어 순서를 정한다. 함수가 많을 수록 작성하기 어렵고 가독성이 떨어진다는 단점이 있다. (콜백지옥)
- Promise: .then 으로 함수 실행 순서를 정한다. Callback 처럼 함수들이 많아질 수록 작성이 어렵고 가독성이 떨어진다.
- async/await: async가 있어야 await을 사용할 수 있고, 제일 작성하기 쉽고 가독성도 좋다.
