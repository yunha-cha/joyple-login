# React 변환 작업

## 📁 프로젝트 정보
- 프로젝트명: 회원가입, 로그인 UI React 변환
- 게임덱스 FE파트 - 차윤하
- 작업 설명: React + Typescript 기반 재구성
- 작업 기간: 2025.12.26 ~ 2025.12.31
- 기술 스택: React, TypeScript, React Router, SCSS

---

## 📂 디렉토리 구조
```
📦src
 ┣ 📂components          # 재사용 가능한 UI 컴포넌트
 ┃ ┣ 📜EmailForm.tsx     # 이메일 입력 폼 컴포넌트
 ┃ ┣ 📜Footer.tsx        # 하단 푸터 컴포넌트
 ┃ ┣ 📜Header.tsx        # 상단 헤더 컴포넌트
 ┃ ┣ 📜PasswordForm.tsx  # 비밀번호 입력 폼 컴포넌트
 ┃ ┗ 📜ToggleEye.tsx     # 비밀번호 표시/숨김 아이콘
 ┃
 ┣ 📂constants           # 상수 정의
 ┃ ┣ 📜lang.ts          # 언어별 문의하기 링크
 ┃ ┗ 📜route.ts         # 라우트 경로 상수
 ┃
 ┣ 📂layouts            # 레이아웃 컴포넌트
 ┃ ┗ 📜Layout.tsx       # 전체 페이지 레이아웃 (Header + Content + Footer)
 ┃
 ┣ 📂pages              # 페이지 컴포넌트
 ┃ ┣ 📜AccountNotFound.tsx  # 계정 없음 페이지 (joyple_login03)
 ┃ ┣ 📜EmailCheck.tsx       # 이메일 확인 페이지 (joyple_login01)
 ┃ ┣ 📜Login.tsx            # 로그인 페이지 (joyple_login02)
 ┃ ┗ 📜Signup.tsx           # 회원가입 페이지 (joyple_login04)
 ┃
 ┣ 📂scss               # SCSS 스타일 시트
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜_base.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_reset.scss
 ┃ ┃ ┗ 📜_typography.scss
 ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_mediaQueries.scss  # 반응형 미디어쿼리
 ┃ ┃ ┣ 📜_mixin.scss
 ┃ ┃ ┗ 📜_variables.scss     # CSS 변수 정의
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜_form.scss          # 폼 스타일 정의
 ┃ ┃ ┣ 📜_index.scss 
 ┃ ┃ ┗ 📜_layout.scss        # 레이아웃 및 공통 스타일
 ┃ ┗ 📜style.scss
 ┃
 ┣ 📂types              # TypeScript 타입 정의
 ┃ ┗ 📜joypleLogin.ts   # 로그인 관련 타입 정의
 ┃
 ┣ 📂utils              # 유틸리티 함수
 ┃ ┣ 📜formatUtils.ts   # 포맷 관련 유틸 (쿼리스트링 파싱)
 ┃ ┗ 📜inputUtils.ts    # Input 스타일 관련 유틸
 ┃
 ┣ 📜App.tsx            # 루트 애플리케이션 컴포넌트
 ┣ 📜main.tsx           # 애플리케이션 진입점
 ┣ 📜App.css
 ┗ 📜index.css
```

---

## 🧩 주요 컴포넌트 설명

### 1. **EmailForm.tsx**
이메일 입력 폼을 담당하는 컴포넌트입니다.

**주요 기능:**
- 이메일 입력 감지 및 실시간 유효성 검사
- 유효성 상태에 따른 border 색상 변경 (성공: 파란색, 실패: 빨간색)
- 입력값이 없을 때 label placeholder 애니메이션

**사용 위치:** `EmailCheck.tsx`

---

### 2. **PasswordForm.tsx**
비밀번호 입력 폼을 담당하는 컴포넌트입니다.

**주요 기능:**
- 비밀번호 입력 감지 및 실시간 유효성 검사 (8~20자, 영문+숫자 포함)
- 비밀번호 표시/숨김 토글 기능 (`ToggleEye` 컴포넌트 사용)
- 유효성 상태에 따른 border 색상 변경
- 다크/라이트 모드 지원

**사용 위치:** `Login.tsx`, `Signup.tsx`

---

### 3. **ToggleEye.tsx**
비밀번호 표시/숨김 아이콘을 담당하는 컴포넌트입니다.

**주요 기능:**
- 비밀번호 표시 여부에 따라 눈 아이콘 변경
- 다크/라이트 모드에 따른 아이콘 색상 변경

**사용 위치:** `PasswordForm.tsx`

---

