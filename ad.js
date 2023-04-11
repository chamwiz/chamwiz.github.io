let whichAd = 0;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/lanton.jpg?raw=true";
    ad_link = "http://Ocayn.info/t7d59hoj2r";
    text_description = "라비고 충전식 감성 캠핑랜턴을 소개합니다!\n\n요즘 날씨도 좋고, 마스크도 풀리면서 캠핑 많이 가시죠? 은은한 불빛으로 감성을 올려주는 랜턴 한 번 보고 가세요.";
} else if(whichAd == 2){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/sleep.jpg?raw=true";
    ad_link = "";
    text_description = "불면증 있으세요?\n\n갱년기 불면증 가만히 두면 안됩니다. 정말 도움이 되는 칼럼이 있어서 가져왔습니다. 관심이 있다면 한 번 읽어보시길 바랍니다.";
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
document.getElementById("ad_img_p").style.display = "none";
document.getElementById("link_ad").href = ad_link;
document.getElementById("link_ad").innerText = ad_link;
document.getElementById("ad_descrption").innerText = text_description;
document.getElementById("ad_descrption").style.backgroundColor = "#e0e0e0";

// 공정위 문구
let created_adpick_img = document.createElement('p');
created_adpick_img.innerHTML = "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
