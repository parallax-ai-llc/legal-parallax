---
id: "encryption-law-comparison"
name: "Verschlüsselung und Hintertüren: Rechtsvergleichende Analyse"
date: "2026-03-11"
nationality: "Vergleichend"
occupation: ["Technologierecht", "Recht der nationalen Sicherheit", "Datenschutzrecht"]
image: "/images/legal-comparison.jpg"
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/Encryption"
lastUpdated: "2026-03-11"
---

## Zusammenfassung

Verschlüsselung und Hintertüren (암호화/백도어) -- die rechtlichen und politischen Rahmenbedingungen für die Verwendung kryptografischer Systeme zum Schutz von Kommunikation und Daten sowie staatliche Forderungen nach Ausnahmezugriff auf verschlüsselte Informationen -- stellen eine der dauerhaftesten Spannungen im Technologierecht zwischen Sicherheit, Privatsphäre und Strafverfolgungskapazitäten dar. Südkorea regelt die Verschlüsselung durch das Act on the Development of Cloud Computing and Protection of Users (클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률) und das Personal Information Protection Act (PIPA, 개인정보 보호법), das die Verschlüsselung sensibler personenbezogener Daten und persönlicher Identifikationsnummern vorschreibt, während der National Intelligence Service (국가정보원, NIS) kryptografische Standards durch das Korea Cryptographic Module Validation Program (KCMVP) überwacht und der Communications Security Act (통신비밀보호법) den Rahmen für rechtmäßiges Abfangen von Kommunikation mit gerichtlicher Genehmigung schafft. Die Vereinigten Staaten haben seit den 1990er Jahren wiederkehrende "Krypto-Kriege" erlebt, wobei der Communications Assistance for Law Enforcement Act (CALEA, 47 U.S.C. Sections 1001-1010, 1994) Telekommunikationsbetreiber verpflichtet, Systeme so zu gestalten, dass eine rechtmäßige Abhörfähigkeit ermöglicht wird, der All Writs Act (28 U.S.C. Section 1651) im wegweisenden Streit Apple v. FBI (2016) über die erzwungene Entschlüsselung des iPhones des San-Bernardino-Schützen angerufen wurde und der EARN IT Act (in mehreren Kongressen erneut eingebracht) die Section-230-Schutzbestimmungen für Plattformen bedroht, die Ende-zu-Ende-Verschlüsselung ohne Scanning-Mechanismen einsetzen; der Vierte Verfassungszusatz bietet verfassungsrechtliche Beschränkungen für den staatlichen Zugriff auf verschlüsselte Daten. Der deutsche Rechtsrahmen umfasst das Telekommunikationsgesetz (TKG), das Telekommunikationsanbieter verpflichtet, eine rechtmäßige Abhörfähigkeit aufrechtzuerhalten, aber keine Verschlüsselungs-Hintertüren vorschreibt, das Bundeskriminalamtgesetz (BKAG), das die Quellen-Telekommunikationsüberwachung (Quellen-TKÜ) durch staatlich eingesetzte Überwachungssoftware ermöglicht, und das BSI-Gesetz, das das Bundesamt für Sicherheit in der Informationstechnik (BSI) als Behörde für Verschlüsselungsstandards etabliert. Auf EU-Ebene hat der Europäische Gerichtshof für Menschenrechte in Podchasov gegen Russland (2024) anerkannt, dass Verschlüsselung die Rechte aus Artikel 8 schützt, die vorgeschlagene Verordnung gegen sexuellen Kindesmissbrauch (CSAR) hat eine erbitterte Debatte über das clientseitige Scannen verschlüsselter Kommunikation ausgelöst, und der EU Cybersecurity Act fördert starke Verschlüsselung als Sicherheitsbasislinie.

## Vergleichstabelle

