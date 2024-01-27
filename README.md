# react-weekly2 Home Work

야무샘의 리액트 강의, 주간 숙제

- [x] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [x] 바닐라 프로젝트에서 활용했던 데이터베이스의
      데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [x] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요.
      필요한 경우, 리스트 렌더링을 활용해보세요.

---

## 2주차 : 마켓칼리 review 리액트로 마크업하기.

### 사용한 기술스택

1. Vite - JSX 컴파일을 위한 사용
2. React - 마크업을 위한 라이브러리 사용
3. moduleCSS - CSS 스타일링을 위한 라이브러리 사용

### 환경구성 방안

vite에서 제공하는 react 스케폴딩을 활용하여, 개발환경 구성,

-> 어려웠던 점 : summary 태그에 지정한 스타일이 다 안먹는 것 같다. summary초기화가 안된건가..? 분명 reset도 했는데...

### 마켓칼리 시안, Review 파트 구현 전략

- function Component를 사용하여, notice, review 렌더링
- noticeData 및 reviewData를 json 파일에서 데이터를 가져와서 리스트 렌더링
- 조건문을 사용하여 베스트 리뷰인 항목에 `베스트` 뱃지 디자인 삽입
- CSS는 각각 ModuleCSS를 사용하여 할당

### 구현 이미지
<img width="920" alt="스크린샷 2024-01-28 오전 3 06 52" src="https://github.com/clapsheep/react-weekly2/assets/140643716/408fc25c-eea8-4a28-bc68-93e1eda44002">
