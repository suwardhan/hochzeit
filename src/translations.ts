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
    calendarButton: string
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
    { q: 'Wann und wo findet die Hochzeit statt?', a: 'Die indische Hochzeitszeremonie ist am 11. Februar 2027 in Dhadane, Indien. Die Anreise von Mumbai zur Hochzeitslocation (9. Februar) und die Rückfahrt nach Mumbai (12. Februar) werden von uns organisiert und übernommen.' },
    { q: 'Was ist der Ablauf?', a: ['9. Feb: Anreise von Mumbai zur Hochzeitslocation (6–8 Std., von uns organisiert).', '9. Feb: Mehendi der Braut.', '10. Feb: Halad-Zeremonie und Feier.', '11. Feb: Indische Hochzeitszeremonie.', '12. Feb: Rückfahrt nach Mumbai (von uns organisiert).', 'Die Unterkunft in den Nächten vom 9. bis 12. Februar wird von uns organisiert und übernommen.'] },
    { q: 'Brauche ich ein Visum für Indien?', a: 'Ja. Deutsche Staatsbürger benötigen für die Einreise nach Indien ein Visum. Ihr könnt ein e-Visa online beantragen (touristisch oder für Veranstaltungen). Stellt den Antrag über die offizielle indische e-Visa-Webseite; die Bearbeitung dauert meist wenige Tage. Euer Reisepass sollte noch mindestens 6 Monate gültig sein. Die meisten Besucher müssen zudem spätestens 72 Stunden vor Ankunft in Indien eine e-Arrival-Karte unter boi.gov.in ausfüllen. Bei Fragen helfen wir gern.' },
    { q: 'Was erwartet mich als Gast aus Deutschland?', a: 'Indien ist bunt, lebhaft und anders als Deutschland: mehr Menschen, mehr Geräusche und Düfte, anderes Essen. An der Hochzeitslocation rechnet mit Temperaturen um 30–34 °C. Die Zeremonien sind traditionell und farbenfroh. Wir freuen uns, euch unsere Kultur ein Stück näherzubringen.' },
    { q: 'Unterkunft und Übernachtung', a: 'Die Übernachtungen in den Nächten vom 9. bis 12. Februar an der Hochzeitslocation werden von uns organisiert und übernommen. Für diese Termine müsst ihr euch um nichts kümmern. Je nach Zimmeraufteilung vor Ort kann es sein, dass ihr euch ein Zimmer mit anderen Gästen teilt. Weitere Details folgen.' },
    { q: 'Anreise von Mumbai zum Veranstaltungsort', a: 'Die Fahrt von Mumbai zur Hochzeitslocation (9. Februar) und zurück nach Mumbai (12. Februar) wird von uns organisiert und übernommen. Die Fahrt dauert jeweils etwa 6–8 Stunden, mit ausreichend Pausen für Essen und Getränke unterwegs. Ihr müsst nur eure An- und Abreise nach bzw. von Mumbai planen.\n\nBitte teilt uns eure Reisedaten rechtzeitig mit, damit wir die Beförderung am 9. und 12. Februar planen können.' },
    { q: 'Kann ich die Reise verlängern?', a: 'Ja. Ihr könnt vor der Hochzeit nach Indien reisen und die Hochzeit ans Ende eurer Reise legen – oder umgekehrt. Sagt uns einfach Bescheid, wann ihr an- und abreist, damit wir die Beförderung planen können.' },
    { q: 'Was soll ich anziehen?', a: 'Bei indischen Hochzeiten trägt man oft bunte Kleidung – Saris, Lehengas und Kurtas sind willkommen. Aber auch klassische westliche Hochzeitsgast-Kleidung ist völlig in Ordnung. Am wichtigsten ist, dass ihr euch wohlfühlt und den Tag genießt. Wir geben bei Bedarf gern Tipps.\n\nFür den Rest eurer Zeit in Indien rechnet mit warmem Wetter (um die 30–34 °C). Leichte, atmungsaktive Stoffe sind die beste Wahl.' },
    { q: 'Gesundheit und Impfungen', a: 'Für Indien werden oft Impfungen gegen Hepatitis A, Typhus sowie eine Auffrischung Tetanus/Diphtherie empfohlen. Bitte sprecht rechtzeitig mit eurem Arzt oder einer reisemedizinischen Beratungsstelle.' },
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
      calendarDesc: 'Subscribe to get event details, travel, and accommodation info. More details to come.',
      calendarButton: 'Subscribe to calendar',
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
        { q: 'When and where is the wedding?', a: 'The Indian wedding ceremony is on 11 February 2027 in Dhadane, India. Travel from Mumbai to the venue (9 February) and back to Mumbai (12 February) is organised and covered by us.' },
        { q: 'What is the schedule?', a: ['9 Feb: Travel from Mumbai to the wedding venue (6-8 hours) organised by us.', '9 Feb: Bride\'s Mehendi.', '10 Feb: Halad ceremony and celebration.', '11 Feb: Indian wedding ceremony.', '12 Feb: Return to Mumbai (organised by us).', 'Accommodation on the nights of 9-12 February is organised and covered by us.'] },
        { q: 'Do I need a visa for India?', a: 'Yes. German citizens need a visa to enter India. You can apply for an e-Visa online (tourist or for events). Apply via the official Indian e-Visa website; processing usually takes a few days. Your passport should be valid for at least 6 months. Most visitors need to fill in an e-Arrival card online 72 hrs before arrival in India at boi.gov.in. We’re happy to help if you have questions.' },
        { q: 'What can I expect as a guest from Germany?', a: 'India is colourful, lively and different from Germany: more people, more sounds and scents, different food. At the venue expect temperatures around 30–34 °C. The ceremonies are traditional and colourful. We look forward to sharing our culture with you.' },
        { q: 'Accommodation', a: 'Accommodation on the nights of 9-12 February at the venue is organised and covered by us. You don’t need to arrange anything for these dates. Depending on the room configuration at the venue, you may have to share a room with other guests. More details to come.' },
        { q: 'Travel from Mumbai to the venue', a: 'Transport from Mumbai to the venue (9 February) and back to Mumbai (12 February) is organised and covered by us. The journey takes around 6–8 hours each way, with sufficient breaks for food and drinks along the way. You only need to plan your travel to and from Mumbai.\n\nPlease inform us of your itinerary in advance so we can plan the transportation on 9 and 12 February.' },
        { q: 'Can I extend my trip?', a: 'Yes. You can come to India before the wedding and have the wedding at the end of your trip, or the other way around. Just let us know your arrival and departure dates so we can plan the transportation.' },
        { q: 'What should I wear?', a: 'At Indian weddings, people often wear colourful clothes – saris, lehengas and kurtas are welcome. But typical western wedding guest attire is also fine. Most importantly, we want you to feel comfortable and enjoy yourself. We’re happy to give tips if needed.\n\nFor the rest of your time in India, expect warm weather (around 30–34 °C). Light, breathable fabrics are your best choice.' },
        { q: 'Health and vaccinations', a: 'For India, vaccinations such as Hepatitis A, Typhoid, and a Tetanus/Diphtheria booster are often recommended. Please check with your doctor or a travel clinic in good time.' },
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
      calendarDesc: 'Abonniert den Kalender für Termine, Anreise und Unterkunft. Weitere Infos folgen.',
      calendarButton: 'Kalender abonnieren',
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
      calendarDesc: 'इवेंट डिटेल्स, यात्रा और ठहरने की जानकारी के लिए सब्सक्राइब करें। और जानकारी जल्द।',
      calendarButton: 'कैलेंडर सब्सक्राइब करें',
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
        { q: 'शादी कब और कहाँ है?', a: 'भारतीय विवाह समारोह 11 फरवरी 2027 को धाडणे, भारत में है। मुंबई से वेन्यू तक (9 फरवरी) और वापस मुंबई (12 फरवरी) की यात्रा हम आयोजित और वहन करेंगे।' },
        { q: 'कार्यक्रम क्या है?', a: ['9 फरवरी: मुंबई से वेन्यू तक यात्रा (6–8 घंटे, हमारे द्वारा आयोजित)।', '9 फरवरी: दुल्हन की मेहंदी।', '10 फरवरी: हलद समारोह और जश्न।', '11 फरवरी: भारतीय विवाह समारोह।', '12 फरवरी: मुंबई वापसी (हमारे द्वारा आयोजित)।', '9 से 12 फरवरी की रातों में ठहरने का इंतजाम हम करेंगे।'] },
        { q: 'भारत के लिए वीज़ा चाहिए?', a: 'हाँ। जर्मन नागरिकों को भारत में प्रवेश के लिए वीज़ा चाहिए। आप ऑनलाइन e-Visa के लिए आवेदन कर सकते हैं (पर्यटन या कार्यक्रम के लिए)। आधिकारिक भारतीय e-Visa वेबसाइट के ज़रिए आवेदन करें; प्रक्रिया में आमतौर पर कुछ दिन लगते हैं। आपका पासपोर्ट कम से कम 6 महीने वैध होना चाहिए। ज़्यादातर आगंतुकों को भारत आने से 72 घंटे पहले boi.gov.in पर ऑनलाइन e-Arrival कार्ड भरना होता है। सवाल हों तो हम मदद के लिए हैं।' },
        { q: 'जर्मनी से मेहमान के रूप में क्या उम्मीद करें?', a: 'भारत रंगीन, जीवंत है और जर्मनी से अलग है: ज़्यादा लोग, अलग आवाज़ें और खुशबूएँ, अलग खाना। वेन्यू पर तापमान लगभग 30–34 °C रहने की उम्मीद करें। समारोह पारंपरिक और रंगीन होंगे। हम आपके साथ अपनी संस्कृति साझा करने के लिए उत्सुक हैं।' },
        { q: 'ठहरने की जगह', a: '9 से 12 फरवरी की रातों में वेन्यू पर ठहरने का इंतजाम हम करेंगे। इन तारीखों के लिए आपको कुछ व्यवस्था करने की ज़रूरत नहीं। वेन्यू पर कमरों की व्यवस्था के हिसाब से आपको दूसरे मेहमानों के साथ कमरा साझा करना पड़ सकता है। और जानकारी जल्द।' },
        { q: 'मुंबई से वेन्यू तक यात्रा', a: 'मुंबई से वेन्यू (9 फरवरी) और वापस मुंबई (12 फरवरी) तक की यात्रा हम आयोजित और वहन करेंगे। हर तरफ का सफर लगभग 6–8 घंटे का है, रास्ते में खाने-पीने के लिए पर्याप्त ब्रेक होंगे। आपको बस मुंबई आने-जाने की योजना बनानी है।\n\nकृपया हमें अपनी यात्रा की जानकारी पहले से बता दें ताकि हम 9 और 12 फरवरी के लिए परिवहन की व्यवस्था कर सकें।' },
        { q: 'क्या मैं यात्रा बढ़ा सकता/सकती हूँ?', a: 'हाँ। आप शादी से पहले भारत आ सकते हैं और शादी को अपनी यात्रा के अंत में रख सकते हैं, या उल्टा। बस हमें अपने आने-जाने की तारीखें बता दें ताकि हम परिवहन की व्यवस्था कर सकें।' },
        { q: 'क्या पहनूँ?', a: 'भारतीय शादियों में लोग अक्सर रंगीन कपड़े पहनते हैं – साड़ी, लहंगा और कुर्ता स्वागतयोग्य हैं। लेकिन पश्चिमी शादी के मेहमानों जैसे कपड़े भी ठीक हैं। सबसे ज़रूरी यह है कि आप आरामदायक हों और मज़े करें। ज़रूरत हो तो हम टिप्स दे सकते हैं।\n\nभारत में बाकी समय के लिए गर्म मौसम (लगभग 30–34 °C) की उम्मीद करें। हल्के, हवादार कपड़े सबसे अच्छे रहेंगे।' },
        { q: 'स्वास्थ्य और टीके', a: 'भारत के लिए हेपेटाइटिस A, टाइफाइड और टिटनेस/डिप्थीरिया बूस्टर जैसे टीके अक्सर सलाह दिए जाते हैं। समय रहते अपने डॉक्टर या ट्रैवल क्लिनिक से पूछें।' },
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
      calendarDesc: 'इव्हेंट तपशील, प्रवास आणि राहण्याची माहिती मिळवण्यासाठी सब्सक्राइब करा. अधिक माहिती लवकरच.',
      calendarButton: 'कॅलेंडर सब्सक्राइब करा',
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
        { q: 'लग्न कधी आणि कुठे?', a: 'भारतीय विवाह समारोह 11 फेब्रुवारी 2027 रोजी धाडणे, भारतात आहे. मुंबईहून वेन्यू पर्यंत (9 फेब्रुवारी) आणि परत मुंबई (12 फेब्रुवारी) प्रवास आम्ही आयोजित आणि वहन करतो.' },
        { q: 'कार्यक्रम काय आहे?', a: ['9 फेब्रुवारी: मुंबईहून वेन्यू पर्यंत प्रवास (6–8 तास, आमच्याकडून आयोजित).', '9 फेब्रुवारी: वधूची मेहेंदी.', '10 फेब्रुवारी: हळद समारोह आणि उत्सव.', '11 फेब्रुवारी: भारतीय विवाह समारोह.', '12 फेब्रुवारी: मुंबई परत (आमच्याकडून आयोजित).', '9 ते 12 फेब्रुवारी रात्री राहण्याची व्यवस्था आम्ही करतो.'] },
        { q: 'भारतासाठी व्हिसा लागतो?', a: 'होय. जर्मन नागरिकांना भारतात प्रवेशासाठी व्हिसा लागतो. तुम्ही ऑनलाइन e-Visa साठी अर्ज करू शकता (पर्यटन किंवा कार्यक्रमासाठी). अधिकृत भारतीय e-Visa वेबसाइटद्वारे अर्ज करा; प्रक्रियेस सहसा काही दिवस लागतात. तुमचा पासपोर्ट किमान 6 महिने वैध असावा. बहुतेक अतिथींना भारतात येण्याच्या 72 तास आधी boi.gov.in वर ऑनलाइन e-Arrival कार्ड भरावे लागते. प्रश्न असल्यास आम्ही मदत करण्यास तयार आहोत.' },
        { q: 'जर्मनीहून पाहुणे म्हणून काय अपेक्षित?', a: 'भारत रंगीत, जिवंत आहे आणि जर्मनीपेक्षा वेगळा: जास्त लोक, वेगळे आवाज आणि वास, वेगळे अन्न. वेन्यूवर सुमारे 30–34 °C तापमानाची अपेक्षा करा. समारोह पारंपरिक आणि रंगीत असतील. आम्ही तुमच्याशी आमची संस्कृती सामायिक करण्याची अपेक्षा करतो.' },
        { q: 'राहण्याची व्यवस्था', a: '9 ते 12 फेब्रुवारी रात्री वेन्यूवर राहण्याची व्यवस्था आम्ही करतो. या तारखांसाठी तुम्हाला काही व्यवस्था करण्याची गरज नाही. वेन्यूवरील खोल्यांच्या रचनेनुसार तुम्हाला इतर पाहुण्यांसोबत खोली सामायिक करावी लागू शकते. अधिक तपशील लवकरच.' },
        { q: 'मुंबईहून वेन्यू पर्यंत प्रवास', a: 'मुंबईहून वेन्यू (9 फेब्रुवारी) आणि परत मुंबई (12 फेब्रुवारी) प्रवास आम्ही आयोजित आणि वहन करतो. प्रत्येक बाजूचा प्रवास सुमारे 6–8 तासाचा आहे, वाटेत अन्न आणि पेयांसाठी पुरेशा विश्रांती घेतल्या जातील. तुम्हाला फक्त मुंबई येणे-जाणे नियोजित करायचे आहे.\n\nकृपया आम्हाला तुमच्या प्रवासाची माहिती आधी कळवा जेणेकरून आम्ही 9 आणि 12 फेब्रुवारीसाठी वाहतूक व्यवस्थित करू शकू.' },
        { q: 'ट्रिप वाढवता येईल?', a: 'होय. तुम्ही लग्नापूर्वी भारतात येऊ शकता आणि लग्नाला तुमच्या ट्रिपच्या शेवटी ठेवू शकता, किंवा उलट. आम्हाला आगमन आणि निर्गमन तारखा कळवा जेणेकरून आम्ही वाहतूक व्यवस्थित करू शकू.' },
        { q: 'काय नेसावं?', a: 'भारतीय लग्नात लोक अनेकदा रंगीत कपडे घालतात – साडी, लेहेंगा आणि कुर्ता स्वागतार्ह आहेत. पण पाश्चात्य लग्न पाहुण्यांचे कपडेही चालतील. सर्वात महत्त्वाचे म्हणजे तुम्हाला आरामदायक वाटावे आणि मजा वाटावी. गरज असेल तर आम्ही टिप्स देऊ.\n\nभारतातील उर्वरित काळासाठी उबदार हवामान (सुमारे 30–34 °C) अपेक्षित. हलके, हवेशीर कापड सर्वोत्तम.' },
        { q: 'आरोग्य आणि लसीकरण', a: 'भारतासाठी हेपॅटायटिस A, टायफॉइड आणि टिटनस/डिप्थीरिया बूस्टर सारखी लसीकरणे अनेकदा शिफारस केली जातात. वेळी तुमच्या डॉक्टर किंवा प्रवास क्लिनिकशी संपर्क करा.' },
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
