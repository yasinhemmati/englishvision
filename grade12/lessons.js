const LESSONS = [
{
num: 1,
title: 'Sense of Appreciation',
titleFa: 'حس قدردانی',
function: 'Sense of Appreciation',
facts: [
{ en: 'Helping others lowers blood pressure.', fa: 'کمک به دیگران فشار خون را پایین می‌آورد.' },
{ en: 'Kindness boosts energy and strength in elderly people.', fa: 'مهربانی انرژی و توان سالمندان را افزایش می‌دهد.' },
{ en: 'Teenagers who help others are more successful in life.', fa: 'نوجوانانی که به دیگران کمک می‌کنند در زندگی موفق‌ترند.' },
{ en: 'Listening to the advice of older people improves our lives.', fa: 'گوش دادن به نصیحت بزرگ‌ترها زندگی ما را بهتر می‌کند.' },
{ en: 'Taking care of grandchildren increases brain function and memory.', fa: 'مراقبت از نوه‌ها عملکرد مغز و حافظه را تقویت می‌کند.' }
],
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'A',
instruction: 'A. Match the pictures with the following sentences.',
instructionFa: 'تصاویر را با جمله‌ها تطبیق بده.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'Children should respect their parents.', fa: 'بچه‌ها باید به والدینشان احترام بگذارند.', image: 'gr-respect.jpg' },
{ id: 'b', phrase: 'We have to take care of elderly people.', fa: 'باید از سالمندان مراقبت کنیم.', image: 'gr-elderly.jpg' },
{ id: 'c', phrase: 'Family members should listen to each other.', fa: 'اعضای خانواده باید به حرف هم گوش بدهند.', image: 'gr-listen.jpg' },
{ id: 'd', phrase: 'We can help many people by donating what they need.', fa: 'با اهدای آنچه نیاز دارند می‌توانیم به خیلی‌ها کمک کنیم.', image: 'gr-donate.jpg' }
],
followup: 'How do you feel when you read about helping others?',
followupFa: 'وقتی درباره کمک به دیگران می‌خوانی چه حسی داری؟',
followupType: 'two-groups',
groupLabels: ['Picture', 'Sentence']
},
{
label: 'B',
instruction: 'B. Why are these people famous? How do you feel when you read about these people?',
instructionFa: 'این افراد چرا مشهورند؟',
type: 'fill-bank',
sentences: [
{ text: '1. Rizali Khajavi → _____', answer: 'دهقان فداکار — نجات مسافران قطار' },
{ text: '2. Hassan Omidzadeh → _____', answer: 'معلم فداکار — نجات دانش‌آموزان از آتش' },
{ text: '3. Jabbar Baghcheban → _____', answer: 'بنیان‌گذار آموزش ناشنوایان در ایران' },
{ text: '4. Abbas Babaei → _____', answer: 'خلبان شهید و فداکار دفاع مقدس' }
]
},
{
label: 'C',
instruction: 'C. Write appropriate nouns after the following adjectives. Then check (✓) the positive adjectives.',
instructionFa: 'بعد از هر صفت یک اسم مناسب بنویس؛ صفت‌های مثبت را علامت بزن.',
type: 'fill-bank',
wordBank: ['✓ مثبت', '✗ منفی'],
sentences: [
{ text: 'a polite _____ (✓)' },
{ text: 'a cruel _____ (✗)' },
{ text: 'some lazy _____ (✗)' },
{ text: 'two kind _____ (✓)' },
{ text: 'a loving _____ (✓)' },
{ text: 'some careful _____ (✓)' }
]
}
]
},
conversation: {
subtitle: 'Talking about a Great Person',
subtitleFa: 'گفت‌وگو درباره یک انسان بزرگ',
desc: 'سارا یک هفته است در مرکز طبی کودکان بستری است؛ آنفولانزای شدیدی گرفته. روی دیوار عکس پیرمردی هست. وقتی پرستار دمای بدنش را می‌گیرد، گفت‌وگو شروع می‌شود.',
newWordsHint: ['take temperature', 'physician', 'regard', 'dedicated', 'spare no pains', 'distinguished', 'not surprisingly', 'found'],
lines: [
{ speaker: 'Sara', role: 'student', en: 'Excuse me, who is that man in the picture?', fa: 'ببخشید، آن مرد در عکس کیست؟' },
{ speaker: 'Nurse', role: 'teacher', en: "Oh, don't you know him? Have you ever heard of Dr. Mohammad Gharib?", fa: 'اوه، نمی‌شناسیش؟ تا حالا اسم دکتر محمد قریب را شنیده‌ای؟' },
{ speaker: 'Sara', role: 'student', en: "I guess I have only seen his name in my English book, but I'm not sure about it.", fa: 'فکر کنم فقط اسمش را در کتاب انگلیسی‌ام دیده‌ام، ولی مطمئن نیستم.' },
{ speaker: 'Nurse', role: 'teacher', en: 'Dr. Gharib was a famous physician.', fa: 'دکتر قریب پزشک مشهوری بود.' },
{ speaker: 'Sara', role: 'student', en: 'Oh,… can you tell me a little about his life?', fa: 'اوه... می‌توانی کمی درباره زندگی‌اش بگویی؟' },
{ speaker: 'Nurse', role: 'teacher', en: 'Dr. Gharib was born in Tehran in 1288. After receiving his diploma, he went abroad to study medicine. In 1316 he became a physician and then came back to his homeland. In 1347 this center was founded by Dr. Gharib and one of his close friends.', fa: 'دکتر قریب سال ۱۲۸۸ در تهران به دنیا آمد. بعد از گرفتن دیپلم، برای تحصیل پزشکی به خارج رفت. سال ۱۳۱۶ پزشک شد و به وطنش برگشت. سال ۱۳۴۷ این مرکز توسط دکتر قریب و یکی از دوستان نزدیکش تأسیس شد.' },
{ speaker: 'Sara', role: 'student', en: "Really? I didn't know that.", fa: 'واقعاً؟ نمی‌دانستم.' },
{ speaker: 'Nurse', role: 'teacher', en: 'Dr. Gharib was also a generous man. He spared no pains to cure sick children. He was very friendly and helpful to poor families. Not surprisingly, he was regarded as a dedicated physician.', fa: 'دکتر قریب مرد بخشنده‌ای هم بود. برای درمان کودکان بیمار از هیچ تلاشی دریغ نمی‌کرد. با خانواده‌های فقیر بسیار مهربان و یاری‌رسان بود. جای تعجب نیست که او را پزشکی فداکار می‌دانستند.' },
{ speaker: 'Sara', role: 'student', en: "It's a pity! I didn't know such a great man.", fa: 'حیف! چنین مرد بزرگی را نمی‌شناختم.' },
{ speaker: 'Nurse', role: 'teacher', en: "He was known as a distinguished university professor, too. The first Persian textbook on children's diseases was written by him. He taught medicine to thousands of students.", fa: 'به‌عنوان استاد برجسته دانشگاه هم شناخته می‌شد. اولین کتاب درسی فارسی بیماری‌های کودکان توسط او نوشته شد. به هزاران دانشجو پزشکی آموخت.' },
{ speaker: 'Sara', role: 'student', en: 'Oh, what a great man he was!', fa: 'اوه، چه مرد بزرگی بود!' },
{ speaker: 'Nurse', role: 'teacher', en: "By the way, it might be interesting to know that your physician was one of Dr. Gharib's students!", fa: 'راستی، شاید جالب باشد بدانی پزشک خودت یکی از شاگردان دکتر قریب بوده!' },
{ speaker: 'Sara', role: 'student', en: "Really?! That's interesting!", fa: 'واقعاً؟! چه جالب!' }
],
questions: [
{ q: 'When was Dr. Gharib born?', fa: 'دکتر قریب کِی به دنیا آمد؟' },
{ q: 'Why was Dr. Gharib regarded as a kind physician?', fa: 'چرا دکتر قریب را پزشکی مهربان می‌دانستند؟' },
{ q: 'Have you seen Dr. Gharib TV series?', fa: 'سریال دکتر قریب را دیده‌ای؟' }
]
},
newWords: {
lookRead: [
{ en: 'Hamid sits on the {sofa} and watches TV all the time.', fa: 'حمید همیشه روی {مبل} می‌نشیند و تلویزیون تماشا می‌کند.', image: 'nw-sofa.jpg' },
{ en: 'My grandfather {feeds} the pigeons in the park every morning.', fa: 'پدربزرگم هر صبح در پارک به کبوترها {غذا می‌دهد}.', image: 'nw-feed.jpg' },
{ en: "Dad really {shouted} at me when I didn't do my homework.", fa: 'وقتی تکالیفم را انجام ندادم، بابا واقعاً سرم {داد زد}.', image: 'nw-shout.jpg' },
{ en: 'We have to speak louder, because my grandmother is {hard of hearing}.', fa: 'باید بلندتر حرف بزنیم، چون مادربزرگم {سنگین‌گوش} است.', image: 'nw-hardofhearing.jpg' },
{ en: 'Ferdowsi {was born} in a village near Toos.', fa: 'فردوسی در روستایی نزدیک توس {به دنیا آمد}.', image: 'nw-ferdowsi.jpg' },
{ en: 'My uncle went to his son and {hugged} him.', fa: 'عمویم پیش پسرش رفت و او را {در آغوش گرفت}.', image: 'nw-hug.jpg' },
{ en: "My little sister sits on my mother's {lap} all the time.", fa: 'خواهر کوچکم همیشه روی {پای} مادرم می‌نشیند.', image: 'nw-lap.jpg' }
],
definitions: [
{ word: 'burst into tears', def: 'to cry suddenly', fa: 'ناگهان زیر گریه زدن', example: 'Aida {burst into tears} when she saw her score.' },
{ word: 'repeatedly', def: 'many times', fa: 'مکرراً', example: "I've told Mohsen {repeatedly} to talk politely to his teachers." },
{ word: 'forgive', def: 'to stop being angry with someone', fa: 'بخشیدن', example: 'Mom {forgave} me for breaking the vase.' },
{ word: 'calmly', def: 'in a quiet way', fa: 'به‌آرامی', example: 'He always speaks slowly and {calmly}.' },
{ word: 'diary', def: 'a book in which you record your thoughts or feelings or what has happened every day', fa: 'دفتر خاطرات', example: 'I have kept a {diary} for twelve years.' }
]
},
reading: {
passageTitle: 'Respect your Parents',
passageTitleFa: 'به والدینت احترام بگذار',
strategy: {
title: 'Question Generation',
titleFa: 'تولید پرسش',
desc: 'Question generation is a reading comprehension strategy whereby readers ask and answer meaningful questions about the important points or main ideas of a text.',
steps: ['Read the text.', 'Find the important points or main ideas.', 'Make a question for each point or idea.', 'Answer the questions.', 'Starters: Who (Person) / What (Object, Description) / Where (Location) / When (Time) / Why (Reason) / How (Quantity, Process)'],
descFa: 'به‌جای پاسخ دادن صرف به سؤالات کتاب، خودت از نکات مهم متن سؤال بساز و جواب بده.'
},
paragraphs: [
{ en: 'On a spring morning, an old woman was sitting on the sofa in her house. Her young son was reading a newspaper. Suddenly a pigeon sat on the window.', fa: 'یک صبح بهاری، پیرزنی در خانه‌اش روی مبل نشسته بود. پسر جوانش روزنامه می‌خواند. ناگهان کبوتری روی پنجره نشست.' },
{ en: 'The mother asked her son quietly, "What is this?" The son replied: "It is a pigeon". After a few minutes, she asked her son for the second time, "What is this?" The son said, "Mom, I have just told you, "It is a pigeon, a pigeon".', fa: 'مادر آرام از پسرش پرسید: «این چیست؟» پسر جواب داد: «کبوتر است». چند دقیقه بعد، برای بار دوم پرسید: «این چیست؟» پسر گفت: «مامان، همین الان گفتم، کبوتر است، کبوتر».' },
{ en: 'After a little while, the old mother asked her son for the third time, "What is this?" This time the son shouted at his mother, "Why do you keep asking me the same question again and again? Are you hard of hearing?"', fa: 'کمی بعد، مادر پیر برای بار سوم پرسید: «این چیست؟» این بار پسر سر مادرش داد زد: «چرا یک سؤال را هی تکرار می‌کنی؟ مگر سنگین‌گوشی؟»' },
{ en: 'A little later, the mother went to her room and came back with an old diary. She said, "My dear son, I bought this diary when you were born". Then, she opened a page and kindly asked her son to read that page. The son looked at the page, paused and started reading it aloud: "Today my little son was sitting on my lap, when a pigeon sat on the window. My son asked me what it was 15 times, and I replied to him all 15 times that it was a pigeon. I hugged him lovingly each time when he asked me the same question again and again. I did not feel angry at all. I was actually feeling happy for my lovely child."', fa: 'کمی بعد، مادر به اتاقش رفت و با دفتر خاطرات قدیمی‌ای برگشت. گفت: «پسر عزیزم، این دفتر را وقتی تو به دنیا آمدی خریدم». بعد صفحه‌ای را باز کرد و مهربانانه از پسرش خواست آن را بخواند. پسر به صفحه نگاه کرد، مکثی کرد و بلند شروع به خواندن کرد: «امروز پسر کوچکم روی پایم نشسته بود که کبوتری روی پنجره نشست. پسرم ۱۵ بار از من پرسید این چیست و من هر ۱۵ بار جواب دادم که کبوتر است. هر بار که همان سؤال را دوباره می‌پرسید، عاشقانه در آغوشش می‌گرفتم. اصلاً عصبانی نشدم. در واقع برای کودک دوست‌داشتنی‌ام خوشحال بودم.»' },
{ en: 'Suddenly the son burst into tears, hugged his old mother and said repeatedly, "Mom, mom, forgive me; please forgive me." The old woman hugged her son, kissed him and said calmly, "We must care for those who once cared for us. We all know how parents cared for their children for every little thing. Children must love them, respect them, and care for them".', fa: 'ناگهان پسر زیر گریه زد، مادر پیرش را در آغوش گرفت و مکرر گفت: «مامان، مامان، مرا ببخش؛ خواهش می‌کنم ببخش.» پیرزن پسرش را در آغوش گرفت، بوسید و آرام گفت: «باید از کسانی مراقبت کنیم که روزی از ما مراقبت کردند. همه می‌دانیم والدین برای هر چیز کوچکی چطور از بچه‌هایشان مراقبت کردند. بچه‌ها باید دوستشان بدارند، به آن‌ها احترام بگذارند و از آن‌ها مراقبت کنند.»' }
],
glossary: {
'spring morning': 'صبح بهاری', 'sofa': 'مبل', 'newspaper': 'روزنامه', 'pigeon': 'کبوتر',
'quietly': 'آرام', 'replied': 'جواب داد', 'shouted': 'داد زد', 'hard of hearing': 'سنگین‌گوش',
'diary': 'دفتر خاطرات', 'were born': 'به دنیا آمدی', 'kindly': 'مهربانانه', 'paused': 'مکث کرد',
'aloud': 'بلند', 'lap': 'پا (دامن)', 'hugged': 'در آغوش گرفت', 'lovingly': 'عاشقانه',
'burst into tears': 'زیر گریه زد', 'repeatedly': 'مکرراً', 'forgive': 'ببخش', 'calmly': 'به‌آرامی',
'care for': 'مراقبت کردن از', 'respect': 'احترام گذاشتن'
},
comprehension: [
{
type: 'scan',
title: 'A. Read the passage. Generate at least five questions with the question starters and then answer them.',
items: [
{ q: 'Who ... ? (e.g. Who was reading a newspaper?)', sampleAnswer: 'The young son.' },
{ q: 'What ... ? (e.g. What sat on the window?)', sampleAnswer: 'A pigeon.' },
{ q: 'When ... ? (e.g. When did the mother buy the diary?)', sampleAnswer: 'When her son was born.' },
{ q: 'Why ... ? (e.g. Why did the son burst into tears?)', sampleAnswer: 'Because he understood how patient and loving his mother had been.' },
{ q: 'How ... ? (e.g. How many times did the little son ask?)', sampleAnswer: '15 times.' }
]
},
{
type: 'scan',
title: "B. Skim the 'Reading'. Write its main idea.",
items: [
{ q: 'Main idea:', sampleAnswer: 'We must care for and respect our parents, who once cared for us with love and patience.' }
]
},
{
type: 'scan',
title: "C. Read the 'Reading'. Find what these words refer to.",
items: [
{ q: 'her (paragraph 1, line 2)', sampleAnswer: 'The old woman' },
{ q: 'his (paragraph 3, line 2)', sampleAnswer: 'The son' },
{ q: 'you (paragraph 3, line 2)', sampleAnswer: 'The mother' },
{ q: 'me (paragraph 4, line 5)', sampleAnswer: 'The mother (in the diary)' },
{ q: 'them (paragraph 5, line 6)', sampleAnswer: 'Parents' }
]
}
]
},
vocabDev: {
title: 'Vocabulary Development — Collocations',
titleFa: 'واژه‌سازی — باهم‌آیی‌ها',
blocks: [
{
type: 'affix-table',
title: 'COLLOCATIONS (باهم‌آیی‌ها)',
intro: "A collocation is two or more words that often go together. These combinations just sound 'right' to native speakers. Other combinations may be unnatural and just sound 'wrong'.",
introFa: 'باهم‌آیی یعنی دو یا چند کلمه که معمولاً با هم می‌آیند و برای گویشور بومی «درست» به گوش می‌رسند.',
headers: ['✓ درست', '✗ غلط'],
rows: [
['fast food / quick meal', 'quick food / fast meal'],
['strong wind / heavy rain', 'heavy wind / strong rain'],
['make a mistake / do exercise', 'do a mistake / make exercise'],
['read a newspaper', 'study a newspaper'],
['sit on the sofa', 'sit at the sofa'],
['hard of hearing', 'difficult of hearing']
]
},
{
type: 'fill-table',
title: 'A. Without looking back at the Conversation, make collocations by matching the columns. (B: check your answers in the Conversation and use each in a new sentence.)',
items: [
{ text: '1. feel → _____', answer: 'well' },
{ text: '2. take → _____', answer: 'temperature' },
{ text: '3. go → _____', answer: 'abroad' },
{ text: '4. spare → _____', answer: 'no pains' },
{ text: '5. not → _____', answer: 'surprisingly' },
{ text: '6. by → _____', answer: 'the way' },
{ text: '7. burst into → _____', answer: 'tears' }
]
}
]
},
grammar: {
title: 'Grammar — Passive Voice',
titleFa: 'دستور زبان — جملات مجهول',
noteText: 'این فعل <strong>مجهول (Passive)</strong> است: <code>be + قسمت سوم فعل (p.p.)</code> — کننده‌ی کار مهم نیست یا نامشخص است.',
noteMap: {
"is known": "<strong>مجهول حال ساده</strong>: <code>is + known</code> — شناخته می‌شود.",
"was born": "<strong>was born</strong> = به دنیا آمد — مجهول گذشته (همیشه مجهول به کار می‌رود).",
"is called": "<strong>مجهول حال ساده</strong>: <code>is + called</code> — نامیده می‌شود.",
"is mostly remembered": "<strong>مجهول حال ساده</strong>: <code>is + remembered</code> — به یاد آورده می‌شود.",
"is remembered": "<strong>مجهول حال ساده</strong>: <code>is + remembered</code>.",
"are used": "<strong>مجهول حال ساده</strong> با فاعل جمع: <code>are + used</code> — به کار می‌روند.",
"has been translated": "<strong>مجهول ماضی نقلی</strong>: <code>has been + p.p.</code> — ترجمه شده است.",
"was founded": "<strong>مجهول گذشته ساده</strong>: <code>was + founded</code> — تأسیس شد. (found = تأسیس کردن!)",
"was written": "<strong>مجهول گذشته ساده</strong>: <code>was + written</code> — نوشته شد.",
"was regarded": "<strong>مجهول گذشته ساده</strong>: <code>was + regarded</code> — قلمداد می‌شد.",
"was known": "<strong>مجهول گذشته ساده</strong>: <code>was + known</code> — شناخته می‌شد.",
"are made": "<strong>مجهول حال ساده</strong>: <code>are + made</code> — ساخته می‌شوند.",
"was broken": "<strong>مجهول گذشته ساده</strong>: <code>was + broken</code> — شکسته شد.",
"have been fixed": "<strong>مجهول ماضی نقلی</strong>: <code>have been + p.p.</code> — تعمیر شده‌اند.",
"has been made": "<strong>مجهول ماضی نقلی</strong>: <code>has been + made</code> — ساخته شده است.",
"was discovered": "<strong>مجهول گذشته ساده</strong>: <code>was + discovered</code> — کشف شد.",
"were invented": "<strong>مجهول گذشته ساده</strong> جمع: <code>were + invented</code> — اختراع شدند.",
"are found": "<strong>مجهول حال ساده</strong>: <code>are + found</code> — یافت می‌شوند.",
"by": "<strong>by + کننده کار</strong> — اگر بخواهیم فاعل اصلی را ذکر کنیم: <code>was discovered by Fleming</code>."
},
readTexts: {
title: 'A. Read the following text.',
texts: [
{ en: 'Hafez {is known} to be as one of the most famous Persian poets of all time. He {was born} sometime between the years 1310 and 1337 A.D. in Shiraz. In his childhood, he received religious education. He {is called} Hafez because he learned the Holy Quran by heart. Hafez {is mostly remembered} for a special type of poetry that {is called} Ghazal. Emotions and ethics {are used} in Ghazals a lot. The collection of his poems {is called} Divan. It {has been translated} into countless languages including German, English and French. Hafez {is known} to be the inspiration for many poets and authors around the world.', fa: 'حافظ به‌عنوان یکی از مشهورترین شاعران فارسی همه‌ی دوران‌ها شناخته می‌شود. او زمانی بین سال‌های ۱۳۱۰ تا ۱۳۳۷ میلادی در شیراز به دنیا آمد. در کودکی تعلیمات دینی دید. به او حافظ می‌گویند چون قرآن کریم را از بر کرد. حافظ بیشتر برای نوع خاصی از شعر که غزل نامیده می‌شود به یاد آورده می‌شود. احساسات و اخلاق در غزل‌ها بسیار به کار می‌روند. مجموعه اشعارش دیوان نامیده می‌شود. به زبان‌های بی‌شماری از جمله آلمانی، انگلیسی و فرانسه ترجمه شده است. حافظ الهام‌بخش بسیاری از شاعران و نویسندگان دنیا شناخته می‌شود.' }
]
},
explanation: [
'در جمله‌ی <strong>معلوم (Active)</strong> فاعل کار را انجام می‌دهد؛ در جمله‌ی <strong>مجهول (Passive)</strong> روی خودِ کار یا دریافت‌کننده تمرکز می‌شود.',
'ساختار مجهول: <code>be (am/is/are/was/were/been) + قسمت سوم فعل</code>',
'مفعولِ جمله معلوم → فاعلِ جمله مجهول می‌شود.',
'حال ساده: <code>is/are + p.p.</code> · گذشته ساده: <code>was/were + p.p.</code> · ماضی نقلی: <code>has/have been + p.p.</code>',
'برای ذکر کننده‌ی کار از <code>by</code> استفاده می‌کنیم: <code>Penicillin was discovered by Fleming.</code>'
],
tablesTitle: 'B. Read the following example sentences.',
tables: [
{
title: 'Active ↔ Passive',
headers: ['Active (معلوم)', 'Passive (مجهول)'],
rows: [
['She makes pancakes every morning.', 'Pancakes are made every morning.'],
['Ali broke the window yesterday.', 'The window was broken yesterday.'],
['They have fixed the cars.', 'The cars have been fixed.'],
['Alexander Fleming discovered penicillin.', 'Penicillin was discovered by Alexander Fleming.'],
['Scientists find solutions to problems.', 'Solutions to problems are found by scientists.'],
['Doctors have made a new medicine to cure cancer.', 'A new medicine has been made by doctors to cure cancer.']
],
examples: [
{ en: 'Pancakes {are made} every morning.', fa: 'هر صبح پنکیک درست می‌شود.' },
{ en: 'The window {was broken} yesterday.', fa: 'پنجره دیروز شکسته شد.' }
]
},
{
title: 'ساختار در زمان‌های مختلف',
headers: ['زمان', 'ساختار مجهول', 'مثال'],
rows: [
['حال ساده', 'am/is/are + p.p.', 'Solutions are found.'],
['گذشته ساده', 'was/were + p.p.', 'Penicillin was discovered.'],
['ماضی نقلی', 'has/have been + p.p.', 'The cars have been fixed.']
]
}
],
notes: [
"C. Tell your teacher how 'passive voice' is made.",
"D. Read the Conversation and underline all 'passive voices'."
],
practice: {
title: 'E. Read the following paragraph and choose the best verb forms.',
instruction: 'متن «اختراعات» را بخوان و شکل درست فعل را انتخاب کن.',
items: [
{ sentence: 'Many products _____ each year.', options: ['are developed', 'developed'], correct: 0 },
{ sentence: 'Light bulb, camera, airplane, and telephone _____ by scientists and inventors.', options: ['were invented', 'invented'], correct: 0 },
{ sentence: 'Laptops, smart phones, and tablets _____ by lots of work.', options: ['were made', 'made'], correct: 0 },
{ sentence: "Some inventions _____ by accident or scientists' mistakes.", options: ['were created', 'are created'], correct: 0 },
{ sentence: 'Penicillin, for instance, _____ quite accidentally.', options: ['was discovered', 'were discovered'], correct: 0 },
{ sentence: 'It happened when Alexander Fleming _____ on bacteria.', options: ['was working', 'was worked'], correct: 0 },
{ sentence: "Microwave oven also _____ during a scientist's experiment on energy.", options: ['was invented', 'invented'], correct: 0 },
{ sentence: 'More interestingly, some tools _____ by scientists at all.', options: ['are not made', 'do not make'], correct: 0 },
{ sentence: 'Some like dishwashers and computer games _____ by ordinary people.', options: ['were made', 'made'], correct: 0 }
]
},
friendWork: {
title: 'F. Pair up and talk about the things that happened in the past without mentioning the doer.',
partA: { instruction: 'مثال: The window was broken.', items: ['The window was broken.', 'My bike was stolen.', 'This school was built 20 years ago.'] },
partB: { instruction: 'الگو:', items: ['... was/were + p.p.'] }
},
goingTo: {
title: 'Tag Questions (سؤالات ضمیمه)',
note: '<strong>سؤال ضمیمه</strong>: سؤال کوتاهی در انتهای جمله. جمله مثبت → ضمیمه منفی؛ جمله منفی → ضمیمه مثبت. فعل کمکی همان فعل جمله است.',
noteMap: {
"isn't she": "جمله مثبت با <code>is</code> → ضمیمه منفی: <strong>isn't she?</strong>",
"isn't he": "جمله مثبت با <code>is</code> → ضمیمه منفی: <strong>isn't he?</strong>",
"was he": "جمله منفی با <code>wasn't</code> → ضمیمه مثبت: <strong>was he?</strong>",
"weren't they": "جمله مثبت با <code>were</code> → ضمیمه منفی: <strong>weren't they?</strong>",
"aren't they": "جمله مثبت با <code>are</code> → ضمیمه منفی: <strong>aren't they?</strong>",
"will he": "جمله منفی با <code>won't</code> → ضمیمه مثبت: <strong>will he?</strong>",
"haven't they": "جمله مثبت با <code>have</code> (ماضی نقلی) → ضمیمه منفی: <strong>haven't they?</strong>",
"hasn't she": "جمله مثبت با <code>has</code> → ضمیمه منفی: <strong>hasn't she?</strong>"
},
readTitle: 'A. Read the following example sentences.',
examples: [
{ en: "Mina is happy, {isn't she}?", fa: 'مینا خوشحال است، نه؟' },
{ en: "He's writing an email, {isn't he}?", fa: 'دارد ایمیل می‌نویسد، نه؟' },
{ en: "George wasn't hungry, {was he}?", fa: 'جورج گرسنه نبود، بود؟' },
{ en: "The girls were weaving a carpet, {weren't they}?", fa: 'دخترها داشتند فرش می‌بافتند، نه؟' },
{ en: "They are going to Hamedan, {aren't they}?", fa: 'دارند به همدان می‌روند، نه؟' },
{ en: "His father won't buy a new car, {will he}?", fa: 'پدرش ماشین جدید نمی‌خرد، می‌خرد؟' },
{ en: "The boys have broken the window, {haven't they}?", fa: 'پسرها پنجره را شکسته‌اند، نه؟' },
{ en: "Your sister has passed the exam, {hasn't she}?", fa: 'خواهرت امتحان را قبول شده، نه؟' }
],
table: {
headers: ['جمله', 'ضمیمه'],
rows: [
['مثبت (is/are/was/were...)', "منفی (isn't / aren't / wasn't ...)"],
['منفی (isn\'t / won\'t ...)', 'مثبت (is / will ...)'],
['ماضی نقلی (has/have)', "hasn't / haven't + ضمیر"],
['آینده (will / won\'t)', "won't / will + ضمیر"]
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Eliciting Agreement and Signaling Uncertainty',
strategyTitleFa: 'راهبرد گفتاری — تأییدخواهی و ابراز تردید',
strategyDesc: "A. We use 'tag questions' for two reasons: eliciting agreement (confirming facts) and signaling uncertainty.",
patterns: [
{ q: "Sam has not come to work. I've heard he's sick, isn't he?", a: 'Oh, yes. He was not well yesterday.' },
{ q: "What's wrong with him? — The doctors are checking his health condition.", a: "It isn't something serious, is it? — I hope not." }
],
patternsList: [
"He's really generous, isn't he?",
"They are going to leave here, aren't they?",
'This cannot be true, can it?'
],
listenComplete: {
title: 'B. Listen to the following conversations and answer the questions.',
conversations: [
{ num: 1, items: ['Why is Amin busy these days? .....................', 'What does Behzad think about health? .....................'] },
{ num: 2, items: ['Where are they going? .....................', 'Why does Mina prefer chess? .....................'] }
]
},
pairWork: {
title: 'Pair up and ask questions that elicit agreement or signal uncertainty.',
box1: { label: 'تأییدخواهی (confirm facts)', verbs: ['weather', 'future job', 'a place to live'] },
box2: { label: 'ابراز تردید (uncertainty)', verbs: ['future plans', 'health condition', 'problems'] }
}
},
writing: {
title: 'Writing — Compound Sentences',
titleFa: 'نوشتن — جملات مرکب',
sections: [
{
type: 'lesson-noun',
title: 'Compound Sentence',
intro: 'A sentence with more than one subject, more than one verb and a connecting word such as and, or, but or so is called a compound sentence.',
introFa: 'جمله‌ای با بیش از یک فاعل و فعل + کلمه ربط (and, or, but, so) جمله‌ی مرکب نام دارد.',
categories: [
{ label: "'and' — شباهت", examples: ['I get up early in the morning, and I make an omelet myself.'] },
{ label: "'but' — تضاد", examples: ['The book was boring, but Tom had to read it.'] },
{ label: "'or' — دو انتخاب", examples: ['You should do your homework, or you should wash the dishes.'] },
{ label: "'so' — نتیجه", examples: ['Saeed studied hard for the exam, so he passed it.'] }
]
},
{
type: 'plural-task',
title: "A. Complete the following sentences with 'and' or 'but'.",
wordBank: ['and', 'but'],
items: [
{ sentence: '1. We went to the park yesterday, _____ we had a wonderful time.', words: ['and/but'], answers: ['and'] },
{ sentence: "2. Behnam's family went to the zoo last week, _____ they did not enjoy it.", words: ['and/but'], answers: ['but'] },
{ sentence: '3. Susan has a pink dress, _____ she never wears it.', words: ['and/but'], answers: ['but'] },
{ sentence: "4. Kate saw Sofia, _____ she didn't speak to her.", words: ['and/but'], answers: ['but'] },
{ sentence: '5. My English class is really enjoyable, _____ I have a lot of homework.', words: ['and/but'], answers: ['but'] }
]
},
{
type: 'plural-task',
title: "B. Complete the following sentences with 'or' or 'so'.",
wordBank: ['or', 'so'],
items: [
{ sentence: "1. My mother doesn't like fast food, _____ she doesn't eat any.", words: ['or/so'], answers: ['so'] },
{ sentence: '2. I go out tonight, _____ I take a rest.', words: ['or/so'], answers: ['or'] },
{ sentence: '3. We can eat our lunch at the restaurant, _____ we can have it at home.', words: ['or/so'], answers: ['or'] },
{ sentence: "4. That dictionary is expensive, _____ I can't buy it.", words: ['or/so'], answers: ['so'] },
{ sentence: '5. This dress is not comfortable, _____ she rarely wears it.', words: ['or/so'], answers: ['so'] }
]
},
{
type: 'lesson-markers',
title: 'Note',
intro: 'دو نکته مهم هنگام ترکیب جملات:',
markers: [
{ marker: 'ویرگول', examples: 'Use a comma before and, or, but and so when you combine two sentences.' },
{ marker: 'ضمیر', examples: 'You can replace the repeated nouns with suitable pronouns: ...so he passed it. (نه the exam)' }
]
},
{
type: 'plural-task',
title: "C. Combine the two sentences with 'and', 'but', 'or' or 'so'.",
items: [
{ sentence: '1. Joseph is very busy today. He cannot watch TV. → _____', words: ['?'], answers: ['Joseph is very busy today, so he cannot watch TV.'] },
{ sentence: '2. My brother has a lot of books. He never reads them. → _____', words: ['?'], answers: ['My brother has a lot of books, but he never reads them.'] },
{ sentence: "3. We should do a lot of homework. We don't have enough time. → _____", words: ['?'], answers: ["We should do a lot of homework, but we don't have enough time."] },
{ sentence: '4. Sepideh likes spaghetti. Her grandmother hates spaghetti. → _____', words: ['?'], answers: ['Sepideh likes spaghetti, but her grandmother hates it.'] },
{ sentence: '5. You can buy this coat. You can buy those shoes. → _____', words: ['?'], answers: ['You can buy this coat, or you can buy those shoes.'] }
]
},
{
type: 'lesson-markers',
title: 'D, E & F. More practice',
intro: 'تمرین‌های باز:',
markers: [
{ marker: 'D. Complete', examples: 'I like learning Chinese, but ... / These shoes are not comfortable, so ... / You must study well, and ... / You can install a mobile dictionary, or ...' },
{ marker: 'E. Write', examples: 'Write five real compound sentences about yourself, your family or friends.' },
{ marker: 'F. Find', examples: 'Go back to the Reading. Find three simple and three compound sentences. Underline the subjects and circle the verbs.' }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of an interview and answer.',
tasks: [
'a. Why is knowing about the experience of our parents important? .....................',
'b. Why are our parents our first teachers? .....................',
'Listen again and write down three important points mentioned.'
]
},
reading: {
title: 'B. Now read the rest.',
text: "Yet another important thing is our heritage and culture. We have much to learn from our parents regarding our heritage, to be proud of our past. This heritage and history brings a sense of belonging. Most importantly, it brings us a sense of identity of our past and the responsibility to protect it for our future generations. What I can add at the end is the role of our parents' morals, values, and principles in our lives. Our elders have either learned, created or have been brought up with a set of morals, values and principles in their lives. Our elders want the best for us and they are willing to tell us what set of rules and guidelines have made them successful, and hopefully, peaceful.",
fa: 'یک چیز مهم دیگر، میراث و فرهنگ ماست. از والدینمان درباره میراثمان چیزهای زیادی برای آموختن داریم تا به گذشته‌مان افتخار کنیم. این میراث و تاریخ حس تعلق می‌آورد. مهم‌تر از همه، حس هویتِ گذشته و مسئولیتِ حفظ آن برای نسل‌های آینده را به ما می‌دهد. در پایان می‌توانم نقش اخلاق، ارزش‌ها و اصول والدینمان در زندگی‌مان را اضافه کنم. بزرگ‌ترهای ما یا مجموعه‌ای از اخلاق، ارزش‌ها و اصول را آموخته‌اند، یا آفریده‌اند، یا با آن‌ها بزرگ شده‌اند. بزرگ‌ترهای ما بهترین‌ها را برایمان می‌خواهند و مایل‌اند به ما بگویند چه قواعد و رهنمودهایی آن‌ها را موفق و امیدوارانه آرام کرده است.',
glossary: {
'heritage': 'میراث', 'be proud of': 'افتخار کردن به', 'sense of belonging': 'حس تعلق',
'identity': 'هویت', 'responsibility': 'مسئولیت', 'generations': 'نسل‌ها', 'morals': 'اخلاقیات',
'values': 'ارزش‌ها', 'principles': 'اصول', 'have been brought up': 'بزرگ شده‌اند',
'willing': 'مایل', 'guidelines': 'رهنمودها', 'peaceful': 'آرام'
},
tasks: [
"3. Underline all 'passive tenses'.",
'Make three questions about the important points. Then answer them.'
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer.',
questions: [
'How can we learn from our parents in our lives?',
'How important is it to protect our culture for our next generation?',
'Why are our parents our blessing?'
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
type: 'short-answer',
title: 'A & B. Write the names of the following people. Do you know why we appreciate their work?',
questions: [
{ q: 'A. Write the names of the people in the pictures.', sampleAnswer: 'e.g. دکتر محمد قریب، پروفسور سمیعی، ...' },
{ q: 'B. Why do we appreciate their work?', sampleAnswer: 'Because they dedicated their lives to helping people.' }
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
passageTitle: 'Respecting Our Elders',
passage: "It is very important for us to respect our elders. It is also important to note that elders were not born elders; they were kids like us and now have grown old. A few years hence we will also grow older. If today we respect them, our present and future generations will carry those values and will learn to respect us as well when we grow old. Elders have a lot to share with us: their life experiences, their failures, their successes and many more. Thus we need to care for them because they deserve to be cared for. Respect and care for elders start with our parents as they are our first teachers in our life. No matter what we do in our lives, who we are, and where we live, we must love them as they love us unconditionally. They feel honored when we appreciate their love and respect them. So it is our duty to help them when they need us because they are not young enough to handle things on their own like before.",
passageFa: 'احترام به بزرگ‌ترها برای ما بسیار مهم است. این هم مهم است که بدانیم بزرگ‌ترها، بزرگ به دنیا نیامده‌اند؛ آن‌ها هم بچه‌هایی مثل ما بودند و حالا پیر شده‌اند. چند سال دیگر ما هم پیرتر می‌شویم. اگر امروز به آن‌ها احترام بگذاریم، نسل‌های حال و آینده‌ی ما آن ارزش‌ها را حمل می‌کنند و یاد می‌گیرند وقتی ما پیر شدیم به ما هم احترام بگذارند. بزرگ‌ترها چیزهای زیادی برای به اشتراک گذاشتن با ما دارند: تجربه‌های زندگی، شکست‌ها، موفقیت‌ها و خیلی چیزهای دیگر. پس باید از آن‌ها مراقبت کنیم چون شایسته‌ی مراقبت‌اند. احترام و مراقبت از بزرگ‌ترها از والدینمان شروع می‌شود چون آن‌ها اولین معلمان زندگی ما هستند. مهم نیست در زندگی چه می‌کنیم، که هستیم و کجا زندگی می‌کنیم؛ باید دوستشان بداریم همان‌طور که آن‌ها بی‌قیدوشرط دوستمان دارند. وقتی عشقشان را قدر می‌دانیم و به آن‌ها احترام می‌گذاریم، احساس افتخار می‌کنند. پس وظیفه ماست وقتی به ما نیاز دارند کمکشان کنیم چون دیگر آن‌قدر جوان نیستند که مثل قبل خودشان از پس کارها بربیایند.',
glossary: {
'elders': 'بزرگ‌ترها', 'hence': 'بعد از این', 'generations': 'نسل‌ها', 'values': 'ارزش‌ها',
'share': 'به اشتراک گذاشتن', 'failures': 'شکست‌ها', 'successes': 'موفقیت‌ها',
'deserve': 'شایسته بودن', 'unconditionally': 'بی‌قیدوشرط', 'feel honored': 'احساس افتخار کردن',
'appreciate': 'قدر دانستن', 'duty': 'وظیفه', 'handle': 'از پس برآمدن'
}
},
{
type: 'short-answer',
title: 'A. Using the question starters, generate questions. Then answer them.',
questions: [
{ q: 'Why ... ?', sampleAnswer: 'Why should we respect our elders? — Because they cared for us and deserve it.' },
{ q: 'How ... ?', sampleAnswer: 'How can we show respect? — By helping them when they need us.' },
{ q: 'What ... ?', sampleAnswer: 'What do elders share with us? — Their life experiences, failures and successes.' },
{ q: 'Who ... ?', sampleAnswer: 'Who are our first teachers? — Our parents.' }
]
},
{
type: 'short-answer',
title: 'B & C. Pronouns + title',
questions: [
{ q: 'B. Paragraph 1: "them" refers to ...', sampleAnswer: 'Elders' },
{ q: 'B. Paragraph 2: "they" refers to ...', sampleAnswer: 'Elders' },
{ q: 'B. Paragraph 3: "them" refers to ...', sampleAnswer: 'Our parents (elders)' },
{ q: 'C. Skim the text and suggest a title for it.', sampleAnswer: 'Respecting Our Elders / Why We Should Respect the Elderly' }
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
wordBank: ['future', 'real', 'love', 'start'],
items: [
{ sentence: '1. past ↔ _____', answer: 'future' },
{ sentence: '2. unreal ↔ _____', answer: 'real' },
{ sentence: '3. hate ↔ _____', answer: 'love' },
{ sentence: '4. finish ↔ _____', answer: 'start' }
]
},
{
type: 'match-columns',
title: 'B. Match the definitions with the words.',
pairs: [
{ a: 'all the people of about the same age within a society', b: 'generation', letter: 'a' },
{ a: 'a lack of success in doing something', b: 'failure', letter: 'c' },
{ a: 'to be grateful for', b: 'appreciate', letter: 'd' },
{ a: 'to be worthy', b: 'deserve', letter: 'b' }
]
},
{
type: 'fill-words',
title: 'C. Fill in the blanks with the given words. Make the necessary changes. (One is extra.)',
wordBank: ['respect', 'unconditionally', 'later', 'share', 'failure'],
items: [
{ sentence: '1. Parnia never _____ her toys with her cousins.', answer: 'shares' },
{ sentence: '2. Students show their _____ for the teacher by not talking.', answer: 'respect' },
{ sentence: '3. Their first attempt to climb Sabalan ended in _____.', answer: 'failure' },
{ sentence: '4. The project will be completed two weeks _____.', answer: 'later' }
]
},
{
type: 'fill-words',
title: 'D. Complete the following verbs with a noun or an adjective.',
wordBank: ['old', 'honored', 'things', 'elders'],
items: [
{ sentence: '1. grow _____', answer: 'old / older' },
{ sentence: '2. feel _____', answer: 'honored' },
{ sentence: '3. handle _____', answer: 'things' },
{ sentence: '4. care for _____', answer: 'elders' }
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
title: 'A. Make active and passive sentences.',
questions: [
{ q: '1. hunter / the cruel / the gazelle / killed', sampleAnswer: 'Active: The cruel hunter killed the gazelle. — Passive: The gazelle was killed by the cruel hunter.' },
{ q: '2. my mother / Sina / gave / for his birthday / a book', sampleAnswer: "Active: My mother gave Sina a book for his birthday. — Passive: A book was given to Sina (by my mother) for his birthday." },
{ q: '3. invented / Baird / the first television / in 1924', sampleAnswer: 'Active: Baird invented the first television in 1924. — Passive: The first television was invented by Baird in 1924.' },
{ q: '4. always / I / keep / in the fridge / the butter', sampleAnswer: 'Active: I always keep the butter in the fridge. — Passive: The butter is always kept in the fridge.' },
{ q: '5. did not / inform / you / us / the results / about', sampleAnswer: 'Active: You did not inform us about the results. — Passive: We were not informed about the results.' }
]
},
{
type: 'fill-words',
title: 'B. Write the passive verbs in the correct tenses.',
wordBank: ['was found', 'were opened', 'are kept', 'is spoken', 'was stolen'],
items: [
{ sentence: '1. The robber _____ by the police last week. (find)', answer: 'was found' },
{ sentence: '2. The first fast food restaurants _____ in our city thirty years ago. (open)', answer: 'were opened' },
{ sentence: '3. I have two parrots. They _____ in the cage. (keep)', answer: 'are kept' },
{ sentence: '4. Persian _____ in Iran, Tajikistan and Afghanistan. (speak)', answer: 'is spoken' },
{ sentence: "5. Jack's money _____ in the train. (steal)", answer: 'was stolen' }
]
},
{
type: 'fill-words',
title: 'C. Complete the following sentences with appropriate tag questions.',
wordBank: ["isn't it", 'have you', "isn't there", 'does he', "didn't she"],
items: [
{ sentence: "1. It's a lovely day, _____?", answer: "isn't it" },
{ sentence: "2. You haven't done your homework, _____?", answer: 'have you' },
{ sentence: '3. There is a problem here, _____?', answer: "isn't there" },
{ sentence: '4. Hamid never says a word, _____?', answer: 'does he' },
{ sentence: '5. Kate forgot to feed the chickens, _____?', answer: "didn't she" }
]
}
]
},
{
part: 'Part IV',
section: 'Writing',
sectionFa: 'نوشتن',
tasks: [
{
type: 'fill-words',
title: 'A. Complete the sentences with and, or, but and so.',
wordBank: ['and', 'or', 'but', 'so'],
items: [
{ sentence: "1. She didn't invite me, _____ I didn't go to her birthday party.", answer: 'so' },
{ sentence: '2. Robert can sing well, _____ he cannot draw well.', answer: 'but' },
{ sentence: "3. My grandfather can't sleep, _____ he is going to drink a glass of hot milk.", answer: 'so' },
{ sentence: "4. I'm hungry, _____ there is no food in the kitchen.", answer: 'but' },
{ sentence: '5. We can take a taxi, _____ travel by train.', answer: 'or' },
{ sentence: '6. Reza and Saeed went swimming last week, _____ they had a nice time.', answer: 'and' }
]
},
{
type: 'circle-task-wb',
title: 'B. Correct the underlined words using and, but, or and so.',
items: [
{ text: "It's raining, [so/or] take your umbrella.", answer: 'so' },
{ text: "It's 3 p.m., [but/so] I'm not tired at all.", answer: 'but' },
{ text: "There is snow in the street, [but/and] it's not too cold.", answer: 'but' },
{ text: 'Shiva has an exam tomorrow, [so/but] she must study well tonight.', answer: 'so' },
{ text: 'My uncle was very tired, [so/or] he went to sleep.', answer: 'so' }
]
},
{
type: 'unscramble-nouns',
title: 'C. Put the words in correct order.',
items: [
{ scrambled: 'asked / a question / my teacher / so / replied / I', answer: 'My teacher asked a question, so I replied.', group: '1' },
{ scrambled: 'studies / Mary / but / she / cannot / the exam / pass / a lot', answer: 'Mary studies a lot, but she cannot pass the exam.', group: '2' },
{ scrambled: "went / my brother / to the library / at all / he / didn't / but / study", answer: "My brother went to the library, but he didn't study at all.", group: '3' },
{ scrambled: 'Reza / the class / attend / in hospital / he / cannot / so / is', answer: 'Reza is in hospital, so he cannot attend the class.', group: '4' }
],
groups: ['1', '2', '3', '4']
}
]
}
],
quiz: [
{ q: 'Penicillin _____ by Alexander Fleming.', qFa: 'پنی‌سیلین توسط فلمینگ کشف شد.', options: ['was discovered', 'discovered', 'is discovering', 'discovers'], correct: 0 },
{ q: 'The cars _____ . (fix — ماضی نقلی مجهول)', qFa: 'ماشین‌ها تعمیر شده‌اند.', options: ['have been fixed', 'have fixed', 'were fixing', 'are fix'], correct: 0 },
{ q: "Mina is happy, _____?", qFa: 'مینا خوشحال است، نه؟', options: ["isn't she", 'is she', "doesn't she", "wasn't she"], correct: 0 },
{ q: "His father won't buy a new car, _____?", qFa: 'پدرش ماشین جدید نمی‌خرد، می‌خرد؟', options: ['will he', "won't he", 'does he', 'is he'], correct: 0 },
{ q: 'Saeed studied hard, _____ he passed the exam.', qFa: 'سعید سخت درس خواند، پس قبول شد.', options: ['so', 'but', 'or', 'because'], correct: 0 },
{ q: 'Aida _____ tears when she saw her score.', qFa: 'آیدا با دیدن نمره‌اش زیر گریه زد.', options: ['burst into', 'broke into', 'went into', 'fell into'], correct: 0 }
]
},
{
num: 2,
title: 'Look it Up!',
titleFa: 'در دیکشنری پیدایش کن!',
function: 'Look it Up!',
facts: [
{ en: 'The first Persian dictionary was compiled around 1000 years ago.', fa: 'اولین فرهنگ لغت فارسی حدود ۱۰۰۰ سال پیش گردآوری شد.' },
{ en: 'The largest dictionary in the world took 134 years to complete (from 1864 to 1998).', fa: 'تکمیل بزرگ‌ترین فرهنگ لغت دنیا ۱۳۴ سال طول کشید (از ۱۸۶۴ تا ۱۹۹۸).' },
{ en: 'Around 4,000 new words are added to the English dictionary every year.', fa: 'هر سال حدود ۴۰۰۰ کلمه‌ی جدید به فرهنگ لغت انگلیسی اضافه می‌شود.' },
{ en: 'The size of the smallest dictionary in the world is about 27×18 millimeters.', fa: 'اندازه‌ی کوچک‌ترین فرهنگ لغت دنیا حدود ۲۷×۱۸ میلی‌متر است.' }
],
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'A',
instruction: 'A. Match pictures with dictionary types.',
instructionFa: 'تصاویر را با نوع دیکشنری تطبیق بده.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'I. A monolingual dictionary', fa: 'دیکشنری یک‌زبانه (انگلیسی به انگلیسی)', image: 'gr-monolingual.jpg' },
{ id: 'b', phrase: 'II. A bilingual dictionary', fa: 'دیکشنری دوزبانه (مثل فارسی-انگلیسی)', image: 'gr-bilingual.jpg' }
],
followup: 'Which type do you use more?',
followupFa: 'تو بیشتر از کدام نوع استفاده می‌کنی؟',
followupType: 'two-groups',
groupLabels: ['Picture', 'Type']
},
{
label: 'B',
instruction: 'B. Check which type of dictionary you use in the following situations.',
instructionFa: 'برای هر موقعیت، نوع دیکشنری مناسب را مشخص کن.',
type: 'fill-bank',
wordBank: ['English-Persian', 'Persian-English', 'English-English'],
sentences: [
{ text: '1. Translating an English poem → _____', answer: 'An English-Persian dictionary' },
{ text: "2. Finding the meanings of 'quit' → _____", answer: 'An English-English dictionary' },
{ text: "3. Searching for a Persian word in English → _____", answer: 'A Persian-English dictionary' },
{ text: "4. Looking up the adjective of 'destroy' → _____", answer: 'An English-English dictionary' },
{ text: '5. Looking up the Persian meaning of "actions speak louder than words" → _____', answer: 'An English-Persian dictionary' }
]
},
{
label: 'C',
instruction: 'C. Check what types of information you cannot find in an English dictionary.',
instructionFa: 'چه اطلاعاتی را نمی‌توانی در دیکشنری انگلیسی پیدا کنی؟',
type: 'fill-bank',
wordBank: ['English meaning ✓', 'Persian meaning ✗', 'pronunciation ✓', 'stories and poems ✗', 'word types ✓', 'synonyms ✓'],
sentences: [
{ text: 'Cannot find: _____', answer: 'Persian meaning' },
{ text: 'Cannot find: _____', answer: 'stories and poems' }
]
}
]
},
conversation: {
subtitle: 'Choosing a Suitable Dictionary',
subtitleFa: 'انتخاب دیکشنری مناسب',
desc: 'مجید می‌خواهد برای کلاس انگلیسی‌اش دیکشنری مناسبی انتخاب کند. هنگام زنگ تفریح با معلمش صحبت می‌کند.',
newWordsHint: ['recommend', 'suppose', 'elementary', 'intermediate', 'advanced', 'app', 'PC', 'smart phone'],
lines: [
{ speaker: 'Majid', role: 'student', en: 'Excuse me Mr. Iranmehr, I wonder if you could help me.', fa: 'ببخشید آقای ایران‌مهر، می‌خواستم بدانم می‌توانید کمکم کنید.' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'Sure. How can I help you?', fa: 'حتماً. چطور می‌توانم کمکت کنم؟' },
{ speaker: 'Majid', role: 'student', en: "I'd like some information about a good English dictionary.", fa: 'اطلاعاتی درباره یک دیکشنری انگلیسی خوب می‌خواهم.' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'Oh, well. Have you ever used a dictionary?', fa: 'اوه، خب. تا حالا از دیکشنری استفاده کرده‌ای؟' },
{ speaker: 'Majid', role: 'student', en: "Actually, I haven't. But I've heard that using a good dictionary can really help me learn English better.", fa: 'راستش نه. ولی شنیده‌ام استفاده از دیکشنری خوب واقعاً به یادگیری بهتر انگلیسی کمک می‌کند.' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: "That's right. First, I recommend a learner's dictionary.", fa: 'درست است. اول، دیکشنری زبان‌آموز را توصیه می‌کنم.' },
{ speaker: 'Majid', role: 'student', en: "What is a learner's dictionary?", fa: 'دیکشنری زبان‌آموز چیست؟' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'It is designed for foreign students. It also helps them learn English better.', fa: 'برای دانش‌آموزان خارجی طراحی شده. به یادگیری بهتر انگلیسی هم کمک می‌کند.' },
{ speaker: 'Majid', role: 'student', en: 'Is there only one type of it?', fa: 'فقط یک نوع دارد؟' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'No, in fact dictionaries have different types, levels, and sizes.', fa: 'نه، در واقع دیکشنری‌ها انواع، سطح‌ها و اندازه‌های مختلفی دارند.' },
{ speaker: 'Majid', role: 'student', en: 'What type do you suggest?', fa: 'چه نوعی پیشنهاد می‌کنید؟' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'I suppose a monolingual dictionary is more suitable for you, because you can find word information in English.', fa: 'گمان می‌کنم دیکشنری یک‌زبانه برایت مناسب‌تر است، چون اطلاعات کلمه را به انگلیسی پیدا می‌کنی.' },
{ speaker: 'Majid', role: 'student', en: 'And what about levels?', fa: 'و سطح‌ها چطور؟' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'Well, there are usually three levels: elementary, intermediate and advanced. For you as a high school student, an elementary one is OK.', fa: 'خب، معمولاً سه سطح هست: مقدماتی، متوسط و پیشرفته. برای تو به‌عنوان دانش‌آموز دبیرستانی، مقدماتی خوب است.' },
{ speaker: 'Majid', role: 'student', en: 'Do I need a small size one?', fa: 'اندازه کوچکش را لازم دارم؟' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'Yes, a pocket dictionary. You can carry it wherever you go.', fa: 'بله، دیکشنری جیبی. هر جا بروی می‌توانی همراهت ببری.' },
{ speaker: 'Majid', role: 'student', en: "Oh, it's very good. And hmm…, is it expensive?", fa: 'اوه، خیلی خوب است. و اوم... گران است؟' },
{ speaker: 'Mr. Iranmehr', role: 'teacher', en: 'No, such dictionaries are not expensive. By the way, you can use a free online dictionary, too. And also there are some free dictionaries for PCs and apps for smart phones.', fa: 'نه، چنین دیکشنری‌هایی گران نیستند. راستی، می‌توانی از دیکشنری آنلاین رایگان هم استفاده کنی. دیکشنری‌های رایگان برای کامپیوتر و اپ برای گوشی هوشمند هم هست.' },
{ speaker: 'Majid', role: 'student', en: "Thanks, that's a good idea, but I'd like to use a pocket dictionary!", fa: 'ممنون، ایده خوبی است، ولی من دیکشنری جیبی را ترجیح می‌دهم!' }
],
questions: [
{ q: 'What type of dictionary does Mr. Iranmehr recommend?', fa: 'آقای ایران‌مهر چه نوع دیکشنری‌ای توصیه می‌کند؟' },
{ q: 'What factors do you consider when you want to choose a dictionary?', fa: 'موقع انتخاب دیکشنری چه عواملی را در نظر می‌گیری؟' },
{ q: 'What type of dictionary do you often use?', fa: 'تو معمولاً از چه دیکشنری‌ای استفاده می‌کنی؟' }
]
},
newWords: {
lookRead: [
{ en: 'Try to avoid foods that {contain} a lot of fat.', fa: 'سعی کن از غذاهایی که چربی زیادی {دارند} پرهیز کنی.', image: 'nw-contain.jpg' },
{ en: "I circled the dictionary {entry} for the word 'purpose'.", fa: 'دور {مدخلِ} کلمه‌ی purpose در دیکشنری خط کشیدم.', image: 'nw-entry.jpg' },
{ en: 'C is the {symbol} for carbon.', fa: 'C {نماد} کربن است.', image: 'nw-symbol.jpg' },
{ en: 'I.R. {stands for} Islamic Republic.', fa: 'I.R. {مخفف} جمهوری اسلامی است.', image: 'nw-standsfor.jpg' },
{ en: "Mehran couldn't {figure out} what the teacher was talking about.", fa: 'مهران نتوانست {بفهمد} معلم درباره چه صحبت می‌کند.', image: 'nw-figureout.jpg' }
],
definitions: [
{ word: 'combination', def: 'an arrangement in a particular order', fa: 'ترکیب', example: 'From the letters X and Y, we can get two {combinations}: XY and YX.' },
{ word: 'introduction', def: 'the part at the beginning of a book that gives a general idea of what it is about', fa: 'مقدمه', example: 'This book has only a two-page {introduction}.' },
{ word: 'effectively', def: 'in a way that is successful and achieves what you want', fa: 'به‌طور مؤثر', example: "If you know how to study more {effectively}, you'll be able to learn more." },
{ word: 'arrange', def: 'to put things in a neat, attractive, or useful order', fa: 'مرتب کردن', example: "We'll need to {arrange} the chairs around the table." },
{ word: 'jump into', def: 'to suddenly decide to do something', fa: 'ناگهانی شروع کردن', example: 'I did not read the introduction and {jumped into} the next part.' }
]
},
reading: {
passageTitle: 'How to Use a Dictionary',
passageTitleFa: 'چگونه از دیکشنری استفاده کنیم',
strategy: {
title: 'Highlighting',
titleFa: 'برجسته‌سازی',
desc: 'One way to remember what you have read is to highlight important information.',
steps: ['Highlight the main ideas.', 'Highlight the key points not minor details or less important information.', 'Highlight phrases and parts of sentences instead of entire sentences.', 'Do not highlight many sentences or too much of the text.'],
descFa: 'نکات کلیدی و عبارت‌ها را برجسته کن، نه جزئیات کم‌اهمیت یا کل جمله‌ها را.'
},
paragraphs: [
{ en: 'A good dictionary gives the user information about words such as spellings, pronunciations and definitions. It also gives examples of how to use the words in sentences correctly. Therefore, it is essential to know how to use a dictionary. In this lesson, we provide you with some helpful tips on how to use a dictionary effectively.', fa: 'یک دیکشنری خوب به کاربر اطلاعاتی درباره کلمات مثل املا، تلفظ و تعریف می‌دهد. مثال‌هایی هم از کاربرد درست کلمات در جمله ارائه می‌کند. بنابراین دانستن نحوه‌ی استفاده از دیکشنری ضروری است. در این درس نکات مفیدی برای استفاده‌ی مؤثر از دیکشنری ارائه می‌کنیم.' },
{ en: "1. Choose the Right Dictionary. There are many different types of dictionaries such as learner's dictionaries, general dictionaries, picture dictionaries, etc. Therefore, first identify your needs. Without choosing the right one you cannot meet your language needs.", fa: '۱. دیکشنری درست را انتخاب کن. انواع مختلفی از دیکشنری‌ها هست: دیکشنری زبان‌آموز، عمومی، تصویری و... . پس اول نیازهایت را مشخص کن. بدون انتخاب درست نمی‌توانی نیازهای زبانی‌ات را برآورده کنی.' },
{ en: '2. Read the Introduction. The best way to learn how to use your dictionary effectively is to read its introduction. This section explains issues like how entries are arranged, what information is offered in entries and what abbreviations and pronunciation symbols are used throughout the entries.', fa: '۲. مقدمه را بخوان. بهترین راه یادگیری استفاده‌ی مؤثر از دیکشنری، خواندن مقدمه‌ی آن است. این بخش توضیح می‌دهد مدخل‌ها چطور مرتب شده‌اند، چه اطلاعاتی در مدخل‌ها هست و چه مخفف‌ها و نمادهای تلفظی در سراسر مدخل‌ها به کار رفته است.' },
{ en: '3. Learn the Abbreviations. Different types of abbreviations are often used in the definitions for a word. This can be confusing if you do not know what the abbreviations stand for.', fa: '۳. مخفف‌ها را یاد بگیر. انواع مخفف‌ها اغلب در تعریف کلمات به کار می‌روند. اگر ندانی مخفف‌ها نشانه‌ی چه هستند، گیج‌کننده می‌شود.' },
{ en: '4. Learn the Guide to Pronunciation. If you immediately jump into using the dictionary without understanding the pronunciation guide, it can be difficult to figure it out.', fa: '۴. راهنمای تلفظ را یاد بگیر. اگر بدون فهمیدن راهنمای تلفظ یکباره سراغ دیکشنری بروی، فهمیدنش سخت می‌شود.' },
{ en: '5. Read the Guide Words. These are the two words at the top of each page that show the first and last entries on the page. These words will help you find the word you are looking for in the right letter section.', fa: '۵. کلمات راهنما را بخوان. این دو کلمه بالای هر صفحه‌اند که اولین و آخرین مدخل صفحه را نشان می‌دهند. این کلمات کمکت می‌کنند کلمه‌ی موردنظر را در بخش حرفی درست پیدا کنی.' },
{ en: '6. Read the Definitions. Once you find an entry, you can find the exact meaning of the word, its pronunciation, part of speech, synonyms, antonyms, and probably its origin.', fa: '۶. تعریف‌ها را بخوان. وقتی مدخلی را پیدا کردی، می‌توانی معنی دقیق کلمه، تلفظ، نوع کلمه، مترادف‌ها، متضادها و احتمالاً ریشه‌اش را بیابی.' },
{ en: "7. Look for Collocations. Learning the meaning of a single word is not usually enough. Through sentence examples, try to learn 'words in combination' to expand your vocabulary.", fa: '۷. دنبال باهم‌آیی‌ها بگرد. یادگیری معنی یک کلمه‌ی تنها معمولاً کافی نیست. از طریق مثال‌های جمله‌ای، «کلمات در ترکیب» را یاد بگیر تا دایره واژگانت گسترش یابد.' }
],
glossary: {
'spellings': 'املاها', 'pronunciations': 'تلفظ‌ها', 'definitions': 'تعریف‌ها', 'essential': 'ضروری',
'tips': 'نکته‌ها', 'effectively': 'به‌طور مؤثر', 'identify': 'مشخص کردن', 'meet your language needs': 'نیازهای زبانی را برآورده کردن',
'Introduction': 'مقدمه', 'entries': 'مدخل‌ها', 'are arranged': 'مرتب شده‌اند', 'abbreviations': 'مخفف‌ها',
'symbols': 'نمادها', 'confusing': 'گیج‌کننده', 'stand for': 'نشانه بودن', 'jump into': 'یکباره شروع کردن',
'figure it out': 'فهمیدنش', 'Guide Words': 'کلمات راهنما', 'part of speech': 'نوع کلمه',
'synonyms': 'مترادف‌ها', 'antonyms': 'متضادها', 'origin': 'ریشه', 'Collocations': 'باهم‌آیی‌ها',
'expand': 'گسترش دادن', 'vocabulary': 'دایره واژگان'
},
comprehension: [
{
type: 'scan',
title: 'A. Read the following paragraph and highlight the most important information. (Sharks)',
items: [
{ q: 'Sharks are not all the same. In fact, there are nearly 400 different kinds. Most sharks never attack people. Only a special group of sharks can be dangerous. They kill an average of forty people every year. Snakes kill about 60,000 people every year. And people kill 25,000,000 sharks every year. → What should be highlighted?', sampleAnswer: 'nearly 400 different kinds · Most sharks never attack people · forty people every year · snakes: 60,000 · people kill 25,000,000 sharks' }
]
},
{
type: 'scan',
title: "B. Go back to the 'Reading'. Highlight parts of the passage that support the claim that you can use a dictionary more effectively.",
items: [
{ q: 'Which parts support the claim?', sampleAnswer: 'The 7 tips: Choose the right dictionary / Read the introduction / Learn the abbreviations / Learn the pronunciation guide / Read the guide words / Read the definitions / Look for collocations.' }
]
},
{
type: 'scan',
title: "C. Read the 'Reading'. Generate questions with What / How / Where and answer them.",
items: [
{ q: 'What ... ? (e.g. What do guide words show?)', sampleAnswer: 'The first and last entries on the page.' },
{ q: 'How ... ? (e.g. How can we expand our vocabulary?)', sampleAnswer: "By learning 'words in combination' (collocations)." },
{ q: 'Where ... ? (e.g. Where are the guide words?)', sampleAnswer: 'At the top of each page.' }
]
}
]
},
vocabDev: {
title: 'Vocabulary Development — Word Part Families',
titleFa: 'واژه‌سازی — خانواده‌ی اجزای کلمه',
blocks: [
{
type: 'affix-table',
title: 'WORD PART FAMILIES (حمله به کلمه!)',
intro: "One way to figure out the meaning of an unknown word is to look for its relationship with other words in the same family. In this technique, also known as 'word attack', recognizing prefixes and suffixes helps you work out the meaning of complicated words.",
introFa: 'برای فهمیدن معنی کلمه‌ی ناآشنا، رابطه‌اش با کلمات هم‌خانواده را پیدا کن. مثلاً effectively با کلمه effect مرتبط است.',
headers: ['کلمه پیچیده', 'هم‌خانواده‌ها'],
rows: [
['effectively', 'effect / effective'],
['disconnection', 'disconnect / connection / connect']
]
},
{
type: 'fill-table',
title: 'A. Write down at least one other word you know that is related to the bold word.',
items: [
{ text: 'My job has become {increasingly} difficult. → _____', answer: 'increase / increasing' },
{ text: "He wasn't very {communicative} and kept to himself. → _____", answer: 'communicate / communication' },
{ text: 'The police believe the fire was started {accidentally}. → _____', answer: 'accident / accidental' },
{ text: 'The pollution is {endangering} the crops. → _____', answer: 'danger / dangerous / endangered' },
{ text: 'We searched {unsuccessfully} for a map of Kerman. → _____', answer: 'success / successful / successfully' }
]
},
{
type: 'fill-table',
title: 'B. Attack these words to figure out their meanings. Write down other words related to them.',
items: [
{ text: 'unsystematically → _____', answer: 'system / systematic / systematically' },
{ text: 'incomprehensible → _____', answer: 'comprehend / comprehensible / comprehension' },
{ text: 'unexpectedly → _____', answer: 'expect / expected / expectation' },
{ text: 'international → _____', answer: 'nation / national' },
{ text: 'unchangeable → _____', answer: 'change / changeable' }
]
}
]
},
grammar: {
title: 'Grammar — Relative Clauses',
titleFa: 'دستور زبان — جملات موصولی',
noteText: 'این یک <strong>عبارت موصولی</strong> است: with <code>who / which / that</code> دو جمله را به هم وصل می‌کنیم.',
noteMap: {
"who was": "<strong>who</strong> — موصول برای <strong>انسان</strong>: The man who plays golf...",
"who plays": "<strong>who</strong> — موصول برای انسان (فاعل عبارت موصولی).",
"who lived": "<strong>who</strong> — موصول برای انسان: the poets who lived after...",
"whom": "<strong>whom</strong> — موصول برای انسان وقتی <strong>مفعول</strong> است: The woman who(m) you met...",
"which is": "<strong>which</strong> — موصول برای <strong>اشیا و حیوانات</strong>.",
"which were taken": "<strong>which</strong> + فعل مجهول — example sentences which were taken from poetry.",
"which Asadi": "<strong>which</strong> — موصول مفعولی برای شی: words ... which Asadi compiled.",
"which": "<strong>which</strong> — موصول برای <strong>اشیا و حیوانات</strong>: The cat which lives near us...",
"that were used": "<strong>that</strong> — می‌تواند جایگزین who یا which شود.",
"that": "<strong>that</strong> — موصول همه‌کاره: می‌تواند جایگزین <code>who</code> و <code>which</code> شود (برای انسان و شی).",
"who": "<strong>who</strong> — موصول برای <strong>انسان</strong>. that هم می‌تواند جایگزینش شود."
},
readTexts: {
title: 'A. Read the following text.',
texts: [
{ en: 'The first Persian dictionary {which is} still published was compiled more than 900 years ago. Loghat-e Fors was made by Asadi Tusi {who was} a famous poet in the 5th century. The list of entries has been arranged according to the final letters of the words. There are example sentences {which were taken} from poetry. The dictionary has synonyms and explanations {that were used} by young poets. This dictionary has been used widely by the poets {who lived} after Asadi Tusi. Many words have been added to the first dictionary {which Asadi} compiled. The dictionary has been published several times and is a valuable treasure of Persian language.', fa: 'اولین فرهنگ لغت فارسی که هنوز چاپ می‌شود، بیش از ۹۰۰ سال پیش گردآوری شد. لغت فرس را اسدی توسی ساخت که شاعر مشهور قرن پنجم بود. فهرست مدخل‌ها بر اساس حروف پایانی کلمات مرتب شده است. جمله‌های مثالی هست که از شعر گرفته شده‌اند. این فرهنگ مترادف‌ها و توضیحاتی دارد که شاعران جوان استفاده می‌کردند. این فرهنگ به‌طور گسترده توسط شاعرانی که بعد از اسدی توسی زندگی می‌کردند استفاده شده است. کلمات زیادی به اولین فرهنگی که اسدی گردآوری کرد افزوده شده. این فرهنگ بارها چاپ شده و گنجینه‌ی ارزشمند زبان فارسی است.' }
]
},
explanation: [
'<strong>عبارت موصولی</strong> دو جمله را که درباره‌ی یک اسم مشترک‌اند، به یک جمله تبدیل می‌کند.',
'<code>who</code> برای <strong>انسان</strong>: The man <strong>who</strong> plays golf lives at No. 10.',
'<code>who(m)</code> برای انسان در نقش مفعول: The woman <strong>who(m)</strong> you met yesterday...',
'<code>which</code> برای <strong>اشیا و حیوانات</strong>: The cat <strong>which</strong> lives near us...',
'<code>that</code> می‌تواند جایگزین who و which شود: The man <strong>that</strong> plays golf...'
],
tablesTitle: 'B. Read the following example sentences.',
tables: [
{
title: 'دو جمله → یک جمله موصولی',
headers: ['Two sentences', 'Relative clause'],
rows: [
['The man plays golf. + He lives at No. 10.', 'The man who plays golf lives at No. 10.'],
['The woman is coming to dinner. + You met her yesterday.', 'The woman who(m) you met yesterday is coming to dinner.'],
['The cat lives near us. + It was drinking milk.', 'The cat which lives near us was drinking milk.'],
['I found the keys. + I lost the keys yesterday.', 'I found the keys which I lost yesterday.']
],
examples: [
{ en: 'The man {who} plays golf lives at No. 10.', fa: 'مردی که گلف بازی می‌کند در پلاک ۱۰ زندگی می‌کند.' },
{ en: 'I found the keys {which} I lost yesterday.', fa: 'کلیدهایی را که دیروز گم کردم پیدا کردم.' }
]
},
{
title: "جایگزینی با 'that'",
headers: ['who / which', 'that'],
rows: [
['The man who plays golf lives at No. 10.', 'The man that plays golf lives at No. 10.'],
['The woman who(m) you met yesterday...', 'The woman that you met yesterday...'],
['The cat which lives near us...', 'The cat that lives near us...'],
['...the keys which I lost yesterday.', '...the keys that I lost yesterday.']
]
}
],
notes: [
"C. Tell your teacher how 'relative clauses' are made.",
"E. Complete: 1. Ostrich is a bird ... / 2. Our English teacher ... / 3. The notebook ... (Example: Rudaki who lived in the 4th century is a famous Persian poet.)"
],
practice: {
title: "D. Read the following paragraph and fill in the blanks with 'who' or 'which'.",
instruction: 'داستان آقای سندرز را بخوان و who یا which را انتخاب کن.',
items: [
{ sentence: 'Mr. Sanders is a doctor _____ lives in a city.', options: ['who', 'which'], correct: 0 },
{ sentence: 'He works in a village _____ is near the city.', options: ['which', 'who'], correct: 0 },
{ sentence: 'He usually catches the morning train _____ enters the station at 7:30.', options: ['which', 'who'], correct: 0 },
{ sentence: 'The train _____ he catches is not very crowded.', options: ['which', 'who'], correct: 0 },
{ sentence: 'There are some teachers and workers _____ also work in the village.', options: ['who', 'which'], correct: 0 },
{ sentence: 'He reads books or newspapers _____ he borrows from the stand in the station.', options: ['which', 'who'], correct: 0 },
{ sentence: 'He is the type of guy _____ likes to spend his time wisely.', options: ['who', 'which'], correct: 0 }
]
},
friendWork: {
title: 'E. Complete the following sentences. Then compare them with your friend.',
partA: { instruction: 'مثال: Rudaki who lived in the 4th century is a famous Persian poet.', items: ['Ostrich is a bird which ...', 'Our English teacher who ...', 'The notebook which ...'] },
partB: { instruction: 'الگو:', items: ['انسان → who / شی و حیوان → which / هر دو → that'] }
},
goingTo: {
title: 'Conditional Sentences (Type II) — شرطی نوع دوم',
note: '<strong>شرطی نوع دوم</strong> برای موقعیت‌های <strong>خیالی یا غیرواقعی</strong>: <code>If + گذشته ساده, would/could + فعل ساده</code>. با فعل be در عبارت شرط، برای همه‌ی فاعل‌ها <code>were</code> به کار می‌رود.',
noteMap: {
"had": "<strong>If + گذشته ساده</strong> — شرط خیالی: If the old man had his glasses... (الان ندارد!)",
"could read": "<strong>could + فعل ساده</strong> — نتیجه‌ی خیالی: می‌توانست بخواند.",
"would be": "<strong>would + فعل ساده</strong> — نتیجه‌ی خیالی: They would be healthier...",
"lived": "<strong>گذشته ساده در عبارت if</strong> — موقعیت خیالی: if they lived in a village (ولی زندگی نمی‌کنند).",
"got": "<strong>گذشته ساده در عبارت if</strong>: If it got warmer...",
"would travel": "<strong>would + فعل ساده</strong> — نتیجه‌ی خیالی.",
"could fix": "<strong>could + فعل ساده</strong> — توانایی خیالی.",
"were": "<strong>were</strong> — در شرطی نوع دوم با فعل be برای <strong>همه‌ی فاعل‌ها</strong> (حتی I/he/she) از were استفاده می‌شود: If I were you...",
"would ask": "<strong>would + فعل ساده</strong> — نتیجه خیالی.",
"would buy": "<strong>would + فعل ساده</strong>: I would buy a house if I were you."
},
readTitle: 'A. Read the following example sentences.',
examples: [
{ en: 'If the old man {had} his glasses, he {could read} the paper.', fa: 'اگر پیرمرد عینکش را داشت، می‌توانست روزنامه بخواند.' },
{ en: 'They {would be} healthier if they {lived} in a village.', fa: 'اگر در روستا زندگی می‌کردند، سالم‌تر بودند.' },
{ en: 'If it {got} warmer, they {would travel} to the north.', fa: 'اگر هوا گرم‌تر می‌شد، به شمال سفر می‌کردند.' },
{ en: 'John {could fix} the car if he {were} home.', fa: 'اگر جان خانه بود، می‌توانست ماشین را تعمیر کند.' },
{ en: 'If my mother {were} here, I {would ask} her for help.', fa: 'اگر مادرم اینجا بود، از او کمک می‌خواستم.' },
{ en: 'I {would buy} a house if I {were} you.', fa: 'اگر جای تو بودم، خانه می‌خریدم.' }
],
table: {
headers: ['عبارت شرط (if-clause)', 'جمله اصلی (نتیجه)'],
rows: [
['If + گذشته ساده', 'would/could + فعل ساده'],
['If I were you, ...', 'I would buy a house.'],
['if he were home', 'John could fix the car'],
['⚠️ be → همیشه were', '(برای همه فاعل‌ها)']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Talking about Imaginary Situations',
strategyTitleFa: 'راهبرد گفتاری — صحبت درباره موقعیت‌های خیالی',
strategyDesc: "A. We use 'conditional type II' to talk about imaginary situations.",
patterns: [
{ q: "Oh look! It is raining so heavily. What would you do if it weren't raining?", a: 'Hmm… if it were sunny, I would go to the park. I am really bored.' },
{ q: 'We can play one of our thinking games, instead.', a: "We could play 'Smart Kid' if Sina were home. — This one is also fun. Let's try it." }
],
patternsList: [
'What would you do if you were me?',
'What would you do if you had wings?',
'What would you do if you were a university student?'
],
listenComplete: {
title: 'B. Listen to the following conversations and answer the questions.',
conversations: [
{ num: 1, items: ['Where does Mina live? .....................', "Why hasn't Zohreh invited Mina yet? ....................."] },
{ num: 2, items: ['What did Bijan want to buy? .....................', "Why didn't Bijan tell Mehran about the problem? ....................."] }
]
},
pairWork: {
title: 'Pair up and ask your friends about the things they want to do today, but they cannot. / Ask what they would do if they were you.',
box1: { label: 'شرط‌های خیالی', verbs: ["If it weren't so cold, ...", 'If you did your homework sooner, ...', 'If your father came home earlier, ...', 'If I had enough money, ...'] },
box2: { label: 'اگر جای تو بودند...', verbs: ['study harder', 'do daily exercise', 'be more careful', 'learn French'] }
}
},
writing: {
title: 'Writing — Paragraph',
titleFa: 'نوشتن — پاراگراف',
sections: [
{
type: 'lesson-noun',
title: 'What is a paragraph?',
intro: 'A paragraph is a group of sentences about one idea. A paragraph can (1) give us information, (2) tell us an opinion, (3) explain something to us, or (4) tell us a short story. When you want to write about a new idea, begin a new paragraph.',
introFa: 'پاراگراف گروهی از جمله‌ها درباره‌ی یک ایده است. برای ایده‌ی جدید، پاراگراف جدید شروع کن.',
categories: [
{ label: 'Format (قالب)', examples: ['Sentences are grouped together, one after another.', 'Start with a capital letter, end with . ? or !'] },
{ label: 'Topic Sentence (جمله موضوعی)', examples: ['The most important sentence — tells readers what they are going to read about.', 'Usually the first (or sometimes the last) sentence.'] },
{ label: 'Topic + Controlling idea', examples: ['My sister and I (topic) respect our parents all the time (controlling idea).', 'A cheetah (topic) is a wild animal from the cat family (controlling idea).'] }
]
},
{
type: 'plural-task',
title: 'A. Look at the examples (Oceans and Lakes). Choose the one which has the right shape for a paragraph.',
items: [
{ sentence: 'نسخه ۱: هر جمله در خط جدا → / نسخه ۲: جمله‌ها پشت‌سرهم در یک بلوک → / نسخه ۳: دو بلوک جدا → کدام درست است؟ _____', words: ['?'], answers: ['نسخه ۲ — همه‌ی جمله‌ها پشت سر هم در یک پاراگراف'] }
]
},
{
type: 'plural-task',
title: 'B. Find the topic and the controlling idea. (Topic sentences from Vision 2)',
items: [
{ sentence: '1. Language is a system of communication. → _____', words: ['?'], answers: ['Topic: Language / Controlling idea: a system of communication'] },
{ sentence: "2. About fifty percent of the world's languages have fewer than 5000 speakers. → _____", words: ['?'], answers: ["Topic: fifty percent of the world's languages / Controlling: fewer than 5000 speakers"] },
{ sentence: '3. Bad habits and addiction can be harmful to health. → _____', words: ['?'], answers: ['Topic: Bad habits and addiction / Controlling: harmful to health'] },
{ sentence: '4. Art is what people create with imagination and skill. → _____', words: ['?'], answers: ['Topic: Art / Controlling: what people create with imagination and skill'] },
{ sentence: '5. Handicrafts are good examples of the art and culture of a country. → _____', words: ['?'], answers: ['Topic: Handicrafts / Controlling: good examples of the art and culture'] }
]
},
{
type: 'plural-task',
title: 'Practice: Read the paragraphs. Find the topic sentence.',
items: [
{ sentence: '1. (Ants...) → _____', words: ['?'], answers: ['Ants are found everywhere in the world.'] },
{ sentence: '2. (Stars...) → _____', words: ['?'], answers: ['The stars are tiny points of light in the space.'] },
{ sentence: '3. (Online dictionary...) → _____', words: ['?'], answers: ['An online dictionary is one that is available on the Internet...'] },
{ sentence: '4. (Hearing device...) → _____', words: ['?'], answers: ['A hearing device is available for some people suffering from hearing loss.'] }
]
},
{
type: 'lesson-markers',
title: 'C. Write a topic sentence for the following items.',
intro: 'برای هر موضوع یک جمله‌ی موضوعی بنویس:',
markers: [
{ marker: 'موضوع‌ها', examples: 'sport · writing · forest · smoking · firefighters · Avicenna · clean energy · Persian Gulf' },
{ marker: 'مثال', examples: 'Avicenna is one of the greatest Persian physicians of all time.' }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a report and answer.',
tasks: [
'a. What would you do if you had a time machine now? .....................',
'b. Would you live in a jungle if you were allowed to? .....................',
'Listen again and take note of three questions you hear.'
]
},
reading: {
title: 'B. Now read the rest.',
text: 'Have you ever thought of superhuman? What abilities would you like to have if you had superhuman powers? Some may say, "I would like to fly if I had superhuman powers." Others may say, "I would like to be very strong to help people." Some may say, "I would like to be invisible or read people\'s minds." What about you? Would you like to be able to do these? Think of being an astronaut; where would you like to go?',
fa: 'تا حالا به ابرانسان فکر کرده‌ای؟ اگر قدرت‌های فراانسانی داشتی، دوست داشتی چه توانایی‌هایی داشته باشی؟ بعضی شاید بگویند: «اگر قدرت فراانسانی داشتم، دوست داشتم پرواز کنم.» دیگران شاید بگویند: «دوست داشتم خیلی قوی باشم تا به مردم کمک کنم.» بعضی شاید بگویند: «دوست داشتم نامرئی باشم یا ذهن مردم را بخوانم.» تو چطور؟ دوست داری بتوانی این کارها را بکنی؟ به فضانورد بودن فکر کن؛ کجا دوست داشتی بروی؟',
glossary: {
'superhuman': 'ابرانسان', 'abilities': 'توانایی‌ها', 'powers': 'قدرت‌ها', 'invisible': 'نامرئی',
"read people's minds": 'ذهن‌خوانی', 'astronaut': 'فضانورد'
},
tasks: [
"3. Underline 'if clauses'."
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer.',
questions: [
'Would you like to fly?',
'What would you do if you found some money?',
'Where would you like to travel if you were an astronaut?'
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
type: 'short-answer',
title: 'A & B. Dictionaries you know',
questions: [
{ q: 'A. Complete the table with the names of dictionaries (Persian-Persian / English-Persian / English-English).', sampleAnswer: 'فارسی: دهخدا، معین، عمید — انگلیسی-فارسی: آریان‌پور، حییم — انگلیسی: Oxford, Longman, Cambridge' },
{ q: 'B. Write the names of four online dictionaries and their web addresses.', sampleAnswer: 'Oxford (oxfordlearnersdictionaries.com), Cambridge (dictionary.cambridge.org), Merriam-Webster (merriam-webster.com), آبادیس (abadis.ir)' }
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
passageTitle: 'Dictionaries',
passage: "A dictionary is a book which explains the meanings of words and expressions. You can find words easily because dictionaries put them in alphabetical order. The word 'dictionary' comes from the Latin 'dictio' ('saying'). There are several types of dictionaries. Dictionaries which explain words and how they are used; dictionaries which translate words from one language to another; dictionaries of biography which tell about famous people; and technical dictionaries which explain the meanings of technical words. Dictionaries which explain what words mean give a clear 'definition' of them. A good dictionary also gives more information about words. For instance, it explains how they are pronounced. Usually the International Phonetic Alphabet (IPA) is used for this purpose. There are also dictionaries which translate words into other languages. Very often one volume translates both ways; for example, half of the book is from English to Persian and the other half from Persian to English. When using a dictionary to find out how to say something in another language, one has to be careful to choose the right meaning. A word like 'right' has several meanings in English, for example, 'correct' and 'the opposite of left'. A word like 'present' may be used as an adjective, meaning 'not absent', as a noun, meaning 'gift' or as a verb, meaning 'give'. A good dictionary lists all the meanings of words to help people find the meaning that they look for. A complete dictionary also tells you about the origin of words and the story behind them. For example, the words like 'pajamas', 'bazaar' and 'paradise' entered English from Persian.",
passageFa: 'دیکشنری کتابی است که معنی کلمات و عبارات را توضیح می‌دهد. کلمات را راحت پیدا می‌کنی چون دیکشنری‌ها آن‌ها را به ترتیب الفبا می‌چینند. کلمه‌ی dictionary از لاتین dictio (گفتن) می‌آید. چند نوع دیکشنری هست: دیکشنری‌هایی که کلمات و کاربردشان را توضیح می‌دهند؛ دیکشنری‌هایی که کلمات را از زبانی به زبان دیگر ترجمه می‌کنند؛ دیکشنری‌های زندگی‌نامه که درباره مشاهیر می‌گویند؛ و دیکشنری‌های فنی که معنی کلمات فنی را توضیح می‌دهند. دیکشنری‌هایی که معنی کلمات را توضیح می‌دهند، «تعریف» روشنی از آن‌ها ارائه می‌کنند. دیکشنری خوب اطلاعات بیشتری هم درباره کلمات می‌دهد؛ مثلاً تلفظشان را توضیح می‌دهد. معمولاً الفبای آوانگاری بین‌المللی (IPA) برای این منظور به کار می‌رود. دیکشنری‌هایی هم هستند که کلمات را به زبان‌های دیگر ترجمه می‌کنند. اغلب یک جلد، دوطرفه ترجمه می‌کند؛ مثلاً نصف کتاب انگلیسی به فارسی و نصف دیگر فارسی به انگلیسی است. هنگام استفاده از دیکشنری برای یافتن نحوه‌ی گفتن چیزی به زبان دیگر، باید مراقب انتخاب معنی درست بود. کلمه‌ای مثل right چند معنی دارد: «درست» و «مخالف چپ». کلمه‌ای مثل present می‌تواند صفت (حاضر)، اسم (هدیه) یا فعل (دادن) باشد. دیکشنری خوب همه معانی را فهرست می‌کند تا مردم معنی موردنظرشان را بیابند. دیکشنری کامل درباره ریشه‌ی کلمات و داستان پشتشان هم می‌گوید. مثلاً کلماتی مثل pajamas، bazaar و paradise از فارسی وارد انگلیسی شده‌اند.',
glossary: {
'expressions': 'عبارات', 'alphabetical order': 'ترتیب الفبا', 'Latin': 'لاتین',
'biography': 'زندگی‌نامه', 'technical': 'فنی', 'definition': 'تعریف', 'pronounced': 'تلفظ می‌شوند',
'volume': 'جلد', 'adjective': 'صفت', 'origin': 'ریشه', 'entered': 'وارد شدند'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: "A word starting with 'p' appears before a word starting with 'm' in a dictionary.", answer: false },
{ q: 'Some dictionaries do not give users the meaning of words.', answer: false },
{ q: "The word 'bazaar' is not English, originally.", answer: true }
]
},
{
type: 'short-answer',
title: 'B. Answer the following questions. (C: Look up three meanings for "arm" and "foot". D: Highlight the most important ideas.)',
questions: [
{ q: '1. Why can we find words in a dictionary easily?', sampleAnswer: 'Because dictionaries put words in alphabetical order.' },
{ q: '2. What is the difference between technical dictionaries and biographical ones?', sampleAnswer: 'Technical dictionaries explain technical words; biographical ones tell about famous people.' },
{ q: "3. What is the origin of the word 'dictionary'?", sampleAnswer: "The Latin word 'dictio' meaning 'saying'." }
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
{ options: ['elementary', 'technical', 'advanced', 'intermediate'], odd: 1 },
{ options: ['app', 'CD', 'PC', 'cell phone'], odd: 1 },
{ options: ['introduction', 'definition', 'pronunciation', 'collocation'], odd: 0 },
{ options: ['effective', 'useful', 'confusing', 'helpful'], odd: 2 },
{ options: ['spelling', 'adverb', 'preposition', 'adjective'], odd: 0 }
]
},
{
type: 'fill-words',
title: 'B. What do the following items stand for?',
wordBank: ['Information Technology', 'Personal Computer', 'Islamic Republic of Iran Broadcasting', 'Compact Disc', 'Digital Versatile Disc'],
items: [
{ sentence: '1. IT: _____', answer: 'Information Technology' },
{ sentence: '2. PC: _____', answer: 'Personal Computer' },
{ sentence: '3. IRIB: _____', answer: 'Islamic Republic of Iran Broadcasting' },
{ sentence: '4. CD: _____', answer: 'Compact Disc' },
{ sentence: '5. DVD: _____', answer: 'Digital Versatile Disc' }
]
},
{
type: 'match-columns',
title: 'C. Match the definitions with the words. (One is extra.)',
pairs: [
{ a: 'organize and put in order', b: 'arrange', letter: 'c' },
{ a: 'think and believe', b: 'suppose', letter: 'f' },
{ a: 'something that stands for something else', b: 'symbol', letter: 'a' },
{ a: 'have something inside', b: 'contain', letter: 'e' },
{ a: 'tell somebody that something is good', b: 'recommend', letter: 'd' }
]
},
{
type: 'fill-words',
title: 'D. Fill in the blanks with the given words. Make the necessary changes.',
wordBank: ['combination', 'effectively', 'entries', 'stand for', 'introduction'],
items: [
{ sentence: '1. This monolingual dictionary has about 50,000 _____.', answer: 'entries' },
{ sentence: '2. What does BC _____?', answer: 'stand for' },
{ sentence: '3. The building is a _____ of new and old styles.', answer: 'combination' },
{ sentence: '4. The _____ of the book is available on our website.', answer: 'introduction' },
{ sentence: '5. Being able to communicate _____ is one of the most important life skills.', answer: 'effectively' }
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
title: 'A. Combine the following sentences. Use appropriate relative pronouns (who, whom and which).',
questions: [
{ q: '1. I saw the man. The man lives next door.', sampleAnswer: 'I saw the man who lives next door.' },
{ q: '2. The mechanic had an accident. He is very skillful.', sampleAnswer: 'The mechanic who is very skillful had an accident.' },
{ q: '3. We bought some books. Our teacher suggested them.', sampleAnswer: 'We bought some books which our teacher suggested.' },
{ q: '4. The students talked to the teacher. John met him before.', sampleAnswer: 'The students talked to the teacher who(m) John met before.' },
{ q: '5. She watched the DVD. Her father bought it.', sampleAnswer: 'She watched the DVD which her father bought.' }
]
},
{
type: 'fill-going-to',
title: 'B. Complete the following conditional sentences (Type II).',
text: '1. I know you do not go to bed early these days. If you [1] (go) to bed earlier, you [2] (not be) tired. 2. I do not have a smart phone. If I [3] (have) one, I [4] (use) an online dictionary. 3. He likes to learn French but cannot spend time practicing it. If he [5] (have) more time, he [6] (learn) French. 4. We want to help you but we do not have enough information. We [7] (help) you if we [8] (know) how. 5. I do not have a good job and cannot earn enough money. I [9] (earn) a lot of money if I [10] (get) a good job.',
blanks: [
{ num: 1, answer: 'went' },
{ num: 2, answer: "wouldn't be" },
{ num: 3, answer: 'had' },
{ num: 4, answer: 'would use' },
{ num: 5, answer: 'had' },
{ num: 6, answer: 'would learn' },
{ num: 7, answer: 'would help' },
{ num: 8, answer: 'knew' },
{ num: 9, answer: 'would earn' },
{ num: 10, answer: 'got' }
]
},
{
type: 'short-answer',
title: 'C. Complete the following sentences.',
questions: [
{ q: '1. If it rained, _____', sampleAnswer: 'If it rained, I would stay at home.' },
{ q: '2. If you knew Chinese very well, _____', sampleAnswer: 'If you knew Chinese very well, you could work as a translator.' },
{ q: '3. A cheetah is an animal that _____', sampleAnswer: 'A cheetah is an animal that runs very fast.' },
{ q: '4. Japanese are the people who _____', sampleAnswer: 'Japanese are the people who live in Japan.' }
]
}
]
},
{
part: 'Part IV',
section: 'Writing',
sectionFa: 'نوشتن',
tasks: [
{
type: 'short-answer',
title: 'A. Find the one which has a correct format of a paragraph. (Ants — three versions)',
questions: [
{ q: 'Which version has the correct paragraph format?', sampleAnswer: 'Version 2 — all sentences grouped together, one after another, in a single block.' }
]
},
{
type: 'short-answer',
title: 'B, C & D. The "Water" paragraph',
questions: [
{ q: 'B. Skim the paragraph and write a suitable topic for it.', sampleAnswer: 'The importance of water (in our life).' },
{ q: 'C. Scan the paragraph and highlight three specific facts.', sampleAnswer: 'Nearly 70 percent of our body is water · We need water to generate electricity · Lack of rain causes droughts.' },
{ q: 'D. Find the topic sentence and underline the controlling idea.', sampleAnswer: 'Topic sentence: "Water is the most essential element in our life." — Controlling idea: the most essential element in our life.' }
]
},
{
type: 'short-answer',
title: 'E. For each word, write a topic sentence.',
questions: [
{ q: '1. swimming', sampleAnswer: 'Swimming is one of the best sports for the whole body.' },
{ q: '2. watching TV', sampleAnswer: 'Watching TV for long hours can be harmful to our health.' },
{ q: '3. pollution', sampleAnswer: 'Pollution is one of the most serious problems of big cities.' },
{ q: '4. wildlife', sampleAnswer: 'Wildlife of Iran is amazingly diverse.' },
{ q: '5. Iran', sampleAnswer: 'Iran is a vast country with a five-thousand-year history.' }
]
}
]
}
],
quiz: [
{ q: 'The man _____ plays golf lives at No. 10.', qFa: 'مردی که گلف بازی می‌کند در پلاک ۱۰ زندگی می‌کند.', options: ['who', 'which', 'whose', 'where'], correct: 0 },
{ q: 'I found the keys _____ I lost yesterday.', qFa: 'کلیدهایی را که دیروز گم کردم پیدا کردم.', options: ['which', 'who', 'whom', 'when'], correct: 0 },
{ q: 'If I _____ you, I would buy a house.', qFa: 'اگر جای تو بودم، خانه می‌خریدم.', options: ['were', 'am', 'was being', 'be'], correct: 0 },
{ q: 'If my mother were here, I _____ her for help.', qFa: 'اگر مادرم اینجا بود، از او کمک می‌خواستم.', options: ['would ask', 'will ask', 'ask', 'asked'], correct: 0 },
{ q: 'I.R. _____ Islamic Republic.', qFa: 'I.R. مخفف جمهوری اسلامی است.', options: ['stands for', 'figures out', 'jumps into', 'looks up'], correct: 0 },
{ q: "Mehran couldn't _____ what the teacher was talking about.", qFa: 'مهران نتوانست بفهمد معلم درباره چه صحبت می‌کند.', options: ['figure out', 'stand for', 'arrange', 'contain'], correct: 0 }
]
},
{
num: 3,
title: 'Renewable Energy',
titleFa: 'انرژی تجدیدپذیر',
function: 'Renewable Energy',
facts: [
{ en: 'The first wind machine was used in ancient Persia around 300 BC.', fa: 'اولین ماشین بادی حدود ۳۰۰ سال قبل از میلاد در ایران باستان استفاده شد.' },
{ en: 'One wind turbine can produce enough electricity to power 300 homes.', fa: 'یک توربین بادی می‌تواند برق کافی برای ۳۰۰ خانه تولید کند.' },
{ en: 'Renewable energy sources create three times more jobs than fossil fuels.', fa: 'منابع انرژی تجدیدپذیر سه برابر سوخت‌های فسیلی شغل ایجاد می‌کنند.' },
{ en: 'Albert Einstein won the Nobel Prize in 1921 for his experiments with solar power.', fa: 'آلبرت اینشتین جایزه نوبل ۱۹۲۱ را برای آزمایش‌هایش با انرژی خورشیدی برد.' }
],
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'A',
instruction: 'A. Match the pictures with energy sources (wind, water, sunshine, plants). Now fill in the blanks with the above words.',
instructionFa: 'تصاویر را با منابع انرژی تطبیق بده و جاهای خالی را پر کن.',
type: 'fill-bank',
wordBank: ['wind', 'water', 'sunshine', 'plants'],
sentences: [
{ text: '1. Some scientists are working on producing electricity from _____. This way, while the plant is growing, electricity is produced.', answer: 'plants' },
{ text: '2. Hydropower or _____ power is produced as a result of falling or running water.', answer: 'water' },
{ text: '3. Solar energy or the energy that comes from _____ can be used to heat, cool, and light our homes and schools.', answer: 'sunshine' },
{ text: '4. Wind turbines convert the kinetic energy in the _____ into mechanical power.', answer: 'wind' }
]
},
{
label: 'C',
instruction: 'C. This picture shows six ways you can save energy. Place the letter next to the correct description. (B: Draw a circle around renewable energy sources.)',
instructionFa: 'شش راه صرفه‌جویی انرژی — حرف هر تصویر را کنار توضیح درستش بگذار.',
type: 'fill-bank',
wordBank: ['A', 'B', 'C', 'D', 'E', 'F'],
sentences: [
{ text: "1. Close the door behind you so the cold or warm air doesn't go out. → _____" },
{ text: "2. If you're the last person to leave the room, turn off the TV. → _____" },
{ text: '3. Trees can lower the cooling costs of your home. → _____' },
{ text: '4. Using a dishwasher saves much more water than hand washing. → _____' },
{ text: '5. LED light bulbs use 75% less energy and last 10 times longer. → _____' },
{ text: '6. Let your computer monitor go to sleep or turn it off to save more energy. → _____' }
]
}
]
},
conversation: {
subtitle: 'Wind Turbines of Manjeel',
subtitleFa: 'توربین‌های بادی منجیل',
desc: 'عماد و پدرش به گیلان سفر می‌کنند. در راه، در منجیل، عماد توربین‌های بادی بزرگی می‌بیند.',
newWordsHint: ['generate', 'opposite', 'blow', 'remind', 'air conditioner'],
lines: [
{ speaker: 'Emad', role: 'student', en: 'Daddy, look at those big fans!', fa: 'بابا، اون پنکه‌های بزرگ رو ببین!' },
{ speaker: 'Father', role: 'teacher', en: 'They are actually wind turbines.', fa: 'اون‌ها در واقع توربین بادی‌اند.' },
{ speaker: 'Emad', role: 'student', en: 'Wind turbines?', fa: 'توربین بادی؟' },
{ speaker: 'Father', role: 'teacher', en: 'Yes, wind turbines are used to produce electricity from wind power.', fa: 'بله، توربین‌های بادی برای تولید برق از انرژی باد استفاده می‌شوند.' },
{ speaker: 'Emad', role: 'student', en: 'I know electricity can be produced from water and sunlight. How might it be generated from wind?', fa: 'می‌دونم برق از آب و نور خورشید تولید می‌شه. چطور ممکنه از باد تولید بشه؟' },
{ speaker: 'Father', role: 'teacher', en: 'Well, a wind turbine works the opposite of a fan. Instead of using electricity to make wind, a turbine uses wind to make electricity. It is a type of clean energy.', fa: 'خب، توربین بادی برعکس پنکه کار می‌کنه. به‌جای استفاده از برق برای ساختن باد، توربین از باد برای ساختن برق استفاده می‌کنه. این یک نوع انرژی پاکه.' },
{ speaker: 'Emad', role: 'student', en: "These wind turbines remind me of what I read about using wind power in Yazd's buildings.", fa: 'این توربین‌های بادی منو یاد چیزی می‌اندازن که درباره استفاده از انرژی باد در ساختمان‌های یزد خوندم.' },
{ speaker: 'Father', role: 'teacher', en: 'You mean wind towers?', fa: 'منظورت بادگیرهاست؟' },
{ speaker: 'Emad', role: 'student', en: "Yes, they are natural air cooling systems and can be used instead of electrical air conditioners. This is another source of clean energy, isn't it?", fa: 'بله، اون‌ها سیستم‌های خنک‌کننده طبیعی هوان و می‌تونن به‌جای کولرهای برقی استفاده بشن. این هم یک منبع دیگه انرژی پاکه، نه؟' },
{ speaker: 'Father', role: 'teacher', en: 'Yes, it is. An excellent type of clean energy!', fa: 'بله همین‌طوره. یک نوع عالی انرژی پاک!' },
{ speaker: 'Emad', role: 'student', en: 'Daddy, can we travel to Yazd this Norooz?', fa: 'بابا، می‌تونیم این نوروز به یزد سفر کنیم؟' },
{ speaker: 'Father', role: 'teacher', en: "That's OK with me. Let's check it with others.", fa: 'من که مشکلی ندارم. بیا با بقیه هماهنگ کنیم.' }
],
questions: [
{ q: 'Where are Emad and his father?', fa: 'عماد و پدرش کجا هستند؟' },
{ q: 'Has Emad ever traveled to Yazd?', fa: 'عماد تا حالا به یزد سفر کرده؟' },
{ q: 'What types of clean energy can you find in your city or village?', fa: 'در شهر یا روستای تو چه انواعی از انرژی پاک پیدا می‌شود؟' }
]
},
newWords: {
lookRead: [
{ en: 'Oil, coal and natural gas are three common {fossil fuels}.', fa: 'نفت، زغال‌سنگ و گاز طبیعی سه {سوخت فسیلی} رایج‌اند.', image: 'nw-fossilfuels.jpg' },
{ en: 'The main sources of {renewable} energy are wind, water and sun.', fa: 'منابع اصلی انرژی {تجدیدپذیر} باد، آب و خورشیدند.', image: 'nw-renewable.jpg' },
{ en: 'Iran is rich in oil {resources}.', fa: 'ایران از نظر {منابع} نفتی غنی است.', image: 'nw-resources.jpg' },
{ en: 'The factory has {polluted} the river.', fa: 'کارخانه رودخانه را {آلوده کرده} است.', image: 'nw-polluted.jpg' },
{ en: 'The new light bulbs {consume} less electricity.', fa: 'لامپ‌های جدید برق کمتری {مصرف می‌کنند}.', image: 'nw-consume.jpg' },
{ en: 'My uncle often sits in the {balcony}, has a cup of coffee and reads a book.', fa: 'عمویم اغلب در {بالکن} می‌نشیند، قهوه می‌نوشد و کتاب می‌خواند.', image: 'nw-balcony.jpg' }
],
definitions: [
{ word: 'variety', def: 'many different types of things or people', fa: 'تنوع', example: 'They do a {variety} of fitness activities.' },
{ word: 'tide', def: 'the rise and fall of the sea', fa: 'جزر و مد', example: 'Here you can see two high and two low {tides} each day.' },
{ word: 'replace', def: 'to take the place of somebody or something', fa: 'جایگزین کردن', example: 'The factory {replaced} most of its workers with robots.' },
{ word: 'use up', def: 'to finish something', fa: 'تمام کردن', example: "Don't {use up} all the milk - we need some for breakfast." },
{ word: 'forever', def: 'for all time', fa: 'برای همیشه', example: 'No one can live {forever}.' },
{ word: 'demand', def: 'the amount of a product or service that people want', fa: 'تقاضا', example: '{Demand} for organic food is increasing.' },
{ word: 'convert', def: 'to change in form or character', fa: 'تبدیل کردن', example: 'The sofa {converts} into a bed.' },
{ word: 'absorb', def: 'to take something in, especially gradually', fa: 'جذب کردن', example: 'Plants {absorb} carbon dioxide.' }
]
},
reading: {
passageTitle: 'Earth for our Children',
passageTitleFa: 'زمین برای فرزندانمان',
strategy: {
title: 'Note taking',
titleFa: 'یادداشت‌برداری',
desc: 'Learning to take good notes is very important. Good notes can help you remember and review a text you have read.',
steps: ['Be sure to include all the important ideas and examples.', 'Write only important words, not complete sentences.', 'Use abbreviations and symbols.', 'You can write your notes in the margins or on a separate page.'],
descFa: 'فقط کلمات مهم را بنویس نه جمله کامل؛ از مخفف و نماد استفاده کن.'
},
paragraphs: [
{ en: 'Energy is the ability to do work. It can take a variety of forms: mechanical, electrical, chemical, and nuclear. To produce any type of energy, the resources of the earth are used. The main resources of the earth are fossil fuels such as natural gas, oil, and coal.', fa: 'انرژی توانایی انجام کار است. می‌تواند شکل‌های متنوعی داشته باشد: مکانیکی، الکتریکی، شیمیایی و هسته‌ای. برای تولید هر نوع انرژی، منابع زمین استفاده می‌شوند. منابع اصلی زمین سوخت‌های فسیلی مثل گاز طبیعی، نفت و زغال‌سنگ‌اند.' },
{ en: "We get most of our energy from these fossil fuels, but this is harmful to the environment. Fossil fuels are nonrenewable and cannot be replaced easily. Once we use them up, they're gone forever. They are not clean as they pollute water or air.", fa: 'بیشتر انرژی‌مان را از این سوخت‌های فسیلی می‌گیریم، اما این برای محیط‌زیست مضر است. سوخت‌های فسیلی تجدیدناپذیرند و به‌راحتی جایگزین نمی‌شوند. وقتی تمامشان کنیم، برای همیشه رفته‌اند. پاک نیستند چون آب یا هوا را آلوده می‌کنند.' },
{ en: 'In recent years, scientists try to use other types of energy resources. They call them clean energy resources because they do not pollute the earth. Clean energy is renewable. It is made from resources that can be replaced, like wind, water, sunshine, tides, and plants. When renewable energy resources are used, the demand for fossil fuels is reduced.', fa: 'در سال‌های اخیر، دانشمندان تلاش می‌کنند از انواع دیگر منابع انرژی استفاده کنند. به آن‌ها منابع انرژی پاک می‌گویند چون زمین را آلوده نمی‌کنند. انرژی پاک تجدیدپذیر است. از منابعی ساخته می‌شود که قابل جایگزینی‌اند، مثل باد، آب، نور خورشید، جزر و مد و گیاهان. وقتی منابع انرژی تجدیدپذیر استفاده می‌شوند، تقاضا برای سوخت‌های فسیلی کاهش می‌یابد.' },
{ en: 'The most common type of clean energy is the solar power. Solar energy is produced by the radiation that reaches the earth. People have used the sun as a heat source for thousands of years. Iranians, for instance, use special designs and arrangements of windows, balconies and yards to get the most sunshine. Different types of materials might also be used in building the houses. This keeps people warm during cold seasons and cool during hot days of the year.', fa: 'رایج‌ترین نوع انرژی پاک، انرژی خورشیدی است. انرژی خورشیدی از تابشی که به زمین می‌رسد تولید می‌شود. مردم هزاران سال از خورشید به‌عنوان منبع گرما استفاده کرده‌اند. مثلاً ایرانیان از طراحی‌ها و چیدمان‌های خاص پنجره‌ها، بالکن‌ها و حیاط‌ها برای دریافت بیشترین نور خورشید استفاده می‌کنند. مصالح مختلفی هم ممکن است در ساخت خانه‌ها به کار رود. این مردم را در فصل‌های سرد گرم و در روزهای گرم سال خنک نگه می‌دارد.' },
{ en: "Nowadays, solar energy can be converted into other forms of energy, such as heat and electricity. Solar energy might be used for heating water and air in homes, buildings, or swimming pools. Maybe you've seen buildings or houses with big shiny panels on the roof. These are solar collectors that collect heat by absorbing sunlight and producing solar power. Also, solar energy can be used in generating electricity to provide power for watches, highway signs, houses and even space stations.", fa: 'امروزه انرژی خورشیدی می‌تواند به شکل‌های دیگر انرژی مثل گرما و برق تبدیل شود. انرژی خورشیدی ممکن است برای گرم کردن آب و هوای خانه‌ها، ساختمان‌ها یا استخرها استفاده شود. شاید ساختمان‌ها یا خانه‌هایی با پنل‌های براق بزرگ روی پشت‌بام دیده باشی. این‌ها جمع‌کننده‌های خورشیدی‌اند که با جذب نور خورشید گرما جمع می‌کنند و انرژی خورشیدی تولید می‌کنند. همچنین انرژی خورشیدی می‌تواند در تولید برق برای ساعت‌ها، تابلوهای بزرگراه، خانه‌ها و حتی ایستگاه‌های فضایی استفاده شود.' },
{ en: 'Clean energy resources are widely used in many countries to keep cities and villages clean. As a result, fewer fossil fuels are consumed each year and they are saved for the future generations.', fa: 'منابع انرژی پاک در بسیاری از کشورها به‌طور گسترده برای پاک نگه داشتن شهرها و روستاها استفاده می‌شوند. در نتیجه، هر سال سوخت فسیلی کمتری مصرف می‌شود و برای نسل‌های آینده ذخیره می‌شوند.' }
],
glossary: {
'ability': 'توانایی', 'variety': 'تنوع', 'mechanical': 'مکانیکی', 'nuclear': 'هسته‌ای',
'resources': 'منابع', 'fossil fuels': 'سوخت‌های فسیلی', 'coal': 'زغال‌سنگ', 'harmful': 'مضر',
'environment': 'محیط‌زیست', 'nonrenewable': 'تجدیدناپذیر', 'replaced': 'جایگزین', 'use them up': 'تمامشان کنیم',
'forever': 'برای همیشه', 'pollute': 'آلوده می‌کنند', 'renewable': 'تجدیدپذیر', 'tides': 'جزر و مد',
'demand': 'تقاضا', 'is reduced': 'کاهش می‌یابد', 'solar power': 'انرژی خورشیدی', 'radiation': 'تابش',
'heat source': 'منبع گرما', 'arrangements': 'چیدمان‌ها', 'balconies': 'بالکن‌ها', 'materials': 'مصالح',
'converted': 'تبدیل', 'shiny panels': 'پنل‌های براق', 'solar collectors': 'جمع‌کننده‌های خورشیدی',
'absorbing': 'جذب', 'generating': 'تولید', 'space stations': 'ایستگاه‌های فضایی',
'are consumed': 'مصرف می‌شوند', 'future generations': 'نسل‌های آینده'
},
comprehension: [
{
type: 'scan',
title: "A & B. Use the information in the 'Reading' to complete the notes. Take notes on the basis of the guidelines.",
items: [
{ q: 'Energy forms (نمونه یادداشت):', sampleAnswer: 'energy = ability to do work → 4 forms: mech / elec / chem / nuclear' },
{ q: 'Fossil fuels:', sampleAnswer: 'gas, oil, coal → nonrenewable, pollute, gone forever' },
{ q: 'Clean energy:', sampleAnswer: 'renewable: wind, water, sun, tides, plants → ↓ demand for fossil fuels' },
{ q: 'Solar power:', sampleAnswer: 'most common · radiation · Iranians: windows/balconies/yards design · → heat & electricity' }
]
},
{
type: 'scan',
title: "C. Read the 'Reading'. Find what these words refer to.",
items: [
{ q: 'It (paragraph 1, line 1)', sampleAnswer: 'Energy' },
{ q: 'them (paragraph 2, line 3)', sampleAnswer: 'Fossil fuels' },
{ q: 'them (paragraph 3, line 2)', sampleAnswer: 'Other types of energy resources' },
{ q: 'These (paragraph 5, line 5)', sampleAnswer: 'Big shiny panels (on the roof)' },
{ q: 'they (paragraph 6, line 3)', sampleAnswer: 'Fossil fuels' }
]
}
]
},
vocabDev: {
title: 'Vocabulary Development — Proverbs',
titleFa: 'واژه‌سازی — ضرب‌المثل‌ها',
blocks: [
{
type: 'affix-table',
title: 'PROVERBS (ضرب‌المثل‌ها)',
intro: 'A proverb is a short well-known sentence that gives practical advice about life. Proverbs surround us every day — at home, work, school, or during a conversation with a friend.',
introFa: 'ضرب‌المثل جمله‌ای کوتاه و معروف است که توصیه‌ی عملی درباره زندگی می‌دهد. بسیاری از ضرب‌المثل‌های انگلیسی معادل فارسی دارند.',
headers: ['English Proverb', 'Meaning', 'معادل فارسی'],
rows: [
['God helps those who help themselves', "Don't just wait for good things. Work hard to achieve your goals.", 'از تو حرکت، از خدا برکت'],
['The early bird catches the worm', 'Wake up and start work early if you want to succeed.', 'سحرخیز باش تا کامروا باشی']
]
},
{
type: 'fill-table',
title: 'A. Match the following proverbs with their meanings and write their Persian equivalents.',
items: [
{ text: '1. Birds of a feather flock together → _____', answer: '(e) دوست‌داشتن هم‌مسلک‌ها — کبوتر با کبوتر، باز با باز' },
{ text: '2. Actions speak louder than words → _____', answer: '(f) عمل مهم‌تر از حرف است — دوصد گفته چون نیم‌کردار نیست' },
{ text: '3. Practice makes perfect → _____', answer: '(g) با تمرین زیاد ماهر می‌شوی — کار نیکو کردن از پُر کردن است' },
{ text: '4. Too many cooks spoil the broth → _____', answer: '(c) رهبرهای زیاد نتیجه را خراب می‌کنند — آشپز که دو تا شد، آش یا شور می‌شود یا بی‌نمک' },
{ text: '5. Easy come, easy go → _____', answer: '(b) پول بادآورده زود می‌رود — باد آورده را باد می‌برد' },
{ text: '6. Two heads are better than one → _____', answer: '(a) همفکری نتیجه بهتر می‌دهد — یک دست صدا ندارد' },
{ text: "7. Don't count your chickens before they hatch → _____", answer: '(h) قبل از موفقیت برنامه‌ی بعدش را نچین — جوجه را آخر پاییز می‌شمارند' },
{ text: '8. Out of sight, out of mind → _____', answer: '(d) دور از چشم فراموش می‌شود — از دل برود هر آنکه از دیده برفت' }
]
},
{
type: 'fill-table',
title: 'B. Write the Persian equivalents for the following English proverbs.',
items: [
{ text: '1. Cut your coat according to your cloth. → _____', answer: 'پایت را به اندازه‌ی گلیمت دراز کن' },
{ text: '2. A burnt child dreads the fire. → _____', answer: 'مارگزیده از ریسمان سیاه‌وسفید می‌ترسد' },
{ text: '3. Kill two birds with one stone. → _____', answer: 'با یک تیر دو نشان زدن' },
{ text: "4. Don't look a gift horse in the mouth. → _____", answer: 'دندان اسب پیشکشی را نمی‌شمارند' }
]
}
]
},
grammar: {
title: 'Grammar — Passive Voice with Modals',
titleFa: 'دستور زبان — مجهول با افعال کمکی',
noteText: 'این <strong>مجهول با فعل کمکی (modal)</strong> است: <code>modal + be + قسمت سوم فعل</code>.',
noteMap: {
"can be used": "<strong>مجهول با can</strong>: <code>can be + p.p.</code> — می‌تواند استفاده شود.",
"can be considered": "<strong>مجهول با can</strong>: <code>can be + considered</code> — می‌تواند به حساب آید.",
"can be changed": "<strong>مجهول با can</strong>: <code>can be + changed</code> — می‌تواند تبدیل شود.",
"should be collected": "<strong>مجهول با should</strong>: <code>should be + p.p.</code> — باید جمع‌آوری شود.",
"should be informed": "<strong>مجهول با should</strong>: <code>should be + informed</code> — باید مطلع شوند.",
"may be paid": "<strong>مجهول با may</strong>: <code>may be + paid</code> — ممکن است پرداخت شود.",
"may give off": "این مجهول نیست! <strong>may + فعل ساده (معلوم)</strong> — ممکن است متصاعد کنند.",
"must be obeyed": "<strong>مجهول با must</strong>: <code>must be + obeyed</code> — باید رعایت شوند.",
"must be paid": "<strong>مجهول با must</strong>: <code>must be + paid</code>.",
"may be made": "<strong>مجهول با may</strong>: <code>may be + made</code> — ممکن است درست شود.",
"should be called": "<strong>مجهول با should</strong>: <code>should be + called</code>.",
"warned": "<strong>(should be) warned</strong> — مجهول با should؛ فعل کمکی از جمله قبل ادامه دارد.",
"be": "<strong>be</strong> — بعد از modal در ساختار مجهول همیشه <code>be</code> ساده می‌آید: <code>modal + be + p.p.</code>"
},
readTexts: {
title: 'A. Read the following text.',
texts: [
{ en: 'Did you know that the things nobody needs {can be used} to produce electricity, heat or fuel? Changing waste to energy {can be considered} one of the most helpful ways to save the resources of the earth. Because garbage {can be changed} directly into a liquid fuel, it {can be used} in cars, trucks, buses and airplanes. To do that, garbage {should be collected} and taken to a landfill by workers. People {may be paid} for voluntary garbage delivery as well. It is important to know that not all types of waste can be used to produce fuel. Some materials {may give off} harmful gases in the process. Therefore, people {should be informed} of this danger and {warned} about the possible harms.', fa: 'می‌دانستی چیزهایی که هیچ‌کس لازمشان ندارد می‌توانند برای تولید برق، گرما یا سوخت استفاده شوند؟ تبدیل زباله به انرژی می‌تواند یکی از مفیدترین راه‌های حفظ منابع زمین به حساب آید. چون زباله می‌تواند مستقیماً به سوخت مایع تبدیل شود، می‌تواند در ماشین‌ها، کامیون‌ها، اتوبوس‌ها و هواپیماها استفاده شود. برای این کار، زباله باید توسط کارگران جمع‌آوری و به محل دفن برده شود. ممکن است به مردم برای تحویل داوطلبانه‌ی زباله پول هم پرداخت شود. مهم است بدانیم همه‌ی انواع زباله برای تولید سوخت قابل استفاده نیستند. برخی مواد ممکن است در این فرایند گازهای مضر متصاعد کنند. بنابراین مردم باید از این خطر مطلع و درباره‌ی آسیب‌های احتمالی هشدار داده شوند.' }
]
},
explanation: [
'برای مجهول کردن جمله‌ای که <strong>فعل کمکی (modal)</strong> دارد: <code>modal + be + قسمت سوم فعل</code>',
'مثال: <code>People must obey the rules. → The rules must be obeyed.</code>',
'این ساختار با <code>can / may / must / should / might</code> به کار می‌رود.',
'⚠️ بعد از modal همیشه <code>be</code> ساده می‌آید (نه is/are/was).'
],
tablesTitle: 'B. Read the following example sentences.',
tables: [
{
title: 'Active ↔ Passive with Modals',
headers: ['Active', 'Passive'],
rows: [
['The principal should call the parents.', 'The parents should be called (by the principal).'],
['The cook may make a fish salad for dinner.', 'A fish salad may be made for dinner (by the cook).'],
['People must obey the traffic rules.', 'The traffic rules must be obeyed (by everyone).']
],
examples: [
{ en: 'The traffic rules {must be obeyed}.', fa: 'قوانین راهنمایی باید رعایت شوند.' },
{ en: 'Wind {can be changed} into electricity.', fa: 'باد می‌تواند به برق تبدیل شود.' }
]
}
],
notes: [
"C. Tell your teacher how 'passive voice' is made using 'modals'.",
"D. Read the Conversation and underline all 'passive voices with modals'."
],
practice: {
title: 'E. Read the following sentences and use passive voice with the given verbs.',
instruction: 'مجهول با modal بساز.',
items: [
{ sentence: '1. Something _____ about global warming, or some types of animals will die out. (should/do)', options: ['should be done', 'should do'], correct: 0 },
{ sentence: '2. The bill _____ before leaving the restaurant. (must/pay)', options: ['must be paid', 'must pay'], correct: 0 },
{ sentence: '3. Some dangerous gases _____ when garbage is burned. (may/produce)', options: ['may be produced', 'may produce'], correct: 0 },
{ sentence: '4. Wind _____ into electricity. (can/change)', options: ['can be changed', 'can change'], correct: 0 }
]
},
friendWork: {
title: 'F. Pair up and talk about the things that can/may/should/must be done without mentioning the doer.',
partA: { instruction: 'مثال: Water can be converted into ice in cold weather.', items: ['... can be ...', '... should be ...', '... must be ...'] },
partB: { instruction: 'الگو:', items: ['modal + be + p.p.'] }
},
goingTo: {
title: 'Past Perfect Tense (ماضی بعید)',
note: '<strong>ماضی بعید</strong>: <code>had + قسمت سوم فعل</code> — برای کاری که <strong>قبل از کار دیگری در گذشته</strong> انجام شده. اغلب با before / because / when / already.',
noteMap: {
"had studied": "<strong>ماضی بعید</strong>: <code>had + studied</code> — قبل از رفتنش به چین، چینی خوانده بود.",
"had never seen": "<strong>ماضی بعید منفی</strong>: <code>had never + p.p.</code> — هرگز ندیده بود.",
"had seen": "<strong>ماضی بعید</strong>: می‌دانستم آن مرد را جایی دیده‌ام (قبل‌تر).",
"had worked": "<strong>ماضی بعید</strong>: گفت که قبلاً در اصفهان کار کرده بود.",
"hadn't rained": "<strong>ماضی بعید منفی</strong>: <code>hadn't + p.p.</code> — باران نباریده بود.",
"had paid": "<strong>ماضی بعید</strong>: چون زیادی پرداخت کرده بودم.",
"had already gone": "<strong>ماضی بعید + already</strong> — قبل از رسیدنم، رفته بودند.",
"had already bought": "<strong>ماضی بعید + already</strong> — قبلاً خریده بود."
},
readTitle: 'A. Read the following example sentences.',
examples: [
{ en: 'Joe {had studied} Chinese before he moved to China.', fa: 'جو قبل از اینکه به چین برود، چینی خوانده بود.' },
{ en: 'She {had never seen} a bear before she went to the zoo.', fa: 'قبل از رفتن به باغ‌وحش، هرگز خرس ندیده بود.' },
{ en: 'I knew I {had seen} that man somewhere before.', fa: 'می‌دانستم آن مرد را قبلاً جایی دیده‌ام.' },
{ en: 'The woman told me that she {had worked} in Isfahan before.', fa: 'آن زن گفت که قبلاً در اصفهان کار کرده بود.' },
{ en: "Everything in the garden was brown because it {hadn't rained}.", fa: 'همه‌چیز در باغ قهوه‌ای بود چون باران نباریده بود.' },
{ en: 'They gave me some money back because I {had paid} too much.', fa: 'مقداری پول پس دادند چون زیادی پرداخت کرده بودم.' },
{ en: 'When I arrived at the party, my grandparents {had already gone} home.', fa: 'وقتی به مهمانی رسیدم، پدربزرگ و مادربزرگم قبلاً به خانه رفته بودند.' },
{ en: 'When I sent the book to her, she {had already bought} it.', fa: 'وقتی کتاب را برایش فرستادم، قبلاً آن را خریده بود.' }
],
table: {
headers: ['ساختار', 'مثال'],
rows: [
['had + p.p. + before + گذشته ساده', 'Joe had studied Chinese before he moved.'],
['گذشته ساده + because + had + p.p.', "...was brown because it hadn't rained."],
['When + گذشته ساده, ... had already + p.p.', 'When I arrived, they had already gone.']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Talking about an Activity before another Activity in the Past',
strategyTitleFa: 'راهبرد گفتاری — صحبت درباره کاری قبل از کار دیگر در گذشته',
strategyDesc: "A. We use the 'past perfect tense' to talk about an event that happened before another event in the past.",
patterns: [
{ q: 'OK, tell me about the picnic. What did you do?', a: 'That was great, dad. Before we played volleyball, we had taken some photographs.' },
{ q: 'Did you do anything in the afternoon?', a: 'After we had eaten lunch, we flew our kites. That was fantastic because we had made the kites ourselves!' }
],
patternsList: [
'Before I ........., I had .........',
'After I had ........., I .........'
],
listenComplete: {
title: 'B. Listen to the following conversations and answer the questions.',
conversations: [
{ num: 1, items: ['Had Rasool tried the restaurant sauce before? .....................', 'Did Rasool go to the new restaurant alone? .....................'] },
{ num: 2, items: ['When had Samira and her friends gone to the museum? .....................', "When did Samira's guests leave her home? ....................."] }
]
},
pairWork: {
title: 'Pair up and ask your friends what they did before or after other actions / what they hadn\'t done before.',
box1: { label: 'قبل/بعد از کارها', verbs: ['travel to Mashhad', 'borrow a book', 'spend money', 'catch cold', 'go home', 'leave Tehran'] },
box2: { label: 'کارهایی که قبلاً نکرده بودند', verbs: ['climb Damavand', 'apply for a job', 'pay a check', 'sing a song', 'go abroad', 'play futsal'] }
}
},
writing: {
title: 'Writing — Supporting & Concluding Sentences',
titleFa: 'نوشتن — جملات پشتیبان و جمله نتیجه‌گیری',
sections: [
{
type: 'lesson-noun',
title: 'Supporting & Concluding Sentences',
intro: 'Supporting sentences come after the topic sentence. The last sentence in a paragraph is often a concluding sentence which repeats the idea of the topic sentence.',
introFa: 'جملات پشتیبان بعد از جمله موضوعی می‌آیند؛ جمله نتیجه‌گیری در پایان، ایده‌ی جمله موضوعی را تکرار می‌کند.',
categories: [
{ label: 'جملات پشتیبان می‌توانند:', examples: ['explain the idea in the topic sentence', 'give reasons', 'give examples', 'tell a short story'] },
{ label: 'جمله نتیجه‌گیری', examples: ['Repeats the idea of the topic sentence.', 'Remember: Not all paragraphs have concluding sentences.'] }
]
},
{
type: 'plural-task',
title: 'A. Cross out any sentences that do not support the topic sentences.',
items: [
{ sentence: '۱. (Ants are strange insects...) کدام جمله‌ها پشتیبان نیستند؟ _____', words: ['?'], answers: ['«Yesterday, I saw an ant.» و «I can run quickly too.»'] },
{ sentence: '۲. (The new century... communication...) کدام جمله‌ها پشتیبان نیستند؟ _____', words: ['?'], answers: ['«Students should not use cell phones in schools.» و «But some people do not have such phones.»'] }
]
},
{
type: 'plural-task',
title: 'B. Which one has a concluding sentence?',
items: [
{ sentence: '۱. Horses (اسب‌ها) → _____', words: ['?'], answers: ['دارد: «They are very useful farm animals.»'] },
{ sentence: '۲. Energy (انرژی) → _____', words: ['?'], answers: ["دارد: «It is thus at the heart of everybody's life.»"] },
{ sentence: '۳. Elephant (فیل) → _____', words: ['?'], answers: ['ندارد — فقط جمله‌های پشتیبان دارد.'] }
]
},
{
type: 'plural-task',
title: 'C. Unscramble the sentences. Write them in correct order to form a paragraph. (Solar System)',
items: [
{ sentence: 'ترتیب درست جمله‌های ۱ تا ۴؟ _____', words: ['?'], answers: ['2 → 4 → 3 → 1 (تعریف منظومه شمسی → خورشید بزرگ‌ترین عضو → خورشید در مرکز → ترتیب سیاره‌ها)'] }
]
},
{
type: 'plural-task',
title: 'D. Decide if the sentences are topic (T), supporting (S), or concluding (C).',
items: [
{ sentence: 'a) Trees are very valuable. → _____', words: ['T/S/C'], answers: ['T'] },
{ sentence: 'b) They also cause rain. → _____', words: ['T/S/C'], answers: ['S'] },
{ sentence: 'c) They take carbon dioxide from the atmosphere and fill it with oxygen. → _____', words: ['T/S/C'], answers: ['S'] },
{ sentence: 'd) In short, the trees are the best friends of man. → _____', words: ['T/S/C'], answers: ['C'] },
{ sentence: 'e) They supply us with many necessary things of everyday life. → _____', words: ['T/S/C'], answers: ['S'] }
]
},
{
type: 'lesson-markers',
title: 'E, F & G. Write your own paragraphs',
intro: 'پاراگراف کامل بنویس:',
markers: [
{ marker: "E. 'Learning a New Language'", examples: 'جمله موضوعی → حداقل ۳ جمله پشتیبان → جمله نتیجه‌گیری → مرتب‌سازی' },
{ marker: "F. 'Sport'", examples: 'با کمک تصاویر، پاراگرافی درباره ورزش بنویس.' },
{ marker: 'G. نقشه ایران', examples: 'به تصویر نگاه کن و پاراگرافی در توصیفش بنویس.' }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a story and answer.',
tasks: [
'a. How was the street at night? .....................',
'b. Had the man experienced such a thing before? .....................',
"Listen again and take note of 'past perfect tenses'."
]
},
reading: {
title: 'B. Now read the rest.',
text: "He was one of our clients. He had come to our office two or three times before. The last time he was there, he was so upset. He was worried because he had lost his documents. Everyone in the office tried to help him. They started to look for his suitcase. Finally, he remembered that he had left his suitcase in his car! He apologized for his anger and left. I haven't seen him since then.",
fa: 'او یکی از مشتری‌های ما بود. دو سه بار قبلاً به دفترمان آمده بود. آخرین باری که آنجا بود، خیلی ناراحت بود. نگران بود چون مدارکش را گم کرده بود. همه در دفتر سعی کردند کمکش کنند. شروع به گشتن دنبال کیفش کردند. بالاخره یادش آمد که کیفش را در ماشینش جا گذاشته بود! بابت عصبانیتش عذرخواهی کرد و رفت. از آن موقع دیگر ندیده‌امش.',
glossary: {
'clients': 'مشتری‌ها', 'had come': 'آمده بود', 'upset': 'ناراحت', 'documents': 'مدارک',
'suitcase': 'کیف/چمدان', 'had left': 'جا گذاشته بود', 'apologized': 'عذرخواهی کرد'
},
tasks: [
"3. Scan the text and list 'past perfect tenses'. (had come, had lost, had left)"
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer.',
questions: [
'Had the man lost his suitcase in the office?',
'Did the man apologize?',
'Have you ever forgotten doing something?'
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
type: 'group-words',
title: 'A. Write the resources of renewable and non-renewable energy in the provided spaces.',
words: ['wind', 'sunshine', 'water', 'plants', 'tides', 'oil', 'coal', 'natural gas'],
groups: ['Renewable (تجدیدپذیر)', 'Non-renewable (تجدیدناپذیر)']
},
{
type: 'short-answer',
title: 'B. What do you see in this picture? This machine was built in old Persia about two thousand years ago.',
questions: [
{ q: 'Can you write how this machine works?', sampleAnswer: 'آسباد (windmill) — باد پره‌ها را می‌چرخاند و انرژی باد به انرژی مکانیکی برای آرد کردن گندم تبدیل می‌شود.' }
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
passageTitle: 'Electric Cars',
passage: "Many countries now think that cars that burn fossil fuels should be replaced by electric cars. Electric cars don't burn gasoline in the engine, so they don't pollute the air. They use electricity stored on the car in batteries. Sometimes, 12 or 24 batteries, or more, are needed to power the car. Just like a remote-controlled car, an electric car has an electric motor that turns the wheels and a battery to run the motor. Electricity, the same energy that lights your lamps and runs your TV, is stored in batteries on an electric car. The batteries can be like the batteries you find in flashlights or in regular gasoline cars. To get the battery ready to roll, you have to charge it. This process isn't much different from the way you charge the portable devices you carry around every day: your cell phone, MP3 player, or digital camera. The difference is that you deal with a much bigger gadget that carries you around instead. The electric car is usually plugged in at night. The car can be plugged into a special charging unit even at houses. Some electric cars can be plugged right into a regular electrical wall outlet. The engineers are trying to make better batteries that hold more energy and last longer. To overcome the problem of charging electric cars, hybrid cars are also available. Hybrid cars combine the benefits of gasoline engines and electric motors. They can be designed to meet different goals, such as better fuel economy or more power.",
passageFa: 'بسیاری از کشورها حالا فکر می‌کنند ماشین‌هایی که سوخت فسیلی می‌سوزانند باید با ماشین‌های برقی جایگزین شوند. ماشین‌های برقی بنزین در موتور نمی‌سوزانند، پس هوا را آلوده نمی‌کنند. از برق ذخیره‌شده در باتری‌های ماشین استفاده می‌کنند. گاهی ۱۲ یا ۲۴ باتری یا بیشتر برای راه انداختن ماشین لازم است. درست مثل ماشین کنترلی، ماشین برقی موتوری برقی دارد که چرخ‌ها را می‌چرخاند و باتری‌ای که موتور را راه می‌اندازد. برق، همان انرژی‌ای که لامپ‌هایت را روشن و تلویزیونت را راه می‌اندازد، در باتری‌های ماشین برقی ذخیره می‌شود. باتری‌ها می‌توانند مثل باتری‌های چراغ‌قوه یا ماشین‌های بنزینی معمولی باشند. برای آماده شدن باتری باید شارژش کنی. این فرایند تفاوت زیادی با شارژ وسایل قابل‌حملی که هر روز همراهت داری ندارد: موبایل، MP3 پلیر یا دوربین دیجیتال. تفاوت این است که با وسیله‌ی خیلی بزرگ‌تری سروکار داری که تو را جابه‌جا می‌کند. ماشین برقی معمولاً شب به برق زده می‌شود. ماشین حتی در خانه‌ها می‌تواند به واحد شارژ مخصوص وصل شود. بعضی ماشین‌های برقی مستقیماً به پریز دیواری معمولی وصل می‌شوند. مهندسان تلاش می‌کنند باتری‌های بهتری بسازند که انرژی بیشتری نگه دارند و بیشتر دوام بیاورند. برای حل مشکل شارژ ماشین‌های برقی، ماشین‌های هیبریدی هم موجودند. ماشین‌های هیبریدی مزایای موتورهای بنزینی و برقی را ترکیب می‌کنند. می‌توانند برای اهداف مختلف طراحی شوند، مثل مصرف سوخت بهتر یا قدرت بیشتر.',
glossary: {
'burn': 'می‌سوزانند', 'be replaced': 'جایگزین شوند', 'gasoline': 'بنزین', 'stored': 'ذخیره‌شده',
'batteries': 'باتری‌ها', 'remote-controlled': 'کنترلی', 'wheels': 'چرخ‌ها', 'charge': 'شارژ کردن',
'portable devices': 'وسایل قابل‌حمل', 'gadget': 'وسیله', 'plugged in': 'به برق زده',
'wall outlet': 'پریز دیواری', 'overcome': 'غلبه کردن', 'hybrid': 'هیبریدی', 'combine': 'ترکیب می‌کنند',
'fuel economy': 'مصرف سوخت'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Electric cars use both fossil fuel and electricity.', answer: false },
{ q: 'All electric cars have batteries.', answer: true },
{ q: 'People can charge electric cars at home.', answer: true }
]
},
{
type: 'short-answer',
title: 'B & C. Answer the questions and write a title.',
questions: [
{ q: '1. What is an electric car?', sampleAnswer: 'A car that uses electricity stored in batteries instead of burning gasoline.' },
{ q: '2. Why do people use hybrid cars?', sampleAnswer: 'To overcome the problem of charging; they combine the benefits of gasoline engines and electric motors.' },
{ q: '3. Have you ever seen an electric car?', sampleAnswer: "Yes, I have. / No, I haven't." },
{ q: 'C. Skim the text and write a title for it.', sampleAnswer: 'Electric Cars / Cars of the Future' }
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
title: 'A. Make new words by combining the items: (shine, tower, renewable, harm, power) + (hydro, sun, non, ful, wind).',
wordBank: ['sunshine', 'wind tower', 'nonrenewable', 'harmful', 'hydropower'],
items: [
{ sentence: '1. sun + shine = _____', answer: 'sunshine' },
{ sentence: '2. wind + tower = _____', answer: 'wind tower' },
{ sentence: '3. non + renewable = _____', answer: 'nonrenewable' },
{ sentence: '4. harm + ful = _____', answer: 'harmful' },
{ sentence: '5. hydro + power = _____', answer: 'hydropower' }
]
},
{
type: 'odd-one-out',
title: 'B. Odd one out.',
items: [
{ options: ['water', 'tree', 'coal', 'sun'], odd: 2 },
{ options: ['pollution', 'waste', 'garbage', 'resource'], odd: 3 },
{ options: ['yard', 'balcony', 'roof', 'motor'], odd: 3 },
{ options: ['absorb', 'use up', 'generate', 'digest'], odd: 3 }
]
},
{
type: 'fill-words',
title: 'C. Write the Persian equivalent of the following English proverbs.',
wordBank: ['پول علف خرس نیست', 'باد آورده را باد می‌برد', 'هیچ‌جا خانه‌ی خود آدم نمی‌شود', 'دوری و دوستی'],
items: [
{ sentence: '1. Money does not grow on trees. → _____', answer: 'پول علف خرس نیست' },
{ sentence: '2. Easy come, easy go. → _____', answer: 'باد آورده را باد می‌برد' },
{ sentence: "3. There's no place like home. → _____", answer: 'هیچ‌جا خانه‌ی خود آدم نمی‌شود' },
{ sentence: '4. Absence makes the heart grow fonder. → _____', answer: 'دوری و دوستی' }
]
},
{
type: 'fill-words',
title: 'D. Fill in the blanks with the given words. Make the necessary changes.',
wordBank: ['remind', 'generate', 'variety', 'arrangement', 'resource'],
items: [
{ sentence: '1. Special _____ can be made for guests with disabilities.', answer: 'arrangements' },
{ sentence: '2. The students constantly had to be _____ about their homework.', answer: 'reminded' },
{ sentence: '3. Asia is a continent rich in natural _____.', answer: 'resources' },
{ sentence: '4. The people of this city come from a _____ of different backgrounds.', answer: 'variety' },
{ sentence: '5. Wind turbines _____ electricity for the local community.', answer: 'generate' }
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
type: 'fill-words',
title: 'A. Fill in the blanks with the correct form of the verbs (passive with modals).',
wordBank: ['be polluted', 'be arranged', 'be generated', 'be collected'],
items: [
{ sentence: '1. The river may _____ with aluminum. (pollute)', answer: 'be polluted' },
{ sentence: '2. The list can _____ alphabetically. (arrange)', answer: 'be arranged' },
{ sentence: '3. Nowadays power can _____ by resources other than fossil fuels. (generate)', answer: 'be generated' },
{ sentence: '4. The waste should _____ every night to be sent to the landfill. (collect)', answer: 'be collected' }
]
},
{
type: 'short-answer',
title: 'B & C. Passive sentences + questions.',
questions: [
{ q: 'B. Look at the pictures and write passive sentences.', sampleAnswer: 'e.g. The trash must be collected. / Electricity can be generated by wind.' },
{ q: 'C1. Should fossil fuels be saved for our children?', sampleAnswer: 'Yes, they should (be saved).' },
{ q: 'C2. Can electricity be generated from plants?', sampleAnswer: 'Yes, it can.' },
{ q: 'C3. Have you ever seen a solar panel? How does it work?', sampleAnswer: 'Yes. It absorbs sunlight and converts it into electricity.' }
]
},
{
type: 'fill-going-to',
title: 'D. Fill in the blanks using simple past and past perfect tenses.',
text: '1. I [1] (eat) lunch before I [2] (go out). 2. When I [3] (get) home, my little brother [4] (already / fall asleep). 3. She [5] (upset) because she [6] (get a bad score).',
blanks: [
{ num: 1, answer: 'had eaten' },
{ num: 2, answer: 'went out' },
{ num: 3, answer: 'got' },
{ num: 4, answer: 'had already fallen asleep' },
{ num: 5, answer: 'was upset' },
{ num: 6, answer: 'had got a bad score' }
]
}
]
},
{
part: 'Part IV',
section: 'Writing',
sectionFa: 'نوشتن',
tasks: [
{
type: 'short-answer',
title: 'A & B. Write paragraphs.',
questions: [
{ q: 'A. Look at the figure (healthy kids: eat fewer snacks, get active each day, choose water, eat more fruit and vegies, turn off the TV) and write a paragraph about it.', sampleAnswer: 'Topic sentence: There are several easy ways for kids to stay healthy. + supporting sentences از پنج توصیه‌ی تصویر + concluding sentence.' },
{ q: 'B. Choose one of the topics (Technology / Smoking / Charity) and write a paragraph.', sampleAnswer: 'جمله موضوعی + ۳ جمله پشتیبان + جمله نتیجه‌گیری.' }
]
}
]
}
],
quiz: [
{ q: 'The traffic rules _____ by everyone.', qFa: 'قوانین راهنمایی باید توسط همه رعایت شوند.', options: ['must be obeyed', 'must obey', 'must obeyed', 'must be obey'], correct: 0 },
{ q: 'Wind _____ into electricity.', qFa: 'باد می‌تواند به برق تبدیل شود.', options: ['can be changed', 'can change', 'can be change', 'can changed'], correct: 0 },
{ q: 'Joe _____ Chinese before he moved to China.', qFa: 'جو قبل از رفتن به چین، چینی خوانده بود.', options: ['had studied', 'has studied', 'studies', 'was studying'], correct: 0 },
{ q: 'When I arrived, my grandparents _____ home.', qFa: 'وقتی رسیدم، آن‌ها قبلاً به خانه رفته بودند.', options: ['had already gone', 'have already gone', 'already went', 'already go'], correct: 0 },
{ q: "'Easy come, easy go' means: _____", qFa: 'باد آورده را باد می‌برد.', options: ['Money you get quickly is lost quickly', 'Wake up early to succeed', 'Practice a lot', 'Work with others'], correct: 0 },
{ q: 'Plants _____ carbon dioxide.', qFa: 'گیاهان دی‌اکسید کربن جذب می‌کنند.', options: ['absorb', 'consume', 'convert', 'replace'], correct: 0 }
]
}
];
