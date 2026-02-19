export type Lang = 'en' | 'de' | 'hi' | 'mr'

export const langLabels: Record<Lang, string> = {
  en: 'English',
  de: 'Deutsch',
  hi: 'हिन्दी',
  mr: 'मराठी',
}

type FAQItem = { q: string; a: string | string[] }

type Translations = {
  landing: {
    heroTitle: string
    heroWeMarry: string
    heroDate: string
    heroPlace: string
    rsvpTitle: string
    rsvpDesc: string
    rsvpButton: string
    calendarTitle: string
    calendarDesc: string
    calendarGoogle: string
    calendarApple: string
    faqTitle: string
    faqDesc: string
    faqButton: string
    contactTitle: string
    contactAntonia: string
    contactSuwardhan: string
  }
  faq: {
    back: string
    title: string
    subtitle: string
    moreQuestions: string
    backToHome: string
    items: FAQItem[]
  }
}

function faqDe(): FAQItem[] {
  return [
    { q: 'Wann und wo findet die Hochzeit statt?', a: 'Die indische Hochzeitszeremonie ist am 11. Februar 2027 in Dhadane, Indien. Anreise aus Mumbai zur Hochzeitslocation (8.–9. Februar) und Abreise zurück nach Mumbai (12. Februar) werden von uns organisiert und übernommen.' },
    { q: 'Was ist der Ablauf?', a: ['08.–09. Februar: Anreise von Mumbai zur Hochzeitslocation (von uns organisiert).', '09. Februar: Mehandi der Braut.', '10. Februar: Halad-Zeremonie und Feier.', '11. Februar: Indische Hochzeitszeremonie.', '12. Februar: Abreise zurück nach Mumbai (von uns organisiert).', 'Die Unterkunft in den Nächten vom 9. und 10. Februar wird von uns organisiert und übernommen.'] },
    { q: 'Brauche ich ein Visum für Indien?', a: 'Ja. Deutsche Staatsbürger benötigen für die Einreise nach Indien ein Visum. Ihr könnt ein e-Visa online beantragen (touristisch oder für Veranstaltungen). Antrag über die offizielle indische e-Visa-Webseite stellen; Bearbeitung dauert meist wenige Tage. Reisepass sollte noch mindestens 6 Monate gültig sein. Bei Fragen helfen wir gern.' },
    { q: 'Was erwartet mich als Gast aus Deutschland?', a: 'Indien ist bunt, lebhaft und anders als Deutschland: mehr Menschen, mehr Gerüche und Geräusche, andere Essgewohnheiten. An der Hochzeitslocation rechnet mit Temperaturen um 30–34 °C. Die Zeremonien sind traditionell und farbenfroh. Wir freuen uns, euch unsere Kultur ein Stück näherzubringen.' },
    { q: 'Unterkunft und Übernachtung', a: 'Die Übernachtungen in den Nächten vom 9. und 10. Februar an der Hochzeitslocation werden von uns organisiert und übernommen. Ihr müsst euch darum nicht kümmern.' },
    { q: 'Anreise von Mumbai zum Veranstaltungsort', a: 'Die Fahrt von Mumbai zur Hochzeitslocation (Anreise 8.–9. Februar) und zurück nach Mumbai (12. Februar) wird von uns organisiert und übernommen. Ihr müsst nur eure An- und Abreise nach bzw. von Mumbai planen.' },
    { q: 'Kann ich die Reise verlängern?', a: 'Ja. Ihr könnt vor der Hochzeit nach Indien reisen und die Hochzeit ans Ende eurer Reise legen – oder umgekehrt: zuerst zur Hochzeit kommen und danach noch reisen. Sagt uns einfach Bescheid, wann ihr an- und abreist, damit wir die Transfers planen können.' },
    { q: 'Was soll ich anziehen?', a: 'Zur Zeremonie ist festliche, dezente Kleidung angebracht. Bei 30–34 °C sind leichte, atmungsaktive Stoffe angenehm. Traditionell werden bei indischen Hochzeiten oft bunte Kleidung getragen – gerne auch Saris oder Kurtas, wenn ihr möchtet. Wir geben bei Bedarf gern Tipps.' },
    { q: 'Gesundheit und Impfungen', a: 'Für Indien werden je nach Reiseroute u. a. Impfungen gegen Hepatitis A, ggf. Typhus und eine Auffrischung Tetanus/Diphtherie empfohlen. Bitte sprecht rechtzeitig mit eurem Hausarzt oder einem Reisemediziner.' },
  ]
}

