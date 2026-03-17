---
id: "data-breach-notification-law-comparison"
name: "Data Breach Notification: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Consumer Protection", "Privacy Law", "Cybersecurity"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Data_breach"
lastUpdated: "2026-03-11"
---

## Summary

Data breach notification law -- the legal requirement for organizations to inform individuals, regulators, and sometimes the public when personal data has been compromised through unauthorized access, disclosure, or loss -- has become a critical component of modern privacy and cybersecurity regulation as the scale and frequency of data breaches have escalated dramatically in the digital era. South Korea maintains one of the world's most stringent data breach notification frameworks through the Personal Information Protection Act (개인정보 보호법, PIPA), enacted in 2011 and comprehensively amended in 2020 and 2023, which requires data controllers (개인정보처리자) to notify affected individuals and the Personal Information Protection Commission (개인정보보호위원회, PIPC) without delay upon discovering a breach, with specific notification content requirements and penalties including administrative fines of up to 3 percent of related revenue and criminal penalties; South Korea's framework was shaped by several massive data breaches, including the 2014 Korea Credit Bureau breach affecting 20 million people (nearly 40 percent of the population) and multiple breaches at major telecommunications companies. The United States lacks a comprehensive federal data breach notification law, instead operating through a patchwork of 50 state data breach notification statutes (beginning with California's pioneering SB 1386 in 2003), sector-specific federal requirements under HIPAA (health data), the Gramm-Leach-Bliley Act (financial data), and the SEC's cybersecurity disclosure rules (2023) for publicly traded companies; Congress has repeatedly failed to enact a federal standard despite proposals such as the American Data Privacy and Protection Act (ADPPA). Germany implements data breach notification through the EU General Data Protection Regulation (GDPR, Regulation (EU) 2016/679), which requires notification to the supervisory authority (Datenschutzaufsichtsbehörde) within 72 hours of becoming aware of a breach likely to result in a risk to natural persons' rights and freedoms (Article 33), and notification to affected individuals without undue delay where the breach is likely to result in a high risk (Article 34); the German data protection authorities (Datenschutzbehörden) of the sixteen Länder and the Federal Commissioner for Data Protection (BfDI) have issued substantial fines for notification failures. At the European level, the GDPR provides the most comprehensive and harmonized breach notification framework globally, supplemented by the NIS2 Directive (2022/2555) requiring incident reporting for critical infrastructure operators and important entities, and the European Court of Human Rights has addressed data protection breaches under Article 8 ECHR (right to respect for private life) in cases including I v. Finland (2008) and Satakunnan Markkinapörssi Oy v. Finland (2017).

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Primary Framework** | PIPA (개인정보 보호법, 2011/2023) | State laws (50 states); HIPAA; GLBA; SEC rules | GDPR Articles 33-34 | GDPR; NIS2 Directive; ePrivacy Directive |
| **Notification Trigger** | Any unauthorized access, use, disclosure, or loss of personal information | Varies: unauthorized access/acquisition of unencrypted personal data | Breach likely to result in risk to rights/freedoms (GDPR Art. 33) | GDPR Art. 33: risk to rights/freedoms; NIS2: significant incident |
| **Authority Notification** | PIPC: without delay | No general federal requirement; sector-specific (HHS for HIPAA; SEC for public companies) | Supervisory authority: within 72 hours | Supervisory authority: within 72 hours (GDPR) |
| **Individual Notification** | Without delay; written or electronic | Varies by state: "most expedient time possible" to 60-90 days | Without undue delay if high risk (GDPR Art. 34) | Without undue delay if high risk |
| **Required Content** | Description of breach, types of data, remedial measures, contact information | Varies by state; typically: nature of breach, data types, remedial steps | Nature of breach, DPO contact, likely consequences, remedial measures | GDPR Art. 33(3): nature, DPO, consequences, measures |
| **Penalties** | Up to 3% of related revenue; criminal penalties | Varies: state AG enforcement; HIPAA: up to $2M/year; SEC rules | GDPR: up to €20M or 4% global turnover | GDPR: up to €20M or 4% global turnover; NIS2: up to €10M or 2% |

## South Korea

### Legal Framework

South Korea's data breach notification requirements are among the most comprehensive in Asia, reflecting the country's high internet penetration rate and history of massive data breaches.

**Personal Information Protection Act (개인정보 보호법, PIPA):** Originally enacted on March 29, 2011, and comprehensively amended in 2020 and 2023. PIPA applies to all data controllers (개인정보처리자) in both the public and private sectors.

**Notification Requirements (Article 34):**
- **Trigger:** Unauthorized access to, use of, provision of, or loss of personal information
- **Timing:** Without delay upon becoming aware of the breach
- **Recipients:** Affected individuals and the PIPC
- **Content:** (1) type of personal information leaked; (2) estimated time and circumstances of leakage; (3) possible damage and remedial measures; (4) response measures taken by the data controller; (5) department and contact information for inquiries
- **Method:** Written notice, email, or other means; if notifying 1,000 or more individuals, the data controller must also post notice on its website and report to the PIPC

### Major Data Breaches Shaping Korean Law

| Year | Incident | Scale | Regulatory Response |
|------|----------|-------|-------------------|
| 2011 | SK Communications (Nate/Cyworld) | 35 million users | PIPA enforcement accelerated |
| 2014 | Korea Credit Bureau | 20 million people (40% of population) | Three major credit card companies fined; employee convicted |
| 2014 | KT Corporation | 12 million customers | CEO apologized publicly; company fined |
| 2016 | Interpark | 10 million customers | PIPC imposed fine of 4.5 billion KRW |
| 2023 | LG Uplus | 290,000 customers | Enhanced cybersecurity requirements for telecom |

### 2023 PIPA Amendment

The 2023 amendment introduced several significant changes:
- **Revenue-Based Fines:** Maximum fines increased to 3% of related revenue (매출액의 3%), aligning with the GDPR's turnover-based penalty model
- **Personal Information Protection Commission (PIPC) Authority Expanded:** PIPC became the unified data protection authority with enhanced investigative and penalty powers
- **Data Portability and Pseudonymization:** New provisions for data portability and pseudonymized data processing, with breach notification requirements applicable to pseudonymized data where re-identification risk exists
- **Cross-Border Transfer Adequacy:** Framework for adequacy decisions on cross-border data transfers, with notification requirements for breaches affecting transferred data

### Credit Information Use and Protection Act (신용정보의 이용 및 보호에 관한 법률)

This sector-specific statute imposes additional breach notification requirements on financial institutions, credit information companies, and fintech firms, with notification to the Financial Services Commission required for breaches involving credit information.

## United States

### Legal Framework

The United States' data breach notification framework is characterized by fragmentation across 50+ state laws and sector-specific federal requirements.

### State Data Breach Notification Laws

All 50 states, the District of Columbia, Guam, Puerto Rico, and the U.S. Virgin Islands have enacted data breach notification statutes. Key features and variations:

**California (SB 1386, 2003; Cal. Civ. Code §1798.29, §1798.82):** The first state data breach notification law, effective July 1, 2003. Required notification to California residents when unencrypted personal information was reasonably believed to have been acquired by unauthorized persons. The California Consumer Privacy Act (CCPA/CPRA) supplements with additional breach-related rights.

**New York (SHIELD Act, 2019):** Expanded the definition of "private information" to include biometric data, email addresses with passwords, and account numbers with access codes. Requires businesses to implement reasonable safeguards.

**Common State Law Elements:**
| Element | Typical Provision |
|---------|-----------------|
| Personal information defined | Name + SSN, driver's license, financial account number, or biometric data |
| Encryption safe harbor | Breach of encrypted data generally does not trigger notification |
| Notification timing | "Most expedient time possible" or specific deadline (30-90 days) |
| Attorney general notification | Required in most states when breach exceeds threshold (typically 500-1,000 residents) |
| Private right of action | Available in some states (California, New York); not all |

### Federal Sector-Specific Requirements

| Sector | Statute/Rule | Requirements |
|--------|-------------|-------------|
| Healthcare | HIPAA Breach Notification Rule (45 C.F.R. Part 164) | Notify individuals within 60 days; HHS within 60 days; media for breaches >500 |
| Financial | GLBA Safeguards Rule; Interagency Guidance | Notify affected customers; notify primary federal regulator |
| Publicly traded companies | SEC Cybersecurity Rules (2023) | Disclose material cybersecurity incidents on Form 8-K within 4 business days |
| Federal agencies | FISMA; OMB Memoranda | Report to CISA within 72 hours under CIRCIA (2022) |

### SEC Cybersecurity Disclosure Rules (2023)

The SEC's final rules on Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure, effective December 2023, require publicly traded companies to:
- Disclose material cybersecurity incidents on Form 8-K within four business days of determining materiality
- Describe the nature, scope, timing, and material impact of the incident
- Provide annual disclosure of cybersecurity risk management processes and governance

### Failure to Enact Federal Legislation

Despite numerous attempts, Congress has not enacted a comprehensive federal data breach notification law. The American Data Privacy and Protection Act (ADPPA) passed the House Energy and Commerce Committee in 2022 but failed to reach a full vote. Key obstacles include disagreement over federal preemption of state laws (industry favors preemption; consumer groups oppose weakening stronger state standards), the scope of a private right of action, and the treatment of state laws like CCPA that provide broader protections.

## Germany

### Legal Framework

Germany implements data breach notification through the GDPR, supplemented by the Bundesdatenschutzgesetz (BDSG, Federal Data Protection Act) and sector-specific regulations.

### GDPR Articles 33-34

**Article 33 -- Notification to Supervisory Authority:**
- **Trigger:** Personal data breach likely to result in a risk to the rights and freedoms of natural persons
- **Timing:** Without undue delay and, where feasible, within 72 hours of becoming aware
- **Content:** Nature of breach (categories and approximate number of individuals and records affected), DPO contact details, likely consequences, measures taken or proposed to address the breach
- **Phased Notification:** Where full information is not available within 72 hours, information may be provided in phases

**Article 34 -- Communication to Data Subject:**
- **Trigger:** Breach likely to result in a high risk to rights and freedoms
- **Timing:** Without undue delay
- **Exceptions:** (1) Controller has implemented appropriate protective measures (e.g., encryption); (2) subsequent measures ensure high risk no longer likely; (3) disproportionate effort would be required (public communication permitted instead)

### German Supervisory Authority Enforcement

Germany's decentralized data protection structure means that enforcement varies across the sixteen Länder plus the BfDI (for federal agencies and telecommunications/postal companies):

**Notable Fines for Breach Notification Failures:**
| Year | Entity | Fine | Reason |
|------|--------|------|--------|
| 2019 | 1&1 Telecom | €9.55 million | Inadequate security measures enabling unauthorized access |
| 2020 | H&M Germany | €35.3 million | Systematic surveillance of employees; Hamburg DPA |
| 2022 | Clearview AI | €20.4 million | Biometric data processing without legal basis; Hamburg DPA (reduced on appeal) |

### BDSG Supplementary Provisions

Section 42 BDSG provides criminal penalties for intentional unauthorized processing of personal data: imprisonment up to three years or fine. This supplements the GDPR's administrative fines with criminal sanctions for the most serious violations.

### BSI Act and KRITIS

The BSI-Gesetz (Federal Office for Information Security Act) and the KRITIS-Verordnung (Critical Infrastructure Ordinance) impose additional incident reporting requirements on operators of critical infrastructure (energy, water, food, IT, telecommunications, health, finance, transport). KRITIS operators must report significant IT security incidents to the BSI without delay.

## ECHR & EU

### GDPR -- The Global Standard

The GDPR's breach notification framework (Articles 33-34) has become the global reference standard. Key features include:

**Risk-Based Trigger:** Notification is required only where the breach is "likely to result in a risk to the rights and freedoms of natural persons" (authority notification) or "a high risk" (individual notification). This contrasts with the trigger-upon-acquisition approach of most U.S. state laws.

**72-Hour Window:** The 72-hour authority notification deadline is the strictest specific timeline among the four jurisdictions (South Korea requires notification "without delay" but does not specify hours; most U.S. state laws allow 30-90 days).

**Documentation Obligation (Article 33(5)):** Controllers must document all breaches, regardless of whether notification is required, including the facts, effects, and remedial action taken. This "breach register" enables supervisory authorities to verify compliance during audits.

### NIS2 Directive (EU) 2022/2555

The Network and Information Security Directive (NIS2), effective October 2024, imposes incident reporting obligations on essential and important entities across critical sectors:
- **Early Warning:** 24 hours after becoming aware of a significant incident
- **Incident Notification:** 72 hours with initial assessment
- **Final Report:** Within one month with detailed description and cross-border impact assessment
- **Penalties:** Up to EUR 10 million or 2% of total worldwide annual turnover for essential entities

### ePrivacy Directive 2002/58/EC

Article 4 of the ePrivacy Directive requires providers of publicly available electronic communications services to notify the competent national authority of personal data breaches without undue delay. This sector-specific requirement predates the GDPR and continues to apply alongside it.

### ECHR Jurisprudence

**I v. Finland (Application No. 20511/03, 2008):** The Court found a violation of Article 8 where a hospital failed to prevent unauthorized access to a patient's medical records. The case established that the state has a positive obligation to ensure that practical and effective measures exist to protect personal data, including adequate security measures and meaningful sanctions for unauthorized access.

**Satakunnan Markkinapörssi Oy and Satamedia Oy v. Finland (Grand Chamber, 2017):** While primarily about publication of tax data, the case addressed the balance between data protection and freedom of expression, establishing that large-scale processing of personal data engages Article 8 protections.

### European Data Protection Board (EDPB) Guidance

The EDPB (successor to the Article 29 Working Party) has issued detailed guidance on breach notification under the GDPR:
- **Guidelines 9/2022:** Examples of personal data breach notification, providing detailed scenarios to help controllers assess notification obligations
- **Guidelines on Data Breach Assessment:** Framework for evaluating the risk level of breaches to determine authority and individual notification obligations

## Comparative Analysis

### Unified vs. Fragmented Frameworks

The EU/Germany provides the most unified framework through the GDPR's directly applicable regulation. South Korea provides a unified national framework through PIPA. The United States' fragmented approach -- 50+ state laws with varying definitions, timelines, and requirements -- creates significant compliance burdens for organizations operating across state lines, particularly given the absence of a federal standard.

### Notification Triggers

The jurisdictions employ fundamentally different triggering mechanisms. The GDPR uses a risk-based trigger (breach must be "likely to result in a risk" for authority notification or "high risk" for individual notification). U.S. state laws generally use an acquisition trigger (unauthorized acquisition of unencrypted personal data). South Korea uses a broad trigger covering any unauthorized access, use, provision, or loss. The risk-based approach (GDPR) may result in fewer notifications but requires sophisticated risk assessment; the acquisition-based approach (U.S.) may result in over-notification but is simpler to apply.

### Timing Requirements

The GDPR's 72-hour authority notification deadline is the most specific and demanding. South Korea's "without delay" standard is flexible but may be less predictable. U.S. state laws vary from "most expedient time possible" to specific deadlines of 30, 45, 60, or 90 days. The trend is clearly toward shorter deadlines, reflecting the recognition that delayed notification reduces the ability of individuals to take protective action.

### Penalty Severity

The GDPR's maximum penalties (up to EUR 20 million or 4% of global annual turnover) and South Korea's 3% revenue-based fines represent the most severe penalty regimes. U.S. penalties vary by sector and state, with HIPAA providing up to $2 million per year for willful violations and state AGs imposing settlements in the hundreds of millions for major breaches. The trend toward turnover-based penalties reflects recognition that fixed fines are insufficient to deter large organizations.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 2003 | United States | California SB 1386: first state data breach notification law |
| 2005 | United States | ChoicePoint breach (163,000 records): catalyzes nationwide adoption |
| 2009 | United States | HITECH Act strengthens HIPAA breach notification |
| 2011 | South Korea | PIPA enacted with breach notification requirements |
| 2014 | South Korea | Korea Credit Bureau breach (20 million people); major reform impetus |
| 2016 | EU | GDPR adopted (Regulation 2016/679) |
| 2018 | EU | GDPR becomes applicable (May 25, 2018); 72-hour notification effective |
| 2020 | South Korea | PIPA comprehensively amended; data protection authority consolidated |
| 2022 | EU | NIS2 Directive adopted |
| 2023 | United States | SEC Cybersecurity Disclosure Rules finalized |
| 2023 | South Korea | PIPA amended: 3% revenue-based fines; PIPC authority expanded |
| 2024 | EU | NIS2 Directive transposition deadline (October 17, 2024) |
| 2024 | United States | All 50 states have breach notification laws |

## References

### South Korea
- Personal Information Protection Act (개인정보 보호법). Available at: https://elaw.klri.re.kr/eng_mobile/viewer.do?hseq=53044&type=part&key=9
- Credit Information Use and Protection Act (신용정보의 이용 및 보호에 관한 법률).
- Personal Information Protection Commission (개인정보보호위원회). Available at: https://www.pipc.go.kr

### United States
- California Civil Code §§1798.29, 1798.82 (data breach notification).
- HIPAA Breach Notification Rule, 45 C.F.R. Part 164, Subpart D.
- SEC, Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure, 88 Fed. Reg. 51896 (2023).
- National Conference of State Legislatures, Security Breach Notification Laws.

### Germany
- GDPR, Articles 33-34. Available at: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Bundesdatenschutzgesetz (BDSG). Available at: https://www.gesetze-im-internet.de/bdsg_2018/
- BSI-Gesetz. Available at: https://www.gesetze-im-internet.de/bsig_2009/

### ECHR & EU
- GDPR, Regulation (EU) 2016/679, Articles 33-34.
- NIS2 Directive (EU) 2022/2555. Available at: https://eur-lex.europa.eu/eli/dir/2022/2555/oj
- I v. Finland, Application No. 20511/03, ECtHR Judgment of July 17, 2008.
- EDPB, Guidelines 9/2022 on personal data breach notification.
- ePrivacy Directive 2002/58/EC, Article 4.
