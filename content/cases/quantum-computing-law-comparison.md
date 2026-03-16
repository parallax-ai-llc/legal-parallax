---
id: "quantum-computing-law-comparison"
name: "Quantum Computing Regulation: Cross-Jurisdictional Comparison"
date: "2026-03-16"
nationality: "Global"
occupation: ["Legal Analysis", "Comparative Law", "Technology Regulation"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Quantum_computing"
lastUpdated: "2026-03-16"
---

## Summary

Quantum computing regulation represents one of the most strategically sensitive and rapidly developing areas of technology law, intersecting national security, cryptography policy, export controls, and industrial policy across jurisdictions. As quantum computers approach the capability to break widely used public-key cryptographic systems (RSA, ECC, Diffie-Hellman), governments have responded with divergent regulatory approaches reflecting distinct strategic priorities. The United States has been the most aggressive in establishing post-quantum cryptography (PQC) mandates through the Quantum Computing Cybersecurity Preparedness Act (Pub. L. 117-349, 2022) and NIST's finalization of post-quantum cryptographic standards (FIPS 203, 204, 205) in August 2024, while simultaneously tightening export controls on quantum technologies through the Bureau of Industry and Security (BIS). The European Union has pursued a coordinated approach through the European Quantum Communication Infrastructure (EuroQCI) initiative and the Quantum Technologies Flagship programme, with EUR 1 billion in funding. South Korea has invested heavily in quantum technology development through its National Quantum Strategy (2023) while maintaining relatively liberal regulatory controls. Germany, as both an EU member state and a leading quantum research nation, operates within the EU framework while pursuing national quantum computing initiatives through the Federal Ministry of Education and Research (BMBF).

## Comparative Table

| Aspect | South Korea | United States | Germany | EU |
|--------|-------------|---------------|---------|-----|
| **Primary Legislation** | Quantum Technology Development and Industry Promotion Act (양자기술 육성법, 2024) | Quantum Computing Cybersecurity Preparedness Act (Pub. L. 117-349); National Quantum Initiative Act (Pub. L. 115-368) | EU frameworks; BMBF Quantum Action Plan | EU Quantum Flagship; European Chips Act (quantum components) |
| **Post-Quantum Cryptography Mandate** | KISA guidelines; transition roadmap by 2030 | Mandatory for federal systems by 2035 (OMB M-23-02); NIST FIPS 203/204/205 | BSI Technical Guideline TR-02102; EU mandate pending | ENISA PQC recommendations; NIS2 implications |
| **Export Controls** | Strategic Technology Protection Act (전략기술 보호법) | EAR Category 5; Entity List restrictions; October 2022 semiconductor controls | EU Dual-Use Regulation (EU) 2021/821; Wassenaar Arrangement | Dual-Use Regulation; coordinated with Wassenaar |
| **National Investment** | KRW 3 trillion (~USD 2.2 billion) through 2035 | USD 1.8 billion (CHIPS and Science Act quantum provisions) | EUR 3 billion (federal and Lander combined) | EUR 1 billion (Quantum Flagship) |
| **Regulatory Authority** | Ministry of Science and ICT (MSIT); NIS for security | NIST; NSA; BIS; OSTP | BSI; BNetzA; BMBF | European Commission; ENISA |
| **Cryptographic Transition Timeline** | 2030 (recommended) | 2035 (mandatory for federal); private sector voluntary | BSI recommends by 2030 | No binding EU-wide deadline |

## South Korea

### Legal Framework

South Korea enacted the Quantum Technology Development and Industry Promotion Act (양자기술 육성 및 산업 진흥에 관한 법률) in 2024, establishing a comprehensive framework for quantum technology governance. The Act was driven by South Korea's strategic ambition to become a top-three global quantum computing power by 2035.

Key statutory provisions include:

- **Article 3 -- Basic Plan for Quantum Technology:** Requires the Minister of Science and ICT to establish a five-year National Quantum Technology Development Basic Plan, covering R&D investment priorities, human resource development, international cooperation, and regulatory frameworks.
- **Article 7 -- Quantum Technology Specialized Zones:** Authorizes the designation of quantum technology specialized zones with tax incentives, streamlined permitting, and dedicated research infrastructure.
- **Article 12 -- Security Standards:** Directs the National Intelligence Service (NIS) and Korea Internet & Security Agency (KISA) to develop and enforce quantum-safe cryptographic standards for critical information infrastructure.
- **Article 15 -- Strategic Technology Protection:** Classifies core quantum technologies (quantum processors above 100 qubits, quantum key distribution systems, quantum sensing devices) as strategic technologies subject to export controls under the Strategic Technology Protection Act.
- **Article 18 -- International Cooperation:** Mandates the government to pursue bilateral and multilateral cooperation on quantum technology standards, with explicit references to coordination with the Wassenaar Arrangement and bilateral agreements with the United States and Japan.

### Key Principles

South Korea's quantum regulatory approach is characterized by a strong industrial policy orientation, prioritizing technology development and commercialization alongside security considerations. The government's National Quantum Strategy (국가 양자 과학기술 전략), announced in April 2023, committed KRW 3 trillion through 2035 to quantum computing, quantum communication, and quantum sensing research. The strategy aims to develop a 1,000+ logical qubit quantum computer by 2035 and deploy a nationwide quantum-safe communication network.

The Korea Internet & Security Agency (KISA) published Post-Quantum Cryptography Migration Guidelines in 2024, recommending that critical infrastructure operators begin transitioning to quantum-resistant algorithms by 2028, with full migration by 2030. These guidelines align with NIST FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA) standards but are currently advisory rather than mandatory.

