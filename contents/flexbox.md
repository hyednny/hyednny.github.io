---
date: '2022-01-03'
title: 'CSS Flexbox 정리'
categories: ['Web', 'CSS']
summary: 'CSS Flexbox'
thumbnail: './flexbox.png'
---

### Flexbox 구성 요소

여러 개의 내부 엘리먼트를 담고 있는 외부 엘리먼트에 display: flex 를 적용하면 외부 엘리먼트는 flex container 가 되고,
내부 엘리먼트는 자동으로 flex item이 된다. <br/><br/>flex container와 flex item 에 적용할 수 있는 속성값이 다르다.

### Axis의 개념

flexbox는 두개의 축을 기준으로 레이아웃을 설정한다.
축은 main axis와 cross axis가 있는데 기본적으로 가로 방향이 주축이다. 가로 방향일 때는 main axis가 가로 방향, cross axis가 세로 방향이 된다. <br/><br/>
main axis 기준의 움직임을 설정하는 것은 justify-content 이고 cross axis 기준의 움직임을 설정하는 것은 align-item 이다.

- main axis: flexbox의 주 정렬 방향
- cross axis: lflexbox의 보조 정렬 방향

flex-direction: column 이면 상단 정렬 (main axis와 cross axis 가 바뀜)<br/>
flex-directiion: row 이면 좌측 정렬

### justify-content

- flex-start: 요소들을 컨테이너의 왼쪽으로 정렬
- flex-end: 요소들을 컨테이너의 오른쪽으로 정렬
- center: 요소들을 컨테이너의 가운데로 정렬
- space-between: 요소들 사이에 동일한 간격
- space-around: 요소들 주위에 동일한 간격

### align-items

- flex-start: 요소들을 컨테이너의 꼭대기로 정렬
- flex-end: 요소들을 컨테이너의 바닥으로 정렬
- center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬
- baseline: 요소들을 컨테이너의 시작 위치에 정렬
- stretch: 요소들을 컨테이너에 맞도록 늘림

---

참고 사이트

- [Flexbox 링크](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [mdn web docs](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox)
- [Flexbox Froggy 게임](https://flexboxfroggy.com/#ko)
