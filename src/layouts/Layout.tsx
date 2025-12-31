import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {

    const location = useLocation();

    const getLayoutConfig = () => {
        switch(location.pathname) {
            case '/email-check':
                return { 
                    title: "로그인/회원가입",
                    footerContent: "계정이 없으십니까?",
                    footerLink: "joyple_login_common.html"
                };
            case '/login':
                return { 
                    title: "로그인", 
                    footerContent: "비밀번호가 생각나지 않습니까?",
                    footerLink: "joyple_login_pw01.html"
                };
            case '/no-account':
                return { 
                    title: '로그인/회원가입', 
                    footerContent: "다른 이메일을 사용하시겠습니까?",
                    footerLink: "/email-check"
                };
            case '/sign-up':
                return { 
                    title: "회원가입",
                    footerContent: "다른 이메일을 사용하시겠습니까?",
                    footerLink: "/email-check"
                };
            default:
                return { 
                    title: "잘못된 경로입니다.", 
                    footerContent: "로그인/회원가입으로",
                    footerLink: "/email-check"
                };
        }
    }

    const {title, footerContent, footerLink} = getLayoutConfig();

    return(
        <div className="wrap">
            <Header title={title}/>
            <div className="inner">
                <div className="container">
                    <Outlet />
                    <Footer footerContent={footerContent} footerLink={footerLink}/>
                </div>
            </div>
        </div>
    );
}
export default Layout;