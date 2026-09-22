/*
  Bengali course content, built for SPEAKING: listening, understanding and answering.
  Learners see transliteration (English-style spelling) and hear audio. Bengali script is only
  shown if the learner turns it on in Testing tools. The script is still needed here because it
  is what the audio generator reads aloud.

  P(bn, said as, meaning, needsCheck, note)   a phrase or word
  N(bn, said as, meaning, digit)              a number

  pairs: [[a, b], ...] are small conversations inside a lesson: item a is heard, item b is the reply.
  needsCheck = true flags items a native speaker should double-check first.
  Audio file names come from the "said as" text, e.g. "nomoshkar" -> audio/nomoshkar.mp3
  and audio/nomoshkar-slow.mp3

  Note: uses West Bengal (India) colloquial Bengali throughout (e.g. jol for water, not the
  Bangladeshi pani) to match the bn-IN voice used for audio generation.
*/
(function () {
  const P = (bn, rom, en, check, note) => ({ gu: bn, rom, en, extra: '', note: note || '', check: !!check });
  const N = (bn, rom, en, digit) => ({ gu: bn, rom, en, extra: digit, note: '', check: false });

  window.COURSE = {
    name: 'Bengali',
    nativeName: 'বাংলা',
    voiceLang: 'bn',
    levels: [
      { id: 1, title: 'First conversations', sub: 'Greetings, names and asking for help' },
      { id: 2, title: 'Family', sub: 'Talk about the people in your life' },
      { id: 3, title: 'Daily life', sub: 'Numbers, food, shopping and getting around' },
      { id: 4, title: 'Festivals and fun', sub: 'Durga Puja, Poila Boishakh and new year wishes' }
    ],
    lessons: [
      /* ---------------- Level 1: first conversations ---------------- */
      {
        id: 'a1', level: 1, kind: 'phrase', icon: '👋', title: 'Hello and goodbye',
        tip: 'নমস্কার (nomoshkar) is a respectful, all-purpose greeting used any time of day. Bengali does not have a single word that works for both "hello" and "goodbye" the way English does.',
        items: [
          P('নমস্কার', 'nomoshkar', 'hello'),
          P('কেমন আছেন?', 'kemon achhen?', 'how are you?'),
          P('আমি ভালো আছি', 'ami bhalo achhi', 'I\'m doing well'),
          P('ধন্যবাদ', 'dhonnobad', 'thank you'),
          P('আবার দেখা হবে', 'abar dekha hobe', 'goodbye (see you again)', true)
        ],
        pairs: [[1, 2]]
      },
      {
        id: 'a2', level: 1, kind: 'phrase', icon: '🙏', title: 'Polite words',
        tip: 'একটু শুনুন (ektu shunun) literally means "listen a little" — it\'s a polite way to get someone\'s attention, like a shopkeeper or a stranger.',
        items: [
          P('একটু শুনুন', 'ektu shunun', 'excuse me (to get someone\'s attention)', true),
          P('সুপ্রভাত', 'suprobhat', 'good morning'),
          P('শুভ রাত্রি', 'shubho ratri', 'good night'),
          P('দুঃখিত', 'dukhito', 'sorry / excuse me'),
          P('কোনো সমস্যা নেই', 'kono somossha nei', 'no problem')
        ],
        pairs: [[3, 4]]
      },
      {
        id: 'a3', level: 1, kind: 'phrase', icon: '✅', title: 'Yes, no and maybe',
        items: [
          P('হ্যাঁ', 'hyan', 'yes'),
          P('না', 'na', 'no'),
          P('হতে পারে', 'hote pare', 'maybe'),
          P('আমি জানি না', 'ami jani na', 'I don\'t know'),
          P('ঠিক আছে', 'thik achhe', 'okay / good'),
          P('সব ঠিক আছে', 'shob thik achhe', 'it\'s fine', true)
        ]
      },
      {
        id: 'a4', level: 1, kind: 'phrase', icon: '💬', title: 'Your name and where you live',
        items: [
          P('আপনার নাম কী?', 'apnar naam ki?', 'what is your name?'),
          P('আমার নাম রাজ', 'amar naam Raj', 'my name is Raj'),
          P('আপনি কোথায় থাকেন?', 'apni kothay thaken?', 'where do you live?'),
          P('আমি আমেরিকায় থাকি', 'ami America-y thaki', 'I live in America', true),
          P('আপনার সাথে দেখা হয়ে ভালো লাগলো', 'apnar shathe dekha hoye bhalo laglo', 'nice to meet you', true)
        ],
        pairs: [[0, 1], [2, 3]]
      },
      {
        id: 'a5', level: 1, kind: 'phrase', icon: '🤔', title: 'When you don\'t understand',
        tip: 'These are your safety net. Using them early in a real conversation makes people slow down and help you.',
        items: [
          P('আমি বুঝতে পারছি না', 'ami bujhte parchi na', 'I don\'t understand'),
          P('আবার বলুন', 'abar bolun', 'please say it again', true),
          P('আস্তে বলুন', 'aste bolun', 'please speak slowly'),
          P('এটা বাংলায় কীভাবে বলে?', 'eta Bangla-y kivabe bole?', 'how do you say this in Bengali?', true),
          P('আমি একটু বাংলা জানি', 'ami ektu Bangla jani', 'I know a little Bengali'),
          P('আপনি বাংলা জানেন?', 'apni Bangla janen?', 'do you know Bengali?')
        ],
        pairs: [[5, 4]]
      },
      {
        id: 'cp1', level: 1, kind: 'checkpoint', icon: '✓', title: 'First conversations checkpoint',
        from: ['a1', 'a2', 'a3', 'a4', 'a5'], count: 10
      },
      /* ---------------- Level 2: family ---------------- */
      {
        id: 'f1', level: 2, kind: 'word', icon: '👪', title: 'Immediate family',
        items: [
          P('মা', 'maa', 'mother'),
          P('বাবা', 'baba', 'father'),
          P('দাদা', 'dada', 'elder brother'),
          P('দিদি', 'didi', 'elder sister'),
          P('পরিবার', 'poribar', 'family')
        ]
      },
      {
        id: 'f2', level: 2, kind: 'word', icon: '👵', title: 'Grandparents',
        tip: 'Bengali usually splits grandparents by side: your father\'s parents and your mother\'s parents have different names.',
        items: [
          P('ঠাকুরদা', 'thakurda', 'paternal grandfather', true),
          P('ঠাকুমা', 'thakuma', 'paternal grandmother', true),
          P('দাদু', 'dadu', 'maternal grandfather', true),
          P('দিদা', 'dida', 'maternal grandmother', true)
        ]
      },
      {
        id: 'f3', level: 2, kind: 'word', icon: '🧑‍🤝‍🧑', title: 'Aunts and uncles',
        tip: 'Aunts and uncles have different names depending on which side of the family they are on, and whether they are older or younger than your parent.',
        items: [
          P('জেঠু', 'jethu', 'father\'s elder brother', true),
          P('কাকা', 'kaka', 'father\'s younger brother'),
          P('পিসি', 'pishi', 'father\'s sister'),
          P('মামা', 'mama', 'mother\'s brother'),
          P('মাসি', 'mashi', 'mother\'s sister')
        ]
      },
      {
        id: 'f4', level: 2, kind: 'phrase', icon: '🏠', title: 'Introduce your family',
        items: [
          P('ও আমার দাদা', 'o amar dada', 'this is my brother', true),
          P('ও আমার দিদি', 'o amar didi', 'this is my sister', true),
          P('উনি আমার মা', 'uni amar maa', 'this is my mother', true),
          P('উনি আমার বাবা', 'uni amar baba', 'this is my father', true),
          P('আপনার পরিবারে কে কে আছেন?', 'apnar poribar-e ke ke achhen?', 'who is in your family?', true),
          P('আমার পরিবারে চারজন আছেন', 'amar poribar-e charjon achhen', 'there are four people in my family', true)
        ],
        pairs: [[4, 5]]
      },
      {
        id: 'cp2', level: 2, kind: 'checkpoint', icon: '✓', title: 'Family checkpoint',
        from: ['f1', 'f2', 'f3', 'f4'], count: 10
      },
      /* ---------------- Level 3: daily life ---------------- */
      {
        id: 'd1', level: 3, kind: 'word', icon: '🔢', title: 'Numbers 1 to 5',
        items: [
          N('এক', 'ek', 'one', '1'),
          N('দুই', 'dui', 'two', '2'),
          N('তিন', 'tin', 'three', '3'),
          N('চার', 'char', 'four', '4'),
          N('পাঁচ', 'pach', 'five', '5')
        ]
      },
      {
        id: 'd2', level: 3, kind: 'word', icon: '🔟', title: 'Numbers 6 to 10',
        items: [
          N('ছয়', 'chhoy', 'six', '6'),
          N('সাত', 'shat', 'seven', '7'),
          N('আট', 'aat', 'eight', '8'),
          N('নয়', 'noy', 'nine', '9'),
          N('দশ', 'dosh', 'ten', '10')
        ]
      },
      {
        id: 'd3', level: 3, kind: 'word', icon: '📅', title: 'Days of the week',
        items: [
          P('সোমবার', 'sombar', 'Monday'),
          P('মঙ্গলবার', 'mongolbar', 'Tuesday'),
          P('বুধবার', 'budhbar', 'Wednesday'),
          P('বৃহস্পতিবার', 'brihoshpotibar', 'Thursday'),
          P('শুক্রবার', 'shukrobar', 'Friday'),
          P('শনিবার', 'shonibar', 'Saturday'),
          P('রবিবার', 'robibar', 'Sunday')
        ]
      },
      {
        id: 'd4', level: 3, kind: 'word', icon: '🥛', title: 'Food and drink words',
        items: [
          P('জল', 'jol', 'water'),
          P('চা', 'cha', 'tea'),
          P('দুধ', 'dudh', 'milk'),
          P('ভাত', 'bhat', 'rice'),
          P('ডাল', 'dal', 'lentil soup'),
          P('রুটি', 'ruti', 'flatbread')
        ]
      },
      {
        id: 'd5', level: 3, kind: 'phrase', icon: '🍽️', title: 'Hungry and thirsty',
        items: [
          P('আমার খিদে পেয়েছে', 'amar khide peyechhe', 'I am hungry', true),
          P('আমার তেষ্টা পেয়েছে', 'amar teshta peyechhe', 'I am thirsty', true),
          P('খাবার তৈরি', 'khabar toiri', 'food is ready'),
          P('আমি আসছি', 'ami aschhi', 'I\'m coming'),
          P('চলুন খাওয়া যাক', 'cholun khawa jaak', 'let\'s eat', true),
          P('আমাকে একটু জল দিন', 'amake ektu jol din', 'I would like some water', true)
        ],
        pairs: [[2, 3], [0, 4]]
      },
      {
        id: 'd6', level: 3, kind: 'phrase', icon: '😋', title: 'Enjoying the meal',
        items: [
          P('একটু বেশি', 'ektu beshi', 'a little more'),
          P('যথেষ্ট, ধন্যবাদ', 'jothesto, dhonnobad', 'that\'s enough, thank you'),
          P('এটা খুব সুস্বাদু', 'eta khub sushshadu', 'this is very tasty', true),
          P('আপনি খেয়েছেন?', 'apni kheyechhen?', 'have you eaten?', true),
          P('এটা কী?', 'eta ki?', 'what is this?')
        ]
      },
      {
        id: 'd7', level: 3, kind: 'phrase', icon: '🛍️', title: 'Shopping',
        items: [
          P('এটার দাম কত?', 'etar dam koto?', 'how much is it?'),
          P('দশ টাকা', 'dosh taka', 'ten rupees'),
          P('অনেক দাম বেশি', 'onek dam beshi', 'it\'s too expensive', true),
          P('একটু কমান', 'ektu koman', 'please reduce it a little', true),
          P('আমার এটা চাই', 'amar eta chai', 'I want this'),
          P('অন্য একটা দেখান', 'onyo ekta dekhan', 'show me another one', true)
        ],
        pairs: [[0, 1]]
      },
      {
        id: 'd8', level: 3, kind: 'phrase', icon: '🧭', title: 'Getting around',
        items: [
          P('এটা কোথায়?', 'eta kothay?', 'where is it?'),
          P('এখানে আসুন', 'ekhane ashun', 'come here'),
          P('সোজা যান', 'shoja jaan', 'go straight'),
          P('বাম দিকে', 'baam dike', 'on the left'),
          P('ডান দিকে', 'daan dike', 'on the right'),
          P('এখানে থামুন', 'ekhane thamun', 'stop here', true)
        ]
      },
      {
        id: 'd9', level: 3, kind: 'phrase', icon: '😊', title: 'Feelings and reactions',
        items: [
          P('খুব ভালো', 'khub bhalo', 'very good'),
          P('আমার খুব ভালো লেগেছে', 'amar khub bhalo legechhe', 'I had fun', true),
          P('আমার পছন্দ হয়েছে', 'amar pochhondo hoyechhe', 'I liked it', true),
          P('চিন্তা করবেন না', 'chinta korben na', 'don\'t worry', true),
          P('আহা!', 'aha!', 'wow!')
        ]
      },
      {
        id: 'cp3', level: 3, kind: 'checkpoint', icon: '✓', title: 'Daily life checkpoint',
        from: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'], count: 12
      },
      /* ---------------- Level 4: festivals and fun ---------------- */
      {
        id: 'e1', level: 4, kind: 'phrase', icon: '🎉', title: 'Festival wishes',
        tip: 'শুভ (shubho, "auspicious") goes in front of almost any festival or occasion name to wish someone well.',
        items: [
          P('শুভ নববর্ষ', 'shubho noboborsho', 'happy new year', true),
          P('শুভ দুর্গাপূজা', 'shubho Durga Puja', 'happy Durga Puja', true),
          P('শুভ দীপাবলি', 'shubho Dipaboli', 'happy Diwali', true),
          P('শুভ জন্মদিন', 'shubho jonmodin', 'happy birthday', true),
          P('শুভ বিজয়া', 'shubho Bijoya', 'greetings at the close of Durga Puja', true)
        ]
      },
      {
        id: 'e2', level: 4, kind: 'word', icon: '🪔', title: 'Durga Puja',
        tip: 'Durga Puja, usually in September or October, is Bengal\'s biggest festival — five days honoring the goddess Durga.',
        items: [
          P('দুর্গাপূজা', 'Durga Puja', 'the biggest festival'),
          P('ঢাক', 'dhaak', 'the traditional festival drum', true),
          P('অঞ্জলি', 'anjali', 'ritual flower offering', true),
          P('প্রতিমা', 'protima', 'the goddess\'s clay idol', true),
          P('আসুন দুর্গাপূজা উদযাপন করি', 'ashun Durga Puja udjapon kori', 'let\'s celebrate Durga Puja', true)
        ]
      },
      {
        id: 'e3', level: 4, kind: 'word', icon: '🎊', title: 'Poila Boishakh',
        tip: 'পয়লা বৈশাখ (Poila Boishakh) is the first day of the Bengali calendar year, usually mid-April, celebrated with new clothes and opening fresh account ledgers.',
        items: [
          P('পয়লা বৈশাখ', 'Poila Boishakh', 'Bengali new year\'s day', true),
          P('হালখাতা', 'haal khata', 'the new-ledger tradition for shopkeepers', true),
          P('মিষ্টি', 'mishti', 'Bengali sweets'),
          P('শুভ নববর্ষ', 'shubho noboborsho', 'happy Bengali new year', true)
        ]
      },
      {
        id: 'cp4', level: 4, kind: 'checkpoint', icon: '✓', title: 'Festivals checkpoint',
        from: ['e1', 'e2', 'e3'], count: 10
      },
    ]
  };
})();
