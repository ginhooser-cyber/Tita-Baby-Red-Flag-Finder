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
    wisdom: "Ay nako anak, dry texter yan! Typing ng 10 minutes tapos 'K' lang? Ano yan, nagse-save ng salita para sa apocalypse?! Kung sa chat palang parang kausap mo ang pader, sa personal pa kaya? Wag kang mag-effort sa taong effort ka lang pag may kailangan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinagbabawal ka niyang mag-follow sa mga artista o influencers na opposite gender. 'Para walang temptation' daw.", 
    isRedFlag: true, 
    wisdom: "Hoy ineng, sino ba siya, pulis ng Instagram mo?! Following lang yan, hindi altar! Kung threatened siya kay Chris Evans o Liza Soberano, problema niya yan hindi mo! Insecurity niya yan na pinapasa sayo. Wag kang magpapakulong sa taong takot sa mga PIXELS!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagagalit siya pag hindi mo nilalagay 'In a relationship' sa Facebook kahit 2 weeks palang kayong nag-uusap. 'Prove your love' daw.", 
    isRedFlag: true, 
    wisdom: "Dalawang linggo palang tapos gusto na ng Facebook official?! Anak, ang kornik naman! Relationship status hindi yan loyalty test! Kung ganyan ka-desperado sa validation, mamaya hihingiin na SSS number mo. Ang genuine love hindi nagmamadali sa profile settings!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukuha niya phone mo pag tumutunog notif. 'Curious lang' daw siya kung sino nag-message sayo.", 
    isRedFlag: true, 
    wisdom: "Ay sus! 'Curious lang' daw pero parang immigration officer ang dating! Anak, hindi ka suspect sa krimen, bakit ka i-interrogate?! Privacy is a RIGHT hindi privilege! Kung walang trust, wala ring relationship. Sabihin mo, curious ka rin sa exit door!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang palagi kayo magkasama sa photos para 'proof' na kayo talaga. Pero yung solo pics mo, nirerequest niyang tanggalin.", 
    isRedFlag: true, 
    wisdom: "Delete ang solo pics mo?! Ano ka, wala nang sariling identity?! Nako anak, possessive yan disguised as sweetness! Bawal ka mag-isa sa sarili mong feed?! Yan ang klase ng tao na pag nawala ka, sasabihin 'akin lang siya.' Girl, you are NOT property!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinipilitan kang i-unfollow lahat ng friends mong opposite gender. 'Magjowa tayo, sapat na ako' daw.", 
    isRedFlag: true, 
    wisdom: "Unfollow lahat ng friends?! Ano yan, desyerto ang gusto niya para sayo?! Anak, ang jowa dapat DAGDAG sa mundo mo, hindi KAPALIT ng lahat! Isolation tactic yan ng mga manipulator. Takbo ka bago maging prison ang relationship mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kung ano man ang i-post mo, may comment siya agad. Pero puro negative - 'Ang taba mo diyan', 'Bakit ganyan filter mo'.", 
    isRedFlag: true, 
    wisdom: "Ay grabe, cheerleader ka dapat niya hindi basher! Comment nang comment pero puro criticism?! Anak, kung sa sarili mong jowa mo makukuha ang insecurity, paano pa sa iba?! Partner dapat nag-hype sayo, hindi nagpapababa ng self-esteem!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-create siya ng dummy account para i-spy ang activities mo. Nahuli mo kasi same profile pic ng pets niya.", 
    isRedFlag: true, 
    wisdom: "HALA! Detective ba jowa mo o boyfriend?! Gumawa ng dummy account para manmanan ka?! Anak, pag ganyan kaaga pa lang ang trust issues, paano pa pag mag-asawa na kayo? Baka may CCTV na sa bahay! Takbo ka na, bilis!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nag-screenshot ng conversations niyo at ipinapadala sa barkada niya. Pati mga private jokes niyo, alam na ng buong mundo.", 
    isRedFlag: true, 
    wisdom: "Screenshot king/queen yarn?! Ano yun, may TV show ba kayong dalawa na di mo alam?! Privacy sa relationship ay SACRED anak! Pag lahat ng usapan niyo broadcasted, wala na kayong sarili. Baka sunod niyan, may ticket na para sa problems niyo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gustong-gusto niyang i-TikTok lahat ng dates niyo. Pag tumanggi ka, 'Hindi mo ko mahal kasi ayaw mo sa content'.", 
    isRedFlag: true, 
    wisdom: "CONTENT ka daw?! Hindi ka jowa, props ka sa TikTok niya! Anak, pag mas importante ang views kaysa sa feelings mo, clout chaser yan hindi lover! Gusto niya sikat kayo, hindi close kayo. Run bago ka maging viral for wrong reasons!", 
    category: GameMode.TEENS 
  },

  // School & Academic Red Flags
  { 
    text: "Nagagalit siya pag mas mataas grades mo. 'Feeling mo matalino ka no?' tapos cold treatment for days.", 
    isRedFlag: true, 
    wisdom: "INSECURE sa grades mo?! Dapat proud siya sayo hindi threatened! Anak, ang jowa na nagagalit sa success mo, ayaw kang lumevel up. Gusto niya mas mababa ka para feel niya mataas siya. Mag-aral ka pa rin kahit umiyak siya!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinagagawa ka niya ng assignments at projects niya. Pag tumanggi ka, 'Di mo ko talaga mahal' ang drama.", 
    isRedFlag: true, 
    wisdom: "GINAGAWA kang homework machine?! Tapos love ang tawag?! Anak, USER yan in disguise! Pag pinapagawa ka ng assignment, sinasabi niya na mas mahalaga ang grade niya kaysa integrity mo. Two red flags yan - cheating at manipulation!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw niya na sumali ka sa org o club kasi 'busy na siya' pag walang time ka sa kanya.", 
    isRedFlag: true, 
    wisdom: "Bawal mag-org kasi siya mauuna?! Career sabotage agad sa high school pa lang?! Anak, ang extra-curricular ay para sa FUTURE mo, hindi optional. Ang jowa na hinahadlangan ang growth mo, ayaw kang mag-succeed. Prioritize mo ang sarili mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinisisi ka niya pag bumagsak siya sa exam. 'Kasi nag-chat tayo kagabi, hindi ako nakapag-review'.", 
    isRedFlag: true, 
    wisdom: "SISI sayo bakit siya bumagsak?! E siya naman ang hindi nag-review! Anak, blame shifter yan! Pag may problema, automatic kasalanan mo na kahit siya naman ang may accountability. Wag kang maging scapegoat ng katamaran niya!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nandoon sa classroom mo pag dismissal. Hindi pwedeng mag-usap ka sa classmates mo ng matagal.", 
    isRedFlag: true, 
    wisdom: "CAMPUS patrol ang peg?! Laging nakaabang sa classroom mo parang security guard?! Nako anak, sweet daw pero stalker vibes yan! Normal ang mag-usap ng classmates, bakit parang parole mo siya? Ang jowa hindi dapat prison warden!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapa-absent ka niya sa school para lang mag-date. 'One day lang naman, wala namang major exam'.", 
    isRedFlag: true, 
    wisdom: "ABSENT para sa date?! Ano ba yan, school mo kapalit ng movie date?! Anak, sabotage sa education yan! Ang jowa na walang paki sa school mo, wala ring paki sa future mo. Priorities mo dapat tama - diploma over drama!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukumpara ka niya sa mga 'mas smart' na classmates. 'Buti pa si [name], consistent sa honor roll'.", 
    isRedFlag: true, 
    wisdom: "KINUKUMPARA ka sa classmates?! Bakit, contest ba ang relationship?! Anak, ang jowa na nang-iinsulto ng intelligence mo, ayaw ka niya exactly as you are. Iba-iba tayo ng strengths! Sabihin mo buti pa si PEACE OF MIND, consistent ang presence!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagalit kasi sumali ka sa group study na may kasamang opposite gender. 'Bakit di mo ko isinama?'", 
    isRedFlag: true, 
    wisdom: "JEALOUS sa group study?! Academic activity yan hindi date! Anak, kung threatened siya sa calculus review, may mas malaking problema yan sa sarili niya. Study groups are for GRADES not romance! Trust issues red flag yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinabi niya sa teacher na copied mo ang assignment niya kasi nagalit siya sayo kagabi. Sabotage!", 
    isRedFlag: true, 
    wisdom: "SINUMBONG ka sa teacher dahil sa away?! GRABE! Anak, ginagamit ang school authority para gumanti?! Yan ang tawag na WEAPONIZED revenge! Academic record mo tinatamaan dahil sa petty fight! Exit mo na yan bago ma-expel ka!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may school event ka, laging 'coincidentally' may emergency siya at kailangan mong umalis.", 
    isRedFlag: true, 
    wisdom: "Emergency LAGI pag may event ka?! Coincidence daw?! Anak, ang pattern na yan ay SABOTAGE! Every time may important event ka, may drama siya. Gusto niya ikaw lang ang mundo, wala kang ibang experiences. That's control, not love!", 
    category: GameMode.TEENS 
  },

  // Friendship & Social Circle Red Flags
  { 
    text: "Ayaw niyang makihalubilo sa friend group mo. 'Baduy kasi ng mga kaibigan mo' ang rason.", 
    isRedFlag: true, 
    wisdom: "BADUY daw friends mo?! E sino siya, arbiter of coolness?! Anak, ang disrespect sa friends mo ay disrespect din sayo! Yan ang gusto niyang gawin - paliitin ang mundo mo para siya lang ang natira. Friends are forever, jowa is temporary!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may outing kayo ng friends mo, laging 'may sakit' siya at kailangan mo siyang alagaan.", 
    isRedFlag: true, 
    wisdom: "LAGING may sakit pag outing mo?! Every single time?! Anak, hindi yan coincidence, CALCULATED yan! Attention seeking sa worst way! Pag palagi mong inuuna siya over friends, mawawala sila lahat. Tapos sino ang aasa mo? Siya lang?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukwento niya sa friends niya ang mga away niyo pero edited version na siya ang bida at ikaw ang villain.", 
    isRedFlag: true, 
    wisdom: "EDITED version ng story?! Siya ang bida at ikaw ang villain?! Anak, image management on fleek yan pero sa expense mo! Friends niya alam lahat ng 'masama' mo na di naman totoo! Reputation mo sinisira para maging victim siya!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagseselos siya sa best friend mo na same gender. 'Mas mahal mo pa yata yan kaysa sakin'.", 
    isRedFlag: true, 
    wisdom: "SELOS sa best friend mo?! Same gender pa?! Anak, ang insecurity niya walang limit! Hindi competition ang friendship at love - IBA yan! Kung pati platonic love threatened siya, baka gusto niyang wala kang KAHIT SINO kundi siya!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging present sa group chat niyo ng friends. Comments sa lahat, as if member na siya kahit hindi.", 
    isRedFlag: true, 
    wisdom: "NAKIKI-GC sa friends mo?! Every message may comment?! Anak, boundaries alien concept sa taong yan! Friend group mo, personal space mo! Hindi siya automatic member just because jowa mo siya. Clingy level: MAXIMUM!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan niya ang friends mo na 'kayo na lang mag-usap ha, wag niyo na isali si [you]'.", 
    isRedFlag: true, 
    wisdom: "SINISIRA ang friendship mo sa likod mo?! Direct attack yan! Anak, isolation tactic yan ng mga abuser - alisin ang support system mo para ikaw nalang mag-isa. Pag narinig mo yan, TUMAKBO ka agad! Red flag on fire!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagbabasa siya ng group chat mo ng friends without permission. 'Para alam ko kung ano pinag-uusapan niyo'.", 
    isRedFlag: true, 
    wisdom: "BINABASA ang GC mo?! Para daw alam niya?! Anak, surveillance state ang dating niyan! Wala ka bang right sa private conversations?! Next step niya baka i-wiretap na phone mo! Trust issues level: FBI na dapat!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may friend na bigla siyang close, malalaman mo secretly crush pala noon para pagselosin ka.", 
    isRedFlag: true, 
    wisdom: "CRUSH pala noon yung friend?! Tapos close na ngayon?! TRIANGULATION yan anak! Ginagamit ang third person para ma-insecure ka at mas mag-effort. Manipulation 101 yan! Wag ka mag-react - exit mo na lang siya sa buhay mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Niyayaya ka niyang makipag-away sa friend mo na 'di naman niya nagustuhan'.", 
    isRedFlag: true, 
    wisdom: "NIYAYAYA kang awayin ang FRIEND mo?! Divide and conquer ang galawan! Anak, gusto niyang i-cut ang friendships mo isa-isa! Pag wala ka nang friends, sino ang aasa mo? Siya lang! Don't let them isolate you!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag kasama mo friends mo, laging naka-pout siya at tahimik para i-guilty trip ka.", 
    isRedFlag: true, 
    wisdom: "NAKA-POUT pag kasama mo friends?! Passive-aggressive expert yan! Anak, hindi mo trabaho na maging entertainer niya 24/7! Guilt-tripping yan para palagi ka lang kasama niya. Sabihin mo, mag-enjoy ka muna sa sarili mo, I'll enjoy mine!", 
    category: GameMode.TEENS 
  },

  // Emotional Manipulation Red Flags
  { 
    text: "Pag nagkamali siya, laging may excuse na 'Ganito kasi ako lumaki' o 'Trauma ko yan'.", 
    isRedFlag: true, 
    wisdom: "TRAUMA daw kaya okay lang manakit?! Anak, valid ang trauma PERO hindi ito FREE PASS para magkamali palagi! Accountability pa rin dapat! Pag laging excuse ang past, walang interest sa change. Healing is a choice, not an option!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'ikaw na lang ang dahilan para mabuhay ako'. Pressure much?", 
    isRedFlag: true, 
    wisdom: "IKAW na lang daw dahilan ng buhay niya?! GRABE ang pressure! Anak, hindi mo trabaho maging life support ng tao! Emotional hostage-taking yan! Kung may suicidal ideation, PROFESSIONAL HELP ang kailangan hindi teenage love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag ayaw mo sumunod, 'Sige, pupunta na lang ako sa rooftop'. Threat lagi.", 
    isRedFlag: true, 
    wisdom: "ROOFTOP threat?! DANGER! Anak, pag ganyan ang sinasabi, manipulation yan pero SERYOSO rin! Sabihin mo sa parents o trusted adult AGAD! Hindi mo responsibility magbantay sa buhay niya through threats. Get help immediately!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binibigyan ka niya ng silent treatment for days pero nag-popost pa ng quotes about you.", 
    isRedFlag: true, 
    wisdom: "SILENT TREATMENT pero vocal sa socmed?! Ano yan, indirect na drama?! Anak, passive-aggressive 'to sa sobra! Adults use WORDS, children use silence and subtweets! Pag ayaw mag-communicate, ayaw rin magka-healthy relationship!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi niya 'Wala akong ibang makakausap kundi ikaw' para ma-guilty ka pag busy ka.", 
    isRedFlag: true, 
    wisdom: "WALA daw ibang kausap kundi ikaw?! PRESSURE yan to always be available! Anak, hindi healthy na ikaw lang ang support system niya! Codependency yan! Dapat may friends, family, hobbies siya. Hindi ikaw ang buong mundo niya, stressed ka lang!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag magkasama kayo ng family mo, todo sipsip. Pero pag kayo lang, iba ang ugali.", 
    isRedFlag: true, 
    wisdom: "ANGEL sa family mo pero DEVIL pag kayo lang?! TWO-FACED yan! Anak, ang tunay na character lumalabas pag walang audience. Family mo deceived pero ikaw ang nakikita ang totoo. Believe what you see in private, not the show!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'testing' daw kapag gumawa ng something na nakakasakit. 'Para makita kung mahal mo talaga ako'.", 
    isRedFlag: true, 
    wisdom: "TEST daw?! Nasasaktan ka tapos exam lang?! Anak, LOVE IS NOT AN EXAM! Healthy relationships don't need tests para ma-prove! Pag laging may trials, ayaw niya ng peace - gusto niya ng drama. Exit this classroom!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinaparamdam na kasalanan mo kung bakit hindi siya masaya sa buhay niya.", 
    isRedFlag: true, 
    wisdom: "KASALANAN mo daw bakit malungkot siya?! ANAK! Hindi mo trabaho ang happiness ng ibang tao! Bawat isa may kanya-kanyang journey! Pag ikaw laging sisi sa sadness niya, blame-shifting yan. His/her happiness is HIS/HER responsibility!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may problema siya, dapat available ka 24/7. Pero pag ikaw ang may problema, 'Busy ako eh'.", 
    isRedFlag: true, 
    wisdom: "AVAILABLE ka dapat 24/7 pero siya BUSY lagi?! One-way relationship yan! Anak, partnership ay GIVE and TAKE! Kung puro give ka at puro take siya, exploited ka na. Dapat fair ang support sa isa't isa!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-iiyak siya para makuha gusto niya. Pag binigay mo, biglang okay na.", 
    isRedFlag: true, 
    wisdom: "BILIS ng recovery pag nakuha gusto niya no?! CROCODILE TEARS yan! Anak, weaponized crying yan para ma-manipulate ka! Pag pattern na yan - iyak, kuha gusto, happy - calculated performance lang lahat! Don't fall for the act!", 
    category: GameMode.TEENS 
  },

  // Physical & Boundary Red Flags
  { 
    text: "Pinipilit ka niyang mag-holding hands o kiss kahit di ka pa ready. 'Ano ba, simpleng kiss lang naman'.", 
    isRedFlag: true, 
    wisdom: "SIMPLE lang daw?! Hindi SIMPLE kung hindi ka READY! Anak, CONSENT IS EVERYTHING! Kahit holding hands, kung ayaw mo, AYAW MO! 'Simple lang' sa kanya pero MALAKING DEAL sayo! Your body, YOUR RULES! Walang negotiation!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag tumanggi ka sa physical touch, nagtatampo at sabi 'Hindi mo yata ako gusto'.", 
    isRedFlag: true, 
    wisdom: "TAMPO kasi di ka nagpatouch?! GUILT TRIP para sa consent?! Anak, ang respeto sa boundaries ay HINDI optional! Pag gusto ka niya talaga, MAGHIHINTAY siya! Hindi ka rin obligado i-prove ang love mo through physical means!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hinihila ka niya papunta sa kanya sa harap ng tao, possessive grip.", 
    isRedFlag: true, 
    wisdom: "HINIHILA ka parang aso sa leash?! Sa harap ng tao pa?! Anak, POSSESSIVE DISPLAY yan! Hindi ka property na ita-tag along! Physical control sa public - ano pa kaya sa private? Red flag na may matching alarm bells!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagagalit pag may kasama kang iba kahit classmates lang, at kinakaladkad ka palayo.", 
    isRedFlag: true, 
    wisdom: "KINAKALADKAD ka palayo sa classmates?! PHYSICAL INTIMIDATION na yan! Anak, aggression sa jealousy ay DANGER SIGN! Today hinihila ka lang, bukas ano na? Warning sign yan of worse things to come!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinupwersa kang i-share ang PIN o passwords ng lahat ng accounts mo. 'Para pantay tayo'.", 
    isRedFlag: true, 
    wisdom: "PASSWORD sharing daw para PANTAY?! Anak, hindi yan love requirement! Privacy ay valid kahit may relationship! Pag alam niya lahat ng passwords mo, CONTROL yan hindi trust! Protektahan mo ang digital self mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi niya kung ano dapat suotin mo sa school. 'Masyadong revealing yang uniform mo'.", 
    isRedFlag: true, 
    wisdom: "UNIFORM na regulated ng school REVEALING daw?! Fashion police siya ngayon?! Anak, wala siyang karapatan i-dictate ang damit mo! Kahit anong suotin mo, RESPECTED ka dapat! Body policing is NEVER okay!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Minamarkahan ka ng hickey para 'alam ng lahat na may jowa ka'. Without consent.", 
    isRedFlag: true, 
    wisdom: "HICKEY na walang consent?! MARKING TERRITORY yan parang aso na nag-iihi sa post! Anak, hindi ka PROPERTY na lalagyan ng tag! Without consent pa - yan ay violation! Hindi sweet, CREEPY yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag hindi mo siya hinalikan goodbye, galit siya the whole day.", 
    isRedFlag: true, 
    wisdom: "GALIT buong araw dahil walang kiss?! ENTITLED much?! Anak, affection should be FREELY given, hindi DEMANDED! Pag may quota ang halik mo, hindi genuine yan. Everyday may requirement - exhausting yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan kang 'prove your love' through physical means na hindi ka pa ready.", 
    isRedFlag: true, 
    wisdom: "PROVE LOVE through physical?! Teens pa kayo?! ANAK! BIG RED FLAG YAN! Sexual coercion at minors pa kayo - ILLEGAL at IMMORAL! Report to trusted adult IMMEDIATELY! This is SERIOUS danger!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagbabanta na ipapakita ang private photos mo kung makikipag-break ka.", 
    isRedFlag: true, 
    wisdom: "BLACKMAIL with photos?! ANAK, THIS IS A CRIME! Cyber harassment yan at punishable by law! Report AGAD sa parents, school, at authorities! Wag ka matakot - siya ang dapat matakot! You have legal protection!", 
    category: GameMode.TEENS 
  },

  // Communication Red Flags
  { 
    text: "Laging ikaw ang nag-iinitiate ng conversation. Kung hindi ka mag-chat, walang usap.", 
    isRedFlag: true, 
    wisdom: "IKAW lagi ang unang nag-chat?! One-sided effort yan! Anak, pag hindi ka nag-initiate, parang wala ka nang existence sa kanya? Hindi ka placeholder habang walang magawa! Dapat MUTUAL ang effort sa communication!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag nag-away kayo, hindi siya nag-eexplain. Diretso block, tapos unblock after 3 days.", 
    isRedFlag: true, 
    wisdom: "BLOCK-UNBLOCK drama?! Emotional rollercoaster yan hindi relationship! Anak, IMMATURE handling of conflict yan! Adults talk it out, children block at hide! Pag ganito siya now, paano pa mamaya sa bigger problems?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binabasa niya ang mga messages mo at dinodownplay ang feelings mo. 'Edi wow, ang drama mo'.", 
    isRedFlag: true, 
    wisdom: "DRAMA daw feelings mo?! INVALIDATION yan! Anak, hindi lahat ng feelings mo need ng approval niya! Pag sinasabi niyang OA ka, sinasabi niya na feelings mo hindi important. Find someone who VALIDATES, not DISMISSES!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging sarcastic ang replies pag nag-open up ka. 'Edi sorry na kung ganun'.", 
    isRedFlag: true, 
    wisdom: "SARCASTIC na sorry?! Ano yun, sorry na may eye roll?! Anak, pag nag-open up ka at sarcasm ang sagot, hindi safe space yan! Partner should be your COMFORT ZONE not your COMBAT ZONE!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan kang 'sensitive ka masyado' pag nasaktan ka sa sinabi niya.", 
    isRedFlag: true, 
    wisdom: "SENSITIVE ka daw masyado?! GASLIGHTING lite yan! Anak, pag laging ikaw ang problema at hindi ang actions niya, may mali sa setup! Hindi ikaw ang masyadong sensitive - siya ang masyadong INSENSITIVE!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag tinanong mo kung okay lang siya, laging 'fine' pero halata namang hindi.", 
    isRedFlag: true, 
    wisdom: "FINE daw pero halatang HINDI?! Gusto niyang mag-guess ka?! Anak, hindi ka MIND READER! Communication means USING WORDS! Pag laging ganyan, palaging may tension na hindi naresolve. Nakakapagod yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinisigawan ka niya pag nag-aaway kayo kahit sa public places.", 
    isRedFlag: true, 
    wisdom: "SINISIGAWAN sa public?! Disrespect sa harap ng lahat! Anak, NEVER OKAY ANG SIGAWAN! Arguments should be private and RESPECTFUL! Pag sa public ginagawa, what more sa private? Red flag with megaphone!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging may comeback na 'E ikaw rin naman' pag may reklamo ka. Never nakinig.", 
    isRedFlag: true, 
    wisdom: "'E IKAW RIN' agad?! Deflection master yan! Anak, hindi siya nakinig sa concern mo - busy siya mag-isip ng comeback! Pag palaging ganti imbes na resolution, walang growth yan. Stuck kayo sa blame game!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagamit ng 'joke lang' para mag-insult. 'Grabe ka naman, di ka marunong mag-take ng joke'.", 
    isRedFlag: true, 
    wisdom: "JOKE daw?! Bakit hindi ka tumatawa?! Anak, kung NAKAKASAKIT, hindi joke yan - INSULT yan! 'Take a joke' is gaslighting para acceptable ang bastos na behavior! Real jokes make BOTH people laugh!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-ghost ng 1 week tapos biglang chat na 'Miss mo ba ako?' na parang walang nangyari.", 
    isRedFlag: true, 
    wisdom: "GHOST ng isang linggo tapos casual comeback?! Ano ka, Netflix na pwedeng i-pause?! Anak, disrespect sa time at feelings mo yan! Hindi ka standby mode na available kapag trip niya. You deserve CONSISTENCY!", 
    category: GameMode.TEENS 
  },

  // Financial & Material Red Flags
  { 
    text: "Laging ikaw ang nanlilibre. Kahit 1 peso, hindi siya nagbabayad ever.", 
    isRedFlag: true, 
    wisdom: "IKAW lagi ang nagbabayad?! Kahit students kayo dapat may FAIRNESS! Anak, hindi ka ATM on legs! Alternating treats o KKB ay normal - pero NEVER siya? User pattern yan! Check kung love o convenience lang ang habol!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Humihingi ng pang-load o data pero hindi nagbabayad. 'Next time na, wala akong pera'.", 
    isRedFlag: true, 
    wisdom: "'NEXT TIME na' pero laging next time?! Eternal utang yan! Anak, small amounts add up! Pag pattern na ang hindi pagbayad, USER behavior yan! Maliit man ang load, integrity ang tinutukoy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kinukumpara ang gifts mo sa binigay ng iba sa jowa nila. 'Buti pa si [friend], Airpods binigay'.", 
    isRedFlag: true, 
    wisdom: "KINUMPARA gift mo sa Airpods?! Ingrato yan! Anak, gifts come from HEART not wallet! Pag hindi appreciated ang effort mo kasi hindi expensive, MATERIALISTIC yan! Love hindi binibilang sa pera!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gustong i-access ang money sa bank/e-wallet mo. 'Para transparent tayo sa finances'.", 
    isRedFlag: true, 
    wisdom: "ACCESS sa bank mo?! TEENS pa kayo at ganyan na?! Anak, FINANCIAL CONTROL agad sa ganitong edad?! Transparency sa feelings okay - pero bank account mo PRIVATE! Red flag na may dollar sign!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binebenta ang gifts mo sa iba pag nag-aaway kayo. Tapos babalik pag okay na.", 
    isRedFlag: true, 
    wisdom: "BINEBENTA ang gift mo pag away?! Tapos BAWI pag okay?! Emotional at material manipulation yan! Anak, gifts are GIFTS - once given, theirs na! Pero ang gawain niyang to shows TRANSACTIONAL thinking!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging may request na 'Pabili naman ng...' pero kapag ikaw naman, 'Wala akong budget eh'.", 
    isRedFlag: true, 
    wisdom: "'PABILI' sa kanya okay pero sa iyo WALA?! One-way street yan! Anak, generosity should be MUTUAL! Kung laging nasa receiving end siya at ikaw giving, imbalanced relationship yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-iinarte pag yung date location ay hindi pricey. 'Boring naman dito, walang aesthetic'.", 
    isRedFlag: true, 
    wisdom: "INARTE sa date venue?! Walang aesthetic daw?! Anak, ang DATE ay about QUALITY TIME not venue rating! Kung mas importante ang lugar kaysa sa kasama, shallow yan! Simple dates reveal true colors!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi sa iba na 'mayaman' ka para ma-impress niya friends niya, kahit hindi naman.", 
    isRedFlag: true, 
    wisdom: "MAYAMAN ka daw sa friends niya?! Using your fake status for HIS/HER clout?! Anak, hindi ka accessory para ma-impress ang iba! Pinapagamit ka para sa IMAGE niya - not genuine!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binabalik ang lahat ng binigay niya sayo pag nag-aaway kayo. Transactional love.", 
    isRedFlag: true, 
    wisdom: "BINALIK lahat ng gifts pag away?! TRANSACTIONAL yan! Anak, gifts should be given freely without strings! Pag may conditions, hindi gift yan - LEVERAGE yan! Love is not supposed to have receipts!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagamit ng allowance para i-guilt trip ka. 'Ginastos ko lahat ng allowance ko para sayo tapos ganyan ka sakin'.", 
    isRedFlag: true, 
    wisdom: "'GINASTOS ko allowance ko' guilt trip?! Anak, HIS/HER choice yung spending! Hindi yan utang na loob mo! Decisions niya, consequences niya! Wag kang magpa-manipulate sa finances na siya naman ang nag-decide!", 
    category: GameMode.TEENS 
  },

  // Trust & Loyalty Red Flags
  { 
    text: "May 'backup plan' daw siya in case mag-break kayo. Sinabi pa sa harap mo.", 
    isRedFlag: true, 
    wisdom: "MAY BACKUP PLAN?! Sa harap mo pa sinabi?! Anak, kung may Plan B, hindi ka Plan A! PLACEHOLDER ka lang habang naghahanap ng better option! You deserve someone na ikaw lang ang nasa listahan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nag-eexaggerate ng stories para kunwari mas exciting life niya.", 
    isRedFlag: true, 
    wisdom: "EXAGGERATED stories palagi?! Pathological liar territory yan! Anak, pag sa maliit nagsisinungaling para lang mag-impress, paano sa malalaki? Trust is built on TRUTH, not tall tales!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nahuling nag-chat sa dating app pero sabi 'Para lang makahanap ng friends'.", 
    isRedFlag: true, 
    wisdom: "DATING APP for friends?! Seryoso?! Anak, hindi ka tanga! Dating app is for DATING! Excuse na yan para mag-cheat! Pag nahuling ganyan at ganyan ang reason, patong-patong na ang red flags!", 
    category: GameMode.TEENS 
  },
  { 
    text: "May mga 'close friends' sa socmed na hindi mo kilala at hindi ka i-introduce-in.", 
    isRedFlag: true, 
    wisdom: "SECRET friends na hindi ka kilala?! Hidden connections yan! Anak, pag may tinatago na circle na exclusive sayo, what else is hidden? Transparency should be default in relationships!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi na 'single' sa ibang tao pag wala ka. Nahuli mo sa GC ng friends niya.", 
    isRedFlag: true, 
    wisdom: "SINGLE daw pag wala ka?! CHEATER RED FLAG! Anak, pag tinatago ang relationship mo, ASHAMED siya o may AGENDA! Either way, hindi ka dapat hidden! Know your worth!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nagsasabi ng 'Trust me' pero laging may nadidiscover kang bagong lie.", 
    isRedFlag: true, 
    wisdom: "'TRUST ME' pero laging may LIES?! Actions over words anak! Pag patong-patong ang kasinungalingan, wala nang 'trust me' na makakaayos niyan! Trust is EARNED through consistency, not demanded!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may nakitang cute sa mall, tinitingnan ng matagal at 'appreciate lang' daw.", 
    isRedFlag: true, 
    wisdom: "'APPRECIATE' lang daw?! Sa harap mo pa?! Anak, glancing is human pero STARING is disrespect! Common decency lang dapat - hindi mo kailangan ng jowa na nagpapa-appreciate ng iba in your face!", 
    category: GameMode.TEENS 
  },
  { 
    text: "May 'bestfriend' na ex at laging nagkikita. 'Over na kami, friends lang talaga'.", 
    isRedFlag: true, 
    wisdom: "EX na bestfriend?! LAGING nagkikita?! Anak, boundaries dapat exist! 'Friends lang' pero may history?! Not comfortable for anyone! Closure means some distance, not constant contact!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Naglalaro siya ng 'hard to get' kahit kayo na. Minsan cold, minsan sweet.", 
    isRedFlag: true, 
    wisdom: "HOT AND COLD games?! Kayo na nga e! Anak, relationship is not push and pull game! Consistency should be default! Pag pagod ka na mag-guess ng mood niya, pagod na rin dapat relationship yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinisisi ang Mercury Retrograde o horoscope compatibility sa mga red flags niya.", 
    isRedFlag: true, 
    wisdom: "MERCURY RETROGRADE daw ang dahilan?! Stars ang excuse?! Anak, ang behavior ay CHOICE, hindi planetary position! Astrology is fun pero hindi excuse sa accountability! He/She decides, not the stars!", 
    category: GameMode.TEENS 
  },

  // Respect & Treatment Red Flags
  { 
    text: "Tinatawag kang 'uy' o 'pre' sa harap ng mga tao imbes na pangalan mo or something sweet.", 
    isRedFlag: true, 
    wisdom: "'UY' o 'PRE' sa harap ng tao?! Downplaying ang relationship! Anak, dapat proud sayo, hindi lowkey tinatago! Kung nahihiya siya sa affection publicly, baka nahihiya rin sa relationship!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging late sa dates pero nagagalit pag ikaw ang late ng 5 minutes.", 
    isRedFlag: true, 
    wisdom: "SIYA pwedeng late pero IKAW bawal?! DOUBLE STANDARD yan! Anak, respect sa time ay MUTUAL! Kung rules niya applicable lang sa iba, unfair setup yan! Same standards for both!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinaparamdam na 'swerte' ka at siya nakuha mo. Laging nireremind na may options siya.", 
    isRedFlag: true, 
    wisdom: "'SWERTE' ka daw sa kanya?! May OPTIONS daw siya?! EGO TRIP yan! Anak, walang taong doing you a favor by being with you! EQUALS kayo sa relationship! Hindi charity work ang love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binababy ka niya sa harap ng iba na parang hindi ka makaka-survive without him/her.", 
    isRedFlag: true, 
    wisdom: "BINABABY ka sa harap ng tao?! Parang helpless ka without them?! SAVIOR COMPLEX yan! Anak, they're not saving you - they're CONTROLLING the narrative! Empowerment not dependence!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tinatawanan ang mga dreams mo. 'Artista? Hahaha, tignan mo naman ang height mo'.", 
    isRedFlag: true, 
    wisdom: "TINATAWANAN dreams mo?! Dream CRUSHER yan hindi partner! Anak, jowa should be your BIGGEST FAN! Kung siya pa ang nang-iinsulto ng ambitions mo, mas malaking hadlang siya sa success mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag kasama ang friends niya, todo joke tungkol sayo na medyo off. Sila lang nagtawanan.", 
    isRedFlag: true, 
    wisdom: "SIYA lang at friends niya ang tumatawa?! IKAW ang punchline?! Anak, public mockery disguised as banter! Kung nasasaktan ka at JOKE daw, not funny yan! Humor should be SHARED, not one-sided!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan ang lola/lolo mo na 'cute' pero behind their backs, ina-awkward.", 
    isRedFlag: true, 
    wisdom: "PEKE sa family mo behind their backs?! Two-faced yan! Anak, kung hindi genuine ang respect sa elders mo, hindi rin genuine ang respect SAYO! Watch how they treat your loved ones!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging interrupt pag nagsasalita ka sa group discussions. 'Wait, ako muna' agad.", 
    isRedFlag: true, 
    wisdom: "'WAIT AKO MUNA' lagi?! INTERRUPTING ka constantly?! Anak, voice mo matters! Pag laging dinodrown out ang opinions mo, sabi niya mas important siya kaysa sayo. DISMISSIVE yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagawa ng decisions na affect kayo without consulting you. 'Sabi ko na sa friends natin na...'", 
    isRedFlag: true, 
    wisdom: "NAKAPAG-DECIDE na without asking?! 'Sabi ko na' pero di ka consulted?! Anak, PARTNERSHIP means deciding TOGETHER! Not being informed AFTER! Your say matters!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinipili ang video games/hobbies over quality time with you. 'Isang game lang' pero 5 hours na pala.", 
    isRedFlag: true, 
    wisdom: "'ISANG GAME lang' pero 5 hours na?! Priorities exposed! Anak, hobbies are healthy PERO balance is key! Kung mas exciting ang pixels kaysa sa presence mo, reconsider mo na yang relationship!", 
    category: GameMode.TEENS 
  },

  // Family Involvement Red Flags
  { 
    text: "Ayaw kang ma-meet ng family niya. 'Hindi pa ready' sabi niya. 8 months na kayo.", 
    isRedFlag: true, 
    wisdom: "8 MONTHS na pero ayaw pa rin i-meet?! Anong ready pa ang hinihintay?! Anak, kung seryoso, PROUD ka i-introduce! Hidden relationship ang datingan. Tinatago ka ba o may iba pang tinatago?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan ang parents mo na 'strict' at 'controlling'. Nagsisimula ng rift.", 
    isRedFlag: true, 
    wisdom: "Parents mo STRICT daw?! NANG-AAWAY sa family mo?! Anak, alienation tactic yan! Gusto kang ilayo sa support system mo! Pag divided ka sa family, sino ang matitira? SIYA lang!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang laging kayo mag-usap instead na family time mo. 'Nakikita mo naman sila everyday'.", 
    isRedFlag: true, 
    wisdom: "SIYA over family time mo?! Competing with family?! Anak, family is FOREVER! Partners come and go! Hindi dapat kailangang pumili between love at family. Balance dapat!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan ka na 'Di ka nila mahal' pag may disagreement ka sa family, para lang side niya ikaw.", 
    isRedFlag: true, 
    wisdom: "'DI KA MAHAL ng family mo' para side ka niya?! MANIPULATION 101! Anak, sinisira ang trust mo sa family para dependent ka sa kanya! Classic abuser move yan! Wag maniwala!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nangunguna sa paninira ng kapatid mong may secret. Chismoso/a!", 
    isRedFlag: true, 
    wisdom: "SINISIRA kapatid mo sa iba?! Gossiping about YOUR family?! Anak, breach of trust yan! Secrets mo at ng family mo dapat PROTECTED! Chismoso/a lang pala ang jowa mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gustong-gusto makisama sa family mo pero para lang sa perks (libre kain, libreng hatid).", 
    isRedFlag: true, 
    wisdom: "MAKISAMA for PERKS lang?! Free food at hatid ang habol?! Anak, observe kung GENUINE ba o may agenda! Pag sa bahay niyo lang siya interested dahil may makukuha, USER behavior yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binibiro ang itsura ng parents mo. 'Joke lang, ang haba ng ilong ni Tita'.", 
    isRedFlag: true, 
    wisdom: "BINIBIRO parents mo?! Physical appearance pa?! BASTOS YAN! Anak, jokes about your parents' looks are NEVER okay! Disrespect sa family mo ay disrespect sayo! BIG NO!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging nireremind na 'Sana ganito ka din kaganda kagaya ng nanay mo'. Backhanded compliment.", 
    isRedFlag: true, 
    wisdom: "'SANA ganito ka rin' kagaya ng MAMA mo?! Backhanded insult yan! Anak, compliment sa mom pero put-down sayo! Sneaky way of saying hindi ka enough. Not okay!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagrereklamo na laging kasama family mo. 'Bakit di tayo makapag-date na kayo lang?'", 
    isRedFlag: true, 
    wisdom: "REKLAMO na kasama family?! TEENS pa kayo, normal lang yan! Anak, sa edad niyo, family involvement is EXPECTED at healthy! Kung gusto niya laging kayo lang, suspicious ang motives!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasamahan ka lang sa family event para may free food, tapos siya lang kumakain.", 
    isRedFlag: true, 
    wisdom: "FAMILY event attendance for FREE FOOD lang?! Tapos siya lang kumakain?! Anak, using your family events as free buffet! Observe - kung sa food lang interested, not in bonding, MOOCHER yan!", 
    category: GameMode.TEENS 
  },

  // Future Planning Red Flags
  { 
    text: "Sinasabi na 'Wag ka nang mag-college, mag-business na lang tayo'. No concrete plan.", 
    isRedFlag: true, 
    wisdom: "SKIP college for business?! WALANG PLAN?! Anak, EDUCATION first palagi! Dreams ng iba shouldn't derail YOUR future! 'Mag-business tayo' without plan is just daydreaming, not strategy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ang 'future plans' niya is puro about kayo. Walang personal goals at ambitions.", 
    isRedFlag: true, 
    wisdom: "WALANG personal goals?! Kayo lang ang future niya?! Anak, healthy individuals have INDIVIDUAL dreams din! Pag ikaw lang ang plan niya, ang PRESSURE sayo! Both should have personal ambitions!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinaplano na ang kasal niyo kahit Grade 11 palang kayo. 'Para sure na tayo'.", 
    isRedFlag: true, 
    wisdom: "KASAL plans sa GRADE 11?! HOLD UP! Anak, enjoy being YOUNG first! Marriage is serious adult decision! Too fast too soon! Focus muna sa school at growing up!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw niyang mag-aral ng mabuti kasi 'Papakasal din naman tayo'. No growth mindset.", 
    isRedFlag: true, 
    wisdom: "'PAPAKASAL naman tayo' excuse para hindi mag-aral?! LAZY yan with no ambition! Anak, marriage is not career plan! Both of you should grow INDIVIDUALLY before growing together!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'bahala na' ang attitude sa future. No plans, no goals, no direction.", 
    isRedFlag: true, 
    wisdom: "'BAHALA NA' ang motto sa life?! No direction at all?! Anak, even at teen age, SOME plans should form! 'Bahala na' is not a life strategy! Ambition is attractive, aimlessness is not!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabihan kang 'Wag ka na mag-review para sa exam, samahan mo na lang ako'.", 
    isRedFlag: true, 
    wisdom: "SKIP review para samahan siya?! SABOTAGE sa grades mo yan! Anak, anyone who puts dates over your academic future doesn't care about YOUR success! Studies first, landi later!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gusto niyang pareho kayo ng college course para 'always together'. Kahit ibang dream mo.", 
    isRedFlag: true, 
    wisdom: "SAME COURSE para laging magkasama?! Kahit different dreams mo?! Anak, career is PERSONAL choice! Hindi couple decision ang course! Your future, YOUR decision!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw niyang lumipat ka ng school na mas maganda opportunity kasi 'malayo sa kanya'.", 
    isRedFlag: true, 
    wisdom: "BETTER SCHOOL opportunity pero 'malayo' daw?! Career sabotage yan! Anak, good opportunities should be SUPPORTED not blocked! Kung totoong love yan, maghihintay at mag-aadjust!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sabi niya, 'Pag nag-break tayo, wala na akong future'. Pressure and manipulation.", 
    isRedFlag: true, 
    wisdom: "'WALA na daw future' pag break kayo?! EMOTIONAL BLACKMAIL yan! Anak, future niya ay responsibility NIYA, not YOURS to carry! Hindi ka life insurance policy! Seek adult help kung may ganyang threats!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pangarap niya ay maging housewife/househusband lang at 'ikaw na bahala sa lahat'.", 
    isRedFlag: true, 
    wisdom: "DEPENDENT na ikaw ang 'bahala sa lahat'?! TEEN pa lang kayo at ganyan na ang plan?! Anak, both should have ambitions! Planning to be fully dependent sa ganitong edad? Recipe for imbalanced relationship!", 
    category: GameMode.TEENS 
  },

  // Miscellaneous Red Flags
  { 
    text: "Laging may alibi na 'busy' pero active naman sa online games.", 
    isRedFlag: true, 
    wisdom: "BUSY daw pero ACTIVE sa games?! Priorities check! Anak, may time siya for pixels pero wala para sayo? Not busy, just NOT PRIORITIZING you! Games over quality time = not interested!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may bagong crush ang barkada niya, sinasabi rin niya. 'Cute rin naman kasi talaga eh'.", 
    isRedFlag: true, 
    wisdom: "SINASABI crushes niya sayo?! While in a relationship?! Anak, some things you KEEP TO YOURSELF! Inappropriate sharing yan! Kung gusto ka niya i-insecure, mission accomplished!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hindi marunong mag-sorry. Laging 'Sorry kung nasaktan ka' imbes na 'Sorry sa ginawa ko'.", 
    isRedFlag: true, 
    wisdom: "'SORRY kung nasaktan ka' is NOT real sorry! Anak, real apology acknowledges FAULT, not just YOUR reaction! 'Sorry KA nasaktan' vs 'Sorry AKO nakasakit' - big difference!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Laging 'di ko intensyon' pero paulit-ulit ang same mistake.", 
    isRedFlag: true, 
    wisdom: "'DI KO INTENSYON' pero PAULIT-ULIT?! Pattern na yan! Anak, intentions don't matter if ACTIONS keep hurting! Once is mistake, twice is choice! Repeated offense = not sorry, just sorry nahuli!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kapag may gusto siyang gawin, todo lambing. Pag nakuha na, balik sa cold treatment.", 
    isRedFlag: true, 
    wisdom: "LAMBING lang pag may KAILANGAN?! Love bombing for benefits?! Anak, transactional affection yan! Sweet lang pag may gusto - pag nakuha, back to cold! Manipulation hindi love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sinasabi sa iba na 'complicated' relationship niyo kahit okay naman kayo for clout.", 
    isRedFlag: true, 
    wisdom: "'COMPLICATED' daw for clout?! Drama king/queen yan! Anak, relationship mo is NOT content for engagement! Kung okay naman kayo pero ginagawang dramatic for likes, attention-seeker yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag may mabuting nangyari sayo, 'Dahil sa swerte ko yan' ang credit grabbing.", 
    isRedFlag: true, 
    wisdom: "ACHIEVEMENTS mo SWERTE niya daw?! Credit grabbing yan! Anak, hard work mo, success mo! Hindi sila lucky charm na dapat i-credit! Celebrate YOUR effort, not their claim!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Ayaw sa PDA pero laging naghahanap ng dark corners para 'tamang privacy lang'.", 
    isRedFlag: true, 
    wisdom: "NO PDA pero DARK CORNERS ang gusto?! Sketchy intentions yan! Anak, pag ayaw ng maayos na affection pero gusto ng hidden stuff, check mo ang motives! Privacy or PRESSURE?", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sobrang attached na after 1 week, parang years na kayong magkakilala.", 
    isRedFlag: true, 
    wisdom: "1 WEEK lang pero parang SOULMATES na?! Love bombing speed yan! Anak, healthy relationships take TIME to develop! Pag sobrang intense agad, red flag for manipulation or instability!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gumagamit ng 'I love you' as manipulation tool pag gusto niya ng something.", 
    isRedFlag: true, 
    wisdom: "'I LOVE YOU' para makuha gusto?! Weaponized declaration yan! Anak, 'I love you' should be GENUINE feeling, not bargaining chip! Pag transactional ang usage, not real love!", 
    category: GameMode.TEENS 
  },

  // ========== GREEN FLAGS (70) ==========
  
  // Communication Green Flags
  { 
    text: "Pag may misunderstanding, calmly niyang explain ang side niya at willing makinig sa side mo.", 
    isRedFlag: false, 
    wisdom: "AY NAKO, mature na 'to! Calm explanation at willing MAKINIG?! Anak, that's how healthy people communicate! Green flag na malaki! Keep this one - rare siya gaya ng parking slot sa SM!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-sorry siya genuinely at may concrete steps kung paano hindi na uulitin.", 
    isRedFlag: false, 
    wisdom: "SORRY with ACTION plan?! Anak, may ganito pa pala?! Hindi lang basta sorry - may CHANGES pa! That's accountability and growth! Keeper material yan, wag mong pakawalan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kapag busy siya, nagpapaalam muna bago mag-offline. 'GTG, catch up later!'", 
    isRedFlag: false, 
    wisdom: "NAGPAPAALAM bago mag-offline?! Simple pero BIG deal yan! Anak, respect sa time mo yan! Di ka iniiwanan hanging - knows you matter! Communication courtesy, green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Willing siyang mag-adjust ng communication style kung mas comfortable ka sa ibang way.", 
    isRedFlag: false, 
    wisdom: "NAG-AADJUST para sa comfort mo?! Flexible at considerate! Anak, that's meeting you halfway! Effort to understand your needs - partnership in action! Green flag on point!", 
    category: GameMode.TEENS 
  },
  { 
    text: "May check-in siya kung okay ka lang kahit walang away. 'Kamusta ka today?'", 
    isRedFlag: false, 
    wisdom: "CHECK-IN kahit walang problema?! Genuine care yan! Anak, hindi lang siya present pag may drama - present siya sa everyday! Not just there for bad times pero pati good times!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Inaamin niya pag may nakakalimutan siya or pag may pagkukulang. Hindi nagde-deny.", 
    isRedFlag: false, 
    wisdom: "INAAMIN ang pagkukulang?! No denial, no excuses?! Anak, honesty yan! Nakakapagod din ang puro palusot - refreshing ang accountability! Green flag - siya ang nagsasabi bago mo pa mahalata!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Tinatanong ka kung ano ang preferred mong way para ma-comfort pag malungkot ka.", 
    isRedFlag: false, 
    wisdom: "TINATANONG paano ka i-comfort?! Emotional intelligence yan! Anak, hindi siya assuming - ASKING siya! Learning to love you in YOUR language! Kilig-worthy yan!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Openly shares his/her own struggles din, not just listening pero vulnerable din.", 
    isRedFlag: false, 
    wisdom: "VULNERABLE din siya sayo?! Two-way sharing yan! Anak, hindi lang listener - sharer din! Mutual vulnerability builds deeper connection! Green flag na may depth!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag nagsabi kang 'I need space', nirerespeto at hindi nag-ooverreact.", 
    isRedFlag: false, 
    wisdom: "SPACE request respected?! No drama?! Anak, secure attachment yan! Hindi threatened sa need mo mag-isa! Space is healthy - siya nakakaintindi niyan! Mature green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Remember mga little details about you na nabanggit mo lang once. Active listener!", 
    isRedFlag: false, 
    wisdom: "REMEMBERS little details?! Active listener talaga! Anak, kinig na kinig sa kwento mo! Naaalala niya favorite color mo na one time mo lang sinabi! Feel mo na IMPORTANT ka - kasi ikaw nga!", 
    category: GameMode.TEENS 
  },

  // Trust & Respect Green Flags
  { 
    text: "Hindi siya nagseselos sa friendships mo. Encouraged pa na magbonding kayo ng friends mo.", 
    isRedFlag: false, 
    wisdom: "NO SELOS sa friends?! ENCOURAGED pa bonding?! Anak, secure at trusting yan! Hindi threatened sa friendships mo! Green flag na confident - knows na strong ang relationship niyo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nirerespeto ang privacy mo. Hindi demanding ng passwords or phone access.", 
    isRedFlag: false, 
    wisdom: "RESPETO sa privacy mo?! No password demands?! Anak, trust-based relationship yan! Hindi kailangan ng surveillance para magtiwala! Green flag - loves you without controlling you!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapakilala ka sa friends and family niya with pride. 'Siya yung kinukwento ko sa inyo!'", 
    isRedFlag: false, 
    wisdom: "PROUD i-introduce ka?! 'Ikaw yung kinukwento ko!' Anak, hindi ka hidden treasure - SHOW ka off! Public acknowledgment ng relationship! Green flag na proud sayo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Hindi niya pinag-aawayan ang past relationships or histories mo.", 
    isRedFlag: false, 
    wisdom: "PAST mo, hindi issue sa kanya?! No jealousy ng history?! Anak, focused siya sa PRESENT at FUTURE ninyo! Hindi nakakulong sa past mo! Green flag na forward-looking!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-aask permission before posting your photos. 'Pwede ko ba i-post to?'", 
    isRedFlag: false, 
    wisdom: "PERMISSION bago mag-post?! Digital consent yan! Anak, respects your image online! Hindi basta-basta nagpopost ng pics mo without asking! Green flag na considerate!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Trusts you when you say where you are or who you're with. No interrogation.", 
    isRedFlag: false, 
    wisdom: "NO INTERROGATION pag sinabi mo nasaan ka?! Genuine trust yan! Anak, hindi paranoid, hindi nag-iimbestiga! Believes you at your word! Green flag na healthy ang trust!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Respects your 'No' without questioning or guilting you.", 
    isRedFlag: false, 
    wisdom: "NO means NO at respected?! No guilt trip?! Anak, CONSENT CHAMPION yan! Wala siyang 'pero' o 'sige na' - tanggap agad ang NO mo! GREEN FLAG na malaki! This is rare!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Defends you when others talk negatively about you, even when you're not around.", 
    isRedFlag: false, 
    wisdom: "DINEDEPENSAHAN ka kahit wala ka?! Loyal protector yan! Anak, has your back 100%! Hindi nakikisabay sa chismis - standing up for you! Green flag na protective!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable with you having opposite-gender friends. 'Kaibigan mo sila, okay lang'.", 
    isRedFlag: false, 
    wisdom: "OKAY lang sa kanya ang opposite-gender friends mo?! Secure yan! Anak, no irrational jealousy! Trusts your judgment at trusts the relationship! Green flag na confident!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Keeps relationship issues between you two. Hindi nire-report sa buong barkada.", 
    isRedFlag: false, 
    wisdom: "PRIVATE ang relationship issues?! Hindi chismis sa barkada?! Anak, mature handling yan! Couple problems stay between COUPLE first! Green flag na may boundaries!", 
    category: GameMode.TEENS 
  },

  // Support & Encouragement Green Flags
  { 
    text: "Sinusuportahan ang dreams mo kahit pa 'unrealistic' sa tingin ng iba.", 
    isRedFlag: false, 
    wisdom: "SUPPORTS dreams mo kahit 'unrealistic' sa iba?! Dream supporter yan! Anak, believes in you when others doubt! Green flag na may faith sayo! Precious yan, keep close!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Binibigyan ka ng space to grow and pursue hobbies kahit walang connection sa kanya.", 
    isRedFlag: false, 
    wisdom: "SPACE para sa hobbies mo?! Encourages individuality! Anak, healthy relationship allows personal growth! Hindi kailangan lahat about kayo - YOU can still be YOU!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-aaral with you para makatulong sa exams mo. Study buddy!", 
    isRedFlag: false, 
    wisdom: "STUDY BUDDY siya?! Academic support yan! Anak, helps you succeed, not just distract! Not just about dates - about your FUTURE din! Green flag na practical ang love!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapalakpakan ka niya sa achievements mo. First to congratulate!", 
    isRedFlag: false, 
    wisdom: "FIRST to congratulate?! Best cheerleader mo siya! Anak, celebrates your wins genuinely! Proud of your success, not threatened! Green flag na supportive!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Encourages you to join clubs or activities na interested ka kahit busy ka na.", 
    isRedFlag: false, 
    wisdom: "ENCOURAGES extra activities?! Growth mindset yan para sayo! Anak, wants you to be BEST version of yourself! Kahit busy, push pa rin! Green flag na invested sa growth mo!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Inaayos ang schedule niya para makapunta sa important events mo.", 
    isRedFlag: false, 
    wisdom: "NAG-AADJUST schedule para sa events mo?! Priority treatment yan! Anak, makes EFFORT to be there! Shows up sa important moments mo! Green flag na dedicated!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nagre-research about your interests para may common topic kayo.", 
    isRedFlag: false, 
    wisdom: "NAG-RERESEARCH about interests mo?! Effort to connect yan! Anak, genuine interest sa world mo! Nagbabasa para may mapag-usapan about things YOU love! Sweet green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pinapaalalahanan ka sa deadlines at important dates. 'Uy, project mo due tomorrow!'", 
    isRedFlag: false, 
    wisdom: "PINAPAALALAHANAN ka ng deadlines?! Thoughtful reminders yan! Anak, cares about responsibilities mo! Not just sweet nothings - practical help din! Green flag na may substance!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Kahit malungkot siya, happy pa rin para sa achievements mo. 'Congrats talaga!'", 
    isRedFlag: false, 
    wisdom: "HAPPY para sayo kahit MALUNGKOT siya?! Unselfish yan! Anak, puts your joy FIRST kahit going through something! Rare na rare yan! Green flag na genuine!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Offers constructive feedback on your work without being harsh.", 
    isRedFlag: false, 
    wisdom: "CONSTRUCTIVE feedback?! Helpful, not harsh?! Anak, wants you to improve pero KINDLY! Not tearing you down - building you up with honesty! Green flag na balanced!", 
    category: GameMode.TEENS 
  },

  // Quality Time Green Flags
  { 
    text: "Nag-eeenjoy sa simple dates. Masaya na sa basta magkasama.", 
    isRedFlag: false, 
    wisdom: "MASAYA sa simple dates?! Not materialistic yan! Anak, values QUALITY TIME over fancy things! Hindi importante ang venue - ang kasama! Green flag na genuine!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Gives full attention during conversations. Phone down, eyes on you.", 
    isRedFlag: false, 
    wisdom: "PHONE DOWN, eyes on you?! Full attention yan! Anak, present at focused! You have undivided attention niya - hindi kabila naka-scroll! Respect yan, green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Pag di kayo magkasama, may meaningful conversations pa rin, not just 'wyd'.", 
    isRedFlag: false, 
    wisdom: "MEANINGFUL conversations online?! Not just 'wyd'?! Anak, effort kahit di magkasama! Substance sa usapan, not just dry texting! Green flag na connected talaga!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Creates special traditions for the two of you. 'Movie night tayo every Friday!'", 
    isRedFlag: false, 
    wisdom: "TRADITIONS niyo lang?! Movie night every Friday?! Anak, building memories yan! Investing in shared experiences! Sweet traditions = strong connection! Green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Makes time for you kahit busy sa school or other responsibilities.", 
    isRedFlag: false, 
    wisdom: "MAY TIME sayo kahit busy?! Priorities right yan! Anak, balances responsibilities pero di ka nawawalan ng time! Committed to relationship kahit hectic! Green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Nag-iisip ng creative ways to spend time together within budget.", 
    isRedFlag: false, 
    wisdom: "CREATIVE dates within budget?! Resourceful at thoughtful! Anak, effort over money! Nagpapakahirap mag-isip para enjoy kayo without breaking bank! Green flag na practical!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable sa silence when together. Hindi awkward ang walang usapan.", 
    isRedFlag: false, 
    wisdom: "COMFORTABLE sa silence?! Hindi awkward?! Anak, sign of deep connection yan! Walang pressure mag-fill ng space - enjoy ang presence lang! Peaceful green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Willing to try your interests kahit hindi siya into it. 'Sige, turuan mo ko!'", 
    isRedFlag: false, 
    wisdom: "'TURUAN MO KO' sa interests mo?! Open to new experiences! Anak, wants to share your world! Willing to learn what you love! Sweet green flag na curious!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Includes you in their hobbies and introduces you to their world.", 
    isRedFlag: false, 
    wisdom: "KASAMA ka sa hobbies niya?! Shares world niya sayo! Anak, wants you to be part of life niya! Not separate worlds - merging interests! Green flag na inclusive!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Values in-person time pero understands when it's not possible.", 
    isRedFlag: false, 
    wisdom: "VALUES in-person pero UNDERSTANDS pag hindi pwede?! Flexible yan! Anak, adapts to circumstances! Not demanding impossible things! Green flag na reasonable!", 
    category: GameMode.TEENS 
  },

  // Emotional Intelligence Green Flags
  { 
    text: "May emotional awareness. 'I think I'm feeling jealous, let me think about why.'", 
    isRedFlag: false, 
    wisdom: "EMOTIONAL AWARENESS?! Nag-iisip bakit ganun ang feel?! Anak, self-reflection yan! Understands own emotions before reacting! Emotionally mature - green flag na rare sa teens!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Checks in on your mental health regularly. 'How are you really feeling?'", 
    isRedFlag: false, 
    wisdom: "'How are you REALLY feeling?' - beyond surface level yan! Anak, cares about wellbeing mo! Not just 'okay ka?' but DEEP check-in! Green flag na may genuine care!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Doesn't dismiss your feelings. 'I understand why you feel that way.'", 
    isRedFlag: false, 
    wisdom: "'I UNDERSTAND' sinasabi?! Validates feelings mo?! Anak, makes you feel HEARD! Hindi dismissed as OA or sensitive! Emotional safety yan - green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Knows when to give space vs. when to be present during tough times.", 
    isRedFlag: false, 
    wisdom: "KNOWS when space, when present?! Reads the room yan! Anak, attuned sa needs mo! Alam kung kailan lumapit, kailan lumayo! Emotionally intelligent - green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Takes responsibility for their own emotions. 'I was grumpy, not your fault.'", 
    isRedFlag: false, 
    wisdom: "'NOT YOUR FAULT' sinasabi?! Emotional ownership yan! Anak, hindi ka niya sisihin sa mood niya! Takes responsibility for feelings! Healthy - green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Encourages you to express negative emotions too. 'It's okay to be angry.'", 
    isRedFlag: false, 
    wisdom: "'OKAY lang maging angry'?! Safe space for ALL emotions yan! Anak, hindi lang positive vibes - REAL emotions welcome! Healthy emotional expression - green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Apologizes sincerely when their actions hurt you, even unintentionally.", 
    isRedFlag: false, 
    wisdom: "APOLOGIZES kahit unintentional?! Cares about IMPACT, not just intent! Anak, empathetic apologies yan! Mahalaga sayo ang nararamdaman mo, not excuses! Green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Manages stress in healthy ways. Doesn't take it out on you.", 
    isRedFlag: false, 
    wisdom: "HINDI ka stress outlet?! Healthy coping yan! Anak, stress niya, hindi sayo napupunta! Manages emotions maturely! Safe to be around - green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable expressing affection in their own way, genuine and unpressured.", 
    isRedFlag: false, 
    wisdom: "GENUINE affection, unpressured?! Authentic yan! Anak, hindi performative - REAL feelings! Comfortable sa sariling way ng pagmamahal! Green flag na sincere!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Recognizes when they're wrong and actively works to improve.", 
    isRedFlag: false, 
    wisdom: "RECOGNIZES wrong at IMPROVES?! Growth mindset yan! Anak, learns from mistakes! Gets BETTER over time! Green flag na may progress!", 
    category: GameMode.TEENS 
  },

  // Boundaries & Independence Green Flags
  { 
    text: "Has their own friend group and activities. Hindi ka lang ang mundo niya.", 
    isRedFlag: false, 
    wisdom: "MAY SARILING friends at activities?! Healthy independence yan! Anak, complete person on their own! Hindi codependent sayo! Green flag na balanced!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Respects your curfew set by parents. 'I'll make sure you're home by 6!'", 
    isRedFlag: false, 
    wisdom: "RESPECTS curfew?! Gusto kang makauwi on time?! Anak, respects family rules mo! Mature at responsible! Trustworthy green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Understands when you need alone time. 'Enjoy your me-time!'", 
    isRedFlag: false, 
    wisdom: "'ENJOY me-time mo!' sinasabi?! Respects need for solitude! Anak, secure enough not to feel threatened! Space is healthy - green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Doesn't pressure you into anything physical. 'Whenever you're ready, no rush.'", 
    isRedFlag: false, 
    wisdom: "'NO RUSH, whenever ready ka'?! Respects physical boundaries! Anak, patient at understanding! Hindi nagpupuwersa! GREEN FLAG na malaki! This is important!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Has healthy boundaries with exes. 'We ended things properly.'", 
    isRedFlag: false, 
    wisdom: "CLEAN closure with exes?! Healthy boundaries yan! Anak, no messy baggage! Properly ended past relationships! Green flag na may closure!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Encourages your other relationships (family, friends). 'Spend time with them!'", 
    isRedFlag: false, 
    wisdom: "'SPEND TIME with family/friends!' sinasabi?! Supports whole life mo! Anak, not threatened by other relationships! Encourages full life! Green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Comfortable when you can't text back immediately. 'Reply when you can!'", 
    isRedFlag: false, 
    wisdom: "'REPLY when you can' - no pressure yan! Anak, no texting anxiety! Trusts you even without constant contact! Secure green flag!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Maintains their own goals and doesn't drop everything for the relationship.", 
    isRedFlag: false, 
    wisdom: "MAY SARILING goals pa rin?! Balanced priorities yan! Anak, relationship is part of life, not ALL of it! Green flag na may identity!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Sets healthy boundaries when stressed. 'I need a moment, can we talk later?'", 
    isRedFlag: false, 
    wisdom: "'NEED a moment' sinasabi pag stressed?! Self-aware communication yan! Anak, takes care of self to be better for you! Green flag na healthy!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Respects when you say you're not comfortable with something. No pushing.", 
    isRedFlag: false, 
    wisdom: "RESPECTS discomfort mo?! No pushing?! Anak, your comfort is PRIORITY! Ultimate respect yan! Safe person - GREEN FLAG na malaki!", 
    category: GameMode.TEENS 
  },

  // Character & Values Green Flags
  { 
    text: "Kind to everyone - service workers, classmates, pets. Not just to you.", 
    isRedFlag: false, 
    wisdom: "KIND sa lahat - waiter, classmates, pets?! Genuine kindness yan! Anak, character visible in ALL interactions! Hindi pang-display lang sayo! Green flag na REAL!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Takes accountability when wrong. 'I messed up, I'll do better.'", 
    isRedFlag: false, 
    wisdom: "'I MESSED UP, I'll do better'?! Ownership of mistakes! Anak, no blaming others! Growth mindset! Green flag na responsible!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Consistent behavior whether in public or private.", 
    isRedFlag: false, 
    wisdom: "SAME person in public AND private?! Authenticity yan! Anak, no masks! What you see is what you get! Green flag na genuine!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Has goals and works toward them. Not just floating through life.", 
    isRedFlag: false, 
    wisdom: "MAY GOALS at nagwo-work towards them?! Ambitious at driven! Anak, inspiring to be around! Future-oriented! Green flag na motivated!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Honest even when it's uncomfortable. 'I need to tell you something...'", 
    isRedFlag: false, 
    wisdom: "HONEST kahit uncomfortable?! Courageous honesty yan! Anak, values truth over comfort! Trust builder! Green flag na may integrity!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Treats family with respect. Good relationship with parents/siblings.", 
    isRedFlag: false, 
    wisdom: "RESPETO sa family?! Good relationship with parents?! Anak, indicator of how they'll treat YOU long-term! Green flag na may values!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Helps others without expecting anything in return.", 
    isRedFlag: false, 
    wisdom: "HELPS without expecting return?! Genuinely helpful yan! Anak, not transactional! Good heart talaga! Green flag na selfless!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Stands up for what's right, even when it's unpopular.", 
    isRedFlag: false, 
    wisdom: "STANDS UP for right kahit unpopular?! Moral courage yan! Anak, has principles! Respectable character! Green flag na may backbone!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Shows gratitude for small things. 'Thank you for being patient with me.'", 
    isRedFlag: false, 
    wisdom: "'THANK YOU for patience' sinasabi?! Appreciative nature yan! Anak, notices and acknowledges efforts! Sweet green flag na grateful!", 
    category: GameMode.TEENS 
  },
  { 
    text: "Admits when they don't know something. 'I'm not sure, let me find out.'", 
    isRedFlag: false, 
    wisdom: "'I'M NOT SURE, let me find out'?! Intellectual humility yan! Anak, no pretense! Honest about limitations! Green flag na humble!", 
    category: GameMode.TEENS 
  }
];