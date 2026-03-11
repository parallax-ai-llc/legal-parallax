---
id: "facial-recognition-law-comparison"
name: "Facial Recognition Technology: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Technology Law", "Privacy Law", "Biometric Regulation"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Facial_recognition_system"
lastUpdated: "2026-03-11"
---

## Summary

Facial recognition technology (안면인식 기술) -- the automated processing of digital images to identify or verify individuals based on their facial features -- has become one of the most contested areas of technology regulation, sitting at the intersection of public safety, privacy rights, and civil liberties. South Korea regulates facial recognition primarily through the Personal Information Protection Act (개인정보 보호법, PIPA), which classifies facial recognition data as sensitive personal information (민감정보) requiring explicit consent for collection and processing; the 2023 comprehensive amendment to PIPA strengthened protections for biometric data and established the Personal Information Protection Commission (개인정보보호위원회, PIPC) as the unified supervisory authority with enhanced enforcement powers. The United States lacks a comprehensive federal facial recognition law, relying instead on a patchwork of state and local regulations -- Illinois's Biometric Information Privacy Act (BIPA, 740 ILCS 14) remains the most consequential, providing a private right of action that has generated landmark litigation including the $650 million Facebook settlement (2021) and the $228 million BNSF Railway verdict (2023) -- while multiple cities including San Francisco, Boston, and Portland have enacted outright bans on government use of facial recognition. Germany regulates facial recognition through the GDPR (Article 9 prohibiting processing of biometric data for identification purposes without explicit consent or statutory basis), supplemented by the Bundesdatenschutzgesetz (BDSG), with the Hamburg Data Protection Authority's 2020 intervention against Clearview AI's operations in Germany and the Berlin Commissioner's 2023 enforcement actions against real-time biometric surveillance setting important precedents. At the EU level, the Artificial Intelligence Act (Regulation (EU) 2024/1689) adopted in June 2024 classifies real-time remote biometric identification in publicly accessible spaces as a prohibited AI practice with narrow law enforcement exceptions, while the GDPR provides the foundational data protection framework and the European Court of Human Rights has recognized that mass surveillance through biometric systems may violate Article 8 of the Convention.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Statute** | PIPA (개인정보 보호법, amended 2023) | No federal law; BIPA (Illinois); state/local bans | GDPR Art. 9; BDSG; AI Act (2024/1689) | AI Act (2024/1689); GDPR Art. 9; ECHR Art. 8 |
| **Classification of Facial Data** | Sensitive personal information (민감정보) | Biometric identifier (under state laws) | Special category data (Art. 9 GDPR) | Biometric data for identification (Art. 9 GDPR) |
| **Consent Requirement** | Explicit consent required for collection | BIPA: written informed consent; varies by state | Explicit consent or statutory basis (Art. 9(2) GDPR) | Explicit consent or statutory basis |
| **Real-Time Public Surveillance** | No specific ban; PIPA restrictions apply | Banned in select cities; no federal ban | Prohibited under AI Act with law enforcement exceptions | Prohibited under AI Act with narrow exceptions |
| **Private Right of Action** | Limited; primarily administrative enforcement | Yes (BIPA Section 20) | Limited; data subject rights under GDPR Art. 79-82 | GDPR Art. 79 (right to judicial remedy); Art. 82 (compensation) |
| **Law Enforcement Use** | Subject to PIPA; warrant requirements | Fourth Amendment constraints; state laws vary | GDPR + AI Act restrictions; federal police law constraints | AI Act allows narrow exceptions for serious crime |
| **Maximum Penalty** | Up to 4% of revenue or 2 billion KRW fine | BIPA: $1,000-$5,000 per violation (statutory damages) | GDPR: up to 20 million EUR or 4% global turnover; AI Act: up to 35 million EUR or 7% turnover | AI Act: up to 35 million EUR or 7% global turnover |

## South Korea

### Legal Framework

South Korea's regulation of facial recognition technology operates primarily through the Personal Information Protection Act (개인정보 보호법, PIPA), which classifies facial recognition data within the broader category of biometric information (생체인식정보) and sensitive personal information (민감정보).

**Personal Information Protection Act (PIPA):** PIPA, first enacted in 2011 and comprehensively amended in 2023, is the overarching data protection legislation governing the collection, use, and processing of personal information. Under Article 23, sensitive personal information -- including biometric data used for identification -- may only be processed with the data subject's explicit consent or where specifically authorized by law. The 2023 amendment strengthened the definition of biometric information and expanded the powers of the Personal Information Protection Commission (PIPC, 개인정보보호위원회).

