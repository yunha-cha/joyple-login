import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ROUTES } from '../constants/route';
import PasswordForm from '../components/PasswordForm';
import usePasswordForm from '../hooks/usePasswordForm';

const Signup = () => {
  
  const {inputPassword, passwordError, isPasswordValid, chkPassword, handlePassword, handleBlur} = usePasswordForm();
  const userEmail :string | null = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  // 비밀번호 표시 모드(password일 때 false)
  // const [isPasswordVisiable, setIsPasswordVisible] = useState<boolean>(false);

  /**
   * 가입하기 다음 단계
   * */ 
  const actPwJoin = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    chkPassword(inputPassword);
    // 유효성 통과 시
    if (isPasswordValid) {
      alert(inputPassword);
      
      if (ROUTES.includes('/email-check')) {
          navigate('/email-check')
      } else {
          alert('잘못된 접근 입니다.');
      }
    }
  }
  
  return (
    <>
      <h2 className="subtitle">
        { userEmail && <span id="userEmail" className="blueTxt">{userEmail}</span> }<br />
        비밀번호를 입력하여 회원가입을 완료해주세요
      </h2>

      <div className="formStyle">
        <form name="contact" className="contact-inform form"
          onSubmit={actPwJoin}>
          <PasswordForm
            inputPassword={inputPassword}
            passwordError={passwordError}
            handlePassword={handlePassword}
            isPasswordValid={isPasswordValid}
            handleBlur={handleBlur} />
          
          <div>
            <button type="submit" id="submitPwJoinBtn" className="btn-type1">가입하기</button>
          </div>
        </form>
      </div>
    </> 
  )
}

export default Signup;