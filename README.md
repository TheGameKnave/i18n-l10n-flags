# i18n-l10n-flags

A simple JS constant to allow pairing languages and regional variants with country flags.

## Installation

`npm i i18n-l10n-flags`

In your component, import `LANGUAGES` and get to work.

### Model

#### v.2.0.0
```
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
```

#### v.1.0.0
```
interface Language {
    [key: string]: {
        name: string;
        nativeName: string;
        regions: Region[];
    };
}
interface Region {
    region: string;
    locale: string;
    nativeName: string;
    flag: string;
}
```

## Problems

This package was created by a mono-lingual developer and as such may have errors. Contributions are welcome.

Additionally, feature enhancements are also welcome. Potential improvements:

* flag image library in png
* flag svg variable storage
* etc...