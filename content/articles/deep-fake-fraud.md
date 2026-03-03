---
id: "deep-fake-fraud"
name: "Deep Fake Fraud"
birth: "2020-01-01"
death: "Unknown"
nationality: "International"
occupation: ["Emerging Crime"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Deep_Fake_Fraud"
lastUpdated: "2026-02-26"
---

## Summary

AI-generated deepfake videos and voices are used for fraud including a $25 million theft from a Hong Kong company where criminals faked a video call with the company's CFO.

## Career Timeline

| Year | Event |
|------|-------|
| 2024 | $25 million stolen using deepfake video call |

## Modus Operandi (How It Works)

Deepfake-enabled fraud typically combines social engineering with synthetic media:

- **Reconnaissance:** attackers gather voice/video samples from public talks, meetings, or social media.
- **Modeling:** a voice-cloning or face-synthesis model is trained/fine-tuned on collected samples.
- **Impersonation event:** the target receives a call or video meeting that appears to come from an executive, vendor, or trusted counterparty.
- **Urgent pretext:** the impersonator pressures the target to bypass normal controls ("confidential deal", "time-sensitive payment", "don’t involve others").
- **Payment or credential capture:** funds are wired to attacker-controlled accounts, or credentials/MFA approvals are obtained.

## Common Attack Patterns

- **Executive impersonation (BEC + deepfake):** CFO/CEO voice or video used to authorize transfers.
- **Vendor/supplier payment diversion:** synthetic voice used to "confirm" new banking details.
- **Recruiting/HR scams:** deepfake interviews to obtain access to internal systems or payroll.
- **KYC/identity bypass attempts:** synthetic faces used to defeat liveness checks or remote onboarding.

## Indicators and Red Flags

Even when media looks convincing, operational signals often leak:

- Requests to **skip callbacks** or **avoid written confirmation**.
- Sudden **change of destination accounts** or unusual payment routing.
- **Audio artifacts** (odd cadence, missing breaths, clipped consonants) or **visual artifacts** (lip-sync drift, unnatural eye movement).
- A participant insisting on **camera-off**, low resolution, or frequent "technical issues".
- The request does not match known context, priorities, or established approval workflows.

## Mitigations (High-Level)

- **Out-of-band verification:** mandatory callback to a known number (directory, not the message) for sensitive requests.
- **Two-person integrity:** require multiple independent approvals for high-value transfers.
- **Payment controls:** enforce beneficiary allowlists, cooling-off periods for new payees, and bank-detail change verification.
- **Meeting hygiene:** verify participants via authenticated platforms; avoid accepting identity solely from audio/video.
- **Awareness training:** focus on process compliance under pressure, not just "spotting artifacts".

## Impact

- **Financial loss:** direct theft and recovery costs.
- **Operational disruption:** incident response, transaction freezes, and audit/forensics.
- **Reputational damage:** erosion of trust in communications and remote collaboration.
- **Security externalities:** deepfakes can be used to increase effectiveness of phishing and business email compromise (BEC).

## Related Concepts

- **Business Email Compromise (BEC)**
- **Social engineering**
- **Voice cloning / speech synthesis**
- **Synthetic identity fraud**

## References

[^1]: Wikipedia, "Deep Fake Fraud" - https://en.wikipedia.org/wiki/Deep_Fake_Fraud
