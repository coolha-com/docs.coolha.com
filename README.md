创建文档版本
```
npm run docusaurus docs:version 1.0
```

翻译文档
```
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

启动您的本地化站点
```
npm run start -- --locale zh-Hans
```


## en

docs
```
mkdir -p i18n/en/docusaurus-plugin-content-docs/current

cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current
```


apps
```
mkdir -p i18n/en/docusaurus-plugin-content-docs-apps/current

cp -r apps/** i18n/en/docusaurus-plugin-content-docs-apps/current
```

community
```
mkdir -p i18n/en/docusaurus-plugin-content-docs-community/current

cp -r community/** i18n/en/docusaurus-plugin-content-docs-community/current
```

## zh-Hant


docs
```
mkdir -p i18n/zh-Hant/docusaurus-plugin-content-docs/current

cp -r docs/** i18n/zh-Hant/docusaurus-plugin-content-docs/current
```


apps
```
mkdir -p i18n/zh-Hant/docusaurus-plugin-content-docs-apps/current

cp -r apps/** i18n/zh-Hant/docusaurus-plugin-content-docs-apps/current
```

community
```
mkdir -p i18n/zh-Hant/docusaurus-plugin-content-docs-community/current

cp -r community/** i18n/zh-Hant/docusaurus-plugin-content-docs-community/current
```


