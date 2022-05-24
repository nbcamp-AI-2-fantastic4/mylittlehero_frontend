// 로그아웃 클릭시 토큰삭제, 페이지 새로고침
function logout() {
  localStorage.removeItem("token");
  window.location.replace("log_in.html");
}