### PIPC Guidelines on Facial Recognition

The PIPC issued sector-specific guidelines on the use of facial recognition technology in public and private settings. Key requirements include:

**Purpose Limitation:** Facial recognition data may only be collected for specific, disclosed purposes and may not be repurposed without additional consent.

**Data Minimization:** Only the minimum facial data necessary for the stated purpose may be collected. Long-term retention of facial templates requires separate justification and security measures.

**Public Notice:** Where facial recognition systems are deployed in publicly accessible spaces, clear notice must be provided to individuals entering the surveilled area.

### Smart City and Transport Applications

South Korea has deployed facial recognition in several pilot programs, including Incheon International Airport's biometric boarding system and Seoul Metro's experimental contactless payment system. These deployments operate under PIPA requirements and are subject to periodic PIPC review. The Smart City Act (스마트도시법) provides a supplementary framework for data governance in technology-enabled urban environments.

### Enforcement

In 2024, the PIPC issued its first major enforcement action related to facial recognition, imposing a 1.2 billion KRW fine on a retail chain that deployed in-store facial recognition without adequate customer consent or notice. The Commission ordered deletion of all collected facial templates and publication of the violation.

## United States

### Legal Framework

The United States lacks a comprehensive federal law specifically governing facial recognition technology. Regulation proceeds through a combination of state biometric privacy statutes, local government bans, constitutional constraints, and federal agency guidance.

**Illinois Biometric Information Privacy Act (BIPA, 740 ILCS 14, 2008):** BIPA remains the most consequential biometric privacy statute in the United States. It requires private entities to obtain written informed consent before collecting biometric identifiers (including facial geometry scans), establish a publicly available retention and destruction policy, and refrain from selling or profiting from biometric data. Critically, BIPA provides a private right of action (Section 20) with statutory damages of $1,000 per negligent violation and $5,000 per intentional or reckless violation.

**Landmark BIPA Litigation:**

| Case | Year | Outcome |
|------|------|---------|
| Rosenbach v. Six Flags Entertainment | 2019 (IL Supreme Court) | Actual harm not required to bring BIPA claim; mere violation sufficient |
| In re Facebook Biometric Information Privacy Litigation | 2021 | $650 million class action settlement for facial recognition tagging feature |
| Rogers v. BNSF Railway Co. | 2023 | $228 million jury verdict for fingerprint scanning without consent |
| Cothron v. White Castle System | 2023 (IL Supreme Court) | Each individual scan constitutes a separate violation, vastly increasing potential damages |

**Other State Laws:** Texas (Tex. Bus. & Com. Code Section 503.001) and Washington (RCW 19.375) have biometric privacy statutes but lack private rights of action. Colorado, Virginia, Connecticut, and other states with comprehensive privacy laws include biometric data within their scope. California's CCPA/CPRA classifies biometric information as sensitive personal information.

### Municipal and State Bans

Multiple jurisdictions have enacted outright bans or moratoriums on facial recognition:

- **San Francisco** (2019): First major city to ban government use of facial recognition (Stop Secret Surveillance Ordinance).
- **Boston** (2020): Banned city government use of facial recognition.
- **Portland, Oregon** (2020): Banned both government and private-sector use in public accommodations.
- **King County, Washington** (2021): Banned county government use without council approval.
- **Massachusetts** (2021): Statewide moratorium on government use except for limited federal law enforcement purposes.

### Federal Developments

While no comprehensive federal legislation has been enacted, several proposals have been introduced, including the Facial Recognition and Biometric Technology Moratorium Act (reintroduced in multiple Congresses) and the American Data Privacy and Protection Act (ADPPA). The FTC has used its Section 5 authority against deceptive biometric practices, ordering Rite Aid in 2023 to cease using facial recognition surveillance after the system disproportionately produced false matches for women and people of color.

## Germany

### Legal Framework

Germany's regulation of facial recognition technology operates within the EU data protection and AI governance framework, with significant national enforcement experience.

**GDPR Article 9:** The processing of biometric data for the purpose of uniquely identifying a natural person is prohibited under Article 9(1) GDPR, subject to the exceptions enumerated in Article 9(2), including explicit consent, substantial public interest with a basis in EU or member state law, and other specified grounds. Germany exercises the GDPR's opening clause (Article 9(4)) through provisions in the Bundesdatenschutzgesetz (BDSG) that impose additional conditions on biometric data processing.

**Bundesdatenschutzgesetz (BDSG):** Section 22 BDSG supplements Article 9 GDPR by specifying that the processing of special categories of data, including biometric data, for purposes of substantial public interest requires appropriate and specific measures to safeguard the interests of the data subject.

