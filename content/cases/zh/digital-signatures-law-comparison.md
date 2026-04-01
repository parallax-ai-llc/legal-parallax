---
id: "digital-signatures-law-comparison"
name: "电子签名：跨司法管辖区法律分析"
date: "2026-03-11"
nationality: "比较法"
occupation: ["技术法", "合同法", "认证"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Digital_signature"
lastUpdated: "2026-03-11"
---

## 概述

电子签名（전자서명）——用于验证签名人身份和签名电子文档完整性的加密机制——已成为现代商业、治理和法律交易的基础。韩国是最早采用全面电子签名立法的国家之一，于1999年颁布了《电子签名法》（전자서명법），建立了政府认证的公钥基础设施（PKI）系统；该法于2020年进行了根本性改革，废除了政府认证证书的垄断地位，引入了承认所有形式电子签名（包括基于区块链和生物特征的签名）的技术中立框架。美国通过两项互补的法律文件规范电子签名：联邦层面的Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. Sections 7001-7031，2000年颁布)确立了电子签名在州际商务中的一般法律效力，以及Uniform Electronic Transactions Act (UETA, 1999)已被49个州采纳，提供了一致的州级框架；此外，Government Paperwork Elimination Act of 1998 (GPEA)要求联邦机构接受电子签名。德国的方法受欧盟电子身份和信任服务框架的塑造，主要为eIDAS Regulation (Regulation (EU) No 910/2014)，德国通过Vertrauensdienstegesetz (VDG，信任服务法，2017年)予以实施，建立了三级电子签名体系——简单、高级和合格——其中合格电子签名（qualifizierte elektronische Signatur）依据BGB第126a条具有等同于手写签名的最高法律效力。在欧洲层面，eIDAS Regulation为所有欧盟成员国建立了统一的电子签名法律框架，修订后的eIDAS 2.0 Regulation (Regulation (EU) 2024/1183)于2024年4月通过，引入了欧洲数字身份钱包并将范围扩展至电子属性证明和电子账本。

## 比较表

| 要素 | 韩国 | 美国 | 德国 | ECHR / 欧盟 |
|------|------|------|------|-------------|
| **主要法律依据** | 《电子签名法》（전자서명법，1999年，2020年改革） | E-SIGN Act (2000)；UETA (1999) | VDG (2017)；BGB第126a条 | eIDAS (Regulation 910/2014)；eIDAS 2.0 (Regulation 2024/1183) |
| **监管机构** | 科学技术信息通信部；韩国互联网振兴院（KISA） | NIST；各州州务卿 | 联邦网络局（Bundesnetzagentur） | 欧洲委员会；各国监管机构 |
| **签名等级** | 电子签名；认证电子签名（2020年废除）；认可电子签名 | 电子签名（一般性、技术中立） | 简单、高级和合格电子签名 | 简单、高级和合格电子签名 |
| **最高法律效力** | 具有公认可靠性的电子签名 | 等同于手写签名（E-SIGN Act等效） | 合格电子签名=手写签名（BGB第126a条） | 合格电子签名=手写签名（eIDAS第25(2)条） |
| **PKI要求** | 2020年废除政府PKI垄断 | 无强制PKI；技术中立 | VDG下的合格信任服务提供商 | eIDAS下的合格信任服务提供商 |
| **跨境承认** | 双边协议；有限的相互承认 | 联邦-州之间；国际承认有限 | 依eIDAS在欧盟内自动承认 | 欧盟内完全相互承认（eIDAS第25(3)条） |
| **数字身份钱包** | 移动身份识别扩展中 | 无联邦数字身份钱包 | 德国eID卡（Personalausweis）；欧盟钱包即将推出 | 欧洲数字身份钱包（eIDAS 2.0） |
| **滥用处罚** | 最高3年监禁或3000万韩元罚款 | 因情况而异；适用联邦欺诈法 | VDG下的罚款；StGB第263a条下的刑事欺诈 | 成员国设定处罚；eIDAS 2.0要求有效制裁 |

## 韩国

### 法律框架

韩国的电子签名立法反映了该国快速的数字化转型和政府在建立数字基础设施方面的积极态度。

**《电子签名法》（전자서명법，1999年）：** 韩国于1999年2月5日颁布了《电子签名法》，使其成为全球最早的全面电子签名法律之一。原始法律建立了由科学技术信息通信部指定的持照认证机构管理的政府认证数字证书系统（공인인증서，gong-in injeung-seo）。这些政府认证证书成为网上银行、电子政务服务、保险、证券交易和众多其他数字交易的事实上强制性认证机制。

