---
id: "biometric-data-law-comparison"
name: "Biometric Data Regulation: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Technology Law", "Privacy Law", "Data Protection"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Biometrics"
lastUpdated: "2026-03-11"
---

## Summary

Biometric data regulation (생체정보 규제) -- the legal framework governing the collection, processing, storage, and use of uniquely identifying biological and behavioral characteristics including fingerprints, facial geometry, iris patterns, voiceprints, gait patterns, and DNA -- has become a critical area of technology law as biometric systems proliferate across commercial, governmental, and consumer applications. South Korea regulates biometric data through the Personal Information Protection Act (개인정보 보호법, PIPA), which classifies biometric information (생체인식정보) as sensitive personal information (민감정보) requiring explicit consent under Article 23, supplemented by the Credit Information Act (신용정보법) governing biometric use in financial services and sector-specific guidelines from the Personal Information Protection Commission (PIPC, 개인정보보호위원회); the 2023 PIPA amendment introduced enhanced protections for biometric data including stricter purpose limitation, data minimization requirements, and mandatory security measures. The United States addresses biometric data through a patchwork of state laws, with Illinois's Biometric Information Privacy Act (BIPA, 740 ILCS 14, 2008) serving as the most consequential statute globally due to its private right of action and per-violation damages that have generated over $5 billion in settlements and verdicts since 2015; Texas, Washington, and a growing number of states with comprehensive privacy laws also regulate biometric data, though no comprehensive federal biometric privacy law exists. Germany applies the GDPR's strict protections for biometric data as a special category of personal data under Article 9, supplemented by the Bundesdatenschutzgesetz (BDSG) and sector-specific regulations, with German data protection authorities taking significant enforcement actions against biometric data processors including Clearview AI and workplace biometric monitoring systems. At the EU level, the GDPR Article 9 provides the foundational prohibition on processing biometric data for identification absent explicit consent or statutory authority, the AI Act (Regulation (EU) 2024/1689) imposes additional restrictions on biometric identification systems, and the European Court of Human Rights has recognized that biometric data collection and retention engages Article 8 protections in cases including S. and Marper v. United Kingdom (2008) and Gaughran v. United Kingdom (2020).

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Statute** | PIPA Art. 23 (amended 2023); Credit Information Act | BIPA (Illinois); state privacy laws; no federal law | GDPR Art. 9; BDSG; AI Act | GDPR Art. 9; AI Act (2024/1689); ECHR Art. 8 |
| **Definition Scope** | Biometric recognition information (생체인식정보) | BIPA: retinal/iris scan, fingerprint, voiceprint, face/hand geometry | Biometric data for unique identification (GDPR Art. 4(14)) | GDPR Art. 4(14): physical, physiological, behavioral characteristics |
| **Consent Standard** | Explicit consent (명시적 동의) | BIPA: written informed consent before collection | Explicit consent (GDPR Art. 9(2)(a)) | Explicit consent or statutory basis |
| **Private Right of Action** | Limited; administrative enforcement primary | BIPA: yes ($1,000-$5,000 per violation) | GDPR Art. 82 (compensation claims); limited private enforcement | GDPR Art. 79 (judicial remedy); Art. 82 (compensation) |
| **Retention Limits** | Purpose-specific; destruction upon purpose fulfillment | BIPA: 3 years or purpose completion, whichever first | Purpose limitation; storage minimization | GDPR Art. 5(1)(e) storage limitation |
| **Law Enforcement Exemptions** | Subject to PIPA; warrant requirements | Fourth Amendment; varying state exemptions | GDPR Art. 10; Law Enforcement Directive 2016/680 | LED 2016/680; AI Act law enforcement exceptions |
| **Maximum Penalty** | Up to 4% of revenue or 2 billion KRW | BIPA: $1,000-$5,000 per violation (no statutory cap) | GDPR: up to 20 million EUR or 4% turnover | GDPR: up to 20 million EUR or 4% turnover |

## South Korea

### Legal Framework

South Korea's biometric data regulation combines comprehensive data protection legislation with sector-specific rules, reflecting the country's extensive deployment of biometric systems in banking, transportation, and access control.

**Personal Information Protection Act (PIPA, 개인정보 보호법):** Article 23 classifies biometric recognition information (생체인식정보) as sensitive personal information (민감정보), subject to heightened processing requirements. The collection and processing of biometric data requires explicit consent (명시적 동의) from the data subject, with clear disclosure of the specific biometric data to be collected, the purpose of collection, and the retention period.

