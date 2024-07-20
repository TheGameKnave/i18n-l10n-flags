interface Language {
  [key: string]: {
    name: string;
    nativeName: string;
    locales: {
      [key: string]: Locale;
    };
  };
}
interface Locale {
  locale: string;
  nativeName: string;
  flag: string;
}
export const LANGUAGES: Language = {
  'en': { name: 'English',  nativeName: 'English', 
    locales: {
      'en-US': { locale: 'United States', nativeName: 'United States', flag: '🇺🇸' },
      'en-GB': { locale: 'United Kingdom', nativeName: 'United Kingdom', flag: '🇬🇧' },
      'en-CA': { locale: 'Canada', nativeName: 'Canada', flag: '🇨🇦' },
      'en-AU': { locale: 'Australia', nativeName: 'Australia', flag: '🇦🇺' },
      'en-IE': { locale: 'Ireland', nativeName: 'Ireland', flag: '🇮🇪' },
      'en-NZ': { locale: 'New Zealand', nativeName: 'New Zealand', flag: '🇳🇿' },
      'en-NG': { locale: 'Nigeria', nativeName: 'Nigeria', flag: '🇳🇬' },
    }
  },
  'fr': { name: 'French',  nativeName: 'Français', 
    locales: {
      'fr-FR': { locale: 'France', nativeName: 'France', flag: '🇫🇷' },
      'fr-CA': { locale: 'Canada', nativeName: 'Canada', flag: '🇨🇦' },
      'fr-BE': { locale: 'Belgium', nativeName: 'Belgique', flag: '🇧🇪' },
      'fr-CH': { locale: 'Switzerland', nativeName: 'Suisse', flag: '🇨🇭' },
      'fr-LU': { locale: 'Luxembourg', nativeName: 'Luxembourg', flag: '🇱🇺' },
      'fr-MC': { locale: 'Monaco', nativeName: 'Monaco', flag: '🇲🇨' },
    }
  },
  'es': { name: 'Spanish',  nativeName: 'Español', 
    locales: {
      'es-ES': { locale: 'Spain', nativeName: 'España', flag: '🇪🇸' },
      'es-MX': { locale: 'Mexico', nativeName: 'México', flag: '🇲🇽' },
      'es-CO': { locale: 'Colombia', nativeName: 'Colombia', flag: '🇨🇴' },
      'es-AR': { locale: 'Argentina', nativeName: 'Argentina', flag: '🇦🇷' },
      'es-PE': { locale: 'Peru', nativeName: 'Perú', flag: '🇵🇪' },
      'es-VE': { locale: 'Venezuela', nativeName: 'Venezuela', flag: '🇻🇪' },
      'es-CL': { locale: 'Chile', nativeName: 'Chile', flag: '🇨🇱' },
      'es-EC': { locale: 'Ecuador', nativeName: 'Ecuador', flag: '🇪🇨' },
      'es-GT': { locale: 'Guatemala', nativeName: 'Guatemala', flag: '🇬🇹' },
      'es-CU': { locale: 'Cuba', nativeName: 'Cuba', flag: '🇨🇺' },
      'es-BO': { locale: 'Bolivia', nativeName: 'Bolivia', flag: '🇧🇴' },
      'es-DO': { locale: 'Dominican Republic', nativeName: 'República Dominicana', flag: '🇩🇴' },
      'es-HN': { locale: 'Honduras', nativeName: 'Honduras', flag: '🇭🇳' },
      'es-PY': { locale: 'Paraguay', nativeName: 'Paraguay', flag: '🇵🇾' },
      'es-SV': { locale: 'El Salvador', nativeName: 'El Salvador', flag: '🇸🇻' },
      'es-NI': { locale: 'Nicaragua', nativeName: 'Nicaragua', flag: '🇳🇮' },
      'es-CR': { locale: 'Costa Rica', nativeName: 'Costa Rica', flag: '🇨🇷' },
      'es-UY': { locale: 'Uruguay', nativeName: 'Uruguay', flag: '🇺🇾' },
      'es-PA': { locale: 'Panama', nativeName: 'Panamá', flag: '🇵🇦' },
      'es-GQ': { locale: 'Equatorial Guinea', nativeName: 'Guinea Ecuatorial', flag: '🇬🇶' },
    }
  },
  'zh': { name: 'Chinese',  nativeName: '中文', 
    locales: {
      'zh-CN': { locale: 'China', nativeName: '中国', flag: '🇨🇳' },
      'zh-TW': { locale: 'Taiwan', nativeName: '台灣', flag: '🇹🇼' },
      'zh-SG': { locale: 'Singapore', nativeName: '新加坡', flag: '🇸🇬' },
    }
  },
  'de': { name: 'German',  nativeName: 'Deutsch', 
    locales: {
      'de-DE': { locale: 'Germany', nativeName: 'Deutschland', flag: '🇩🇪' },
      'de-AT': { locale: 'Austria', nativeName: 'Österreich', flag: '🇦🇹' },
      'de-CH': { locale: 'Switzerland', nativeName: 'Schweiz', flag: '🇨🇭' },
      'de-LI': { locale: 'Liechtenstein', nativeName: 'Liechtenstein', flag: '🇱🇮' },
      'de-LU': { locale: 'Luxembourg', nativeName: 'Luxemburg', flag: '🇱🇺' },
    }
  },
  'it': { name: 'Italian',  nativeName: 'Italiano', 
    locales: {
      'it-IT': { locale: 'Italy', nativeName: 'Italia', flag: '🇮🇹' },
      'it-CH': { locale: 'Switzerland', nativeName: 'Svizzera', flag: '🇨🇭' },
      'it-SM': { locale: 'San Marino', nativeName: 'San Marino', flag: '🇸🇲' },
      'it-VA': { locale: 'Vatican City', nativeName: 'Città del Vaticano', flag: '🇻🇦' },
    }
  },
  'ja': { name: 'Japanese',  nativeName: '日本語', 
    locales: {
      'ja-JP': { locale: 'Japan', nativeName: '日本', flag: '🇯🇵' },
    }
  },
  'ko': { name: 'Korean',  nativeName: '한국어', 
    locales: {
      'ko-KR': { locale: 'South Korea', nativeName: '대한민국', flag: '🇰🇷' },
      'ko-KP': { locale: 'North Korea', nativeName: '조선민주주의인민공화국', flag: '🇰🇵' },
    }
  },
  'pt': { name: 'Portuguese',  nativeName: 'Português', 
    locales: {
      'pt-BR': { locale: 'Brazil', nativeName: 'Brasil', flag: '🇧🇷' },
      'pt-PT': { locale: 'Portugal', nativeName: 'Portugal', flag: '🇵🇹' },
      'pt-AO': { locale: 'Angola', nativeName: 'Angola', flag: '🇦🇴' },
      'pt-MZ': { locale: 'Mozambique', nativeName: 'Moçambique', flag: '🇲🇿' },
      'pt-GW': { locale: 'Guinea-Bissau', nativeName: 'Guiné-Bissau', flag: '🇬🇼' },
      'pt-CV': { locale: 'Cape Verde', nativeName: 'Cabo Verde', flag: '🇨🇻' },
      'pt-ST': { locale: 'São Tomé and Príncipe', nativeName: 'São Tomé e Príncipe', flag: '🇸🇹' },
      'pt-TL': { locale: 'East Timor', nativeName: 'Timor-Leste', flag: '🇹🇱' },
    }
  },
  'ru': { name: 'Russian',  nativeName: 'Русский', 
    locales: {
      'ru-RU': { locale: 'Russia', nativeName: 'Россия', flag: '🇷🇺' },
      'ru-BY': { locale: 'Belarus', nativeName: 'Беларусь', flag: '🇧🇾' },
      'ru-KZ': { locale: 'Kazakhstan', nativeName: 'Қазақстан', flag: '🇰🇿' },
      'ru-KG': { locale: 'Kyrgyzstan', nativeName: 'Кыргызстан', flag: '🇰🇬' },
      'ru-TJ': { locale: 'Tajikistan', nativeName: 'Тоҷикистон', flag: '🇹🇯' },
    }
  },
  'ar': { name: 'Arabic',  nativeName: 'العربية', 
    locales: {
      'ar-SA': { locale: 'Saudi Arabia', nativeName: 'المملكة العربية السعودية', flag: '🇸🇦' },
      'ar-AE': { locale: 'United Arab Emirates', nativeName: 'الإمارات العربية المتحدة', flag: '🇦🇪' },
      'ar-YE': { locale: 'Yemen', nativeName: 'اليَمَن', flag: '🇾🇪' },
      'ar-OM': { locale: 'Oman', nativeName: 'عمان', flag: '🇴🇲' },
      'ar-IQ': { locale: 'Iraq', nativeName: 'العراق', flag: '🇮🇶' },
      'ar-QA': { locale: 'Qatar', nativeName: 'قطر', flag: '🇶🇦' },
      'ar-BH': { locale: 'Bahrain', nativeName: 'البحرين', flag: '🇧🇭' },
      'ar-KW': { locale: 'Kuwait', nativeName: 'الكويت', flag: '🇰🇼' },
      'ar-JO': { locale: 'Jordan', nativeName: 'الأردن', flag: '🇯🇴' },
      'ar-LB': { locale: 'Lebanon', nativeName: 'لبنان', flag: '🇱🇧' },
      'ar-LY': { locale: 'Libya', nativeName: 'ليبيا', flag: '🇱🇾' },
      'ar-MA': { locale: 'Morocco', nativeName: 'المغرب', flag: '🇲🇦' },
      'ar-TN': { locale: 'Tunisia', nativeName: 'تونس', flag: '🇹🇳' },
      'ar-DZ': { locale: 'Algeria', nativeName: 'الجزائر', flag: '🇩🇿' },
      'ar-SD': { locale: 'Sudan', nativeName: 'السودان', flag: '🇸🇩' },
      'ar-SO': { locale: 'Somalia', nativeName: 'الصومال', flag: '🇸🇴' },
      'ar-PS': { locale: 'Palestine', nativeName: 'فلسطين', flag: '🇵🇸' },
      'ar-SY': { locale: 'Syria', nativeName: 'سوريا', flag: '🇸🇾' },
      'ar-MR': { locale: 'Mauritania', nativeName: 'موريتانيا', flag: '🇲🇷' },
    }
  },
  'af': { name: 'Afrikaans', nativeName: 'Afrikaans',
    locales: {
      'af-ZA': { locale: 'South Africa', nativeName: 'Suid-Afrika', flag: '🇿🇦' },
      'af-NA': { locale: 'Namibia', nativeName: 'Namibië', flag: '🇳🇦' },
    }
  },
  'sq': { name: 'Albanian', nativeName: 'Shqip',
    locales: {
      'sq-AL': { locale: 'Albania', nativeName: 'Shqipëri', flag: '🇦🇱' },
      'sq-KS': { locale: 'Kosovo', nativeName: 'Kosovë', flag: '🇽🇰' },
    }
  },
  'am': { name: 'Amharic', nativeName: 'አማርኛ',
    locales: {
      'am-ET': { locale: 'Ethiopia', nativeName: 'ኢትዮጵያ', flag: '🇪🇹' },
    }
  },
  'hy': { name: 'Armenian', nativeName: 'Հայերեն',
    locales: {
      'hy-AM': { locale: 'Armenia', nativeName: 'Հայաստան', flag: '🇦🇲' },
    }
  },
  'bn': { name: 'Bengali', nativeName: 'বাংলা',
    locales: {
      'bn-BD': { locale: 'Bangladesh', nativeName: 'বাংলাদেশ', flag: '🇧🇩' },
      'bn-IN': { locale: 'India', nativeName: 'ভারত', flag: '🇮🇳' },
    }
  },
  'bs': { name: 'Bosnian', nativeName: 'Bosanski',
    locales: {
      'bs-BA': { locale: 'Bosnia and Herzegovina', nativeName: 'Bosna i Hercegovina', flag: '🇧🇦' },
    }
  },
  'bg': { name: 'Bulgarian', nativeName: 'български',
    locales: {
      'bg-BG': { locale: 'Bulgaria', nativeName: 'България', flag: '🇧🇬' },
    }
  },
  'my': { name: 'Burmese', nativeName: 'ဗမာစာ',
    locales: {
      'my-MM': { locale: 'Myanmar', nativeName: 'မြန်မာ', flag: '🇲🇲' },
    }
  },
  'ca': { name: 'Catalan', nativeName: 'Català',
    locales: {
      'ca-ES': { locale: 'Spain', nativeName: 'Espanya', flag: '🇪🇸' },
      'ca-AD': { locale: 'Andorra', nativeName: 'Andorra', flag: '🇦🇩' },
    }
  },
  'hr': { name: 'Croatian', nativeName: 'Hrvatski',
    locales: {
      'hr-HR': { locale: 'Croatia', nativeName: 'Hrvatska', flag: '🇭🇷' },
      'hr-BA': { locale: 'Bosnia and Herzegovina', nativeName: 'Bosna i Hercegovina', flag: '🇧🇦' },
    }
  },
  'cs': { name: 'Czech', nativeName: 'Čeština',
    locales: {
      'cs-CZ': { locale: 'Czech Republic', nativeName: 'Česká republika', flag: '🇨🇿' },
    }
  },
  'da': { name: 'Danish', nativeName: 'Dansk',
    locales: {
      'da-DK': { locale: 'Denmark', nativeName: 'Danmark', flag: '🇩🇰' },
      'da-GL': { locale: 'Greenland', nativeName: 'Kalaallit Nunaat', flag: '🇬🇱' },
    }
  },
  'nl': { name: 'Dutch', nativeName: 'Nederlands',
    locales: {
      'nl-NL': { locale: 'Netherlands', nativeName: 'Nederland', flag: '🇳🇱' },
      'nl-BE': { locale: 'Belgium', nativeName: 'België', flag: '🇧🇪' },
      'nl-SR': { locale: 'Suriname', nativeName: 'Suriname', flag: '🇸🇷' },
    }
  },
  'eo': { name: 'Esperanto', nativeName: 'Esperanto',
    locales: {}
  },
  'et': { name: 'Estonian', nativeName: 'Eesti',
    locales: {
      'et-EE': { locale: 'Estonia', nativeName: 'Eesti', flag: '🇪🇪' },
    }
  },
  'tl': { name: 'Filipino', nativeName: 'Filipino',
    locales: {
      'tl-PH': { locale: 'Philippines', nativeName: 'Pilipinas', flag: '🇵🇭' },
    }
  },
  'fi': { name: 'Finnish', nativeName: 'Suomi',
    locales: {
      'fi-FI': { locale: 'Finland', nativeName: 'Suomi', flag: '🇫🇮' },
    }
  },
  'ka': { name: 'Georgian', nativeName: 'ქართული',
    locales: {
      'ka-GE': { locale: 'Georgia', nativeName: 'საქართველო', flag: '🇬🇪' },
    }
  },
  'el': { name: 'Greek', nativeName: 'Ελληνικά',
    locales: {
      'el-GR': { locale: 'Greece', nativeName: 'Ελλάδα', flag: '🇬🇷' },
      'el-CY': { locale: 'Cyprus', nativeName: 'Κύπρος', flag: '🇨🇾' },
    }
  },
  'he': { name: 'Hebrew', nativeName: 'עברית',
    locales: {
      'he-IL': { locale: 'Israel', nativeName: 'ישראל', flag: '🇮🇱' },
    }
  },
  'hi': { name: 'Hindi', nativeName: 'हिन्दी',
    locales: {
      'hi-IN': { locale: 'India', nativeName: 'भारत', flag: '🇮🇳' },
    }
  },
  'hu': { name: 'Hungarian', nativeName: 'Magyar',
    locales: {
      'hu-HU': { locale: 'Hungary', nativeName: 'Magyarország', flag: '🇭🇺' },
    }
  },
  'is': { name: 'Icelandic', nativeName: 'Íslenska',
    locales: {
      'is-IS': { locale: 'Iceland', nativeName: 'Ísland', flag: '🇮🇸' },
    }
  },
  'id': { name: 'Indonesian', nativeName: 'Bahasa Indonesia',
    locales: {
      'id-ID': { locale: 'Indonesia', nativeName: 'Indonesia', flag: '🇮🇩' },
    }
  },
  'ga': { name: 'Irish', nativeName: 'Gaeilge',
    locales: {
      'ga-IE': { locale: 'Ireland', nativeName: 'Éire', flag: '🇮🇪' },
    }
  },
  'mk': { name: 'Macedonian', nativeName: 'Македонски',
    locales: {
      'mk-MK': { locale: 'North Macedonia', nativeName: 'Северна Македонија', flag: '🇲🇰' },
    }
  },
  'ms': { name: 'Malay', nativeName: 'Bahasa Melayu',
    locales: {
      'ms-MY': { locale: 'Malaysia', nativeName: 'Malaysia', flag: '🇲🇾' },
      'ms-BN': { locale: 'Brunei', nativeName: 'Brunei', flag: '🇧🇳' },
    }
  },
  'mt': { name: 'Maltese', nativeName: 'Malti',
    locales: {
      'mt-MT': { locale: 'Malta', nativeName: 'Malta', flag: '🇲🇹' },
    }
  },
  'mn': { name: 'Mongolian', nativeName: 'Монгол',
    locales: {
      'mn-MN': { locale: 'Mongolia', nativeName: 'Монгол Улс', flag: '🇲🇳' },
    }
  },
  'ne': { name: 'Nepali', nativeName: 'नेपाली',
    locales: {
      'ne-NP': { locale: 'Nepal', nativeName: 'नेपाल', flag: '🇳🇵' },
    }
  },
  'no': { name: 'Norwegian', nativeName: 'Norsk',
    locales: {
      'no-NO': { locale: 'Norway', nativeName: 'Norge', flag: '🇳🇴' },
    }
  },
  'fa': { name: 'Persian', nativeName: 'فارسی',
    locales: {
      'fa-IR': { locale: 'Iran', nativeName: 'ایران', flag: '🇮🇷' },
      'fa-AF': { locale: 'Afghanistan', nativeName: 'افغانستان', flag: '🇦🇫' },
    }
  },
  'pl': { name: 'Polish', nativeName: 'Polski',
    locales: {
      'pl-PL': { locale: 'Poland', nativeName: 'Polska', flag: '🇵🇱' },
    }
  },
  'pa': { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ',
    locales: {
      'pa-IN': { locale: 'India', nativeName: 'ਭਾਰਤ', flag: '🇮🇳' },
      'pa-PK': { locale: 'Pakistan', nativeName: 'پاکستان', flag: '🇵🇰' },
    }
  },
  'ro': { name: 'Romanian', nativeName: 'Română',
    locales: {
      'ro-RO': { locale: 'Romania', nativeName: 'România', flag: '🇷🇴' },
      'ro-MD': { locale: 'Moldova', nativeName: 'Moldova', flag: '🇲🇩' },
    }
  },
  'sr': { name: 'Serbian', nativeName: 'Српски',
    locales: {
      'sr-RS': { locale: 'Serbia', nativeName: 'Србија', flag: '🇷🇸' },
      'sr-BA': { locale: 'Bosnia and Herzegovina', nativeName: 'Босна и Херцеговина', flag: '🇧🇦' },
      'sr-ME': { locale: 'Montenegro', nativeName: 'Црна Гора', flag: '🇲🇪' },
    }
  },
  'si': { name: 'Sinhala', nativeName: 'සිංහල',
    locales: {
      'si-LK': { locale: 'Sri Lanka', nativeName: 'ශ්‍රී ලංකා', flag: '🇱🇰' },
    }
  },
  'sk': { name: 'Slovak', nativeName: 'Slovenčina',
    locales: {
      'sk-SK': { locale: 'Slovakia', nativeName: 'Slovensko', flag: '🇸🇰' },
    }
  },
  'sl': { name: 'Slovenian', nativeName: 'Slovenščina',
    locales: {
      'sl-SI': { locale: 'Slovenia', nativeName: 'Slovenija', flag: '🇸🇮' },
    }
  },
  'so': { name: 'Somali', nativeName: 'Soomaali',
    locales: {
      'so-SO': { locale: 'Somalia', nativeName: 'Soomaaliya', flag: '🇸🇴' },
    }
  },
  'sw': { name: 'Swahili', nativeName: 'Kiswahili',
    locales: {
      'sw-KE': { locale: 'Kenya', nativeName: 'Kenya', flag: '🇰🇪' },
      'sw-TZ': { locale: 'Tanzania', nativeName: 'Tanzania', flag: '🇹🇿' },
      'sw-UG': { locale: 'Uganda', nativeName: 'Uganda', flag: '🇺🇬' },
    }
  },
  'sv': { name: 'Swedish', nativeName: 'Svenska',
    locales: {
      'sv-SE': { locale: 'Sweden', nativeName: 'Sverige', flag: '🇸🇪' },
      'sv-FI': { locale: 'Finland', nativeName: 'Finland', flag: '🇫🇮' },
    }
  },
  'ta': { name: 'Tamil', nativeName: 'தமிழ்',
    locales: {
      'ta-IN': { locale: 'India', nativeName: 'இந்தியா', flag: '🇮🇳' },
      'ta-LK': { locale: 'Sri Lanka', nativeName: 'இலங்கை', flag: '🇱🇰' },
      'ta-SG': { locale: 'Singapore', nativeName: 'சிங்கப்பூர்', flag: '🇸🇬' },
      'ta-MY': { locale: 'Malaysia', nativeName: 'மலேசியா', flag: '🇲🇾' },
    }
  },
  'te': { name: 'Telugu', nativeName: 'తెలుగు',
    locales: {
      'te-IN': { locale: 'India', nativeName: 'భారత దేశం', flag: '🇮🇳' },
    }
  },
  'th': { name: 'Thai', nativeName: 'ไทย',
    locales: {
      'th-TH': { locale: 'Thailand', nativeName: 'ประเทศไทย', flag: '🇹🇭' },
    }
  },
  'tr': { name: 'Turkish', nativeName: 'Türkçe',
    locales: {
      'tr-TR': { locale: 'Turkey', nativeName: 'Türkiye', flag: '🇹🇷' },
      'tr-CY': { locale: 'Cyprus', nativeName: 'Kıbrıs', flag: '🇨🇾' },
    }
  },
  'uk': { name: 'Ukrainian', nativeName: 'Українська',
    locales: {
      'uk-UA': { locale: 'Ukraine', nativeName: 'Україна', flag: '🇺🇦' },
    }
  },
  'ur': { name: 'Urdu', nativeName: 'اردو',
    locales: {
      'ur-PK': { locale: 'Pakistan', nativeName: 'پاکستان', flag: '🇵🇰' },
      'ur-IN': { locale: 'India', nativeName: 'بھارت', flag: '🇮🇳' },
    }
  },
  'uz': { name: 'Uzbek', nativeName: 'Oʻzbekcha',
    locales: {
      'uz-UZ': { locale: 'Uzbekistan', nativeName: 'Oʻzbekiston', flag: '🇺🇿' },
    }
  },
  'vi': { name: 'Vietnamese', nativeName: 'Tiếng Việt',
    locales: {
      'vi-VN': { locale: 'Vietnam', nativeName: 'Việt Nam', flag: '🇻🇳' },
    }
  },
  'cy': { name: 'Welsh', nativeName: 'Cymraeg',
    locales: {
      'cy-GB': { locale: 'United Kingdom', nativeName: 'Deyrnas Unedig', flag: '🇬🇧' },
    }
  },
  'xh': { name: 'Xhosa', nativeName: 'isiXhosa',
    locales: {
      'xh-ZA': { locale: 'South Africa', nativeName: 'Mzantsi Afrika', flag: '🇿🇦' },
    }
  },
  'zu': { name: 'Zulu', nativeName: 'isiZulu',
    locales: {
      'zu-ZA': { locale: 'South Africa', nativeName: 'iNingizimu Afrika', flag: '🇿🇦' },
    }
  },
};
