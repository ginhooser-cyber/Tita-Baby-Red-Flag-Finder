import { GameMode, Scenario, Badge, StreakBadge } from './types';

export const OFFLINE_SCENARIOS: Scenario[] = [
  // =================================================================
  // TEENS (50 Scenarios: ~33 Red, ~17 Green)
  // Focus: Romance, School Drama, Puppy Love, Social Media
  // =================================================================
  
  // --- RED FLAGS (33) ---
  { 
    text: "5 months na kayong 'exclusive' kuno at may call sign na 'Baby', pero pag tinanong ng friends niya kung kayo na, ang sagot niya: 'Chill lang kami, ayaw namin ng labels para walang pressure.'", 
    isRedFlag: true, 
    wisdom: "Situationship check! Ginagawa kang free trial subscription, ghorl? Walang label means walang commitment, pero gusto niya ng benefits ng jowa? Aba, hindi ka charity! Know your worth, add tax!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-post ka ng selfie na fresh na fresh, tapos nag-comment siya ng: 'Ganda sana, kaso ang taba ng braso mo diyan.' Nung nagalit ka, sinabihan ka pang: 'Luh, joke lang! Sensitive naman masyado.'", 
    isRedFlag: true, 
    wisdom: "Negging 101! Binababa niya self-esteem mo para isipin mong siya lang ang tatanggap sayo. Ang tawag diyan ay emotional abuse disguised as 'joke'. I-block mo na yan bago pa lumiit ang tingin mo sa sarili mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hiningi niya password mo sa FB, IG, at TikTok kasi 'kung wala kang tinatago, ibibigay mo'. Sabi niya para daw sa 'peace of mind' niya, pero yung cellphone niya laging naka-face down pag magkasama kayo.", 
    isRedFlag: true, 
    wisdom: "Privacy is a right, hindi privilege! Kung walang trust, walang usap. At bakit yung kanya tago-tago? Malamang may tinatagong himala yan! Wag kang pumayag sa digital martial law!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Niyaya ka mag-date sa Starbucks, tapos nung nasa counter na, biglang nag-act na hinahanap yung wallet. Sabi niya: 'Babe, abonohan mo muna, Gcash ko sayo later'. Spoiler: 3 weeks na, wala paring Gcash notif.", 
    isRedFlag: true, 
    wisdom: "Scammer alert! Kung walang pambayad, wag mag-aya sa mahal! Ginawa kang walking ATM machine. Ang date dapat may preparation, hindi yung parang hinoldap ka sa counter!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Magka-text kayo 24/7, sweet messages, 'Good morning', 'Good night', pero pag nagkasalubong kayo sa corridor ng school kasama barkada niya, dinaanan ka lang na parang hangin.", 
    isRedFlag: true, 
    wisdom: "Secret relationship? Ghorl, hindi ka spy, wag kang pumayag sa mission impossible! Kung kinakahiya ka niya sa friends niya, hindi ka niya deserve. Ang jowa pinagmamalaki, hindi tinatago sa bulsa!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagalit siya nung nag-heart react ka sa post ng K-Pop idol mo. Sabi niya: 'Bakit ka tumitingin sa iba? Di ba ako sapat? Tanggalin mo yan kung mahal mo ako.'", 
    isRedFlag: true, 
    wisdom: "Insecurity level: 9999! Selos sa poster? Selos sa taong hindi naman siya kilala? Jusko ineng, possessive na wala sa lugar. Paki-explain sa kanya na ang idol ay inspiration, hindi competition!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nagjo-joke na iiwan ka niya para makita kung iiyak ka o maghahabol. Sabi niya 'testing' lang daw kung gaano mo siya ka-mahal at kung ipaglalaban mo siya.", 
    isRedFlag: true, 
    wisdom: "Emotional manipulation yarn? Ginagawa kang laruan para ma-feed ang ego niya. Ang love hindi tinetest ng ganyan, binibigay yan ng kusa. Wag kang mag-habol sa asong hindi marunong umuwi!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinabihan ka niyang: 'Wag ka na sumama sa family reunion niyo, dito ka na lang sa amin'. Gusto niya siya lang ang mundo mo at unti-unting nilalayo ka sa pamilya at friends mo.", 
    isRedFlag: true, 
    wisdom: "Isolation tactic! Classic red flag ng abuser. Gusto niya mawalan ka ng support system para sa kanya ka lang aasa. Family is forever, jowa is for now (lalo na pag ganyan). Run!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nahuli mo siyang may ka-chat na iba na may heart emoji, tapos ang explanation niya: 'Pinsan ko yan! Grabe ka mag-isip, ang dumi ng utak mo!'. Pinsan na nag-send ng 'Miss you baby'?", 
    isRedFlag: true, 
    wisdom: "Sweet home Alabama? Eme! Gaslighting yan ghorl! Huli na sa akto, binaligtad ka pa. Wag kang maniwala sa 'pinsan' excuse, luma na yan sa history ng mga manloloko!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tuwing nag-aaway kayo, nagpo-post siya ng black screen sa My Day na may sad song at caption na 'Pagod na ako, sana man lang ma-appreciate'. Pa-victim card activated!", 
    isRedFlag: true, 
    wisdom: "Digital drama queen/king! Imbes na kausapin ka, nagpapapansin sa audience. Gusto niya kampihan siya ng iba at magmukha kang villain. Toxic immature behavior!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sabi niya sayo: 'Ikaw lang ang nakakaintindi sakin, lahat ng ex ko mga baliw'. Kwento niya, siya lagi ang biktima at lahat ng nakaraan niya ay masama ang ugali.", 
    isRedFlag: true, 
    wisdom: "Common denominator check! Pag lahat ng ex niya 'crazy', baka siya ang driver ng crazy bus! Siya ang nagpa-baliw sa kanila. Ikaw na ang susunod na 'baliw' sa kwento niya pag nag-break kayo.", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-send siya ng screenshot ng convo nila ng 'best friend' niyang opposite gender na nagsasabing 'Bagay tayo'. Nung nagalit ka, sabi niya 'Wala yun, selosa mo naman, magkaibigan lang kami'.", 
    isRedFlag: true, 
    wisdom: "Triangulation! Sinasadya niyang pagselosin ka para mag-compete ka for his/her attention. Bastos sa feelings mo. Ang tunay na best friend, rerespetuhin ang relationship niyo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang i-share niyo ang location niyo sa Life360 24/7. Pag gumalaw ka ng konti papuntang CR ng mall, tatawag agad: 'Bakit ka lumipat? Sino kasama mo diyan?'", 
    isRedFlag: true, 
    wisdom: "Stalker mode: ON. Hindi yan love, surveillance yan! Wala kang privacy? Bawal gumalaw? Prisoner ka ba ghorl? Digital kadena is not romantic!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi niya sayo kung ano dapat suotin mo. 'Wag kang mag-shorts, mainit ulo ng mga lalaki' o 'Wag kang mag-makeup, mas gusto ko natural'. Kunwari protective, pero controlling na pala.", 
    isRedFlag: true, 
    wisdom: "Fashion police? Katawan mo yan, desisyon mo yan! Ang insecurities niya, wag niyang ipasa sa wardrobe mo. Kung ayaw niyang matignan ka ng iba, edi pumikit sila!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may achievement ka (Top 1 sa quiz, nanalo sa contest), imbes na 'Congrats', ang sasabihin niya: 'Sus, madali lang naman yan eh. Buti ka pa may time mag-aral, ako kasi busy'.", 
    isRedFlag: true, 
    wisdom: "Hater in disguise! Hindi niya kayang maging masaya para sayo kasi insecure siya. Ang partner, number one supporter dapat, hindi number one basher!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Bigla siyang nanlamig ng 3 days, walang paramdam. Tapos biglang magcha-chat ng 'I miss you' na parang walang nangyari. Breadcrumbing at its finest, binibigyan ka lang ng tira-tira.", 
    isRedFlag: true, 
    wisdom: "Zombieing! Patay-sindi? Ginagawa kang option pag bored siya. Wag kang marupok sa 'I miss you' na walang explanation. You deserve consistency, not confusion!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Niyaya ka sa inuman ng barkada niya, tapos nung nalasing siya, ikaw pinagbuhat sa kanya pauwi habang sinisigawan ka niya na 'Ang bagal mo naman!'. Ginawa kang alalay?", 
    isRedFlag: true, 
    wisdom: "Yaya yarn? Walang respeto pag lasing? Naku, ang alak ay lumalabas lang ng tunay na ugali. Kung ganyan siya sayo sa harap ng iba, paano pa pag kayo lang?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapili ka niya: 'Ako o yang mga kaibigan mo?'. Ultimatum agad? Gusto niya, siya lang ang source ng happiness mo at bawal ka nang mag-karoon ng social life.", 
    isRedFlag: true, 
    wisdom: "Ultimatum is a trap! Ang matinong jowa, makikisama sa friends mo, hindi ka papapiliin. Gusto niya solohin mundo mo para madali kang ma-control. Choose your friends!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag nag-aaway kayo, laging nauuwi sa 'Sige, mag-break na lang tayo!'. Ginagawang hostage ang relationship para makuha ang gusto niya. Break up prank yarn?", 
    isRedFlag: true, 
    wisdom: "Emotional blackmail! Takot ka niyang iwan kaya sinusunod mo na lang gusto niya? Toxic yan! Ang break up hindi ginagawang panakot, ginagawa yan pag tapos na talaga.", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinabihan ka niyang 'Ang swerte mo, pinatulan kita kahit hindi ka naman kagandahan'. Negging tawag diyan. Binababa self-esteem mo para isipin mong wala nang iba pang magkakagusto sayo.", 
    isRedFlag: true, 
    wisdom: "Kapal ng mukha! Sino siya, si Piolo Pascual? Binabasag niya confidence mo para mag-settle ka sa kanya. Wag kang maniwala, maganda ka at deserve mo ng taong sasamba sa ganda mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nung birthday mo, binigyan ka niya ng regalong... wala. 'Ikaw naman gift ko eh'. Pero nung birthday niya, nag-expect siya ng surprise party at expensive gift mula sayo.", 
    isRedFlag: true, 
    wisdom: "Selfish alert! Effort must be reciprocal. Hindi pwedeng ikaw lang ang giver, siya ang receiver. Hindi ka Santa Claus, ghorl!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging ikaw ang nag-sosorry kahit siya ang may kasalanan. Galing niyang baligtarin ang kwento hanggang sa ikaw na ang mag-guilty at mag-makaawa.", 
    isRedFlag: true, 
    wisdom: "DARVO (Deny, Attack, and Reverse Victim and Offender)! Master manipulator yan. Wag kang humingi ng tawad sa kasalanang hindi mo ginawa. Stand your ground!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may problema siya, 24/7 kang therapist. Pero nung ikaw ang umiiyak dahil sa family problem, sabi niya: 'Hays, ang drama mo naman, nakaka-stress ka kausap'.", 
    isRedFlag: true, 
    wisdom: "Emotional vampire! Sinisipsip ang energy mo pero walang binabalik. Relationship is give and take, hindi take and take and take!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nahuli mong naka-Tinder pa rin siya kahit kayo na. Ang excuse: 'Nakalimutan ko lang i-delete, di ko naman ginagamit. Sayang kasi yung matches, pang-boost ng ego'.", 
    isRedFlag: true, 
    wisdom: "Ego booster pala ha? Edi dun siya sa matches niya! Disrespectful yan. Kung committed na, delete na ang dating apps. Walang 'just in case'!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukumpara ka sa influencers sa TikTok. 'Buti pa si [Influencer], sexy at maputi. Mag-glutathione ka kaya?' Body shaming disguised as advice.", 
    isRedFlag: true, 
    wisdom: "Comparison is the thief of joy! Kung gusto niya ng influencer, edi mag-follow siya, wag ka niyang baguhin. You are unique, wag kang magpa-pressure sa standards ng iba!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinilit ka niyang gawin yung bagay na ayaw mo (kiss, holding hands, etc.) tapos nung tumanggi ka, nagtampo at sinabing 'Di mo talaga ako mahal, KJ mo naman'.", 
    isRedFlag: true, 
    wisdom: "Consent is non-negotiable! Ang 'No' ay 'No', hindi 'Convince me'. Ang taong nagmamahal sayo, rerespetuhin ang boundaries mo, hindi ka i-guilt trip!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'Low Battery' pag tinatawagan mo sa gabi, pero active status naman sa Messenger at nag-la-like ng posts ng iba habang 'tulog' daw siya.", 
    isRedFlag: true, 
    wisdom: "Liar, liar, pants on fire! Low batt pero naka-wifi? Wag mo kaming gawing tanga. Kung ayaw kausap, sabihin, wag mag-imbento ng palusot!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-promise na manonood kayo ng sine, bihis na bihis ka na, tapos biglang nag-cancel 10 minutes before kasi 'tinamad' daw siya. Respeto sa oras mo, zero.", 
    isRedFlag: true, 
    wisdom: "Flaker! Ang oras mo ay ginto, wag mong sayangin sa taong tingga. Kung mahalaga ka, sisipot yan kahit bumabagyo. 'Tinamad' is not a valid excuse for heartbreak!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sabi niya 'Friends' lang daw sila nung ex niya, pero magkasama sila sa profile picture niya sa dummy account niya na nahuli mo.", 
    isRedFlag: true, 
    wisdom: "Dummy account pa more! Bakit may tago? Bakit may ex? Alam na this. Backburner ka lang ghorl. Ikaw ang present pero ang puso nasa past!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag tinanong mo kung ano plano niya sa future niyo, ang sagot: 'Bata pa tayo, enjoy lang. Why so serious?'. Peter Pan syndrome, ayaw lumaki.", 
    isRedFlag: true, 
    wisdom: "Walang direction! Okay lang mag-enjoy, pero kung walang plano, walang patutunguhan. Baka magising ka na lang, 10 years na kayo pero 'enjoy' pa rin ang status!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagalit siya nung nalaman niyang mas mataas grades mo sa kanya sa Math. Sabi niya, 'Edi ikaw na matalino, pabibo ka masyado, nakaka-turn off'.", 
    isRedFlag: true, 
    wisdom: "Fragile masculinity/ego! Na-threaten sa talino mo? Red flag yan! Ang tamang partner, ipagmamayabang ang achievements mo, hindi ka hihilahin pababa!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ginagamit ang mental health bilang excuse sa pagiging toxic. 'Ganto talaga ako kasi depressed ako, intindihin mo na lang pag minumura kita'.", 
    isRedFlag: true, 
    wisdom: "Mental health is an explanation, not an excuse for abuse! Hindi porket may pinagdadaanan, may karapatan nang manakit. Get help, not a punching bag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Borrow nang borrow ng gamit (hoodie, calculator, pera) pero hindi binabalik. Pag siningil mo, siya pa galit. 'Ang damot mo naman, parang wala tayong pinagsamahan!'", 
    isRedFlag: true, 
    wisdom: "Moocher! User-friendly! Ang gamit ay hinihiram at binabalik. Pag hindi binalik, nakaw na yan. Wag kang mag-invest sa taong financial liability!", 
    category: GameMode.TEENS 
  },

  // --- GREEN FLAGS (17) ---
  { 
    text: "Niyaya mo lumabas ng Friday night para mag-party, pero tumanggi siya. Sabi niya, 'Sorry babe, kailangan ko mag-review para sa finals namin bukas. Babawi ako next week, promise!'", 
    isRedFlag: false, 
    wisdom: "Priorities check! Green flag yan ghorl. Mas gusto mo ba yung irresponsible na party goer? Ang taong may pangarap, may future. Support mo yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hindi siya nagre-reply agad pag nasa school o may training. Sabi niya, 'Focus muna ako sa ginagawa ko, usap tayo later pag-uwi'. Hindi siya 24/7 available.", 
    isRedFlag: false, 
    wisdom: "Healthy boundaries! Hindi kayo magka-dikit ng pusod. May sarili siyang buhay, at dapat ikaw rin. Quality time over quantity time ang peg!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nung nag-away kayo ng malala, hindi siya sumigaw, hindi nagmura, o nag-walk out. Sinabi niya, 'Palamig muna tayo ng ulo, tapos pag-usapan natin ng maayos mamaya'.", 
    isRedFlag: false, 
    wisdom: "Emotional maturity! Bihira yan sa teens. Ang taong marunong mag-handle ng conflict nang hindi nananakit ay keeper. Wag mong pakawalan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinusuportahan niya ang pag-fangirl mo sa K-Pop. Binilhan ka pa ng photocard kahit hindi niya kilala yung member at tinatry niyang kilalanin ang bias mo.", 
    isRedFlag: false, 
    wisdom: "Supportive jowa! Hindi seloso sa poster! Nirerespeto niya ang happiness mo kahit hindi niya gets. Yan ang love, ineng!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nung sinabi mong 'No' sa gusto niyang gawin, tinanggap niya agad at hindi namilit o nag-guilt trip. Sabi niya, 'Okay lang, respect ko comfort zone mo'.", 
    isRedFlag: false, 
    wisdom: "Consent king/queen! Ang 'No' ay complete sentence para sa kanya. Green flag na nagpapahalaga sa nararamdaman mo. Safe ka diyan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinauwi ka ng maaga nung date niyo kasi alam niyang strict ang parents mo sa curfew. Sabi niya, 'Ayoko mapagalitan ka, hatid na kita para safe'.", 
    isRedFlag: false, 
    wisdom: "Respeto sa parents! Hindi ka niya ipapahamak para lang sa sariling happiness niya. Good influence yan, botong-boto si Tita!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kahit baduy yung outfit mo para sa iba, sabi niya sayo: 'Kung saan ka komportable, dun ako. Ang ganda mo pa rin naman kahit naka-pambahay'.", 
    isRedFlag: false, 
    wisdom: "Acceptance! Mahal ka niya kahit ano pa suot mo. Hindi ka niya ginagawang manika. Confidence booster yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Inamin niya agad nung may nag-chat sa kanya na ex niya. Sabi niya, 'Babe, nag-pm si ano pero sineen ko lang, inform lang kita para walang tago at secret'.", 
    isRedFlag: false, 
    wisdom: "Transparency! Inuunahan na niya ang duda. Wala kang dapat ipag-alala kasi open book siya. Trustworthy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hindi siya nagagalit pag lumalabas ka kasama ang friends mo na wala siya. Sabi niya, 'Enjoy kayo! Me time din muna ako mag-lalaro ng games'.", 
    isRedFlag: false, 
    wisdom: "Secure attachment! Hindi siya clingy na nakakasakal. Alam niyang may life ka outside the relationship. Balance is key!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nung bumagsak ka sa exam at iyak ka ng iyak, hindi ka niya jinudge o sinabihang 'bobo'. Niyaya ka niyang mag-aral sabay sa library at tinulungan ka sa math.", 
    isRedFlag: false, 
    wisdom: "Teamwork! Nasa low moments mo siya, hindi lang sa high moments. Yan ang partner na hihilahin ka pataas!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tinanong ka niya kung okay lang ba i-post yung picture niyo. 'Baka kasi ayaw mo ng unflattering angle, check mo muna kung okay sayo'.", 
    isRedFlag: false, 
    wisdom: "Considerate! Iniisip niya ang image mo, hindi lang yung kanya. Small gesture pero malaking bagay sa respect.", 
    category: GameMode.TEENS 
  },
  { 
    text: "Wala siyang social media masyado. Minsan akala mo red flag kasi tago, pero yun pala private person lang talaga at focus sa real life at studies.", 
    isRedFlag: false, 
    wisdom: "Lowkey is the new sexy! Walang drama, walang papansin. Focus sa reality, hindi sa virtual validation. Peaceful life yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinabi niya sa friends niya na 'Taken na ako' nung inaasar siya sa iba. Proud at loyal kahit wala ka sa paligid para bantayan siya.", 
    isRedFlag: false, 
    wisdom: "Loyalty integrity! Ginagawa ang tama kahit walang nakatingin. Yan ang jowang pang-matagalan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-ipon siya ng ilang buwan para mabilhan ka ng regalo sa birthday mo. Kahit hindi mahal, pinaghirapan niya at galing sa allowance niya.", 
    isRedFlag: false, 
    wisdom: "Effort over price tag! Yung thought at sacrifice ang mahalaga. Hindi hinihingi sa magulang ang pang-regalo sayo.", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may hindi kayo pagkakaintindihan, hindi niya kinukwento sa friends niya o sa social media. Sa inyo lang ang problema at kayo ang aayos.", 
    isRedFlag: false, 
    wisdom: "Private resolution! Walang 'marites' na involved. Mature handling of problems. Green flag na green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tinatrato niya ng maayos ang mga service crew, guard, at janitor pag nag-de-date kayo. Nag-tha-thank you at nag-s-smile.", 
    isRedFlag: false, 
    wisdom: "Character check passed! Kung mabait siya sa taong walang maibibigay sa kanya, mabait talaga siya. Yan ang true colors!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinabi niya sayo: 'Magtapos muna tayo ng pag-aaral bago tayo mag-seryoso sa next level'. Gusto niyang magkaroon kayo ng magandang future.", 
    isRedFlag: false, 
    wisdom: "Future-oriented! Hindi nagmamadali sa bagay na pang-matanda. Gusto niya stable kayo pareho. Keeper!", 
    category: GameMode.TEENS 
  },

  // =================================================================
  // YOUNG ADULT (30 Scenarios: 20 Red, 10 Green)
  // Focus: Dating Apps, Work-Life, Early Career, Ghosting
  // =================================================================

  // --- RED FLAGS (20) ---
  { 
    text: "First date niyo, dinala ka sa mamahaling restaurant tapos nung bill na, sabi niya: 'Hala, naiwan ko wallet ko sa kotse/bahay. Pa-abono muna?' (Pero may dalang vape at susi ng kotse).", 
    isRedFlag: true, 
    wisdom: "Modus operandi! 'Forgot wallet' scam? 2024 na uy! Kung walang pambayad, sa paresan lang mag-aya. Wag kang magpa-scam sa pa-sosyal na broke!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sa dating app, ang bio niya: 'Not here for drama, just good vibes. Independent woman hanap ko.' Pero sa chat, nanghihiram agad ng 500 pang-gas.", 
    isRedFlag: true, 
    wisdom: "Hobosexual alert! Naghahanap ng sugar mommy, hindi partner. 'Independent' means 'ikaw magbabayad ng lahat'. Swipe left agad!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Boss mo tinatawag kang 'Rockstar' at 'Family' kayo sa office, pero 1% lang ang increase mo kahit nag-double ang workload mo. 'Passion' daw ang puhunan.", 
    isRedFlag: true, 
    wisdom: "Exploitation with a smile! Hindi nakakabusog ang 'Rockstar' title. Ang pamilya, hindi nanggugulang. Know your worth, mag-update ka na ng LinkedIn!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Kausap mo sa Bumble, ang topic laging tungkol sa ex niyang 'baliw'. Lahat daw ng ex niya crazy at siya lang ang matino. 'Ikaw lang ang iba', sabi niya.", 
    isRedFlag: true, 
    wisdom: "Ikaw ang next na 'baliw' sa kwento niya! Pag lahat ng nakapaligid sa kanya sira, baka siya ang may diperensya. Common denominator check!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Workmate mong laging nag-aaya ng 'Coffee break' para mag-chismis about sa boss, pero nahuli mong ikaw pala ang topic niya pag wala ka.", 
    isRedFlag: true, 
    wisdom: "Office snake! 🐍 If they gossip WITH you, they gossip ABOUT you. Trabaho lang, walang tiwalaan ng secrets sa pantry!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-match kayo, ang ganda ng convo, tapos biglang 'Soft Launch' sa IG story niya... pero likod ng ibang babae ang kasama. Sabi niya: 'Pinsan ko lang yan'.", 
    isRedFlag: true, 
    wisdom: "Soft launch ng panloloko! Roster dating ang peg ni Kuya. Wag kang maging option kung pwede kang maging priority. Thank you, next!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hr manager says: 'We have unlimited vacation leave!' pero kailangan mong mag-reply sa Slack within 5 minutes kahit nasa beach ka, kundi 'uncommitted' ka.", 
    isRedFlag: true, 
    wisdom: "Unlimited stress kamo! Trap yan. Ang tunay na leave, disconnect. Kung naka-tali ka pa rin sa work, work-from-beach yan, hindi bakasyon!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Dating match mo nag-insist na 'No Label' muna kasi 'healing' pa siya, pero nagagalit pag may kausap kang iba. 'Akala ko ba special tayo?'", 
    isRedFlag: true, 
    wisdom: "Situationship jail! Gusto ng loyalty ng asawa pero commitment ng multo. Wag kang magpaloko sa 'healing' stage na yan kung ginagago ka naman!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging nagka-cancel ng date last minute kasi 'may emergency sa work/bahay' pero makikita mo sa stories, nasa inuman kasama barkada.", 
    isRedFlag: true, 
    wisdom: "Liar liar! Ang emergency niya ay alak. Walang respeto sa oras mo. Ang taong gusto kang makita, gagawa ng paraan, hindi ng dahilan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinabihan ka ng ka-date mo: 'Ang lakas mo pala kumain para sa babae/lalaki'. Body shaming on the first date?", 
    isRedFlag: true, 
    wisdom: "Bastos! Pera mo naman pinambili niyan ah? Wag kang mag-settle sa taong binibilang ang kanin mo. Eat well, live well, ditch him/her!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Yung ka-talking stage mo, laging nagpaparinig sa FB na 'Walang matinong lalaki/babae ngayon', habang ka-chat mo siya ng matino.", 
    isRedFlag: true, 
    wisdom: "Pa-sad boy/girl! Gusto niya suyuin mo siya. Attention seeker na hindi marunong ma-appreciate ang nasa harap niya. Nakakapagod yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Workmate mong laging nag-cre-credit grab ng idea mo sa meeting. 'As I was saying...' sabay ulit ng sinabi mo kanina.", 
    isRedFlag: true, 
    wisdom: "Idea thief! Magnanakaw ng promotion! Wag kang papayag na gawin kang stepping stone. Speak up: 'Thanks for repeating my point, Brad!'", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagyaya ng 'Netflix and Chill' sa bahay niya on the first date. Sabi niya: 'Manonood lang talaga tayo, promise'.", 
    isRedFlag: true, 
    wisdom: "Alam na this! Kung hookup hanap mo, go. Pero kung seryoso, wag kang maniwala sa 'manonood lang'. Galawang fuckboy/girl 101!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "30 years old na siya pero 'Mama' pa rin nagde-decide ng susuotin niya at kung sino de-date-in niya. Mama's Boy/Girl extreme edition.", 
    isRedFlag: true, 
    wisdom: "Umbilical cord hindi pa putol! Mahirap makipag-relasyon sa taong kasal na sa nanay niya. Magiging third wheel ka sa relationship nila!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-aalok ng investment scam/networking sa first date. 'Open minded ka ba? Gusto mo bang yumaman habang natutulog?'", 
    isRedFlag: true, 
    wisdom: "Power! Date ang pinunta mo, hindi recruitment orientation. Baka imbes na lovelife, bentahan ka ng sabon. Takbo!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinabihan ka ng boss mo na: 'You should be grateful you have this job' nung humingi ka ng raise na deserve mo naman.", 
    isRedFlag: true, 
    wisdom: "Gaslighting boss! Trabaho yan, hindi charity. Binabayaran ka para sa skills mo. Wag kang magpa-takot sa intimidation tactics!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Yung ka-date mo, panay cellphone habang kumakain kayo. Tawa ng tawa sa chat pero hindi ikaw ang kausap.", 
    isRedFlag: true, 
    wisdom: "Rude! Kung mas masaya sa cellphone, edi sana nag-zoom meeting na lang kayo. Walang manners. You deserve undivided attention!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-aaya mag-travel out of town pero 'KKB' (Kanya-Kanyang Bayad) lahat, pati gas at toll siya pa nagpa-compute sayo.", 
    isRedFlag: true, 
    wisdom: "Calculator yarn? Okay ang sharing, pero yung pati sentimo singilan? Nakaka-turn off! Parang business transaction ang date niyo.", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinabihan ka na 'Masyado kang ambitious' nung kinuwento mo career goals mo. Gusto niya 'simple life' lang (aka tamad siya).", 
    isRedFlag: true, 
    wisdom: "Dream killer! Insecure siya sa potential mo. Wag mong liitan ang pangarap mo para mag-kasya sa utak niyang makitid!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging nagpo-post ng 'Single' sa social media kahit kayo na. Sabi niya 'private' lang daw relationship niyo.", 
    isRedFlag: true, 
    wisdom: "Private vs Secret! Magkaiba yun. Ang private, alam ng tao na taken siya pero di alam details. Ang secret, mukhang single para makaharot. Gising!", 
    category: GameMode.YOUNG_ADULT 
  },

  // --- GREEN FLAGS (10) ---
  { 
    text: "First date, tinanong niya kung may allergies ka o food preferences bago pumili ng restaurant. At nag-offer mag-split ng bill pero in-insist na siya na muna.", 
    isRedFlag: false, 
    wisdom: "Considerate gentleman/lady! Iniisip comfort mo. At yung bill? Green flag ang nag-ooffer pero hindi namimilit. Plus points!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinabi niya sayo: 'Busy week ahead sa work, baka slow reply ako pero babawi ako sa weekend'. Nag-update bago mawala.", 
    isRedFlag: false, 
    wisdom: "Communication is key! Hindi ka pinag-isip, nag-paalam ng maayos. Mature adulting. Intindihin ang hustle!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Boss mo pinauwi ka ng maaga nung nakitang masama pakiramdam mo. 'Health first, trabaho lang yan'.", 
    isRedFlag: false, 
    wisdom: "Empathy in leadership! Bihira yan. Ang kumpanyang may malasakit sa tao, worth staying for. Alagaan mo yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-open up siya about sa finances niya on the 3rd date. 'Eto goals ko, eto debts ko'. Transparent at seryoso.", 
    isRedFlag: false, 
    wisdom: "Financial maturity! Hindi takot pag-usapan ang pera. Seryoso siya sa future niyo. Wifey/Hubby material!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hiningi niya consent mo bago ka i-tag sa photos o bago ka hawakan. 'Is this okay?'", 
    isRedFlag: false, 
    wisdom: "Respect! Hindi nag-aassume. Alam niya ang boundaries at value ng consent. Sobrang green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Workmate mong nag-cover sayo nung nagkamali ka, tapos tinuruan ka paano itama instead na isumbong ka.", 
    isRedFlag: false, 
    wisdom: "Team player! Hindi sipsip, hindi pabibo. Tunay na kakampi sa office jungle. Treat mo ng kape yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinusuportahan niya career moves mo kahit magiging busy ka. 'Go for it, kaya mo yan! Dito lang ako'.", 
    isRedFlag: false, 
    wisdom: "Cheerleader! Hindi insecure sa success mo. Gusto niyang mag-grow ka. Power couple goals!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May sarili siyang hobbies at friends. Hindi umiikot ang mundo niya sayo lang, at ganun din siya sayo.", 
    isRedFlag: false, 
    wisdom: "Healthy independence! Hindi clingy, hindi codependent. Dalawang buong tao na nagmamahalan, hindi dalawang kalahati.", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Inamin niyang mali siya sa argument niyo at nag-sorry nang walang 'pero'. Changed behavior after.", 
    isRedFlag: false, 
    wisdom: "Accountability! Ang hirap aminin na mali ka, pero ginawa niya. At may pagbabago? Ultra rare pokemon! Catch him/her!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Tinanong niya: 'Ano ba ang love language mo?' at nag-effort na gawin yun kahit hindi sanay.", 
    isRedFlag: false, 
    wisdom: "Effort to understand! Gusto ka niyang mahalin sa paraang ramdam mo. Willing matuto para sayo. Kilig!", 
    category: GameMode.YOUNG_ADULT 
  },

  // =================================================================
  // ADULT (30 Scenarios: 20 Red, 10 Green)
  // Focus: Marriage, In-laws, Finances, Parenting
  // =================================================================

  // --- RED FLAGS (20) ---
  { 
    text: "Si Hubby, bumili ng bagong Gaming PC worth 80k using 'savings' niyo, pero nalaman mo lang nung dumating yung delivery rider. 'Surprise' daw.", 
    isRedFlag: true, 
    wisdom: "Financial infidelity! Ang ipon ay para sa pamilya, hindi sa luho ng isa na walang paalam. Yan ang simula ng away sa pera. I-return to sender mo yan pati asawa mo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biyenan mo (Mother-in-law) may susi ng bahay niyo at pumapasok basta-basta kahit tulog pa kayo. Pag nagreklamo ka, sabi ng asawa mo: 'Hayaan mo na, Mama ko naman yan'.", 
    isRedFlag: true, 
    wisdom: "No boundaries! Bahay niyo yan, hindi extension ng bahay ng magulang niya. Pag hindi kaya ng asawa mong ipagtanggol ang privacy niyo, may problema kayo. Mama's boy alert!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Asawa mong never tumulong sa gawaing bahay o pag-aalaga ng bata kasi 'siya naman daw ang nag-tatrabaho/pagod'. 2024 na, Hello?", 
    isRedFlag: true, 
    wisdom: "Weaponized incompetence! Hindi ka katulong, partner ka. Ang pagiging magulang at asawa ay 24/7 job, walang day off. Hati dapat sa hirap at ginhawa, literally!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging sinasabi sayo: 'Ang taba mo na after manganak, mag-gym ka nga'. Pero siya, dad bod na puro beer belly.", 
    isRedFlag: true, 
    wisdom: "Hypocrite body shamer! Nagdala ka ng tao sa tiyan mo ng 9 months, anong excuse niya? Sa beer? Wag kang magpa-apekto sa nega, itapon mo siya sa gym!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tuwing may away kayo, sinusumbong niya sa Nanay niya. Tapos tatawag sayo ang biyenan mo para pagalitan ka.", 
    isRedFlag: true, 
    wisdom: "Tattletale! Anong akala niya, elementary school? Ang away mag-asawa, sa loob lang ng kwarto. Pag involve na ang angkan, gyera na yan! Immature!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tinago niya sayo na may malaki siyang utang sa credit card bago kayo kinasal. Ngayon, hinahabol kayo ng collecting agent.", 
    isRedFlag: true, 
    wisdom: "Debt trap! Kasal means hati sa assets at liabilities. Dinamay ka sa hukay na hindi mo hinukay. Breach of trust yan malala!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw niyang pag-trabahuin ka, gusto niya sa bahay ka lang para 'alagaan siya', kahit gusto mo mag-career. Financial control yarn?", 
    isRedFlag: true, 
    wisdom: "Financial abuse tactic! Gusto niya wala kang pera para hindi ka maka-alis. Ang healthy marriage, supported ang dreams ng bawat isa. Wag maging preso sa sariling bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging nagco-compare: 'Buti pa asawa ni kumpare, payat/mayaman/magaling magluto'.", 
    isRedFlag: true, 
    wisdom: "Comparison kills joy! Edi dun siya sa asawa ni kumpare! Disrespectful yan. You are enough, wag niyang iparamdam na kulang ka.", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag umuuwi, deretso cellphone/games. Ni hindi kinakausap ang mga anak. 'Me time' daw niya kasi stress sa work.", 
    isRedFlag: true, 
    wisdom: "Absentee parent! Andiyan pero wala. Ang mga bata lumalaki, ang games andiyan lang. Pagsisisihan niya yan pag tanda niya na hindi siya kilala ng mga anak niya.", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nahuli mong may 'work wife/husband' na sobrang close. Lunch buddy, hatid-sundo, late night chats about 'work'.", 
    isRedFlag: true, 
    wisdom: "Emotional affair waiting to happen! Boundaries, hello? Ang trabaho sa office lang. Pag may special treatment, alam na. Bantay sarado!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagalit nung bumili ka ng lipstick gamit ang sarili mong pera. 'Sayang pera' daw, pero siya ang lakas sa yosi/alak.", 
    isRedFlag: true, 
    wisdom: "Controlling! Pera mo yan, pinaghirapan mo. Karapatan mong i-spoil ang sarili mo paminsan-minsan. Wag siyang epal!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinipilit kang magka-anak agad kahit hindi pa kayo ready financially at emotionally. 'Bahala na si Lord' daw.", 
    isRedFlag: true, 
    wisdom: "Irresponsible! Ang bata hindi pwedeng pakainin ng dasal lang. Family planning is key. Wag magpadala sa pressure kung hindi pa kaya!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging 'nakakalimutan' ang anniversary at birthday mo. Pero birthday ng barkada, memoryado at may ganap.", 
    isRedFlag: true, 
    wisdom: "Priority check: Failed! Kung mahalaga, hindi makakalimutan. Masakit yan ghorl, you deserve to be celebrated, not forgotten.", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinabihan ka ng asawa mo: 'Swerte mo pinakasalan kita, wala namang magtatagal sa ugali mo'.", 
    isRedFlag: true, 
    wisdom: "Verbal abuse! Pinapababa ang tingin mo sa sarili mo para isipin mong wala kang choice. Toxic! You are lovable, wag maniwala sa kanya.", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tumanggi sa sex minsan kasi pagod ka, tapos nagtampo ng isang linggo at nag-guilt trip.", 
    isRedFlag: true, 
    wisdom: "Sexual coercion! Ang katawan mo, sayo yan. Ang sex ay dapat mutual, hindi obligation na pwedeng ipanumbat. Respeto naman sa pagod!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nalaman mong nagpapadala siya ng malaking pera sa magulang niya buwan-buwan kahit kinukulang na kayo sa budget, nang walang paalam.", 
    isRedFlag: true, 
    wisdom: "Secret remittance! Okay tumulong, pero ang priority dapat ang sariling pamilya at dapat may consensus. Hindi ka ATM ng angkan niya!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may bisita, todo asikaso at bait siya. Pag kayo na lang, sumisigaw at nagdadabog.", 
    isRedFlag: true, 
    wisdom: "Jekyll and Hyde! Pakitang-tao. Nakakatakot yan, ghorl. Ang tunay na ugali lumalabas pag walang audience. Safety first!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw makipag-communicate. Pag may problema, silent treatment ng ilang araw hanggang ikaw na ang sumuko.", 
    isRedFlag: true, 
    wisdom: "Stonewalling! Pang-bata ang silent treatment. Ang matatanda, nag-uusap. Nakakasira ng mental health ang ganyan.", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nung nagkasakit ka, nagalit pa kasi 'walang mag-aasikaso sa kanya'.", 
    isRedFlag: true, 
    wisdom: "Walang empathy! Selfish to the bone. Sakit ka na nga, sarili pa rin niya iniisip? Nurse kailangan mo, hindi pabigat!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging nagbabanta ng annulment/hiwalayan tuwing mainit ang ulo.", 
    isRedFlag: true, 
    wisdom: "Insecurity sa relationship! Ginagawang weapon ang hiwalayan. Nakaka-trauma yan. Ang kasal ay commitment, hindi laro.", 
    category: GameMode.ADULT 
  },

  // --- GREEN FLAGS (10) ---
  { 
    text: "Nag-suggest na mag-bukas kayo ng 'Joint Savings' para sa bills at house goals, pero may 'Separate Personal Fun Fund' pa rin kayo para sa luho ng isa't isa.", 
    isRedFlag: false, 
    wisdom: "Financial wisdom! Teamwork sa goals, freedom sa personal. Yan ang healthy balance para walang sumbatan sa gastos. Matalino!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ipinagtanggol ka sa Nanay niya nung pinuna ang luto mo. Sabi niya: 'Masarap po yan Ma, favorite ko yan'.", 
    isRedFlag: false, 
    wisdom: "United front! Kampi kayo dapat. Hindi niya hinayaang ma-bully ka ng pamilya niya. Yan ang asawa! Solid!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Umuwi siya galing trabaho, nakitang pagod ka sa pag-aalaga ng bata, kinuha niya si baby at sinabing: 'Ako na muna, mag-pahinga ka o mag-shower ka muna'.", 
    isRedFlag: false, 
    wisdom: "Partnership! Ramdam niya ang pagod mo. Hindi siya 'tumutulong' lang, ginagawa niya ang parte niya bilang tatay/nanay. Sarap!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinusuportahan ka sa career shift mo kahit risky, at handang mag-adjust ng budget pansamantala.", 
    isRedFlag: false, 
    wisdom: "Dream supporter! Naniniwala siya sa kakayahan mo. Handa siyang mag-sakripisyo para sa pangarap mo. True love yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagkukusa sa gawaing bahay nang hindi na kailangang utusan. Naglalaba, nagluluto, naglilinis.", 
    isRedFlag: false, 
    wisdom: "Adulting pro! Hindi siya naghahanap ng Nanay, naghahanap siya ng partner. Nakaka-turn on ang lalaking/babaeng masipag sa bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sabi niya: 'Mahal kita, pero kailangan ko ng alone time ngayong gabi para mag-recharge'.", 
    isRedFlag: false, 
    wisdom: "Honesty and self-care! Ang taong inaalagaan ang sarili ay mas makakapag-alaga ng iba. Hindi nakakasakal. Healthy yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-book ng marriage counseling session nung naramdaman niyang hindi na kayo nagkaka-intindihan, para maayos ang pagsasama.", 
    isRedFlag: false, 
    wisdom: "Commitment to fix things! Hindi siya sumusuko, humahanap siya ng solusyon. Gusto niyang mag-work kayo. Saludo si Tita!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tinatandaan ang medical check-ups mo at ng mga bata, at siya ang nag-re-remind sayo.", 
    isRedFlag: false, 
    wisdom: "Mental load sharing! Hindi lahat ng isipin sa bahay ay sayo. Nakikibahagi siya sa responsibilidad. Ang gaan sa feeling!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Regular na nag-dedate night kayo kahit sa bahay lang, walang phones, usap lang about dreams and life.", 
    isRedFlag: false, 
    wisdom: "Keep the fire burning! Hindi porket kasal na, kampante na. Inaalagaan ang connection niyo. Yan ang secret to forever!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nirerespeto ang 'No' mo sa sex at niyayakap ka lang pag gusto mo lang matulog.", 
    isRedFlag: false, 
    wisdom: "Respect and intimacy! Alam niyang intimacy is more than just sex. Safe space mo siya. Sobrang green flag!", 
    category: GameMode.ADULT 
  }
];

