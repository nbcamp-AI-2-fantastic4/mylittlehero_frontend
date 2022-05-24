// user-info GET
async function userinfo(){
  // html 헤더 name, email id에 변수 적용
  const user_name = document.getElementById("user_name")
  const user_email = document.getElementById("user_email")

  // headers에 토큰 실어서 /user-info에 GET요청
  const response = await fetch('http://127.0.0.1:5000/user-info', {
        headers:{
            'Authorization': localStorage.getItem('token')
        }
    }
    )
  
  // 서버로부터 유저 정보 받아서 텍스트 전환
  if(response.status==200){
        response_json = await response.json()
        console.log(response_json)
        // console.log(response_json.user_info.name)
        user_name.innerText = response_json.user_info.name
        user_email.innerText = response_json.user_info.email
    }
    else {
        return null
    }

}


// 로그아웃 클릭시 토큰삭제, 페이지 새로고침
function logout() {
  localStorage.removeItem("token")
  window.location.replace('log_in.html')
}


// 함수 호출
userinfo();