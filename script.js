(function () {
  "use strict";

  const copy = {
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımızda",
      "nav.rides": "Yolculuklar",
      "nav.driver": "Sürücü Ol",
      "nav.regions": "Hizmet Bölgeleri",
      "nav.support": "Destek",
      "hero.eyebrow": "Kuzey Kıbrıs mobility",
      "hero.title": "Kuzey Kıbrıs,",
      "hero.title2": "bir dokunuş uzağında.",
      "hero.subtitle": "Güvenli, hızlı ve her zaman yanınızda.",
      "hero.body": "GARDAŞ ile istediğin yere kolayca ulaş. Yolculuğunu şimdi başlat.",
      "hero.open": "GARDAŞ’ı Aç",
      "hero.driver": "Sürücü Ol",
      "soon": "Yakında",
      "why.title": "Neden GARDAŞ?",
      "why.verified.title": "Doğrulanmış Sürücüler",
      "why.verified.text": "Güvenli yolculuk",
      "why.local.title": "Kuzey Kıbrıs’a Özel",
      "why.local.text": "Yerel bir çözüm",
      "why.support.title": "7/24 Destek",
      "why.support.text": "Her zaman yanında",
      "why.fast.title": "Hızlı ve Kolay",
      "why.fast.text": "Saniyeler içinde araç",
      "process.kicker": "ADIM ADIM",
      "process.title": "Nasıl Çalışır?",
      "process.one.title": "Konumunu seç",
      "process.one.text": "Alış noktanı belirle.",
      "process.two.title": "Gideceğin yeri belirle",
      "process.two.text": "Nereye gideceğini seç.",
      "process.three.title": "Sürücünü takip et",
      "process.three.text": "Sürücünü haritada canlı takip et.",
      "process.four.title": "Güvenle var",
      "process.four.text": "Hızlı, güvenli ve konforlu yolculuk.",
      "rides.kicker": "SENİN İÇİN",
      "rides.title": "Yolculuk Seçenekleri",
      "rides.popular": "En Popüler",
      "rides.ride": "Günlük ihtiyaçların için ekonomik ve konforlu ulaşım.",
      "rides.xl": "Daha geniş araçlarla gruplar ve fazla bagajlar için ideal.",
      "rides.airport": "Ercan Havalimanı ve otel transferlerinizi zamanında ve konforlu yapar.",
      "rides.people14": "1-4 Kişi",
      "rides.people16": "1-6 Kişi",
      "rides.economic": "Ekonomik",
      "rides.comfort": "Geniş & Rahat",
      "rides.flight": "Uçuş Takibi",
      "driver.kicker": "SÜRÜCÜ OL",
      "driver.title": "Sürücü Ol,",
      "driver.title2": "Kazancını Artır!",
      "driver.intro": "Esnek çalışma saatleri, yüksek kazanç fırsatları ve güçlü destek ile kendi işinin sahibi ol.",
      "driver.one": "Daha fazla yolculuk isteği al",
      "driver.two": "Çalışma saatlerini sen belirle",
      "driver.three": "Yolculuklarını ve kazancını takip et",
      "driver.four": "Güvenilir bir yerel network’e katıl",
      "driver.button": "Sürücü Başvurusu",
      "driver.guide": "Sürücü Rehberini İncele",
      "driver.stat1t": "Yüksek Kazanç", "driver.stat1d": "Daha fazla kazanma fırsatı",
      "driver.stat2t": "Esnek Çalışma", "driver.stat2d": "Kendi programını oluştur",
      "driver.stat3t": "7/24 Destek", "driver.stat3d": "Her zaman yanınızdayız",
      "driver.badge.t": "Haftalık ödeme", "driver.badge.d": "Kazancın hızlıca hesabında",
      "regions.eyebrow": "HİZMET BÖLGELERİMİZ",
      "regions.title": "Kuzey Kıbrıs’ın Her Yerindeyiz",
      "regions.more": "Yakında daha fazla bölgede!",
      "download.kicker": "HER ZAMAN YANINDA",
      "download.title": "GARDAŞ’ı",
      "download.title2": "Yanında Götür!",
      "download.text": "Web uygulamamızı hemen kullan veya mobil uygulamalarımız çıktığında haberdar ol.",
      "download.web": "Web Uygulamasını Aç",
      "download.webtext": "Tarayıcında hemen kullan",
      "download.button": "Web Uygulamasına Git",
      "footer.tag": "Kuzey Kıbrıs’ın yerel ulaşım platformu. Güvenli, hızlı ve her zaman yanında.",
      "footer.company": "Şirket",
      "footer.about": "Hakkımızda",
      "footer.career": "Kariyer",
      "footer.news": "Haberler",
      "footer.drivers": "Sürücüler",
      "footer.beDriver": "Sürücü Ol",
      "footer.guide": "Sürücü Rehberi",
      "footer.privacy": "Gizlilik Politikası",
      "footer.terms": "Kullanım Koşulları",
      "footer.support": "Destek",
      "footer.contact": "İletişim",
      "footer.help": "Yardım Merkezi",
      "footer.copy": "© 2026 GARDAŞ. Tüm hakları saklıdır."
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.rides": "Rides",
      "nav.driver": "Drive",
      "nav.regions": "Service Areas",
      "nav.support": "Support",
      "hero.eyebrow": "North Cyprus mobility",
      "hero.title": "North Cyprus,",
      "hero.title2": "one tap away.",
      "hero.subtitle": "Safe, fast, and always by your side.",
      "hero.body": "Reach where you need to go with GARDAŞ. Start your ride now.",
      "hero.open": "Open GARDAŞ",
      "hero.driver": "Become a Driver",
      "soon": "Coming Soon",
      "why.title": "Why GARDAŞ?",
      "why.verified.title": "Verified Drivers",
      "why.verified.text": "Safe rides",
      "why.local.title": "Built for North Cyprus",
      "why.local.text": "A local solution",
      "why.support.title": "24/7 Support",
      "why.support.text": "Always by your side",
      "why.fast.title": "Fast & Easy",
      "why.fast.text": "A ride in seconds",
      "process.kicker": "STEP BY STEP",
      "process.title": "How It Works",
      "process.one.title": "Choose your location",
      "process.one.text": "Set your pickup point.",
      "process.two.title": "Set destination",
      "process.two.text": "Choose where you are going.",
      "process.three.title": "Track your driver",
      "process.three.text": "Follow your driver live on the map.",
      "process.four.title": "Arrive safely",
      "process.four.text": "Fast, safe, and comfortable rides.",
      "rides.kicker": "FOR YOU",
      "rides.title": "Ride Options",
      "rides.popular": "Most Popular",
      "rides.ride": "Economic and comfortable transport for everyday needs.",
      "rides.xl": "Ideal for groups and extra luggage with larger vehicles.",
      "rides.airport": "On-time, comfortable Ercan Airport and hotel transfers.",
      "rides.people14": "1-4 People",
      "rides.people16": "1-6 People",
      "rides.economic": "Economic",
      "rides.comfort": "Spacious & Comfortable",
      "rides.flight": "Flight Tracking",
      "driver.kicker": "DRIVE WITH US",
      "driver.title": "Drive &",
      "driver.title2": "Grow Your Earnings!",
      "driver.intro": "Flexible hours, higher earning potential and strong support — be your own boss.",
      "driver.one": "Receive more ride requests",
      "driver.two": "Choose your own working hours",
      "driver.three": "Track your rides and earnings",
      "driver.four": "Join a trusted local network",
      "driver.button": "Driver Application",
      "driver.guide": "Read the Driver Guide",
      "driver.stat1t": "Higher Earnings", "driver.stat1d": "More earning potential",
      "driver.stat2t": "Flexible Hours", "driver.stat2d": "Build your own schedule",
      "driver.stat3t": "24/7 Support", "driver.stat3d": "Always by your side",
      "driver.badge.t": "Weekly payouts", "driver.badge.d": "Earnings in your account fast",
      "regions.eyebrow": "SERVICE AREAS",
      "regions.title": "We’re Everywhere in North Cyprus",
      "regions.more": "More regions coming soon!",
      "download.kicker": "ALWAYS WITH YOU",
      "download.title": "Take GARDAŞ",
      "download.title2": "With You!",
      "download.text": "Use our web app now or get notified when our mobile apps launch.",
      "download.web": "Open the Web App",
      "download.webtext": "Use it in your browser now",
      "download.button": "Go to Web App",
      "footer.tag": "North Cyprus’ local mobility platform. Safe, fast, and always by your side.",
      "footer.company": "Company",
      "footer.about": "About",
      "footer.career": "Careers",
      "footer.news": "News",
      "footer.drivers": "Drivers",
      "footer.beDriver": "Drive",
      "footer.guide": "Driver Guide",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.support": "Support",
      "footer.contact": "Contact",
      "footer.help": "Help Center",
      "footer.copy": "© 2026 GARDAŞ. All rights reserved."
    }
  };

  const productionLinks = {
    app: "https://app.gardasapp.com/",
    driver: "https://app.gardasapp.com/driver/"
  };

  const localLinks = {
    app: "http://127.0.0.1:3000/",
    driver: "http://127.0.0.1:3000/driver"
  };

  const isLocalSite = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(location.hostname);
  const links = isLocalSite ? localLinks : productionLinks;

  document.querySelectorAll("[data-app-link]").forEach((el) => { el.setAttribute("href", links.app); });
  document.querySelectorAll("[data-driver-link]").forEach((el) => { el.setAttribute("href", links.driver); });

  /* ---------------- i18n ---------------- */
  function setLanguage(lang) {
    const dict = copy[lang] || copy.tr;
    document.documentElement.lang = lang;
    try { localStorage.setItem("gardas_public_lang", lang); } catch (e) {}
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });

  let savedLang = "tr";
  try { savedLang = localStorage.getItem("gardas_public_lang") || "tr"; } catch (e) {}
  setLanguage(savedLang);

  /* ---------------- Mobile menu ---------------- */
  const header = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".mobile-menu a").forEach((a) => {
      a.addEventListener("click", () => {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Sticky header state ---------------- */
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Scroll reveal ---------------- */
  const reveals = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion && reveals.length) {
    document.documentElement.classList.add("has-js");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------------- Store badge tap feedback ---------------- */
  document.querySelectorAll(".store-badge").forEach((badge) => {
    badge.addEventListener("click", () => {
      badge.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
        { duration: 240, easing: "ease-out" }
      );
    });
  });
})();
