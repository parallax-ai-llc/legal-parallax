---
id: "open-source-licensing-law-comparison"
name: "Open Source Licensing: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Technology Law", "Intellectual Property", "Software Licensing"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Open-source_license"
lastUpdated: "2026-03-11"
---

## Summary

Open source licensing (오픈소스 라이선스) -- the legal framework governing the distribution, modification, and use of software whose source code is made freely available under licenses granting specified permissions -- has become a critical component of the global software ecosystem, with open source code estimated to comprise 70-90 percent of modern software applications. South Korea has actively promoted open source adoption through the Open Source Software Promotion Act (공개소프트웨어 진흥법, proposed and under development) and the Software Industry Promotion Act (소프트웨어 산업 진흥법), while the Korean courts have addressed license compliance disputes through existing copyright law (저작권법) and contract law principles; the Korea Copyright Commission (한국저작권위원회) provides guidance on open source license compliance and has established the Open Source Software License Comprehensive Information System (OLIS). The United States, as the birthplace of the open source movement, has developed the most extensive body of case law interpreting open source licenses, with landmark decisions including Jacobsen v. Katzer (535 F.3d 1373, Fed. Cir. 2008) establishing that open source license conditions are enforceable copyright conditions rather than mere contractual covenants, and the Artifex Software, Inc. v. Hancom, Inc. (2017) establishing jurisdiction for GPL enforcement against foreign licensees; the U.S. Copyright Act (17 U.S.C.) and contract law provide the primary legal framework, supplemented by extensive OSI (Open Source Initiative) standardization of approved licenses. Germany has developed the most robust judicial precedent for open source license enforcement in Europe through a series of district court decisions, particularly in the Welte v. Sitecom (LG Munich I, 2004), Welte v. Skype (LG Munich I, 2007), and McHardy v. various defendants litigation enforcing the GNU General Public License (GPL) as a valid license under the Urheberrechtsgesetz (UrhG, Copyright Act), with German courts consistently treating license violations as copyright infringement actionable through injunctive relief and damages. At the EU level, the European Commission has adopted the European Union Public Licence (EUPL) as the official open source license for EU software, the Computer Programs Directive (2009/24/EC) establishes the copyright framework within which open source licenses operate, and the Cyber Resilience Act (Regulation (EU) 2024/2847) introduces new obligations affecting open source software security, while the CJEU's SAS Institute v. World Programming (Case C-406/10) established fundamental principles regarding the scope of copyright protection for software that underpin open source licensing across the EU.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Legal Basis** | Copyright Act (저작권법); contract law | U.S. Copyright Act (17 U.S.C.); contract law | Urheberrechtsgesetz (UrhG); contract law | Computer Programs Directive 2009/24/EC; national copyright laws |
| **License Enforcement Theory** | Copyright + contract | Copyright conditions (Jacobsen v. Katzer) | Copyright (Urheberrecht); license as rights grant | Varies by member state; copyright-based prevails |
| **Key Court Decision** | Limited case law; KCC guidance | Jacobsen v. Katzer (Fed. Cir. 2008) | Welte v. Sitecom (LG Munich I, 2004) | SAS Institute v. WPL (CJEU C-406/10, 2012) |
| **GPL Enforceability** | Recognized as valid copyright license | Enforceable as copyright condition | Fully enforceable; extensive litigation | Enforceable under national copyright law |
| **Government Open Source Policy** | Active promotion; Software Industry Promotion Act | Federal Source Code Policy (2016); SHARE-IT Act proposals | Open Source Software Strategy (2022); sovereign tech fund | EUPL; EU Open Source Software Strategy 2020-2023 |
| **Copyleft Compliance** | Copyleft obligations recognized | Strong copyleft enforcement via litigation | Strong judicial enforcement | Recognized under national copyright frameworks |
| **Security Obligations** | KISA guidelines | CISA open source security initiatives | Cyber Resilience Act obligations (with open source carve-out) | Cyber Resilience Act (2024/2847) with open source exemption |

## South Korea

### Legal Framework

South Korea's legal treatment of open source licensing operates primarily through the Copyright Act (저작권법) and general contract law, with significant government policy promoting open source adoption.

**Copyright Act (저작권법):** Under the Copyright Act, software (computer programs) is protected as a literary work. Open source licenses operate as conditional copyright licenses -- the licensor grants broad permissions to use, modify, and distribute the software, subject to specified conditions (such as attribution, copyleft requirements, or patent grants). Violation of license conditions constitutes copyright infringement, potentially actionable through both civil remedies (damages, injunction) and criminal prosecution.

