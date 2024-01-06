---
date: '2022-09-29'
title: '한 컴퓨터에서 GitHub 여러 계정 사용하는 방법'
categories: ['Github']
summary: 'GitHub'
thumbnail: './github_ssh.png'
---

### 한 컴퓨터에서 gitHub 여러 계정 사용하는 방법

git pull 이나 git push 했을 때 아래와 같은 에러가 났을 시

```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

이유는 git@github.com 에 연결된 ssh key가 설정되어 있지 않아서 </br>
ssh key를 만들고 github의 본인 계정에 등록해주면 된다.

### ssh-key 만드는 방법

1. ssh 디렉토리로 이동</br>
   `cd ~/.ssh` </br></br>
2. github 이메일로 ssh-key 생성</br>
   `ssh-keygen -t rsa -C "본인 github 계정 이메일" -f "id_rsa_user1"`</br></br>
3. ls로 생성된 key 확인</br>
   (id_rsa_user1, id_rsa_user1.pub - 개인키, 공개키) </br></br>
4. ssh-agent에 ssh-key 추가
   ```
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_rsa_user1
   ```

### 계정 별로 github에 ssh public key 추가

1. 생성된 공개키 파일 열어서 내용 복사</br>
   `vi ~/.ssh/id_rsa_user1.pub`</br></br>
2. github에 user1 계정으로 로그인</br></br>
3. 프로필 > setting > SSH and GPG Keys > New SSH Key</br></br>
4. 복사한 공개키 붙여 넣기

### SSH config 파일 설정

로그인 계정 확인 및 계정 변경

```
// 현재 사용자 이름 확인
git config user.name

// 현재 사용자 이메일 확인
git config user.email

// 사용자 이름 변경
git config user.name {사용자 이름}

--> 글로벌로 하려면
git config --global user.name {사용자 이름}

// 사용자 이메일 변경
git config user.email {사용자 이메일}
```

1. ssh config 파일 수정 or 생성</br>
   ` vi ~/.ssh/config`</br></br>
2. 설정 추가
   ```
   Host github.com-user1
    HostName github.com
    User user1
    IdentityFile ~/.ssh/id_rsa_user1
   ```
3. ssh 연결 테스트</br>
   `ssh -T git@github.com-user1`

### SSH를 사용해 git clone

1. repo 에서 SSH 선택 후 주소 복사</br></br>
2. 복사한 주소를 수정해 git clone</br>
   `git clone git@github.com-user1:경로~.git`
