---
id: "dark-patterns-law-comparison"
name: "Dark Patterns Regulation: Cross-Jurisdictional Comparison"
date: "2026-03-16"
nationality: "Global"
occupation: ["Legal Analysis", "Comparative Law", "Consumer Protection"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Dark_pattern"
lastUpdated: "2026-03-16"
---

## Summary

Dark patterns -- deceptive design techniques in digital interfaces that manipulate users into unintended actions such as unwanted purchases, data sharing, or subscription renewals -- have emerged as a major frontier of consumer protection law worldwide. The European Union has taken the most aggressive regulatory stance, with the Digital Services Act (Regulation (EU) 2022/2065) explicitly prohibiting dark patterns in Article 25, the GDPR's consent requirements implicitly targeting manipulative consent interfaces, and the Consumer Rights Directive (2011/83/EU, as amended by Directive (EU) 2019/2161) establishing specific rules against pre-ticked boxes and hidden charges. South Korea addressed deceptive design through amendments to its Act on the Consumer Protection in Electronic Commerce (전자상거래 등에서의 소비자보호에 관한 법률) and the Telecommunications Business Act (전기통신사업법), with the Korea Communications Commission (KCC) issuing binding guidelines on user interface transparency in 2024. The United States lacks a federal dark patterns statute but has seen vigorous enforcement by the Federal Trade Commission under Section 5 of the FTC Act (15 U.S.C. § 45) and the passage of state laws including the California Consumer Privacy Act's dark pattern provisions (Cal. Civ. Code § 1798.140(l)) and the Colorado Privacy Act (C.R.S. § 6-1-1303(9)). Germany enforces EU-level prohibitions through its Unfair Competition Act (Gesetz gegen den unlauteren Wettbewerb, UWG) and has emerged as a particularly active jurisdiction for dark pattern litigation in national courts.

## Comparative Table

| Aspect | South Korea | United States | Germany | EU |
|--------|-------------|---------------|---------|-----|
| **Primary Legislation** | Electronic Commerce Act (전자상거래법); Telecommunications Business Act; KCC UI Guidelines (2024) | FTC Act § 5; CCPA/CPRA (Cal. Civ. Code § 1798.140(l)); state privacy acts | UWG (Unfair Competition Act); EU DSA (directly applicable); BGB § 305ff (standard terms) | DSA Art. 25; GDPR recital 32 & Art. 7; Consumer Rights Directive 2011/83/EU |
| **Definition of Dark Patterns** | "Deceptive user interface designs that undermine consumer autonomy" (KCC Guidelines) | "User interface designed to subvert or impair user autonomy" (CCPA regulations, § 7004(a)) | "Irreführende Gestaltung" under UWG § 5; DSA Art. 25 definition | "Practices that materially distort or impair the ability of recipients to make autonomous and informed choices" (DSA Art. 25(1)) |
| **Maximum Penalty** | KRW 300 million fine or 3% of relevant revenue | FTC: no statutory cap (disgorgement + civil penalties); CCPA: $7,500/intentional violation | EUR 6 million or 1% of worldwide turnover (DSA); UWG: injunctive relief + damages | DSA: up to 6% of global annual turnover; GDPR: up to EUR 20 million or 4% of global turnover |
| **Consent Manipulation** | Prohibited under PIPA Art. 15; opt-in required | Varies by state; CCPA prohibits dark patterns in opt-out process | GDPR Art. 7 (freely given consent); BGH case law on cookie banners | GDPR Art. 7 + recital 32; EDPB Guidelines 05/2020 on consent |
| **Enforcement Body** | KCC; KFTC; PIPC | FTC; state AGs; CPPA (California) | BNetzA (DSA); state consumer authorities; DPAs (GDPR) | European Commission (DSA); national DPAs (GDPR); national consumer authorities |
| **Private Right of Action** | Yes (Consumer Dispute Settlement Commission) | Yes (CCPA/state laws); FTC Act: no private right | Yes (UWG competitor claims; BGB consumer claims) | Varies by member state; GDPR Art. 82 (compensation) |

## South Korea

### Legal Framework

South Korea's regulation of dark patterns draws on multiple statutory sources that collectively create a layered enforcement framework:

- **Act on the Consumer Protection in Electronic Commerce (전자상거래 등에서의 소비자보호에 관한 법률, E-Commerce Act):** Articles 21 and 21-2 prohibit deceptive practices in online transactions, including misleading presentations of pricing, subscription terms, and cancellation procedures. Article 17 grants consumers a mandatory cooling-off period of seven days for online purchases, which cannot be waived through interface design. The 2023 amendments specifically addressed "hidden subscription" patterns by requiring that automatic renewal terms be displayed prominently and that cancellation be made as easy as subscription.

- **Telecommunications Business Act (전기통신사업법) Article 50:** Prohibits telecommunications business operators from using deceptive methods to induce users into using services. The Korea Communications Commission (KCC) issued comprehensive User Interface Transparency Guidelines in March 2024 under the authority of this provision, categorizing prohibited dark patterns into six types: (1) nagging (반복적 요청), (2) obstruction (해지 방해), (3) sneaking (은밀한 추가), (4) forced action (강제 행위), (5) social proof manipulation (사회적 증거 조작), and (6) interface interference (인터페이스 간섭).

- **Personal Information Protection Act (PIPA, 개인정보 보호법) Article 15:** Requires that consent for personal information collection be obtained through clear and affirmative action. The PIPC has interpreted this to prohibit pre-ticked consent boxes, bundled consent for unrelated purposes, and interfaces that make declining consent materially more difficult than providing it.

- **Korea Fair Trade Commission (KFTC) Enforcement Decree on Indication and Advertising:** Addresses "bait and switch" pricing patterns and deceptive urgency claims (e.g., false countdown timers, fabricated stock scarcity) as forms of false advertising under the Fair Labeling and Advertising Act (표시·광고의 공정화에 관한 법률).

### Key Principles

South Korea's approach combines sector-specific regulation with general consumer protection principles. The KCC UI Transparency Guidelines, while technically administrative guidance, function as de facto binding standards because non-compliance triggers enforcement investigations. The guidelines adopt the taxonomy developed by Dr. Harry Brignull, classifying dark patterns into recognizable categories and providing specific design examples of prohibited practices.

A distinctive feature of South Korea's framework is the emphasis on subscription cancellation ease. Following a wave of consumer complaints about "roach motel" patterns in streaming services and software subscriptions, the KFTC issued a 2024 interpretive guidance requiring that cancellation processes involve no more steps than the original subscription process, and that any "save offers" or retention screens be limited to a single page.

### Notable Cases

- **KFTC v. Coupang (2023):** The KFTC fined Coupang KRW 33 billion (approximately USD 25 million) for deceptive interface practices including automatically enrolling users in its "Rocket WOW" paid membership through confusing UI flows and making cancellation deliberately cumbersome. The decision specifically identified "confirmshaming" language in cancellation screens and obstructive multi-step cancellation processes.

- **KCC v. Naver (2024):** The KCC imposed corrective orders on Naver for manipulative cookie consent banners on its search portal that used asymmetric button design (bright green "Accept All" button versus small grey "Manage Settings" text link) and pre-selected non-essential cookies, violating PIPA consent requirements.

- **PIPC Administrative Action against Kakao (2023):** The PIPC fined Kakao KRW 150 million for bundling consent for targeted advertising with consent for core messaging service functionality, constituting a "forced action" dark pattern under PIPA Article 15.

## United States

### Federal Framework

The United States lacks a comprehensive federal dark patterns statute. However, the Federal Trade Commission has been at the forefront of dark pattern enforcement, developing a robust body of enforcement precedent under its Section 5 authority:

- **FTC Act Section 5 (15 U.S.C. § 45):** The FTC's authority to prohibit "unfair or deceptive acts or practices" provides the primary federal enforcement mechanism against dark patterns. In September 2022, the FTC issued an enforcement policy statement, "Bringing Dark Patterns to Light" (Staff Report, September 2022), declaring that dark patterns violate Section 5 when they: (a) induce consumers into purchasing goods or services they did not intend to buy; (b) trick consumers into disclosing personal information; (c) manipulate consumers into maintaining subscriptions or services; or (d) undermine consumers' ability to exercise their privacy choices.

- **Restore Online Shoppers' Confidence Act (ROSCA, 15 U.S.C. § 8401-8405):** Specifically targets "negative option" marketing practices, requiring clear disclosure of material terms before charging consumers and prohibiting the use of deceptive interfaces to obtain consumer billing information.

- **FTC Negative Option Rule (16 C.F.R. Part 425, amended 2024):** The "Click-to-Cancel" rule, finalized on 16 October 2024, requires that cancellation of subscriptions be as simple as sign-up (the "simple cancellation mechanism" requirement), prohibits misrepresentations in negative option marketing, and requires affirmative express consent before charging consumers.

### State Variations

State privacy laws have incorporated explicit dark pattern prohibitions:

- **California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA):** Cal. Civ. Code § 1798.140(l) defines "dark pattern" as "a user interface designed or manipulated with the substantial effect of subverting or impairing user autonomy, decision-making, or choice." Section 1798.185(a)(20) provides that agreement obtained through a dark pattern does not constitute consent. The California Privacy Protection Agency (CPPA) regulations (11 CCR § 7004) specify that opt-out mechanisms must use symmetry in choice -- the path to decline must not be materially more burdensome than the path to accept.

