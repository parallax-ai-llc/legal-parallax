---
id: "childrens-online-privacy-law-comparison"
name: "Children's Online Privacy: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Technology Law", "Privacy Law", "Child Protection"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act"
lastUpdated: "2026-03-11"
---

## Summary

Children's online privacy (아동 온라인 프라이버시) -- the legal protections governing the collection, use, and disclosure of personal information from minors using internet services, applications, and connected devices -- has become a critical and rapidly evolving area of technology regulation as children's digital engagement has intensified globally. South Korea regulates children's online privacy through the Personal Information Protection Act (개인정보 보호법, PIPA), which requires parental consent for processing personal information of children under 14 (Article 22), supplemented by the Act on Promotion of Information and Communications Network Utilization and Information Protection (정보통신망법) and the Juvenile Protection Act (청소년 보호법); the 2023 PIPA amendment strengthened age verification requirements and introduced enhanced protections for minors' data in the context of AI-driven services and recommendation algorithms. The United States enacted the Children's Online Privacy Protection Act (COPPA, 15 U.S.C. Sections 6501-6506) in 1998, establishing the first comprehensive framework for children's online data protection, applied to children under 13 and enforced by the FTC through the COPPA Rule (16 C.F.R. Part 312, significantly updated in 2024); the Kids Online Safety Act (KOSA, enacted 2024) additionally imposes duty-of-care obligations on platforms regarding minor users. Germany applies the GDPR's child-specific provisions, particularly Article 8 (conditions for children's consent to information society services, with Germany setting the age threshold at 16), supplemented by the Jugendschutzgesetz (JuSchG, Youth Protection Act) and the Jugendmedienschutz-Staatsvertrag (JMStV, Interstate Treaty on the Protection of Minors in the Media), with the 2021 amendment to the JuSchG introducing significant new platform obligations including age-appropriate design requirements. At the EU level, the GDPR Article 8 establishes the framework for children's digital consent, the Digital Services Act imposes platform obligations regarding minor users, the proposed EU Child Sexual Abuse Regulation (CSAR) has generated intense debate over encryption and privacy, and the European Court of Human Rights has recognized children's enhanced privacy rights under Article 8 of the Convention.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Statute** | PIPA Art. 22; 정보통신망법; 청소년보호법 | COPPA (15 U.S.C. 6501); KOSA (2024) | GDPR Art. 8; JuSchG; JMStV | GDPR Art. 8; DSA; proposed CSAR |
| **Age Threshold** | 14 (parental consent required under 14) | 13 (COPPA); 16-17 expanded protections (KOSA) | 16 (GDPR Art. 8 national option) | 13-16 (member state discretion under GDPR Art. 8) |
| **Parental Consent** | Required for under-14; verifiable methods prescribed | COPPA: verifiable parental consent for under-13 | GDPR: consent or authorization by holder of parental responsibility for under-16 | Varies by member state (13-16 threshold) |
| **Platform Duty of Care** | General duty under PIPA and youth protection laws | KOSA: duty of care to prevent harm to minors | JuSchG 2021: structural precautions for platforms | DSA Art. 28: enhanced protection for minors |
| **Age-Appropriate Design** | Guidelines issued by PIPC | COPPA Rule updates; KOSA requirements | JuSchG Section 24a: age-appropriate design obligations | DSA Art. 28; proposed Age Appropriate Design Code |
| **Data Minimization for Children** | PIPA principles apply with enhanced standards | COPPA: collection limited to what is reasonably necessary | GDPR Art. 5(1)(c); enhanced for children | GDPR Art. 5(1)(c); EDPB guidelines |
| **Maximum Penalty** | Up to 4% of revenue | COPPA: up to $50,120 per violation (adjusted); KOSA: FTC enforcement | GDPR: up to 20 million EUR or 4% turnover | GDPR: up to 20 million EUR or 4% turnover |

## South Korea

### Legal Framework

South Korea's children's online privacy framework reflects the country's high rates of youth internet usage and cultural emphasis on educational attainment through digital platforms.

**Personal Information Protection Act (PIPA, 개인정보 보호법):** Article 22 requires data controllers to obtain verifiable consent from a legal guardian (법정대리인) before collecting personal information from children under 14. The consent must specify the types of data collected, the purpose of collection, and the retention period. The PIPC has prescribed acceptable verification methods including mobile phone authentication linked to the guardian's identity, credit card verification, and government-issued certificate authentication.

