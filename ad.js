let whichAd = 1;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/lanton.jpg?raw=true";
    ad_link = "http://Ocayn.info/t7d59hoj2r";
    text_description = "라비고 충전식 감성 캠핑랜턴을 소개합니다!\n\n요즘 날씨도 좋고, 마스크도 풀리면서 캠핑 많이 가시죠? 은은한 불빛으로 감성을 올려주는 랜턴 한 번 보고 가세요.";
} else if(whichAd == 2){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/clean.jpg?raw=true";
    ad_link = "http://kerion.info/t62fq98z3n";
    text_description = "청소매니아에서 무료 견적 받아보세요\n\n집, 회사, 공간 청소 하기 힘드시죠? 청소를 맡겨보세요. 국내 청소 최대 플랫폼인 최소매니아를 소개합니다.";
} else if(whichAd == 3){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/things.jpg?raw=true";
    ad_link = "http://m.site.naver.com/16lml";
    text_description = "삼성에서 하는 스마트싱스 이벤트!\n\n일상생활 주변에서 스마트싱스 물건을 찾아보세요. 이벤트를 참여하고 경품까지!";
} else if(whichAd == 4){

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
created_adpick_img.innerHTML = "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
