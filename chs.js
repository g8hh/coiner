/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Confirm': '确认',
    'Event Log': '事件日志',
    'Download as file': '下载存档文件',
    'Coins': '币',
    'Coin Icon': '币图标',
    'Thank you.': '感谢。',
    'SUCCESS': '成就',
    'STATS': '统计',
    'Start': '开始',
    'SETTINGS': '设置',
    'SHOP': '商店',
    'RESEARCH': '研究',
    'Machines owned': '拥有的机器',
    'Make a Backup': '进行备份',
    'Market Image': '市场图像',
    'Market Media': '市场媒体',
    'Prestige': '声望',
    'Please export before you restart.': '在重新启动之前，请导出。',
    'Prestige Mode': '声望模式',
    'Restart Game': '重启游戏',
    'Reset NOW': '现在重置',
    'Reset Game': '重置游戏',
    'YOUR MINING RIG': '您的采矿设备',
    'You crazy': '你疯了',
    'TRON': '特隆',
    'NSA Datacenter': 'NSA数据中心',
    'Online Shop': '线上商店',
    'Parents Bedroom': '父母卧室',
    'Planet Image': '行星图像',
    'FAQ': '问答',
    'CHANGELOG': '更新日志',
    'CONTACT': '联系方式',
    'Total Money Spent (this game': '总计花掉的钱（本轮游戏',
    'Total Money Made (this game': '总计赚到的钱（本轮游戏',
    'Total Money Made (before reset': '总计赚到的钱（上次重置',
    'Upgrades from shop are permanent.': '从商店升级是永久性的。',
    'Upgrades researched': '已研究升级',
    'Loading': '加载',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Q: Where is the difference between BTC/s Multiplier and BTC/s base multiplier?': '问：BTC/s乘数和BTC/s基本乘数有何区别？',
    'Q: Why are there no serverwide stats?': '问：为什么没有服务器范围的统计信息？',
    'You don\'t have to calculate on your own, the game does it for you: Go to Settings -> Prestige Mode an see, how many coins you would get.': '您不必自己进行计算，游戏会为您完成：转到“设置”->“声望模式”，看看您将获得多少枚硬币。',
    'You get them trough': '你得到它们通过',
    'You\'ll get the difference between your old and new highscore as coins.': '你将以硬币的形式获得旧高分和新高分之间的差距。',
    'Q: Can I lose the upgrades from the shop?': '问：我可以从商店中丢失升级吗？',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^([\d\.]+)$/,
    /^\* (.+)$/,
    /^\$([\d\.,]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);