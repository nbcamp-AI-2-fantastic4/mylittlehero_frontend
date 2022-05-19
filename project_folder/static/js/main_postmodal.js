// 게시글 업로드 모달
$("#open-post-modal").on('click', function () {
    $(".modal-overlay2").fadeIn();
    $('body').css("overflow", "hidden");
});

$(document).on('click',function (e) {
    if( $(".modal-overlay2").is(e.target)) {
        $(".modal-overlay2").fadeOut();
        $('body').css("overflowY", "scroll");
    };
});
$(document).ready(function () {
    post_listing()
})


/* POST 요청 ajax 코드 */
function post_posting() {
    // 고유 id let 함수로 정의
    let hashtag = $('#post_hashtag').val()
    let comment = $('#post_comment').val()
    let today = new Date().toISOString()

    let picture = $('#customFile')[0].files[0]
    let form_data = new FormData()

    form_data.append("hashtag_give", hashtag)
    form_data.append("picture_give", picture)
    form_data.append("comment_give", comment)
    form_data.append("date_give", today)

    $.ajax({
        type: "POST",
        url: "/posting",
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}