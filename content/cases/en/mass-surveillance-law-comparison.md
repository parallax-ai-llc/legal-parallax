---
id: "mass-surveillance-law-comparison"
name: "Mass Surveillance: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Privacy Law", "National Security", "Constitutional Law"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Mass_surveillance"
lastUpdated: "2026-03-11"
---

## Summary

Mass surveillance -- the systematic, large-scale monitoring of communications, movements, and activities of entire populations or substantial segments thereof by governmental authorities, typically justified on national security or public safety grounds -- has become one of the most contested areas of law globally, particularly following Edward Snowden's 2013 disclosures of the U.S. National Security Agency's bulk collection programs. South Korea regulates communications surveillance through the Protection of Communications Secrets Act (통신비밀보호법, Act No. 4650, 1993), which governs wiretapping, communications metadata collection, and real-time location tracking by law enforcement and intelligence agencies, with the Constitutional Court (헌법재판소) striking down provisions permitting blanket metadata retention in Decision 2018Hun-Ma68 (2022) and ruling that packet inspection without judicial warrant violates the right to privacy under Article 17 of the Constitution, while the National Intelligence Service Act (국가정보원법) and the Telecommunications Business Act (전기통신사업법) provide additional frameworks for intelligence gathering and data retention respectively. The United States governs surveillance through the Foreign Intelligence Surveillance Act (FISA, 50 U.S.C. Section 1801 et seq., 1978), amended by the USA PATRIOT Act (2001), the FISA Amendments Act of 2008 (Section 702), and the Reforming Intelligence and Securing America Act (RISA, 2024), with Section 702 authorizing warrantless surveillance of non-U.S. persons located outside the United States through collection from U.S. communications providers, while the Fourth Amendment provides the constitutional framework as interpreted in landmark decisions including Carpenter v. United States (2018) extending warrant requirements to cell-site location information. Germany regulates surveillance through the Act on Restrictions on the Secrecy of Mail, Post and Telecommunications (Artikel-10-Gesetz, G10, 1968), the Federal Intelligence Service Act (BND-Gesetz), and the Telecommunications Act (Telekommunikationsgesetz, TKG), with the Federal Constitutional Court's landmark decision BVerfGE 154, 152 (2020) striking down portions of the BND-Gesetz governing foreign-to-foreign communications surveillance as violating the fundamental right to telecommunications secrecy (Article 10 GG), holding for the first time that German fundamental rights protections extend to foreign nationals abroad when their communications are intercepted by German intelligence. The ECHR has developed extensive jurisprudence on mass surveillance under Articles 8 (private life) and 13 (effective remedy), with the Grand Chamber's seminal decisions in Big Brother Watch v. United Kingdom (2021) and Centrum för rättvisa v. Sweden (2021) establishing minimum safeguards that bulk interception regimes must satisfy, while EU law -- particularly the CJEU's Data Retention decisions from Digital Rights Ireland (2014) through La Quadrature du Net (2020) and SpaceNet (2022) -- has progressively restricted generalized data retention, creating significant tension with member states' intelligence and law enforcement practices.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Surveillance Law** | Protection of Communications Secrets Act (통신비밀보호법, 1993) | FISA (1978); Section 702 (2008); RISA (2024) | G10 Act (1968); BND-Gesetz (2016, reformed 2021) | ECHR Art. 8; EU Data Retention jurisprudence |
| **Constitutional Protection** | Art. 17 (사생활의 비밀); Art. 18 (통신의 비밀) | Fourth Amendment | Art. 10 GG (Fernmeldegeheimnis) | Art. 8 ECHR (private life); Art. 7 EU Charter |
| **Warrant Requirement** | Yes (judicial warrant for content; court order for metadata) | Domestic: warrant required; Foreign: Section 702 no warrant for non-US persons | Domestic: G10 Commission approval; Foreign: reformed under BVerfG 2020 | Must be "in accordance with the law" under Art. 8(2) |
| **Bulk Collection** | Limited metadata retention (Constitutional Court restrictions) | Section 702 bulk collection of foreign communications | BND strategic surveillance (reformed 2021) | ECHR permits with safeguards; CJEU restricts generalized data retention |
| **Oversight Body** | National Assembly Intelligence Committee; courts | FISA Court (FISC); PCLOB; Congressional committees | G10 Commission; Parliamentary Control Panel (PKGr); Independent Council | ECtHR; CJEU; national supervisory bodies |
| **Data Retention** | ISP metadata retention (duration reduced by ConCourt) | No general data retention mandate | TKG data retention (struck down by BVerfG and CJEU) | General retention incompatible with EU law (Digital Rights Ireland; La Quadrature du Net) |
| **Extraterritorial Reach** | Limited | Extensive (Section 702; Executive Order 12333) | BND foreign surveillance (reformed post-2020 BVerfG) | EU data protection applies to extraterritorial processing |

