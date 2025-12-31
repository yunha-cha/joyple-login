export const setInputColor = (isValid :boolean | null) => 
    isValid === null ? '' : isValid ? '#1569E6' : '#DC3C00';

export const focusInputCss = {
    borderWidth: '',
    borderColor: ''
};

// 초기 상태 input
export const inputCss = (isDarkMode :boolean) => ({
    borderWidth: "",
    borderColor: isDarkMode ? "#444" : "#F2F2F2",
    borderBottomWidth: "2px",
    borderBottomColor: "#1569E6",
    color: ""
});