let whichAd = 3;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 4){
//mbti
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/bti.jpg?raw=true";
    ad_link = "http://kerion.info/t7dsg92pib";
    text_description = "커피 무료 경품 추첨. 결과 공유하고 받자!\n\n해커스 영스타 햌bti로 공부 성향을 알아보세요. 게임 하기 전 간단하게 테스트 ㄱㄱ?";
} else if(whichAd == 2){
//지프텔
    img_url = "https://raw.githubusercontent.com/chamwiz/chamwiz.github.io/main/giptal.jpg";
    ad_link = "http://kerion.info/t7dsmg0d0z";
    text_description = "당신의 지프텔 실력은? 무료 테스트.\n\n해커스 지프텔 인강 24시간 무료 수강권 + 할인 쿠폰 제공. 여러분들의 지프텔 실력을 테스트해보세요. 몇점이 나오나요?";
} else if(whichAd == 3){
//댕냥룸
img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/clean.jpg?raw=true";
ad_link = "http://kerion.info/t62fq98z3n";
text_description = "청소매니아에서 무료 견적 받아보세요\n\n집, 회사, 공간 청소 하기 힘드시죠? 청소를 맡겨보세요. 국내 청소 최대 플랫폼인 최소매니아를 소개합니다.";
} else if(whichAd == 4){
//토플
img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/tople.jpg?raw=true";
ad_link = "http://kerion.info/t7dtjnwaj8";
text_description = "토플 무료 테스트\n\n해커스에서 토플 레벨테스트를 받을 수 있습니다. 5분 안으로 간단하게 테스트 볼 수 있으니 궁금하신 분들은 들어가서 테스트 ㄱㄱ";
}

document.getElementById("img_link").href = ad_link;
document.getElementById("ad_img_p").src = img_url;
document.getElementById("ad_img_p").style.width = "400px";
document.getElementById("ad_img_p").style.height = "400px";
document.getElementById("link_ad").href = ad_link;
document.getElementById("link_ad").innerText = ad_link;
document.getElementById("ad_descrption").innerText = text_description;
document.getElementById("ad_descrption").style.backgroundColor = "#e0e0e0";

// 공정위 문구
let created_adpick_img = document.createElement('p');
created_adpick_img.innerHTML = "이 글은 소정의 원고료를 지급받고 작성했습니다."
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
