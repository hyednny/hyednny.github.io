---
date: '2022-05-13'
title: 'Sequelize 연산자'
categories: ['Web', 'Javascript']
summary: 'Node.js Sequelize'
thumbnail: './sequelize.png'
---

### Sequelize 란?

node.js에서 mysql 등 RDMS를 쉽게 다룰 수 있게 도와주는 라이브러리이다.
ORM이라고 하는데 Object Relational Mapping 객체와 관계적인 매핑, 프로그래밍 언어의 객체와 데이터베이스의 데이터를 자동으로 연결해준다.

## Sequelize 비교 연산

```javascript
    [Op.and]: {a: 5},          // AND (a = 5)
    [Op.or]: [{a: 5}, {a: 6}], // (a = 5 OR a = 6)
    [Op.gt]: 6,                // id > 6
    [Op.gte]: 6,               // id >= 6
    [Op.lt]: 10,               // id < 10
    [Op.lte]: 10,              // id <= 10
    [Op.ne]: 20,               // id != 20
    [Op.between]: [6, 10],     // BETWEEN 6 AND 10
    [Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
    [Op.in]: [1, 2],           // IN [1, 2]
    [Op.notIn]: [1, 2],        // NOT IN [1, 2]
    [Op.like]: '%hat',         // LIKE '%hat'
    [Op.notLike]: '%hat',      // NOT LIKE '%hat'
    [Op.iLike]: '%hat',        // ILIKE '%hat' (case insensitive)  (PG only)
    [Op.notILike]: '%hat',     // NOT ILIKE '%hat'  (PG only)
    [Op.overlap]: [1, 2],      // && [1, 2] (PG array overlap operator)
    [Op.contains]: [1, 2],     // @> [1, 2] (PG array contains operator)
    [Op.contained]: [1, 2],    // <@ [1, 2] (PG array contained by operator)
    [Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

```
