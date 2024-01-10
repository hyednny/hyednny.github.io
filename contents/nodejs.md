---
date: '2024-01-10'
title: 'Node.js개념과 장단점'
categories: ['Node.js']
summary: 'Node.js에 대해서'
thumbnail: './nodejs.png'
---

### Node.js 란?

Chrome Vs JavaScript 엔진으로 빌드된 JavaScript를 실행 할 수 있는 (런타임)환경입니다.

### Node.js 장점

1. Node.js로 구현하면 요청이 많거나 오래걸리는 요청이 있어도 멈추거나 요청 대기 시간이 발생하지 않습니다. </br> (Node.js의 Non-blocking I/O)
2. 코드가 짧고 쉬워서 빠른 개발이 가능합니다.
3. 안정성과 보안성도 충분히 검증되었습니다.

### Node.js 단점

스레드 하나에서 처리가 되는데 코드가 CPU 연산을 많이 요구하면 스레드 하나가 감당하기 어렵습니다. </br>
그래서 이미지, 비디오 처리, 대규모 데이터 처리 같이 CPU를 많이 사용하는 작업을 위한 서버는 권장하기 힘듭니다.