- **Colorado Privacy Act (C.R.S. § 6-1-1303(9)):** Defines dark patterns and provides that consent obtained through dark patterns is not valid consent, mirroring the CCPA approach.

- **Connecticut Data Privacy Act (Conn. Gen. Stat. § 42-515(8)):** Contains nearly identical dark pattern definitions and invalidation provisions.

- **Texas Data Privacy and Security Act (Tex. Bus. & Com. Code § 541.001(8)):** Similarly defines dark patterns and invalidates consent obtained through them.

- **Federal Trade Commission Act Amendments (proposed, 2025):** The DETOUR Act (Deceptive Experiences To Online Users Reduction Act, S. 1084, reintroduced in 2025) would create a specific federal prohibition against dark patterns on large online platforms, though it has not yet been enacted.

### Notable Cases

- **FTC v. Amazon.com (Prime Cancellation, 2023):** Filed in U.S. District Court for the Western District of Washington (Case No. 2:23-cv-00932), the FTC alleged Amazon employed dark patterns dubbed "Iliad" internally to enroll consumers in Prime memberships without consent and created an intentionally complex cancellation process called the "Iliad flow" requiring multiple steps and confusing page layouts. The case remains in litigation as of 2026.

- **FTC v. Fortnite (Epic Games, 2022):** The FTC obtained a $245 million refund for consumers and $275 million penalty, finding Epic Games used dark patterns including confusing button configurations that caused players (many of them minors) to make unintended purchases, and made it unreasonably difficult to obtain refunds.

