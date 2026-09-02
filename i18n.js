/**
 * Website copy: en / de / gsw.
 *
 * gsw is Züritüütsch, informal — same stack as the app catalogs:
 * Supertext Zürichdeutsch for sentences
 * (https://www.supertext.com/de-DE/p/uebersetzen/deutsch-schweizerdeutsch),
 * Dieth spelling via zuerituetsch.ch, CLDR gsw_CH for month names.
 * Impressum identity block stays German in every language.
 */
(function () {
  const STORAGE_KEY = 'knips-lang';
  const LANGS = ['en', 'de', 'gsw'];

  const catalogs = {
    de: {
      menu: { open: 'Menü öffnen', close: 'Menü schließen' },
      lang: {
        group: 'Sprache',
        en: 'English',
        de: 'Deutsch',
        gsw: 'Schwiizerdütsch',
      },
      nav: {
        overview: 'Allgemein',
        examples: 'Beispiele',
        terms: 'Nutzung',
        privacy: 'Datenschutz',
        contact: 'Kontakt / Impressum',
      },
      hero: {
        headline: 'Weniger ist mehr.',
        lead: 'Knïps bringt dir die Nostalgie analoger Fotografie auf dein Smartphone: Filmrolle einlegen, fotografieren, drucken. Fast wie früher.',
        shotAlt: 'Ablauf: Filmrolle erstellen, Fotos knipsen, online drucken, analog genießen',
        featuresTitle: 'Features',
        feat1: 'Zeit- und Ortsstempel für deine Bilder',
        feat2: 'Individuelle Hashtags auf jedem Foto',
        feat3: 'Direkter Upload fürs online drucken',
        ctaIos: 'Test App (iOS)',
      },
      android: {
        label: 'Android-Test',
        hint: 'Zuerst der Google-Gruppe beitreten, danach die App über den Play-Testlink laden.',
        title: 'Android-Test: zuerst Gruppe, dann App',
        join: 'Gruppe beitreten',
        load: 'App laden',
      },
      shots: {
        knips: 'Knïps',
        place: 'Ort & Zeitstempel',
        hashtag: 'Hashtag-Funktion',
        alt1: 'knïps App: Sucher mit Filmrolle Summer und Zeitstempel',
        alt2: 'Ort- und Zeitstempel auf dem Foto im Sucher',
        alt3: 'Hashtag-Funktion im Sucher',
      },
      privacy: {
        heading: 'Datenschutzerklärung',
        asOf: 'Stand: 1. August 2026',
        controller: 'Verantwortlicher',
        contact: 'Kontaktaufnahme',
        contactBody:
          'Wenn du mich per E-Mail kontaktierst, verarbeite ich deine Angaben (E-Mail-Adresse, Inhalt der Nachricht) nur zur Bearbeitung deiner Anfrage.',
        app: 'App',
        appBody1:
          'Knïps speichert Fotos und Einstellungen nur lokal auf deinem Gerät. Es gibt kein Backend, keine Konten. An mich werden keine personenbezogenen Daten aus der App übermittelt.',
        appBody2:
          'Die App kann Kamera, Mediathek und optional Standort anfragen — jeweils nur für die jeweilige Funktion (Fotos aufnehmen/speichern bzw. optional GPS ins Bild).',
        appBody3:
          'Optionaler Druck-Upload erfolgt zum Druckanbieter des gewählten Landes: dm-Foto in Deutschland (foto.dm.de) oder Coop Fotoservice in der Schweiz (photo.coop.ch). Die Datei geht direkt an den gewählten Anbieter, nicht an mich. Knïps ist weder mit dm noch mit Coop verbunden und hat keine kommerzielle Beziehung zu ihnen. Es gelten deren Datenschutzbestimmungen: <a href="https://www.foto.dm.de/datenschutz" target="_blank" rel="noreferrer">dm-Foto</a> und <a href="https://photo.coop.ch/datenschutz.html" target="_blank" rel="noreferrer">Coop Fotoservice</a>.',
        appStore: 'App-Store',
        appStoreBody:
          'Der Download der App erfolgt über den Apple App Store oder den Google Play Store. Dabei verarbeiten Apple bzw. Google eigene Daten (z. B. Kontodaten, Zahlungsdaten, Geräteinformationen), auf die ich keinen Einfluss habe. Es gelten die Datenschutzbestimmungen des jeweiligen Anbieters:',
        apple: 'Apple',
        google: 'Google',
        appleHref: 'https://www.apple.com/legal/privacy/de-ww/',
        googleHref: 'https://policies.google.com/privacy?hl=de',
        website: 'Website (GitHub Pages)',
        websiteBody:
          'Diese Seite wird bei <strong>GitHub Pages</strong> (GitHub Inc. / Microsoft, USA) gehostet. Beim Aufruf speichert GitHub technisch bedingt Server-Logs (u. a. IP-Adresse). Diese Logs werden nach Angaben von GitHub für einen begrenzten Zeitraum gespeichert und dienen ausschließlich der technischen Bereitstellung sowie Sicherheit der Seite. Details: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">GitHub Privacy Statement</a>.',
        rights: 'Rechte',
        rightsBody:
          'Du hast die Rechte nach der DSGVO (u. a. Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit) sowie das Recht, dich bei einer Aufsichtsbehörde zu beschweren (z. B. BayLDA). Da ich keine App-Daten speichere, gibt es bei mir dazu nichts zu löschen oder auszuhändigen.',
      },
      terms: {
        heading: 'Nutzungsbedingungen',
        asOf: 'Stand: 2. September 2026',
        p1: 'Knïps ist eine Kamera-App. Mit der Nutzung der App akzeptierst du diese Bedingungen.',
        p2: 'Du nutzt Knïps auf eigene Gefahr. Ich übernehme keine Verantwortung für verlorene Fotos, kaputte Dateien, Probleme mit Drittanbieter-Diensten oder wenn die App einen schlechten Tag hat.',
        p3: 'Beim Druck-Upload kann die Datei an dm-Foto oder Coop Fotoservice gehen, je nach Land — nicht an mich. Es gibt keine Zusammenarbeit und keine kommerzielle Beziehung mit ihnen.',
        p4: 'Fotos und Einstellungen bleiben auf deinem Gerät. Wenn du zum Druck hochlädst, gelten die Regeln des Anbieters.',
        p5: 'Fragen: <a href="mailto:knips.app@outlook.com">knips.app@outlook.com</a>',
      },
      imprint: {
        heading: 'Impressum',
        legal: 'Angaben gemäß § 5 DDG',
        contact: 'Kontakt',
        responsible: 'Verantwortlich für den Inhalt',
        responsibleBody: 'Sebastian Rosenzweig, Anschrift wie oben',
      },
      footer: { made: 'Entwickelt mit ❤️ in Erlangen.' },
    },
    en: {
      menu: { open: 'Open menu', close: 'Close menu' },
      lang: {
        group: 'Language',
        en: 'English',
        de: 'Deutsch',
        gsw: 'Schwiizerdütsch',
      },
      nav: {
        overview: 'Overview',
        examples: 'Examples',
        terms: 'Terms',
        privacy: 'Privacy',
        contact: 'Contact / Imprint',
      },
      hero: {
        headline: 'Less is more.',
        lead: 'Knïps brings analog photography nostalgia to your phone: load a film roll, shoot, print. Almost like it used to be.',
        shotAlt: 'Flow: create a film roll, take photos, print online, enjoy analog',
        featuresTitle: 'Features',
        feat1: 'Date and place stamps on your photos',
        feat2: 'Custom hashtags on every photo',
        feat3: 'Direct upload for online printing',
        ctaIos: 'Test App (iOS)',
      },
      android: {
        label: 'Android test',
        hint: 'Join the Google Group first, then load the app from the Play testing link.',
        title: 'Android test: group first, then the app',
        join: 'Join the group',
        load: 'Get the app',
      },
      shots: {
        knips: 'Knïps',
        place: 'Place & date stamp',
        hashtag: 'Hashtag',
        alt1: 'knïps app: viewfinder with Summer film roll and date stamp',
        alt2: 'Place and date stamp on the photo in the viewfinder',
        alt3: 'Hashtag in the viewfinder',
      },
      privacy: {
        heading: 'Privacy policy',
        asOf: 'As of: 1 August 2026',
        controller: 'Controller',
        contact: 'Getting in touch',
        contactBody:
          'If you email me, I only use your details (email address, message) to handle your request.',
        app: 'App',
        appBody1:
          'Knïps stores photos and settings only locally on your device. There is no backend, no accounts. No personal data from the app is sent to me.',
        appBody2:
          'The app may request camera, photo library, and optionally location — each only for that feature (taking/saving photos, or optionally GPS on the image).',
        appBody3:
          'Optional print upload goes to the print provider of the chosen country: dm-Foto in Germany (foto.dm.de) or Coop Fotoservice in Switzerland (photo.coop.ch). The file goes directly to the chosen provider, not to me. Knïps is not affiliated with dm or Coop and has no commercial relationship with them. Their privacy policies apply: <a href="https://www.foto.dm.de/datenschutz" target="_blank" rel="noreferrer">dm-Foto</a> and <a href="https://photo.coop.ch/datenschutz.html" target="_blank" rel="noreferrer">Coop Fotoservice</a>.',
        appStore: 'App Store',
        appStoreBody:
          'The app is downloaded through the Apple App Store or Google Play Store. Apple or Google process their own data (e.g. account data, payment data, device information), which I have no control over. The privacy policy of the respective provider applies:',
        apple: 'Apple',
        google: 'Google',
        appleHref: 'https://www.apple.com/legal/privacy/',
        googleHref: 'https://policies.google.com/privacy?hl=en',
        website: 'Website (GitHub Pages)',
        websiteBody:
          'This site is hosted on <strong>GitHub Pages</strong> (GitHub Inc. / Microsoft, USA). When you visit, GitHub stores server logs for technical reasons (including IP address). According to GitHub these logs are kept for a limited time and are used only to serve and secure the site. Details: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">GitHub Privacy Statement</a>.',
        rights: 'Rights',
        rightsBody:
          'You have rights under the GDPR (including access, rectification, erasure, restriction, objection, data portability) and the right to lodge a complaint with a supervisory authority (e.g. BayLDA). Because I do not store app data, there is nothing for me to erase or hand over.',
      },
      terms: {
        heading: 'Terms of Service',
        asOf: 'As of: 2 September 2026',
        p1: 'Knïps is a camera app. By using it you accept these terms.',
        p2: 'You use Knïps at your own risk. I don’t take responsibility for lost photos, broken files, problems with third-party services, or the app having a bad day.',
        p3: 'If you upload for print, the file may go to dm-Foto or Coop Fotoservice, depending on country — not to me. There is no collaboration and no commercial relationship with them.',
        p4: 'Photos and settings stay on your device. If you upload for print, that provider’s rules apply.',
        p5: 'Questions: <a href="mailto:knips.app@outlook.com">knips.app@outlook.com</a>',
      },
      imprint: {
        heading: 'Imprint',
        legal: 'Angaben gemäß § 5 DDG',
        contact: 'Contact',
        responsible: 'Responsible for the content',
        responsibleBody: 'Sebastian Rosenzweig, address as above',
      },
      footer: { made: 'Made with ❤️ in Erlangen.' },
    },
    gsw: {
      menu: { open: 'Menü uufmache', close: 'Menü zue' },
      lang: {
        group: 'Sprooch',
        en: 'English',
        de: 'Deutsch',
        gsw: 'Schwiizerdütsch',
      },
      nav: {
        overview: 'Allgmein',
        examples: 'Biispiil',
        terms: 'Nutzig',
        privacy: 'Dateschutz',
        contact: 'Kontakt / Impressum',
      },
      hero: {
        headline: 'Weniger isch meh.',
        lead: 'Knïps bringt der d Nostalgi vo analoge Fotografii uf dis Smartphone: Filmrolle iileege, fotografiere, drucke. Fast wie früener.',
        shotAlt: 'Ablauf: Filmrolle erstelle, Fotos knipse, online drucke, analog gniessse',
        featuresTitle: 'Features',
        feat1: 'Ziit- und Ortsstämpel für dini Bilder',
        feat2: 'Individuelli Hashtags uf jedem Foto',
        feat3: 'Direkt ufelade zum online drucke',
        ctaIos: 'Test App (iOS)',
      },
      android: {
        label: 'Android-Test',
        hint: 'Zerscht de Google-Gruppe biitrete, denn d App über de Play-Testlink lade.',
        title: 'Android-Test: zerscht Gruppe, denn d App',
        join: 'Gruppe biitrete',
        load: 'App lade',
      },
      shots: {
        knips: 'Knïps',
        place: 'Ort & Ziitstämpel',
        hashtag: 'Hashtag-Funkzion',
        alt1: 'knïps App: Suecher mit Filmrolle Summer und Ziitstämpel',
        alt2: 'Ort- und Ziitstämpel uf em Foto im Suecher',
        alt3: 'Hashtag-Funkzion im Suecher',
      },
      privacy: {
        heading: 'Dateschutzerklärig',
        asOf: 'Stand: 1. Auguscht 2026',
        controller: 'Verantwortliche',
        contact: 'Kontaktufnaam',
        contactBody:
          'Wänn du mich per E-Mail kontaktierst, verarbeit i dini Aagabe (E-Mail-Adrässe, Inhalt vo de Nachricht) nur zum dini Aafrog bearbeite.',
        app: 'App',
        appBody1:
          'Knïps spycheret Fotos und Iistellige nur lokal uf dim Grät. Es git keis Backend, kei Konte. A mich wärded kei persönlichi Date us de App übermittlet.',
        appBody2:
          'D App cha Kamera, Mediathek und optional Standort aafroge — jewiils nur für die jewiilig Funkzion (Fotos ufnee/spychere bzw. optional GPS ins Bild).',
        appBody3:
          'Optionals Druck-Ufelade goot a de Druckaabieter vom gwählte Land: dm-Foto i Tüütschland (foto.dm.de) oder Coop Fotoservice i de Schwiiz (photo.coop.ch). D Datei goot direkt a de gwählt Aabieter, nöd a mich. Knïps isch weder mit dm no mit Coop verbunde und hät kei kommerzielli Bezieig zuene. Es gälted deren Dateschutzbestimmige: <a href="https://www.foto.dm.de/datenschutz" target="_blank" rel="noreferrer">dm-Foto</a> und <a href="https://photo.coop.ch/datenschutz.html" target="_blank" rel="noreferrer">Coop Fotoservice</a>.',
        appStore: 'App-Store',
        appStoreBody:
          'De Download vo de App lauft über de Apple App Store oder de Google Play Store. Debii verarbeited Apple bzw. Google eigeni Date (z. B. Kontodate, Zaaligsdate, Grätinformatione), uf die ich kei Iifluss ha. Es gälted d Dateschutzbestimmige vom jewiilige Aabieter:',
        apple: 'Apple',
        google: 'Google',
        appleHref: 'https://www.apple.com/legal/privacy/de-ww/',
        googleHref: 'https://policies.google.com/privacy?hl=de',
        website: 'Website (GitHub Pages)',
        websiteBody:
          'Die Siite wird bi <strong>GitHub Pages</strong> (GitHub Inc. / Microsoft, USA) ghoschtet. Bim Ufruef spycheret GitHub us technische Gründ Server-Logs (u. a. IP-Adrässe). Die Logs wärded nach Aagabe vo GitHub für e begränzti Ziit gspycheret und diened nur de technische Bereitstellig und de Sicherheit vo de Siite. Details: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">GitHub Privacy Statement</a>.',
        rights: 'Rächt',
        rightsBody:
          'Du hesch d Rächt nach de DSGVO (u. a. Uuskunft, Berichtigig, Löschig, Iischränkig, Widerspruch, Dateüberträitbarkeit) und s Rächt, dich bi ere Uufsichtsbehörd z beschwäre (z. B. BayLDA). Wil ich kei App-Date spychere, git s bi mir nüt zum lösche oder aashändige.',
      },
      terms: {
        heading: 'Nutzigsbedingige',
        asOf: 'Stand: 2. Septämber 2026',
        p1: 'Knïps isch e Kamera-App. Wänn du si bruchsch, akzeptierst du die Bedingige.',
        p2: 'Du bruchsch Knïps uf eigeti Gfahr. Ich übernimm kei Verantwortig für verloreni Fotos, kaputti Dateie, Problem mit Drittaabieter-Dienscht oder wänn d App en schlechte Tag hät.',
        p3: 'Bim Druck-Ufelade cha d Datei a dm-Foto oder Coop Fotoservice goh, je nach Land — nöd a mich. Es git kei Zämearbet und kei kommerzielli Bezieig mit ene.',
        p4: 'Fotos und Iistellige bliibed uf dim Grät. Wänn du zum Druck ufeladisch, gälted d Regle vom Aabieter.',
        p5: 'Frooge: <a href="mailto:knips.app@outlook.com">knips.app@outlook.com</a>',
      },
      imprint: {
        heading: 'Impressum',
        legal: 'Angaben gemäß § 5 DDG',
        contact: 'Kontakt',
        responsible: 'Verantwortlich für den Inhalt',
        responsibleBody: 'Sebastian Rosenzweig, Anschrift wie oben',
      },
      footer: { made: 'Mit ❤️ entwicklet z Erlange.' },
    },
  };

  function lookup(obj, path) {
    return path.split('.').reduce(function (cur, key) {
      return cur == null ? cur : cur[key];
    }, obj);
  }

  function isLang(value) {
    return LANGS.indexOf(value) !== -1;
  }

  /** Same mapping as the app: de-CH → gsw, other de → de, en → en, else en. */
  function mapLanguageTag(tag) {
    if (!tag) return 'en';
    var lower = String(tag).replace(/_/g, '-').toLowerCase();
    if (lower === 'gsw' || lower.indexOf('gsw-') === 0) return 'gsw';
    if (lower === 'de-ch' || lower.indexOf('de-ch-') === 0) return 'gsw';
    if (lower === 'de' || lower.indexOf('de-') === 0) return 'de';
    if (lower === 'en' || lower.indexOf('en-') === 0) return 'en';
    return 'en';
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
    } catch (e) { /* ignore */ }
    var nav = navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    return mapLanguageTag(nav);
  }

  var current = detectLang();
  var listeners = [];

  function t(key) {
    var val = lookup(catalogs[current], key);
    if (val == null) val = lookup(catalogs.de, key);
    return val == null ? key : val;
  }

  function apply(lang) {
    if (!isLang(lang)) return;
    current = lang;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = lookup(catalogs[lang], el.getAttribute('data-i18n'));
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = lookup(catalogs[lang], el.getAttribute('data-i18n-html'));
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var val = lookup(catalogs[lang], el.getAttribute('data-i18n-alt'));
      if (val != null) el.setAttribute('alt', val);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var val = lookup(catalogs[lang], el.getAttribute('data-i18n-title'));
      if (val != null) el.setAttribute('title', val);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = lookup(catalogs[lang], el.getAttribute('data-i18n-aria'));
      if (val != null) el.setAttribute('aria-label', val);
    });
    document.querySelectorAll('[data-i18n-href]').forEach(function (el) {
      var val = lookup(catalogs[lang], el.getAttribute('data-i18n-href'));
      if (val != null) {
        el.setAttribute('href', val);
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var on = btn.getAttribute('data-lang-btn') === lang;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.classList.toggle('is-active', on);
    });

    var menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
    }

    listeners.forEach(function (fn) {
      fn(lang);
    });
  }

  function setLang(lang) {
    if (!isLang(lang) || lang === current) {
      apply(lang);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
    apply(lang);
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang-btn'));
    });
  });

  apply(current);

  window.knipsI18n = { t: t, setLang: setLang, getLang: function () { return current; }, onChange: onChange };
})();
