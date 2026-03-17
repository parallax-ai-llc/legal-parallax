---
id: "location-tracking-law-comparison"
name: "Location Tracking: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Privacy Law", "Criminal Procedure", "Technology Law"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Location_tracking"
lastUpdated: "2026-03-11"
---

## Summary

Location tracking -- the monitoring of an individual's geographic position through GPS devices, cell-site location information (CSLI), Wi-Fi positioning, vehicle tracking systems, or mobile applications -- has emerged as one of the most significant privacy challenges of the digital age, as the ubiquity of location-capable devices generates comprehensive records of individuals' movements that can reveal intimate details of their lives. South Korea regulates location tracking through the Act on the Protection, Use, etc. of Location Information (위치정보의 보호 및 이용 등에 관한 법률, Location Information Act, Act No. 7372, 2005) establishing a specialized framework for location data protection, the Protection of Communications Secrets Act (통신비밀보호법) governing law enforcement access to real-time and historical location data, and PIPA (개인정보 보호법) providing general personal data protections, with the Constitutional Court (헌법재판소) addressing the constitutionality of location surveillance in multiple decisions including the landmark 2018 ruling requiring judicial authorization for real-time cell-site location tracking. The United States has seen the most significant judicial development in this area, with the Supreme Court's watershed decision in Carpenter v. United States (2018) establishing that government acquisition of historical CSLI constitutes a Fourth Amendment search requiring a warrant, building on the foundations laid in United States v. Jones (2012) concerning GPS tracking devices, though statutory protections remain fragmented across the Electronic Communications Privacy Act (ECPA, 18 U.S.C. Section 2701 et seq.), the Communications Act (47 U.S.C. Section 222), and inconsistent state laws. Germany regulates location tracking under the comprehensive framework of the Telecommunications Act (Telekommunikationsgesetz, TKG), the Code of Criminal Procedure (Strafprozessordnung, StPO) Sections 100a-100j governing telecommunications surveillance including location data, the GDPR, and the ePrivacy Directive 2002/58/EC as transposed through the TKG, with the Federal Constitutional Court's data retention decisions (BVerfGE 125, 260 (2010)) and the CJEU's SpaceNet ruling (2022) having struck down German data retention provisions that included location data. The EU framework, anchored in the GDPR, the ePrivacy Directive (to be replaced by the proposed ePrivacy Regulation), and the CJEU's landmark data retention jurisprudence, establishes the most privacy-protective regime for location data globally, while the ECHR's Article 8 jurisprudence in cases such as Uzun v. Germany (2010) and Ben Faiza v. France (2018) provides the overarching human rights framework.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Law** | Location Information Act (위치정보법, 2005); Communications Secrets Act | ECPA; Fourth Amendment (Carpenter); state laws | TKG; StPO Sections 100a-100j; GDPR | ePrivacy Directive 2002/58/EC; GDPR; ECHR Art. 8 |
| **GPS Tracking (Law Enforcement)** | Judicial warrant required | Warrant required (United States v. Jones) | Judicial order under StPO Section 100i | "In accordance with the law"; proportionality required |
| **Historical CSLI** | Court order required (Communications Secrets Act Art. 13) | Warrant required (Carpenter v. United States) | Judicial order; data retention struck down | CJEU restricts retention; access requires warrant-equivalent |
| **Real-Time CSLI** | Judicial warrant required (2018 ConCourt ruling) | Warrant generally required post-Carpenter | Judicial order under StPO Section 100i | Proportionality required under ECHR |
| **Commercial Location Data** | Consent required (Location Information Act Art. 15) | Limited: FCC Section 222; no comprehensive federal law | GDPR consent or legitimate interest; ePrivacy applies | Consent for location data (ePrivacy Art. 9) |
| **Retention Period** | Purpose-limited (Location Information Act) | No federal mandate; carrier policies vary | Data retention struck down (BVerfG; CJEU SpaceNet) | General retention incompatible with EU law |
| **Penalties** | Up to 3 years imprisonment or 30M KRW (Location Information Act) | ECPA violations: up to 2 years imprisonment | GDPR fines; StPO evidence exclusion | GDPR fines; ECHR damages |

## South Korea

### Legal Framework

South Korea has one of the most comprehensive location data protection frameworks globally, with a dedicated statute addressing location information.

**Act on the Protection, Use, etc. of Location Information (위치정보의 보호 및 이용 등에 관한 법률, 2005):**