## South Korea

### Legal Framework

South Korea's surveillance framework is governed by multiple statutes addressing different aspects of communications monitoring:

**Protection of Communications Secrets Act (통신비밀보호법, 1993):** The primary statute governing surveillance, addressing:

- **Article 5 (Wiretapping Authorization / 통신제한조치):** Wiretapping of communication content requires authorization from a court, based on probable cause that the target has committed or is committing specified crimes. Authorization is limited to 2 months (extendable) for criminal investigations and 4 months for national security investigations.
- **Article 13 (Communications Confirmation Data / 통신사실 확인자료):** Law enforcement may obtain communications metadata (call records, IP addresses, cell-site location data) through a court order based on a "relevance" standard less stringent than probable cause.
- **Article 13-3 (Real-Time Location Tracking / 실시간 위치추적):** Real-time GPS or cell-tower location tracking requires a court order.

**National Intelligence Service Act (국가정보원법):** Authorizes the NIS to collect intelligence for national security purposes. The Act was significantly amended in 2020 to restrict the NIS's domestic intelligence-gathering powers, transferring domestic counterintelligence functions to the police. The amendment took effect in 2024.

### Constitutional Court Decisions

**Constitutional Court Decision 2018Hun-Ma68 (2022) -- Metadata Retention:** The Court held that the mandatory retention of communications metadata by telecommunications providers for extended periods without sufficient safeguards violates the right to privacy (Article 17) and the secrecy of communications (Article 18). The Court ordered the National Assembly to amend the law by December 31, 2023, to establish proportionate retention periods and access restrictions.

**Constitutional Court Decision 2016Hun-Ma263 (2018) -- Packet Inspection:** The Court addressed the NIS's practice of deep packet inspection (DPI) for monitoring internet communications, holding that inspection of communication content without individualized judicial authorization violates Article 18 of the Constitution. The Court distinguished between metadata (subject to a lower standard) and content (requiring judicial warrant).

**Constitutional Court Decision 2009Hun-Ga17 (2010) -- National Security Surveillance:** The Court upheld the basic framework of national security-related surveillance under the Protection of Communications Secrets Act but required enhanced procedural safeguards, including notification to surveillance targets after the investigation concludes and judicial review of the necessity of continued surveillance.

### 2020 NIS Reform

The 2020 amendment to the National Intelligence Service Act (effective 2024) represents the most significant restructuring of Korean intelligence authorities since democratization:
- Removed the NIS's authority to investigate domestic political cases
- Transferred counterintelligence investigation authority to the police
- Established enhanced parliamentary oversight through the National Assembly Intelligence Committee
- Required the NIS to report annually on surveillance activities to the oversight committee

## United States

### Legal Framework

**Foreign Intelligence Surveillance Act (FISA, 1978):** Establishes a specialized court (FISA Court, FISC) to authorize electronic surveillance for foreign intelligence purposes. Traditional FISA orders require probable cause that the target is a foreign power or agent of a foreign power.

