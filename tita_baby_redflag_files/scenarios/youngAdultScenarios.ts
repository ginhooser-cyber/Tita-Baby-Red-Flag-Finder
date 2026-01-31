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
    wisdom: "Mixed signals agad! Words don't match actions! Alam na this, ghorl! Ingat sa mga wolf in sheep's clothing!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Lahat ng photos niya sa profile ay group pics. Hindi mo alam kung sino siya sa 5 na magkakaibigan.", 
    isRedFlag: true, 
    wisdom: "Hiding something? Or insecure sa solo pics? Either way, sus! Low effort sa profile, low effort sa relationship!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Bio niya: 'Fluent in sarcasm. If you can't handle me at my worst, you don't deserve me at my best.'", 
    isRedFlag: true, 
    wisdom: "Marilyn Monroe misquote pa more! Pre-excuse na yan para sa toxic behavior! Red flag sa bio palang!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Mabilis nag-unmatch pag hindi ka nag-reply within 5 minutes. Nakabalik sa match list mo, nag-swipe right ulit siya.", 
    isRedFlag: true, 
    wisdom: "Impatient and impulsive! Ano yan, fast food dating? Pag ganyan kaaga, paano sa actual relationship?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging nagche-check kung online ka sa app kahit nag-uusap na kayo sa ibang platform.", 
    isRedFlag: true, 
    wisdom: "Stalker vibes! Hindi mo pa jowa, naka-surveillance ka na! Trust issues from day one!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-comment about your body agad sa first message. 'Nice curves, you work out?'", 
    isRedFlag: true, 
    wisdom: "Objectification alert! Respectful people start with personality, not physique! Next!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinabi na 'di siya naniniwala sa dating apps' pero nandoon siya at super active pa.", 
    isRedFlag: true, 
    wisdom: "Ano yan, hypocrite? Nandoon ka rin di ba? Inconsistency sa small things = inconsistency sa big things!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Profile says 'No drama' pero every convo niyo nagkukwento ng ex drama niya.", 
    isRedFlag: true, 
    wisdom: "Irony at its finest! 'No drama' pero siya ang source ng drama! Watch out for projectors!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto agad ng phone number at address bago pa man kayo mag-meet. 'Para hindi hassle' daw.", 
    isRedFlag: true, 
    wisdom: "Privacy invasion early on! Safety first! Hindi mo siya kilala, wag bigay personal info agad!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-video call pero laging may excuse na off ang camera. 'Pangit daw ng angle'.", 
    isRedFlag: true, 
    wisdom: "Catfish alert! Bakit tago mukha? Something fishy! Demand video before meeting IRL!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Workplace Romance Red Flags
  { 
    text: "Officemate mo na crush mo, laging 'casually' dumadaan sa desk mo pero may ibang ruta naman.", 
    isRedFlag: true, 
    wisdom: "Subtle stalking! Cute at first pero workplace boundaries exist for a reason! Think twice!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Boss mo laging nagpapa-OT sayo tapos ikaw lang. 'Special project' daw kasi. Sketchy.", 
    isRedFlag: true, 
    wisdom: "Power imbalance! Boss using position for personal reasons! HR worthy yan! Document everything!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Workmate mong ka-talking stage, nagrereklamo sa HR about you para mapansin ka daw niya.", 
    isRedFlag: true, 
    wisdom: "Manipulative tactics! Using official channels for personal games! Toxic at irresponsible!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-aayang lunch pero laging kinukwento problems niya sa work at gusto mong mag-side with him/her laban sa iba.", 
    isRedFlag: true, 
    wisdom: "Using you for office politics! Gusto lang may kakampi! Hindi genuine interest yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Flirty siya sa office pero kapag nakita kayo ng boss, biglang formal. Secret lang ang relationship.", 
    isRedFlag: true, 
    wisdom: "Hidden because ashamed or has another agenda? Relationships shouldn't be shameful secrets!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may inside jokes about you sa team meetings. 'Biro lang' daw pero uncomfortable ka.", 
    isRedFlag: true, 
    wisdom: "Public embarrassment! Professional setting, professional behavior please! Disrespect yan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabi sa colleagues na 'close' kayo pero never naman kayo nag-usap ng serious.", 
    isRedFlag: true, 
    wisdom: "Name dropping and clout chasing! Ginagamit ang 'closeness' para sa image niya! User!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may project success, siya ang nagta-take ng credit. Pag fail, ikaw daw ang kasama niya.", 
    isRedFlag: true, 
    wisdom: "Credit grabber at scapegoat maker! Professional na backstabber! Career sabotage in the making!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "HR ka at laging niya kinoconsult ang 'policy' pero puro personal questions ang tinatanong.", 
    isRedFlag: true, 
    wisdom: "Using work excuse for personal access! Boundary violation disguised as professional inquiry!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-iinvite sa after-work drinks pero puro negative talk about other colleagues.", 
    isRedFlag: true, 
    wisdom: "Gossip buddy, not romantic interest! Pag ganyan sa iba, ganyan din sa iyo eventually!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Living Independently Red Flags
  { 
    text: "Partner mo na naka-move in, hindi naglilinis ng sariling kalat. 'Sanay kasi ako may katulong'.", 
    isRedFlag: true, 
    wisdom: "Dependent adult alert! Hindi ka nanay niya! Partnership means shared responsibilities!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-aayang mag-live in after 3 months. 'Para maka-save tayo sa rent' daw ang reason.", 
    isRedFlag: true, 
    wisdom: "Financial convenience or genuine commitment? Living in is big decision, not cost-cutting measure!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Roommate agreement? Wala daw need. 'Mahal naman kita eh'. No boundaries established.", 
    isRedFlag: true, 
    wisdom: "Love doesn't pay bills! Agreements protect both! 'Mahal kita' isn't a contract!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may issue sa apartment, ikaw lagi ang kausap ng landlord. Siya walang pakialam.", 
    isRedFlag: true, 
    wisdom: "Irresponsible co-tenant! Ayaw ng adult responsibilities! Sino ang adult dito?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto ng mahal na condo pero ikaw ang sasalo ng bigger portion ng rent. 'Mas malaki naman sweldo mo'.", 
    isRedFlag: true, 
    wisdom: "Taking advantage! Should live within combined means! Hindi fair ang ganyang setup!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Naka-move in na kayo pero laging may 'emergency' na need ng pera for family niya.", 
    isRedFlag: true, 
    wisdom: "Pera lagi ang topic? Pattern na yan! Check kung totoo ang emergencies or excuse lang!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw sa visitors mo pero friends niya laging andiyan. 'My friends are chill naman'.", 
    isRedFlag: true, 
    wisdom: "Double standards sa personal space! Parang boarding house na hindi welcome ang friends mo!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Binabayaran mo lahat ng utilities kasi 'delayed' lagi ang sahod niya. Every month delayed?", 
    isRedFlag: true, 
    wisdom: "Financial red flag! Delayed every month is not coincidence, it's pattern! Check receipts!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang ikaw ang nakapangalan sa lahat - lease, utilities, wifi. Siya walang liability.", 
    isRedFlag: true, 
    wisdom: "Avoiding responsibility! Pag nag-break, ikaw ang may problema! Protect yourself legally!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging mainit ang ulo pag-uwi galing work pero sa labas super nice. Ikaw ang stress outlet.", 
    isRedFlag: true, 
    wisdom: "Punching bag ka? Home should be safe space, not war zone! Address or exit!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Financial Red Flags
  { 
    text: "Hiram ng hiram pero may pang-gadget at shopping. 'Investment' daw ang iPhone, 'needs' ang bags.", 
    isRedFlag: true, 
    wisdom: "Financial irresponsibility! Luho over utang? Aray! Ikaw ang nag-iinvest sa lifestyle niya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw mag-contribute sa shared expenses pero laging may reklamo pag mali ang grocery list mo.", 
    isRedFlag: true, 
    wisdom: "All demand, no contribution! Walang karapatan mag-demand kung walang binibigay!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Naglalaro ng crypto pero puro loss. 'Bahala na, darating din ang big win.' Gambling mentality.", 
    isRedFlag: true, 
    wisdom: "Financial gambling disguised as investment! 'Darating din' pero pati future niyo nakataya!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw pag-usapan ang finances. 'Basta may pera, okay na.' No budget, no plans.", 
    isRedFlag: true, 
    wisdom: "Financial avoidance! Adulting includes money talks! No transparency = no trust!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Naka-apply ng credit card gamit ang pangalan mo without consent. 'Para sa future natin'.", 
    isRedFlag: true, 
    wisdom: "Identity theft within relationship! Criminal yan! Love doesn't steal credit scores!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Lahat ng savings niya nasa 'business' ng friend na walang receipts o documents.", 
    isRedFlag: true, 
    wisdom: "Scam victim or scammer excuse? Either way, financial disaster waiting to happen!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nangungutang sa pamilya mo without asking you first. Nahiya ka na sa magulang mo.", 
    isRedFlag: true, 
    wisdom: "Boundary violation! Using your family as ATM! Embarrassing and disrespectful!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto joint account agad but may hidden personal account 'for emergencies' lang daw.", 
    isRedFlag: true, 
    wisdom: "Hidden funds? Emergency or escape fund? Transparency should be mutual!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging 'naka-budget' sa dates pero pag barkada, todo gastos with matching receipts pa sa IG.", 
    isRedFlag: true, 
    wisdom: "Priorities exposed! Friends get the VIP treatment, you get the budget meal! Know your worth!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinesend ang salary breakdown every month para 'transparent' pero galit pag tinanong about expenses.", 
    isRedFlag: true, 
    wisdom: "Selective transparency! Shows income pero hides spending? Something doesn't add up!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Communication Red Flags
  { 
    text: "Laging 'busy' mag-text pero active naman sa social media liking other people's posts.", 
    isRedFlag: true, 
    wisdom: "Not busy, just not prioritizing you! Time for scrolling but not for you? Alam na!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag nag-aaway kayo, biglang 'seen-zoned' ka for days. Babalik na parang walang nangyari.", 
    isRedFlag: true, 
    wisdom: "Avoidance coping! Adulting means facing problems, not running from them!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging defensive pag may tanong ka. 'Bakit mo tinatanong yan? Trust issues ka ba?'", 
    isRedFlag: true, 
    wisdom: "Deflection tactic! Normal questions shouldn't trigger defensive mode! Sus!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hindi nasasabi ang gusto niya directly. Nanghuhula ka lagi kung anong problema.", 
    isRedFlag: true, 
    wisdom: "Passive-aggressive communication! Adults use words, not silent hints! Nakakapagod!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagpost ng cryptic quote about relationship sa IG pero 'di sayo directed' daw.", 
    isRedFlag: true, 
    wisdom: "Passive-aggressive posting! If not about you, why so defensive? Digital drama!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag nagkamali ka, di makalimutan. Every argument, bumabalik lahat ng past mistakes.", 
    isRedFlag: true, 
    wisdom: "Scorekeeping! Healthy relationships forgive and move on! This is emotional hoarding!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may 'but' sa sorry. 'Sorry pero kung hindi ka naman ganyan, di sana ako ganito.'", 
    isRedFlag: true, 
    wisdom: "Non-apology specialist! Real apology has no conditions! That's blame shifting!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may achievement ka, walang congrats. Pag may problema ka, 'Sabi ko na eh'.", 
    isRedFlag: true, 
    wisdom: "Absent sa wins, present sa losses! Partner should celebrate AND support you!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Binabalita sa friends niyo ang private conversations niyo. Walang sacred.", 
    isRedFlag: true, 
    wisdom: "Privacy breach! Couple problems are couple problems, not group discussion!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Everything is 'fine' pero halata sa actions na may galit. Guessing game lagi.", 
    isRedFlag: true, 
    wisdom: "Stonewalling! Grown ups communicate, not sulk! This creates toxic cycle!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Commitment Red Flags
  { 
    text: "3 years na kayo pero 'di pa rin defined ang relationship. 'Labels are just labels' daw.", 
    isRedFlag: true, 
    wisdom: "Commitment-phobe! After 3 years, labels are clarification! You deserve clarity!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may 'what if' about other people. 'What if mas bagay kami ni [name]?'", 
    isRedFlag: true, 
    wisdom: "Grass is greener mentality! Present siya physically pero mind is elsewhere!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw i-meet ang friends or family mo. 'Hindi pa ready for that level.'", 
    isRedFlag: true, 
    wisdom: "Hiding the relationship? Ashamed or keeping options open? Either way, red flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-delete ng dating apps after you asked pero may bagong account pala.", 
    isRedFlag: true, 
    wisdom: "Deceptive deletion! Agreed to delete pero may backup? Walang sincerity!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging 'di pa ready' for next steps - moving in, meeting family, marriage talks.", 
    isRedFlag: true, 
    wisdom: "Perpetual 'not ready'? Years na kayo! Either fish or cut bait! Waiting game ba forever?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabi na 'soulmates' kayo pero refuses any kind of commitment discussion.", 
    isRedFlag: true, 
    wisdom: "Words without action! Soulmate pero walang future plans? Mixed signals overload!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Compares you to exes often. 'Si ex ganito' o 'Mas [adjective] si ex.'", 
    isRedFlag: true, 
    wisdom: "Living in the past! If ex was so great, bakit sila? Present ka, focus dyan!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto ng open relationship pero hindi ka naman consulted. 'Para fair' daw.", 
    isRedFlag: true, 
    wisdom: "Unilateral decision on major relationship change! Red flag! Both must agree on setup!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Meron palang anak na di sinabi agad. 'Baka kasi hindi mo tanggapin.'", 
    isRedFlag: true, 
    wisdom: "Major life detail hidden! That's not protecting feelings, that's deception!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Married pala pero 'separated' daw. No legal papers though.", 
    isRedFlag: true, 
    wisdom: "Legally married is MARRIED! 'Separated' without papers means still committed elsewhere!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Career vs. Relationship Red Flags
  { 
    text: "Nagalit na nag-OT ka for important project. 'Mas mahalaga pa trabaho sayo kaysa sakin?'", 
    isRedFlag: true, 
    wisdom: "Career sabotage! Dapat supportive sa career growth! Bills don't pay themselves!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang mag-resign ka kasi 'dami mong ka-close sa office'. Insecure sa colleagues.", 
    isRedFlag: true, 
    wisdom: "Controlling career for personal insecurity! Your career is YOUR decision!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag may promotion ka, hindi siya masaya. 'E mas busy ka na naman' ang reaction.", 
    isRedFlag: true, 
    wisdom: "Insecure sa success mo! Real partner celebrates wins, not dreads them!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hinihintay ka mag-resign para siya naman daw mag-focus sa career niya. Your turn to sacrifice.", 
    isRedFlag: true, 
    wisdom: "Career sacrifice expected from you only? Partnership means both can grow!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw na mag-work at gusto na lang maging 'supported' mo. No plans, just dependency.", 
    isRedFlag: true, 
    wisdom: "Financial dependent by choice! Both should contribute unless agreed upon properly!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may snide comment about your job. 'Yang trabaho mo ang reason bakit stressed ka.'", 
    isRedFlag: true, 
    wisdom: "Undermining career satisfaction! Should help with stress, not blame source of income!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gustong i-decide kung saan ka mag-apply at anong role. 'Para malapit sayo ako.'", 
    isRedFlag: true, 
    wisdom: "Career control! Job applications are personal choices! This is overstepping!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag WFH ka, expected na available ka for personal tasks dahil 'nasa bahay ka naman'.", 
    isRedFlag: true, 
    wisdom: "WFH ≠ Day off! Work is work wherever you are! Respect professional time!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabi sa friends na ikaw ang 'breadwinner' as if achievement niya yon.", 
    isRedFlag: true, 
    wisdom: "Taking credit for your hard work! Breadwinning is YOUR effort, not couple trophy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Every career opportunity abroad or requiring travel, automatic 'No' ang sagot niya.", 
    isRedFlag: true, 
    wisdom: "Limiting career growth! Good opportunities should be discussed, not auto-rejected!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Social Circle Red Flags
  { 
    text: "Walang close friends. Lahat daw 'traydor' or 'walang kwenta'. Ikaw na lang daw.", 
    isRedFlag: true, 
    wisdom: "No friends is a red flag! Everyone can't be the problem. Check the common denominator!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Friends niya puro enablers ng toxic behavior. 'Normal lang yan' lagi ang sagot nila.", 
    isRedFlag: true, 
    wisdom: "Birds of same feather! If friends normalize toxicity, so will they! Check the circle!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hindi ka i-introduce sa barkada kasi 'masyadong lahat lalaki/babae' at 'mahirap i-explain'.", 
    isRedFlag: true, 
    wisdom: "Exclusion from social life! Either ashamed or hiding something! Both are bad!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagseselos sa girl/guy best friend mo. Ultimatum: 'Ako o siya.'", 
    isRedFlag: true, 
    wisdom: "Ultimatums are manipulation! Healthy partners don't force you to choose!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may chismis about your friends. 'FYI lang, nakita ko si [friend] with someone.'", 
    isRedFlag: true, 
    wisdom: "Troublemaker! Creating rifts between you and friends! Divide and conquer tactic!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto present sa lahat ng hangouts mo with friends. 'Para quality time din.'", 
    isRedFlag: true, 
    wisdom: "No solo friend time allowed? That's not quality time, that's supervision!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinupuna friends mo lagi. 'Yung friend mo ang bad influence sayo.'", 
    isRedFlag: true, 
    wisdom: "Isolating you from support! Criticizing friends is step one of isolation!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagpapaalam ka sa kanya bago mag-commit sa plans with friends. Permission-based friendship.", 
    isRedFlag: true, 
    wisdom: "You're an adult! Informing is courtesy, asking permission is control!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pag kasama mo friends, laging may 'emergency' na kailangan mong umalis.", 
    isRedFlag: true, 
    wisdom: "Sabotaging friendships! Emergency every time? Pattern recognition please!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pumapayag lang sa hangout kung siya ang pumipili kung sino kasama.", 
    isRedFlag: true, 
    wisdom: "Curating your social life! Your friends are YOUR choice, not theirs!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Family Dynamics Red Flags
  { 
    text: "Nagagalit pag pumupunta ka sa family events. 'Lagi na lang sila priority.'", 
    isRedFlag: true, 
    wisdom: "Competing with family! Family is family, partner should understand that!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw ma-meet ang pamilya mo kahit years na kayo. 'Di pa ready for that pressure.'", 
    isRedFlag: true, 
    wisdom: "Avoiding family introduction? Hiding something or not serious? Both concerning!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nagsasabi ng negative about family mo based sa kwento mo lang. Never naman sila nagkita.", 
    isRedFlag: true, 
    wisdom: "Judging family without knowing them! Creating negative perception before meeting!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Parents niya involved sa every decision niyo as couple. 'Sabi ni Mama...'", 
    isRedFlag: true, 
    wisdom: "Third party in relationship! Healthy adult sets boundaries with parents!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang mag-live in pero parents niya same compound. Privacy? Wala.", 
    isRedFlag: true, 
    wisdom: "Extended family living without discussion! Privacy is important for couples!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Lahat ng financial decisions, iko-consult muna sa parents. 'Para sigurado.'", 
    isRedFlag: true, 
    wisdom: "Still financially dependent on parents' decisions! When will you be a team?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Kinukumpara ka sa siblings' partners. 'Buti pa jowa ni kuya, ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "Comparison with in-law! Unfair standard! Different people, different relationships!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nirerepresent ka sa family gatherings as 'mas mahusay' kaysa sa totoo. Image lang.", 
    isRedFlag: true, 
    wisdom: "Lying about you to family! Building false expectations! Recipe for disaster!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ipinagkakalat sa buong angkan ang problems niyo. Family group chat knows all.", 
    isRedFlag: true, 
    wisdom: "No privacy from extended family! Couple issues should stay between couple!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw kang isama sa family events nila pero required ka sa family events mo with them.", 
    isRedFlag: true, 
    wisdom: "Double standard sa family involvement! Should be equal integration!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Personal Growth Red Flags
  { 
    text: "Ayaw mong mag-level up sa career o skills kasi 'threatened' siya pag mas successful ka.", 
    isRedFlag: true, 
    wisdom: "Growth hindrance! Real partner cheers your success, not fears it!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Bawal mag-gym o mag-improve physically. 'Para kanino ka naman gaganda/gugwapo?'", 
    isRedFlag: true, 
    wisdom: "Insecurity-based control! Self-improvement is for YOU, not for others!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nilalait hobbies mo. 'Waste of time yang gaming/painting/reading mo.'", 
    isRedFlag: true, 
    wisdom: "Hobby shaming! Hobbies are healthy! Partner should respect your interests!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sinasabihan kang 'enough na yan' pag may new skill na gusto mong matutunan.", 
    isRedFlag: true, 
    wisdom: "Limiting learning! Growth mindset should be encouraged! This is sabotage!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto niyang same level lang kayo forever. No one should outshine the other.", 
    isRedFlag: true, 
    wisdom: "Stagnation by design! Both should grow, together or individually! This caps potential!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw mag-attend ng therapy or self-improvement kahit obvious na kailangan.", 
    isRedFlag: true, 
    wisdom: "Refusing self-improvement! Mental health is health! Willingness to grow matters!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinagtatawanan ang life goals mo. 'Dreamer ka lang, hindi realistic.'", 
    isRedFlag: true, 
    wisdom: "Dream crusher! Partners support dreams, not mock them! Believe in yourself!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Hindi nagshe-share ng new learnings or experiences. 'Wala namang kwenta yan.'", 
    isRedFlag: true, 
    wisdom: "No intellectual sharing! Couples should grow together mentally too!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging satisfied na sa mediocre. 'Okay na yan, wag na OA.'", 
    isRedFlag: true, 
    wisdom: "Mediocrity mindset! Some ambition is healthy! This attitude holds both back!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw mag-try ng new experiences. 'Boring ako, deal with it.'", 
    isRedFlag: true, 
    wisdom: "No growth, no adventure! Life is too short for intentional boringness!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Boundaries & Respect Red Flags
  { 
    text: "Kinakalkal ang personal belongings mo. 'We shouldn't have secrets naman.'", 
    isRedFlag: true, 
    wisdom: "Privacy invasion! Couple ≠ No personal space! Boundaries still exist!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gumagamit ng mga sinabi mo in confidence against you during fights.", 
    isRedFlag: true, 
    wisdom: "Weaponizing vulnerability! That's emotional betrayal! Trust destroyed!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Kinukuwestiyon ang outfit choices mo. 'Para kanino ka nagpapaganda?'", 
    isRedFlag: true, 
    wisdom: "Clothing control! Your body, your clothes! Dressing up is personal expression!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may comment sa weight mo. 'Tumataba/pumapayat ka lately ah.'", 
    isRedFlag: true, 
    wisdom: "Body policing! Weight comments are not helpful, they're harmful!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Binabasa ang journal or diary mo without permission.", 
    isRedFlag: true, 
    wisdom: "Sacred space violated! Journal is personal sanctuary! No excuse for reading it!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinapaalam lahat ng gastos mo kahit personal money mo. 'Para aligned tayo.'", 
    isRedFlag: true, 
    wisdom: "Financial control over personal funds! Personal money is personal!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Ayaw na may solo travel ka. 'Bakit kailangan mo pumunta mag-isa?'", 
    isRedFlag: true, 
    wisdom: "Solo travel should be respected! Independence within relationship is healthy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto laging kasama kahit sa doctor's appointments. 'Support' daw.", 
    isRedFlag: true, 
    wisdom: "Overstepping! Some things are personal! Offer to come, don't insist!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may opinion sa decisions na hindi naman niya business. Career, friends, etc.", 
    isRedFlag: true, 
    wisdom: "Overreaching opinions! Some things are yours to decide alone!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinapa-explain lahat ng actions mo. 'Bakit ganyan? Bakit dyan?' every little thing.", 
    isRedFlag: true, 
    wisdom: "Micro-managing life! Not everything needs explanation! Exhausting!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Trust & Honesty Red Flags
  { 
    text: "Nahuli mong may dating app pa siya pero 'delete ko na' ang laging excuse.", 
    isRedFlag: true, 
    wisdom: "Repeated offense! How many times dapat 'delete'? Pattern of deception!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May 'work spouse' na super close. Late night chats 'for work' daw.", 
    isRedFlag: true, 
    wisdom: "Emotional affair territory! Work boundaries should exist! This is crossing!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may excuse pag hindi macontact. Phone dead, no signal, slept early. Every time.", 
    isRedFlag: true, 
    wisdom: "Chronic unavailability! One time okay, every time is a pattern of avoidance!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Sincere siya na galit pero di sincere pag sorry. Cold apologies, heated accusations.", 
    isRedFlag: true, 
    wisdom: "Unbalanced emotional investment! Passion in anger, indifference in reconciliation!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May secret bank account 'for emergencies' na hindi kasama sa shared finances talk.", 
    isRedFlag: true, 
    wisdom: "Financial secrecy! Emergency fund is fine if discussed! Hidden account is suspicious!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging may 'version' ng story pag may issue. Details change each time.", 
    isRedFlag: true, 
    wisdom: "Inconsistent storytelling! Truth doesn't change, lies do! Red flag!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nag-gaslighting pag may concern ka. 'Di nangyari yan, gawa-gawa mo lang.'", 
    isRedFlag: true, 
    wisdom: "Gaslighting! Making you doubt reality is manipulation! Trust your memory!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pinapakita ang phone pero deleted pala ang history bago ipakita.", 
    isRedFlag: true, 
    wisdom: "Selective transparency! Clean phone is suspicious phone! What was there before?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May mga 'white lies' daw na okay lang naman. 'Para di ka ma-hurt.'", 
    isRedFlag: true, 
    wisdom: "Lies are lies! 'White lies' normalizes dishonesty! Truth should be default!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Trust issues daw dahil sa past pero years na kayo, wala pa ring trust.", 
    isRedFlag: true, 
    wisdom: "Past trauma is valid pero healing should progress! Stagnant distrust is unhealthy!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Miscellaneous Red Flags
  { 
    text: "Laging may comparison sa 'love stories' ng friends. 'Sana ganyan din tayo.'", 
    isRedFlag: true, 
    wisdom: "Comparison trap! Your story is YOUR story! Others' relationships aren't benchmarks!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gusto ng grand gestures pero walang effort sa everyday.", 
    isRedFlag: true, 
    wisdom: "Instagram vs Reality relationship! Consistency beats occasional grandness!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Perfect siya sa others pero ikaw nakaka-experience ng mood swings at tantrums.", 
    isRedFlag: true, 
    wisdom: "You're the emotional dumping ground! Best behavior for others, worst for you!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging 'test' ang ginagawa. Creates scenarios to see how you react.", 
    isRedFlag: true, 
    wisdom: "Testing partner! Relationships aren't exams! This is manipulation!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Parang walking on eggshells ka. Di mo alam kung anong mood niya bawat araw.", 
    isRedFlag: true, 
    wisdom: "Unpredictable moods! You shouldn't fear partner's reaction! Anxiety-inducing!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May pet pero ikaw ang nag-aalaga kasi 'busy' daw siya lagi.", 
    isRedFlag: true, 
    wisdom: "Pet responsibility test failed! If can't care for pet, imagine bigger responsibilities!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Nangangako pero laging 'next time na lang'. Promises never kept.", 
    isRedFlag: true, 
    wisdom: "Chronic promise breaker! Actions > Words! 'Next time' means never!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Dati sweet, ngayon cold. 'Ganito talaga pag matagal na.'", 
    isRedFlag: true, 
    wisdom: "Effort decline! Long-term doesn't mean no effort! Love should be maintained!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "May plans siya for future na hindi kasama ikaw. 'Baka hiwalay na tayo nun.'", 
    isRedFlag: true, 
    wisdom: "Future without you included! Not thinking long-term together? What's the point?", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Laging victim siya sa lahat ng situations. Never accountable.", 
    isRedFlag: true, 
    wisdom: "Victim mentality! Everyone has some accountability! This avoids responsibility!", 
    category: GameMode.YOUNG_ADULT 
  },

  // ========== GREEN FLAGS (70) ==========
  
  // Communication Green Flags
  { 
    text: "Pag may problema, sinasabi agad nang maayos. 'Hey, can we talk about something?'", 
    isRedFlag: false, 
    wisdom: "Direct communication! Addresses issues maturely! Green flag adulting!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Active listener siya. Repeats back what you said to make sure understood.", 
    isRedFlag: false, 
    wisdom: "Effective listening! Values understanding over responding! Rare and precious!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Admits when wrong without making excuses. 'I was wrong about that.'", 
    isRedFlag: false, 
    wisdom: "Accountability! No 'buts' or 'ifs'! Clean admission of fault! Mature!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Asks for your opinion on major decisions. 'What do you think about this?'", 
    isRedFlag: false, 
    wisdom: "Values your input! Sees you as partner in decision-making! Team mindset!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Gives space when you need it pero checks in after. 'Ready to talk when you are.'", 
    isRedFlag: false, 
    wisdom: "Respects boundaries while showing care! Balance of space and presence!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Honest about feelings even when uncomfortable. 'I need to be honest with you...'", 
    isRedFlag: false, 
    wisdom: "Courageous honesty! Values truth over comfort! Trust builder!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Fights fair - no name calling, no bringing up past, sticks to issue.", 
    isRedFlag: false, 
    wisdom: "Conflict resolution skills! Fights to solve, not to hurt! Healthy arguing!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Expresses appreciation regularly. 'Thank you for always being understanding.'", 
    isRedFlag: false, 
    wisdom: "Gratitude practice! Makes you feel valued! Positive reinforcement!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Discusses future plans including you. 'When we move to...' 'If we decide to...'", 
    isRedFlag: false, 
    wisdom: "Future-inclusive thinking! You're part of their vision! Commitment sign!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Comfortable with difficult conversations about finances, future, expectations.", 
    isRedFlag: false, 
    wisdom: "Adulting together! Faces hard topics head-on! Mature relationship!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Career Support Green Flags
  { 
    text: "Celebrates your career wins genuinely. First one to say 'I'm so proud of you!'", 
    isRedFlag: false, 
    wisdom: "Career cheerleader! Genuine happiness for your success! No jealousy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Picks up slack at home when you have heavy work periods. No questions asked.", 
    isRedFlag: false, 
    wisdom: "Supportive partnership! Adjusts to your needs! Real teamwork!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Encourages professional development even if means less time together temporarily.", 
    isRedFlag: false, 
    wisdom: "Growth supporter! Sacrifices short-term for long-term success! Unselfish love!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects work boundaries. Doesn't blow up phone during work hours.", 
    isRedFlag: false, 
    wisdom: "Professional respect! Understands work-life separation! Mature!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Discusses career goals together and how to achieve them as team.", 
    isRedFlag: false, 
    wisdom: "Career planning together! Both careers matter! Mutual support!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Doesn't make you feel guilty for late nights or business trips.", 
    isRedFlag: false, 
    wisdom: "Understands career demands! No guilt-tripping! Supportive attitude!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Helps you prepare for important meetings or presentations.", 
    isRedFlag: false, 
    wisdom: "Active career support! Invested in your success! Team player!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Celebrates small work wins too, not just major achievements.", 
    isRedFlag: false, 
    wisdom: "Notices the little victories! Makes everyday wins special! Thoughtful!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Encourages healthy work-life balance. 'Take a break, you've been working hard.'", 
    isRedFlag: false, 
    wisdom: "Cares about your wellbeing! Promotes balance! Protective in good way!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Listens to work vents without trying to fix everything unless asked.", 
    isRedFlag: false, 
    wisdom: "Emotional support! Knows when to listen vs when to advise! Smart partner!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Financial Green Flags
  { 
    text: "Open about financial situation - debts, savings, goals. No hidden surprises.", 
    isRedFlag: false, 
    wisdom: "Financial transparency! Foundation of trust in money matters! Responsible!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has financial goals and works toward them consistently.", 
    isRedFlag: false, 
    wisdom: "Financial responsibility! Plans for future! Stable partner material!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects individual spending while working on shared goals.", 
    isRedFlag: false, 
    wisdom: "Balanced approach to money! Personal autonomy within partnership!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Discusses big purchases together before making them.", 
    isRedFlag: false, 
    wisdom: "Financial communication! No surprise expenses! Team decision-making!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Contributes fairly to shared expenses based on ability.", 
    isRedFlag: false, 
    wisdom: "Fair contribution! Considers both capabilities! Equitable not equal!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has emergency fund and thinks about financial safety nets.", 
    isRedFlag: false, 
    wisdom: "Prepared for unexpected! Responsible adulting! Future-thinking!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Values experiences over material things in spending priorities.", 
    isRedFlag: false, 
    wisdom: "Healthy money values! Memories over stuff! Aligned priorities!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Comfortable living within means, not trying to impress others.", 
    isRedFlag: false, 
    wisdom: "Financially grounded! No show-off mentality! Real not reel!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Saves for shared future goals - travel, home, experiences together.", 
    isRedFlag: false, 
    wisdom: "Investing in 'us'! Shows commitment through actions! Serious partner!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Handles financial disagreements maturely. No stonewalling or blaming.", 
    isRedFlag: false, 
    wisdom: "Money fights handled well! Conflict resolution in finances! Important skill!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Trust & Respect Green Flags
  { 
    text: "Gives you benefit of doubt. Asks first before assuming worst.", 
    isRedFlag: false, 
    wisdom: "Trust-based approach! No jumping to conclusions! Healthy trust!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects your privacy. Doesn't snoop through phone or belongings.", 
    isRedFlag: false, 
    wisdom: "Privacy respected! Trust without surveillance! Secure relationship!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Introduces you to friends and family naturally. Proud to show you off.", 
    isRedFlag: false, 
    wisdom: "Publicly proud! No hidden relationship! Real commitment!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Defends you when not present. Speaks highly of you to others.", 
    isRedFlag: false, 
    wisdom: "Loyalty in absence! Same good words behind your back! Genuine!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Keeps promises and follows through on commitments.", 
    isRedFlag: false, 
    wisdom: "Reliable! Words match actions! Trustworthy partner!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Comfortable with your friendships including opposite gender.", 
    isRedFlag: false, 
    wisdom: "Secure attachment! No irrational jealousy! Trusts your judgment!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Respects your decisions even when disagrees. 'It's your call.'", 
    isRedFlag: false, 
    wisdom: "Respects autonomy! Doesn't need control! Healthy independence!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Takes your concerns seriously. Never dismisses your feelings.", 
    isRedFlag: false, 
    wisdom: "Emotional validation! Your feelings matter! Safe space!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Consistent behavior whether with you alone or with others.", 
    isRedFlag: false, 
    wisdom: "Authentic always! No two faces! What you see is what you get!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Admits mistakes to others, not just to you. Takes public accountability.", 
    isRedFlag: false, 
    wisdom: "Public integrity! Same person everywhere! Character consistency!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Personal Growth Green Flags
  { 
    text: "Has personal goals outside the relationship. Hobbies, career, self-improvement.", 
    isRedFlag: false, 
    wisdom: "Complete individual! Not dependent on you for identity! Healthy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Open to feedback and works on improving. 'I'll try to do better.'", 
    isRedFlag: false, 
    wisdom: "Growth mindset! Receives feedback well! Continuous improvement!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Encourages your growth even if means you might outgrow them.", 
    isRedFlag: false, 
    wisdom: "Unselfish support! Values your growth over their comfort! True love!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Reads, learns, stays curious about world. Has interesting conversations.", 
    isRedFlag: false, 
    wisdom: "Intellectual curiosity! Continuous learner! Engaging partner!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Works on mental health. Goes to therapy or practices self-care.", 
    isRedFlag: false, 
    wisdom: "Mental health awareness! Takes care of inner self! Emotionally healthy!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Shares new discoveries and interests with excitement.", 
    isRedFlag: false, 
    wisdom: "Shares joy! Brings enthusiasm to relationship! Keeps things fresh!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has healthy coping mechanisms for stress. Doesn't take it out on you.", 
    isRedFlag: false, 
    wisdom: "Emotional regulation! Manages stress healthily! Safe to be around!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Reflects on past relationships with maturity. Learned lessons, no bitterness.", 
    isRedFlag: false, 
    wisdom: "Processed past! No baggage carried forward! Emotionally available!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Pushes comfort zone occasionally. Tries new things with openness.", 
    isRedFlag: false, 
    wisdom: "Adventure spirit! Grows through new experiences! Fun partner!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Has mentors or role models. Learns from others' experiences.", 
    isRedFlag: false, 
    wisdom: "Humble learner! Seeks wisdom! Shows maturity!", 
    category: GameMode.YOUNG_ADULT 
  },

  // Emotional Intelligence Green Flags
  { 
    text: "Names and discusses emotions clearly. 'I'm feeling anxious about...'", 
    isRedFlag: false, 
    wisdom: "Emotional literacy! Can articulate feelings! Facilitates connection!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Knows when to apologize vs when to give space. Reads situations well.", 
    isRedFlag: false, 
    wisdom: "Emotional intelligence! Reads the room! Responds appropriately!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Doesn't hold grudges. Resolves issues and moves forward genuinely.", 
    isRedFlag: false, 
    wisdom: "Forgiveness! Doesn't keep score! Clean slate approach!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Celebrates your success as own success. 'We did it!'", 
    isRedFlag: false, 
    wisdom: "Team mentality! Your win is shared win! Partnership goals!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Handles disappointment maturely. Doesn't lash out or shut down.", 
    isRedFlag: false, 
    wisdom: "Emotional regulation! Manages negative emotions well! Stable!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Shows vulnerability appropriately. Opens up about struggles.", 
    isRedFlag: false, 
    wisdom: "Healthy vulnerability! Shares authentic self! Deep connection!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Supports you during tough times without trying to fix everything.", 
    isRedFlag: false, 
    wisdom: "Supportive presence! Knows when to just be there! Comforting!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Recognizes and respects your emotional boundaries.", 
    isRedFlag: false, 
    wisdom: "Boundary respect! Doesn't push too hard! Respectful!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Takes responsibility for own emotional state. Doesn't blame you for moods.", 
    isRedFlag: false, 
    wisdom: "Emotional ownership! Doesn't project! Takes care of self!", 
    category: GameMode.YOUNG_ADULT 
  },
  { 
    text: "Shows empathy for others, not just you. Kind to strangers and service workers.", 
    isRedFlag: false, 
    wisdom: "Genuine empathy! Consistent kindness! Real character!", 
    category: GameMode.YOUNG_ADULT 
  }
];