import { useState } from "react";

const usePasswordForm = () => {

    const [inputPassword, setInputPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);

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
      const { value } = e.target;
      setInputPassword(value);
      chkPassword(value);
    }

    /**
     * blur 시 초기 상태로 변경
     */
    const handleBlur = () => {
      if(!inputPassword){
        setPasswordError("");
        setIsPasswordValid(null);
      }
    }

    return {inputPassword, passwordError, isPasswordValid, chkPassword, handlePassword, handleBlur}
}

export default usePasswordForm;