**Contract Law Framework:** Open source licenses are also analyzed under Korean contract law. The Civil Code (민법) provisions on offer and acceptance, terms and conditions, and interpretation of agreements apply. Courts have recognized that the act of using, modifying, or distributing open source software constitutes acceptance of the license terms.

### Government Policy

**Software Industry Promotion Act (소프트웨어 산업 진흥법):** This Act provides the legal basis for government support of software industry development, including provisions encouraging the adoption of open source software in public sector procurement and government information systems.

**National Information Strategy Committee:** Korea's government has adopted policies promoting open source use in government agencies, with the Ministry of Science and ICT issuing guidelines on open source software procurement and compliance management.

**Korea Copyright Commission (한국저작권위원회):** The KCC operates the Open Source Software License Comprehensive Information System (OLIS), which provides license compatibility analysis tools, compliance guidance, and educational resources for Korean businesses. OLIS catalogues over 2,500 open source licenses with Korean-language analysis of their terms and obligations.

### Compliance Challenges

Korean electronics manufacturers and automotive companies, which extensively use open source software in embedded systems, have faced compliance challenges particularly regarding GPLv2 and GPLv3 copyleft requirements. The Korea Internet & Security Agency (KISA) has published guidelines on open source software security management, including source code scanning and license compliance procedures for the IoT and automotive sectors.

## United States

### Legal Framework

The United States has produced the most extensive case law on open source licensing, establishing foundational principles that influence global interpretation.

**Jacobsen v. Katzer (535 F.3d 1373, Fed. Cir. 2008):** This landmark decision addressed the enforceability of the Artistic License, a permissive open source license. The Federal Circuit held that the license conditions (attribution, change tracking, and source availability) are enforceable **conditions** to the copyright license, not merely **covenants** (contractual promises). This distinction is critical because violation of a condition gives rise to a copyright infringement claim (with statutory damages and injunctive relief available), while breach of a covenant gives rise only to a contract damages claim. The decision confirmed that open source licenses are legally enforceable and that copyright holders can use copyright law's powerful remedies to enforce compliance.

**Artifex Software, Inc. v. Hancom, Inc. (N.D. Cal. 2017):** Artifex sued Korean software company Hancom for GPL violations in its Hangul office suite, which incorporated Artifex's Ghostscript library without complying with GPL requirements. The court denied Hancom's motion to dismiss, holding that U.S. courts had jurisdiction over the foreign defendant and that the GPL creates enforceable contractual obligations. The case settled with Hancom obtaining a commercial license.

**Other Significant Cases:**

| Case | Year | Significance |
|------|------|-------------|
| MySQL AB v. Progress Software | 2001 | Early GPL enforcement action; settled |
| Wallace v. IBM | 2006 (7th Cir.) | GPL does not violate antitrust law; open source licensing is procompetitive |
| Oracle v. Google | 2021 (Supreme Court) | Fair use of Java API; implications for API interoperability and open source |
| Vizio v. Software Freedom Conservancy | 2022 | Third-party GPL enforcement; right of recipients to enforce copyleft |

### Open Source Initiative (OSI)

The OSI, founded in 1998, maintains the Open Source Definition and approves licenses that comply with its criteria. As of 2025, the OSI has approved over 110 open source licenses. The OSI's approval process provides a standardized framework for license evaluation globally.

### Federal Government Policy

The Federal Source Code Policy (M-16-21, 2016) required federal agencies to release at least 20 percent of custom-developed code as open source. The Code.gov platform hosts open source projects from federal agencies. Multiple legislative proposals, including the SHARE-IT Act, have sought to expand open source requirements in government procurement.

## Germany

### Legal Framework

Germany has developed the most extensive judicial precedent for open source license enforcement in Europe, establishing key principles that have influenced courts across the EU.

**Urheberrechtsgesetz (UrhG, Copyright Act):** Under German copyright law, software is protected as a literary work (Section 2(1)(1) UrhG). Open source licenses function as Nutzungsrechtseinräumungen (grants of usage rights) under Sections 31 et seq. UrhG. When a licensee violates the conditions of an open source license, the usage rights automatically terminate (or, under some interpretations, were never properly granted), converting the continued use of the software into copyright infringement (Urheberrechtsverletzung).

### Landmark Cases

**Welte v. Sitecom Deutschland GmbH (LG Munich I, May 19, 2004, Case No. 21 O 6123/04):** The first court decision worldwide to enforce the GNU GPL. Harald Welte, through his gpl-violations.org project, obtained a preliminary injunction against Sitecom for distributing a router containing Linux-based firmware without providing source code as required by the GPLv2. The court held that the GPL is a valid license under German law and that failure to comply with its conditions constitutes copyright infringement.

