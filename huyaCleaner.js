    // ==UserScript==
    // @name         huyaCleaner 虎牙去广告|简洁模式 
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       flik
    // @match        https://www.huya.com/*
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
    // @grant        GM_addStyle
    // @grant        GM_setValue
    // @grant        GM_getValue
    // ==/UserScript==


    (function() {
        'use strict';
        // 顶部广告
        let topBannerCss =   `
        .diy-toutu,
        .J_ttVideo,
        .special-bg{
            margin: 0 auto 120px !important;
            background-image:none !important;
            height:20px !important;
        }
        `   
        // 组件广告
        let compAdCss =   `
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
            #huya-ab-fixed,
            #huya-ab{
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
        let competitionAdCss = `
        .competition_cont_center_wrap{
            display:none;
        }
        `

        GM_addStyle(topBannerCss)
        GM_addStyle(compAdCss)
        GM_addStyle(mainAdCss)
        GM_addStyle(videoBannerAdCss)
        GM_addStyle(businessGameAdCss)
        GM_addStyle(downloadAppAdCss)
        GM_addStyle(competitionAdCss)

    })();