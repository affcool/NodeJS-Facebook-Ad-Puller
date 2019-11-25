const bizSdk = require("facebook-nodejs-business-sdk");
const AdAccount = bizSdk.AdAccount;
const access_token =
    "EAAJmAmBg2CwBAKxbgI43UrIIIAubmEvd43EAVE964mYuycgvdcO8b7rs5e3GbMdpcTTLsq2oHMAwOA6YmWxj5xWadAZBWljfjkVrsqVsSuhoxCiDjhcrRqU7HjqZC6RciZBZBzxC18KXno26mcZCwqZCLN1sFsGuoWi6pqCvjM6BTfKrc3ZCbmBcfJJvw46RvlFdhZAVaPqUDUZAKZBStdh3KDpPQEwLDPLbKVrzDrF7WkgAZDZD";
const id = "act_728737454299043";
const api = bizSdk.FacebookAdsApi.init(access_token);

const linkPuller = async () => {
    let fields = [
        "adcreatives{instagram_permalink_url, effective_object_story_id}"
    ];

    const ads = await new AdAccount(id).getAds(fields);

    const lol = ads;
    insta = [];
    fb = [];
    ads.forEach(
        lol =>
            insta.push(lol._data.adcreatives.data[0].instagram_permalink_url) &&
            fb.push(lol._data.adcreatives.data[0].effective_object_story_id)
    );
    console.log(insta);
    console.log(fb);
    facebookLink(fb);
};

linkPuller();

const facebookLink = fbArray => {
    fbArray.forEach(storyId => {
        const first = storyId.split("_")[0];
        const second = storyId.split("_")[1];
        const fbLink = `https://www.facebook.com/${first}/posts/${second}`;
        console.log(fbLink);
    });
};