- **FTC v. Age of Empires (2023):** The FTC settled with Microsoft for $20 million over allegations that Xbox used dark patterns to collect children's personal data through deceptive account creation flows that misled parents about the purpose of data collection.

- **California AG v. Sephora (2022):** The California Attorney General secured a $1.2 million settlement for violations of the CCPA, including the use of dark patterns to frustrate consumers' opt-out rights for the sale of personal information.

## Germany

### Legal Framework

Germany enforces dark pattern prohibitions through a combination of EU-level regulation and national competition and consumer protection law:

- **Digital Services Act (Regulation (EU) 2022/2065) Article 25:** Directly applicable in Germany, Article 25 prohibits online platforms from designing, organizing, or operating their interfaces in a way that "deceives or manipulates the recipients of their service or in a way that materially distorts or impairs the ability of the recipients of their service to make free and informed decisions." The Bundesnetzagentur (BNetzA) serves as Germany's Digital Services Coordinator responsible for enforcement.

- **Unfair Competition Act (Gesetz gegen den unlauteren Wettbewerb, UWG):** UWG § 3 (prohibition of unfair commercial practices), § 4a (aggressive commercial practices), § 5 (misleading commercial practices), and § 5a (misleading by omission) collectively prohibit dark patterns as unfair competitive practices. UWG § 4a specifically targets practices that "significantly impair the consumer's freedom of choice through harassment, coercion, or undue influence."

- **German Civil Code (BGB) §§ 305-310 (Standard Business Terms):** Courts have struck down dark pattern-embedded terms and conditions as unfair standard terms under BGB § 307, which prohibits clauses that unreasonably disadvantage the consumer contrary to the requirements of good faith.

