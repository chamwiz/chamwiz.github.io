let whichAd = 1;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/img.png?raw=true";
    ad_link = "http://Ocayn.info/t7d6mmx8j8";
    text_description = "당근마켓으로도 돈을 버는 사람이 있습니다. 5000만원 비법서라고 하네요! 전자책이니 쉽게 공부할 수 있습니다.";
} else if(whichAd == 2){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/sleep.jpg?raw=true";
    ad_link = "";
    text_description = "불면증 있으세요?\n\n갱년기 불면증 가만히 두면 안됩니다. 정말 도움이 되는 칼럼이 있어서 가져왔습니다. 관심이 있다면 한 번 읽어보시길 바랍니다.";
} else if(whichAd == 3){
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/things.jpg?raw=true";
    ad_link = "https://link.coupang.com/a/ULzfl";
    text_description = "아이패드 선물 이벤트/프로모션 소개합니다! 관심 있으신 분들은 확인하세요.";
} else if(whichAd == 4){

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
