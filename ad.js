let whichAd = 4;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    // 배민
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023071110000001_Squa_20230711100043.jpg?RS=600X600";
    ad_link = "http://Ocayn.info/t7ekdf4vwk";
    text_description = "배민 이벤트 하고 있습니다. 배민외식업광장이라는 것인데 배민에 신규 입점하시면 여러가지 혜택이 있습니다. 식당 사장님들 관심 있으면 들어가서 확인해보세요.";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023061515560001_Squa_20230615155625.jpg?RS=600X600";
   ad_link = "http://Ocayn.info/t7efyi9gcz";
   text_description = "해커스 감사제 이벤트를 하네요. 단 1천원이라고 하는데, 궁금하신 분들은 들어가서 확인해보세요.";
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Content/2023071018010001_Con_20230710180900_4.png";
   ad_link = "http://Ocayn.info/t7ekgpar1f";
   text_description = "반영구 화장이라고 아시나요? 저도 피부과를 많이 가는데 이런게 있는지 몰랐네요. 압구정 예뻐진의원 반영구화장 할인 이벤트가 있어서 소개드립니다.";
} else if(whichAd == 4) {
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023072815460001_Squa_20230728154605.jpg?RS=600X600";
    ad_link = "http://Ocayn.info/t7ekgpar1f";
    text_description = "다리가 저리시나요? 하지불안증후군일 수 있습니다.";
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
