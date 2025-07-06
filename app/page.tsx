import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Hero Section with Background Image */}
      <section className="w-full relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Babi Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            香港領先的STEAM教育機構，通過科學、技術、工程、藝術和數學的整合教育，培養下一代的創新思維者。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition shadow-lg"
            >
              了解我們的服務
          </a>
          <a
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </section>

      <main className="w-full max-w-4xl mx-auto flex flex-col gap-12 p-8">
        {/* About Section with Image */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">關於Babi Academy</h2>
            <p className="text-lg leading-relaxed mb-6">
              我們是香港專業的STEAM教育機構，致力於為學校、企業和個人提供創新的教育解決方案。通過整合科學、技術、工程、藝術和數學，我們幫助學習者培養批判性思維、創意能力和問題解決技能。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">合作學校</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">培訓學生</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <p className="text-lg font-semibold">STEAM教育專家</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Icons */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">我們的服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">STEAM課程開發</h3>
              <p className="text-gray-600 dark:text-gray-400">
                為學校和教育機構設計創新的STEAM課程，整合科學、技術、工程、藝術和數學。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">教師專業發展</h3>
              <p className="text-gray-600 dark:text-gray-400">
                為教育工作者提供STEAM教學培訓，提升教學技能和創新能力。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">STEAM諮詢服務</h3>
              <p className="text-gray-600 dark:text-gray-400">
                為企業和機構提供STEAM教育諮詢，幫助制定教育策略。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">STEAM工作坊</h3>
              <p className="text-gray-600 dark:text-gray-400">
                舉辦各種STEAM主題工作坊，為學生和教師提供實踐學習機會。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">創新實驗室</h3>
              <p className="text-gray-600 dark:text-gray-400">
                建立現代化的STEAM實驗室，配備最新的教育技術設備。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">團隊合作培訓</h3>
              <p className="text-gray-600 dark:text-gray-400">
                培養學生的團隊合作精神和溝通能力，提升協作效率。
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Visual Elements */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">為什麼選擇我們？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                專
              </div>
              <h3 className="text-xl font-semibold mb-3">專業團隊</h3>
              <p className="text-gray-600 dark:text-gray-400">
                擁有豐富STEAM教育經驗的專家團隊，提供專業的諮詢和培訓服務。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                創
              </div>
              <h3 className="text-xl font-semibold mb-3">創新方法</h3>
              <p className="text-gray-600 dark:text-gray-400">
                採用最新的教育技術和創新教學方法，確保學習效果最大化。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                客
              </div>
              <h3 className="text-xl font-semibold mb-3">客製化服務</h3>
              <p className="text-gray-600 dark:text-gray-400">
                根據客戶需求提供量身定制的STEAM解決方案和課程設計。
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section with Visual Charts */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">我們的成就</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                50+
              </div>
              <h3 className="text-lg font-semibold mb-2">合作學校</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">遍佈香港各區</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1000+
              </div>
              <h3 className="text-lg font-semibold mb-2">培訓學生</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">成功案例</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                95%
              </div>
              <h3 className="text-lg font-semibold mb-2">滿意度</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">客戶評價</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                5年+
              </div>
              <h3 className="text-lg font-semibold mb-2">專業經驗</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">行業領先</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">準備開始您的STEAM之旅？</h2>
          <p className="text-xl mb-6">
            讓我們幫助您實現STEAM教育的成功案例
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition"
            >
              聯絡我們
        </a>
        <a
              href="/testimonials" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
            >
              查看客戶見證
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