### Clearview AI Enforcement

The Hamburg Commissioner for Data Protection and Freedom of Information (Hamburgische Beauftragte für Datenschutz und Informationsfreiheit) issued one of Europe's first enforcement actions against Clearview AI in 2020, ordering the company to delete the biometric profiles of Hamburg residents from its database. The Commissioner determined that Clearview AI's scraping of publicly available photographs and creation of facial recognition profiles violated GDPR Articles 6 and 9 because there was no lawful basis for processing and no valid consent had been obtained.

### Real-Time Surveillance Controversies

The deployment of facial recognition at Berlin Südkreuz railway station in a 2017-2018 pilot project by the German Federal Police (Bundespolizei) drew significant public scrutiny and legal debate. The pilot tested real-time identification of volunteers against a database, reporting a detection rate of approximately 80 percent with false positive rates that civil liberties organizations deemed unacceptably high. The Berlin Data Protection Commissioner (Berliner Beauftragte für Datenschutz und Informationsfreiheit) raised concerns about the legal basis for the pilot and its potential expansion.

### AI Act Implementation

Following the adoption of the EU AI Act in 2024, Germany is implementing the Regulation's prohibition on real-time remote biometric identification in publicly accessible spaces, with the narrow law enforcement exceptions requiring prior judicial authorization for specific listed offenses.

## ECHR & EU

### EU Artificial Intelligence Act (Regulation (EU) 2024/1689)

The AI Act, adopted on June 13, 2024, establishes the most comprehensive legal framework for facial recognition technology globally:

**Prohibited Practices (Article 5):** The AI Act prohibits real-time remote biometric identification systems in publicly accessible spaces for law enforcement purposes, subject to three narrow exceptions: targeted search for specific victims of abduction, trafficking, or sexual exploitation; prevention of a specific, substantial, and imminent threat to life or a reasonably foreseeable terrorist attack; and identification of a person suspected of having committed a specific serious criminal offense listed in the Regulation. Each exception requires prior judicial authorization (or, in urgent cases, authorization within 24 hours).

**High-Risk Classification (Article 6, Annex III):** Biometric identification systems not covered by the prohibition are classified as high-risk AI systems, subject to mandatory requirements including risk management systems, data governance, technical documentation, transparency, human oversight, and accuracy and robustness standards.

**Penalties:** Violations of the prohibited practices provisions carry fines of up to 35 million EUR or 7 percent of global annual turnover, whichever is higher -- the most severe penalty tier in the AI Act.

### GDPR Framework

Article 9 GDPR provides the foundational prohibition on processing biometric data for identification without a valid legal basis. The European Data Protection Board (EDPB) has issued Guidelines 05/2022 on the use of facial recognition technology in the area of law enforcement, establishing that:

- Facial recognition constitutes processing of biometric data under Article 9.
- Live facial recognition in publicly accessible spaces creates particularly severe risks to fundamental rights.
- The principles of necessity and proportionality must be rigorously applied.

### European Court of Human Rights

**Gaughran v. United Kingdom (Application No. 45245/15, Judgment of February 13, 2020):** The Court found a violation of Article 8 where police indefinitely retained photographs, fingerprints, and DNA profiles of persons convicted of any recordable offense, regardless of severity. The Court emphasized that biometric data retention must be proportionate and subject to meaningful safeguards, including possibilities for review and deletion.

**Glukhin v. Russia (Application No. 11519/20, Judgment of July 4, 2023):** In a significant case concerning facial recognition surveillance, the Court found that Russia's use of facial recognition technology to identify and subsequently arrest a political protester violated Articles 8 and 10 of the Convention. The Court held that the absence of adequate legal safeguards governing the use of facial recognition technology, combined with the chilling effect on freedom of expression, rendered the surveillance disproportionate.

### Council of Europe Initiatives

The Council of Europe adopted Guidelines on Facial Recognition in January 2021, the first international instrument specifically addressing facial recognition governance. The Guidelines call for strict necessity and proportionality requirements, moratoriums on facial recognition uses that create risks of mass surveillance, and enhanced safeguards for use in the context of law enforcement and national security.

## Comparative Analysis

### Regulatory Models

The four jurisdictions employ distinctly different regulatory models. South Korea integrates facial recognition into its general data protection framework (PIPA), treating it as a subcategory of sensitive personal information. The United States fragments regulation across state biometric privacy laws, local bans, and constitutional principles, with no federal statutory framework. Germany applies the EU's layered approach -- GDPR data protection obligations, supplemented by the AI Act's use-specific prohibitions. The EU framework represents the most comprehensive approach, combining data protection (GDPR), AI governance (AI Act), and human rights (ECHR) dimensions.