### Notable Cases

- **Samsung Electronics Quantum Chip Export Investigation (2024):** The Ministry of Trade, Industry and Energy investigated Samsung's export of quantum-capable semiconductor components to a Chinese research consortium, resulting in enhanced end-use monitoring requirements under the Strategic Technology Protection Act.
- **KISA Quantum-Safe Banking Directive (2025):** KISA and the Financial Services Commission jointly issued directives requiring Tier 1 financial institutions to complete quantum risk assessments and present PQC migration plans by December 2026, following vulnerability assessments revealing that 78% of Korean banking cryptographic systems were quantum-vulnerable.
- **SK Telecom Quantum Key Distribution Network Deployment (2023-2025):** SK Telecom's deployment of a commercial QKD network across metropolitan Seoul raised regulatory questions about spectrum allocation and interoperability standards, prompting the Korea Communications Commission to develop quantum communication spectrum guidelines.

## United States

### Federal Framework

The United States has established the most comprehensive federal framework for quantum computing governance, driven primarily by national security concerns about the cryptographic implications of quantum computing (commonly referred to as "Q-Day" or "Y2Q").

Key federal legislation and directives include:

- **National Quantum Initiative Act (Pub. L. 115-368, 2018):** Established the National Quantum Coordination Office within the White House Office of Science and Technology Policy, authorized the creation of National Quantum Information Science Research Centers, and directed NIST, NSF, and DOE to develop coordinated quantum research programs with initial authorization of USD 1.2 billion over five years.
- **Quantum Computing Cybersecurity Preparedness Act (Pub. L. 117-349, December 2022):** Directed the Office of Management and Budget (OMB) to prioritize the migration of federal information systems to post-quantum cryptography, requiring agencies to inventory cryptographic systems and develop migration plans.
- **OMB Memorandum M-23-02 (November 2022):** Required federal agencies to submit inventories of cryptographic systems vulnerable to quantum attacks and to prioritize the transition of the most sensitive systems to quantum-resistant cryptography.
- **National Security Memorandum NSM-10 (May 2022):** Directed federal agencies to mitigate risks from quantum computing to U.S. national security, establishing a timeline for cryptographic migration and designating NSA as the lead for national security systems.
- **NIST Post-Quantum Cryptography Standards (August 2024):** NIST finalized three post-quantum cryptographic standards: FIPS 203 (ML-KEM, based on CRYSTALS-Kyber), FIPS 204 (ML-DSA, based on CRYSTALS-Dilithium), and FIPS 205 (SLH-DSA, based on SPHINCS+). A fourth standard, based on FALCON, is expected in 2025.
- **CHIPS and Science Act (Pub. L. 117-167, 2022):** Authorized significant funding for quantum information science research, including provisions for quantum computing workforce development and the National Quantum Initiative Advisory Committee.

