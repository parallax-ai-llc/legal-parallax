---
id: "ai-liability-law-comparison"
name: "AI Liability: A Cross-Jurisdictional Legal Analysis"
date: "2026-03-11"
nationality: "Comparative"
occupation: ["Technology Law", "Tort Law", "Product Safety Law"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Artificial_intelligence"
lastUpdated: "2026-03-11"
---

## Summary

AI liability -- the legal frameworks governing responsibility for harm caused by artificial intelligence systems, including questions of who bears liability when autonomous or semi-autonomous AI makes decisions that injure persons, damage property, violate rights, or produce defective outputs -- represents one of the most rapidly evolving and jurisprudentially challenging areas of contemporary law, as existing liability regimes designed for human actors and traditional products struggle to accommodate systems that learn, adapt, and make decisions in ways that may be neither fully predictable nor fully explicable even to their creators. South Korea enacted the Framework Act on Artificial Intelligence (인공지능 기본법), signed into law on January 16, 2025 (effective January 2026), establishing principles for AI development and use including reliability, transparency, and non-discrimination; AI-related liability currently operates through the Product Liability Act (제조물 책임법) and general tort provisions of the Civil Act (민법) Article 750, with the Autonomous Vehicles Act (자율주행자동차의 상용화 촉진 및 지원에 관한 법률) providing specific liability provisions for autonomous vehicle accidents. The United States has no comprehensive federal AI liability statute, with liability determined through existing tort law frameworks including negligence, strict product liability, and the economic loss doctrine; the National Artificial Intelligence Initiative Act of 2020 established coordination mechanisms but not liability rules, while the Blueprint for an AI Bill of Rights (2022) and Executive Order 14110 on AI Safety (2023) established policy principles without creating enforceable liability standards; litigation involving AI outputs -- including Doe v. GitHub (N.D. Cal., copyright), and class actions against generative AI companies -- is rapidly developing case law. Germany's AI liability framework operates within the EU regulatory architecture, including the EU AI Act (Regulation (EU) 2024/1689), the proposed AI Liability Directive (COM(2022) 496), and the revised Product Liability Directive (Directive (EU) 2024/2853); domestically, the Produkthaftungsgesetz (ProdHaftG) applies to AI as a product, and the Straßenverkehrsgesetz (StVG) Section 1a addresses autonomous vehicle liability. At the European level, the EU AI Act establishes the world's first comprehensive risk-based AI regulatory framework, the proposed AI Liability Directive would create a rebuttable presumption of causation for AI-related harm and a right to disclosure of evidence about AI systems, the revised Product Liability Directive explicitly includes software and AI systems within its scope, and the ECHR's positive obligations doctrine under Articles 2, 3, and 8 may require states to ensure adequate liability frameworks for AI-related harm.

## Comparative Table

| Element | South Korea | United States | Germany | ECHR / EU |
|---------|-------------|---------------|---------|-----------|
| **AI-Specific Liability Statute** | Framework Act on AI (2025); no specific liability | No federal statute | Proposed AI Liability Directive (EU) | AI Liability Directive (proposed); revised PLD |
| **Product Liability** | Product Liability Act (제조물 책임법) | Restatement (Third) of Torts; state laws | ProdHaftG; revised EU PLD 2024/2853 | PLD 2024/2853 covers software/AI |
| **AI Regulatory Framework** | Framework Act on AI (2025) | Executive Order 14110; NIST AI RMF | EU AI Act (Regulation 2024/1689) | EU AI Act |
| **Autonomous Vehicle Liability** | Autonomous Vehicles Act | State laws (varies); NHTSA guidelines | StVG Section 1a | UNECE regulations |
| **Burden of Proof** | Plaintiff bears burden; limited reversal | Plaintiff bears burden | Proposed reversal under AI Liability Directive | AI Liability Directive: presumption of causation |
| **Transparency/Explainability Requirement** | Framework Act principles | NIST AI RMF (voluntary) | EU AI Act Art. 13 (high-risk AI) | EU AI Act mandatory for high-risk |
| **Generative AI Liability** | Not specifically addressed | Active litigation (copyright, defamation) | EU AI Act: GPAI model obligations | EU AI Act Title VIII-A (GPAI) |

## South Korea

### Legal Framework

South Korea has moved to establish an AI governance framework but relies primarily on existing liability mechanisms for AI-related harm.

**Framework Act on Artificial Intelligence (인공지능 기본법):** Signed by President Yoon Suk-yeol on January 16, 2025, with full effect from January 2026, this statute establishes foundational principles for AI governance without creating a specific AI liability regime. Key provisions:

- **Article 3:** Defines AI, AI systems, and high-impact AI systems.
- **Article 10:** Establishes principles including human dignity protection, transparency, fairness, safety, and accountability.
- **Article 27:** Operators of high-impact AI systems (고위험 인공지능) must conduct impact assessments before deployment.
- **Article 30:** Establishes the AI Safety Institute (인공지능안전연구소) for risk assessment and incident investigation.

**Product Liability Act (제조물 책임법):** This statute, enacted in 2000 and amended in 2017, imposes strict liability on manufacturers for defective products. Article 3 establishes liability for defects in design, manufacturing, or instructions/warnings. The 2017 amendment reversed the burden of proof for certain product defect claims, requiring manufacturers to prove the absence of defects rather than requiring consumers to prove their existence. AI software embedded in products may fall within the Act's scope, though the application to standalone software and AI services remains debated.

**Civil Act (민법) Article 750 -- General Tort Liability:** "A person who causes damage to another by an unlawful act, intentionally or negligently, shall be liable to compensate for the resulting damage." AI liability under Article 750 requires establishing the defendant's fault (고의 or 과실), which presents challenges when harm results from autonomous AI decision-making that was neither intended nor reasonably foreseeable by the developer.

**Autonomous Vehicles Act (자율주행자동차의 상용화 촉진 및 지원에 관한 법률):** Enacted in 2020 and amended in 2024, this statute establishes a framework for autonomous vehicle testing and deployment. Article 18 addresses liability allocation, providing that the vehicle operator bears primary liability for accidents during autonomous driving, with the manufacturer liable when the accident results from a defect in the autonomous driving system.

### AI Industry and Governance

South Korea's major AI developers include Samsung (Samsung AI Center), Naver (HyperCLOVA), and Kakao (KoGPT), all of which are subject to the Framework Act's provisions. The Korea Internet & Security Agency (KISA) and the National Information Society Agency (NIA) provide technical support for AI safety assessments. The AI Ethics Committee (인공지능 윤리위원회), established under the Framework Act, develops ethical guidelines for AI development and use.

## United States

### Legal Framework

The United States relies on existing tort law frameworks for AI liability, with no comprehensive federal AI liability statute.

**Product Liability:** AI systems may be subject to strict product liability under the Restatement (Third) of Torts: Products Liability (1998). Section 2 establishes three categories of product defect: manufacturing defect, design defect, and inadequate instructions or warnings. The application to software has been debated:

- **Software as Product:** In Saloomey v. Jeppesen & Co., 707 F.2d 671 (2d Cir. 1983), the court applied product liability to aeronautical charts, suggesting that information products may be treated as products for liability purposes.
- **AI as Service:** Some courts may characterize AI outputs as services rather than products, applying negligence standards instead of strict liability. The distinction between product and service remains unsettled for AI.

**Negligence:** AI developers and deployers owe a duty of reasonable care in designing, training, testing, deploying, and monitoring AI systems. Breach of this duty resulting in foreseeable harm gives rise to negligence liability. Key challenges include defining the applicable standard of care for AI development and establishing proximate causation when harm results from complex, opaque AI decision-making.

**Section 230 of the Communications Decency Act (47 U.S.C. Section 230):** Section 230 provides immunity to interactive computer service providers for content created by third parties. Whether Section 230 immunity extends to AI-generated content is actively litigated, with courts and commentators divided on whether AI outputs constitute "third-party" content or "first-party" content attributable to the platform.

### Key Litigation

**Doe v. GitHub, Inc. (N.D. Cal., Case No. 4:22-cv-06823):** Class action alleging that GitHub Copilot (powered by OpenAI Codex) violates copyrights by generating code substantially similar to copyrighted open-source code used in training data. The case raises fundamental questions about AI developers' liability for training data use and output generation.

**Anderson v. Stability AI Ltd. (N.D. Cal., Case No. 3:23-cv-00201):** Artists' class action alleging that Stable Diffusion's image generation constitutes copyright infringement by reproducing elements of copyrighted training data images.

**Mata v. Avianca, Inc. (S.D.N.Y. 2023):** An attorney was sanctioned for submitting a brief containing fictitious case citations generated by ChatGPT, raising questions about professional responsibility and AI-assisted legal practice.

**Executive Order 14110 (October 30, 2023):** President Biden's Executive Order on Safe, Secure, and Trustworthy AI requires AI developers of the most powerful models to share safety test results with the government, establishes standards for AI safety and security through NIST, and directs agencies to address AI-related civil rights and consumer protection concerns.

### State-Level AI Legislation

Colorado's SB 24-205 (2024) enacted the first comprehensive state AI regulation requiring deployers of high-risk AI systems to conduct impact assessments, provide notice to consumers, and implement reasonable safeguards. Several other states have introduced AI liability bills.

## Germany

### Legal Framework

Germany's AI liability framework operates within the comprehensive EU regulatory architecture while maintaining domestic liability provisions.

**EU AI Act (Regulation (EU) 2024/1689):** The AI Act, which entered into force on August 1, 2024, with staggered application dates through August 2027, establishes the world's first comprehensive risk-based AI regulatory framework. While not directly creating a liability regime, the AI Act establishes obligations whose breach may support liability claims:

- **Article 5:** Prohibited AI practices (social scoring, real-time biometric identification in public spaces with limited exceptions).
- **Article 6-7, Annex III:** High-risk AI systems classification.
- **Article 9:** Risk management system for high-risk AI.
- **Article 13:** Transparency and provision of information to deployers.
- **Article 14:** Human oversight requirements.
- **Article 72:** Penalties up to EUR 35 million or 7% of worldwide annual turnover.

**Proposed AI Liability Directive (COM(2022) 496):** Proposed on September 28, 2022, this Directive would create two key mechanisms:

- **Presumption of Causation (Article 4):** Where a claimant establishes fault of a defendant and demonstrates that it is reasonably likely that the fault influenced the AI system's output, a rebuttable presumption of causation is established. This addresses the "black box" challenge where claimants cannot trace the specific causal chain within an AI system.
- **Right to Disclosure (Article 3):** Courts may order the disclosure of evidence about high-risk AI systems relevant to establishing liability claims.

**Revised Product Liability Directive (Directive (EU) 2024/2853):** Adopted on October 10, 2024, the revised PLD explicitly includes software, including AI systems, within the definition of "product" (Article 4(1)). Key innovations:

- **Article 4(4):** Software updates, upgrades, and the absence of necessary security updates may constitute product defects.
- **Article 9:** Presumption of defectiveness where the claimant faces excessive difficulties in proving defect due to the technical or scientific complexity of the product.
- **Article 10:** Disclosure obligations regarding evidence in the defendant's control.

**Produkthaftungsgesetz (ProdHaftG):** Currently transposing the original PLD 85/374/EEC, the ProdHaftG will be updated to reflect the revised Directive. Section 1 establishes strict manufacturer liability for defective products causing death, bodily injury, or property damage.

**StVG Section 1a -- Autonomous Vehicle Liability:** Added by the Autonomous Driving Act (Gesetz zum autonomen Fahren, 2021), Section 1a StVG establishes liability for autonomous vehicles operating at SAE Level 4, providing that the vehicle operator remains liable (Gefährdungshaftung under Section 7 StVG) while the manufacturer bears liability for system defects. The maximum liability for autonomous vehicles was raised to EUR 10 million for personal injury and EUR 2 million for property damage.

## ECHR & EU

### EU AI Act -- Enforcement and Liability Implications

While the AI Act is primarily a regulatory rather than liability statute, its obligations create important implications for civil liability:

**Compliance as Standard of Care:** An AI provider's compliance or non-compliance with AI Act obligations (risk management, data governance, transparency, human oversight) may influence tort liability determinations. Non-compliance with mandatory requirements is likely to be treated as evidence of fault.

**National Market Surveillance Authorities:** Each member state must designate market surveillance authorities (Article 70) with powers to investigate and sanction AI Act violations. Germany has designated the Bundesnetzagentur (Federal Network Agency) as the coordinating authority.

### ECHR Positive Obligations

The European Court of Human Rights has not directly addressed AI liability but its positive obligations doctrine under Articles 2 (right to life), 3 (prohibition of inhuman treatment), and 8 (private life) may require states to ensure adequate regulatory and liability frameworks for AI-related risks:

**Öneryıldız v. Turkey (Application No. 48939/99, Grand Chamber Judgment of November 30, 2004):** The Court held that Article 2 imposes a positive obligation on states to establish and enforce a legal framework that deters threats to the right to life, including regulatory and liability mechanisms for dangerous activities. By analogy, states may be required to ensure that AI systems that could endanger life (medical AI, autonomous vehicles) are subject to adequate liability frameworks.

**Brincat and Others v. Malta (Applications Nos. 60908/11 et al., Judgment of July 24, 2014):** The Court found violations of Articles 2 and 8 where Malta failed to establish adequate regulations and liability mechanisms for asbestos exposure in shipyards. The principle that states must ensure effective legal frameworks for technologically complex risks extends to AI.

### AI Liability Gap Analysis

The European Commission's impact assessment for the proposed AI Liability Directive identified several liability gaps:

- **Opacity Gap:** AI decision-making processes may be too complex for claimants to prove specific causation, creating an evidentiary barrier that existing liability frameworks cannot adequately address.
- **Autonomy Gap:** As AI systems become more autonomous, the link between human fault and AI-caused harm weakens, challenging fault-based liability models.
- **Multi-Party Gap:** AI supply chains involve multiple actors (data providers, model developers, deployers, operators) making it difficult to identify the responsible party.
- **Adaptation Gap:** AI systems that learn and evolve after deployment may develop defects that did not exist at the time of initial placement on the market, challenging static product liability frameworks.

## Comparative Analysis

### Liability Paradigms

The four jurisdictions represent distinct approaches to AI liability. South Korea and the United States primarily apply existing tort and product liability frameworks, creating uncertainty about their application to AI. The EU is developing AI-specific liability rules through the proposed AI Liability Directive and revised PLD. Germany operates within both the EU framework and its domestic ProdHaftG/StVG provisions.

### Burden of Proof

The most significant practical difference concerns the burden of proof. The proposed EU AI Liability Directive's presumption of causation would significantly ease the claimant's evidentiary burden, addressing the "black box" problem. South Korea's 2017 Product Liability Act amendment partially reverses the burden for product defects. U.S. tort law maintains the traditional plaintiff's burden, though res ipsa loquitur may apply in some AI contexts.

### Regulatory-Liability Interaction

The EU's approach of combining comprehensive regulation (AI Act) with tailored liability rules (AI Liability Directive, revised PLD) creates the most integrated framework. The U.S. approach separates regulation (voluntary standards, executive guidance) from liability (existing tort law), creating potential gaps. South Korea's Framework Act establishes regulatory principles but does not directly connect them to liability outcomes.

### Autonomous Vehicle Liability

All four jurisdictions have addressed autonomous vehicle liability, representing the most developed area of AI-specific liability law. Germany's StVG Section 1a, South Korea's Autonomous Vehicles Act, and various U.S. state laws all allocate liability between operators and manufacturers based on the cause of the accident and the level of autonomy engaged.

## Timeline

| Year | Jurisdiction | Event |
|------|-------------|-------|
| 2017 | South Korea | Product Liability Act amended (burden of proof reversal) |
| 2020 | South Korea | Autonomous Vehicles Act enacted |
| 2020 | United States | National AI Initiative Act enacted |
| 2021 | Germany | Autonomous Driving Act (StVG Section 1a) enacted |
| 2022 | United States | Blueprint for an AI Bill of Rights published |
| 2022 | EU | Proposed AI Liability Directive (COM(2022) 496) published |
| 2023 | United States | Executive Order 14110 on AI Safety (October 30) |
| 2023 | United States | Mata v. Avianca: attorney sanctioned for AI-generated fake citations |
| 2024 | EU | AI Act enters into force (August 1) |
| 2024 | EU | Revised Product Liability Directive adopted (October 10) |
| 2024 | United States | Colorado SB 24-205: first comprehensive state AI regulation |
| 2025 | South Korea | Framework Act on AI signed (January 16; effective January 2026) |

## References

### South Korea
- Framework Act on Artificial Intelligence (인공지능 기본법), 2025.
- Product Liability Act (제조물 책임법), as amended 2017. Available at: https://elaw.klri.re.kr/eng_mobile/viewer.do?hseq=46893&type=part&key=9
- Civil Act (민법), Article 750.
- Autonomous Vehicles Act (자율주행자동차법), 2020.

### United States
- Executive Order 14110 on AI Safety, October 30, 2023. Available at: https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/
- Restatement (Third) of Torts: Products Liability (1998).
- 47 U.S.C. Section 230 (CDA Section 230).
- Doe v. GitHub, Case No. 4:22-cv-06823 (N.D. Cal.).
- Colorado SB 24-205 (2024).

### Germany
- Produkthaftungsgesetz (ProdHaftG). Available at: https://www.gesetze-im-internet.de/prodhaftg/
- StVG Section 1a (Autonomous Driving). Available at: https://www.gesetze-im-internet.de/stvg/__1a.html
- Gesetz zum autonomen Fahren, 2021.

### ECHR & EU
- EU AI Act, Regulation (EU) 2024/1689. Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689
- Proposed AI Liability Directive, COM(2022) 496. Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022PC0496
- Revised Product Liability Directive (EU) 2024/2853. Available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024L2853
- Öneryıldız v. Turkey, Application No. 48939/99, ECtHR Grand Chamber Judgment of November 30, 2004.
