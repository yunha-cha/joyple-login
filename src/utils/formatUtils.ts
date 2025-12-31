// 쿼리스트링에서 lan 값을 추출하는 함수
export const getQueryParam = (param :string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