### Export Controls

The Bureau of Industry and Security (BIS) has progressively tightened export controls on quantum technologies:

- **Export Administration Regulations (EAR) Category 5, Part 2:** Controls quantum cryptographic equipment and technology, including quantum key distribution systems and quantum random number generators.
- **October 2022 Semiconductor Export Controls:** BIS imposed sweeping restrictions on semiconductor exports to China, including controls on advanced computing chips and semiconductor manufacturing equipment that directly affect quantum computing capabilities.
- **Entity List Designations:** BIS has placed multiple Chinese quantum computing entities on the Entity List, including QuantumCTek, Origin Quantum, and subsidiaries of the Chinese Academy of Sciences involved in quantum research, effectively prohibiting U.S. persons from supplying these entities without a license.
- **January 2025 Framework for AI Diffusion Rule (interim final rule):** While primarily addressing AI chips, the rule's controls on advanced computing have implications for quantum-classical hybrid computing systems.

### Notable Cases

- **United States v. Jin (2023):** The Department of Justice prosecuted a former Google engineer for allegedly stealing quantum computing trade secrets related to superconducting qubit architecture and quantum algorithms, charging violations of the Economic Espionage Act (18 U.S.C. § 1831) and the Defend Trade Secrets Act (18 U.S.C. § 1836).
- **CISA Quantum Readiness Advisory (2024):** The Cybersecurity and Infrastructure Security Agency issued binding operational directives requiring federal civilian agencies to complete cryptographic inventories and identify systems most vulnerable to "harvest now, decrypt later" attacks.
- **NSA CNSA 2.0 Suite (2022):** NSA published the Commercial National Security Algorithm Suite 2.0, establishing the timeline for national security systems to transition to quantum-resistant algorithms, with mandatory adoption of ML-KEM and ML-DSA by 2030 for software and by 2033 for firmware and hardware.

## Germany

### Legal Framework

Germany operates within the EU regulatory framework for quantum technologies while pursuing an ambitious national quantum strategy. The German government's approach is shaped by its dual identity as a leading quantum research nation (home to institutions such as the Max Planck Institute for Quantum Optics, the Fraunhofer Institute for Applied Solid State Physics, and the Forschungszentrum Jülich) and a key participant in EU-wide quantum initiatives.

Key legal and policy instruments include:

- **Federal Government's Quantum Action Plan (Handlungskonzept Quantentechnologien, 2024):** Committed EUR 3 billion in combined federal and Länder funding for quantum research, infrastructure, and commercialization through 2030, including the development of a German quantum computer at the Jülich Supercomputing Centre.
- **BSI Technical Guideline TR-02102 (updated 2025):** The Federal Office for Information Security (BSI) updated its cryptographic recommendations to include post-quantum algorithms, recommending that critical infrastructure operators begin hybrid cryptographic deployments (combining classical and post-quantum algorithms) immediately.
- **EU Dual-Use Regulation (EU) 2021/821:** Directly applicable in Germany, establishing export controls on quantum computing components, quantum sensing equipment, and quantum communication systems. Germany's Federal Office for Economic Affairs and Export Control (BAFA) administers export licensing for quantum technologies.
- **IT Security Act 2.0 (IT-Sicherheitsgesetz 2.0, 2021):** Expanded the BSI's authority over critical infrastructure cybersecurity, with implications for quantum-safe transitions in energy, telecommunications, healthcare, and financial services sectors.
- **Basic Law (Grundgesetz) Article 73(1) No. 1:** Federal legislative competence over defense and security matters provides the constitutional basis for quantum technology export controls and national security classifications.

### Key Principles

