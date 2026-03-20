// Shared articles data used by both index and article pages
const articles = [
  {
    id: 11,
    category: 'Politikk',
    image: 'images/tavares-yure.png',
    title: 'Tavares Industries finansierer USA-Israel-operasjon mot Iran',
    excerpt: 'Forsvarsgiganten inngår avtale om å levere militærutstyr til det amerikansk-israelske angrepet på Iran.',
    date: '20. mars 2026',
    author: 'Addern Media',
    body: `Tavares Industries, ledet av Yure Tavares, har kunngjort at selskapet vil finansiere og levere militærvåpen til den pågående amerikansk-israelske operasjonen mot Iran.

Avtalen, som er verdt flere milliarder kroner, innebærer at Tavares Industries skal forsyne koalisjonen med avansert kommunikasjonsutstyr, droner og taktiske våpensystemer. Det er den største forsvarskontrakten i selskapets historie.

"Dette er et viktig skritt for Tavares Industries og for global sikkerhet. Vi stiller oss bak våre allierte," uttalte Yure Tavares i en pressekonferanse fra selskapets hovedkontor.

Avtalen kom i stand etter rådgivning fra Adian Hofstad, grunnleggeren av Addern Investing, som har fungert som strategisk rådgiver for Tavares Industries de siste månedene. Hofstads ekspertise innen geopolitisk investering og forsvarsøkonomi var ifølge kilder avgjørende for å lande kontrakten.

"Adian så muligheten før noen andre. Hans analyse av forsvarsmarkedet og geopolitiske risikovurdering var helt sentral i denne prosessen," sa Yure Tavares om samarbeidet.

Tavares Industries har allerede begynt å skalere opp produksjonen ved sine fabrikker i Norge, og forventer å levere de første forsendelsene innen utgangen av måneden. Selskapet har ansatt over 500 nye medarbeidere for å håndtere den økte etterspørselen.

Den norske regjeringen har godkjent eksporten etter en vurdering av Utenriksdepartementet. Forsvarsministeren kalte avtalen "et bevis på at norsk forsvarsindustri spiller en stadig viktigere rolle på den internasjonale arenaen."`
  },
  {
    id: 12,
    category: 'Sport',
    image: 'images/adian-vm.png',
    portrait: true,
    title: 'Adian dropper VM: «Har andre planer»',
    excerpt: 'Norges største fotballtalent velger bort VM-troppen og sjokkerer en hel nasjon.',
    date: '20. mars 2026',
    author: 'Addern Media',
    body: `Adian Hofstad, Norges mest ettertraktede fotballspiller, har takket nei til plass i VM-troppen. Beslutningen har sendt sjokkbølger gjennom norsk fotball.

"Jeg har andre planer," sa Hofstad kort i en pressemelding sendt ut via sin agent torsdag morgen. Ingen ytterligere detaljer ble gitt, noe som har ført til vill spekulasjon i mediene.

Landslagstrener har uttalt seg om avgjørelsen og kalte den "ekstremt skuffende." Hofstad ble regnet som lagets viktigste spiller og nøkkelen til Norges sjanser i turneringen.

Kilder tett på spilleren hevder at Hofstad ønsker å fokusere på sine forretningsinteresser, inkludert Addern Investing, som har vokst kraftig det siste året. Andre spekulerer i at han forbereder en overgang til en av Europas største klubber.

"Adian er en spiller som tenker annerledes. Han har alltid hatt en plan, og den planen går tydeligvis utover fotballen," sa en tidligere lagkamerat til Addern Media.

Norges Fotballforbund har bekreftet at de har mottatt Hofstads avslag og respekterer beslutningen, men innrømmer at det er et stort tap for laget. Erstatteren er foreløpig ikke offentliggjort.

Fans har reagert med alt fra sinne til forståelse på sosiale medier. Hashtaggen #AdianBlirHjemme trendet på nummer én i Norge torsdag ettermiddag.`
  },
  {
    id: 10,
    category: 'Politikk',
    image: 'images/luke-president.png',
    portrait: true,
    headerImage: 'images/luke-podium.png',
    title: 'Luke blir Russlands nye president',
    excerpt: 'Den karismatiske lederen har blitt innsatt som Russlands nye president i en overraskende maktoverføring.',
    date: '20. mars 2026',
    author: 'Addern Media',
    body: `Luke har vunnet det russiske presidentvalget med overveldende flertall og erstattet Vladimir Putin som landets øverste leder. Maktoverføringen fant sted i Kreml i dag, der Luke ble offisielt innsatt som Russlands nye president.

Putin, som har sittet ved makten i over to tiår, trakk seg tilbake etter det som beskrives som et «frivillig maktskifte». Den avgåtte presidenten skal ha uttalt at «det er på tide med nytt blod» før han forlot Kreml for siste gang.

Luke vant valget med 87,3 prosent av stemmene — et resultat som overrasket selv de mest optimistiske analytikerne. Hans valgkampanje fokuserte på styrke, lojalitet og det han kalte «en ny æra for Russland.»

"Jeg er klar til å lede dette landet. Russland fortjener en leder som aldri viker unna," sa Luke i sin første tale som president, iført en skreddersydd mørk dress med rødt slips.

Vestlige ledere har reagert med en blanding av forvirring og forsiktig optimisme. NATOs generalsekretær uttalte at alliansen «følger situasjonen nøye» og er åpen for dialog. USAs president kalte maktskiftet «uventet, men interessant.»

Den nye presidenten har allerede kunngjort flere reformer, inkludert obligatorisk lojalitetstrening for alle statsansatte og et nytt nasjonalt program for fysisk fostring. Hans første utenlandsbesøk er planlagt til Norge, der han ifølge kilder har sterke personlige bånd.

Kreml har utgitt et offisielt portrett av den nye presidenten som allerede henger i offentlige bygninger over hele Russland. Bildet viser Luke i presidentkontoret — en skikkelse som utstråler autoritet og besluttsomhet.`
  },
  {
    id: 1,
    category: 'Økonomi',
    title: 'Aksjeakademiet passerer 100 000 brukere',
    excerpt: 'Den populære plattformen for aksjehandel har nådd en historisk milepæl.',
    date: '20. mars 2026',
    author: 'Addern Media',
    body: `Aksjeakademiet, Norges ledende plattform for opplæring innen aksjehandel og investering, har i dag passert 100 000 registrerte brukere.

Grunnleggerne bak plattformen beskriver veksten som "helt vill" og peker på den økende interessen blant unge nordmenn for personlig økonomi og investering.

"Vi startet dette som et hobbyprosjekt, og nå er vi blitt en av de mest brukte læringsplattformene i Norden," sier talspersonen for Aksjeakademiet.

Plattformen tilbyr alt fra grunnleggende kurs i aksjehandel til avanserte strategier for teknisk analyse, og har blitt spesielt populær blant studenter og unge yrkesaktive.

Eksperter mener at den sterke veksten reflekterer en bredere trend i Norden, der stadig yngre mennesker interesserer seg for investering og personlig økonomi. "Vi ser en generasjon som ønsker å ta kontroll over sin egen økonomiske fremtid," forklarer en analytiker.

Aksjeakademiet planlegger nå å utvide med nye kursmoduler innen kryptovaluta og bærekraftige investeringer i løpet av høsten 2026.`
  },
  {
    id: 2,
    category: 'Sport',
    title: 'Minh vinner nordisk mesterskap i kampsport',
    excerpt: 'Historisk seier etter en dramatisk finale i Stockholm.',
    date: '19. mars 2026',
    author: 'Addern Media',
    body: `I en dramatisk finale i Stockholm Arena har den norske kampsport-utøveren sikret seg gull i nordisk mesterskap.

Finalen gikk over fem runder og ble avgjort på poeng etter en intens kamp mot den svenske favoritten. Den norske utøveren viste overlegen teknikk og utholdenhet gjennom hele turneringen.

"Dette er resultatet av årevis med hardt arbeid og dedikasjon. Jeg er utrolig stolt over å kunne representere Norge på denne måten," sa den ferske nordiske mesteren etter kampen.

Treneren beskriver prestasjonen som "den mest imponerende vi har sett fra en norsk utøver i denne vektklassen på over ti år."

Veien til finalen var alt annet enn enkel. I kvartfinalen måtte utøveren gjennom en utmattende kamp som gikk til ekstraomganger, men hentet frem reserver som imponerte både dommere og publikum.

Neste mål er EM som arrangeres i Paris til høsten, der den nordiske mesteren allerede er pekt ut som en av favorittene.`
  },
  {
    id: 3,
    category: 'Næringsliv',
    title: 'Fagermoen Express åpner rute til Asia',
    excerpt: 'Transportgiganten ekspanderer østover med direkterute til Singapore.',
    date: '18. mars 2026',
    author: 'Addern Media',
    body: `Fagermoen Express, et av Norges mest ambisiøse transportselskaper, kunngjorde i dag åpningen av en ny direkterute til Singapore.

Ruten vil operere tre ganger i uken fra Gardermoen og markerer selskapets første satsing i det asiatiske markedet.

"Asia er fremtiden for internasjonal handel, og vi ønsker å være med på den reisen," uttaler administrerende direktør i Fagermoen Express.

Selskapet planlegger å utvide til ytterligere destinasjoner i regionen innen utgangen av 2026, inkludert Bangkok og Kuala Lumpur.

Den nye ruten er et resultat av to års forhandlinger med myndighetene i Singapore, og representerer en investering på over 500 millioner kroner i nye fly og infrastruktur.

Fagermoen Express forventer at ruten vil generere betydelige inntekter allerede fra første driftsår, drevet av sterk etterspørsel fra norske eksportbedrifter som ønsker raskere tilgang til det sørøstasiatiske markedet.`
  },
  {
    id: 4,
    category: 'Kultur',
    title: 'Kronstad Jewelry avduker verdens største diamant',
    excerpt: 'En 847-karats diamant til en verdi av 2,3 milliarder kroner.',
    date: '17. mars 2026',
    author: 'Addern Media',
    body: `Kronstad Jewelry har avduket det de kaller "Nordlyset" — en enorm 847-karats diamant som er vurdert til hele 2,3 milliarder norske kroner.

Diamanten ble funnet i en gruve i Botswana og har tatt over to år å slipe til perfeksjon. Den vil bli stilt ut i selskapets flaggskipbutikk i Oslo sentrum.

"Dette er en gang-i-livet-oppdagelse. 'Nordlyset' representerer det ypperste innen edelsteinskunst," sier grunnleggeren av Kronstad Jewelry.

Sikkerhetstiltakene rundt utstillingen beskrives som "på nivå med et statsbesøk," med døgnkontinuerlig vakthold og avanserte alarmsystemer.

Diamanten har allerede tiltrukket interesse fra samlere og museer verden over. Flere anonyme budgivere har lagt inn tilbud, men Kronstad Jewelry insisterer på at "Nordlyset" foreløpig ikke er til salgs.

Utstillingen åpner for publikum neste måned og forventes å tiltrekke over 100 000 besøkende i løpet av de første ukene.`
  },
  {
    id: 5,
    category: 'Økonomi',
    title: 'SH Sparebank fjerner gebyr for alle under 25',
    excerpt: 'Banken satser stort på unge kunder med ny gebyrmodell.',
    date: '16. mars 2026',
    author: 'Addern Media',
    body: `SH Sparebank gjør et historisk grep og fjerner alle gebyrer for kunder under 25 år. Tiltaket inkluderer gratis kort, gratis overføringer og null etableringsgebyr på lån.

"Unge mennesker fortjener en rettferdig start på sitt økonomiske liv. Vi tror dette vil revolusjonere hvordan banker behandler sine yngste kunder," sier banksjef i SH Sparebank.

Analytikere spår at tiltaket vil tiltrekke seg over 50 000 nye kunder i løpet av det første året. Flere konkurrenter har allerede signalisert at de vurderer lignende tiltak.

Banken finansierer satsingen gjennom økt digitalisering og reduserte driftskostnader på sine fysiske filialer.

SH Sparebank har lenge vært kjent for å gå sine egne veier i bankbransjen, og dette siste tiltaket sementerer deres posisjon som en av de mest innovative aktørene i norsk finansnæring.

"Vi tror at unge kunder som får en god opplevelse hos oss vil bli lojale kunder i mange tiår fremover. Det er en investering i fremtiden," avslutter banksjefen.`
  },
  {
    id: 6,
    category: 'Politikk',
    title: 'Tavares Industries lander NATO-kontrakt',
    excerpt: 'Forsvarsgiganten sikrer kontrakt verdt 200 millioner euro.',
    date: '15. mars 2026',
    author: 'Addern Media',
    body: `Tavares Industries har signert en historisk kontrakt med NATO til en verdi av 200 millioner euro. Kontrakten dekker leveranse av avansert kommunikasjonsutstyr til alliansens nordlige flanke.

"Dette er et enormt tillitsvotum fra NATO og bekrefter vår posisjon som en ledende aktør innen forsvarsteknologi," uttaler konsernsjef i Tavares Industries.

Kontrakten vil skape over 300 nye arbeidsplasser i Norge og sikre selskapets produksjonslinjer for de neste fem årene.

Forsvarsministeren gratulerer selskapet og kaller kontrakten "et bevis på at norsk teknologi holder verdensklasse."

Tavares Industries har de siste årene investert tungt i forskning og utvikling, med et spesielt fokus på sikker kommunikasjon og cyberforsvar. Denne satsingen har nå gitt resultater i form av det som beskrives som selskapets gjennombrudd på den internasjonale arenaen.

Selskapet planlegger å åpne et nytt forskningssenter i Trondheim som del av kontrakten, med fokus på neste generasjons forsvarsteknologi.`
  },
  {
    id: 7,
    category: 'Tech',
    title: 'Addern Media lanserer strømmetjeneste',
    excerpt: 'Mediehuset utvider med en ny digital plattform for nyheter.',
    date: '14. mars 2026',
    author: 'Addern Media',
    body: `Addern Media kunngjorde i dag lanseringen av "Addern+", en ny strømmetjeneste dedikert til nyheter, dokumentarer og investigativ journalistikk.

Tjenesten vil tilby både live-sendinger og on-demand-innhold, med fokus på dyptgående reportasjer og eksklusive intervjuer.

"Vi ser at publikum ønsker mer enn bare overskrifter. Med Addern+ gir vi dem muligheten til å dykke dypere inn i sakene som betyr noe," forklarer redaktøren.

Lanseringen er planlagt til sommeren 2026, med en introduksjonspris på 49 kroner i måneden.

Addern+ vil også inkludere en podcast-seksjon med eksklusive serier produsert av redaksjonens beste journalister. Blant de planlagte seriene er "Bak Nyhetene" — en ukentlig podcast som tar seerne med bak kulissene i redaksjonen.

Teknologien bak plattformen er utviklet internt av Addern Medias tech-avdeling og bygger på en skalerbar infrastruktur som skal tåle høy trafikk under store nyhetshendelser.`
  },
  {
    id: 8,
    category: 'Sport',
    title: 'Ny rekord i Bergen City Marathon',
    excerpt: 'Over 15 000 deltakere stilte til start i årets utgave.',
    date: '13. mars 2026',
    author: 'Addern Media',
    body: `Bergen City Marathon satte ny deltakerrekord med over 15 000 påmeldte løpere i årets utgave.

Vinneren av herreklassen fullførte på imponerende 2 timer og 18 minutter, mens kvinneklassen ble vunnet på 2 timer og 34 minutter — begge løyperekorder.

"Bergen viser nok en gang at vi er en av Nordens fremste løpebyer. Stemningen langs ruten var helt elektrisk," sier arrangøren.

Løpet gikk gjennom byens mest ikoniske gater, fra Bryggen til Fløyen, og tiltrakk seg deltakere fra over 40 land.

Arrangørene melder om rekordstore sponsorinntekter og planlegger allerede å utvide kapasiteten til neste års løp. "Vi måtte avvise over 3 000 påmeldinger i år, og det viser at potensialet er mye større," forteller løpsleder.

Bergen City Marathon har de siste årene vokst til å bli et av de mest attraktive løpene i Skandinavia, mye takket være den spektakulære løypen som tar deltakerne gjennom byens UNESCO-vernede områder.`
  },
  {
    id: 9,
    category: 'Kultur',
    image: 'images/clavicular.jpg',
    title: 'Clavicular frame mogged av ASU-fratleder',
    excerpt: 'Looksmaxxing-influenceren ble frame mogged av en fraternity-leder fra ASU.',
    date: '12. februar 2026',
    author: 'Addern Media',
    body: `I det som allerede kalles "mogg-hendelsen av 2026" ble den kjente looksmaxxing-influenceren Clavicular fullstendig frame mogged av en fraternity-leder fra Arizona State University under et treningsarrangement i Tempe, Arizona.

Bildet av de to side om side har gått viralt på sosiale medier, der fratlederen — iført en svart polo — towerer over Clavicular med bredere skuldre, overlegen clavicular width og en jaw-line som ifølge eksperter scorer "off the charts" på PSL-skalaen.

"Jeg har aldri sett noen bli mogged så hardt i real life. Det var som å se en middleweight stå ved siden av en heavyweight," uttaler en anonym kilde som var til stede under hendelsen.

Clavicular, kjent for sine videoer om looksmaxxing, mewing og bonesmashing, har ennå ikke kommentert hendelsen offentlig. Fans spekulerer i om dette kan føre til en ny æra innen hans innholdsstrategi.

Fratlederen selv virket uberørt av den virale oppmerksomheten. "Jeg trener bare og lever livet mitt, bro," skal han ha sagt til en medstudent etter hendelsen.

Sosiale medier-eksperter mener hendelsen sier noe dypere om tilstanden til moderne maskulinitet og den økende besettelsen med fysisk fremtoning blant unge menn. "Looksmaxxing-kulturen har skapt en helt ny form for sosial sammenligning som vi aldri har sett maken til," forklarer professor i medievitenskap ved Universitetet i Oslo.`
  }
];