export const BADGES: Badge[] = [
  { id: 'baby', name: 'Baby Marites', threshold: 500, icon: '👶', description: 'Nagsisimula pa lang ang chismis journey mo, ineng!' },
  { id: 'lie_detector', name: 'Human Lie Detector', threshold: 1000, icon: '🔍', description: 'Amoy na amoy mo na ang lansa ng mga manloloko. Galing!' },
  { id: 'matriarch', name: 'The Matriarch', threshold: 1500, icon: '👑', description: 'Ultimate Tita Status. Wala ka nang malalampasang red flag. Bow down!' }
];

export const STREAK_BADGES: StreakBadge[] = (function() {
  const badges: StreakBadge[] = [];
  const grandMilestones = [50, 100, 150, 200, 250, 300, 350, 400, 450];
  
  for (let s = 5; s <= 500; s += 5) {
    let name = `Streak Warrior Lv.${s/5}`;
    let icon = "🎖️";
    let message = `Oha! ${s} na sunod-sunod na tama. Galing ha!`;
    let isGrand = false;

    if (s === 5) {
      name = "Amateur Detective";
      icon = "🕵️";
      message = "Not bad, ineng. May pag-asa ka pa. Tuloy mo lang, baka matuto ka ring hindi maging marupok.";
    } else if (grandMilestones.includes(s)) {
      isGrand = true;
      icon = "🔥";
      if (s === 50) { name = "Red Flag Radar"; message = "ABA! 50 consecutive? Amoy na amoy mo na ang lansa mula rito hanggang kabilang kanto! Keep it up, ghorl!"; }
      if (s === 100) { name = "Unscammable Queen"; message = "Hala siya! 100 na! Hindi ka na ba pinanganak kahapon? Matalino ka na ha, parang si Tita lang nung kabataan niya!"; }
      if (s === 150) { name = "Lie Slayer"; message = "Susmaryosep! 150? Napapagod na akong mag-isip ng sermon kasi laging tama ang pinipili mo. Nakakatakot ka na!"; }
      if (s === 200) { name = "The Untouchable"; message = "200?! IKAW NA! Ikaw na ang mag-mana ng mga alahas ko! Wala nang makaka-scam sayo kahit pa si Satanas!"; }
      if (s === 250) { name = "Oracle of Truth"; message = "250 consecutive? Para kang may third eye sa mga red flags. Kitang-kita mo ang kaluluwa ng mga manloloko!"; }
      if (s === 300) { name = "Matriarch Apprentice"; message = "300? Ghorl, graduate ka na sa pagiging Marites. Mentor ka na ngayon ng mga brokenhearted!"; }
      if (s === 350) { name = "The Gatekeeper"; message = "350? Walang makakalusot na red flag sa harap mo. Para kang bouncer ng langit!"; }
      if (s === 400) { name = "Legendary Judge"; message = "400! Nag-aalangan na akong bigyan ka ng advice. Baka mas magaling ka na sakin?"; }
      if (s === 450) { name = "Imperial Tita"; message = "450! Halos wala ka nang mali. Isa ka nang alamat sa mundo ng dating logic!"; }
    } else if (s === 500) {
      isGrand = true;
      name = "THE IMMORTAL TITA OF TRUTH";
      icon = "💎";
      message = "JUSKO LORD! 500 CONSECUTIVE TAMA?! Ineng, lumuhod ka na sa harap ng salamin kasi nakaharap ka na sa diyos ng lahat ng Tita! Wala ka nang kailangan pang matutunan sa mundong ito. Ikaw na ang ultimate guru, ang protector ng lahat ng mga inosente, at ang bangungot ng lahat ng mga fuckboy at scammers sa balat ng lupa! I am officially retiring, sayo na ang korona ko, sayo na ang fan ko, at sayo na ang lahat ng chika sa barangay natin! MAHAL KITA GHORL, YOU ARE UNSTOPPABLE!";
    }

    badges.push({ streak: s, name, icon, message, isGrand });
  }
  return badges;
})();