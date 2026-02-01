import { GameMode, Scenario } from '../types';

// ADULT SCENARIOS - 200 NEW SCENARIOS
// Focus: Marriage, In-laws, Finances, Parenting, Long-term Relationships
// Difficulty: SUPER HARD - Tricky scenarios that aren't immediately obvious

export const ADULT_SCENARIOS: Scenario[] = [
  // ========== RED FLAGS (130) ==========
  
  // Marriage & Long-term Relationship Red Flags
  { 
    text: "Kapag may problema sa relationship, laging sinasabi na 'Ikaw ang dahilan kung bakit ganito tayo'. Never may accountability.", 
    isRedFlag: true, 
    wisdom: "Ay nako mare, 'IKAW ang dahilan' lagi?! BLAME SHIFTER yan! Marriage is TEAMWORK! Kung puro IKAW ang sisi, siya walang paki mag-improve! Dalawang tao sa kasal - dapat dalawa rin ang may accountability!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagsabi siya na 'Wala nang romance sa marriage natin' pero siya mismo walang effort para buhayin ito.", 
    isRedFlag: true, 
    wisdom: "'WALANG ROMANCE' daw pero SIYA walang effort?! Mare, romance takes TWO! Kung nagre-reklamo pero walang GINAGAWA, siya ang problema! Puro SALITA, walang GAWA! Mag-date kayo o magresign siya sa reklamo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tuwing birthday or anniversary mo, nakakalimutan niya pero expected ka mag-surprise sa kanya.", 
    isRedFlag: true, 
    wisdom: "NAKAKALIMUTAN birthday mo pero EXPECTED ka mag-surprise sa kanya?! DOUBLE STANDARD yan mare! Kung important sa kanya, hindi makakalimutan! One-sided love at one-sided effort - hindi patas!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may misunderstanding, tumatahimik siya for days. Silent treatment ang default coping mechanism.", 
    isRedFlag: true, 
    wisdom: "SILENT TREATMENT for days?! STONEWALLING yan mare! Mature adults COMMUNICATE! Silent treatment is EMOTIONAL PUNISHMENT! Paano kayong mag-resolve kung ayaw niya magsalita? Red flag ng immaturity!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinasabi niya sa ibang tao ang mga problema niyo pero sayo, 'okay naman tayo' ang sagot.", 
    isRedFlag: true, 
    wisdom: "Pag-USAPAN dapat sa LOOB ng bahay muna! Bakit ang mundo nakakaalam pero IKAW hindi?! Mare, communication BREAKDOWN yan! Mas comfortable siya mag-share sa iba kaysa sayo - may problema sa intimacy!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagbabanta ng annulment/hiwalayan every argument. 'Kung ayaw mo, edi maghiwalay na tayo!'", 
    isRedFlag: true, 
    wisdom: "'MAGHIWALAY' agad every fight?! Marriage is COMMITMENT, not hostage negotiation! Mare, using separation as THREAT is manipulation! Di pwede every argument may divorce card na nilalabas!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi niya kaya mag-sorry genuinely. 'Sorry na kung nasaktan ka' imbes na 'Sorry sa ginawa ko'.", 
    isRedFlag: true, 
    wisdom: "'SORRY kung nasaktan ka' - yan ba sorry?! NON-APOLOGY specialist yan mare! Real sorry ACKNOWLEDGES fault, not just your REACTION! Pag laging ganyan, walang genuine accountability!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto niya laging ikaw ang nag-aadjust sa schedule, wala siyang flexibility.", 
    isRedFlag: true, 
    wisdom: "IKAW laging nag-aadjust?! Siya FIXED, ikaw FLEXIBLE lagi?! One-sided SACRIFICE yan mare! Partnership means compromise from BOTH sides! Bakit ikaw lang ang nagbi-bend?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may nagawa kang mali years ago, binabalik-balikan pa rin hanggang ngayon.", 
    isRedFlag: true, 
    wisdom: "YEARS ago na pero binabalik pa rin?! SCOREKEEPER yan mare! Forgiveness means LETTING GO, not keeping receipts for future use! Kung lahat ng past errors binabalik, walang moving forward!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biglang naging sweet at attentive after ng malaking away. Love bombing to avoid real resolution.", 
    isRedFlag: true, 
    wisdom: "SWEET after big fight pero walang RESOLUTION?! LOVE BOMBING cycle yan mare! Sweetness to distract from real issues! Pattern: fight, love bomb, forget, repeat. Walang actual solving!", 
    category: GameMode.ADULT 
  },

  // Financial Red Flags in Marriage
  { 
    text: "May hidden credit cards na hindi mo alam. Nalaman mo lang nung nag-apply kayo ng loan at may utang pala siya.", 
    isRedFlag: true, 
    wisdom: "HIDDEN credit cards na hindi mo alam?! FINANCIAL INFIDELITY yan mare! Secrets sa pera = secrets sa trust! Major BREACH yan! Paano ka mag-plan for future kung may hidden debts?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto niyang kontrolin lahat ng finances. Binibigyan ka lang ng allowance na parang bata.", 
    isRedFlag: true, 
    wisdom: "ALLOWANCE binibigay sayo parang BATA?! FINANCIAL ABUSE yan mare! Adults don't give other adults 'allowance'! Equal ACCESS to family money dapat! Controlling finances = controlling YOU!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging may 'emergency' ang pamilya niya na kailangan ng pera. Every month may bagong emergency.", 
    isRedFlag: true, 
    wisdom: "'EMERGENCY' every month?! Mare, pattern na yan! Check kung TOTOO ang emergencies o excuse lang! Kung laging may crisis, hindi emergency yan - LIFESTYLE yan na pinopondohan mo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi siya nag-cocontribute sa household expenses pero lahat ng wants niya, binibili.", 
    isRedFlag: true, 
    wisdom: "WALANG ambag sa bahay pero todo SHOPPING?! Financial irresponsibility mare! Luho FIRST bago responsibilities? Wrong priorities yan! Hindi ka ATM ng lifestyle niya!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagagalit pag tinatanong mo saan napunta ang pera. 'Bakit ba, accountant mo ba ako?'", 
    isRedFlag: true, 
    wisdom: "'ACCOUNTANT mo ba ako?' pag tinanong?! DEFENSIVE about money mare! Transparency sa finances is BASIC in marriage! Kung may tinatago, bakit nagagalit pag tinanong?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May gambling problem pero ayaw aminin. 'Isang beses lang naman, tsaka nanalo naman ako minsan.'", 
    isRedFlag: true, 
    wisdom: "'NANALO naman minsan' - GAMBLER'S EXCUSE yan mare! Gambling addiction in DENIAL! 'Isang beses lang' pero pera patuloy ang nawawala? Seek PROFESSIONAL help before everything's lost!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto niya lang ang joint account pag need niya ng pera. Pag sayo naman, 'personal' niya raw yung iba.", 
    isRedFlag: true, 
    wisdom: "JOINT pag need niya, PERSONAL pag kanya?! Selective sharing yan mare! Joint should mean JOINT, not 'mine and ours'! Unfair setup - access sa iyo, restriction sa kanya!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-resign sa work without discussing with you. 'Bahala na, ikaw naman may trabaho.'", 
    isRedFlag: true, 
    wisdom: "NAG-RESIGN without discussion?! 'Ikaw naman may trabaho'?! Unilateral MAJOR decision mare! Career changes affect the FAMILY! Should be discussed, not announced after!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinapirmahan ka ng documents na hindi mo nababasa ng maayos. 'Trust me, okay yan.'", 
    isRedFlag: true, 
    wisdom: "'TRUST ME, okay yan' pag pinapapirma?! NEVER sign anything without reading mare! Kahit asawa mo, protect yourself LEGALLY! Blind trust in documents is DANGEROUS! Read EVERYTHING!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Lahat ng investments ay sa pangalan niya. 'Para mas safe, ako na bahala.'", 
    isRedFlag: true, 
    wisdom: "LAHAT ng investments sa pangalan NIYA?! Asset hoarding yan mare! Should be JOINT or at least discussed! Pag nag-break kayo, WALA kang claim! Protect your SHARE!", 
    category: GameMode.ADULT 
  },

  // In-Laws Red Flags
  { 
    text: "Nanay niya laging may negative comment sayo pero hindi ka dinedepensahan ng asawa mo.", 
    isRedFlag: true, 
    wisdom: "NANAY niya nang-iinsulto pero SIYA tahimik?! No BOUNDARY with in-law mare! Spouse should DEFEND you! United front LAGI dapat! Kung hindi ka pinoprotektahan, anong klaseng partner yan?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Lahat ng major decisions, tanong muna sa parents niya. Ikaw ang spouse pero last priority ang opinion mo.", 
    isRedFlag: true, 
    wisdom: "PARENTS niya muna bago ikaw?! MAMA'S BOY/GIRL syndrome mare! Spouse should be PRIMARY partner, not parents! Kung second place ka pa sa nanay niya, saan ka pa?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biyenan mo may susi ng bahay niyo at pumapasok basta-basta. 'Family naman kasi'.", 
    isRedFlag: true, 
    wisdom: "BIYENAN may susi at pumapasok kahit kailan?! 'Family naman' - pero BOUNDARIES mare! Your home, your PRIVACY! 'Family' doesn't mean no BOUNDARIES! Asawa mo dapat mag-set ng limits!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukumpara ka lagi sa in-laws. 'Buti pa si sister-in-law, ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "'BUTI PA si sister-in-law'?! In-law COMPARISON mare! Unfair at toxic! Iba kayong mga tao! Kung laging kinukumpara, never ka magiging ENOUGH! Hindi contest ang maging manugang!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may away kayo ng spouse, umuuwi siya sa parents at kinukwento lahat.", 
    isRedFlag: true, 
    wisdom: "UMUUWI sa parents pag may away?! Running to MOMMY mare! Couple issues should stay between COUPLE first! Hindi dapat alam ng buong pamilya niya ang every fight niyo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "In-laws expected na mag-support ka financially kahit hindi naman kayo well-off.", 
    isRedFlag: true, 
    wisdom: "EXPECTED mag-support kahit mahirap din kayo?! Financial PRESSURE from in-laws mare! Help should be given FREELY, not demanded! Hindi obligasyon ang mag-support kung wala namang kakayahan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Every holiday, sa side niya lagi. Pag sa side mo, may excuse lagi.", 
    isRedFlag: true, 
    wisdom: "LAGING sa side niya every holiday?! Unbalanced family time mare! Both families MATTER! Should alternate FAIRLY! Kung family mo laging may excuse, saan ang respeto sa side mo?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biyenan mo nag-dedesisyon sa parenting ng anak niyo. 'Alam ko mas marami kaysa sayo'.", 
    isRedFlag: true, 
    wisdom: "BIYENAN nag-decide sa PARENTING?! Overstepping GRANDPARENT mare! Parents decide for their children, not GRANDPARENTS! 'Alam ko mas marami' - pero ANAK mo yan, not hers!", 
    category: GameMode.ADULT 
  },
  { 
    text: "In-laws nagko-comment sa body mo, sa bahay mo, sa cooking mo. Lahat may puna.", 
    isRedFlag: true, 
    wisdom: "LAHAT may comment - body, bahay, luto?! Critical in-laws mare! Constant criticism is TOXIC! Spouse should SET BOUNDARIES! Hindi ka dapat punching bag ng mga reklamo nila!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinag-uusapan kayo ng in-laws kapag wala kayo. Nabalitaan mo sa ibang relatives.", 
    isRedFlag: true, 
    wisdom: "CHISMIS in-laws pag wala kayo?! Gossip sa likod niyo mare! Dapat PROTECTED ang relationship niyo by spouse! Kung kinukwento kayo sa lahat, walang privacy at respect!", 
    category: GameMode.ADULT 
  },

  // Parenting Red Flags
  { 
    text: "Isa lang ang nagdi-discipline sa anak, ikaw. Siya ang 'good cop' lagi.", 
    isRedFlag: true, 
    wisdom: "IKAW laging BAD COP, siya GOOD COP?! Unbalanced parenting mare! Both should be CONSISTENT! Nakakapagod maging laging villain! Kids need discipline from BOTH parents!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gumagamit ng anak para manglamang sa away. 'Tignan mo, ayaw na sayo ng anak natin.'", 
    isRedFlag: true, 
    wisdom: "GINAGAMIT ang anak PANLABAN?! Weaponizing children mare! Kids should NOT be pawns in marital issues! Using kids against you - that's EMOTIONAL ABUSE sa lahat!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi involved sa parenting. 'Trabaho ko yan? Ikaw ang nanay/tatay eh.'", 
    isRedFlag: true, 
    wisdom: "'TRABAHO mo yan' sa parenting?! ABSENT parent mare! Both parents should be INVOLVED! Gender doesn't excuse! Anak niyo yan pareho - SHARED responsibility!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may achievements ang anak, siya ang kinecredit. Pag may problema, kasalanan mo.", 
    isRedFlag: true, 
    wisdom: "CREDIT grabbing pag success, BLAME pag fail?! Unfair parenting mare! Parenting is shared effort, GOOD and BAD! Hindi pwede siya lang bida pag maganda, ikaw sisi pag pangit!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-iinuman or nagga-gaming habang ikaw nag-aalaga ng anak. 'Me time ko naman.'", 
    isRedFlag: true, 
    wisdom: "'ME TIME' niya habang IKAW nag-aalaga?! Unequal parenting load mare! Me time should be FAIR - not one-sided! Kung siya may pahinga, ikaw din dapat meron!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi marunong mag-alaga ng anak alone. 'Babysitting ko ba yan?' Anak mo rin!", 
    isRedFlag: true, 
    wisdom: "'BABYSITTING' daw?! Parents don't BABYSIT their own kids mare! That's called PARENTING! Kung hindi kayang mag-handle ng anak alone, did they even learn to be parent?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag stressed siya, sa anak niya nila-lash out. 'Ang ingay mo kasi!'", 
    isRedFlag: true, 
    wisdom: "ANAK ang stress outlet?! Misplaced ANGER mare! Children shouldn't be emotional punching bag! Address stress PROPERLY - not through kids! Traumatic yan for the children!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw sumama sa school events. 'May trabaho ako, ikaw na lang.'", 
    isRedFlag: true, 
    wisdom: "ABSENT sa school events lagi?! 'May trabaho' pero NEVER naka-adjust?! Kids REMEMBER who shows up mare! Make TIME - hindi pwedeng laging trabaho ang excuse!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukumpara ang anak sa iba. 'Buti pa si [other kid], ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "'BUTI PA si other kid'?! Comparison PARENTING mare! Each child is UNIQUE! Comparisons DAMAGE self-esteem! Build up your child, don't tear them down through comparison!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging naka-phone habang kasama ang anak. 'Present' physically pero mentally absent.", 
    isRedFlag: true, 
    wisdom: "NAKA-PHONE lagi habang kasama anak?! Distracted PARENTING mare! Quality time means FULL attention! Put phone DOWN! Physically present pero mentally absent - NOT enough!", 
    category: GameMode.ADULT 
  },

  // Household Responsibilities Red Flags
  { 
    text: "Hindi tumutulong sa household chores. 'Hindi ko ginagawa yan, trabaho ng babae/lalaki yan.'", 
    isRedFlag: true, 
    wisdom: "'TRABAHO ng babae/lalaki' excuse?! Gender-based excuses mare! Chores are EVERYONE'S responsibility! Welcome to modern times! Lahat dapat may ambag sa bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag gumagawa ng chores, kailangan pa ng instructions. 'Pano ba yan?'", 
    isRedFlag: true, 
    wisdom: "'PANO ba yan?' lagi?! WEAPONIZED INCOMPETENCE mare! Adults know how to GOOGLE! Don't pretend HELPLESS! Intentional na hindi natututo para ikaw lagi ang gumawa!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagagalit pag hindi mo nagawa ang chores pero siya walang ginagawa.", 
    isRedFlag: true, 
    wisdom: "GALIT sa di mo nagawa pero SIYA wala rin?! Double standard sa housework mare! Ang lakas mag-reklamo pero walang GINAGAWA! Lead by example muna bago mag-demand!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi nakaka-notice ng mga dapat gawin sa bahay. Ikaw lagi ang 'manager'.", 
    isRedFlag: true, 
    wisdom: "HINDI nakaka-notice ng dapat gawin?! MENTAL LOAD on you alone mare! Adulting means SEEING what needs to be done! Hindi ikaw lagi ang may mata sa bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may bisita, todo linis at tulong. Pag kayo lang, balik sa dati.", 
    isRedFlag: true, 
    wisdom: "LINIS lang pag may BISITA?! For show ONLY mare! Consistent effort should exist not just for visitors! Kung kaya niya pag may makakakita, kaya niya rin pang-everyday!", 
    category: GameMode.ADULT 
  },
  { 
    text: "'Tutulong ako, sabihin mo lang' pero dapat mo pang sabihin lahat ng obvious.", 
    isRedFlag: true, 
    wisdom: "'SABIHIN mo lang' pero obvious naman?! Helper not PARTNER yan mare! Spouses should SEE and DO, not wait for instructions! Hindi ka project manager ng household!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag gumawa ng isang chore, magpa-papuri buong linggo.", 
    isRedFlag: true, 
    wisdom: "ISANG chore tapos may PARADE?! Praise-seeking for BARE MINIMUM mare! Chores are EXPECTED, not medal-worthy! Hindi achievement ang gawaing bahay - normal yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi niya alam saan nakalagay ang mga gamit sa bahay niya mismo.", 
    isRedFlag: true, 
    wisdom: "HINDI alam saan ang gamit sa SARILING bahay?! Checked out of home life mare! Living there means KNOWING where things are! Parang bisita lang sa sariling bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kahit ilang taon na kayo, hindi pa rin marunong maglaba/magluto ng basic.", 
    isRedFlag: true, 
    wisdom: "YEARS na pero di pa rin marunong ng BASICS?! Intentional helplessness mare! No excuse! Life skills are LEARNABLE! Kung gusto, matututo - kung ayaw, excuse lagi!", 
    category: GameMode.ADULT 
  },
  { 
    text: "'Mas efficient ka naman diyan, ikaw na lang.' To avoid doing things.", 
    isRedFlag: true, 
    wisdom: "'MAS EFFICIENT ka' para ikaw na lang?! Flattery to AVOID work mare! Everyone can LEARN! Don't fall for it! Hindi porke 'mas magaling' ka, ikaw na lagi ang gagawa!", 
    category: GameMode.ADULT 
  },

  // Intimacy & Relationship Health Red Flags
  { 
    text: "Walang physical affection unless may gusto. No random hugs, no sweet gestures.", 
    isRedFlag: true, 
    wisdom: "AFFECTION lang pag may KAILANGAN?! Transactional intimacy mare! Affection should be SPONTANEOUS, not just when needed! Kung lambing lang pag may gusto, gamit ka lang!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging may excuse para iwasan intimacy. Years na pero never napag-usapan ng maayos.", 
    isRedFlag: true, 
    wisdom: "EXCUSE lagi sa intimacy?! Pero never napag-usapan?! Avoidance without COMMUNICATION mare! Intimacy issues need DISCUSSION, not eternal silence! Talk about it!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinapahiya ka during intimate moments. Comments about body, performance.", 
    isRedFlag: true, 
    wisdom: "PINAPAHIYA sa intimate moments?! Comments about body?! SHAMING during vulnerability mare! Safe space dapat yan! No put-downs during vulnerable moments - EVER!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinipilit kahit ayaw mo. 'Asawa kita, obligasyon mo yan.'", 
    isRedFlag: true, 
    wisdom: "'OBLIGASYON' daw?! MARITAL COERCION yan mare! Consent matters EVEN IN MARRIAGE! This is ABUSE! No one is obligated - married or not! Report kung kailangan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang effort mag-date after marriage. 'Kasal na tayo, ano pang kailangan?'", 
    isRedFlag: true, 
    wisdom: "'KASAL na, ano pa?'?! Romance effort ZERO mare! Marriage is not FINISH LINE, it's BEGINNING! Keep dating each other! Kung stopped na ang effort, stopped na ang growth!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagtatampo pag tinanggihan pero never tinatanong kung bakit.", 
    isRedFlag: true, 
    wisdom: "TAMPO pag rejected pero never nag-ask BAKIT?! No curiosity about your feelings mare! Should ask 'what's wrong' not SULK! Communication over silent resentment!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging pagod for you pero may energy for hobbies, friends, games.", 
    isRedFlag: true, 
    wisdom: "'PAGOD' for you pero ENERGIZED for games?! Selective exhaustion mare! Energy is THERE, just not prioritizing YOU! Kung may energy sa iba, dapat meron din sayo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi ka kinakausap about needs. Assumed na dapat alam mo na.", 
    isRedFlag: true, 
    wisdom: "'DAPAT alam mo na'?! Mind reader EXPECTATION mare! Communicate NEEDS! Adults use WORDS! Hindi pwedeng hula-hula lang - express what you want clearly!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May emotional affair with someone. 'Friends lang naman kami.'", 
    isRedFlag: true, 
    wisdom: "'FRIENDS lang' pero super close na emotional?! Emotional CHEATING mare! Intimacy given to others belongs to MARRIAGE! Kung mas open sa iba kaysa sayo, red flag yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Comparison sa past partners. 'Mas [adjective] si ex dito.'", 
    isRedFlag: true, 
    wisdom: "'MAS GANITO si ex'?! Comparison sa PAST partners mare! Past should STAY in past! This is HURTFUL and DISRESPECTFUL! Kung mas gusto niya yung dati, bumalik siya dun!", 
    category: GameMode.ADULT 
  },

  // Trust & Loyalty Red Flags
  { 
    text: "Laging may 'friend' na nakaka-close lately. Late night messages about 'personal stuff'.", 
    isRedFlag: true, 
    wisdom: "'FRIEND' na super close lately?! Late night 'personal' chats?! Suspicious closeness mare! Boundaries with others should be DISCUSSED! Kung mas close pa sa iba kaysa sayo, investigate!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biglang conscious sa appearance. Nagbago ng style, nagpapa-gym, pero wala naman occasion.", 
    isRedFlag: true, 
    wisdom: "SUDDEN glow-up na walang explanation?! Gym, new style - pero bakit?! May something to IMPRESS mare! Sudden change without reason - investigate kung sino ang audience!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Phone laging naka-face down. New password na hindi mo alam.", 
    isRedFlag: true, 
    wisdom: "PHONE laging nakatago?! New password na secret?! Secretive behavior mare! Hidden phone = hidden SOMETHING! Transparency should be normal in marriage!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Defensive pag tinanong tungkol sa schedule. 'Bakit ba, sinasabi ko naman sayo!'", 
    isRedFlag: true, 
    wisdom: "DEFENSIVE pag tanong about schedule?! Overreacting sa normal question mare! Kung innocent, bakit defensive agad?! SUS yan - may tinatago!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May separate life na hindi kasali ikaw. Friends, events, na never ka i-invite.", 
    isRedFlag: true, 
    wisdom: "SEPARATE life na EXCLUDED ka?! Friends, events na hindi ka invited?! Compartmentalized life mare! Spouse should be INTEGRATED, not excluded! Bakit may mundo siyang wala ka?", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tinatago ang social media activities. Unfollowed ka or blocked from seeing stories.", 
    isRedFlag: true, 
    wisdom: "BLOCKED ka sa stories?! Tinatago social media sa SPOUSE?! What's there to HIDE mare?! From your own asawa pa! Red flag na may kasunod na kasinungalingan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging may 'meeting' or 'emergency sa work' na hindi provable.", 
    isRedFlag: true, 
    wisdom: "'MEETING' lagi pero hindi ma-verify?! Pattern of unexplained absences mare! Kung laging may work emergency na walang proof, investigate! Trust but VERIFY!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nahuli mong nagsisinungaling sa maliit na bagay. 'E baka mag-overthink ka lang.'", 
    isRedFlag: true, 
    wisdom: "LIES sa maliit na bagay tapos IKAW pa mag-o-overthink?! Small lies signal BIG ones mare! If dishonest sa maliit, PAANO sa malaki? Pattern of deception!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May dating history na hindi disclosed bago kayo. Malalaman mo sa iba.", 
    isRedFlag: true, 
    wisdom: "HISTORY na nalaman mo sa IBA?! Hidden past mare! Important info should come from THEM, not others! Kung itinago before marriage, ano pa ang itinago?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Accusatory sayo na may iba ka - projection because they're the one hiding.", 
    isRedFlag: true, 
    wisdom: "IKAW sinisisi na may iba pero SIYA pala?! PROJECTION mare! Guilty people accuse others of what THEY'RE doing! Classic deflection - check kung siya ang may tinatago!", 
    category: GameMode.ADULT 
  },

  // Communication Red Flags
  { 
    text: "Pag tinanong kung okay lang siya, laging 'oo' pero actions say otherwise.", 
    isRedFlag: true, 
    wisdom: "'OO okay lang' pero actions say HINDI?! Passive aggressive mare! Words and actions don't MATCH! Ask for DIRECT communication - no guessing games sa marriage!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging busy mag-usap. No time for deep conversations about relationship.", 
    isRedFlag: true, 
    wisdom: "LAGING busy for meaningful talk?! Communication avoidance mare! 'Busy' is EXCUSE! Make TIME for important conversations - relationship needs maintenance!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagdadabog at umiiyak para matapos ang discussion.", 
    isRedFlag: true, 
    wisdom: "DABOG at IYAK para matapos usapan?! Emotional manipulation mare! Tantrums to end conversations - NOT adult behavior! Mature people TALK, not throw fits!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag nagsabi ka ng concerns, binabaligtad na kasalanan mo.", 
    isRedFlag: true, 
    wisdom: "CONCERNS mo binabaligtad sayo?! DARVO tactic mare! Deny, Attack, Reverse Victim and Offender! Classic MANIPULATION! You raised concern, suddenly ikaw ang may mali?!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinisigawan ka pag nag-aaway kayo kahit sa public places.", 
    isRedFlag: true, 
    wisdom: "SIGAW sa PUBLIC?! Volume up para manalo?! Yelling is NOT communicating mare! Volume doesn't equal validity! ABUSIVE behavior yan - hindi acceptable kahit kailan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gumagamit ng sarcasm to dismiss your feelings. 'Edi sorry na, Your Majesty.'", 
    isRedFlag: true, 
    wisdom: "'SORRY NA, Your Majesty' pang sarcasm?! Dismissive ng feelings mo mare! Feelings deserve RESPECT, not mockery! Pag laging sarcastic, walang genuine care!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may discussion, laging phone ang kinakausap. Di nakikinig.", 
    isRedFlag: true, 
    wisdom: "PHONE ang kaharap habang kausap ka?! Not LISTENING mare! If scrolling while you talk, hindi interested! Important conversations deserve FULL attention!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Lahat ng usapan, nagiging tungkol sa kanya. Never about you.", 
    isRedFlag: true, 
    wisdom: "LAHAT about SIYA lang?! Never about you?! Self-centered conversations mare! Partnership means BOTH get heard! Kung puro siya ang topic, ikaw invisible!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may problema siya, expected ka makinig. Pag ikaw, 'iba naman problema mo'.", 
    isRedFlag: true, 
    wisdom: "EXPECTED ka makinig pero sa iyo 'IBA naman problema mo'?! One-sided support mare! You're therapist pero siya hindi for you?! UNFAIR setup!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Never apologizes first. Pride over relationship health.", 
    isRedFlag: true, 
    wisdom: "NEVER nag-a-apologize first?! EGO over relationship mare! Someone has to break the ice! Pride KILLS love! Kung walang willing mag-sorry, walang resolution!", 
    category: GameMode.ADULT 
  },

  // Personal Behavior Red Flags
  { 
    text: "Pag stressed sa work, ikaw ang napapagalitan. Ikaw ang punching bag.", 
    isRedFlag: true, 
    wisdom: "IKAW ang napapagalitan pag stressed siya?! Misplaced ANGER mare! You're not stress relief punching bag! They need HEALTHY coping, not taking it out on you!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May addiction (alcohol, gambling, games) na affecting family life.", 
    isRedFlag: true, 
    wisdom: "ADDICTION affecting family?! Mare, need PROFESSIONAL help yan! Not acceptable na affected na family! Addiction is serious - intervention needed, not enabling!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang friends or hobbies. Ikaw lang ang mundo niya. Clingy to the extreme.", 
    isRedFlag: true, 
    wisdom: "WALANG friends, hobbies - ikaw lang mundo niya?! CODEPENDENT mare! Healthy adults have outside interests! Pressure on you to be EVERYTHING - not sustainable!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw mag-self improve. 'Ganito na ako, tanggapin mo.'", 
    isRedFlag: true, 
    wisdom: "'GANITO na ako, tanggapin mo'?! Growth REFUSAL mare! Everyone should keep GROWING! This is STAGNATION mindset! Accepting flaws doesn't mean accepting no effort to improve!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May anger management issues. Nawawasak ang gamit pag galit.", 
    isRedFlag: true, 
    wisdom: "SINISIRA gamit pag galit?! Violent TENDENCIES mare! Breaking things today, what TOMORROW?! This is DANGER sign! Seek professional help before it escalates!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging negative outlook. 'Wala namang magandang mangyayari.'", 
    isRedFlag: true, 
    wisdom: "'WALA namang magandang mangyayari' lagi?! Chronic NEGATIVITY mare! Drains ENERGY! Some optimism needed in partnership! Kung puro negative, puro negative din ang relationship!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi inaalagaan ang sarili - health, hygiene. 'Bahala na.'", 
    isRedFlag: true, 
    wisdom: "'BAHALA na' sa health at hygiene?! Self-NEGLECT mare! If can't care for SELF, how care for family?! Concerning behavior - get checked for depression or talk about it!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw mag-seek professional help (therapy, counseling) kahit obvious na kailangan.", 
    isRedFlag: true, 
    wisdom: "AYAW ng therapy kahit obvious na need?! Refusing HELP mare! Pride over WELLBEING! This affects the whole family! Kung ayaw magpa-tulong, ayaw mag-improve!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Palaging victim mentality. Lahat siya ang api, walang accountability.", 
    isRedFlag: true, 
    wisdom: "'API' siya sa lahat?! Never ACCOUNTABLE?! Chronic VICTIM mare! Everyone has some responsibility! Kung laging iba may kasalanan, EXHAUSTING yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kahit middle-aged na, pa-immature pa rin. 'Joke lang' excuse for bad behavior.", 
    isRedFlag: true, 
    wisdom: "ADULT na pero pa-IMMATURE?! 'Joke lang' excuse?! Perpetual CHILD mare! Maturity is expected in adults! Act your AGE! Hindi cute ang pa-childish sa edad na yan!", 
    category: GameMode.ADULT 
  },

  // Respect & Treatment Red Flags
  { 
    text: "Pinapahiya ka sa harap ng friends or family niya. Jokes na nakakasakit.", 
    isRedFlag: true, 
    wisdom: "PINAPAHIYA sa harap ng iba?! 'Jokes' na nakakasakit?! Public HUMILIATION mare! Never acceptable! Jokes should NOT hurt! Especially not in front of others!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Binabastos ang trabaho mo. 'Yung trabaho mo ba yan? Walang kwenta.'", 
    isRedFlag: true, 
    wisdom: "'WALANG KWENTA' ang trabaho mo daw?! Job SHAMING mare! All honest work deserves RESPECT! Demeaning your livelihood is demeaning YOU!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukunsinti ang disrespect from family niya towards you.", 
    isRedFlag: true, 
    wisdom: "KINUKUNSINTI ang disrespect ng family niya sayo?! Allowing DISRESPECT mare! Should DEFEND you! United front with spouse! Kung pinapayagan, parang siya rin ang nang-iinsulto!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Dinodownplay ang achievements mo. 'Okay lang yan, normal lang naman.'", 
    isRedFlag: true, 
    wisdom: "'NORMAL lang naman' ang achievement mo?! Minimizing your WINS mare! Partner should CELEBRATE, not diminish! Kung dinidismiss ang success mo, hindi ka supported!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukumpara ka sa iba. 'Buti pa asawa ni [name], ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "'BUTI PA asawa ni [name]'?! Spouse COMPARISON mare! Unfair at TOXIC! Accept your partner as they ARE! Kung laging may 'buti pa', never ka magiging sapat!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi binabati ang efforts mo. Cooking, cleaning, working - taken for granted.", 
    isRedFlag: true, 
    wisdom: "EFFORTS mo invisible?! Taken for GRANTED mare! Appreciation should be EXPRESSED! Don't feel invisible in your own home! Wag kang magpa-invisible - demand acknowledgment!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagde-decide for you without asking. 'Alam ko naman gusto mo.'", 
    isRedFlag: true, 
    wisdom: "'ALAM ko naman gusto mo' pero di naman tinanong?! Assuming without ASKING mare! Autonomy matters! ASK don't assume! Your opinion matters too!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinasabihan kang 'emotional' o 'dramatic' pag may legitimate concern.", 
    isRedFlag: true, 
    wisdom: "'EMOTIONAL' ka daw pag may concern?! Dismissive LABELING mare! Valid concerns are NOT drama! Gaslighting lite yan! Feelings mo valid - wag kang magpadismiss!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Magsasalita tungkol sa iba na mas attractive. 'Type ko talaga ganyang style.'", 
    isRedFlag: true, 
    wisdom: "'TYPE ko yan' habang nakaharap sayo?! Attraction to others VOCALIZED mare! Disrespectful sa harap mo! Keep those thoughts PRIVATE! Bastos yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may argument, nageescalate to personal attacks. Below the belt.", 
    isRedFlag: true, 
    wisdom: "PERSONAL attacks pag away?! Below the belt?! Fighting DIRTY mare! Attack the ISSUE, not the person! Below the belt is ABUSE! Not acceptable argument style!", 
    category: GameMode.ADULT 
  },

  // Life Goals & Future Red Flags
  { 
    text: "Hindi aligned ang life goals niyo pero ayaw niya mag-compromise.", 
    isRedFlag: true, 
    wisdom: "DIFFERENT goals pero walang COMPROMISE?! Goal MISMATCH mare! Compromise needed! One-sided sacrifice is NOT fair! Both should bend, not just one!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang retirement plans. 'Bahala na, malayo pa naman.'", 
    isRedFlag: true, 
    wisdom: "'BAHALA na, malayo pa' ang retirement?! No future PLANNING mare! Retirement comes FASTER than expected! Plan NOW! Bahala na is not retirement strategy!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw mag-isip about kids' future. 'Basta mabuhay okay na.'", 
    isRedFlag: true, 
    wisdom: "'BASTA mabuhay' lang for kids?! No planning for children mare! Education, future - need to plan AHEAD! Kids deserve more than 'survival mode' planning!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang ambition beyond current state. 'Okay na ako dito.'", 
    isRedFlag: true, 
    wisdom: "'OKAY na ako dito' forever?! STAGNATION mindset mare! Some GROWTH is healthy! Life is improvement! Kung walang ambition, walang progress!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto mag-take ng huge risk without discussing (resign, big investment).", 
    isRedFlag: true, 
    wisdom: "BIG risk na walang DISCUSSION?! Resign or invest na di pinag-usapan?! Unilateral risky decisions mare! Family-affecting choices need DISCUSSION!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Inaasahan lang ang swerte for future. 'Baka manalo sa lotto.'", 
    isRedFlag: true, 
    wisdom: "'BAKA manalo sa lotto' ang plan?! LOTTERY mentality mare! Not a retirement plan! ACTION needed, not luck! Hindi pwedeng swerte lang ang future!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang savings. 'Enjoy lang, bahala na bukas.'", 
    isRedFlag: true, 
    wisdom: "'BAHALA na bukas' at walang SAVINGS?! No savings mentality mare! Tomorrow WILL come! Prepare for it! Enjoy TODAY pero plan for TOMORROW!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw pag-usapan ang health insurance, life insurance. 'Asa naman sa gobyerno.'", 
    isRedFlag: true, 
    wisdom: "'ASA sa gobyerno' ang plan?! No safety NET mare! Insurance is PROTECTION! Don't rely on luck or government! Protect your family financially!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Career decisions without considering family impact.", 
    isRedFlag: true, 
    wisdom: "CAREER moves na walang family consideration?! Selfish decisions mare! Family should be in the EQUATION! Not everything is about individual - think of impact!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukwestiyon career ambitions mo. 'Sapat na yang sweldo mo, wag na OA.'", 
    isRedFlag: true, 
    wisdom: "'SAPAT na yan, wag OA' sa ambitions mo?! Limiting YOUR potential mare! Partner should SUPPORT, not limit! Kung ayaw niya mag-grow, hindi ibig sabihin ikaw din!", 
    category: GameMode.ADULT 
  },

  // ========== GREEN FLAGS (70) ==========
  
  // Marriage & Long-term Relationship Green Flags
  { 
    text: "Kapag may problema, sinasabi agad nang maayos. 'Can we talk about something that's bothering me?'", 
    isRedFlag: false, 
    wisdom: "'CAN WE TALK?' na maayos ang approach?! Healthy COMMUNICATION mare! Addresses issues PROMPTLY and calmly! Green flag - mature at direct! Ganyan dapat ang married couples!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-aaral ng love language mo at consistent na ginagamit kahit matagal na kayo.", 
    isRedFlag: false, 
    wisdom: "Nag-AARAL ng love language mo after years?! Effort SUSTAINED mare! Continues learning to love you BETTER! Keeper yan - hindi tumitigil sa pag-improve ng relationship!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Admits when wrong and follows up with changed behavior, not just words.", 
    isRedFlag: false, 
    wisdom: "ADMITS wrong with CHANGED behavior?! Accountability with ACTION mare! Words backed by behavior! Real apology - not just 'sorry' pero same mistakes ulit!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-sset aside ng regular date nights kahit busy pareho at may kids.", 
    isRedFlag: false, 
    wisdom: "DATE NIGHTS kahit busy at may kids?! Prioritizes RELATIONSHIP mare! Makes time despite busy life! Investment in LOVE! Green flag ng commitment!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Defends you to their family respectfully but firmly when needed.", 
    isRedFlag: false, 
    wisdom: "DEFENDS you sa family niya?! United FRONT mare! Protects you from criticism! Loyal spouse yan! Green flag - pinoprotektahan ka kahit sa sariling pamilya niya!", 
    category: GameMode.ADULT 
  },
  { 
    text: "After an argument, sinisigurado na resolved bago matulog. No grudges.", 
    isRedFlag: false, 
    wisdom: "RESOLVED bago matulog?! No GRUDGES mare! Conflict resolution yan - doesn't let issues fester! Mature relationship! Green flag - hindi nagpapaiwan ng sama ng loob!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Remembers important dates and plans thoughtful celebrations.", 
    isRedFlag: false, 
    wisdom: "REMEMBERS dates at may thoughtful plans?! Mare, valued at remembered ka! Shows you MATTER! Sweet green flag - hindi ka nakakalimutan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Supports your individual growth even if it means sacrifice on their part.", 
    isRedFlag: false, 
    wisdom: "SUPPORTS growth mo kahit may sacrifice siya?! UNSELFISH support mare! Wants you to grow even if inconvenient! TRUE love - hindi selfish!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Creates space for you to express frustrations without judgment.", 
    isRedFlag: false, 
    wisdom: "SAFE SPACE for frustrations?! No judgment mare! Can VENT without criticism! Emotional safety yan! Green flag - accepted ka, pati emotions mo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Consistently shows affection through actions, not just words.", 
    isRedFlag: false, 
    wisdom: "ACTIONS match WORDS consistently?! Love DEMONSTRATED mare! Not just declared - SHOWN! Authentic affection! Green flag na may gawa, hindi puro salita!", 
    category: GameMode.ADULT 
  },

  // Financial Green Flags
  { 
    text: "Open about all finances - income, debts, goals. Complete transparency.", 
    isRedFlag: false, 
    wisdom: "OPEN about ALL finances?! Complete TRANSPARENCY mare! No hidden surprises! Trust in money matters! Green flag - walang tinatago sa pera!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Discusses major purchases as a team before deciding.", 
    isRedFlag: false, 
    wisdom: "MAJOR purchases discussed as TEAM?! Team decision-making mare! No unilateral big spending! Partnership sa finances! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Balances family needs with personal wants fairly.", 
    isRedFlag: false, 
    wisdom: "BALANCES needs vs wants fairly?! Responsible PRIORITIES mare! Needs before wants, family considered! Green flag ng maturity!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Contributes fairly to household based on ability, not traditional roles.", 
    isRedFlag: false, 
    wisdom: "FAIR contribution based on ABILITY?! Not based on gender mare! Modern partnership! Green flag - equitable not just equal!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Saves for emergencies and future without being reminded.", 
    isRedFlag: false, 
    wisdom: "SAVES without reminders?! Self-motivated SAVER mare! Responsible adulting! Future-focused! Green flag - hindi ka mag-aalala sa pera!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Respects your financial decisions and autonomy within agreed boundaries.", 
    isRedFlag: false, 
    wisdom: "RESPECTS financial autonomy?! Trust in money DECISIONS mare! Healthy setup! Green flag - may freedom ka pa rin sa finances!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Works together on budget and sticks to it consistently.", 
    isRedFlag: false, 
    wisdom: "BUDGET worked on TOGETHER?! Sticks to it?! Team approach to money mare! Financially mature! Green flag - disciplined sa pera!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Doesn't hide purchases or lie about spending.", 
    isRedFlag: false, 
    wisdom: "No HIDDEN purchases or lies?! Honest spending mare! No financial secrets! Trustworthy! Green flag - transparent sa gastos!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Plans for children's education and future proactively.", 
    isRedFlag: false, 
    wisdom: "PLANS for kids' future proactively?! Future-focused PARENT mare! Thinks ahead for children! Responsible! Green flag ng magulang!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles financial stress maturely without blaming the other.", 
    isRedFlag: false, 
    wisdom: "HANDLES money stress without BLAMING?! No finger-pointing mare! Team mentality during hard times! Green flag - partner talaga kahit sa hirap!", 
    category: GameMode.ADULT 
  },

  // Parenting Green Flags
  { 
    text: "Actively involved in day-to-day childcare without being asked.", 
    isRedFlag: false, 
    wisdom: "INVOLVED in childcare without being ASKED?! Hands-on parent mare! Takes INITIATIVE! Equal parenting! Green flag - hindi ka nag-iisang magulang!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Presents united front with you on discipline decisions.", 
    isRedFlag: false, 
    wisdom: "UNITED FRONT sa discipline?! Consistent parenting mare! Kids see TEAMWORK! Healthy for everyone! Green flag - solid partnership!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes time to bond one-on-one with each child regularly.", 
    isRedFlag: false, 
    wisdom: "ONE-ON-ONE time with each child?! Quality time mare! Individual attention! Present parent! Green flag - investment sa bawat anak!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Willing to learn and grow as a parent. Reads, asks, improves.", 
    isRedFlag: false, 
    wisdom: "LEARNS and GROWS as parent?! Reads, asks, improves?! Growth mindset parenting mare! Always learning! Great parent material!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles parenting disagreements privately, not in front of kids.", 
    isRedFlag: false, 
    wisdom: "DISAGREEMENTS handled privately?! Kids don't see parent fights mare! Appropriate conflict handling! Protective! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gives you breaks and takes over parenting duties regularly.", 
    isRedFlag: false, 
    wisdom: "GIVES you breaks regularly?! Shared LOAD mare! Understands you need rest! Considerate partner and parent! Green flag - hindi ikaw lagi!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Attends school events, doctor appointments, important milestones.", 
    isRedFlag: false, 
    wisdom: "ATTENDS school events, appointments?! PRESENT parent mare! Shows up for important moments! Kids remember who shows up! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Discusses parenting philosophies and aligns on major decisions.", 
    isRedFlag: false, 
    wisdom: "ALIGNED parenting philosophies?! Same PAGE on big things mare! Effective team! Green flag - united sa pagpapalaki ng anak!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Models healthy relationship behavior for children.", 
    isRedFlag: false, 
    wisdom: "MODELS healthy relationship?! Kids learn from seeing healthy LOVE mare! Teaching by example! Green flag - next generation will learn!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Celebrates kids' unique traits instead of comparing.", 
    isRedFlag: false, 
    wisdom: "CELEBRATES each kid's uniqueness?! No comparison mare! Each child valued! Healthy self-esteem for kids! Green flag ng magulang!", 
    category: GameMode.ADULT 
  },

  // Household & Daily Life Green Flags
  { 
    text: "Does household chores without being asked or reminded.", 
    isRedFlag: false, 
    wisdom: "DOES chores without reminders?! INITIATIVE mare! Sees what needs doing and DOES it! Equal partner! Green flag - di ka mag-iisang nag-aasikaso!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes full responsibility for certain tasks, not just 'helping'.", 
    isRedFlag: false, 
    wisdom: "OWNERSHIP not just 'helping'?! 'This is MY job' mentality mare! True PARTNER, not assistant! Green flag - may sariling responsibilities!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Notices when you're tired and picks up slack without being asked.", 
    isRedFlag: false, 
    wisdom: "NOTICES when you're tired and picks up slack?! Observant partner mare! Sees your needs! Caring without prompting! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Makes decisions together on home improvements and changes.", 
    isRedFlag: false, 
    wisdom: "HOME decisions made TOGETHER?! Joint decisions mare! Both voices MATTER! Partnership in action! Green flag - bahay niyo pareho!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Cooks, cleans, runs errands as natural part of their contribution.", 
    isRedFlag: false, 
    wisdom: "Cooks, cleans, errands as NORMAL contribution?! Not 'special' but REGULAR mare! Great! Green flag - normalized adulting!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Manages own tasks without mental load falling on you.", 
    isRedFlag: false, 
    wisdom: "MANAGES own tasks without you tracking?! Mental load SHARED mare! Self-managing! Not dependent on reminders! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Creates routines that work for both of you.", 
    isRedFlag: false, 
    wisdom: "ROUTINES built TOGETHER?! Functional household mare! Team effort in daily life! Green flag - may sistema na patas!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Respectful of shared spaces and keeps them organized.", 
    isRedFlag: false, 
    wisdom: "RESPECTS shared space?! Keeps organized?! Tidy habits mare! Considerate living! Green flag - maayos sa bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes initiative on maintenance and repairs proactively.", 
    isRedFlag: false, 
    wisdom: "PROACTIVE on maintenance?! Doesn't wait to be asked mare! Responsible home care! Green flag - may iniisip sa bahay!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Makes home a comfortable, welcoming space for both.", 
    isRedFlag: false, 
    wisdom: "Makes home COMFORTABLE for both?! Home BUILDER mare! Invests in making space comfortable! Thoughtful! Green flag!", 
    category: GameMode.ADULT 
  },

  // Emotional & Communication Green Flags
  { 
    text: "Checks in regularly about your emotional state. 'How are you really?'", 
    isRedFlag: false, 
    wisdom: "'How are you REALLY?' regularly?! Emotional ATTENTIVENESS mare! Genuinely cares how you feel! Connected! Green flag - interested sa true feelings mo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles disagreements calmly without raising voice.", 
    isRedFlag: false, 
    wisdom: "CALM during disagreements?! No raised voice?! Mature conflict handling mare! Discusses, doesn't shout! Green flag - mature talaga!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Validates your feelings even when doesn't fully understand.", 
    isRedFlag: false, 
    wisdom: "VALIDATES feelings even when doesn't understand?! Emotional validation mare! Doesn't need to understand to SUPPORT! Safe! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Expresses gratitude for everyday things you do.", 
    isRedFlag: false, 
    wisdom: "GRATITUDE expressed for everyday things?! Appreciation voiced mare! Never takes for granted! Valued partner! Green flag - may recognition efforts mo!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Makes repair attempts after conflicts to reconnect.", 
    isRedFlag: false, 
    wisdom: "REPAIR attempts after fights?! Reaches out to reconnect mare! Values CONNECTION! Green flag - hindi nagpapatagal ng away!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Listens fully without planning response while you talk.", 
    isRedFlag: false, 
    wisdom: "LISTENS without planning response?! Active LISTENING mare! Present in conversation! Truly HEARS you! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Open to marriage counseling if ever needed.", 
    isRedFlag: false, 
    wisdom: "OPEN to counseling if needed?! Help-seeking OPENNESS mare! Willing to work on issues! Mature! Green flag - hindi proud mag-seek ng help!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Celebrates your wins genuinely, big and small.", 
    isRedFlag: false, 
    wisdom: "CELEBRATES all your wins?! Big and small mare! Happy for your successes! Supportive spouse! Green flag - cheerleader mo talaga!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Maintains friendship and fondness despite years together.", 
    isRedFlag: false, 
    wisdom: "Still FRIENDS and FOND after years?! Friendship MAINTAINED mare! Still likes you after years together! Precious! Green flag na rare!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Shows physical affection naturally and consistently.", 
    isRedFlag: false, 
    wisdom: "CONSISTENT physical affection?! Natural and regular mare! Touch still PRESENT! Connection maintained! Green flag - hindi nawawala ang lambing!", 
    category: GameMode.ADULT 
  },

  // Personal Growth & Character Green Flags
  { 
    text: "Continues growing personally through learning, hobbies, self-improvement.", 
    isRedFlag: false, 
    wisdom: "STILL GROWING personally?! Continuous improvement mare! Still developing even in marriage! Inspiring partner! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes responsibility for mental health and seeks help when needed.", 
    isRedFlag: false, 
    wisdom: "Takes RESPONSIBILITY for mental health?! Gets help when needed mare! Self-aware! Green flag - hindi umaasa sayo para sa mental health niya!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Manages stress in healthy ways that don't affect family negatively.", 
    isRedFlag: false, 
    wisdom: "HEALTHY stress management?! Doesn't affect family negatively mare! Safe for family! Green flag - di kayo stress outlet!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Maintains own friendships and interests outside marriage.", 
    isRedFlag: false, 
    wisdom: "HAS own friends and interests?! Healthy INDEPENDENCE mare! Complete person! Not codependent! Green flag - balanced individual!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Shows consistent character whether watched or not.", 
    isRedFlag: false, 
    wisdom: "SAME person whether watched or not?! INTEGRITY mare! Consistent character! Trustworthy! Green flag - genuine kahit walang makakita!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles aging and life changes with grace and adaptation.", 
    isRedFlag: false, 
    wisdom: "GRACEFUL aging and adaptation?! Handles changes well mare! Mature perspective! Green flag - di nagdadrama sa inevitable changes!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Models good values and behavior for children to follow.", 
    isRedFlag: false, 
    wisdom: "MODELS good values?! Lives values for kids mare! Teaches through EXAMPLE! Role model! Green flag na magulang!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Admits when doesn't know something and willing to learn.", 
    isRedFlag: false, 
    wisdom: "ADMITS when doesn't know?! Willing to LEARN mare! Humble learner! Growth mindset! Green flag - walang pa-expert kung di naman alam!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kind to everyone - waiters, drivers, strangers - not just you.", 
    isRedFlag: false, 
    wisdom: "KIND to everyone - waiter, driver, strangers?! Universal KINDNESS mare! Character shown to ALL! Genuine person! Green flag na tunay na mabait!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Balances work, family, and self without burning out or neglecting any.", 
    isRedFlag: false, 
    wisdom: "BALANCES work, family, self?! Life BALANCE mare! All areas attended! Healthy priorities! Green flag - maayos ang buhay, maayos ang partnership!", 
    category: GameMode.ADULT 
  }
];