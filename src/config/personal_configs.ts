export const personalInfo = {
    name: "name",
    avatar: "/images/avatar.jpg",
    educations: ["國立臺灣師範大學(2014.9~2018.6)", "資策會前端工程師就業養成班(2022.03~2022.08)"],
    projects: {
        experiences: [
            "預算填寫系統",
            "EE工程師挑料系統",
            "工廠排程系統",
            "資產盤點App",
            "咖啡電商網站",
            "OverWatch官網切版練習",
            "ASUS官網切版練習",
        ],
        items: [
            {
                id: 1,
                image: "/images/vue_cart.png",
                alt: "vue cart",
                link: "https://github.com/iona0511/coffee_project",
                title: "電商購物車",
                content: "以 Vue、php 搭配 MySQL 建立資料表及後臺網站。",
                tags: ["Vue", "php", "MySQL"],
            },
            {
                id: 2,
                image: "/images/scroll_animatiom.png",
                alt: "scroll animation",
                link: "https://hunter850.github.io/scroll_animation/",
                title: "捲動進場動畫",
                content: "偵測卷軸捲動判斷動畫進場，參考 aos 的 data sets 用法，並嘗試練習 proxy。",
                tags: ["JavaScript", "Bootstrap"],
            },
            {
                id: 3,
                image: "/images/asus_slicing_practice.png",
                alt: "ASUS slicing",
                link: "https://hunter850.github.io/slicing_practice/",
                title: "ASUS官網切版練習",
                content: "以 HTML 及 CSS，練習 flex 等排版技巧。",
                tags: ["HTML", "CSS"],
            },
            {
                id: 4,
                image: "/images/0+b_frontpage.png",
                alt: "0+b coffee",
                link: "https://project0plusb.netlify.app/",
                title: "0+b咖啡電商網站",
                content:
                    "8人合作以 React 撰寫電商網站，負責購物車及共用元件的開發，並以 Express 自己開 api 與後端對接。",
                tags: ["React", "Node", "MySQL"],
            },
            {
                id: 5,
                image: "/images/resume.png",
                alt: "Kevin's resume",
                link: "https://hunter850.github.io/resume/",
                title: "個人簡歷頁(舊版)",
                content: "以 React 搭配 SCSS ，製作個人簡歷網站。",
                tags: ["React", "SCSS"],
            },
            {
                id: 6,
                image: "/images/ow_slicing_practice.png",
                alt: "overwatch slicing",
                link: "https://hunter850.github.io/slicing_practice_RWD/",
                title: "鬥陣特攻官網切版練習",
                content: "以 HTML、CSS 及 JavaScript，切出具有 RWD 且有互動效果的網頁。",
                tags: ["HTML", "CSS", "JavaScript"],
            },
            {
                id: 7,
                image: "/images/holo_dashboard.jpg",
                alt: "Holo Dashboard",
                link: "https://holo-board.hlkw.me/",
                title: "Holo Dashboard",
                content: "以 Nextjs 搭配 Tailwind 開發，並以 Express 搭配 Cheerio 爬取 Youtube 及 Hololive 官網資料，將圖片存於aws S3。",
                tags: ["Nextjs", "Tailwind CSS", "Express", "Cheerio"],
            },
            {
                id: 8,
                image: "/images/open_graph.jpg",
                alt: "Kevin | blog",
                link: "https://hlkw.me/zh-TW",
                title: "個人簡歷頁",
                content: "以 Nextjs 搭配 Tailwind CC 翻新簡歷及整理作品集",
                tags: ["Nextjs", "Tailwind CSS", "shadcn"],
            },
        ],
    },
    skills: [
        {
            id: 1,
            img: "/images/html_css_js.png",
            imgDescription: "html css and javascript",
            title: "HTML/CSS/JavaScript",
            content: ["熟練使用 ES6 語法", "能以 HTML、CSS、JavsScript 實作 RWD 響應式網頁"],
        },
        {
            id: 2,
            img: "/images/vuejs_logo.png",
            imgDescription: "vuejs logo",
            title: "Vue.js",
            content: ["熟練使用 options API及 composition API", "能以 pinia 管理全域變數"],
        },
        {
            id: 3,
            img: "/images/react.png",
            imgDescription: "react logo",
            title: "React",
            content: [
                "有以 function hooks 團隊協作開發電商網站及內部管理系統經驗",
                "能以 redux 或 zustand 管理全域變數",
                "React Native 開發經驗",
            ],
        },
        {
            id: 4,
            img: "/images/git.png",
            imgDescription: "git and github logo",
            title: "Git/Github",
            content: ["使用 Git 進行版本控制", "使用 Github 進行團隊協作", "了解 Git flow"],
        },
        {
            id: 5,
            img: "/images/backend.png",
            imgDescription: "node, mariadb and express logo",
            title: "Backend",
            content: [
                "能以 mariadb、PostgreSQL 建立資料表並做正規化",
                "能以 Node 搭配 Express 撰寫 API 替前端與資料庫對接",
            ],
        },
        {
            id: 6,
            img: "/images/sc_tw_mui.png",
            imgDescription: "styled-components, Tailwind CSS, Material UI logo",
            title: "UI Libraries",
            content: [
                "熟悉 MUI 元件庫",
                "能以 styled-components 或 emotion 複寫 MUI 樣式",
                "能以 Tailwind 快速套用 CSS 樣式",
            ],
        },
    ],
    experiences: [
        {
            id: 1,
            time: "2014年9月",
            title: "大學時期",
            content:
                "大學就學 4 年間參加網球社，擔任 2 年教學，指導 15人以上的新手從零基礎到參加校際盃，並獲得校際盃冠軍。\n在氣象組與同學合作持續半年每週製作每日氣溫、降雨預報共24則，準確度相當於氣象局，獲教授肯定。",
        },
        {
            id: 2,
            time: "2019年1月",
            title: "志願役生涯",
            content:
                "簽志願役，加入儀隊工作 2 年多，主要負責紀錄、整理連隊100多人的訓練及體能狀況，\n並協助每年雙十、元旦的後勤支援及國家級元首到訪時的總統府前場地佈置",
        },
        {
            id: 3,
            time: "2021年9月",
            title: "轉職準備",
            content:
                "開始嘗試以 C 入門，掌握基礎變數宣告、迴圈、位址...等，\n又以 python 作為練習 leetcode 的工具，在接觸到前端後，發現我對這種「所寫即所見」的模式相當有興趣，因此決心成為前端工程師。",
        },
        {
            id: 4,
            time: "2022年3月",
            title: "資策會培訓",
            content:
                "參加資策會前端工程師養成班，結訓前與 8 人小組合作，以 React、Node 及 MySQL 開發咖啡店商網站，\n並於課餘時間自學 Vue options / composition API。",
        },
        {
            id: 5,
            time: "2022年10月",
            title: "緯穎科技",
            content:
                "在緯穎科技服務股份有限公司擔任前端工程師，期間，負責多個關鍵專案的開發與重構工作。\n成功將舊專案導入TypeScript與Redux-Toolkit，並升級Webpack版本，顯著提升了團隊開發效率與程式碼品質。\n針對內部系統，運用AG-Grid與Socket重構了預算填寫系統，並利用Chart.js實現了資料視覺化與多人線上共編功能。\n此外，亦開發了多個React與React Native應用程式，包括工廠排程系統、採購自動下單系統及供應商模具盤點App，擁有網頁、手機、電腦桌面應用程式，三種平台的開發經驗。",
        },
    ],
    contact: {
        email: "hunter850711@gmail.com",
        github: "https://github.com/hunter850",
    },
};
