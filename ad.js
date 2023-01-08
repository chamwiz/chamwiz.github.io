let ad = 2

if(ad == 1){
//mbti
let img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/bti.jpg?raw=true";
let ad_link = "http://kerion.info/t7dsg92pib";
let text_description = "커피 무료 경품 추첨. 결과 공유하고 받자!\n\n해커스 영스타 햌bti로 공부 성향을 알아보세요. 게임 하기 전 간단하게 테스트 ㄱㄱ?";
} else if(ad == 2) {
//지프텔
let img_url = "https://raw.githubusercontent.com/chamwiz/chamwiz.github.io/main/giptal.jpg";
let ad_link = "http://kerion.info/t7dsmg0d0z";
let text_description = "당신의 지프텔 실력은? 무료 테스트.\n\n해커스 지프텔 인강 24시간 무료 수강권 + 할인 쿠폰 제공";
}
document.getElementById("img_link").href = ad_link;
document.getElementById("ad_img_p").src = img_url;
document.getElementById("ad_img_p").style.width = "400px";
document.getElementById("ad_img_p").style.height = "400px";
document.getElementById("link_ad").href = ad_link;
document.getElementById("link_ad").innerText = ad_link;
document.getElementById("ad_descrption").innerText = text_description;
document.getElementById("ad_descrption").style.backgroundColor = "#e0e0e0";

// 공정위 문구
let created_adpick_img = document.createElement('p');
created_adpick_img.innerHTML = "이 글은 소정의 원고료를 지급받고 작성했습니다."
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
