## 1. Model
### `EurInfo.tsx`
- 유로 환율 정보 (하나은행 환율 API 결과값) 명세

## 2. View
### `EurToKrw.tsx`
- EUR > KRW 환율 계산 페이지


## 3. View Model (Hooks)
### `useEurInfo.tsx`
- 유로 환율 정보 조회
- 환율 정보 조회 완료 여부

### `useExchanger.tsx`
- EUR <> KRW 환율 계산 비즈니스 로직 (현재는 `EUR > KRW`만 구현)

## 4. Utils
- 금액 세자리마다 콤마(,)를 표시할 수 있도록 포맷팅 해주는 유틸 함수
- 입력값이 숫자인지 확인하는 유틸 함수
