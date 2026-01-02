import { useContext } from "react";
import type { EmailValid } from "../types/joypleLogin";
import { inputCss, setInputColor } from "../utils/inputUtils";
import { ModeContext } from "../contexts/ModeContext";

type EmailFormProps = {
    inputEmail :string;
    isEmailValid :EmailValid; // emailError, isValid
    handleEmail :(e :React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur :() => void;
}

const EmailForm = ({inputEmail, isEmailValid, handleEmail, handleBlur} :EmailFormProps) => {
    const isDarkMode = useContext(ModeContext);

    return (
        <>
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
        </>
    );
}

export default EmailForm;