let whichAd = 2;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023061515560001_Squa_20230615155625.jpg?RS=600X600";
    ad_link = "http://Ocayn.info/t7efyi9gcz";
    text_description = "해커스 감사제 이벤트를 하고 있네요. 단 돈 1천원으로 다양한 혜택을 받을 수 있습니다. 토익에 관심 있으신 분들 한 번 들어가보세요.";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Content/2023070315510001_Con_20230703180247_1.png";
   ad_link = "http://Ocayn.info/t7ej3ct6kj";
   text_description = "예뻐진의원 압구정점에서 이벤트합니다. 저도 시술 몇 번 받아받는데, 만족합니다. 혜택에 주름 보톡스 9900원, 그리고 점제거 있는데 좋네요.";
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023063017480001_Squa_20230630174838.png?RS=600X600";
   ad_link = "http://Ocayn.info/t7ejydsw8z";
   text_description = "핏펫 이벤트로, 친구초대하면 총 100만원을 준다고 합니다. 관심 있으시면 확인해보세요.";
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
