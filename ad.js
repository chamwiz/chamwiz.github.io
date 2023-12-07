let whichAd = 4;


let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    // 배민
    img_url = "https://img.tenping.kr/Content/Upload/Content/2023112915220001_Con_20231129154609_4.jpg";
    ad_link = "http://Ocayn.info/t7e3kfdps0";
    text_description = " 네이버 페이 받아가세요. LG 유플러스 11월 출석 체크";
} else if(whichAd == 2){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023112911000001_Squa_20231129110058.png?RS=600X600";
   ad_link = "http://Ocayn.info/t7e3klsze9";
   text_description = "갤럭시 워치6 44mm 스마트싱스 이벤트! 우리집 뚱냥이를 부탁해!;
} else if(whichAd == 3){
   img_url = "https://img.tenping.kr/Content/Upload/Images/2023112913540001_Squa_20231130121721.png?RS=600X600";
   ad_link = "http://Ocayn.info/t7e6t1v16r";
   text_description = "DB 손해 보험 스타벅스 아메리카노 800개 이벤트";
} else if(whichAd == 4) {
    img_url = "";
    ad_link = "https://m.blog.naver.com/chamwiz/223286164442?referrerCode=1";
    text_description = "새로운 블로그로 이동했습니다!";
} else if(whichAd == 5){
    
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
created_adpick_img.innerHTML = "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
