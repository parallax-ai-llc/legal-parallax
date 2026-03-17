---
id: "open-banking-law-comparison"
name: "Open Banking Regulation: Cross-Jurisdictional Comparison"
date: "2026-03-16"
nationality: "Global"
occupation: ["Legal Analysis", "Comparative Law", "Financial Regulation"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Open_banking"
lastUpdated: "2026-03-16"
---

## Summary

Open banking regulation mandates or facilitates the sharing of financial data between traditional banks and third-party providers (TPPs) through standardized application programming interfaces (APIs), fundamentally reshaping the competitive landscape of financial services. The regulatory approaches range from the European Union's comprehensive legislative mandates under the Payment Services Directive 2 (PSD2, Directive (EU) 2015/2366) and its successor PSD3 (proposed 2023), to the United States' evolving framework under the Consumer Financial Protection Bureau's (CFPB) Personal Financial Data Rights Rule implementing Section 1033 of the Dodd-Frank Act, to South Korea's progressive data-sharing mandates under the Credit Information Use and Protection Act (신용정보의 이용 및 보호에 관한 법률, MyData initiative). Germany, as an EU member state, implements PSD2 through the Payment Services Supervision Act (Zahlungsdiensteaufsichtsgesetz, ZAG) while its strong banking sector has shaped both compliance practices and the development of API standards. These frameworks address interconnected issues of consumer consent, data portability, API standardization, liability allocation, and competition policy, with significant implications for financial inclusion, innovation, and privacy.

## Comparative Table

| Aspect | South Korea | United States | Germany | EU |
|--------|-------------|---------------|---------|-----|
| **Primary Legislation** | Credit Information Use and Protection Act (MyData); Electronic Financial Transactions Act | Dodd-Frank Act § 1033; CFPB Personal Financial Data Rights Rule (2024) | ZAG (PSD2 implementation); KWG | PSD2 (Directive 2015/2366); PSD3/PSR (proposed 2023) |
| **Regulatory Model** | Mandatory API sharing; government-driven MyData | Mandatory access rights; evolving federal rule | Mandatory (PSD2); XS2A via dedicated interface | Mandatory; customer-permissioned data access |
| **Data Scope** | Comprehensive (bank, insurance, securities, telecom, public data) | Financial data held by covered data providers | Payment account data; PSD2 scope | Payment account data; expansion under PSD3/FIDA |
| **API Standards** | MyData API Standard (Financial Security Institute) | No single standard; FDX as industry standard | Berlin Group NextGenPSD2; proprietary APIs | No single EU standard; Berlin Group, STET, UK OBIE |
| **Consent Framework** | Explicit consent; centralized MyData consent management | Consumer authorization; revocation rights | GDPR + PSD2 explicit consent; SCA | Explicit consent per PSD2 Article 94; GDPR alignment |
| **Regulatory Authority** | Financial Services Commission (FSC); Financial Supervisory Service (FSS) | CFPB; OCC; Federal Reserve | BaFin; Deutsche Bundesbank | EBA; national competent authorities |
| **Liability for Unauthorized Transactions** | Financial institution bears initial burden | Provider of data access; evolving under § 1033 rule | Payment service provider (PSD2 Article 73-74) | Payer's PSP; limited liability (EUR 50) for unauthorized transactions |

## South Korea

### Legal Framework

South Korea has developed one of the world's most advanced open banking and open finance regimes through its MyData (마이데이터) initiative, extending data portability beyond banking to insurance, securities, telecommunications, and government services:

- **Credit Information Use and Protection Act (신용정보의 이용 및 보호에 관한 법률, as amended 2020):** The foundational legislation for South Korea's MyData regime, comprehensively amended in 2020 to enable open finance:
  - **Article 2 -- Definitions:** Defines "personal credit information" broadly to encompass financial transaction records, credit assessments, insurance and securities data, and other financially relevant personal data.
  - **Article 22-9 -- MyData Business:** Establishes the MyData business license category (개인신용정보 전송요구권), authorizing licensed entities to aggregate, analyze, and provide personalized financial services using consumer-permissioned data from multiple financial institutions.
  - **Article 33-2 -- Right to Data Portability (전송요구권):** Grants individuals the right to request the transmission of their personal credit information from data holders (banks, insurers, securities firms) to authorized MyData operators or to themselves, in a standardized electronic format.
  - **Article 39-3 -- API Standards:** Empowers the Financial Services Commission to prescribe API standards and technical specifications for data transmission, ensuring interoperability across financial institutions.
- **Electronic Financial Transactions Act (전자금융거래법):** Governs electronic payment services and establishes the legal framework for payment initiation and account information services, complementing the MyData regime.
- **Financial Innovation Support Special Act (금융혁신지원 특별법, 2019):** Establishes a regulatory sandbox for innovative financial services, enabling FinTech companies to test open banking applications under relaxed regulatory conditions for up to four years.

### Key Principles

South Korea's MyData system launched formally on 1 December 2021, with the Financial Services Commission overseeing the licensing and supervision of MyData operators. As of 2025, over 60 entities hold MyData business licenses, including traditional banks, FinTech startups, and technology companies. The system uses a centralized API infrastructure operated by the Korea Financial Telecommunications and Clearings Institute (KFTC, 금융결제원), providing standardized interfaces for data exchange.

The MyData regime is notably more expansive in data scope than European or American equivalents:

- **Phase 1 (2021-2022):** Banking transaction data, credit card data, and insurance data.
- **Phase 2 (2023-2024):** Securities data, telecommunications data, public utility data.
- **Phase 3 (2025-2026):** Healthcare data, government administrative data, expanding toward a comprehensive personal data portability ecosystem.

The Financial Security Institute (FSI, 금융보안원) publishes and maintains the MyData API Standard, which mandates JSON-based RESTful APIs with OAuth 2.0 authentication, requiring all covered financial institutions to implement dedicated API endpoints.

### Notable Cases

- **FSC MyData License Revocation -- Banksalad (2024):** The FSC issued a warning to leading MyData operator Banksalad (뱅크샐러드) for inadequate data security practices after a vulnerability assessment revealed that aggregated consumer financial data was being stored longer than the consented retention period, in violation of the Credit Information Act Article 20-2.
- **Toss Data Portability Expansion Case (2023):** Toss (비바리퍼블리카) successfully petitioned the FSC to expand the scope of transmittable data under the MyData framework to include insurance policy details and securities portfolio data, accelerating the Phase 2 rollout.
- **KB Kookmin Bank API Compliance Order (2023):** The FSS ordered KB Kookmin Bank to remedy API performance deficiencies after the bank's dedicated interface consistently failed to meet the 99.5% availability standard required under the MyData API technical specification, imposing a corrective order under the Electronic Financial Transactions Act.

## United States

### Federal Framework

The United States has moved toward a mandatory open banking framework through the CFPB's implementation of Dodd-Frank Act Section 1033:

- **Dodd-Frank Wall Street Reform and Consumer Protection Act, Section 1033 (12 U.S.C. § 5533):** Enacted in 2010, Section 1033 provides that covered persons (banks, credit unions, non-bank financial companies) shall make available to consumers, upon request, information in the control or possession of the covered person concerning the consumer financial product or service obtained from that covered person, including: transaction data, account balance information, and information necessary to initiate payments from the account.
- **CFPB Personal Financial Data Rights Rule (Final Rule, October 2024):** The CFPB finalized its long-awaited implementing regulation under Section 1033, establishing:
  - **Covered Data:** Transaction information, account balance data, payment initiation information, and terms and conditions applicable to consumer financial products. Excludes confidential commercial information, proprietary algorithms, and information collected for fraud prevention.
  - **Covered Data Providers:** Depository institutions, non-depository financial institutions, credit card issuers, and other entities that control consumer financial data. Phased implementation based on asset size.
  - **Third-Party Access:** Authorized third parties may access consumer financial data through developer interfaces (APIs) upon the consumer's express informed consent. The Rule requires third parties to limit data collection to what is "reasonably necessary" for the authorized purpose.
  - **Consumer Authorization and Revocation:** Consumers must affirmatively authorize data access and can revoke authorization at any time. Authorization must be renewed annually, with re-authorization requiring affirmative consumer action.
  - **Data Security:** Covered data providers and authorized third parties must maintain security practices consistent with applicable law, including the Gramm-Leach-Bliley Act (15 U.S.C. § 6801) safeguards.
  - **Implementation Timeline:** Largest data providers (assets > $500 billion) must comply by April 2026; medium institutions by 2027; smaller institutions by 2028-2030.
- **Gramm-Leach-Bliley Act (GLBA, 15 U.S.C. §§ 6801-6809):** Establishes financial privacy and data security requirements that interact with open banking data sharing, requiring financial institutions to protect consumer financial information through administrative, technical, and physical safeguards.

### Industry Standards

In the absence of a single mandated API standard, the U.S. open banking ecosystem has relied on industry-led standardization:

- **Financial Data Exchange (FDX):** A nonprofit industry consortium that has developed the FDX API standard, adopted by over 70 financial institutions and data aggregators. FDX 6.0 (2024) supports full CFPB Section 1033 compliance.
- **Screen Scraping Phase-Out:** The CFPB Rule effectively mandates a transition from screen scraping (credential-based data aggregation) to API-based access, addressing longstanding security and reliability concerns. Data providers must maintain developer interfaces with commercially reasonable performance standards.

### Notable Cases

- **CFPB v. TransUnion (2024):** The CFPB pursued enforcement action against TransUnion for allegedly failing to provide consumers with accurate access to their financial data as required under the Fair Credit Reporting Act (FCRA), with implications for data portability obligations under the Section 1033 framework.
- **Plaid, Inc. Litigation (2021-2023):** Multiple class action lawsuits alleged that Plaid, the leading U.S. data aggregation intermediary, collected consumer banking credentials through deceptive interfaces that mimicked bank login screens, accessing more data than consumers authorized. Plaid settled a consolidated class action for USD 58 million in 2022.
- **Capital One v. Data Aggregator Disputes (2020-2023):** Capital One's blocking of screen scraping access by data aggregators, and subsequent negotiations for API-based access, highlighted the tension between bank data control and consumer data portability rights, directly informing the CFPB's rulemaking process.
- **Consumer Financial Data Rights Rulemaking Litigation (2025):** Banking trade associations (American Bankers Association, Bank Policy Institute) filed legal challenges to the CFPB's Section 1033 rule, arguing that the rule exceeded the CFPB's statutory authority and imposed unreasonable compliance burdens, particularly regarding the obligation to provide data access free of charge.

## Germany

### Legal Framework

Germany implements the EU's open banking framework through national legislation while its banking sector's characteristics -- including the three-pillar system of commercial banks, savings banks (Sparkassen), and cooperative banks (Genossenschaftsbanken) -- shape implementation dynamics:

- **Payment Services Supervision Act (Zahlungsdiensteaufsichtsgesetz, ZAG):** Transposes PSD2 into German law, establishing the regulatory framework for payment services including:
  - **§ 1(1) ZAG -- Payment Services:** Defines regulated payment services, including account information services (Kontoinformationsdienste) and payment initiation services (Zahlungsauslösedienste) -- the two new service categories created by PSD2.
  - **§ 48 ZAG -- Access to Payment Account (XS2A):** Implements PSD2 Article 66 (payment initiation) and Article 67 (account information), requiring account servicing payment service providers (ASPSPs) to grant access to authorized third-party providers through dedicated interfaces or, failing that, through the customer-facing interface (fallback mechanism).
  - **§ 49 ZAG -- Strong Customer Authentication (SCA):** Implements the SCA requirements of PSD2, requiring multi-factor authentication for electronic payment transactions and account access.
- **German Banking Act (KWG):** BaFin supervises payment institutions and FinTech companies providing open banking services under the KWG's licensing framework.
- **BGB §§ 675c-676c (Payment Services Provisions):** The civil law framework for payment service contracts, including liability allocation for unauthorized transactions (§ 675u: PSP liability with consumer bearing maximum EUR 50 for unauthorized use absent gross negligence) and information obligations.
- **GDPR and BDSG:** Data sharing under open banking must comply with GDPR requirements, including lawful basis for processing (Article 6), purpose limitation (Article 5(1)(b)), and data subject rights (Articles 15-22). The intersection of PSD2 consent and GDPR consent has been a significant compliance challenge.

### Key Principles

Germany's implementation of PSD2 has been shaped by several distinctive factors:

1. **Berlin Group NextGenPSD2 Standard:** Germany has been a driving force behind the Berlin Group's NextGenPSD2 API framework, which has been widely adopted by German banks, particularly through the jointly-operated interfaces of the Deutsche Kreditwirtschaft (German Banking Industry Committee).
2. **Strong Customer Authentication (SCA) Implementation:** German banks have invested heavily in SCA solutions, with the predominant approach combining app-based authentication (pushTAN) with biometric verification. The Bundesbank has reported that SCA implementation reduced payment fraud losses in Germany by 35% between 2020 and 2024.
3. **Sparkassen and Cooperative Bank Compliance:** The decentralized structure of the German savings bank and cooperative bank sectors -- comprising over 900 individual institutions -- presented unique implementation challenges. Centralized IT service providers (Finanz Informatik for Sparkassen; Atruvia for cooperative banks) developed shared API infrastructure, achieving economies of scale.

### Notable Cases

- **BaFin N26 Open Banking Compliance Order (2022):** BaFin ordered digital bank N26 to remedy deficiencies in its dedicated interface for third-party providers, finding that the bank's API had insufficient availability (below the 99% target) and imposed unreasonable rate limits that effectively denied access to authorized account information service providers, violating ZAG § 48.
- **Bundesgerichtshof (BGH) Screen Scraping Decision (2020, XI ZR 535/18):** The BGH ruled on the transitional period for screen scraping under PSD2, holding that banks could not unilaterally block screen-scraping access by authorized payment initiation service providers before dedicated interfaces meeting the technical requirements of Commission Delegated Regulation (EU) 2018/389 were fully operational.
- **Deutsche Bundesbank PSD2 Exemption Rulings (2023):** The Bundesbank, acting as competent authority for PSD2 SCA exemptions, published decisions clarifying the application of transaction risk analysis (TRA) exemptions under Delegated Regulation Article 18, allowing lower-risk transactions below EUR 500 to proceed without SCA where the payment service provider's fraud rate remained below specified thresholds.
- **BaFin FinTech License Proceedings (2024):** BaFin granted payment institution licenses to several German FinTech companies seeking to provide open banking services, establishing precedent for the regulatory treatment of API-based financial data intermediaries under ZAG.

## ECHR / EU Framework

### Convention Articles

The European Convention on Human Rights provides foundational principles applicable to open banking regulation:

- **Article 8 -- Right to Respect for Private and Family Life:** Financial data sharing implicates Article 8's protection of personal data as a component of private life. The ECtHR has recognized that financial information constitutes personal data protected under Article 8 (M.N. and Others v. San Marino, 2015, App. No. 28005/12). Any mandatory data-sharing regime must satisfy the Article 8(2) proportionality requirements.
- **Article 1 of Protocol No. 1 -- Protection of Property:** Financial data held by banks may constitute "possessions" of both the bank (as proprietary business information) and the consumer (as personal data over which the consumer has rights). The compulsory sharing of such data through open banking mandates engages Protocol 1 protections, requiring that data sharing serves a legitimate aim and maintains proportionality.
- **Article 6 -- Right to a Fair Trial:** Consumers and financial institutions subject to regulatory enforcement under open banking frameworks have the right to fair proceedings, including access to judicial review of regulatory decisions.

### EU Legislative Framework

- **PSD2 (Directive (EU) 2015/2366):** The foundational EU open banking legislation, PSD2 introduced two key innovations: (1) the right for licensed Third-Party Providers (TPPs) to access consumer payment account data (with consumer consent) through Account Information Services (AIS) and to initiate payments through Payment Initiation Services (PIS); and (2) Strong Customer Authentication (SCA) requirements for electronic payments. PSD2 has been fully implemented across all EU member states since 14 September 2019, with the SCA provisions applicable from 31 December 2020 (following an extended migration period).
- **PSD3 and Payment Services Regulation (PSR) (Proposed, June 2023):** The European Commission proposed replacing PSD2 with a revised directive (PSD3) and a directly applicable regulation (PSR), addressing perceived shortcomings of PSD2:
  - **Enhanced API Performance Standards:** PSR mandates quantitative performance standards for dedicated interfaces, addressing banks' "soft blocking" of TPP access through poor API performance.
  - **IBAN/Name Verification:** Mandatory verification of payee matching for credit transfers, reducing fraud.
  - **Open Finance Expansion:** While PSD3/PSR focuses on payment accounts, the proposed Financial Information Data Access (FIDA) regulation extends data-sharing to insurance, pensions, investments, and credit data -- moving from open banking to open finance.
  - **Liability Framework Reform:** PSR clarifies liability allocation between ASPSPs and TPPs for unauthorized transactions, addressing ambiguities in PSD2 that led to inter-institutional disputes.
- **Financial Information Data Access (FIDA) Regulation (Proposed, June 2023):** The FIDA proposal extends the open banking model to a comprehensive open finance framework:
  - Requires holders of financial data (banks, insurers, investment firms, pension providers) to make consumer financial data available to authorized financial information service providers (FISPs) through standardized interfaces.
  - Establishes "financial data sharing schemes" as industry-led governance bodies for developing technical standards, resolving disputes, and setting compensation arrangements.
  - Aligns with GDPR data portability principles while establishing sector-specific rules for financial data sharing.
- **GDPR (Regulation (EU) 2016/679):** The GDPR's data protection framework intersects extensively with open banking:
  - **Article 6(1)(c) -- Legal Obligation:** Financial institutions may rely on legal obligation as the lawful basis for sharing data pursuant to PSD2/PSR requirements.
  - **Article 20 -- Right to Data Portability:** Complements PSD2's data access provisions, though the scope of GDPR data portability and PSD2 access rights do not perfectly align.
  - **Article 7 -- Conditions for Consent:** Where consent is the lawful basis for data sharing, GDPR requirements for freely given, specific, informed, and unambiguous consent must be met.

### Key Case Law and Decisions

- **EBA Opinion on PSD2 API Performance (2023):** The European Banking Authority published an opinion finding that 30% of dedicated interfaces across the EU failed to meet acceptable performance standards, recommending that national competent authorities take enforcement action against non-compliant account servicing PSPs and supporting the inclusion of quantitative API performance standards in PSR.
- **CJEU Case C-306/20, Heureka Group (2023):** While not directly an open banking case, the CJEU's ruling on platform data access under competition law established principles relevant to the obligation of dominant financial institutions to provide data access on fair, reasonable, and non-discriminatory terms.
- **EDPB Guidelines on PSD2 and GDPR Interplay (2020, Guidelines 06/2020):** The EDPB adopted guidelines clarifying the interaction between PSD2's consent requirements and GDPR's data protection principles, establishing that PSD2 consent for account access does not automatically satisfy GDPR consent requirements, and that data minimization principles apply to TPP data collection.

## Comparative Analysis

| Dimension | South Korea | United States | Germany / EU | ECHR Framework |
|-----------|-------------|---------------|--------------|----------------|
| **Regulatory Maturity** | Advanced; MyData operational since 2021 | Emerging; Section 1033 rule finalized 2024 | Established; PSD2 since 2019; PSD3 pending | Human rights baseline |
| **Data Scope** | Broadest: banking, insurance, securities, telecom, public data | Payment account and financial product data | Payment accounts (PSD2); expanding under FIDA | Financial data as private life (Article 8) |
| **API Standardization** | Centralized MyData API standard | Market-led (FDX); no government mandate | Berlin Group NextGenPSD2; national variations | N/A |
| **Screen Scraping** | Prohibited for MyData operators | Phase-out mandated by Section 1033 rule | Prohibited under PSD2 (dedicated interface obligation) | N/A |
| **Competition Impact** | Accelerated FinTech growth; 60+ MyData licensees | Expected to increase competition; bank resistance | Mixed: FinTech growth but bank adaptation | Property rights in data (Protocol 1) |
| **Consumer Adoption** | High; 30+ million MyData users as of 2025 | Early stage; dependent on rule implementation | Moderate; growing TPP usage | N/A |

## Timeline

| Year | Jurisdiction | Milestone |
|------|-------------|-----------|
| 2007 | EU | Payment Services Directive (PSD1) adopted |
| 2010 | US | Dodd-Frank Act Section 1033 enacted |
| 2015 | EU | PSD2 adopted (Directive (EU) 2015/2366) |
| 2017 | South Korea | Credit Information Act amendment process begins for MyData |
| 2018 | EU | PSD2 transposition deadline (13 January) |
| 2018 | Germany | ZAG amended to transpose PSD2 |
| 2019 | EU | PSD2 XS2A and SCA provisions take effect (14 September) |
| 2019 | South Korea | Financial Innovation Support Special Act enacted |
| 2020 | South Korea | Credit Information Act comprehensively amended for MyData |
| 2020 | EU | EDPB Guidelines on PSD2/GDPR interplay |
| 2020 | Germany | BGH screen scraping transition ruling |
| 2021 | South Korea | MyData system officially launched (1 December) |
| 2022 | US | CFPB advances Section 1033 rulemaking (SBREFA outline) |
| 2022 | Germany | BaFin orders N26 to improve API access |
| 2023 | EU | Commission proposes PSD3, PSR, and FIDA |
| 2023 | EU | EBA Opinion on PSD2 API performance deficiencies |
| 2023 | South Korea | MyData Phase 2 (securities and telecom data) launches |
| 2024 | US | CFPB finalizes Personal Financial Data Rights Rule (October) |
| 2025 | US | Banking industry legal challenges to Section 1033 rule |
| 2025 | South Korea | MyData reaches 30 million users; Phase 3 planning |
| 2026 | US | Largest data providers must comply with Section 1033 rule |
| 2026 | EU | PSD3/PSR expected adoption and transposition period begins |

## References

1. Directive (EU) 2015/2366 of the European Parliament and of the Council on payment services in the internal market (PSD2), OJ L 337, 23 December 2015.
2. European Commission, Proposal for a Regulation on payment services in the internal market (PSR), COM(2023) 367 final, 28 June 2023.
3. European Commission, Proposal for a Directive on payment services and electronic money services (PSD3), COM(2023) 366 final, 28 June 2023.
4. European Commission, Proposal for a Regulation on a framework for Financial Data Access (FIDA), COM(2023) 360 final, 28 June 2023.
5. United States, Dodd-Frank Wall Street Reform and Consumer Protection Act, Section 1033, 12 U.S.C. § 5533 (2010).
6. CFPB, "Personal Financial Data Rights; Final Rule," 89 Fed. Reg. [____], October 2024.
7. South Korea, Credit Information Use and Protection Act (신용정보의 이용 및 보호에 관한 법률), as amended 2020.
8. South Korea, Financial Innovation Support Special Act (금융혁신지원 특별법), 2019.
9. Zahlungsdiensteaufsichtsgesetz (ZAG), Federal Law Gazette I, 2017, as amended.
10. Commission Delegated Regulation (EU) 2018/389 supplementing PSD2 with regard to regulatory technical standards for strong customer authentication, OJ L 69, 13 March 2018.
11. EDPB, "Guidelines 06/2020 on the interplay of the Second Payment Services Directive and the GDPR," Version 2.0, 15 December 2020.
12. EBA, "Opinion on the Functioning of the PSD2 Access to Account Framework," EBA-Op-2023-01, 2023.
13. Regulation (EU) 2016/679 (General Data Protection Regulation), OJ L 119, 4 May 2016.
14. ECtHR, M.N. and Others v. San Marino, App. No. 28005/12, 7 July 2015.
15. BGH, Judgment of 18 March 2020, XI ZR 535/18, on PSD2 screen scraping transition.
16. Plaid, Inc., Class Action Settlement Agreement, No. 4:20-cv-03056 (N.D. Cal. 2022).
17. Financial Data Exchange (FDX), "FDX API Standard v6.0," 2024.
18. Korea Financial Telecommunications and Clearings Institute (KFTC), "MyData API Technical Specification," 2021, updated 2024.
19. Deutsche Bundesbank, "PSD2 Implementation Report," 2023.
20. Gramm-Leach-Bliley Act, 15 U.S.C. §§ 6801-6809.