**原始系统的问题：** 虽然政府认证证书系统实现了近乎普遍的采用——高峰期活跃证书超过3600万——但遭到了严重批评。该系统需要ActiveX浏览器插件，造成安全漏洞和浏览器兼容性问题。它实际上强制使用单一技术（基于PKI的证书），抑制了认证方式的创新。小型企业和个人用户认为该系统繁琐，特别是要求将证书存储在USB驱动器或硬盘上。

### 2020年改革

《电子签名法》于2020年12月10日生效的改革实施了自该法颁布以来最重大的变革：

**废除政府认证证书垄断：** "政府认证"（공인）和"私人"（사설）电子签名之间的区分被取消。所有电子签名现在获得平等的法律待遇，前提是满足可靠性要求。

**技术中立框架：** 改革后的法律将附着于或在逻辑上与电子文件相关联的任何电子信息认定为有效的电子签名，无论底层技术如何。这使基于区块链的签名、生物特征认证、基于移动设备的签名和其他新兴技术具有法律效力。

**认可电子签名服务：** 建立了"认可电子签名服务"（인정 전자서명）的新类别，提供商由韩国互联网振兴院（KISA，한국인터넷진흥원）对其运营和技术能力进行政府评估，但不被授予垄断地位。

### 当前状况

2020年改革后，多家私营部门电子签名服务获得了市场认可，包括KakaoTalk认证（通过Kakao移动平台）、Naver Sign、PASS（通过移动运营商）和银行应用签名。截至2025年，基于移动设备的电子签名占新签名认证事件的70%以上，取代了原有的政府认证证书系统。

### 处罚

伪造或滥用电子签名可处最高3年监禁或最高3000万韩元罚款的刑事处罚。未能维护安全标准的信任服务提供商面临包括暂停认可在内的行政处分。

## 美国

### 法律框架

美国采取了技术中立、最小规范性的电子签名方法，反映了其在技术监管中对市场驱动解决方案的一般偏好。

**E-SIGN Act (15 U.S.C. Sections 7001-7031, 2000)：** Electronic Signatures in Global and National Commerce Act由克林顿总统于2000年6月30日签署，确立了核心原则：电子签名和记录不得仅因其为电子形式而被否定法律效力。该法将"电子签名"广泛定义为"附着于或在逻辑上与合同或其他记录相关联、由某人出于签署该记录的意图而执行或采用的电子声音、符号或过程"。

**E-SIGN的主要条款：**
- 合同、签名和记录不得仅因电子形式而被否定法律效力（第7001(a)条）。
- 消费者对电子记录的同意必须是肯定性的和知情的，有具体的披露要求（第7001(c)条）。
- 某些文件被排除在外，包括遗嘱、遗嘱附件、遗嘱信托、收养和离婚文件、法院命令以及与公用事业服务取消、违约、丧失赎回权和产品召回有关的通知（第7003条）。
- 该法保留各州通过采纳UETA或类似立法修改要求的权力（第7002条）。

**Uniform Electronic Transactions Act (UETA, 1999)：** 由统一法律委员会颁布，UETA已被49个州和哥伦比亚特区采纳（除纽约州外，该州制定了自己的Electronic Signatures and Records Act）。UETA提供了确立电子记录和签名法律效力的平行规则，包含关于归属、时间和纠错的详细条款。

### 政府使用

Government Paperwork Elimination Act (GPEA, 1998)要求联邦机构提供电子提交、维护或披露信息作为纸质方式替代的选项。2023年Federal ESIGN Modernization Act更新了联邦机构使用电子签名的框架，使政府实践与不断发展的技术保持一致。

### 特定行业要求

| 行业 | 法规 | 签名要求 |
|------|------|----------|
| 金融服务 | SEC Rule 17a-4；FINRA规则 | 电子记录必须以不可重写格式保存 |
| 医疗保健 | HIPAA (45 C.F.R. Part 162) | 健康交易中的电子签名必须确保认证 |
| 房地产 | 各州登记法规；UETA例外 | 许多州接受电子公证；45个以上州有远程在线公证（RON）法律 |
| FDA监管 | 21 C.F.R. Part 11 | 制药/医疗器械领域的电子签名必须满足具体认证要求 |

### 司法处理

法院一直维持E-SIGN和UETA下电子签名的效力。在Specht v. Netscape Communications Corp. (306 F.3d 17, 2d Cir. 2002)中，法院确立了电子协议的形成需要表示同意，为点击包裹协议和浏览包裹协议奠定了基础性先例。

## 德国

### 法律框架

德国的电子签名框架从开创性的国家方法发展为与欧盟eIDAS条例的全面整合。

**Signaturgesetz (SigG，签名法，1997年)：** 德国是最早颁布电子签名立法的欧盟成员国之一，1997年的Signaturgesetz建立了基于非对称密码学和认可认证服务提供商的数字签名框架。SigG于2001年更新以实施EU Electronic Signatures Directive 1999/93/EC。

