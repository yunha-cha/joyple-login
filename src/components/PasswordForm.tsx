import { useState } from "react";
import { useNavigate } from "react-router";
import { inputCss, setInputColor } from "../utils/inputUtils";
import ToggleEye from "./ToggleEye";

type PasswordFormProps = {
    isDarkMode :boolean;
    inputPassword :string;
    passwordError :string;
    isPasswordValid :boolean | null;
    
}

const PasswordForm = () => {

    // 임시 [라이트]/다크 모드
  const isDarkMode :boolean = false;

  const [inputPassword, setInputPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  // 비밀번호 표시 모드(password일 때 false)
  const [isPasswordVisiable, setIsPasswordVisible] = useState<boolean>(false);

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

    return (
        <div className="form-wrap">
            <div className="form-row">
                <div className="form-group">
                    <div className="password-wrapper">
                    <input type={isPasswordVisiable ? "text" : "password"}
                        id="password" className="form-input reset"
                        value={inputPassword}
                        onChange={handlePassword}
                        onBlur={handleBlur}
                        style={{
                        ...inputCss,
                        borderColor: setInputColor(isPasswordValid)
                        }}
                        placeholder=""
                        required />
                    <label htmlFor="password" className="form-label"
                        style={{
                            color: setInputColor(isPasswordValid)
                        }}
                    >비밀번호</label> 
                    {
                        inputPassword &&
                        <button type="button" className="toggle-password"
                        onClick={() => setIsPasswordVisible(!isPasswordVisiable)}>
                            <ToggleEye isEye={isPasswordVisiable} isDarkMode={isDarkMode} />
                        </button>
                    }
                    </div>
                </div>
                {
                    passwordError && 
                    <div className="error-message" id="password-error">{passwordError}</div>
                }
            </div>
        </div>
    );
}
export default PasswordForm;