**Section 702 (FISA Amendments Act of 2008, reauthorized by RISA 2024):** Authorizes the Attorney General and Director of National Intelligence to jointly authorize the targeting of non-U.S. persons reasonably believed to be located outside the United States for foreign intelligence collection. Section 702 does not require individualized court orders for each target. Instead, the FISC approves annual certifications establishing targeting procedures, minimization procedures, and querying procedures. The NSA, CIA, FBI, and NCTC may access Section 702-collected data.

**Carpenter v. United States, 585 U.S. 296 (2018):** The Supreme Court held (5-4) that the government's acquisition of historical cell-site location information (CSLI) constitutes a Fourth Amendment search requiring a warrant. Chief Justice Roberts's majority opinion stated: "A person does not surrender all Fourth Amendment protection by venturing into the public sphere." The decision has significant implications for other forms of digital surveillance, though the Court expressly declined to extend its holding to real-time CSLI, foreign affairs, or national security.

### Key Surveillance Programs and Authorities

| Program/Authority | Legal Basis | Scope |
|-------------------|------------|-------|
| Section 702 Collection | FISA Section 702 | Targeting of non-US persons abroad via US providers |
| Section 215 (expired) | USA PATRIOT Act | Bulk telephone metadata collection (ended 2015 by USA FREEDOM Act) |
| Executive Order 12333 | Presidential authority | Foreign intelligence collection outside FISA framework |
| PRISM | Section 702 | Collection from major internet companies |
| Upstream Collection | Section 702 | Collection from internet backbone infrastructure |
| XKeyscore | EO 12333 / Section 702 | NSA analytical tool for collected communications data |

### RISA (Reforming Intelligence and Securing America Act, 2024)

Congress reauthorized Section 702 through April 2026 via RISA, signed on April 20, 2024. Key provisions:
- Expanded definition of "electronic communications service providers" subject to compelled assistance
- Required warrant for queries of U.S. person identifiers in certain contexts (with exceptions for national security)
- Enhanced compliance and reporting requirements
- Extended the sunset provision to April 2026

## Germany

### Legal Framework

**Article 10 GG (Fernmeldegeheimnis):** "The privacy of correspondence, posts and telecommunications shall be inviolable. Restrictions may be ordered only pursuant to a law."

**G10 Act (Artikel-10-Gesetz, 1968):** Authorizes intelligence services to conduct communications surveillance in derogation of Article 10 GG. Strategic (bulk) surveillance of international communications is authorized under Section 5 for specific threat areas (international terrorism, arms proliferation, drug trafficking, counterfeiting, money laundering). Individual surveillance requires specific suspicion.

**BND-Gesetz (Federal Intelligence Service Act):** Governs the activities of the Bundesnachrichtendienst (BND), Germany's foreign intelligence service, including foreign-to-foreign communications surveillance (communications routed through Germany but involving no German endpoints).

### BVerfGE 154, 152 (2020) -- BND Foreign Surveillance Decision

On May 19, 2020, the Federal Constitutional Court issued its landmark ruling on the BND's foreign surveillance activities, holding:

1. **Extraterritorial Application of Fundamental Rights:** For the first time, the Court held that Article 10 GG (telecommunications secrecy) protects foreign nationals located abroad whose communications are intercepted by German intelligence from German territory. This represented a dramatic expansion of fundamental rights protection beyond the traditional territorial scope.

2. **Insufficient Safeguards:** The Court found that the BND-Gesetz lacked adequate safeguards for foreign-to-foreign surveillance, including: insufficient targeting criteria, inadequate protections for journalistic communications, lack of independent oversight, and insufficient restrictions on intelligence sharing with foreign partners.

3. **Reform Requirements:** The Court gave the legislature until December 31, 2021, to enact compliant legislation.

### BND-Gesetz Reform (2021)

The reformed BND-Gesetz, enacted on March 26, 2021, implements the Constitutional Court's requirements:
- Established an Independent Control Council (Unabhängiger Kontrollrat) with judicial-like review powers
- Created specific protections for journalists, lawyers, and clergy whose communications are intercepted
- Imposed restrictions on intelligence sharing with foreign partners
- Established deletion requirements for collected data

