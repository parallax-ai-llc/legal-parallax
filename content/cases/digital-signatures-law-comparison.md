---
id: "digital-signatures-law-comparison"
name: "Digital Signatures: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Technology Law", "Contract Law", "Authentication"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Digital_signature"
lastUpdated: "2026-03-11"
---

## Summary

Digital signatures (전자서명) -- cryptographic mechanisms that authenticate the identity of the signer and the integrity of signed electronic documents -- have become foundational to modern commerce, governance, and legal transactions. South Korea was among the earliest adopters of comprehensive digital signature legislation, enacting the Electronic Signature Act (전자서명법) in 1999, which established a government-certified public key infrastructure (PKI) system; this law was fundamentally reformed in 2020 to abolish the monopoly of government-certified certificates and introduce a technology-neutral framework recognizing all forms of electronic signatures, including blockchain-based and biometric signatures. The United States addressed digital signatures through two complementary instruments: the federal Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. Sections 7001-7031, enacted 2000), which establishes the general legal validity of electronic signatures in interstate commerce, and the Uniform Electronic Transactions Act (UETA, 1999), adopted by 49 states, which provides a consistent state-level framework; additionally, the Government Paperwork Elimination Act of 1998 (GPEA) mandated federal agencies to accept electronic signatures. Germany's approach is shaped by the EU's electronic identification and trust services framework, principally the eIDAS Regulation (Regulation (EU) No 910/2014), which Germany implements through the Vertrauensdienstegesetz (VDG, Trust Services Act, 2017), establishing three tiers of electronic signatures -- simple, advanced, and qualified -- with qualified electronic signatures (qualifizierte elektronische Signatur) carrying the highest legal weight equivalent to handwritten signatures under Section 126a BGB. At the European level, the eIDAS Regulation established a harmonized legal framework for electronic signatures across all EU member states, with the revised eIDAS 2.0 Regulation (Regulation (EU) 2024/1183) adopted in April 2024 introducing the European Digital Identity Wallet and expanding the scope to cover electronic attestations of attributes and electronic ledgers.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Statute** | Electronic Signature Act (전자서명법, 1999, reformed 2020) | E-SIGN Act (2000); UETA (1999) | VDG (2017); BGB Section 126a | eIDAS (Regulation 910/2014); eIDAS 2.0 (Regulation 2024/1183) |
| **Regulatory Authority** | Ministry of Science and ICT; Korea Internet & Security Agency (KISA) | NIST; state secretaries of state | Bundesnetzagentur | European Commission; national supervisory bodies |
| **Signature Tiers** | Electronic signature; certified electronic signature (abolished 2020); recognized electronic signature | Electronic signature (general, technology-neutral) | Simple, advanced, and qualified electronic signatures | Simple, advanced, and qualified electronic signatures |
| **Highest Legal Effect** | Electronic signature with recognized reliability | Same as handwritten (E-SIGN Act equivalence) | Qualified electronic signature = handwritten (Section 126a BGB) | Qualified electronic signature = handwritten (Art. 25(2) eIDAS) |
| **PKI Requirement** | Abolished government PKI monopoly in 2020 | No mandatory PKI; technology-neutral | Qualified trust service providers under VDG | Qualified trust service providers under eIDAS |
| **Cross-Border Recognition** | Bilateral agreements; limited mutual recognition | Federal-state; limited international recognition | Automatic within EU under eIDAS | Full mutual recognition within EU (Art. 25(3) eIDAS) |
| **Digital Identity Wallet** | Mobile identification expanding | No federal digital identity wallet | German eID card (Personalausweis); EU Wallet forthcoming | European Digital Identity Wallet (eIDAS 2.0) |
| **Penalties for Misuse** | Up to 3 years imprisonment or 30 million KRW fine | Varies by context; federal fraud statutes apply | Fines under VDG; criminal fraud under StGB Section 263a | Member states set penalties; eIDAS 2.0 requires effective sanctions |

## South Korea

### Legal Framework