- **Article 15 (Collection of Location Information / 위치정보의 수집):** Collection of personal location information requires the prior informed consent of the individual, obtained through a clearly described notice of the purpose, scope, and duration of collection.
- **Article 16 (Use and Provision / 위치정보의 이용·제공):** Use or provision of location information to third parties requires separate consent beyond the initial collection consent.
- **Article 18 (Emergency Location / 긴급구조 위치정보):** Location information may be accessed without consent for emergency rescue purposes by designated authorities.
- **Article 24 (Location Information Manager / 위치정보관리책임자):** Location-based service providers must designate a location information manager responsible for data protection compliance.
- **Article 29 (Destruction / 위치정보의 파기):** Personal location information must be destroyed when the purpose of collection has been achieved.

**Protection of Communications Secrets Act (통신비밀보호법):**

- **Article 13 (Communications Confirmation Data / 통신사실 확인자료):** Law enforcement may obtain historical location data (cell-site records) through a court order based on a "relevance to investigation" standard.
- **Article 13-3 (Real-Time Location Tracking / 실시간 위치추적):** Real-time location tracking through telecommunications networks requires a judicial warrant based on probable cause.

### Constitutional Court Decisions

**Constitutional Court Decision 2016Hun-Ma263 (2018):** The Court ruled that real-time location tracking of suspects through cell-site data constitutes a significant intrusion on the right to privacy (Article 17) and freedom of movement, requiring judicial authorization equivalent to a warrant. The decision strengthened procedural protections beyond the statutory framework.

**Constitutional Court Decision 2012Hun-Ma191 (2014):** The Court addressed the retention of location data by telecommunications providers, holding that extended retention without adequate justification and safeguards may violate the right to informational self-determination (개인정보자기결정권).

### GPS Ankle Monitoring

South Korea's Electronic Monitoring Act (전자장치 부착 등에 관한 법률) authorizes GPS ankle bracelet monitoring for convicted sex offenders and certain violent offenders. The Constitutional Court upheld the constitutionality of electronic monitoring in Decision 2012Hun-Ba258 (2016), finding that the system serves the compelling interest of preventing recidivism and protecting public safety, subject to proportionality constraints on duration and conditions.

### Penalties

| Violation | Penalty |
|-----------|---------|
| Collection of location information without consent | Up to 3 years imprisonment or fine up to 30 million KRW |
| Unauthorized provision of location data to third parties | Up to 2 years imprisonment or fine up to 20 million KRW |
| Failure to protect location information | Administrative fine up to 30 million KRW; service suspension |
| Law enforcement access without proper authorization | Evidence exclusion; disciplinary and criminal liability for officers |

## United States

### Legal Framework

**United States v. Jones, 565 U.S. 400 (2012):** The Supreme Court unanimously held that installation and use of a GPS tracking device on a suspect's vehicle for 28 days constituted a "search" under the Fourth Amendment. Justice Scalia's majority opinion relied on the physical trespass theory (government physically occupied private property to obtain information). Justice Alito's concurrence, joined by three justices, applied the reasonable expectation of privacy test, arguing that long-term GPS monitoring violates privacy expectations even without physical trespass. Justice Sotomayor's concurrence suggested that the third-party doctrine may need reconsideration in the digital age.

**Carpenter v. United States, 585 U.S. 296 (2018):** The Court held 5-4 that the government's acquisition of 127 days of historical CSLI from wireless carriers constituted a Fourth Amendment search requiring a probable cause warrant. Chief Justice Roberts's majority opinion stated that an individual "maintains a legitimate expectation of privacy in the record of his physical movements as captured through CSLI." The decision carved out several exceptions: (1) the opinion does not address real-time CSLI; (2) it does not apply to "conventional" surveillance techniques; (3) it does not reach national security or foreign affairs contexts; (4) it applies only to retrospective collection of comprehensive location records.

**Electronic Communications Privacy Act (ECPA, 1986):** The Stored Communications Act (18 U.S.C. Section 2703) governs government access to stored electronic communications and records, including location data held by service providers. Pre-Carpenter, many courts interpreted Section 2703(d) to permit access to CSLI through a court order (less than probable cause). Post-Carpenter, a warrant is required for comprehensive historical CSLI.

### FCC Regulation

**47 U.S.C. Section 222 (CPNI):** The Communications Act requires telecommunications carriers to protect Customer Proprietary Network Information (CPNI), including location data. In 2020, the FCC fined AT&T, T-Mobile, Sprint, and Verizon a combined $200 million for selling customer real-time location data to third-party aggregators without adequate consent.

### State-Level Protections

| State | Provision |
|-------|----------|
| California | CalECPA (2015): warrant required for government access to electronic device location data |
| Utah | Electronic Surveillance Act (2019): warrant required for location tracking |
| Montana | Electronic Data Privacy Act (2013): warrant required for location data |
| Maine | HP 1077 (2020): prohibits warrantless location tracking |
| Illinois | Freedom from Location Surveillance Act: warrant required for real-time tracking |