## ECHR / EU

### ECHR Grand Chamber Decisions (2021)

**Big Brother Watch and Others v. United Kingdom (Application No. 58170/13, Grand Chamber, May 25, 2021):** The Grand Chamber addressed the UK's bulk interception regime under the Regulation of Investigatory Powers Act 2000 (RIPA). The Court found violations of Articles 8 and 10 ECHR. The Court established that bulk interception is not per se incompatible with the Convention but must satisfy "end-to-end safeguards" including:
- Clearly defined grounds for authorizing bulk interception
- Independent authorization (preferably judicial)
- Categories of selectors/search terms subject to internal authorization
- Procedures for examining, using, and storing intercepted material
- Precautions when communicating material to foreign partners
- Circumstances in which material must be deleted
- Oversight by an independent body with effective powers

**Centrum för rättvisa v. Sweden (Application No. 35252/08, Grand Chamber, May 25, 2021):** Issued on the same day as Big Brother Watch, the Court found that Sweden's bulk interception regime also violated Article 8. The Court applied the same "end-to-end safeguards" framework but found Sweden's system, while more robust than the UK's in some respects, still lacked sufficient independent authorization of selectors and adequate oversight of the intelligence-sharing process.

### CJEU Data Retention Jurisprudence

**Digital Rights Ireland (Joined Cases C-293/12 and C-594/12, April 8, 2014):** The Grand Chamber invalidated the EU Data Retention Directive 2006/24/EC, which had required telecommunications providers to retain metadata for 6-24 months, finding that the directive constituted a "particularly serious" interference with the rights to privacy and data protection under Articles 7 and 8 of the EU Charter. The Court held that the directive lacked sufficient safeguards and applied in an indiscriminate and generalized manner.

**Tele2 Sverige and Watson (Joined Cases C-203/15 and C-698/15, December 21, 2016):** The Court held that EU law precludes national legislation providing for the general and indiscriminate retention of traffic and location data.

**La Quadrature du Net (Joined Cases C-511/18, C-512/18, and C-520/18, October 6, 2020):** The Grand Chamber refined the framework, holding that while general and indiscriminate data retention is incompatible with EU law, member states may impose: (1) targeted retention of traffic and location data for serious crime purposes; (2) general and indiscriminate retention of IP addresses for serious crime; (3) expedited retention ("quick freeze") of traffic and location data; and (4) general and indiscriminate retention in cases of a serious threat to national security, subject to independent review.

**SpaceNet (Joined Cases C-793/19 and C-794/19, September 20, 2022):** The Court struck down German data retention provisions under TKG Sections 175-181, confirming that even limited general data retention obligations (4 weeks for location data, 10 weeks for internet connection data) are incompatible with EU law.

## Comparative Analysis

### Scope of Surveillance Authority

The United States has the broadest surveillance authority, with Section 702 enabling large-scale warrantless collection of foreign communications through U.S. infrastructure. Germany's BND has extensive foreign surveillance powers, reformed post-2020 to include independent oversight. South Korea's surveillance authority is more limited, focused on targeted rather than bulk collection, with the 2020 NIS reform further restricting domestic intelligence gathering. The EU framework restricts generalized data retention but permits targeted retention and bulk interception with adequate safeguards.

### Extraterritorial Application of Rights

Germany's 2020 BVerfG decision stands alone in extending domestic fundamental rights protections to foreign nationals abroad whose communications are intercepted from German territory. The United States explicitly excludes non-U.S. persons from Fourth Amendment protections in the foreign intelligence context. South Korea's constitutional protections are generally limited to persons within Korean territory. The ECHR applies to individuals within the jurisdiction of contracting states, which the Court has interpreted to include persons whose communications are intercepted by state surveillance programs.

### Oversight Mechanisms

