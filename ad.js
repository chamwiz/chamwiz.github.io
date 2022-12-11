
//데이터 사이언스
// let img_url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJSFVP%2FbtrSRQ57x42%2FBuC4Sx2WL8Tj9HNFvTugA0%2Fimg.jpg";
// let ad_link = "http://Athog.me/t62fn166vi";
// let text_description = "데이터 사이언스 입문 E-Book 무료로 받는 방법\n최근에 소프트웨어 쪽 인기가 많아지고, 특히 인공지능과 데이터 분석 쪽도 많이 발전했죠. 컴퓨터를 하시는 분들에게 도움이 될 것 같아서 가져왔습니다. 이 강의로 엑셀과 R, 파이썬,Power Bi 등 실무에 도움이 되는 것들을 배울 수 있습니다.";

//ssafy
//let img_url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGFrTI%2FbtrS1JTzzA0%2FWAdKrjiTYaNowKnkNR76xk%2Fimg.jpg";
//let ad_link = "http://Athog.me/t62fn171qd";
//let text_description = "국비지원교육 교육비 0원\n\n소프트웨어 개발자 쪽으로 직업을 원하시는 분들이라면 다들 듣고 싶어하는 SSAFY입니다. 관심이 있다면 멋티잇 KDT과정으로 대기업 간 썰을 한 번 확인해보세요.";

// 이마트 금액권
// let img_url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbcqNL5%2FbtrTckRUaNL%2F4oFC66jsBg05zVK6ZaKS6K%2Fimg.png";
// let ad_link = "http://Athog.me/t62fi04udl";
// let text_description = "이마트 금액권 받아가세요.\n\n인생내컷 스튜디오 내보험 바로알기 이벤트네요. 네 가지의 인생 이야기 확인하고 바로알기를 완료하면 이마트 금액권 3천원을 100% 받을 수 있습니다. 관심 있으신 분들은 확인해보세요.";ㅇ

// 19 PASS
let img_url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnJubI%2FbtrTmXV779C%2Ffl2kIAP4Oxz9lsrauHOTNk%2Fimg.jpg";
let ad_link = "http://Athog.me/t62fwbie75";
let text_description = "19만원에 환급까지! AMAZING 19패스\n\n수능부터 내신까지 완벽하게 2024 수능까지 무제한 수강하고, 수강료 환급까지 받아가세요! 대성마이맥 AMAZING 19PASS";

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
