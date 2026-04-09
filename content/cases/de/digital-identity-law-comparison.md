---
id: "digital-identity-law-comparison"
name: "Regulierung der digitalen Identität: Rechtsvergleichende Analyse"
date: "2026-03-16"
nationality: "Global"
occupation: ["Rechtsanalyse", "Rechtsvergleichung", "Datenschutz und Identität"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Digital_identity"
lastUpdated: "2026-03-16"
---

## Zusammenfassung

Die Regulierung der digitalen Identität umfasst die rechtlichen Rahmenwerke für nationale digitale Identifikationssysteme, die elektronische Identitätsprüfung, biometrische Authentifizierung, Modelle der selbstsouveränen Identität (SSI) und die datenschutzrechtlichen Auswirkungen digitaler Identitätsinfrastrukturen. Da Regierungen und der private Sektor zunehmend digitale Identitätsnachweise für den Zugang zu Dienstleistungen verlangen, haben Rechtsordnungen unterschiedliche Ansätze gewählt, die fundamentale Unterschiede in ihren Auffassungen vom Verhältnis zwischen Staat und Individuum, Datenschutznormen und technologischer Infrastruktur widerspiegeln. Die Europäische Union hat den umfassendsten supranationalen Rahmen durch die eIDAS-Verordnung (Verordnung (EU) Nr. 910/2014) und ihren Nachfolger eIDAS 2.0 (Verordnung (EU) 2024/1183) geschaffen, die alle EU-Mitgliedstaaten verpflichtet, ihren Bürgern bis 2026 europäische Brieftaschen für die digitale Identität anzubieten. Südkorea betreibt eines der weltweit fortschrittlichsten nationalen digitalen Identitätssysteme, das die Infrastruktur der Resident Registration Number (주민등록번호) mit mobiler Identitätsprüfung durch den Mobile Driver's License und DID (Decentralized Identifier) Pilotprogramme integriert. Den Vereinigten Staaten fehlt ein bundesweites Gesetz zur digitalen Identität; sie stützen sich auf eine fragmentierte Landschaft staatlich ausgestellter Führerscheine, Sozialversicherungsnummern und freiwilliger Rahmenwerke wie NIST SP 800-63 zur digitalen Authentifizierung. Deutschland hat eIDAS in seinem nationalen Kontext umgesetzt und den elektronischen Personalausweis (Personalausweis mit eID-Funktion) eingeführt und entwickelt seine nationale Umsetzung der europäischen Brieftasche für die digitale Identität.

## Vergleichstabelle

| Aspekt | Südkorea | Vereinigte Staaten | Deutschland | EU |
|--------|----------|-------------------|-------------|-----|
| **Hauptgesetzgebung** | Resident Registration Act (주민등록법); Electronic Government Act; Digital Identity Act (vorgeschlagen 2025) | Kein Bundesgesetz zur digitalen ID; REAL ID Act (2005); Landesgesetze | eIDAS (EU); Personalausweisgesetz (PAuswG); Onlinezugangsgesetz (OZG) | eIDAS 2.0 (Verordnung (EU) 2024/1183) |
| **Nationales ID-System** | Resident Registration Number (RRN, 주민등록번호); für alle Bürger verpflichtend | Keine nationale ID; SSN nicht als ID konzipiert; staatliche Führerscheine | Personalausweis (verpflichtend ab 16 Jahren); eID-Funktion | Europäische Brieftasche für die digitale Identität (verpflichtendes Angebot bis 2026) |
| **Biometrische Komponenten** | Fingerabdrücke (10-Print); Gesichtsfoto | Variiert je nach Bundesstaat; REAL ID erfordert Gesichtsbild | Fingerabdrücke (2); Gesichtsfoto; eID-Chip | Biometrische Daten in nationalen ID-Karten (Verordnung (EU) 2019/1157) |
| **Digitale Authentifizierung** | Mobile Identität (통신사 인증); zertifikatsbasiert (공인인증서-Nachfolger); DID-Pilotprojekte | NIST SP 800-63 (freiwillig); Login.gov (Bund); staatsspezifisch | eID (Online-Identifizierung); BundID-Portal | eIDAS LoA: niedrig, substanziell, hoch; EUDI-Wallet |
| **Datenschutzrahmen** | PIPA; RRN-Nutzungsbeschränkungen (Änderungen 2014) | Kein Bundesdatenschutzgesetz; Landesgesetze (CCPA usw.); Privacy Act 1974 | DSGVO; BDSG; verfassungsrechtliche informationelle Selbstbestimmung | DSGVO; Datenminimierungsanforderungen von eIDAS 2.0 |
| **Selbstsouveräne Identität** | DID/VC-Pilotprogramme (2023-2025) | Begrenzt; DHS/SVIP-Pilotprojekte; kein Bundesrahmen | IDunion-SSI-Pilot; eIDAS 2.0-Wallet-Architektur | EUDI-Wallet integriert SSI-Prinzipien; EBSI-Infrastruktur |
| **Regulierungsbehörde** | Ministerium für Inneres und Sicherheit; PIPC | Keine einzelne Behörde; NIST; DHS; staatliche DMVs | Bundesinnenministerium (BMI); BSI; BfDI | Europäische Kommission; EU-Agentur für Cybersicherheit (ENISA) |

## Südkorea

### Rechtsrahmen

Südkorea verfügt über eines der weltweit am weitesten entwickelten Ökosysteme für digitale Identitäten, aufgebaut auf einer umfassenden nationalen Identifikationsinfrastruktur:

- **Resident Registration Act (주민등록법, 1962, in der geänderten Fassung):** Etabliert das Resident Registration Number (RRN, 주민등록번호) System und weist jedem koreanischen Bürger und registrierten ausländischen Einwohner eine eindeutige 13-stellige Identifikationsnummer zu. Die RRN kodiert Geburtsdatum, Geschlecht und Registrierungsbezirk und dient als grundlegender Identifikator über staatliche Dienste, Finanzsysteme und Telekommunikation hinweg.
  - **Artikel 7 -- Registrierung und Ausstellung:** Schreibt die Registrierung aller Bürger innerhalb von 14 Tagen nach der Geburt und aller ausländischen Einwohner innerhalb von 90 Tagen nach Begründung des Wohnsitzes vor.
  - **Artikel 7-4 -- Resident Registration Card:** Sieht die Ausstellung einer physischen Identifikationskarte vor, die die RRN, ein Foto und (seit 2012) einen fingerabdruckbasierten biometrischen Chip enthält.
  - **Artikel 24-2 -- RRN-Nutzungsbeschränkungen (geändert 2014):** Nach den massiven persönlichen Datenpannen von 2011-2014 (die über 100 Millionen Datensätze betrafen) verbietet Artikel 24-2 die Erhebung von RRNs durch private Stellen, sofern dies nicht ausdrücklich gesetzlich genehmigt ist, durch ein verfassungsgerichtliches Urteil oder wenn keine vernünftige Alternative zur Identitätsprüfung besteht.
- **Personal Information Protection Act (PIPA, 개인정보보호법):** Bietet umfassende Datenschutzregeln, die auf digitale Identitätsdaten anwendbar sind:
  - **Artikel 24 -- Beschränkungen für eindeutige Identifikatoren:** Verbietet die Verarbeitung eindeutiger Identifikatoren (einschließlich RRNs), außer wenn dies ausdrücklich gesetzlich erlaubt ist. Verantwortliche müssen, wo möglich, alternative Methoden zur Identitätsprüfung verwenden.
  - **Artikel 24-2 -- RRN-Verarbeitungsbeschränkungen:** Verstärkt das verfassungsrechtliche Mandat von 2014 zur Beschränkung der RRN-Erhebung und verlangt von Datenverantwortlichen, alternative Mittel zur Identitätsprüfung bereitzustellen.
  - **Artikel 23 -- Sensible Informationen:** Klassifiziert biometrische Daten, die zur Identifizierung verwendet werden (Fingerabdrücke, Iris-Scans, Gesichtserkennungsdaten) als sensible Informationen, die ausdrückliche gesonderte Einwilligung erfordern.
- **Electronic Government Act (전자정부법):** Etabliert den rechtlichen Rahmen für digitale Regierungsdienste, einschließlich elektronischer Authentifizierung für den Zugang zu Regierungsportalen, digitaler Dokumentenausstellung und behördenübergreifender Datenfreigabe.
- **Digital Signature Act (전자서명법, geändert 2020):** Schrieb zuvor die Verwendung staatlich autorisierter digitaler Zertifikate (공인인증서) für elektronische Transaktionen vor und schuf damit ein monopolistisches Zertifizierungssystem. Die Änderung von 2020 schaffte das Monopol "autorisierter" Zertifikate ab und erlaubte private elektronische Signaturen und vielfältige Authentifizierungsmethoden, einschließlich biometrischer, mobiler und blockchainbasierter Verifizierung.

### Wesentliche Grundsätze

Die Entwicklung der digitalen Identität in Südkorea hat mehrere Phasen durchlaufen:

1. **Zertifikatsbasierte Ära (1999-2020):** Das von der Regierung vorgeschriebene Public Key Infrastructure (PKI) System verlangte von den Bürgern die Verwendung "autorisierter elektronischer Zertifikate" (공인인증서), die von benannten Zertifizierungsstellen für Online-Banking, Steuererklärung und E-Government-Dienste ausgestellt wurden. Während es eine hohe Sicherheitsgewähr bot, wurde das System für seine schlechte Benutzerfreundlichkeit kritisiert (es erforderte ActiveX-Plugins) und schuf Hindernisse für mobile und plattformübergreifende Authentifizierung.

2. **Mobile-Identitäts-Ära (2020-heute):** Nach der Änderung des Digital Signature Act 2020 verbreiteten sich die mobile, durch Mobilfunkanbieter gestützte Identitätsprüfung (통신사 본인확인) und private Authentifizierungsmethoden. Die drei großen Anbieter (SK Telecom, KT, LG U+) betreiben Identitätsprüfungsdienste, die von über 95 % der koreanischen Erwachsenen genutzt werden, unter Nutzung der SIM-basierten Authentifizierung in Kombination mit wissensbasierter Verifizierung.

3. **Dezentralisierte Identitätsära (2023-heute):** Die Regierung startete DID (Decentralized Identifier) Pilotprogramme über die Plattform "Government24" (정부24), die es Bürgern ermöglichen, verifizierbare Berechtigungsnachweise in mobilen Brieftaschen zu speichern. Die "Digital Identity 2.0"-Initiative des Ministeriums für Wissenschaft und IKT unterstützt die Entwicklung einer Infrastruktur für selbstsouveräne Identitäten, die mit den W3C-Standards für DID und Verifiable Credentials kompatibel ist.

### Bemerkenswerte Fälle

- **Verfassungsgerichtliche RRN-Entscheidung (2015, 2011헌마731):** Das Verfassungsgericht entschied, dass das Versäumnis der Regierung, angemessene Schutzmaßnahmen für das RRN-System zu etablieren, das verfassungsrechtliche Recht auf informationelle Selbstbestimmung (정보자기결정권) verletzte, und ordnete der Nationalversammlung an, Gesetze zur Beschränkung der RRN-Erhebung durch private Stellen zu erlassen. Diese wegweisende Entscheidung führte zu den PIPA-Änderungen von 2014 und gestaltete die koreanische Politik der digitalen Identität grundlegend um.
- **Untersuchung der Gesichtserkennung der koreanischen nationalen Polizeibehörde (2024):** Die PIPC untersuchte den Einsatz eines Gesichtserkennungs-Identifikationssystems der koreanischen nationalen Polizeibehörde bei öffentlichen Veranstaltungen und stellte fest, dass die Verarbeitung biometrischer Daten durch das System keine ausreichende Rechtsgrundlage nach PIPA Artikel 23 hatte, und ordnete die Aussetzung der Echtzeit-Gesichtserkennung zur Massenüberwachung an.
- **Datenpanne bei der Identitätsprüfung des Mobilfunkanbieters (2023):** Die PIPC verhängte gegen LG U+ eine Geldstrafe von 6,8 Milliarden KRW (etwa 5,1 Millionen USD), nachdem eine Datenpanne die Identitätsprüfungsdaten von 18 Millionen Abonnenten, einschließlich Namen, RRNs und Telefonnummern, offengelegt hatte, was damals die größte Datenschutzstrafe in der koreanischen Geschichte darstellte.

## Vereinigte Staaten

### Bundesrahmen

Die Vereinigten Staaten unterscheiden sich von anderen entwickelten Nationen dadurch, dass ihnen ein nationales digitales Identitätssystem fehlt, was tief verwurzelten kulturellen und politischen Widerstand gegen eine zentralisierte Identifikation widerspiegelt:

- **REAL ID Act of 2005 (Pub. L. 109-13, Division B):** Erlassen als Reaktion auf die Empfehlung der 9/11-Kommission zur Verbesserung der Standards für Identitätsdokumente, legt der REAL ID Act Mindeststandards für staatlich ausgestellte Führerscheine und Identifikationskarten fest, die für föderale Zwecke akzeptiert werden (Boarding von Inlandsflügen, Betreten von Bundeseinrichtungen). Wesentliche Bestimmungen:
  - **Section 202 -- Mindeststandards:** Verlangt von den Staaten, die Identität von Antragstellern durch Dokumentation (Geburtsurkunde, Reisepass, SSN-Verifizierung) zu überprüfen, eine Überprüfung des rechtmäßigen Status durchzuführen und maschinenlesbare Technologie (Strichcode und RFID-Chip) auf REAL-ID-konformen Karten einzuschließen.
  - **Vollzugstermin:** Ursprünglich Mai 2008, wiederholt verschoben. Volle Durchsetzung begann am 7. Mai 2025, danach werden nicht konforme IDs für föderale Zwecke nicht akzeptiert.
- **Social Security Number (SSN):** Obwohl nicht als nationaler Identifikator konzipiert, ist die SSN (autorisiert nach dem Social Security Act von 1935, 42 U.S.C. § 405(c)(2)) zum de facto universellen Identifikator in den USA geworden, verwendet für Steuerverwaltung, Kreditauskunft, Beschäftigungsverifizierung und Eröffnung von Finanzkonten. Ihre Verwendung als Identifikator wurde wegen Sicherheitsanfälligkeiten (SSNs waren nicht als geheim konzipiert) und Identitätsdiebstahlrisiken kritisiert.
- **Privacy Act of 1974 (5 U.S.C. § 552a):** Beschränkt die Erhebung, Nutzung und Offenlegung personenbezogener Daten durch Bundesbehörden, die in Aufzeichnungssystemen geführt werden, einschließlich Identitätsprüfungsdaten. Section 7 beschränkt Behörden, die Offenlegung von SSNs zu verlangen, sofern dies nicht gesetzlich autorisiert ist.
- **NIST Special Publication 800-63 -- Digital Identity Guidelines (Revision 4, 2024):** Der primäre Bundesrahmen für die digitale Authentifizierung, der drei Vertrauensstufen (IAL, AAL, FAL) für Identitätsprüfung, Authentifizierung und Föderation festlegt. SP 800-63-4 stellt eine wesentliche Überarbeitung dar:
  - **Identity Assurance Levels (IAL):** IAL1 (selbstbehauptet), IAL2 (Fern- oder Persönlich-Prüfung mit Beweisverifizierung), IAL3 (Persönlich-Prüfung mit physischer und biometrischer Verifizierung).
  - **Authenticator Assurance Levels (AAL):** AAL1 (Einzelfaktor), AAL2 (Mehrfaktor), AAL3 (hardwarebasierter Mehrfaktor mit Verifier-Imitationsresistenz).
  - **Gerechtigkeit und Zugänglichkeit:** SP 800-63-4 führt bedeutende Bestimmungen zur Identitätsgerechtigkeit ein und befasst sich mit Hindernissen, denen marginalisierte Bevölkerungen bei Identitätsprüfungsverfahren gegenüberstehen, einschließlich Personen ohne traditionelle Identitätsdokumente.
- **Login.gov:** Die General Services Administration (GSA) betreibt Login.gov als die geteilte Identitätsprüfungsplattform der Bundesregierung und bietet IAL2-konforme Identitätsprüfung für den Zugang zu Online-Diensten von Bundesbehörden. Stand 2025 dient Login.gov über 100 Millionen Nutzerkonten in über 50 Bundesbehörden.

### Variationen auf staatlicher Ebene

- **Einführung des Mobile Driver's License (mDL):** Mehrere Staaten haben ISO-18013-5-konforme mobile Führerscheine implementiert: Louisiana (LA Wallet, 2018), Arizona, Colorado, Georgia, Maryland und andere. Die American Association of Motor Vehicle Administrators (AAMVA) hat Implementierungsrichtlinien für mDL veröffentlicht.
- **California Consumer Privacy Act (CCPA, Cal. Civ. Code § 1798.100):** Gilt für die Erhebung und Nutzung von Identitätsprüfungsdaten durch private Stellen und gewährt kalifornischen Einwohnern Rechte zu wissen, zu löschen und dem Verkauf personenbezogener Daten, die während Identitätsprüfungsverfahren erhoben wurden, zu widersprechen.
- **Illinois Biometric Information Privacy Act (BIPA, 740 ILCS 14):** Reguliert die Erhebung biometrischer Identifikatoren (Fingerabdrücke, Iris-Scans, Gesichtsgeometrie), die in der Identitätsprüfung verwendet werden, verlangt informierte Einwilligung und schafft ein privates Klagerecht. Die Entscheidungen des Illinois Supreme Court in Rosenbach v. Six Flags (2019) und Cothron v. White Castle System (2023) erweiterten BIPAs Geltungsbereich und Rechtsbehelfe erheblich.

### Bemerkenswerte Fälle

- **Aaronson v. IRS (D.D.C. 2023):** Ein Bundesgericht befasste sich mit Anfechtungen der Verwendung der Gesichtserkennungstechnologie von ID.me durch das IRS zur Identitätsprüfung von Steuerzahlerkonten und warf Bedenken hinsichtlich der Erhebung biometrischer Daten, algorithmischer Voreingenommenheit und der zwingenden Natur der Forderung nach Gesichtserkennung für den Zugang zu Regierungsdiensten auf. Das IRS modifizierte daraufhin seine Identitätsprüfungsverfahren.
- **ACLU v. Clearview AI (N.D. Ill. 2022):** Vergleich einer BIPA-Klage gegen Clearview AI wegen des Scrapens von Milliarden von Gesichtsbildern aus dem Internet zum Aufbau einer Gesichtserkennungs-Identifikationsdatenbank, was zu einer dauerhaften Unterlassungsverfügung gegen den Verkauf der Datenbank von Clearview an die meisten privaten Stellen in den Vereinigten Staaten führte.
- **Brnovich v. Democratic National Committee (2021):** Während es sich in erster Linie um einen Wahlrechtsfall handelt, schneidet die Analyse des Supreme Court zu Identifikationsanforderungen für die Stimmabgabe mit der Politik der digitalen Identität ab und befasst sich mit der Belastung, die Identifikationsanforderungen für marginalisierte Gemeinschaften bedeuten.
- **Diebstahl der SSN-Datenbank-Rechtsstreit (2017-heute):** Nach der Equifax-Datenpanne, die die SSNs von 147 Millionen Amerikanern offenlegte, hoben spätere Rechtsstreitigkeiten und der 700-Millionen-USD-Vergleich der FTC die fundamentale Anfälligkeit von SSN-basierten Identitätssystemen hervor und beschleunigten Forderungen nach SSN-Reform oder -Ersatz.

## Deutschland

### Rechtsrahmen

Der deutsche Rahmen für digitale Identität ist geprägt durch seinen starken verfassungsrechtlichen Datenschutz, seine föderale Struktur und EU-weite eIDAS-Anforderungen:

- **Personalausweisgesetz (PAuswG):** Regelt die Ausstellung und Verwendung deutscher Personalausweise, die für alle deutschen Bürger ab 16 Jahren verpflichtend sind:
  - **§ 5 -- Kartenmerkmale:** Der Personalausweis enthält einen kontaktlosen RFID-Chip, der Namen, Geburtsdatum, Adresse, Foto und zwei Fingerabdrücke des Inhabers speichert (verpflichtend seit Verordnung (EU) 2019/1157).
  - **§ 18 -- Online-Identifizierungsfunktion (eID):** Die eID-Funktion ermöglicht eine Fern-Identitätsprüfung für E-Government und Dienste des privaten Sektors. Nutzer authentifizieren sich über die mobile Anwendung AusweisApp2 oder kompatible Kartenlesegeräte, wobei eine PIN den Zugriff auf die Daten des Chips schützt.
  - **§ 18a -- Identitätsprüfungsdienste:** Ermächtigt private Anbieter von Identitätsprüfungsdiensten (eID-Server-Betreiber) zur Überprüfung von Identitätsattributen, die vom eID-Chip übermittelt werden, vorbehaltlich der Genehmigung des BVA (Bundesverwaltungsamt).
  - **§ 21 -- Datenminimierung:** Setzt Datenminimierung um, indem selektive Attributoffenlegung erlaubt wird -- Diensteanbieter dürfen nur die spezifischen Identitätsattribute anfordern, die für ihren Zweck erforderlich sind (z. B. Altersverifizierung ohne vollständige Identitätsoffenlegung).
- **Onlinezugangsgesetz (OZG, 2017):** Verpflichtete alle Bundes-, Landes- und Kommunalregierungen, bis Ende 2022 575 identifizierte Verwaltungsdienste online bereitzustellen (eine Frist, die nicht vollständig eingehalten wurde). Das OZG 2.0 (2024) erweitert das Digitalisierungsmandat und integriert das BundID-Portal als zentrales Authentifizierungs-Gateway für E-Government-Dienste unter Nutzung der eID-Funktion.
- **eIDAS-Verordnung (Verordnung (EU) Nr. 910/2014) und eIDAS 2.0 (Verordnung (EU) 2024/1183):** Direkt anwendbar in Deutschland:
  - **eIDAS 2.0 Artikel 5a -- Europäische Brieftaschen für die digitale Identität:** Verpflichtet Deutschland (und alle Mitgliedstaaten), allen Bürgern und Einwohnern, die dies wünschen, bis 2026 kostenlos europäische Brieftaschen für die digitale Identität (EUDI-Wallets) auszustellen. Die Wallet muss die Speicherung und selektive Offenlegung von Identitätsattributen, elektronische Signaturen und verifizierbare Berechtigungsnachweise ermöglichen.
  - **eIDAS 2.0 Artikel 6a -- Grenzüberschreitende Anerkennung:** Schreibt die gegenseitige Anerkennung der nach eIDAS notifizierten nationalen eID-Systeme vor und ermöglicht es Inhabern deutscher eIDs, in jedem EU-Mitgliedstaat auf öffentliche Dienste zuzugreifen.
- **Grundgesetz Artikel 2 Abs. 1 in Verbindung mit Artikel 1 Abs. 1 -- Recht auf informationelle Selbstbestimmung:** Vom Bundesverfassungsgericht in der Volkszählungsentscheidung (BVerfGE 65, 1, 1983) anerkannt, bietet dieses verfassungsmäßige Recht den Grundlagensatz für die deutsche Politik der digitalen Identität und verlangt, dass Einzelpersonen die Kontrolle über die Erhebung, Verarbeitung und Verwendung ihrer personenbezogenen Daten, einschließlich Identitätsdaten, behalten.

### Wesentliche Grundsätze

Der deutsche Ansatz für digitale Identität ist durch mehrere unterscheidende Merkmale gekennzeichnet:

1. **Privacy by Design:** Das deutsche eID-System wurde von Anfang an mit Datenminimierungsprinzipien konzipiert und ermöglicht selektive Attributoffenlegung (pseudonyme Altersverifizierung, Adressverifizierung ohne Namensoffenlegung usw.). Dies steht im Gegensatz zu Systemen, die für jede Transaktion vollständige Identitätsnachweise übermitteln.

2. **Dezentrale Architektur:** Deutschland hat zentralen Identitätsdatenbanken widerstanden und speichert stattdessen Identitätsdaten auf der verteilten chipbasierten Infrastruktur einzelner Personalausweise. Dieser dezentrale Ansatz spiegelt verfassungsrechtliche Bedenken hinsichtlich zentralisierter staatlicher Überwachungskapazitäten wider.

3. **Herausforderung der geringen eID-Akzeptanz:** Trotz der technischen Raffinesse des deutschen eID-Systems sind die Akzeptanzraten historisch niedrig (geschätzt auf 10-15 % der berechtigten Karteninhaber, die die eID-Funktion ab 2024 aktiv nutzen), was auf die begrenzte Verfügbarkeit kompatibler Dienste, Hindernisse bei der Benutzererfahrung und die Bequemlichkeit alternativer Identifikationsmethoden zurückzuführen ist.

4. **EUDI-Wallet-Implementierung:** Die deutsche Bundesregierung entwickelt durch das BMI und das BSI die nationale EUDI-Wallet-Implementierung ("Smart-eID" und die breitere EUDI-Wallet-Initiative) und zielt darauf ab, die bestehende eID-Infrastruktur mit der neuen europäischen Wallet-Architektur zu integrieren.

### Bemerkenswerte Fälle

- **Volkszählungsentscheidung des Bundesverfassungsgerichts (BVerfGE 65, 1, 1983):** Die grundlegende Entscheidung, die das Recht auf informationelle Selbstbestimmung etabliert, das weiterhin die gesamte deutsche Politik der digitalen Identität prägt. Das Gericht entschied, dass Einzelpersonen in der Lage sein müssen, die Offenlegung und Nutzung ihrer personenbezogenen Daten zu bestimmen, und dass eine umfassende Profilbildung durch Datenverknüpfung die Menschenwürde bedroht.
- **ID-Aufbewahrungsentscheidung des Bundesverfassungsgerichts (BVerfGE 155, 119, 2020):** Das Gericht bestätigte die obligatorische Aufnahme von Fingerabdrücken in deutsche Personalausweise (in Umsetzung der Verordnung (EU) 2019/1157), legte aber strenge Grenzen für die Speicherung, den Zugriff und die Verwendung biometrischer Daten fest und verlangte, dass Fingerabdruckdaten ausschließlich auf dem Kartenchip und nicht in zentralen Datenbanken gespeichert werden.
- **BSI-Smart-eID-Sicherheitsbewertung (2024):** Das BSI führte eine Sicherheitsbewertung der Smart-eID-Lösung durch (die eID-Anmeldeinformationen im Secure Element des Smartphones speichert, anstatt die physische Karte zu erfordern), zertifizierte sie auf der Vertrauensstufe "substanziell" nach eIDAS und identifizierte Bedingungen für das Erreichen der Stufe "hoch".
- **Hamburger DPA-Video-Identifizierungsentscheidung (2023):** Der Hamburger Beauftragte für Datenschutz entschied, dass Videoidentifizierungsverfahren (VideoIdent), die von Banken und Telekommunikationsanbietern für die Fern-Identitätsprüfung verwendet werden, den Anforderungen der DSGVO an Transparenz und Datenminimierung entsprechen müssen, und untersagte die Aufbewahrung vollständiger Videoaufzeichnungen über die Verifizierungstransaktion hinaus.

## EGMR / EU-Rahmen

### Konventionsartikel

Die Europäische Menschenrechtskonvention bietet wesentliche Schutzbestimmungen, die auf digitale Identitätssysteme anwendbar sind:

- **Artikel 8 -- Recht auf Achtung des Privat- und Familienlebens:** Digitale Identitätssysteme beinhalten von Natur aus die Erhebung und Verarbeitung personenbezogener Daten, was den Schutz von Artikel 8 berührt. Der EGMR hat festgestellt, dass die Speicherung personenbezogener Daten durch Behörden, einschließlich biometrischer Daten, einen Eingriff in die Rechte aus Artikel 8 darstellt, der die Verhältnismäßigkeitsanforderungen von Artikel 8 Abs. 2 erfüllen muss. Wesentliche Rechtsprechung:
  - **S. und Marper gegen Vereinigtes Königreich (Große Kammer, 2008, Beschwerden Nr. 30562/04):** Das Gericht entschied, dass die pauschale Aufbewahrung von DNA-Profilen und Fingerabdrücken von Personen, die keiner Straftat überführt wurden, gegen Artikel 8 verstieß, und stellte fest, dass die Aufbewahrung biometrischer Daten verhältnismäßig sein und angemessenen Schutzmaßnahmen unterliegen muss.
  - **Gaughran gegen Vereinigtes Königreich (2020, Beschwerde Nr. 45245/15):** Das Gericht erweiterte die Grundsätze von S. und Marper auf verurteilte Personen und stellte fest, dass die unbefristete Aufbewahrung biometrischer Daten ohne periodische Überprüfung gegen Artikel 8 verstieß.
- **Artikel 14 -- Verbot der Diskriminierung:** Digitale Identitätssysteme, die Hindernisse für marginalisierte Bevölkerungen schaffen (ältere Menschen, Menschen mit Behinderungen, undokumentierte Personen, ethnische Minderheiten), können in Verbindung mit Artikel 8 oder anderen materiellen Rechten gegen Artikel 14 verstoßen.
- **Artikel 3 -- Verbot der Folter und unmenschlicher Behandlung:** Relevant in extremen Fällen, in denen die Verweigerung einer digitalen Identität zum Ausschluss von wesentlichen Diensten führt, was möglicherweise erniedrigender Behandlung gleichkommt.

### EU-Gesetzgebungsrahmen

- **eIDAS 2.0 (Verordnung (EU) 2024/1183):** Die überarbeitete eIDAS-Verordnung stellt die ehrgeizigste Initiative der EU für digitale Identität dar:
  - **Europäische Brieftasche für die digitale Identität (EUDI Wallet):** Artikel 5a verlangt von den Mitgliedstaaten, EUDI-Wallets anzubieten, die es Bürgern und Einwohnern ermöglichen: Identitätsattribute sicher zu speichern und selektiv offenzulegen; qualifizierte elektronische Signaturen zu erstellen; sich bei Online-Diensten zu authentifizieren; und verifizierbare Berechtigungsnachweise (Diplome, Lizenzen, Genehmigungen) zu speichern.
  - **Vertrauensstufen:** Artikel 8 legt drei Vertrauensstufen (niedrig, substanziell, hoch) für elektronische Identifikationssysteme fest, wobei das EUDI-Wallet die Stufe "hoch" für Regierungsdienste unterstützen muss.
  - **Eindeutige Identifikation:** Artikel 11a führt einen verpflichtenden Mindestdatensatz "Personenidentifikationsdaten" für die grenzüberschreitende Identifikation ein, während die nationale Wahl bei eindeutigen Identifikatoren respektiert wird.
  - **Datenschutz und Datenschutz:** Artikel 5a Abs. 16-17 verankern Privacy-by-Design-Grundsätze und verlangen, dass Wallets selektive Offenlegung ermöglichen, Tracking durch Aussteller und Verifizierer verhindern und sicherstellen, dass Wallet-Anbieter nicht auf Nutzertransaktionsdaten zugreifen können.
  - **Qualifizierte Vertrauensdienste:** eIDAS 2.0 erweitert den Rahmen für qualifizierte Vertrauensdienste, einschließlich qualifizierter elektronischer Bescheinigungen von Attributen (QEAA), die verifizierte Berechtigungsnachweise ermöglichen, die von vertrauenswürdigen Behörden ausgestellt werden.
- **Verordnung (EU) 2019/1157 -- Stärkung der Sicherheit von ID-Karten:** Verlangt von allen EU-Mitgliedstaaten, Identitätskarten mit einem kontaktlosen Chip auszustellen, der ein Gesichtsbild und zwei Fingerabdrücke enthält und die ICAO-Standards erfüllt. Die volle Einhaltung war bis zum 3. August 2021 erforderlich, mit einer Übergangsfrist für bestehende Karten.
- **DSGVO (Verordnung (EU) 2016/679):** Die DSGVO bietet den übergreifenden Datenschutzrahmen für die Verarbeitung digitaler Identitäten:
  - **Artikel 9 -- Besondere Datenkategorien:** Biometrische Daten, die zum Zweck der eindeutigen Identifizierung einer natürlichen Person verwendet werden, werden als besondere Datenkategorie klassifiziert und erfordern eine Ausnahme nach Artikel 9 Abs. 2 für eine rechtmäßige Verarbeitung.
  - **Artikel 25 -- Datenschutz durch Technikgestaltung:** Verlangt, dass digitale Identitätssysteme Datenschutzgrundsätze (Minimierung, Zweckbindung, Speicherbegrenzung) bereits in der Entwurfsphase umsetzen.
  - **Artikel 35 -- Datenschutz-Folgenabschätzung:** Die Verarbeitung biometrischer Daten zu Identifikationszwecken löst die obligatorische DSFA-Anforderung aus.

### Wesentliche Rechtsprechung und Entscheidungen

- **S. und Marper gegen Vereinigtes Königreich (EGMR, Große Kammer, 2008):** Die wegweisende Entscheidung, die feststellt, dass die pauschale Aufbewahrung biometrischer Daten gegen Artikel 8 EMRK verstößt, mit direkten Auswirkungen auf die Gestaltung nationaler Identitätsdatenbanken.
- **EuGH, Verbundene Rechtssachen C-511/18, C-512/18 und C-520/18, La Quadrature du Net (2020):** Der EuGH entschied, dass die generelle und unterschiedslose Aufbewahrung identitätsbezogener Metadaten gegen die EU-Grundrechte verstößt, und etablierte Grundsätze, die auf die Protokollierung digitaler Identitätstransaktionen anwendbar sind.
- **EuGH, Rechtssache C-205/21, Ministerstvo na vatreshnite raboti (2023):** Der EuGH entschied über die Bedingungen für die polizeiliche Nutzung biometrischer Identifikationsdatenbanken und verlangte, dass der Zugriff auf Fälle einer echten und gegenwärtigen oder vorhersehbaren ernsthaften Bedrohung beschränkt, verhältnismäßig sowie einer gerichtlichen oder unabhängigen Überprüfung unterworfen sein muss.
- **EDSA-Stellungnahme zum EUDI-Wallet (2024):** Der Europäische Datenschutzausschuss verabschiedete eine Stellungnahme zu den Durchführungsrechtsakten für das EUDI-Wallet und betonte die Notwendigkeit einer starken Unverknüpfbarkeit (Verhinderung der Korrelation von Wallet-Transaktionen), der Nutzereinwilligung für jede Offenlegung und des Verbots zentraler Transaktionsprotokollierung durch Wallet-Anbieter.

## Vergleichende Analyse

| Dimension | Südkorea | Vereinigte Staaten | Deutschland / EU | EGMR-Rahmen |
|-----------|----------|-------------------|------------------|-------------|
| **Systemarchitektur** | Zentralisierte RRN; Übergang zu Hybrid (Mobil + DID) | Dezentralisiert (staatlich ausgegeben); keine nationale ID | Dezentralisiert (kartenbasiertes eID); EUDI-Wallet | Menschenrechtsbeschränkungen für die Systemgestaltung |
| **Biometrische Integration** | Umfangreich (Fingerabdrücke, Gesichtserkennung) | Begrenzt; staatabhängig; BIPA-Beschränkungen | Verpflichtende Fingerabdrücke (EU-Verordnung); eID-Chip | Verhältnismäßigkeitsanforderungen (S. und Marper) |
| **Datenschutzmodell** | PIPA-reguliert; RRN-Beschränkungen nach 2014 | Fragmentiert; kein umfassendes Bundesdatenschutzgesetz | Verfassungsrechtliche informationelle Selbstbestimmung; DSGVO | Artikel 8 Verhältnismäßigkeit; Datenminimierung |
| **SSI/Dezentralisierte ID** | Aktive DID-Pilotprogramme; staatlich unterstützt | Begrenztes Bundesengagement; Pilotprojekte des privaten Sektors | IDunion-Pilot; EUDI-Wallet mit SSI-Prinzipien | N/A |
| **Digitale Inklusion** | Hohe digitale Durchdringung (95 %+); Bedenken hinsichtlich des Zugangs für ältere Menschen | Erhebliche digitale Kluft; Gerechtigkeit bei der Identitätsprüfung | Geringe eID-Akzeptanz trotz universeller Kartenausstellung | Artikel 14 Nicht-Diskriminierungsverpflichtungen |
| **Grenzüberschreitende Anerkennung** | Bilaterale Abkommen (z. B. mit Japan, EU) | REAL ID für inländisch; Reisepass für international | eIDAS-gegenseitige Anerkennung; EUDI-Wallet grenzüberschreitend | N/A |

## Zeitleiste

| Jahr | Rechtsordnung | Meilenstein |
|------|---------------|-------------|
| 1962 | Südkorea | Resident Registration Act erlassen; RRN-System etabliert |
| 1974 | USA | Privacy Act erlassen, regelt Identitätsaufzeichnungen von Bundesbehörden |
| 1983 | Deutschland | Volkszählungsentscheidung des Bundesverfassungsgerichts (BVerfGE 65, 1) |
| 1999 | Südkorea | Electronic Signature Act etabliert PKI-basierte digitale Zertifikate |
| 2005 | USA | REAL ID Act erlassen |
| 2010 | Deutschland | Neuer Personalausweis mit eID-Funktion eingeführt |
| 2014 | EU | eIDAS-Verordnung angenommen (Verordnung (EU) Nr. 910/2014) |
| 2014 | Südkorea | PIPA geändert, um die RRN-Erhebung durch private Stellen zu beschränken |
| 2015 | Südkorea | Verfassungsgerichtliche RRN-Schutzentscheidung |
| 2017 | Deutschland | Onlinezugangsgesetz (OZG) erlassen |
| 2018 | EU | eIDAS gegenseitige Anerkennungspflicht tritt in Kraft |
| 2019 | EU | Verordnung (EU) 2019/1157 zur Stärkung der Sicherheit von ID-Karten angenommen |
| 2020 | Südkorea | Electronic Signature Act geändert; PKI-Monopol abgeschafft |
| 2020 | EGMR | Gaughran gegen UK: unbefristete biometrische Aufbewahrung verstößt gegen Artikel 8 |
| 2021 | EU | EUDI-Wallet-Vorschlag angekündigt (Juni) |
| 2023 | Südkorea | DID-Pilotprogramme über Government24 gestartet |
| 2023 | Deutschland | Hamburger DPA-VideoIdent-Entscheidung |
| 2024 | EU | eIDAS 2.0 angenommen (Verordnung (EU) 2024/1183) |
| 2024 | USA | NIST SP 800-63-4 (Digital Identity Guidelines Revision 4) veröffentlicht |
| 2024 | Deutschland | BSI-Smart-eID-Sicherheitszertifizierung |
| 2024 | EU | EDSA-Stellungnahme zu EUDI-Wallet-Durchführungsrechtsakten |
| 2025 | USA | REAL ID-Volldurchsetzung beginnt (7. Mai) |
| 2026 | EU | Mitgliedstaaten müssen Bürgern und Einwohnern EUDI-Wallets anbieten |

## Quellen

1. Verordnung (EU) 2024/1183 des Europäischen Parlaments und des Rates zur Änderung der Verordnung (EU) Nr. 910/2014 hinsichtlich der Schaffung eines europäischen Rahmens für eine digitale Identität (eIDAS 2.0), ABl. L, 2024.
2. Verordnung (EU) Nr. 910/2014 über elektronische Identifizierung und Vertrauensdienste (eIDAS), ABl. L 257, 28. August 2014.
3. Südkorea, Resident Registration Act (주민등록법), in der geänderten Fassung.
4. Südkorea, Personal Information Protection Act (개인정보보호법), in der geänderten Fassung.
5. Südkorea, Electronic Signature Act (전자서명법), in der Fassung von 2020.
6. Vereinigte Staaten, REAL ID Act of 2005, Pub. L. 109-13, Division B.
7. NIST, Special Publication 800-63-4, "Digital Identity Guidelines", 2024.
8. Personalausweisgesetz (PAuswG), Bundesgesetzblatt I.
9. Onlinezugangsgesetz (OZG), Bundesgesetzblatt I, 2017; OZG 2.0, 2024.
10. Verordnung (EU) 2019/1157 zur Stärkung der Sicherheit der Personalausweise und Aufenthaltsdokumente, ABl. L 188, 12. Juli 2019.
11. EGMR, S. und Marper gegen Vereinigtes Königreich, Beschwerden Nrn. 30562/04 und 30566/04, Große Kammer, 4. Dezember 2008.
12. EGMR, Gaughran gegen Vereinigtes Königreich, Beschwerde Nr. 45245/15, 13. Februar 2020.
13. BVerfG, Volkszählungsurteil, BVerfGE 65, 1, 15. Dezember 1983.
14. BVerfG, Personalausweis-Fingerabdruck-Entscheidung, BVerfGE 155, 119, 2020.
15. EuGH, Verbundene Rechtssachen C-511/18, C-512/18, C-520/18, La Quadrature du Net und andere, 6. Oktober 2020.
16. EuGH, Rechtssache C-205/21, Ministerstvo na vatreshnite raboti, 26. Januar 2023.
17. EDSA, "Stellungnahme zu den Durchführungsrechtsakten für das EUDI-Wallet", 2024.
18. Verfassungsgericht Südkorea, Entscheidung 2011헌마731, 2015.
19. Personal Information Protection Commission Südkorea, "LG U+ Datenpannen-Entscheidung", 2023.
20. Rosenbach v. Six Flags Entertainment Corp., 2019 IL 123186 (Ill. 2019).
