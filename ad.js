let whichAd = 1;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    // 배민
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023101210480001_Squa_20231012104832.png?RS=600X600";
    ad_link = "http://Ocayn.info/t7ex5gegkz";
    text_description = "롯데백화점몰 캉골키즈 서프라이즈딜 떴습니다!";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023081013270001_Squa_20230810132716.jpg?RS=600X600";
   ad_link = "http://Ocayn.info/t7eovh0d2e";
   text_description = "스마트싱스 이벤트입니다! 이벤트에 참가하면 텀블러나 에코백 등 받을 수 있네요! 관심 있으면 확인해보세요!";
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
