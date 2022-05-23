$(document).ready(function () {
    showResult();
});

function showResult() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5000/result",
        data: {},
        success: function (response) {
            let all_list = response['all_result']
            for (let i = 0; i < all_list.length; i++) {
                let user_img = all_list[i]['user_img']
                let hero_img = all_list[i]['hero_img']
                let hero = all_list[i]['hero']
                let description = all_list[i]['description'].slice(0, 100) + '...'
                let accuracy = all_list[i]['accuracy']
                let temp_html = `
                                   <div id="container">                         
                                        <div class="product-details">                            
                                            <h1>닮은꼴</h1>                            
                                            <img src="${user_img}"
                                                 class="information" id="user_img">                          
                                        </div>
                                        <!--마블 이미지 넣는 곳-->
                                        <div class="product-image" id="marble_img">
                                            <img src="${hero_img}"
                                                 alt="">
                                            <div class="info" id="marble_info">
                                               <h2> Description</h2>
                                                <ul>
                                                    <li><strong >Name :</strong >  ${hero}</li>
                                                    <li><strong >Description :</strong >${description}</li>
                                                    <li><strong >Accuracy :</strong >${accuracy}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`
                console.log(hero, accuracy)
                $('#result-box').append(temp_html)
            }
        }
    })
}
