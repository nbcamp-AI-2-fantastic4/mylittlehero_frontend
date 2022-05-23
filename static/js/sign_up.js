// sign up button 클릭시 함수 실행
async function handleSignup() {

    const signupData = {
        name : document.getElementById('floatingInputNM').value,
        email : document.getElementById('floatingInput').value,
        pw : document.getElementById('floatingPassword').value,
        pw_check : document.getElementById('floatingPassword2').value
    }

    // 서버로 보내기전 이메일, 패스워드 조건 확인
    if (signupData.name == '' || signupData.email == '' || signupData.pw == ''){
        alert('빈칸을 모두 입력해주세요.')
    }
    else if (signupData.email.indexOf('@') == -1) {    // indexOf 포함하고있는 문자의 인덱스를 반환한다. 없으면 -1 반환.
        alert('이메일 형식이 아닙니다.')
    }
    else if ( signupData.pw.length < 8 ){
        alert('비밀번호를 8자리 이상 입력해주세요.')
    }
    else if ( signupData.pw != signupData.pw_check ) {
        alert('비밀번호가 다릅니다.')
    }
    // 조건 맞으면
    else {
        const response = await fetch('http://127.0.0.1:5000/sign-up', {  // app.py 서버 주소
        method: 'POST',
        body: JSON.stringify(signupData)
        })
        // console.log(response)

        if (response.status == 200){
            alert('회원가입 완료!')
            window.location.replace('log_in.html')
        }
        else if (response.status == 401){
            alert('이미 가입된 이메일입니다.')
        }
    }
}