- **Telemedia Act (Telemediengesetz, TMG, now superseded by TTDSG):** The Telecommunications-Telemedia Data Protection Act (TTDSG) § 25 requires informed and voluntary consent for cookie storage and access, implementing the ePrivacy Directive. German courts have interpreted this to require symmetrical consent interfaces.

### Key Principles

German dark pattern enforcement is characterized by vigorous private enforcement through competitor actions under the UWG, a well-established consumer advocacy organization (Verbraucherzentrale Bundesverband, vzbv) with standing to bring representative actions, and increasingly sophisticated judicial analysis of interface design choices. German courts have developed a nuanced jurisprudence distinguishing permissible "nudging" from prohibited "manipulation," generally holding that design choices cross the legal line when they exploit cognitive biases rather than merely facilitating desired user actions.

The German approach is also notable for the integration of data protection enforcement with dark pattern regulation. State data protection authorities (Landesdatenschutzbehörden) have been particularly active in pursuing cookie consent dark patterns, creating a robust body of administrative decisions that complements judicial enforcement.

### Notable Cases

- **BGH, Planet49 Implementation (I ZR 7/16, 2020):** Following the CJEU's preliminary ruling in Planet49 (C-673/17), the Bundesgerichtshof (BGH) held that pre-ticked checkboxes for non-essential cookies are invalid under German law and that consent obtained through such mechanisms fails the requirement of an "active declaration of will." This decision triggered a nationwide wave of cookie banner redesigns.

- **OLG Rostock, Subscription Trap Dark Patterns (2023):** The Oberlandesgericht Rostock found that a streaming service's subscription interface constituted a deceptive commercial practice under UWG § 5 where it used visual hierarchy to draw attention to the "Subscribe Now" button while rendering the pricing and automatic renewal terms in low-contrast text, effectively "sneaking" the consumer into a commitment.

- **vzbv v. Google (Kammergericht Berlin, 2022):** The Berlin Court of Appeal upheld the vzbv's challenge to Google's consent interface for its advertising personalization settings, finding that the "one-click accept, multi-step reject" design constituted an unfair commercial practice and violated GDPR Article 7's requirement of freely given consent.

- **LDI NRW v. Various E-Commerce Operators (2024):** The North Rhine-Westphalia State Commissioner for Data Protection and Freedom of Information issued administrative orders against 15 major e-commerce platforms operating in Germany for deceptive cookie consent interfaces that used dark patterns including asymmetric design, emotional language favoring acceptance, and deliberately confusing toggle states.

## ECHR / EU Framework

### Convention Articles

The European Convention on Human Rights provides foundational principles applicable to dark patterns regulation:

- **Article 8 -- Right to Respect for Private Life:** Dark patterns that manipulate users into disclosing personal data or accepting surveillance engage Article 8 protections. The ECtHR has held that the concept of "private life" encompasses online activities and that states have a positive obligation to protect individuals from interference by private actors.

- **Article 10 -- Freedom of Expression and Information:** The right to receive information encompasses the right not to be deceived. Dark patterns that obstruct access to accurate information or manipulate informational environments may engage Article 10 concerns, particularly in the context of online platform design.

- **Article 1 of Protocol No. 1 -- Protection of Property:** Dark patterns that induce unwanted financial transactions (trick purchases, hidden charges, subscription traps) engage property rights protections, establishing a positive obligation on states to provide adequate consumer protection mechanisms.

### EU Legislative Framework

The EU has developed the most comprehensive dark patterns regulatory framework globally through multiple intersecting instruments:

- **Digital Services Act (Regulation (EU) 2022/2065) Article 25:** The DSA provides the most explicit dark pattern prohibition in EU law. Article 25(1) states that online platforms "shall not design, organise or operate their online interfaces in a way that deceives or manipulates the recipients of their service or in a way that materially distorts or impairs the ability of the recipients of their service to make free and informed decisions." Article 25(3) mandates European Commission guidelines detailing specific prohibited practices, which were published in September 2023 and identify categories including "nagging," "obstruction," "forced action," "social proof," "interface interference," "emotional steering," "hidden information," and "fake urgency."

