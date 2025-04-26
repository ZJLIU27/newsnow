Notepad Name: 开发总览
## 等待进行的工作列表
1. 清理不需要的资讯栏目
2. 重新命名并新增主页分栏
3. 新增需要的资讯栏目并加入对应的分栏


##待清理的资讯栏目
Linux Do
36氪
IT之家
远景论坛
抖音
百度贴吧热议
哔哩哔哩热搜
哔哩哔哩 ：热门视频
哔哩哔哩排行榜
快手
百度热搜
什么值得买



## 主页分栏规划 - 从左至右
- 更多：保持现有状态，用于展示全部可获取的栏目
- 关注：保持现有状态，用于收藏的栏目
- 游戏：用于展示游戏类的新闻
- 开发：用于展示开发类的新闻
- 实时：用于展示其他的实时资讯
这步也需要更新一下栏目的标签用于分类

## 等待新增的栏目 - 可以直接在notepad中找到关于这个栏目的具体新增方式
IndieNova
3DM
GameDev
ThisIsGame
Deconstrutor of Fun
newzoo
GameBiz

##新增栏目的参考方式@sources 文件夹内的其他栏目的操作方式

##IndieNova新增指南
IndieNova需要分成两个板块，分别是开发和资讯。
开发模块需要从以下容器中获取对应内容
<div class="article-panel col-xs-12 col-ms-6 col-sm-6 col-md-6 col-lg-4">
                <div class="article-image">
                    <a href="/indie-game-development/what-youre-getting-wrong-about-soulslikes/">
                        <img src="https://hive.indienova.com/farm/article/headpic/2025/03/head-8193XG-banner.jpg_t205">
                    </a>
                                            <div class="views-badge">
                            <i class="icon-like"></i> <span class="number-first">6</span> <i class="icon-comments-alt"></i> <span class="number-last">0</span>
                        </div>
                                    </div>
                <h4>
                    <a href="/indie-game-development/what-youre-getting-wrong-about-soulslikes/">魂like游戏的设计误区</a>
                </h4>
                <p>鉴于越来越多的开发者正在尝试开发魂 like 游戏，我认为值得讨论一下他们的创作中可能存在的误区。</p>
            </div>
需要获取的部分是
<h4>
            <a href="/indie-game-development
            what-youre-getting-wrong-about-soulslikes/">魂like游戏的设计误区</a>
        </h4>
中的标题。

资讯模块需要获取的是<div class="article-panel col-xs-12 col-ms-6 col-sm-6 col-md-6 col-lg-4">
                <div class="article-image">
                    <a href="/indie-game-news/guide-2025-0421-0427-part-4/">
                        <img src="https://hive.indienova.com/farm/article/headpic/2025/04/head-53447L-Guide-2025-0421-4.jpg_t205">
                    </a>
                                            <div class="views-badge">
                            <i class="icon-like"></i> <span class="number-first">2</span> <i class="icon-comments-alt"></i> <span class="number-last">0</span>
                        </div>
                                    </div>
                <h4>
                    <a href="/indie-game-news/guide-2025-0421-0427-part-4/">本周 Steam 值得关注的游戏 04.21 - 04.27（四）</a>
                </h4>
                <p>本周将迎来Steam的"推箱子游戏节"，一起来看看有什么新游戏发售吧！</p>
            </div>
需要获取
<a href="/indie-game-news/guide-2025-0421-0427-part-4/">本周 Steam 值得关注的游戏 04.21 - 04.27（四）</a>
                </h4>
这部分

##已完成事项记录
1. 已完成资讯栏目清理：
   - 从 sources.json 中删除了所有待清理栏目的配置
   - 从 pre-sources.ts 中删除了所有待清理栏目的定义
   - 删除了所有待清理栏目对应的源代码文件
   - 从 glob.d.ts 中删除了所有待清理栏目的导入声明
   
   清理的栏目包括：
   - Linux Do
   - 36氪
   - IT之家
   - 远景论坛
   - 抖音
   - 百度贴吧热议
   - 哔哩哔哩热搜
   - 哔哩哔哩热门视频
   - 哔哩哔哩排行榜
   - 快手
   - 百度热搜
   - 什么值得买 