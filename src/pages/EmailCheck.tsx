import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { EmailValid } from '../types/joypleLogin';
import EmailForm from '../components/EmailForm';
import useEmailForm from '../hooks/useEmailForm';

const EmailCheck = () => {

    const navigate = useNavigate();
    const {inputEmail, isEmailValid, chkEmail, handleEmail, handleBlur} = useEmailForm();

    /**
     * 로그인 다음 단계  
     * :이메일 검증 및 페이지 이동
     */
    const actNextLogin = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
                <form name="contact" className="contact-inform form"
                    onSubmit={actNextLogin}>
                    <EmailForm 
                        inputEmail={inputEmail}
                        isEmailValid={isEmailValid}
                        handleEmail={handleEmail}
                        handleBlur={handleBlur} />
                    {/* 로그인 계속하기 버튼 */}
                    <div>
                        <button type="submit" id="submitNextBtn" className="btn-type1"
                        >로그인</button>
                    </div>
                </form>
            </div> 
        </>
    )
}
export default EmailCheck;