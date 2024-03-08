---
date: '2024-03-08'
title: 'Chaining'
categories: ['Javascript']
summary: 'Chaining / Optional Chaining'
thumbnail: './chaining.png'
---

### Nullish coalescing operator / 널 병합 연산자 ('??')

javaScript 의 nullish 병합 연산자를 의미합니다.

변수나 표현식의 값이 null 또는 undefined인 경우에만 기본값을 제공하는 역할을 합니다.

‘??’ 연산자는 왼쪽 피연산자의 값이 null 또는 undefined인지 확인하고 그렇다면 오른쪽 피연산자로 대체합니다.

왼쪽 피연산자의 값이 null 또는 undefined가 아니라면 왼쪽 피연산자의 값이 그대로 결과로 반환합니다.

```javascript
const a = null
const b = a ?? 0
console.log(a) //출력 : 0

const c = undefined
const d = c ?? 'default'
console.log(d) // 출력: "default"

const e = 'value'
const f = e ?? 'default'
console.log(f) // 출력: "value"
```

### Optional Chaining / 선택적 체이닝 연산자('.?')

선택적 체이닝 연산자는 체인 중간에 속성이나 메서드가 존재하지 않을 때 발생하는 에러를 방지하고, undefined를 반환합니다.
</br>
점 연산자 대신에 선택적 체이닝 연산자를 사용합니다.
</br>
</br>
💡 null, undefined 💡</br>
null → 변수 선언을 하고 빈 값을 할당한 상태(빈 객체)

undefined → 변수를 선언하고 값을 할당하지 않은 상태

```javascript
//예시 1
const person = {
	name: "Oli"
	age: 27
}

const personCity = person.address?.city
console.log(personCity) // 출력 : undefined
```

```javascript
//예시 2
const customer = {
  name: 'Carl',
  details: {
    age: 82,
    location: 'Paradise Falls', // detailed address is unknown
  },
}

const customerCity = customer.details?.address?.city
```

---

**참고**

mdm web docs: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