**Information and Communications Network Act (정보통신망법):** This Act complements PIPA by imposing additional requirements on online service providers regarding minor users, including restrictions on collecting personal information from minors without guardian consent and requirements for age-gating access to age-restricted content.

**Juvenile Protection Act (청소년 보호법):** This Act establishes broader youth protection requirements, including media content ratings, restrictions on harmful content distribution to minors, and the controversial "shutdown law" (셧다운제) which previously restricted minors' late-night gaming access (repealed in 2021 in favor of a choice-based system).

### 2023 PIPA Amendment and AI Protections

The 2023 amendment introduced provisions specifically addressing children's data in AI contexts:

- **Algorithmic Profiling Restrictions:** Processing children's personal data for automated profiling or behavioral targeting is subject to heightened restrictions, requiring separate parental consent and transparent disclosure of how the profiling system operates.
- **Recommendation Algorithm Transparency:** Online platforms must disclose to guardians whether recommendation algorithms are applied to minor users and provide opt-out mechanisms.
- **Enhanced Age Verification:** The amendment strengthened age verification requirements, encouraging the adoption of privacy-preserving age verification technologies that confirm age status without revealing exact birthdate or identity.

### Gaming Regulation Context

South Korea's historical approach to youth digital protection was significantly shaped by gaming regulation. The now-repealed "shutdown law" (Cinderella Act, 2011-2021) prohibited minors under 16 from accessing online games between midnight and 6 a.m. Its repeal reflected a shift toward parental choice models, with the Game Industry Promotion Act now providing for a parental consent-based "choice-based protection system" (선택적 보호제도).

## United States

### Legal Framework

The United States pioneered children's online privacy protection through COPPA and has recently expanded protections through KOSA.

**Children's Online Privacy Protection Act (COPPA, 15 U.S.C. Sections 6501-6506, 1998):** COPPA applies to operators of commercial websites and online services directed to children under 13, or that have actual knowledge of collecting personal information from children under 13. The FTC enforces COPPA through the COPPA Rule (16 C.F.R. Part 312).

**Key COPPA Requirements:**
- Post a clear and comprehensive privacy policy describing data collection practices for children.
- Provide direct notice to parents before collecting personal information.
- Obtain verifiable parental consent (VPC) before collection.
- Give parents the option to consent to collection and use without consenting to disclosure to third parties.
- Provide parents access to their child's data and the right to delete it.
- Not condition a child's participation on providing more personal information than reasonably necessary.
- Maintain reasonable security procedures.

### 2024 COPPA Rule Update

The FTC significantly updated the COPPA Rule in 2024:

- **Expanded Definition of Personal Information:** Updated to explicitly include biometric identifiers, persistent identifiers used for behavioral advertising, and data collected through smart devices and IoT products.
- **Strengthened Consent Mechanisms:** New requirements for verifiable parental consent, including acceptance of state-issued ID verification and facial recognition age estimation (with immediate deletion of biometric data after verification).
- **Data Retention Limits:** New requirement to retain children's personal information only as long as reasonably necessary to fulfill the purpose for which it was collected.
- **Third-Party Disclosure Restrictions:** Enhanced restrictions on sharing children's data with third parties, particularly for advertising purposes.

### Kids Online Safety Act (KOSA, 2024)

Signed into law in 2024, KOSA represents the most significant expansion of children's online protection since COPPA:

- **Duty of Care:** Covered platforms must exercise reasonable care in the creation and implementation of products, features, and services to prevent and mitigate harms to minors, including promotion of suicide, eating disorders, substance abuse, sexual exploitation, and bullying.
- **Strongest Default Privacy Settings:** Platforms must enable the strongest available privacy settings for minor users by default.
- **Algorithmic Safeguards:** Minors must be given the option to opt out of personalized algorithmic recommendations.
- **Parental Tools:** Platforms must provide parents with tools to supervise minor users' accounts, including content and time management features.

### FTC Enforcement

| Action | Year | Penalty | Violation |
|--------|------|---------|-----------|
| FTC v. Google/YouTube | 2019 | $170 million | COPPA violations in child-directed content tracking |
| FTC v. Epic Games (Fortnite) | 2022 | $275 million (COPPA); $245 million (dark patterns) | Children's privacy and deceptive practices |
| FTC v. Microsoft (Xbox) | 2023 | $20 million | Collecting children's data without parental consent |
| FTC v. Amazon (Alexa/Ring) | 2023 | $30.8 million | Children's voice data retention; Ring privacy violations |

