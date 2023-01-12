let whichAd = 2;

let img_url = "";
let ad_link = "";
let text_description = "";

if(whichAd == 1){
//mbti
    img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/bti.jpg?raw=true";
    ad_link = "http://kerion.info/t7dsg92pib";
    text_description = "커피 무료 경품 추첨. 결과 공유하고 받자!\n\n해커스 영스타 햌bti로 공부 성향을 알아보세요. 게임 하기 전 간단하게 테스트 ㄱㄱ?";
} else if(whichAd == 2){
//지프텔
    img_url = "https://raw.githubusercontent.com/chamwiz/chamwiz.github.io/main/giptal.jpg";
    ad_link = "http://kerion.info/t7dsmg0d0z";
    text_description = "당신의 지프텔 실력은? 무료 테스트.\n\n해커스 지프텔 인강 24시간 무료 수강권 + 할인 쿠폰 제공. 여러분들의 지프텔 실력을 테스트해보세요. 몇점이 나오나요?";
} else if(whichAd == 3){
//댕냥룸
img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/cat.jpg?raw=true";
ad_link = "http://kerion.info/t7dsnx31gz";
text_description = "댕냥이 좋아하시는 분 주목!!!\n\n댕냥룸 콘테스트 참여하고 이벤트 경품 받으세요~ 비글지에서 가상 펫을 만들고 소중히 키우고 다른 사람들과 이야기를 나눠봐요. 여친, 이 생길지도?";
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
