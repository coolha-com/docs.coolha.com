---
sidebar_position: 1
---

# 介绍 Coolha DApps


Lens 上的应用程序是一个链上实体，具有独特的身份和可自定义的设置。开发人员可以设置描述应用程序的元数据，包括图像和描述、 增强其在网络中的存在。应用程序可以指定它们使用的图表，从而有效地定义它们迎合的社交网络或受众。 他们还可以通过添加多个 Feed 并设置默认值来管理 Feed，从而允许为其用户量身定制有组织的内容分发。

此外，应用程序可以确定它们使用的命名空间注册表，从而确保其平台内的用户身份一致。 管理控制功能强大，可选择添加或删除可调整应用程序设置的管理员。 为了提升用户体验，App 可以设置赞助，为用户支付 gas 费用，促进无缝交互。 他们还可以与特定社区建立联系，整合社区特征并促进参与。




```js title="AppMetadata.ts"
import { MetadataAttributeType, app } from "@lens-protocol/metadata";

export const AppMetadata = app({
  name: "Coolha",
  description: "Empower creators, brands, and communities, connect new driving forces for digital growth, and provide marketing services in the Web3 world",
  logo: "lens://d94238064a8603b0e494d5d68d57cd1bd4dd70c18e32df38b11e47fff25ddd19",
  developer: "Coolha fqa@coolha.com",
  url: "https://coolha.com",
  termsOfService: "https://coolha.com/terms",
  privacyPolicy: "https://coolha.com/privacy",
  platforms:["web"],
});
```







