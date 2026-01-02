import { useState } from "react";
import type { EmailValid } from "../types/joypleLogin";


const useEmailForm = () => {

    const [inputEmail, setInputEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState<EmailValid>({
        emailError: "",
        isValid: null
    });

    /**
     * 이메일 유효성 검증
     * @param email 이메일
     */
    const chkEmail = (target :string ) => {
        const email = target.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        //  입력하지 않았을 때z
        if(!email){
            setIsEmailValid({
                emailError :"이메일을 입력해주세요.",
                isValid :false
            });
        } else if(!emailPattern.test(email)){   // 이메일 형식이 틀렸을 때
            setIsEmailValid({
                emailError :"올바른 이메일 형식이 아닙니다.",
                isValid :false
            });
        } else{ // 검증 성공
            setIsEmailValid({
                emailError :"",
                isValid :true
            });
        }
    }

    /**
     * 입력값 감지에 따른 이메일 상태 값 업데이트, 이메일 유효성 검사
     * @param e 이메일 입력값
     */
    const handleEmail = (e :React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputEmail(value);
        chkEmail(value);
    }

    /**
     * blur 시 초기 상태로 변경
     */
    const handleBlur = () => {
        if(!inputEmail){
            setIsEmailValid({
                emailError :"",
                isValid :null
            });
        };
    }

    return {inputEmail, isEmailValid, chkEmail, handleEmail, handleBlur}
}

export default useEmailForm;