**Vertrauensdienstegesetz (VDG，信任服务法，2017年)：** 在eIDAS条例于2016年7月生效后，德国以VDG取代了SigG，VDG作为eIDAS的国内实施立法。VDG指定联邦网络局（Bundesnetzagentur）为信任服务提供商的监管机构，并建立了合格信任服务的管理框架。

### 三级签名体系

德国实施eIDAS，承认三级电子签名：

**简单电子签名（einfache elektronische Signatur）：** 附着于或在逻辑上与其他电子数据相关联、由签名人用于签署的任何电子形式数据。包括扫描的手写签名、电子邮件中键入的姓名和类似的非正式电子标识符。法律效力：可作为证据采纳但无真实性推定。

**高级电子签名（fortgeschrittene elektronische Signatur）：** 必须与签名人唯一关联，能够识别签名人，使用签名人独自控制的数据创建，并与签署数据相关联以使任何后续更改可被检测。法律效力：更强的证据价值；常用于企业间交易。

**合格电子签名（qualifizierte elektronische Signatur, QES）：** 使用合格电子签名创建设备、基于合格证书创建的高级电子签名。依据BGB第126a条，合格电子签名可以替代法律规定的某些法律交易所需的书面形式（Schriftform）。这是唯一具有与手写签名相同法律效力的等级。

### 书面形式要求与BGB第126a条

德国法律经常要求具有法律意义的文件采用书面形式（Schriftform），包括超过一定门槛的劳动合同、商业租赁协议、消费信贷协议和担保声明。BGB第126a条允许在法律规定书面形式的情况下，以合格电子签名替代手写签名要求，前提是各方同意使用电子形式。

### 德国eID卡

德国身份证（Personalausweis）自2010年起纳入了电子身份识别功能（eID-Funktion），使电子政务服务和私营部门应用能够进行安全的在线认证。截至2024年，超过7000万张德国身份证携带eID功能，但在线认证的使用率仍然相对较低。

## ECHR与欧盟

### 欧盟电子签名指令1999/93/EC

欧盟首先通过1999年12月13日通过的Directive 1999/93/EC规范电子签名。该指令确立了电子签名不应仅因其为电子形式而被否定法律效力的原则。它引入了基于合格证书、由安全签名创建设备创建的"高级电子签名"概念。然而，各成员国的实施差异显著，对跨境承认造成了障碍。

### eIDAS Regulation (Regulation (EU) No 910/2014)

电子身份、认证和信任服务（eIDAS）条例于2014年7月23日通过，自2016年7月1日起全面适用，以直接适用的条例取代了1999年指令以确保统一适用：

**第25条——电子签名的法律效力：** 电子签名不得仅因其为电子形式而被否定法律效力和在法律程序中的可采性。合格电子签名具有等同于手写签名的法律效力。在一个成员国基于合格证书签发的合格电子签名在所有其他成员国均被承认为合格电子签名。

**信任服务提供商：** eIDAS为合格信任服务提供商（QTSPs）建立了监管框架，这些提供商必须满足严格的技术和组织要求，接受定期合规评估，并受国家监管机构的监督。欧盟可信列表公布所有成员国的QTSPs。

**电子印章：** eIDAS为法人引入了电子印章，类似于自然人的电子签名，使组织能够确保文件的来源和完整性。

### eIDAS 2.0 (Regulation (EU) 2024/1183)

修订后的eIDAS条例于2024年4月11日通过，引入了变革性的变化：

**欧洲数字身份钱包（EUDIW）：** 成员国必须在2026年前向所有请求的公民和居民签发欧洲数字身份钱包。钱包将使用户能够以安全、保护隐私的方式存储和出示电子身份数据、合格电子签名和电子属性证明（如文凭、专业资格或驾照）。

**合格电子属性证明：** eIDAS 2.0为个人属性证明引入了新的信任服务，实现跨境验证资格、隶属关系和其他个人数据。

**电子账本：** 该条例承认合格电子账本（分布式账本/区块链技术）为信任服务，为基于区块链的记录和智能合约提供法律确定性。

### 欧洲人权法院

欧洲人权法院尚未直接裁决电子签名纠纷，但其第8条（尊重私生活的权利）判例法与电子身份系统的部署相关。在S. and Marper v. United Kingdom (Applications Nos. 30562/04 and 30566/04, Grand Chamber Judgment of December 4, 2008)中，法院确立了留存个人数据——包括高级签名系统中使用的生物特征数据——触发第8条权利，需要法律依据、合法目的和比例性。

## 比较分析

### 技术中立性与规范性