## Germany

### Legal Framework

**StPO Section 100i (Technical Investigation Measures / Technische Ermittlungsmaßnahmen):** Authorizes law enforcement to use IMSI catchers and similar devices to determine the location of a mobile device. Requires judicial order based on specific suspicion of a serious criminal offense (Straftat von erheblicher Bedeutung).

**StPO Section 100a (Telecommunications Surveillance):** Authorizes content interception, including associated location data, upon judicial order for enumerated serious offenses.

**TKG (Telecommunications Act):** Governs the obligations of telecommunications providers regarding location data:
- **Section 9 TKG:** Telecommunications secrecy (Fernmeldegeheimnis) protects the content and circumstances of telecommunications, including location data
- **Sections 175-181 TKG (former, struck down):** Data retention provisions requiring retention of cell-site location data were struck down by the CJEU in SpaceNet (2022)

### Federal Constitutional Court

**BVerfGE 125, 260 (2010) -- Data Retention Decision:** The Federal Constitutional Court struck down Germany's implementation of the EU Data Retention Directive, holding that the blanket retention of telecommunications data, including location data, violated Article 10 GG (telecommunications secrecy) and Article 2(1) with Article 1(1) GG (informational self-determination). The Court held that data retention is not per se unconstitutional but requires strict safeguards including data security, limited purposes of access, judicial authorization, transparency, and effective sanctions for misuse.

**BVerfGE 141, 220 (2016) -- BKA Act Decision:** The Court addressed location tracking by the Federal Criminal Police Office (Bundeskriminalamt), holding that GPS surveillance measures must be based on specific statutory authorization, subject to judicial authorization, limited in duration, and subject to notification requirements.

### GDPR Application

Location data is personal data under GDPR Article 4(1). Where location data is combined with other data to identify an individual, it constitutes personal data regardless of the collection method. The ePrivacy Directive 2002/58/EC (as transposed by TKG) provides additional protections for location data generated by electronic communications services.

### Penalties

| Violation | Penalty |
|-----------|---------|
| Unauthorized location tracking by private parties | GDPR fine up to EUR 20 million or 4% global turnover |
| Law enforcement tracking without authorization | Evidence exclusion; disciplinary action; criminal liability (StGB Section 201a if using technical devices) |
| Telecommunications provider data breach involving location data | GDPR notification requirements; administrative fines |

## ECHR / EU

### ECHR Article 8 Jurisprudence

**Uzun v. Germany (Application No. 35623/05, September 2, 2010):** The Court addressed GPS surveillance by German authorities, finding no violation of Article 8. The Court held that GPS surveillance of a suspect's car movements in public spaces constitutes an interference with Article 8(1) but was justified under Article 8(2) as being "in accordance with the law" (based on a general provision of the StPO), pursuing the legitimate aim of national security and crime prevention, and "necessary in a democratic society" given the seriousness of the investigated offenses and the proportionality safeguards applied. The Court distinguished GPS tracking from more intrusive surveillance measures (wiretapping), according it a lower level of protection while still requiring legal basis and proportionality.

**Ben Faiza v. France (Application No. 31446/12, February 8, 2018):** The Court found a violation of Article 8 where French authorities obtained real-time geolocation data from a telecommunications provider without a specific legal framework governing such surveillance. The Court held that the interference was not "in accordance with the law" because French law at the time lacked a sufficiently clear and detailed legal basis for real-time location surveillance, including procedural safeguards, duration limits, and oversight mechanisms.

### ePrivacy Directive 2002/58/EC

**Article 9 (Location Data Other Than Traffic Data):** Location data may be processed only when made anonymous or with the consent of the user, to the extent and for the duration necessary for the provision of a value-added service. Users must be informed of the type of data processed, the purpose, duration, and whether it will be transmitted to third parties. Users must be given the opportunity to withdraw consent at any time.

### CJEU Data Retention and Location Data

**La Quadrature du Net (2020):** The CJEU held that general and indiscriminate retention of location data is incompatible with EU law. However, targeted retention of location data is permissible for persons presenting a threat to national security or for specific geographic areas experiencing elevated crime rates.

**SpaceNet (Joined Cases C-793/19 and C-794/19, September 20, 2022):** The Court struck down German data retention provisions under TKG, confirming that even limited retention of cell-site location data (4 weeks) constitutes a serious interference with fundamental rights and cannot be imposed in a general and indiscriminate manner.

### Proposed ePrivacy Regulation

