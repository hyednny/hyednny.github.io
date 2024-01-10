---
date: '2023-02-01'
title: 'MQ 개념과 Kafka와 Redis 차이점'
categories: ['AWS']
summary: 'Kafka와 Redis 차이점'
thumbnail: './mq.png'
---

### MQ 란?

Mawwage Queue 는 Producer, Consumer가 존재하며 Producer는 메시지를 큐에 전송하고 Consumer가 큐의 메시지를 처리하는 방식입니다.

### PUB/SUB 구조

PUB/SUB 란 메시지를 처리하는 곳과 수신하는 곳을 분리하는 비동기 메시징 서비스입니다.

이벤트를 발행하는 Publisher가 있고, 특정 Channel(Topic)에 이벤트를 전송합니다.
특정 Channel(Topic)을 구독하는 Subscriber이 존재하며, Publisher에 관계없이 이벤트를 받을 수 있습니다.

이때 발행/구독 방식이 각 서비스마다 다른데 오늘 다뤄볼 서비스는 Kafka, Redis 입니다.

### KAFKA

- 이벤트 브로커 : 메시지 브로커와 비슷한 기능을 하지만 메시지 발행 시 이벤트로 기록해서 관리합니다.</br></br> - 분산 처리에 효과적입니다.</br> - 대용량 데이터에 적합합니다.</br>

### REDIS

- 메시지 브로커 : 메시지 큐를 기반으로 만들어진 브로커이고 메시지가 생성되면 큐에 저장하고 순서대로 소비합니다.</br>
  </br> - 처리 속도가 빠릅니다. </br> - 캐시의 역할도 가능합니다. </br> - 명시적으로 데이터 삭제가 가능합니다.</br> - 단기 메시지를 사용할 때 적합합니다.

### KAFKA 와 REDIS의 차이점

- 이벤트의 저장 여부</br>
  Kafka는 저장이 되는데 Redis는 저장하지 않기 때문에 구독자가 없다면 해당 이벤트는 사라집니다. </br>
  이벤트의 구독과 발행이 실시간으로 이루어져야 하는 상황인지, 언제든 발행된 이벤트를 읽으면 되는 상황인지에 따라 선택을 하면 됩니다.

- 대용량 처리</br>
  Kafka가 Redis보다 더 많은 양의 데이터를 처리할 수 있는 능력이 있습니다.
  </br>

https://velog.io/@mdy0102/MQ-%EB%B9%84%EA%B5%90-Kafka-RabbitMQ-Redis