### Law Enforcement Use

The permissibility of law enforcement use of facial recognition varies dramatically. The EU AI Act creates a general prohibition with narrow exceptions requiring judicial authorization. Multiple U.S. cities have enacted outright bans on government use. South Korea permits law enforcement use subject to PIPA requirements and warrant procedures. The ECHR's Glukhin judgment signals that facial recognition surveillance of protesters may violate Convention rights regardless of domestic legal authority.

### Private Sector Accountability

Illinois's BIPA stands out globally for providing a private right of action with per-violation statutory damages, creating powerful financial incentives for compliance. The EU relies primarily on regulatory enforcement through data protection authorities and the AI Act's administrative penalties. South Korea depends primarily on PIPC administrative enforcement, though private claims for damages are theoretically available under PIPA.

### Emerging Convergence

Despite different starting points, a convergence toward stricter regulation of real-time public facial recognition is evident across all jurisdictions. The EU's outright prohibition, U.S. municipal bans, South Korea's tightening regulatory posture, and the ECHR's expanding positive obligations jurisprudence all point toward a global consensus that unrestricted deployment of facial recognition in public spaces is incompatible with fundamental rights.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 2008 | United States | Illinois enacts Biometric Information Privacy Act (BIPA) |
| 2011 | South Korea | PIPA enacted, classifying biometric data as sensitive information |
| 2016 | EU | GDPR adopted (applicable 2018); Article 9 restricts biometric data processing |
| 2017 | Germany | Berlin Südkreuz facial recognition pilot begins |
| 2019 | United States | San Francisco bans government facial recognition use |
| 2019 | United States | Rosenbach v. Six Flags: Illinois Supreme Court rules no actual harm required for BIPA claims |
| 2020 | Germany | Hamburg DPA orders Clearview AI to delete biometric profiles |
| 2020 | ECHR | Gaughran v. UK: indefinite biometric retention violates Article 8 |
| 2020 | United States | Boston and Portland enact facial recognition bans |
| 2021 | United States | $650 million Facebook BIPA settlement approved |
| 2021 | Council of Europe | Guidelines on Facial Recognition adopted |
| 2022 | EU | EDPB issues Guidelines 05/2022 on facial recognition in law enforcement |
| 2023 | South Korea | PIPA comprehensively amended; biometric data protections strengthened |
| 2023 | ECHR | Glukhin v. Russia: facial recognition surveillance of protester violates Articles 8 and 10 |
| 2023 | United States | $228 million BNSF Railway BIPA verdict; Cothron v. White Castle expands per-scan liability |
| 2024 | EU | AI Act adopted; real-time public biometric identification prohibited with narrow exceptions |

## References

### South Korea
- Personal Information Protection Act (개인정보 보호법), Act No. 19234 (2023 amendment). Available at: https://elaw.klri.re.kr/
- Personal Information Protection Commission (PIPC, 개인정보보호위원회), Guidelines on Facial Recognition Technology.
- "South Korea's Data Protection Reforms," Asia Privacy Bridge Forum, 2023.

### United States
- Biometric Information Privacy Act (BIPA), 740 ILCS 14. Available at: https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004
- Rosenbach v. Six Flags Entertainment Corp., 2019 IL 123186 (Ill. 2019).
- In re Facebook Biometric Information Privacy Litigation, No. 3:15-cv-03747 (N.D. Cal.).
- Cothron v. White Castle System, Inc., 2023 IL 128004 (Ill. 2023).
- FTC, "Rite Aid Banned from Using AI Facial Recognition," December 19, 2023.

### Germany
- Bundesdatenschutzgesetz (BDSG), Section 22. Available at: https://www.gesetze-im-internet.de/bdsg_2018/__22.html
- Hamburg Commissioner for Data Protection, "Clearview AI Ordered to Delete Data," 2020.
- "Berlin Südkreuz Facial Recognition Pilot Report," Bundespolizei, 2018.

### ECHR & EU
- Regulation (EU) 2024/1689 (AI Act). Available at: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- GDPR, Article 9. Available at: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EDPB Guidelines 05/2022 on the use of facial recognition technology in law enforcement.
- Gaughran v. United Kingdom, Application No. 45245/15, ECtHR Judgment of February 13, 2020.
- Glukhin v. Russia, Application No. 11519/20, ECtHR Judgment of July 4, 2023.
- Council of Europe, "Guidelines on Facial Recognition," January 2021.