export const translations: Record<Lang, Translations> = {
  en: {
    landing: {
      heroTitle: 'Antonia & Suwardhan',
      heroWeMarry: 'Save the date',
      heroDate: '11 February 2027',
      heroPlace: 'Dhadane, India',
      rsvpTitle: 'RSVP',
      rsvpDesc: 'Please let us know if you can join us.',
      rsvpButton: 'Open RSVP form',
      calendarTitle: 'Add to calendar',
      calendarDesc: 'Add the wedding to your calendar.',
      calendarGoogle: 'Calendar for Android',
      calendarApple: 'Calendar for iPhone',
      faqTitle: 'FAQ',
      faqDesc: 'Visa, travel, accommodation and more for guests from outside India.',
      faqButton: 'View FAQ',
      contactTitle: 'Questions? Contact:',
      contactAntonia: 'WhatsApp Antonia +49 171 29 59 624',
      contactSuwardhan: 'WhatsApp Suwardhan +49 176 68 46 379',
    },
    faq: {
      back: 'Back',
      title: 'FAQ',
      subtitle: 'Info for guests from outside India: visa, travel, accommodation and what to expect.',
      moreQuestions: 'More questions?',
      backToHome: 'Back to home',
      items: [
        { q: 'When and where is the wedding?', a: 'The Indian wedding ceremony is on 11 February 2027 in Dhadane, India. Travel from Mumbai to the venue (8–9 February) and back to Mumbai (12 February) is organised and covered by us.' },
        { q: 'What is the schedule?', a: ['8–9 Feb: Travel from Mumbai to the venue (organised by us).', '9 Feb: Bride\'s Mehendi.', '10 Feb: Halad ceremony and celebration.', '11 Feb: Indian wedding ceremony.', '12 Feb: Return to Mumbai (organised by us).', 'Accommodation on the nights of 9 and 10 February is organised and covered by us.'] },
        { q: 'Do I need a visa for India?', a: 'Yes. German citizens need a visa to enter India. You can apply for an e-Visa online (tourist or for events). Apply via the official Indian e-Visa website; processing usually takes a few days. Your passport should be valid for at least 6 months. We’re happy to help if you have questions.' },
        { q: 'What can I expect as a guest from Germany?', a: 'India is colourful, lively and different from Germany: more people, more sounds and smells, different food. At the venue expect temperatures around 30–34 °C. The ceremonies are traditional and colourful. We look forward to sharing our culture with you.' },
        { q: 'Accommodation', a: 'Accommodation on the nights of 9 and 10 February at the venue is organised and covered by us. You don’t need to arrange anything.' },
        { q: 'Travel from Mumbai to the venue', a: 'Transport from Mumbai to the venue (8–9 February) and back to Mumbai (12 February) is organised and covered by us. You only need to plan your travel to and from Mumbai.' },
        { q: 'Can I extend my trip?', a: 'Yes. You can come to India before the wedding and have the wedding at the end of your trip, or the other way around. Just let us know your arrival and departure dates so we can plan the transfers.' },
        { q: 'What should I wear?', a: 'For the ceremony, festive, modest clothing is appropriate. At 30–34 °C, light, breathable fabrics are best. At Indian weddings people often wear colourful clothes – saris or kurtas are welcome. We’re happy to give tips if needed.' },
        { q: 'Health and vaccinations', a: 'For India, vaccinations such as Hepatitis A, possibly Typhoid, and a Tetanus/Diphtheria booster are often recommended. Please check with your doctor or a travel clinic in good time.' },
      ],
    },
  },
  de: {
    landing: {
      heroTitle: 'Antonia & Suwardhan',
      heroWeMarry: 'Merkt euch den Termin',
      heroDate: '11. Februar 2027',
      heroPlace: 'Dhadane, Indien',
      rsvpTitle: 'RSVP',
      rsvpDesc: 'Bitte gebt uns Bescheid, ob ihr dabei seid.',
      rsvpButton: 'Zur RSVP-Umfrage',
      calendarTitle: 'Termin im Kalender',
      calendarDesc: 'Fügt die Hochzeit zu eurem Kalender hinzu.',
      calendarGoogle: 'Kalender für Android',
      calendarApple: 'Kalender für iPhone',
      faqTitle: 'Häufige Fragen',
      faqDesc: 'Visa, Anreise, Unterkunft und mehr für Gäste von außerhalb Indiens.',
      faqButton: 'FAQ ansehen',
      contactTitle: 'Fragen? Kontakt:',
      contactAntonia: 'WhatsApp Antonia +49 171 29 59 624',
      contactSuwardhan: 'WhatsApp Suwardhan +49 176 68 46 379',
    },
    faq: {
      back: 'Zurück',
      title: 'Häufige Fragen',
      subtitle: 'Infos für Gäste von außerhalb Indiens: Visa, Anreise, Unterkunft und was euch erwartet.',
      moreQuestions: 'Weitere Fragen?',
      backToHome: 'Zurück zur Startseite',
      items: faqDe(),
    },
  },
  hi: {
    landing: {
      heroTitle: 'Antonia & Suwardhan',
      heroWeMarry: 'तारीख याद रखें',
      heroDate: '11 फरवरी 2027',
      heroPlace: 'धाडणे, भारत',
      rsvpTitle: 'RSVP',
      rsvpDesc: 'कृपया बताएं कि आप आ सकते हैं।',
      rsvpButton: 'RSVP फॉर्म खोलें',
      calendarTitle: 'कैलेंडर में जोड़ें',
      calendarDesc: 'शादी को अपने कैलेंडर में जोड़ें।',
      calendarGoogle: 'Calendar for Android',
      calendarApple: 'Calendar for iPhone',
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
      faqDesc: 'भारत के बाहर के मेहमानों के लिए वीज़ा, यात्रा, रुकने की जगह।',
      faqButton: 'FAQ देखें',
      contactTitle: 'सवाल? संपर्क:',
      contactAntonia: 'WhatsApp Antonia +49 171 29 59 624',
      contactSuwardhan: 'WhatsApp Suwardhan +49 176 68 46 379',
    },
    faq: {
      back: 'वापस',
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      subtitle: 'भारत के बाहर के मेहमानों के लिए: वीज़ा, यात्रा, रुकने की जगह और क्या उम्मीद करें।',
      moreQuestions: 'और सवाल?',
      backToHome: 'वापस होम पर',
      items: [
        { q: 'शादी कब और कहाँ है?', a: 'भारतीय विवाह समारोह 11 फरवरी 2027 को धाडणे, भारत में है। मुंबई से वेन्यू तक (8–9 फरवरी) और वापस मुंबई (12 फरवरी) की यात्रा हम आयोजित और वहन करेंगे।' },
        { q: 'कार्यक्रम क्या है?', a: ['8–9 फरवरी: मुंबई से वेन्यू तक यात्रा।', '9 फरवरी: दुल्हन की मेहंदी।', '10 फरवरी: हलद समारोह और जश्न।', '11 फरवरी: भारतीय विवाह।', '12 फरवरी: मुंबई वापसी।', '9 और 10 फरवरी की रातों में ठहरने का इंतजाम हम करेंगे।'] },
        { q: 'भारत के लिए वीज़ा चाहिए?', a: 'हाँ। जर्मन नागरिकों को भारत में प्रवेश के लिए वीज़ा चाहिए। आप ऑनलाइन e-Visa ले सकते हैं। पासपोर्ट कम से कम 6 महीने वैध होना चाहिए।' },
        { q: 'जर्मनी से मेहमान के रूप में क्या उम्मीद करें?', a: 'भारत रंगीन और जीवंत है। वेन्यू पर तापमान लगभग 30–34 °C। समारोह पारंपरिक और रंगीन होंगे।' },
        { q: 'ठहरने की जगह', a: '9 और 10 फरवरी की रातों में वेन्यू पर ठहरने का इंतजाम हम करेंगे।' },
        { q: 'मुंबई से वेन्यू तक यात्रा', a: 'मुंबई से वेन्यू और वापस की यात्रा हम आयोजित करेंगे। आपको बस मुंबई आने-जाने की योजना बनानी है।' },
        { q: 'क्या मैं यात्रा बढ़ा सकता/सकती हूँ?', a: 'हाँ। आप शादी से पहले भारत आ सकते हैं या शादी के बाद और घूम सकते हैं। बस हमें आने-जाने की तारीखें बता दें।' },
        { q: 'क्या पहनूँ?', a: 'समारोह के लिए उत्सव वाले, स modest कपड़े। 30–34 °C में हल्के कपड़े आरामदायक। साड़ी या कुर्ता पहन सकते हैं।' },
        { q: 'स्वास्थ्य और टीके', a: 'भारत के लिए हेपेटाइटिस A, टाइफाइड आदि की सलाह दी जाती है। समय रहते डॉक्टर से पूछें।' },
      ],
    },
  },
  mr: {
    landing: {
      heroTitle: 'Antonia & Suwardhan',
      heroWeMarry: 'तारीख जतन करा',
      heroDate: '11 फेब्रुवारी 2027',
      heroPlace: 'धाडणे, भारत',
      rsvpTitle: 'RSVP',
      rsvpDesc: 'कृपया सांगा की तुम्ही येणार का.',
      rsvpButton: 'RSVP फॉर्म उघडा',
      calendarTitle: 'कॅलेंडरात जोडा',
      calendarDesc: 'लग्न तुमच्या कॅलेंडरात जोडा.',
      calendarGoogle: 'Calendar for Android',
      calendarApple: 'Calendar for iPhone',
      faqTitle: 'वारंवार विचारलेले प्रश्न',
      faqDesc: 'भारताबाहेरून पाहुण्यांसाठी व्हिसा, प्रवास, राहण्याची व्यवस्था.',
      faqButton: 'FAQ पहा',
      contactTitle: 'प्रश्न? संपर्क:',
      contactAntonia: 'WhatsApp Antonia +49 171 29 59 624',
      contactSuwardhan: 'WhatsApp Suwardhan +49 176 68 46 379',
    },
    faq: {
      back: 'मागे',
      title: 'वारंवार विचारलेले प्रश्न',
      subtitle: 'भारताबाहेरून पाहुण्यांसाठी: व्हिसा, प्रवास, राहणे आणि काय अपेक्षित आहे.',
      moreQuestions: 'अजून प्रश्न?',
      backToHome: 'मुख्यपृष्ठावर परत',
      items: [
        { q: 'लग्न कधी आणि कुठे?', a: 'भारतीय विवाह 11 फेब्रुवारी 2027 रोजी धाडणे, भारतात. मुंबईहून वेन्यू पर्यंत (8–9 फेब्रुवारी) आणि परत मुंबई (12 फेब्रुवारी) प्रवास आम्ही आयोजित करतो.' },
        { q: 'कार्यक्रम काय आहे?', a: ['8–9 फेब्रुवारी: मुंबईहून वेन्यू पर्यंत.', '9: मेहेंदी.', '10: हळद समारोह.', '11: लग्न.', '12: मुंबई परत.', '9 आणि 10 फेब्रुवारी रात्री राहण्याची व्यवस्था आम्ही करतो.'] },
        { q: 'भारतासाठी व्हिसा लागतो?', a: 'होय. जर्मन नागरिकांना भारतात प्रवेशासाठी व्हिसा लागतो. ऑनलाइन e-Visa घेता येते. पासपोर्ट किमान 6 महिने वैध असावा.' },
        { q: 'जर्मनीहून पाहुणे म्हणून काय अपेक्षित?', a: 'भारत रंगीत आणि जिवंत. वेन्यूवर तापमान सुमारे 30–34 °C. समारोह पारंपरिक आणि रंगीत.' },
        { q: 'राहण्याची व्यवस्था', a: '9 आणि 10 फेब्रुवारी रात्री वेन्यूवर राहण्याची व्यवस्था आम्ही करतो.' },
        { q: 'मुंबईहून वेन्यू पर्यंत प्रवास', a: 'मुंबई ते वेन्यू आणि परत प्रवास आम्ही आयोजित करतो. तुम्हाला फक्त मुंबई येणे-जाणे प्लॅन करायचे.' },
        { q: 'ट्रिप वाढवता येईल?', a: 'होय. लग्नापूर्वी भारतात येऊन लग्न ट्रिपच्या शेवटी ठेवू शकता किंवा उलट. आगमन-निर्गमन कळवा.' },
        { q: 'काय नेसावं?', a: 'समारोहासाठी सणाचे, सभ्य कपडे. 30–34 °C मध्ये हलके कपडे. साडी/कुर्ता घालू शकता.' },
        { q: 'आरोग्य आणि लसीकरण', a: 'भारतासाठी हेपॅटायटिस A, टायफॉइड इ. शिफारस केली जाते. वेळी डॉक्टरांशी बोला.' },
      ],
    },
  },
}

function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o != null && typeof o === 'object' ? (o as Record<string, unknown>)[k] : undefined), obj)
}

export function t(lang: Lang, key: string): string {
  const val = getNested(translations[lang] as unknown as Record<string, unknown>, key)
  if (typeof val === 'string') return val
  return key
}
