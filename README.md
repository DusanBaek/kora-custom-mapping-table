# KORA COST

---

## 설치 방법

1. **GitHub에서 프로젝트 클론**

```bash
git clone https://github.com/grace-ori/kora_cost.git
cd kora_cost
```

2. **의존성 설치**

```bash
yarn install
```

3. **개발 서버 실행**

```bash
yarn dev
```

## 빌드

1. **배포용 빌드 파일 생성**

```bash
npm run build
```

2. **빌드 결과 확인(인터넷 환경이 아닌 경우에도 실행 가능)**

```bash
cd dist
yarn dev
```

## 차트 데이터 수정

1. 데이터 수정 폴더 위치
   src/data

2. 강조하고 싶은 포인트 지점
   effectScatterData.js

3. 강조 포인트에 툴팁 데이터
   effectScatterTooltip.js

4. 라인으로 연결하고 싶은 포인트 지점
   lineData.js

5. 일반 포인트 데이터
   scatterData.js