### 2023 PIPA Amendment

The 2023 comprehensive amendment to PIPA introduced several provisions specifically strengthening biometric data protection:

**Enhanced Definition:** The amendment clarified that biometric data includes not only raw biometric samples (fingerprints, facial images) but also biometric templates and derived data used for identification or authentication.

**Purpose Limitation:** Biometric data collected for one purpose may not be repurposed without additional explicit consent. Financial institutions that collect fingerprints for banking authentication may not use the same data for marketing analytics.

**Mandatory Security Measures:** Data controllers processing biometric data must implement encryption for stored biometric templates, access controls limiting biometric data access to authorized personnel, and regular security audits. The PIPC has issued detailed technical guidelines specifying minimum encryption standards for biometric data.

**Breach Notification:** Data breaches involving biometric data trigger mandatory notification to the PIPC and affected individuals within 72 hours, with enhanced reporting requirements reflecting the irreversible nature of biometric identifiers.

### Financial Sector Applications

The Credit Information Act (신용정보법) governs biometric authentication in financial services. Korean banks widely deploy fingerprint and facial recognition for mobile banking authentication, with approximately 85 percent of mobile banking transactions in 2024 using biometric verification. The Financial Services Commission (금융위원회) has issued guidelines requiring financial institutions to maintain biometric data separately from other customer records and to offer non-biometric authentication alternatives.

### Enforcement

In 2024, the PIPC conducted its first dedicated enforcement sweep targeting biometric data compliance, inspecting 45 organizations deploying facial recognition and fingerprint systems. The Commission issued corrective orders to 12 entities, including retailers using facial recognition without adequate consent and fitness centers collecting fingerprint data without proper disclosure.

## United States

### Legal Framework

The United States relies on state-level biometric privacy laws, with no comprehensive federal statute, creating a patchwork of obligations varying dramatically by jurisdiction.

**Illinois Biometric Information Privacy Act (BIPA, 740 ILCS 14, 2008):** BIPA remains the most consequential biometric privacy statute globally. Enacted in 2008 following the bankruptcy of Pay By Touch (a fingerprint-based payment company), BIPA was designed to prevent biometric data from entering the unregulated market. Key provisions:

- **Written Informed Consent (Section 15(b)):** Private entities must inform individuals in writing of the specific purpose and duration of biometric data collection and obtain written consent before collection.
- **Retention and Destruction (Section 15(a)):** Entities must establish a publicly available retention schedule and destruction policy, with biometric data destroyed when the initial purpose has been satisfied or within 3 years of the individual's last interaction, whichever occurs first.
- **No Sale or Profit (Section 15(c)):** Biometric identifiers may not be sold, leased, traded, or otherwise profited from.
- **Private Right of Action (Section 20):** Aggrieved persons may recover $1,000 per negligent violation and $5,000 per intentional or reckless violation, plus reasonable attorney's fees.

### Landmark BIPA Litigation

| Case | Year | Outcome | Significance |
|------|------|---------|--------------|
| Rosenbach v. Six Flags | 2019 | IL Supreme Court: no actual harm required | Lowered standing threshold; opened floodgates for litigation |
| In re Facebook BIPA Litigation | 2021 | $650 million settlement | Largest biometric privacy settlement; facial recognition tagging |
| Rogers v. BNSF Railway | 2023 | $228 million jury verdict | Workplace fingerprint scanning without consent |
| Cothron v. White Castle | 2023 | IL Supreme Court: each scan is separate violation | Exponentially increased potential damages |
| Tims v. Black Horse Carriers | 2023 | IL Supreme Court: 5-year statute of limitations | Resolved limitations period uncertainty |

### Other State Laws

**Texas Capture or Use of Biometric Identifier Act (CUBI, 2009):** Requires informed consent and prohibits sale of biometric data, but provides no private right of action. Enforcement is through the Texas Attorney General, with penalties up to $25,000 per violation. In 2024, Texas AG filed a landmark $1.4 billion lawsuit against Meta for alleged facial recognition violations.

**Washington Biometric Privacy Law (RCW 19.375, 2017):** Prohibits enrollment of biometric identifiers in databases for commercial purposes without consent. No private right of action; attorney general enforcement.

**Comprehensive Privacy Laws:** California (CCPA/CPRA), Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and other states include biometric data within their definitions of sensitive personal information, with varying consent and processing requirements.

## Germany

### Legal Framework

Germany applies the EU's comprehensive biometric data protection framework, with national implementation and significant enforcement activity.

