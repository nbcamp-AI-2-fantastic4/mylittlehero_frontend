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



// 자바스크립트 파일 업로드  이미지 미리보기
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