| Element | Südkorea | Vereinigte Staaten | Deutschland | EMRK / EU |
|---------|----------|--------------------|-------------|-----------|
| **Verschlüsselungspflicht** | Erforderlich für personenbezogene Daten (PIPA); KCMVP-Standards | Keine allgemeine Pflicht; sektorspezifisch (HIPAA, GLBA) | DSGVO Art. 32 (angemessene Sicherheit); BSI-Standards | DSGVO Art. 32; NIS2-Richtlinie Verschlüsselungsanforderungen |
| **Verpflichtung zum rechtmäßigen Abhören** | Communications Security Act; gerichtliche Genehmigung | CALEA; Abhörfähigkeit der Anbieter erforderlich | TKG § 170; Abhörfähigkeit erforderlich | EU-Verordnung über elektronische Beweismittel (2023/1543) |
| **Hintertürpflicht** | Keine ausdrückliche Pflicht | Keine Pflicht; umstritten (CALEA, EARN IT) | Keine Pflicht; von Regierungspolitik abgelehnt | Keine Pflicht; EMRK lehnt allgemeine Schwächung ab |
| **Erzwungene Entschlüsselung** | Gerichtlich angeordnet nach Strafverfahrensrecht | All Writs Act; Grenzen aus dem Fünften Verfassungszusatz | StPO-Bestimmungen; Quellen-TKÜ als Alternative | Nationales Recht variiert; EMRK-Verhältnismäßigkeit gilt |
| **Schlüsselhinterlegung** | Nicht erforderlich | Vorgeschlagen und abgelehnt (Clipper Chip, 1993) | Nicht erforderlich | Nicht erforderlich |
| **Exportkontrollen** | Umsetzung des Wassenaar-Arrangements | EAR (Dual-Use); Wassenaar-Arrangement | EU-Dual-Use-Verordnung (2021/821); Wassenaar | EU-Dual-Use-Verordnung (2021/821) |
| **Behörde für kryptografische Standards** | NIS (KCMVP); KISA | NIST; NSA (klassifizierte Standards) | BSI (Bundesamt für Sicherheit in der Informationstechnik) | ENISA (EU-Agentur für Cybersicherheit) |

## Südkorea

### Rechtsrahmen

Südkoreas Ansatz zur Verschlüsselung balanciert verbindliche Datenschutzverschlüsselungsanforderungen mit Bestimmungen zum rechtmäßigen Zugang für nationale Sicherheit und Strafverfolgung.

**Personal Information Protection Act (PIPA):** PIPA schreibt die Verschlüsselung personenbezogener Daten bei der Übertragung und im Ruhezustand vor. Artikel 24-2 verlangt die Verschlüsselung von Wohnsitzregistrierungsnummern (주민등록번호), und die technischen und administrativen Schutzmaßnahmenleitlinien der PIPC legen Mindestverschlüsselungsstandards fest (AES-128 oder höher für ruhende Daten; TLS 1.2 oder höher für übertragene Daten). Die Nichteinhaltung unterliegt Verwaltungsbußgeldern.

**Korea Cryptographic Module Validation Program (KCMVP):** Verwaltet vom National Intelligence Service (NIS, 국가정보원), legt KCMVP Validierungsanforderungen für kryptografische Module fest, die in staatlichen Informationssystemen verwendet werden. Das Programm ist analog zum US-CMVP/FIPS-140-Rahmen und erfordert die Verwendung von in Korea entwickelten kryptografischen Algorithmen (SEED, ARIA, LEA, HIGHT) neben international anerkannten Algorithmen (AES, RSA).

### Rechtmäßiges Abfangen

**Communications Security Act (통신비밀보호법):** Dieses Gesetz schafft den rechtlichen Rahmen für das rechtmäßige Abfangen von Kommunikation. Wesentliche Bestimmungen:

- **Gerichtliche Genehmigung:** Das Echtzeit-Abfangen von Kommunikation erfordert eine Genehmigung des Seoul High Court oder bestimmter Bezirksgerichte, wobei der Antrag das Ziel, den Zweck, den Umfang und die Dauer angeben muss.
- **Dauerbegrenzungen:** Die Abfanggenehmigung ist auf 2 Monate begrenzt, verlängerbar um weitere 2-Monats-Perioden bei Nachweis fortbestehender Notwendigkeit.
- **Nachträgliche Benachrichtigung:** Das Ziel des Kommunikationsabfangens muss grundsätzlich nach Abschluss der Ermittlungen benachrichtigt werden, obwohl die Benachrichtigung in nationalen Sicherheitsfällen aufgeschoben werden kann.
- **Verpflichtungen der Telekommunikationsanbieter:** Diensteanbieter müssen mit rechtmäßigen Abhöranordnungen kooperieren, einschließlich der Bereitstellung technischer Einrichtungen für das Abfangen.

