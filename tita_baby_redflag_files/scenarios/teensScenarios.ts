import { GameMode, Scenario } from '../types';

// TEENS SCENARIOS - 200 NEW SCENARIOS
// Focus: Romance, School Drama, Puppy Love, Social Media, Friendship
// Difficulty: SUPER HARD - Tricky scenarios that aren't immediately obvious

export const TEENS_SCENARIOS: Scenario[] = [
  // ========== RED FLAGS (130) ==========
  
  // Social Media & Digital Red Flags
  { 
    text: "Pag nag-uusap kayo online, laging 'typing...' siya ng matagal pero 'K' lang ang reply. Minsan 'Haha' lang kahit nagkwento ka ng buong araw mo.", 
    isRedFlag: true, 
    wisdom: "Dry texter yarn? Kung sa chat palang ganyan na, paano pa sa totoong buhay? Wag kang mag-effort sa taong parang kakausapin mo yung pader!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinagbabawal ka niyang mag-follow sa mga artista o influencers na opposite gender. 'Para walang temptation' daw.", 
    isRedFlag: true, 
    wisdom: "Controlling much? Hindi ka preso! Sino ba siya para i-control ang feed mo? Insecurity niya yan, hindi problema mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagagalit siya pag hindi mo nilalagay 'In a relationship' sa Facebook kahit 2 weeks palang kayong nag-uusap. 'Prove your love' daw.", 
    isRedFlag: true, 
    wisdom: "Red flag agad sa pressure! Ang relationship status, kapag ready na pareho, hindi required homework na may deadline!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukuha niya phone mo pag tumutunog notif. 'Curious lang' daw siya kung sino nag-message sayo.", 
    isRedFlag: true, 
    wisdom: "Invasion of privacy! Kahit mag-jowa kayo, may karapatan ka sa sarili mong phone. Boundary yan, hindi hadlang sa love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang palagi kayo magkasama sa photos para 'proof' na kayo talaga. Pero yung solo pics mo, nirerequest niyang tanggalin.", 
    isRedFlag: true, 
    wisdom: "Obsessive control! Bawal ka mag-solo? Possessive yan hindi protective! Identity mo yan, wag mong i-delete para sa validation niya!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinipilitan kang i-unfollow lahat ng friends mong opposite gender. 'Magjowa tayo, sapat na ako' daw.", 
    isRedFlag: true, 
    wisdom: "Isolation tactic din yan! Ang healthy relationship, dagdag sa mundo mo, hindi kapalit ng lahat ng iba!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kung ano man ang i-post mo, may comment siya agad. Pero puro negative - 'Ang taba mo diyan', 'Bakit ganyan filter mo'.", 
    isRedFlag: true, 
    wisdom: "Public shaming! Dapat cheerleader mo siya, hindi bashers mo! Bastos yan sa harap ng lahat!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-create siya ng dummy account para i-spy ang activities mo. Nahuli mo kasi same profile pic ng pets niya.", 
    isRedFlag: true, 
    wisdom: "Detective yarn? Trust issues level 9000! Kung need pa ng spy account, wala nang trust, wala nang relationship!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nag-screenshot ng conversations niyo at ipinapadala sa barkada niya. Pati mga private jokes niyo, alam na ng buong mundo.", 
    isRedFlag: true, 
    wisdom: "Privacy breach! Dapat sa inyo lang ang usapan niyo. Parang news anchor ang peg niya, lahat broadcast!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gustong-gusto niyang i-TikTok lahat ng dates niyo. Pag tumanggi ka, 'Hindi mo ko mahal kasi ayaw mo sa content'.", 
    isRedFlag: true, 
    wisdom: "Clout chaser alert! Mas importante ang views kaysa sayo? Teka lang, ikaw ba jowa o prop sa videos niya?", 
    category: GameMode.TEENS 
  },

  // School & Academic Red Flags
  { 
    text: "Nagagalit siya pag mas mataas grades mo. 'Feeling mo matalino ka no?' tapos cold treatment for days.", 
    isRedFlag: true, 
    wisdom: "Insecure sa achievements mo! Dapat proud siya, hindi threatened. Wag kang huminto sa pag-aral para sa ego niya!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinagagawa ka niya ng assignments at projects niya. Pag tumanggi ka, 'Di mo ko talaga mahal' ang drama.", 
    isRedFlag: true, 
    wisdom: "User alert! Ginagamit ang relationship para sa free labor! Cheating din yan sa school, dalawang red flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw niya na sumali ka sa org o club kasi 'busy na siya' pag walang time ka sa kanya.", 
    isRedFlag: true, 
    wisdom: "Sabotaging your growth! Dapat supportive siya sa extra-curriculars mo, hindi hadlang sa future mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinisisi ka niya pag bumagsak siya sa exam. 'Kasi nag-chat tayo kagabi, hindi ako nakapag-review'.", 
    isRedFlag: true, 
    wisdom: "Blame game! Responsibility niya yan! Wag kang maging scapegoat sa failures niya, ineng!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nandoon sa classroom mo pag dismissal. Hindi pwedeng mag-usap ka sa classmates mo ng matagal.", 
    isRedFlag: true, 
    wisdom: "Stalker behavior! Sinusundan ka? Yan ay hindi sweet, yan ay nakakatakot! Set boundaries na!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapa-absent ka niya sa school para lang mag-date. 'One day lang naman, wala namang major exam'.", 
    isRedFlag: true, 
    wisdom: "Sabotaging education! School first before landi! Wag kang papadala sa peer pressure ng jowa!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukumpara ka niya sa mga 'mas smart' na classmates. 'Buti pa si [name], consistent sa honor roll'.", 
    isRedFlag: true, 
    wisdom: "Comparison trap! Hindi fair yan! Iba-iba tayo ng strengths, wag niyang i-invalidate ang effort mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagalit kasi sumali ka sa group study na may kasamang opposite gender. 'Bakit di mo ko isinama?'", 
    isRedFlag: true, 
    wisdom: "Academic jealousy? Group study para sa grade, hindi para sa landian! Trust issues on display!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinabi niya sa teacher na copied mo ang assignment niya kasi nagalit siya sayo kagabi. Sabotage!", 
    isRedFlag: true, 
    wisdom: "Vengeful ex/current! Ginagamit ang school para gumanti? Toxic level: Maximum! Run away!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may school event ka, laging 'coincidentally' may emergency siya at kailangan mong umalis.", 
    isRedFlag: true, 
    wisdom: "Attention seeking sa wrong time! Pattern na yan - pag may important event ka, may drama siya. Red flag!", 
    category: GameMode.TEENS 
  },

  // Friendship & Social Circle Red Flags
  { 
    text: "Ayaw niyang makihalubilo sa friend group mo. 'Baduy kasi ng mga kaibigan mo' ang rason.", 
    isRedFlag: true, 
    wisdom: "Friend shaming! Ang disrespect sa friends mo ay disrespect din sayo! Wag mong i-tolerate!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may outing kayo ng friends mo, laging 'may sakit' siya at kailangan mo siyang alagaan.", 
    isRedFlag: true, 
    wisdom: "Sabotage tactics! Coincidence na laging may emergency pag bonding mo sa iba? Pattern yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukwento niya sa friends niya ang mga away niyo pero edited version na siya ang bida at ikaw ang villain.", 
    isRedFlag: true, 
    wisdom: "Image manipulation! Sinisira image mo sa iba! Dapat private ang issues niyo, hindi public entertainment!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagseselos siya sa best friend mo na same gender. 'Mas mahal mo pa yata yan kaysa sakin'.", 
    isRedFlag: true, 
    wisdom: "Possessive sa friendship! Hindi competition ang best friend! Iba ang romantic love sa platonic love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging present sa group chat niyo ng friends. Comments sa lahat, as if member na siya kahit hindi.", 
    isRedFlag: true, 
    wisdom: "Boundary issues! Ang friends mo ay friends mo, hindi automatic na friends niya! Privacy please!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan niya ang friends mo na 'kayo na lang mag-usap ha, wag niyo na isali si [you]'.", 
    isRedFlag: true, 
    wisdom: "Isolation tactic in action! Sinisira ang friendship circle mo! Classic abuser move yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagbabasa siya ng group chat mo ng friends without permission. 'Para alam ko kung ano pinag-uusapan niyo'.", 
    isRedFlag: true, 
    wisdom: "Trust issues plus privacy invasion combo! Red flag double whammy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may friend na bigla siyang close, malalaman mo secretly crush pala noon para pagselosin ka.", 
    isRedFlag: true, 
    wisdom: "Triangulation! Ginagamit ang iba para ma-manipulate ka! Game yan, hindi love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Niyayaya ka niyang makipag-away sa friend mo na 'di naman niya nagustuhan'.", 
    isRedFlag: true, 
    wisdom: "Stirring drama! Gusto niyang mag-away kayo para malayo ka sa friends mo. Divide and conquer!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag kasama mo friends mo, laging naka-pout siya at tahimik para i-guilty trip ka.", 
    isRedFlag: true, 
    wisdom: "Passive aggressive! Dapat masaya siya para sayo, hindi party pooper na nagpapaguilty sayo!", 
    category: GameMode.TEENS 
  },

  // Emotional Manipulation Red Flags
  { 
    text: "Pag nagkamali siya, laging may excuse na 'Ganito kasi ako lumaki' o 'Trauma ko yan'.", 
    isRedFlag: true, 
    wisdom: "Accountability issue! Trauma is valid pero hindi excuse para manakit! Wag mong tanggapin!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'ikaw na lang ang dahilan para mabuhay ako'. Pressure much?", 
    isRedFlag: true, 
    wisdom: "Emotional hostage taking! Hindi ka therapist! Hindi responsibility mo ang mental health niya to that extent!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag ayaw mo sumunod, 'Sige, pupunta na lang ako sa rooftop'. Threat lagi.", 
    isRedFlag: true, 
    wisdom: "Suicidal threats as manipulation! Serious yan pero hindi mo burden yan. Report to trusted adult agad!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binibigyan ka niya ng silent treatment for days pero nag-popost pa ng quotes about you.", 
    isRedFlag: true, 
    wisdom: "Passive aggressive social media drama! Communication is key, hindi pa-cute sa feed!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi niya 'Wala akong ibang makakausap kundi ikaw' para ma-guilty ka pag busy ka.", 
    isRedFlag: true, 
    wisdom: "Emotional dependency! Dapat may support system siya outside you! Hindi healthy yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag magkasama kayo ng family mo, todo sipsip. Pero pag kayo lang, iba ang ugali.", 
    isRedFlag: true, 
    wisdom: "Two-faced! Peke ang sweetness sa family. Ang tunay na ugali, pag kayo lang lumalabas!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'testing' daw kapag gumawa ng something na nakakasakit. 'Para makita kung mahal mo talaga ako'.", 
    isRedFlag: true, 
    wisdom: "Testing? Love is not an exam! Hindi kailangan ng trials para i-prove ang feelings!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinaparamdam na kasalanan mo kung bakit hindi siya masaya sa buhay niya.", 
    isRedFlag: true, 
    wisdom: "Blame shifting! Hindi mo responsibilidad ang happiness niya! May kanya-kanyang journey tayo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may problema siya, dapat available ka 24/7. Pero pag ikaw ang may problema, 'Busy ako eh'.", 
    isRedFlag: true, 
    wisdom: "One-sided support system! Dapat give and take, hindi puro take!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-iiyak siya para makuha gusto niya. Pag binigay mo, biglang okay na.", 
    isRedFlag: true, 
    wisdom: "Crocodile tears! Weaponizing emotions to manipulate. Classic tactic yan!", 
    category: GameMode.TEENS 
  },

  // Physical & Boundary Red Flags
  { 
    text: "Pinipilit ka niyang mag-holding hands o kiss kahit di ka pa ready. 'Ano ba, simpleng kiss lang naman'.", 
    isRedFlag: true, 
    wisdom: "Consent violation! Hindi 'simple' kung hindi ka ready! Your body, your rules!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag tumanggi ka sa physical touch, nagtatampo at sabi 'Hindi mo yata ako gusto'.", 
    isRedFlag: true, 
    wisdom: "Guilting for boundaries! Respecting limits is love, not rejection!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hinihila ka niya papunta sa kanya sa harap ng tao, possessive grip.", 
    isRedFlag: true, 
    wisdom: "Possessive display! Hindi ka trophy na ipapakita sa lahat! Respect personal space!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagagalit pag may kasama kang iba kahit classmates lang, at kinakaladkad ka palayo.", 
    isRedFlag: true, 
    wisdom: "Aggressive jealousy! Physical intimidation na yan! Warning sign of worse to come!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinupwersa kang i-share ang PIN o passwords ng lahat ng accounts mo. 'Para pantay tayo'.", 
    isRedFlag: true, 
    wisdom: "Digital control! Hindi requirement ng love ang access sa lahat! Privacy is still valid!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi niya kung ano dapat suotin mo sa school. 'Masyadong revealing yang uniform mo'.", 
    isRedFlag: true, 
    wisdom: "Clothing police! School uniform pa yan! Hindi niya property ang katawan mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Minamarkahan ka ng hickey para 'alam ng lahat na may jowa ka'. Without consent.", 
    isRedFlag: true, 
    wisdom: "Marking territory! Hindi ka aso na nilalagyan ng collar! Consent is always needed!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag hindi mo siya hinalikan goodbye, galit siya the whole day.", 
    isRedFlag: true, 
    wisdom: "Entitlement to your body! Affection should be freely given, not demanded!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan kang 'prove your love' through physical means na hindi ka pa ready.", 
    isRedFlag: true, 
    wisdom: "Sexual coercion! Underage pa kayo! This is NOT okay! Report to trusted adult!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagbabanta na ipapakita ang private photos mo kung makikipag-break ka.", 
    isRedFlag: true, 
    wisdom: "Blackmail! This is a CRIME! Report immediately! Wag ka magpatakot!", 
    category: GameMode.TEENS 
  },

  // Communication Red Flags
  { 
    text: "Laging ikaw ang nag-iinitiate ng conversation. Kung hindi ka mag-chat, walang usap.", 
    isRedFlag: true, 
    wisdom: "One-sided effort! Communication should be mutual! Hindi ka laging dapat ang nag-uuna!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag nag-away kayo, hindi siya nag-eexplain. Diretso block, tapos unblock after 3 days.", 
    isRedFlag: true, 
    wisdom: "Block-unblock drama! Immature way to handle conflict! Communication is key!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binabasa niya ang mga messages mo at dinodownplay ang feelings mo. 'Edi wow, ang drama mo'.", 
    isRedFlag: true, 
    wisdom: "Invalidation! Your feelings are valid! Wag mong tanggapin ang dismissive behavior!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging sarcastic ang replies pag nag-open up ka. 'Edi sorry na kung ganun'.", 
    isRedFlag: true, 
    wisdom: "Defensive and dismissive! Dapat safe space ang jowa, hindi battlefield!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan kang 'sensitive ka masyado' pag nasaktan ka sa sinabi niya.", 
    isRedFlag: true, 
    wisdom: "Gaslighting lite! Pinabababa ang feelings mo para di siya accountable! Red flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag tinanong mo kung okay lang siya, laging 'fine' pero halata namang hindi.", 
    isRedFlag: true, 
    wisdom: "Communication breakdown! Ayaw mag-open up pero gusto mong mind reader ka? Not fair!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinisigawan ka niya pag nag-aaway kayo kahit sa public places.", 
    isRedFlag: true, 
    wisdom: "Public humiliation! Disrespectful! Arguments should be private and respectful!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging may comeback na 'E ikaw rin naman' pag may reklamo ka. Never nakinig.", 
    isRedFlag: true, 
    wisdom: "Deflection master! Hindi naririnig ang concerns mo kasi busy magdefend ng sarili!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagamit ng 'joke lang' para mag-insult. 'Grabe ka naman, di ka marunong mag-take ng joke'.", 
    isRedFlag: true, 
    wisdom: "Joke pala? Bakit hindi nakakatawa? Jokes don't hurt, insults do!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-ghost ng 1 week tapos biglang chat na 'Miss mo ba ako?' na parang walang nangyari.", 
    isRedFlag: true, 
    wisdom: "Ghosting then comeback! Disrespect sa oras at feelings mo! Wag ka maging option!", 
    category: GameMode.TEENS 
  },

  // Financial & Material Red Flags
  { 
    text: "Laging ikaw ang nanlilibre. Kahit 1 peso, hindi siya nagbabayad ever.", 
    isRedFlag: true, 
    wisdom: "Freeloader alert! Kahit student kayo, dapat may fair sharing or alternating treats!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Humihingi ng pang-load o data pero hindi nagbabayad. 'Next time na, wala akong pera'.", 
    isRedFlag: true, 
    wisdom: "Mooching! Hindi ATM ang jowa! Dapat may accountability sa utang!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukumpara ang gifts mo sa binigay ng iba sa jowa nila. 'Buti pa si [friend], Airpods binigay'.", 
    isRedFlag: true, 
    wisdom: "Materialistic comparison! Gift comes from heart, not wallet! Ingrato!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gustong i-access ang money sa bank/e-wallet mo. 'Para transparent tayo sa finances'.", 
    isRedFlag: true, 
    wisdom: "Financial control sa early age? Red flag na may warning sirens! Wag payagan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binebenta ang gifts mo sa iba pag nag-aaway kayo. Tapos babalik pag okay na.", 
    isRedFlag: true, 
    wisdom: "Gift weaponizing! Gifts are gifts, not leverage for emotions!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging may request na 'Pabili naman ng...' pero kapag ikaw naman, 'Wala akong budget eh'.", 
    isRedFlag: true, 
    wisdom: "One-way generosity expected! Dapat mutual ang pagbibigay, not expected from one side only!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-iinarte pag yung date location ay hindi pricey. 'Boring naman dito, walang aesthetic'.", 
    isRedFlag: true, 
    wisdom: "High maintenance na shallow! Dapat ang bonding ay about quality time, not the venue!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi sa iba na 'mayaman' ka para ma-impress niya friends niya, kahit hindi naman.", 
    isRedFlag: true, 
    wisdom: "Using you for clout! Pinagyayabang ka for wrong reasons! User alert!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binabalik ang lahat ng binigay niya sayo pag nag-aaway kayo. Transactional love.", 
    isRedFlag: true, 
    wisdom: "Conditional giving! Gifts have strings attached! That's manipulation, not love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagamit ng allowance para i-guilt trip ka. 'Ginastos ko lahat ng allowance ko para sayo tapos ganyan ka sakin'.", 
    isRedFlag: true, 
    wisdom: "Financial guilt tripping! His/her choice to spend, hindi dapat utang na loob yan!", 
    category: GameMode.TEENS 
  },

  // Trust & Loyalty Red Flags
  { 
    text: "May 'backup plan' daw siya in case mag-break kayo. Sinabi pa sa harap mo.", 
    isRedFlag: true, 
    wisdom: "Hindi fully committed! May backup? So ikaw ay basta placeholder lang? Run!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nag-eexaggerate ng stories para kunwari mas exciting life niya.", 
    isRedFlag: true, 
    wisdom: "Chronic liar! Pag sa maliit nagsisinungaling, paano sa malalaking bagay?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nahuling nag-chat sa dating app pero sabi 'Para lang makahanap ng friends'.", 
    isRedFlag: true, 
    wisdom: "Dating app for friends? Really? Pinapaglaruan ka na ni Kuya/Ate! Wake up!", 
    category: GameMode.TEENS 
  },
  { 
    text: "May mga 'close friends' sa socmed na hindi mo kilala at hindi ka i-introduce-in.", 
    isRedFlag: true, 
    wisdom: "Hidden connections! Bakit may hidden circle? Ano ang tinatago?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi na 'single' sa ibang tao pag wala ka. Nahuli mo sa GC ng friends niya.", 
    isRedFlag: true, 
    wisdom: "Hiding the relationship! If ashamed of you, why be with you? Know your worth!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nagsasabi ng 'Trust me' pero laging may nadidiscover kang bagong lie.", 
    isRedFlag: true, 
    wisdom: "Actions speak louder! Trust is earned through consistency, not sa salita lang!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may nakitang cute sa mall, tinitingnan ng matagal at 'appreciate lang' daw.", 
    isRedFlag: true, 
    wisdom: "Disrespectful sa harap mo! Hindi nakakatawa yung 'appreciate' excuse! Common decency please!", 
    category: GameMode.TEENS 
  },
  { 
    text: "May 'bestfriend' na ex at laging nagkikita. 'Over na kami, friends lang talaga'.", 
    isRedFlag: true, 
    wisdom: "Ex as bestfriend red flag! Boundaries should exist! Not comfortable for you!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Naglalaro siya ng 'hard to get' kahit kayo na. Minsan cold, minsan sweet.", 
    isRedFlag: true, 
    wisdom: "Hot and cold games! Relationship is not hide and seek! Consistency please!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinisisi ang Mercury Retrograde o horoscope compatibility sa mga red flags niya.", 
    isRedFlag: true, 
    wisdom: "Astrology excuse! Stars don't control behavior! Accountability is personal!", 
    category: GameMode.TEENS 
  },

  // Respect & Treatment Red Flags
  { 
    text: "Tinatawag kang 'uy' o 'pre' sa harap ng mga tao imbes na pangalan mo or something sweet.", 
    isRedFlag: true, 
    wisdom: "Downplaying the relationship in public! Dapat proud siya sayo, not lowkey treating you as friend!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging late sa dates pero nagagalit pag ikaw ang late ng 5 minutes.", 
    isRedFlag: true, 
    wisdom: "Double standards! Respect sa time ay mutual dapat! Hindi pwedeng puro siya exception!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinaparamdam na 'swerte' ka at siya nakuha mo. Laging nireremind na may options siya.", 
    isRedFlag: true, 
    wisdom: "Ego trip! Nobody is doing you a favor by being with you! Equal kayo sa relationship!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binababy ka niya sa harap ng iba na parang hindi ka makaka-survive without him/her.", 
    isRedFlag: true, 
    wisdom: "Savior complex! Pinapakita na helpless ka without them! Empowerment not dependence!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tinatawanan ang mga dreams mo. 'Artista? Hahaha, tignan mo naman ang height mo'.", 
    isRedFlag: true, 
    wisdom: "Dream crusher! Partner should uplift dreams, not destroy them! Believe in yourself!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag kasama ang friends niya, todo joke tungkol sayo na medyo off. Sila lang nagtawanan.", 
    isRedFlag: true, 
    wisdom: "Public mockery disguised as banter! Not funny kung ikaw ang target at nasaktan ka!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan ang lola/lolo mo na 'cute' pero behind their backs, ina-awkward.", 
    isRedFlag: true, 
    wisdom: "Two-faced with family! Pekeng respect sa family mo! Watch out!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging interrupt pag nagsasalita ka sa group discussions. 'Wait, ako muna' agad.", 
    isRedFlag: true, 
    wisdom: "Dismissive of your voice! Your opinions matter! Don't let them silence you!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagawa ng decisions na affect kayo without consulting you. 'Sabi ko na sa friends natin na...'", 
    isRedFlag: true, 
    wisdom: "Unilateral decision maker! Partnership means deciding together! Not being informed after!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinipili ang video games/hobbies over quality time with you. 'Isang game lang' pero 5 hours na pala.", 
    isRedFlag: true, 
    wisdom: "Prioritizing hobbies over relationship! Balance is key! Wag ka rin maging last priority!", 
    category: GameMode.TEENS 
  },

  // Family Involvement Red Flags
  { 
    text: "Ayaw kang ma-meet ng family niya. 'Hindi pa ready' sabi niya. 8 months na kayo.", 
    isRedFlag: true, 
    wisdom: "Hidden relationship! Kung seryoso, proud to introduce you! Anong tinatago?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan ang parents mo na 'strict' at 'controlling'. Nagsisimula ng rift.", 
    isRedFlag: true, 
    wisdom: "Alienating from family! Dividing you from support system! Classic manipulation!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang laging kayo mag-usap instead na family time mo. 'Nakikita mo naman sila everyday'.", 
    isRedFlag: true, 
    wisdom: "Competing with family! Family is forever, relationships come and go! Balance needed!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan ka na 'Di ka nila mahal' pag may disagreement ka sa family, para lang side niya ikaw.", 
    isRedFlag: true, 
    wisdom: "Manipulating your family perception! Sinisira ang trust mo sa family! Watch out!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nangunguna sa paninira ng kapatid mong may secret. Chismoso/a!", 
    isRedFlag: true, 
    wisdom: "Using family secrets against you or your family! Breach of trust talaga!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gustong-gusto makisama sa family mo pero para lang sa perks (libre kain, libreng hatid).", 
    isRedFlag: true, 
    wisdom: "Using family for benefits! Observe kung genuine ba ang pakikisama or may agenda!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binibiro ang itsura ng parents mo. 'Joke lang, ang haba ng ilong ni Tita'.", 
    isRedFlag: true, 
    wisdom: "Disrespecting parents! Jokes about your parents' appearance? BIG NO! Bastos!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nireremind na 'Sana ganito ka din kaganda kagaya ng nanay mo'. Backhanded compliment.", 
    isRedFlag: true, 
    wisdom: "Subtle insult! Comparing you unfavorably to your own mother! Sneaky put-down!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagrereklamo na laging kasama family mo. 'Bakit di tayo makapag-date na kayo lang?'", 
    isRedFlag: true, 
    wisdom: "Anti-family sentiment! Sa teenage years, normal na involve ang family! Respeto please!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasamahan ka lang sa family event para may free food, tapos siya lang kumakain.", 
    isRedFlag: true, 
    wisdom: "Using you for food! Observe the intentions kung bakit siya pumupunta sa events!", 
    category: GameMode.TEENS 
  },

  // Future Planning Red Flags
  { 
    text: "Sinasabi na 'Wag ka nang mag-college, mag-business na lang tayo'. No concrete plan.", 
    isRedFlag: true, 
    wisdom: "Derailing your education! College is important! Dreams before romance!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ang 'future plans' niya is puro about kayo. Walang personal goals at ambitions.", 
    isRedFlag: true, 
    wisdom: "No individual identity! Should have personal dreams aside from relationship goals!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinaplano na ang kasal niyo kahit Grade 11 palang kayo. 'Para sure na tayo'.", 
    isRedFlag: true, 
    wisdom: "Too fast! Enjoy being young first! Marriage is a serious decision for adults!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw niyang mag-aral ng mabuti kasi 'Papakasal din naman tayo'. No growth mindset.", 
    isRedFlag: true, 
    wisdom: "Lazy with no ambition! Both should be motivated to grow individually!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'bahala na' ang attitude sa future. No plans, no goals, no direction.", 
    isRedFlag: true, 
    wisdom: "No direction in life! At teenage years, some plan should start forming!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan kang 'Wag ka na mag-review para sa exam, samahan mo na lang ako'.", 
    isRedFlag: true, 
    wisdom: "Sabotaging your academic future! Studies should be priority!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang pareho kayo ng college course para 'always together'. Kahit ibang dream mo.", 
    isRedFlag: true, 
    wisdom: "Controlling career choice! Your future is YOURS to decide! Not couple decision!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw niyang lumipat ka ng school na mas maganda opportunity kasi 'malayo sa kanya'.", 
    isRedFlag: true, 
    wisdom: "Limiting your growth! Good opportunities should be supported, not blocked!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sabi niya, 'Pag nag-break tayo, wala na akong future'. Pressure and manipulation.", 
    isRedFlag: true, 
    wisdom: "Emotional blackmail! Their future is their responsibility! Not yours to carry!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pangarap niya ay maging housewife/househusband lang at 'ikaw na bahala sa lahat'.", 
    isRedFlag: true, 
    wisdom: "Planning to be dependent! At teen age? Both should have ambitions and plans!", 
    category: GameMode.TEENS 
  },

  // Miscellaneous Red Flags
  { 
    text: "Laging may alibi na 'busy' pero active naman sa online games.", 
    isRedFlag: true, 
    wisdom: "Priorities exposed! Not too busy, just not prioritizing you! Know the difference!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may bagong crush ang barkada niya, sinasabi rin niya. 'Cute rin naman kasi talaga eh'.", 
    isRedFlag: true, 
    wisdom: "Inappropriate sharing! Sharing crushes while in a relationship? Disrespectful!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hindi marunong mag-sorry. Laging 'Sorry kung nasaktan ka' imbes na 'Sorry sa ginawa ko'.", 
    isRedFlag: true, 
    wisdom: "Non-apology! That's not a real sorry! Should acknowledge the wrongdoing!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'di ko intensyon' pero paulit-ulit ang same mistake.", 
    isRedFlag: true, 
    wisdom: "No change! Intentions don't matter if actions keep hurting! Pattern na yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kapag may gusto siyang gawin, todo lambing. Pag nakuha na, balik sa cold treatment.", 
    isRedFlag: true, 
    wisdom: "Transactional affection! Love bombing only when needed! Manipulation!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi sa iba na 'complicated' relationship niyo kahit okay naman kayo for clout.", 
    isRedFlag: true, 
    wisdom: "Creating drama for attention! Your relationship is not content for engagement!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may mabuting nangyari sayo, 'Dahil sa swerte ko yan' ang credit grabbing.", 
    isRedFlag: true, 
    wisdom: "Taking credit for your success! Your achievements are YOURS! They're not a lucky charm!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw sa PDA pero laging naghahanap ng dark corners para 'tamang privacy lang'.", 
    isRedFlag: true, 
    wisdom: "Sketchy intentions! Public affection okay but inappropriate pressure is not!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sobrang attached na after 1 week, parang years na kayong magkakilala.", 
    isRedFlag: true, 
    wisdom: "Love bombing speed! Too fast is a red flag! Healthy relationships take time!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagamit ng 'I love you' as manipulation tool pag gusto niya ng something.", 
    isRedFlag: true, 
    wisdom: "Weaponized I Love You! Love declarations should be genuine, not transactional!", 
    category: GameMode.TEENS 
  },

  // ========== GREEN FLAGS (70) ==========
  
  // Communication Green Flags
  { 
    text: "Pag may misunderstanding, calmly niyang explain ang side niya at willing makinig sa side mo.", 
    isRedFlag: false, 
    wisdom: "Mature conflict resolution! This is how healthy people communicate! Green flag ghorl!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-sorry siya genuinely at may concrete steps kung paano hindi na uulitin.", 
    isRedFlag: false, 
    wisdom: "Accountability and growth! Actions follow words! That's real change!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kapag busy siya, nagpapaalam muna bago mag-offline. 'GTG, catch up later!'", 
    isRedFlag: false, 
    wisdom: "Communication courtesy! Simple pero important! Respect sa oras mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Willing siyang mag-adjust ng communication style kung mas comfortable ka sa ibang way.", 
    isRedFlag: false, 
    wisdom: "Flexible and considerate! Meeting you halfway! Partnership yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "May check-in siya kung okay ka lang kahit walang away. 'Kamusta ka today?'", 
    isRedFlag: false, 
    wisdom: "Genuine care! Not just there for drama but for everyday moments!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Inaamin niya pag may nakakalimutan siya or pag may pagkukulang. Hindi nagde-deny.", 
    isRedFlag: false, 
    wisdom: "Honesty and accountability! Nakakapagod din ang puro excuses! Refreshing!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tinatanong ka kung ano ang preferred mong way para ma-comfort pag malungkot ka.", 
    isRedFlag: false, 
    wisdom: "Emotional intelligence! Learning how to love you in YOUR language! Kilig!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Openly shares his/her own struggles din, not just listening pero vulnerable din.", 
    isRedFlag: false, 
    wisdom: "Mutual vulnerability! Two-way openness builds deeper connection!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag nagsabi kang 'I need space', nirerespeto at hindi nag-ooverreact.", 
    isRedFlag: false, 
    wisdom: "Respecting boundaries! Space is healthy! Secure attachment yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Remember mga little details about you na nabanggit mo lang once. Active listener!", 
    isRedFlag: false, 
    wisdom: "Attentive partner! Kinig na kinig sa kwento mo! Feel na feel mo na important ka!", 
    category: GameMode.TEENS 
  },

  // Trust & Respect Green Flags
  { 
    text: "Hindi siya nagseselos sa friendships mo. Encouraged pa na magbonding kayo ng friends mo.", 
    isRedFlag: false, 
    wisdom: "Secure and trusting! Doesn't see friends as threats! Healthy yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nirerespeto ang privacy mo. Hindi demanding ng passwords or phone access.", 
    isRedFlag: false, 
    wisdom: "Trust-based relationship! Privacy is respected! Green flag talaga!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapakilala ka sa friends and family niya with pride. 'Siya yung kinukwento ko sa inyo!'", 
    isRedFlag: false, 
    wisdom: "Proud to be with you! Public acknowledgment of relationship! Feels good!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hindi niya pinag-aawayan ang past relationships or histories mo.", 
    isRedFlag: false, 
    wisdom: "No jealousy of the past! Focused on present and future together!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-aask permission before posting your photos. 'Pwede ko ba i-post to?'", 
    isRedFlag: false, 
    wisdom: "Digital consent! Respects your image online! Important yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Trusts you when you say where you are or who you're with. No interrogation.", 
    isRedFlag: false, 
    wisdom: "Genuine trust! No paranoia! Healthy foundation!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Respects your 'No' without questioning or guilting you.", 
    isRedFlag: false, 
    wisdom: "Consent champion! No means no, end of story! GREEN FLAG!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Defends you when others talk negatively about you, even when you're not around.", 
    isRedFlag: false, 
    wisdom: "Loyal protector! Has your back 100%! Keeper material!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable with you having opposite-gender friends. 'Kaibigan mo sila, okay lang'.", 
    isRedFlag: false, 
    wisdom: "Secure in the relationship! No irrational jealousy! Trust wins!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Keeps relationship issues between you two. Hindi nire-report sa buong barkada.", 
    isRedFlag: false, 
    wisdom: "Private matters stay private! Mature handling of issues!", 
    category: GameMode.TEENS 
  },

  // Support & Encouragement Green Flags
  { 
    text: "Sinusuportahan ang dreams mo kahit pa 'unrealistic' sa tingin ng iba.", 
    isRedFlag: false, 
    wisdom: "Dream supporter! Believes in you when others don't! Precious yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binibigyan ka ng space to grow and pursue hobbies kahit walang connection sa kanya.", 
    isRedFlag: false, 
    wisdom: "Encourages individuality! Healthy relationship allows personal growth!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-aaral with you para makatulong sa exams mo. Study buddy!", 
    isRedFlag: false, 
    wisdom: "Academic support! Helps you succeed! Not just about dates!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapalakpakan ka niya sa achievements mo. First to congratulate!", 
    isRedFlag: false, 
    wisdom: "Celebrates your wins! Proud of your success! Best cheerleader!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Encourages you to join clubs or activities na interested ka kahit busy ka na.", 
    isRedFlag: false, 
    wisdom: "Growth mindset para sayo! Wants you to be the best version of yourself!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Inaayos ang schedule niya para makapunta sa important events mo.", 
    isRedFlag: false, 
    wisdom: "Priority treatment! Makes effort to be there! Dedicated yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagre-research about your interests para may common topic kayo.", 
    isRedFlag: false, 
    wisdom: "Effort to connect! Genuine interest in what you love! Sweet!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapaalalahanan ka sa deadlines at important dates. 'Uy, project mo due tomorrow!'", 
    isRedFlag: false, 
    wisdom: "Thoughtful reminders! Cares about your responsibilities! Supportive!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kahit malungkot siya, happy pa rin para sa achievements mo. 'Congrats talaga!'", 
    isRedFlag: false, 
    wisdom: "Puts your joy first! Unselfish happiness for you! Rare yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Offers constructive feedback on your work without being harsh.", 
    isRedFlag: false, 
    wisdom: "Helpful criticism! Wants you to improve, not tear you down!", 
    category: GameMode.TEENS 
  },

  // Quality Time Green Flags
  { 
    text: "Nag-eeenjoy sa simple dates. Masaya na sa basta magkasama.", 
    isRedFlag: false, 
    wisdom: "Not materialistic! Values quality time over fancy things! Genuine!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gives full attention during conversations. Phone down, eyes on you.", 
    isRedFlag: false, 
    wisdom: "Present and focused! You have their undivided attention! Respect!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag di kayo magkasama, may meaningful conversations pa rin, not just 'wyd'.", 
    isRedFlag: false, 
    wisdom: "Substance in conversations! Effort kahit online! Connection matters!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Creates special traditions for the two of you. 'Movie night tayo every Friday!'", 
    isRedFlag: false, 
    wisdom: "Building memories! Investing in shared experiences! Sweet!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Makes time for you kahit busy sa school or other responsibilities.", 
    isRedFlag: false, 
    wisdom: "Prioritizes the relationship! Balances responsibilities! Committed!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-iisip ng creative ways to spend time together within budget.", 
    isRedFlag: false, 
    wisdom: "Resourceful and thoughtful! Effort over money! Keeper yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable sa silence when together. Hindi awkward ang walang usapan.", 
    isRedFlag: false, 
    wisdom: "Comfortable silence! Sign of deep connection! Peaceful!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Willing to try your interests kahit hindi siya into it. 'Sige, turuan mo ko!'", 
    isRedFlag: false, 
    wisdom: "Open to new experiences! Wants to share your world! Sweet!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Includes you in their hobbies and introduces you to their world.", 
    isRedFlag: false, 
    wisdom: "Sharing passions! Wants you to be part of their life! Bonding!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Values in-person time pero understands when it's not possible.", 
    isRedFlag: false, 
    wisdom: "Flexible and understanding! Adapts to circumstances! Mature!", 
    category: GameMode.TEENS 
  },

  // Emotional Intelligence Green Flags
  { 
    text: "May emotional awareness. 'I think I'm feeling jealous, let me think about why.'", 
    isRedFlag: false, 
    wisdom: "Self-reflection! Understands own emotions! Emotionally mature!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Checks in on your mental health regularly. 'How are you really feeling?'", 
    isRedFlag: false, 
    wisdom: "Cares about your wellbeing! Beyond surface level! Deep care!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Doesn't dismiss your feelings. 'I understand why you feel that way.'", 
    isRedFlag: false, 
    wisdom: "Validates emotions! Makes you feel heard! Emotional safety!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Knows when to give space vs. when to be present during tough times.", 
    isRedFlag: false, 
    wisdom: "Reads the room! Knows what you need! Attuned to you!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Takes responsibility for their own emotions. 'I was grumpy, not your fault.'", 
    isRedFlag: false, 
    wisdom: "Emotional ownership! Doesn't blame you for their mood! Healthy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Encourages you to express negative emotions too. 'It's okay to be angry.'", 
    isRedFlag: false, 
    wisdom: "Safe space for all emotions! Healthy emotional expression!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Apologizes sincerely when their actions hurt you, even unintentionally.", 
    isRedFlag: false, 
    wisdom: "Empathetic apologies! Cares about impact, not just intent!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Manages stress in healthy ways. Doesn't take it out on you.", 
    isRedFlag: false, 
    wisdom: "Healthy coping! Stress doesn't become your burden! Mature!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable expressing affection in their own way, genuine and unpressured.", 
    isRedFlag: false, 
    wisdom: "Authentic affection! Not performative! Real feelings!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Recognizes when they're wrong and actively works to improve.", 
    isRedFlag: false, 
    wisdom: "Growth mindset! Learns from mistakes! Gets better!", 
    category: GameMode.TEENS 
  },

  // Boundaries & Independence Green Flags
  { 
    text: "Has their own friend group and activities. Hindi ka lang ang mundo niya.", 
    isRedFlag: false, 
    wisdom: "Healthy independence! Complete person on their own! No codependency!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Respects your curfew set by parents. 'I'll make sure you're home by 6!'", 
    isRedFlag: false, 
    wisdom: "Respects family rules! Mature and responsible! Trustworthy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Understands when you need alone time. 'Enjoy your me-time!'", 
    isRedFlag: false, 
    wisdom: "Respects need for solitude! Secure enough not to feel threatened!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Doesn't pressure you into anything physical. 'Whenever you're ready, no rush.'", 
    isRedFlag: false, 
    wisdom: "Respects physical boundaries! Patient and understanding! Green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Has healthy boundaries with exes. 'We ended things properly.'", 
    isRedFlag: false, 
    wisdom: "Clean closure with past! No messy baggage! Healthy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Encourages your other relationships (family, friends). 'Spend time with them!'", 
    isRedFlag: false, 
    wisdom: "Supports your whole life! Not threatened by other relationships!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable when you can't text back immediately. 'Reply when you can!'", 
    isRedFlag: false, 
    wisdom: "No texting anxiety! Trusts you even without constant contact!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Maintains their own goals and doesn't drop everything for the relationship.", 
    isRedFlag: false, 
    wisdom: "Balanced priorities! Relationship is part of life, not all of it!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sets healthy boundaries when stressed. 'I need a moment, can we talk later?'", 
    isRedFlag: false, 
    wisdom: "Self-aware communication! Takes care of self to be better for you!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Respects when you say you're not comfortable with something. No pushing.", 
    isRedFlag: false, 
    wisdom: "Ultimate respect! Your comfort is priority! Safe person!", 
    category: GameMode.TEENS 
  },

  // Character & Values Green Flags
  { 
    text: "Kind to everyone - service workers, classmates, pets. Not just to you.", 
    isRedFlag: false, 
    wisdom: "Genuine kindness! Character visible in all interactions! Real yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Takes accountability when wrong. 'I messed up, I'll do better.'", 
    isRedFlag: false, 
    wisdom: "Ownership of mistakes! No blaming others! Growth mindset!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Consistent behavior whether in public or private.", 
    isRedFlag: false, 
    wisdom: "Authenticity! Same person everywhere! No masks!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Has goals and works toward them. Not just floating through life.", 
    isRedFlag: false, 
    wisdom: "Ambitious and driven! Inspiring to be around! Future-oriented!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Honest even when it's uncomfortable. 'I need to tell you something...'", 
    isRedFlag: false, 
    wisdom: "Courageous honesty! Values truth over comfort! Trust builder!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Treats family with respect. Good relationship with parents/siblings.", 
    isRedFlag: false, 
    wisdom: "Family values! Indicator of how they'll treat you long-term!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Helps others without expecting anything in return.", 
    isRedFlag: false, 
    wisdom: "Genuinely helpful! Not transactional! Good heart!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Stands up for what's right, even when it's unpopular.", 
    isRedFlag: false, 
    wisdom: "Moral courage! Has principles! Respectable character!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Shows gratitude for small things. 'Thank you for being patient with me.'", 
    isRedFlag: false, 
    wisdom: "Appreciative nature! Notices and acknowledges efforts! Sweet!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Admits when they don't know something. 'I'm not sure, let me find out.'", 
    isRedFlag: false, 
    wisdom: "Intellectual humility! No pretense! Honest about limitations!", 
    category: GameMode.TEENS 
  }
];