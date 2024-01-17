---
date: '2024-01-17'
title: 'CORS'
categories: ['Express', 'Project']
summary: 'CORS'
thumbnail: './middleware.png'
---

### CORS 란?

Cors(Cross-Origin Resource Sharing) 는 간단하게 말해서 **교차 출처 리소스 공유**입니다. </br>
출처가 다른 자원들을 공유한다는 뜻으로, 한 출처가 있는 자원에서 다른 출처에 있는 자원에 접근하도록 하는 개념입니다. </br>
웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다를 때 교차 출처 HTTP 요청을 실행합니다. (mdn 설명)

### 같은 출처란 ?

아래의 사진은 URL이 어떤 구성요소로 이루어져 있는지 나와있습니다.
<img src="./cors_url.png"></img></br>

Protocol, Host, Port, Path, Query String, Fragment로 이루어져 있습니다. </br>
기본적으로 Protocol, Host, Port가 있어야 합니다. 그치만 HTTPS는 기본 포트가 정해져있어서 Port는 생략 가능합니다. </br>
위의 구성요소 중에서 Protocol, Host, Port 3가지가 같으면 동일 출처라고 합니다.

### 동일 출처 정책(Same-Origin Policy)

- 동일 출처 정책 : 동일 출처 요청만 자유롭게 요청이 가능합니다. 다른 출처로부터 조회된 자원들의 읽기 접근을 막아 다른 출처 공격을 예방합니다. </br></br>
  그러나 다른 출처에서 얻은 이미지를 담은 < img>, 외부 주소를 담는 < link> 같은 여러 태그들을 허용합니다. </br>
  다른 출처 리소스에 접근성을 높이기 위해서 다른 출처 정책(Cross-Origin Policy) **CORS**가 등장했습니다.

### CORS 3가지 동작 방식

- 단순 요청(Simple Request)

  - 메서드 : **GET, HEAD, POST** 중 하나만 가능합니다.
  - 헤더 : **Accept, Accept-Language, Content-Language, Content-Type** 만 가능합니다.
  - Content-Type 헤더 : **application/x-www-form-urlencoded, multipart/form-data, text/plain** 만 가능합니다.
  - **ReadableStream** 객체 사용되지 않습니다.
  - **XMLHttpRequest.upload** 통해서만 이벤트 리스너를 등록 가능합니다.

### express cors 설정

```typescript
app.use([
  Cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], //허용할 HTTP 메서드
    allowedHeaders: ['Content-Type', 'Authorization'], //허용할 HTTP 헤더
    credentials: true,
  }),
])
```

### allowedHeaders

1. Content-Type
   - HTTP요청 또는 응답의 본문에 포함된 데이터 유형을 나타냅니다.
   - POST나 PUT과 같은 요청에서 서버에게 전송되는 데이터의 형식을 명시하기 위해 사용합니다.
   - JSON 데이터를 전송할 때는 'Content-Tyye: application/json' 과 같이 설정됩니다.
2. Authorization
   - 클라이언트가 서버에게 인증 정보를 전달하는 데 사용합니다.
   - 주로 사용자의 인증 정보를 서버에게 전송할 때 사용자의 이름과 비밀번호의 조합 또는 토큰 등이 이 헤더에 포함될 수 있습니다.

---

**참고**

- https://escapefromcoding.tistory.com/724
- https://surprisecomputer.tistory.com/32
