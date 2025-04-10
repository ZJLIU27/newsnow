import * as cheerio from "cheerio"
import type { NewsItem } from "@shared/types"

export default defineSource(async () => {
  const response: any = await myFetch("https://www.gcores.com/news")
  const $ = cheerio.load(response)
  const news: NewsItem[] = []
  
  // 使用 a.news 作为主选择器
  $("a.news").each((_, el) => {
    const $el = $(el)
    const url = $el.attr("href")
    const title = $el.find(".news_content h3").text().trim()
    const timeText = $el.find(".news_meta span").first().text().trim()
    
    if (url && title && timeText) {
      const pubDate = parseRelativeTime(timeText)
      
      news.push({
        url: `https://www.gcores.com${url}`,
        title,
        id: url,
        pubDate: pubDate.valueOf(),
      })
    }
  })

  // 按发布时间降序排序并限制返回30条
  return news
    .sort((a, b) => b.pubDate! - a.pubDate!)
    .slice(0, 30)
})

// 改进的时间解析函数
function parseRelativeTime(timeText: string): Date {
  const now = new Date()
  
  // 匹配"小时前"
  const hoursMatch = timeText.match(/(\d+)\s*小时前/)
  if (hoursMatch) {
    const hours = parseInt(hoursMatch[1])
    return new Date(now.getTime() - hours * 60 * 60 * 1000)
  }
  
  // 匹配"天前"
  const daysMatch = timeText.match(/(\d+)\s*天前/)
  if (daysMatch) {
    const days = parseInt(daysMatch[1])
    return new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
  }
  
  // 匹配"分钟前"
  const minutesMatch = timeText.match(/(\d+)\s*分钟前/)
  if (minutesMatch) {
    const minutes = parseInt(minutesMatch[1])
    return new Date(now.getTime() - minutes * 60 * 1000)
  }
  
  // 如果都不匹配，返回当前时间
  console.warn(`无法解析的时间格式: ${timeText}`)
  return now
}