All four systems employ multi-layered oversight, but the specific mechanisms differ significantly. The United States uses the specialized FISA Court plus Congressional oversight plus the Privacy and Civil Liberties Oversight Board (PCLOB). Germany now employs the Independent Control Council (with quasi-judicial powers) plus the Parliamentary Control Panel. South Korea uses judicial warrant requirements plus the National Assembly Intelligence Committee. The EU relies on the CJEU, national data protection authorities, and the ECHR.

### Data Retention

The CJEU's progressive restriction of data retention through Digital Rights Ireland, Tele2, La Quadrature du Net, and SpaceNet has created the most restrictive framework globally for metadata retention. Neither the United States nor South Korea has equivalent constitutional restrictions on data retention mandates, though both require judicial authorization for government access to retained data.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 1968 | Germany | G10 Act enacted (Article 10 derogation for intelligence surveillance) |
| 1978 | United States | FISA enacted; FISA Court established |
| 1993 | South Korea | Protection of Communications Secrets Act enacted |
| 2001 | United States | USA PATRIOT Act expands surveillance authorities |
| 2006 | EU | Data Retention Directive 2006/24/EC |
| 2008 | United States | FISA Amendments Act establishes Section 702 |
| 2013 | International | Edward Snowden disclosures reveal NSA bulk surveillance programs |
| 2014 | CJEU | Digital Rights Ireland: Data Retention Directive invalidated |
| 2015 | United States | USA FREEDOM Act ends bulk telephone metadata collection |
| 2016 | CJEU | Tele2 Sverige: general data retention precludes EU law |
| 2018 | United States | Carpenter v. United States: warrant required for CSLI |
| 2018 | South Korea | Constitutional Court restricts packet inspection without warrant |
| 2020 | Germany | BVerfGE 154, 152: BND foreign surveillance unconstitutional; fundamental rights extend to foreigners abroad |
| 2020 | South Korea | NIS Act reformed; domestic intelligence powers restricted |
| 2020 | CJEU | La Quadrature du Net: refined data retention framework |
| 2021 | Germany | BND-Gesetz reformed; Independent Control Council established |
| 2021 | ECHR | Big Brother Watch v. UK; Centrum för rättvisa v. Sweden: bulk interception safeguards |
| 2022 | South Korea | Constitutional Court restricts metadata retention |
| 2022 | CJEU | SpaceNet: German data retention provisions struck down |
| 2024 | United States | RISA reauthorizes Section 702 through April 2026 |

## References

### South Korea
- Protection of Communications Secrets Act (통신비밀보호법), Act No. 4650, 1993.
- National Intelligence Service Act (국가정보원법), amended 2020.
- Constitutional Court Decision 2018Hun-Ma68 (2022) (metadata retention).
- Constitutional Court Decision 2016Hun-Ma263 (2018) (packet inspection).
- Constitution of the Republic of Korea, Articles 17, 18.

### United States
- Foreign Intelligence Surveillance Act (FISA), 50 U.S.C. Section 1801 et seq.
- FISA Amendments Act of 2008, Section 702.
- Carpenter v. United States, 585 U.S. 296 (2018).
- USA FREEDOM Act of 2015.
- RISA (Reforming Intelligence and Securing America Act), 2024.

### Germany
- Grundgesetz, Article 10.
- Artikel-10-Gesetz (G10 Act), 1968.
- BND-Gesetz (Federal Intelligence Service Act), reformed 2021.
- BVerfGE 154, 152 (May 19, 2020) (BND foreign surveillance).

### ECHR & EU
- ECHR, Articles 8, 10, 13.
- Big Brother Watch v. United Kingdom, Application No. 58170/13, Grand Chamber, May 25, 2021.
- Centrum för rättvisa v. Sweden, Application No. 35252/08, Grand Chamber, May 25, 2021.
- Digital Rights Ireland, Joined Cases C-293/12 and C-594/12, CJEU, April 8, 2014.
- La Quadrature du Net, Joined Cases C-511/18 et al., CJEU, October 6, 2020.
- SpaceNet, Joined Cases C-793/19 and C-794/19, CJEU, September 20, 2022.
