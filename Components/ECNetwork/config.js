'use strict'

const config = {
    api:{
        qidianBase:'http://www.qidianlife.com/Singular/index.php',
        reactBase:'http://www.rntools.co/articles',
    },
    //http://www.qidianlife.com/Singular/index.php?m=App&c=Index&a=articleIndex&uid=(null)&page=1&pagesize=6
    //http://www.qidianlife.com/Singular/index.php?a=articleIndex&uid=(null)&c=Index&m=App&page=1&pagesize=6
    map:{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        timeout:8000,
    }
}

module.exports = config

/**
 * 奇点日报 最新资讯
 * http://www.qidianlife.com/Singular/index.php?m=App&c=MisArticle&a=getMisChoiceList&uid=(null)&page=1&pagesize=10
 *
 * 奇点日报 热门文章
 * http://www.qidianlife.com/Singular/index.php?m=App&c=Article&a=getHotMainArticle&uid=(null)&page=1&pagesize=10
 *
 * 奇点日报 热门话题
 * http://www.qidianlife.com/Singular/index.php?m=App&c=Discuss&a=getHotOfficalDiscuss&uid=1&page=1&pagesize=10
 *
 * 开发者头条 post
 * https://www.w3cschool.cn/api/appapi/getCollectionForIndex
 *
 pename	recommendations
 system	ios
 version	1.8.4
 uid	0
 ccount	15
 page	1
 *
 * RN专栏
 * 最热
 *http://www.rntools.co/articles?type=hot
 *
 *
 * 最新
 * http://www.rntools.co/articles?type=new
 *
 * post 请求
 *{
	"format": "json",
	"page": 1
}

 详情 拿外部id
 http://www.rntools.co/article/5a2e149b819b0f455b2f4c18?p=app

 内涵段子
 http://lf.snssdk.com/neihan/stream/mix/v1/?tag=joke&iid=16618796657&os_version=10.0.2&os_api=18&live_sdk_version=220&channel=App%20Store&idfa=A3EAC238-7CD2-4679-AD11-74DA6A50339E&device_platform=iphone&app_name=joke_essay&vid=53735019-FE55-4E48-9820-C942DA8C0A51&openudid=8055968922fc2cf046e2a4e6e2951b3f8947dda5&device_type=iPhone%206&device_id=34900746062&ac=WIFI&screen_width=750&aid=7&version_code=6.4.1&city=%E5%B9%BF%E4%B8%9C%E7%9C%81&content_type=-102&count=30&double_col_mode=0&essence=1&latitude=22.57003700260785&longitude=113.8627492848214&message_cursor=0&min_time=1513932847&mpic=1&video_cdn_first=1
 *
 * */
