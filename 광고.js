// 광고 넣기
let img_url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkLvkF%2FbtrSqWZcwKV%2FkuorM6xtHDNbsIBS13L5rk%2Fimg.png";
let ad_link = "https://playstore.me/639f3d9";
let text_description = "무료 키보드 나눔 이벤트. 키크론 K8 Retro 적축 무선 기계식 키보드 10명. 위 링크를 참고해주세요.";
document.getElementById("img_link").href = ad_link;
document.getElementById("ad_img_p").src = img_url;
document.getElementById("link_ad").href = ad_link;
document.getElementById("link_ad").innerText = ad_link;
document.getElementById("ad_descrption").innerText = text_description;
document.getElementById("fldzmwnth").innerText = "링크 주소 : ";

// 공정위 문구
let created_adpick_img = document.createElement('img');
created_adpick_img.setAttribute('src', "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyseD%2FbtrSnEpG5Sj%2FTDXQPpHkPgUrIJEJl9hHGk%2Fimg.png");
created_adpick_img.setAttribute('width',"100%");
created_adpick_img.style.marginTop = "400px";
let adpick_img = document.querySelector(".contents_style");
adpick_img.appendChild(created_adpick_img);
