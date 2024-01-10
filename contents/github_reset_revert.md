---
date: '2022-10-13'
title: 'Git Reset과 Revert'
categories: ['Github']
summary: 'Reset과 Revert'
thumbnail: './github_reset_revert.png'
---

### Reset

혼자만 사용하는 브랜치인 경우나 origin에 있지만 아무도 이 브랜치를 사용하지 않을 경우 사용하길 권장합니다. </br></br>

Reset 옵션

- hard : 돌아간 커밋 이후의 변경 이력은 모두 삭제

```
git commit -m "1"
git commit -m "2"

git reset --hard

커밋 내용이 모두 사라짐 코드도 사라집니다.
```

- mixed : 변경 이력은 모두 삭제하지만 변경 내용은 남아 있습니다 (unstage 상태로)

```
git commit -m "1"
git commit -m "2"

git reset --mixed

이력은 날라가는데 코드는 남아있습니다.


git add .
git commit -m "3"

코드를 한 번에 다시 반영하려면 add 해서 stage에 반영하고 commit 하면 됩니다.
```

- soft : 변경 이력은 모두 삭제하지만 변경 내용은 남아 있습니다. (stage 상태로)

```
git commit -m "1"
git commit -m "2"
git commit -m "3"

git reset --soft
git commit -m "4"

코드는 반영되어있기 때문에 add 안해도 되고 commit 만 하면 됩니다.
```

---

### Revert

커밋을 삭제하는 것이 아닌 커밋을 추가

```
git commit -m "1번 커밋"
git commit -m "2번 커밋"
git commit -m "3번 커밋"

git revert [1번commit hash]
```

1번 커밋 이후의 커밋들이 삭제되는 것이 아니라 1번 커밋 에 해당하는 내용만 삭제됩니다.</br>
Revert "1번 커밋" 이라는 커밋에는 1번 커밋이 삭제된 이력이 남게 됩니다.

```
Revert "1번 커밋"
3번 커밋
2번 커밋
1번 커밋
```

### Reset, Revert 차이

둘다 이전 커밋으로 되돌린다는 점에서 동일하지만 github 저장소에 올라가 다른 사람과 코드 공유의 유무에 따라 달라집니다.
