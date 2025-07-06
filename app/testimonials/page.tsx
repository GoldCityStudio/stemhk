export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 dark:bg-black dark:text-white p-8">
      <header className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">客戶見證與案例研究</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          了解我們的STEAM教育服務如何幫助香港的學校、機構和企業實現教育創新和卓越成果。
        </p>
      </header>
      
      {/* Breadcrumb Navigation */}
      <nav className="w-full max-w-4xl mx-auto py-2" aria-label="麵包屑導航">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">首頁</a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 dark:text-white" aria-current="page">客戶見證</li>
        </ol>
      </nav>
      
      <main className="w-full max-w-4xl mx-auto flex flex-col gap-12">
        {/* Testimonial 1 */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-8 rounded-lg">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">香港國際學校</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">STEAM課程整合項目</p>
              <blockquote className="text-lg italic mb-4 border-l-4 border-blue-500 pl-4">
                "Babi Academy團隊幫助我們成功整合STEAM教育到我們的課程體系中。他們的專業知識和創新方法使我們的學生在科學、技術和創意方面都取得了顯著進步。學生們現在更積極參與學習，批判性思維能力也大幅提升。"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">張美玲校長</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">香港國際學校</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">案例研究詳情</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  挑戰
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>需要將STEAM教育整合到現有課程</li>
                  <li>教師缺乏STEAM教學經驗</li>
                  <li>學生對科學和數學興趣不足</li>
                  <li>需要提升學生的創新思維能力</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  解決方案
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>設計跨學科STEAM課程模組</li>
                  <li>提供教師專業發展培訓</li>
                  <li>建立動手實驗室和創客空間</li>
                  <li>實施項目式學習方法</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                成果
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">85%</p>
                  <p className="text-sm">學生參與度提升</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">92%</p>
                  <p className="text-sm">教師滿意度</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">78%</p>
                  <p className="text-sm">科學成績提升</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial 2 */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 p-8 rounded-lg">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">香港創意科技公司</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">員工STEAM技能培訓項目</p>
              <blockquote className="text-lg italic mb-4 border-l-4 border-green-500 pl-4">
                "Babi Academy為我們的研發團隊提供了卓越的STEAM培訓。他們的課程不僅提升了員工的技術技能，更重要的是培養了創新思維和問題解決能力。這直接影響了我們的產品開發效率和創新能力。"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">李志強總監</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">研發部總監</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">案例研究詳情</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  挑戰
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>員工技術技能需要更新</li>
                  <li>缺乏創新思維和設計思維</li>
                  <li>跨部門協作效率低</li>
                  <li>產品開發週期過長</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  解決方案
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>定制化STEAM技能培訓課程</li>
                  <li>設計思維工作坊</li>
                  <li>跨學科項目合作訓練</li>
                  <li>創新思維培養課程</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                成果
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">40%</p>
                  <p className="text-sm">產品開發效率提升</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</p>
                  <p className="text-sm">員工滿意度</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">60%</p>
                  <p className="text-sm">創新專利申請增加</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial 3 */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-8 rounded-lg">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">香港教育中心</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">STEAM教育中心建立項目</p>
              <blockquote className="text-lg italic mb-4 border-l-4 border-purple-500 pl-4">
                "STEM創新幫助我們建立了一個完整的STEAM教育中心。從空間設計到課程開發，從設備採購到教師培訓，他們提供了全方位的專業服務。現在我們的中心已經成為香港STEAM教育的標杆。"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">王建華主任</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">教育中心主任</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">案例研究詳情</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  挑戰
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>需要建立完整的STEAM教育中心</li>
                  <li>缺乏STEAM教育專業知識</li>
                  <li>需要吸引更多學生參與</li>
                  <li>需要建立品牌知名度</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  解決方案
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>完整的STEAM中心規劃設計</li>
                  <li>專業課程體系開發</li>
                  <li>教師團隊培訓</li>
                  <li>市場推廣策略制定</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                成果
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">300+</p>
                  <p className="text-sm">註冊學生</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">98%</p>
                  <p className="text-sm">家長滿意度</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</p>
                  <p className="text-sm">合作學校</p>
                </div>
              </div>
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
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
            >
              了解服務
            </a>
          </div>
        </section>
      </main>
    </div>
  );
} 