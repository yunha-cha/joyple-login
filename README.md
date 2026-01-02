# React 변환 작업

## 📁 프로젝트 정보
- 프로젝트명: 회원가입, 로그인 UI React 변환
- 게임덱스 FE파트 - 차윤하
- 작업 설명: React + Typescript 기반 재구성
- 작업 기간: 2025.12.26 ~ 2026.01.02
- 기술 스택: React, TypeScript, React Router, SCSS

---

## 📂 디렉토리 구조
```
📦src
 ┣ 📂components          # 재사용 가능한 컴포넌트
 ┃ ┣ 📜EmailForm.tsx     # 이메일 입력 폼
 ┃ ┣ 📜PasswordForm.tsx  # 비밀번호 입력 폼
 ┃ ┣ 📜ToggleEye.tsx     # 비밀번호 표시/숨김 아이콘
 ┃ ┣ 📜Header.tsx        # 페이지 헤더
 ┃ ┗ 📜Footer.tsx        # 페이지 푸터
 ┃
 ┣ 📂pages               # 페이지 컴포넌트
 ┃ ┣ 📜EmailCheck.tsx    # 이메일 확인 페이지 (joyple_login01)
 ┃ ┣ 📜Login.tsx         # 로그인 페이지 (joyple_login02)
 ┃ ┣ 📜AccountNotFound.tsx # 계정 없음 페이지 (joyple_login03)
 ┃ ┗ 📜Signup.tsx        # 회원가입 페이지 (joyple_login04)
 ┃
 ┣ 📂layouts             # 레이아웃 컴포넌트
 ┃ ┗ 📜Layout.tsx        # 공통 레이아웃 (헤더/푸터 포함)
 ┃
 ┣ 📂hooks               # 커스텀 훅
 ┃ ┣ 📜useEmailForm.tsx  # 이메일 폼 로직
 ┃ ┗ 📜usePasswordForm.tsx # 비밀번호 폼 로직
 ┃
 ┣ 📂contexts            # Context API
 ┃ ┗ 📜ModeContext.tsx   # 다크/라이트 모드 관리
 ┃
 ┣ 📂utils               # 유틸리티 함수
 ┃ ┣ 📜inputUtils.ts     # Input 스타일 관련 유틸
 ┃ ┗ 📜formatUtils.ts    # 쿼리스트링 파싱 유틸
 ┃
 ┣ 📂types               # TypeScript 타입 정의
 ┃ ┗ 📜joypleLogin.ts    # 로그인 관련 타입
 ┃
 ┣ 📂constants           # 상수 정의
 ┃ ┣ 📜route.ts          # 라우트 경로
 ┃ ┗ 📜lang.ts           # 언어별 문의 링크
 ┃
 ┣ 📂scss                # 스타일 시트
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜_base.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_reset.scss
 ┃ ┃ ┗ 📜_typography.scss
 ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_mediaQueries.scss
 ┃ ┃ ┣ 📜_mixin.scss
 ┃ ┃ ┗ 📜_variables.scss
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜_form.scss      # 폼 스타일
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┗ 📜_layout.scss    # 레이아웃 및 공통 스타일
 ┃ ┗ 📜style.scss
 ┃
 ┣ 📂css                 # 컴파일된 CSS
 ┃ ┣ 📜style.min.css
 ┃ ┗ 📜style.min.css.map
 ┃
 ┣ 📂assets              # 정적 리소스
 ┃ ┣ 📜react.svg
 ┃ ┗ 📜vite.svg
 ┃
 ┣ 📜App.tsx             # 메인 앱 컴포넌트
 ┣ 📜main.tsx            # 앱 진입점
 ┗ 📜index.css           # 글로벌 스타일
```

---

## 🔄 HTML → React 변환 내역

### 페이지 매핑

| 원본 HTML | React 컴포넌트 | 경로 |
|-----------|---------------|------|
| joyple_login01.html | EmailCheck.tsx | /email-check |
| joyple_login02.html | Login.tsx | /login |
| joyple_login03.html | AccountNotFound.tsx | /no-account |
| joyple_login04.html | Signup.tsx | /sign-up |


---

## 🧩 주요 컴포넌트 설명

### 1. **EmailForm.tsx**
이메일 입력 폼을 담당하는 컴포넌트입니다.

