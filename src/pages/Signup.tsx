import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ROUTES } from '../constants/route';
import PasswordForm from '../components/PasswordForm';

const Signup = () => {

  // 임시 [라이트]/다크 모드
  const isDarkMode :boolean = false;
  const userEmail :string | null = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const [inputPassword, setInputPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  // 비밀번호 표시 모드(password일 때 false)
  // const [isPasswordVisiable, setIsPasswordVisible] = useState<boolean>(false);

  /**
   * 비밀번호 유효성 검증
   */
  const chkPassword = (target :string) => {
    const password = target.trim();
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;

    if(!password){
      setPasswordError("비밀번호를 입력해주세요.");
      setIsPasswordValid(false);
    } else if(!passwordPattern.test(password)){
      setPasswordError("8~20자리 숫자와 영문을 함께 입력해주세요.");
      setIsPasswordValid(false);
    } else{
      setPasswordError("");
      setIsPasswordValid(true);
    }
  }
  
  /**
   * 비밀번호 변경 시 상태 값 업데이트, 비밀번호 유효성 검사
   * @param e 비밀번호 입력값
   */
  const handlePassword = (e :React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPassword(value);
    chkPassword(value);
  }

  /**
   * blur 시 초기 상태로 변경
   */
  const handleBlur = () => {
    if(inputPassword == ""){
      setPasswordError("");
      setIsPasswordValid(null);
    }
  }

  /**
   * 가입하기 다음 단계
   * */ 
  const actPwJoin = () => {
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
        <form name="contact" className="contact-inform form">
          <PasswordForm
                isDarkMode={isDarkMode}
                inputPassword={inputPassword}
                passwordError={passwordError}
                handlePassword={handlePassword}
                isPasswordValid={isPasswordValid}
                handleBlur={handleBlur} />
          
          <div>
            <button type="button" id="submitPwJoinBtn" className="btn-type1"
            onClick={actPwJoin}>가입하기</button>
          </div>
        </form>
      </div>
    </> 
  )
}

export default Signup;