South Korea's digital signature legislation reflects the country's rapid digital transformation and its government's proactive approach to establishing digital infrastructure.

**Electronic Signature Act (전자서명법, 1999):** South Korea enacted the Electronic Signature Act on February 5, 1999, making it one of the earliest comprehensive digital signature laws globally. The original Act established a government-certified digital certificate system (공인인증서, gong-in injeung-seo) administered through licensed Certification Authorities (CAs) designated by the Ministry of Science and ICT. These government-certified certificates became the de facto mandatory authentication mechanism for online banking, e-government services, insurance, securities trading, and numerous other digital transactions.

**Problems with the Original System:** While the government-certified certificate system achieved near-universal adoption -- with over 36 million active certificates at its peak -- it drew significant criticism. The system required ActiveX browser plugins, creating security vulnerabilities and browser compatibility issues. It effectively mandated a single technology (PKI-based certificates), stifling innovation in authentication methods. Small businesses and individual users found the system cumbersome, particularly the requirement to store certificates on USB drives or hard drives.

### 2020 Reform

The Electronic Signature Act was fundamentally reformed effective December 10, 2020, implementing the most significant changes since the law's enactment:

**Abolition of Government-Certified Certificate Monopoly:** The distinction between "government-certified" (공인) and "private" (사설) electronic signatures was eliminated. All electronic signatures now receive equal legal treatment, provided they meet reliability requirements.

**Technology-Neutral Framework:** The reformed Act recognizes any electronic information attached to or logically associated with an electronic document as a valid electronic signature, regardless of the underlying technology. This enables blockchain-based signatures, biometric authentication, mobile-based signatures, and other emerging technologies to carry legal validity.

**Recognized Electronic Signature Services:** A new category of "recognized electronic signature services" (인정 전자서명) was established, where providers undergo government evaluation of their operational and technical capabilities by the Korea Internet & Security Agency (KISA, 한국인터넷진흥원) but are not granted monopoly status.

### Current Landscape