- **GDPR (Regulation (EU) 2016/679):** While the GDPR does not use the term "dark patterns," its consent requirements effectively prohibit manipulative consent interfaces. Article 7(1) requires consent to be "freely given," Article 7(2) requires that consent requests be "presented in a manner which is clearly distinguishable," and Recital 32 specifies that "silence, pre-ticked boxes or inactivity should not constitute consent." The European Data Protection Board (EDPB) issued Guidelines 3/2022 on "Dark patterns in social media platform interfaces" (adopted 14 February 2023), providing detailed analysis of how specific design patterns violate GDPR requirements.

- **Consumer Rights Directive (2011/83/EU, as amended by Omnibus Directive 2019/2161):** Article 6a prohibits "dual quality" deception and hidden charges. Article 22 requires explicit consent (not default opt-in) for any additional payments beyond the main contractual obligation. The amendment by Directive (EU) 2019/2161 (the "Omnibus Directive") strengthened penalties for cross-border infringement to at least 4% of annual turnover.

- **Unfair Commercial Practices Directive (2005/29/EC, UCPD):** Annex I contains a "blacklist" of 31 commercial practices considered unfair in all circumstances, several of which directly address dark patterns: No. 7 (false time-limited offers), No. 20 (describing a product as "free" when it is not), No. 26 (persistent and unwanted solicitations). The European Commission's 2021 Guidance on the interpretation of the UCPD specifically addresses digital dark patterns.

### Key Case Law

- **CJEU, Planet49 (C-673/17, 2019):** The Court of Justice held that pre-ticked checkboxes do not constitute valid consent under the ePrivacy Directive or the GDPR, establishing a foundational principle against passive-consent dark patterns in EU law.

- **CJEU, Meta Platforms (Bundeskartellamt) (C-252/21, 2023):** The CJEU confirmed that competition authorities can assess GDPR compliance when investigating abuse of a dominant market position, enabling dark pattern enforcement through competition law channels. The Court held that Meta's "take it or leave it" consent mechanism for data-driven advertising did not meet GDPR consent requirements.

- **EDPB Decision on Cookie Banner Dark Patterns (Binding Decision 01/2023):** The EDPB's binding decision in a cross-border case involving cookie consent banners established that a "reject all" option must be presented at the same level of the interface as the "accept all" option, and that color-coding or design emphasis favouring acceptance constitutes a dark pattern violating GDPR Article 7.

## Comparative Analysis

| Dimension | South Korea | United States | Germany / EU | ECHR Framework |
|-----------|-------------|---------------|--------------|----------------|
| **Regulatory Approach** | Sector-specific guidelines with general consumer protection backstop | Enforcement-led (FTC) with emerging state statutory prohibitions | Comprehensive multi-instrument framework (DSA + GDPR + UCPD + UWG) | Fundamental rights baseline informing legislative development |
| **Definition Specificity** | High (KCC Guidelines enumerate six categories) | Moderate (CCPA provides general definition; FTC uses case-by-case approach) | Very high (DSA Art. 25 + Commission guidelines + EDPB guidelines) | Framework-level (derived from privacy and property rights) |
| **Consent Validity** | Dark pattern consent invalid under PIPA | Dark pattern consent invalid under CCPA/state privacy laws | Dark pattern consent invalid under GDPR Art. 7 | Positive obligation to ensure meaningful consent |
| **Subscription Cancellation** | Must match subscription ease (KFTC guidance) | Click-to-Cancel rule (FTC, 2024) | Consumer Rights Directive Art. 11; UWG enforcement | Not directly addressed |
| **Cookie Consent** | PIPA opt-in requirement; KCC enforcement | No comprehensive federal cookie law; state laws vary | TTDSG § 25; GDPR Art. 7; EDPB binding decisions | Article 8 (private life) applied to digital tracking |
| **Enforcement Model** | Administrative (KCC, KFTC, PIPC) | Federal (FTC) + state AG + limited private action | Administrative (BNetzA, DPAs) + private (UWG competitor actions, vzbv) + judicial | Individual petition to ECtHR; inter-state cases |
| **Maximum Financial Penalty** | KRW 300 million or 3% revenue | No federal cap; state penalties vary ($2,500-$7,500/violation) | DSA: 6% turnover; GDPR: 4% turnover | Just satisfaction (Art. 41) |

## Timeline

