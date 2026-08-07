(function () {
  "use strict";

  const copy = {
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımızda",
      "nav.driver": "Sürücü Ol",
      "nav.regions": "Hizmet Bölgeleri",
      "nav.support": "Destek",
      "hero.eyebrow": "Kuzey Kıbrıs mobility",
      "hero.title": "Kuzey Kıbrıs,",
      "hero.title2": "bir dokunuş uzağında.",
      "hero.subtitle": "Güvenli, hızlı ve her zaman yanında.",
      "hero.body": "GARDAŞ ile istediğin yere kolayca ulaş. Yolculuğunu şimdi başlat.",
      "hero.open": "GARDAŞ’ı Aç",
      "hero.driver": "Sürücü Ol",
      "soon": "Yakında",
      "trust.drivers": "Onaylı yerel sürücü",
      "trust.support": "Müşteri desteği",
      "trust.livev": "Canlı",
      "trust.track": "Sürücü takibi",
      "trust.cashv": "Nakit",
      "trust.pay": "Ödeme",
      "phone.where": "Nereye gidiyorsun?",
      "onboarding.prompt": "Nasıl devam etmek istersiniz?",
      "phone.from": "Alış noktası",
      "phone.to": "Varış",
      "phone.button": "Devam Et",
      "why.title": "Neden GARDAŞ?",
      "why.verified.title": "Doğrulanmış Sürücüler",
      "why.verified.text": "Tüm sürücülerimiz titizlikle denetlenir.",
      "why.local.title": "Kuzey Kıbrıs’a Özel",
      "why.local.text": "Yerel bir ekip, yerel bir hizmet.",
      "why.support.title": "7/24 Destek",
      "why.support.text": "Her zaman yanında canlı destek.",
      "why.safe.title": "Güvenli Yolculuk",
      "why.safe.text": "Güvenliğin bizim için öncelik.",
      "why.cash.title": "Nakit Ödeme",
      "why.cash.text": "Nakit ödeme kolay ve hızlı.",
      "why.card.title": "Kart Ödeme Yakında",
      "why.card.text": "Yakında kartla ödeme seçeneği geliyor.",
      "process.title": "Nasıl Çalışır?",
      "process.one.title": "Konumunu seç",
      "process.one.text": "Alış noktanı belirle.",
      "process.two.title": "Gideceğin yeri belirle",
      "process.two.text": "Nereye gideceğini seç.",
      "process.three.title": "Sürücünü takip et",
      "process.three.text": "Sürücünü haritada canlı takip et.",
      "process.four.title": "Güvenle var",
      "process.four.text": "Hızlı, güvenli ve konforlu yolculuk.",
      "rides.title": "Yolculuk Seçenekleri",
      "rides.ride": "Günlük ihtiyaçların için ekonomik ve konforlu ulaşım.",
      "rides.xl": "Daha geniş araçlarla gruplar ve fazla bagajlar için ideal.",
      "rides.airport": "Ercan Havalimanı ve otel transferlerinizi zamanında ve konforlu yapar.",
      "rides.people14": "1-4 Kişi",
      "rides.people16": "1-6 Kişi",
      "rides.economic": "Ekonomik",
      "rides.comfort": "Geniş & Rahat",
      "rides.flight": "Uçuş Takibi",
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
      "regions.eyebrow": "HİZMET BÖLGELERİMİZ",
      "regions.title": "Kuzey Kıbrıs’ın Her Yerindeyiz",
      "regions.sub": "Güvenli, hızlı ve konforlu yolculuk deneyimi için hizmet verdiğimiz bölgeler.",
      "regions.serving": "7/24 Hizmetinizde",
      "regions.more": "Yakında daha fazla bölgede!",
      "download.title": "GARDAŞ’ı",
      "download.title2": "Yanında Götür!",
      "download.text": "Web uygulamamızı hemen kullan veya mobil uygulamalarımız çıktığında haberdar ol.",
      "download.web": "Web Uygulamasını Aç",
      "download.webtext": "Tarayıcında hemen kullan",
      "download.button": "Web Uygulamasına Git",
      "dl.greet": "Merhaba 👋", "dl.where": "Nereye gidiyorsun?", "dl.search": "Nereye?",
      "dl.home": "Ev", "dl.homeSub": "Ev adresini ayarla", "dl.call": "GARDAŞ Çağır",
      "footer.tag": "Kuzey Kıbrıs’ın yerel ulaşım platformu. Güvenli, hızlı ve her zaman yanında.",
      "footer.company": "Şirket",
      "footer.about": "Hakkımızda",
      "footer.career": "Kariyer",
      "footer.news": "Haberler",
      "footer.drivers": "Sürücüler",
      "footer.beDriver": "Sürücü Ol",
      "footer.guide": "Sürücü Rehberi",
      "footer.legal": "Yasal",
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
      "nav.driver": "Drive",
      "nav.regions": "Service Areas",
      "nav.support": "Support",
      "hero.eyebrow": "North Cyprus mobility",
      "hero.title": "North Cyprus,",
      "hero.title2": "one tap away.",
      "trust.drivers": "Verified local drivers",
      "trust.support": "Customer support",
      "trust.livev": "Live",
      "trust.track": "Driver tracking",
      "trust.cashv": "Cash",
      "trust.pay": "Payments",
      "hero.subtitle": "Safe, fast, and always by your side.",
      "hero.body": "Reach where you need to go with GARDAŞ. Start your ride now.",
      "hero.open": "Open GARDAŞ",
      "hero.driver": "Become a Driver",
      "soon": "Coming Soon",
      "phone.where": "Where are you going?",
      "onboarding.prompt": "How would you like to continue?",
      "phone.from": "Pickup point",
      "phone.to": "Destination",
      "phone.button": "Continue",
      "why.title": "Why GARDAŞ?",
      "why.verified.title": "Verified Drivers",
      "why.verified.text": "Every driver is carefully reviewed.",
      "why.local.title": "Built for North Cyprus",
      "why.local.text": "A local team, a local service.",
      "why.support.title": "24/7 Support",
      "why.support.text": "Live support whenever you need it.",
      "why.safe.title": "Safe Rides",
      "why.safe.text": "Your safety is our priority.",
      "why.cash.title": "Cash Payment",
      "why.cash.text": "Cash payment is simple and fast.",
      "why.card.title": "Card Payment Coming Soon",
      "why.card.text": "Card payment support is on the way.",
      "process.title": "How It Works",
      "process.one.title": "Choose your location",
      "process.one.text": "Set your pickup point.",
      "process.two.title": "Set destination",
      "process.two.text": "Choose where you are going.",
      "process.three.title": "Track your driver",
      "process.three.text": "Follow your driver live on the map.",
      "process.four.title": "Arrive safely",
      "process.four.text": "Fast, safe, and comfortable rides.",
      "rides.title": "Ride Options",
      "rides.ride": "Economic and comfortable transport for everyday needs.",
      "rides.xl": "Ideal for groups and extra luggage with larger vehicles.",
      "rides.airport": "On-time, comfortable Ercan Airport and hotel transfers.",
      "rides.people14": "1-4 People",
      "rides.people16": "1-6 People",
      "rides.economic": "Economic",
      "rides.comfort": "Spacious & Comfortable",
      "rides.flight": "Flight Tracking",
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
      "regions.eyebrow": "SERVICE AREAS",
      "regions.title": "We’re Everywhere in North Cyprus",
      "regions.sub": "The regions we serve for a safe, fast and comfortable ride experience.",
      "regions.serving": "24/7 at your service",
      "regions.more": "More regions coming soon!",
      "download.title": "Take GARDAŞ",
      "download.title2": "With You!",
      "download.text": "Use our web app now or get notified when our mobile apps launch.",
      "download.web": "Open the Web App",
      "download.webtext": "Use it in your browser now",
      "download.button": "Go to Web App",
      "dl.greet": "Hello 👋", "dl.where": "Where are you going?", "dl.search": "Where to?",
      "dl.home": "Home", "dl.homeSub": "Set your home address", "dl.call": "Request GARDAŞ",
      "footer.tag": "North Cyprus’ local mobility platform. Safe, fast, and always by your side.",
      "footer.company": "Company",
      "footer.about": "About",
      "footer.career": "Careers",
      "footer.news": "News",
      "footer.drivers": "Drivers",
      "footer.beDriver": "Drive",
      "footer.guide": "Driver Guide",
      "footer.legal": "Legal",
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

  document.querySelectorAll("[data-app-link]").forEach((el) => {
    el.setAttribute("href", links.app);
  });
  document.querySelectorAll("[data-driver-link]").forEach((el) => {
    el.setAttribute("href", links.driver);
  });

  function setLanguage(lang) {
    const dict = copy[lang] || copy.tr;
    document.documentElement.lang = lang;
    localStorage.setItem("gardas_public_lang", lang);
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

  document.querySelectorAll(".onboarding-back").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.hash = "#home";
      }
    });
  });

  document.querySelectorAll(".store-badge").forEach((badge) => {
    badge.addEventListener("click", () => {
      badge.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-2px)" },
          { transform: "translateY(0)" }
        ],
        { duration: 260, easing: "ease-out" }
      );
    });
  });

  setLanguage(localStorage.getItem("gardas_public_lang") || "tr");
})();