The proposed ePrivacy Regulation, intended to replace Directive 2002/58/EC, has been under negotiation since 2017. The Council adopted its general approach in February 2021, but trilogue negotiations have progressed slowly. The proposed Regulation would maintain the consent-based framework for location data processing while modernizing rules for new technologies and harmonizing enforcement.

## Comparative Analysis

### Warrant Requirements

All four jurisdictions now require warrant-equivalent authorization for law enforcement access to comprehensive location data, representing a remarkable convergence over the past decade. The United States reached this position through Carpenter (2018), South Korea through the 2018 Constitutional Court decision, Germany through StPO requirements, and the ECHR through the Ben Faiza decision. This convergence reflects the growing recognition that comprehensive location data reveals the "privacies of life" (Carpenter) even when movements occur in public.

### Data Retention

The most significant divergence concerns data retention. The EU/CJEU framework prohibits general and indiscriminate retention of location data (SpaceNet). Germany's data retention provisions have been struck down. South Korea permits purpose-limited retention with safeguards. The United States has no general data retention mandate but carriers retain location data for business purposes, which law enforcement can access with a warrant post-Carpenter.

### Commercial Location Data

South Korea's Location Information Act provides the most specialized framework for commercial location data, with specific consent requirements and a dedicated regulatory structure. The EU's ePrivacy Directive requires consent for location data processing. The United States has no comprehensive federal framework, with the FCC's Section 222 providing limited protection for telecommunications carrier data. The gap in U.S. regulation of commercial location data -- particularly data broker sales of aggregated location information -- has been identified as a significant privacy concern.

### Technology-Specific vs. Technology-Neutral Regulation

South Korea and the United States tend toward technology-specific regulation (GPS tracking, CSLI, IMSI catchers). Germany and the EU favor technology-neutral frameworks that apply regardless of the specific tracking technology. The technology-neutral approach is more future-proof but may lack the specificity needed to address the unique privacy implications of particular tracking methods.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 1967 | United States | Katz v. United States: reasonable expectation of privacy test |
| 1986 | United States | ECPA (Stored Communications Act) enacted |
| 2002 | EU | ePrivacy Directive 2002/58/EC (location data protections) |
| 2005 | South Korea | Location Information Act enacted |
| 2010 | Germany | BVerfGE 125, 260: data retention provisions struck down |
| 2010 | ECHR | Uzun v. Germany: GPS surveillance requires proportionality |
| 2012 | United States | United States v. Jones: GPS tracking is a Fourth Amendment search |
| 2014 | South Korea | Constitutional Court addresses location data retention |
| 2015 | United States | California CalECPA requires warrant for location data |
| 2016 | Germany | BVerfGE 141, 220: GPS surveillance by BKA requires statutory basis |
| 2018 | United States | Carpenter v. United States: warrant required for historical CSLI |
| 2018 | South Korea | Constitutional Court requires warrant for real-time CSLI |
| 2018 | ECHR | Ben Faiza v. France: real-time location tracking requires clear legal basis |
| 2020 | CJEU | La Quadrature du Net: general location data retention incompatible with EU law |
| 2020 | United States | FCC fines major carriers $200M for unauthorized location data sales |
| 2022 | CJEU | SpaceNet: German data retention (including location data) struck down |

## References

### South Korea
- Act on the Protection, Use, etc. of Location Information (위치정보법), Act No. 7372, 2005. Available at: https://elaw.klri.re.kr
- Protection of Communications Secrets Act (통신비밀보호법).
- Constitutional Court Decision 2016Hun-Ma263 (2018) (real-time CSLI).
- Electronic Monitoring Act (전자장치 부착 등에 관한 법률).

### United States
- United States v. Jones, 565 U.S. 400 (2012).
- Carpenter v. United States, 585 U.S. 296 (2018).
- Electronic Communications Privacy Act, 18 U.S.C. Section 2701 et seq.
- 47 U.S.C. Section 222 (CPNI).
- California Electronic Communications Privacy Act (CalECPA, 2015).

### Germany
- Strafprozessordnung (StPO), Sections 100a, 100i.
- Telekommunikationsgesetz (TKG).
- BVerfGE 125, 260 (2010) (data retention).
- BVerfGE 141, 220 (2016) (BKA Act).

### ECHR & EU
- ECHR, Article 8.
- Uzun v. Germany, Application No. 35623/05, September 2, 2010.
- Ben Faiza v. France, Application No. 31446/12, February 8, 2018.
- ePrivacy Directive 2002/58/EC, Article 9.
- SpaceNet, Joined Cases C-793/19 and C-794/19, CJEU, September 20, 2022.
- La Quadrature du Net, Joined Cases C-511/18 et al., CJEU, October 6, 2020.
