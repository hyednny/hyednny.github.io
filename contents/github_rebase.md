---
date: '2022-09-29'
title: 'Git 특정 커밋 삭제 rebase'
categories: ['Github']
summary: 'GitHub'
thumbnail: './github_rebase.png'
---

### 특정 커밋 삭제 rebase 사용법

1. git log 하면 commit id가 나옵니다.</br></br>
2. rebase 사용
   `git rebase -i {제거하려는 커밋 직전의 커밋 id}`</br></br>
3. pick -> drop 변경
   <img src="./rebase.png"></img></br>
   rebase를 사용하면 위와 같은 화면이 나옵니다. </br>
   제거하려고 하는 커밋이 제일 위에 있게 되는데 여기서 제거하려는 커밋의 작업 타입을 pick에서 drop 혹은 d로 변경합니다.