### Position zur Verschlüsselungspolitik

Südkorea hat keine Gesetzgebung erlassen, die Verschlüsselungs-Hintertüren oder Schlüsselhinterlegungssysteme vorschreibt. Die Politik der Regierung favorisiert starke Verschlüsselung zum Datenschutz, während sie den rechtmäßigen Zugang über rechtliche Verfahren gegenüber Diensteanbietern und, wo erforderlich, über forensische Fähigkeiten an Endpunkten aufrechterhält, anstatt kryptografische Protokolle zu schwächen.

## Vereinigte Staaten

### Rechtsrahmen

Die Vereinigten Staaten haben die längste und öffentlichste Debatte über Verschlüsselungspolitik erlebt, von den "Krypto-Kriegen" der 1990er Jahre bis zu aktuellen Streitigkeiten über Ende-zu-Ende-Verschlüsselung.

**Communications Assistance for Law Enforcement Act (CALEA, 47 U.S.C. Sections 1001-1010, 1994):** CALEA verlangt von Telekommunikationsbetreibern, ihre Geräte, Anlagen und Dienste so zu gestalten, dass eine genehmigte elektronische Überwachung durchgeführt werden kann. Betreiber müssen in der Lage sein, Kommunikationen und Anrufidentifizierungsinformationen zu isolieren und abzufangen. CALEA bestimmt jedoch ausdrücklich (Section 1002(b)(3)), dass Betreiber nicht für die Entschlüsselung verschlüsselter Kommunikation verantwortlich sind, es sei denn, der Betreiber stellte die Verschlüsselung bereit und verfügt über die erforderlichen Informationen zur Entschlüsselung.

**Apple v. FBI (2016):** Der prominenteste Verschlüsselungsstreit entstand, als das FBI eine gerichtliche Anordnung nach dem All Writs Act (28 U.S.C. Section 1651) beantragte, die Apple verpflichten sollte, Software zu erstellen, die Sicherheitsfunktionen auf dem iPhone des San-Bernardino-Schützen Syed Rizwan Farook umgehen würde. Apple widersetzte sich und argumentierte, dass die Erstellung eines Hintertür-Tools die Sicherheit aller iPhone-Nutzer beeinträchtigen würde. Der Fall wurde gegenstandslos, als das FBI über ein Drittanbieter-Tool Zugang erhielt, doch die zugrunde liegenden rechtlichen und politischen Fragen bleiben ungelöst.

### Verfassungsrechtlicher Rahmen

**Vierter Verfassungszusatz:** Der Schutz des Vierten Verfassungszusatzes vor unangemessenen Durchsuchungen und Beschlagnahmen schränkt den staatlichen Zugriff auf verschlüsselte Daten ein. In Riley v. California (573 U.S. 373, 2014) entschied der Oberste Gerichtshof einstimmig, dass die Polizei in der Regel einen Durchsuchungsbefehl benötigt, um die digitalen Inhalte eines Mobiltelefons zu durchsuchen. In Carpenter v. United States (585 U.S. 296, 2018) entschied der Gerichtshof, dass der Zugriff auf historische Mobilfunkstandortdaten eine durchsuchungsbefehlspflichtige Durchsuchung darstellt.

**Fünfter Verfassungszusatz:** Das Privileg gegen Selbstbelastung des Fünften Verfassungszusatzes setzt unsichere Grenzen für die erzwungene Entschlüsselung. Gerichte sind uneins darüber, ob die Pflicht eines Verdächtigen, ein Passwort oder eine biometrische Entsperrung bereitzustellen, eine durch den Fünften Verfassungszusatz geschützte "Aussage" darstellt. In In re Grand Jury Subpoena Duces Tecum (670 F.3d 1335, 11. Cir. 2012) entschied das Gericht, dass erzwungene Entschlüsselung eine durch den Fünften Verfassungszusatz geschützte aussagende Mitteilung darstellen kann.

