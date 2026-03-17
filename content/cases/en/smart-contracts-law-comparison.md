---
id: "smart-contracts-law-comparison"
name: "Smart Contracts Legal Enforceability: Cross-Jurisdictional Comparison"
date: "2026-03-16"
nationality: "Global"
occupation: ["Legal Analysis", "Comparative Law", "Contract Law"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Smart_contract"
lastUpdated: "2026-03-16"
---

## Summary

Smart contracts -- self-executing agreements encoded in software that automatically enforce obligations when predetermined conditions are met -- pose fundamental challenges to traditional contract law doctrines across all jurisdictions. The legal enforceability of smart contracts requires reconciling the deterministic, automated execution of code with established legal principles of offer and acceptance, consideration, capacity, consent, mistake, frustration, and judicial remedies including rescission and specific performance. The legal landscape varies significantly: the United States has been the most active in enacting smart contract-specific legislation at the state level, with Arizona (A.R.S. § 44-7061, 2017), Tennessee (Tenn. Code § 47-10-202, 2018), Wyoming (W.S. § 40-21-102, 2019), and other states explicitly recognizing smart contracts as legally enforceable agreements. The European Union has not enacted smart contract-specific legislation but addresses enforceability through the intersection of the Electronic Commerce Directive (2000/31/EC), the eIDAS Regulation on electronic signatures, and national contract law. South Korea has enacted provisions recognizing electronic smart contracts under the Framework Act on Electronic Documents and Transactions (전자문서 및 전자거래 기본법) while the courts develop case law on code-based agreements. Germany applies its comprehensive civil code (BGB) contract formation rules to smart contracts, with academic and judicial debate focused on whether autonomous code execution satisfies the requirement of a declaration of intent (Willenserklärung).

## Comparative Table

| Aspect | South Korea | United States | Germany | EU |
|--------|-------------|---------------|---------|-----|
| **Primary Legislation** | Framework Act on Electronic Documents and Transactions; Civil Act | State laws (AZ, TN, WY, others); UETA; E-SIGN Act | BGB (Civil Code); eIDAS; no smart contract-specific law | E-Commerce Directive; eIDAS; no EU-wide smart contract law |
| **Legal Recognition** | Electronic agreements recognized; smart contract-specific provisions emerging | Explicit recognition in 10+ states | No specific recognition; BGB principles applied | No specific recognition; member state contract law applies |
| **Electronic Signature** | Electronic Signature Act (전자서명법) | E-SIGN Act (15 U.S.C. §§ 7001-7006); UETA | eIDAS (directly applicable); SigG successor provisions | eIDAS Regulation (EU) No 910/2014 |
| **Code-as-Law Doctrine** | Not adopted; code supplements but does not replace law | Varies; some states recognize code as contractual terms | Rejected; code must conform to legal requirements | Not adopted at EU level |
| **Dispute Resolution** | Courts; KCAB arbitration; ODR mechanisms | Courts; arbitration; DAO-based dispute resolution | Courts; arbitration; potential for blockchain-based ADR | National courts; EU ODR platform; cross-border mechanisms |
| **Consumer Protection** | E-Commerce Consumer Protection Act applies | State UDAP statutes; FTC Act; UCC | BGB §§ 305-310 (unfair terms control); Consumer Rights Directive | Consumer Rights Directive 2011/83/EU; Unfair Contract Terms Directive 93/13/EEC |
| **Regulatory Authority** | Ministry of Science and ICT; FSC (for financial smart contracts) | State-level; no federal smart contract regulator | BaFin (financial); courts (civil enforceability) | National authorities; no EU-wide smart contract authority |

## South Korea

### Legal Framework

South Korea's approach to smart contract enforceability builds upon its advanced electronic commerce infrastructure:

- **Framework Act on Electronic Documents and Transactions (전자문서 및 전자거래 기본법):**
  - **Article 2(1) -- Electronic Documents:** Defines electronic documents broadly as information created, sent, received, or stored electronically, encompassing smart contract code.
  - **Article 4 -- Legal Effect of Electronic Documents:** Establishes that the legal effect of a document shall not be denied solely because it is in electronic form, providing the foundational principle for smart contract enforceability.
  - **Article 5-2 -- Automated Transactions (자동화된 거래):** Recognizes the legal validity of transactions formed through automated electronic systems, including transactions where no human being reviewed each individual transaction step. This provision directly addresses the automated execution characteristic of smart contracts.
  - **Article 11 -- Formation of Electronic Contracts:** Provides that an electronic contract is formed when an acceptance of an offer reaches the offeror's information processing system, applying traditional offer-acceptance doctrine to electronic contexts.
- **Civil Act (민법):** South Korea's general contract law under the Civil Act applies to smart contracts:
  - **Article 105 -- Juristic Acts:** Provides that a juristic act that violates mandatory or prohibitory laws is void, establishing that smart contract provisions contravening Korean law are unenforceable regardless of automatic execution.
  - **Article 107-110 -- Defects in Declaration of Intent:** Provisions on mistake (착오, Article 109), fraud (사기, Article 110), and duress (강박, Article 110) apply to smart contracts, enabling courts to void automatically executed smart contracts where consent was vitiated.
  - **Article 543-546 -- Termination and Rescission:** The right to terminate or rescind a contract applies to smart contracts, raising the practical challenge of "unwinding" automatically executed transactions.
- **Electronic Signature Act (전자서명법, as amended 2020):** Provides that electronic signatures are not denied legal effect solely because they are in electronic form. Cryptographic signatures used in blockchain-based smart contracts (such as Ethereum's ECDSA signatures) satisfy the Act's requirements for electronic signatures, provided they can be attributed to a specific signatory.
- **Act on the Consumer Protection in Electronic Commerce (전자상거래법):** Applies consumer protection obligations to smart contract-based commerce, including:
  - **Article 6 -- Information Disclosure:** Requires disclosure of contract terms before conclusion, applicable to smart contract interfaces.
  - **Article 17 -- Cooling-Off Period:** Provides a 7-day withdrawal right for consumer purchases, which applies to smart contract-based sales unless exempted (e.g., digital content where performance has begun with consumer consent).

### Key Principles

Korean legal doctrine recognizes a fundamental distinction between the "legal layer" and the "execution layer" of smart contracts. The Korean Bar Association's 2023 guidance on smart contract practice advises that:

1. The legal validity of a smart contract depends on compliance with Civil Act requirements for contract formation, not on the technical execution of code.
2. Code errors (bugs) may constitute mistake (착오) under Civil Act Article 109, potentially rendering the contract voidable.
3. The immutability of blockchain-based smart contracts does not prevent judicial remedies; courts may order parties to deploy corrective transactions or award damages.
4. Smart contracts involving consumers must comply with the E-Commerce Consumer Protection Act's mandatory protections, regardless of automated execution.

The Financial Services Commission has published guidelines on smart contracts in the financial services sector, requiring that financial smart contracts (including DeFi protocols offered to Korean users) include mechanisms for: administrative intervention (kill switches), regulatory compliance monitoring, and consumer dispute resolution.

### Notable Cases

- **Seoul Central District Court -- Smart Contract Dispute (2023):** In a dispute involving a DeFi lending protocol, the court held that the automatic liquidation of a borrower's collateral by a smart contract did not preclude the borrower's claim for unconscionability (폭리행위) under Civil Act Article 104, finding that the liquidation terms, while technically executed as coded, were substantively unfair given the extreme market conditions. The court ordered compensatory damages.
- **Korean Commercial Arbitration Board (KCAB) -- DAO Governance Dispute (2024):** The KCAB accepted jurisdiction over a dispute arising from a DAO (Decentralized Autonomous Organization) governance vote, ruling that the DAO's smart contract-encoded bylaws constituted an arbitration agreement under the Arbitration Act (중재법) and that the resulting governance decision was subject to arbitral review for compliance with Korean mandatory law.
- **Patent Court -- Smart Contract Patent Validity (2023):** The Patent Court upheld the validity of a patent covering a smart contract-based insurance claims processing system, recognizing that novel smart contract implementations could constitute patentable inventions under the Patent Act (특허법).

## United States

### Federal Framework

The United States has addressed smart contract enforceability primarily at the state level, with federal law providing foundational electronic commerce principles:

- **Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. §§ 7001-7006, 2000):** Section 101 provides that a signature, contract, or record shall not be denied legal effect solely because it is in electronic form. This provision is widely understood to encompass smart contracts, as it applies to any "electronic record" (defined as a contract or other record created, generated, sent, communicated, received, or stored by electronic means). The E-SIGN Act does not preempt state laws that grant greater legal recognition to electronic records.
- **Uniform Electronic Transactions Act (UETA, 1999):** Adopted by 47 states, the District of Columbia, and the U.S. Virgin Islands, UETA Section 7 provides that a record or signature may not be denied legal effect solely because it is in electronic form. UETA Section 14 specifically addresses automated transactions: "In an automated transaction, the following rules apply: (1) A contract may be formed by the interaction of electronic agents of the parties, even if no individual was aware of or reviewed the electronic agents' actions or the resulting terms and agreements."
- **Uniform Commercial Code (UCC) Article 2 -- Sale of Goods:** Where smart contracts govern the sale of goods, UCC Article 2 applies. The 2022 amendments to UCC Articles 9 and 12 specifically address "controllable electronic records" (CERs), providing a legal framework for digital assets transferred through smart contracts, including establishing rules for perfection of security interests in CERs.

### State Variations

State legislatures have been actively legislating smart contract recognition:

- **Arizona (A.R.S. § 44-7061, 2017):** The first U.S. state to explicitly recognize smart contracts, providing: "A signature that is secured through blockchain technology is considered to be in an electronic form and to be an electronic signature" and "A record or contract that is secured through blockchain technology is considered to be in an electronic form and to be an electronic record." Additionally, "Smart contracts may exist in commerce."
- **Tennessee (Tenn. Code § 47-10-202, 2018):** Recognizes that smart contracts "may not be denied legal effect, validity, or enforceability solely because the contract contains a smart contract term" and defines smart contract as "an event-driven program that runs on a distributed, decentralized, shared, and replicated ledger."
- **Wyoming (W.S. § 40-21-102, 2019):** Provides the most comprehensive state framework: "A smart contract has the same legal force and effect as a contract meeting the requirements of applicable law" and defines smart contract as "an automated transaction, or any substantially similar analogue, which is comprised of code, script, or programming language that executes the terms of an agreement." Wyoming also enacted the DAO LLC statute (W.S. § 17-31-101, 2021), recognizing DAOs as a form of limited liability company whose governance may be partially or fully algorithmic.
- **Nevada (NRS § 719.090, 2017):** Prohibits local governments from imposing taxes or restrictions on the use of blockchain technology and recognizes the validity of blockchain-based smart contracts.
- **Illinois Blockchain Technology Act (2020):** Provides that smart contracts, records, and signatures secured through blockchain technology may not be denied legal effect, and establishes that a smart contract term may not be deemed unenforceable solely because it is executed automatically upon the occurrence of specified conditions.

### Notable Cases

- **B2C2 Ltd v. Quoine Pte Ltd (Singapore International Commercial Court, 2019; Singapore Court of Appeal, 2020):** While a Singapore case, it has been widely cited in U.S. smart contract jurisprudence. The court held that an algorithmic trading system's execution of trades at aberrant prices could be set aside for unilateral mistake, establishing that the doctrine of mistake applies to algorithmically executed transactions even in the absence of human intervention.
- **Sarcuni v. bZx DAO (S.D. Cal. 2023):** The court held that members of a DeFi protocol's DAO could be held jointly and severally liable as a general partnership for losses caused by the protocol's smart contract vulnerability, rejecting the argument that DAO governance through smart contracts precluded partnership liability.
- **CFTC v. Ooki DAO (N.D. Cal. 2022):** The CFTC obtained a default judgment against the Ooki DAO for operating an illegal trading platform through smart contracts, establishing that regulatory obligations apply to DeFi protocols regardless of their decentralized governance structure.
- **Commodity Futures Trading Commission v. Eisenberg (S.D.N.Y. 2023):** The CFTC charged Avraham Eisenberg with market manipulation through the exploitation of a DeFi smart contract (Mango Markets), establishing that manipulating price oracle inputs to trigger advantageous smart contract executions constitutes market manipulation under the Commodity Exchange Act.

## Germany

### Legal Framework

German contract law, rooted in the comprehensive Civil Code (Bürgerliches Gesetzbuch, BGB), provides a sophisticated analytical framework for smart contract enforceability:

- **BGB § 145-157 -- Formation of Contract:**
  - **§ 145 -- Binding Offer:** An offer is binding upon the offeror. In the smart contract context, deployment of a smart contract with specified terms may constitute a binding offer to all potential counterparties (similar to an invitatio ad offerendum or, in some cases, an offer ad incertas personas).
  - **§ 147 -- Acceptance:** Acceptance can be expressed through conduct (konkludentes Handeln), including the act of sending a transaction to a smart contract address, which constitutes acceptance through performance.
  - **§ 151 -- Acceptance Without Declaration:** German law permits contract formation without express declaration of acceptance where such declaration is not expected according to customary practice. This provision facilitates the formation of smart contracts through automated interaction.
- **BGB § 116-124 -- Defects of Intent (Willensmängel):**
  - **§ 119 -- Mistake (Irrtum):** A declaration of intent may be avoided if the declarant was mistaken about its content (Inhaltsirrtum) or about a material characteristic of the subject matter (Eigenschaftsirrtum). A coding error in a smart contract that causes the code to execute differently than the deployer intended may constitute an Inhaltsirrtum, rendering the resulting transactions voidable.
  - **§ 120 -- Mistake in Transmission:** Where a smart contract malfunctions due to a technical error in the transmission or execution infrastructure (rather than in the contract code itself), the resulting transaction may be avoidable under § 120 as a mistake in the means of transmission.
  - **§ 123 -- Fraud and Duress:** Applicable to smart contracts procured through deceptive coding practices, social engineering, or economic coercion.
  - **§ 142 -- Effect of Avoidance:** Avoidance under §§ 119-123 has retroactive effect (ex tunc), meaning the smart contract is treated as void from the beginning. In blockchain contexts, this creates practical challenges as on-chain transactions cannot be technically reversed, requiring off-chain settlement or compensatory remedies.
- **BGB §§ 305-310 -- General Terms and Conditions (Allgemeine Geschäftsbedingungen, AGB):**
  - **§ 305(1) -- Definition:** Smart contract terms presented to users on a take-it-or-leave-it basis (which is the norm for most DeFi protocols) constitute AGB subject to the BGB's fairness controls.
  - **§ 305c(1) -- Surprising Clauses:** Provisions in AGB that are so unusual that the counterparty need not expect them are deemed not part of the contract. Smart contract terms that produce unexpected results (e.g., automatic liquidation under unusual conditions) may be invalidated under this provision.
  - **§ 307 -- Unfair Terms Test:** AGB provisions that unreasonably disadvantage the counterparty are void. German courts apply this standard to assess whether smart contract terms (e.g., automatic penalty mechanisms, irrevocable fund lockups, asymmetric governance rights) are substantively fair.
- **Electronic Commerce and Digital Contracts:**
  - **eIDAS (directly applicable):** Qualified electronic signatures under eIDAS have the equivalent legal effect of handwritten signatures. Cryptographic signatures used in smart contracts may qualify as advanced or qualified electronic signatures depending on the identity assurance and key management practices.
  - **BGB § 126a -- Electronic Form:** Where a statute requires written form (Schriftform), it may be satisfied by an electronic document bearing a qualified electronic signature. Smart contracts requiring written form must incorporate qualified electronic signatures.

### Key Principles

German legal scholarship has produced extensive analysis of smart contract enforceability:

1. **Willenserklärung (Declaration of Intent) Doctrine:** The central question in German smart contract law is whether automated code execution constitutes a valid declaration of intent. The prevailing academic view (supported by scholars including Möslein, Paulus, and Kaulartz) holds that the deployment of a smart contract constitutes a declaration of intent by the deployer, and interaction with the smart contract constitutes a declaration of intent by the counterparty. The automated execution is treated as a pre-programmed fulfillment mechanism, not a separate declaration of intent.

2. **Computererklärung (Computer Declaration) Theory:** German law recognizes the concept of Computererklärungen -- declarations of intent generated by computer systems on behalf of their operators. Smart contract executions are analyzed under this framework: the code acts as an "electronic agent" (comparable to UETA Section 14 in U.S. law), and the resulting transactions are attributed to the human operators who deployed or interacted with the smart contract.

3. **Formality Requirements:** German law imposes form requirements for certain transactions (e.g., § 311b BGB requiring notarization for real estate transfers; § 766 BGB requiring written form for guarantees). Smart contracts executing such transactions must incorporate the required formalities, and failure to do so renders the transaction void under § 125 BGB (consequences of non-compliance with prescribed form).

### Notable Cases

- **Landgericht (LG) München I -- DeFi Lending Dispute (2024):** The Munich Regional Court addressed a dispute arising from a DeFi lending protocol, holding that the smart contract terms constituted AGB under BGB § 305 and that the automatic liquidation clause was not surprising (§ 305c) because the user interface adequately disclosed the liquidation mechanism. However, the court found that the protocol's governance token holders could bear liability for losses caused by a governance vote that modified the smart contract parameters in a manner disadvantageous to existing borrowers.
- **Oberlandesgericht (OLG) Frankfurt -- Blockchain Token Sale Rescission (2023):** The Frankfurt Higher Regional Court ruled that a purchaser of blockchain tokens sold through a smart contract could rescind the transaction under BGB § 123 (fraud) where the token sale's marketing materials contained material misrepresentations about the project's development status, notwithstanding the automatic and irreversible execution of the smart contract.
- **Kammergericht (KG) Berlin -- DAO Governance as Partnership (2024):** The Berlin Court of Appeal held that a DAO with German-resident participants constituted a civil-law partnership (Gesellschaft bürgerlichen Rechts, GbR) under BGB § 705, with partners jointly and severally liable for DAO obligations. The court rejected the argument that smart contract-based governance precluded partnership classification.
- **BaFin Guidance on DeFi Protocols (2024):** BaFin published administrative guidance classifying certain DeFi smart contracts as financial services subject to licensing requirements under the KWG, focusing on lending protocols (potentially constituting banking business, § 1(1) No. 2 KWG) and decentralized exchanges (potentially constituting financial services, § 1(1a) KWG).

## ECHR / EU Framework

### Convention Articles

The European Convention on Human Rights provides foundational principles applicable to smart contract regulation:

- **Article 6 -- Right to a Fair Trial:** The automated, potentially irreversible execution of smart contracts raises Article 6 concerns regarding access to effective judicial review. Where smart contract execution produces legally binding effects on parties' rights and obligations, those parties must retain access to a court of competent jurisdiction capable of providing effective remedies, including the power to order restitution, damages, or injunctive relief irrespective of technical immutability.
- **Article 1 of Protocol No. 1 -- Protection of Property:** Digital assets held in smart contracts constitute "possessions" within the meaning of Protocol 1. The automatic execution of smart contract penalty clauses, liquidation mechanisms, or governance decisions affecting users' assets must comply with Protocol 1 requirements of lawfulness, legitimate aim, and proportionality.
- **Article 8 -- Right to Respect for Private and Family Life:** Smart contracts operating on public blockchains create permanent, publicly visible records of transactions. The privacy implications of this transparency implicate Article 8, particularly where smart contract transactions reveal sensitive information about parties' financial activities, associations, or personal choices.
- **Article 13 -- Right to an Effective Remedy:** States have a positive obligation to ensure that individuals have access to effective remedies against violations of Convention rights, including violations occurring through smart contract execution. This requires that legal systems provide mechanisms for challenging and remedying the effects of smart contract disputes.

### EU Legislative Framework

- **Electronic Commerce Directive (2000/31/EC):** Article 9 requires member states to ensure that their legal systems allow contracts to be concluded by electronic means and that the legal requirements applicable to the contractual process do not create obstacles for the use of electronic contracts. This provision supports the general enforceability of smart contracts across the EU, though its application to fully autonomous smart contracts (without human review of individual transactions) remains debated.
- **eIDAS Regulation (Regulation (EU) No 910/2014):** Establishes the legal framework for electronic signatures and electronic seals applicable to smart contract authentication:
  - **Article 25(1):** An electronic signature shall not be denied legal effect and admissibility as evidence in legal proceedings solely on the grounds that it is in electronic form.
  - **Article 25(2):** A qualified electronic signature has the equivalent legal effect of a handwritten signature.
  - **Article 35:** Electronic seals (used by legal persons) enjoy a presumption of integrity and correctness of origin when qualified.
- **Consumer Rights Directive (2011/83/EU):** Applies to smart contract-based consumer transactions:
  - **Article 6 -- Information Requirements:** Pre-contractual information must be provided before the consumer is bound by the contract. Smart contract interfaces must present required disclosures (price, main characteristics, trader identity, withdrawal rights) before the consumer initiates the transaction.
  - **Article 9 -- Right of Withdrawal:** Consumers have a 14-day right to withdraw from distance contracts. The automatic execution of smart contracts does not extinguish this right, though Article 16(m) provides an exception for digital content where performance has begun with the consumer's express consent.
- **Unfair Contract Terms Directive (93/13/EEC):** Article 3 provides that a contractual term not individually negotiated is unfair if, contrary to the requirement of good faith, it causes a significant imbalance in the parties' rights and obligations to the detriment of the consumer. Smart contract terms deployed on a take-it-or-leave-it basis are subject to this unfairness assessment under national implementing legislation.
- **Proposed Data Act (Regulation (EU) 2023/2854) -- Smart Contract Provisions:** The Data Act includes the first EU-level provisions specifically addressing smart contracts:
  - **Article 36 -- Essential Requirements for Smart Contracts:** Requires that smart contracts used for data sharing comply with essential requirements including: robustness (ability to function correctly despite errors or manipulation), safe termination and interruption (including kill switches or pause mechanisms), data archiving and continuity, and access control.
  - **Article 37 -- Conformity Assessment:** Smart contracts used for executing data sharing agreements must undergo conformity assessment to verify compliance with Article 36 requirements.
  - The Data Act's smart contract provisions represent a significant development, as they establish the first binding EU-level technical and governance requirements for smart contracts.

### Key Case Law and Decisions

- **CJEU, Joined Cases C-274/99 and C-96/00, Connolly v. Commission (2001):** While not a smart contract case, the CJEU's principles on the interpretation of electronic communications are relevant to smart contract construction, establishing that the communicative intent of parties must be considered alongside the literal text (or code) of electronic communications.
- **European Law Institute (ELI) Principles on Smart Contracts (2023):** While not binding, the ELI's model rules provide influential guidance on the interaction between smart contracts and European private law, addressing: formation of contract through code interaction, interpretation of smart contract terms, remedies for coding errors, and the applicability of consumer protection rules.
- **European Commission Expert Group on Regulatory Obstacles to Financial Innovation (ROFIEG, 2019):** Recommended that EU law should be clarified to ensure that smart contracts can satisfy legal requirements for contracts in regulated financial services, including requirements for record-keeping, disclosure, and investor protection.

## Comparative Analysis

| Dimension | South Korea | United States | Germany / EU | ECHR Framework |
|-----------|-------------|---------------|--------------|----------------|
| **Legislative Approach** | Electronic transaction framework; automated transaction recognition | State-specific smart contract statutes; E-SIGN/UETA foundation | BGB principles applied; Data Act first EU smart contract rules | Access to justice and property protection requirements |
| **Code-as-Law** | Rejected; law prevails over code | Partially accepted in some states; code as contractual terms | Rejected; Willenserklärung doctrine prevails | State obligation to ensure effective legal remedies |
| **Mistake Doctrine** | Civil Act Article 109; coding errors as mistake | UCC/Restatement; B2C2 influence | BGB § 119 Inhaltsirrtum; § 120 transmission error | Fair trial (Article 6) for dispute resolution |
| **Consumer Protection** | E-Commerce Consumer Protection Act; 7-day cooling off | State UDAP; UCC; no federal smart contract consumer law | BGB AGB control; Consumer Rights Directive | Proportionality; Article 1 Protocol 1 |
| **DAO Liability** | Emerging; KCAB arbitration precedent | Partnership liability (Sarcuni); Wyoming DAO LLC statute | GbR classification (KG Berlin) | N/A |
| **Financial Regulation** | FSC guidelines; licensing for financial smart contracts | CFTC enforcement; state money transmitter laws | BaFin DeFi guidance; KWG licensing analysis | N/A |

## Timeline

| Year | Jurisdiction | Milestone |
|------|-------------|-----------|
| 1994 | Global | Nick Szabo coins the term "smart contract" |
| 2000 | US | E-SIGN Act enacted (15 U.S.C. §§ 7001-7006) |
| 2000 | EU | Electronic Commerce Directive (2000/31/EC) adopted |
| 2014 | EU | eIDAS Regulation adopted |
| 2015 | Global | Ethereum launches, enabling programmable smart contracts |
| 2016 | Global | The DAO hack: USD 60 million exploited through smart contract vulnerability |
| 2017 | US (Arizona) | First U.S. state to recognize smart contracts (A.R.S. § 44-7061) |
| 2018 | US (Tennessee) | Smart contract recognition statute (Tenn. Code § 47-10-202) |
| 2019 | US (Wyoming) | Comprehensive smart contract and DAO legislation |
| 2019 | Singapore | B2C2 v. Quoine: algorithmic trading mistake doctrine applied |
| 2020 | South Korea | Electronic Signature Act amended; diverse signing methods recognized |
| 2020 | US (Illinois) | Blockchain Technology Act recognizing smart contracts |
| 2021 | US (Wyoming) | DAO LLC statute enacted (W.S. § 17-31-101) |
| 2022 | US | CFTC v. Ooki DAO: regulatory enforcement against DeFi smart contracts |
| 2022 | US | UCC amendments addressing controllable electronic records |
| 2023 | EU | Data Act adopted with smart contract provisions (Articles 36-37) |
| 2023 | EU | ELI Principles on Smart Contracts published |
| 2023 | US | Sarcuni v. bZx DAO: DAO partnership liability |
| 2023 | Germany | OLG Frankfurt: token sale rescission for fraud |
| 2024 | South Korea | KCAB accepts jurisdiction over DAO governance dispute |
| 2024 | Germany | LG München I: DeFi lending AGB analysis |
| 2024 | Germany | KG Berlin: DAO as civil-law partnership |
| 2024 | Germany | BaFin DeFi protocol classification guidance |
| 2026 | EU | Data Act smart contract requirements fully applicable |

## References

1. United States, Electronic Signatures in Global and National Commerce Act (E-SIGN), 15 U.S.C. §§ 7001-7006 (2000).
2. Uniform Law Commission, Uniform Electronic Transactions Act (UETA), 1999.
3. Arizona Revised Statutes § 44-7061, "Electronic transactions; blockchain technology" (2017).
4. Tennessee Code § 47-10-202, "Distributed ledger technology" (2018).
5. Wyoming Statutes § 40-21-102, "Digital assets-existing law" (2019).
6. Wyoming Statutes § 17-31-101 et seq., "Decentralized Autonomous Organizations" (2021).
7. South Korea, Framework Act on Electronic Documents and Transactions (전자문서 및 전자거래 기본법).
8. South Korea, Civil Act (민법), Articles 105-110, 145-157, 543-546.
9. Bürgerliches Gesetzbuch (BGB), §§ 116-124, 145-157, 305-310.
10. Directive 2000/31/EC (Electronic Commerce Directive), OJ L 178, 17 July 2000.
11. Regulation (EU) No 910/2014 (eIDAS), OJ L 257, 28 August 2014.
12. Regulation (EU) 2023/2854 (Data Act), Articles 36-37, OJ L, 22 December 2023.
13. Directive 2011/83/EU (Consumer Rights Directive), OJ L 304, 22 November 2011.
14. Directive 93/13/EEC (Unfair Contract Terms Directive), OJ L 95, 21 April 1993.
15. B2C2 Ltd v. Quoine Pte Ltd, [2020] SGCA(I) 02.
16. Sarcuni v. bZx DAO, No. 22-cv-618 (S.D. Cal. 2023).
17. CFTC v. Ooki DAO, No. 22-cv-5416 (N.D. Cal. 2022).
18. CFTC v. Eisenberg, No. 23-cr-00098 (S.D.N.Y. 2023).
19. European Law Institute, "ELI Principles on Smart Contracts," 2023.
20. Möslein, Florian, "Smart Contracts and the German Civil Code," in Cappiello and Carullo (eds.), Blockchain, Law and Governance, Springer, 2021.
