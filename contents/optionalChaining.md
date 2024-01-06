---
date: '2023-06-14'
title: 'Optional Chaining'
categories: ['Javascript']
summary: 'Optional Chaining 사용법'
thumbnail: './optionalChaining.png'
---

### Optional Chaining

선택적 체이닝 연산자 (?.) </br></br>
체인 중간에 속성이나 메서드가 존재하지 않을 때 (null 또는 undefined) 발생하는 에러를 방지하고 undefined를 반환한다.
</br></br>
null : 변수 선언을 하고 빈 값을 할당한 상태(빈 객체) </br>
undefined : 변수를 선언하고 값을 할당하지 않은 상태

```javascript
const person = {
  name: 'Oli',
  age: 27,
}

const personCity = person.address?.city
console.log(personCity) // 출력 => undefined
```

중첩된 구조에서도 사용 가능 예시는 아래와 같다.

```javascript
const customer = {
  name: 'Carl',
  details: {
    age: 82,
    location: 'Paradise Falls', // detailed address is unknown
  },
}

const customerCity = customer.details?.address?.city
```