### EARN IT Act

Der Eliminating Abusive and Rampant Neglect of Interactive Technologies Act (EARN IT Act), in mehreren Kongressen eingebracht, würde die Section-230-Immunität von Plattformen an die Einhaltung von Best Practices knüpfen, die von einer Kommission festgelegt werden, möglicherweise einschließlich Anforderungen zum Inhaltsscanning, die mit Ende-zu-Ende-Verschlüsselung unvereinbar wären. Kritiker argumentieren, der Act würde faktisch Verschlüsselungs-Hintertüren vorschreiben; Befürworter argumentieren, er ziele auf das Versagen der Plattformen ab, Material über sexuellen Kindesmissbrauch zu erkennen. Das Gesetz wurde bis 2026 nicht verabschiedet.

### Exportkontrollen

Die Export Administration Regulations (EAR, 15 C.F.R. Parts 730-774) regulieren den Export von Verschlüsselungstechnologie. Nach der Liberalisierung der "Krypto-Kriege" Ende der 1990er Jahre ist die meiste kommerzielle Verschlüsselungssoftware unter der Lizenzausnahme ENC exportfähig. Das Bureau of Industry and Security (BIS) verwaltet diese Kontrollen und setzt das Wassenaar-Arrangement zu Exportkontrollen für Dual-Use-Technologie um.

## Deutschland

### Rechtsrahmen

Deutschland hat eine prinzipielle Position zugunsten starker Verschlüsselung eingenommen und gleichzeitig alternative Mechanismen für den rechtmäßigen Zugang entwickelt.

**Verschlüsselungspolitik der Bundesregierung:** Die Digitale Agenda und die Cybersicherheitsstrategie Deutschlands haben die Bedeutung starker Verschlüsselung für Bürger, Unternehmen und Regierung konsequent bekräftigt. Das Bundesministerium des Innern hat erklärt, Deutschland solle "Verschlüsselungsstandort Nr. 1" der Welt werden. Diese Politik lehnt verbindliche Hintertüren ab und unterstützt zugleich rechtmäßigen Zugang durch andere Mittel.

**Telekommunikationsgesetz (TKG):** § 170 TKG verpflichtet Telekommunikationsdiensteanbieter, technische Fähigkeiten zur rechtmäßigen Telekommunikationsüberwachung (TKÜ) aufrechtzuerhalten. Diese Verpflichtung gilt jedoch für das eigene Netz des Anbieters und verlangt von Anbietern nicht, die von Nutzern oder Drittanbieter-Anwendungen eingesetzte Ende-zu-Ende-Verschlüsselung zu brechen oder zu schwächen.

### Quellen-Telekommunikationsüberwachung (Quellen-TKÜ)

**Bundeskriminalamtgesetz (BKAG) und Strafprozessordnung (StPO):** Das deutsche Recht ermächtigt zur Quellen-Telekommunikationsüberwachung (Quellen-TKÜ) -- dem Einsatz staatlicher Überwachungssoftware (üblicherweise "Staatstrojaner" genannt) auf dem Gerät einer Zielperson, um Kommunikation vor der Verschlüsselung oder nach der Entschlüsselung abzufangen. Dieser Ansatz akzeptiert die Stärke der Ende-zu-Ende-Verschlüsselung, während er auf Informationen am Endpunkt zugreift.

**StPO § 100a Abs. 1 Nr. 3:** Ermächtigt zur Quellen-TKÜ, wenn bestimmte Tatsachen den Verdacht einer im Gesetz aufgeführten besonders schweren Straftat begründen und die Erforschung der Straftat sonst wesentlich erschwert oder aussichtslos wäre.

