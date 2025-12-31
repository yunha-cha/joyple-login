import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { EmailValid } from '../types/joypleLogin';
import { inputCss, setInputColor } from '../utils/inputUtils';


const EmailCheck = () => {

    // 임시 [라이트]/다크 모드
    const isDarkMode :boolean = false;

    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState<EmailValid>({
        emailError: "",
        isValid: null
    });

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
        if(inputEmail == ""){
            setIsEmailValid({
                emailError :"",
                isValid :null
            });
        };
    }

    /**
     * 이메일 유효성 검증
     * @param email 이메일
     */
    const chkEmail = (target :string ) => {
        const email = target.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!email){
            console.log("이메일 입력안했을 때");
            setIsEmailValid({
                emailError :"이메일을 입력해주세요.",
                isValid :false
            });
        } else if(!emailPattern.test(email)){
            setIsEmailValid({
                emailError :"올바른 이메일 형식이 아닙니다.",
                isValid :false
            });
        } else{
            console.log("검증 성공");
            setIsEmailValid({
                emailError :"",
                isValid :true
            });
        }
    }

    /**
     * 로그인 다음 단계  
     * :이메일 검증 및 페이지 이동
     */
    const actNextLogin = () => {

        chkEmail(inputEmail);

        if(isEmailValid?.isValid){
            alert(inputEmail);
            //이메일을 브라우저에 저장
            localStorage.setItem('userEmail', inputEmail);

            // 이메일이 등록된 계정일 경우 emailExists = true, 클릭 시 joyple_login02 페이지로 이동
            // 이메일이 등록되지 않은 계정일 경우 emailExists = false, 클릭 시 joyple_login03 페이지로 이동
            const emailExists :boolean = true; // 임시

            let url = emailExists ? '/login' : '/no-account';
            if(url){
                navigate(url, {
                    state: {
                        isEmailValid: isEmailValid.isValid
                    }
                });
            }else{
                alert('잘못된 접근 입니다.');
            }
        }
    }

    return(
        <>     
            <h2 className="subtitle">로그인 또는 회원 가입을 원하는 이메일을 입력해주세요.</h2>

            {/* 이메일 입력 */}
            <div className="formStyle">
                <form name="contact" className="contact-inform form">
                    <div className="form-wrap">
                        <div className="form-row">
                            <div className="form-group">
                            <input
                                type="text"
                                id="email"
                                className={"form-input reset"}
                                placeholder="none"
                                value={inputEmail}
                                onChange={handleEmail}
                                onBlur={handleBlur}
                                style={{
                                    ...inputCss(isDarkMode),
                                    borderColor: setInputColor(isEmailValid.isValid)
                                }}
                                required
                            />
                            <label htmlFor="email" className="form-label"
                                style={{
                                    color: setInputColor(isEmailValid.isValid)
                                }}>
                                이메일 계정
                            </label>
                            </div>
                            {
                                isEmailValid?.emailError && (
                                <div className="error-message" id="email-error">
                                    {isEmailValid?.emailError}
                                </div>)
                            }
                        </div>
                    </div>

                    {/* 로그인 계속하기 버튼 */}
                    <div>
                        <button type="button" id="submitNextBtn" className="btn-type1"
                            onClick={() => actNextLogin()}
                        >로그인</button>
                    </div>
                </form>
            </div> 
        </>
    )
}
export default EmailCheck;