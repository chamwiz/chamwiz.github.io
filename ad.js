let whichAd = 2;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    // 배민
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023101210480001_Squa_20231012104832.png?RS=600X600";
    ad_link = "http://Ocayn.info/t7ex5gegkz";
    text_description = "롯데백화점몰 캉골키즈 서프라이즈딜 떴습니다!";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023101310450001_Squa_20231013104539.jpg?RS=600X600";
   ad_link = "http://Ocayn.info/t7ex65eqx4";
   text_description = "불면증 있지 않으신가요? 불면증 치료를 위해서는 정확한 정보가 중요합니다.";
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023072617430001_Squa_20230726174307.jpg?RS=600X600";
   ad_link = "http://Ocayn.info/t7eoyttvj3";
   text_description = "초특가 판촉물 할인 이벤트. 최저가 판매하는 고고판촉물.";
} else if(whichAd == 4) {
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023092217210001_Squa_20230922172153.png?RS=600X600";
    ad_link = "http://Ocayn.info/t7euakhglv";
    text_description = "SK케미칼 이벤트! 상품으로 치킨과 아메리카노 있습니다";
} else if(whichAd == 5){
    
}

document.getElementById("img_link").href = ad_link;
document.getElementById("ad_img_p").src = img_url;
document.getElementById("ad_img_p").style.width = "400px";
document.getElementById("ad_img_p").style.height = "400px";
//document.getElementById("ad_img_p").style.display = "none";
document.getElementById("link_ad").href = ad_link;
document.getElementById("link_ad").innerText = ad_link;
document.getElementById("ad_descrption").innerText = text_description;
document.getElementById("ad_descrption").style.backgroundColor = "#e0e0e0";

// 공정위 문구
let created_adpick_img = document.createElement('p');
created_adpick_img.innerHTML = "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
