// 로그인 버튼 클릭시 함수 실행
async function handleSignin() {

    const signinData = {
        email : document.getElementById('floatingInput').value,
        pw : document.getElementById('floatingPassword').value
    }

    // 서버로 보내기전 이메일, 패스워드 조건 확인
    if (signinData.email == '' || signinData.pw == ''){
        alert('이메일과 비밀번호를 모두 입력해주세요.')
    }
    else if (signinData.email.indexOf('@') == -1) {    // indexOf 포함하고있는 문자의 인덱스를 반환한다. 없으면 -1 반환.
        alert('이메일 형식이 아닙니다.')
    }
    // 이메일 형식 맞으면
    else {
        const response = await fetch('http://127.0.0.1:5000/login', {  // app.py 서버 주소
        method: 'POST',
        body: JSON.stringify(signinData)
        })
        // console.log(response)

        // 로그인 성공
        if (response.status == 200){
            alert('로그인 완료!')
            window.location.replace('index.html')

            response_json = await response.json()   // 받을때도 json 형식으로 받으면 메세지랑 토큰 받을수있다!!!!!
            console.log(response_json)

            localStorage.setItem('token',response_json.token)   // 브라우저 로컬저장소에 키,밸류 값으로 저장

        }
        // 정보 없음
        else if (response.status == 401){
            alert('가입된 정보가 없습니다. 회원가입 해주세요.')
        }
    }
}