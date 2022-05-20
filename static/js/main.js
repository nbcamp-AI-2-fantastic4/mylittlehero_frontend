function upload_user_img() {
  $("#select_view").css("display", "none");
  $("#result_view").css("display", "block");
}

function restart_upload() {
  $("#select_view").css("display", "block");
  $("#result_view").css("display", "none");
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
  $("#main_hero_img").attr("src", new_main_hero.img);
  event.target.src = currnent_main_hero.img;

  // 순위, 이름 변경
  $(`.hero_sub_box[name="${position}"] div`).text(
    currnent_main_hero.rank + "위 - " + currnent_main_hero.hero
  );
  event.target.name = currnent_main_hero.hero;

  $("#main_hero").text(new_main_hero.rank + "위 - " + new_main_hero.hero);
  $("#main_hero").attr("name", new_main_hero.hero);

  //설명 변경
  $("#main_desc").text(new_main_hero.description);
}

const dummy_heros = [
  {
    rank: "1",
    hero: "그루트",
    img: "../static/images/hero/그루트.png",
    description:
      "마블 코믹스에 등장하는 캐릭터로, 첫 등장은 Tales to Astonish #13으로 60년대에 잭 커비, 스탠 리와 딕 에이어가 만들었다. 이름의 유래는 나무그루터기 네덜란드어로 '크다'는 뜻의 groot(흐로트). 종족은 '플로라 콜로수스'로, 지능이 있고 우주에서 온 나무 같이 생긴 생명체이다. 원래는 실험을 위해 인간을 납치하러 지구를 침략하러 온 외계인이었다. 그러다 21세기 들어서 고귀하고 영웅적인 캐릭터로 변하였으며, 울트론이 크리 제국을 지배하면서 일어난 어나일레이션: 컨퀘스트를 거치면서 가디언즈 오브 더 갤럭시의 멤버가 되었다. 그 중 로켓 라쿤과 절친이다. 말버릇은 '나는 그루트다'. 예전에는 평범하게 말을 잘 했지만, 언제부턴가 '나는 그루트다'라는 말만 한다. 동료들이 자신을 칭찬해줘서 고마워할 때도 '나는 그루트다', 적과 싸울 때도 '나는 그루트다'. 그런데 속으로는 엄청 복잡한 생각을 하고 있는 것 같다. 가디언즈 오브 더 갤럭시 v3 #14를 보면 웃음소리는 낼 줄 아는 것 같지만, 노래를 부를 때도 '나는 그루트다'라는 말밖에 못한다. '나는 그루트, 그루트, 그루트다' 하는 식으로. 이런 그루트와 대화할 수 있는 존재는 인휴먼스의 막시무스나 진 그레이 같은 텔레파시 능력자밖에 없다.[1][2] 그러나 영화 가디언즈 오브 갤럭시에서는 로켓 라쿤, 인피니티 워의 토르도 그루트의 말을 알아듣는다. MCU에서는 그루트의 언어가 아예 하나의 과목이 있을 정도란다. groot체 참조. 나무를 식량처럼 흡수해 힘을 강화시키거나 몸을 재생할 수 있는 능력이 있다. 불에도 내성을 지니고 있으며, 몸이 산산조각 나더라도 나뭇가지 하나만 있으면 물을 뿌려 다시 부활시킬 수 있다.",
  },
  {
    rank: "2",
    hero: "토르",
    img: "../static/images/hero/토르.png",
    description:
      "헐크와 정면 대결을 펼칠 수 있는 몇 안 되는 육체 능력을 가졌다. 어벤져스에서도 그와 대적할 수 있는 히어로는 사실상 헐크 정도. 특히 헐크와 밤낯을 오가며 . 힘 겨루기를 했었던 것으로 유명하다.[3] 묠니르 없이도 근력으로 행성급의 무게를 들어올리거나 끌고 다닐 수 있다. 토르 #388에선 행성 전체를 흔드는 완력으로 더 높은 레벨의 셀레스티얼 엑시타르의 머리에 구멍을 냈으며 셀레스티얼들 과의 전쟁에서 호스트를 단독으로 죽인적 있는 우주적 존재인 널과의 승부에서 자신의 지위에대한 책임감을 가지고 승리할뻔하기도 하였다. 또한 행성을 들 완력의 길가메시, 헤라클레스와 정면 대결을 펼쳐서도 승리하기까지 하였다",
  },
  {
    rank: "3",
    hero: "헐크",
    img: "../static/images/hero/헐크.png",
    description:
      "감마폭탄을 제작하던 브루스 배너 박사가 감마폭탄 제작 과정의 폭발 사고로 인해 감마선에 노출되어 그 영향으로 분노하면[6] 괴력의 녹색 거인으로 변신하는 능력을 지니게 되어 이 변신한 모습은 '헐크' 라고 불리게 되었다.[7] 어벤저스가 창설되는 계기이자 창립 멤버이기도 하다. 하지만 입장상 얼마 못 가서 탈퇴하고 만다. 모티브는 당연하지만 《지킬 박사와 하이드》의 주인공인 '헨리 지킬'과 그의 또다른 인격인 '에드워드 하이드'. 지킬&하이드를 모티브로 한 캐릭터 중에서는 가장 유명한 캐릭터다. 또한 스탠 리가 밝힌 바에 따르면 프랑켄슈타인도 헐크의 모티브라고 한다. hulk 라는 영어 단어 자체는 낡고 큰 폐선이라는 뜻을 가지나 또 주체할 수 없을 정도로 거대한 사람이라는 의미도 있다. 중국어에서는 浩克(Hào kè)라고 음차하며 綠巨人(녹색 거인)이라고도 불린다. 영화판으로는 후자 쪽으로 불린다.",
  },
];
