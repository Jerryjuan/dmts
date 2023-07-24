import React from "react";


const PsychologicalTracePage = () => {
    const data={
        nodes:[
        {
                id: "互联网社交空间-社交活跃程度",
                label: "互联网社交空间-社交活跃程度",
                socialAttributes: [
                    {
                        key: "每月发推",
                        value: "7.72",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "与好友互动数",
                        value: "2.74",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "活跃程度",
                        value: "相对活跃",
                        url: "https://twitter.com/arinerron"
                    },
                ]
            },
            {
                id: "互联网娱乐空间-1",
                label: "互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "娱乐方式",
                        value: "摄影",
                    },
                    {
                        key: "来源",
                        value: "mastodon社交平台",
                        url: "https://mastodon.social/@acedrew"
                    },
                ]
            },
            {
                id: "互联网社交空间-社交匿名性",
                label: "互联网社交空间-社交匿名性",
                socialAttributes: [
                    {
                        key: "真实姓名",
                        value: "Aaron Esau",
                        url: "https://aaronesau.com/"

                    },
                    {
                        key: "推特",
                        value: "https://twitter.com/arinerron",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "匿名性",
                        value: "低",
                        url: "https://twitter.com/arinerron/status/1612206626207076352"
                    },
                    {
                        key: "",
                        value: ""
                    },
                ]
            },
            {
                id: "divyanshu-mehta.gitbook.io/researchs/",
                label: "divyanshu-mehta.gitbook.io/researchs/",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "社交账号、个人照片",
                        url: "https://twitter.com/gh0st_r1d3r_0x9"
                    },
                    {
                        key: "危险等级",
                        value: "高",
                    },
                    {
                        key: "来源",
                        value: "个人主页",
                        url: "https://divyanshu-mehta.gitbook.io/researchs/"
                    }
                ]
            },
            {
                id: "互联网社交空间-社交言论分析",
                label: "互联网社交空间-社交言论分析",
                socialAttributes: [
                    {
                        key: "社交面貌",
                        value: "乐观",
                        url: "https://twitter.com/arinerron/status/1642778873585872896"
                    },
                    {
                        key: "领域",
                        value: "计算机",
                        url: "https://twitter.com/arinerron/status/1448107828846026754"
                    },
                    {
                        key: "特点",
                        value: "守序、传统",
                        url: "https://twitter.com/arinerron/status/1626659413519134720"
                    },
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "时间管理空间-2",
                label: "时间管理空间-学习工作习惯",
                socialAttributes: [
                    {
                        key: "学习时间",
                        value: "白天",
                        url: "https://github.com/JehanKandy"
                    },
                    {
                        key: "工作时间",
                        value: "白天",
                        url: "https://github.com/JehanKandy"
                    },
                ]
            },
            {
                id: "互联网娱乐空间-2",
                label: "互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "娱乐方式",
                        value: "游戏",
                    },
                    {
                        key: "来源",
                        value: "推特",
                        url: "https://twitter.com/Adriantega12/media"
                    },
                ]
            },
            {
                id:"社会属性空间-职业",
                label:"社会属性空间-职业",
                socialAttributes:[
                    {
                        key: "职业",
                        value: "智能合约审计员和web/pwn技术顾问",
                        url: "https://aaronesau.com/"
                    },

                ]
            },
            {
                id:"性格特质空间/jaywcjlove",
                label:"性格特质空间/jaywcjlove",
                socialAttributes:[
                    {
                        id: "github.com/jaywcjlove",
                        label: "github.com/jaywcjlove",
                        socialAttributes: [
                            {
                                key: "总结",
                                value: "宜人性和外倾性较高"
                            }
                        ],
                        // 为分析节点单独设置颜色,覆盖 default 配置
                        style: {
                            fill: "#32E0C4"
                        },
                        labelCfg: {
                            style: {
                                fill: "#32E0C4"
                            }
                        }
                    },]
            },




            ]
            }
    edges:[
        {
            source: "互联网社交空间-社交活跃程度",
            target: "互联网娱乐空间-1",
        },
        {
            source: "互联网社交空间-社交匿名性",
            target: "divyanshu-mehta.gitbook.io/researchs/",
        },
        {
            source: "互联网社交空间-社交言论分析",
            target: "时间管理空间-2",
        },
        {
            source: "互联网娱乐空间-2",
            target: "社会属性空间-职业",
            source: "互联网社交空间-社交活跃程度",
            target: "社会属性空间-职业",
        },
        {
            source: "互联网社交空间-社交活跃程度",
            target: "性格特质空间/jaywcjlove",
            source: "互联网娱乐空间-2",
            target: "性格特质空间/jaywcjlove",
        }
    ]
    return (
        <ProCard
        split="horizontal"
        headerBordered
        bordered
    >
        <ProCard
            split='vertical'
        >
            <ProCard title="trace">
                <AttributeGraph data={data}></AttributeGraph>
            </ProCard>
            </ProCard>
    </ProCard>
    )
}

export default PsychologicalTracePage