Germany's BSI has been among the most proactive national cybersecurity agencies in addressing post-quantum cryptographic transition. The BSI's position paper on quantum-safe cryptography (2024) recommended a "crypto-agility" approach, urging organizations to design systems that can rapidly switch between cryptographic algorithms as standards evolve. The BSI has been notably more cautious than NIST in endorsing specific PQC algorithms, maintaining its preference for lattice-based and hash-based schemes while expressing reservations about the long-term security assumptions underlying some NIST selections.

Germany's Quantum Computing Initiative (funded at EUR 2.1 billion under the COVID-19 economic recovery programme) aims to build a competitive quantum computing ecosystem, with the Jülich Supercomputing Centre operating IBM and IQM quantum systems accessible to German and European researchers. The initiative also funds the development of a photonic quantum computer at the German Aerospace Center (DLR).

### Notable Cases

- **BSI Critical Infrastructure Quantum Risk Assessment (2025):** The BSI completed a comprehensive assessment of quantum vulnerability across German critical infrastructure sectors, finding that 65% of energy grid communication systems and 72% of telecommunications backbone encryption relied on quantum-vulnerable algorithms, prompting mandatory migration timelines under BSI-KritisV.
- **BAFA Quantum Export Denial (2024):** BAFA denied export licenses for quantum computing components destined for entities associated with China's national quantum research programme, applying catch-all controls under EU Dual-Use Regulation Article 4 based on concerns about military end-use.
- **Fraunhofer-IBM Quantum Partnership Review (2023):** The Federal Cartel Office (Bundeskartellamt) reviewed the competition implications of the strategic partnership between Fraunhofer-Gesellschaft and IBM for quantum computing access, clearing the arrangement under competition law while noting the need for open access principles.

## ECHR / EU Framework

### Convention Articles

The European Convention on Human Rights provides foundational principles relevant to quantum computing regulation, particularly regarding surveillance capabilities enabled by quantum decryption:

- **Article 8 -- Right to Respect for Private and Family Life:** The potential for quantum computers to break existing encryption raises profound Article 8 implications. The ECtHR's surveillance case law requires that any interference with privacy be "in accordance with the law," pursue a "legitimate aim," and be "necessary in a democratic society." Quantum decryption capabilities could render current legal frameworks for lawful interception obsolete, requiring new legislative frameworks.
- **Article 10 -- Freedom of Expression:** Quantum-enabled surveillance could have chilling effects on freedom of expression, particularly for journalists and whistleblowers who rely on end-to-end encryption for source protection.
- **Article 1 of Protocol No. 1 -- Protection of Property:** Relevant to the economic disruption that quantum computing could cause to industries reliant on current cryptographic standards, including financial services, digital commerce, and intellectual property protection.

### EU Legislative Framework

The EU has established a multi-layered approach to quantum technology governance:

- **European Quantum Communication Infrastructure (EuroQCI):** Launched in 2019, EuroQCI aims to build a pan-European quantum communication network integrating quantum key distribution into existing telecommunications infrastructure. All 27 EU member states signed the EuroQCI Declaration, committing to deploy national QKD networks interconnected through satellite and fiber-optic links.
- **Quantum Technologies Flagship (2018-2028):** A EUR 1 billion research initiative under Horizon Europe funding quantum computing, quantum simulation, quantum communication, and quantum sensing research across European institutions.
- **European Chips Act (Regulation (EU) 2023/1781):** While primarily addressing classical semiconductors, the Act's provisions for advanced chip manufacturing have implications for quantum processor fabrication, particularly for European manufacturers of superconducting and photonic quantum chips.
- **NIS2 Directive (Directive (EU) 2022/2555):** The revised Network and Information Security Directive requires essential and important entities to implement "state of the art" cybersecurity measures, which increasingly implies consideration of quantum threats. Article 21 requires entities to adopt risk management measures that account for "the state of the art and, where applicable, relevant European and international standards."
- **Cyber Resilience Act (Regulation (EU) 2024/2847):** Requires products with digital elements placed on the EU market to meet essential cybersecurity requirements throughout their lifecycle, with implications for quantum-safe cryptographic requirements in connected devices.

