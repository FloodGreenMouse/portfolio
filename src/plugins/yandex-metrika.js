// Конфиг по умолчанию
const config = {
  defer: true,
  env: process.env.NODE_ENV,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  scriptSrc: 'https://mc.yandex.ru/metrika/tag.js'
}

// Функция мержа конфига по умолчанию с конфигом пользователя
const updateConfig = (options) => {
  Object.keys(options).forEach((key) => {
    config[key] = options[key]
  })
}

const loadScript = (callback, scriptSrc = config.scriptSrc) => {
  // Функция загрузки скрипта от Yandex Metrika
  const metrika = (m,e,t,r,i,k,a) => {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments)
    }
    m[i].l = 1 * new Date()
    k=e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k,a)
    k.onload = callback
  }
  metrika(window, document, 'script', scriptSrc, 'ym')
}

export default function install (Vue, options = {}) {
  updateConfig(options)

  // Вывод предупреждения, если в конфиге нет Vue router
  if (config.env === 'production' && !config.router) {
    console.log('%c%s', 'font-size: 13px; color: red;', '[Vue-yandex-metrika]: Router is not passed. Tracking is disabled.')
  }

  if (config.env === 'development') {
    console.log('%c%s', 'font-size: 12px; color: orange;', '[Vue-yandex-metrika]: Vue in dev mode. Tracking is disabled.')
  }

  if (config.env === 'production' && config.router) {
    loadScript(() => {
      // Init метрики
      window.ym(config.id, 'init', {
        defer: config.defer,
        clickmap: config.clickmap,
        trackLinks: config.trackLinks,
        accurateTrackBounce: config.accurateTrackBounce
      }, config.scriptSrc)

      // Отправка данных метрики после каждого перехода по маршруту
      options.router.afterEach((to, from) => {
        window.ym(options.id, 'hit', to.path, {
          title: document.title,
          referer: from.path
        })
      })
    })
  }
}
