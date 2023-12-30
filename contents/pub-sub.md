---
date: '2023-02-01'
title: 'MQ'
categories: ['Web']
summary: 'MQ 비교'
thumbnail: './hoisting.png'
---

### MQ 란?

Mawwage Queue 는 키보드나 마우스를 통해 발생하는 사용자의 입력을 메시지로 전달하는 윈도우즈 시스템에서 어떤 프로세스에 대한 메시지를 저장하기 위해 할당된 큐다.

### PUB/SUB 구조

PUB/SUB 란 메시지를 처리하는 곳과 수신하는 곳을 분리하는 비동기 메시징 서비스이다.

이벤트를 발행하는 Publisher가 있고, 특정 Channel(Topic)에 이벤트를 전송한다.
특정 Channel(Topic)을 구독하는 Subscriber이 존재하며, Publisher에 관계없이 이벤트를 받을 수 있다.

이때 발행/구독 방식이 각 서비스마다 다른데 오늘 다뤄볼 서비스는 Kafka, Redis 이다.

### KAFKA

### REDIS

### KAFKA 와 REDIS의 차이점

- 이벤트의 저장 여부
  Kafka는 저장이 되는데 Redis는 저장하지 않기 때문에 구독자가 없다면 해당 이벤트는 사라진다. </br>
  이벤트의 구독과 발행이 실시간으로 이루어져야하는 상황인지, 언제든 발행된 이벤트를 읽으면 되는 상황인지에 따라 선택을 하면 된다.

- 한 이벤트를 받을 수 있는 개수

https://velog.io/@mdy0102/MQ-%EB%B9%84%EA%B5%90-Kafka-RabbitMQ-Redis
