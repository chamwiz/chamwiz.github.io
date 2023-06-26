let whichAd = 1;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023061515560001_Squa_20230615155625.jpg?RS=600X600";
    ad_link = "http://Ocayn.info/t7efyi9gcz";
    text_description = "해커스 감사제 이벤트를 하고 있네요. 단 돈 1천원으로 다양한 혜택을 받을 수 있습니다. 토익에 관심 있으신 분들 한 번 들어가보세요.";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023061612210001_Squa_20230616122103.png?RS=600X600";
   ad_link = "http://Ocayn.info/t7ef3lh8mr";
   text_description = "요즘은 배달 전문 식당이 있을 정도로 배달이 트렌드잖아요? 현재 배민외식업광장에서 광고비 지원 이벤트를 하네요. 관심 있으신 분들 들어가보세요.";
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Content/2022112913230001_Con_20221129144411_4.JPG";
   ad_link = "http://Ocayn.info/t7dsa1ah2b";
   text_description = "꽃 선물 할 일이 있으신가요? 이 사이트를 추천합니다. 신규회원 5천원 할인하네요 화환#개업화분#개업화환#결혼화환#근조화환#꽃배달#축하화환#장례화환#꽃다발";
} else if(whichAd == 4){
    
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
created_adpick_img.innerHTML = "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