### Key Case Law and Decisions

- **ENISA Post-Quantum Cryptography Report (2024):** The European Union Agency for Cybersecurity published comprehensive guidance on PQC migration for EU member states and critical infrastructure operators, recommending alignment with NIST standards while maintaining European cryptographic sovereignty through ongoing research into alternative schemes.
- **European Data Protection Board Opinion on Quantum Threats (2025):** The EDPB issued an opinion recognizing that the "harvest now, decrypt later" threat posed by quantum computing constitutes a foreseeable risk that data controllers must address under GDPR Article 32 (security of processing), potentially requiring organizations to begin PQC migration to ensure the long-term confidentiality of personal data.
- **Szabó and Vissy v. Hungary (2016, App. No. 37138/14):** While pre-dating quantum computing concerns, the ECtHR's principles on mass surveillance safeguards are directly applicable to quantum-enabled decryption capabilities, requiring judicial oversight and proportionality assessments for any government use of quantum decryption.

## Comparative Analysis

| Dimension | South Korea | United States | Germany / EU | ECHR Framework |
|-----------|-------------|---------------|--------------|----------------|
| **Regulatory Philosophy** | Industrial policy-driven; innovation-first | National security-driven; aggressive controls | Balanced security and sovereignty; coordinated EU approach | Human rights baseline; privacy-centric |
| **PQC Migration Approach** | Advisory guidelines; voluntary timeline | Mandatory for federal systems; cascading to contractors | BSI mandatory for critical infrastructure; EU-wide guidance | Privacy-as-security obligation under GDPR Art. 32 |
| **Export Control Stringency** | Moderate; aligned with Wassenaar | Most restrictive; Entity List designations | EU Dual-Use Regulation; catch-all controls | N/A |
| **Investment Model** | Public-private partnership; chaebol-driven | Federal funding with university and national lab focus | Federal/Länder mixed funding; Fraunhofer model | EU Flagship programme; Horizon Europe |
| **International Cooperation** | Bilateral (US, Japan, EU); Quad+ | Five Eyes; AUKUS; bilateral with allies | EU-wide coordination; transatlantic partnerships | Council of Europe framework |
| **Workforce Development** | University-industry quantum training centres | National Quantum Initiative workforce programmes | BMBF quantum education initiatives | EU Quantum Skills Agenda |

## Timeline

| Year | Jurisdiction | Milestone |
|------|-------------|-----------|
| 2016 | EU | European Commission launches Quantum Manifesto |
| 2018 | EU | Quantum Technologies Flagship programme launched (EUR 1 billion) |
| 2018 | US | National Quantum Initiative Act signed (Pub. L. 115-368) |
| 2019 | EU | All 27 member states sign EuroQCI Declaration |
| 2019 | Google | Achieves "quantum supremacy" with 53-qubit Sycamore processor |
| 2020 | China | University of Science and Technology achieves quantum advantage with photonic system (Jiuzhang) |
| 2021 | Germany | IT Security Act 2.0 enacted, expanding BSI authority |
| 2021 | EU | Dual-Use Regulation (EU) 2021/821 enters into force |
| 2022 | US | NSM-10 on quantum computing risks to national security (May) |
| 2022 | US | OMB Memorandum M-23-02 on federal PQC migration (November) |
| 2022 | US | Quantum Computing Cybersecurity Preparedness Act signed (December) |
| 2022 | US | BIS October semiconductor export controls affecting quantum technology |
| 2023 | South Korea | National Quantum Strategy announced (KRW 3 trillion through 2035) |
| 2023 | EU | European Chips Act enters into force |
| 2024 | US | NIST finalizes FIPS 203, 204, 205 post-quantum cryptographic standards |
| 2024 | Germany | BSI updates TR-02102 to include post-quantum algorithms |
| 2024 | South Korea | Quantum Technology Development and Industry Promotion Act enacted |
| 2024 | EU | Cyber Resilience Act adopted |
| 2025 | Germany | BSI completes critical infrastructure quantum vulnerability assessment |
| 2025 | EU | EDPB opinion on quantum threats and GDPR obligations |
| 2025 | South Korea | KISA Post-Quantum Cryptography Migration Guidelines published |
| 2026 | South Korea | Mandatory quantum risk assessments for Tier 1 financial institutions |
| 2030 | South Korea / Germany | Recommended PQC migration completion deadline |
| 2035 | US | Mandatory PQC migration deadline for federal systems |

