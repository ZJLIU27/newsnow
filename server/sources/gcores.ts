import * as cheerio from "cheerio"
import type { NewsItem } from "@shared/types"
import { defineSource } from "rss-bridge"
import { myFetch } from "#/utils/fetch"

export default defineSource(async () => {
  const response: any = await myFetch("https://www.gcores.com/news")
  const $ = cheerio.load(response)
  const news: NewsItem[] = []
  
  // 机核新闻列表在带有 news-list 类的容器中
  $("div.news-list article").each((_, el) => {
    const $el = $(el)
    const $a = $el.find("a.news-item")
    const url = $a.attr("href")
    const title = $el.find("h3").text().trim()
    const timeStr = $el.find("time").attr("datetime")
    
    if (url && title && timeStr) {
      // 机核的URL是相对路径，需要添加域名
      const fullUrl = `https://www.gcores.com${url}`
      
      news.push({
        url: fullUrl,
        title,
        id: url,
        pubDate: new Date(timeStr).valueOf(),
      })
    }
  })

  // 按发布时间降序排序并限制返回30条
  return news
    .sort((a, b) => b.pubDate! - a.pubDate!)
    .slice(0, 30)
})