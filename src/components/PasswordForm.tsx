import { useState } from "react";
import { inputCss, setInputColor } from "../utils/inputUtils";
import ToggleEye from "./ToggleEye";

type PasswordFormProps = {
    isDarkMode :boolean;
    inputPassword :string;
    passwordError :string;
    isPasswordValid :boolean | null;
    handlePassword :(e :React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur :() => void;
}

const PasswordForm = ({isDarkMode, inputPassword, passwordError, isPasswordValid, handlePassword, handleBlur} :PasswordFormProps) => {

  // 비밀번호 눈 표시 모드(password일 때 false)
  const [isPasswordVisiable, setIsPasswordVisible] = useState<boolean>(false);

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