**주요 기능:**
- 이메일 입력 감지 및 실시간 유효성 검사
- 유효성 상태에 따른 border 색상 변경 (성공: #1569E6, 실패: #DC3C00)
- 입력값이 없을 때 label 애니메이션
- Context API를 통한 다크/라이트 모드 지원

**사용 위치:** `EmailCheck.tsx`

---

### 2. **PasswordForm.tsx**
비밀번호 입력 폼을 담당하는 컴포넌트입니다.

**주요 기능:**
- 비밀번호 입력 감지 및 실시간 유효성 검사 (8~20자, 영문+숫자 포함)
- 비밀번호 표시/숨김 토글 기능 (`ToggleEye` 컴포넌트 사용)
- 유효성 상태에 따른 border 색상 변경
- 다크/라이트 모드 지원
- 입력값이 있을 때만 눈 아이콘 표시

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
- 페이지별 헤더, 푸터 내용 설정

---

### 7. **페이지 컴포넌트**

#### **EmailCheck.tsx** (joyple_login01)
- `useEmailForm` 커스텀 훅을 사용한 이메일 입력 및 검증
- 이메일 존재 여부에 따라 `/login` 또는 `/no-account`로 이동
- `localStorage`에 이메일 저장 (`userEmail`)

#### **Login.tsx** (joyple_login02)
- `usePasswordForm` 커스텀 훅을 사용한 비밀번호 입력 및 검증
- `localStorage`에서 저장된 이메일 표시
- 로그인 완료 처리 (alert 후 게임 화면 이동 예정)

#### **AccountNotFound.tsx** (joyple_login03)
- 계정 이메일을 찾을 수 없을 때 표시
- 언어/게임별 문의하기 링크 제공
  - `CONTACT_LINKS` 상수에서 언어(Lang)와 게임(Game)에 따른 URL 자동 매핑
  - 9개 언어 지원: KO, EN, JP, ZH, ZT, RU, FR, DE, AR
  - 2개 게임 지원: gbtw, potc
- 회원가입(`/sign-up`) 페이지로 유도

#### **Signup.tsx** (joyple_login04)
- `usePasswordForm` 커스텀 훅을 사용한 비밀번호 등록
- `localStorage`에서 저장된 이메일 표시
- 가입 완료 후 `/email-check` 페이지로 이동

---

## 🎣 Custom Hooks

### **useEmailForm.tsx**
이메일 폼 상태 관리를 위한 커스텀 훅입니다.

**반환값:**
```typescript
{
  inputEmail: string,                    // 이메일 입력값
  isEmailValid: EmailValid,              // 유효성 상태
  chkEmail: (target: string) => void,    // 유효성 검증 함수
  handleEmail: (e: ChangeEvent) => void, // 입력 핸들러
  handleBlur: () => void                 // blur 핸들러
}
```

**유효성 검증:**
- 빈 값: "이메일을 입력해주세요."
- 형식 오류: "올바른 이메일 형식이 아닙니다."
- 정규식: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

---

### **usePasswordForm.tsx**
비밀번호 폼 상태 관리를 위한 커스텀 훅입니다.

**반환값:**
```typescript
{
  inputPassword: string,                    // 비밀번호 입력값
  passwordError: string,                    // 에러 메시지
  isPasswordValid: boolean | null,          // 유효성 상태
  chkPassword: (target: string) => void,    // 유효성 검증 함수
  handlePassword: (e: ChangeEvent) => void, // 입력 핸들러
  handleBlur: () => void                    // blur 핸들러
}
```

**유효성 검증:**
- 빈 값: "비밀번호를 입력해주세요."
- 형식 오류: "8~20자리 숫자와 영문을 함께 입력해주세요."
- 정규식: `/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/`

---

## 📦 Props 구조

### **EmailForm Props**
```typescript
type EmailFormProps = {
    inputEmail: string;                                          // 이메일 입력값
    isEmailValid: EmailValid;                                    // 이메일 유효성 상태
    handleEmail: (e: React.ChangeEvent) => void;  // 이메일 입력 핸들러
    handleBlur: () => void;                                      // blur 이벤트 핸들러
}
// Context로 isDarkMode 전달 (ModeContext.Provider)
```

---

### **PasswordForm Props**
```typescript
type PasswordFormProps = {
    inputPassword: string;                                          // 비밀번호 입력값
    passwordError: string;                                          // 비밀번호 에러 메시지
    isPasswordValid: boolean | null;                                // 비밀번호 유효성 상태
    handlePassword: (e: React.ChangeEvent) => void;  // 비밀번호 입력 핸들러
    handleBlur: () => void;                                         // blur 이벤트 핸들러
}
// Context로 isDarkMode 전달 (ModeContext.Provider)
```

---

### **ToggleEye Props**
```typescript
type ToggleEyeProps = {
    isEye: boolean;  // 비밀번호 표시 여부
}
// Context로 isDarkMode 전달 (ModeContext.Provider)
```

---

### **Header Props**
```typescript
type HeaderProps = {
    title?: string;  // 헤더 타이틀 텍스트 (옵셔널)
}
```

---

### **Footer Props**
```typescript
type FooterProps = {
    footerContent: string;  // 푸터 안내 텍스트
    footerLink: string;     // 푸터 링크 URL
}
```

---

## 🎯 Context API

### **ModeContext.tsx**
```typescript
export const ModeContext = createContext(false);

// App.tsx에서 사용
// 컴포넌트에서 사용
const isDarkMode = useContext(ModeContext);
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

## 📌 기타 참고 사항

- **상태 관리**: React `useState` 훅 사용
- **라우팅**: React Router v6 사용
- **스타일**: SCSS 모듈 기반
- **localStorage**: 이메일 저장용 (`userEmail`)
- **다크모드**: `App.tsx`의 `isDarkMode` 변수가 현재 `false`로 고정되어 있음 (토글 기능 미구현)
- **유효성 검사**: 
  - 이메일: 이메일 형식 검증 (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
  - 비밀번호: 8~20자, 영문+숫자 포함 (`/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/`)

