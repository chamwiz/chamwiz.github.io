let whichAd = 3;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
//ssafy
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/saffy.jpg?raw=true";
    ad_link = "http://Ocayn.info/t7dxohcx5v";
    text_description = "SW 개발자 취업 개꿀팁~\n\n취준생들에게 인기가 많은 SSAFY입니다. 국비지원교육으로 교육비 0원입니다. 바로 확인하세요!";
} else if(whichAd == 2){
//멀티잇
    img_url = "https://raw.githubusercontent.com/chamwiz/chamwiz.github.io/main/mutit.jpg";
    ad_link = "http://Ocayn.info/t7dxoh8n4z";
    text_description = "교육비 0원\n국비지원교육으로 비전공자 -> 개발자 취업하자!";
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
