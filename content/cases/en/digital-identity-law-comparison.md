---
id: "digital-identity-law-comparison"
name: "Digital Identity Regulation: Cross-Jurisdictional Comparison"
date: "2026-03-16"
nationality: "Global"
occupation: ["Legal Analysis", "Comparative Law", "Privacy and Identity"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Digital_identity"
lastUpdated: "2026-03-16"
---

## Summary

Digital identity regulation encompasses the legal frameworks governing national digital identification systems, electronic identity verification, biometric authentication, self-sovereign identity (SSI) models, and the privacy implications of digital identity infrastructure. As governments and private sectors increasingly require digital proof of identity for accessing services, jurisdictions have adopted divergent approaches reflecting fundamental differences in their conceptions of state-individual relationships, privacy norms, and technological infrastructure. The European Union has established the most comprehensive supranational framework through the eIDAS Regulation (Regulation (EU) No 910/2014) and its successor eIDAS 2.0 (Regulation (EU) 2024/1183), which mandates that all EU member states offer European Digital Identity Wallets to their citizens by 2026. South Korea operates one of the world's most advanced national digital identity systems, integrating the Resident Registration Number (주민등록번호) infrastructure with mobile identity verification through the Mobile Driver's License and DID (Decentralized Identifier) pilot programmes. The United States lacks a federal digital identity law, relying on a fragmented landscape of state-issued driver's licenses, Social Security Numbers, and voluntary frameworks such as NIST SP 800-63 for digital authentication. Germany, implementing eIDAS within its national context, has deployed the electronic identity card (Personalausweis with eID function) and is developing its national European Digital Identity Wallet implementation.

## Comparative Table

| Aspect | South Korea | United States | Germany | EU |
|--------|-------------|---------------|---------|-----|
| **Primary Legislation** | Resident Registration Act (주민등록법); Electronic Government Act; Digital Identity Act (proposed 2025) | No federal digital ID law; REAL ID Act (2005); state laws | eIDAS (EU); Personalausweisgesetz (PAuswG); Online Access Act (OZG) | eIDAS 2.0 (Regulation (EU) 2024/1183) |
| **National ID System** | Resident Registration Number (RRN, 주민등록번호); mandatory for all citizens | No national ID; SSN not designed as ID; state driver's licenses | Personalausweis (mandatory from age 16); eID function | European Digital Identity Wallet (mandatory offering by 2026) |
| **Biometric Components** | Fingerprints (10-print); facial photograph | Varies by state; REAL ID requires facial image | Fingerprints (2); facial photograph; eID chip | Biometric data in national ID cards (Regulation (EU) 2019/1157) |
| **Digital Authentication** | Mobile identity (통신사 인증); certificate-based (공인인증서 successor); DID pilots | NIST SP 800-63 (voluntary); Login.gov (federal); state-specific | eID (online identification); BundID portal | eIDAS LoA: Low, Substantial, High; EUDI Wallet |
| **Privacy Framework** | PIPA; RRN usage restrictions (2014 amendments) | No federal privacy law; state laws (CCPA, etc.); Privacy Act 1974 | GDPR; BDSG; constitutional informational self-determination | GDPR; eIDAS 2.0 data minimization requirements |
| **Self-Sovereign Identity** | DID/VC pilot programmes (2023-2025) | Limited; DHS/SVIP pilots; no federal framework | IDunion SSI pilot; eIDAS 2.0 wallet architecture | EUDI Wallet incorporates SSI principles; EBSI infrastructure |
| **Regulatory Authority** | Ministry of Interior and Safety; PIPC | No single authority; NIST; DHS; state DMVs | Federal Ministry of Interior (BMI); BSI; BfDI | European Commission; EU Agency for Cybersecurity (ENISA) |

## South Korea

### Legal Framework

South Korea possesses one of the world's most developed digital identity ecosystems, built upon a comprehensive national identification infrastructure:

- **Resident Registration Act (주민등록법, 1962, as amended):** Establishes the Resident Registration Number (RRN, 주민등록번호) system, assigning a unique 13-digit identification number to every Korean citizen and registered foreign resident. The RRN encodes birth date, gender, and registration district, serving as the foundational identifier across government services, financial systems, and telecommunications.
  - **Article 7 -- Registration and Issuance:** Mandates registration of all citizens within 14 days of birth and all foreign residents within 90 days of establishing residence.
  - **Article 7-4 -- Resident Registration Card:** Provides for the issuance of a physical identification card containing the RRN, photograph, and (since 2012) a fingerprint-based biometric chip.
  - **Article 24-2 -- RRN Usage Restrictions (amended 2014):** Following the massive personal data breaches of 2011-2014 (affecting over 100 million records), Article 24-2 prohibits the collection of RRNs by private entities unless specifically authorized by law, constitutional court ruling, or where no reasonable alternative exists for identity verification.
- **Personal Information Protection Act (PIPA, 개인정보보호법):** Provides comprehensive data protection rules applicable to digital identity data:
  - **Article 24 -- Restrictions on Unique Identifiers:** Prohibits processing of unique identifiers (including RRNs) except where specifically permitted by law. Controllers must use alternative identification methods where feasible.
  - **Article 24-2 -- RRN Processing Restrictions:** Reinforces the 2014 constitutional mandate to restrict RRN collection, requiring data controllers to provide alternative means of identity verification.
  - **Article 23 -- Sensitive Information:** Classifies biometric data used for identification (fingerprints, iris scans, facial recognition data) as sensitive information requiring explicit separate consent.
- **Electronic Government Act (전자정부법):** Establishes the legal framework for digital government services, including electronic authentication for access to government portals, digital document issuance, and inter-agency data sharing.
- **Digital Signature Act (전자서명법, amended 2020):** Previously mandated the use of government-authorized digital certificates (공인인증서) for electronic transactions, creating a monopolistic certification system. The 2020 amendment abolished the "authorized" certificate monopoly, allowing private electronic signatures and diverse authentication methods including biometric, mobile, and blockchain-based verification.

### Key Principles

South Korea's digital identity evolution has progressed through several phases:

1. **Certificate-Based Era (1999-2020):** The government-mandated Public Key Infrastructure (PKI) system required citizens to use "authorized electronic certificates" (공인인증서) issued by designated certification authorities for online banking, tax filing, and e-government services. While providing high security assurance, the system was criticized for poor user experience (requiring ActiveX plugins) and creating barriers to mobile and cross-platform authentication.

2. **Mobile Identity Era (2020-present):** Following the 2020 Digital Signature Act amendment, mobile carrier-based identity verification (통신사 본인확인) and private-sector authentication methods proliferated. The three major carriers (SK Telecom, KT, LG U+) operate identity verification services used by over 95% of Korean adults, leveraging SIM-based authentication combined with knowledge-based verification.

3. **Decentralized Identity Era (2023-present):** The government launched DID (Decentralized Identifier) pilot programmes through the "Government24" (정부24) platform, enabling citizens to store verifiable credentials in mobile wallets. The Ministry of Science and ICT's "Digital Identity 2.0" initiative supports the development of self-sovereign identity infrastructure compatible with W3C DID and Verifiable Credentials standards.

### Notable Cases

- **Constitutional Court RRN Decision (2015, 2011헌마731):** The Constitutional Court ruled that the government's failure to establish adequate safeguards for the RRN system violated the constitutional right to informational self-determination (정보자기결정권), ordering the National Assembly to enact legislation restricting RRN collection by private entities. This landmark decision led to the 2014 PIPA amendments and fundamentally reshaped Korean digital identity policy.
- **Korean National Police Agency Facial Recognition Investigation (2024):** The PIPC investigated the Korean National Police Agency's deployment of a facial recognition identification system at public events, finding that the system's processing of biometric data lacked a sufficient legal basis under PIPA Article 23 and ordering the suspension of real-time facial recognition for crowd monitoring.
- **Mobile Carrier Identity Verification Data Breach (2023):** The PIPC fined LG U+ KRW 6.8 billion (approximately USD 5.1 million) after a data breach exposed the identity verification records of 18 million subscribers, including names, RRNs, and phone numbers, constituting the largest data protection fine in Korean history at that time.

## United States

### Federal Framework

The United States is distinctive among developed nations in lacking a national digital identity system, reflecting deep-seated cultural and political resistance to centralized identification:

- **REAL ID Act of 2005 (Pub. L. 109-13, Division B):** Enacted in response to the 9/11 Commission's recommendation to improve identity document standards, the REAL ID Act establishes minimum standards for state-issued driver's licenses and identification cards accepted for federal purposes (boarding domestic flights, entering federal facilities). Key provisions:
  - **Section 202 -- Minimum Standards:** Requires states to verify applicants' identity through documentation (birth certificate, passport, SSN verification), conduct lawful status verification, and include machine-readable technology (barcode and RFID chip) on REAL ID-compliant cards.
  - **Enforcement Deadline:** Originally May 2008, repeatedly delayed. Full enforcement began May 7, 2025, after which non-compliant IDs are not accepted for federal purposes.
- **Social Security Number (SSN):** While not designed as a national identifier, the SSN (authorized under the Social Security Act of 1935, 42 U.S.C. § 405(c)(2)) has become the de facto universal identifier in the U.S., used for tax administration, credit reporting, employment verification, and financial account opening. Its use as an identifier has been criticized for security vulnerabilities (SSNs were not designed to be secret) and identity theft risks.
- **Privacy Act of 1974 (5 U.S.C. § 552a):** Restricts federal agencies' collection, use, and disclosure of personal information maintained in systems of records, including identity verification data. Section 7 restricts agencies from requiring SSN disclosure unless authorized by statute.
- **NIST Special Publication 800-63 -- Digital Identity Guidelines (Revision 4, 2024):** The primary federal framework for digital authentication, establishing three assurance levels (IAL, AAL, FAL) for identity proofing, authentication, and federation. SP 800-63-4 represents a major revision:
  - **Identity Assurance Levels (IAL):** IAL1 (self-asserted), IAL2 (remote or in-person proofing with evidence verification), IAL3 (in-person proofing with physical and biometric verification).
  - **Authenticator Assurance Levels (AAL):** AAL1 (single-factor), AAL2 (multi-factor), AAL3 (hardware-based multi-factor with verifier impersonation resistance).
  - **Equity and Accessibility:** SP 800-63-4 introduces significant provisions for identity equity, addressing barriers faced by marginalized populations in identity proofing processes, including individuals without traditional identity documents.
- **Login.gov:** The General Services Administration (GSA) operates Login.gov as the federal government's shared identity verification platform, providing IAL2-compliant identity proofing for access to federal agencies' online services. As of 2025, Login.gov serves over 100 million user accounts across 50+ federal agencies.

### State Variations

- **Mobile Driver's License (mDL) Adoption:** Multiple states have implemented ISO 18013-5 compliant mobile driver's licenses: Louisiana (LA Wallet, 2018), Arizona, Colorado, Georgia, Maryland, and others. The American Association of Motor Vehicle Administrators (AAMVA) has published mDL implementation guidelines.
- **California Consumer Privacy Act (CCPA, Cal. Civ. Code § 1798.100):** Applies to the collection and use of identity verification data by private entities, granting California residents rights to know, delete, and opt out of the sale of personal information collected during identity verification processes.
- **Illinois Biometric Information Privacy Act (BIPA, 740 ILCS 14):** Regulates the collection of biometric identifiers (fingerprints, iris scans, facial geometry) used in identity verification, requiring informed consent and creating a private right of action. The Illinois Supreme Court's decisions in Rosenbach v. Six Flags (2019) and Cothron v. White Castle System (2023) significantly expanded BIPA's scope and remedies.

### Notable Cases

- **Aaronson v. IRS (D.D.C. 2023):** A federal court addressed challenges to the IRS's use of ID.me's facial recognition technology for identity verification of taxpayer accounts, raising concerns about biometric data collection, algorithmic bias, and the coercive nature of requiring facial recognition to access government services. The IRS subsequently modified its identity verification procedures.
- **ACLU v. Clearview AI (N.D. Ill. 2022):** Settlement of a BIPA lawsuit against Clearview AI for scraping billions of facial images from the internet to build a facial recognition identification database, resulting in a permanent injunction against Clearview's sale of its database to most private entities in the United States.
- **Brnovich v. Democratic National Committee (2021):** While primarily a voting rights case, the Supreme Court's analysis of identification requirements for voting intersects with digital identity policy, addressing the burden that identification requirements place on marginalized communities.
- **Theft of SSN Database Litigation (2017-present):** Following the Equifax data breach exposing the SSNs of 147 million Americans, subsequent litigation and the FTC's USD 700 million settlement highlighted the fundamental vulnerability of SSN-based identity systems, accelerating calls for SSN reform or replacement.

## Germany

### Legal Framework

Germany's digital identity framework is shaped by its strong constitutional privacy protections, its federal structure, and EU-wide eIDAS requirements:

- **Identity Card Act (Personalausweisgesetz, PAuswG):** Governs the issuance and use of German identity cards (Personalausweis), which are mandatory for all German citizens aged 16 and older:
  - **§ 5 -- Card Features:** The Personalausweis contains a contactless RFID chip storing the holder's name, date of birth, address, photograph, and two fingerprints (mandatory since Regulation (EU) 2019/1157).
  - **§ 18 -- Online Identification Function (eID):** The eID function enables remote identity verification for e-government and private-sector services. Users authenticate through the AusweisApp2 mobile application or compatible card readers, with a PIN protecting access to the chip's data.
  - **§ 18a -- Identity Verification Services:** Authorizes private-sector identity verification service providers (eID-Server operators) to verify identity attributes transmitted from the eID chip, subject to BVA (Federal Office of Administration) authorization.
  - **§ 21 -- Data Minimization:** Implements data minimization by allowing selective attribute disclosure -- service providers may request only the specific identity attributes necessary for their purpose (e.g., age verification without full identity disclosure).
- **Online Access Act (Onlinezugangsgesetz, OZG, 2017):** Required all federal, state, and municipal governments to provide 575 identified administrative services online by the end of 2022 (a deadline that was not fully met). The OZG 2.0 (2024) extends the digitalization mandate and integrates the BundID portal as the central authentication gateway for e-government services, leveraging the eID function.
- **eIDAS Regulation (Regulation (EU) No 910/2014) and eIDAS 2.0 (Regulation (EU) 2024/1183):** Directly applicable in Germany:
  - **eIDAS 2.0 Article 5a -- European Digital Identity Wallets:** Requires Germany (and all member states) to issue European Digital Identity Wallets (EUDI Wallets) to all citizens and residents who request them, free of charge, by 2026. The Wallet must enable storage and selective disclosure of identity attributes, electronic signatures, and verifiable credentials.
  - **eIDAS 2.0 Article 6a -- Cross-Border Recognition:** Mandates mutual recognition of national eID schemes notified under eIDAS, enabling German eID holders to access public services in any EU member state.
- **Basic Law (Grundgesetz) Article 2(1) in conjunction with Article 1(1) -- Right to Informational Self-Determination (informationelle Selbstbestimmung):** Recognized by the Federal Constitutional Court in the Census Decision (Volkszählungsurteil, BVerfGE 65, 1, 1983), this constitutional right provides the foundational principle for German digital identity policy, requiring that individuals maintain control over the collection, processing, and use of their personal data, including identity data.

### Key Principles

Germany's approach to digital identity is characterized by several distinctive features:

1. **Privacy by Design:** The German eID system was designed from inception with data minimization principles, enabling selective attribute disclosure (pseudonymous age verification, address verification without name disclosure, etc.). This contrasts with systems that transmit full identity credentials for each transaction.

2. **Decentralized Architecture:** Germany has resisted centralized identity databases, instead storing identity data on the distributed chip-based infrastructure of individual identity cards. This decentralized approach reflects constitutional concerns about centralized state surveillance capabilities.

3. **Low eID Adoption Challenge:** Despite the technical sophistication of the German eID system, adoption rates have been historically low (estimated at 10-15% of eligible cardholders actively using the eID function as of 2024), attributed to limited availability of compatible services, user experience barriers, and the convenience of alternative identification methods.

4. **EUDI Wallet Implementation:** The German federal government, through the BMI and BSI, is developing the national EUDI Wallet implementation ("Smart-eID" and the broader EUDI Wallet initiative), aiming to integrate the existing eID infrastructure with the new European wallet architecture.

### Notable Cases

- **Federal Constitutional Court Census Decision (BVerfGE 65, 1, 1983):** The foundational decision establishing the right to informational self-determination, which continues to shape all German digital identity policy. The Court held that individuals must be able to determine the disclosure and use of their personal data, and that comprehensive profiling through data linking threatens human dignity.
- **Federal Constitutional Court ID Retention Decision (BVerfGE 155, 119, 2020):** The Court upheld the mandatory inclusion of fingerprints in German identity cards (implementing Regulation (EU) 2019/1157) but imposed strict limits on the storage, access, and use of biometric data, requiring that fingerprint data be stored exclusively on the card chip and not in centralized databases.
- **BSI Smart-eID Security Assessment (2024):** The BSI conducted a security assessment of the Smart-eID solution (which stores eID credentials on the smartphone's Secure Element rather than requiring the physical card), certifying it at the "substantial" assurance level under eIDAS and identifying conditions for achieving "high" assurance.
- **Hamburg DPA Video Identification Decision (2023):** The Hamburg Commissioner for Data Protection ruled that video identification procedures (VideoIdent) used by banks and telecommunications providers for remote identity verification must comply with GDPR transparency and data minimization requirements, prohibiting the retention of full video recordings beyond the verification transaction.

## ECHR / EU Framework

### Convention Articles

The European Convention on Human Rights provides critical protections applicable to digital identity systems:

- **Article 8 -- Right to Respect for Private and Family Life:** Digital identity systems inherently involve the collection and processing of personal data, engaging Article 8's protections. The ECtHR has established that the storage of personal data by public authorities, including biometric data, constitutes an interference with Article 8 rights that must satisfy the proportionality requirements of Article 8(2). Key jurisprudence:
  - **S. and Marper v. United Kingdom (Grand Chamber, 2008, App. No. 30562/04):** The Court held that the blanket retention of DNA profiles and fingerprints of individuals not convicted of any offence violated Article 8, establishing that biometric data retention must be proportionate and subject to adequate safeguards.
  - **Gaughran v. United Kingdom (2020, App. No. 45245/15):** The Court extended S. and Marper principles to convicted individuals, finding that indefinite retention of biometric data without periodic review violated Article 8.
- **Article 14 -- Prohibition of Discrimination:** Digital identity systems that create barriers for marginalized populations (elderly persons, persons with disabilities, undocumented individuals, ethnic minorities) may violate Article 14 in conjunction with Article 8 or other substantive rights.
- **Article 3 -- Prohibition of Torture and Inhuman Treatment:** Relevant in extreme cases where denial of digital identity leads to exclusion from essential services, potentially amounting to degrading treatment.

### EU Legislative Framework

- **eIDAS 2.0 (Regulation (EU) 2024/1183):** The revised eIDAS Regulation represents the EU's most ambitious digital identity initiative:
  - **European Digital Identity Wallet (EUDI Wallet):** Article 5a requires member states to offer EUDI Wallets enabling citizens and residents to: securely store and selectively disclose identity attributes; create qualified electronic signatures; authenticate to online services; and store verifiable credentials (diplomas, licenses, permits).
  - **Level of Assurance:** Article 8 establishes three assurance levels (low, substantial, high) for electronic identification schemes, with the EUDI Wallet required to support "high" assurance for government services.
  - **Unique Identification:** Article 11a introduces a mandatory "person identification data" minimum dataset for cross-border identification, while respecting national choices on unique identifiers.
  - **Privacy and Data Protection:** Articles 5a(16)-(17) embed privacy-by-design principles, requiring that wallets enable selective disclosure, prevent tracking by issuers and verifiers, and ensure that wallet providers cannot access user transaction data.
  - **Qualified Trust Services:** eIDAS 2.0 expands the framework for qualified trust services, including qualified electronic attestations of attributes (QEAA), enabling verified credentials issued by trusted authorities.
- **Regulation (EU) 2019/1157 -- Strengthening Security of ID Cards:** Requires all EU member states to issue identity cards with a contactless chip containing facial image and two fingerprints, meeting ICAO standards. Full compliance was required by 3 August 2021, with a transition period for existing cards.
- **GDPR (Regulation (EU) 2016/679):** The GDPR provides the overarching data protection framework for digital identity processing:
  - **Article 9 -- Special Categories of Data:** Biometric data used for the purpose of uniquely identifying a natural person is classified as special category data, requiring an Article 9(2) exception for lawful processing.
  - **Article 25 -- Data Protection by Design:** Requires that digital identity systems implement data protection principles (minimization, purpose limitation, storage limitation) from the design stage.
  - **Article 35 -- Data Protection Impact Assessment:** Processing of biometric data for identification purposes triggers the mandatory DPIA requirement.

### Key Case Law and Decisions

- **S. and Marper v. United Kingdom (ECtHR, Grand Chamber, 2008):** The landmark decision establishing that blanket biometric data retention violates Article 8 ECHR, with direct implications for the design of national identity databases.
- **CJEU, Joined Cases C-511/18, C-512/18 and C-520/18, La Quadrature du Net (2020):** The CJEU ruled that generalized and indiscriminate retention of identity-linked metadata violates EU fundamental rights, establishing principles applicable to digital identity transaction logging.
- **CJEU, Case C-205/21, Ministerstvo na vatreshnite raboti (2023):** The CJEU ruled on the conditions for police use of biometric identification databases, requiring that access be limited to cases of genuine and present or foreseeable serious threat, proportionate, and subject to judicial or independent review.
- **EDPB Opinion on EUDI Wallet (2024):** The European Data Protection Board adopted an opinion on the implementing acts for the EUDI Wallet, emphasizing the need for strong unlinkability (preventing correlation of wallet transactions), user consent for each disclosure, and prohibition of centralized transaction logging by wallet providers.

## Comparative Analysis

| Dimension | South Korea | United States | Germany / EU | ECHR Framework |
|-----------|-------------|---------------|--------------|----------------|
| **System Architecture** | Centralized RRN; transitioning to hybrid (mobile + DID) | Decentralized (state-issued); no national ID | Decentralized (card-based eID); EUDI Wallet | Human rights constraints on system design |
| **Biometric Integration** | Extensive (fingerprints, facial recognition) | Limited; state-dependent; BIPA constraints | Mandatory fingerprints (EU reg.); eID chip | Proportionality requirements (S. and Marper) |
| **Privacy Model** | PIPA-regulated; RRN restrictions post-2014 | Fragmented; no comprehensive federal privacy law | Constitutional informational self-determination; GDPR | Article 8 proportionality; data minimization |
| **SSI/Decentralized ID** | Active DID pilot programmes; government-supported | Limited federal engagement; private sector pilots | IDunion pilot; EUDI Wallet with SSI principles | N/A |
| **Digital Inclusion** | High digital penetration (95%+); elderly access concerns | Significant digital divide; equity in identity proofing | Low eID adoption despite universal card issuance | Article 14 non-discrimination obligations |
| **Cross-Border Recognition** | Bilateral agreements (e.g., with Japan, EU) | REAL ID for domestic; passport for international | eIDAS mutual recognition; EUDI Wallet cross-border | N/A |

## Timeline

| Year | Jurisdiction | Milestone |
|------|-------------|-----------|
| 1962 | South Korea | Resident Registration Act enacted; RRN system established |
| 1974 | US | Privacy Act enacted, regulating federal agency identity records |
| 1983 | Germany | Federal Constitutional Court Census Decision (BVerfGE 65, 1) |
| 1999 | South Korea | Electronic Signature Act establishes PKI-based digital certificates |
| 2005 | US | REAL ID Act enacted |
| 2010 | Germany | New Personalausweis with eID function launched |
| 2014 | EU | eIDAS Regulation adopted (Regulation (EU) No 910/2014) |
| 2014 | South Korea | PIPA amended to restrict RRN collection by private entities |
| 2015 | South Korea | Constitutional Court RRN protection decision |
| 2017 | Germany | Online Access Act (OZG) enacted |
| 2018 | EU | eIDAS mutual recognition obligation enters into force |
| 2019 | EU | Regulation (EU) 2019/1157 on strengthening ID card security adopted |
| 2020 | South Korea | Electronic Signature Act amended; PKI monopoly abolished |
| 2020 | ECtHR | Gaughran v. UK: indefinite biometric retention violates Article 8 |
| 2021 | EU | EUDI Wallet proposal announced (June) |
| 2023 | South Korea | DID pilot programmes launched through Government24 |
| 2023 | Germany | Hamburg DPA VideoIdent decision |
| 2024 | EU | eIDAS 2.0 adopted (Regulation (EU) 2024/1183) |
| 2024 | US | NIST SP 800-63-4 (Digital Identity Guidelines Revision 4) published |
| 2024 | Germany | BSI Smart-eID security certification |
| 2024 | EU | EDPB Opinion on EUDI Wallet implementing acts |
| 2025 | US | REAL ID full enforcement begins (May 7) |
| 2026 | EU | Member states must offer EUDI Wallets to citizens and residents |

## References

1. Regulation (EU) 2024/1183 of the European Parliament and of the Council amending Regulation (EU) No 910/2014 as regards establishing the European Digital Identity Framework (eIDAS 2.0), OJ L, 2024.
2. Regulation (EU) No 910/2014 on electronic identification and trust services (eIDAS), OJ L 257, 28 August 2014.
3. South Korea, Resident Registration Act (주민등록법), as amended.
4. South Korea, Personal Information Protection Act (개인정보보호법), as amended.
5. South Korea, Electronic Signature Act (전자서명법), as amended 2020.
6. United States, REAL ID Act of 2005, Pub. L. 109-13, Division B.
7. NIST, Special Publication 800-63-4, "Digital Identity Guidelines," 2024.
8. Personalausweisgesetz (PAuswG), Federal Law Gazette I.
9. Onlinezugangsgesetz (OZG), Federal Law Gazette I, 2017; OZG 2.0, 2024.
10. Regulation (EU) 2019/1157 on strengthening the security of identity cards and of residence documents, OJ L 188, 12 July 2019.
11. ECtHR, S. and Marper v. United Kingdom, App. Nos. 30562/04 and 30566/04, Grand Chamber, 4 December 2008.
12. ECtHR, Gaughran v. United Kingdom, App. No. 45245/15, 13 February 2020.
13. BVerfG, Census Decision (Volkszählungsurteil), BVerfGE 65, 1, 15 December 1983.
14. BVerfG, ID Card Fingerprint Decision, BVerfGE 155, 119, 2020.
15. CJEU, Joined Cases C-511/18, C-512/18, C-520/18, La Quadrature du Net and Others, 6 October 2020.
16. CJEU, Case C-205/21, Ministerstvo na vatreshnite raboti, 26 January 2023.
17. EDPB, "Opinion on the EUDI Wallet Implementing Acts," 2024.
18. South Korea Constitutional Court, Decision 2011헌마731, 2015.
19. South Korea Personal Information Protection Commission, "LG U+ Data Breach Decision," 2023.
20. Rosenbach v. Six Flags Entertainment Corp., 2019 IL 123186 (Ill. 2019).