**GDPR Article 9 Application:** Under Article 9(1), the processing of biometric data for the purpose of uniquely identifying a natural person is prohibited unless one of the exceptions in Article 9(2) applies. The primary lawful bases for biometric data processing are explicit consent (Article 9(2)(a)) and substantial public interest with a basis in EU or member state law (Article 9(2)(g)).

**BDSG Section 22:** The BDSG supplements Article 9 GDPR by specifying that processing of special categories of data, including biometric data, for purposes of substantial public interest requires appropriate and specific measures to safeguard data subject interests. These measures include technical and organizational security measures, designation of a data protection officer, and documentation of processing activities.

### Workplace Biometric Monitoring

German labor law significantly restricts biometric data collection in the workplace. Section 26 BDSG (employee data protection) permits the processing of employee personal data only insofar as necessary for the employment relationship. Works councils (Betriebsräte) have co-determination rights under Section 87(1)(6) of the Betriebsverfassungsgesetz (Works Constitution Act) regarding the introduction of biometric monitoring systems. The Federal Labour Court (Bundesarbeitsgericht, BAG) has held that fingerprint-based time and attendance systems require works council consent and must be proportionate.

### Data Protection Authority Enforcement

German state data protection authorities have taken significant enforcement actions:

**Clearview AI:** Multiple German DPAs, including Hamburg and Baden-Württemberg, ordered Clearview AI to delete biometric profiles of German residents, finding that the company's scraping of public photographs and creation of facial recognition databases violated GDPR Articles 6 and 9.

**H&M Workplace Monitoring (2020):** The Hamburg DPA imposed a 35.3 million EUR fine on H&M for extensive employee surveillance at its Nuremberg service center, which included biometric-adjacent monitoring practices. While not exclusively a biometric case, it established important precedent for the limits of workplace monitoring.

### Biometric Authentication in Financial Services

The German Federal Financial Supervisory Authority (BaFin) has issued guidance on biometric authentication in the financial sector, implementing the EU's Payment Services Directive (PSD2) strong customer authentication requirements. German banks increasingly deploy fingerprint and facial recognition for mobile banking under these guidelines.

## ECHR & EU

### GDPR Biometric Data Framework

**Article 4(14) -- Definition:** "Biometric data" means personal data resulting from specific technical processing relating to the physical, physiological or behavioural characteristics of a natural person, which allow or confirm the unique identification of that natural person, such as facial images or dactyloscopic data.

**Article 9 -- Special Categories:** Processing biometric data for identification is prohibited except under enumerated exceptions. The CJEU clarified in Case C-205/21 (Minister van Financiën, 2023) that the prohibition applies specifically when biometric data is processed "for the purpose of uniquely identifying" a natural person, not to all processing of data that could theoretically serve identification purposes.

### AI Act and Biometric Systems

The AI Act (Regulation (EU) 2024/1689) introduces additional restrictions:

**Prohibited Practices (Article 5):** Real-time remote biometric identification in publicly accessible spaces is prohibited for law enforcement, with narrow exceptions requiring judicial authorization.

**High-Risk Classification:** Biometric identification systems not covered by the prohibition are classified as high-risk (Annex III, Category 1), subject to conformity assessments, risk management, transparency, and accuracy requirements.

### Law Enforcement Directive (2016/680)

Directive 2016/680 governs the processing of personal data, including biometric data, by competent authorities for law enforcement purposes. It requires that biometric data processing have a clear legal basis, be strictly necessary, and be subject to appropriate safeguards.

### European Court of Human Rights

**S. and Marper v. United Kingdom (Applications Nos. 30562/04 and 30566/04, Grand Chamber Judgment of December 4, 2008):** The seminal ECHR judgment on biometric data retention. The Grand Chamber unanimously found a violation of Article 8 where the UK retained fingerprints, cellular samples, and DNA profiles of persons who had been arrested but not convicted. The Court held that the blanket and indiscriminate retention of biometric data of unconvicted persons was disproportionate, regardless of the legitimate aim of crime prevention.

**Gaughran v. United Kingdom (Application No. 45245/15, Judgment of February 13, 2020):** The Court found a violation of Article 8 where police indefinitely retained biometric data (photographs, fingerprints, DNA) of all convicted persons without any mechanism for review. The Court emphasized that even convicted persons retain privacy rights in their biometric data and that retention must be proportionate and subject to periodic review.