**Welte v. Skype Technologies SA (LG Munich I, July 16, 2007, Case No. 7 O 5245/07):** The court granted an injunction against Skype for distributing VoIP hardware containing GPL-licensed software without providing source code. The court confirmed that GPL compliance obligations extend to the entire supply chain, including distributors who did not themselves develop the infringing product.

**McHardy v. Various Defendants:** Patrick McHardy, a Linux kernel contributor, filed numerous enforcement actions against companies using Linux without GPL compliance, generating significant case law but also controversy regarding aggressive enforcement tactics. Courts addressed questions of standing (whether individual contributors to a collaborative work can enforce the GPL), with the Hamburg Regional Court (LG Hamburg) generally recognizing contributor standing.

### Copyleft and German Contract Law

German courts have consistently held that copyleft obligations (the requirement to distribute derivative works under the same license) are enforceable as conditions of the copyright license grant. The automatic termination of rights upon license violation (Verfall der Nutzungsrechte) provides an effective enforcement mechanism, as continued use after termination constitutes copyright infringement with all attendant remedies including injunctive relief, damages, and information disclosure.

### Cyber Resilience Act Impact

The EU Cyber Resilience Act (Regulation (EU) 2024/2847), adopted in October 2024, imposes cybersecurity requirements on products with digital elements. The Act includes a specific exemption for open source software supplied outside a commercial activity (Recital 18, Article 3), but open source stewards -- organizations that systematically support the development of open source products -- must implement light-touch due diligence. This distinction is particularly relevant for Germany's active open source community and the Sovereign Tech Fund's investment in open source infrastructure.

## ECHR & EU

### Computer Programs Directive (2009/24/EC)

The EU's foundational framework for software copyright, Directive 2009/24/EC, establishes that computer programs are protected as literary works under the Berne Convention. The Directive's provisions on reproduction rights (Article 4), exceptions for lawful use (Article 5), and decompilation for interoperability (Article 6) form the copyright framework within which open source licenses operate across all member states.

### SAS Institute v. World Programming Ltd (CJEU, Case C-406/10, 2012)

The CJEU held that neither the functionality of a computer program nor the programming language or data file format it uses are protectable by copyright. This decision clarified the scope of software copyright protection across the EU, establishing that open source licenses cannot restrict the use of ideas, interfaces, or functionality -- only the expression of the software code itself.

### European Union Public Licence (EUPL)

The EUPL, first released in 2007 and currently in version 1.2, is the official open source license of the European Union. It is available in all 23 official EU languages, ensuring legal certainty across jurisdictions. The EUPL is a copyleft license compatible with multiple other open source licenses (including GPLv2, GPLv3, AGPL, MPL, LGPL, EPL, and CeCILL). The European Commission uses the EUPL for software developed in the context of its ISA2 program and other interoperability initiatives.

### EU Open Source Software Strategy

The European Commission adopted its Open Source Software Strategy 2020-2023, committing to increased use of open source in EU institutions, contribution to open source projects, and development of open source-friendly procurement practices. The strategy was renewed and expanded in subsequent policy frameworks, with the EU establishing bug bounty programs for critical open source software used by EU institutions.

### Cyber Resilience Act (Regulation (EU) 2024/2847)

The CRA establishes mandatory cybersecurity requirements for products with digital elements placed on the EU market. Key provisions affecting open source:

**Open Source Exemption:** Software developed or supplied outside a commercial activity is exempt from CRA obligations, recognizing that imposing full product liability on volunteer open source developers would be impractical and counterproductive.

**Open Source Stewards (Article 24):** Organizations that systematically support the development of open source products intended for commercial activities must implement a cybersecurity policy, cooperate with market surveillance authorities, and facilitate vulnerability handling. They face lighter obligations than manufacturers but must demonstrate due diligence.

**Supply Chain Obligations:** Commercial entities that integrate open source components into products bear responsibility for the security of the integrated product, creating incentives for supply chain security management.

### European Court of Human Rights

The ECHR's relevance to open source licensing is indirect but significant. The Court's jurisprudence on intellectual property as a form of property protected under Article 1 of Protocol 1 (Anheuser-Busch Inc. v. Portugal, Application No. 73049/01, Grand Chamber Judgment of January 11, 2007) confirms that copyright -- including copyright in software -- is a Convention-protected right. The Court's balancing of intellectual property rights against freedom of information (Article 10) and the right to property may inform future disputes concerning the scope and enforcement of open source licenses.

