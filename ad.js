let whichAd = 2;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/img1.png?raw=true";
    ad_link = "http://Ocayn.info/t7ebvge55w";
    text_description = "한미면역다이어트를 아시나요? 여름에 가장 중요한 건 몸매! 다이어트는 필수죠. 관심 있으신 분은 들어가보세요.";
} else if(whichAd == 2){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/img2.png?raw=true";
    ad_link = "http://Ocayn.info/t7ebqc9lb4";
    text_description = "배달의민족에서 캠페인을 합니다. 다양한 경품이 많으니 한 번 살펴보세요. 이번 캠페인의 주제는 위생이네요. 다양한 외식업계 종사자들도 많이 참가하니 관심이 있다면 들어가보세요.";
} else if(whichAd == 3){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/img3.jpg?raw=true";
    ad_link = "http://Ocayn.info/t7eb11dg7n";
    text_description = "출석체크만 해도 1000원!! 메타팝콘은 광고를 보고 돈 버는 플랫폼입니다. 새로 나와서 하는 이벤트이니 관심 있으면 한 번 살펴보세요.";
} else if(whichAd == 4){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/img4.jpg?raw=true";
    ad_link = "http://Ocayn.info/t7efcymckz";
    text_description = "스마트 싱스에서 이벤트를 또 하네요. 스마트 싱스는 삼성에서 만든 것인데, 이번 이벤트에 당첨되면 에어모니터 플러스를 준다고 하네요.";
} else if(whichAd == 5){
    img_url = "https://img.tenping.kr/Content/Upload/Images/2023060518360001_Squa_20230605183633.png?RS=600X600";
    ad_link = "http://Ocayn.info/t7efjl9qz3";
    text_description = "스타벅스 500명 추첨 이벤트 합니다. 응모해서 아메리카노 기프티콘 받아가세요. DB손해보험에서 하는 이벤트입니다.";
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
