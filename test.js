let whichAd;

let tenpingAPIUrl = "https://tenping.kr/adbox/statecheck?MemberID=FI%2bkPYul4uWJYLn27ElrsdujD4nMsvU7AXSsM%2be0jEEGqY499aXXFrcAIHZp%2bZqM&ContentID=2022121509490001";

fetch(tenpingAPIUrl)
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        let adRemain = data.IsLive;
        if(adRemain == 1) {
            whichAd = 1;
        }
        else {
            whichAd = 2;
        }
        console.log(whichAd)
    })
    .catch(function (err) {

    });