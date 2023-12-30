---
date: '2022-12-13'
title: '호이스팅(Hoisting)이란 무엇인가?'
categories: ['Web', 'Javascript']
summary: '호이스팅의 개념에 대하여 작성'
thumbnail: './hoisting.png'
---

### 호이스팅이란

호이스팅이란 함수 내의 변수 및 함수 선언을 각 유효 범위의 최상단으로 끌어 올려주는 JS의 독특한 특징 (실제로 코드가 끌어올려지는 것이 아니고, 자바스크립트 parser가 내부적으로 끌어올려서 처리)

```javascript
console.log(a) // undefined
var a = 'A' // var 변수
```

var a 를 상단으로 호이스팅했기 때문에 변수 선언전에 console 을 출력해도 에러가 발생하지 않는다.

모든 선언(function, var, let, const, class) 은 javaScript 에서 호이스팅되며, var 선언은 undefined로 초기화되지만 let과 const 선언은 초기화 되지 않은 Temporal Dead Zone 상태로 유지한다.

```javascript
// 함수 선언식
hoisted() // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.')
}
```

--> 함수 선언식 호이스팅 가능하다.

```javascript
// 함수 표현식
expression() // Output: "TypeError: expression is not a function

var expression = function () {
  console.lgo('Will this work?')
}
```

--> 함수 표현식 호이스팅 불가능하다.

호이스팅을 의도적으로 사용하는 경우가 아니라면 호이스팅이 되지 않거나, Temporal Dead Zone 으로 초기화 되는 let, const, 함수 표현식을 사용하는 것을 권장한다.
