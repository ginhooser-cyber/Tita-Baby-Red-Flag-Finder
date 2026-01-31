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
    wisdom: "Blame shifter! Marriage is teamwork! Pag lahat sayo ang sisi, wala siyang pakialam mag-improve!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagsabi siya na 'Wala nang romance sa marriage natin' pero siya mismo walang effort para buhayin ito.", 
    isRedFlag: true, 
    wisdom: "Romance takes two! Kung nagre-reklamo pero walang ginagawa, siya ang problema! Puro salita, walang gawa!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tuwing birthday or anniversary mo, nakakalimutan niya pero expected ka mag-surprise sa kanya.", 
    isRedFlag: true, 
    wisdom: "Double standards sa pagmamahal! Kung important sa kanya, hindi niya makakalimutan! One-sided love!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may misunderstanding, tumatahimik siya for days. Silent treatment ang default coping mechanism.", 
    isRedFlag: true, 
    wisdom: "Stonewalling! Mature adults communicate! Silent treatment is emotional punishment!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinasabi niya sa ibang tao ang mga problema niyo pero sayo, 'okay naman tayo' ang sagot.", 
    isRedFlag: true, 
    wisdom: "Pag-usapan muna sa loob ng bahay! Bakit ang mundo nakakaalam pero ikaw hindi? Communication breakdown!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagbabanta ng annulment/hiwalayan every argument. 'Kung ayaw mo, edi maghiwalay na tayo!'", 
    isRedFlag: true, 
    wisdom: "Using separation as threat! Marriage is commitment, not hostage negotiation!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi niya kaya mag-sorry genuinely. 'Sorry na kung nasaktan ka' imbes na 'Sorry sa ginawa ko'.", 
    isRedFlag: true, 
    wisdom: "Non-apology specialist! Real sorry acknowledges fault, not just your reaction!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto niya laging ikaw ang nag-aadjust sa schedule, wala siyang flexibility.", 
    isRedFlag: true, 
    wisdom: "One-sided sacrifice! Partnership means compromise from BOTH sides!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may nagawa kang mali years ago, binabalik-balikan pa rin hanggang ngayon.", 
    isRedFlag: true, 
    wisdom: "Scorekeeper! Forgiveness means letting go, not keeping receipts for future use!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biglang naging sweet at attentive after ng malaking away. Love bombing to avoid real resolution.", 
    isRedFlag: true, 
    wisdom: "Love bombing cycle! Sweet pag may kailangan i-resolve! Pattern ng manipulation!", 
    category: GameMode.ADULT 
  },

  // Financial Red Flags in Marriage
  { 
    text: "May hidden credit cards na hindi mo alam. Nalaman mo lang nung nag-apply kayo ng loan at may utang pala siya.", 
    isRedFlag: true, 
    wisdom: "Financial infidelity! Secrets sa pera = secrets sa trust! Major breach yan!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto niyang kontrolin lahat ng finances. Binibigyan ka lang ng allowance na parang bata.", 
    isRedFlag: true, 
    wisdom: "Financial abuse! Adults don't give other adults 'allowance'! Equal access to family money!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging may 'emergency' ang pamilya niya na kailangan ng pera. Every month may bagong emergency.", 
    isRedFlag: true, 
    wisdom: "Family ATM syndrome! Pattern na yan! Check kung totoo o excuse lang!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi siya nag-cocontribute sa household expenses pero lahat ng wants niya, binibili.", 
    isRedFlag: true, 
    wisdom: "Financial irresponsibility! Luho first bago responsibilities? Wrong priorities!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagagalit pag tinatanong mo saan napunta ang pera. 'Bakit ba, accountant mo ba ako?'", 
    isRedFlag: true, 
    wisdom: "Defensive about money! Transparency sa finances is basic in marriage!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May gambling problem pero ayaw aminin. 'Isang beses lang naman, tsaka nanalo naman ako minsan.'", 
    isRedFlag: true, 
    wisdom: "Gambling addiction in denial! 'Nanalo naman minsan' is gambler's excuse! Seek help!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto niya lang ang joint account pag need niya ng pera. Pag sayo naman, 'personal' niya raw yung iba.", 
    isRedFlag: true, 
    wisdom: "Selective sharing! Joint should mean joint, not 'mine and ours'!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-resign sa work without discussing with you. 'Bahala na, ikaw naman may trabaho.'", 
    isRedFlag: true, 
    wisdom: "Unilateral major decision! Career changes affect the family! Should be discussed!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinapirmahan ka ng documents na hindi mo nababasa ng maayos. 'Trust me, okay yan.'", 
    isRedFlag: true, 
    wisdom: "Blind trust demand! NEVER sign anything without reading! Protect yourself legally!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Lahat ng investments ay sa pangalan niya. 'Para mas safe, ako na bahala.'", 
    isRedFlag: true, 
    wisdom: "Asset hoarding! Should be joint or at least discussed! Protect your share!", 
    category: GameMode.ADULT 
  },

  // In-Laws Red Flags
  { 
    text: "Nanay niya laging may negative comment sayo pero hindi ka dinedepensahan ng asawa mo.", 
    isRedFlag: true, 
    wisdom: "No boundary with in-law! Spouse should defend you! United front lagi!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Lahat ng major decisions, tanong muna sa parents niya. Ikaw ang spouse pero last priority ang opinion mo.", 
    isRedFlag: true, 
    wisdom: "Mama's boy/girl syndrome! Spouse should be primary partner, not parents!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biyenan mo may susi ng bahay niyo at pumapasok basta-basta. 'Family naman kasi'.", 
    isRedFlag: true, 
    wisdom: "Boundary violation! Your home, your privacy! 'Family' doesn't mean no boundaries!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukumpara ka lagi sa in-laws. 'Buti pa si sister-in-law, ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "In-law comparison! Unfair at toxic! Iba kayong mga tao!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may away kayo ng spouse, umuuwi siya sa parents at kinukwento lahat.", 
    isRedFlag: true, 
    wisdom: "Running to mommy! Couple issues should stay between couple first!", 
    category: GameMode.ADULT 
  },
  { 
    text: "In-laws expected na mag-support ka financially kahit hindi naman kayo well-off.", 
    isRedFlag: true, 
    wisdom: "Financial pressure from in-laws! Help should be given freely, not demanded!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Every holiday, sa side niya lagi. Pag sa side mo, may excuse lagi.", 
    isRedFlag: true, 
    wisdom: "Unbalanced family time! Both families matter! Should alternate fairly!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biyenan mo nag-dedesisyon sa parenting ng anak niyo. 'Alam ko mas marami kaysa sayo.'", 
    isRedFlag: true, 
    wisdom: "Overstepping grandparent! Parents decide for their children, not grandparents!", 
    category: GameMode.ADULT 
  },
  { 
    text: "In-laws nagko-comment sa body mo, sa bahay mo, sa cooking mo. Lahat may puna.", 
    isRedFlag: true, 
    wisdom: "Critical in-laws! Constant criticism is toxic! Spouse should set boundaries!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinag-uusapan kayo ng in-laws kapag wala kayo. Nabalitaan mo sa ibang relatives.", 
    isRedFlag: true, 
    wisdom: "Gossip in-laws! Dapat protected ang relationship niyo by spouse!", 
    category: GameMode.ADULT 
  },

  // Parenting Red Flags
  { 
    text: "Isa lang ang nagdi-discipline sa anak, ikaw. Siya ang 'good cop' lagi.", 
    isRedFlag: true, 
    wisdom: "Good cop/bad cop parenting! Both should be consistent! Nakakapagod maging laging villain!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gumagamit ng anak para manglamang sa away. 'Tignan mo, ayaw na sayo ng anak natin.'", 
    isRedFlag: true, 
    wisdom: "Weaponizing children! Kids should NOT be pawns in marital issues!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi involved sa parenting. 'Trabaho ko yan? Ikaw ang nanay/tatay eh.'", 
    isRedFlag: true, 
    wisdom: "Absent parent! Both parents should be involved! Gender doesn't excuse!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may achievements ang anak, siya ang kinecredit. Pag may problema, kasalanan mo.", 
    isRedFlag: true, 
    wisdom: "Credit grabbing parent! Parenting is shared effort, good AND bad!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-iinuman or nagga-gaming habang ikaw nag-aalaga ng anak. 'Me time ko naman.'", 
    isRedFlag: true, 
    wisdom: "Unequal parenting load! Me time should be fair! Not one-sided!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi marunong mag-alaga ng anak alone. 'Babysitting ko ba yan?' Anak mo rin!", 
    isRedFlag: true, 
    wisdom: "Parents don't 'babysit' their own kids! That's called PARENTING!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag stressed siya, sa anak niya nila-lash out. 'Ang ingay mo kasi!'", 
    isRedFlag: true, 
    wisdom: "Misplaced anger! Children shouldn't be emotional outlet! Address stress properly!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw sumama sa school events. 'May trabaho ako, ikaw na lang.'", 
    isRedFlag: true, 
    wisdom: "Absent in milestones! Kids remember who shows up! Make time!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukumpara ang anak sa iba. 'Buti pa si [other kid], ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "Comparison parenting! Each child is unique! Comparisons damage self-esteem!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging naka-phone habang kasama ang anak. 'Present' physically pero mentally absent.", 
    isRedFlag: true, 
    wisdom: "Distracted parenting! Quality time means full attention! Put phone down!", 
    category: GameMode.ADULT 
  },

  // Household Responsibilities Red Flags
  { 
    text: "Hindi tumutulong sa household chores. 'Hindi ko ginagawa yan, trabaho ng babae/lalaki yan.'", 
    isRedFlag: true, 
    wisdom: "Gender-based excuses! Chores are everyone's responsibility! Welcome to 2024!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag gumagawa ng chores, kailangan pa ng instructions. 'Pano ba yan?'", 
    isRedFlag: true, 
    wisdom: "Weaponized incompetence! Adults know how to Google! Don't pretend helpless!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagagalit pag hindi mo nagawa ang chores pero siya walang ginagawa.", 
    isRedFlag: true, 
    wisdom: "Double standard sa housework! Ang lakas mag-reklamo pero walang ginagawa!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi nakaka-notice ng mga dapat gawin sa bahay. Ikaw lagi ang 'manager'.", 
    isRedFlag: true, 
    wisdom: "Mental load on you alone! Adulting means seeing what needs to be done!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may bisita, todo linis at tulong. Pag kayo lang, balik sa dati.", 
    isRedFlag: true, 
    wisdom: "For show only! Consistent effort not just for visitors! Red flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "'Tutulong ako, sabihin mo lang' pero dapat mo pang sabihin lahat ng obvious.", 
    isRedFlag: true, 
    wisdom: "Helper not partner! Spouses should see and do, not wait for instructions!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag gumawa ng isang chore, magpa-papuri buong linggo.", 
    isRedFlag: true, 
    wisdom: "Praise-seeking for bare minimum! Chores are expected, not medal-worthy!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi niya alam saan nakalagay ang mga gamit sa bahay niya mismo.", 
    isRedFlag: true, 
    wisdom: "Checked out of home life! Living there means knowing where things are!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kahit ilang taon na kayo, hindi pa rin marunong maglaba/magluto ng basic.", 
    isRedFlag: true, 
    wisdom: "Intentional helplessness! Years na, no excuse! Life skills are learnable!", 
    category: GameMode.ADULT 
  },
  { 
    text: "'Mas efficient ka naman diyan, ikaw na lang.' To avoid doing things.", 
    isRedFlag: true, 
    wisdom: "Flattery to avoid work! Everyone can learn! Don't fall for it!", 
    category: GameMode.ADULT 
  },

  // Intimacy & Relationship Health Red Flags
  { 
    text: "Walang physical affection unless may gusto. No random hugs, no sweet gestures.", 
    isRedFlag: true, 
    wisdom: "Transactional affection! Intimacy should be spontaneous, not just when needed!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging may excuse para iwasan intimacy. Years na pero never napag-usapan ng maayos.", 
    isRedFlag: true, 
    wisdom: "Avoidance without communication! Intimacy issues need discussion, not silence!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinapahiya ka during intimate moments. Comments about body, performance.", 
    isRedFlag: true, 
    wisdom: "Intimate shaming! Safe space dapat yan! No put-downs during vulnerable moments!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pinipilit kahit ayaw mo. 'Asawa kita, obligasyon mo yan.'", 
    isRedFlag: true, 
    wisdom: "Marital coercion! Consent matters even in marriage! This is abuse!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang effort mag-date after marriage. 'Kasal na tayo, ano pang kailangan?'", 
    isRedFlag: true, 
    wisdom: "Romance effort zero! Marriage is not finish line, it's beginning! Keep dating!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagtatampo pag tinanggihan pero never tinatanong kung bakit.", 
    isRedFlag: true, 
    wisdom: "No curiosity about your feelings! Should ask 'what's wrong' not sulk!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging pagod for you pero may energy for hobbies, friends, games.", 
    isRedFlag: true, 
    wisdom: "Selective exhaustion! Energy is there, just not prioritizing you!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi ka kinakausap about needs. Assumed na dapat alam mo na.", 
    isRedFlag: true, 
    wisdom: "Mind reader expectation! Communicate needs! Adults use words!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May emotional affair with someone. 'Friends lang naman kami.'", 
    isRedFlag: true, 
    wisdom: "Emotional cheating! Intimacy given to others belongs to marriage! Red flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Comparison sa past partners. 'Mas [adjective] si ex dito.'", 
    isRedFlag: true, 
    wisdom: "Ex comparison! Past should stay in past! This is hurtful and disrespectful!", 
    category: GameMode.ADULT 
  },

  // Trust & Loyalty Red Flags
  { 
    text: "Laging may 'friend' na nakaka-close lately. Late night messages about 'personal stuff'.", 
    isRedFlag: true, 
    wisdom: "Suspicious closeness! Boundaries with others should be discussed! Red flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Biglang conscious sa appearance. Nagbago ng style, nagpapa-gym, pero wala naman occasion.", 
    isRedFlag: true, 
    wisdom: "Sudden change without explanation! May something to impress? Investigate!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Phone laging naka-face down. New password na hindi mo alam.", 
    isRedFlag: true, 
    wisdom: "Secretive behavior! Transparency should be normal! Hidden phone = hidden something!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Defensive pag tinanong tungkol sa schedule. 'Bakit ba, sinasabi ko naman sayo!'", 
    isRedFlag: true, 
    wisdom: "Overdefensive! Normal question shouldn't trigger defensiveness! Sus!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May separate life na hindi kasali ikaw. Friends, events, na never ka i-invite.", 
    isRedFlag: true, 
    wisdom: "Compartmentalized life! Spouse should be integrated, not excluded!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Tinatago ang social media activities. Unfollowed ka or blocked from seeing stories.", 
    isRedFlag: true, 
    wisdom: "Social media hiding! From spouse? What's there to hide? Red flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging may 'meeting' or 'emergency sa work' na hindi provable.", 
    isRedFlag: true, 
    wisdom: "Unverifiable excuses! Pattern of unexplained absences? Investigate!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nahuli mong nagsisinungaling sa maliit na bagay. 'E baka mag-overthink ka lang.'", 
    isRedFlag: true, 
    wisdom: "Small lies signal big ones! If dishonest sa maliit, paano sa malaki?", 
    category: GameMode.ADULT 
  },
  { 
    text: "May dating history na hindi disclosed bago kayo. Malalaman mo sa iba.", 
    isRedFlag: true, 
    wisdom: "Hidden past! Important info should come from them, not others!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Accusatory sayo na may iba ka - projection because they're the one hiding.", 
    isRedFlag: true, 
    wisdom: "Projection! Guilty people accuse others of what they're doing! Classic!", 
    category: GameMode.ADULT 
  },

  // Communication Red Flags
  { 
    text: "Pag tinanong kung okay lang siya, laging 'oo' pero actions say otherwise.", 
    isRedFlag: true, 
    wisdom: "Passive aggressive! Words and actions don't match! Ask for direct communication!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging busy mag-usap. No time for deep conversations about relationship.", 
    isRedFlag: true, 
    wisdom: "Communication avoidance! 'Busy' is excuse! Make time for important talks!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagdadabog at umiiyak para matapos ang discussion.", 
    isRedFlag: true, 
    wisdom: "Emotional manipulation! Tantrums to end conversations? Not adult behavior!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag nagsabi ka ng concerns, binabaligtad na kasalanan mo.", 
    isRedFlag: true, 
    wisdom: "DARVO tactic! Deny, Attack, Reverse Victim and Offender! Manipulation!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinisigawan ka pag nag-aaway. Volume up para manalo sa argument.", 
    isRedFlag: true, 
    wisdom: "Yelling is not communicating! Volume doesn't equal validity! Abusive!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gumagamit ng sarcasm to dismiss your feelings. 'Edi sorry na, Your Majesty.'", 
    isRedFlag: true, 
    wisdom: "Sarcastic dismissal! Feelings deserve respect, not mockery!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may discussion, laging phone ang kinakausap. Di nakikinig.", 
    isRedFlag: true, 
    wisdom: "Distracted during important talks! If scrolling while you talk, not listening!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Lahat ng usapan, nagiging tungkol sa kanya. Never about you.", 
    isRedFlag: true, 
    wisdom: "Self-centered conversations! Partnership means both get heard!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may problema siya, expected ka makinig. Pag ikaw, 'iba naman problema mo'.", 
    isRedFlag: true, 
    wisdom: "One-sided support! You're therapist but they're not for you! Unfair!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Never apologizes first. Pride over relationship health.", 
    isRedFlag: true, 
    wisdom: "Ego over relationship! Someone has to break ice! Pride kills love!", 
    category: GameMode.ADULT 
  },

  // Personal Behavior Red Flags
  { 
    text: "Pag stressed sa work, ikaw ang napapagalitan. Ikaw ang punching bag.", 
    isRedFlag: true, 
    wisdom: "Misplaced anger! You're not stress relief! They need healthy coping!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May addiction (alcohol, gambling, games) na affecting family life.", 
    isRedFlag: true, 
    wisdom: "Addiction affecting family! Need professional help! Not acceptable!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang friends or hobbies. Ikaw lang ang mundo niya. Clingy to the extreme.", 
    isRedFlag: true, 
    wisdom: "Codependent! Healthy adults have outside interests! Pressure on you!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw mag-self improve. 'Ganito na ako, tanggapin mo.'", 
    isRedFlag: true, 
    wisdom: "Growth refusal! Everyone should keep growing! This is stagnation!", 
    category: GameMode.ADULT 
  },
  { 
    text: "May anger management issues. Nawawasak ang gamit pag galit.", 
    isRedFlag: true, 
    wisdom: "Violent tendencies! Breaking things today, what tomorrow? Seek help!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Laging negative outlook. 'Wala namang magandang mangyayari.'", 
    isRedFlag: true, 
    wisdom: "Chronic negativity! Drains energy! Some optimism needed!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi inaalagaan ang sarili - health, hygiene. 'Bahala na.'", 
    isRedFlag: true, 
    wisdom: "Self-neglect! If can't care for self, how care for family? Concerning!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw mag-seek professional help (therapy, counseling) kahit obvious na kailangan.", 
    isRedFlag: true, 
    wisdom: "Refusing help! Pride over wellbeing! This affects the whole family!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Palaging victim mentality. Lahat siya ang api, walang accountability.", 
    isRedFlag: true, 
    wisdom: "Chronic victim! Never responsible for anything! Exhausting!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kahit middle-aged na, pa-immature pa rin. 'Joke lang' excuse for bad behavior.", 
    isRedFlag: true, 
    wisdom: "Perpetual child! Maturity is expected in adults! Act your age!", 
    category: GameMode.ADULT 
  },

  // Respect & Treatment Red Flags
  { 
    text: "Pinapahiya ka sa harap ng friends or family niya. Jokes na nakakasakit.", 
    isRedFlag: true, 
    wisdom: "Public humiliation! Never acceptable! Jokes should not hurt!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Binabastos ang trabaho mo. 'Yung trabaho mo ba yan? Walang kwenta.'", 
    isRedFlag: true, 
    wisdom: "Job shaming! All honest work deserves respect! Demeaning!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukunsinti ang disrespect from family niya towards you.", 
    isRedFlag: true, 
    wisdom: "Allowing disrespect! Should defend you! United front with spouse!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Dinodownplay ang achievements mo. 'Okay lang yan, normal lang naman.'", 
    isRedFlag: true, 
    wisdom: "Achievement minimizing! Partner should celebrate, not diminish wins!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukumpara ka sa iba. 'Buti pa asawa ni [name], ganito ganyan.'", 
    isRedFlag: true, 
    wisdom: "Spouse comparison! Unfair at toxic! Accept your partner as they are!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Hindi binabati ang efforts mo. Cooking, cleaning, working - taken for granted.", 
    isRedFlag: true, 
    wisdom: "Taking for granted! Appreciation should be expressed! Don't feel invisible!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nagde-decide for you without asking. 'Alam ko naman gusto mo.'", 
    isRedFlag: true, 
    wisdom: "Assuming without asking! Autonomy matters! Ask don't assume!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Sinasabihan kang 'emotional' o 'dramatic' pag may legitimate concern.", 
    isRedFlag: true, 
    wisdom: "Dismissive labeling! Valid concerns are not drama! Gaslighting lite!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Magsasalita tungkol sa iba na mas attractive. 'Type ko talaga ganyang style.'", 
    isRedFlag: true, 
    wisdom: "Attraction to others vocalized! Disrespectful! Keep those thoughts private!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Pag may argument, nageescalate to personal attacks. Below the belt.", 
    isRedFlag: true, 
    wisdom: "Fighting dirty! Attack the issue, not the person! Below the belt is abuse!", 
    category: GameMode.ADULT 
  },

  // Life Goals & Future Red Flags
  { 
    text: "Hindi aligned ang life goals niyo pero ayaw niya mag-compromise.", 
    isRedFlag: true, 
    wisdom: "Goal mismatch! Compromise needed! One-sided sacrifice is not fair!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang retirement plans. 'Bahala na, malayo pa naman.'", 
    isRedFlag: true, 
    wisdom: "No future planning! Retirement comes faster than expected! Plan now!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw mag-isip about kids' future. 'Basta mabuhay okay na.'", 
    isRedFlag: true, 
    wisdom: "No planning for children! Education, future - need to plan ahead!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang ambition beyond current state. 'Okay na ako dito.'", 
    isRedFlag: true, 
    wisdom: "Stagnation mindset! Some growth is healthy! Life is improvement!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gusto mag-take ng huge risk without discussing (resign, big investment).", 
    isRedFlag: true, 
    wisdom: "Unilateral risky decisions! Family-affecting choices need discussion!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Inaasahan lang ang swerte for future. 'Baka manalo sa lotto.'", 
    isRedFlag: true, 
    wisdom: "Lottery mentality! Not a retirement plan! Action needed, not luck!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Walang savings. 'Enjoy lang, bahala na bukas.'", 
    isRedFlag: true, 
    wisdom: "No savings mentality! Tomorrow will come! Prepare for it!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Ayaw pag-usapan ang health insurance, life insurance. 'Asa naman sa gobyerno.'", 
    isRedFlag: true, 
    wisdom: "No safety net! Insurance is protection! Don't rely on luck!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Career decisions without considering family impact.", 
    isRedFlag: true, 
    wisdom: "Selfish career moves! Family should be in the equation!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kinukwestiyon career ambitions mo. 'Sapat na yang sweldo mo, wag na OA.'", 
    isRedFlag: true, 
    wisdom: "Limiting your ambitions! Partner should support, not limit!", 
    category: GameMode.ADULT 
  },

  // ========== GREEN FLAGS (70) ==========
  
  // Marriage & Long-term Relationship Green Flags
  { 
    text: "Kapag may problema, sinasabi agad nang maayos. 'Can we talk about something that's bothering me?'", 
    isRedFlag: false, 
    wisdom: "Healthy communication! Addresses issues promptly and calmly! Green flag!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-aaral ng love language mo at consistent na ginagamit kahit matagal na kayo.", 
    isRedFlag: false, 
    wisdom: "Effort sustained! Continues learning to love you better! Keeper!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Admits when wrong and follows up with changed behavior, not just words.", 
    isRedFlag: false, 
    wisdom: "Accountability with action! Words backed by behavior! Real apology!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Nag-sset aside ng regular date nights kahit busy pareho at may kids.", 
    isRedFlag: false, 
    wisdom: "Prioritizes relationship! Makes time despite busy life! Investment in love!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Defends you to their family respectfully but firmly when needed.", 
    isRedFlag: false, 
    wisdom: "United front! Protects you from criticism! Loyal spouse!", 
    category: GameMode.ADULT 
  },
  { 
    text: "After an argument, sinisigurado na resolved bago matulog. No grudges.", 
    isRedFlag: false, 
    wisdom: "Conflict resolution! Doesn't let issues fester! Mature relationship!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Remembers important dates and plans thoughtful celebrations.", 
    isRedFlag: false, 
    wisdom: "Thoughtful partner! Shows you're remembered and valued! Sweet!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Supports your individual growth even if it means sacrifice on their part.", 
    isRedFlag: false, 
    wisdom: "Unselfish support! Wants you to grow even if inconvenient! True love!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Creates space for you to express frustrations without judgment.", 
    isRedFlag: false, 
    wisdom: "Safe space provider! Can vent without criticism! Emotional safety!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Consistently shows affection through actions, not just words.", 
    isRedFlag: false, 
    wisdom: "Actions match words! Love demonstrated, not just declared! Authentic!", 
    category: GameMode.ADULT 
  },

  // Financial Green Flags
  { 
    text: "Open about all finances - income, debts, goals. Complete transparency.", 
    isRedFlag: false, 
    wisdom: "Financial openness! No hidden surprises! Trust in money matters!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Discusses major purchases as a team before deciding.", 
    isRedFlag: false, 
    wisdom: "Team decision making! No unilateral big spending! Partnership!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Balances family needs with personal wants fairly.", 
    isRedFlag: false, 
    wisdom: "Balanced priorities! Needs before wants, family considered! Responsible!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Contributes fairly to household based on ability, not traditional roles.", 
    isRedFlag: false, 
    wisdom: "Fair contribution! Based on capacity not gender! Modern partnership!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Saves for emergencies and future without being reminded.", 
    isRedFlag: false, 
    wisdom: "Self-motivated saver! Responsible adulting! Future-focused!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Respects your financial decisions and autonomy within agreed boundaries.", 
    isRedFlag: false, 
    wisdom: "Financial autonomy respected! Trust in money decisions! Healthy!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Works together on budget and sticks to it consistently.", 
    isRedFlag: false, 
    wisdom: "Budget discipline! Team approach to money! Financially mature!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Doesn't hide purchases or lie about spending.", 
    isRedFlag: false, 
    wisdom: "Honest spending! No financial secrets! Trustworthy!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Plans for children's education and future proactively.", 
    isRedFlag: false, 
    wisdom: "Future-focused parent! Thinks ahead for kids! Responsible!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles financial stress maturely without blaming the other.", 
    isRedFlag: false, 
    wisdom: "Stress handling! No blame game during hard times! Team mentality!", 
    category: GameMode.ADULT 
  },

  // Parenting Green Flags
  { 
    text: "Actively involved in day-to-day childcare without being asked.", 
    isRedFlag: false, 
    wisdom: "Hands-on parent! Takes initiative! Equal parenting!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Presents united front with you on discipline decisions.", 
    isRedFlag: false, 
    wisdom: "Consistent parenting! Kids see teamwork! Healthy for everyone!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes time to bond one-on-one with each child regularly.", 
    isRedFlag: false, 
    wisdom: "Quality time with kids! Individual attention! Present parent!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Willing to learn and grow as a parent. Reads, asks, improves.", 
    isRedFlag: false, 
    wisdom: "Growth mindset parenting! Always learning! Great parent material!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles parenting disagreements privately, not in front of kids.", 
    isRedFlag: false, 
    wisdom: "Appropriate conflict handling! Kids don't see parent fights! Protective!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Gives you breaks and takes over parenting duties regularly.", 
    isRedFlag: false, 
    wisdom: "Shared load! Understands you need rest! Considerate partner!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Attends school events, doctor appointments, important milestones.", 
    isRedFlag: false, 
    wisdom: "Present parent! Shows up for important moments! Kids remember!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Discusses parenting philosophies and aligns on major decisions.", 
    isRedFlag: false, 
    wisdom: "Aligned parenting! Same page on big things! Effective team!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Models healthy relationship behavior for children.", 
    isRedFlag: false, 
    wisdom: "Role model! Kids learn from seeing healthy love! Teaching by example!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Celebrates kids' unique traits instead of comparing.", 
    isRedFlag: false, 
    wisdom: "Individuality celebrated! Each child valued as unique! Healthy self-esteem!", 
    category: GameMode.ADULT 
  },

  // Household & Daily Life Green Flags
  { 
    text: "Does household chores without being asked or reminded.", 
    isRedFlag: false, 
    wisdom: "Initiative! Sees what needs doing and does it! Equal partner!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes full responsibility for certain tasks, not just 'helping'.", 
    isRedFlag: false, 
    wisdom: "Ownership not helping! 'This is my job' mentality! True partner!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Notices when you're tired and picks up slack without being asked.", 
    isRedFlag: false, 
    wisdom: "Observant partner! Sees your needs! Caring without prompting!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Makes decisions together on home improvements and changes.", 
    isRedFlag: false, 
    wisdom: "Joint decisions on home! Both voices matter! Partnership in action!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Cooks, cleans, runs errands as natural part of their contribution.", 
    isRedFlag: false, 
    wisdom: "Normalized contribution! Not special, just normal adulting! Great!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Manages own tasks without mental load falling on you.", 
    isRedFlag: false, 
    wisdom: "Mental load shared! Self-managing! Not dependent on reminders!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Creates routines that work for both of you.", 
    isRedFlag: false, 
    wisdom: "Routine building together! Functional household! Team effort!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Respectful of shared spaces and keeps them organized.", 
    isRedFlag: false, 
    wisdom: "Respect for shared space! Tidy habits! Considerate living!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes initiative on maintenance and repairs proactively.", 
    isRedFlag: false, 
    wisdom: "Proactive home care! Doesn't wait to be asked! Responsible!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Makes home a comfortable, welcoming space for both.", 
    isRedFlag: false, 
    wisdom: "Home builder! Invests in making space comfortable! Thoughtful!", 
    category: GameMode.ADULT 
  },

  // Emotional & Communication Green Flags
  { 
    text: "Checks in regularly about your emotional state. 'How are you really?'", 
    isRedFlag: false, 
    wisdom: "Emotional attentiveness! Genuinely cares how you feel! Connected!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles disagreements calmly without raising voice.", 
    isRedFlag: false, 
    wisdom: "Calm conflict handling! Discusses, doesn't shout! Mature!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Validates your feelings even when doesn't fully understand.", 
    isRedFlag: false, 
    wisdom: "Emotional validation! Doesn't need to understand to support! Safe!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Expresses gratitude for everyday things you do.", 
    isRedFlag: false, 
    wisdom: "Appreciation expressed! Never takes for granted! Valued partner!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Makes repair attempts after conflicts to reconnect.", 
    isRedFlag: false, 
    wisdom: "Repair attempts! Reaches out after fights! Values connection!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Listens fully without planning response while you talk.", 
    isRedFlag: false, 
    wisdom: "Active listening! Present in conversation! Truly hears you!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Open to marriage counseling if ever needed.", 
    isRedFlag: false, 
    wisdom: "Help-seeking openness! Willing to work on issues! Mature!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Celebrates your wins genuinely, big and small.", 
    isRedFlag: false, 
    wisdom: "Cheerleader! Happy for your successes! Supportive spouse!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Maintains friendship and fondness despite years together.", 
    isRedFlag: false, 
    wisdom: "Friendship maintained! Still likes you after years! Precious!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Shows physical affection naturally and consistently.", 
    isRedFlag: false, 
    wisdom: "Consistent affection! Touch still present! Connection maintained!", 
    category: GameMode.ADULT 
  },

  // Personal Growth & Character Green Flags
  { 
    text: "Continues growing personally through learning, hobbies, self-improvement.", 
    isRedFlag: false, 
    wisdom: "Continuous growth! Still developing! Inspiring partner!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Takes responsibility for mental health and seeks help when needed.", 
    isRedFlag: false, 
    wisdom: "Mental health ownership! Gets help when needed! Self-aware!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Manages stress in healthy ways that don't affect family negatively.", 
    isRedFlag: false, 
    wisdom: "Healthy coping! Stress handled well! Safe for family!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Maintains own friendships and interests outside marriage.", 
    isRedFlag: false, 
    wisdom: "Healthy independence! Complete person! Not codependent!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Shows consistent character whether watched or not.", 
    isRedFlag: false, 
    wisdom: "Integrity! Same person always! Trustworthy character!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Handles aging and life changes with grace and adaptation.", 
    isRedFlag: false, 
    wisdom: "Graceful aging! Adapts to changes! Mature perspective!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Models good values and behavior for children to follow.", 
    isRedFlag: false, 
    wisdom: "Role model! Lives values! Teaches through example!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Admits when doesn't know something and willing to learn.", 
    isRedFlag: false, 
    wisdom: "Humble learner! Admits gaps! Growth mindset!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Kind to everyone - waiters, drivers, strangers - not just you.", 
    isRedFlag: false, 
    wisdom: "Universal kindness! Character shown to all! Genuine person!", 
    category: GameMode.ADULT 
  },
  { 
    text: "Balances work, family, and self without burning out or neglecting any.", 
    isRedFlag: false, 
    wisdom: "Life balance! All areas attended! Healthy priorities!", 
    category: GameMode.ADULT 
  }
];