### 4. **Header.tsx**
페이지 상단 헤더를 담당하는 컴포넌트입니다.

**주요 기능:**
- 페이지별 동적 title 표시
- 모바일에서 뒤로가기 버튼 표시 (현재 미구현)

**사용 위치:** `Layout.tsx`

---

### 5. **Footer.tsx**
페이지 하단 푸터를 담당하는 컴포넌트입니다.

**주요 기능:**
- 페이지별 동적 링크 및 텍스트 표시
- 비밀번호 찾기, 다른 이메일 사용 등 안내

**사용 위치:** `Layout.tsx`

---

### 6. **Layout.tsx**
전체 페이지 레이아웃을 담당하는 컴포넌트입니다.

**주요 기능:**
- 라우트 경로에 따라 Header와 Footer의 내용 자동 변경
- `Outlet`을 통해 하위 페이지 렌더링

---

### 7. **페이지 컴포넌트**

#### **EmailCheck.tsx** (joyple_login01)
- 이메일 입력 및 검증
- 이메일 존재 여부에 따라 `/login` 또는 `/no-account`로 이동

#### **Login.tsx** (joyple_login02)
- 비밀번호 입력 및 검증
- 로그인 완료 처리

#### **AccountNotFound.tsx** (joyple_login03)
- 계정을 찾을 수 없을 때 표시
- 회원가입 유도 및 언어/게임별 문의하기 링크 제공

#### **Signup.tsx** (joyple_login04)
- 비밀번호 등록을 통한 회원가입
- 가입 완료 후 이메일 확인 페이지로 이동

---

## 📦 Props 구조

### **EmailForm Props**
```typescript
type EmailFormProps = {
    isDarkMode: boolean;              // 다크/라이트 모드 여부
    inputEmail: string;               // 이메일 입력값
    isEmailValid: EmailValid;         // 이메일 유효성 상태 { emailError: string, isValid: boolean | null }
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 이메일 입력 핸들러
    handleBlur: () => void;           // blur 이벤트 핸들러
}
```

---

### **PasswordForm Props**
```typescript
type PasswordFormProps = {
    isDarkMode: boolean;              // 다크/라이트 모드 여부
    inputPassword: string;            // 비밀번호 입력값
    passwordError: string;            // 비밀번호 에러 메시지
    isPasswordValid: boolean | null;  // 비밀번호 유효성 상태
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;  // 비밀번호 입력 핸들러
    handleBlur: () => void;           // blur 이벤트 핸들러
}
```

---

### **ToggleEye Props**
```typescript
type ToggleEyeProps = {
    isEye: boolean;                   // 비밀번호 표시 여부
    isDarkMode: boolean;              // 다크/라이트 모드 여부
}
```

---

### **Header Props**
```typescript
type HeaderProps = {
    title?: string;                   // 헤더 타이틀 텍스트
}
```

---

### **Footer Props**
```typescript
type FooterProps = {
    footerContent: string;            // 푸터 안내 텍스트
    footerLink: string;               // 푸터 링크 URL
}
```

---

## 🎨 CSS 안내
- 폰트: SF Pro (기존 퍼블리싱 기준)
- 반응형: 미디어쿼리 기준 max-width 사용
  - **PC**: 1920 × 1080
  - **태블릿**: 991px 이하
  - **모바일**: 768px 이하
  - **모바일 미니**: 450px 이하
- 다크/라이트 모드 스타일 분리 (`_variables.scss`)

---

## ⚙️ TypeScript 타입 정의

### **joypleLogin.ts**
```typescript
// 이메일 유효성 타입
export type EmailValid = {
    emailError: string;
    isValid: boolean | null;
}

// 언어 타입
export type Lang = 'KO' | 'EN' | 'JP' | 'ZH' | 'ZT' | 'RU' | 'FR' | 'DE' | 'AR';

// 게임 타입
export type Game = 'potc' | 'gbtw';
```

---

## 🔗 라우팅 구조
```typescript
const routes = [
  '/email-check',      // 이메일 확인 페이지 - joyple_login01
  '/login',            // 로그인 페이지 - joyple_login02
  '/no-account',       // 계정 없음 페이지 - joyple_login03
  '/sign-up',          // 회원가입 페이지 - joyple_login04
];
```

---

## 📌 기타 참고 사항

- **상태 관리**: React `useState` 훅 사용
- **라우팅**: React Router v6 사용
- **스타일**: SCSS 모듈 기반
- **localStorage**: 이메일 저장용 (`userEmail`)
- **유효성 검사**: 
  - 이메일: 이메일 형식 검증 (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
  - 비밀번호: 8~20자, 영문+숫자 포함 (`/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/`)

