import type { EmailValid } from "../types/joypleLogin";
import { inputCss, setInputColor } from "../utils/inputUtils";

type EmailFormProps = {
    isDarkMode :boolean;
    inputEmail :string;
    isEmailValid :EmailValid; // emailError, isValid
    handleEmail :(e :React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur :() => void;
}


const EmailForm = ({isDarkMode, inputEmail, isEmailValid, handleEmail, handleBlur} :EmailFormProps) => {

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
        </>
    );
}

export default EmailForm;