// 모달
$(document).on('click', function () {
// 모달 띄우기
    $(".btn-open-popup").click(function () {
        $(".modal-overlay").fadeIn();
        $('body').css("overflow", "hidden");
    });
// 모달 닫기
    $(".close-area").click(function () {
        $(".modal-overlay").fadeOut();
        $('body').css("overflowY", "scroll");
    });
});
$(document).on('click', function (e) {
    if ($(".modal-overlay").is(e.target)) {
        $(".modal-overlay").fadeOut();
        $('body').css("overflowY", "scroll");
    }
    ;
});



// // 자바스크립트 파일 업로드  이미지 미리보기
// function upload(event) {
//     console.log(event);
//     var reader = new FileReader();
//     reader.onload = (event) => {
//         console.log(event);
//         var img = document.querySelector("#image_file");
//         img.setAttribute("src", event.target.result);
//     };
//
//     reader.readAsDataURL(event.target.files[0]);
// }



function upload() {
    let file = $('#upload-file')[0].files[0]
    // let title = $('#upload-title').val()
    let form_data = new FormData()

    form_data.append("user_img", file)
    // form_data.append("title_give", title)

    $.ajax({
        type: "POST",
        url: "/upload",
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response["result"])
        }
    });
  }

  // function search() {
  //   let title = $('#search-title').val()
  //   let form_data = new FormData()
  //
  //   form_data.append("title_give", title)
  //
  //   $.ajax({
  //       type: "POST",
  //       url: "/search",
  //       data: form_data,
  //       cache: false,
  //       contentType: false,
  //       processData: false,
  //       success: function (response) {
  //           let predictions = response["predictions"]
  //           $('.result').remove()
  //           for (let i = 0; i < predictions.length; i++) {
  //               let path = predictions[i]['path']
  //               let result = predictions[i]['result']
  //
  //               let temp_html = `<div class="result"><img src="${path}" width="100px"/>
  //                               <p>${result}</p></div>`
  //               $('.search').append(temp_html)
  //           }
  //       }
  //   });
  // }

  function preview() {
    let frame = document.getElementById('frame');
    frame.src=URL.createObjectURL(event.target.files[0]);
    frame.style.display = 'block';
  }


