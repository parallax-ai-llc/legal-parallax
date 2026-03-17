---
id: "database-rights-law-comparison"
name: "Database Rights and Protection: Cross-Jurisdictional Comparison"
date: "2026-03-16"
nationality: "Global"
occupation: ["Legal Analysis", "Comparative Law", "Information Technology Law"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Database_right"
lastUpdated: "2026-03-16"
---

## Summary

Database protection laws address the legal rights over collections of data, information, or other materials arranged systematically or methodically and individually accessible by electronic or other means, with jurisdictions diverging fundamentally on whether databases merit sui generis protection based on investment (the European approach), copyright protection requiring creative selection or arrangement (the U.S. approach following Feist), or a combination of both, with the rapid growth of data-driven economies, artificial intelligence training, and web scraping practices intensifying the stakes of these divergent approaches. South Korea protects databases through a dual framework under the Copyright Act (저작권법): compilations that constitute intellectual creations by reason of the selection or arrangement of their contents are protected as compilation works (편집저작물, Article 6), while databases that do not meet this creativity threshold may be protected under the sui generis database producer's right (데이터베이스제작자의 권리, Articles 93-98), which protects against the extraction or reuse of a substantial part of the database's contents where the database required substantial investment in human, material, or financial resources; Korea's approach mirrors the EU model, with protection lasting five years from completion or substantial update. The United States provides no sui generis database protection following the Supreme Court's landmark decision in Feist Publications, Inc. v. Rural Telephone Service Co., 499 U.S. 340 (1991), which held that copyright in compilations requires originality in the selection, coordination, or arrangement of data, rejecting the "sweat of the brow" doctrine; databases lacking creative selection or arrangement receive no copyright protection, though alternative protections may be available through contract law (ProCD, Inc. v. Zeidenberg, 86 F.3d 1447 (7th Cir. 1996)), state misappropriation doctrine (limited by federal preemption), the Computer Fraud and Abuse Act (CFAA, 18 U.S.C. Section 1030), and the Defend Trade Secrets Act (DTSA, 18 U.S.C. Section 1836). Germany protects databases through both copyright (Section 4(2) UrhG, databases as intellectual creations) and the sui generis database right (Sections 87a-87e UrhG, transposing the EU Database Directive 96/9/EC), with the sui generis right protecting database makers who demonstrate substantial investment in obtaining, verifying, or presenting the database contents; the right lasts 15 years from completion or publication and is renewable upon substantial new investment. The EU framework, established by Directive 96/9/EC on the legal protection of databases, provides both copyright protection for databases that constitute intellectual creations and a sui generis right for databases representing substantial investment, with the CJEU developing extensive jurisprudence on the meaning of "substantial investment" (excluding the creation of data itself under the spin-off doctrine), "extraction and reutilization," and the relationship between database rights and data access in the digital economy.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **Sui Generis Right** | Yes (Copyright Act Articles 93-98) | No | Yes (UrhG Sections 87a-87e) | Yes (Directive 96/9/EC, Chapter III) |
| **Copyright Protection** | Compilation works (Article 6): creative selection/arrangement | Feist: creative selection, coordination, or arrangement | Section 4(2) UrhG: intellectual creation in selection/arrangement | Article 3 Directive 96/9/EC: intellectual creation |
| **Originality Threshold** | Intellectual creation (selection/arrangement) | Originality (Feist): minimum creativity required | Author's own intellectual creation (Infopaq standard) | Author's own intellectual creation |
| **Sui Generis Duration** | 5 years from completion/substantial update; renewable | N/A | 15 years from completion/publication; renewable | 15 years from completion/publication; renewable |
| **Investment Required** | Substantial human, material, or financial investment | N/A (no sui generis protection) | Substantial investment in obtaining, verifying, or presenting | Substantial investment in obtaining, verifying, or presenting |
| **Data Scraping** | Potentially infringing extraction; also addressed through PIPA | Contract law; CFAA; state trespass to chattels (limited) | Potentially infringing extraction/reutilization; UWG unfair competition | Extraction/reutilization; Data Act interaction |
| **Sweat of the Brow** | Rejected for copyright; addressed by sui generis right | Rejected (Feist) | Rejected for copyright; addressed by sui generis right | Rejected for copyright; addressed by sui generis right |
| **Exceptions** | Private use; education; quotation (Art. 94) | Fair use (Section 107) for copyrighted databases | Personal private use; scientific research; Sections 87c UrhG | Lawful user rights (Art. 8); three exceptions (Art. 9) |

## South Korea

### Legal Framework

South Korea adopted a dual database protection framework closely modeled on the EU approach, providing both copyright and sui generis protection.

**Compilation Works (편집저작물, Article 6):** Databases that constitute intellectual creations by reason of the selection or arrangement of their contents are protected as compilation works under the Copyright Act. The creativity requirement is assessed based on whether the compiler exercised intellectual judgment in choosing which data to include and how to organize it. Mere alphabetical or chronological ordering, or comprehensive collection of all available data, is generally insufficient.

**Sui Generis Database Producer's Right (Articles 93-98):** The Copyright Act provides a sui generis right for database producers (데이터베이스제작자) who have made substantial investment in obtaining, verifying, or presenting the contents of a database:

**Definition of Database (Article 2, No. 19):** A database is defined as a compilation of materials arranged or assembled systematically or methodically so that individual materials can be searched or accessed by electronic means.

**Definition of Database Producer (Article 2, No. 20):** The database producer is the person who has made a substantial investment in the creation, verification, or presentation of the database contents, or who has ordered such creation.

**Protected Rights (Article 93):** The database producer has the right to prohibit the extraction (재제조) or reutilization (복제·배포·방송 또는 전송) of a substantial part, qualitatively or quantitatively, of the database contents.

**Duration (Article 95):** The sui generis right lasts for five years from the year following the completion of the database, or from the year following publication if the database is made available to the public within five years of completion. Substantial new investment in updating or verifying the database creates a new five-year protection period.

### Data Scraping and Korean Law

**Personal Information Protection Act (개인정보 보호법, PIPA):** Web scraping that involves the collection of personal information implicates PIPA, which requires consent for the collection of personal data and imposes restrictions on automated collection. The Personal Information Protection Commission (개인정보보호위원회) has addressed automated data collection practices.

**Unfair Competition Prevention Act (부정경쟁방지 및 영업비밀보호에 관한 법률):** Article 2(1)(카) provides a general clause prohibiting the unauthorized use of another's commercial achievement (성과) that has been obtained through substantial investment or effort, providing a supplementary basis for challenging data scraping beyond the database right.

**Korean Case Law:** The Seoul Central District Court and the Seoul High Court have addressed web scraping in several decisions, generally holding that the systematic extraction of substantial portions of databases constitutes infringement of the sui generis right where the defendant's scraping replaces or competes with the database producer's market. The Supreme Court (대법원) in 2020Do15532 addressed the boundary between legitimate data access and unlawful extraction.

## United States

### Legal Framework

The United States provides the narrowest database protection among the jurisdictions compared, with no sui generis right and a significant gap in protection for non-creative databases.

**Feist Publications, Inc. v. Rural Telephone Service Co., 499 U.S. 340 (1991):** The Supreme Court's landmark decision held that the Copyright Clause of the U.S. Constitution requires a minimum degree of creativity for copyright protection. A white pages telephone directory arranged alphabetically by surname was not copyrightable because it lacked originality in selection, coordination, or arrangement. The Court explicitly rejected the "sweat of the brow" doctrine -- the idea that labor and effort alone could confer copyright protection.

**Post-Feist Compilation Copyright:** Following Feist, copyright protection for databases requires demonstrating originality in the selection of data (choosing which data to include from a larger pool), coordination of data (organizing data in a creative manner), or arrangement of data (presenting data in a creative format). Databases that comprehensively compile all available data in an obvious arrangement remain unprotectable.

### Alternative Protection Mechanisms

**Contract Law -- Shrinkwrap/Clickwrap Agreements:** In ProCD, Inc. v. Zeidenberg, 86 F.3d 1447 (7th Cir. 1996), Judge Easterbrook upheld the enforceability of shrinkwrap license terms restricting the use of a telephone directory database, holding that contract restrictions on database use are not preempted by federal copyright law because they create rights in personam (between the parties) rather than rights in rem (against the world). This remains the primary mechanism for database producers to protect non-copyrightable compilations.

**Computer Fraud and Abuse Act (CFAA, 18 U.S.C. Section 1030):** The CFAA prohibits unauthorized access to protected computers and has been invoked against web scraping. However, the Supreme Court's decision in Van Buren v. United States, 593 U.S. 374 (2021), narrowed the CFAA's scope by holding that "exceeds authorized access" means accessing areas of a computer system that the accessor is not entitled to access, not using information obtained through authorized access for unauthorized purposes. This decision complicated the use of the CFAA against scraping of publicly accessible data.

**hiQ Labs, Inc. v. LinkedIn Corp., 938 F.3d 985 (9th Cir. 2019):** The Ninth Circuit held that scraping publicly available data on LinkedIn did not violate the CFAA, as the data was not behind an access restriction. The Court also held that LinkedIn could not use the CFAA to create a de facto exclusive right in publicly available data. On remand after the Supreme Court vacated in light of Van Buren, the Ninth Circuit reaffirmed its conclusion in 2022.

**State Law Remedies:** Some states provide additional protections through:

- **Trespass to chattels:** Applied to excessive web scraping that burdens computer systems (eBay, Inc. v. Bidder's Edge, Inc., 100 F. Supp. 2d 1058 (N.D. Cal. 2000)), though this theory has been limited by subsequent decisions
- **Misappropriation:** The "hot news" misappropriation doctrine from International News Service v. Associated Press, 248 U.S. 215 (1918), survives federal preemption in narrow circumstances where the plaintiff generates time-sensitive information, the defendant free-rides on plaintiff's investment, and the free-riding threatens the incentive to produce the information (NBA v. Motorola, 105 F.3d 841 (2d Cir. 1997))
- **Trade secret law:** The Defend Trade Secrets Act (DTSA, 18 U.S.C. Section 1836) protects databases maintained as trade secrets through reasonable confidentiality measures

### Failed Legislative Proposals

Multiple congressional proposals to create sui generis database protection have failed:

- **H.R. 3531, Database Investment and Intellectual Property Antipiracy Act (1996):** Modeled on the EU Database Directive; failed to advance
- **H.R. 2652, Collections of Information Antipiracy Act (1998):** Passed the House but failed in the Senate due to opposition from scientific research and library communities
- **H.R. 3261, Database and Collections of Information Misappropriation Act (2003):** A narrower misappropriation-based approach; also failed

The failure to enact sui generis database legislation reflects the strength of opposition from scientific researchers, libraries, and technology companies concerned about restrictions on data access and the chilling effects on innovation.

## Germany

### Legal Framework

Germany provides comprehensive database protection through both copyright and the sui generis right, implementing the EU Database Directive.

**Database Copyright (Section 4(2) UrhG):** Databases that constitute intellectual creations by reason of the selection or arrangement of their contents are protected as collective works (Sammelwerke). The creativity threshold, following the CJEU's Infopaq standard (author's own intellectual creation), is lower than the traditional German threshold for works (persönliche geistige Schöpfung) but still requires some creative judgment in the selection or arrangement.

**Sui Generis Database Right (Sections 87a-87e UrhG):** Transposing Chapter III of the Database Directive:

**Section 87a (Definition):** A database is a collection of works, data, or other independent elements, arranged systematically or methodically and individually accessible by electronic or other means, the obtaining, verification, or presentation of which requires substantial investment in terms of quality or quantity.

**Section 87b (Database Maker's Right):** The database maker (Datenbankhersteller) has the exclusive right to reproduce, distribute, and communicate to the public the database in its entirety or a substantial part, qualitatively or quantitatively. Repeated and systematic extraction or reutilization of insubstantial parts is also prohibited if it conflicts with the normal exploitation of the database or unreasonably prejudices the legitimate interests of the database maker.

**Section 87c (Limitations):** The sui generis right is subject to exceptions for private use (non-electronic databases only), use for scientific research (with source acknowledgment), and use for educational purposes (with source acknowledgment and to the extent justified by the non-commercial purpose).

**Section 87d (Duration):** The right lasts 15 years from January 1 of the year following completion, or from January 1 of the year following first publication if published within 15 years of completion. Substantial new investment creating a qualitatively or quantitatively substantial modification creates a new 15-year protection period for the modified database.

### German Case Law

**BGH, Autobahnmaut (I ZR 47/08, 2010):** The Bundesgerichtshof addressed the meaning of "substantial investment" in the context of the German motorway toll system database, holding that the investment must relate to obtaining, verifying, or presenting existing data -- not to creating the data itself, following the CJEU's British Horseracing Board ruling.

**BGH, Personengebundene Fluggastdaten (I ZR 120/16, 2019):** The BGH addressed data scraping from an airline's website, holding that systematic extraction of flight data constituted reutilization of a substantial part of the airline's database, infringing the sui generis right.

**BGH, Scraping von Webseiten (I ZR 3/22, 2024):** In a significant decision addressing AI-era data practices, the BGH examined the interaction between the database right, the text and data mining exception under Section 44b UrhG, and the sui generis right under Section 87b. The Court held that the TDM exception applies to the extraction of data from databases for text and data mining purposes, but that systematic reutilization of extracted data for competing database products exceeds the scope of the TDM exception.

### Unfair Competition Supplement

**Gesetz gegen den unlauteren Wettbewerb (UWG):** Beyond the sui generis database right, German unfair competition law provides additional protection. Section 4 No. 3 UWG prohibits the imitation of products (including databases) where the imitation causes an avoidable deception as to the commercial origin or unreasonably exploits or impairs the reputation of the imitated product. Section 3 UWG's general clause against unfair commercial practices may also be invoked against systematic free-riding on another's database.

## ECHR & EU

### EU Database Directive 96/9/EC

The Directive, adopted on March 11, 1996, established the dual protection framework:

**Chapter II (Copyright):** Article 3 provides that databases which, by reason of the selection or arrangement of their contents, constitute the author's own intellectual creation shall be protected as such by copyright. No other criteria shall be applied to determine their eligibility for that protection.

**Chapter III (Sui Generis Right):** Article 7 provides that member states shall provide a right for the maker of a database which shows that there has been a qualitatively and/or quantitatively substantial investment in either the obtaining, verification, or presentation of the contents, to prevent extraction and/or reutilization of the whole or of a substantial part, evaluated qualitatively and/or quantitatively, of the contents of that database.

**Article 7(5) (Anti-Circumvention):** The repeated and systematic extraction and/or reutilization of insubstantial parts of the contents of the database implying acts which conflict with the normal exploitation of that database or which unreasonably prejudice the legitimate interests of the database maker shall not be permitted.

### CJEU Jurisprudence

**British Horseracing Board v. William Hill (Case C-203/02, 2004):** The landmark case establishing the "spin-off" doctrine. The CJEU held that "investment in obtaining" the contents of a database refers to resources used to seek out existing independent materials and collect them in the database, not to resources used for the creation of the materials themselves. The BHB's investment in generating horse racing data (fixtures, runners, etc.) did not constitute investment in "obtaining" that data for the purposes of the sui generis right. This distinction between data creation and data collection significantly limited the scope of the sui generis right.

**Fixtures Marketing Ltd v. Organismos Prognostikon (Case C-444/02, 2004):** Decided alongside BHB, confirming that football fixture lists generated by the leagues themselves were "created" rather than "obtained," and the investment in generating the fixture data did not qualify for sui generis protection.

**Ryanair Ltd v. PR Aviation BV (Case C-30/14, 2015):** The CJEU held that the Database Directive does not apply to databases that are not protected by either copyright or the sui generis right, meaning that contractual restrictions on the use of such unprotected databases are not precluded by the Directive and may be enforceable under national contract law. This decision created an avenue for protecting databases that fall outside the Directive's scope through contractual mechanisms.

**CV-Online Latvia SIA v. Melons SIA (Case C-762/19, 2022):** The CJEU clarified that a search engine's dedicated meta-search of job advertisements in an online database may constitute "reutilization" within the meaning of the Directive, even if the search engine does not store the extracted data, where the search service provides a substitute for the database itself.

### Data Act and Database Rights

**Regulation (EU) 2023/2854 (Data Act):** The Data Act, applicable from September 12, 2025, directly addresses the interaction between database rights and data access obligations:

**Article 43:** The sui generis database right under Directive 96/9/EC does not apply to databases containing data obtained from or generated by the use of connected products or related services. This provision is designed to prevent manufacturers from using the database right to restrict access to IoT-generated data that must be shared under the Data Act's data sharing obligations.

**Recital 84:** The Data Act clarifies that where a database is populated solely with data generated by connected products, the investment in obtaining that data does not generally constitute a "substantial investment" within the meaning of the Database Directive, as obtaining the data is a by-product of the product's normal operation rather than an independent investment in data collection.

### EU Database Directive Review

The European Commission launched a review of the Database Directive in 2022, considering whether the sui generis right remains fit for purpose in the data economy. Key issues include the interaction between the database right and data access policies, the application of the right to AI training data, the spin-off doctrine's limitations in the context of machine-generated data, and the potential need for modernization to address web scraping, APIs, and data marketplaces. The review has not yet resulted in a formal legislative proposal.

### ECHR Considerations

While the ECHR does not directly address database rights, the protection of property rights under Protocol 1, Article 1 ECHR encompasses intellectual property rights, including database rights. The ECtHR's jurisprudence on the balance between property protection and the public interest in information access (Article 10) provides a framework for assessing the proportionality of database protection regimes.

## Comparative Analysis

### Sui Generis Right: The Fundamental Divide

The most significant divergence is the presence or absence of sui generis database protection. The EU, Germany, and South Korea provide investment-based protection that does not require creative originality, covering factual databases assembled through substantial effort. The United States, following Feist, provides no comparable protection, creating a "protection gap" for non-creative databases. This gap has significant implications for data-intensive industries: EU database producers have legal tools to prevent unauthorized extraction and reuse that are unavailable to their U.S. counterparts.

### Sweat of the Brow versus Creativity

All jurisdictions have rejected the "sweat of the brow" doctrine for copyright protection of databases, requiring some degree of creative selection or arrangement. However, the EU/South Korea sui generis right effectively provides sweat-of-the-brow protection through a different legal instrument, protecting the investment in compilation regardless of creativity. The U.S. approach most clearly separates labor from legal protection, requiring either creativity (copyright) or secrecy (trade secret) for legal protection.

### Web Scraping and AI Training

The treatment of web scraping and automated data extraction is rapidly evolving across jurisdictions. The EU/German framework provides database producers with clear legal tools to challenge unauthorized scraping under the sui generis right, supplemented by TDM exceptions for research and general purposes. The U.S. relies on a patchwork of contract law, CFAA (significantly limited by Van Buren and hiQ Labs), and state law theories. South Korea's combination of the sui generis right, PIPA, and unfair competition law provides intermediate protection. The EU Data Act's exclusion of database rights for IoT-generated data signals a shift toward balancing database protection against data access policies.

### Economic Impact

The effectiveness of the EU sui generis right has been debated since its inception. A 2018 European Commission evaluation found that the right had not demonstrably increased database production in Europe relative to the U.S. (which lacks such protection), though the methodological challenges of such comparisons are significant. The emergence of data as a critical economic input and the growing importance of AI training data have renewed interest in database protection policy across all jurisdictions.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 1991 | United States | Feist v. Rural Telephone: sweat of the brow rejected; creativity required |
| 1996 | EU | Database Directive 96/9/EC adopted |
| 1996 | United States | ProCD v. Zeidenberg: contract protection for databases upheld |
| 1998 | Germany | Sui generis database right (Sections 87a-87e UrhG) enacted |
| 2003 | South Korea | Copyright Act amended to include sui generis database right (Articles 93-98) |
| 2004 | CJEU | BHB v. William Hill: spin-off doctrine limits "obtaining" |
| 2015 | CJEU | Ryanair v. PR Aviation: contractual restrictions on unprotected databases permitted |
| 2019 | United States | hiQ Labs v. LinkedIn: scraping publicly available data not CFAA violation |
| 2021 | United States | Van Buren v. United States: CFAA "exceeds authorized access" narrowed |
| 2022 | CJEU | CV-Online v. Melons: meta-search as reutilization |
| 2023 | EU | Data Act adopted (applicable from September 2025) |
| 2024 | Germany | BGH addresses web scraping and TDM interaction with database right |

## References

### South Korea
- Copyright Act (저작권법), Articles 6, 93-98.
- Personal Information Protection Act (개인정보 보호법).
- Unfair Competition Prevention Act (부정경쟁방지 및 영업비밀보호에 관한 법률), Article 2(1)(카).

### United States
- Feist Publications, Inc. v. Rural Telephone Service Co., 499 U.S. 340 (1991).
- ProCD, Inc. v. Zeidenberg, 86 F.3d 1447 (7th Cir. 1996).
- Van Buren v. United States, 593 U.S. 374 (2021).
- hiQ Labs, Inc. v. LinkedIn Corp., 938 F.3d 985 (9th Cir. 2019).
- Computer Fraud and Abuse Act, 18 U.S.C. Section 1030.

### Germany
- Urheberrechtsgesetz (UrhG), Sections 4(2), 87a-87e. Available at: https://www.gesetze-im-internet.de/urhg/
- BGH, Autobahnmaut (I ZR 47/08, 2010).
- BGH, Personengebundene Fluggastdaten (I ZR 120/16, 2019).

### ECHR & EU
- Directive 96/9/EC on the legal protection of databases.
- Regulation (EU) 2023/2854 (Data Act), Article 43.
- British Horseracing Board v. William Hill, Case C-203/02, CJEU 2004.
- Ryanair v. PR Aviation, Case C-30/14, CJEU 2015.
- CV-Online Latvia v. Melons, Case C-762/19, CJEU 2022.