**BVerfG-Entscheidungen zu Online-Durchsuchungen:** Das Bundesverfassungsgericht hat sich in zwei wegweisenden Entscheidungen mit staatlichem Hacking befasst:
- **Computer-Grundrecht (BVerfGE 120, 274, 27. Februar 2008):** Das Gericht leitete aus Art. 2 Abs. 1 und Art. 1 Abs. 1 GG ein neues Grundrecht auf Gewährleistung der Vertraulichkeit und Integrität informationstechnischer Systeme ab und legte strenge Verhältnismäßigkeitsanforderungen für den staatlichen Zugriff auf Computersysteme fest.
- **BVerfG, Urteil vom 20. Juli 2021 (Bundespolizeigesetz):** Das Gericht hob Bestimmungen des Bundespolizeigesetzes, die Quellen-TKÜ und Online-Durchsuchungen erlaubten, als unverhältnismäßig auf und forderte spezifischere Gefahrenschwellen und eine verstärkte gerichtliche Kontrolle.

### BSI und Verschlüsselungsstandards

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) entwickelt technische Richtlinien und Empfehlungen für die Verschlüsselung. BSI TR-02102 spezifiziert empfohlene kryptografische Algorithmen und Schlüssellängen für die Nutzung in Regierung und kritischer Infrastruktur. Das BSI empfiehlt durchgängig starke Verschlüsselung ohne Hintertüren als grundlegende Cybersicherheitsmaßnahme.

## EMRK & EU

### Europäischer Gerichtshof für Menschenrechte

**Podchasov gegen Russland (Beschwerde Nr. 33696/19, Urteil vom 13. Februar 2024):** In einem wegweisenden Urteil befand der Gerichtshof, dass die russische Gesetzgebung, die Messaging-Dienste zur Entschlüsselung von Nachrichten für Geheimdienste verpflichtet, gegen Artikel 8 der Konvention verstößt. Der Gerichtshof entschied, dass die Forderung nach Schwächung der Verschlüsselung für alle Nutzer, um die Überwachung bestimmter Ziele zu ermöglichen, in einer demokratischen Gesellschaft nicht "notwendig" sei. Wesentliche Feststellungen:

- Verschlüsselung schützt die Privatsphäre der Korrespondenz und damit auch andere Konventionsrechte einschließlich der Meinungsfreiheit.
- Die Forderung nach Entschlüsselungsfähigkeit kommt einer Schwächung der Verschlüsselung für alle Nutzer gleich, was unverhältnismäßig ist.
- Weniger eingriffsintensive Alternativen (gezielte Überwachungsmaßnahmen) existieren und müssen bevorzugt werden.
- Das Fehlen angemessener Schutzvorkehrungen im russischen System verschärfte die Verletzung.

**Telegram-bezogene Fälle:** Die Versuche der russischen Regierung, den Messenger Telegram zu blockieren (2018-2020), nachdem das Unternehmen sich geweigert hatte, Entschlüsselungsschlüssel bereitzustellen, lösten erhebliche EMRK-relevante Rechtsstreitigkeiten aus. Während die Blockade letztlich aufgehoben wurde, ohne dass Telegram Schlüssel bereitstellte, illustrierte die Episode die praktischen und rechtlichen Schwierigkeiten der Durchsetzung von Entschlüsselungspflichten.

### EU-Politik

Die Position der EU zur Verschlüsselung hat sich durch Spannungen zwischen Sicherheitsbehörden und Datenschutzaktivisten entwickelt:

**Resolution des Rates zur Verschlüsselung (Dezember 2020):** Der Rat der EU verabschiedete eine Resolution mit dem Aufruf zu "Sicherheit durch Verschlüsselung und Sicherheit trotz Verschlüsselung", in der die Bedeutung starker Verschlüsselung anerkannt und gleichzeitig "rechtmäßige Zugangs"-Lösungen gefordert wurden. Die Resolution schreckte davor zurück, Hintertüren vorzuschreiben, signalisierte aber politischen Druck für technische Lösungen, die Zugang ermöglichen.

**NIS2-Richtlinie (Richtlinie (EU) 2022/2555):** Die Richtlinie über Netz- und Informationssicherheit verlangt von Einrichtungen in kritischen Sektoren die Umsetzung angemessener Sicherheitsmaßnahmen, wobei Verschlüsselung als zentrale Schutzmaßnahme identifiziert wird. Die Richtlinie fördert Verschlüsselung, anstatt sie zu schwächen.

