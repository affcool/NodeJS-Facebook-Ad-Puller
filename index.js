const bizSdk = require("facebook-nodejs-business-sdk");
const AdAccount = bizSdk.AdAccount;
const access_token =
    "EAAJmAmBg2CwBAOtExojqhhjaonNXdfffkZChgRKEExna0VV9RlHJXqxh0GBUjuaslrGnujHQtAKWCNMK3d7qC5JB4LLW2gOIOopv2NVD3Fy8HRg6lqnmBYonfiRGXL7uUcdZBf7ZCkJZB2kzHl27wIZCTsHv2r6ALpRGvkBdZBpFct0uM9vd89MBVmewn87O1W1XCwBw0PZBCD2vdz0FYY3ycQzRhBoFjblopST5zcq6AZDZD";
const id = "act_728737454299043";
const api = bizSdk.FacebookAdsApi.init(access_token);

const linkPuller = async () => {
    insta = [];
    fb = [];

    let fields = [
        "adcreatives{instagram_permalink_url, effective_object_story_id}"
    ];

    const ads = await new AdAccount(id).getAds(fields);

    ads.forEach(
        ad =>
            insta.push(ad._data.adcreatives.data[0].instagram_permalink_url) &&
            fb.push(ad._data.adcreatives.data[0].effective_object_story_id)
    );
    facebookLinkFormatter(fb);
};

const facebookLinkFormatter = fbArray => {
    fbArray.forEach(storyId => {
        const first = storyId.split("_")[0];
        const second = storyId.split("_")[1];
        const fbLink = `https://www.facebook.com/${first}/posts/${second}`;
    });
};

const findAllCampaigns = async () => {
    campaignArray = [];
    let fields, params;
    fields = ["name"];
    params = {
        effective_status: ["ACTIVE", "PAUSED"]
    };
    const campaigns = await new AdAccount(id).getCampaigns(fields, params);
    campaigns.forEach(cam => campaignArray.push(cam._data.name));
    console.log(campaignArray);
};
findAllCampaigns();
linkPuller();
