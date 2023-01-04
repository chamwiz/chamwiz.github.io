
//ssafy
//let img_url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGFrTI%2FbtrS1JTzzA0%2FWAdKrjiTYaNowKnkNR76xk%2Fimg.jpg";
//let ad_link = "http://Athog.me/t62fn171qd";
//let text_description = "국비지원교육 교육비 0원\n\n소프트웨어 개발자 쪽으로 직업을 원하시는 분들이라면 다들 듣고 싶어하는 SSAFY입니다. 관심이 있다면 멋티잇 KDT과정으로 대기업 간 썰을 한 번 확인해보세요.";

//mbti
let img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/bti.jpg?raw=true";
let ad_link = "http://kerion.info/t7dsg92pib";
let text_description = "커피 무료 경품 추첨. 결과 공유하고 받자!\n\n해커스 영스타 햌bti로 공부 성향을 알아보세요. 게임 하기 전 간단하게 테스트 ㄱㄱ?";

//스마트 싱스
//let img_url = "https://github.com/chamwiz/chamwiz.github.io/blob/main/img.png?raw=true";
//let ad_link = "http://kerion.info/t62goimhm9";
//let text_description = "삼성전자 이벤트! 갤럭시워치 5 증정. 참여자 전원에게 경품을 주고 있네요.\n\n스마트싱스 이벤트입니다. 스마트싱스 루틴을 소개하면 전원 경품을 준다고합니다. 경품에는 갤럭시워치5와 스마트톡 그리고 에코백 등이 있네요. 갤럭시워치5 증정이 제일 끌립니다. 삼성전자 이벤트이니 믿고 하셔도 됩니다. 이벤트 참여를 원하시는 분은 위 공식 링크를 확인해보세요.";

document.getElementById("img_link").href = ad_link;
document.getElementById("ad_img_p").src = img_url;
document.getElementById("link_ad").href = ad_link;
document.getElementById("link_ad").innerText = ad_link;
document.getElementById("ad_descrption").innerText = text_description;
document.getElementById("ad_descrption").style.backgroundColor = "#e0e0e0";

// 공정위 문구
let created_adpick_img = document.createElement('p');
created_adpick_img.innerHTML = "이 글은 소정의 원고료를 지급받고 작성했습니다."
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
