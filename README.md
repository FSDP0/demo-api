## NodeJS REST API 샘플 소스

해당 가이드는 Node.js 기반의 RESTful API 웹 서비스를 실행하는 과정을 안내합니다.

### 구축 방법

HTTP GET 요청을 수락하는 서비스를 구축한다.

http://localhost:3000/api 에 HTTP GET 요청을 전송하는 경우,
아래와 같은 문자열로 응답 값을 반환한다.

```
"Hello World!"
```

http://localhost:3000/api/v1/simple 에 HTTP GET 요청을 전송하는 경우,
아래와 같은 JSON 응답 값을 반환한다.

```
[
  {
    "num": 1,
    "title": "test-0",
    "content": "contents-0"
  },
  {
    "num": 2,
    "title": "test-1",
    "content": "contents-1"
  },
  {
    "num": 3,
    "title": "test-2",
    "content": "contents-2"
  },
  {
    "num": 4,
    "title": "test-3",
    "content": "contents-3"
  },
  {
    "num": 5,
    "title": "test-4",
    "content": "contents-4"
  },
  {
    "num": 6,
    "title": "test-5",
    "content": "contents-5"
  },
  {
    "num": 7,
    "title": "test-6",
    "content": "contents-6"
  },
  {
    "num": 8,
    "title": "test-7",
    "content": "contents-7"
  },
  {
    "num": 9,
    "title": "test-8",
    "content": "contents-8"
  },
  {
    "num": 10,
    "title": "test-9",
    "content": "contents-9"
  }
]
```

### 준비

- Node.js : 18 버전 이상 (LTS)
- Yarn (Optional)

### 실행

1. Yarn을 사용하는 경우

```
yarn install --production

yarn start
```

2. NPM을 사용하는 경우

```
npm install --production

npm start
```
