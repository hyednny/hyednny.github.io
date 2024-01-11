---
date: '2024-01-11'
title: 'Sequelize로 Model 정의'
categories: ['Javascript', 'Sequelize', 'Project']
summary: 'Sequelize Model'
thumbnail: './sequelize_model.png'
---

### ORM 이란?

ORM(Object Relational Mapping) 이란 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것입니다 </br>

- 데이터베이스 독립성 : 데이터베이스와 상호 작용을 추상화하고 데이터베이스 종류에 따라 필요한 코드를 자동으로 생성해줍니다. </br>
- 생산성 향상 : 직접 쿼리를 적지 않고 객체 지향 프로그래밍 언어의 문법과 메서드를 사용할 수 있습니다. </br>
- 객체 간의 관계 관리 : ORM을 사용하면 연관관계를 데이터베이스 관계로 자동 매핑할 수 있습니다.

### ORM 장점

- 유지 보수 용이 : 데이터베이스 스키마 변경 시 자동으로 처리하기 때문에 소스 코드의 변경을 최소화할 수 있습니다.</br>
- 코드의 가독성 향상 : SQL쿼리를 직접 작성하는 것보다 메서드를 활용하는게 직관적이고 이해하기 쉽습니다.</br>

### ORM 단점

- 성능 문제 : 대량의 데이터를 처리하는 경우 성능 문제가 발생할 수 있습니다.</br>
- 복잡성과 제약 사항 : 일부 고급 데이터베이스 기능이나 복잡한 쿼리는 직접 SQL을 작성해야 할 수도 있습니다.</br>

**Sequelize**
sequelize는 node.js 의 대표적인 ORM </br>

### model 설정

sequelize-typescript 를 사용했습니다. </br>

```typescript
@Table({ tableName: "user" })
export class User extends Model<UserAttributes, UserCreateAttributes> {
  /* Column */

  @Primarykey
  @column({ type: DataType.INTEGER })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare name: string;
  ...
```

데코레이터를 사용하여 medel을 작성했습니다.