**Breyer v. Germany (Application No. 50001/12, Judgment of January 30, 2020):** The Court addressed the retention of biometric and personal data in the context of security investigations, finding that Germany's statutory framework provided sufficient safeguards but emphasizing the need for effective independent oversight.

## Comparative Analysis

### Definitional Scope

Jurisdictions define biometric data differently. BIPA uses a narrow, enumerated list (retina/iris scan, fingerprint, voiceprint, face/hand geometry). The GDPR employs a functional definition based on whether technical processing allows unique identification. PIPA's definition encompasses biometric recognition information broadly. These definitional differences create compliance complexity for multinational organizations.

### Consent Models

All jurisdictions require consent for biometric data collection, but the form and timing vary. BIPA requires prior written informed consent -- the most stringent form. The GDPR and PIPA require explicit consent but do not mandate written form specifically. The practical difference is significant: BIPA's written consent requirement has been the basis for many enforcement actions where organizations collected biometric data through automated systems without affirmative written authorization.

### Enforcement and Remedies

BIPA's private right of action creates uniquely powerful enforcement incentives, generating massive class action litigation. The EU relies primarily on regulatory enforcement through DPAs, with private claims available but less commonly pursued. South Korea relies on PIPC administrative enforcement. The $5+ billion in BIPA settlements and verdicts exceeds the total biometric-related enforcement by all European DPAs combined.

### Irrevocability Problem

All jurisdictions recognize the unique sensitivity of biometric data -- unlike passwords or credit card numbers, biometric identifiers cannot be changed if compromised. This irrevocability drives stricter protective standards across all frameworks and has been specifically cited in legislative findings (BIPA Section 5(c)) and judicial reasoning (S. and Marper, paragraph 84).

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 2008 | United States | Illinois enacts BIPA |
| 2008 | ECHR | S. and Marper v. UK: blanket biometric retention violates Article 8 |
| 2009 | United States | Texas CUBI enacted |
| 2011 | South Korea | PIPA enacted; biometric data classified as sensitive information |
| 2016 | EU | GDPR adopted (applicable 2018); Article 9 biometric data protections |
| 2016 | EU | Law Enforcement Directive 2016/680 adopted |
| 2017 | United States | Washington Biometric Privacy Law enacted |
| 2019 | United States | Rosenbach v. Six Flags: no actual harm required for BIPA claims |
| 2020 | Germany | Hamburg DPA: 35.3 million EUR fine against H&M for workplace monitoring |
| 2020 | ECHR | Gaughran v. UK: indefinite biometric retention of convicted persons violates Article 8 |
| 2021 | United States | $650 million Facebook BIPA settlement |
| 2023 | South Korea | PIPA comprehensively amended; enhanced biometric data protections |
| 2023 | United States | Cothron v. White Castle: each biometric scan is separate BIPA violation |
| 2023 | EU | CJEU Case C-205/21: clarifies scope of biometric data processing prohibition |
| 2024 | EU | AI Act adopted; biometric identification systems classified and restricted |
| 2024 | United States | Texas AG files $1.4 billion suit against Meta for biometric violations |

## References

### South Korea
- Personal Information Protection Act (개인정보 보호법), Article 23. Available at: https://elaw.klri.re.kr/
- Credit Information Act (신용정보법). Available at: https://elaw.klri.re.kr/
- PIPC, "Guidelines on Biometric Data Processing," 2023.

### United States
- Biometric Information Privacy Act (BIPA), 740 ILCS 14. Available at: https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004
- Rosenbach v. Six Flags Entertainment Corp., 2019 IL 123186 (Ill. 2019).
- Cothron v. White Castle System, Inc., 2023 IL 128004 (Ill. 2023).
- Rogers v. BNSF Railway Co., No. 19-cv-3083 (N.D. Ill. 2023).

### Germany
- BDSG, Section 22. Available at: https://www.gesetze-im-internet.de/bdsg_2018/__22.html
- Hamburg DPA, "H&M Fine Decision," October 2020.
- Betriebsverfassungsgesetz, Section 87(1)(6). Available at: https://www.gesetze-im-internet.de/betrvg/

### ECHR & EU
- GDPR, Articles 4(14) and 9. Available at: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Regulation (EU) 2024/1689 (AI Act). Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- S. and Marper v. United Kingdom, Applications Nos. 30562/04 and 30566/04, ECtHR Grand Chamber Judgment of December 4, 2008.
- Gaughran v. United Kingdom, Application No. 45245/15, ECtHR Judgment of February 13, 2020.
