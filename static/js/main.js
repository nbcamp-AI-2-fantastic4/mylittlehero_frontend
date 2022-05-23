// 업로드 버튼 함수
function upload_user_img() {
  save_result();

  $("#select_view").css("display", "none");
  $("#result_view").css("display", "block");
}

// 다시하기 버튼 함수
function restart_upload() {
  $("#select_view").css("display", "block");
  $("#result_view").css("display", "none");
}

// 메인 마블 캐릭터 변경시 스크롤 이동 함수
function move_info() {
  let offset = $(".main_body").offset(); //해당 위치 반환
  $("html, body").animate({ scrollTop: offset.top - 120 }, 400);
}

// 메인과 서브 캐릭터 위치 바꾸기
// event : 클릭된 이미지 element
// position : 클릭된 이미지 위치 - 왼쪽: 2, 오른쪽: 3
function change_main_hero(event, position) {
  // 현재 메인에 있는 마블 캐릭터
  let current_main_name = $("#main_hero").attr("name");
  let currnent_main_hero;

  // 변경할 메인 마블 캐릭터
  let new_main_name = event.target.name;
  let new_main_hero;
  let new_main_position = dummy_heros.forEach((Element) => {
    if (Element.hero == new_main_name) {
      new_main_hero = Element;
    }
    if (Element.hero == current_main_name) {
      currnent_main_hero = Element;
    }
  });

  // 이미지 변경
  $("#main_hero_img").attr("src", new_main_hero.hero_img);
  event.target.src = currnent_main_hero.hero_img;

  // 순위, 이름 변경
  $(`.hero_sub_box[name="${position}"] div`).text(
    currnent_main_hero.rank + "위 - " + currnent_main_hero.hero
  );
  event.target.name = currnent_main_hero.hero;

  $("#main_hero").text(new_main_hero.rank + "위 - " + new_main_hero.hero);
  $("#main_hero").attr("name", new_main_hero.hero);

  //설명 변경
  $("#main_desc").text(new_main_hero.description);

  move_info();
}

let dummy_heros = [
  {
    rank: "",
    hero: "",
    hero_img: "",
    description: "",
  },
  {
    rank: "",
    hero: "",
    hero_img: "",
    description: "",
  },
  {
    rank: "",
    hero: "",
    hero_img: "",
    description: "",
  },
];

// 메인 결과 화면을 보여주는 API
async function save_result() {
  $.ajax({
    type: "POST",
    url: "http://172.30.1.36:5000/main/result",
    data: {},
    success: function (response) {
      dummy_heros = response["results"];

      // 1위 마블 캐릭터
      $("#main_hero_img").attr("src", dummy_heros[0].hero_img);
      $("#main_hero").attr("name", dummy_heros[0].hero);
      $("#main_hero").text("1위 -" + dummy_heros[0].hero);
      $("#main_desc").text(dummy_heros[0].description);

      // 2위 마블 캐릭터
      $('.hero_sub_box[name="2"] .hero_sub_img').attr(
        "name",
        dummy_heros[1].hero
      );
      $('.hero_sub_box[name="2"] .hero_sub_img').attr(
        "src",
        dummy_heros[1].hero_img
      );
      $('.hero_sub_box[name="2"] div').text(
        dummy_heros[1].rank + "위 - " + dummy_heros[1].hero
      );

      // 3위 마블 캐릭터
      $('.hero_sub_box[name="3"] .hero_sub_img').attr(
        "name",
        dummy_heros[2].hero
      );
      $('.hero_sub_box[name="3"] .hero_sub_img').attr(
        "src",
        dummy_heros[2].hero_img
      );
      $('.hero_sub_box[name="3"] div').text(
        dummy_heros[2].rank + "위 - " + dummy_heros[2].hero
      );
    },
  });
}