## Germany

### Legal Framework

Germany's children's online privacy framework combines EU data protection law with robust national youth protection legislation.

**GDPR Article 8 Implementation:** Germany exercised the GDPR's national discretion to set the age of digital consent at 16 -- the maximum permitted under Article 8(1). Children under 16 require parental consent or authorization for the processing of their personal data in relation to information society services. This higher threshold reflects Germany's traditionally protective approach to youth rights.

**Jugendschutzgesetz (JuSchG, Youth Protection Act):** The JuSchG, comprehensively amended in 2021, establishes youth protection obligations for media providers and platforms:

**Section 24a -- Structural Precautions (Vorsorgemaßnahmen):** Service providers whose platforms are accessed by children and young people must implement appropriate and effective structural precautions, including:
- Age-appropriate default settings for communication, contact, and purchasing functions.
- Accessible and easy-to-use complaint mechanisms for children and young people.
- Provision of technical means for parental monitoring and control.
- Transparent presentation of age rating and content classification.

**Bundeszentrale für Kinder- und Jugendmedienschutz (BzKJ):** The 2021 reform established the Federal Agency for the Protection of Children and Young People in the Media, with enforcement powers to monitor platform compliance and issue compliance orders against domestic and foreign providers whose services are accessible in Germany.

### Jugendmedienschutz-Staatsvertrag (JMStV)

The Interstate Treaty on the Protection of Minors in the Media governs content regulation in broadcasting and telemedia. The JMStV requires providers to implement age verification systems for content harmful to minors, with the Kommission für Jugendmedienschutz (KJM) overseeing compliance and approving age verification technical solutions.

### Age Verification Technology

Germany has developed sophisticated age verification requirements. The KJM maintains a list of approved age verification systems that must meet two cumulative requirements: (1) identification of the user through a reliable method (e.g., identity card, postal identification, video identification) at some point, and (2) authentication at each subsequent access point. These requirements are among the strictest globally.

## ECHR & EU

### GDPR Article 8 -- Children's Consent

Article 8 establishes that where information society services are offered directly to a child, processing based on consent is lawful only where the child is at least 16 years old (or the lower age set by the member state, which may be no lower than 13). Where the child is below the applicable age, processing is lawful only if consent is given or authorized by the holder of parental responsibility. The controller must make reasonable efforts to verify parental consent, taking into account available technology.

### Digital Services Act -- Minor Protection

**Article 28 (Protection of Minors):** Online platforms accessible to minors must put in place appropriate and proportionate measures to ensure a high level of privacy, safety, and security for minors. Platforms may not present advertisements based on profiling using the personal data of minor users when they are aware with reasonable certainty that the recipient is a minor.

**Article 34-35 (VLOP Risk Assessment):** Very large online platforms must assess systemic risks arising from their design, functioning, and use, including risks to children's physical and mental well-being. They must implement reasonable, proportionate, and effective mitigation measures.

### EU Better Internet for Kids+ (BIK+) Strategy

Adopted in May 2022, the BIK+ strategy updates the EU's approach to children's digital rights, establishing principles for age-appropriate digital services, digital literacy, and combating child sexual abuse. The strategy informs implementation of GDPR, DSA, and sector-specific legislation.

### Proposed Child Sexual Abuse Regulation (CSAR)

The European Commission's 2022 proposal for a regulation to prevent and combat child sexual abuse online (CSAR, "Chat Control") has generated intense debate. The proposal would require service providers to detect, report, and remove child sexual abuse material (CSAM), potentially requiring scanning of encrypted communications. Critics, including the European Data Protection Supervisor and numerous member states, have raised concerns about the fundamental rights implications of undermining end-to-end encryption. As of 2026, negotiations continue with significant modifications to the original proposal.

### European Court of Human Rights

**K.U. v. Finland (Application No. 2872/02, Judgment of December 2, 2008):** The Court found a violation of Article 8 where Finnish law did not allow identification of a person who had posted a sexual advertisement about a 12-year-old boy on an internet dating site. The judgment established that states have a positive obligation under Article 8 to provide an effective mechanism for identifying perpetrators of online crimes against children, even where this requires limiting the anonymity of internet users.

