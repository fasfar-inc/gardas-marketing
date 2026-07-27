/* GARDAŞ marketing site — controlled EN/TR i18n + premium interactions.
   Brand & product names (GARDAŞ, GARDAŞ Ride/XL/Airport), city names, prices,
   phone numbers and URLs are NEVER auto-translated — they live inside
   <span translate="no"> and are kept out of the translatable copy. */
(function () {
  "use strict";

  // Brand token, kept identical across languages and marked non-translatable.
  var G = '<span translate="no">GARDAŞ</span>';

  var copy = {
    en: {
      "nav.home": "Home", "nav.how": "How it works", "nav.rides": "Ride options",
      "nav.areas": "Service areas", "nav.drive": "Drive with us", "nav.support": "Support",
      "cta.open": "Open", "cta.driver": "Become a driver",
      "hero.eyebrow": "North Cyprus mobility",
      "hero.title": 'North Cyprus, <span class="hl">one tap away.</span>',
      "hero.lead": "Request a safe, reliable and comfortable ride anytime, anywhere in North Cyprus.",
      "store.on": "Coming soon on",
      "phone.pickup": "Pickup location", "phone.where": "Where to?",
      "phone.yourdriver": "Your driver", "phone.eta": "2 min away",
      "phone.estprice": "Estimated price", "phone.cash": "Cash payment",
      "trust.drivers": "Verified local drivers", "trust.support": "Customer support",
      "trust.livev": "Live", "trust.track": "Driver tracking",
      "trust.cashv": "Cash", "trust.payments": "Payments",
      "trust.allv": "All over", "trust.coverage": "North Cyprus",
      "how.title": "How it works",
      "how.s1t": "Choose your pickup", "how.s1d": "Set your pickup location on the map.",
      "how.s2t": "Enter your destination", "how.s2d": "Add your destination and see the price.",
      "how.s3t": "Select your " + G, "how.s3d": "Choose the ride that suits you best.",
      "how.s4t": "Track your driver", "how.s4d": "Track your driver in real time.",
      "video.title": "See how easy it is to use " + G,
      "video.text": "Watch a quick 60-second video and start your ride in minutes.",
      "rides.title": "Ride options",
      "rides.ride": "Affordable everyday rides for local trips.",
      "rides.xl": "More space for groups and extra luggage.",
      "rides.airport": "Comfortable airport transfers on time.",
      "rides.more": "Learn more",
      "coverage.title": "We cover all over North Cyprus",
      "coverage.girne": "Fast pickups all around Girne and surroundings.",
      "coverage.lefkosa": "Quick rides across the capital city centre.",
      "coverage.magusa": "Reliable rides day and night in the historic port city.",
      "coverage.iskele": "Rides and airport transfers on the growing east coast.",
      "coverage.ercan": "On-time transfers to and from the main airport.",
      "why.title": "Why " + G + "?",
      "why.verified.t": "Verified local drivers", "why.verified.d": "All our drivers are background checked and trained.",
      "why.track.t": "Live tracking", "why.track.d": "Follow your driver in real time on the map.",
      "why.support.t": "24/7 support", "why.support.d": "We are here for you anytime you need us.",
      "why.safe.t": "Safe & reliable", "why.safe.d": "Your safety is our priority.",
      "why.cash.t": "Cash payments", "why.cash.d": "Pay in cash easily to your driver.",
      "why.card.t": "Card payments", "why.card.d": "Coming soon. You will be able to pay by card.",
      "why.airport.t": "Airport transfers", "why.airport.d": "On-time pickups and comfortable journeys to or from the airport.",
      "driver.title": "Drive with " + G + ".<br>Earn on your schedule.",
      "driver.b1": "More local ride requests", "driver.b2": "Flexible working hours",
      "driver.b3": "Clear earnings", "driver.b4": "Driver support", "driver.b5": "Grow with " + G,
      "driver.earnings": "Earnings", "driver.week": "This week",
      "driver.trips": "Trips", "driver.online": "Online", "driver.rating": "Rating",
      "download.title": "North Cyprus is moving with " + G + ".",
      "download.text": "Download the app and enjoy a better ride experience.",
      "download.yourride": "Your ride,<br>your way.",
      "download.web": "Open " + G + " Web App", "download.noreq": "No download required.",
      "download.button": "Open Web App",
      "footer.tag": "The #1 local mobility platform in North Cyprus. Safe. Reliable. Local.",
      "footer.company": "Company", "footer.about": "About us", "footer.careers": "Careers",
      "footer.news": "News", "footer.contact": "Contact",
      "footer.drivers": "Drivers", "footer.driverapp": "Driver app",
      "footer.earnings": "Earnings", "footer.requirements": "Requirements",
      "footer.support": "Support", "footer.help": "Help center", "footer.safety": "Safety",
      "footer.lost": "Lost & found", "footer.contactus": "Contact us",
      "footer.copy": "© 2026 GARDAŞ. All rights reserved."
    },
    tr: {
      "nav.home": "Ana Sayfa", "nav.how": "Nasıl çalışır", "nav.rides": "Araç seçenekleri",
      "nav.areas": "Hizmet bölgeleri", "nav.drive": "Sürücü ol", "nav.support": "Destek",
      "cta.open": "Aç", "cta.driver": "Sürücü ol",
      "hero.eyebrow": "Kuzey Kıbrıs ulaşım",
      "hero.title": 'Kuzey Kıbrıs, <span class="hl">bir dokunuş uzağında.</span>',
      "hero.lead": "Kuzey Kıbrıs’ta dilediğin an, dilediğin yerde güvenli, güvenilir ve konforlu bir yolculuk çağır.",
      "store.on": "Yakında",
      "phone.pickup": "Alış noktası", "phone.where": "Nereye?",
      "phone.yourdriver": "Sürücün", "phone.eta": "2 dk uzakta",
      "phone.estprice": "Tahmini ücret", "phone.cash": "Nakit ödeme",
      "trust.drivers": "Onaylı yerel sürücüler", "trust.support": "Müşteri desteği",
      "trust.livev": "Canlı", "trust.track": "Sürücü takibi",
      "trust.cashv": "Nakit", "trust.payments": "Ödeme",
      "trust.allv": "Tüm", "trust.coverage": "Kuzey Kıbrıs",
      "how.title": "Nasıl çalışır",
      "how.s1t": "Alış noktanı seç", "how.s1d": "Alış noktanı harita üzerinde belirle.",
      "how.s2t": "Varış noktanı gir", "how.s2d": "Varış noktanı ekle ve ücreti gör.",
      "how.s3t": G + " aracını seç", "how.s3d": "Yolculuğuna en uygun aracı seç.",
      "how.s4t": "Sürücünü takip et", "how.s4d": "Sürücünü gerçek zamanlı takip et.",
      "video.title": G + " kullanmanın ne kadar kolay olduğunu gör",
      "video.text": "60 saniyelik kısa videoyu izle ve yolculuğuna dakikalar içinde başla.",
      "rides.title": "Araç seçenekleri",
      "rides.ride": "Şehir içi günlük yolculuklar için ekonomik seçenek.",
      "rides.xl": "Gruplar ve ekstra bagaj için daha geniş alan.",
      "rides.airport": "Zamanında ve konforlu havalimanı transferleri.",
      "rides.more": "Daha fazla",
      "coverage.title": "Tüm Kuzey Kıbrıs’ı kapsıyoruz",
      "coverage.girne": "Girne ve çevresinde hızlı alışlar.",
      "coverage.lefkosa": "Başkent merkezinde hızlı yolculuklar.",
      "coverage.magusa": "Tarihi liman şehrinde gece gündüz güvenilir yolculuklar.",
      "coverage.iskele": "Büyüyen doğu kıyısında yolculuklar ve havalimanı transferleri.",
      "coverage.ercan": "Ana havalimanına zamanında transferler.",
      "why.title": "Neden " + G + "?",
      "why.verified.t": "Onaylı yerel sürücüler", "why.verified.d": "Tüm sürücülerimiz denetlenir ve eğitilir.",
      "why.track.t": "Canlı takip", "why.track.d": "Sürücünü haritada gerçek zamanlı izle.",
      "why.support.t": "7/24 destek", "why.support.d": "İhtiyacın olduğunda her an buradayız.",
      "why.safe.t": "Güvenli ve güvenilir", "why.safe.d": "Güvenliğin bizim önceliğimiz.",
      "why.cash.t": "Nakit ödeme", "why.cash.d": "Sürücüne kolayca nakit öde.",
      "why.card.t": "Kart ödeme", "why.card.d": "Yakında kartla ödeme yapabileceksin.",
      "why.airport.t": "Havalimanı transferleri", "why.airport.d": "Havalimanına gidiş-dönüş zamanında ve konforlu yolculuklar.",
      "driver.title": G + " ile sür.<br>Kendi programında kazan.",
      "driver.b1": "Daha fazla yerel yolculuk isteği", "driver.b2": "Esnek çalışma saatleri",
      "driver.b3": "Net kazanç", "driver.b4": "Sürücü desteği", "driver.b5": G + " ile büyü",
      "driver.earnings": "Kazanç", "driver.week": "Bu hafta",
      "driver.trips": "Yolculuk", "driver.online": "Çevrimiçi", "driver.rating": "Puan",
      "download.title": "Kuzey Kıbrıs " + G + " ile hareket ediyor.",
      "download.text": "Uygulamayı indir ve daha iyi bir yolculuk deneyiminin keyfini çıkar.",
      "download.yourride": "Senin yolculuğun,<br>senin tarzın.",
      "download.web": G + " Web Uygulamasını Aç", "download.noreq": "İndirmeye gerek yok.",
      "download.button": "Web Uygulamasını Aç",
      "footer.tag": "Kuzey Kıbrıs’ın 1 numaralı yerel ulaşım platformu. Güvenli. Güvenilir. Yerel.",
      "footer.company": "Şirket", "footer.about": "Hakkımızda", "footer.careers": "Kariyer",
      "footer.news": "Haberler", "footer.contact": "İletişim",
      "footer.drivers": "Sürücüler", "footer.driverapp": "Sürücü uygulaması",
      "footer.earnings": "Kazançlar", "footer.requirements": "Gereksinimler",
      "footer.support": "Destek", "footer.help": "Yardım merkezi", "footer.safety": "Güvenlik",
      "footer.lost": "Kayıp eşya", "footer.contactus": "Bize ulaşın",
      "footer.copy": "© 2026 GARDAŞ. Tüm hakları saklıdır."
    }
  };

  // ---- Environment-aware app links ----
  var productionLinks = { app: "https://app.gardasapp.com/", driver: "https://app.gardasapp.com/driver/" };
  var localLinks = { app: "http://127.0.0.1:3000/", driver: "http://127.0.0.1:3000/driver" };
  var isLocalSite = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(location.hostname);
  var links = isLocalSite ? localLinks : productionLinks;
  document.querySelectorAll("[data-app-link]").forEach(function (el) { el.setAttribute("href", links.app); });
  document.querySelectorAll("[data-driver-link]").forEach(function (el) { el.setAttribute("href", links.driver); });

  // ---- Language ----
  function getLang() {
    try { var l = localStorage.getItem("gardas_public_lang"); if (l === "tr" || l === "en") return l; } catch (e) {}
    return "en";
  }
  function setLanguage(lang) {
    var dict = copy[lang] || copy.en;
    document.documentElement.lang = lang;
    try { localStorage.setItem("gardas_public_lang", lang); } catch (e) {}
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v; // copy is trusted; contains protected brand spans
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }
  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { setLanguage(btn.getAttribute("data-lang")); });
  });
  setLanguage(getLang());

  // ---- Sticky header state + mobile menu ----
  var header = document.getElementById("siteHeader");
  var burger = document.getElementById("burger");
  var mobileMenu = document.getElementById("mobileMenu");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 20); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  if (burger) {
    burger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      burger.classList.toggle("open", open);
      header.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
        header.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Active nav via section observer ----
  var navMap = {};
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    var id = a.getAttribute("href");
    if (id && id.charAt(0) === "#") navMap[id.slice(1)] = a;
  });
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove("active"); });
        if (navMap[e.target.id]) navMap[e.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home", "how", "rides", "coverage", "driver", "support"].forEach(function (id) {
    var s = document.getElementById(id);
    if (s) sectionObserver.observe(s);
  });

  // ---- Reveal on scroll ----
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

  // ---- Service map interactions ----
  var cityImages = {
    "Girne": "assets/ref-region-girne.png",
    "Lefkoşa": "assets/ref-region-lefkosa.png",
    "Gazimağusa": "assets/ref-region-gazimagusa.png",
    "İskele": "assets/ref-region-iskele.png",
    "Ercan Airport": "assets/ref-region-ercan.png"
  };
  var cityName = document.getElementById("mapCityName");
  var cityNote = document.getElementById("mapCityNote");
  var cityImg = document.getElementById("mapCityImg");
  function showCity(g) {
    document.querySelectorAll(".mk").forEach(function (m) { m.classList.remove("active"); });
    g.classList.add("active");
    var city = g.getAttribute("data-city");
    var note = g.getAttribute("data-note");
    if (cityName) cityName.textContent = city;
    if (cityImg && cityImages[city]) cityImg.setAttribute("src", cityImages[city]);
    if (cityNote) {
      cityNote.setAttribute("data-i18n", note);
      cityNote.innerHTML = (copy[getLang()] || copy.en)[note] || "";
    }
  }
  document.querySelectorAll(".mk").forEach(function (g) {
    g.addEventListener("mouseenter", function () { showCity(g); });
    g.addEventListener("click", function () { showCity(g); });
    g.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); showCity(g); }
    });
  });

  // ---- Store badges: gentle press feedback ----
  document.querySelectorAll(".store-badge").forEach(function (badge) {
    badge.addEventListener("click", function () {
      badge.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
        { duration: 240, easing: "ease-out" }
      );
    });
  });
})();
