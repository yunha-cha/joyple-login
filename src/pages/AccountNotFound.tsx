import { CONTACT_LINKS } from '../constants/lang';
import type { Game, Lang } from '../types/joypleLogin';

const AccountNotFound = () => {

  const userEmail :string | null = localStorage.getItem('userEmail');
  
  /**
   * 언어/게임 별 문의하기 링크 이동
   */
  const setMoveInquiry = (game :Game) => {

     // url 파라미터 내 언어 값
    // const lanParam = getQueryParam('lan');
    // let upperLan = '';
    // if (lanParam) {
    //     upperLan = lanParam.toUpperCase();
    // }

    // 임시 테스트 언어 => 언어 연결 시 삭제
    let upperLan :Lang = 'KO';

    const url :string = CONTACT_LINKS[upperLan]?.[game];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('잘못된 언어 또는 게임 선택입니다.');
    }
  }


  return (
    <>
      <h2 className="subtitle">
        { userEmail && <span id="userEmail" className="blueTxt">{userEmail}</span> }<br/>
        계정을 찾을 수 없습니다. 
        이메일을 다시 확인하거나 
        회원가입을 해주세요.
      </h2>

      {/* 언어/게임 별 문의하기 링크 이동 */}
      <div>
        <div className="textList">
            <ul>
                <li>도움이 더 필요하신가요? <a href="#" className="contactBtn" onClick={() => setMoveInquiry('gbtw')}>문의하기</a></li>
            </ul>
        </div>

        {/* 비밀번호 등록하고 회원가입 버튼 */}
        <div>
            <a href="/sign-up" className="btn-type1">비밀번호 등록하고 회원가입</a> 
        </div>
      </div>
    
    
    </>
  );
}

export default AccountNotFound;