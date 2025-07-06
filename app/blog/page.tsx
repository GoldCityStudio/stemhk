export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 dark:bg-black dark:text-white p-8">
      <header className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">STEAM教育部落格</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          探索最新的STEAM教育趨勢、創新教學方法和成功案例，幫助您了解科學、技術、工程、藝術和數學教育的發展。
        </p>
      </header>
      
      {/* Breadcrumb Navigation */}
      <nav className="w-full max-w-4xl mx-auto py-2" aria-label="麵包屑導航">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">首頁</a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 dark:text-white" aria-current="page">部落格</li>
        </ol>
      </nav>
      
      <main className="w-full max-w-4xl mx-auto flex flex-col gap-12">
        {/* Featured Post */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">STEAM教育在香港的發展趨勢</h2>
            <p className="text-xl mb-6 opacity-90">
              探索香港STEAM教育的最新發展，了解如何將科學、技術、工程、藝術和數學整合到現代教育中。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition"
              >
                閱讀全文
              </a>
              <a 
                href="#" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
              >
                訂閱更新
              </a>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">文章分類</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">科學教育</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                探索科學實驗和探究式學習方法
              </p>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15</div>
              <div className="text-sm text-gray-500">篇文章</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">技術教育</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                程式設計和數位技術教學
              </p>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">12</div>
              <div className="text-sm text-gray-500">篇文章</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">工程教育</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                設計思維和工程項目實踐
              </p>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">18</div>
              <div className="text-sm text-gray-500">篇文章</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">藝術與數學</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                創意表達與數學思維結合
              </p>
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">10</div>
              <div className="text-sm text-gray-500">篇文章</div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <p className="text-lg font-semibold">STEAM教育</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  2024年1月15日
                </div>
                <h3 className="text-xl font-semibold mb-3">如何設計有效的STEAM課程</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  探討STEAM課程設計的核心原則，包括跨學科整合、動手實踐和創意思維培養。
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                  閱讀更多 →
                </a>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <p className="text-lg font-semibold">技術教育</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  2024年1月10日
                </div>
                <h3 className="text-xl font-semibold mb-3">機器人編程在STEAM教育中的應用</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  了解如何通過機器人編程培養學生的邏輯思維和問題解決能力。
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                  閱讀更多 →
                </a>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <p className="text-lg font-semibold">創新教育</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  2024年1月5日
                </div>
                <h3 className="text-xl font-semibold mb-3">3D打印技術在教育中的創新應用</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  探索3D打印技術如何改變傳統教學模式，激發學生創意和創新思維。
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                  閱讀更多 →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 p-8 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">訂閱我們的部落格</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              獲取最新的STEAM教育資訊、教學技巧和成功案例，直接發送到您的電子郵件。
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="輸入您的電子郵件"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                訂閱
              </button>
            </form>
          </div>
        </section>

        {/* Popular Keywords */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">熱門關鍵字</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'STEAM教育', '科學實驗', '程式設計', '機器人', '3D打印', '創意設計',
              '數學思維', '工程教育', '藝術教育', '創新教學', '香港教育', '數位學習',
              '動手實踐', '項目式學習', '跨學科整合', '教育科技', '未來教育', 'STEM課程'
            ].map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition cursor-pointer"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 