## Key Regulatory Challenges

### Defining Quantum Computing for Regulatory Purposes

A fundamental challenge across all jurisdictions is the lack of a precise, universally accepted definition of quantum computing for regulatory and export control purposes. Current quantum systems range from quantum annealers (such as D-Wave systems) to gate-based quantum computers (IBM, Google, IQM), photonic quantum processors, and trapped-ion systems (IonQ, Quantinuum). Export control regimes must distinguish between commercially available quantum systems with limited computational advantage and strategically significant quantum computers capable of cryptanalytic applications. The Wassenaar Arrangement's Technical Note to Category 5 addresses quantum cryptography equipment but does not comprehensively cover quantum computing hardware, creating gaps in multilateral export control coordination.

### "Harvest Now, Decrypt Later" Threat

All jurisdictions recognize the "harvest now, decrypt later" (HNDL) threat -- the risk that adversaries are collecting encrypted data today with the intention of decrypting it once quantum computers become capable of breaking current encryption. This threat is particularly acute for data with long-term sensitivity (state secrets, health records, financial data). The divergence in mandatory PQC migration timelines (2030 for South Korea/Germany recommendations versus 2035 for US federal mandate) creates a period of differential vulnerability that sophisticated adversaries can exploit.

## References

1. United States, National Quantum Initiative Act, Pub. L. 115-368, 115th Congress (2018).
2. United States, Quantum Computing Cybersecurity Preparedness Act, Pub. L. 117-349, 117th Congress (2022).
3. OMB, Memorandum M-23-02, "Migrating to Post-Quantum Cryptography," 18 November 2022.
4. National Security Memorandum NSM-10, "Promoting United States Leadership in Quantum Computing While Mitigating Risks to Vulnerable Cryptographic Systems," 4 May 2022.
5. NIST, FIPS 203, "Module-Lattice-Based Key-Encapsulation Mechanism Standard," August 2024.
6. NIST, FIPS 204, "Module-Lattice-Based Digital Signature Standard," August 2024.
7. NIST, FIPS 205, "Stateless Hash-Based Digital Signature Standard," August 2024.
8. South Korea, Quantum Technology Development and Industry Promotion Act (양자기술 육성 및 산업 진흥에 관한 법률), 2024.
9. BSI, Technical Guideline TR-02102, "Cryptographic Mechanisms: Recommendations and Key Lengths," updated 2025.
10. Regulation (EU) 2021/821 of the European Parliament and of the Council setting up a Union regime for the control of exports, brokering, technical assistance, transit and transfer of dual-use items, OJ L 206, 11 June 2021.
11. Directive (EU) 2022/2555 (NIS2 Directive), OJ L 333, 27 December 2022.
12. Regulation (EU) 2024/2847 (Cyber Resilience Act), OJ L, 2024.
13. European Commission, "European Quantum Communication Infrastructure (EuroQCI)," 2019.
14. ENISA, "Post-Quantum Cryptography: Current State and Quantum Mitigation," 2024.
15. NSA, "Commercial National Security Algorithm Suite 2.0 (CNSA 2.0)," September 2022.
16. Regulation (EU) 2023/1781 (European Chips Act), OJ L 229, 18 September 2023.
17. EDPB, "Opinion on Quantum Computing Threats to Personal Data Security," 2025.
18. ECtHR, Szabó and Vissy v. Hungary, App. No. 37138/14, 12 January 2016.
19. BMBF, "Handlungskonzept Quantentechnologien," Federal Ministry of Education and Research, 2024.
20. KISA, "Post-Quantum Cryptography Migration Guidelines for Critical Infrastructure Operators," 2024.
