// 메인페이지 오면 바로 로그인 되어있나 체크
async function checkLogin(){
    // 메인에서 getuserinfo 함수 실행하고 리턴되는 값 저장
    // const user = await get_user_info()
    const user = {
      'name': '최민기',
      'email': 'aaa@aaa'
    }
    // console.log(user)

    // 메인 html 헤더에 들어가는 유저정보와 로그아웃버튼 ID
    const user_name = document.getElementById("user_name")
    const user_email = document.getElementById("user_email")
    const logout_btn = document.getElementById("logout_btn")

    if (user){
        user_name.innerText = user.name
        user_email.innerText = user.email
        logout_btn.innerText = "로그아웃"
        logout_btn.setAttribute("onclick", "logout()") // 클릭했을때 logout 함수실행

    }
    else {
        user_name.innerText = '로그인해주세요'
        logout_btn.innerText = '로그인'
        logout_btn.setAttribute("onclick", "location.href='/signin.html")
    }
}


// 로그아웃 클릭시 토큰삭제, 페이지 새로고침
function logout() {
  localStorage.removeItem("token")
  window.location.replace('index.html')
}


// 함수 실행
checkLogin();


