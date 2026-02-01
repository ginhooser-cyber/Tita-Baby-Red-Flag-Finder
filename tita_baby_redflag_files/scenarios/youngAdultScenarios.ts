import { GameMode, Scenario } from '../types';

// YOUNG ADULT SCENARIOS - 200 NEW SCENARIOS
// Focus: Dating Apps, Work-Life, Early Career, Ghosting, Living Independently
// Difficulty: SUPER HARD - Tricky scenarios that aren't immediately obvious

export const YOUNG_ADULT_SCENARIOS: Scenario[] = [
  // ========== RED FLAGS (130) ==========
  
  // Dating App Red Flags
  { 
    text: "Profile niya sa dating app: 'Not here for hookups' pero first message niya sayo ay 'U up?' at 2AM.", 
    isRedFlag: true, 
    wisdom: "Ay nako iha, 'NOT HERE FOR HOOKUPS' daw pero 2AM nag-memessage?! Ano yan, insomnia support group?! Actions speak louder than bios anak! Kapag ang bio at behavior hindi tugma, ang behavior ang totoo! Swipe left ka na sa pagsisinungaling!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Lahat ng photos niya sa profile ay group pics. Hindi mo alam kung sino siya sa 5 na magkakaibigan.", 
    isRedFlag: true, 
    wisdom: "WALLY ba hinahanap natin dito?! Lahat group pics, ikaw pa mag-detective?! Anak, kung hindi siya confident mag-solo pic, may tinatago yan o sobrang low-effort! Either way, SKIP! Profile should show THEM, not 'Where's Waldo?'!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Bio niya: 'Fluent in sarcasm. If you can't handle me at my worst, you don't deserve me at my best.'", 
    isRedFlag: true, 
    wisdom: "MARILYN MONROE quote pa more! Anak, pag ganyan ang bio, PRE-WARNING yan na hindi accountable sa behavior! 'Handle me at my worst' - translation: TOXIC ako, tanggapin mo! Bio pa lang, red flag na! Swipe left agad, walang second thoughts!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Mabilis nag-unmatch pag hindi ka nag-reply within 5 minutes. Nakabalik sa match list mo, nag-swipe right ulit siya.", 
    isRedFlag: true, 
    wisdom: "5 MINUTES lang tapos unmatch?! Tapos BALIK?! Emotional instability on display anak! Kung ganyan ka-impulsive sa app, paano sa actual relationship?! Patience level: ZERO! Red flag na may matching tantrum!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging nagche-check kung online ka sa app kahit nag-uusap na kayo sa ibang platform.", 
    isRedFlag: true, 
    wisdom: "STALKER mode activated na agad?! Hindi pa kayo pero naka-surveillance ka na?! Anak, kung sa dating app pa lang ganyan na ang monitoring, mag-CCTV na yan sa bahay pag kayo na! Trust issues from DAY ONE - wag mong ituloy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-comment about your body agad sa first message. 'Nice curves, you work out?'", 
    isRedFlag: true, 
    wisdom: "'NICE CURVES' agad?! First message pa lang body na agad?! OBJECTIFICATION yan anak! Respectful people start with personality, not physique! Pag katawan muna ang topic, katawan lang din ang habol! NEXT!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinabi na 'di siya naniniwala sa dating apps' pero nandoon siya at super active pa.", 
    isRedFlag: true, 
    wisdom: "'DI naniniwala sa dating apps' pero MAY PROFILE at SUPER ACTIVE?! Anong klaseng mental gymnastics yan?! Anak, inconsistency sa small things = inconsistency sa big things! Hypocrite na agad, what more pa!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Profile says 'No drama' pero every convo niyo nagkukwento ng ex drama niya.", 
    isRedFlag: true, 
    wisdom: "'NO DRAMA' daw pero puro EX STORIES?! IRONY at its finest anak! Yung 'no drama' people ay usually SOURCE of drama! Kung puro past relationship ang topic, hindi siya over! Move on KA sa kanya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto agad ng phone number at address bago pa man kayo mag-meet. 'Para hindi hassle' daw.", 
    isRedFlag: true, 
    wisdom: "ADDRESS agad gusto?! Hindi pa kayo nagkikita?! SAFETY FIRST anak! Wag magbigay ng personal info sa strangers! 'Para hindi hassle' - hassle saan, sa paghanap sayo kung may mangyari?! RED FLAG na malaki!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-video call pero laging may excuse na off ang camera. 'Pangit daw ng angle'.", 
    isRedFlag: true, 
    wisdom: "LAGING off camera?! 'Pangit ng angle' every time?! CATFISH ALERT anak! Kung totoo siya, isang video call lang hindi masyado mahirap! Pag ayaw magpakita, may TINATAGO! Demand verification before meeting IRL!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Workplace Romance Red Flags
  { 
    text: "Officemate mo na crush mo, laging 'casually' dumadaan sa desk mo pero may ibang ruta naman.", 
    isRedFlag: true, 
    wisdom: "Ay cute daw pero STALKER behavior na yan sa office! 'Casually' dumadaan LAGI?! Anak, workplace boundaries exist for a reason! Cute at first pero pag naging pattern, CREEPY na! Think twice before mixing work at landi!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Boss mo laging nagpapa-OT sayo tapos ikaw lang. 'Special project' daw kasi. Sketchy.", 
    isRedFlag: true, 
    wisdom: "'SPECIAL PROJECT' na ikaw lang kasama?! POWER IMBALANCE red flag anak! Boss using position for personal reasons - that's ABUSE OF AUTHORITY! Document lahat at report sa HR kung kailangan! Wag manahimik!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Workmate mong ka-talking stage, nagrereklamo sa HR about you para mapansin ka daw niya.", 
    isRedFlag: true, 
    wisdom: "NAG-HR para MAPANSIN?! SABOG ba yan?! Anak, using official channels for personal games?! Toxic, irresponsible, at CAREER-DAMAGING! Pwede kang ma-terminate dahil sa kanyang antics! Run far away!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-aayang lunch pero laging kinukwento problems niya sa work at gusto mong mag-side with him/her laban sa iba.", 
    isRedFlag: true, 
    wisdom: "LUNCH date pero puro OFFICE POLITICS?! Gusto niya kakampi ka sa giyera niya?! Anak, USING ka niya for alliances, hindi interested genuinely! Pag laging about work enemies ang topic, hindi romance ang habol - SOLDIER ka!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Flirty siya sa office pero kapag nakita kayo ng boss, biglang formal. Secret lang ang relationship.", 
    isRedFlag: true, 
    wisdom: "FLIRTY sa pribado, FORMAL pag may makakita?! Tinatago ka anak! Kung nahihiya siya sa relationship, baka may ibang agenda yan! Ashamed of you or may OTHER reason bakit secret? Either way, NOT GOOD!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may inside jokes about you sa team meetings. 'Biro lang' daw pero uncomfortable ka.", 
    isRedFlag: true, 
    wisdom: "INSIDE JOKES sa meeting na uncomfortable ka?! PUBLIC EMBARRASSMENT yan kahit 'biro'! Anak, professional setting dapat may professional behavior! Kung nasasaktan ka at 'joke' daw, HINDI YAN FUNNY - harassment yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabi sa colleagues na 'close' kayo pero never naman kayo nag-usap ng serious.", 
    isRedFlag: true, 
    wisdom: "'CLOSE' daw kayo pero di naman?! NAME DROPPING at CLOUT CHASING yan anak! Ginagamit ang 'connection' niyo para sa image niya! User behavior - gamit ka lang para mapapel siya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may project success, siya ang nagta-take ng credit. Pag fail, ikaw daw ang kasama niya.", 
    isRedFlag: true, 
    wisdom: "CREDIT pag success, BLAME pag fail?! PROFESSIONAL BACKSTABBER yan anak! Career sabotage in the making! Kung sa work ganyan na, relationship pa kaya?! Document lahat at stay AWAY!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "HR ka at laging niya kinoconsult ang 'policy' pero puro personal questions ang tinatanong.", 
    isRedFlag: true, 
    wisdom: "'POLICY' consultation pero puro PERSONAL questions?! Using work excuse for personal access! BOUNDARY VIOLATION disguised as professional inquiry anak! Separate ang work at personal life!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-iinvite sa after-work drinks pero puro negative talk about other colleagues.", 
    isRedFlag: true, 
    wisdom: "DRINKS pero puro CHISMIS about officemates?! GOSSIP BUDDY yan hindi romantic interest! Anak, pag ganyan sa iba, GANYAN DIN SA IYO pag wala ka! Tao na naninira ng iba - red flag sa character!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Living Independently Red Flags
  { 
    text: "Partner mo na naka-move in, hindi naglilinis ng sariling kalat. 'Sanay kasi ako may katulong'.", 
    isRedFlag: true, 
    wisdom: "'SANAY sa katulong' excuse?! ADULT na yan dapat marunong na ng basic! Anak, hindi ka YAYA niya! Partnership means SHARED responsibilities! Kung hindi marunong mag-linis, hindi din marunong mag-adult. WALANG DEVELOPMENT!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-aayang mag-live in after 3 months. 'Para maka-save tayo sa rent' daw ang reason.", 
    isRedFlag: true, 
    wisdom: "LIVE-IN after 3 months para MAKATIPID?! Anak, financial convenience ba o genuine commitment?! Living in is BIG DECISION, hindi cost-cutting measure! Pag pera ang reason, pera rin ang magiging problema! Think carefully!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Roommate agreement? Wala daw need. 'Mahal naman kita eh'. No boundaries established.", 
    isRedFlag: true, 
    wisdom: "'MAHAL KITA' daw kaya walang agreement?! Anak, LOVE DOESN'T PAY BILLS! Pag walang written agreement, pag nag-break kayo, IKAW ang talo! 'Mahal kita' hindi contract - lagay mo sa papel ang responsibilities!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may issue sa apartment, ikaw lagi ang kausap ng landlord. Siya walang pakialam.", 
    isRedFlag: true, 
    wisdom: "IKAW lagi nag-aasikaso ng landlord?! Adulting for TWO ka?! Anak, kung ayaw niya ng adult responsibilities NGAYON, paano pa kayo magkaanak?! Red flag ng irresponsibility! Sino ang tunay na adult sa bahay?!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto ng mahal na condo pero ikaw ang sasalo ng bigger portion ng rent. 'Mas malaki naman sweldo mo'.", 
    isRedFlag: true, 
    wisdom: "'MAS MALAKI sweldo mo' kaya ikaw bigger share?! Taking advantage yan! Anak, living expenses should be PROPORTIONAL at fair! Hindi ka sugar mommy/daddy! Kung gusto ng mahal, mag-ambag ng mahal din!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Naka-move in na kayo pero laging may 'emergency' na need ng pera for family niya.", 
    isRedFlag: true, 
    wisdom: "'EMERGENCY' for family EVERY MONTH?! Pattern na yan anak! Check kung totoo ang emergencies o excuse lang para mag-funnel ng pera! Kung laging may crisis, hindi emergency yan - LIFESTYLE yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw sa visitors mo pero friends niya laging andiyan. 'My friends are chill naman'.", 
    isRedFlag: true, 
    wisdom: "BAWAL bisita mo pero WELCOME friends niya?! DOUBLE STANDARD sa shared space! Anak, parang boarding house na HINDI WELCOME ang friends mo! Either pareho may rights o pareho walang - hindi one-sided!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Binabayaran mo lahat ng utilities kasi 'delayed' lagi ang sahod niya. Every month delayed?", 
    isRedFlag: true, 
    wisdom: "'DELAYED' ang sahod EVERY MONTH?! Anak, once or twice okay - pero PATTERN na yan! Either sinungaling o may hidden expenses! Financial red flag yan - investigate! Baka sa iba napupunta ang pera!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang ikaw ang nakapangalan sa lahat - lease, utilities, wifi. Siya walang liability.", 
    isRedFlag: true, 
    wisdom: "LAHAT nakapangalan SAYO?! Siya WALANG liability?! Anak, pag nag-break kayo, IKAW ang may utang sa LAHAT! Protecting self muna before love! Dapat shared ang accountability - hindi ikaw lang ang may papeles!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging mainit ang ulo pag-uwi galing work pero sa labas super nice. Ikaw ang stress outlet.", 
    isRedFlag: true, 
    wisdom: "NICE sa labas pero GALIT sayo sa bahay?! PUNCHING BAG ka?! Anak, home should be SAFE SPACE, not war zone! Kung ikaw ang stress outlet niya, that's EMOTIONAL ABUSE na! Hindi normal at hindi acceptable!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Financial Red Flags
  { 
    text: "Hiram ng hiram pero may pang-gadget at shopping. 'Investment' daw ang iPhone, 'needs' ang bags.", 
    isRedFlag: true, 
    wisdom: "HIRAM sayo pero may PANG-IPHONE?! 'Investment' daw ang gadget?! Anak, ARAY! Lifestyle mo pinopondohan pero sa iba galing ang pera! Financial irresponsibility yan! Hindi ka ATM ng luho niya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw mag-contribute sa shared expenses pero laging may reklamo pag mali ang grocery list mo.", 
    isRedFlag: true, 
    wisdom: "WALANG ambag pero TODO REKLAMO?! All demand, no contribution?! Anak, walang karapatan mag-complain kung walang binibigay! Contributor dapat bago maging critic! Bastos yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Naglalaro ng crypto pero puro loss. 'Bahala na, darating din ang big win.' Gambling mentality.", 
    isRedFlag: true, 
    wisdom: "'DARATING din ang big win' - GAMBLING MENTALITY yan! Crypto na puro LOSS pero tuloy pa rin?! Anak, pati future niyo nakataya! Hindi investment yan, ADDICTION na! Red flag na may dollar sign!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw pag-usapan ang finances. 'Basta may pera, okay na.' No budget, no plans.", 
    isRedFlag: true, 
    wisdom: "'BASTA may pera' - NO PLAN?! Financial avoidance yan! Anak, adulting includes MONEY TALKS! Pag ayaw pag-usapan ang pera, may TINATAGO or may PROBLEM! No transparency = no trust sa finances!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Naka-apply ng credit card gamit ang pangalan mo without consent. 'Para sa future natin'.", 
    isRedFlag: true, 
    wisdom: "CREDIT CARD sa pangalan mo?! WITHOUT CONSENT?! ANAK, IDENTITY THEFT YAN! Kahit jowa mo, CRIMINAL act yan! 'Para sa future natin' - future mo nakacompromise! Report AGAD at protect yourself!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Lahat ng savings niya nasa 'business' ng friend na walang receipts o documents.", 
    isRedFlag: true, 
    wisdom: "SAVINGS nasa 'business' na WALANG PAPERS?! SCAM victim yan o SCAM excuse! Anak, either way, financial disaster waiting to happen! Kung walang documentation, walang business - may PROBLEMA!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nangungutang sa pamilya mo without asking you first. Nahiya ka na sa magulang mo.", 
    isRedFlag: true, 
    wisdom: "NANGUTANG sa FAMILY mo?! Without asking you?! BOUNDARY VIOLATION yan! Anak, using YOUR family as ATM - embarrassing at disrespectful! Sayo nahihiya ang parents mo, siya walang hiya?!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto joint account agad but may hidden personal account 'for emergencies' lang daw.", 
    isRedFlag: true, 
    wisdom: "JOINT account pero may SECRET account?! 'Emergency' daw?! Anak, kung may hidden funds, may hidden plans! Emergency fund o ESCAPE fund?! Transparency should be MUTUAL - hindi one-sided!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging 'naka-budget' sa dates pero pag barkada, todo gastos with matching receipts pa sa IG.", 
    isRedFlag: true, 
    wisdom: "BUDGET daw dates pero BONGGA pag barkada?! PRIORITIES exposed anak! Friends get VIP treatment, ikaw economy class?! Kung may pera for others pero wala for you, hindi ka priority - you're an afterthought!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinesend ang salary breakdown every month para 'transparent' pero galit pag tinanong about expenses.", 
    isRedFlag: true, 
    wisdom: "TRANSPARENT sa income pero GALIT sa expense questions?! SELECTIVE transparency yan! Anak, shows income pero hides spending - anong lohika?! Something doesn't add up - literally!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Communication Red Flags
  { 
    text: "Laging 'busy' mag-text pero active naman sa social media liking other people's posts.", 
    isRedFlag: true, 
    wisdom: "'BUSY' daw pero may time MAG-LIKE ng posts?! Time for scrolling pero wala for you?! Anak, NOT BUSY - just NOT PRIORITIZING you! Kung important ka, may time yan! Actions reveal priorities!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag nag-aaway kayo, biglang 'seen-zoned' ka for days. Babalik na parang walang nangyari.", 
    isRedFlag: true, 
    wisdom: "SEEN-ZONE for days tapos COMEBACK na parang wala lang?! AVOIDANCE coping yan! Anak, adulting means FACING problems, hindi running! Conflict resolution skills: ZERO! Red flag sa communication!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging defensive pag may tanong ka. 'Bakit mo tinatanong yan? Trust issues ka ba?'", 
    isRedFlag: true, 
    wisdom: "'TRUST ISSUES ka ba?' pag tinanong mo?! DEFLECTION yan! Anak, normal questions shouldn't trigger DEFENSE MODE! Kung innocent, bakit nagde-defensive agad?! Sus yan, may tinatago!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hindi nasasabi ang gusto niya directly. Nanghuhula ka lagi kung anong problema.", 
    isRedFlag: true, 
    wisdom: "GUESSING GAME lagi kung anong problema?! PASSIVE-AGGRESSIVE communication yan! Anak, ADULTS use WORDS, not silent hints! Nakakapagod mag-mind reader! Sabihin mo, 'Magsalita ka o wag ka na lang!'", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagpost ng cryptic quote about relationship sa IG pero 'di sayo directed' daw.", 
    isRedFlag: true, 
    wisdom: "CRYPTIC quotes sa IG na 'hindi sayo'?! Sus, sino pa ba?! PASSIVE-AGGRESSIVE posting yan! Anak, kung hindi about you, bakit defensive? Digital drama instead of actual communication - IMMATURE!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag nagkamali ka, di makalimutan. Every argument, bumabalik lahat ng past mistakes.", 
    isRedFlag: true, 
    wisdom: "PAST mistakes LAGING binabalik?! SCOREKEEPER yan! Anak, healthy relationships FORGIVE and MOVE ON! Kung may receipt siya ng lahat ng mali mo, emotional hoarding yan! Hindi ka dapat may utang for life!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may 'but' sa sorry. 'Sorry pero kung hindi ka naman ganyan, di sana ako ganito.'", 
    isRedFlag: true, 
    wisdom: "'SORRY PERO' - yan ba sorry?! NON-APOLOGY specialist yan! Anak, real apology has NO CONDITIONS! 'Sorry pero' means 'actually kasalanan mo pa rin!' Blame shifting disguised as apology!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may achievement ka, walang congrats. Pag may problema ka, 'Sabi ko na eh'.", 
    isRedFlag: true, 
    wisdom: "ABSENT sa WINS mo, PRESENT sa losses?! 'Sabi ko na eh' pang?! Anak, partner should CELEBRATE at SUPPORT you! Kung happy lang siya pag mali ka, that's not love - that's SCHADENFREUDE!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Binabalita sa friends niyo ang private conversations niyo. Walang sacred.", 
    isRedFlag: true, 
    wisdom: "PRIVATE conversations, PUBLIC na?! Walang SACRED sa kanya?! Anak, couple problems are COUPLE problems, not group discussion! Privacy breach yan - pati intimate details, GC topic na! Bastos!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Everything is 'fine' pero halata sa actions na may galit. Guessing game lagi.", 
    isRedFlag: true, 
    wisdom: "'FINE' daw pero ACTIONS say otherwise?! STONEWALLING yan! Anak, grown ups COMMUNICATE, not SULK! Pag laging ganyan, toxic cycle ng confusion! Either magsalita siya o mag-move on ka!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Commitment Red Flags
  { 
    text: "3 years na kayo pero 'di pa rin defined ang relationship. 'Labels are just labels' daw.", 
    isRedFlag: true, 
    wisdom: "3 YEARS na pero walang LABEL?! 'Labels are just labels'?! COMMITMENT-PHOBE yan! Anak, after 3 years, labels are CLARIFICATION! You deserve CLARITY! Kung ayaw niyang i-claim ka publicly, may reason yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may 'what if' about other people. 'What if mas bagay kami ni [name]?'", 
    isRedFlag: true, 
    wisdom: "'WHAT IF' mas bagay sa iba?! Sa harap mo sinasabi?! Anak, present siya physically pero MIND is elsewhere! Grass is greener mentality yan - hindi ka priority, option ka lang! Wag kang Plan B!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw i-meet ang friends or family mo. 'Hindi pa ready for that level.'", 
    isRedFlag: true, 
    wisdom: "'HINDI pa ready' for family?! After HOW LONG?! Anak, hiding the relationship yan! Either ashamed of you o keeping options open! Both are BAD! Kung di ka ma-meet ng loved ones niya, di ka loved one!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-delete ng dating apps after you asked pero may bagong account pala.", 
    isRedFlag: true, 
    wisdom: "NAG-DELETE pero may BAGONG account?! DECEPTIVE deletion yan! Anak, agreed to delete pero may BACKUP?! Walang sincerity! Trust: BROKEN! Kung ganyan kaaga, ano pa ang ipagsisinungaling niya?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging 'di pa ready' for next steps - moving in, meeting family, marriage talks.", 
    isRedFlag: true, 
    wisdom: "'HINDI PA READY' sa lahat?! Years na kayo?! Anak, perpetual 'not ready' is actually 'NOT EVER!' Either fish or cut bait! Waiting game ba forever? Life is too short for eternal 'someday'!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabi na 'soulmates' kayo pero refuses any kind of commitment discussion.", 
    isRedFlag: true, 
    wisdom: "'SOULMATES' daw pero ayaw ng COMMITMENT talk?! WORDS without ACTION anak! Soulmate pero no future plans together? Mixed signals OVERLOAD! Kung soulmate ka, bakit ayaw i-secure ang future?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Compares you to exes often. 'Si ex ganito' o 'Mas [adjective] si ex.'", 
    isRedFlag: true, 
    wisdom: "KINUKUMPARA ka sa EX?! 'Si ex ganito'?! Living in the PAST yan! Anak, if ex was so great, BAKIT SILA NAG-BREAK? IKAW ang present, focus dapat dyan! Comparison is disrespect!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto ng open relationship pero hindi ka naman consulted. 'Para fair' daw.", 
    isRedFlag: true, 
    wisdom: "OPEN relationship na di ka CONSULTED?! 'Para fair' daw?! Anak, UNILATERAL decision on major relationship setup! Both must AGREE! Kung siya lang nag-decide, cheating lang yan na may label!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Meron palang anak na di sinabi agad. 'Baka kasi hindi mo tanggapin.'", 
    isRedFlag: true, 
    wisdom: "MAY ANAK pala na HINDI sinabi?! Major life detail HIDDEN! Anak, 'baka hindi tanggapin' is not reason to LIE! Choice mo dapat kung kaya mo yan! That's DECEPTION, not protection!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Married pala pero 'separated' daw. No legal papers though.", 
    isRedFlag: true, 
    wisdom: "'SEPARATED' pero walang PAPERS?! Anak, legally married is MARRIED! 'Separated' without documents means STILL COMMITTED elsewhere! Wag kang ma-involve sa legal mess! Third party ka nyan technically!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Career vs. Relationship Red Flags
  { 
    text: "Nagalit na nag-OT ka for important project. 'Mas mahalaga pa trabaho sayo kaysa sakin?'", 
    isRedFlag: true, 
    wisdom: "GALIT dahil NAG-OT ka?! Career SABOTAGE yan! Anak, supportive dapat sa career growth! Bills don't pay themselves! Kung competition ang trabaho mo sa kanya, unhealthy ang mindset niya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang mag-resign ka kasi 'dami mong ka-close sa office'. Insecure sa colleagues.", 
    isRedFlag: true, 
    wisdom: "MAG-RESIGN dahil may ka-close ka sa office?! INSECURITY at its finest! Anak, career mo, DECISION mo! Hindi dapat ma-dictate ng insecurities ng partner ang LIVELIHOOD mo! Red flag sa control!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may promotion ka, hindi siya masaya. 'E mas busy ka na naman' ang reaction.", 
    isRedFlag: true, 
    wisdom: "HINDI masaya sa PROMOTION mo?! 'Mas busy ka naman'?! Anak, REAL partner celebrates WINS, not dreads them! Kung threatened sa success mo, gusto niya stagnant ka! Career saboteur yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hinihintay ka mag-resign para siya naman daw mag-focus sa career niya. Your turn to sacrifice.", 
    isRedFlag: true, 
    wisdom: "IKAW mag-resign para SIYA mag-career?! Sacrifice ikaw lang?! Anak, partnership means BOTH can grow! Bakit one-sided ang sacrifice? Hindi fair setup yan - both should flourish!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw na mag-work at gusto na lang maging 'supported' mo. No plans, just dependency.", 
    isRedFlag: true, 
    wisdom: "AYAW mag-work, ikaw na lang daw SUPPORT?! No plans, just DEPENDENCY?! Anak, both should contribute unless properly agreed upon! Financial dependent BY CHOICE without discussion - red flag ng katamaran!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may snide comment about your job. 'Yang trabaho mo ang reason bakit stressed ka.'", 
    isRedFlag: true, 
    wisdom: "PINUPUNA ang trabaho mo na source daw ng stress?! Anak, dapat HELP with stress, not BLAME source of income! Trabaho mo bumubuhay sa inyo - dapat grateful, not critical! Undermining career mo yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gustong i-decide kung saan ka mag-apply at anong role. 'Para malapit sayo ako.'", 
    isRedFlag: true, 
    wisdom: "SIYA mag-decide ng job applications mo?! 'Para malapit'?! CAREER CONTROL yan! Anak, job applications are PERSONAL choices! Overstepping boundaries! Career mo, not couple decision!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag WFH ka, expected na available ka for personal tasks dahil 'nasa bahay ka naman'.", 
    isRedFlag: true, 
    wisdom: "'NASA BAHAY ka naman' so available ka?! WFH ay WORK pa rin! Anak, working from home means WORKING, not vacationing! Respect professional time kahit nasa bahay! Di ka katulong on standby!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabi sa friends na ikaw ang 'breadwinner' as if achievement niya yon.", 
    isRedFlag: true, 
    wisdom: "IKAW breadwinner pero ACHIEVEMENT niya?! Credit grabbing ng hard work mo! Anak, breadwinning is YOUR effort, not couple trophy na siya may credit! Pinapagmalaki ka pero for HIS/HER image!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Every career opportunity abroad or requiring travel, automatic 'No' ang sagot niya.", 
    isRedFlag: true, 
    wisdom: "AUTOMATIC 'NO' sa career opportunities?! Limiting GROWTH mo! Anak, good opportunities should be DISCUSSED, not auto-rejected! Kung di kaya mag-adjust for your career, selfish yan!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Social Circle Red Flags
  { 
    text: "Walang close friends. Lahat daw 'traydor' o 'walang kwenta'. Ikaw na lang daw.", 
    isRedFlag: true, 
    wisdom: "LAHAT ng friends daw TRAYDOR?! 'Ikaw na lang'?! Anak, RED FLAG! Everyone can't be the problem - check the COMMON DENOMINATOR! Kung wala siyang friends, malamang SIYA ang issue! Be careful!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Friends niya puro enablers ng toxic behavior. 'Normal lang yan' lagi ang sagot nila.", 
    isRedFlag: true, 
    wisdom: "FRIENDS niya puro 'normal lang yan'?! ENABLERS yan! Anak, birds of same feather! Kung friends normalize TOXICITY, so will they! Check the circle - it reveals the character!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hindi ka i-introduce sa barkada kasi 'masyadong lahat lalaki/babae' at 'mahirap i-explain'.", 
    isRedFlag: true, 
    wisdom: "'MAHIRAP i-explain' sa barkada?! EXCLUSION from social life! Anak, either ASHAMED of you or may SOMETHING to hide sa friend group! Both are concerning! You should be in ALL aspects of life niya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagseselos sa girl/guy best friend mo. Ultimatum: 'Ako o siya.'", 
    isRedFlag: true, 
    wisdom: "'AKO o SIYA' ultimatum?! MANIPULATION yan! Anak, healthy partners don't FORCE you to choose! Ultimatums are CONTROL tactics! Best friend for years vs. jowa na controlling - sino ang keeper?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may chismis about your friends. 'FYI lang, nakita ko si [friend] with someone.'", 
    isRedFlag: true, 
    wisdom: "'FYI lang' pero puro CHISMIS about friends mo?! TROUBLEMAKER yan! Anak, creating rifts between you and friends! Divide and conquer TACTIC - isolating you through gossip! Wag maniwala agad!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto present sa lahat ng hangouts mo with friends. 'Para quality time din.'", 
    isRedFlag: true, 
    wisdom: "'QUALITY TIME' daw pero sa LAHAT ng hangouts kasama?! No solo friend time allowed?! Anak, that's not quality time - that's SUPERVISION! Controlling behavior disguised as togetherness!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinupuna friends mo lagi. 'Yung friend mo ang bad influence sayo.'", 
    isRedFlag: true, 
    wisdom: "FRIENDS mo 'BAD INFLUENCE' daw?! Anak, isolating tactic yan! Step one: criticize friends. Step two: cut them off. Step three: WALA ka nang support system! Classic manipulation playbook!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagpapaalam ka sa kanya bago mag-commit sa plans with friends. Permission-based friendship.", 
    isRedFlag: true, 
    wisdom: "NAGPAPAALAM before hanging out?! PERMISSION-based friendship?! Anak, you're an ADULT! Informing is COURTESY, asking permission is CONTROL! Hindi ka teenager na may curfew from jowa!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag kasama mo friends, laging may 'emergency' na kailangan mong umalis.", 
    isRedFlag: true, 
    wisdom: "'EMERGENCY' LAGI pag kasama mo friends?! Anak, pattern recognition please! Emergency every time = SABOTAGE of friendships! Not coincidence - calculated disruption! Red flag ng jealousy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pumapayag lang sa hangout kung siya ang pumipili kung sino kasama.", 
    isRedFlag: true, 
    wisdom: "SIYA pipili kung sino KASAMA?! CURATING your social life?! Anak, your friends are YOUR choice, not theirs to approve! That's controlling who you spend time with - RED FLAG!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Family Dynamics Red Flags
  { 
    text: "Nagagalit pag pumupunta ka sa family events. 'Lagi na lang sila priority.'", 
    isRedFlag: true, 
    wisdom: "GALIT sa family events mo?! 'Lagi silang priority' daw?! Anak, FAMILY IS FAMILY! Competing with family is immature! Partner should UNDERSTAND family importance, not resent it!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw ma-meet ang pamilya mo kahit years na kayo. 'Di pa ready for that pressure.'", 
    isRedFlag: true, 
    wisdom: "YEARS na pero ayaw pa ma-meet ang family?! 'Pressure' daw?! Anak, HIDING something or NOT SERIOUS! Meeting family is relationship milestone - kung ayaw, baka wala ngang future plans!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagsasabi ng negative about family mo based sa kwento mo lang. Never naman sila nagkita.", 
    isRedFlag: true, 
    wisdom: "JUDGE agad ang family mo na di pa NAKIKILALA?! Creating negative perception before even meeting! Anak, unfair yan - judging based on one-sided stories! Setting up conflict before it happens!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Parents niya involved sa every decision niyo as couple. 'Sabi ni Mama...'", 
    isRedFlag: true, 
    wisdom: "'SABI NI MAMA' sa every decision?! THIRD PARTY in relationship! Anak, healthy ADULT sets boundaries with parents! Kung mommy's boy/girl pa rin, di pa siya ready for ADULT relationship!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang mag-live in pero parents niya same compound. Privacy? Wala.", 
    isRedFlag: true, 
    wisdom: "LIVE-IN pero PARENTS same compound?! Privacy: ZERO! Anak, extended family living without proper discussion! Privacy is IMPORTANT for couples! Talk about this before committing!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Lahat ng financial decisions, iko-consult muna sa parents. 'Para sigurado.'", 
    isRedFlag: true, 
    wisdom: "CONSULT parents sa lahat ng FINANCES?! 'Para sigurado'?! Anak, still financially dependent on parents' DECISIONS! Kailan ba kayong magiging independent TEAM? Adulting delayed!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Kinukumpara ka sa siblings' partners. 'Buti pa jowa ni kuya, ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "'BUTI PA jowa ni kuya'?! COMPARISON with in-laws?! Anak, unfair standard! Different people, different relationships! Kung laging kulang ka compared to others, never ka magiging enough!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nirerepresent ka sa family gatherings as 'mas mahusay' kaysa sa totoo. Image lang.", 
    isRedFlag: true, 
    wisdom: "PINI-PRESENT ka bilang 'MAS MAHUSAY' kaysa totoo?! Lying about you to family! Anak, building FALSE expectations! Pag nalaman nila totoo, sino mag-aayos? Recipe for disaster!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ipinagkakalat sa buong angkan ang problems niyo. Family group chat knows all.", 
    isRedFlag: true, 
    wisdom: "FAMILY GC knows LAHAT ng problems niyo?! No privacy from extended family! Anak, couple issues should stay between COUPLE first! Bago ang nanay niya, dapat IKAW ang kausap!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw kang isama sa family events nila pero required ka sa family events mo with them.", 
    isRedFlag: true, 
    wisdom: "BAWAL ka sa family niya pero REQUIRED sila sa family mo?! DOUBLE STANDARD! Anak, should be equal integration! Kung welcome sila sayo pero ikaw hindi, unfair setup yan!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Personal Growth Red Flags
  { 
    text: "Ayaw mong mag-level up sa career o skills kasi 'threatened' siya pag mas successful ka.", 
    isRedFlag: true, 
    wisdom: "THREATENED sa SUCCESS mo?! Growth HINDRANCE yan! Anak, real partner CHEERS your success, not FEARS it! Kung insecure siya pag angat ka, gusto niya STAGNANT ka! That's not love!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Bawal mag-gym o mag-improve physically. 'Para kanino ka naman gaganda/gugwapo?'", 
    isRedFlag: true, 
    wisdom: "'Para KANINO ka gaganda?'?! Self-improvement is for YOU, not for others! Anak, insecurity-based CONTROL yan! Bawal mag-gym kasi baka may makaakit? Red flag ng major insecurity!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nilalait hobbies mo. 'Waste of time yang gaming/painting/reading mo.'", 
    isRedFlag: true, 
    wisdom: "'WASTE OF TIME' daw hobbies mo?! HOBBY SHAMING yan! Anak, hobbies are HEALTHY! Partner should RESPECT interests mo! Kung sinisiraan ang joy mo, sinisiraan ka as person!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabihan kang 'enough na yan' pag may new skill na gusto mong matutunan.", 
    isRedFlag: true, 
    wisdom: "'ENOUGH na yan' pag gusto mo mag-learn?! LIMITING learning?! Anak, growth mindset should be ENCOURAGED! Kung gusto niyang stagnant ka, gusto niya controlled ka! Red flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang same level lang kayo forever. No one should outshine the other.", 
    isRedFlag: true, 
    wisdom: "SAME LEVEL lang forever?! No one should OUTSHINE?! STAGNATION by design! Anak, both should GROW, together or individually! Capping potential is SABOTAGE, not love!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw mag-attend ng therapy or self-improvement kahit obvious na kailangan.", 
    isRedFlag: true, 
    wisdom: "AYAW ng therapy kahit OBVIOUS na need?! Refusing self-improvement! Anak, mental health is HEALTH! Willingness to GROW matters! Kung ayaw magpa-tulong, ayaw mag-improve - red flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinagtatawanan ang life goals mo. 'Dreamer ka lang, hindi realistic.'", 
    isRedFlag: true, 
    wisdom: "'DREAMER ka lang' at tinatawanan?! DREAM CRUSHER yan! Anak, partners SUPPORT dreams, not MOCK them! Kung siya pa ang sumisira sa confidence mo, hindi mo siya kailangan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hindi nagshe-share ng new learnings or experiences. 'Wala namang kwenta yan.'", 
    isRedFlag: true, 
    wisdom: "'WALANG KWENTA' ang learnings?! No intellectual SHARING?! Anak, couples should grow together MENTALLY too! Kung walang exchange of ideas, boring at stagnant relationship yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging satisfied na sa mediocre. 'Okay na yan, wag na OA.'", 
    isRedFlag: true, 
    wisdom: "'OKAY na yan, wag OA' sa lahat?! MEDIOCRITY mindset! Anak, some ambition is HEALTHY! Kung satisfied sa bare minimum, magti-tira kayo sa bare minimum forever! Strive for better!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw mag-try ng new experiences. 'Boring ako, deal with it.'", 
    isRedFlag: true, 
    wisdom: "'BORING ako, DEAL with it'?! No growth, no adventure! Anak, life is too SHORT for intentional boringness! Kung proud pa siya sa pagiging stagnant, problematic mindset yan!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Boundaries & Respect Red Flags
  { 
    text: "Kinakalkal ang personal belongings mo. 'We shouldn't have secrets naman.'", 
    isRedFlag: true, 
    wisdom: "KINAKALKAL gamit mo?! 'Shouldn't have secrets'?! Anak, COUPLE doesn't mean NO PERSONAL SPACE! Privacy invasion yan! Boundaries still EXIST even in relationships!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gumagamit ng mga sinabi mo in confidence against you during fights.", 
    isRedFlag: true, 
    wisdom: "VULNERABLE moments mo ginagamit PANLABAN?! EMOTIONAL BETRAYAL yan! Anak, weaponizing vulnerability is the WORST! Trust: DESTROYED! Safe space: WALA! Red flag na malaki!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Kinukuwestiyon ang outfit choices mo. 'Para kanino ka nagpapaganda?'", 
    isRedFlag: true, 
    wisdom: "'Para KANINO ka nagpapaganda?'?! CLOTHING CONTROL yan! Anak, your body, YOUR CLOTHES! Dressing up is PERSONAL expression, not invitation for others! Wag mo i-tolerate ang body policing!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may comment sa weight mo. 'Tumataba/pumapayat ka lately ah.'", 
    isRedFlag: true, 
    wisdom: "LAGING may comment sa WEIGHT?! BODY POLICING yan! Anak, weight comments are NOT helpful - they're HARMFUL! Partner should love you at any size! Constant criticism is abuse!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Binabasa ang journal or diary mo without permission.", 
    isRedFlag: true, 
    wisdom: "BINABASA journal mo?! SACRED SPACE violated! Anak, journal is PERSONAL sanctuary! No excuse for reading it! Invasion of privacy at its WORST! Major trust violation!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinapaalam lahat ng gastos mo kahit personal money mo. 'Para aligned tayo.'", 
    isRedFlag: true, 
    wisdom: "REPORT lahat ng PERSONAL gastos?! 'Para aligned'?! Anak, FINANCIAL CONTROL over personal funds! Personal money is PERSONAL! Aligned is good pero surveillance is not alignment!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw na may solo travel ka. 'Bakit kailangan mo pumunta mag-isa?'", 
    isRedFlag: true, 
    wisdom: "'BAKIT mag-isa?' pag travel?! Solo travel should be RESPECTED! Anak, independence WITHIN relationship is HEALTHY! Kung bawal mag-isa, controlling yan! You're allowed to be individual!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto laging kasama kahit sa doctor's appointments. 'Support' daw.", 
    isRedFlag: true, 
    wisdom: "KASAMA sa doctor LAGI?! 'Support' daw?! Anak, some things are PERSONAL! Offer to come, pero INSISTING is overstepping! Health matters are private unless invited!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may opinion sa decisions na hindi naman niya business. Career, friends, etc.", 
    isRedFlag: true, 
    wisdom: "OPINION sa lahat kahit hindi niya business?! Anak, some things are YOURS to decide alone! Career choices, personal friendships - not everything needs couple approval! Overreaching yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinapa-explain lahat ng actions mo. 'Bakit ganyan? Bakit dyan?' every little thing.", 
    isRedFlag: true, 
    wisdom: "'BAKIT ganyan? Bakit dyan?' sa LAHAT?! MICRO-MANAGING your life! Anak, not everything needs explanation! Exhausting ang mag-justify ng every action! That's control, not care!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Trust & Honesty Red Flags
  { 
    text: "Nahuli mong may dating app pa siya pero 'delete ko na' ang laging excuse.", 
    isRedFlag: true, 
    wisdom: "'DELETE ko na' LAGI ang excuse?! REPEATED offense yan! Anak, how many times dapat 'delete'?! Pattern of DECEPTION! Kung sincere, ONE TIME lang dapat ang delete, not multiple 'deletes'!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May 'work spouse' na super close. Late night chats 'for work' daw.", 
    isRedFlag: true, 
    wisdom: "'WORK SPOUSE' na super close?! Late night chats 'FOR WORK'?! Anak, emotional affair TERRITORY yan! Work boundaries should EXIST! Kung mas close sa officemate kaysa sayo, RED FLAG!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may excuse pag hindi macontact. Phone dead, no signal, slept early. Every time.", 
    isRedFlag: true, 
    wisdom: "LAGING may excuse pag uncontactable?! Phone dead, no signal, tulog - EVERY time?! Anak, chronic unavailability is PATTERN! One time okay, every time is AVOIDANCE! Sus yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sincere siya na galit pero di sincere pag sorry. Cold apologies, heated accusations.", 
    isRedFlag: true, 
    wisdom: "PASSIONATE pag galit pero COLD pag sorry?! Unbalanced emotional investment! Anak, effort sa anger pero wala sa reconciliation? Gusto lang manalo, hindi magka-ayos! Red flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May secret bank account 'for emergencies' na hindi kasama sa shared finances talk.", 
    isRedFlag: true, 
    wisdom: "SECRET bank account?! 'Emergency' fund na HIDDEN?! Anak, emergency fund is FINE if discussed! HIDDEN account is suspicious! Emergency fund o ESCAPE fund yan?!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may 'version' ng story pag may issue. Details change each time.", 
    isRedFlag: true, 
    wisdom: "DETAILS nagbabago every time?! Inconsistent STORYTELLING! Anak, TRUTH doesn't change, LIES do! Kung version ng version, may pinoprotektahan na hindi ikaw! Red flag ng dishonesty!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-gaslighting pag may concern ka. 'Di nangyari yan, gawa-gawa mo lang.'", 
    isRedFlag: true, 
    wisdom: "'GAWA-GAWA mo lang'?! GASLIGHTING yan! Making you doubt REALITY is MANIPULATION! Anak, trust your memory! Kung sinasabi niyang baliw ka, siya ang problema! Major red flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinapakita ang phone pero deleted pala ang history bago ipakita.", 
    isRedFlag: true, 
    wisdom: "CLEAN phone pag pinapakita?! SELECTIVE transparency yan! Anak, clean history is SUSPICIOUS history! What was there before?! Hiding something then pretending to be open - manipulation!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May mga 'white lies' daw na okay lang naman. 'Para di ka ma-hurt.'", 
    isRedFlag: true, 
    wisdom: "'WHITE LIES' okay daw?! 'Para di ka ma-hurt'?! Anak, LIES are LIES! 'White lies' normalizes dishonesty! Once okay ang maliit na lie, okay na rin eventually ang malaki! Truth should be DEFAULT!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Trust issues daw dahil sa past pero years na kayo, wala pa ring trust.", 
    isRedFlag: true, 
    wisdom: "TRUST ISSUES pa rin after YEARS?! Past trauma is VALID pero healing should PROGRESS! Anak, stagnant distrust is UNHEALTHY! Kung di pa rin siya nagtitiwala, will they ever?!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Miscellaneous Red Flags
  { 
    text: "Laging may comparison sa 'love stories' ng friends. 'Sana ganyan din tayo.'", 
    isRedFlag: true, 
    wisdom: "'SANA ganyan din tayo' lagi?! Comparison TRAP yan! Anak, your story is YOUR story! Others' relationships aren't BENCHMARKS! Kung laging kulang compared to iba, never magiging satisfied!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto ng grand gestures pero walang effort sa everyday.", 
    isRedFlag: true, 
    wisdom: "GRAND gestures gusto pero EVERYDAY walang effort?! Instagram vs Reality relationship! Anak, consistency beats occasional GRANDNESS! Pang-show lang gusto, pang-daily wala?!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Perfect siya sa others pero ikaw nakaka-experience ng mood swings at tantrums.", 
    isRedFlag: true, 
    wisdom: "PERFECT sa iba pero IKAW ang nakaka-receive ng tantrums?! Emotional DUMPING ground ka! Anak, best behavior for others, worst for you! Pag ikaw ang punching bag, that's ABUSE!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging 'test' ang ginagawa. Creates scenarios to see how you react.", 
    isRedFlag: true, 
    wisdom: "'TEST' lagi?! Creating scenarios to check you?! MANIPULATION yan! Anak, relationships aren't EXAMS! If constantly testing you, walang trust! Games not love!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Parang walking on eggshells ka. Di mo alam kung anong mood niya bawat araw.", 
    isRedFlag: true, 
    wisdom: "WALKING on EGGSHELLS daily?! Unpredictable moods! Anak, you shouldn't FEAR partner's reaction! Anxiety-inducing relationship is NOT healthy! Home should be SAFE, not stressful!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May pet pero ikaw ang nag-aalaga kasi 'busy' daw siya lagi.", 
    isRedFlag: true, 
    wisdom: "PET niya pero IKAW nag-aalaga?! 'Busy' daw lagi?! Anak, if can't care for PET, imagine bigger responsibilities! Pet responsibility TEST: FAILED! What more kids or shared life?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nangangako pero laging 'next time na lang'. Promises never kept.", 
    isRedFlag: true, 
    wisdom: "'NEXT TIME na lang' forever?! Chronic PROMISE breaker! Anak, actions louder than words! 'Next time' means NEVER! Pattern of empty promises - wag ka nang umasa!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Dati sweet, ngayon cold. 'Ganito talaga pag matagal na.'", 
    isRedFlag: true, 
    wisdom: "'GANITO talaga pag matagal na'?! Effort DECLINE excuse?! Anak, long-term doesn't mean NO EFFORT! Love should be MAINTAINED! Kung normalize ang coldness, normalized na rin ang neglect!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May plans siya for future na hindi kasama ikaw. 'Baka hiwalay na tayo nun.'", 
    isRedFlag: true, 
    wisdom: "'BAKA hiwalay na tayo' sa future plans?! Not thinking TOGETHER long-term?! Anak, if future niya walang ikaw, what's the point of present?! Red flag ng non-commitment!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging victim siya sa lahat ng situations. Never accountable.", 
    isRedFlag: true, 
    wisdom: "VICTIM siya sa LAHAT?! Never ACCOUNTABLE?! Anak, everyone has SOME responsibility! Kung laging iba ang may kasalanan, SIYA ang problem! Victim mentality avoids all responsibility!", 
    category: GameMode.YOUNG_ADULT 
  },

  // ========== GREEN FLAGS (70) ==========
  
  // Communication Green Flags
  { 
    text: "Pag may problema, sinasabi agad nang maayos. 'Hey, can we talk about something?'", 
    isRedFlag: false, 
    wisdom: "'CAN WE TALK about something?' ang approach?! Direct but RESPECTFUL communication! Anak, addresses issues MATURELY! Green flag na adulting! Hindi passive-aggressive - ACTIVE communicator!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Active listener siya. Repeats back what you said to make sure understood.", 
    isRedFlag: false, 
    wisdom: "REPEATS back what you said?! ACTIVE LISTENING yan! Anak, values UNDERSTANDING over responding! Rare at precious skill! Green flag - actually KINIG sa sinasabi mo!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Admits when wrong without making excuses. 'I was wrong about that.'", 
    isRedFlag: false, 
    wisdom: "'I WAS WRONG' walang 'pero'?! ACCOUNTABILITY yan! Anak, no 'buts' or 'ifs' - clean admission of fault! MATURE! Green flag - may humility mag-admit ng pagkakamali!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Asks for your opinion on major decisions. 'What do you think about this?'", 
    isRedFlag: false, 
    wisdom: "'WHAT DO YOU THINK?' sa major decisions?! VALUES your input! Anak, sees you as PARTNER in decision-making! Team mindset! Green flag - kasama ka sa proseso!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gives space when you need it pero checks in after. 'Ready to talk when you are.'", 
    isRedFlag: false, 
    wisdom: "'READY to talk when you are'?! Respects boundaries while showing CARE! Anak, balance of SPACE and PRESENCE! Not pushy pero not absent! Green flag ng emotional intelligence!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Honest about feelings even when uncomfortable. 'I need to be honest with you...'", 
    isRedFlag: false, 
    wisdom: "'I NEED to be honest' kahit uncomfortable?! Courageous HONESTY yan! Anak, values TRUTH over comfort! Trust builder! Green flag - may lakas ng loob magsabi ng totoo!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Fights fair - no name calling, no bringing up past, sticks to issue.", 
    isRedFlag: false, 
    wisdom: "FIGHTS FAIR - no name calling, sticks to issue?! Conflict resolution SKILLS! Anak, fights to SOLVE, not to HURT! Healthy arguing exists and this is IT! Green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Expresses appreciation regularly. 'Thank you for always being understanding.'", 
    isRedFlag: false, 
    wisdom: "'THANK YOU' regularly sinasabi?! Gratitude PRACTICE yan! Anak, makes you feel VALUED! Positive reinforcement! Green flag - hindi ka TAKEN FOR GRANTED!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Discusses future plans including you. 'When we move to...' 'If we decide to...'", 
    isRedFlag: false, 
    wisdom: "'WHEN WE...' 'IF WE...' pang future?! Future-inclusive THINKING! Anak, you're part of their VISION! Commitment sign! Green flag - may KASAMA ka sa plano nila!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Comfortable with difficult conversations about finances, future, expectations.", 
    isRedFlag: false, 
    wisdom: "COMFORTABLE sa difficult conversations?! Adulting TOGETHER yan! Anak, faces HARD topics head-on! Finances, future, expectations - lahat pinag-uusapan! Mature relationship green flag!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Career Support Green Flags
  { 
    text: "Celebrates your career wins genuinely. First one to say 'I'm so proud of you!'", 
    isRedFlag: false, 
    wisdom: "FIRST to say 'PROUD of you!'?! Career CHEERLEADER yan! Anak, genuine happiness for your success! No jealousy - pure CELEBRATION! Green flag na supportive!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Picks up slack at home when you have heavy work periods. No questions asked.", 
    isRedFlag: false, 
    wisdom: "PICKS UP slack pag busy ka?! No questions asked?! Supportive PARTNERSHIP yan! Anak, adjusts to your needs! Real TEAMWORK - walang isang tao lang ang nagbubuhat!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Encourages professional development even if means less time together temporarily.", 
    isRedFlag: false, 
    wisdom: "ENCOURAGES growth kahit less time together?! Unselfish SUPPORT yan! Anak, sacrifices short-term for long-term SUCCESS! Green flag - gusto ka talagang mag-succeed!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects work boundaries. Doesn't blow up phone during work hours.", 
    isRedFlag: false, 
    wisdom: "RESPECTS work hours - hindi nagbi-blow up ng phone?! Professional RESPECT yan! Anak, understands work-life separation! Mature partner! Green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Discusses career goals together and how to achieve them as team.", 
    isRedFlag: false, 
    wisdom: "CAREER goals discussed as TEAM?! Career planning TOGETHER! Anak, both careers MATTER! Mutual support! Green flag - partnership extends to professional life!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Doesn't make you feel guilty for late nights or business trips.", 
    isRedFlag: false, 
    wisdom: "NO GUILT TRIP for late nights?! Understands career DEMANDS! Anak, supportive attitude towards your work! Green flag - gets it na sometimes work comes first!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Helps you prepare for important meetings or presentations.", 
    isRedFlag: false, 
    wisdom: "HELPS prepare for presentations?! ACTIVE career support! Anak, invested in your SUCCESS! Team player! Green flag - hands-on supportive partner!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Celebrates small work wins too, not just major achievements.", 
    isRedFlag: false, 
    wisdom: "CELEBRATES kahit SMALL work wins?! Notices little victories! Anak, makes everyday wins SPECIAL! Thoughtful partner! Green flag - sees all your efforts!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Encourages healthy work-life balance. 'Take a break, you've been working hard.'", 
    isRedFlag: false, 
    wisdom: "'TAKE A BREAK' sinasabi?! Cares about WELLBEING mo! Anak, promotes BALANCE! Protective in good way! Green flag - hindi lang success habol, health mo rin!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Listens to work vents without trying to fix everything unless asked.", 
    isRedFlag: false, 
    wisdom: "LISTENS without always trying to FIX?! Emotional SUPPORT yan! Anak, knows when to listen vs when to advise! Smart partner! Green flag - gets that sometimes you just need to VENT!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Financial Green Flags
  { 
    text: "Open about financial situation - debts, savings, goals. No hidden surprises.", 
    isRedFlag: false, 
    wisdom: "OPEN about debts, savings, goals?! Financial TRANSPARENCY! Anak, foundation of trust in money matters! No hidden surprises! Responsible green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has financial goals and works toward them consistently.", 
    isRedFlag: false, 
    wisdom: "MAY financial goals at WORKING towards them?! Financial RESPONSIBILITY! Anak, plans for future! Stable partner material! Green flag na may direksyon sa buhay!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects individual spending while working on shared goals.", 
    isRedFlag: false, 
    wisdom: "RESPECTS individual spending pero may SHARED goals?! Balanced approach to money! Anak, personal autonomy WITHIN partnership! Green flag - fair setup!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Discusses big purchases together before deciding.", 
    isRedFlag: false, 
    wisdom: "BIG purchases discussed TOGETHER?! Financial COMMUNICATION! Anak, no surprise expenses! Team decision-making sa pera! Green flag - transparent sa finances!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Contributes fairly to shared expenses based on ability.", 
    isRedFlag: false, 
    wisdom: "FAIR contribution based on ABILITY?! Equitable not just equal! Anak, considers both capabilities! Fair ang setup! Green flag - realistic at considerate!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has emergency fund and thinks about financial safety nets.", 
    isRedFlag: false, 
    wisdom: "MAY emergency fund at SAFETY NETS?! Prepared for unexpected! Anak, responsible ADULTING! Future-thinking! Green flag - hindi 'bahala na' ang sistema!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Values experiences over material things in spending priorities.", 
    isRedFlag: false, 
    wisdom: "VALUES experiences over THINGS?! Healthy money values! Anak, memories over stuff! Aligned priorities! Green flag - substance over appearance!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Comfortable living within means, not trying to impress others.", 
    isRedFlag: false, 
    wisdom: "LIVES within means, not pang-impress?! Financially GROUNDED! Anak, no show-off mentality! Real not reel! Green flag - authentic living!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Saves for shared future goals - travel, home, experiences together.", 
    isRedFlag: false, 
    wisdom: "SAVES for shared goals - travel, home?! Investing in 'US'! Anak, shows COMMITMENT through actions! Serious partner! Green flag na may concrete plans!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Handles financial disagreements maturely. No stonewalling or blaming.", 
    isRedFlag: false, 
    wisdom: "HANDLES money fights MATURELY?! No stonewalling or blaming?! Anak, conflict resolution in FINANCES! Important skill! Green flag - can discuss hard topics calmly!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Trust & Respect Green Flags
  { 
    text: "Gives you benefit of doubt. Asks first before assuming worst.", 
    isRedFlag: false, 
    wisdom: "BENEFIT of doubt binibigay?! Asks FIRST before assuming?! Trust-based approach! Anak, no jumping to conclusions! Healthy trust! Green flag na fair ang treatment!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects your privacy. Doesn't snoop through phone or belongings.", 
    isRedFlag: false, 
    wisdom: "RESPECTS privacy - no snooping?! Trust without SURVEILLANCE! Anak, secure relationship! Green flag - loves you without needing to control!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Introduces you to friends and family naturally. Proud to show you off.", 
    isRedFlag: false, 
    wisdom: "PROUD to introduce you?! Naturally showing you off?! Publicly PROUD! Anak, no hidden relationship! Real commitment! Green flag - ikaw ang ipinagmamalaki!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Defends you when not present. Speaks highly of you to others.", 
    isRedFlag: false, 
    wisdom: "DEFENDS you when wala ka?! Speaks HIGHLY of you?! Loyalty in ABSENCE! Anak, same good words behind your back! Genuine! Green flag na loyal!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Keeps promises and follows through on commitments.", 
    isRedFlag: false, 
    wisdom: "KEEPS promises, FOLLOWS through?! Reliable partner! Anak, words match ACTIONS! Trustworthy! Green flag - kapag sinabi, ginagawa!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Comfortable with your friendships including opposite gender.", 
    isRedFlag: false, 
    wisdom: "COMFORTABLE sa opposite-gender friends mo?! Secure ATTACHMENT! Anak, no irrational jealousy! Trusts your judgment! Green flag - confident sa relationship!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects your decisions even when disagrees. 'It's your call.'", 
    isRedFlag: false, 
    wisdom: "'IT'S YOUR CALL' sinasabi?! Respects AUTONOMY even when disagrees?! Anak, doesn't need CONTROL! Healthy independence! Green flag na respeto!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Takes your concerns seriously. Never dismisses your feelings.", 
    isRedFlag: false, 
    wisdom: "TAKES concerns seriously - never dismisses?! Emotional VALIDATION! Anak, your feelings MATTER! Safe space! Green flag - naririnig ka at pinahahalagahan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Consistent behavior whether with you alone or with others.", 
    isRedFlag: false, 
    wisdom: "SAME person whether alone or with others?! AUTHENTICITY! Anak, no two faces! What you see is what you get! Green flag - genuine all the time!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Admits mistakes to others, not just to you. Takes public accountability.", 
    isRedFlag: false, 
    wisdom: "ADMITS mistakes publicly, not just privately?! Public INTEGRITY! Anak, same person everywhere! Character CONSISTENCY! Green flag na may principles!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Personal Growth Green Flags
  { 
    text: "Has personal goals outside the relationship. Hobbies, career, self-improvement.", 
    isRedFlag: false, 
    wisdom: "MAY sariling goals outside relationship?! Complete INDIVIDUAL! Anak, not dependent on you for identity! Healthy! Green flag - whole person even without you!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Open to feedback and works on improving. 'I'll try to do better.'", 
    isRedFlag: false, 
    wisdom: "'I'LL TRY to do better'?! Growth MINDSET! Anak, receives feedback well! Continuous improvement! Green flag - willing mag-change for better!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Encourages your growth even if means you might outgrow them.", 
    isRedFlag: false, 
    wisdom: "ENCOURAGES growth even if might outgrow them?! UNSELFISH support! Anak, values your growth over their comfort! TRUE love yan! Green flag na rare!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Reads, learns, stays curious about world. Has interesting conversations.", 
    isRedFlag: false, 
    wisdom: "READS, learns, stays CURIOUS?! Intellectual curiosity! Anak, continuous learner! Engaging partner! Green flag - never boring ang conversations!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Works on mental health. Goes to therapy or practices self-care.", 
    isRedFlag: false, 
    wisdom: "WORKS on mental health - therapy, self-care?! Mental health AWARENESS! Anak, takes care of inner self! Emotionally healthy! Green flag na mature!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Shares new discoveries and interests with excitement.", 
    isRedFlag: false, 
    wisdom: "SHARES discoveries with EXCITEMENT?! Brings enthusiasm to relationship! Anak, keeps things FRESH! Joy-sharing! Green flag - infectious positivity!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has healthy coping mechanisms for stress. Doesn't take it out on you.", 
    isRedFlag: false, 
    wisdom: "HEALTHY coping - doesn't take stress out on you?! Emotional REGULATION! Anak, manages stress properly! Safe to be around! Green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Reflects on past relationships with maturity. Learned lessons, no bitterness.", 
    isRedFlag: false, 
    wisdom: "REFLECTS on past with maturity - no bitterness?! Processed PAST! Anak, no baggage carried forward! Emotionally AVAILABLE! Green flag na healed!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pushes comfort zone occasionally. Tries new things with openness.", 
    isRedFlag: false, 
    wisdom: "PUSHES comfort zone - tries new things?! Adventure SPIRIT! Anak, grows through new experiences! Fun partner! Green flag - hindi boring!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has mentors or role models. Learns from others' experiences.", 
    isRedFlag: false, 
    wisdom: "HAS mentors and role models?! Humble LEARNER! Anak, seeks wisdom from others! Shows maturity! Green flag - knows they don't know everything!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Emotional Intelligence Green Flags
  { 
    text: "Names and discusses emotions clearly. 'I'm feeling anxious about...'", 
    isRedFlag: false, 
    wisdom: "'I'M FEELING anxious about...' - articulates emotions?! Emotional LITERACY! Anak, can communicate feelings clearly! Facilitates CONNECTION! Green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Knows when to apologize vs when to give space. Reads situations well.", 
    isRedFlag: false, 
    wisdom: "KNOWS when apologize vs give space?! READS situations well! Anak, emotional INTELLIGENCE! Responds appropriately! Green flag na in-tune!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Doesn't hold grudges. Resolves issues and moves forward genuinely.", 
    isRedFlag: false, 
    wisdom: "DOESN'T hold grudges - moves forward?! FORGIVENESS! Anak, doesn't keep score! Clean slate approach! Green flag - no emotional baggage from past fights!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Celebrates your success as own success. 'We did it!'", 
    isRedFlag: false, 
    wisdom: "'WE DID IT!' pag ikaw nag-succeed?! TEAM mentality! Anak, your win is SHARED win! Partnership goals! Green flag - genuinely happy for you!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Handles disappointment maturely. Doesn't lash out or shut down.", 
    isRedFlag: false, 
    wisdom: "HANDLES disappointment maturely - no lashing out?! Emotional REGULATION! Anak, manages negative emotions well! Stable! Green flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Shows vulnerability appropriately. Opens up about struggles.", 
    isRedFlag: false, 
    wisdom: "SHOWS vulnerability - opens up?! Healthy VULNERABILITY! Anak, shares authentic self! Deep CONNECTION! Green flag - trusts you with real feelings!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Supports you during tough times without trying to fix everything.", 
    isRedFlag: false, 
    wisdom: "SUPPORTS without always trying to FIX?! Supportive PRESENCE! Anak, knows when to just BE there! Comforting! Green flag - understands sometimes you just need company!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Recognizes and respects your emotional boundaries.", 
    isRedFlag: false, 
    wisdom: "RESPECTS emotional boundaries?! Boundary RESPECT! Anak, doesn't push too hard! Respectful! Green flag - knows your limits and honors them!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Takes responsibility for own emotional state. Doesn't blame you for moods.", 
    isRedFlag: false, 
    wisdom: "TAKES responsibility for own moods - doesn't blame you?! Emotional OWNERSHIP! Anak, doesn't project! Takes care of self! Green flag na mature!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Shows empathy for others, not just you. Kind to strangers and service workers.", 
    isRedFlag: false, 
    wisdom: "KIND to strangers and service workers, not just you?! GENUINE empathy! Anak, consistent kindness to ALL! Real character! Green flag - authentic na mabait!", 
    category: GameMode.YOUNG_ADULT 
  }
];