Following the 2020 reform, multiple private-sector electronic signature services have gained market recognition, including KakaoTalk certification (through Kakao's mobile platform), Naver Sign, PASS (through mobile carriers), and banking app-based signatures. By 2025, mobile-based electronic signatures accounted for over 70 percent of new signature authentication events, displacing the former government-certified certificate system.

### Penalties

Forging or misusing electronic signatures carries criminal penalties of up to 3 years imprisonment or fines up to 30 million KRW. Trust service providers that fail to maintain security standards face administrative sanctions including suspension of recognition.

## United States

### Legal Framework

The United States adopted a technology-neutral, minimally prescriptive approach to electronic signatures, reflecting its general preference for market-driven solutions in technology regulation.

**E-SIGN Act (15 U.S.C. Sections 7001-7031, 2000):** The Electronic Signatures in Global and National Commerce Act, signed by President Clinton on June 30, 2000, establishes the core principle that electronic signatures and records may not be denied legal effect solely because they are in electronic form. The Act defines an "electronic signature" broadly as "an electronic sound, symbol, or process, attached to or logically associated with a contract or other record and executed or adopted by a person with the intent to sign the record."

**Key Provisions of E-SIGN:**
- Contracts, signatures, and records may not be denied legal effect solely because of electronic form (Section 7001(a)).
- Consumer consent to electronic records must be affirmative and informed, with specific disclosure requirements (Section 7001(c)).
- Certain documents are excluded, including wills, codicils, testamentary trusts, adoption and divorce documents, court orders, and notices related to utility service cancellation, default, foreclosure, and product recalls (Section 7003).
- The Act preserves state authority to modify requirements through UETA adoption or comparable legislation (Section 7002).

**Uniform Electronic Transactions Act (UETA, 1999):** Promulgated by the Uniform Law Commission, UETA has been adopted by 49 states and the District of Columbia (all except New York, which enacted its own Electronic Signatures and Records Act). UETA provides parallel rules establishing the legal validity of electronic records and signatures, with detailed provisions on attribution, timing, and error correction.

### Government Use

The Government Paperwork Elimination Act (GPEA, 1998) required federal agencies to provide for the option of electronic submission, maintenance, or disclosure of information as a substitute for paper. The Federal ESIGN Modernization Act of 2023 updated the framework for federal agency use of electronic signatures, aligning government practices with evolving technology.

### Sector-Specific Requirements

| Sector | Regulation | Signature Requirement |
|--------|-----------|----------------------|
| Financial services | SEC Rule 17a-4; FINRA rules | Electronic records must be preserved in non-rewritable format |
| Healthcare | HIPAA (45 C.F.R. Part 162) | Electronic signatures on health transactions must ensure authentication |
| Real estate | State recording statutes; UETA exceptions | Many states accept electronic notarization; Remote Online Notarization (RON) laws in 45+ states |
| FDA-regulated | 21 C.F.R. Part 11 | Electronic signatures in pharmaceutical/medical device contexts must meet specific authentication requirements |

### Judicial Treatment

Courts have consistently upheld the validity of electronic signatures under E-SIGN and UETA. In Specht v. Netscape Communications Corp. (306 F.3d 17, 2d Cir. 2002), the court established that electronic agreement formation requires manifestation of assent, setting foundational precedent for clickwrap and browsewrap agreements.

## Germany

### Legal Framework

Germany's digital signature framework has evolved from a pioneering national approach to full integration with the EU eIDAS Regulation.

**Signaturgesetz (SigG, Signature Act, 1997):** Germany was among the first EU member states to enact digital signature legislation, with the Signaturgesetz of 1997 establishing a framework for digital signatures based on asymmetric cryptography and accredited certification service providers. The SigG was updated in 2001 to implement the EU Electronic Signatures Directive 1999/93/EC.

**Vertrauensdienstegesetz (VDG, Trust Services Act, 2017):** Following the entry into force of the eIDAS Regulation in July 2016, Germany replaced the SigG with the VDG, which serves as the national implementing legislation for eIDAS. The VDG designates the Bundesnetzagentur (Federal Network Agency) as the supervisory body for trust service providers and establishes the administrative framework for qualified trust services.

### Three-Tier Signature System

Germany, implementing eIDAS, recognizes three tiers of electronic signatures:

**Simple Electronic Signature (einfache elektronische Signatur):** Any data in electronic form attached to or logically associated with other electronic data, used by the signatory to sign. This includes scanned handwritten signatures, typed names in emails, and similar informal electronic identifiers. Legal effect: admissible as evidence but no presumption of authenticity.

**Advanced Electronic Signature (fortgeschrittene elektronische Signatur):** Must be uniquely linked to the signatory, capable of identifying the signatory, created using data under the signatory's sole control, and linked to the signed data so that any subsequent change is detectable. Legal effect: stronger evidentiary value; commonly used in business-to-business transactions.

**Qualified Electronic Signature (qualifizierte elektronische Signatur, QES):** An advanced electronic signature created by a qualified electronic signature creation device, based on a qualified certificate. Under Section 126a BGB, a qualified electronic signature can substitute for the written form (Schriftform) required by statute for certain legal transactions. This is the only tier that carries the same legal effect as a handwritten signature.

### Written Form Requirement and Section 126a BGB

German law frequently requires written form (Schriftform) for legally significant documents, including employment contracts exceeding certain thresholds, commercial lease agreements, consumer credit agreements, and suretyship declarations. Section 126a BGB allows a qualified electronic signature to substitute for the handwritten signature requirement where Schriftform is prescribed, provided all parties agree to use the electronic form.

### German eID Card

The German identity card (Personalausweis) has incorporated an electronic identification function (eID-Funktion) since 2010, enabling secure online authentication for e-government services and private-sector applications. As of 2024, over 70 million German ID cards carry the eID function, though usage rates for online authentication remain comparatively low.

## ECHR & EU

### EU Electronic Signatures Directive 1999/93/EC

The EU first addressed electronic signatures through Directive 1999/93/EC, adopted on December 13, 1999. This Directive established the principle that electronic signatures should not be denied legal effectiveness solely on the ground that they are in electronic form. It introduced the concept of "advanced electronic signatures" based on qualified certificates, created by secure signature creation devices. However, implementation diverged significantly across member states, creating barriers to cross-border recognition.

### eIDAS Regulation (Regulation (EU) No 910/2014)

The electronic Identification, Authentication and Trust Services (eIDAS) Regulation, adopted on July 23, 2014, and fully applicable from July 1, 2016, replaced the 1999 Directive with a directly applicable regulation to ensure uniform application:

**Article 25 -- Legal Effects of Electronic Signatures:** Electronic signatures shall not be denied legal effect and admissibility as evidence in legal proceedings solely on the grounds that they are in electronic form. A qualified electronic signature shall have the legal effect equivalent to a handwritten signature. A qualified electronic signature based on a qualified certificate issued in one member state shall be recognized as a qualified electronic signature in all other member states.

**Trust Service Providers:** eIDAS establishes a regulatory framework for qualified trust service providers (QTSPs), which must meet stringent technical and organizational requirements, undergo regular conformity assessments, and be supervised by national supervisory bodies. The EU Trusted List publishes all QTSPs across member states.

**Electronic Seals:** eIDAS introduces electronic seals for legal persons, analogous to electronic signatures for natural persons, enabling organizations to ensure the origin and integrity of documents.

### eIDAS 2.0 (Regulation (EU) 2024/1183)

The revised eIDAS Regulation, adopted on April 11, 2024, introduces transformative changes:

**European Digital Identity Wallet (EUDIW):** Member states must issue European Digital Identity Wallets to all citizens and residents who request them by 2026. The Wallet will enable users to store and present electronic identification data, qualified electronic signatures, and electronic attestations of attributes (such as diplomas, professional qualifications, or driving licenses) in a secure, privacy-preserving manner.

**Qualified Electronic Attestations of Attributes:** eIDAS 2.0 introduces a new trust service for attesting to personal attributes, enabling cross-border verification of qualifications, affiliations, and other personal data.

**Electronic Ledgers:** The regulation recognizes qualified electronic ledgers (distributed ledger/blockchain technology) as a trust service, providing legal certainty for blockchain-based records and smart contracts.

### European Court of Human Rights

The ECHR has not directly adjudicated digital signature disputes, but its Article 8 (right to respect for private life) jurisprudence is relevant to the deployment of electronic identity systems. In S. and Marper v. United Kingdom (Applications Nos. 30562/04 and 30566/04, Grand Chamber Judgment of December 4, 2008), the Court established that the retention of personal data -- including biometric data used in advanced signature systems -- engages Article 8 rights, requiring legal basis, legitimate aim, and proportionality.

## Comparative Analysis

### Technology Neutrality versus Prescriptiveness

The jurisdictions occupy different positions on the spectrum of technology neutrality. The United States adopts the most technology-neutral approach, defining electronic signatures broadly without mandating specific technologies. The EU's eIDAS framework is semi-prescriptive, recognizing all electronic signatures but granting superior legal effects only to qualified signatures meeting defined technical standards. South Korea transitioned from a highly prescriptive system (government-certified PKI monopoly) to a technology-neutral framework in 2020, representing a dramatic philosophical shift. Germany, within the EU framework, maintains detailed technical requirements for qualified electronic signatures while recognizing simpler forms.

### Legal Effect Hierarchy

A key distinction lies in how jurisdictions assign legal effect. The United States treats all electronic signatures equally under E-SIGN -- there is no hierarchy of legal effects based on technology sophistication. The EU and Germany establish a clear three-tier hierarchy, with only qualified electronic signatures receiving presumptive equivalence to handwritten signatures. South Korea's reformed system grants legal effect to all electronic signatures but allows parties to require specific reliability levels contractually.

### Cross-Border Recognition

The EU's eIDAS framework provides the most comprehensive cross-border recognition mechanism, with mandatory mutual recognition of qualified electronic signatures across all member states. The United States lacks comparable international recognition mechanisms, though bilateral agreements exist with specific trading partners. South Korea has pursued bilateral mutual recognition agreements with select partners.

### Digital Identity Integration

The convergence of digital signatures with broader digital identity systems is most advanced in the EU through eIDAS 2.0's European Digital Identity Wallet. Germany's eID card represents an early national-level integration. South Korea's reformed system effectively integrates with mobile identity platforms. The United States lacks a unified federal digital identity framework.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 1997 | Germany | Signaturgesetz (SigG) enacted -- among first EU digital signature laws |
| 1998 | United States | Government Paperwork Elimination Act (GPEA) enacted |
| 1999 | South Korea | Electronic Signature Act (전자서명법) enacted; government-certified PKI established |
| 1999 | EU | Electronic Signatures Directive 1999/93/EC adopted |
| 1999 | United States | Uniform Electronic Transactions Act (UETA) promulgated |
| 2000 | United States | E-SIGN Act signed into law (June 30) |
| 2001 | Germany | SigG updated to implement EU Directive 1999/93/EC |
| 2010 | Germany | eID function incorporated into German identity card |
| 2014 | EU | eIDAS Regulation (No 910/2014) adopted (July 23) |
| 2016 | EU | eIDAS becomes fully applicable (July 1) |
| 2017 | Germany | Vertrauensdienstegesetz (VDG) replaces SigG |
| 2020 | South Korea | Electronic Signature Act fundamentally reformed; government-certified certificate monopoly abolished |
| 2023 | United States | Federal ESIGN Modernization Act updates government electronic signature practices |
| 2024 | EU | eIDAS 2.0 (Regulation 2024/1183) adopted (April 11); European Digital Identity Wallet mandated |
| 2026 | EU | Deadline for member states to issue European Digital Identity Wallets |

## References

### South Korea
- Electronic Signature Act (전자서명법), Act No. 5792 (1999), reformed Act No. 17354 (2020). Available at: https://elaw.klri.re.kr/
- Korea Internet & Security Agency (KISA, 한국인터넷진흥원), "Electronic Signature Recognition Service Guidelines."
- "South Korea Abolishes Government-Certified Digital Certificate System," ZDNet Korea, 2020.

### United States
- Electronic Signatures in Global and National Commerce Act (E-SIGN Act), 15 U.S.C. Sections 7001-7031. Available at: https://www.law.cornell.edu/uscode/text/15/chapter-96
- Uniform Electronic Transactions Act (UETA), Uniform Law Commission, 1999. Available at: https://www.uniformlaws.org/committees/community-home?CommunityKey=2c04b76c-2b7d-4399-977e-d5876f7abef4
- Specht v. Netscape Communications Corp., 306 F.3d 17 (2d Cir. 2002).
- 21 C.F.R. Part 11 -- Electronic Records; Electronic Signatures.

### Germany
- Vertrauensdienstegesetz (VDG), BGBl. 2017 I S. 2745. Available at: https://www.gesetze-im-internet.de/vdg/
- Bürgerliches Gesetzbuch (BGB), Section 126a. Available at: https://www.gesetze-im-internet.de/bgb/__126a.html
- Bundesnetzagentur, "Qualified Trust Service Providers." Available at: https://www.bundesnetzagentur.de/

### ECHR & EU
- Regulation (EU) No 910/2014 (eIDAS). Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32014R0910
- Regulation (EU) 2024/1183 (eIDAS 2.0). Available at: https://eur-lex.europa.eu/eli/reg/2024/1183/oj
- Directive 1999/93/EC on electronic signatures. Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:31999L0093
- S. and Marper v. United Kingdom, Applications Nos. 30562/04 and 30566/04, ECtHR Grand Chamber Judgment of December 4, 2008.
