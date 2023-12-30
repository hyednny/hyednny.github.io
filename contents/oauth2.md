---
date: '2023-01-31'
title: 'Oauth2'
categories: ['Web']
summary: 'Oauth2 개념'
thumbnail: './oauth2.png'
---

### Oauth2 개념

Oauth 2.0 은 **Open Authorization 2.0** 로 인증을 위한 개방향 표준 프로토콜이다.</br>
인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 공통적인 수단으로서 사용되는, 접근 위임을 위한 개방형 표준이다.

### 용어

- **Authentication (인증)** : 접근 자격이 있는지 검증하는 단계
- **Authorization (인가)** : 자원에 접근할 권한을 부여하고 리소스 접근 권한이 담긴 Access Token을 제공
- **Access Token** : 리소스 서버에게서 정보를 획득할 때 사용되는 토큰으로 만료 기간이 존재
- **Refresh Token** : Access Token 만료 시 재발급 받기 위한 용도로 사용하는 Token
