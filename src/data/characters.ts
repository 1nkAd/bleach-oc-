import { CharacterProfile } from '@/types/character';

export const characters: Record<string, CharacterProfile> = {
  adham: {
    id: 'adham',
    name: 'Adham',
    subtitle: 'Soul Reaper — Original Character',
    tags: ['Vizard', 'Quincy Bloodline', "Urahara's Student"],
    tagline: '"A kid who just wanted to make friends and somehow ended up carrying the weight of what a more just world might look like."',
    theme: {
      primaryColor: '213, 38%, 20%', // Brand
      accentColor: '38, 92%, 50%', // Amber
      particleStyle: 'embers',
      fontHeading: 'var(--font-cinzel)',
    },
    assets: {
      portrait: '/assets/hero-portrait.png',
      themeSong: '/assets/audio/bg-dark.mp3',
    },
    dossier: {
      race: 'Shinigami / Vizard / Latent Quincy',
      origin: 'Human World → Rukongai → Seireitei',
      ageAtDeath: '~20 years',
      affiliation: 'Urahara Shop Exile Group',
      combatLevel: 'Captain-class+',
      formerDivision: '12th Division',
      zanpakuto: { name: 'Kurokiba', translation: 'Black Fang' },
      innerHollow: { name: 'Nakigara', translation: 'Empty Husk' },
    },
    stats: [
      { label: 'Reiatsu', value: 82 },
      { label: 'Speed', value: 78 },
      { label: 'Zanjutsu', value: 85 },
      { label: 'Hakuda', value: 88 },
      { label: 'Durability', value: 74 },
      { label: 'Mask Control', value: 90 },
      { label: 'Nakigara Sync', value: 65 },
      { label: 'Structural Echo', value: 40 },
      { label: 'Reiatsu Noise', value: 72 },
      { label: 'Soul Fission', value: 95 },
      { label: 'Structural Null', value: 88 },
      { label: 'Equinox Cleave', value: 92 },
    ],
    relationships: [
      {
        name: 'Sōsuke Aizen',
        status: 'Deep Hatred',
        type: 'hostile',
        description: "The architect of everything that went wrong. Adham's hatred for Aizen isn't loud — it's structural. Aizen used them all as materials in an experiment, wore a captain's haori while doing it, and smiled through the entire thing. The Hollowfication, the framing, the exile — every piece of it traces back to one man's decision that other people's lives were acceptable costs. Adham has decided they were not. He will not revisit that position. This isn't rage. Rage burns out. This is something that settled into the load-bearing walls and has no intention of leaving."
      },
      {
        name: 'Genryūsai Yamamoto',
        status: 'Distrust / Wary Respect',
        type: 'cold',
        description: "Adham doesn't hate the old man. But he doesn't like him either. Yamamoto represents everything that calcified in Soul Society — the rigid hierarchy, the blind obedience, the willingness to sacrifice individuals for the institution. He is the system incarnate, and Adham has seen what that system does to people who don't fit its categories. The fact that Yamamoto let the Vizards be exiled without question, let the verdict stand without investigation, sits in Adham like a splinter he's stopped trying to remove. He respects the power — you'd be a fool not to. Yamamoto-level reiatsu collapses fights before they become fights, and Adham knows with absolute clarity that he has no answer for that category of problem. Even now, even with captain-class power under his belt, even able to match and beat most captains in the Gotei 13 — the old man is a different tier entirely. Adham is honest enough with himself to know that. But respect for power and respect for the person wielding it are two very different things."
      },
      {
        name: 'Kisuke Urahara',
        status: 'Mentor / Deep Respect',
        type: 'neutral',
        description: "The standard Adham measures himself against without ever saying so. He respects Urahara in the way you respect someone who was right about everything important, including the things you didn't want to hear. The relationship is not warm in the conventional sense — it is specific, earned, and not something he'd easily put into words. Urahara tolerated his slower pace without condescension. That's not nothing. That's a lot, actually."
      },
      {
        name: 'Yoruichi Shihōin',
        status: 'In Love / Unsaid',
        type: 'ally',
        description: "She is the most effortlessly impressive person he has encountered and he has never once found the right moment, or found it and talked himself out of it. He is warm and easy around her the way he is with everyone. The difference is he's trying."
      },
      {
        name: 'Renji Abarai',
        status: 'Closest Friend',
        type: 'ally',
        description: "Two people who came up without advantages and worked for every inch. The dynamic is easy in the specific way that's actually hard to find — no performance, no competition, just two people who've seen each other fail and adjusted nothing afterward. The jokes between them are bad and frequent and neither of them would change that."
      },
      {
        name: 'Kensei Muguruma',
        status: 'Friend / Mutual Respect',
        type: 'ally',
        description: "Kensei respects competence above most things, so Adham earned it the slow way. Not warm exactly, but real. They understand each other's version of discipline without having to explain it."
      },
      {
        name: 'Love Aikawa',
        status: 'Friend',
        type: 'ally',
        description: "Easy. Love's energy and Adham's warmth occupy similar space. They share a certain gallows humour about what they are and what happened to them, and neither of them pushes the other to process it differently."
      },
      {
        name: 'Rose Otoribashi',
        status: 'Friend',
        type: 'ally',
        description: "Quieter connection than Love, but genuine. Rose's aesthetic sensibility amuses Adham in a fond way. They've never had a conversation that wasn't pleasant."
      },
      {
        name: 'Ichigo Kurosaki',
        status: 'Ally / Complicated Respect',
        type: 'ally',
        description: "Adham recognises immediately what Ichigo is — someone else running three things simultaneously that weren't designed to coexist. The recognition is instant and specific. He finds Ichigo a little loud about it. He respects the results anyway."
      },
      {
        name: 'The Gotei 13 Captains',
        status: 'No Hatred / Complex',
        type: 'cold',
        description: "He doesn't hate them. That's the honest answer and it's important. They're not the enemy — they're the institution, and the institution failed the Vizards, but the individual captains are not Aizen. Adham understands the difference even when it's hard to hold onto. Some of them he respects. Some of them he'd fight beside without hesitation. What he won't do is pretend the system they serve didn't throw him and everyone he cared about into the dark without looking back. That distinction — between the people and the structure — is one he holds carefully, because losing it would make him something he's decided not to be."
      },
      {
        name: "Kisuke's Crew",
        status: 'Friends',
        type: 'ally',
        description: "The rest of the extended Urahara Shop group. Warm with all of them. No reservations."
      }
    ],
    abilities: [
      {
        name: 'Shikai Form',
        type: 'INITIAL RELEASE',
        description: "The standard katana dissolves and violently reconstructs into a pair of dense, segmented black gauntlets extending past his elbows, featuring lethal, forward-facing tonfa-blades resting parallel to his forearms."
      },
      {
        name: 'Combat Mechanic',
        type: 'KINETIC CONVERSION',
        description: "Designed for relentless offense. The gauntlets actively consume his aggressive intent, converting his spiritual pressure into raw kinetic force. Every Hakuda strike discharges concentrated, point-blank shockwaves of reiatsu directly into the opponent's body upon impact, bypassing external defenses."
      },
      {
        name: 'The Incomplete Bankai',
        type: 'THE FALSE DUALITY',
        description: "The gauntlets split into two drastically different forms, forcing him to shift between two mechanical states — Yin (Hollow) and Yang (Shinigami). The Hollow state offers erratic, hyper-aggressive aerial mobility and guard-breaking shockwaves but lacks defense. The Shinigami state focuses on grounded, heavy counter-attacks and spatial control. This Bankai is flawed because the states operate in strict opposition. It drains excessive stamina and reiatsu as he constantly forces the \"Shift\" to cover the weaknesses of the other stance."
      },
      {
        name: 'The Catalyst',
        type: 'QUINCY ACKNOWLEDGMENT',
        description: "Acknowledging the dormant Quincy bloodline. The Quincy heritage acts as the mechanical fulcrum. In a tri-race soul, Shinigami and Hollow are opposing forces, but Quincy DNA provides the structure to bind them."
      },
      {
        name: 'The True Bankai',
        type: 'PERFECT EQUILIBRIUM',
        description: "The conflicting hakuda gauntlets from the incomplete state shatter. They reconstruct into a single, unified nodachi. The sword's blade is split perfectly down the middle — the seam between black and white crackles with silver-grey, the Quincy structural element made visible. Not a third colour alongside them, but the line where they meet."
      },
      {
        name: 'Equinox Cleave',
        type: 'DUAL-PROPERTY DAMAGE',
        description: "Every slash lands with dual-property damage. Hollow reiatsu acts as a corrosive agent that violently breaks down the opponent's spiritual matter and defensive layers, while Shinigami reiatsu simultaneously delivers a concussive, structurally precise impact. This interaction creates a strictly unblockable strike, compressing a guard-break into a single physical motion.\n\nCost: The sheer density of fusing two opposing properties accelerates spiritual drain exponentially. Prolonged execution of Equinox Cleave forces his internal reiatsu reserves to bottom out, physically tearing his own muscle fibers if overused."
      },
      {
        name: 'Soul Fission',
        type: 'THE DUALITY PARADOX',
        description: "A direct stab to the opponent's core soul triggers a forced structural split. The strike physically and spiritually divides the opponent into two separate entities. Their powers, memories, and physical forms are halved and distributed between the two bodies. The two halves are mechanically forced into hostile opposition and must fight each other to the death in a closed spiritual domain. If either half dies during this state, the survivor recombines but suffers permanent existence erasure for the lost half."
      },
      {
        name: 'Nakigara Release',
        type: 'SECONDARY TRIGGER — SOUL FISSION BURST',
        description: "In fights where the Nakigara combat state is already active, Nakigara can initiate Soul Fission as a burst projection rather than a stab, bypassing the contact requirement. Cost: Nakigara burns through the entire stored resonance of the active combat state, collapsing the mask immediately and preventing any further Hollow enhancement for the remainder of the fight. One use only per engagement. Adham does not consciously decide to use this. Nakigara decides. He finds out it happened when the mask comes off."
      },
      {
        name: 'Structural Null',
        type: 'THE QUINCY MOVE',
        description: "When the tip of the nodachi contacts any reishi-based construct (Kido, Hierro reinforcement, Blut Vene layer, Quincy weapon constructs), that structure collapses from the inside. Not cut. Not absorbed. Unmade — as if the framework was always hollow and he simply touched the hole. Usable a maximum of three times per Bankai activation. Does not work on living bodies, only on constructed reiatsu structures."
      },
      {
        name: 'The Spiritual Void',
        type: 'STRUCTURAL DEFICIT',
        description: "Yhwach reclaiming the power means Adham's soul entered the Rukongai with a structural deficit — a Quincy blueprint stripped of its engine. This explains the heavily delayed Shikai. He was attempting to channel Shinigami powers through an empty conduit."
      },
      {
        name: 'Reiatsu Anomaly',
        type: 'PARADOX SIGNATURE',
        description: "His spiritual pressure operates as a paradox. It possesses the sterile, static container of a Quincy shell, flooded with the heavy, chaotic reiatsu of a Hollow. This makes his energy signature highly irregular, rendering standard sensory tracking inaccurate."
      },
      {
        name: 'Reiatsu Interference',
        type: 'ACTIVE — SOUL-LEVEL NOISE',
        description: "With deliberate focus, Adham can project the anomaly outward as a field of soul-level noise. Any ability that requires accurate soul-reading — spatial targeting, hypnosis that locks onto a specific signature, precognitive tracking of spiritual futures — becomes unreliable within his immediate range. Costs continuous reiatsu to maintain and collapses if concentration breaks."
      },
      {
        name: 'Passive Quincy Response — Structural Echo',
        type: 'INVOLUNTARY — DORMANT BLUEPRINT',
        description: "Under conditions of extreme duress — soul-targeting attacks, spiritual decay, forced reiatsu suppression — the dormant Quincy blueprint activates involuntarily. A thin layer of reishi reinforces his soul structure from the inside. This is not Blut Vene. He cannot activate it consciously. It surfaces as a reflex and fades once the triggering pressure clears. He has noticed it happening. He does not know what it is."
      },
      {
        name: 'Mask Synergy',
        type: 'HOLLOW ENHANCEMENT',
        description: "When he dons the Hollow mask, he is temporarily aligning the surrogate core of his soul. Physical stats scale exponentially when fighting to protect allies."
      },
      {
        name: 'Nakigara Combat State',
        type: 'INVOLUNTARY — PROTECTION TRIGGER',
        description: "When Nakigara partially externalises during high-stakes protection moments, Adham's combat output increases beyond what either operates at independently. Reaction speed and strike commitment increase significantly. Involuntary, non-transferable, clears automatically once the triggering condition resolves."
      },
      {
        name: 'Zero Quincy Techniques',
        type: 'LIMITATION',
        description: "He possesses no access to Blut Vene, Hirenkyaku, or external Reishi subjugation. His offensive and defensive capabilities rely entirely on Zanjutsu, Hakuda, and Hollow enhancements."
      }
    ],
    lore: [
      {
        title: 'Appearance: Sealed Form',
        description: "Adham is lean without being slight — the build of someone who has spent a long time learning how to move rather than how to look like he can. Nothing about the way he carries himself announces itself. He doesn't take up more space than he needs.\n\nHis hair is blue-black, wavy, and falls past his shoulders — deep enough in colour that it reads almost entirely dark until the light catches the warm orange streaks threaded through it. They're not highlights. More like something that surfaced on its own and decided to stay. He doesn't tie it back. In a fight it moves with him, which he has long since stopped thinking about.\n\nHis eyes are amber-gold, and they glow. Not metaphorically. There is actual light in them, faint but constant — the kind of detail that registers wrong before you can name why. The left eye is the one that matters: The Glitch, the marker of something dormant and structural running underneath everything else he is. It looks identical to the right eye under normal conditions. The difference only surfaces under specific pressure, in ways Adham himself doesn't fully understand yet.\n\nWhat he wears has the quality of someone who grew up knowing what formal looks like and eventually developed their own version of it. A deep blue coat, fitted close, with intricate gold arabesque filigree worked into the fabric from collar to hem. A dark fur-trimmed mantle sits across his shoulders. Blue cape behind. Gold bracers at the wrists. The overall effect is composed, deliberate, and slightly out of time — like something assembled by someone who has lived between worlds long enough that none of their references are purely from one place.\n\nHe doesn't look like what he is. That's not an accident and it's not a performance — it's just that the version of himself he's built in exile doesn't fit neatly into any of the categories the people looking at him would reach for first."
      },
      {
        title: 'Appearance: Hollow Mask',
        description: "The mask splits down the centre vertically. Not blended, not gradual — a clean line directly down the middle, like something decided where one thing ends and another begins and committed to it.\n\nThe left side is black. Nakigara's half. The angles are wrong in the specific way that Hollow masks tend to be wrong — asymmetric where they should be even, sharp where they should curve, something feral worked into the geometry that makes it read as aggressive even when nothing is happening. It is the visual language of everything Adham has decided not to be, made solid and worn on his face.\n\nThe right side is bone-white with silver-grey geometric linework. Precise. Structured. The patterns have the quality of something engineered rather than grown — the Quincy element surfacing in the mask's architecture long before Adham has any framework for what that means.\n\nThe seam where black meets white runs exactly down the centre. It is the same line that will eventually split and rejoin as the True Bankai's nodachi blade — though Adham doesn't know that either. The mask is a preview of an answer he hasn't been given the question to yet."
      },
      {
        title: 'Origins: The Lie He Lived In',
        description: "Adham was born into quiet wealth. His parents presented themselves as successful merchants — refined, private, and oddly cautious about who they let near their home. He never questioned it. Why would he? Life was comfortable. He had money, a decent education, and two parents who loved him fiercely, if not a little desperately.\n\nWhat he didn't know was that the comfort was a cover. His parents were Echt Quincy — purebloods — who had severed ties with the Wandenreich and gone into hiding rather than serve under Yhwach. They buried their abilities, their identities, and every trace of what they were. They raised Adham as a normal human child, deliberately keeping him in the dark, hoping the Quincy bloodline inside him would never surface.\n\nIt never did. Not while he was alive.\n\nHe died around the age of twenty. Unremarkable cause — wrong place, wrong time. The kind of death that leaves no grand meaning. He passed without ever knowing what his parents truly were, and carried that latent Quincy reiatsu into the afterlife completely unaware, like a sealed letter he never thought to open."
      },
      {
        title: 'Soul Society: The Slow Climb',
        description: "He ended up in the Rukongai, then the Academy, then — eventually — under the wing of Kisuke Urahara, Captain of the 12th Division and arguably the most unconventional mind in all of Soul Society.\n\nTraining under Urahara was equal parts enlightening and exhausting. The man taught sideways. Lessons hidden inside games. Answers buried in questions. Adham was never the fastest student in the room, never the most naturally gifted. He worked hard for every inch.\n\nShikai took him longer than most. He could feel his Zanpakuto's presence — a voice just out of reach, like a word on the tip of your tongue — but it wouldn't cooperate. He trained, failed, trained again. Eventually it came, not in some dramatic breakthrough, but quietly, like a door that had always been unlocked and he'd just finally stopped trying to kick it down.\n\nWhat nobody expected — including Adham himself — was Bankai. Roughly a year after achieving Shikai, he manifested it. That's extraordinarily fast by any standard. Fast enough to raise eyebrows. Fast enough that Urahara himself went quiet for a moment before saying something characteristically cryptic and moving on.\n\nThe problem is: it's not his true Bankai. It's stable, it's functional, it's powerful — but it's incomplete, like a translation of something that hasn't been fully written yet. The real version — deeper, stranger, likely tied to the Quincy blood running dormant in his soul — hasn't surfaced yet."
      },
      {
        title: 'Hollowfication: The Thing That Changed Everything',
        description: "Before the exile, there was the incident.\n\nAdham was among the Soul Reapers subjected to Hollowfication — the same wave that created the other Visoreds. He remembers fragments of it. The wrongness spreading through his reiatsu like ink dropped in water. The moment his own soul started feeling foreign to him. The panic underneath that he refused to show.\n\nHe survived it. Learned, eventually and painfully, to coexist with his inner Hollow — to wear the mask without being consumed by it. The mask itself is an extension of something feral and ancient that has no interest in being patient or kind. Everything Adham is, it isn't. Keeping it controlled took time, discipline, and a lot of ugly internal fights he doesn't talk about."
      },
      {
        title: 'Nakigara — The Name He Pulled From Static',
        description: "The mask is an extension of something that has no interest in patience or kindness — but it has a name. Adham heard it once, during one of the uglier internal fights he doesn't talk about. Nakigara. The Hollow never offered it. He pulled it out of the noise the way you'd pull a word from static. It doesn't feel like a title. It feels like an accusation.\n\nNakigara mirrors nothing about who Adham presents himself as. It is specifically, surgically what he buries. The resentment he swallows when someone smarter moves faster. The exhaustion of caring about people who don't notice the cost. The part of him that looked at Soul Society's hierarchy and didn't just want to reform it — wanted to burn the architecture down and build something else in the ash. Adham holds onto warmth like a discipline. Nakigara holds onto everything he decided not to be.\n\nThey've reached a functional arrangement. Not peace. Something more like two people who have to share a room and have agreed on the rules.\n\nThat arrangement has a third clause neither of them formally agreed to. In fights where someone Adham has claimed is genuinely at risk — not threatened, not in danger, but at risk — Nakigara stops being passive. The mask goes up and something behind it is also steering. Not a takeover. Not possession. More like a second hand on the wheel that Adham can feel but not fully override.\n\nNakigara reads fights differently. Where Adham's conscious mind still processes, hesitates, adjusts mid-thought, Nakigara reacts to gaps before they've fully opened. Strikes that Adham would plan, it executes. Angles he'd consider, it commits to. The result is a combat state that operates faster than either of them would alone — Adham's precision and ring-reading overlaid with Nakigara's total absence of hesitation.\n\nThe activation condition is involuntary and non-negotiable. Adham can't call it up on demand and can't shut it down once it starts. The moment the trigger condition clears — the person is safe, the threat is resolved — it recedes on its own. They're still not friends. Nakigara doesn't do this out of loyalty. It does it because in those moments, Adham's intent is singular and total, and that kind of focused will is the only environment where something like Nakigara can operate without resistance. It's the closest thing to agreement they've ever had."
      },
      {
        title: 'Aizen: What He Did To Them',
        description: "What he refused to accept for years — even as the exile dragged on — was the official story. That Urahara did it. He sat with it, turned it over, and it never fit. Eventually he stopped dancing around it and just asked Urahara directly. The answer he got was Aizen.\n\nAizen had engineered the whole thing. The Hollowfication, the framing, the exile — all of it traced back to him. Urahara confirmed it without theatrics, which somehow made it land harder than any dramatic revelation would have.\n\nAdham went quiet for a long moment. Then he nodded, said something small and unremarkable, and walked away.\n\nHe didn't feel vindicated. What he felt was closer to a knot finally loosening — years of carrying a suspicion he had no proof for, suddenly validated in the worst possible way. The man he refused to blame was innocent. The man actually responsible had been sitting in Soul Society wearing a captain's haori the whole time.\n\nWhat Adham feels toward Aizen is not the hot, dramatic anger some people carry. It's something deeper and worse. It's hate. The quiet kind. The kind that doesn't shout or monologue or make itself into a spectacle — the kind that sits in the chest like something structural, load-bearing, part of the architecture now. He hates Sōsuke Aizen the way you hate something that broke a thing you can never fully repair.\n\nAizen didn't just experiment on them. He used them. Every Vizard who woke up in their own body feeling like a stranger, every life that was hollowed out and rebuilt sideways — that was a data point to him. A step in a process. They weren't people in his calculation. They were materials. And the part that makes the hatred settle deepest is that Aizen was right there, the entire time, wearing his captain's haori and his gentle smile and his carefully constructed concern, and nobody saw it. Adham didn't see it. That failure — his own blindness — feeds the anger as much as Aizen's actions do.\n\nHe thinks about it on quiet nights. Not obsessively. Not in the consuming way that would make it dramatic enough to deal with. Just — it surfaces. The way Aizen orchestrated everything with such elegant precision. The Hollowfication experiments. The framing of Urahara. The century-long manipulation of every institution Adham had once trusted. All of it executed with the calm certainty of someone who had already decided that the people he was destroying were acceptable losses.\n\nAdham has decided they were not. That is not a position he will revisit.\n\nWhen the time came, he was ready. Not emotionally ready — he doesn't think anyone is ever emotionally ready for the specific weight of facing the person who unmade your life and called it progress. But tactically, structurally, in the way that matters when the mask goes on and the blade comes out — he was ready. He'd been ready for a long time. The hatred made sure of that."
      },
      {
        title: 'Exile: Following the Captain',
        description: "When Urahara was framed and exiled from Soul Society, Adham left with him.\n\nNot because he fully understood every layer of what happened. Not because he had some grand principled stance. He just couldn't stay. Urahara had trained him, challenged him, tolerated his slower pace without condescension — and when everything collapsed, Adham looked at the evidence Soul Society was so confident in and felt nothing but doubt.\n\nHe followed him to the human world and built a new kind of life in the shadow of Urahara Shop. The other Visoreds scattered. Adham stayed close. He tells himself it's practical. Deep down it's probably also the only way he knows how to keep asking the question he can't let go of.\n\nHe told Urahara once. Not the full version — just enough. That he wanted the lines to mean less. That where a soul landed shouldn't decide what it was allowed to become. Urahara listened the way he always listens — with that specific quality of attention that makes you feel simultaneously seen and studied. Then he said, mildly, that the last person who decided the architecture of Soul Society needed to be fundamentally restructured had manufactured a century of war and staged his own exile to do it.\n\nAdham said that wasn't the same thing. Urahara said he knew. Then he asked what made Adham certain that the people currently benefiting from those lines would agree to that distinction.\n\nHe didn't have an answer. He still doesn't. What it did was change the shape of what he wants — not abandon it, but sharpen it from something abstract and burning into something slower and more deliberate. Urahara didn't tell him it was impossible. That's important. He just made sure Adham understood what category of problem he was actually dealing with.\n\nIt's a harder kind of hope to carry. He carries it anyway.\n\nDaily Life\n\nTraining occupies most mornings — always structured as something that looks like something else. A sparring session that is actually a lesson in reiatsu control. An errand to the storage room that somehow ends with him having disassembled and reassembled a Gigai component without being explicitly asked to. Urahara teaches sideways even now, in exile.\n\nThe afternoons split between whatever Urahara is currently researching and the actual shop work. Stocking shelves. Handling the occasional customer. Keeping the front presentable enough that the convenience store fiction holds. He doesn't mind the mundane parts. There's something grounding about a day that includes both \"learn to project your hybrid reiatsu signature as interference\" and \"restock the candy aisle.\"\n\nHe goes to sleep at a reasonable hour. He wakes up and does it again. Exile doesn't look like most people imagine it does."
      },
      {
        title: 'Yoruichi: The One Thing He Couldn\'t Say',
        description: "He picked up Hakuda because she was willing to teach it and he wanted an excuse to be around her. He told himself it was practical. Hand-to-hand is useful. Made sense to learn it. He wasn't fooling anyone except himself.\n\nThere was a specific evening — training finished, the air still carrying the particular exhausted quiet that follows an hour of getting thrown into the ground repeatedly — where he almost said something. She'd made a comment, offhand, about how he was finally starting to move like he meant it. Laughed a little. The light was doing something particular and he'd opened his mouth and the words were right there, fully formed, ready.\n\nHe said: \"You're a good teacher.\"\nShe said: \"I know.\"\n\nAnd that was that.\n\nHe walked home and spent twenty minutes thinking about what an idiot he was, then decided it was fine, then spent another twenty minutes knowing it wasn't, and eventually went to sleep.\n\nHe's found the moment plenty of times since. He talks himself out of every one. Around everyone else he's warm, easy, quick to laugh — but around her something in him goes careful and quiet, like a room where someone's turned all the furniture slightly wrong. He's not afraid of her. He's afraid of what he'd do with the answer if it wasn't the one he wanted. It's easier to keep asking the question without asking it."
      },
      {
        title: 'The Goal He Has No Map For',
        description: "Adham has seen enough of Soul Society — and enough of the human world — to know that both are built on systems that decide a person's worth before they've had the chance to prove it. Rukongai vs Seireitei. Shinigami vs Hollow. Human vs everything else. The lines are old and they are vicious and almost nobody questions them because almost nobody has to.\n\nHe wants to change it. Not reform it at the edges — actually change it. The kind of change where a kid from the outer districts isn't looked at differently just because of where his soul landed. Where what you are doesn't decide what you're allowed to become.\n\nHe has no idea how to do that. No political power, no institutional leverage, no army. He's a Vizard with an incomplete Bankai living in a convenience store front in the human world. The gap between the goal and his current reality is so large it's almost funny.\n\nHe thinks about it anyway. He holds onto it the way people hold onto things they can't justify but can't put down either. Some days it feels naive. Most days it feels like the only thing that makes the rest of it worth doing.\n\nHe hasn't said this out loud to anyone. He's not sure it would land right."
      },
      {
        title: 'The People He Thought He Knew',
        description: "He found out after. Long after. The kind of after where there's no conversation to have, no question to ask, no version of events where they get to explain themselves. Urahara told him plainly, because that's how Urahara tells things he considers important — no performance, just information, delivered like he's respecting you enough not to wrap it.\n\nEcht Quincy. Purebloods. They left the Wandenreich and spent the rest of their lives making sure nobody would ever know what they were. Including him. Especially him.\n\nHe's turned it over more times than he can count. The carefulness he remembered as just how they were — the way his father would go still at certain questions, the way his mother chose their neighborhood, their friends, their life with a precision he'd never thought to interrogate. All of it recontextualizes. All of it lands differently.\n\nHe doesn't think they were wrong. That's the part that sits heaviest. They hid it to protect him, and the logic holds — he just wishes he'd had the chance to tell them it would've been okay. That he could've handled it. That he would've wanted to know. He's not certain that's even true. But he would've wanted the choice.\n\nWhat he actually grieves is simpler and harder to say out loud: he didn't know them. He loved the version of them they decided to show him, which was real, which was genuine — but it was incomplete. And they're gone, and the rest of them is gone with them, and there is no version of this where he gets to meet the whole people they actually were.\n\nThe dormant Quincy blood in his soul is the only piece of them he has left. He doesn't know it's there. But sometimes, in very quiet moments, he feels something underneath his reiatsu that doesn't quite belong to him — something older, something structured and precise — and he thinks of his father's hands, and the particular careful way he used to hold things, and doesn't know why."
      },
      {
        title: 'Who He Is',
        description: "Adham is the kind of person who genuinely wants to know how you're doing when he asks. He makes friends the way some people breathe — without thinking about it, without strategy. Warm and funny and the type who defuses tension with a bad joke and somehow gets away with it. He's joking almost constantly, in the understated way that doesn't demand a reaction — just a running commentary on whatever is happening, a raised eyebrow at the right moment, a well-timed observation that finds the absurdity in something without making anyone the target.\n\nHe asks follow-up questions. He remembers things. He makes people feel like the conversation was specifically for them, because as far as he's concerned, it is.\n\nHe doesn't carry himself like someone exceptional. He knows he came up slower than others, knows there are gaps in him he hasn't filled yet. That awareness keeps him grounded without making him small.\n\nWhen someone he loves is in danger, all of that stops. No jokes. No warmth-as-social-lubricant. Just silence, and then movement. The transition is not dramatic — it doesn't announce itself.\n\nHe doesn't threaten. He doesn't monologue. He just moves.\n\nThe Hollow underneath him has learned this too. When Adham puts the mask on for someone he loves, it stops fighting him. Like even that thing recognizes there's no room for a power struggle when he's already decided."
      },
      {
        title: 'Convergence: The Thread Underneath',
        description: "Somewhere in his reiatsu, buried under years of Soul Reaper conditioning and Hollow integration, the Quincy heritage his parents died hiding is still there. Dormant. Waiting. His Bankai being incomplete isn't a flaw in his training — it's a door he hasn't opened yet because he doesn't know it exists.\n\nThree things are quietly converging in him that he has no framework for: Soul Reaper. Vizard. Quincy blood.\n\nAnd somewhere underneath all of that — a kid who just wanted to make friends and somehow ended up carrying the weight of what a more just world might look like.\n\nWhatever is on the other side of that door, it's going to be interesting."
      },
      {
        title: 'Mechanical Weaknesses',
        description: "Raw reiatsu output above a certain tier. Against opponents whose base output simply overwhelms his engagement range before the hax can land — Yamamoto-level pressure collapses the fight before it becomes a fight. He has no answer for that category of problem.\n\nAging, time, and passive decay effects that aren't reishi constructs. Structural Null has nothing to unmake. Structural Echo doesn't engage. He has no defensive layer against ability categories that operate on existence rather than reiatsu architecture.\n\nAbilities that don't require soul-reading. Reiatsu Interference is irrelevant against brute-force physical attacks or abilities that don't need an accurate lock to function.\n\nSoul Fission contact requirement. Against high-speed or precognitive opponents, landing the nodachi stab on the soul core is the entire fight. If he can't land it, the win condition doesn't exist.\n\nNakigara's secondary trigger burns the mask. If Nakigara fires Soul Fission as a burst and the attempt fails, Adham loses Hollow enhancement for the rest of the fight and is running on Shikai against whatever he just failed to close. One attempt. No reset.\n\nTrue Bankai duration. More efficient than the Incomplete Bankai, but not unlimited. Against attrition fighters who force a long engagement, time is a weapon against him. The longer the fight, the smaller his margin."
      }
    ],
    gallery: [
      { src: '/assets/hero-portrait.png', alt: 'Adham Portrait' },
      { src: '/assets/zanpakuto-evolution.svg', alt: 'Zanpakuto Evolution' },
      { src: '/assets/adham_stats_infographic.png', alt: 'Power Infographic' }
    ]
  }
};
