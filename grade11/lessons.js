const LESSONS = [
{
num: 1,
title: 'Understanding People',
titleFa: 'درک مردم',
function: 'Understanding People',
facts: [
{ en: 'There are about 7000 languages in the world.', fa: 'حدود ۷۰۰۰ زبان در دنیا وجود دارد.' },
{ en: 'Most languages of the world have no written form.', fa: 'بیشتر زبان‌های دنیا شکل نوشتاری ندارند.' },
{ en: 'The Holy Quran is available in more than 100 languages.', fa: 'قرآن کریم به بیش از ۱۰۰ زبان موجود است.' },
{ en: 'One language dies about every fourteen days.', fa: 'تقریباً هر چهارده روز یک زبان می‌میرد.' },
{ en: 'Deaf people use sign language to communicate.', fa: 'ناشنوایان برای ارتباط از زبان اشاره استفاده می‌کنند.' }
],
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'B',
instruction: 'B. Match the signs with their meanings. There is one extra sentence.',
instructionFa: 'علامت‌ها را با معنی‌شان تطبیق بده. یک جمله اضافی است.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'There is a parking lot around.', fa: 'پارکینگ در این اطراف هست.', image: 'gr-sign-parking.jpg' },
{ id: 'b', phrase: 'Turn off your mobile phone.', fa: 'موبایلت را خاموش کن.', image: 'gr-sign-mobile.jpg' },
{ id: 'c', phrase: 'Please be quiet.', fa: 'لطفاً ساکت باش.', image: 'gr-sign-quiet.jpg' },
{ id: 'd', phrase: 'Keep off the grass.', fa: 'روی چمن نرو.', image: 'gr-sign-grass.jpg' },
{ id: 'e', phrase: 'You are near a restaurant.', fa: 'نزدیک یک رستوران هستی.', image: 'gr-sign-restaurant.jpg' },
{ id: 'f', phrase: 'Do not swim here.', fa: 'اینجا شنا نکن.', image: 'gr-sign-noswim.jpg' }
],
followup: 'Signs are a way of communication without words!',
followupFa: 'علامت‌ها راهی برای ارتباط بدون کلمات‌اند!',
followupType: 'two-groups',
groupLabels: ['Sign', 'Meaning']
},
{
label: 'C',
instruction: 'C. Number the following activities from 1 to 6 according to how frequently you do them when you learn a foreign language.',
instructionFa: 'فعالیت‌ها را از ۱ تا ۶ بر اساس اینکه چقدر موقع یادگیری زبان انجامشان می‌دهی شماره‌گذاری کن.',
type: 'fill-bank',
wordBank: ['1', '2', '3', '4', '5', '6'],
sentences: [
{ text: '_____ Reading storybooks' },
{ text: '_____ Watching movies' },
{ text: '_____ Listening to the news' },
{ text: '_____ Surfing the net' },
{ text: '_____ Talking to foreigners' },
{ text: '_____ Writing letters or emails' }
]
}
]
},
conversation: {
subtitle: 'An Interview with a Translator',
subtitleFa: 'مصاحبه با یک مترجم',
desc: 'بابک صابریان مترجمی است که برای صداوسیما کار می‌کند. امروز میزبان میثم، دانش‌آموز دبیرستانی، در دفترش است. میثم برای پروژه مدرسه‌اش با او مصاحبه می‌کند.',
newWordsHint: ['besides', 'mother tongue', 'experience', 'absolutely', 'fluently', 'to be honest', 'point'],
lines: [
{ speaker: 'Meysam', role: 'student', en: 'Thank you Mr. Saberian for inviting me to your office.', fa: 'آقای صابریان، ممنون که من را به دفترتان دعوت کردید.' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: "You're welcome!", fa: 'خواهش می‌کنم!' },
{ speaker: 'Meysam', role: 'student', en: 'I heard you know three languages. Is that right?', fa: 'شنیدم سه زبان بلدید. درسته؟' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: 'Well, actually four languages.', fa: 'خب، راستش چهار زبان.' },
{ speaker: 'Meysam', role: 'student', en: 'Four! Really?! What languages do you know?', fa: 'چهار! واقعاً؟! چه زبان‌هایی بلدید؟' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: 'Besides my mother tongue, Persian, I know English, French and Russian well.', fa: 'علاوه بر زبان مادری‌ام فارسی، انگلیسی، فرانسه و روسی را خوب بلدم.' },
{ speaker: 'Meysam', role: 'student', en: 'Interesting! And when did you learn them?', fa: 'جالبه! کِی یادشان گرفتید؟' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: 'I began learning English at school when I was thirteen. Then I began learning French in a language institute when I was fifteen. And I learned Russian when I was a university student in Moscow.', fa: 'انگلیسی را سیزده‌سالگی در مدرسه شروع کردم. بعد فرانسه را پانزده‌سالگی در آموزشگاه زبان شروع کردم. و روسی را وقتی دانشجوی دانشگاه در مسکو بودم یاد گرفتم.' },
{ speaker: 'Meysam', role: 'student', en: 'Can you use all of them fluently?', fa: 'می‌توانید همه‌شان را روان استفاده کنید؟' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: 'I know all of them well, but I use English more.', fa: 'همه را خوب بلدم، ولی انگلیسی را بیشتر استفاده می‌کنم.' },
{ speaker: 'Meysam', role: 'student', en: 'OK. Do you think language learning should start as early as possible?', fa: 'خب. فکر می‌کنید یادگیری زبان باید هرچه زودتر شروع شود؟' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: 'My experience says interest and hard work are really more important than age.', fa: 'تجربه‌ی من می‌گوید علاقه و تلاش سخت واقعاً مهم‌تر از سن است.' },
{ speaker: 'Meysam', role: 'student', en: 'Hmm… that\'s an important point. May I know what your favorite language is? English, French, or Russian?', fa: 'هوم... نکته‌ی مهمی است. می‌توانم بدانم زبان موردعلاقه‌تان کدام است؟ انگلیسی، فرانسه یا روسی؟' },
{ speaker: 'Mr. Saberian', role: 'teacher', en: 'To be honest, I enjoy using them all, but my favorite language is absolutely my mother tongue!', fa: 'راستش را بخواهی، از همه‌شان لذت می‌برم، ولی زبان موردعلاقه‌ام قطعاً زبان مادری‌ام است!' }
],
questions: [
{ q: 'Where does Mr. Saberian work?', fa: 'آقای صابریان کجا کار می‌کند؟' },
{ q: 'Was Mr. Saberian living in a foreign country when he was 13?', fa: 'آقای صابریان سیزده‌سالگی در کشور خارجی زندگی می‌کرد؟' },
{ q: 'How many languages do you know?', fa: 'تو چند زبان بلدی؟' }
]
},
newWords: {
lookRead: [
{ en: 'Mazandaran is one of the best farming {regions} of Iran.', fa: 'مازندران یکی از بهترین {مناطق} کشاورزی ایران است.', image: 'nw-region.jpg' },
{ en: 'Does water really {exist} on Mars?', fa: 'آیا آب واقعاً در مریخ {وجود دارد}؟', image: 'nw-exist.jpg' },
{ en: 'Dictionary prices {range} from $5 to $15.', fa: 'قیمت دیکشنری‌ها از ۵ تا ۱۵ دلار {متغیر است}.', image: 'nw-range.jpg' },
{ en: 'Asia is the largest {continent} of the world.', fa: 'آسیا بزرگ‌ترین {قاره} دنیاست.', image: 'nw-continent.jpg' },
{ en: "Spanish is Diego's {native} language.", fa: 'اسپانیایی زبان {مادری} دیگو است.', image: 'nw-native.jpg' },
{ en: 'Rice is the most {popular} food in Iran.', fa: 'برنج {محبوب‌ترین} غذا در ایران است.', image: 'nw-popular.jpg' },
{ en: '{Imagine} you are traveling in space.', fa: '{تصور کن} در فضا سفر می‌کنی.', image: 'nw-imagine.jpg' },
{ en: 'We are living in the twenty-first {century}.', fa: 'ما در {قرن} بیست‌ویکم زندگی می‌کنیم.', image: 'nw-century.jpg' },
{ en: 'Today, less than 40 {percent} of people live in villages.', fa: 'امروزه کمتر از ۴۰ {درصد} مردم در روستاها زندگی می‌کنند.', image: 'nw-percent.jpg' },
{ en: 'Scientists say that by 2050, wind power can {meet the needs} of the world.', fa: 'دانشمندان می‌گویند تا ۲۰۵۰، انرژی باد می‌تواند {نیازهای} دنیا را {برآورده کند}.', image: 'nw-windpower.jpg' },
{ en: 'Our teacher tried to explain the new word {by means of} sign language.', fa: 'معلممان سعی کرد کلمه جدید را {به وسیله‌ی} زبان اشاره توضیح دهد.', image: 'nw-signlanguage.jpg' }
],
definitions: [
{ word: 'society', def: 'a large group of people who live together', fa: 'جامعه', example: 'We live in an Islamic {society}.' },
{ word: 'ability', def: 'the physical or mental power or skill to do something', fa: 'توانایی', example: "Human's {ability} to talk makes him different from animals." },
{ word: 'vary', def: 'to be different from each other', fa: 'متفاوت بودن', example: 'In some cities, prices {vary} from shop to shop.' },
{ word: 'make up', def: 'to form a thing, amount or number', fa: 'تشکیل دادن', example: "China {makes up} 18% of the world's population." },
{ word: 'despite', def: 'without taking any notice of', fa: 'با وجودِ', example: 'I enjoy the weekend, {despite} the bad weather.' }
]
},
reading: {
passageTitle: 'Languages of the World',
passageTitleFa: 'زبان‌های دنیا',
strategy: {
title: 'Scanning',
titleFa: 'جستجوی سریع',
desc: 'You can scan a reading passage to look for and find specific information quickly such as a number, a name, a word, or a phrase.',
steps: ['Make a clear picture in your mind of the information you are looking for.', 'Look for that information.', "Move your eyes quickly across the text. Don't read every word.", 'When you find the information, stop, read the sentence and mark the information.'],
descFa: 'برای پیدا کردن سریع اطلاعات خاص (عدد، اسم، کلمه)، متن را اسکن کن — لازم نیست همه‌ی کلمات را بخوانی.'
},
paragraphs: [
{ en: 'Language is a system of communication. It uses written and spoken forms. People use language to communicate with each other in a society. They exchange knowledge, beliefs, wishes, and feelings through it.', fa: 'زبان یک نظام ارتباطی است. از شکل‌های نوشتاری و گفتاری استفاده می‌کند. مردم از زبان برای ارتباط با یکدیگر در جامعه استفاده می‌کنند. از طریق آن دانش، باورها، آرزوها و احساسات را مبادله می‌کنند.' },
{ en: 'Languages vary greatly from region to region. They are so different that a person may not understand the language of someone from another region, country or continent. It is not surprising to hear that today about 7000 languages exist in the world. There are more than 2000 languages in Africa, 1000 in the Americas, more than 2250 in Asia, about 230 in Europe, and more than 1300 in Oceania.', fa: 'زبان‌ها از منطقه‌ای به منطقه‌ی دیگر بسیار متفاوت‌اند. آن‌قدر متفاوت‌اند که ممکن است شخص زبان کسی از منطقه، کشور یا قاره‌ی دیگر را نفهمد. تعجبی ندارد که امروزه حدود ۷۰۰۰ زبان در دنیا وجود دارد. بیش از ۲۰۰۰ زبان در آفریقا، ۱۰۰۰ در قاره آمریکا، بیش از ۲۲۵۰ در آسیا، حدود ۲۳۰ در اروپا و بیش از ۱۳۰۰ در اقیانوسیه.' },
{ en: 'Native speakers of these languages range in number from very large, with hundreds of millions of speakers, to very small, with fewer than 10 speakers. The most popular language in the world is Chinese. More than one billion people in the world speak Chinese.', fa: 'تعداد گویشوران بومی این زبان‌ها از خیلی زیاد، با صدها میلیون گویشور، تا خیلی کم، با کمتر از ۱۰ گویشور متغیر است. محبوب‌ترین زبان دنیا چینی است. بیش از یک میلیارد نفر در دنیا چینی صحبت می‌کنند.' },
{ en: 'Interestingly, English has fewer native speakers than Chinese, but there are about one billion learners of English all around the world. They learn English as an international language.', fa: 'جالب اینکه انگلیسی گویشوران بومی کمتری از چینی دارد، اما حدود یک میلیارد زبان‌آموز انگلیسی در سراسر دنیا هست. آن‌ها انگلیسی را به‌عنوان زبان بین‌المللی یاد می‌گیرند.' },
{ en: "About fifty percent of the world's languages have fewer than 5000 speakers. In the beginning of the twenty-first century, 204 languages had fewer than 10 speakers and 344 languages had between 10 and 99 speakers. The 548 languages with fewer than 99 speakers make up nearly 8 percent of the world's languages. We call them 'endangered languages'. As the speakers of such languages grow old and die, their languages will die, too.", fa: 'حدود پنجاه درصد زبان‌های دنیا کمتر از ۵۰۰۰ گویشور دارند. در آغاز قرن بیست‌ویکم، ۲۰۴ زبان کمتر از ۱۰ گویشور و ۳۴۴ زبان بین ۱۰ تا ۹۹ گویشور داشتند. ۵۴۸ زبانِ با کمتر از ۹۹ گویشور، نزدیک به ۸ درصد زبان‌های دنیا را تشکیل می‌دهند. به آن‌ها «زبان‌های در معرض انقراض» می‌گوییم. وقتی گویشوران چنین زبان‌هایی پیر می‌شوند و می‌میرند، زبانشان هم می‌میرد.' },
{ en: 'All languages are really valuable, despite their differences. Every language is an amazing means of communication that meets the needs of its own speakers. It is impossible to imagine the world without language. Therefore, we should respect all languages, no matter how different they are and how many speakers they have.', fa: 'همه‌ی زبان‌ها، با وجود تفاوت‌هایشان، واقعاً ارزشمندند. هر زبان وسیله‌ی ارتباطی شگفت‌انگیزی است که نیازهای گویشوران خودش را برآورده می‌کند. تصور دنیا بدون زبان غیرممکن است. بنابراین باید به همه‌ی زبان‌ها احترام بگذاریم، فرقی نمی‌کند چقدر متفاوت باشند و چند گویشور داشته باشند.' }
],
glossary: {
'communication': 'ارتباط', 'written and spoken': 'نوشتاری و گفتاری', 'society': 'جامعه',
'exchange': 'مبادله کردن', 'knowledge': 'دانش', 'beliefs': 'باورها', 'wishes': 'آرزوها',
'vary': 'متفاوت‌اند', 'region': 'منطقه', 'continent': 'قاره', 'exist': 'وجود دارد',
'Native speakers': 'گویشوران بومی', 'range': 'متغیر است', 'popular': 'محبوب', 'billion': 'میلیارد',
'learners': 'زبان‌آموزان', 'international': 'بین‌المللی', 'century': 'قرن', 'make up': 'تشکیل می‌دهند',
'percent': 'درصد', 'endangered': 'در معرض انقراض', 'grow old': 'پیر می‌شوند', 'valuable': 'ارزشمند',
'despite': 'با وجودِ', 'means of communication': 'وسیله ارتباط', 'meets the needs': 'نیازها را برآورده می‌کند',
'respect': 'احترام گذاشتن'
},
comprehension: [
{
type: 'scan',
title: 'A. Scan the passage for the following numbers and match. (a. 548  b. 2250  c. 8  d. 1300  e. 204 — one is extra)',
items: [
{ q: 'The number of languages with speakers fewer than 10', sampleAnswer: '204 (e)' },
{ q: 'The percent of endangered languages', sampleAnswer: '8 (c)' },
{ q: 'The number of languages with speakers fewer than 99', sampleAnswer: '548 (a)' },
{ q: 'The number of languages in Oceania', sampleAnswer: '1300 (d) — extra: 2250' }
]
},
{
type: 'scan',
title: 'B. Scan the passage for the proper nouns.',
items: [
{ q: 'The language with more than one billion learners:', sampleAnswer: 'English' },
{ q: 'The continent with one thousand languages:', sampleAnswer: 'The Americas' },
{ q: 'The language with the largest number of native speakers:', sampleAnswer: 'Chinese' }
]
},
{
type: 'scan',
title: 'C. Scan the passage and answer the following questions.',
items: [
{ q: 'How many languages are there in the world?', sampleAnswer: 'About 7000 languages.' },
{ q: 'What is the number of endangered languages?', sampleAnswer: '548 languages.' },
{ q: 'Which continent has the largest number of languages in the world?', sampleAnswer: 'Asia (more than 2250).' }
]
},
{
type: 'truefalse',
title: 'D. Read the sentences; put T for true and F for false.',
items: [
{ q: 'Through languages, people can exchange only knowledge.', answer: false },
{ q: 'When a language has no speaker, it dies out.', answer: true },
{ q: 'Only a few languages can meet the needs of their own speakers.', answer: false }
]
}
]
},
vocabDev: {
title: 'Vocabulary Development — Synonyms',
titleFa: 'واژه‌سازی — مترادف‌ها',
blocks: [
{
type: 'affix-table',
title: 'SYNONYMS (مترادف‌ها)',
intro: "Synonyms are words with similar meanings, for example, 'hard' and 'difficult'; or 'begin' and 'start' are synonyms. Learning synonyms is a good way to develop our vocabulary.",
introFa: 'مترادف‌ها کلماتی با معنی مشابه‌اند. یادگیری مترادف‌ها راه خوبی برای گسترش دایره واژگان است.',
headers: ['Word', 'Synonym'],
rows: [
['hard', 'difficult'],
['begin', 'start'],
['small', 'tiny'],
['quick', 'fast'],
['powerful', 'strong'],
['simple', 'easy']
]
},
{
type: 'fill-table',
title: 'A. Write the words that mean the same under the picture where they belong. (small, powerful, quick, strong, fast, tiny, simple, easy)',
items: [
{ image: 'vd-motorcycle.jpg', text: 'motorcycle → _____ + fast', answer: 'quick' },
{ image: 'vd-math.jpg', text: '2+2=? → simple + _____', answer: 'easy' },
{ image: 'vd-weightlifter.jpg', text: 'weightlifter → powerful + _____', answer: 'strong' },
{ image: 'vd-mosquito.jpg', text: 'mosquito → small + _____', answer: 'tiny' }
]
},
{
type: 'fill-table',
title: 'B. Two of the words in each group are synonyms. Find them.',
items: [
{ text: 'a) amazing / probable / wonderful → _____', answer: 'amazing = wonderful' },
{ text: 'b) seek / search for / exercise → _____', answer: 'seek = search for' },
{ text: 'c) quit / live / give up → _____', answer: 'quit = give up' },
{ text: 'd) fortunately / luckily / really → _____', answer: 'fortunately = luckily' }
]
},
{
type: 'fill-table',
title: 'C. Look back at the Reading to find synonyms for the words.',
items: [
{ text: "a) In paragraph 2, a synonym for 'largely': _____", answer: 'greatly' },
{ text: "b) In paragraph 4, a synonym for 'nearly': _____", answer: 'about' },
{ text: "c) In paragraph 5, a synonym for 'to form': _____", answer: 'make up' },
{ text: "d) In paragraph 6, a synonym for 'to think of': _____", answer: 'imagine' }
]
}
]
},
grammar: {
title: 'Grammar — Countable & Uncountable Nouns',
titleFa: 'دستور زبان — اسامی قابل‌شمارش و غیرقابل‌شمارش',
noteText: 'این کلمه به <strong>قابل‌شمارش یا غیرقابل‌شمارش بودن اسم</strong> مربوط است.',
noteMap: {
"How many": "<strong>How many</strong> + اسم قابل‌شمارش جمع — برای پرسیدن <strong>تعداد</strong>: How many books?",
"How much": "<strong>How much</strong> + اسم غیرقابل‌شمارش — برای پرسیدن <strong>مقدار</strong> (و قیمت): How much water?",
"a few": "<strong>a few</strong> = چندتا (مثبت) — فقط با اسم <strong>قابل‌شمارش جمع</strong>: a few men.",
"few": "<strong>few</strong> = تعداد کمی (منفی‌گونه) — با اسم قابل‌شمارش جمع.",
"a little": "<strong>a little</strong> = کمی (مثبت) — فقط با اسم <strong>غیرقابل‌شمارش</strong>: a little bread.",
"little": "<strong>little</strong> = مقدار خیلی کم — با اسم غیرقابل‌شمارش.",
"many": "<strong>many</strong> = خیلی — فقط با اسم <strong>قابل‌شمارش جمع</strong>: many books.",
"much": "<strong>much</strong> = خیلی — فقط با اسم <strong>غیرقابل‌شمارش</strong>: much information.",
"lots of": "<strong>lots of / a lot of</strong> = خیلی — با <strong>هر دو</strong> نوع اسم: lots of birds / lots of chicken soup.",
"a lot of": "<strong>a lot of / lots of</strong> = خیلی — با هر دو نوع اسم.",
"some": "<strong>some</strong> = مقداری/تعدادی — با هر دو نوع اسم: some books / some information.",
"a bottle of": "<strong>اندازه‌نما</strong>: <code>a bottle of water</code> — یک بطری آب. برای شمردن اسم غیرقابل‌شمارش.",
"a cup of": "<strong>اندازه‌نما</strong>: <code>a cup of tea/coffee</code> — یک فنجان چای/قهوه.",
"a glass of": "<strong>اندازه‌نما</strong>: <code>a glass of water/juice</code> — یک لیوان آب/آبمیوه.",
"a bag of": "<strong>اندازه‌نما</strong>: <code>a bag of rice/sugar</code> — یک کیسه برنج/شکر.",
"a piece of": "<strong>اندازه‌نما</strong>: <code>a piece of cake/paper</code> — یک تکه کیک/کاغذ.",
"a slice of": "<strong>اندازه‌نما</strong>: <code>a slice of watermelon/banana</code> — یک قاچ/برش.",
"a kilo of": "<strong>اندازه‌نما</strong>: <code>a kilo of meat/rice</code> — یک کیلو گوشت/برنج.",
"a loaf of": "<strong>اندازه‌نما</strong>: <code>a loaf of bread</code> — یک قرص نان. جمع: loaves of bread."
},
readTexts: {
title: 'A. Read the following texts.',
texts: [
{ en: "An endangered language is a language that has very {few} speakers. Nowadays, {many} languages are losing their native speakers. When a language dies, the knowledge and culture disappear with it. {A lot of} endangered languages are in Australia and South America. {Some} of them are in Asia and Africa. The number of live languages of the world is around 7000, and {many} of them may not exist in the future. {Many} researchers are now trying to protect endangered languages. This can save {lots of} information and cultural values of people all around the world.", fa: 'زبان در معرض انقراض زبانی است که گویشوران خیلی کمی دارد. امروزه بسیاری از زبان‌ها گویشوران بومی‌شان را از دست می‌دهند. وقتی زبانی می‌میرد، دانش و فرهنگ هم با آن ناپدید می‌شود. بسیاری از زبان‌های در معرض انقراض در استرالیا و آمریکای جنوبی هستند. برخی در آسیا و آفریقا. تعداد زبان‌های زنده‌ی دنیا حدود ۷۰۰۰ است و بسیاری از آن‌ها شاید در آینده وجود نداشته باشند. اکنون پژوهشگران زیادی برای حفاظت از زبان‌های در معرض انقراض تلاش می‌کنند. این می‌تواند اطلاعات و ارزش‌های فرهنگی زیادی از مردم سراسر دنیا را نجات دهد.' },
{ en: "There are {many} uncountable words for food in English. Native speakers often use words such as '{a bag of}', 'two slices of', or '{a piece of}' with uncountable nouns. This usually happens when they go shopping. They may ask for two bottles of water, {a bag of} sugar, {a loaf of} bread, or two kilos of meat. In a coffee shop, they may order {a cup of} tea, {a piece of} cake, or {a glass of} juice. If a foreign learner uses uncountable words wrongly, English speakers may not understand them well. So when you learn English, be very careful about this important point.", fa: 'در انگلیسی کلمات غیرقابل‌شمارش زیادی برای غذا وجود دارد. گویشوران بومی اغلب با اسم‌های غیرقابل‌شمارش از کلماتی مثل «یک کیسه»، «دو برش» یا «یک تکه» استفاده می‌کنند. این معمولاً موقع خرید اتفاق می‌افتد. ممکن است دو بطری آب، یک کیسه شکر، یک قرص نان یا دو کیلو گوشت بخواهند. در کافی‌شاپ ممکن است یک فنجان چای، یک تکه کیک یا یک لیوان آبمیوه سفارش دهند. اگر زبان‌آموز خارجی کلمات غیرقابل‌شمارش را اشتباه استفاده کند، ممکن است انگلیسی‌زبان‌ها خوب متوجهش نشوند. پس موقع یادگیری انگلیسی خیلی به این نکته مهم دقت کن.' }
]
},
explanation: [
'اسم‌های <strong>قابل‌شمارش (Countable)</strong> را می‌توان شمرد و جمع بست: <code>a car → two cars</code>',
'اسم‌های <strong>غیرقابل‌شمارش (Uncountable)</strong> جمع بسته نمی‌شوند و a/an نمی‌گیرند: <code>water, information, bread, traffic</code>',
'با قابل‌شمارش: <code>many, a few, few, some, lots of</code> — با غیرقابل‌شمارش: <code>much, a little, little, some, lots of</code>',
'سؤال تعداد: <code>How many + جمع</code> — سؤال مقدار: <code>How much + غیرقابل‌شمارش</code>',
'برای شمردن غیرقابل‌شمارش‌ها از <strong>اندازه‌نماها</strong> استفاده می‌کنیم: <code>a glass of water, a loaf of bread</code>'
],
tablesTitle: 'B. Read the following examples. Compare the columns.',
tables: [
{
title: 'Countable / Uncountable',
headers: ['Singular countable', 'Plural countable', 'Uncountable'],
rows: [
['a car', 'two / three / four cars', '— traffic'],
['a book', 'some / many books', 'some / much information'],
['a bird', 'lots of / a lot of birds', 'lots of / a lot of chicken soup'],
['a man', 'few / a few men', 'little / a little bread']
],
examples: [
{ en: 'The students need to read {many} books about history.', fa: 'دانش‌آموزان باید کتاب‌های زیادی درباره تاریخ بخوانند.' },
{ en: 'Children should drink {a lot of} milk.', fa: 'بچه‌ها باید شیر زیادی بنوشند.' }
]
},
{
title: 'Questions & Answers',
headers: ['Question', 'Answer'],
rows: [
['How many cars are there in the street?', 'There are two / three / some / many / lots of / a few cars.'],
['How many books do you need?', 'I need four / some / a lot of / few books.'],
['How much information does your teacher need?', 'She needs some / much / lots of / a little information.'],
['How much bread is there in the kitchen?', 'There is some / a lot of / little bread.']
],
examples: [
{ en: '{How many} pencils do you have in your bag?', fa: 'چند مداد در کیفت داری؟' },
{ en: '{How much} milk do you drink each day?', fa: 'هر روز چقدر شیر می‌نوشی؟' }
]
},
{
title: 'Hint — Measure words (اندازه‌نماها)',
headers: ['Unit', 'Examples'],
rows: [
['a bottle of / two bottles of', 'water'],
['a cup of / two cups of', 'tea, coffee'],
['a glass of / two glasses of', 'water, juice'],
['a bag of / two bags of', 'rice, sugar'],
['a piece of / two pieces of', 'cake, paper'],
['a slice of / two slices of', 'watermelon, banana'],
['a kilo of / two kilos of', 'meat, rice'],
['a loaf of / two loaves of', 'bread']
]
}
],
notes: [
"C. Tell your teacher how different 'countable' and 'uncountable nouns' are.",
"D. Underline all 'countable and uncountable nouns' in Reading."
],
practice: {
title: 'E. Choose appropriate words to complete the following sentences.',
instruction: 'کلمه‌ی مناسب را انتخاب کن.',
items: [
{ sentence: '1. The students need to read _____ books about history.', options: ['many', 'much'], correct: 0 },
{ sentence: '2. Please buy _____ bread for breakfast.', options: ['a loaf of', 'a bottle of'], correct: 0 },
{ sentence: '3. Children should drink _____ milk.', options: ['a lot of', 'a few'], correct: 0 },
{ sentence: '4. We did not have _____ visitors this week.', options: ['many', 'much'], correct: 0 },
{ sentence: '5. Could you please bring me _____ water?', options: ['a glass of', 'a piece of'], correct: 0 }
]
},
friendWork: {
title: 'F. Pair up and ask and answer the following questions.',
partA: { instruction: 'دو نفره بپرسید و پاسخ دهید:', items: ['How many books did you read in summer?', 'How much milk do you drink each day?', 'How much money do you save each month?', 'How many pencils do you have in your bag?'] },
partB: { instruction: 'الگوی پاسخ:', items: ['I read a few / some / many books.', 'I drink a little / a lot of milk.'] }
},
goingTo: {
title: 'Numbers (اعداد)',
note: '<strong>اعداد</strong> قبل از اسم قابل‌شمارش می‌آیند: <code>one car, two apples, thirty students</code>. عدد یک = a/an یا one.',
noteMap: {
"one": "<strong>one</strong> (= a/an) + اسم مفرد: one car / a car.",
"thirteen": "<strong>۱۳</strong> — از اعداد teen (تکیه روی teen): thirTEEN.",
"thirty": "<strong>۳۰</strong> — از اعداد ten (تکیه روی بخش اول): THIRty."
},
readTitle: 'A. Read the examples and see how numbers are used before nouns.',
examples: [
{ en: 'a/{one} car — an/{one} apple', fa: 'یک ماشین — یک سیب' },
{ en: 'two, three, four, five, six, seven, eight, nine, ten → tables, chairs, students', fa: 'اعداد ۲ تا ۱۰ + اسم جمع' },
{ en: 'eleven, twelve, {thirteen}, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen → trees, horses', fa: 'اعداد ۱۱ تا ۱۹ + اسم جمع' },
{ en: 'twenty, {thirty}, forty, fifty, sixty, seventy, eighty, ninety → books, boxes, children', fa: 'دهگان‌ها + اسم جمع' }
],
table: {
headers: ['Numbers', 'Nouns'],
rows: [
['a / one', 'car'],
['two, three, ..., ten', 'apples, tables, chairs'],
['eleven, twelve, thirteen, ..., nineteen', 'students, trees, horses'],
['twenty, twenty-one, ..., ninety-nine', 'books, boxes, children, bags, men']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Shopping, asking about prices and numbers',
strategyTitleFa: 'راهبرد گفتاری — خرید، پرسیدن قیمت و تعداد',
strategyDesc: "A. You may use 'how much' to ask about prices. You may use 'how many' to ask about numbers.",
patterns: [
{ q: 'May I help you? — Yes, please. I\'m looking for some birthday candles.', a: 'How many candles do you need? — I need 12 birthday candles.' },
{ q: 'Um… How much are those? — 20,000 Tomans.', a: 'What about these? — 10,000 Tomans. — I think I\'ll take these.' }
],
patternsList: [
'How much do/does ..... cost?',
'How much is it? / How much are they?',
'How many ..... are there?'
],
listenComplete: {
title: 'B. Listen to the following conversations and answer the questions.',
conversations: [
{ num: 1, items: ['The boy wants .....................', 'How many words does the first dictionary have? .....................'] },
{ num: 2, items: ['How much is a ticket? .....................', 'How many tickets does she want? .....................'] }
]
},
pairWork: {
title: 'Pair up and ask about prices and numbers of things you or your friends have.',
box1: { label: 'قیمت‌ها (How much)', verbs: ['pen', 'pencil', 'eraser', 'pencil-sharpener', 'ruler', 'notebook'] },
box2: { label: 'تعدادها (How many)', verbs: ['sisters', 'brothers', 'uncles', 'aunts', 'books', 'pens', 'pencils'] }
}
},
pronunciation: {
title: 'Pronunciation — Teen Numbers & Ten Numbers',
titleFa: 'تلفظ — اعداد teen و دهگان',
rule: "'Ten numbers' (twenty, thirty, ...) have strong stress on their FIRST part. 'Teen numbers' (thirteen, fourteen, ...) have strong stress on 'TEEN'.",
intonationGuide: {
rising: 'دهگان‌ها: تکیه روی <strong>بخش اول</strong> → <strong>THIR</strong>ty, <strong>TWEN</strong>ty · اعداد teen: تکیه روی <strong>teen</strong> → thir<strong>TEEN</strong>, eigh<strong>TEEN</strong>. این تفاوت برای نشنیدن اشتباه ۱۳ با ۳۰ خیلی مهم است!'
},
examplesTitle: 'A. Listen and repeat. Ten numbers: stress on first part.',
examples: [
{ en: 'twenty — thirty — forty — fifty', a: 'TWENty / THIRty / FORty / FIFty' },
{ en: 'sixty — seventy — eighty — ninety', a: 'SIXty / SEVENty / EIGHTy / NINEty' },
{ en: 'She is almost thirteen.', a: 'thirTEEN (تکیه روی teen)' },
{ en: 'Did you say eighty or eighteen?', a: 'EIGHTy ↔ eighTEEN' }
],
punctuation: {
title: 'B. Read these numbers with appropriate stress: 13, 18, 20, 40, 60, 90',
text: '13 (thirteen) — 18 (eighteen) — 20 (twenty) — 40 (forty) — 60 (sixty) — 90 (ninety)',
answer: 'thirTEEN، eighTEEN (تکیه روی teen) — TWENty، FORty، SIXty، NINEty (تکیه روی بخش اول)'
}
},
writing: {
title: 'Writing — Simple Sentences',
titleFa: 'نوشتن — جملات ساده',
sections: [
{
type: 'lesson-noun',
title: 'Simple Sentence',
intro: "In English, every simple sentence must have at least a subject and a verb. Who or what the sentence speaks about is called the subject. What the sentence says about the subject is called the verb.",
introFa: 'هر جمله ساده دست‌کم یک فاعل و یک فعل دارد. جمله با حرف بزرگ شروع و با نقطه تمام می‌شود.',
categories: [
{ label: 'Subject + Verb', examples: ['Mahan is sleeping.', 'The bird does not sing.', 'The apple fell down.', 'The teacher is hard-working.'] },
{ label: 'How to find the subject', examples: ['Ask: WHO or WHAT is the sentence about?', 'Subject = noun or pronoun (I, we, he, she, it, you, they)'] },
{ label: 'Object (مفعول)', examples: ['The students are drinking milk.', 'The students learn English.', 'Mahdi visited his doctor.', "Ask: who/what RECEIVES the action?"] },
{ label: 'Additional Information (AI)', examples: ['Ali will have an exam next week. (time)', 'Zahra studies English at school. (place)', 'My brother can speak French fluently. (manner)'] }
]
},
{
type: 'circle-nouns-task',
title: 'D. Read the following sentences. Tap the objects.',
items: [
{ sentence: 'The boy runs fast.', nouns: [] },
{ sentence: 'Mina speaks English.', nouns: ['English'] },
{ sentence: 'We must respect our neighbors.', nouns: ['neighbors'] },
{ sentence: 'Shadi is working at home.', nouns: [] },
{ sentence: 'Ali is a smart student.', nouns: [] }
]
},
{
type: 'plural-task',
title: 'E. Write an appropriate word in the blanks. Each answer will be an object.',
items: [
{ sentence: '1. They will meet _____.', words: ['?'], answers: ['their friends'] },
{ sentence: '2. Ali and I bought _____.', words: ['?'], answers: ['some books'] },
{ sentence: '3. We are going to learn _____.', words: ['?'], answers: ['English'] },
{ sentence: '4. Children should not eat _____.', words: ['?'], answers: ['junk food'] }
]
},
{
type: 'plural-task',
title: 'F. Rearrange the words to create correct sentences.',
items: [
{ sentence: '1. borrowed / I / that book → _____', words: ['?'], answers: ['I borrowed that book.'] },
{ sentence: '2. is going / she / the TV / to turn on → _____', words: ['?'], answers: ['She is going to turn on the TV.'] },
{ sentence: '3. can / learn / we / a new language → _____', words: ['?'], answers: ['We can learn a new language.'] },
{ sentence: '4. sang / a song / my grandfather → _____', words: ['?'], answers: ['My grandfather sang a song.'] }
]
},
{
type: 'lesson-markers',
title: 'G & H. Find S, V, O and AI / Write your own sentences',
intro: 'Example: She (S) studies (V) English (O) at school (AI-Place) every week (AI-Time).',
markers: [
{ marker: 'G. Analyze', examples: 'On weekends, I read storybooks. / I usually get good grades. / Last night, my mother made cookies. / My friends take photographs of animals. / I have a math class on Wednesdays.' },
{ marker: 'H. Write', examples: 'Using past, present and future tenses, write five simple sentences about yourself.' }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a story and fill in the blanks.',
tasks: [
'I went to a .....................',
'I needed some cheese .....................',
"Listen again and list all 'uncountable nouns'."
]
},
reading: {
title: 'B. Now read the second part of the report.',
text: "The only thing I was still looking for was a bag of sugar. There were four types of sugar. I picked the bags and read the explanations. Honestly, I didn't understand their differences. A young man came to me and asked what I wanted. I told him I needed some sugar for breakfast. He gave me some information. Again, I didn't understand the differences. I took pictures of the explanations, sat somewhere, and checked the explanations in my mobile dictionary. At last, I understood what type of sugar I needed to buy!",
fa: 'تنها چیزی که هنوز دنبالش بودم یک کیسه شکر بود. چهار نوع شکر بود. کیسه‌ها را برداشتم و توضیحاتشان را خواندم. راستش تفاوتشان را نفهمیدم. مرد جوانی آمد و پرسید چه می‌خواهم. گفتم برای صبحانه مقداری شکر می‌خواهم. اطلاعاتی به من داد. باز هم تفاوت‌ها را نفهمیدم. از توضیحات عکس گرفتم، جایی نشستم و توضیحات را در دیکشنری موبایلم چک کردم. بالاخره فهمیدم چه نوع شکری باید بخرم!',
glossary: {
'a bag of sugar': 'یک کیسه شکر', 'explanations': 'توضیحات', 'differences': 'تفاوت‌ها',
'information': 'اطلاعات', 'mobile dictionary': 'دیکشنری موبایل', 'At last': 'بالاخره'
},
tasks: [
'3. Scan the text for the nouns.',
'Underline all uncountable nouns in the text.'
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer.',
questions: [
'How many bags of sugar did the woman want?',
'Did the woman buy any tea?',
'How did she understand the explanations?'
]
}
},
workbook: [
{
part: 'Get Ready',
section: 'Warm-up',
sectionFa: 'دست‌گرمی',
tasks: [
{
type: 'word-search',
title: 'A. Find 6 languages below. (B: Mark the regions where people mainly speak these languages.)',
instruction: 'از بین کلمات، ۶ زبان را پیدا کن.',
wordBank: ['Asia', 'European', 'Arabic', 'China', 'Persian', 'American', 'Italy', 'Spanish', 'Japanese', 'German', 'Egypt', 'Continent', 'Russian', 'Belgium', 'Australia'],
animals: ['Arabic', 'Persian', 'Spanish', 'Japanese', 'German', 'Russian']
}
]
},
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'How to Learn English Better',
passage: "Get a good dictionary. A dictionary is your best friend while you're learning English. Read a lot. Reading is a great way of practicing your English in your own time. Books and newspapers are useful to improve your English. Label things in your house. Buy a pack of labels and then write the name of items on them, such as phone, window, etc. This is great for beginners. Practice English whenever you can. It's important that you don't leave your English learning inside the classroom. Make sure you never escape learning. Write every day. Try and write something every day using new words and grammar that you've learned. Watch television and movies and listen to good radio programs. Practice every day. Make yourself a study plan. Decide how much time a week you are going to study. Don't be afraid to make mistakes. Be confident when speaking or writing in English. Practice all four language skills: Reading, writing, speaking and listening.",
passageFa: 'یک دیکشنری خوب تهیه کن. دیکشنری بهترین دوستت هنگام یادگیری انگلیسی است. زیاد بخوان. خواندن راهی عالی برای تمرین انگلیسی در وقت آزاد است. کتاب‌ها و روزنامه‌ها برای بهبود انگلیسی مفیدند. روی وسایل خانه برچسب بزن. یک بسته برچسب بخر و اسم وسایل مثل تلفن، پنجره و... را رویشان بنویس. این برای مبتدی‌ها عالی است. هر وقت می‌توانی انگلیسی تمرین کن. مهم است که یادگیری انگلیسی را داخل کلاس رها نکنی. مطمئن شو هرگز از یادگیری فرار نمی‌کنی. هر روز بنویس. سعی کن هر روز با کلمات و گرامر جدیدی که یاد گرفته‌ای چیزی بنویسی. تلویزیون و فیلم ببین و به برنامه‌های خوب رادیویی گوش بده. هر روز تمرین کن. برای خودت برنامه‌ی مطالعه بساز. تصمیم بگیر هفته‌ای چقدر مطالعه می‌کنی. از اشتباه کردن نترس. موقع صحبت یا نوشتن انگلیسی اعتمادبه‌نفس داشته باش. هر چهار مهارت زبان را تمرین کن: خواندن، نوشتن، صحبت کردن و گوش دادن.',
glossary: {
'dictionary': 'دیکشنری', 'improve': 'بهبود بخشیدن', 'Label': 'برچسب زدن', 'items': 'وسایل',
'beginners': 'مبتدی‌ها', 'escape': 'فرار کردن', 'study plan': 'برنامه مطالعه',
'make mistakes': 'اشتباه کردن', 'confident': 'بااعتمادبه‌نفس', 'skills': 'مهارت‌ها'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Classroom is the only place to learn a foreign language.', answer: false },
{ q: 'You can improve your English if you use different types of media.', answer: true },
{ q: 'Writing the name of things on them is a useful way to learn new words.', answer: true }
]
},
{
type: 'short-answer',
title: 'B. Scan and answer the questions.',
questions: [
{ q: 'How many learning hints are suggested in this text?', sampleAnswer: '9 hints.' },
{ q: 'Name two house parts mentioned in the text.', sampleAnswer: 'Phone and window.' },
{ q: "How many times did the word 'language' appear in the text?", sampleAnswer: '2 times (language skills, language learning... scan and count!).' }
]
},
{
type: 'short-answer',
title: 'C. Scan and answer the following questions.',
questions: [
{ q: 'What is your best friend in learning a foreign language?', sampleAnswer: 'A (good) dictionary.' },
{ q: 'Which places are better to learn English?', sampleAnswer: 'Everywhere — not only the classroom (home, etc.).' },
{ q: 'Find four language skills in the text.', sampleAnswer: 'Reading, writing, speaking and listening.' }
]
}
]
},
{
part: 'Part II',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'odd-one-out',
title: 'A. Odd one out.',
items: [
{ options: ['region', 'part', 'area', 'planet'], odd: 3 },
{ options: ['China', 'Belgium', 'England', 'Europe'], odd: 3 },
{ options: ['belief', 'brain', 'wish', 'feeling'], odd: 1 },
{ options: ['moon', 'century', 'year', 'month'], odd: 0 },
{ options: ['hundred', 'million', 'many', 'ten'], odd: 2 }
]
},
{
type: 'match-columns',
title: 'B. Match columns A and B.',
pairs: [
{ a: 'exchange', b: 'knowledge', letter: 'd' },
{ a: 'native', b: 'speakers', letter: 'a' },
{ a: 'vary', b: 'greatly', letter: 'f' },
{ a: 'understand', b: 'the language', letter: 'b' },
{ a: 'farming', b: 'region', letter: 'e' },
{ a: 'meet', b: 'the needs', letter: 'c' }
]
},
{
type: 'group-words',
title: 'C. Put the words in three groups considering their meanings.',
words: ['email', 'Persian', 'telephone', 'Africa', 'letter', 'Arabic', 'French', 'Asia', 'Europe', 'mobile phone', 'America', 'Spanish'],
groups: ['Languages (زبان‌ها)', 'Continents (قاره‌ها)', 'Communication (ارتباط)']
},
{
type: 'match-columns',
title: "D. These words are 'hello' in six different languages. Name their languages.",
pairs: [
{ a: 'Bonjour', b: 'French', letter: 'c' },
{ a: 'Hola', b: 'Spanish', letter: 'a' },
{ a: 'Hallo, guten Tag', b: 'German', letter: 'e' },
{ a: 'Ciao', b: 'Italian', letter: 'b' },
{ a: 'Namaste', b: 'Indian', letter: 'f' },
{ a: 'Konnichiwa', b: 'Japanese', letter: 'd' }
]
},
{
type: 'fill-words',
title: 'E. Fill in the blanks with the given words. Make the necessary changes. (One is extra.)',
wordBank: ['popular', 'exist', 'point', 'percent', 'region', 'range'],
items: [
{ sentence: '1. In this shop, prices _____ from 10 to 50 dollars.', answer: 'range' },
{ sentence: '2. This artist is quite _____ among young people.', answer: 'popular' },
{ sentence: '3. In winter, birds fly to Southern _____ of the country.', answer: 'regions' },
{ sentence: '4. More than 80 _____ of people have access to the Internet.', answer: 'percent' },
{ sentence: '5. There is no sign that life _____ on other planets.', answer: 'exists' }
]
}
]
},
{
part: 'Part III',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'short-answer',
title: 'A. Look at the pictures. Complete the following sentences.',
questions: [
{ q: '1. I bought _____', sampleAnswer: 'I bought two loaves of bread.' },
{ q: '2. There are _____', sampleAnswer: 'There are three bottles of water.' },
{ q: '3. There is _____', sampleAnswer: 'There is a piece of cake.' },
{ q: '4. Mahsa is going to eat _____', sampleAnswer: 'Mahsa is going to eat a slice of watermelon.' }
]
},
{
type: 'fill-words',
title: 'B. Complete the sentences with appropriate units and measure words.',
wordBank: ['glasses of', 'a piece of', 'kilos of', 'a loaf of', 'a slice of'],
items: [
{ sentence: '1. I should drink _____ every day. (water)', answer: 'six glasses of water' },
{ sentence: '2. I eat _____ every week. (cake)', answer: 'a piece of cake' },
{ sentence: '3. My father buys _____ every month. (meat)', answer: 'two kilos of meat' },
{ sentence: '4. I eat _____ for breakfast. (bread)', answer: 'a loaf of bread' },
{ sentence: '5. She ate _____ yesterday. (melon)', answer: 'a slice of melon' }
]
}
]
},
{
part: 'Part IV',
section: 'Pronunciation',
sectionFa: 'تلفظ',
tasks: [
{
type: 'pron-practice',
title: 'A. Read the numbers with appropriate stress.',
items: [
'13 → thirTEEN (تکیه روی teen)',
'18 → eighTEEN (تکیه روی teen)',
'20 → TWENty (تکیه روی بخش اول)',
'40 → FORty',
'60 → SIXty',
'90 → NINEty'
]
}
]
},
{
part: 'Part V',
section: 'Writing',
sectionFa: 'نوشتن',
tasks: [
{
type: 'short-answer',
title: 'A. Read the sentences. Put (S) for subjects, (O) for objects, (V) for verbs and (Adv) for adverbs.',
questions: [
{ q: '1. The man is eating lunch quickly.', sampleAnswer: 'The man (S) is eating (V) lunch (O) quickly (Adv).' },
{ q: '2. We study English hard.', sampleAnswer: 'We (S) study (V) English (O) hard (Adv).' },
{ q: '3. The old woman fell down.', sampleAnswer: 'The old woman (S) fell down (V).' },
{ q: '4. The baby laughed very loudly.', sampleAnswer: 'The baby (S) laughed (V) very loudly (Adv).' },
{ q: '5. I cooked the cake in the kitchen last Sunday.', sampleAnswer: 'I (S) cooked (V) the cake (O) in the kitchen (Adv-place) last Sunday (Adv-time).' }
]
},
{
type: 'short-answer',
title: 'B & C. Reading analysis + fill blanks.',
questions: [
{ q: 'B. Read the Reading in Student Book. Underline 5 subjects, circle 5 verbs and double underline 5 objects.', sampleAnswer: 'e.g. People (S) use (V) language (O)...' },
{ q: 'C1. _____ speaks _____ very well.', sampleAnswer: 'My father speaks English very well.' },
{ q: 'C2. Shahin bought some _____ yesterday.', sampleAnswer: 'Shahin bought some bread yesterday.' },
{ q: 'C3. _____ wrote a _____ to his brother.', sampleAnswer: 'Ali wrote a letter to his brother.' },
{ q: 'C4. Many _____ live in _____.', sampleAnswer: 'Many people live in cities.' }
]
},
{
type: 'unscramble-nouns',
title: 'D. Unscramble the following sentences.',
items: [
{ scrambled: 'bread / much / your mother / does / how / need?', answer: 'How much bread does your mother need?', group: '1' },
{ scrambled: 'like / I / to drink / of / water / glass / a.', answer: 'I like to drink a glass of water.', group: '2' },
{ scrambled: 'cars / are / lots / there / in / street / the / of?', answer: 'Are there lots of cars in the street?', group: '3' },
{ scrambled: 'has / she / two / thirty / classmates / her class / in.', answer: 'She has thirty-two classmates in her class.', group: '4' },
{ scrambled: 'saw / of / lot / my friends / a / chickens / the / in / yard.', answer: 'My friends saw a lot of chickens in the yard.', group: '5' }
],
groups: ['1', '2', '3', '4', '5']
},
{
type: 'singular-plural-task',
title: 'E. Look at the pictures and write appropriate sentences for each one.',
instructions: [
'1. _____ every morning. (حال ساده)  2. _____ now. (حال استمراری)',
'3. _____ yesterday. (گذشته ساده)  4. _____ next Friday. (آینده)'
]
}
]
}
],
quiz: [
{ q: 'How _____ milk do you drink each day?', qFa: 'هر روز چقدر شیر می‌نوشی؟', options: ['much', 'many', 'few', 'a few'], correct: 0 },
{ q: 'Please buy _____ bread for breakfast.', qFa: 'لطفاً برای صبحانه یک قرص نان بخر.', options: ['a loaf of', 'a glass of', 'a cup of', 'many'], correct: 0 },
{ q: 'There are about 7000 _____ in the world.', qFa: 'حدود ۷۰۰۰ زبان در دنیا وجود دارد.', options: ['languages', 'language', 'a language', 'much language'], correct: 0 },
{ q: "'quit' and '_____' are synonyms.", qFa: 'quit و give up مترادف‌اند.', options: ['give up', 'live', 'start', 'exist'], correct: 0 },
{ q: 'We did not have _____ visitors this week.', qFa: 'این هفته بازدیدکننده زیادی نداشتیم.', options: ['many', 'much', 'a little', 'little'], correct: 0 },
{ q: 'China _____ 18% of the world\'s population.', qFa: 'چین ۱۸٪ جمعیت دنیا را تشکیل می‌دهد.', options: ['makes up', 'gives up', 'grows up', 'wakes up'], correct: 0 }
]
},
{
num: 2,
title: 'A Healthy Lifestyle',
titleFa: 'سبک زندگی سالم',
function: 'A Healthy Lifestyle',
facts: [
{ en: 'People with higher education usually live longer.', fa: 'افراد با تحصیلات بالاتر معمولاً عمر طولانی‌تری دارند.' },
{ en: 'Our health improves when we visit our friends and family members.', fa: 'وقتی به دیدن دوستان و اعضای خانواده می‌رویم، سلامتی‌مان بهبود می‌یابد.' },
{ en: 'Sitting a lot increases health risks.', fa: 'زیاد نشستن خطرات سلامتی را افزایش می‌دهد.' },
{ en: 'Laughter is the best medicine for your health.', fa: 'خنده بهترین دارو برای سلامتی شماست.' }
],
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'A',
instruction: 'A. Look at the people in the pictures. Check if what they are doing is good for their health. Then match the pictures with the words and complete the sentences.',
instructionFa: 'به افراد در تصاویر نگاه کن. مشخص کن کارشان برای سلامتی خوب است یا نه. سپس جمله‌ها را با کلمات کامل کن.',
type: 'fill-bank',
wordBank: ['worked', 'jog', 'hangs out', 'eating', 'surfing', 'climbed'],
sentences: [
{ text: "Behzad likes _____ junk food when he's watching TV.", answer: 'eating' },
{ text: 'Reza is _____ the net.', answer: 'surfing' },
{ text: 'I go out and _____ every morning at 6.', answer: 'jog' },
{ text: 'Mahdi _____ with his friends on Fridays.', answer: 'hangs out' },
{ text: 'They _____ Mount Damavand last year.', answer: 'climbed' }
]
},
{
label: 'B',
instruction: 'B. In the pyramid below circle the food you eat each day. Do you think you have a healthy diet? How do you know that?',
instructionFa: 'در هرم زیر، غذاهایی که هر روز می‌خوری را علامت بزن. فکر می‌کنی رژیم سالمی داری؟',
type: 'pyramid',
levels: [
{ label: 'کم مصرف کن', width: 35, items: ['oil', 'candy'] },
{ label: 'پروتئین و لبنیات', width: 60, items: ['egg', 'milk', 'meat', 'cheese', 'fish', 'ice-cream', 'chicken'] },
{ label: 'میوه و سبزیجات', width: 80, items: ['apple', 'tomato', 'orange', 'carrot', 'banana', 'onion', 'quince'] },
{ label: 'پایه هرم', width: 100, items: ['rice', 'bread', 'spaghetti'] }
]
},
{
label: 'C',
instruction: 'C. Read the following sentences and use adverbs of frequency (never, sometimes, often, usually, always) to show how often you do them. Compare your answers with your classmates\'.',
instructionFa: 'با قیدهای تکرار (never, sometimes, often, usually, always) بنویس هر کار را چقدر انجام می‌دهی.',
type: 'fill-bank',
wordBank: ['never', 'sometimes', 'often', 'usually', 'always'],
sentences: [
{ text: 'I _____ work on my computer.' },
{ text: 'I _____ watch TV in the afternoon.' },
{ text: 'I _____ go out and play with my friends.' },
{ text: 'I _____ eat fast food.' },
{ text: 'I _____ walk to school.' }
]
}
]
},
conversation: {
subtitle: 'Stop Being a Couch Potato!',
subtitleFa: 'دیگه تنبلی بسه!',
desc: 'سینا و بهزاد دوستان قدیمی‌اند. حدود سه ماه است همدیگر را ندیده‌اند. بهزاد به سینا زنگ زده است.',
newWordsHint: ['rarely', 'couch potato', 'gain weight', 'depressed', 'You won!'],
lines: [
{ speaker: 'Behzad', role: 'teacher', en: "Hi Sina. How is it going? I haven't seen you since Norooz.", fa: 'سلام سینا. چه خبر؟ از نوروز ندیدمت.' },
{ speaker: 'Sina', role: 'student', en: 'Hi Behzad. Thanks for calling. I am home most of the time. I do different things like surfing the net and playing computer games.', fa: 'سلام بهزاد. ممنون که زنگ زدی. بیشتر وقت‌ها خونه‌ام. کارهای مختلفی می‌کنم مثل وب‌گردی و بازی کامپیوتری.' },
{ speaker: 'Behzad', role: 'teacher', en: 'How about your free time? Going out, jogging, playing football...?', fa: 'وقت آزادت چی؟ بیرون رفتن، دویدن، فوتبال...؟' },
{ speaker: 'Sina', role: 'student', en: 'Nope. I rarely go out and hang out with my friends.', fa: 'نه. به‌ندرت بیرون می‌رم و با دوستام وقت می‌گذرونم.' },
{ speaker: 'Behzad', role: 'teacher', en: 'I see. Reza and I are going to Darband for climbing and walking this Thursday. We really like to see you. Will you come with us?', fa: 'که این‌طور. من و رضا پنجشنبه می‌ریم دربند برای کوهنوردی و پیاده‌روی. خیلی دوست داریم ببینیمت. باهامون میای؟' },
{ speaker: 'Sina', role: 'student', en: "What?! Oh, no, I haven't been there for a long time. I prefer to stay home and watch my movies on the weekend. I've bought lots of things to eat, too.", fa: 'چی؟! اوه نه، خیلی وقته اونجا نرفتم. ترجیح می‌دم آخر هفته خونه بمونم و فیلم‌هامو ببینم. کلی خوراکی هم خریدم.' },
{ speaker: 'Behzad', role: 'teacher', en: "Come on! Stop being a couch potato! I guess you haven't exercised for a long time. I think you are a bit fat now.", fa: 'بی‌خیال! دیگه تنبلی بسه! حدس می‌زنم خیلی وقته ورزش نکردی. فکر کنم الان یه‌کم چاق شدی.' },
{ speaker: 'Sina', role: 'student', en: "Um… actually, you're right. I've gained five kilos in three months. I really do not like to move!", fa: 'اوم... راستش حق با توئه. تو سه ماه پنج کیلو وزن اضافه کردم. واقعاً دوست ندارم تکون بخورم!' },
{ speaker: 'Behzad', role: 'teacher', en: "See? I told you. Working with computers for a long time makes people sick and depressed. I've read about this somewhere.", fa: 'دیدی؟ بهت گفتم. کار طولانی با کامپیوتر آدم رو مریض و افسرده می‌کنه. یه‌جایی درباره‌ش خوندم.' },
{ speaker: 'Sina', role: 'student', en: 'All right. You won!… When and where should we meet?', fa: 'باشه. تو بردی!... کِی و کجا قرار بذاریم؟' }
],
questions: [
{ q: 'What does Sina do at home?', fa: 'سینا در خانه چه کار می‌کند؟' },
{ q: 'Is Sina a sportsperson?', fa: 'سینا اهل ورزش است؟' },
{ q: 'What is your favorite sport?', fa: 'ورزش مورد علاقه‌ی تو چیست؟' }
]
},
newWords: {
lookRead: [
{ en: 'Eating {vegetables} is an important part of a healthy {diet}.', fa: 'خوردن {سبزیجات} بخش مهمی از یک {رژیم} سالم است.', image: 'nw-vegetables.jpg' },
{ en: "The doctor is listening to my grandfather's {heartbeat}.", fa: 'دکتر به {ضربان قلب} پدربزرگم گوش می‌دهد.', image: 'nw-heartbeat.jpg' },
{ en: 'My uncle has high {blood pressure}.', fa: 'عمویم {فشار خون} بالا دارد.', image: 'nw-bloodpressure.jpg' },
{ en: 'My sister {measures} herself every month.', fa: 'خواهرم هر ماه خودش را {اندازه می‌گیرد}.', image: 'nw-measure.jpg' },
{ en: 'Our neighbor had a {heart attack} yesterday.', fa: 'همسایه‌مان دیروز {حمله قلبی} داشت.', image: 'nw-heartattack.jpg' },
{ en: 'One {serving} of rice is not enough for them.', fa: 'یک {پرس} برنج برایشان کافی نیست.', image: 'nw-serving.jpg' },
{ en: 'Smoking is {harmful} to everyone.', fa: 'سیگار برای همه {مضر} است.', image: 'nw-smoking.jpg' },
{ en: 'Arash has a bad eating {habit}.', fa: 'آرش {عادت} غذایی بدی دارد.', image: 'nw-habit.jpg' },
{ en: 'Today, {addiction} to technology is a big problem.', fa: 'امروزه {اعتیاد} به فناوری مشکل بزرگی است.', image: 'nw-addiction.jpg' }
],
definitions: [
{ word: 'physical', def: 'relating to the body', fa: 'جسمی / فیزیکی', example: 'Swimming is a {physical} sport.' },
{ word: 'calm', def: 'without worry', fa: 'آرام', example: 'My teacher has a very {calm} manner.' },
{ word: 'balanced', def: 'with all parts existing in the correct amounts', fa: 'متعادل', example: 'A {balanced} diet contains lots of fruits and green vegetables.' },
{ word: 'recent', def: 'happening or starting a short time ago', fa: 'اخیر', example: 'The price of bananas has increased in {recent} weeks.' },
{ word: 'emotional', def: 'relating to the emotions', fa: 'احساسی / روحی', example: 'Her doctor said the problem was more {emotional} than physical.' },
{ word: 'prevent', def: 'to stop something from happening', fa: 'پیشگیری کردن', example: 'Daily exercise can {prevent} diseases.' },
{ word: 'relationship', def: 'the way in which two or more people feel and behave towards each other', fa: 'رابطه', example: 'She has a very good {relationship} with her aunt.' }
]
},
reading: {
passageTitle: 'Having a Healthier and Longer Life',
passageTitleFa: 'داشتن زندگی سالم‌تر و طولانی‌تر',
strategy: {
title: 'Skimming',
titleFa: 'مرور اجمالی',
desc: "You can skim a passage to identify the topic and understand the writer's main idea. Skimming a passage before you fully read it can help you understand it better.",
steps: ['Read the title.', 'Look at photos.', 'Read the first and the last lines of each paragraph.', "Read quickly. Don't read every word. Details are not important.", 'Find and write the main idea.'],
descFa: 'برای یافتن موضوع: بپرس «متن درباره چیست؟» — برای یافتن ایده اصلی: بپرس «مهم‌ترین حرف نویسنده درباره موضوع چیست؟»'
},
paragraphs: [
{ en: 'Have you ever thought of a healthy lifestyle to live longer? People can do many things to have a healthier life. Most people have a special diet or do lots of exercise; however, without a careful plan they may hurt themselves.', fa: 'آیا تا به حال به سبک زندگی سالم برای عمر طولانی‌تر فکر کرده‌ای؟ مردم می‌توانند کارهای زیادی برای زندگی سالم‌تر انجام دهند. بیشتر مردم رژیم خاصی دارند یا زیاد ورزش می‌کنند؛ اما بدون برنامه‌ی دقیق ممکن است به خودشان آسیب بزنند.' },
{ en: 'To have a healthier lifestyle, people need to do certain things. First they should check their general health. Measuring blood pressure and heartbeat is the most important thing to do. They also need to check their family health history. In this way, they understand if anyone in the family has had a special illness.', fa: 'برای سبک زندگی سالم‌تر، مردم باید کارهای مشخصی انجام دهند. اول باید سلامت عمومی‌شان را بررسی کنند. اندازه‌گیری فشار خون و ضربان قلب مهم‌ترین کار است. همچنین باید سابقه‌ی سلامت خانواده را بررسی کنند. این‌طور می‌فهمند آیا کسی در خانواده بیماری خاصی داشته است.' },
{ en: 'Another thing is paying attention to physical health. For example, eating healthy food helps people live longer and prevents diseases. Eating junk food makes people gain weight, and increases the risk of heart attack. Eating balanced servings of bread, vegetables, fruits, protein, and oil is necessary for everyone. Also, daily exercises improve people\'s health condition.', fa: 'مورد دیگر توجه به سلامت جسمی است. مثلاً خوردن غذای سالم به عمر طولانی‌تر کمک می‌کند و از بیماری‌ها پیشگیری می‌کند. خوردن هله‌هوله باعث اضافه‌وزن می‌شود و خطر حمله قلبی را افزایش می‌دهد. خوردن وعده‌های متعادل نان، سبزیجات، میوه، پروتئین و روغن برای همه ضروری است. ورزش روزانه هم وضعیت سلامت را بهبود می‌بخشد.' },
{ en: 'An effective way to enjoy a better lifestyle is having healthy relationships with others. Recent research has shown that a good social life decreases the risk of death. Sadly, some people do not visit their relatives very often these days. They are really busy with their work and usually use technology to communicate.', fa: 'یک راه مؤثر برای سبک زندگی بهتر، داشتن روابط سالم با دیگران است. تحقیقات اخیر نشان داده زندگی اجتماعی خوب خطر مرگ را کاهش می‌دهد. متأسفانه برخی این روزها زیاد به اقوامشان سر نمی‌زنند. خیلی درگیر کارند و معمولاً با فناوری ارتباط برقرار می‌کنند.' },
{ en: "Bad habits and addiction can be harmful to health. One day of smoking can take around 5 hours away from the smoker's life. Addiction to technology such as using computers for a long time is also dangerous.", fa: 'عادت‌های بد و اعتیاد می‌توانند برای سلامتی مضر باشند. یک روز سیگار کشیدن حدود ۵ ساعت از عمر فرد سیگاری کم می‌کند. اعتیاد به فناوری مثل کار طولانی با کامپیوتر هم خطرناک است.' },
{ en: 'Above all, the most important thing to enjoy a good life is having emotional health. Praying decreases stress and gives people a calm and balanced life. People with this lifestyle have had a better life.', fa: 'بالاتر از همه، مهم‌ترین چیز برای زندگی خوب، سلامت روحی است. نیایش استرس را کاهش می‌دهد و زندگی آرام و متعادلی به انسان می‌دهد. افرادی با این سبک زندگی، زندگی بهتری داشته‌اند.' },
{ en: 'There are many other things people can do to live healthier and longer. The key point, however, is having a plan for the way they want to live and take care of their physical and emotional health.', fa: 'کارهای زیاد دیگری هم برای زندگی سالم‌تر و طولانی‌تر هست. اما نکته‌ی کلیدی، داشتن برنامه برای شیوه‌ی زندگی و مراقبت از سلامت جسمی و روحی است.' }
],
glossary: {
'lifestyle': 'سبک زندگی', 'diet': 'رژیم غذایی', 'careful plan': 'برنامه دقیق', 'general health': 'سلامت عمومی',
'blood pressure': 'فشار خون', 'heartbeat': 'ضربان قلب', 'health history': 'سابقه سلامت', 'illness': 'بیماری',
'physical': 'جسمی', 'prevents': 'پیشگیری می‌کند', 'junk food': 'هله‌هوله', 'gain weight': 'اضافه‌وزن پیدا کردن',
'heart attack': 'حمله قلبی', 'balanced': 'متعادل', 'servings': 'وعده‌ها', 'improve': 'بهبود بخشیدن',
'relationships': 'روابط', 'Recent research': 'تحقیقات اخیر', 'decreases': 'کاهش می‌دهد', 'relatives': 'اقوام',
'communicate': 'ارتباط برقرار کردن', 'habits': 'عادت‌ها', 'addiction': 'اعتیاد', 'harmful': 'مضر',
'emotional': 'روحی', 'Praying': 'نیایش', 'stress': 'استرس', 'calm': 'آرام'
},
comprehension: [
{
type: 'paragraph-match',
title: 'A. Read the following sentences. Find each idea in the Reading and write the number of the paragraph that discusses it.',
items: [
{ statement: 'Having a healthy relationship with others makes our lives better.', answer: '4' },
{ statement: 'Addiction is a harmful habit.', answer: '5' },
{ statement: 'Paying attention to our food is necessary for our physical health.', answer: '3' }
]
},
{
type: 'choose',
title: 'B. Skim the Reading. Circle the main idea.',
items: [
{ q: 'What is the main idea of the passage?', options: ['Smoking is harmful to health.', 'Having a healthy and long life needs a careful plan.', 'Praying gives people a healthy life.'], correct: 1 }
]
},
{
type: 'scan',
title: 'C. Scan the Reading to find the following information.',
items: [
{ q: 'What increases the risk of heart attack?', sampleAnswer: 'Eating junk food.' },
{ q: 'How can we check our general health?', sampleAnswer: 'By measuring blood pressure and heartbeat.' },
{ q: 'What is the most important factor to have a healthier life?', sampleAnswer: 'Having emotional health.' }
]
}
]
},
vocabDev: {
title: 'Vocabulary Development — Prefixes & Suffixes',
titleFa: 'واژه‌سازی — پیشوندها و پسوندها',
blocks: [
{
type: 'affix-table',
title: 'Prefixes (پیشوندها)',
intro: 'A prefix is a letter or a group of letters that comes at the beginning of a word. Each prefix has a meaning.',
introFa: 'پیشوند، حرف یا حروفی است که به ابتدای کلمه می‌آید و معنی دارد.',
headers: ['Prefix', 'Meaning', 'Example'],
rows: [
['re-', 'again', 'rewrite: write again'],
['un-', 'not', 'unimportant: not important'],
['im-', 'not', 'impossible: not possible'],
['in-', 'not', 'incorrect: not correct'],
['dis-', 'not / opposite of', 'dislike: not like'],
['mid-', 'middle', 'midday: the middle of the day']
]
},
{
type: 'affix-table',
title: 'Suffixes (پسوندها)',
intro: 'A suffix is a letter or a group of letters added to the end of a word to make a different word.',
introFa: 'پسوند به انتهای کلمه می‌چسبد و کلمه‌ی جدیدی می‌سازد (اسم‌ساز، صفت‌ساز، قیدساز).',
headers: ['Suffix', 'Function', 'Example'],
rows: [
['-er / -or', 'noun maker', 'write → writer · translate → translator'],
['-ness', 'noun maker', 'happy → happiness'],
['-ion / -tion / -sion', 'noun maker', 'create → creation'],
['-ful', 'adjective maker', 'use → useful'],
['-ous', 'adjective maker', 'danger → dangerous'],
['-y', 'adjective maker', 'rain → rainy'],
['-al', 'adjective maker', 'nature → natural'],
['-ly', 'adverb maker', 'slow → slowly']
]
},
{
type: 'circle-words',
title: 'A. Read the following words. Circle the prefixes.',
target: 'پیشوند',
words: ['disagree', 'midterm', 'uncle', 'unsafe', 'read', 'image', 'reality', 'incomplete', 'disorder', 'unfortunately'],
answers: ['disagree', 'midterm', 'unsafe', 'incomplete', 'disorder', 'unfortunately']
},
{
type: 'circle-words',
title: 'B. Read the following words. Circle the suffixes.',
target: 'پسوند',
words: ['scanner', 'powerful', 'homeless', 'paper', 'replay', 'invitation', 'cultural', 'famous', 'family'],
answers: ['scanner', 'powerful', 'homeless', 'invitation', 'cultural', 'famous']
},
{
type: 'fill-table',
title: "C. Find five suffixes in paragraph 4 of the Reading.",
items: [
{ text: 'پسوند ۱: _____', answer: 'effective (-ive)' },
{ text: 'پسوند ۲: _____', answer: 'healthy (-y)' },
{ text: 'پسوند ۳: _____', answer: 'relationships (-ship)' },
{ text: 'پسوند ۴: _____', answer: 'sadly (-ly)' },
{ text: 'پسوند ۵: _____', answer: 'usually / really (-ly)' }
]
},
{
type: 'fill-table',
title: 'D. Look at the nouns. Their adjective forms are given in the Reading. Find them.',
items: [
{ text: 'care → _____ (par. 1)', answer: 'careful' },
{ text: 'health → _____ (par. 3)', answer: 'healthy' },
{ text: 'danger → _____ (par. 5)', answer: 'dangerous' },
{ text: 'emotion → _____ (par. 6)', answer: 'emotional' }
]
}
]
},
grammar: {
title: 'Grammar — Present Perfect',
titleFa: 'دستور زبان — ماضی نقلی (حال کامل)',
noteText: 'این فعل در زمان <strong>ماضی نقلی (Present Perfect)</strong> است: <code>have/has + قسمت سوم فعل</code>.',
noteMap: {
"has not": "<strong>منفی ماضی نقلی</strong>: <code>has not (hasn't) + قسمت سوم فعل</code> — با he/she/it.",
"have not": "<strong>منفی ماضی نقلی</strong>: <code>have not (haven't) + قسمت سوم فعل</code> — با I/you/we/they.",
"hasn't": "<strong>hasn't</strong> = has not — منفی ماضی نقلی (سوم‌شخص مفرد).",
"haven't": "<strong>haven't</strong> = have not — منفی ماضی نقلی.",
"has influenced": "<strong>ماضی نقلی</strong>: <code>has + influenced</code> — تأثیر گذاشته است (کاری که در گذشته شروع شده و اثرش تا حالا ادامه دارد).",
"has changed": "<strong>ماضی نقلی</strong>: <code>has + changed</code> — تغییر داده است.",
"has helped": "<strong>ماضی نقلی</strong>: <code>has + helped</code> — کمک کرده است.",
"have saved": "<strong>ماضی نقلی</strong>: <code>have + saved</code> — نجات داده‌اند.",
"have cured": "<strong>ماضی نقلی</strong>: <code>have + cured</code> — درمان کرده‌اند.",
"have chosen": "<strong>ماضی نقلی</strong> با فعل بی‌قاعده: <code>choose → chosen</code>.",
"have quit": "<strong>ماضی نقلی</strong> با فعل بی‌قاعده: <code>quit → quit</code> — ترک کرده‌اند.",
"have found": "<strong>ماضی نقلی</strong> با فعل بی‌قاعده: <code>find → found</code>.",
"have let": "<strong>ماضی نقلی</strong> با فعل بی‌قاعده: <code>let → let</code>.",
"has": "<strong>has</strong> — فعل کمکی ماضی نقلی با <code>he/she/it</code> + قسمت سوم فعل.",
"have": "<strong>have</strong> — فعل کمکی ماضی نقلی با <code>I/you/we/they</code> + قسمت سوم فعل.",
"since": "<strong>since</strong> + نقطه‌ی شروع (since 2008, since Norooz) — «از ... تاکنون». با ماضی نقلی.",
"for": "<strong>for</strong> + طول مدت (for 20 years, for months) — «به مدتِ ...». با ماضی نقلی.",
"yet": "<strong>yet</strong> — «هنوز» در جملات منفی و سؤالی ماضی نقلی، معمولاً آخر جمله.",
"ever": "<strong>ever</strong> — «تا به حال» در سؤالات ماضی نقلی: <code>Have you ever ...?</code>",
"Has": "<strong>سؤالی ماضی نقلی</strong>: <code>Has + فاعل (he/she/it) + قسمت سوم فعل؟</code>",
"Have": "<strong>سؤالی ماضی نقلی</strong>: <code>Have + فاعل + قسمت سوم فعل؟</code>"
},
readTexts: {
title: 'A. Read the following texts.',
texts: [
{ en: 'Technology {has influenced} the lives of people in this century. Working with computers and mobile phones {has changed} people\'s habits and lifestyles. Some people use their laptops and especially their mobile phones everywhere for no good reason. Some of them {have not} read a book for months. Some {have not} visited their relatives for a long time. Some even {have not} slept well or {have not} eaten properly for a long time. Some of these people {have quit} good habits like doing daily exercises or attending social events. They {have chosen} an unhealthy lifestyle. To live longer, they need to rethink the way they live, work, and use technology.', fa: 'فناوری در این قرن بر زندگی مردم تأثیر گذاشته است. کار با کامپیوتر و موبایل عادت‌ها و سبک زندگی مردم را تغییر داده است. برخی بدون دلیل خوبی همه‌جا از لپ‌تاپ و به‌ویژه موبایلشان استفاده می‌کنند. بعضی‌ها ماه‌هاست کتابی نخوانده‌اند. بعضی مدت‌هاست به اقوامشان سر نزده‌اند. بعضی حتی مدت‌ها خوب نخوابیده‌اند یا درست غذا نخورده‌اند. برخی از این افراد عادت‌های خوبی مثل ورزش روزانه یا شرکت در رویدادهای اجتماعی را کنار گذاشته‌اند. آن‌ها سبک زندگی ناسالمی انتخاب کرده‌اند. برای عمر طولانی‌تر، باید در شیوه‌ی زندگی، کار و استفاده از فناوری بازنگری کنند.' },
{ en: 'Technology {has helped} the researchers and scientists of our time. New medicines and medical inventions {have saved} the lives of many people. They {have let} people have a happy life and live longer. New medicines such as anti-cancer drugs and new antibiotics {have cured} many patients. Some technological inventions {have helped} doctors to check people\'s health condition. They {have found} keys to the secrets of the human body. New technologies {have helped} doctors to understand how diseases develop. They {have found} ways to fight and stop diseases in their early stages. Technology, as some people may think, is not a bad thing at all. The way we use technology, is important.', fa: 'فناوری به پژوهشگران و دانشمندان زمان ما کمک کرده است. داروهای جدید و اختراعات پزشکی جان بسیاری را نجات داده‌اند. به مردم اجازه داده‌اند زندگی شادی داشته باشند و طولانی‌تر زندگی کنند. داروهای جدید مثل داروهای ضدسرطان و آنتی‌بیوتیک‌های جدید بسیاری از بیماران را درمان کرده‌اند. برخی اختراعات فناورانه به پزشکان در بررسی وضعیت سلامت کمک کرده‌اند. آن‌ها کلید رازهای بدن انسان را یافته‌اند. فناوری‌های جدید به پزشکان کمک کرده‌اند بفهمند بیماری‌ها چگونه پیشرفت می‌کنند. راه‌هایی برای مبارزه و توقف بیماری‌ها در مراحل اولیه یافته‌اند. فناوری، برخلاف تصور برخی، اصلاً چیز بدی نیست. نحوه‌ی استفاده‌ی ما از آن مهم است.' }
]
},
explanation: [
'زمان <strong>ماضی نقلی (Present Perfect)</strong> برای کاری به کار می‌رود که در گذشته انجام شده ولی اثر یا ادامه‌اش به حال مربوط است.',
'ساختار: <code>have/has + قسمت سوم فعل (p.p.)</code>',
'<strong>has</strong> برای <code>he / she / it</code> و <strong>have</strong> برای <code>I / you / we / they</code>.',
'کلمات نشانه: <code>since</code> (از)، <code>for</code> (به مدت)، <code>yet</code> (هنوز)، <code>ever</code> (تا به حال)، <code>recently</code> (اخیراً).'
],
tablesTitle: 'B. Read the following examples.',
tables: [
{
title: 'Affirmative (مثبت)',
headers: ['Subject', 'have/has', 'p.p.', ''],
rows: [
['He / Samira', 'has', 'started', 'a business.'],
['I / You / Erfan and Ehsan / They', 'have', 'started', 'a business.']
],
examples: [
{ en: 'Amir {has written} a letter.', fa: 'امیر نامه‌ای نوشته است.' },
{ en: 'I {have watched} that movie.', fa: 'من آن فیلم را دیده‌ام.' }
]
},
{
title: 'Negative (منفی)',
headers: ['Subject', "has/have + not", 'p.p.', ''],
rows: [
['Behrooz / She', "has not (hasn't)", 'forgotten', 'the accident.'],
['I / You / We / My friends', "have not (haven't)", 'forgotten', 'the accident.']
],
examples: [
{ en: 'My mother {has not} made a cake.', fa: 'مادرم کیک نپخته است.' },
{ en: "The students {haven't} finished their homework.", fa: 'دانش‌آموزان تکالیفشان را تمام نکرده‌اند.' }
]
},
{
title: 'Interrogative (سؤالی)',
headers: ['Has/Have', 'Subject', 'p.p.', ''],
rows: [
['Has', 'he / Maral', 'worked', 'hard?'],
['Have', 'I / you / we / the farmers', 'worked', 'hard?']
],
examples: [
{ en: '{Have} you been to Paris?', fa: 'آیا به پاریس رفته‌ای؟' },
{ en: '{Has} Mr. Ahmadi produced that movie?', fa: 'آیا آقای احمدی آن فیلم را تهیه کرده است؟' }
]
},
{
title: 'since / for / yet / ever',
headers: ['کلمه', 'کاربرد', 'مثال'],
rows: [
['since', 'نقطه شروع', "I've known them since 2008."],
['for', 'طول مدت', "We've lived here for 20 years."],
['yet', 'هنوز (منفی/سؤالی)', "He hasn't got a job yet."],
['ever', 'تا به حال (سؤالی)', 'Have they ever traveled to Madrid?']
]
}
],
notes: [
"C. Tell your teacher how 'present perfect tense' is made.",
"D. Read the Conversation and underline all 'present perfect verbs'."
],
practice: {
title: 'E. Read the following paragraph and choose the best verb forms.',
instruction: 'داستان آتش‌نشان بازنشسته را بخوان و فعل درست را انتخاب کن.',
items: [
{ sentence: 'When I look back, I see that I _____ a very interesting life.', options: ['have had', 'have'], correct: 0 },
{ sentence: 'When I was a kid, I _____ to become a firefighter.', options: ['wanted', 'have wanted'], correct: 0 },
{ sentence: 'After university, I _____ the Fire Service.', options: ['joined', 'join'], correct: 0 },
{ sentence: 'I _____ there for 30 years.', options: ['have worked', 'work'], correct: 0 },
{ sentence: 'I _____ in many missions for the past 25 years.', options: ['have been', 'was'], correct: 0 },
{ sentence: "I don't remember how many lives I _____.", options: ['have saved', 'save'], correct: 0 },
{ sentence: 'One thing I know for sure: I _____ every minute of my life as a firefighter.', options: ['have enjoyed', 'enjoy'], correct: 0 }
]
},
friendWork: {
title: "G. Pair up and talk about the things you have and have not done. You may use 'since', 'for', 'yet', or 'ever'.",
partA: { instruction: 'مثال: I have studied lesson 4. / I haven\'t done my English homework yet.', items: ['I have ...', "I haven't ... yet", 'Have you ever ...?'] },
partB: { instruction: 'حالا با since و for جمله بساز.', items: ['... since last year', '... for two weeks'] }
},
goingTo: {
title: 'Phrasal Verbs (افعال دوکلمه‌ای)',
note: '<strong>فعل دوکلمه‌ای (Phrasal Verb)</strong>: فعل + حرف اضافه/قید که با هم معنی جدیدی می‌سازند. معنی را باید یکجا یاد گرفت.',
noteMap: {
"call back": "<strong>call back</strong> = بعداً دوباره زنگ زدن.",
"checked in": "<strong>check in</strong> = (در هتل/فرودگاه) پذیرش شدن، ورود را ثبت کردن.",
"get up": "<strong>get up</strong> = از خواب بلند شدن.",
"given up": "<strong>give up</strong> = ترک کردن، کنار گذاشتن.",
"grew up": "<strong>grow up</strong> = بزرگ شدن.",
"Hurry up": "<strong>hurry up</strong> = عجله کردن.",
"looked after": "<strong>look after</strong> = مراقبت کردن از.",
"Turn off": "<strong>turn off</strong> = خاموش کردن.",
"wakes up": "<strong>wake up</strong> = بیدار شدن."
},
readTitle: 'Read the following examples. Check the meaning of the phrasal verbs.',
examples: [
{ en: "Would you like to leave a message? No, I'll {call back} later.", fa: 'می‌خواهید پیغام بگذارید؟ نه، بعداً دوباره زنگ می‌زنم.' },
{ en: 'Have you {checked in}? Oh, yes. I am in my room now.', fa: 'پذیرش شده‌ای؟ بله، الان در اتاقم هستم.' },
{ en: 'When did you {get up}? Early in the morning.', fa: 'کِی بیدار شدی؟ صبح زود.' },
{ en: 'Has your father {given up} smoking? Yes, he knows smoking is harmful.', fa: 'پدرت سیگار را ترک کرده؟ بله، می‌داند سیگار مضر است.' },
{ en: 'Did she go to school in Karaj? No, she {grew up} in Lavasan.', fa: 'در کرج مدرسه رفت؟ نه، در لواسان بزرگ شد.' },
{ en: "{Hurry up}! We're late.", fa: 'عجله کن! دیرمان شده.' },
{ en: "Sara {looked after} us very well. She's an excellent cook.", fa: 'سارا خیلی خوب از ما مراقبت کرد. آشپز فوق‌العاده‌ای است.' },
{ en: "{Turn off} the washing machine. It's making too much noise.", fa: 'ماشین لباسشویی را خاموش کن. خیلی سروصدا می‌کند.' },
{ en: "James usually {wakes up} early. But today he's still asleep.", fa: 'جیمز معمولاً زود بیدار می‌شود. ولی امروز هنوز خواب است.' }
],
table: {
headers: ['Phrasal Verb', 'Meaning'],
rows: [
['call back', 'بعداً زنگ زدن'],
['check in', 'پذیرش شدن'],
['get up / wake up', 'بیدار شدن'],
['give up', 'ترک کردن'],
['grow up', 'بزرگ شدن'],
['hurry up', 'عجله کردن'],
['look after', 'مراقبت کردن'],
['turn off', 'خاموش کردن']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Talking about past experiences',
strategyTitleFa: 'راهبرد گفتاری — صحبت درباره تجربه‌های گذشته',
strategyDesc: "A. You may use 'present perfect tense' to ask and talk about past experiences.",
patterns: [
{ q: "Have you ever played the game 'Travel to Mars'?", a: 'Oh, yes. I have learned to play it recently.' },
{ q: 'Why don\'t you play it again?', a: "I have attended a Spanish class since last Monday. I haven't thought about that yet." }
],
patternsList: [
'Have you ever ……?',
'Yes, I have …… it once, last year, ….',
"No, I haven't. Maybe I try it later."
],
listenComplete: {
title: 'B. Listen to the following conversations and fill in the blanks.',
conversations: [
{ num: 1, items: ['Hamid is on a ..................... team.', 'He has quit the team to .....................'] },
{ num: 2, items: ['Farideh wants to .....................', 'Farideh has tried .....................'] }
]
},
pairWork: {
title: 'Pair up and ask your friends about the experiences they have (not) had.',
box1: { label: 'تجربه‌ها', verbs: ['watch Amir Kabir TV series', 'read poems of Hafez', 'play football', 'make a paper boat', 'travel to the South'] },
box2: { label: 'هنوز تجربه نکرده‌اند', verbs: ['play golf', 'climb Mount Everest', 'travel to the moon', 'take part in the Olympics'] }
}
},
pronunciation: {
title: 'Pronunciation — Stress in Short Sentences',
titleFa: 'تلفظ — تکیه در جملات کوتاه',
rule: 'In some situations, emergencies for example, all of the words are important. In that case, all words carry stress. (در موقعیت‌هایی مثل هشدار، همه‌ی کلمات مهم‌اند و همه تکیه می‌گیرند.)',
intonationGuide: {
rising: 'در دستورهای کوتاه و هشدارها، <strong>هر دو کلمه</strong> با تأکید و قدرت تلفظ می‌شوند: <strong>Watch out!</strong> — <strong>Sit down!</strong>'
},
examplesTitle: 'A. Listen to the following sentences. All of the words are stressed.',
examples: [
{ en: 'Watch out!', a: 'مراقب باش!' },
{ en: 'Come back!', a: 'برگرد!' },
{ en: 'Sit down!', a: 'بنشین!' },
{ en: 'Go away!', a: 'برو!' },
{ en: 'Take care!', a: 'مواظب خودت باش!' }
],
punctuation: {
title: 'B. Say the following sentences with appropriate stress patterns.',
text: '1. Get away!   2. Turn round!   3. Wake up!   4. Hurry up!   5. Take care!',
answer: 'همه‌ی این دستورهای کوتاه را با تکیه روی هر دو کلمه بگو: GET AWAY! — TURN ROUND! — WAKE UP! — HURRY UP! — TAKE CARE!'
}
},
writing: {
title: 'Writing — Gerunds',
titleFa: 'نوشتن — اسم مصدر',
sections: [
{
type: 'lesson-noun',
title: 'Gerund',
intro: 'A gerund is a verb + -ing that works like a noun. A gerund can be a subject or an object in a sentence.',
introFa: 'اسم مصدر = فعل + ing که مثل اسم عمل می‌کند. می‌تواند فاعل یا مفعول جمله باشد.',
categories: [
{ label: 'As Subject (فاعل)', examples: ['Swimming is useful for everyone.', 'Reading helps us learn English.', 'Walking makes me happy.'] },
{ label: 'As Object (مفعول)', examples: ['Vahid enjoys cycling.', 'Maryam loves reading.'] },
{ label: 'Singular verb (فعل مفرد)', examples: ['Walking makes me happy.', 'Learning a language takes time.'] },
{ label: 'Two gerunds → plural verb', examples: ['Cycling and jogging are my favorite sports.'] }
]
},
{
type: 'plural-task',
title: 'A. Change the following verbs into gerunds. Then complete the sentences. (write, eat, travel, do)',
wordBank: ['write', 'eat', 'travel', 'do'],
items: [
{ sentence: '1. _____ fast food makes you fat.', words: ['eat'], answers: ['Eating'] },
{ sentence: '2. _____ by train is cheap and safe.', words: ['travel'], answers: ['Traveling'] },
{ sentence: '3. _____ English well is one of my goals.', words: ['write'], answers: ['Writing'] },
{ sentence: '4. _____ regular exercise is useful for everyone.', words: ['do'], answers: ['Doing'] }
]
},
{
type: 'lesson-markers',
title: 'Hint — NO + -ing / verbs followed by gerunds / go + gerund',
intro: "In notices, NO before -ing means it is forbidden: NO FISHING = 'Fishing is forbidden'.",
markers: [
{ marker: 'NO + -ing', examples: 'NO FISHING / NO SMOKING / NO PARKING' },
{ marker: 'verbs + gerund', examples: 'enjoy, finish, give up, imagine, keep on, practice, quit, love → I enjoy swimming.' },
{ marker: 'go + gerund', examples: "Let's go shopping. / go fishing / go skating / go sailing / go skiing / go jogging / go swimming / go running" },
{ marker: 'preposition + gerund', examples: 'good at speaking / interested in playing / think about living / plans for doing / tired of washing' }
]
},
{
type: 'plural-task',
title: 'B. Change the following verbs into gerunds. Then complete the sentences. (play, walk, fish, do)',
wordBank: ['play', 'walk', 'fish', 'do'],
items: [
{ sentence: '1. My sister enjoys _____ in the rain.', words: ['walk'], answers: ['walking'] },
{ sentence: '2. Mehran loves _____ volleyball.', words: ['play'], answers: ['playing'] },
{ sentence: '3. My dad goes _____ on Fridays.', words: ['fish'], answers: ['fishing'] },
{ sentence: '4. Has she finished _____ her homework?', words: ['do'], answers: ['doing'] }
]
},
{
type: 'circle-nouns-task',
title: 'D. Read the following sentences. Tap the word that is a gerund. (مواظب باش با حال استمراری اشتباه نشود!)',
items: [
{ sentence: 'They were watching a football match when I called.', nouns: [] },
{ sentence: 'Saeed is cycling in the park right now.', nouns: [] },
{ sentence: 'Farzaneh enjoys watching scientific movies.', nouns: ['watching'] },
{ sentence: 'My favorite sport is hiking.', nouns: ['hiking'] }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a report and complete the sentences.',
tasks: [
'Some people have three bad habits. They are .....................',
'By making just a few changes in their lifestyle, people .....................',
"Listen again and list all 'present perfect tenses'."
]
},
reading: {
title: 'B. Now read the rest.',
text: "People's busy lifestyle in big cities has created many problems for their health. Rushing to and from school and work has made it hard for everyone to be physically active. Many people do not have time to cook or prepare healthy food. They eat unhealthy snacks and junk food. This type of diet has changed people's taste and many young people now prefer fast food to homemade dishes. Watching TV and working with technology for long hours have also risked people's health. They have increased the risk of heart diseases and sleep disorders. So the things that seem so simple now can cause serious problems in the future.",
fa: 'سبک زندگی پرمشغله‌ی مردم در شهرهای بزرگ مشکلات زیادی برای سلامتی‌شان ایجاد کرده است. عجله برای رفت‌وآمد به مدرسه و محل کار، فعالیت بدنی را برای همه سخت کرده است. بسیاری وقت آشپزی یا تهیه‌ی غذای سالم ندارند. تنقلات ناسالم و هله‌هوله می‌خورند. این نوع رژیم ذائقه‌ی مردم را تغییر داده و حالا بسیاری از جوانان فست‌فود را به غذای خانگی ترجیح می‌دهند. تماشای تلویزیون و کار طولانی با فناوری هم سلامت مردم را به خطر انداخته است. خطر بیماری‌های قلبی و اختلالات خواب را افزایش داده‌اند. پس چیزهایی که حالا خیلی ساده به‌نظر می‌رسند می‌توانند در آینده مشکلات جدی ایجاد کنند.',
glossary: {
'busy lifestyle': 'سبک زندگی پرمشغله', 'Rushing': 'عجله کردن', 'physically active': 'فعال از نظر بدنی',
'snacks': 'تنقلات', 'taste': 'ذائقه', 'homemade dishes': 'غذاهای خانگی', 'risked': 'به خطر انداخته',
'heart diseases': 'بیماری‌های قلبی', 'sleep disorders': 'اختلالات خواب', 'serious': 'جدی'
},
tasks: [
'3. Skim the text and suggest a title for it.',
"4. Scan the text and underline all 'gerunds'."
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer.',
questions: [
'Name three things people have to change in their lifestyle.',
'Is it really easy to change our lifestyle?',
'Why is too much working with technology dangerous?'
]
}
},
workbook: [
{
part: 'Get Ready',
section: 'Warm-up',
sectionFa: 'دست‌گرمی',
tasks: [
{
type: 'pron-practice',
title: 'Match the sentences with the pictures.',
items: [
'Eat balanced proportion of food.',
'Drink enough water a day.',
'Quit bad habits.',
'Eat dinner before 7:30.',
'Sleep enough.'
]
},
{
type: 'short-answer',
title: 'A & B. Write the names.',
questions: [
{ q: 'A. Write the name of five healthy foods.', sampleAnswer: 'apple, milk, fish, carrot, bread, ...' },
{ q: 'B. Write the name of five sports.', sampleAnswer: 'football, swimming, jogging, cycling, volleyball, ...' }
]
}
]
},
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'Technology and Lifestyle',
passage: "The modern lifestyle has had both positive and negative effects on people's lives. Modern technologies have enabled us to have easy access to information, become more creative, experience fast communication, travel easier, and have a more comfortable life. Have you ever imagined a world without the Internet, tablets, mobile phones, airplanes, and vacuum cleaners? Most people cannot do that, as technology is the miracle of our time. But using new technologies has changed people's lifestyle in a harmful way in this century as well. Some technologies are dangerous to our health and can harm our body. Using mobile phones or surfing the Internet for long hours can increase people's blood pressure and cause sleep problems. Playing video games for long hours makes people nervous and harm their heart and nervous system. Listening to music by headsets can be harmful to one's hearing and even brain. Using technology in a wrong way has created bad habits and new types of addictions. It is not strange now to call someone an Internet or mobile addict. Technology addicts are people with serious problems to control themselves to use various kinds of technology, in particular the Internet, smartphones, tablets and laptops. Technology addicts do not like to socialize with people; instead, they prefer to be alone and spend lots of their time working with their devices. This makes them depressed and impatient. Specialists have found different ways to cure technology addicts. To avoid this type of addiction, people should spend more time with their friends and family members, do daily exercise, and limit the time of working with technologies. They also need to enjoy nature more and have regular plans to travel.",
passageFa: 'سبک زندگی مدرن هم اثرات مثبت و هم منفی بر زندگی مردم داشته است. فناوری‌های مدرن به ما امکان دسترسی آسان به اطلاعات، خلاقیت بیشتر، ارتباط سریع، سفر آسان‌تر و زندگی راحت‌تر داده‌اند. آیا تا به حال دنیایی بدون اینترنت، تبلت، موبایل، هواپیما و جاروبرقی را تصور کرده‌ای؟ بیشتر مردم نمی‌توانند، چون فناوری معجزه‌ی زمان ماست. اما استفاده از فناوری‌های جدید در این قرن سبک زندگی مردم را به شکلی مضر هم تغییر داده است. برخی فناوری‌ها برای سلامتی خطرناک‌اند و می‌توانند به بدن آسیب بزنند. استفاده‌ی طولانی از موبایل یا وب‌گردی می‌تواند فشار خون را بالا ببرد و مشکلات خواب ایجاد کند. بازی طولانی ویدیویی آدم را عصبی می‌کند و به قلب و سیستم عصبی آسیب می‌زند. گوش دادن به موسیقی با هدست می‌تواند برای شنوایی و حتی مغز مضر باشد. استفاده‌ی نادرست از فناوری عادت‌های بد و انواع جدید اعتیاد را ایجاد کرده است. حالا عجیب نیست کسی را معتاد اینترنت یا موبایل بنامیم. معتادان فناوری افرادی‌اند که در کنترل خود برای استفاده از انواع فناوری، به‌ویژه اینترنت، گوشی هوشمند، تبلت و لپ‌تاپ مشکل جدی دارند. معتادان فناوری دوست ندارند با مردم معاشرت کنند؛ ترجیح می‌دهند تنها باشند و زمان زیادی را با دستگاه‌هایشان بگذرانند. این آن‌ها را افسرده و بی‌حوصله می‌کند. متخصصان راه‌های مختلفی برای درمان معتادان فناوری یافته‌اند. برای پرهیز از این نوع اعتیاد، مردم باید وقت بیشتری با دوستان و خانواده بگذرانند، ورزش روزانه کنند و زمان کار با فناوری را محدود کنند. همچنین باید بیشتر از طبیعت لذت ببرند و برنامه‌های منظم سفر داشته باشند.',
glossary: {
'positive': 'مثبت', 'negative': 'منفی', 'enabled': 'امکان داده‌اند', 'access': 'دسترسی',
'creative': 'خلاق', 'communication': 'ارتباط', 'miracle': 'معجزه', 'harmful': 'مضر',
'blood pressure': 'فشار خون', 'nervous system': 'سیستم عصبی', 'hearing': 'شنوایی',
'addictions': 'اعتیادها', 'addict': 'معتاد', 'socialize': 'معاشرت کردن', 'devices': 'دستگاه‌ها',
'depressed': 'افسرده', 'impatient': 'بی‌حوصله', 'Specialists': 'متخصصان', 'cure': 'درمان کردن',
'avoid': 'پرهیز کردن', 'limit': 'محدود کردن'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Technology has only negative effects.', answer: false },
{ q: 'Listening to music is harmful.', answer: false },
{ q: 'Technology may cause depression.', answer: true }
]
},
{
type: 'short-answer',
title: 'B. Answer the following questions.',
questions: [
{ q: 'Who is a technology addict?', sampleAnswer: 'A person with serious problems to control using technology.' },
{ q: 'Are there any cures for technology addicts?', sampleAnswer: 'Yes: spending time with family, daily exercise, limiting technology time, enjoying nature.' },
{ q: 'What types of technologies do you use?', sampleAnswer: '(your own answer)' }
]
},
{
type: 'short-answer',
title: 'C & D. Main ideas and topic.',
questions: [
{ q: 'C. Write the main ideas of paragraphs 2 and 3.', sampleAnswer: 'P2: Wrong use of technology creates addiction. P3: There are ways to cure technology addiction.' },
{ q: 'D. Skim the text and write a topic for it.', sampleAnswer: 'The effects of technology on lifestyle / Technology addiction.' }
]
}
]
},
{
part: 'Part II',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'match-columns',
title: 'A. Match the definitions with the words.',
pairs: [
{ a: 'relating to the emotions', b: 'emotional', letter: 'd' },
{ a: 'without worry', b: 'calm', letter: 'b' },
{ a: 'with all parts existing in the correct amounts', b: 'balanced', letter: 'c' },
{ a: 'happening or starting a short time ago', b: 'recently', letter: 'e' },
{ a: 'relating to the body', b: 'physical', letter: 'a' }
]
},
{
type: 'odd-one-out',
title: 'B. Odd one out.',
items: [
{ options: ['create', 'increase', 'prevent', 'improve'], odd: 2 },
{ options: ['harmful', 'valuable', 'friendly', 'worthy'], odd: 0 },
{ options: ['percent', 'number', 'measure', 'society'], odd: 3 },
{ options: ['depression', 'health', 'diet', 'wellness'], odd: 0 },
{ options: ['always', 'usually', 'often', 'rarely'], odd: 3 }
]
},
{
type: 'match-columns',
title: 'C. Match the columns to make new words.',
pairs: [
{ a: 're', b: 'do', letter: 'e' },
{ a: 'un', b: 'happy', letter: 'd' },
{ a: 'im', b: 'possible', letter: 'a' },
{ a: 'in', b: 'direct', letter: 'b' },
{ a: 'dis', b: 'able', letter: 'f' },
{ a: 'mid', b: 'night', letter: 'c' }
]
},
{
type: 'group-words',
title: 'D. Put the phrases under the correct columns.',
words: ['checking general health', 'eating junk food', 'smoking', 'hanging out with friends', 'praying', 'doing daily exercise', 'playing too much video games', 'gaining weight'],
groups: ['Healthy lifestyle', 'Unhealthy lifestyle']
},
{
type: 'fill-words',
title: 'E. Fill in the blanks with the given words.',
wordBank: ['depressed', 'diet', 'serving', 'heart attack', 'pressure'],
items: [
{ sentence: '1. You need to have vitamins and minerals in your _____.', answer: 'diet' },
{ sentence: '2. The dish has about 250 calories per _____.', answer: 'serving' },
{ sentence: '3. The nurse will take your blood _____.', answer: 'pressure' },
{ sentence: '4. You almost gave me a _____ there!', answer: 'heart attack' },
{ sentence: '5. I was _____ at the thought of all the hard work ahead.', answer: 'depressed' }
]
},
{
type: 'fill-words',
title: 'F. Complete the following verbs with a noun.',
wordBank: ['weight', 'blood pressure', 'yourself', 'longer', 'health'],
items: [
{ sentence: '1. gain _____', answer: 'weight' },
{ sentence: '2. increase _____', answer: 'blood pressure' },
{ sentence: '3. measure _____', answer: 'yourself / blood pressure' },
{ sentence: '4. live _____', answer: 'longer' },
{ sentence: '5. check _____', answer: 'health / blood pressure' }
]
}
]
},
{
part: 'Part III',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'fill-going-to',
title: 'A. Fill in the blanks with the correct form of the verbs (present perfect).',
text: "1. Sheida [1] (finish) reading the book yet. 2. Have you ever [2] (read) that storybook? 3. The workers [3] (work) in this factory for 25 years. 4. Reza [4] (find) a job yet. 5. I [5] (go) to school since ten years ago.",
blanks: [
{ num: 1, answer: "hasn't finished" },
{ num: 2, answer: 'read' },
{ num: 3, answer: 'have worked' },
{ num: 4, answer: "hasn't found" },
{ num: 5, answer: 'have gone' }
]
},
{
type: 'short-answer',
title: "B. Look at Amir's list. Write what he has done (✓) and what he hasn't yet (✗).",
questions: [
{ q: 'Washing my bike (✗)', sampleAnswer: "He hasn't washed his bike yet." },
{ q: 'Calling Ahmad (✓)', sampleAnswer: 'Amir has called Ahmad.' },
{ q: 'Cleaning my room (✓)', sampleAnswer: 'He has cleaned his room.' },
{ q: 'Pressing my shirt (✓)', sampleAnswer: 'Amir has pressed his shirt.' },
{ q: 'Buying groceries (✗)', sampleAnswer: "He hasn't bought groceries yet." },
{ q: 'Doing math exercises (✗)', sampleAnswer: "He hasn't done his math exercises yet." }
]
},
{
type: 'short-answer',
title: 'C. Answer the following questions.',
questions: [
{ q: 'Have you ever traveled to Yazd?', sampleAnswer: "Yes, I have. / No, I haven't." },
{ q: 'Have you ever read Shahnameh?', sampleAnswer: "Yes, I have. / No, I haven't." },
{ q: 'Has your mother ever cooked any Indian food?', sampleAnswer: "Yes, she has. / No, she hasn't." },
{ q: 'Has your father ever been to Bushehr?', sampleAnswer: "Yes, he has. / No, he hasn't." }
]
},
{
type: 'picture-future',
title: "D. Look at the pictures and fill in the blanks with two-word verbs using 'present perfect tense'.",
items: [
{ hint: 'they / wake up — yet', image: 'wb-wakeup.jpg', answer: "They haven't woken up yet." },
{ hint: 'I / check in', image: 'wb-checkin.jpg', answer: 'I have checked in.' },
{ hint: 'he / turn off', image: 'wb-turnoff.jpg', answer: 'He has turned off the TV.' },
{ hint: 'my brother / get up — yet', image: 'wb-getup.jpg', answer: "My brother hasn't got up yet." }
]
}
]
},
{
part: 'Part IV',
section: 'Pronunciation',
sectionFa: 'تلفظ',
tasks: [
{
type: 'pron-practice',
title: 'A. Say the phrases with stress over both parts.',
items: ['Look out!', 'Come back!', 'Sit down!', 'Go away!', 'Take care!']
}
]
},
{
part: 'Part V',
section: 'Writing',
sectionFa: 'نوشتن',
tasks: [
{
type: 'circle-task-wb',
title: 'A. Circle the gerunds.',
items: [
{ text: 'Reza is tired of [hearing/to hear] that old story.', answer: 'hearing' },
{ text: 'Mahsa [was watching/watching] TV. (gerund?)', answer: 'was watching' },
{ text: "Don't worry about [washing/wash] the dishes.", answer: 'washing' },
{ text: 'Thank you for [coming/come] soon.', answer: 'coming' }
]
},
{
type: 'fill-words',
title: 'B. Complete the following sentences with gerunds.',
wordBank: ['planning', 'changing', 'swimming', 'helping', 'using'],
items: [
{ sentence: '1. Jane enjoys _____ for the future. (plan)', answer: 'planning' },
{ sentence: '2. He is good at _____ flat tires. (change)', answer: 'changing' },
{ sentence: '3. She goes _____ every other week. (swim)', answer: 'swimming' },
{ sentence: '4. Thank you for _____ me. (help)', answer: 'helping' },
{ sentence: '5. Our teacher can speak two hours without _____ notes. (use)', answer: 'using' }
]
},
{
type: 'fill-words',
title: 'C. Complete the sentences with gerunds. (read, paint, shut, stop, meet)',
wordBank: ['reading', 'painting', 'shutting', 'stopping', 'meeting'],
items: [
{ sentence: '1. My uncle is thinking of _____ his house.', answer: 'painting' },
{ sentence: '2. _____ that book was very interesting.', answer: 'Reading' },
{ sentence: '3. Do you mind _____ the window, please?', answer: 'shutting' },
{ sentence: '4. He drove two hundred miles without _____.', answer: 'stopping' },
{ sentence: "5. I've really enjoyed _____ you.", answer: 'meeting' }
]
},
{
type: 'singular-plural-task',
title: "D. Read the 'text' and find all gerunds.",
instructions: ['متن بخش What You Learned را بخوان و همه‌ی اسم مصدرها (gerunds) را پیدا کن.']
}
]
}
],
quiz: [
{ q: "I _____ you since Norooz.", qFa: 'از نوروز تو را ندیده‌ام.', options: ["haven't seen", "didn't see", "don't see", "wasn't seeing"], correct: 0 },
{ q: 'She _____ five kilos in three months.', qFa: 'در سه ماه پنج کیلو وزن اضافه کرده است.', options: ['has gained', 'gain', 'gaining', 'is gain'], correct: 0 },
{ q: 'Have you _____ traveled to Madrid?', qFa: 'تا به حال به مادرید سفر کرده‌ای؟', options: ['ever', 'yet', 'since', 'for'], correct: 0 },
{ q: "We've lived here _____ 20 years.", qFa: 'بیست سال است اینجا زندگی می‌کنیم.', options: ['for', 'since', 'yet', 'ever'], correct: 0 },
{ q: '_____ is useful for everyone. (gerund)', qFa: 'شنا برای همه مفید است.', options: ['Swimming', 'Swim', 'Swims', 'To swimming'], correct: 0 },
{ q: 'Daily exercise can _____ diseases.', qFa: 'ورزش روزانه می‌تواند از بیماری‌ها پیشگیری کند.', options: ['prevent', 'gain', 'measure', 'increase'], correct: 0 }
]
},
{
num: 3,
title: 'Art and Culture',
titleFa: 'هنر و فرهنگ',
function: 'Art and Culture',
facts: [
{ en: "Art increases brain's activity.", fa: 'هنر فعالیت مغز را افزایش می‌دهد.' },
{ en: 'Art helps students learn math and science better.', fa: 'هنر به دانش‌آموزان کمک می‌کند ریاضی و علوم را بهتر یاد بگیرند.' },
{ en: 'Art makes people more creative and sociable.', fa: 'هنر مردم را خلاق‌تر و اجتماعی‌تر می‌کند.' },
{ en: "There are at least 12 different meanings for the word 'art' in English.", fa: 'کلمه‌ی art در انگلیسی دست‌کم ۱۲ معنی مختلف دارد.' }
],
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'A',
instruction: 'A. Look at the pictures. Match the pictures with the following words. (Mark two parts on the map of Iran where these artworks and crafts are made.)',
instructionFa: 'تصاویر را با کلمات تطبیق بده. (دو ناحیه از نقشه ایران که این صنایع در آن ساخته می‌شوند را مشخص کن.)',
type: 'match-words',
items: [
{ word: 'carpet', fa: 'فرش', image: 'gr-carpet.jpg' },
{ word: 'pottery', fa: 'سفال', image: 'gr-pottery.jpg' },
{ word: 'tilework', fa: 'کاشی‌کاری', image: 'gr-tilework.jpg' },
{ word: 'painting', fa: 'نقاشی', image: 'gr-painting.jpg' },
{ word: 'calligraphy', fa: 'خوشنویسی', image: 'gr-calligraphy.jpg' }
],
followup: 'C. How do you feel when you look at an artwork? (happy and cheerful / uncertain and worried / bored and tired / proud and hopeful)',
followupFa: 'وقتی به یک اثر هنری نگاه می‌کنی چه احساسی داری؟',
followupType: 'two-groups',
groupLabels: ['Feeling', 'چرا؟']
},
{
label: 'B',
instruction: 'B. Use the words in part A to complete the following sentences. Make the necessary changes.',
instructionFa: 'با کلمات بخش A جمله‌ها را کامل کن.',
type: 'fill-bank',
wordBank: ['carpet', 'pottery', 'tilework', 'painting', 'calligraphy'],
sentences: [
{ text: '1. I bought this beautiful _____ cup in Meibod.', answer: 'pottery' },
{ text: '2. The little boy was sleeping on the _____. It was soft and warm.', answer: 'carpet' },
{ text: "3. Can you read that _____? It seems to be one of Nezami's poems.", answer: 'calligraphy' },
{ text: "4. There is a collection of Farshchian's _____ in Astan Ghods Museum.", answer: 'paintings' },
{ text: '5. There are different types of _____ in Sheikh Lotfollah Mosque.', answer: 'tilework' }
]
}
]
},
conversation: {
subtitle: 'Shopping Handicrafts',
subtitleFa: 'خرید صنایع دستی',
desc: 'یک گردشگر خارجی به فروشگاه صنایع دستی پدر رضا آمده است. به گفت‌وگوی رضا و گردشگر گوش کن.',
newWordsHint: ['depend on', 'How touching!', 'discount', 'product', 'pack'],
lines: [
{ speaker: 'Reza', role: 'student', en: 'How can I help you, sir?', fa: 'چطور می‌تونم کمکتون کنم، آقا؟' },
{ speaker: 'Tourist', role: 'teacher', en: 'I am looking for some Iranian handicrafts.', fa: 'دنبال چند تا صنایع دستی ایرانی می‌گردم.' },
{ speaker: 'Reza', role: 'student', en: "Here you can find a range of Iranian hand-made products, from carpets to pottery and tilework, but we don't sell metalwork.", fa: 'اینجا گستره‌ای از محصولات دست‌ساز ایرانی پیدا می‌کنید، از فرش تا سفال و کاشی، ولی فلزکاری نمی‌فروشیم.' },
{ speaker: 'Tourist', role: 'teacher', en: "I'd like to buy a Persian carpet, but it seems too expensive.", fa: 'دوست دارم یک فرش ایرانی بخرم، ولی به نظر خیلی گرونه.' },
{ speaker: 'Reza', role: 'student', en: 'The price depends on its size. Instead, you can take an Isfahan Termeh or a Qashqai Gabbeh.', fa: 'قیمت به اندازه‌اش بستگی داره. به‌جاش می‌تونید ترمه اصفهان یا گبه قشقایی ببرید.' },
{ speaker: 'Tourist', role: 'teacher', en: 'Wow! How touching this Gabbeh is! How much is it?', fa: 'واو! این گبه چقدر تأثیرگذاره! چنده؟' },
{ speaker: 'Reza', role: 'student', en: "It is 85 dollars. If you buy more than 100 dollars, you'll get a 20 percent discount. You can take this calligraphic tile for only 30 dollars.", fa: '۸۵ دلاره. اگه بیشتر از ۱۰۰ دلار خرید کنید، ۲۰ درصد تخفیف می‌گیرید. این کاشی خوشنویسی‌شده رو فقط ۳۰ دلار می‌تونید ببرید.' },
{ speaker: 'Tourist', role: 'teacher', en: "Well, I'll take both. Please pack them for me.", fa: 'خب، هر دو رو می‌برم. لطفاً برام بسته‌بندی‌شون کنید.' },
{ speaker: 'Reza', role: 'student', en: 'Yes, sure.', fa: 'بله، حتماً.' },
{ speaker: 'Tourist', role: 'teacher', en: 'Do you work for this shop? Who has made these beautiful items?', fa: 'شما برای این فروشگاه کار می‌کنید؟ کی این اقلام زیبا رو ساخته؟' },
{ speaker: 'Reza', role: 'student', en: "Actually, it is my father's workshop and store. I work here after school. All my family members work here to help our family business.", fa: 'راستش کارگاه و فروشگاه پدرمه. بعد از مدرسه اینجا کار می‌کنم. همه اعضای خانواده برای کمک به کسب‌وکار خانوادگی اینجا کار می‌کنن.' },
{ speaker: 'Tourist', role: 'teacher', en: 'Well done! How lucky you are to work in such a lovely shop! I really appreciate the culture and art of Iran.', fa: 'آفرین! چقدر خوش‌شانسی که در چنین فروشگاه دوست‌داشتنی‌ای کار می‌کنی! من واقعاً برای فرهنگ و هنر ایران ارزش قائلم.' },
{ speaker: 'Reza', role: 'student', en: 'Thank you very much. If you are interested in knowing more about our products, you can check this booklet.', fa: 'خیلی ممنون. اگه علاقه‌مندید بیشتر درباره محصولاتمون بدونید، می‌تونید این دفترچه رو ببینید.' }
],
questions: [
{ q: 'What did the tourist buy?', fa: 'گردشگر چی خرید؟' },
{ q: 'Are all Persian handicrafts expensive?', fa: 'همه صنایع دستی ایرانی گرون‌اند؟' },
{ q: 'What is the most famous handicraft of your city or village?', fa: 'معروف‌ترین صنایع دستی شهر یا روستای تو چیست؟' }
]
},
newWords: {
lookRead: [
{ en: 'My aunt bought a {decorative} wall clock.', fa: 'عمه‌ام یک ساعت دیواری {تزئینی} خرید.', image: 'nw-decorative.jpg' },
{ en: 'Iran is a {vast} country in Southwest Asia.', fa: 'ایران کشوری {پهناور} در جنوب غرب آسیاست.', image: 'nw-vast.jpg' },
{ en: 'Iranian {craftsmen} and {craftswomen} are hard-working people.', fa: '{صنعتگران} زن و مرد ایرانی مردمانی سخت‌کوش‌اند.', image: 'nw-craftsmen.jpg' },
{ en: 'He is {weaving} a rug.', fa: 'او در حال {بافتن} قالیچه است.', image: 'nw-weaving.jpg' },
{ en: 'Gold and silver are {valuable} metals.', fa: 'طلا و نقره فلزات {ارزشمندی} هستند.', image: 'nw-valuable.jpg' },
{ en: "Each person's fingerprint is {unique}.", fa: 'اثر انگشت هر شخص {منحصربه‌فرد} است.', image: 'nw-unique.jpg' },
{ en: 'The animal {diversity} of Lorestan is amazing.', fa: '{تنوع} جانوری لرستان شگفت‌انگیز است.', image: 'nw-diversity.jpg' }
],
definitions: [
{ word: 'custom', def: 'traditional or usual things that people do in an area', fa: 'رسم / آداب', example: 'My uncle is interested in old local {customs}.' },
{ word: 'identity', def: 'who or what a thing or person is', fa: 'هویت', example: 'The policeman is searching for the {identity} of that man.' },
{ word: 'reflect', def: 'to show something', fa: 'بازتاب دادن / نشان دادن', example: "This poem {reflects} the poet's love of nature." },
{ word: 'humankind', def: 'all people', fa: 'بشریت', example: 'The World Wars have been really bad for {humankind}.' },
{ word: 'appreciate', def: 'to value somebody or something', fa: 'ارج نهادن / قدردانی کردن', example: 'Each society {appreciates} its art and culture.' }
]
},
reading: {
passageTitle: 'Art, Culture and Society',
passageTitleFa: 'هنر، فرهنگ و جامعه',
strategy: {
title: 'Recognizing Reference Words',
titleFa: 'شناخت کلمات ارجاعی',
desc: 'We use reference words instead of repeating the names of people, places, ideas, or other things.',
steps: ['Read the text.', "Look out for common reference words like 'it, they, them, this, those, that, etc'.", 'Look at sentences nearby especially the former ones to find what they refer to.'],
descFa: 'کلمات ارجاعی (it, they, them...) به‌جای تکرار اسم‌ها به کار می‌روند. برای فهمیدن مرجعشان، جمله‌های قبلی را نگاه کن.'
},
paragraphs: [
{ en: 'Art is what people create with imagination and skill. As a part of culture, it shows the way of life and identity of a nation and reflects the history of a society. In fact, the history of humankind is the history of art. If we want to know a country or a nation well, we should study its art.', fa: 'هنر چیزی است که مردم با تخیل و مهارت می‌آفرینند. به‌عنوان بخشی از فرهنگ، شیوه‌ی زندگی و هویت یک ملت را نشان می‌دهد و تاریخ جامعه را بازتاب می‌دهد. در واقع، تاریخ بشریت تاریخ هنر است. اگر بخواهیم کشور یا ملتی را خوب بشناسیم، باید هنرش را مطالعه کنیم.' },
{ en: 'Handicrafts are good examples of the art and culture of a country. By handicrafts, we mean making decorative items in a skillful way using our hands. Each country and culture has its own handicrafts.', fa: 'صنایع دستی نمونه‌های خوبی از هنر و فرهنگ یک کشورند. منظور از صنایع دستی، ساختن اقلام تزئینی به شیوه‌ای ماهرانه با دست است. هر کشور و فرهنگی صنایع دستی خودش را دارد.' },
{ en: "Making and selling handicrafts are good ways to help a country's economy and introduce its culture to other nations. Many people of the world produce handicrafts and sell them to tourists. In some Asian countries a part of the country's income comes from making and selling handicrafts.", fa: 'ساخت و فروش صنایع دستی راه‌های خوبی برای کمک به اقتصاد کشور و معرفی فرهنگش به ملت‌های دیگر است. بسیاری از مردم دنیا صنایع دستی تولید می‌کنند و به گردشگران می‌فروشند. در برخی کشورهای آسیایی بخشی از درآمد کشور از ساخت و فروش صنایع دستی است.' },
{ en: "Iran has a five-thousand-year-old history of artistic works and handicrafts including pottery, painting, calligraphy, rugs and carpets, etc. If you travel across Iran, you'll get back home with excellent handicrafts as souvenirs for your family and friends.", fa: 'ایران تاریخی پنج‌هزارساله از آثار هنری و صنایع دستی دارد، از جمله سفالگری، نقاشی، خوشنویسی، قالیچه و فرش و... . اگر در سراسر ایران سفر کنی، با صنایع دستی عالی به‌عنوان سوغاتی برای خانواده و دوستانت به خانه برمی‌گردی.' },
{ en: 'Iranian art is also quite famous all around the world. There are very excellent collections of Persian art in many important museums of the world. If we want to name countries with richest art and cultural diversity, Iran is among them. Persian art is famous in the world for reflecting moral and social values of Iranian people and the natural beauty of this vast country.', fa: 'هنر ایرانی در سراسر دنیا هم بسیار مشهور است. مجموعه‌های بسیار عالی از هنر ایرانی در بسیاری از موزه‌های مهم دنیا هست. اگر بخواهیم کشورهایی با غنی‌ترین تنوع هنری و فرهنگی را نام ببریم، ایران در میان آن‌هاست. هنر ایرانی در دنیا به بازتاب ارزش‌های اخلاقی و اجتماعی مردم ایران و زیبایی طبیعی این کشور پهناور مشهور است.' },
{ en: 'Iranian craftsmen and craftswomen are famous for producing very unique artworks from wood, metal and other simple materials around them. Many people of the world appreciate the art and skill of a young Iranian girl who weaves a beautiful silk carpet in a small village of Azarbaijan or Kordestan. When tourists buy Persian rugs or carpets, they take a part of Iranian art and culture to their homelands.', fa: 'صنعتگران زن و مرد ایرانی به تولید آثار هنری بسیار منحصربه‌فرد از چوب، فلز و دیگر مواد ساده‌ی اطرافشان مشهورند. بسیاری از مردم دنیا هنر و مهارت دختر جوان ایرانی را که در روستای کوچکی در آذربایجان یا کردستان فرش ابریشمی زیبایی می‌بافد، ارج می‌نهند. وقتی گردشگران قالیچه یا فرش ایرانی می‌خرند، بخشی از هنر و فرهنگ ایرانی را به وطنشان می‌برند.' }
],
glossary: {
'create': 'می‌آفرینند', 'imagination': 'تخیل', 'skill': 'مهارت', 'identity': 'هویت',
'reflects': 'بازتاب می‌دهد', 'humankind': 'بشریت', 'Handicrafts': 'صنایع دستی',
'decorative': 'تزئینی', 'skillful': 'ماهرانه', 'economy': 'اقتصاد', 'introduce': 'معرفی کردن',
'produce': 'تولید می‌کنند', 'income': 'درآمد', 'pottery': 'سفالگری', 'calligraphy': 'خوشنویسی',
'souvenirs': 'سوغاتی', 'collections': 'مجموعه‌ها', 'diversity': 'تنوع', 'moral': 'اخلاقی',
'values': 'ارزش‌ها', 'vast': 'پهناور', 'craftsmen': 'صنعتگران مرد', 'craftswomen': 'صنعتگران زن',
'unique': 'منحصربه‌فرد', 'materials': 'مواد', 'appreciate': 'ارج می‌نهند', 'weaves': 'می‌بافد',
'silk': 'ابریشمی', 'homelands': 'وطن‌ها'
},
comprehension: [
{
type: 'scan',
title: 'A. Use the strategy to find what these reference words refer to.',
items: [
{ q: 'it (paragraph 1, line 2)', sampleAnswer: 'Art' },
{ q: 'its (paragraph 2, line 3)', sampleAnswer: 'Each country and culture' },
{ q: 'them (paragraph 3, line 3)', sampleAnswer: 'Handicrafts' },
{ q: 'them (paragraph 5, line 4)', sampleAnswer: 'Countries with richest art and cultural diversity' },
{ q: 'they (paragraph 6, line 6)', sampleAnswer: 'Tourists' }
]
},
{
type: 'scan',
title: 'B. Scan the Reading to find the following information.',
items: [
{ q: 'What does art reflect?', sampleAnswer: 'The history of a society (and the identity of a nation).' },
{ q: 'How can we help the economy of our country?', sampleAnswer: 'By making and selling handicrafts.' },
{ q: 'Why is Persian art famous?', sampleAnswer: 'For reflecting moral and social values of Iranian people and the natural beauty of Iran.' }
]
},
{
type: 'paragraph-match',
title: 'C. Find each idea in the Reading and write the number of the paragraph that discusses it.',
items: [
{ statement: "Making and selling handicrafts help a country's economy.", answer: '3' },
{ statement: 'Many people in the world value the art and skill of Iranian artists.', answer: '6' },
{ statement: 'Handicrafts can show the art and culture of a nation.', answer: '2' }
]
}
]
},
vocabDev: {
title: 'Vocabulary Development — Antonyms',
titleFa: 'واژه‌سازی — متضادها',
blocks: [
{
type: 'affix-table',
title: 'ANTONYMS (متضادها)',
intro: "Antonyms are words that have opposite meanings. Sometimes antonyms are very different words, for example 'true' and 'false' or 'hot' and 'cold'. Other times, they are made by adding or changing prefixes or suffixes, for example, 'like' and 'dislike' or 'careful' and 'careless'.",
introFa: 'متضادها کلماتی با معنی مخالف‌اند — گاهی کلمات کاملاً متفاوت (hot/cold) و گاهی با پیشوند/پسوند ساخته می‌شوند (like/dislike).',
headers: ['Word', 'Antonym'],
rows: [
['true', 'false'],
['hot', 'cold'],
['like', 'dislike'],
['careful', 'careless']
]
},
{
type: 'fill-table',
title: 'A. Write a word in each blank that is the opposite of the words in the left column.',
items: [
{ image: 'vd-icecream.jpg', text: 'cold ↔ _____', answer: 'hot', image2: 'vd-tea.jpg' },
{ image: 'vd-airplane.jpg', text: 'fast ↔ _____', answer: 'slow', image2: 'vd-balloon.jpg' },
{ image: 'vd-happybaby.jpg', text: 'happy ↔ _____', answer: 'sad', image2: 'vd-cryingbaby.jpg' }
]
},
{
type: 'fill-table',
title: 'B. Two of the words in each group are antonyms. Find them.',
items: [
{ text: 'a) start / finish / decrease / produce → _____', answer: 'start ↔ finish' },
{ text: 'b) quickly / sadly / greatly / slowly → _____', answer: 'quickly ↔ slowly' },
{ text: 'c) rise / move / reflect / fall → _____', answer: 'rise ↔ fall' },
{ text: 'd) cheap / famous / expensive / interesting → _____', answer: 'cheap ↔ expensive' }
]
},
{
type: 'fill-table',
title: 'C. Look back at the Reading to find synonyms and antonyms for the words.',
items: [
{ text: "a) In paragraph 1, a synonym for 'reflect': _____", answer: 'show' },
{ text: "b) In paragraph 3, an antonym for 'buy': _____", answer: 'sell' },
{ text: "c) In paragraph 5, a synonym for 'well-known': _____", answer: 'famous' },
{ text: "d) In paragraph 6, an antonym for 'ugly': _____", answer: 'beautiful' }
]
}
]
},
grammar: {
title: 'Grammar — Conditional Sentences (Type I)',
titleFa: 'دستور زبان — جملات شرطی نوع اول',
noteText: 'این بخشی از یک <strong>جمله شرطی نوع اول</strong> است: <code>If + حال ساده, will + فعل ساده</code>.',
noteMap: {
"If you enjoy": "<strong>عبارت شرط (if-clause)</strong>: <code>If + فاعل + حال ساده</code> — شرطی که اگر برقرار باشد، نتیجه در آینده رخ می‌دهد.",
"If you do not": "<strong>شرط منفی</strong>: <code>If + فاعل + don't/doesn't + فعل</code>.",
"if I have": "<strong>عبارت شرط</strong> می‌تواند بعد از جمله اصلی هم بیاید (بدون ویرگول): <code>... if + حال ساده</code>.",
"if you jump": "<strong>عبارت شرط</strong> بعد از جمله اصلی: <code>... if + حال ساده</code>.",
"if she answers": "<strong>عبارت شرط</strong>: فعل شرط همیشه <strong>حال ساده</strong> است (نه will).",
"you will become": "<strong>جمله اصلی (نتیجه)</strong>: <code>will + فعل ساده</code> — نتیجه‌ی آینده‌ی شرط.",
"you will need": "<strong>نتیجه</strong>: <code>will + فعل ساده</code>.",
"you won't appreciate": "<strong>نتیجه منفی</strong>: <code>won't (will not) + فعل ساده</code>.",
"you cannot become": "<strong>نتیجه با modal</strong>: به‌جای will می‌توان از can/may هم استفاده کرد.",
"You will": "<strong>نتیجه</strong>: <code>will + فعل ساده</code> — اتفاق آینده اگر شرط برقرار شود.",
"will": "<strong>will</strong> — در جمله‌ی اصلیِ شرطی نوع اول: <code>will + فعل ساده</code>. هرگز در عبارت if نمی‌آید!",
"won't": "<strong>won't</strong> = will not — نتیجه‌ی منفی شرطی نوع اول.",
"If": "<strong>If (اگر)</strong> — آغازگر عبارت شرط. فعل بعدش <strong>حال ساده</strong> است: <code>If + حال ساده, will + فعل</code>."
},
readTexts: {
title: 'A. Read the following text.',
texts: [
{ en: 'Our neighbor is a craftsman. I love his beautiful artworks. Whenever I see his works, I say to myself, "when I grow up, I will become an artist like him". One day he told me: "Amir, are you really interested in art? {If you enjoy} art, {you will become} a good artist. Most people like art, but some do not understand it. {If you do not} see any special thing in a pottery, {you won\'t appreciate} its value. If you do not appreciate the value of art, {you cannot become} a successful artist. {You will} just make things. If you really like art, {you will need} two things in the future: education and experience. Study hard, work hard, and create things to make people happy."', fa: 'همسایه‌ی ما صنعتگر است. عاشق آثار هنری زیبایش هستم. هر وقت کارهایش را می‌بینم، به خودم می‌گویم: «وقتی بزرگ شوم، هنرمندی مثل او می‌شوم». یک روز به من گفت: «امیر، واقعاً به هنر علاقه داری؟ اگر از هنر لذت ببری، هنرمند خوبی می‌شوی. بیشتر مردم هنر را دوست دارند، اما بعضی آن را نمی‌فهمند. اگر چیز خاصی در یک سفال نبینی، ارزشش را درک نمی‌کنی. اگر ارزش هنر را درک نکنی، نمی‌توانی هنرمند موفقی شوی. فقط چیز می‌سازی. اگر واقعاً هنر را دوست داری، در آینده به دو چیز نیاز خواهی داشت: آموزش و تجربه. سخت درس بخوان، سخت کار کن و چیزهایی بساز که مردم را خوشحال کند.»' }
]
},
explanation: [
'جمله‌ی <strong>شرطی نوع اول</strong> درباره‌ی اتفاقی است که اگر شرطی در زمان حال برقرار باشد، در آینده رخ می‌دهد.',
'ساختار: <code>If + حال ساده , فاعل + will + فعل ساده</code>',
'مثال: <code>If you study hard, you will pass the exams.</code>',
'ترتیب دو بخش می‌تواند عوض شود (بدون ویرگول): <code>I\'ll phone you if I have time.</code>',
'⚠️ در عبارتِ if هرگز will نمی‌آید — فعل آن همیشه حال ساده است.'
],
tablesTitle: 'B. Read the following examples.',
tables: [
{
title: 'If-clause first (عبارت شرط اول)',
headers: ['If + simple present,', 'will + base verb'],
rows: [
['If you study hard,', 'you will pass the exams.'],
['If my friends come,', 'I will become happy.'],
['If Reza goes to Rey,', 'he will visit the bazaar.']
],
examples: [
{ en: '{If} it rains tomorrow, we {will} stay at home.', fa: 'اگر فردا باران ببارد، خانه می‌مانیم.' }
]
},
{
title: 'Main clause first (جمله اصلی اول)',
headers: ['will + base verb', 'if + simple present'],
rows: [
["I'll phone you", 'if I have time.'],
["You'll hurt yourself", 'if you jump into the river.'],
['Maryam will get a prize', 'if she answers the question correctly.']
],
examples: [
{ en: "You{'ll get} a good job {if you work} hard.", fa: 'اگر سخت کار کنی، شغل خوبی به دست می‌آوری.' }
]
}
],
notes: [
"C. Tell your teacher how 'conditional sentences' are made.",
"D. Read the Conversation and underline all 'conditional sentences'."
],
practice: {
title: 'E. Read the following paragraph and choose the best verb forms.',
instruction: 'متن درباره شغل آینده را بخوان و فعل درست را انتخاب کن.',
items: [
{ sentence: 'When I _____, I will become a teacher.', options: ['grow up', 'will grow up'], correct: 0 },
{ sentence: 'If I _____ well, my students will learn many things.', options: ['teach', 'will teach'], correct: 0 },
{ sentence: 'If they study hard, they _____ successful in their lives.', options: ['will become', 'become'], correct: 0 },
{ sentence: 'If my students _____ successful, I will feel happy and satisfied.', options: ['become', 'will become'], correct: 0 },
{ sentence: 'If they _____ hard, they will become successful.', options: ['study', 'will study'], correct: 0 }
]
},
friendWork: {
title: 'F. Pair up and talk about the things you will do or will happen in the following conditions.',
partA: { instruction: 'جمله‌ها را کامل کن:', items: ['If it rains tomorrow, ...', 'If I study hard for my exams, ...', 'If we go to Noshahr this Friday, ...', 'If I eat so much junk food, ...', 'If I get a good mark, ...'] },
partB: { instruction: 'الگو:', items: ['If + حال ساده, I will + فعل ساده'] }
},
goingTo: {
title: 'Past Participles (صفت‌های مفعولی)',
note: '<strong>اسم مفعول به‌عنوان صفت</strong>: قسمت سوم فعل (p.p.) می‌تواند صفت باشد و <strong>احساس</strong> شخص را توصیف کند: bored, excited, interested... معمولاً با be یا get می‌آید.',
noteMap: {
"bored": "<strong>bored</strong> (p.p. صفتی) = خسته/بی‌حوصله — احساس شخص: <code>be/get bored with</code>.",
"amused": "<strong>amused</strong> = سرگرم‌شده: <code>get amused by</code>.",
"confused": "<strong>confused</strong> = گیج: <code>be confused</code>.",
"depressed": "<strong>depressed</strong> = افسرده: <code>get depressed about</code>.",
"excited": "<strong>excited</strong> = هیجان‌زده: <code>be excited that/about</code>.",
"frightened": "<strong>frightened</strong> = ترسیده: <code>be frightened</code>.",
"interested": "<strong>interested</strong> = علاقه‌مند: <code>be interested in</code>.",
"surprised": "<strong>surprised</strong> = متعجب: <code>be surprised at</code>.",
"tired": "<strong>tired</strong> = خسته: <code>be tired of</code>."
},
readTitle: 'Read the following examples.',
examples: [
{ en: 'Amir is {bored} with his present job.', fa: 'امیر از شغل فعلی‌اش خسته است.' },
{ en: 'Mina got {amused} by the story.', fa: 'مینا با داستان سرگرم شد.' },
{ en: "I'm totally {confused}. Would you please explain it again?", fa: 'کاملاً گیج شده‌ام. می‌شود دوباره توضیح بدهی؟' },
{ en: 'He often gets {depressed} about his weight.', fa: 'او اغلب به‌خاطر وزنش افسرده می‌شود.' },
{ en: "I'm so {excited} that we're going to Yazd.", fa: 'خیلی هیجان‌زده‌ام که داریم به یزد می‌رویم.' },
{ en: 'To tell the truth, I was {frightened} to death.', fa: 'راستش را بخواهی، تا حد مرگ ترسیده بودم.' },
{ en: "I've always been {interested} in football.", fa: 'همیشه به فوتبال علاقه داشته‌ام.' },
{ en: 'They were greatly {surprised} at the news.', fa: 'از این خبر بسیار متعجب شدند.' },
{ en: "I'm {tired} of watching television; let's go for a walk.", fa: 'از تماشای تلویزیون خسته‌ام؛ بیا برویم قدم بزنیم.' }
],
table: {
headers: ['Past Participle', 'با حرف اضافه', 'معنی'],
rows: [
['bored', 'with', 'خسته/بی‌حوصله'],
['interested', 'in', 'علاقه‌مند'],
['surprised', 'at', 'متعجب'],
['tired', 'of', 'خسته از'],
['depressed', 'about', 'افسرده'],
['excited', 'about/that', 'هیجان‌زده']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Talking about conditions and future results',
strategyTitleFa: 'راهبرد گفتاری — صحبت درباره شرط‌ها و نتایج آینده',
strategyDesc: "A. We use 'will' with 'if' to talk about what will happen in the future if certain conditions are met at the present time.",
patterns: [
{ q: 'We want to buy a new store. — Really, what for?', a: 'We want to make and sell more pottery work.' },
{ q: "I've heard people are really interested in your work.", a: 'Yeah, if everything goes well, we will open the new store in June.' }
],
patternsList: [
'If everything goes well, I will ...',
'If all goes well, they will ...',
'If our plans work, we will ...'
],
listenComplete: {
title: 'B. Listen to the following conversations and fill in the blanks.',
conversations: [
{ num: 1, items: ['They are going to .....................', 'If all goes well, .....................'] },
{ num: 2, items: ['Mohammad is going to .....................', 'Amir is going to .....................'] }
]
},
pairWork: {
title: 'Pair up and ask your friends about the things they have to do now to achieve something in the future.',
box1: { label: 'هدف‌های آینده', verbs: ['become a doctor in the future', 'go to Marivan in Norooz', 'buy a new computer next year'] },
box2: { label: 'فعالیت‌ها', verbs: ['take part in charity', 'study Physics', 'visit historical sites of Hamedan'] }
}
},
pronunciation: {
title: 'Pronunciation — Intonation of Conditional Sentences',
titleFa: 'تلفظ — آهنگ جملات شرطی',
rule: 'Both rising and falling intonations are used in conditional sentences. (در جملات شرطی هم لحن صعودی و هم نزولی به کار می‌رود.)',
intonationGuide: {
rising: 'بخش اولِ جمله شرطی (معمولاً عبارت if) با لحن <strong>صعودی ↗</strong> و بخش پایانی با لحن <strong>نزولی ↘</strong> گفته می‌شود: <code>If I get the money ↗, I will buy a new mobile phone ↘.</code>'
},
examplesTitle: 'A. Listen. A part of the sentence has a rising intonation, another part has a falling intonation.',
examples: [
{ en: 'If I get the money, I will buy a new mobile phone.', a: 'if-clause ↗ , main clause ↘' },
{ en: "We'll get to the school late if the bus does not come on time.", a: 'main ↗ , if-clause ↘' },
{ en: 'If the kids answer the questions, the teacher will give them a prize.', a: '↗ , ↘' },
{ en: "You'll get a good job if you work hard.", a: '↗ , ↘' }
],
punctuation: {
title: 'B. Listen and draw upward or downward arrows for rising and falling intonations.',
text: '1. If it snows, people will drive carefully. / 2. If I earn enough money next year, I will buy a new car. / 3. She will pass the exam if I help her. / 4. If you eat healthy food, you will live longer.',
answer: 'بخش اول هر جمله ↗ (صعودی) و بخش دوم ↘ (نزولی): If it snows ↗, people will drive carefully ↘.'
}
},
writing: {
title: 'Writing — Infinitives',
titleFa: 'نوشتن — مصدر با to',
sections: [
{
type: 'lesson-noun',
title: 'Infinitive',
intro: "An infinitive is the 'to' form of a verb, for instance, the infinitive form of 'study' is 'to study'.",
introFa: 'مصدر = to + فعل ساده. می‌تواند فاعل یا مفعول جمله باشد.',
categories: [
{ label: 'As Subject (فاعل)', examples: ['To learn a language can be interesting.', 'To smoke is very bad for everyone. (شکل gerund طبیعی‌تر است: Smoking is...)'] },
{ label: 'As Object (مفعول)', examples: ['Hamed wants to learn a language.', 'I like to watch this movie.', 'She wanted to buy an Iranian handicraft.'] },
{ label: 'Negative infinitive', examples: ['not + to + verb → I told the children not to make so much noise.', 'My dad tries not to forget the phone numbers.'] },
{ label: 'After adjectives', examples: ['She became happy to see her classmate after ten years.', 'Ali was really sad to leave us soon.'] }
]
},
{
type: 'lesson-markers',
title: 'Verbs & adjectives followed by infinitives',
intro: 'After some verbs and adjectives we use infinitives:',
markers: [
{ marker: 'verbs + infinitive', examples: 'choose, decide, want, promise, forget, wait, expect, remember, try, attempt, agree, learn → I have decided to learn Spanish.' },
{ marker: 'adjectives + infinitive', examples: 'careful, certain, glad, shocked, sorry, amazed, ashamed, fortunate, lucky, surprised → I was surprised to see him.' }
]
},
{
type: 'plural-task',
title: 'A. Complete the sentences with the gerunds or infinitives of the verbs. (learn, leave, make, give, catch, turn off)',
wordBank: ['learn', 'leave', 'make', 'give', 'catch', 'turn off'],
items: [
{ sentence: '1. I went home after _____ the school.', words: ['leave'], answers: ['leaving'] },
{ sentence: '2. I have decided _____ Spanish.', words: ['learn'], answers: ['to learn'] },
{ sentence: "3. We can't learn English without _____ mistakes.", words: ['make'], answers: ['making'] },
{ sentence: '4. Mahboobeh bought some flowers _____ to her mother.', words: ['give'], answers: ['to give'] },
{ sentence: '5. Remember _____ the lights.', words: ['turn off'], answers: ['to turn off'] },
{ sentence: '6. I ran fast _____ the bus.', words: ['catch'], answers: ['to catch'] }
]
},
{
type: 'lesson-markers',
title: 'B & C. Practice',
intro: 'B. Using five adjectives from the list, write five sentences with infinitives about yourself. / C. Read the Reading and find all gerunds and infinitives.',
markers: [
{ marker: 'مثال B', examples: 'I was glad to pass the exam. / I am lucky to have good friends.' },
{ marker: 'مثال C', examples: 'making (gerund), to know (infinitive), selling (gerund)...' }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a report and fill in the blanks.',
tasks: [
'Art is helpful .....................',
'People can make .....................',
"Listen again and take note of all 'if clauses'."
]
},
reading: {
title: 'B. Now read the rest.',
text: "Art can improve people's physical, mental, and emotional wellness. If people use their art skills in a right way, they will be able to communicate their feelings. They will understand their family and friends better. Art can help people have better relationship with each other. The power of art decreases the risk of many illnesses such as heart attack. If people practice art, they will get along with their stress and enjoy the pleasure of making artwork. You can try this by drawing simple things or making simple objects. You will see its power!",
fa: 'هنر می‌تواند سلامت جسمی، ذهنی و روحی مردم را بهبود بخشد. اگر مردم مهارت‌های هنری‌شان را به‌درستی استفاده کنند، می‌توانند احساساتشان را منتقل کنند. خانواده و دوستانشان را بهتر درک می‌کنند. هنر می‌تواند به مردم کمک کند روابط بهتری با هم داشته باشند. قدرت هنر خطر بسیاری از بیماری‌ها مثل حمله قلبی را کاهش می‌دهد. اگر مردم هنر تمرین کنند، با استرسشان کنار می‌آیند و از لذت ساختن اثر هنری بهره می‌برند. می‌توانی این را با کشیدن چیزهای ساده یا ساختن اشیای ساده امتحان کنی. قدرتش را خواهی دید!',
glossary: {
'improve': 'بهبود بخشیدن', 'wellness': 'سلامت', 'communicate': 'منتقل کردن',
'relationship': 'رابطه', 'decreases': 'کاهش می‌دهد', 'illnesses': 'بیماری‌ها',
'get along with': 'کنار آمدن با', 'pleasure': 'لذت', 'objects': 'اشیا'
},
tasks: [
"3. What does 'their' in line 2 refer to? What does 'its' in the last line refer to?",
"4. Underline all 'conditional sentences'."
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer.',
questions: [
'Can everyone make artwork?',
'How does art help us understand our family?',
'Have you ever visited an art gallery?'
]
}
},
workbook: [
{
part: 'Get Ready',
section: 'Warm-up',
sectionFa: 'دست‌گرمی',
tasks: [
{
type: 'match-columns',
title: 'A. People greet each other differently around the world. Match the greeting actions. (B: Where can you see these greeting actions?)',
pairs: [
{ a: 'handshaking', b: 'دست دادن', letter: 'a' },
{ a: 'bowing', b: 'تعظیم کردن', letter: 'b' },
{ a: 'hugging', b: 'در آغوش گرفتن', letter: 'c' },
{ a: "pressing one's palms together", b: 'کف دست‌ها را به هم چسباندن', letter: 'd' }
]
}
]
},
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'Cultures and Lifestyles',
passage: "Culture is a system of shared beliefs that are common in a society. Often, we think of the food, music, clothing, and holidays that are common in a society as its culture, but these are only some of the elements. Other elements include customs, values, behaviors, and artifacts. Culture is, therefore, a combination of thoughts, feelings, attitudes, and beliefs. With more than 190 countries and 7 billion people on earth, it is not hard to imagine that many cultures exist. No matter where you go around the world, you will face people, lifestyles and cultures that are different to what you have. People around the world have very different lives and ways of living. They have different beliefs and customs. So they usually live and behave according to what they believe to be right and wrong. Learning to respect other cultures is important for having new experiences and learning about the world. One of the first steps to learn about other cultures is to simply accept that there are many different cultures exist other than our own culture. One of the most important ways to learn to become respectful of other cultures is to spend some time reflecting on our own. Then it is important to understand something about other cultures. For those who want to learn about other cultures, but do not know where to start, a great place to start is reading about the cultures that interest them. In today's world if we all are able to know about other cultures, and respect them, life would be easier for most of us.",
passageFa: 'فرهنگ نظامی از باورهای مشترک است که در یک جامعه رایج‌اند. اغلب، غذا، موسیقی، پوشاک و تعطیلاتِ رایج در یک جامعه را فرهنگ آن می‌دانیم، اما این‌ها فقط بخشی از عناصرند. عناصر دیگر شامل آداب، ارزش‌ها، رفتارها و مصنوعات است. بنابراین فرهنگ ترکیبی از افکار، احساسات، نگرش‌ها و باورهاست. با بیش از ۱۹۰ کشور و ۷ میلیارد انسان روی زمین، تصور وجود فرهنگ‌های فراوان سخت نیست. هر جای دنیا که بروی، با مردم، سبک‌های زندگی و فرهنگ‌هایی متفاوت با آنچه خودت داری روبه‌رو می‌شوی. مردم سراسر دنیا زندگی‌ها و شیوه‌های زیستن بسیار متفاوتی دارند. باورها و آداب متفاوتی دارند. پس معمولاً طبق آنچه درست و غلط می‌دانند زندگی و رفتار می‌کنند. یادگیریِ احترام به فرهنگ‌های دیگر برای تجربه‌های جدید و شناخت دنیا مهم است. یکی از اولین گام‌ها برای شناخت فرهنگ‌های دیگر این است که بپذیریم فرهنگ‌های مختلف فراوانی غیر از فرهنگ خودمان وجود دارد. یکی از مهم‌ترین راه‌های احترام به فرهنگ‌های دیگر، صرف زمان برای تأمل در فرهنگ خودمان است. سپس مهم است چیزی درباره فرهنگ‌های دیگر بفهمیم. برای کسانی که می‌خواهند درباره فرهنگ‌های دیگر یاد بگیرند اما نمی‌دانند از کجا شروع کنند، خواندن درباره فرهنگ‌هایی که برایشان جالب است نقطه شروع خوبی است. در دنیای امروز اگر همه بتوانیم فرهنگ‌های دیگر را بشناسیم و به آن‌ها احترام بگذاریم، زندگی برای بیشترمان آسان‌تر می‌شود.',
glossary: {
'shared beliefs': 'باورهای مشترک', 'elements': 'عناصر', 'customs': 'آداب', 'values': 'ارزش‌ها',
'behaviors': 'رفتارها', 'artifacts': 'مصنوعات', 'combination': 'ترکیب', 'attitudes': 'نگرش‌ها',
'face': 'روبه‌رو شدن', 'according to': 'طبق', 'respect': 'احترام گذاشتن', 'accept': 'پذیرفتن',
'respectful': 'بااحترام', 'reflecting on': 'تأمل در', 'interest': 'جالب بودن برای'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Culture is only a combination of food, clothing and holidays.', answer: false },
{ q: 'Different people of the world may have different cultures and lifestyles.', answer: true },
{ q: 'Respecting other cultures often makes our lives easier.', answer: true }
]
},
{
type: 'short-answer',
title: "B. Scan the 'text' to find the following information.",
questions: [
{ q: 'How many countries are there in the world?', sampleAnswer: 'More than 190 countries.' },
{ q: 'What are the elements of culture?', sampleAnswer: 'Food, music, clothing, holidays, customs, values, behaviors, and artifacts.' },
{ q: 'How can we start learning about other cultures?', sampleAnswer: 'By reading about the cultures that interest us.' }
]
},
{
type: 'short-answer',
title: 'C. Find what these words refer to.',
questions: [
{ q: 'its (paragraph 1):', sampleAnswer: 'A society' },
{ q: 'they (paragraph 2):', sampleAnswer: 'People around the world' },
{ q: 'them (paragraph 4):', sampleAnswer: 'The cultures (that interest them → those who want to learn)' }
]
}
]
},
{
part: 'Part II',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'fill-words',
title: "A. Read the 'text' and find antonyms for the following words.",
wordBank: ['different', 'right', 'start', 'important'],
items: [
{ sentence: '1. similar ↔ _____', answer: 'different' },
{ sentence: '2. false ↔ _____', answer: 'right' },
{ sentence: '3. finish ↔ _____', answer: 'start' },
{ sentence: '4. unimportant ↔ _____', answer: 'important' }
]
},
{
type: 'odd-one-out',
title: 'B. Odd one out.',
items: [
{ options: ['nation', 'society', 'country', 'economy'], odd: 3 },
{ options: ['produce', 'create', 'collect', 'make'], odd: 2 },
{ options: ['vast', 'beauty', 'great', 'large'], odd: 1 },
{ options: ['right', 'true', 'wrong', 'correct'], odd: 2 }
]
},
{
type: 'match-columns',
title: 'C. Match the columns and write the correct forms of the words.',
pairs: [
{ a: 'culture', b: '-al → cultural', letter: 'a' },
{ a: 'simple', b: '-ly → simply', letter: 'c' },
{ a: 'skill', b: '-ful → skillful', letter: 'd' },
{ a: 'diverse', b: '-ity → diversity', letter: 'b' },
{ a: 'Iran', b: '-ian → Iranian', letter: 'f' },
{ a: 'tour', b: '-ist → tourist', letter: 'e' }
]
},
{
type: 'fill-words',
title: 'E. Complete the following verbs with a suitable noun. (D: Scan the text for -ing and -ly suffixes.)',
wordBank: ['other cultures', 'our own culture', 'a carpet', 'art', 'countries'],
items: [
{ sentence: '1. respect _____', answer: 'other cultures' },
{ sentence: '2. reflect on _____', answer: 'our own culture' },
{ sentence: '3. weave _____', answer: 'a carpet' },
{ sentence: '4. appreciate _____', answer: 'art' },
{ sentence: '5. name _____', answer: 'countries' }
]
}
]
},
{
part: 'Part III',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'fill-going-to',
title: 'A. Complete the following sentences (Conditional Type I).',
text: '1. If my brother [1] (go) out with his friends tonight, I [2] (watch) the football match on TV. 2. I [3] (earn) a lot of money if I [4] (get) a good job. 3. If Kate [5] (hurry / not), she [6] (miss) the bus. 4. If we [7] (meet) them tomorrow, we [8] (say) your hello. 5. The air [9] (be) clean if people [10] (use) public transportation.',
blanks: [
{ num: 1, answer: 'goes' },
{ num: 2, answer: 'will watch' },
{ num: 3, answer: 'will earn' },
{ num: 4, answer: 'get' },
{ num: 5, answer: "doesn't hurry" },
{ num: 6, answer: 'will miss' },
{ num: 7, answer: 'meet' },
{ num: 8, answer: 'will say' },
{ num: 9, answer: 'will be' },
{ num: 10, answer: 'use' }
]
},
{
type: 'short-answer',
title: 'B. Complete the following conditional sentences.',
questions: [
{ q: 'If I learn English well, _____', sampleAnswer: 'If I learn English well, I will find a good job.' },
{ q: 'If I see my first English teacher, _____', sampleAnswer: 'If I see my first English teacher, I will thank him/her.' },
{ q: "I won't pass my exam if _____", sampleAnswer: "I won't pass my exam if I don't study hard." },
{ q: 'I will go to Mashhad if _____', sampleAnswer: 'I will go to Mashhad if I have enough time in summer.' }
]
}
]
},
{
part: 'Part IV',
section: 'Pronunciation',
sectionFa: 'تلفظ',
tasks: [
{
type: 'pron-practice',
title: 'Read the following sentences with the appropriate intonation. (↗ سپس ↘)',
items: [
'If you study hard ↗, you can pass your exam ↘.',
'If it rains ↗, we will stay at home ↘.',
"You won't get the train ↗ if you don't hurry up ↘."
]
}
]
},
{
part: 'Part V',
section: 'Writing',
sectionFa: 'نوشتن',
tasks: [
{
type: 'fill-words',
title: 'A. Complete the sentences with the appropriate forms of the verbs. (hope, agree, plan, begin)',
wordBank: ['began', 'planning', 'agreed', 'hopes'],
items: [
{ sentence: '1. Mark _____ to learn Spanish when he was 40.', answer: 'began' },
{ sentence: '2. I am _____ to go to Ardebil.', answer: 'planning' },
{ sentence: '3. The bank _____ to lend him fifty million Rials.', answer: 'agreed' },
{ sentence: '4. Maryam is seventeen and she _____ to be a translator.', answer: 'hopes' }
]
},
{
type: 'fill-words',
title: 'B. Complete the sentences with infinitive forms of the verbs. (see, swim, use, make)',
wordBank: ['to swim', 'to see', 'to make', 'to use'],
items: [
{ sentence: '1. It is not dangerous _____ in the pool.', answer: 'to swim' },
{ sentence: '2. I am surprised _____ my teacher again.', answer: 'to see' },
{ sentence: '3. My brother was really sorry _____ that mistake.', answer: 'to make' },
{ sentence: '4. It is easy _____ this machine.', answer: 'to use' }
]
},
{
type: 'short-answer',
title: 'C. Different people want Amir to do different things. Complete the sentences. (write an essay / eat fast food / turn on the computer / go to the market with her)',
questions: [
{ q: 'The teacher told Amir _____', sampleAnswer: 'The teacher told Amir to write an essay.' },
{ q: 'His little brother asked _____', sampleAnswer: 'His little brother asked him to turn on the computer.' },
{ q: 'His parents advised _____', sampleAnswer: 'His parents advised him not to eat fast food.' },
{ q: 'His grandmother wants _____', sampleAnswer: 'His grandmother wants him to go to the market with her.' }
]
},
{
type: 'short-answer',
title: "D & E. Your own sentences / find infinitives.",
questions: [
{ q: 'D. What do your parents want you to do/be in life?', sampleAnswer: 'My parents want me to study hard / to be honest / to become a doctor ...' },
{ q: "E. Read the 'text' and find all infinitives.", sampleAnswer: 'to learn, to spend, to understand, to start, to know, ...' }
]
}
]
}
],
quiz: [
{ q: 'If you study hard, you _____ the exams.', qFa: 'اگر سخت درس بخوانی، در امتحانات قبول می‌شوی.', options: ['will pass', 'pass', 'passed', 'are passing'], correct: 0 },
{ q: 'If it _____ tomorrow, we will stay at home.', qFa: 'اگر فردا باران ببارد، خانه می‌مانیم.', options: ['rains', 'will rain', 'rained', 'raining'], correct: 0 },
{ q: "I've always been _____ in football.", qFa: 'همیشه به فوتبال علاقه داشته‌ام.', options: ['interested', 'interesting', 'interest', 'interests'], correct: 0 },
{ q: 'I have decided _____ Spanish.', qFa: 'تصمیم گرفته‌ام اسپانیایی یاد بگیرم.', options: ['to learn', 'learning', 'learn', 'learned'], correct: 0 },
{ q: "Each person's fingerprint is _____.", qFa: 'اثر انگشت هر شخص منحصربه‌فرد است.', options: ['unique', 'vast', 'decorative', 'valuable'], correct: 0 },
{ q: "'cheap' and '_____' are antonyms.", qFa: 'cheap و expensive متضادند.', options: ['expensive', 'famous', 'interesting', 'tiny'], correct: 0 }
]
}
];
