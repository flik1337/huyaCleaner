// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       flik
// @match        https://www.huya.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';
    // 顶部广告
    let topBannerCss =   `
    .diy-toutu ,.J_ttVideo{
        margin: 0 auto 120px !important;
        background-image:none !important;
        height:20px !important;
    }
    `   
    // 组件广告
    let CompAdCss =   `
        .diy-comps-wrap{
            display:none;
        }
    `
    // 底部广告
    let mainAdCss =   `
        .main-room{
            background-image:none !important;
        }
    `
    //视频左下方广告
    let videoBannerAdCss = `
        #huya-ab-fixed{
            display:none;
        }
    `
    // 游戏广告牌
    let businessGameAdCss = `
        .room-business-game ,.room-gg-chat{
            display:none !important;
        }
    `
    // 下载app提示
    let downloadAppAdCss = `
        #player-download-guide-tip{
            display:none;
        }
    `

    GM_addStyle(topBannerCss)
    GM_addStyle(CompAdCss)
    GM_addStyle(mainAdCss)
    GM_addStyle(videoBannerAdCss)
    GM_addStyle(businessGameAdCss)
    GM_addStyle(downloadAppAdCss)

})();