export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 dark:bg-black dark:text-white p-8">
      <header className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">關於我們</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          我們是香港領先的STEAM教育創新公司，致力於通過科學、技術、工程、藝術和數學的整合教育，培養下一代的創新思維者和問題解決者。
        </p>
      </header>
      
      {/* Breadcrumb Navigation */}
      <nav className="w-full max-w-4xl mx-auto py-2" aria-label="麵包屑導航">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">首頁</a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 dark:text-white" aria-current="page">關於我們</li>
        </ol>
      </nav>
      
      <main className="w-full max-w-4xl mx-auto flex flex-col gap-8">
        {/* Mission Section with Visual */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">我們的使命</h2>
              <p className="text-lg leading-relaxed">
                在快速發展的數位時代，我們相信STEAM教育是培養未來領袖的關鍵。我們的使命是為香港的教育機構、企業和個人提供創新的STEAM解決方案，幫助他們在科學、技術、工程、藝術和數學領域取得卓越成就。
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <p className="text-lg font-semibold">培養未來領袖</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision and Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">我們的願景</h3>
            <p className="text-gray-700 dark:text-gray-300">
              成為香港STEAM教育的領導者，推動教育創新，培養具有全球競爭力的未來人才。
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">我們的價值觀</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                創新與卓越
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                合作與共贏
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                持續學習
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                社會責任
              </li>
            </ul>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">我們的團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                專
              </div>
              <h3 className="text-lg font-semibold mb-2">專業團隊</h3>
              <p className="text-gray-600 dark:text-gray-400">
                擁有豐富STEAM教育經驗的專家團隊，提供專業的諮詢和培訓服務。
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                創
              </div>
              <h3 className="text-lg font-semibold mb-2">創新方法</h3>
              <p className="text-gray-600 dark:text-gray-400">
                採用最新的教育技術和創新教學方法，確保學習效果最大化。
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                客
              </div>
              <h3 className="text-lg font-semibold mb-2">客製化服務</h3>
              <p className="text-gray-600 dark:text-gray-400">
                根據客戶需求提供量身定制的STEAM解決方案和課程設計。
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">公司發展歷程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2019
              </div>
              <h3 className="text-lg font-semibold mb-2">公司成立</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">在香港成立STEAM教育公司</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2020
              </div>
              <h3 className="text-lg font-semibold mb-2">業務擴展</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">與20所學校建立合作關係</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2022
              </div>
              <h3 className="text-lg font-semibold mb-2">技術創新</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">推出數位化STEAM平台</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2024
              </div>
              <h3 className="text-lg font-semibold mb-2">行業領先</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">成為香港STEAM教育領導者</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 