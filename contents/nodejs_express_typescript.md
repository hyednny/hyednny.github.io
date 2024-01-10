---
date: '2024-01-09'
title: '⚙️ Node.js + Express + TypeScript 환경 세팅하기'
categories: ['Node.js', 'Express', 'Typescript', 'Project']
summary: 'Node.js + Express + TypeScript'
thumbnail: './nodejs_express_typescript.png'
---

세팅이 제일 기본이지만 그만큼 또 많이 찾아보기 때문에 까먹지 않으려고 블로그에 적어두려고 합니다. ✨

1. packages.json 생성
   packages.json 은 프로젝트 정보와 의존성을 관리하는 문서입니다. </br>
   패키지 설치 시 정보가 기록됩니다. </br>
   `yarn init`

2. 필요한 구성 요소 설치
   express, typescript, ts-node-dev를 설치합니다.</br>

   - ts-node-dev : ts-node와 node-dev를 합친 것입니다.</br>
   - node-dev는 nodemon과 같이 watch 관련 모듈</br>
   - nodemon : 서버 코드를 변경 할 때마다 자동으로 서버를 재시작해줍니다.
   - ts-node : Node.js에서 TypeScript Compiler를 통하지 않고도, 직접 TypeScript를 실행시킵니다.
     tsc 자체에는 --watch 옵션이 있고, ts-node는 watch기능과 관련하여 **ts-node-dev**가 이미 존재하기 때문에 사용하기로 했습니다.

3. tsconfig.json 생성
   TypeScript 코드를 JavaScript로 컴파일하는 옵션을 설정하는 파일입니다.</br>
   TypeScript 컴파일은 tsc라는 명령어를 사용합니다.</br>
   `yarn tsc --init`

https://aka.ms/tsconfig.json 를 방문하면 해당 파일에 대한 더 많은 정보를 얻을 수 있습니다.

```typescript
{  "compilerOptions": {
"target": "es6",                          //사용할 특정 ECMAScript 버전 설정: 'ES3' (기본), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 혹은 'ESNEXT'.
"module": "commonjs",                     // 모듈을 위한 코드 생성 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
"strict": true,             // 모든 엄격한 타입-체킹 옵션 활성화 여부
"esModuleInterop": true,            // 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부,  'allowSyntheticDefaultImports'를 암시적으로 승인합니다.
"skipLibCheck": true,                     // 정의 파일의 타입 확인을 건너 뛸 지 여부
"forceConsistentCasingInFileNames": true  // 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부
}}
```

4. express 코드 작성

```typescript
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

5. packages.json 수정

```json
...
  "scripts": {
    "dev": "NODE_ENV=test ts-node-dev --respawn --transpile-only src/server.ts"
    // ts-node-dev를 이용하여 서버를 시작하는 스크립트 작성
  },
...
```

- 참고
  https://geonlee.tistory.com/214
  https://elvanov.com/2524
  https://expressjs.com/ko/starter/hello-world.html
  https://velog.io/@qhgus/Node-Express-TypeScript-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85