## Comparative Analysis

### Enforcement Mechanisms

Germany has developed the most effective judicial enforcement mechanism, with courts consistently treating GPL violations as copyright infringement warranting preliminary injunctions. The United States established the foundational principle that license conditions are copyright conditions (Jacobsen v. Katzer), enabling powerful remedies. South Korea's enforcement remains primarily administrative and voluntary, with less litigation. The EU framework relies on national copyright enforcement mechanisms within the harmonized copyright framework.

### License Interpretation

A fundamental challenge is that open source licenses, largely drafted under US legal assumptions, must be interpreted under diverse national legal systems. The GPL's "derivative work" concept maps imperfectly to German law's "Bearbeitung" (adaptation) under Section 23 UrhG or Korean law's derivative work provisions. Courts in each jurisdiction have adapted their interpretation to local copyright doctrine while attempting to honor the license's intent.

### Government Adoption

All four jurisdictions actively promote open source in government, but approaches vary. The EU has been most systematic through the EUPL and institutional open source strategies. South Korea integrates open source promotion into industrial policy. The United States combines policy mandates with platform infrastructure (Code.gov). Germany supports open source through its Sovereign Tech Fund and government adoption policies.

### Security and Liability

The Cyber Resilience Act's approach to open source security represents the most developed regulatory framework, carefully distinguishing between volunteer open source development (exempt) and commercial integration (subject to full CRA obligations). The United States addresses open source security primarily through the Cybersecurity and Infrastructure Security Agency (CISA) initiatives and voluntary frameworks. South Korea relies on KISA guidelines.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 1989 | Global | GNU General Public License version 1 released |
| 1998 | United States | Open Source Initiative (OSI) founded |
| 2004 | Germany | Welte v. Sitecom: first court enforcement of GPL worldwide |
| 2007 | EU | European Union Public Licence (EUPL) version 1.0 released |
| 2007 | Germany | Welte v. Skype: GPL enforcement extended to supply chain |
| 2008 | United States | Jacobsen v. Katzer: Federal Circuit holds open source conditions are copyright conditions |
| 2012 | EU | CJEU SAS Institute v. WPL: software functionality not copyrightable |
| 2016 | United States | Federal Source Code Policy (M-16-21) mandates open source release |
| 2017 | United States | Artifex v. Hancom: GPL enforcement against Korean company |
| 2020 | EU | EU Open Source Software Strategy 2020-2023 adopted |
| 2021 | United States | Oracle v. Google: Supreme Court holds Java API use is fair use |
| 2022 | Germany | German government establishes Sovereign Tech Fund for open source infrastructure |
| 2024 | EU | Cyber Resilience Act (Regulation 2024/2847) adopted with open source exemption |
| 2024 | South Korea | Framework Act on AI references open source AI model governance |

## References

### South Korea
- Copyright Act (저작권법). Available at: https://elaw.klri.re.kr/
- Software Industry Promotion Act (소프트웨어 산업 진흥법). Available at: https://elaw.klri.re.kr/
- Korea Copyright Commission, Open Source Software License Comprehensive Information System (OLIS). Available at: https://www.olis.or.kr/

### United States
- Jacobsen v. Katzer, 535 F.3d 1373 (Fed. Cir. 2008). Available at: https://www.law.cornell.edu/
- Wallace v. IBM Corp., 467 F.3d 1104 (7th Cir. 2006).
- Google LLC v. Oracle America, Inc., 593 U.S. 1 (2021).
- Open Source Initiative, "Open Source Definition." Available at: https://opensource.org/osd

### Germany
- Welte v. Sitecom Deutschland GmbH, LG Munich I, Case No. 21 O 6123/04 (May 19, 2004).
- Welte v. Skype Technologies SA, LG Munich I, Case No. 7 O 5245/07 (July 16, 2007).
- Urheberrechtsgesetz (UrhG). Available at: https://www.gesetze-im-internet.de/urhg/

### ECHR & EU
- Directive 2009/24/EC (Computer Programs Directive). Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009L0024
- CJEU, Case C-406/10, SAS Institute Inc. v. World Programming Ltd, Judgment of May 2, 2012.
- European Union Public Licence (EUPL) v1.2. Available at: https://joinup.ec.europa.eu/collection/eupl
- Regulation (EU) 2024/2847 (Cyber Resilience Act). Available at: https://eur-lex.europa.eu/eli/reg/2024/2847/oj
