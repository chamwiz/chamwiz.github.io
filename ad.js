let whichAd = 1;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    // 배민
    img_url = "https://img.tenping.kr/Content/Upload/Content/2023070315510001_Con_20230823154026_3.png";
    ad_link = "http://Ocayn.info/t7ej3ct6kj";
    text_description = "예뻐진의원 압구정점에서 물광 피부 만드세요!";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023102310580001_Squa_20231023105818.jpg";
   ad_link = "http://Ocayn.info/t7eynoqh5n";
   text_description = "밤에 잠이 잘 안오나요? 불면증 극복 방법 알려드립니다!";
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023110316080001_Squa_20231103160853.jpg?RS=600X600";
   ad_link = "http://Ocayn.info/t7e2di2xry";
   text_description = "수험생 여러분 고생 많았습니다. 예비 24학번 수험생 여러분을 위한 시력교정 혜택!";
} else if(whichAd == 4) {
    img_url = "";
    ad_link = "https://igamecafe.com/";
    text_description = "새로운 블로그로 이동했습니다!";
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
