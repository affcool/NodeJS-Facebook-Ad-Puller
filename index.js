// const adsSdk = require("facebook-nodejs-business-sdk");
// const accessToken =
//     "";
// const api = adsSdk.FacebookAdsApi.init(accessToken);

// const AdAccount = adsSdk.AdAccount;
// const Campaign = adsSdk.Campaign;
// const account = new AdAccount("act_1");
// console.log(account.id);

// account
//     .createCampaign([Campaign.Fields.Id], {
//         [Campaign.Fields.name]: "Page likes campaign", // Each object contains a fields map with a list of fields supported on that object.
//         [Campaign.Fields.status]: Campaign.Status.paused,
//         [Campaign.Fields.objective]: Campaign.Objective.page_likes
//     })
//     .then(result => {})
//     .catch(error => {});

// const bizSdk = require("facebook-nodejs-business-sdk");

// const accessToken =
//     "EAAJmAmBg2CwBAD7NGb4UnXgRrVGMU8dCMjkNrbZC26LrxwdnLpQxZB3cJcfYq3jZABp7I6GkJScjXwQHZCli4EOBRpvi8OgBdk9eOh9WZBuN8OupRA1hdNczPGEOevNPNl6VDPavVR0ou1ayKicvph3zBHBGc0XCZCQLw22tCcwgAAsILjGZBzBAIMdlVm5BbUdRnGi1bTKdFSbVATonkuNM7nP3wa1mNvoBlDaNirbywZDZD";
// const accountId = "act_728737454299043";

// const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
// const AdAccount = bizSdk.AdAccount;
// const Campaign = bizSdk.Campaign;

// const account = new AdAccount(accountId);
// var ad;

// account
//     .read([AdAccount.Fields.name])
//     .then(account => {
//         return account.getCampaigns([Campaign.Fields.name], { limit: 10 });
//     })
//     .then(result => {
//         campaigns = result;
//         campaigns.forEach(campaign => console.log(campaign.name));
//     })
//     .catch(console.error);

// ("use strict");
// const bizSdk = require("facebook-nodejs-business-sdk");
// const AdAccount = bizSdk.AdAccount;
// const Campaign = bizSdk.Campaign;

// const access_token =
//     "EAAJmAmBg2CwBAD7NGb4UnXgRrVGMU8dCMjkNrbZC26LrxwdnLpQxZB3cJcfYq3jZABp7I6GkJScjXwQHZCli4EOBRpvi8OgBdk9eOh9WZBuN8OupRA1hdNczPGEOevNPNl6VDPavVR0ou1ayKicvph3zBHBGc0XCZCQLw22tCcwgAAsILjGZBzBAIMdlVm5BbUdRnGi1bTKdFSbVATonkuNM7nP3wa1mNvoBlDaNirbywZDZD";
// const app_secret = "7e6dfdb6a3471c3f11b6bde44c9abb8a";
// const app_id = "675110346348588";
// const id = "act_728737454299043";
// const api = bizSdk.FacebookAdsApi.init(access_token);
// const showDebugingInfo = true; // Setting this to true shows more debugging info.
// if (showDebugingInfo) {
//     api.setDebug(true);
// }

// const logApiCallResult = (apiCallName, data) => {
//     console.log(apiCallName);
//     if (showDebugingInfo) {
//         console.log("Data:" + JSON.stringify(data));
//     }
// };

// let fields, params;
// fields = [];
// params = {
//     name: "My campaign",
//     objective: "LINK_CLICKS",
//     status: "PAUSED"
// };
// const campaigns = new AdAccount(id).createCampaign(fields, params);
// logApiCallResult("campaigns api call complete.", campaigns);

// const adsSdk = require("facebook-nodejs-business-sdk");
// const accessToken =
//     "EAAJmAmBg2CwBADaV9lNKhqLFYFIcPZCLKemP98JMm0kjJYQRSiaXdU7RvzP9ZBeZAJeZBZBc0NWic0hBeZBAY4LYkQZB1tyEAzEcxRoXde2sy89iXEPv6x6HGUEx9Ptdp1Yddv9g4TMlaNL4sxxN6R0X92UDIkvmJ4Rvpw4vReXY4JZBC052ihOc2q4ZA2qJZClINwJ4gj0S0Hs6GdTeqr46rtfuO8ZAqcULu0w2l5ajmI9LAZDZD";
// const api = adsSdk.FacebookAdsApi.init(accessToken);
// const AdAccount = adsSdk.AdAccount;
// const AdCreative = adsSdk.AdCreative;
// const Campaign = adsSdk.Campaign;
// const account = new AdAccount("act_728737454299043");
// // account.getAds([Ads.Fields.name], { limit: 2 }).then(campaigns => {
// //     console.log(campaigns);
// // });
// account.getAds([AdCreative.Fields.instagram_permalink_url]).then(result => {
//     console.log(result);
// });

("use strict");

const test = async () => {
    const bizSdk = require("facebook-nodejs-business-sdk");
    const AdAccount = bizSdk.AdAccount;

    const access_token =
        "EAAJmAmBg2CwBADaV9lNKhqLFYFIcPZCLKemP98JMm0kjJYQRSiaXdU7RvzP9ZBeZAJeZBZBc0NWic0hBeZBAY4LYkQZB1tyEAzEcxRoXde2sy89iXEPv6x6HGUEx9Ptdp1Yddv9g4TMlaNL4sxxN6R0X92UDIkvmJ4Rvpw4vReXY4JZBC052ihOc2q4ZA2qJZClINwJ4gj0S0Hs6GdTeqr46rtfuO8ZAqcULu0w2l5ajmI9LAZDZD";

    const id = "act_728737454299043";
    const api = bizSdk.FacebookAdsApi.init(access_token);

    let fields, params;
    fields = [
        "adcreatives{instagram_permalink_url, effective_object_story_id}"
    ];
    params = {};
    const ads = await new AdAccount(id).getAds(fields, params);

    console.log(ads[0]._data.adcreatives.data[0].instagram_permalink_url);
    console.log(ads[0]._data.adcreatives.data[0].effective_object_story_id);
};

test();
