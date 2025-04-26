import * as cheerio from "cheerio"
import type { NewsItem } from "@shared/types"

const dev = defineSource(async () => {
  const response: any = await myFetch("https://indienova.com/indie-game-development/")
  const $ = cheerio.load(response)
  const news: NewsItem[] = []
  
  $(".article-panel").each((_, el) => {
    const $el = $(el)
    const titleEl = $el.find("h4 a")
    const url = titleEl.attr("href")
    const title = titleEl.text().trim()
    
    if (url && title) {
      news.push({
        url: `https://indienova.com${url}`,
        title,
        id: url,
        pubDate: new Date().valueOf(), // 由于页面没有显示时间，暂时使用当前时间
      })
    }
  })

  return news
    .sort((a, b) => b.pubDate! - a.pubDate!)
    .slice(0, 30)
})

const news = defineSource(async () => {
  const response: any = await myFetch("https://indienova.com/indie-game-news/")
  const $ = cheerio.load(response)
  const news: NewsItem[] = []
  
  $(".article-panel").each((_, el) => {
    const $el = $(el)
    const titleEl = $el.find("h4 a")
    const url = titleEl.attr("href")
    const title = titleEl.text().trim()
    
    if (url && title) {
      news.push({
        url: `https://indienova.com${url}`,
        title,
        id: url,
        pubDate: new Date().valueOf(), // 由于页面没有显示时间，暂时使用当前时间
      })
    }
  })

  return news
    .sort((a, b) => b.pubDate! - a.pubDate!)
    .slice(0, 30)
})

export default defineSource({
  "indienova": news,
  "indienova-news": news,
  "indienova-dev": dev,
}) 