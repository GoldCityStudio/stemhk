import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Babi Academy | 科學、技術、工程、藝術與數學解決方案",
  description: "專業的STEAM教育機構，提供科學、技術、工程、藝術和數學創新解決方案。通過專家STEAM服務賦能教育、商業和創造力。",
  keywords: [
    "STEAM",
    "STEM",
    "科學",
    "技術",
    "工程",
    "藝術",
    "數學",
    "教育",
    "創新",
    "諮詢",
    "工作坊",
    "課程",
    "專業發展",
    "STEAM公司",
    "STEAM服務",
    "STEAM解決方案",
    "香港STEAM教育",
    "香港STEAM課程",
    "香港STEAM培訓",
    "香港STEAM工作坊",
    "香港STEAM教育機構",
    "香港STEAM教育服務",
    "香港STEAM諮詢",
    "香港STEAM解決方案",
    "科學教育",
    "技術教育",
    "工程教育",
    "藝術教育",
    "數學教育",
    "STEAM課程",
    "STEAM培訓",
    "STEAM工作坊",
    "STEAM諮詢",
    "STEAM項目",
    "STEAM課程設計",
    "STEAM整合",
    "STEAM教學",
    "STEAM學習",
    "STEAM活動",
    "STEAM實驗",
    "STEAM實驗室",
    "STEAM中心",
    "STEAM機構",
    "STEAM專家",
    "STEAM導師",
    "STEAM教師",
    "STEAM教育工作者",
    "STEAM專業發展",
    "STEAM教師培訓",
    "STEAM課程開發",
    "STEAM教學方法",
    "STEAM學習體驗",
    "STEAM動手學習",
    "STEAM探究式學習",
    "STEAM創意學習",
    "STEAM批判性思維",
    "STEAM問題解決",
    "STEAM設計思維",
    "STEAM創新思維",
    "STEAM跨學科學習",
    "STEAM綜合教育",
    "STEAM全人教育",
    "STEAM素質教育",
    "STEAM未來教育",
    "STEAM數位教育",
    "STEAM智慧教育",
    "STEAM創新教育",
    "STEAM實驗教育",
    "STEAM實踐教育",
    "STEAM體驗教育",
    "STEAM互動教育",
    "STEAM合作學習",
    "STEAM團隊合作",
    "STEAM溝通技能",
    "STEAM領導力",
    "STEAM創業精神",
    "STEAM職業發展",
    "STEAM技能培訓",
    "STEAM能力培養",
    "STEAM素養提升",
    "STEAM知識建構",
    "STEAM學習成果",
    "STEAM教育成效",
    "STEAM學習評估",
    "STEAM課程評價",
    "STEAM教學質量",
    "STEAM教育標準",
    "STEAM課程體系",
    "STEAM教學大綱",
    "STEAM學習目標",
    "STEAM教育理念",
    "STEAM教學模式",
    "STEAM學習方法",
    "STEAM教育技術",
    "STEAM數位工具",
    "STEAM教學資源",
    "STEAM學習平台",
    "STEAM教育軟件",
    "STEAM教學設備",
    "STEAM實驗器材",
    "STEAM教學材料",
    "STEAM學習資料",
    "STEAM教育內容",
    "STEAM課程內容",
    "STEAM教學內容",
    "STEAM學習內容",
    "STEAM教育方案",
    "STEAM解決方案",
    "STEAM服務方案",
    "STEAM諮詢服務",
    "STEAM培訓服務",
    "STEAM教育服務",
    "STEAM學習服務",
    "STEAM課程服務",
    "STEAM教學服務",
    "STEAM專業服務",
    "STEAM定制服務",
    "STEAM個性化服務",
    "STEAM一站式服務",
    "STEAM全方位服務",
    "STEAM綜合服務",
    "STEAM教育機構",
    "STEAM培訓機構",
    "STEAM諮詢機構",
    "STEAM服務機構",
    "STEAM專業機構",
    "STEAM權威機構",
    "STEAM知名機構",
    "STEAM優秀機構",
    "STEAM領先機構",
    "STEAM專業團隊",
    "STEAM專家團隊",
    "STEAM資深團隊",
    "STEAM經驗豐富",
    "STEAM專業水平",
    "STEAM服務質量",
    "STEAM客戶滿意",
    "STEAM口碑良好",
    "STEAM信譽可靠",
    "STEAM值得信賴",
    "STEAM首選品牌",
    "STEAM推薦品牌",
    "STEAM知名品牌",
    "STEAM優秀品牌",
    "STEAM領先品牌",
    "STEAM專業品牌",
    "STEAM權威品牌",
    "STEAM值得推薦",
    "STEAM值得選擇",
    "STEAM值得信賴",
    "STEAM值得合作",
    "STEAM值得投資",
    "STEAM值得期待",
    "STEAM值得關注",
    "STEAM值得學習",
    "STEAM值得借鑒",
    "STEAM值得推廣",
    "STEAM值得發展",
    "STEAM值得創新",
    "STEAM值得探索",
    "STEAM值得研究",
    "STEAM值得實踐",
    "STEAM值得應用",
    "STEAM值得推廣",
    "STEAM值得發展",
    "STEAM值得創新",
    "STEAM值得探索",
    "STEAM值得研究",
    "STEAM值得實踐",
    "STEAM值得應用"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 't_v4vD0YodbPwWthCRzRVJAjVT-Zu4JqNcPvRJN4des',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://www.stem-innovations.com',
  },
  openGraph: {
    title: "STEM創新 | 科學、技術、工程、藝術與數學解決方案",
    description: "專業的STEAM公司，提供科學、技術、工程、藝術和數學創新解決方案。通過專家STEAM服務賦能教育、商業和創造力。",
    url: "https://www.stem-innovations.com",
    siteName: "STEM創新",
    type: "website",
    locale: "zh_HK",
    images: [
      {
        url: "https://www.stem-innovations.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STEM創新 - STEAM教育解決方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STEM創新 | 科學、技術、工程、藝術與數學解決方案",
    description: "專業的STEAM公司，提供科學、技術、工程、藝術和數學創新解決方案。通過專家STEAM服務賦能教育、商業和創造力。",
    images: ["https://www.stem-innovations.com/twitter-image.jpg"],
    creator: "@steminnovations",
    site: "@steminnovations",
  },
  authors: [{ name: "STEM創新團隊" }],
  creator: "STEM創新",
  publisher: "STEM創新",
  category: "教育",
  classification: "STEAM教育服務",
  other: {
    "google-site-verification": "t_v4vD0YodbPwWthCRzRVJAjVT-Zu4JqNcPvRJN4des",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="STEM創新" />
        <meta name="application-name" content="STEM創新" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'STEM創新 - STEAM教育解決方案',
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Babi Academy",
              "description": "專業的STEAM教育機構，提供科學、技術、工程、藝術和數學創新解決方案",
              "url": "https://www.babi-academy.com",
              "logo": "https://www.babi-academy.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/steminnovations",
                "https://www.linkedin.com/company/stem-innovations",
                "https://twitter.com/steminnovations",
                "https://www.instagram.com/steminnovations"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+852-1234-5678",
                "contactType": "customer service",
                "email": "info@babi-academy.com",
                "availableLanguage": "Traditional Chinese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "香港",
                "addressRegion": "香港",
                "addressCountry": "HK",
                "postalCode": "000000"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "香港"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "STEAM教育服務",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "STEAM課程開發",
                      "description": "專業的STEAM課程設計與開發服務"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "STEAM教師培訓",
                      "description": "STEAM教育工作者專業發展培訓"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "STEAM諮詢服務",
                      "description": "STEAM教育諮詢與規劃服務"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "張老師"
                  },
                  "reviewBody": "Babi Academy的STEAM課程設計非常專業，學生學習效果顯著提升。"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                  B
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Babi Academy</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">STEAM教育專家</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8" role="navigation" aria-label="主要導航">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">首頁</Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">關於我們</Link>
                <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">服務</Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">部落格</Link>
                <Link href="/testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">客戶見證</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">聯絡我們</Link>
              </nav>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        {children}
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/85271073695?text=您好！我想了解更多關於STEAM教育服務的資訊。" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp聯絡"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                    B
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Babi Academy</h3>
                    <p className="text-gray-400 text-sm">STEAM教育專家</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  香港領先的STEAM教育機構Babi Academy，致力於通過科學、技術、工程、藝術和數學的整合教育，培養下一代的創新思維者和問題解決者。
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-1.653 0-3.768-2.245-3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">快速連結</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white transition">關於我們</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition">服務項目</a></li>
                  <li><a href="/blog" className="text-gray-400 hover:text-white transition">部落格</a></li>
                  <li><a href="/testimonials" className="text-gray-400 hover:text-white transition">客戶見證</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition">聯絡我們</a></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    info@stem-innovations.com
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    +852 7107 3695
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    香港中環金融街8號
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 STEM創新. 保留所有權利.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">隱私政策</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">服務條款</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">網站地圖</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