各司法管辖区在技术中立性光谱上占据不同位置。美国采取最为技术中立的方法，广泛定义电子签名而不强制使用特定技术。欧盟的eIDAS框架为半规范性，承认所有电子签名但仅赋予满足既定技术标准的合格签名更高法律效力。韩国从高度规范性的系统（政府认证PKI垄断）过渡到2020年的技术中立框架，代表了一次戏剧性的理念转变。德国在欧盟框架内为合格电子签名保持详细的技术要求，同时承认更简单的形式。

### 法律效力层级

一个关键区别在于各司法管辖区如何分配法律效力。美国依据E-SIGN平等对待所有电子签名——不存在基于技术复杂性的法律效力层级。欧盟和德国建立了明确的三级层级，仅合格电子签名获得等同于手写签名的推定。韩国改革后的制度赋予所有电子签名法律效力，但允许当事方通过合同要求特定的可靠性级别。

### 跨境承认

欧盟的eIDAS框架提供了最全面的跨境承认机制，在所有成员国之间强制相互承认合格电子签名。美国缺乏类似的国际承认机制，尽管与特定贸易伙伴存在双边协议。韩国已与选定伙伴签署了双边相互承认协议。

### 数字身份整合

电子签名与更广泛的数字身份系统的融合在欧盟通过eIDAS 2.0的欧洲数字身份钱包最为先进。德国的eID卡代表了早期的国家级整合。韩国改革后的制度与移动身份平台有效整合。美国缺乏统一的联邦数字身份框架。

## 时间线

| 年份 | 司法管辖区 | 事件 |
|------|-----------|------|
| 1997 | 德国 | Signaturgesetz (SigG)颁布——欧盟最早的电子签名法律之一 |
| 1998 | 美国 | Government Paperwork Elimination Act (GPEA)颁布 |
| 1999 | 韩国 | 《电子签名法》（전자서명법）颁布；政府认证PKI建立 |
| 1999 | 欧盟 | Electronic Signatures Directive 1999/93/EC通过 |
| 1999 | 美国 | Uniform Electronic Transactions Act (UETA)颁布 |
| 2000 | 美国 | E-SIGN Act签署成为法律（6月30日） |
| 2001 | 德国 | SigG更新以实施EU Directive 1999/93/EC |
| 2010 | 德国 | eID功能纳入德国身份证 |
| 2014 | 欧盟 | eIDAS Regulation (No 910/2014)通过（7月23日） |
| 2016 | 欧盟 | eIDAS全面适用（7月1日） |
| 2017 | 德国 | Vertrauensdienstegesetz (VDG)取代SigG |
| 2020 | 韩国 | 《电子签名法》根本性改革；政府认证证书垄断废除 |
| 2023 | 美国 | Federal ESIGN Modernization Act更新政府电子签名实践 |
| 2024 | 欧盟 | eIDAS 2.0 (Regulation 2024/1183)通过（4月11日）；欧洲数字身份钱包强制要求 |
| 2026 | 欧盟 | 成员国签发欧洲数字身份钱包的截止日期 |

## 参考文献

### 韩国
- Electronic Signature Act (전자서명법), Act No. 5792 (1999), reformed Act No. 17354 (2020). Available at: https://elaw.klri.re.kr/
- Korea Internet & Security Agency (KISA, 한국인터넷진흥원), "Electronic Signature Recognition Service Guidelines."
- "South Korea Abolishes Government-Certified Digital Certificate System," ZDNet Korea, 2020.

### 美国
- Electronic Signatures in Global and National Commerce Act (E-SIGN Act), 15 U.S.C. Sections 7001-7031. Available at: https://www.law.cornell.edu/uscode/text/15/chapter-96
- Uniform Electronic Transactions Act (UETA), Uniform Law Commission, 1999. Available at: https://www.uniformlaws.org/committees/community-home?CommunityKey=2c04b76c-2b7d-4399-977e-d5876f7abef4
- Specht v. Netscape Communications Corp., 306 F.3d 17 (2d Cir. 2002).
- 21 C.F.R. Part 11 -- Electronic Records; Electronic Signatures.

### 德国
- Vertrauensdienstegesetz (VDG), BGBl. 2017 I S. 2745. Available at: https://www.gesetze-im-internet.de/vdg/
- Bürgerliches Gesetzbuch (BGB), Section 126a. Available at: https://www.gesetze-im-internet.de/bgb/__126a.html
- Bundesnetzagentur, "Qualified Trust Service Providers." Available at: https://www.bundesnetzagentur.de/

### ECHR与欧盟
- Regulation (EU) No 910/2014 (eIDAS). Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32014R0910
- Regulation (EU) 2024/1183 (eIDAS 2.0). Available at: https://eur-lex.europa.eu/eli/reg/2024/1183/oj
- Directive 1999/93/EC on electronic signatures. Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:31999L0093
- S. and Marper v. United Kingdom, Applications Nos. 30562/04 and 30566/04, ECtHR Grand Chamber Judgment of December 4, 2008.
