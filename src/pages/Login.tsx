import React, { useState } from 'react'
import PasswordForm from '../components/PasswordForm';
import usePasswordForm from '../hooks/usePasswordForm';

const Login = () => {

  const {inputPassword, passwordError, isPasswordValid, chkPassword, handlePassword, handleBlur} = usePasswordForm();
  const userEmail :string | null = localStorage.getItem('userEmail');
  // 비밀번호 표시 모드(password일 때 false)
  // const [isPasswordVisiable, setIsPasswordVisible] = useState<boolean>(false);

  /**
   * 로그인 버튼 클릭 시 비밀번호 유효성 검사 > 알림 > 페이지 이동
   */
  const actLogin = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    chkPassword(inputPassword);
    // 유효성 통과 시
    if(isPasswordValid){
        alert(inputPassword);
        alert('로그인 완료 후 게임 화면 이동');
    } 
  }

  return (
    <>
      <h2 className="subtitle">
          { userEmail && <span id="userEmail" className="blueTxt">{userEmail}</span> }<br />
          비밀번호를 입력하여 로그인을 완료해주세요.
      </h2>

      <div className="formStyle">
          <form name="contact" className="contact-inform form"
            onSubmit={actLogin}>
              <PasswordForm
                inputPassword={inputPassword}
                passwordError={passwordError}
                handlePassword={handlePassword}
                isPasswordValid={isPasswordValid}
                handleBlur={handleBlur}
                />
                
              <div>
                  <button type="submit" id="submitLoginBtn" className="btn-type1">로그인</button>
              </div>
          </form>
      </div>
    </>
  )
}
export default Login;