### Vorgeschlagene Verordnung gegen sexuellen Kindesmissbrauch (CSAR)

Der CSAR-Vorschlag der Europäischen Kommission von 2022 würde Anbieter von Messaging-Diensten verpflichten, CSAM zu erkennen und zu melden, möglicherweise durch clientseitiges Scannen verschlüsselter Nachrichten vor der Verschlüsselung. Dieser Vorschlag stieß auf Widerstand von:

- **Europäischer Datenschutzbeauftragter:** Kritisierte den Vorschlag als unvereinbar mit Grundrechten.
- **Europäisches Parlament:** Modifizierte den Vorschlag erheblich und lehnte ein allgemeines Scannen verschlüsselter Kommunikation ab.
- **Technische Gemeinschaft:** Über 300 Akademiker unterzeichneten einen offenen Brief, in dem sie argumentierten, dass clientseitiges Scannen die Ende-zu-Ende-Verschlüsselung grundlegend untergräbt.

Zum Stand 2026 dauern die Verhandlungen an, wobei das Europäische Parlament für gezielte Alternativen eintritt, die keine Schwächung der Verschlüsselung erfordern.

### EU Cybersecurity Act (Verordnung (EU) 2019/881)

Der Cybersecurity Act etabliert ENISA (EU-Agentur für Cybersicherheit) als ständige EU-Cybersicherheitsagentur und schafft einen europäischen Cybersicherheitszertifizierungsrahmen. Das Gesetz fördert starke Verschlüsselung als grundlegende Sicherheitsmaßnahme, im Einklang mit der Anforderung von Artikel 32 DSGVO an angemessene technische und organisatorische Sicherheitsmaßnahmen.

## Vergleichende Analyse

### Hintertürpflichten

Keine der untersuchten Rechtsordnungen hat eine ausdrückliche Verschlüsselungs-Hintertürpflicht erlassen. Die Vereinigten Staaten kommen dem durch CALEAs Anforderungen an die Abhörfähigkeit und den Streit Apple v. FBI am nächsten. Deutschland hat Hintertüren als Politik ausdrücklich abgelehnt. Das Podchasov-Urteil der EMRK schafft ein erhebliches rechtliches Hindernis für Hintertürpflichten in den 46 Mitgliedstaaten des Europarates. Südkoreas Position lehnt Hintertüren implizit durch die Förderung starker Verschlüsselung zum Datenschutz ab.

### Alternative Zugangsstrategien

Die Rechtsordnungen haben unterschiedliche Strategien für den Zugriff auf verschlüsselte Informationen entwickelt, ohne die Verschlüsselung zu brechen:
- **Deutschland:** Quellen-Telekommunikationsüberwachung (Quellen-TKÜ) mit Zielausrichtung auf Endpunkte.
- **Vereinigte Staaten:** Forensische Tools von Drittanbietern; rechtmäßiges Hacking; erzwungene Offenlegung durch rechtliche Verfahren.
- **Südkorea:** Kooperationspflichten der Anbieter; forensische Techniken.
- **EU:** Vorgeschlagenes clientseitiges Scannen (umstritten); Verordnungen zu elektronischen Beweismitteln.

### Verfassungs-/Menschenrechtliche Beschränkungen

Das deutsche Computer-Grundrecht (Grundrecht auf IT-Systemintegrität) und das Podchasov-Urteil der EMRK bieten die stärksten verfassungs- und menschenrechtlichen Beschränkungen für den staatlichen Zugriff auf verschlüsselte Systeme. Der Vierte und Fünfte Verfassungszusatz der USA bieten erheblichen, aber weniger absoluten Schutz. Der Rahmen des Communications Security Act Südkoreas bietet verfahrensrechtlichen Schutz durch Erfordernisse der gerichtlichen Genehmigung.

### Exportkontrollen

Alle vier Rechtsordnungen nehmen am Wassenaar-Arrangement-Rahmen für Verschlüsselungsexportkontrollen teil, obwohl die Umsetzung variiert. Die USA haben das umfangreichste Exportkontrollregime (EAR). Die EU-Dual-Use-Verordnung (2021/821) harmonisiert die Kontrollen über die Mitgliedstaaten hinweg. Südkorea setzt Wassenaar durch sein Strategic Trade Act um.

