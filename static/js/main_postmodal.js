// 게시글 업로드 모달
// $("#open-post-modal").on('click', function () {
//     $(".modal-overlay2").fadeIn();
//     $('body').css("overflow", "hidden");
// });
//
// $(document).on('click', function (e) {
//     if ($(".modal-overlay2").is(e.target)) {
//         $(".modal-overlay2").fadeOut();
//         $('body').css("overflowY", "scroll");
//     }
//     ;
// });
// $(document).ready(function () {
//     post_listing()
// })

/* POST 요청 ajax 코드 */
function post_posting() {
  // 고유 id let 함수로 정의
  let hashtag = $("#post_hashtag").val();
  let comment = $("#post_comment").val();
  let today = new Date().toISOString();

  let picture = $("#customFile")[0].files[0];
  let form_data = new FormData();

  form_data.append("hashtag_give", hashtag);
  form_data.append("picture_give", picture);
  form_data.append("comment_give", comment);
  form_data.append("date_give", today);

  $.ajax({
    type: "POST",
    url: "/posting",
    data: form_data,
    cache: false,
    contentType: false,
    processData: false,
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}

// 자바스크립트 파일 업로드  이미지 미리보기 삭제가안됨
function setThumbnail(event) {
  console.log(event);
  var reader = new FileReader();
  reader.onload = (event) => {
    console.log(event);
    var img = document.querySelector("#image_file");
    img.setAttribute("src", event.target.result);
  };

  reader.readAsDataURL(event.target.files[0]);
}

// 파일 업로드 이미지 미리보기
// function previewImage(targetObj, previewId) {
//     var preview = document.getElementById(previewId); //div id
//     var ua = window.navigator.userAgent;
//     if (ua.indexOf("MSIE") > -1) {//ie일때
//         targetObj.select();
//         try {
//             var src = document.selection.createRange().text; // get file full path
//             var ie_preview_error = document.getElementById("ie_preview_error_" + previewId);
//             if (ie_preview_error) {
//                 preview.removeChild(ie_preview_error); //error가 있으면 delete
//             }
//             var img = document.getElementById(previewId); //이미지가 뿌려질 곳
//             img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')"; //이미지 로딩, sizingMethod는 div에 맞춰서 사이즈를 자동조절 하는 역할
//         } catch (e) {
//             if (!document.getElementById("ie_preview_error_" + previewId)) {
//                 var info = document.createElement("<p>");
//                 info.id = "ie_preview_error_" + previewId;
//                 info.innerHTML = "a";
//                 preview.insertBefore(info, null);
//             }
//         }
//     } else { //ie가 아닐때
//         var files = targetObj.files;
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var imageType = /image.*/; //이미지 파일일경우만.. 뿌려준다.
//             if (!file.type.match(imageType)) continue;
//             var prevImg = document.getElementById("prev_" + previewId); //이전에 미리보기가 있다면 삭제
//             if (prevImg) {
//                 preview.removeChild(prevImg);
//             }
//             var img = document.createElement("img");// 크롬은   div에  이미지가  뿌려지지       않는다.그래서     자식Element를    만든다.
//             img.id = "prev_" + previewId;
//             img.classList.add("obj");
//             img.file = file;
//             img.style.width = '300px'; //기본설정된 div의 안에 뿌려지는 효과를 주기 위해서 div크기와 같은 크기를 지정해준다.
//             img.style.height = '300px';
//             preview.appendChild(img);
//             if (window.FileReader) { // FireFox, Chrome, Opera 확인.
//                 var reader = new FileReader();
//                 reader.onloadend = (function (aImg) {
//                     return function (e) {
//                         aImg.src = e.target.result;
//                     };
//                 })(img);
//                 reader.readAsDataURL(file);
//             } else { // safari is not supported FileReader
//                 // alert('not supported FileReader');
//                 if (!document.getElementById("sfr_preview_error_" + previewId)) {
//                     var info = document.createElement("p");
//                     info.id = "sfr_preview_error_" + previewId;
//                     info.innerHTML = "not supported FileReader";
//                     preview.insertBefore(info, null);
//                 }
//             }
//         }
//     }
// }
