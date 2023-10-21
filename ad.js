let whichAd = 4;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    // 배민
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023102013220001_Squa_20231020132253.png?RS=600X600";
    ad_link = "http://Ocayn.info/t7eyj66ed0";
    text_description = "스마트싱스 이벤트. 승친별딱지 시즌 3 알아보기! 갤럭시 워치 6 받아가세요.";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023101310450001_Squa_20231013104539.jpg?RS=600X600";
   ad_link = "http://Ocayn.info/t7ex65eqx4";
   text_description = "불면증 있지 않으신가요? 불면증 치료를 위해서는 정확한 정보가 중요합니다.";
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023101210510001_Squa_20231012105153.png?RS=600X600";
   ad_link = "http://Ocayn.info/t7ex98klat";
   text_description = "롯데백화점 빈폴 패밀리위크 할인 이벤트 하네요.";
} else if(whichAd == 4) {
    img_url = "https://img.tenping.kr/Content/Upload/Content/2023101318530001_Con_20231013190628_3.png";
    ad_link = "http://Ocayn.info/t7eyb1czcj";
    text_description = "#용돈벌이 #돈모으기 #집에서돈벌기 #게임으로돈벌기 #앱으로돈벌기";
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