## Zeitleiste

| Jahr | Rechtsordnung | Ereignis |
|------|---------------|----------|
| 1993 | Vereinigte Staaten | Clipper-Chip-Schlüsselhinterlegungsvorschlag angekündigt; letztlich aufgegeben |
| 1994 | Vereinigte Staaten | CALEA erlassen; Telekommunikations-Abhörfähigkeit erforderlich |
| 1999 | Vereinigte Staaten | Verschlüsselungsexportkontrollen nach den "Krypto-Kriegen" liberalisiert |
| 2008 | Deutschland | BVerfG: Grundrecht auf IT-Systemintegrität etabliert |
| 2014 | Vereinigte Staaten | Riley v. California: Durchsuchungsbefehl für Mobiltelefondurchsuchungen erforderlich |
| 2016 | Vereinigte Staaten | Streit Apple v. FBI um San-Bernardino-iPhone; gegenstandslos durch Drittzugriff |
| 2018 | Vereinigte Staaten | Carpenter v. United States: Durchsuchungsbefehl für CSLI erforderlich |
| 2018 | Russland | Telegram blockiert, nachdem es sich weigerte, Entschlüsselungsschlüssel bereitzustellen |
| 2020 | EU | Resolution des Rates zur Verschlüsselung: "Sicherheit durch und trotz Verschlüsselung" |
| 2021 | Deutschland | BVerfG hebt Quellen-TKÜ-Bestimmungen des Bundespolizeigesetzes auf |
| 2022 | EU | NIS2-Richtlinie verabschiedet; fördert Verschlüsselung als Sicherheitsmaßnahme |
| 2022 | EU | CSAR vorgeschlagen; Debatte über clientseitiges Scannen beginnt |
| 2024 | EMRK | Podchasov gegen Russland: verpflichtende Entschlüsselung verstößt gegen Artikel 8 |
| 2024 | Südkorea | PIPC verschärft Verschlüsselungsanforderungen für personenbezogene Daten |

## Quellen

### Südkorea
- Communications Security Act (통신비밀보호법). Verfügbar unter: https://elaw.klri.re.kr/
- Personal Information Protection Act (개인정보 보호법). Verfügbar unter: https://elaw.klri.re.kr/
- NIS, Korea Cryptographic Module Validation Program (KCMVP). Verfügbar unter: https://www.nis.go.kr/

### Vereinigte Staaten
- Communications Assistance for Law Enforcement Act (CALEA), 47 U.S.C. Sections 1001-1010. Verfügbar unter: https://www.law.cornell.edu/uscode/text/47/chapter-9/subchapter-I
- Riley v. California, 573 U.S. 373 (2014).
- Carpenter v. United States, 585 U.S. 296 (2018).
- In re Search of Apple iPhone, No. ED 15-0451M (C.D. Cal. 2016) (Apple v. FBI).

### Deutschland
- BVerfG, BVerfGE 120, 274 (Computer-Grundrecht), 27. Februar 2008.
- Telekommunikationsgesetz (TKG), § 170. Verfügbar unter: https://www.gesetze-im-internet.de/tkg_2021/
- Strafprozessordnung (StPO), § 100a. Verfügbar unter: https://www.gesetze-im-internet.de/stpo/
- BSI TR-02102, "Kryptographische Verfahren". Verfügbar unter: https://www.bsi.bund.de/

### EMRK & EU
- Podchasov gegen Russland, Beschwerde Nr. 33696/19, EGMR-Urteil vom 13. Februar 2024.
- Rat der EU, "Resolution zur Verschlüsselung", 14. Dezember 2020.
- Richtlinie (EU) 2022/2555 (NIS2). Verfügbar unter: https://eur-lex.europa.eu/eli/dir/2022/2555/oj
- Verordnung (EU) 2019/881 (Cybersecurity Act). Verfügbar unter: https://eur-lex.europa.eu/eli/reg/2019/881/oj