**Buturugă v. Romania (Application No. 56867/15, Judgment of February 11, 2020):** The Court addressed online violence affecting a minor, finding a violation of Article 8 where domestic authorities failed to adequately investigate cyberbullying targeting a child. The judgment reinforced states' positive obligations to protect children's digital privacy and security.

## Comparative Analysis

### Age Thresholds

The most visible divergence concerns the age threshold for digital consent. The US (COPPA) applies strict requirements for children under 13. Germany sets the threshold at 16. South Korea at 14. Other EU member states choose between 13 and 16. These differences create significant compliance challenges for global platforms, which must implement jurisdiction-specific age gating and consent mechanisms.

### Enforcement Models

The US FTC has been the most active enforcement body, imposing penalties totaling over $700 million in children's privacy cases since 2019. German enforcement operates through the BzKJ and KJM administrative systems. South Korea's PIPC exercises administrative enforcement. The EU framework relies on national DPAs coordinated through the EDPB.

### Platform Duty of Care

KOSA's duty-of-care approach represents a philosophical shift from data protection (regulating information collection) to harm prevention (requiring platforms to mitigate risks to children's well-being). Germany's JuSchG Section 24a structural precautions requirement reflects a similar approach. Neither COPPA nor the GDPR imposes a general duty of care, focusing instead on data processing controls.

### Encryption and Surveillance Tensions

The proposed EU CSAR highlights the fundamental tension between children's safety and privacy of communications. The US approach through COPPA/KOSA does not require communication scanning. Germany's position in EU negotiations has emphasized the need to preserve encryption. This tension remains unresolved and represents the most contentious frontier in children's online safety regulation.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 1998 | United States | COPPA enacted (effective April 2000) |
| 2008 | ECHR | K.U. v. Finland: states must enable identification of online child abusers |
| 2011 | South Korea | PIPA enacted; parental consent required for under-14 data collection |
| 2013 | United States | FTC updates COPPA Rule; expands personal information definition |
| 2016 | EU | GDPR adopted; Article 8 addresses children's digital consent |
| 2018 | EU | GDPR becomes applicable; member states set national age thresholds |
| 2019 | United States | FTC v. Google/YouTube: $170 million COPPA settlement |
| 2021 | Germany | JuSchG comprehensively amended; BzKJ established |
| 2022 | EU | BIK+ Strategy adopted; CSAR proposed |
| 2022 | United States | FTC v. Epic Games: $520 million combined penalties |
| 2023 | South Korea | PIPA amended; AI and algorithmic protections for children strengthened |
| 2024 | United States | KOSA enacted; FTC updates COPPA Rule |
| 2024 | EU | DSA fully applicable; Article 28 minor protection obligations in force |

## References

### South Korea
- Personal Information Protection Act (개인정보 보호법), Article 22. Available at: https://elaw.klri.re.kr/
- Juvenile Protection Act (청소년 보호법). Available at: https://elaw.klri.re.kr/
- PIPC, "Guidelines on Children's Personal Information Protection," 2023.

### United States
- Children's Online Privacy Protection Act (COPPA), 15 U.S.C. Sections 6501-6506. Available at: https://www.law.cornell.edu/uscode/text/15/chapter-91
- COPPA Rule, 16 C.F.R. Part 312. Available at: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312
- Kids Online Safety Act (KOSA), Pub. L. No. 118-xxx (2024).
- FTC, "Protecting Children's Privacy Under COPPA." Available at: https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule

### Germany
- Jugendschutzgesetz (JuSchG). Available at: https://www.gesetze-im-internet.de/juschg/
- Jugendmedienschutz-Staatsvertrag (JMStV).
- Bundeszentrale für Kinder- und Jugendmedienschutz (BzKJ). Available at: https://www.bzkj.de/

### ECHR & EU
- GDPR, Article 8. Available at: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Regulation (EU) 2022/2065 (DSA), Article 28. Available at: https://eur-lex.europa.eu/eli/reg/2022/2065/oj
- K.U. v. Finland, Application No. 2872/02, ECtHR Judgment of December 2, 2008.
- European Commission, "BIK+ Strategy," May 2022. Available at: https://digital-strategy.ec.europa.eu/en/policies/strategy-better-internet-kids