| Year | Jurisdiction | Milestone |
|------|-------------|-----------|
| 2005 | EU | Unfair Commercial Practices Directive (2005/29/EC) adopted |
| 2010 | US | Coined term "dark patterns" (Harry Brignull) |
| 2011 | EU | Consumer Rights Directive (2011/83/EU) adopted |
| 2018 | US | California Consumer Privacy Act (CCPA) enacted, effective 2020 |
| 2019 | EU | CJEU Planet49 decision prohibits pre-ticked consent boxes |
| 2019 | EU | Omnibus Directive (2019/2161) strengthens consumer protection penalties |
| 2020 | Germany | BGH implements Planet49 ruling in national law |
| 2020 | US | California voters pass CPRA (Proposition 24), adding dark pattern definition |
| 2021 | EU | Commission guidance on UCPD addresses digital dark patterns |
| 2022 | EU | Digital Services Act adopted (Regulation 2022/2065) with Art. 25 dark pattern ban |
| 2022 | US | FTC publishes "Bringing Dark Patterns to Light" report |
| 2022 | Germany | Kammergericht Berlin rules against Google's asymmetric consent interface |
| 2023 | EU | EDPB adopts Guidelines 3/2022 on dark patterns in social media |
| 2023 | EU | CJEU Meta Platforms decision links dark patterns to competition law |
| 2023 | South Korea | KFTC fines Coupang for dark pattern subscription practices |
| 2024 | South Korea | KCC issues comprehensive UI Transparency Guidelines |
| 2024 | US | FTC finalizes "Click-to-Cancel" negative option rule |
| 2024 | Germany | LDI NRW enforcement sweep against e-commerce cookie dark patterns |
| 2025 | EU | DSA fully applicable to all online platforms (17 February 2024 for VLOPs) |
| 2025 | US | DETOUR Act reintroduced in Congress |
| 2026 | US | Colorado Privacy Act dark pattern provisions fully enforceable |

## References

1. Regulation (EU) 2022/2065 of the European Parliament and of the Council of 19 October 2022 on a Single Market for Digital Services (Digital Services Act), OJ L 277, 27 October 2022.
2. Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data (GDPR), OJ L 119, 4 May 2016.
3. Directive 2011/83/EU of the European Parliament and of the Council of 25 October 2011 on consumer rights, OJ L 304, 22 November 2011.
4. Directive 2005/29/EC of the European Parliament and of the Council of 11 May 2005 concerning unfair business-to-consumer commercial practices (UCPD), OJ L 149, 11 June 2005.
5. EDPB, Guidelines 3/2022 on Dark Patterns in Social Media Platform Interfaces, adopted 14 February 2023.
6. EDPB, Guidelines 05/2020 on Consent under Regulation 2016/679, Version 1.1, adopted 4 May 2020.
7. European Commission, Guidelines on DSA Article 25 (Dark Patterns), September 2023.
8. CJEU, Case C-673/17, Planet49 GmbH, ECLI:EU:C:2019:801, 1 October 2019.
9. CJEU, Case C-252/21, Meta Platforms Inc. v. Bundeskartellamt, ECLI:EU:C:2023:537, 4 July 2023.
10. Federal Trade Commission, "Bringing Dark Patterns to Light," Staff Report, September 2022.
11. FTC, Negative Option Rule, 16 C.F.R. Part 425, Final Rule, 16 October 2024.
12. FTC v. Amazon.com, Inc., No. 2:23-cv-00932 (W.D. Wash. 2023).
13. FTC v. Epic Games, Inc. (Fortnite), No. 5:22-cv-00518 (E.D.N.C. 2022).
14. California Civil Code § 1798.140(l) (dark pattern definition under CCPA/CPRA).
15. South Korea, Act on the Consumer Protection in Electronic Commerce (전자상거래 등에서의 소비자보호에 관한 법률).
16. Korea Communications Commission, User Interface Transparency Guidelines, March 2024.
17. Korea Fair Trade Commission, Decision on Coupang Corp., Case No. 2023서감0158, 2023.
18. BGH, Judgment of 28 May 2020, I ZR 7/16 (Planet49 implementation).
19. Gesetz gegen den unlauteren Wettbewerb (UWG), BGBl. I S. 254.
20. Brignull, Harry, "Deceptive Design -- Types of Dark Pattern," deceptive.design (2023).
