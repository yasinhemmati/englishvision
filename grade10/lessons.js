const LESSONS = [
{
num: 1,
title: 'Saving Nature',
titleFa: 'نجات طبیعت',
function: 'Saving Nature',
quote: { en: 'We made from water every living thing', ref: 'Al-Anbia 30', fa: 'و هر چیز زنده‌ای را از آب پدید آوردیم.' },
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'Part One',
instruction: 'A. Match the pictures with the phrases.',
instructionFa: 'تصاویر را با عبارت‌ها تطبیق بده.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'putting out the fire', fa: 'خاموش کردن آتش', image: 'gr-putting-out-fire.jpg' },
{ id: 'b', phrase: 'hurting the animal', fa: 'آزار رساندن به حیوان', image: 'gr-hurting-animal.jpg' },
{ id: 'c', phrase: 'cutting down the trees', fa: 'بریدن درخت‌ها', image: 'gr-cutting-trees.jpg' },
{ id: 'd', phrase: 'helping the injured animal', fa: 'کمک به حیوان زخمی', image: 'gr-helping-animal.jpg' }
],
followup: 'B. Which is good for nature? Which is bad?',
followupFa: 'کدام برای طبیعت خوب است؟ کدام بد؟',
followupType: 'good-bad',
followupItems: ['putting out the fire', 'hurting the animal', 'cutting down the trees', 'helping the injured animal']
},
{
label: 'Part Two',
instruction: 'A. Match the pictures with the words.',
instructionFa: 'تصاویر را با کلمات تطبیق بده.',
type: 'match-words',
items: [
{ word: 'a goat', fa: 'بز', image: 'gr-goat.jpg' },
{ word: 'a wolf', fa: 'گرگ', image: 'gr-wolf.jpg' },
{ word: 'a panda', fa: 'پاندا', image: 'gr-panda.jpg' },
{ word: 'an elephant', fa: 'فیل', image: 'gr-elephant.jpg' },
{ word: 'a whale', fa: 'نهنگ', image: 'gr-whale.jpg' },
{ word: 'a cat', fa: 'گربه', image: 'gr-cat.jpg' },
{ word: 'a leopard', fa: 'پلنگ', image: 'gr-leopard.jpg' },
{ word: 'a duck', fa: 'اردک', image: 'gr-duck.jpg' }
],
followup: 'B. Can you divide the above animals into two groups? How?',
followupFa: 'می‌توانی حیوانات بالا را به دو گروه تقسیم کنی؟ چطور؟',
followupType: 'two-groups',
groupLabels: ['Group 1', 'Group 2']
}
]
},
conversation: {
subtitle: 'Visiting the Museum of Nature and Wildlife',
subtitleFa: 'بازدید از موزه طبیعت و حیات وحش',
desc: 'مریم در حال بازدید از موزه طبیعت و حیات وحش است و با آقای رضوی که در موزه کار می‌کند صحبت می‌کند.',
newWordsHint: ['endangered', 'alive', 'increase', 'hear', 'protect', 'for example'],
lines: [
{ speaker: 'Maryam', role: 'student', en: 'Excuse me, what is it? Is it a leopard?', fa: 'ببخشید، این چیه؟ پلنگه؟' },
{ speaker: 'Mr. Razavi', role: 'teacher', en: 'No, it is a cheetah.', fa: 'نه، یوزپلنگه.' },
{ speaker: 'Maryam', role: 'student', en: 'Oh, a cheetah?', fa: 'اوه، یوزپلنگ؟' },
{ speaker: 'Mr. Razavi', role: 'teacher', en: 'Yeah, an Iranian cheetah. It is an endangered animal.', fa: 'بله، یوزپلنگ ایرانی. یه حیوان در معرض انقراضه.' },
{ speaker: 'Maryam', role: 'student', en: 'I know. I heard around 70 of them are alive. Yes?', fa: 'می‌دونم. شنیدم حدود ۷۰ تاشون زنده‌ان. درسته؟' },
{ speaker: 'Mr. Razavi', role: 'teacher', en: 'Right, but the number will increase.', fa: 'درسته، ولی تعدادشون افزایش پیدا می‌کنه.' },
{ speaker: 'Maryam', role: 'student', en: 'Really?! How?', fa: 'واقعاً؟! چطور؟' },
{ speaker: 'Mr. Razavi', role: 'teacher', en: 'Well, we have some plans. For example, we are going to protect their homes, to make movies about their life, and to teach people how to take more care of them.', fa: 'خب، چند تا برنامه داریم. مثلاً قراره از خونه‌هاشون محافظت کنیم، درباره زندگی‌شون فیلم بسازیم، و به مردم یاد بدیم چطور بیشتر ازشون مراقبت کنن.' }
],
questions: [
{ q: 'Where are they talking?', fa: 'کجا دارن صحبت می‌کنن؟' },
{ q: 'Are there many cheetahs alive?', fa: 'یوزپلنگ‌های زیادی زنده‌ان؟' },
{ q: 'Do you take care of animals?', fa: 'تو از حیوانات مراقبت می‌کنی؟' }
]
},
newWords: {
lookRead: [
{ en: 'We live on {Earth}.', fa: 'ما روی {زمین} زندگی می‌کنیم.', image: 'nw-earth.jpg' },
{ en: 'A tiger is a {wild} animal.', fa: 'ببر یک حیوان {وحشی} است.', image: 'nw-tiger.jpg' },
{ en: 'I went to Golestan {Forest} last year.', fa: 'پارسال به {جنگل} گلستان رفتم.', image: 'nw-forest.jpg' },
{ en: 'They are {destroying} the jungle.', fa: 'آن‌ها دارند جنگل را {نابود} می‌کنند.', image: 'nw-destroy.jpg' },
{ en: 'The Persian lion {died out} about 75 years ago.', fa: 'شیر ایرانی حدود ۷۵ سال پیش {منقرض شد}.', image: 'nw-lion.jpg' },
{ en: '{Pay attention}! Don\'t swim here.', fa: '{توجه کن}! اینجا شنا نکن.', image: 'nw-attention.jpg' },
{ en: 'Tooran is the {natural home} of the Persian zebra.', fa: 'توران {خانه طبیعی} گورخر ایرانی است.', image: 'nw-zebra.jpg' },
{ en: 'Moghan {Plain} is a nice place in the north-west of Iran.', fa: '{دشت} مغان جای زیبایی در شمال‌غرب ایران است.', image: 'nw-plain.jpg' },
{ en: 'They hope to save the {injured} animal.', fa: 'آن‌ها امیدوارند حیوان {زخمی} را نجات دهند.', image: 'nw-injured.jpg' }
],
definitions: [
{ word: 'a few', def: 'not many; a small number of things or people', fa: 'تعداد کمی', example: 'There are {a few} Iranian cheetahs.' },
{ word: 'human', def: 'a person', fa: 'انسان', example: 'All {humans} must take care of nature.' },
{ word: 'instead', def: 'in place of someone or something else', fa: 'به جای', example: "There's no coffee. Would you like a cup of tea {instead}?" },
{ word: 'future', def: 'the time after now', fa: 'آینده', example: 'Everyone needs to plan for the {future}.' }
]
},
reading: {
passageTitle: 'Endangered Animals',
passageTitleFa: 'حیوانات در معرض انقراض',
paragraphs: [
{ en: 'Today, there are some endangered animals on Earth. It means that we can find only a few of them around us. Some examples are whales, pandas, tigers and Asian elephants.', fa: 'امروزه، برخی حیوانات در معرض انقراض روی زمین هستند. یعنی فقط تعداد کمی از آن‌ها را در اطرافمان می‌یابیم. چند نمونه عبارت‌اند از نهنگ‌ها، پانداها، ببرها و فیل‌های آسیایی.' },
{ en: "Humans destroy the natural homes of the animals in the forests, lakes, and plains. When the number of people on Earth increases, they need more places for living. They cut down trees and destroy lakes. They make homes and roads instead. Then the animals won't have a place to live. They will die out.", fa: 'انسان‌ها خانه‌های طبیعی حیوانات را در جنگل‌ها، دریاچه‌ها و دشت‌ها نابود می‌کنند. وقتی تعداد مردم روی زمین افزایش می‌یابد، به مکان‌های بیشتری برای زندگی نیاز دارند. درختان را می‌برند و دریاچه‌ها را نابود می‌کنند. به جایش خانه و جاده می‌سازند. آنگاه حیوانات جایی برای زندگی نخواهند داشت. آن‌ها منقرض می‌شوند.' },
{ en: 'The Iranian cheetah is among these animals. This wild animal lives only in the plains of Iran. Now there are only a few Iranian cheetahs alive. If people take care of them, there is hope for this beautiful animal to live.', fa: 'یوزپلنگ ایرانی جزو این حیوانات است. این حیوان وحشی فقط در دشت‌های ایران زندگی می‌کند. اکنون فقط تعداد کمی یوزپلنگ ایرانی زنده‌اند. اگر مردم از آن‌ها مراقبت کنند، امید است این حیوان زیبا زنده بماند.' },
{ en: "Recently, families pay more attention to nature, students learn about saving wildlife, and some hunters don't go hunting anymore. In this way, the number of cheetahs is going to increase in the future.", fa: 'اخیراً خانواده‌ها بیشتر به طبیعت توجه می‌کنند، دانش‌آموزان درباره حفظ حیات وحش می‌آموزند و برخی شکارچیان دیگر به شکار نمی‌روند. به این ترتیب، تعداد یوزپلنگ‌ها در آینده افزایش می‌یابد.' }
],
glossary: {
'endangered': 'در معرض انقراض', 'Earth': 'زمین', 'a few': 'تعداد کمی', 'whales': 'نهنگ‌ها',
'pandas': 'پانداها', 'tigers': 'ببرها', 'elephants': 'فیل‌ها', 'Humans': 'انسان‌ها',
'destroy': 'نابود کردن', 'natural homes': 'خانه‌های طبیعی', 'forests': 'جنگل‌ها', 'lakes': 'دریاچه‌ها',
'plains': 'دشت‌ها', 'increases': 'افزایش می‌یابد', 'cut down': 'بریدن', 'instead': 'به جای',
'die out': 'منقرض شدن', 'cheetah': 'یوزپلنگ', 'wild': 'وحشی', 'alive': 'زنده',
'take care of': 'مراقبت کردن', 'hope': 'امید', 'attention': 'توجه', 'wildlife': 'حیات وحش',
'hunters': 'شکارچیان', 'hunting': 'شکار', 'increase': 'افزایش یافتن', 'future': 'آینده'
},
comprehension: [
{
type: 'choose',
title: 'A. Choose the best answer.',
items: [
{ q: 'Which of the followings is not an endangered animal?', options: ['panda', 'cheetah', 'horse'], correct: 2 },
{ q: 'Where is the natural home of the Iranian cheetah?', options: ['forest', 'plain', 'mountain'], correct: 1 },
{ q: 'Which place is not a natural home of wild animals?', options: ['park', 'lake', 'jungle'], correct: 0 }
]
},
{
type: 'truefalse',
title: 'B. True / False',
items: [
{ q: 'In the past, many hunters paid attention to wildlife.', answer: false },
{ q: 'Families are interested in protecting nature.', answer: true },
{ q: 'When people take care of cheetahs, the number of these animals will increase.', answer: true }
]
},
{
type: 'match-halves',
title: 'C. Match two halves.',
pairs: [
{ left: 'When only a few numbers of an animal live on Earth,', right: 'it means that it is an endangered animal.', letter: 'b' },
{ left: 'If we take care of Iranian cheetahs,', right: 'they will live in the future.', letter: 'd' },
{ left: 'People need more places for living,', right: 'when their number increases.', letter: 'a' }
],
distractor: { letter: 'c', right: 'some hunters go hunting.' }
}
]
},
grammar: {
title: 'Grammar — The Future Tense',
titleFa: 'دستور زبان — زمان آینده',
noteText: 'این کلمه نشانهٔ <strong>زمان آینده</strong> است.',
noteMap: {
"won't": "<strong>won't</strong> = will not — شکل <strong>منفی</strong> زمان آینده. بعدش فعل ساده می‌آید: <code>won't go</code>.",
"will not": "<strong>will not</strong> (= won't) — شکل <strong>منفی</strong> زمان آینده.",
"will": "<strong>will</strong> — فعل کمکی <strong>زمان آینده</strong> (مثبت). بعدش فعل ساده می‌آید: <code>will go</code>. برای تصمیم‌ها، پیش‌بینی‌ها و قول‌ها به کار می‌رود.",
"are going to": "<strong>be going to</strong> — برای بیان <strong>برنامه‌ها و نقشه‌های</strong> از پیش تعیین‌شده در آینده: <code>are going to + فعل</code>.",
"is going to": "<strong>be going to</strong> — آینده برای برنامه‌ریزی‌شده‌ها: <code>is going to + فعل</code> (سوم‌شخص مفرد).",
"going to": "<strong>be going to</strong> — آیندهٔ برنامه‌ریزی‌شده: <code>am/is/are going to + فعل</code>.",
"not going to": "<strong>منفی be going to</strong>: <code>am/is/are + not going to + فعل</code>."
},
readTexts: {
title: 'A. Read the following texts.',
texts: [
{ en: 'Tomorrow I {will} travel to Africa. I {will} go to a hot and dry country. I {will} stay in a hotel near a lake. I {will} travel to many places and visit people and animals. I {will} learn many things there.', fa: 'فردا به آفریقا سفر می‌کنم. به کشوری گرم و خشک می‌روم. در هتلی نزدیک یک دریاچه می‌مانم. به جاهای زیادی سفر می‌کنم و آدم‌ها و حیوانات را می‌بینم. چیزهای زیادی آنجا یاد می‌گیرم.' },
{ en: "Nowadays, many people are taking care of nature. They pay more attention to our world. Hopefully, we {won't} lose any plants and animals and we {will} have enough food in the future. The animals {won't} lose their natural homes and they {will} live longer. In this way, we {will} have a happy life.", fa: 'امروزه بسیاری از مردم از طبیعت مراقبت می‌کنند. به دنیای ما بیشتر توجه می‌کنند. امیدوارانه، هیچ گیاه و حیوانی را از دست نخواهیم داد و در آینده غذای کافی خواهیم داشت. حیوانات خانه‌های طبیعی خود را از دست نمی‌دهند و طولانی‌تر زندگی می‌کنند. به این ترتیب، زندگی شادی خواهیم داشت.' }
]
},
explanation: [
'برای صحبت درباره <strong>آینده</strong> دو راه اصلی داریم:',
'۱) <code>will + فعل</code> — برای تصمیم‌ها، پیش‌بینی‌ها و قول‌ها. مثلاً: <code>I will save nature.</code>',
'۲) <code>be going to + فعل</code> — برای برنامه‌ها و نقشه‌هایی که از قبل تصمیم گرفته شده. مثلاً: <code>They are going to buy a house.</code>'
],
tablesTitle: 'B. Read the following examples.',
tables: [
{
title: 'Affirmative',
headers: ['Subject', 'will', 'Verb'],
rows: [['I / You / He / She / We / They', 'will', 'save nature.']],
examples: [
{ en: 'Alice and Kate {will} go to the library tomorrow.', fa: 'آلیس و کیت فردا به کتابخانه می‌روند.' },
{ en: 'Ted {will} fly to Australia next Monday.', fa: 'تد دوشنبه آینده به استرالیا پرواز می‌کند.' }
]
},
{
title: 'Negative',
headers: ['Subject', 'will not (won\'t)', 'Verb'],
rows: [['I / You / He / She / We / They', "will not (won't)", 'destroy nature.']],
examples: [
{ en: 'The children {will not} play in the yard.', fa: 'بچه‌ها در حیاط بازی نخواهند کرد.' },
{ en: "I {won't} be here tomorrow.", fa: 'من فردا اینجا نخواهم بود.' }
]
},
{
title: 'Question',
headers: ['Will', 'Subject', 'Verb'],
rows: [['Will', 'you / he / she / it / they', 'go to the mountain?']],
examples: [
{ en: '{Will} our family buy a new car next year?', fa: 'آیا خانواده ما سال آینده ماشین نو می‌خرند؟' },
{ en: '{Will} Reza have an exam on Monday?', fa: 'آیا رضا دوشنبه امتحان دارد؟' }
]
}
],
notes: [
"C. Tell your teacher how 'simple future' is made.",
"D. Read the 'Reading' and underline all 'future verbs'."
],
practice: {
title: 'E. Read the following paragraph and choose the best verb forms.',
instruction: 'Alfredo is an Italian tourist.',
items: [
{ sentence: 'He _____ in Rome.', options: ['lives', 'will live'], correct: 0 },
{ sentence: 'He _____ to travel and see different places of the world.', options: ['likes', 'will like'], correct: 0 },
{ sentence: 'He _____ photos especially of animals.', options: ['takes', 'will take'], correct: 0 },
{ sentence: 'Next month, he and his wife _____ to Iran.', options: ['travel', 'will travel'], correct: 1 },
{ sentence: 'They _____ to Tooran Plain to see animals.', options: ['go', 'will go'], correct: 1 },
{ sentence: 'After two weeks, they _____ some beautiful cities in Iran.', options: ['visit', 'will visit'], correct: 1 }
]
},
whQuestions: {
title: 'F. Read the following wh-questions.',
base: 'The tourists will visit Shiraz next summer.',
items: [
{ wh: 'Who', q: 'Who will visit Shiraz next summer?' },
{ wh: 'When', q: 'When will the tourists visit Shiraz?' },
{ wh: 'Where', q: 'Where will the tourists visit next summer?' },
{ wh: 'What', q: 'What will the tourists do next summer?' }
]
},
friendWork: {
title: 'G. Work with a friend.',
partA: { instruction: "a. Make sentences with these beginnings using the 'future tense'.", items: ['On Friday morning, I', 'Next week, my brother', 'Tomorrow afternoon,'] },
partB: { instruction: "b. Now ask your friend 'future tense' questions with the following words.", items: ['When', 'Where', 'Who'] }
},
goingTo: {
title: "be going to",
note: 'این عبارت نشانهٔ <strong>آینده با be going to</strong> است (برای برنامه‌ها و نقشه‌های از پیش تعیین‌شده): <code>am/is/are + going to + فعل</code>.',
readTitle: "A. Read the following examples with 'to be going to'.",
examples: [
{ en: 'They {are going to} buy a house soon. They have enough money.', fa: 'آن‌ها به‌زودی خانه‌ای می‌خرند. پول کافی دارند.' },
{ en: "Look at the sky! It{'s going to} rain.", fa: 'به آسمان نگاه کن! می‌خواهد باران ببارد.' },
{ en: "Alice is free tonight. She{'s going to} read some poems.", fa: 'آلیس امشب آزاد است. می‌خواهد چند شعر بخواند.' },
{ en: 'Reza {is not going to} watch TV tonight. The program is very boring.', fa: 'رضا امشب تلویزیون تماشا نمی‌کند. برنامه خیلی خسته‌کننده است.' },
{ en: 'We {are not going to} destroy nature. We take care of wildlife.', fa: 'ما طبیعت را نابود نمی‌کنیم. از حیات وحش مراقبت می‌کنیم.' }
],
table: {
headers: ['Subject', 'be', 'going to + Verb', 'Time'],
rows: [
['I', 'am', 'going to play', 'tomorrow.'],
['You / We / They', 'are', 'going to play', 'tomorrow.'],
['He / She', 'is', 'going to play', 'tomorrow.']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Talking and asking about schedules/plans',
strategyTitleFa: 'راهبرد گفتاری — صحبت و پرسش درباره برنامه‌ها',
strategyDesc: "A. You may use 'future tense' to ask someone about their plans or talk about your own plans.",
patterns: [
{ q: 'What are you going to do this weekend?', a: 'I am going to go to Golestan Forest.' },
{ q: 'Are you going to visit a museum?', a: 'No, I am going to go out and enjoy wildlife.' }
],
patternsList: [
'What will you do? / What are you going to do?',
'I will ... . / I am going to ... .',
'Where will you go? / Where are you going to go?',
"I will go ... . / I'm going to go ... ."
],
listenComplete: {
title: 'B. Listen to the following conversations and complete the sentences.',
conversations: [
{ num: 1, items: ['Alice is going to .....................', 'Alice will .....................'] },
{ num: 2, items: ['Shahab is going to .....................', 'His family will .....................'] }
]
},
pairWork: {
title: 'Pair up and ask your friends about the things they are going to do this weekend.',
box1: { label: 'this weekend', verbs: ['stay home', 'read a book', 'go to the museum', 'visit our relatives', 'go shopping', 'study English'] },
box2: { label: 'to save nature', verbs: ['take care of endangered animals', 'protect forests', 'hunt', 'hurt animals'] }
}
},
pronunciation: {
title: 'Pronunciation — Falling Intonation',
titleFa: 'تلفظ — لحن نزولی',
rule: 'When you ask for or give new information, use falling intonation. (وقتی اطلاعات جدید می‌پرسی یا می‌دهی، از لحن نزولی استفاده کن.)',
intonationGuide: {
falling: 'لحن <strong>نزولی (↘)</strong>: صدا در پایان جمله <strong>پایین</strong> می‌آد. در جملات خبری و سؤالات Wh (با اطلاعات جدید) استفاده می‌شه. آخر جمله رو با صدای پایین‌رونده تموم کن.'
},
examplesTitle: 'A. Listen to the following sentences. They have falling intonation.',
examples: [
{ en: 'Where are you going to go?', a: 'I am going to go to Bam.' },
{ en: 'What does your brother do?', a: 'He works in a zoo. He loves animals.' },
{ en: 'Dr. James will buy a new laptop.', a: "His old laptop doesn't work." },
{ en: 'We will go on a school trip tomorrow.', a: 'The students will visit a museum.' }
],
punctuation: {
title: 'B. Listen and find where the sentences end. Do this by putting a period (.) and/or capitalizing words.',
text: 'My name is Jim I am a zookeeper there are many animals in our zoo we have big and small animals like birds and giraffes we have wild and farm animals I like wild animals we have two lions and a leopard here we don\'t have any sea animals now we will have some next year we are making new buildings for them I think the visitors are going to love them',
answer: 'My name is Jim. I am a zookeeper. There are many animals in our zoo. We have big and small animals like birds and giraffes. We have wild and farm animals. I like wild animals. We have two lions and a leopard here. We don\'t have any sea animals now. We will have some next year. We are making new buildings for them. I think the visitors are going to love them.'
}
},
writing: {
title: 'Writing — Nouns',
titleFa: 'نوشتن — اسم‌ها',
sections: [
{
type: 'lesson-noun',
title: 'Noun',
intro: 'A noun names something. A noun is a person, an animal, a place, a thing or an idea.',
introFa: 'اسم، چیزی را نام‌گذاری می‌کند. اسم می‌تواند یک شخص، حیوان، مکان، شیء یا یک مفهوم باشد.',
categories: [
{ label: '1) A Person or an Animal', examples: ['farmer', 'brother', 'Maryam', 'a cow'] },
{ label: '2) A Place', examples: ['school', 'cinema', 'sea', 'a park'] },
{ label: '3) A Thing', examples: ['computer', 'apple', 'car', 'a book'] },
{ label: '4) An Idea', examples: ['pain', 'attention', 'danger', 'love of country'] }
]
},
{
type: 'word-web-task',
title: 'A. Find the nouns and write them in the correct circles of the word web.',
instruction: "Read the second paragraph of the 'Reading'. Find the nouns and sort them. You can add more circles.",
web: ['People/Animals', 'Places', 'Things', 'Ideas']
},
{
type: 'lesson-plural',
title: 'Singular and Plural',
intro: "Most nouns can be made plural by adding 's' or 'es' to the end of the word. However, some are irregular and they don't follow the same rule.",
introFa: "بیشتر اسم‌ها با افزودن 's' یا 'es' جمع بسته می‌شوند. اما برخی بی‌قاعده‌اند و از این قانون پیروی نمی‌کنند.",
regular: [['book','books'],['girl','girls'],['box','boxes'],['lake','lakes'],['hen','hens'],['bus','buses']],
irregular: [['man','men'],['woman','women'],['child','children'],['foot','feet'],['life','lives'],['wolf','wolves']]
},
{
type: 'plural-task',
title: 'B. Write the appropriate form of each noun.',
items: [
{ sentence: "Ali's _____ is a hard-working _____.", words: ['brother', 'postman'], answers: ['brother', 'postman'] },
{ sentence: 'She sat down at her _____ and worked for two _____.', words: ['desk', 'hour'], answers: ['desk', 'hours'] },
{ sentence: 'There are two _____ near your _____.', words: ['bus stop', 'school'], answers: ['bus stops', 'school'] },
{ sentence: 'I saw an old _____ and two young _____ sitting near the lake of the _____.', words: ['man', 'woman', 'park'], answers: ['man', 'women', 'park'] },
{ sentence: 'Frank is a _____. He has four _____.', words: ['farmer', 'child'], answers: ['farmer', 'children'] }
]
},
{
type: 'lesson-types',
title: 'Types of Nouns — Common & Proper',
common: ['boy', 'tree', 'bear'],
proper: ['Avicenna', 'Damavand', 'Milad Tower']
},
{
type: 'circle-task',
title: 'C. Circle the correct answer.',
items: [
{ text: "Today, [Iran/iran]'s mountains and plains are the natural [Home/home] of many animals. One of them is the black [Bear/bear] which lives in a few [Parts/parts] of the country.", answers: ['Iran', 'home', 'bear', 'parts'] },
{ text: 'Amin [Askari/askari] is a pilot. He is 40 [Years/years] old. He lives with his [Wife/wife] and his son and daughter in [Mashhad/mashhad].', answers: ['Askari', 'years', 'wife', 'Mashhad'] },
{ text: 'The [Persian/persian] Gulf is a very important sea between Iran and some [Arab/arab] countries. Its [Wildlife/wildlife] is amazing. You can see some beautiful [Sea/sea] animals such as [Dolphins/dolphins] there.', answers: ['Persian', 'Arab', 'wildlife', 'sea', 'dolphins'] }
]
},
{
type: 'lesson-markers',
title: 'Noun Markers',
intro: 'Here are some words that often come before a noun.',
markers: [
{ marker: 'a / an', examples: 'a hunter / a leopard / an elephant / an ear' },
{ marker: 'the', examples: 'the child / the boy / the women / the cars' },
{ marker: 'this / that', examples: 'this bird / this door / that tiger / that chair' },
{ marker: 'these / those', examples: 'these chairs / these children / those men / those mice' },
{ marker: 'my / your / our / his / her / its / their', examples: 'his goat / our car / my friends / their towns' }
]
},
{
type: 'circle-nouns-task',
title: 'D. Read the following sentences and circle the nouns.',
items: [
{ sentence: 'The weather is beautiful in the spring.', nouns: ['weather', 'spring'] },
{ sentence: 'This is a low mountain, but those mountains are high.', nouns: ['mountain', 'mountains'] },
{ sentence: 'Nasim read a book on the bus last week.', nouns: ['Nasim', 'book', 'bus', 'week'] },
{ sentence: 'Some people do not take care of animals.', nouns: ['people', 'animals'] },
{ sentence: 'I saw two wolves in the zoo.', nouns: ['wolves', 'zoo'] }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a report about Earth.',
tasks: [
'1. Earth is our .....................',
'1. Humans ..................... nature.',
'2. Listen again and list all nouns.'
]
},
reading: {
title: 'B. Now read the second part of the report.',
text: 'We need to save animals and plants and take care of them. All humans are going to work together to have a beautiful home. If we work hard, we will have clean air and water in the future. We will have a safe place to live. In this way we will save Earth for our children.',
fa: 'باید حیوانات و گیاهان را نجات دهیم و از آن‌ها مراقبت کنیم. همه‌ی انسان‌ها قرار است با هم کار کنند تا خانه‌ای زیبا داشته باشند. اگر سخت تلاش کنیم، در آینده هوا و آب پاک خواهیم داشت. جای امنی برای زندگی خواهیم داشت. این‌گونه زمین را برای فرزندانمان نجات می‌دهیم.',
glossary: { 'save': 'نجات دادن', 'take care of': 'مراقبت کردن از', 'work together': 'با هم کار کردن', 'safe place': 'جای امن', 'In this way': 'این‌گونه' },
tasks: [
'3. Underline all nouns. Identify singular/plural and proper/common nouns.',
'4. Circle all future verbs.'
]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer. Use appropriate intonation.',
questions: [ 'What is Earth?', 'Who is destroying nature?' ]
}
},
workbook: [
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'Simple ways to protect wildlife',
passage: "One easy way to protect wildlife is learning about the endangered animals that live around you. Teach your friends and family about the wonderful birds, fish and plants that live near your home. In this way, they are going to be more careful about nature. You can also visit a national wildlife museum or park. These places give good information about how to protect endangered animals and their homes. You can do voluntary work in these places to help animals and their babies. Another thing you can do is protecting the natural home of the endangered animals. When you keep nature clean and safe, the animals will live longer. Protecting the trees of forests is also helpful. If you live in a village, you need to be very careful about the hunters who come to your village to hurt animals. Whenever you see these people, you need to call the police. These are simple things, but they will help nature a lot.",
passageFa: 'یک راه آسان برای حفاظت از حیات وحش، یادگیری درباره حیوانات در معرض انقراضی است که اطرافت زندگی می‌کنند. به دوستان و خانواده‌ات درباره پرندگان، ماهی‌ها و گیاهان شگفت‌انگیزی که نزدیک خانه‌ات زندگی می‌کنند آموزش بده. به این ترتیب، آن‌ها نسبت به طبیعت دقت بیشتری خواهند کرد. همچنین می‌توانی از یک موزه یا پارک ملی حیات وحش بازدید کنی. این مکان‌ها اطلاعات خوبی درباره چگونگی حفاظت از حیوانات در معرض انقراض و خانه‌هایشان می‌دهند. می‌توانی در این مکان‌ها کار داوطلبانه انجام دهی تا به حیوانات و بچه‌هایشان کمک کنی. کار دیگری که می‌توانی بکنی، حفاظت از خانه طبیعی حیوانات در معرض انقراض است. وقتی طبیعت را تمیز و امن نگه داری، حیوانات طولانی‌تر زندگی می‌کنند. حفاظت از درختان جنگل‌ها هم مفید است. اگر در روستا زندگی می‌کنی، باید خیلی مراقب شکارچیانی باشی که به روستایت می‌آیند تا به حیوانات آسیب بزنند. هر وقت این افراد را دیدی، باید به پلیس زنگ بزنی. این‌ها کارهای ساده‌ای هستند، اما خیلی به طبیعت کمک می‌کنند.',
glossary: {
'protect': 'حفاظت کردن', 'wildlife': 'حیات وحش', 'endangered': 'در معرض انقراض',
'animals': 'حیوانات', 'wonderful': 'شگفت‌انگیز', 'birds': 'پرندگان', 'plants': 'گیاهان',
'careful': 'مراقب', 'nature': 'طبیعت', 'national': 'ملی', 'museum': 'موزه',
'voluntary': 'داوطلبانه', 'natural home': 'خانه طبیعی', 'clean': 'تمیز', 'safe': 'امن',
'forests': 'جنگل‌ها', 'village': 'روستا', 'hunters': 'شکارچیان', 'hurt': 'آسیب زدن',
'police': 'پلیس', 'helpful': 'مفید'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Learning about endangered animals is not important.', answer: false },
{ q: 'You can do voluntary work in wildlife parks.', answer: true },
{ q: 'Keeping nature clean hurts animals.', answer: false }
]
},
{
type: 'short-answer',
title: 'B. Answer the following questions.',
questions: [
{ q: 'Is it good to give information to our family about wildlife?', sampleAnswer: 'Yes, it is. They are going to be more careful about nature.' },
{ q: 'Why is protecting the trees helpful for endangered animals?', sampleAnswer: 'Because it keeps their natural home safe and they will live longer.' },
{ q: 'Do you know another simple way to protect wildlife?', sampleAnswer: '(your own answer)' }
]
}
]
},
{
part: 'Part II',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'chart-fill',
title: 'A. Complete the chart. Write the things you did in the past and you will do in the future.',
headers: ['Verbs', 'Past tense', 'Future tense'],
example: ['travel', 'I traveled to Isfahan last year.', 'I will travel to Shiraz next year.'],
rows: ['buy', 'visit', 'watch', 'go']
},
{
type: 'picture-future',
title: 'B. Reza is thinking about his trip to Kish. Look at the pictures and write what Reza will do there.',
items: [
{ hint: 'visit a wildlife museum', image: 'wb-reza-museum.jpg', answer: 'He will visit a wildlife museum.' },
{ hint: 'go to a zoo', image: 'wb-reza-zoo.jpg', answer: 'He will go to a zoo.' },
{ hint: 'enjoy nature', image: 'wb-reza-nature.jpg', answer: 'He will enjoy nature.' },
{ hint: 'learn more about endangered animals', image: 'wb-reza-learn.jpg', answer: 'He will learn more about endangered animals.' }
]
},
{
type: 'yes-no',
title: 'C. Yes or No?',
items: [
'School students will learn to help injured animals.',
'The number of cheetahs will increase in the future.',
'Iranians are going to protect endangered animals.',
'When we keep earth clean and safe, animals will live longer.'
]
},
{
type: 'fill-going-to',
title: 'D. Read the following text. Complete it with "to be going to" verbs.',
text: 'Mr. Alavi is a teacher. Tomorrow, he and his students [1] (go) on a school trip. They [2] (go) to a park out of the city. They [3] (leave) the school at 9. They [4] (stay) in the park till afternoon. They [5] (go) into nature and clean it. They [6] (visit) the aquarium in the park, too. Mr. Alavi [7] (talk) about sea animals there. The students [8] (write) a report from this trip. Other students [9] (read) their friends\' reports.',
blanks: [
{ num: 1, answer: 'are going to go' },
{ num: 2, answer: 'are going to go' },
{ num: 3, answer: 'are going to leave' },
{ num: 4, answer: 'are going to stay' },
{ num: 5, answer: 'are going to go' },
{ num: 6, answer: 'are going to visit' },
{ num: 7, answer: 'is going to talk' },
{ num: 8, answer: 'are going to write' },
{ num: 9, answer: 'are going to read' }
]
},
{
type: 'short-answer',
title: 'E. Now answer the following questions.',
questions: [
{ q: 'Are the students going to go to a zoo?', sampleAnswer: 'No, they are going to go to a park.' },
{ q: "Is Mr. Alavi going to read the students' reports?", sampleAnswer: 'No, the other students are going to read them.' },
{ q: 'Are you going to visit a museum this weekend?', sampleAnswer: '(your own answer)' }
]
}
]
},
{
part: 'Part III',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'word-search',
title: 'A. Find 11 animals below.',
instruction: 'در جدول، ۱۱ حیوان را پیدا کن.',
wordBank: ['elephant', 'destroy', 'protect', 'bear', 'save', 'cheetah', 'endangered', 'wolf', 'watch', 'travel', 'teach', 'dolphin', 'mountain', 'plain', 'duck', 'mean', 'zookeeper', 'injured', 'leopard', 'increase', 'life', 'goat', 'world', 'panda', 'weekend', 'hunter', 'lion', 'alive', 'zebra'],
animals: ['elephant', 'bear', 'cheetah', 'wolf', 'dolphin', 'duck', 'leopard', 'goat', 'panda', 'lion', 'zebra']
},
{
type: 'odd-one-out',
title: 'B. One odd out.',
items: [
{ options: ['die out', 'live', 'kill', 'hunt'], odd: 1 },
{ options: ['goat', 'cow', 'hen', 'leopard'], odd: 3 },
{ options: ['plain', 'mountain', 'jungle', 'zoo'], odd: 3 },
{ options: ['hunters', 'zookeepers', 'teachers', 'farmers'], odd: 0 },
{ options: ['save', 'take care of', 'protect', 'hurt'], odd: 3 }
]
},
{
type: 'match-columns',
title: 'C. Match columns A and B.',
pairs: [
{ a: 'pay', b: 'attention', letter: 'f' },
{ a: 'save', b: 'wildlife', letter: 'a' },
{ a: 'protect', b: 'animals', letter: 'b' },
{ a: 'natural', b: 'home', letter: 'c' },
{ a: 'take', b: 'care of', letter: 'd' },
{ a: 'hunt', b: 'nature', letter: 'e' }
]
},
{
type: 'group-words',
title: 'D. Put the words in three groups considering their natural home.',
words: ['whale', 'cow', 'lion', 'panda', 'bear', 'leopard', 'tiger', 'fish', 'wolf', 'dolphin', 'duck', 'zebra', 'goat'],
groups: ['Water', 'Farm', 'Wild/Jungle']
},
{
type: 'order-lifespan',
title: 'E. Order the following animals based on their average life span (from short to long).',
words: ['elephant', 'lion', 'wolf', 'camel', 'whale', 'mouse', 'sheep'],
answer: ['mouse', 'wolf', 'sheep', 'lion', 'camel', 'elephant', 'whale']
},
{
type: 'fill-words',
title: 'F. Fill in the blanks with the given words.',
wordBank: ['protect', 'injured', 'plain', 'future', 'relatives', 'destroyed'],
items: [
{ sentence: 'The hunters killed the tiger and _____ its home.', answer: 'destroyed' },
{ sentence: 'There are lots of beautiful zebras living in this _____.', answer: 'plain' },
{ sentence: 'I brought the _____ bird into the room and took care of it.', answer: 'injured' },
{ sentence: 'Hopefully, people will pay more attention to wildlife in the _____.', answer: 'future' },
{ sentence: 'One of our _____ is a zookeeper in Mazandaran.', answer: 'relatives' }
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
title: 'Ask and answer with falling intonation.',
items: [
'Who will protect our Earth?',
'What will happen to endangered animals?',
'Who will protect our forests?',
'What are you going to do to save nature?'
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
type: 'unscramble-nouns',
title: 'A. Unscramble the letters and make nouns. Then put nouns in the appropriate group.',
items: [
{ scrambled: 'gnuelj', answer: 'jungle', group: 'place' },
{ scrambled: 'denrf', answer: 'friend', group: 'people' },
{ scrambled: 'eret', answer: 'tree', group: 'thing' },
{ scrambled: 'etarw', answer: 'water', group: 'thing' },
{ scrambled: 'nipa', answer: 'pain', group: 'idea' },
{ scrambled: 'itroisv', answer: 'visitor', group: 'people' },
{ scrambled: 'veol', answer: 'love', group: 'idea' },
{ scrambled: 'umuesm', answer: 'museum', group: 'place' }
],
groups: ['people', 'place', 'idea', 'thing']
},
{
type: 'singular-plural-task',
title: 'B. Read the text in Part I.',
instructions: [
'1. Find all singular nouns. Change them into plural.',
'2. Find all plural nouns. Change them into singular.'
]
}
]
}
],
quiz: [
{ q: 'The Iranian cheetah is an _____ animal.', qFa: 'یوزپلنگ ایرانی یک حیوان ... است.', options: ['endangered', 'increase', 'alive', 'instead'], correct: 0 },
{ q: 'They _____ buy a new car next year.', qFa: 'سال آینده ماشین نو می‌خرند.', options: ['will', 'are', 'do', 'did'], correct: 0 },
{ q: 'Look at the sky! It _____ rain.', qFa: 'به آسمان نگاه کن! می‌خواهد باران ببارد.', options: ['is going to', 'will to', 'go to', 'going'], correct: 0 },
{ q: 'Humans _____ the natural homes of animals.', qFa: 'انسان‌ها خانه‌های طبیعی حیوانات را نابود می‌کنند.', options: ['destroy', 'protect', 'increase', 'save'], correct: 0 },
{ q: 'A tiger is a _____ animal.', qFa: 'ببر یک حیوان وحشی است.', options: ['wild', 'farm', 'sea', 'injured'], correct: 0 },
{ q: '_____ will the tourists visit Shiraz?', qFa: 'گردشگران کِی شیراز را می‌بینند؟', options: ['When', 'Who', 'What', 'Which'], correct: 0 }
]
},
{
num: 2,
title: 'Wonders of Creation',
titleFa: 'شگفتی‌های آفرینش',
function: 'Wonders of Creation',
quote: { en: "And of Allah's Signs of Power is the creation of the heavens and the Earth", ref: 'Al-Rum 22', fa: 'و از نشانه‌های قدرت او آفرینش آسمان‌ها و زمین است.' },
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'Part One',
instruction: 'A. Match the pictures with the sentences.',
instructionFa: 'تصاویر را با جمله‌ها تطبیق بده.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'Planets go around the Sun.', fa: 'سیارات به دور خورشید می‌چرخند.', image: 'gr-planets.jpg' },
{ id: 'b', phrase: 'Ants are amazing animals.', fa: 'مورچه‌ها حیوانات شگفت‌انگیزی هستند.', image: 'gr-ants.jpg' },
{ id: 'c', phrase: 'Our body is a wonderful system.', fa: 'بدن ما یک سیستم شگفت‌انگیز است.', image: 'gr-body.jpg' },
{ id: 'd', phrase: 'Camels can live without water for a long time.', fa: 'شترها می‌توانند مدت طولانی بدون آب زندگی کنند.', image: 'gr-camel.jpg' }
],
followup: 'B. Which one is more interesting for you? Order the words based on your interest.',
followupFa: 'کدام برایت جالب‌تر است؟ کلمات را بر اساس علاقه‌ات مرتب کن.',
followupType: 'two-groups',
groupLabels: ['Most interesting → Least', '(Camels / Ants / Planets / Body)']
},
{
label: 'Part Two',
instruction: 'A. Match the pictures with the words.',
instructionFa: 'تصاویر را با کلمات تطبیق بده.',
type: 'match-words',
items: [
{ word: 'ring', fa: 'حلقه', image: 'gr-ring.jpg' },
{ word: 'heart', fa: 'قلب', image: 'gr-heart.jpg' },
{ word: 'blood', fa: 'خون', image: 'gr-blood.jpg' },
{ word: 'moon', fa: 'ماه', image: 'gr-moon.jpg' },
{ word: 'observatory', fa: 'رصدخانه', image: 'gr-observatory.jpg' },
{ word: 'telescope', fa: 'تلسکوپ', image: 'gr-telescope.jpg' },
{ word: 'microscope', fa: 'میکروسکوپ', image: 'gr-microscope.jpg' }
],
followup: 'B. Put the above words into the following groups.',
followupFa: 'کلمات بالا را در گروه‌های زیر قرار بده.',
followupType: 'two-groups',
groupLabels: ['Space (فضا)', 'Body (بدن)']
}
]
},
conversation: {
subtitle: 'Visiting an Observatory',
subtitleFa: 'بازدید از رصدخانه',
desc: 'علیرضا در حال بازدید از یک رصدخانه است و با خانم تابش که آنجا کار می‌کند صحبت می‌کند.',
newWordsHint: ['near', 'rocky', 'orbit', 'powerful'],
lines: [
{ speaker: 'Ms. Tabesh', role: 'teacher', en: 'Are you interested in the planets?', fa: 'به سیارات علاقه داری؟' },
{ speaker: 'Alireza', role: 'student', en: "Yes! They are really interesting for me, but I don't know much about them.", fa: 'بله! واقعاً برام جالبن، ولی زیاد درباره‌شون نمی‌دونم.' },
{ speaker: 'Ms. Tabesh', role: 'teacher', en: 'Planets are really amazing but not so much alike. Do you know how they are different?', fa: 'سیارات واقعاً شگفت‌انگیزن ولی خیلی شبیه هم نیستن. می‌دونی چطور با هم فرق دارن؟' },
{ speaker: 'Alireza', role: 'student', en: 'Umm... I know they go around the Sun in different orbits.', fa: 'اوم... می‌دونم که در مدارهای مختلف دور خورشید می‌چرخن.' },
{ speaker: 'Ms. Tabesh', role: 'teacher', en: 'That\'s right. They have different colors and sizes, too. Some are rocky like Mars, some have rings like Saturn and some have moons like Uranus.', fa: 'درسته. رنگ‌ها و اندازه‌های مختلف هم دارن. بعضی‌ها مثل مریخ سنگی‌ان، بعضی مثل زحل حلقه دارن و بعضی مثل اورانوس ماه دارن.' },
{ speaker: 'Alireza', role: 'student', en: 'How wonderful! Can we see them without a telescope?', fa: 'چقدر شگفت‌انگیز! می‌تونیم بدون تلسکوپ ببینیمشون؟' },
{ speaker: 'Ms. Tabesh', role: 'teacher', en: 'Yeah, we can see the planets nearer to us without a telescope, such as Mercury, Venus, Mars, Jupiter and Saturn. We can see Uranus and Neptune only with powerful telescopes.', fa: 'بله، سیارات نزدیک‌تر به ما رو بدون تلسکوپ می‌بینیم، مثل عطارد، زهره، مریخ، مشتری و زحل. اورانوس و نپتون رو فقط با تلسکوپ‌های قوی می‌بینیم.' },
{ speaker: 'Alireza', role: 'student', en: 'And which planet is the largest of all?', fa: 'و کدوم سیاره از همه بزرگ‌تره؟' },
{ speaker: 'Ms. Tabesh', role: 'teacher', en: 'Jupiter is the largest one. It has more than sixty moons. Do you want to look at it?', fa: 'مشتری بزرگ‌ترینه. بیشتر از شصت تا ماه داره. می‌خوای نگاهش کنی؟' },
{ speaker: 'Alireza', role: 'student', en: 'I really like that.', fa: 'خیلی دوست دارم.' }
],
questions: [
{ q: 'How are the planets different?', fa: 'سیارات چطور با هم فرق دارن؟' },
{ q: 'Can we see all planets without a telescope?', fa: 'همه سیارات رو بدون تلسکوپ می‌تونیم ببینیم؟' },
{ q: 'Do you know the names of the planets in Persian?', fa: 'اسم سیارات رو به فارسی می‌دونی؟' }
]
},
newWords: {
lookRead: [
{ en: 'Water is a type of {liquid}.', fa: 'آب نوعی {مایع} است.', image: 'nw-liquid.jpg' },
{ en: 'There are some {drops} of paint on his shirt.', fa: 'چند {قطره} رنگ روی پیراهنش است.', image: 'nw-drops.jpg' },
{ en: 'Blood {cells} are red and white.', fa: '{سلول‌های} خون قرمز و سفیدند.', image: 'nw-cells.jpg' },
{ en: 'About one {thousand} people live in this village.', fa: 'حدود {هزار} نفر در این روستا زندگی می‌کنند.', image: 'nw-thousand.jpg' },
{ en: 'There are many different types of {microbes}.', fa: 'انواع مختلف زیادی {میکروب} وجود دارد.', image: 'nw-microbes.jpg' },
{ en: 'Doing daily {exercise} is useful for everyone.', fa: '{ورزش} روزانه برای همه مفید است.', image: 'nw-exercise.jpg' },
{ en: 'Gahar Lake is famous for its {clear} water.', fa: 'دریاچه گهر به‌خاطر آب {زلالش} مشهور است.', image: 'nw-clear.jpg' },
{ en: 'The heart {pumps} blood round the body.', fa: 'قلب خون را در بدن {پمپاژ می‌کند}.', image: 'nw-pump.jpg' }
],
definitions: [
{ word: 'healthy', def: '1. strong and well / 2. good for your body', fa: 'سالم', example: 'He is a {healthy} boy. A {healthy} breakfast gives you more energy.' },
{ word: 'defend', def: 'to protect someone or something from danger', fa: 'دفاع کردن', example: 'The brave soldiers {defended} our country.' },
{ word: 'carry', def: 'to move someone or something from one place to another', fa: 'حمل کردن', example: 'Monkeys {carry} their babies all day long.' },
{ word: 'collect', def: 'to go and get someone or something', fa: 'جمع‌آوری کردن', example: 'The school bus {collects} the children each morning.' },
{ word: 'fact', def: 'things that are true or that really happened', fa: 'واقعیت', example: "It's a {fact} that Earth goes around the Sun." }
]
},
reading: {
passageTitle: 'A Wonderful Liquid',
passageTitleFa: 'یک مایع شگفت‌انگیز',
paragraphs: [
{ en: 'The human body is a real wonder. It is sometimes good to think about our body and how it works. Our body is doing millions of jobs all the time.', fa: 'بدن انسان یک شگفتی واقعی است. گاهی خوب است درباره بدنمان و نحوه کارش فکر کنیم. بدن ما همیشه میلیون‌ها کار انجام می‌دهد.' },
{ en: 'One of the most important parts of the body is blood. The heart pumps this red liquid around the body. This keeps us healthy and alive.', fa: 'یکی از مهم‌ترین بخش‌های بدن خون است. قلب این مایع قرمز را در بدن پمپاژ می‌کند. این ما را سالم و زنده نگه می‌دارد.' },
{ en: 'More than half of blood is plasma. This is a clear and yellow liquid. It carries red and white cells. There are millions of red blood cells in one small drop of blood. They carry oxygen round the body and collect carbon dioxide from body parts. There are thousands of white cells in a drop of blood. They are bigger than red cells. They defend our body against microbes.', fa: 'بیش از نیمی از خون پلاسما است. این یک مایع زلال و زرد است. سلول‌های قرمز و سفید را حمل می‌کند. در یک قطره کوچک خون میلیون‌ها گلبول قرمز وجود دارد. آن‌ها اکسیژن را در بدن حمل می‌کنند و دی‌اکسید کربن را از اعضای بدن جمع می‌کنند. در یک قطره خون هزاران گلبول سفید وجود دارد. آن‌ها بزرگ‌تر از گلبول‌های قرمزند. آن‌ها از بدن ما در برابر میکروب‌ها دفاع می‌کنند.' },
{ en: 'This wonderful liquid is a great gift from Allah. We can thank Allah by keeping our body healthy. One way to do that is eating healthy food and doing daily exercises. Another way is to donate our blood to those who need it.', fa: 'این مایع شگفت‌انگیز هدیه‌ای بزرگ از خداوند است. می‌توانیم با سالم نگه‌داشتن بدنمان از خدا تشکر کنیم. یک راه، خوردن غذای سالم و ورزش روزانه است. راه دیگر، اهدای خون به نیازمندان است.' }
],
glossary: {
'human body': 'بدن انسان', 'wonder': 'شگفتی', 'works': 'کار می‌کند', 'millions': 'میلیون‌ها',
'blood': 'خون', 'heart': 'قلب', 'pumps': 'پمپاژ می‌کند', 'liquid': 'مایع', 'healthy': 'سالم',
'alive': 'زنده', 'plasma': 'پلاسما', 'clear': 'زلال', 'carries': 'حمل می‌کند', 'cells': 'سلول‌ها',
'drop': 'قطره', 'oxygen': 'اکسیژن', 'collect': 'جمع می‌کنند', 'carbon dioxide': 'دی‌اکسید کربن',
'defend': 'دفاع می‌کنند', 'microbes': 'میکروب‌ها', 'gift': 'هدیه', 'donate': 'اهدا کردن', 'exercises': 'ورزش‌ها'
},
comprehension: [
{
type: 'choose',
title: 'A. Choose the best answer.',
items: [
{ q: 'What color is plasma?', options: ['red', 'yellow', 'white'], correct: 1 },
{ q: 'How can we keep our body healthy?', options: ['By eating fast foods', 'By doing daily exercises', 'By sleeping late'], correct: 1 },
{ q: 'How many white blood cells are there in a drop of blood?', options: ['hundreds', 'thousands', 'millions'], correct: 1 }
]
},
{
type: 'truefalse',
title: 'B. True / False',
items: [
{ q: 'There are only white cells in plasma.', answer: false },
{ q: 'Red cells are smaller than white cells.', answer: true },
{ q: 'The number of red cells is more than white cells.', answer: true }
]
},
{
type: 'match-halves',
title: 'C. Match two halves.',
pairs: [
{ left: 'The heart pumps blood round the body', right: 'to keep us alive.', letter: 'd' },
{ left: 'Our body is really wonderful', right: 'so it is sometimes good to think about it.', letter: 'a' },
{ left: 'Red blood cells carry oxygen round the body', right: 'and collect carbon dioxide.', letter: 'c' }
],
distractor: { letter: 'b', right: 'then it is dangerous.' }
}
]
},
grammar: {
title: 'Grammar — Adjectives (Comparative & Superlative)',
titleFa: 'دستور زبان — صفت‌ها (تفضیلی و عالی)',
noteText: 'این یک <strong>صفت</strong> است (اسم را توصیف می‌کند).',
noteMap: {
"as old as": "<strong>as ... as</strong> — حالت <strong>برابری</strong>: دو چیز به یک اندازه‌اند. (هم‌سن)",
"as dangerous as": "<strong>as ... as</strong> — حالت <strong>برابری</strong>: به یک اندازه خطرناک.",
"the most difficult": "<strong>صفت عالی</strong> (صفت بلند): <code>the most + صفت</code> — سخت‌ترین.",
"the most beautiful": "<strong>صفت عالی</strong> (صفت بلند): <code>the most + صفت</code> — زیباترین.",
"the most expensive": "<strong>صفت عالی</strong> (صفت بلند): <code>the most + صفت</code> — گران‌ترین.",
"the most dangerous": "<strong>صفت عالی</strong> (صفت بلند): <code>the most + صفت</code> — خطرناک‌ترین.",
"more difficult than": "<strong>صفت تفضیلی</strong> (صفت بلند): <code>more + صفت + than</code> — سخت‌تر از.",
"more beautiful than": "<strong>صفت تفضیلی</strong> (صفت بلند): <code>more + صفت + than</code> — زیباتر از.",
"more expensive than": "<strong>صفت تفضیلی</strong> (صفت بلند): <code>more + صفت + than</code> — گران‌تر از.",
"more dangerous than": "<strong>صفت تفضیلی</strong> (صفت بلند): <code>more + صفت + than</code> — خطرناک‌تر از.",
"the tallest": "<strong>صفت عالی</strong> (صفت کوتاه): <code>the + صفت-est</code> — بلندترین.",
"the biggest": "<strong>صفت عالی</strong> (صفت کوتاه): <code>the + صفت-est</code> — بزرگ‌ترین.",
"the youngest": "<strong>صفت عالی</strong> (صفت کوتاه): <code>the + صفت-est</code> — جوان‌ترین.",
"the longest": "<strong>صفت عالی</strong> (صفت کوتاه): <code>the + صفت-est</code> — طولانی‌ترین.",
"the largest": "<strong>صفت عالی</strong> (صفت کوتاه): <code>the + صفت-est</code> — بزرگ‌ترین.",
"taller than": "<strong>صفت تفضیلی</strong> (صفت کوتاه): <code>صفت-er + than</code> — بلندتر از.",
"bigger than": "<strong>صفت تفضیلی</strong> (صفت کوتاه): <code>صفت-er + than</code> — بزرگ‌تر از.",
"younger than": "<strong>صفت تفضیلی</strong> (صفت کوتاه): <code>صفت-er + than</code> — جوان‌تر از.",
"longer than": "<strong>صفت تفضیلی</strong> (صفت کوتاه): <code>صفت-er + than</code> — طولانی‌تر از.",
"smaller than": "<strong>صفت تفضیلی</strong> (صفت کوتاه): <code>صفت-er + than</code> — کوچک‌تر از.",
"longest": "<strong>صفت عالی</strong>: <code>the + صفت-est</code>.",
"important": "<strong>صفت</strong> — اسم را توصیف می‌کند (مهم).",
"as important as": "<strong>as ... as</strong> — حالت <strong>برابری</strong>: به یک اندازه مهم.",
"wonderful": "<strong>صفت</strong> توصیفی (شگفت‌انگیز) — قبل از اسم یا بعد از فعل be می‌آید.",
"amazing": "<strong>صفت</strong> توصیفی (شگفت‌انگیز).",
"strange": "<strong>صفت</strong> توصیفی (عجیب).",
"great": "<strong>صفت</strong> توصیفی (عالی/بزرگ).",
"interesting": "<strong>صفت</strong> توصیفی (جالب) — قبل از اسم.",
"tall": "<strong>صفت</strong> توصیفی (بلندقد)."
},
readTexts: {
title: 'A. Read the following texts.',
texts: [
{ en: 'The Nile is the {longest} river on Earth. It is more than 6,000 kilometers long. It is an {important} river for African people. It gives water to people and animals. There are other rivers in Africa but they are not {as important as} the Nile. These rivers aren\'t very long. They are useful for villages and small cities.', fa: 'نیل طولانی‌ترین رودخانه روی زمین است. بیش از ۶۰۰۰ کیلومتر طول دارد. رودخانه‌ای مهم برای مردم آفریقاست. به مردم و حیوانات آب می‌دهد. رودخانه‌های دیگری در آفریقا هست اما به اندازه نیل مهم نیستند. این رودخانه‌ها خیلی طولانی نیستند. برای روستاها و شهرهای کوچک مفیدند.' },
{ en: 'We live in a {wonderful} world. All around us there are {amazing} things like small and big animals; long rivers; dark jungles; tall mountains; and different people and nations. This world is like a {strange} book. We need to read it carefully. Then we can find many {great} things in our world.', fa: 'ما در دنیایی شگفت‌انگیز زندگی می‌کنیم. دور و برمان چیزهای شگفت‌انگیزی هست مانند حیوانات کوچک و بزرگ؛ رودخانه‌های طولانی؛ جنگل‌های تاریک؛ کوه‌های بلند؛ و مردم و ملت‌های مختلف. این دنیا مثل یک کتاب عجیب است. باید آن را با دقت بخوانیم. آنگاه چیزهای بزرگ زیادی در دنیایمان می‌یابیم.' }
]
},
explanation: [
'صفت (Adjective) اسم را توصیف می‌کند. در زبان انگلیسی سه حالت مقایسه داریم:',
'۱) <strong>برابری</strong>: <code>as + صفت + as</code> — مثل: <code>as kind as</code> (به مهربانی…)',
'۲) <strong>تفضیلی (Comparative)</strong>: صفت کوتاه + <code>-er than</code> یا <code>more + صفت بلند + than</code> — مثل: <code>taller than</code> / <code>more beautiful than</code>',
'۳) <strong>عالی (Superlative)</strong>: <code>the + صفت + -est</code> یا <code>the most + صفت بلند</code> — مثل: <code>the tallest</code> / <code>the most beautiful</code>'
],
tablesTitle: 'B. Read the following examples.',
tables: [
{
title: 'Adjectives (before noun / after be)',
headers: ['', 'Adjective', ''],
rows: [
['Look at the', 'blue', 'sky!'],
['I just watched an', 'interesting', 'movie.'],
['They are', 'amazing', 'people.'],
['He works with', 'powerful', 'computers.']
],
examples: [
{ en: 'Many {interesting} animals live in forests of Iran.', fa: 'حیوانات جالب زیادی در جنگل‌های ایران زندگی می‌کنند.' },
{ en: "Robert's father is a very {tall} man.", fa: 'پدر رابرت مرد خیلی بلندقدی است.' }
]
},
{
title: 'as ... as (برابری)',
headers: ['Subject', 'as adj as', ''],
rows: [
['Sara is', 'as kind as', 'Neda.'],
['Our class is', 'as big as', 'your class.']
],
examples: [
{ en: 'His grandfather is {as old as} my grandfather.', fa: 'پدربزرگش هم‌سن پدربزرگ من است.' },
{ en: 'Tigers are {as dangerous as} lions.', fa: 'ببرها به اندازه شیرها خطرناک‌اند.' }
]
},
{
title: 'Comparative Adjectives (تفضیلی)',
headers: ['Subject', 'adj-er than', ''],
rows: [
['Damavand is', 'taller than', 'Dena.'],
['Asia is', 'bigger than', 'Europe.'],
['Omid is', 'younger than', 'Reza.']
],
examples: [
{ en: 'Karoon is {longer than} Atrak.', fa: 'کارون طولانی‌تر از اترک است.' },
{ en: 'Mars is {smaller than} Jupiter.', fa: 'مریخ کوچک‌تر از مشتری است.' }
]
},
{
title: 'Superlative Adjectives (عالی)',
headers: ['Subject', 'the adj-est', ''],
rows: [
['Damavand is', 'the tallest', 'mountain of Iran.'],
['Asia is', 'the biggest', 'of all.'],
['Omid is', 'the youngest', 'student of our class.']
],
examples: [
{ en: 'Karoon is {the longest} river of Iran.', fa: 'کارون طولانی‌ترین رودخانه ایران است.' },
{ en: 'Jupiter is {the largest} of all.', fa: 'مشتری بزرگ‌ترین (سیاره) است.' }
]
}
],
notes: [
"C. Tell your teacher how 'adjectives' are used in sentences.",
"D. Read the 'Conversation' and underline all 'adjectives'.",
"Hint: Some adjectives are irregular → good/better/the best · bad/worse/the worst · far/farther/the farthest · many-much/more/the most"
],
practice: {
title: 'E. Look at the pictures and choose the best sentence.',
instruction: 'بهترین جمله را با توجه به تصویر انتخاب کن.',
items: [
{ sentence: '1. (a modern car / an old car)', options: ['This is a modern car.', 'This is an old car.'], correct: 0 },
{ sentence: '2. (house — smallest)', options: ['Our house is the smallest of all.', 'Our house is as small as their houses.'], correct: 0 },
{ sentence: '3. (David & father — same height)', options: ['David is taller than his father.', 'David is as tall as his father.'], correct: 1 },
{ sentence: '4. (blue pencil longer)', options: ['The blue pencil is longer than the yellow pencil.', 'The yellow pencil is as short as the blue pencil.'], correct: 0 }
]
},
friendWork: {
title: 'F. Work with a friend.',
partA: { instruction: 'Make sentences with these adjectives to describe and compare people, things, or places you know.', items: ['brave', 'kind', 'large', 'fast'] },
partB: { instruction: 'Now compare using comparative/superlative forms.', items: ['tall / taller / tallest', 'good / better / best', 'beautiful / more beautiful / most beautiful'] }
},
goingTo: {
title: 'Comparative / Superlative (long adjectives)',
note: 'برای <strong>صفت‌های بلند</strong> (دو هجا یا بیشتر) از <code>more ... than</code> برای تفضیلی و <code>the most ...</code> برای عالی استفاده می‌کنیم (نه er/est).',
readTitle: "A. Read the following examples with 'comparative/superlative adjectives'.",
examples: [
{ en: 'This problem is {more difficult than} that one. Actually, this is {the most difficult} problem of the book.', fa: 'این مسئله از آن یکی سخت‌تر است. در واقع، این سخت‌ترین مسئله کتاب است.' },
{ en: 'Persian zebras are {more beautiful than} African zebras. They are {the most beautiful} of all.', fa: 'گورخرهای ایرانی زیباتر از گورخرهای آفریقایی‌اند. آن‌ها زیباترین (گورخرها) هستند.' },
{ en: 'This laptop is {more expensive than} that one. It is {the most expensive} of all.', fa: 'این لپ‌تاپ گران‌تر از آن یکی است. گران‌ترین (لپ‌تاپ) است.' },
{ en: 'Sharks are {more dangerous than} whales. They are {the most dangerous} animals of the sea.', fa: 'کوسه‌ها خطرناک‌تر از نهنگ‌ها هستند. خطرناک‌ترین حیوانات دریا هستند.' }
],
table: {
headers: ['Gold', 'is', '...'],
rows: [
['Gold', 'is', 'expensive.'],
['Gold', 'is', 'more expensive than silver.'],
['Gold', 'is', 'the most expensive metal of the world.']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Asking about details',
strategyTitleFa: 'راهبرد گفتاری — پرسیدن درباره جزئیات',
strategyDesc: 'A. You may use adjectives to describe something or ask about details such as the quality, size, age, and color.',
patterns: [
{ q: 'How was the movie?', a: 'It was very interesting. I am going to watch it again.' },
{ q: 'Was it an old film?', a: 'Yeah, actually it was black and white.' }
],
patternsList: [
'How is (was) …? — It is (was) interesting / beautiful / nice …',
'What color is it? — It is black / white / yellow …',
'Was it a modern house? — Yes, it was. / No, it was an old house.'
],
listenComplete: {
title: 'B. Listen to the following conversations and complete the sentences.',
conversations: [
{ num: 1, items: ['She bought .....................', 'It was .....................'] },
{ num: 2, items: ['She likes .....................', 'Cooking is .....................'] }
]
},
pairWork: {
title: 'Pair up and choose 3 adjectives to describe people, places, and fruits. Compare your answers with your friend.',
box1: { label: 'Box 1 — things', verbs: ['my best friend', 'apple', 'our school', 'our English teacher', 'Boostan Park', 'pepper'] },
box2: { label: 'Box 2 — adjectives', verbs: ['small', 'green', 'yellow', 'medium', 'fresh', 'red', 'kind', 'careful', 'neat', 'nice', 'beautiful', 'long', 'helpful'] }
}
},
pronunciation: {
title: 'Pronunciation — Rising Intonation',
titleFa: 'تلفظ — لحن صعودی',
rule: 'When you check information, use rising intonation. (وقتی اطلاعاتی را بررسی/تأیید می‌کنی، از لحن صعودی استفاده کن.)',
intonationGuide: {
rising: 'لحن <strong>صعودی (↗)</strong>: صدا در پایان جمله <strong>بالا</strong> می‌رود. در سؤالات بله/خیر و وقتی اطلاعاتی را بررسی می‌کنی استفاده می‌شود.'
},
examplesTitle: 'A. Listen to the following sentences. They have rising intonation.',
examples: [
{ en: 'Is this your new car?', a: '(rising ↗ — checking information)' },
{ en: 'Was the book interesting?', a: '(rising ↗)' },
{ en: 'Is this problem easier than that one?', a: '(rising ↗)' },
{ en: 'Are they the most expensive houses in this city?', a: '(rising ↗)' }
],
punctuation: {
title: 'C. Listen to the conversation and identify falling (↘) and rising (↗) intonations.',
text: 'A: I heard you travelled abroad this summer. Is it true? B: Yes. I went to Japan. I was there for 2 weeks. A: How was your trip? B: It was very interesting. The country was very clean and people were very polite. A: What about food? B: I ate seafood. Japanese people make delicious food with fish.',
answer: 'سؤالات بله/خیر (Is it true?) صعودی ↗ — جملات خبری و سؤالات Wh (How was your trip?) نزولی ↘'
}
},
writing: {
title: 'Writing — Adjectives',
titleFa: 'نوشتن — صفت‌ها',
sections: [
{
type: 'lesson-noun',
title: 'Adjective',
intro: 'An adjective describes a noun. It gives more information in terms of such elements:',
introFa: 'صفت یک اسم را توصیف می‌کند و اطلاعات بیشتری درباره ویژگی‌های آن می‌دهد:',
categories: [
{ label: '1) Quality / Opinion', examples: ['nice', 'neat', 'boring', 'a beautiful flower'] },
{ label: '2) Size', examples: ['small', 'tall', 'short', 'a big cat'] },
{ label: '3) Age', examples: ['young', 'new', 'modern', 'an old tree'] },
{ label: '4) Color', examples: ['black', 'red', 'dark', 'a blue sky'] },
{ label: '5) Nationality', examples: ['Iranian', 'German', 'Chinese', 'African lions'] },
{ label: '6) Material', examples: ['wooden', 'rocky', 'golden', 'plastic balls'] }
]
},
{
type: 'lesson-markers',
title: 'Place of Adjectives',
intro: 'Adjectives usually come:',
markers: [
{ marker: '1) before a noun', examples: 'an interesting planet / two small moons / red cells' },
{ marker: "2) after the verb 'be'", examples: 'Human body is amazing. / She was so happy. / Venus is smaller than Earth.' }
]
},
{
type: 'plural-task',
title: 'B. Complete each sentence with a suitable adjective. (One is extra.)',
wordBank: ['funny', 'careful', 'tall', 'golden', 'cloudy'],
items: [
{ sentence: "It's not _____. Don't laugh please!", words: ['?'], answers: ['funny'] },
{ sentence: 'She looked at the _____ sky above the sea.', words: ['?'], answers: ['cloudy'] },
{ sentence: 'Be _____! Look both ways when you cross the street.', words: ['?'], answers: ['careful'] },
{ sentence: 'Mary lost her _____ watch in the park.', words: ['?'], answers: ['golden'] }
]
},
{
type: 'lesson-plural',
title: 'Spelling Hint — Comparative & Superlative',
intro: 'Look at the following adjective forms (spelling changes):',
introFa: 'به تغییرات املایی صفت‌ها در حالت تفضیلی و عالی دقت کن:',
regular: [['hot', 'hotter / hottest'], ['big', 'bigger / biggest'], ['red', 'redder / reddest']],
irregular: [['easy', 'easier / easiest'], ['cloudy', 'cloudier / cloudiest'], ['happy', 'happier / happiest']]
},
{
type: 'plural-task',
title: "C. Write the 'comparative' and 'superlative' forms of each adjective.",
items: [
{ sentence: '1. angry → _____ / _____', words: ['comp','super'], answers: ['angrier', 'the angriest'] },
{ sentence: '2. strong → _____ / _____', words: ['comp','super'], answers: ['stronger', 'the strongest'] },
{ sentence: '3. hot → _____ / _____', words: ['comp','super'], answers: ['hotter', 'the hottest'] },
{ sentence: '4. far → _____ / _____', words: ['comp','super'], answers: ['farther', 'the farthest'] },
{ sentence: '5. neat → _____ / _____', words: ['comp','super'], answers: ['neater', 'the neatest'] },
{ sentence: '6. ugly → _____ / _____', words: ['comp','super'], answers: ['uglier', 'the ugliest'] }
]
},
{
type: 'plural-task',
title: 'D. Complete each sentence with a comparative or superlative form. (deep, good, dangerous, expensive, small)',
wordBank: ['deep', 'good', 'dangerous', 'expensive', 'small'],
items: [
{ sentence: '1. Pluto is _____ than the moon of Earth.', words: ['?'], answers: ['smaller'] },
{ sentence: '2. Are you sure this is the _____ way of doing it?', words: ['?'], answers: ['best'] },
{ sentence: '3. Lions are _____ animals in the world.', words: ['?'], answers: ['the most dangerous'] },
{ sentence: '4. This lake is _____ one in the world.', words: ['?'], answers: ['the deepest'] },
{ sentence: '5. A plane ticket is _____ than a train ticket.', words: ['?'], answers: ['more expensive'] }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to five interesting things about our brain.',
tasks: [
"1. The brain becomes smaller when ........... doesn't ........... enough ...........",
'1. When you laugh ........... different parts of the ........... are ...........',
"2. Listen again and list all 'adjectives'."
]
},
reading: {
title: 'B. Now read five more interesting things about our brain.',
text: '6. The brain gives enough energy to light a small lamp. 7. Seafood is the best food for the brain. 8. The brain is the fattiest body organ. 9. Reading and listening help the brain work well. 10. Good and deep sleep helps the brain work better.',
fa: '۶. مغز انرژی کافی برای روشن کردن یک لامپ کوچک تولید می‌کند. ۷. غذای دریایی بهترین غذا برای مغز است. ۸. مغز پرچرب‌ترین اندام بدن است. ۹. خواندن و گوش دادن به خوب کار کردن مغز کمک می‌کنند. ۱۰. خواب خوب و عمیق به بهتر کار کردن مغز کمک می‌کند.',
glossary: { 'energy': 'انرژی', 'Seafood': 'غذای دریایی', 'fattiest': 'پرچرب‌ترین', 'organ': 'اندام', 'deep sleep': 'خواب عمیق' },
tasks: [ "3. Underline all 'adjectives'." ]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer. Use appropriate intonation.',
questions: [ 'Is our brain an amazing organ?', 'What type of food is good for our brain?', 'Tell me two interesting things about our brain.' ]
}
},
workbook: [
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'Microbes',
passage: "Microbes are really wonderful. They are everywhere! They live all around you, on you and inside you! Microbes are very small, so you can't see them. But don't worry. Some microbes make you sick but most others keep you healthy and even help you to fight disease. There are so many different types of microbes. We still don't really know how many there are, but we know that microbes do lots of different things. Bacteria and viruses are two important types of microbes. Bacteria are really important microbes. They are very small. They have only one cell. Bacteria can live in any area of the earth. They aren't all bad; in fact you couldn't live without some bacteria! Viruses are among the smallest microbes on the earth, even smaller than bacteria. They are different from bacteria because they cannot live on their own. Viruses need to be inside a living cell to live and grow. There aren't many good things about viruses – they usually attack your body and make you sick!",
passageFa: 'میکروب‌ها واقعاً شگفت‌انگیزند. آن‌ها همه‌جا هستند! دور و بر تو، روی تو و درون تو زندگی می‌کنند! میکروب‌ها خیلی کوچک‌اند، پس نمی‌توانی ببینی‌شان. اما نگران نباش. بعضی میکروب‌ها تو را بیمار می‌کنند اما بیشترشان تو را سالم نگه می‌دارند و حتی به تو کمک می‌کنند با بیماری مبارزه کنی. انواع مختلف زیادی از میکروب‌ها هست. هنوز واقعاً نمی‌دانیم چندتا هستند، اما می‌دانیم که میکروب‌ها کارهای مختلف زیادی می‌کنند. باکتری‌ها و ویروس‌ها دو نوع مهم میکروب هستند. باکتری‌ها میکروب‌های واقعاً مهمی‌اند. خیلی کوچک‌اند. فقط یک سلول دارند. باکتری‌ها می‌توانند در هر نقطه زمین زندگی کنند. همه‌شان بد نیستند؛ در واقع بدون بعضی باکتری‌ها نمی‌توانی زندگی کنی! ویروس‌ها جزو کوچک‌ترین میکروب‌های روی زمین‌اند، حتی کوچک‌تر از باکتری‌ها. آن‌ها با باکتری‌ها فرق دارند چون نمی‌توانند به‌تنهایی زندگی کنند. ویروس‌ها باید درون یک سلول زنده باشند تا زندگی و رشد کنند. چیزهای خوب زیادی درباره ویروس‌ها نیست – آن‌ها معمولاً به بدنت حمله می‌کنند و بیمارت می‌کنند!',
glossary: {
'Microbes': 'میکروب‌ها', 'wonderful': 'شگفت‌انگیز', 'everywhere': 'همه‌جا', 'sick': 'بیمار',
'healthy': 'سالم', 'fight': 'مبارزه', 'disease': 'بیماری', 'Bacteria': 'باکتری‌ها',
'viruses': 'ویروس‌ها', 'cell': 'سلول', 'attack': 'حمله می‌کنند', 'grow': 'رشد کردن', 'living': 'زنده'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Microbe is an important type of bacteria.', answer: false },
{ q: 'Viruses can live in any place in the world.', answer: false },
{ q: 'Bacteria do not need to be inside a living cell to live.', answer: true }
]
},
{
type: 'short-answer',
title: 'B. Answer the following questions.',
questions: [
{ q: 'Where can we find bacteria?', sampleAnswer: 'Bacteria can live in any area of the earth.' },
{ q: 'How are bacteria different from viruses?', sampleAnswer: 'Viruses cannot live on their own; they need a living cell. Bacteria can.' },
{ q: 'Do you like to see microbes under a microscope?', sampleAnswer: '(your own answer)' }
]
}
]
},
{
part: 'Part II',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'circle-task-wb',
title: 'A. Circle the correct answer.',
items: [
{ text: 'His new car is [faster/the fastest] than my car.', answer: 'faster' },
{ text: 'Russia is [bigger/the biggest] country of the world.', answer: 'the biggest' },
{ text: 'The whale is [heavier/the heaviest] sea animal.', answer: 'the heaviest' },
{ text: 'Kazem is [taller/the tallest] player in the team.', answer: 'the tallest' },
{ text: 'Mary and Fatima are [older/the oldest] than Leila.', answer: 'older' }
]
},
{
type: 'fill-going-to',
title: 'B. Fill in the blanks with the following adjectives. (bigger, biggest, smaller, African, Asian, strongest)',
text: 'Elephants are the [1] and [2] land animals in the world. They only eat plants and fruits. There are two types of elephants. The [3] elephant lives in Africa and the Indian elephant lives in Asia. The African elephant is [4] than the Indian elephant. It has larger ears, too. The Indian, or the [5] elephant is [6] than the African elephant and has smaller ears.',
blanks: [
{ num: 1, answer: 'biggest' },
{ num: 2, answer: 'strongest' },
{ num: 3, answer: 'African' },
{ num: 4, answer: 'bigger' },
{ num: 5, answer: 'Asian' },
{ num: 6, answer: 'smaller' }
]
},
{
type: 'short-answer',
title: 'C. Now answer the following questions.',
questions: [
{ q: 'What type of elephant lives in Asia?', sampleAnswer: 'The Indian (Asian) elephant.' },
{ q: 'Is the African elephant smaller than the Asian elephant?', sampleAnswer: 'No, it is bigger.' },
{ q: 'Do Indian elephants have bigger ears than African elephants?', sampleAnswer: 'No, they have smaller ears.' }
]
},
{
type: 'fill-words',
title: 'D. Fill in the blanks with irregular comparative forms. (good, bad, far)',
wordBank: ['better', 'worse', 'farther'],
items: [
{ sentence: '1. I know that my cooking is bad, but your cooking is _____.', answer: 'worse' },
{ sentence: '2. The bed was hard, but it was _____ than nothing.', answer: 'better' },
{ sentence: '3. It\'s too dark. I cannot see _____ than two meters.', answer: 'farther' }
]
}
]
},
{
part: 'Part III',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'match-columns',
title: 'A. Match the words with their definitions.',
pairs: [
{ a: 'observatory', b: 'a place from which people watch planets and stars', letter: 'b' },
{ a: 'planet', b: 'a large round body of rock or gas that moves around the Sun', letter: 'a' },
{ a: 'plasma', b: 'the yellow liquid that carries the blood cells', letter: 'd' },
{ a: 'microscope', b: 'it uses lenses to make very small things look larger', letter: 'c' },
{ a: 'brain', b: 'it is inside your head and controls your body', letter: 'e' }
]
},
{
type: 'odd-one-out',
title: 'B. One odd out.',
items: [
{ options: ['interesting', 'amazing', 'useful', 'wonderful'], odd: 2 },
{ options: ['Mars', 'Saturn', 'Jupiter', 'Sun'], odd: 3 },
{ options: ['heart', 'brain', 'blood', 'moon'], odd: 3 },
{ options: ['red', 'yellow', 'liquid', 'white'], odd: 2 },
{ options: ['microbe', 'cell', 'virus', 'bacteria'], odd: 1 }
]
},
{
type: 'match-columns',
title: 'C. Match columns A and B.',
pairs: [
{ a: 'rocky', b: 'planet', letter: 'b' },
{ a: 'daily', b: 'exercise', letter: 'd' },
{ a: 'pump', b: 'blood', letter: 'c' },
{ a: 'powerful', b: 'telescope', letter: 'a' },
{ a: 'keep', b: 'healthy', letter: 'e' }
]
},
{
type: 'group-words',
title: 'D. Put the words in three groups based on their size.',
words: ['planet', 'star', 'virus', 'Sun', 'cell', 'plasma', 'heart', 'moon', 'brain', 'ear', 'microbe', 'eye'],
groups: ['Very Big (space)', 'Medium (body)', 'Very Small']
},
{
type: 'order-lifespan',
title: 'E. Order the planets based on their size (largest to smallest).',
words: ['Mercury', 'Earth', 'Jupiter', 'Venus', 'Mars'],
answer: ['Jupiter', 'Earth', 'Venus', 'Mars', 'Mercury']
},
{
type: 'fill-words',
title: 'G. Fill in the blanks with the given words. (defend, healthy, moon, telescope, powerful)',
wordBank: ['defend', 'healthy', 'moon', 'telescope', 'powerful'],
items: [
{ sentence: '1. White blood cells _____ body against diseases.', answer: 'defend' },
{ sentence: '2. The sky is cloudy. We cannot see the _____ tonight.', answer: 'moon' },
{ sentence: '3. You need a _____ microscope to see something so small.', answer: 'powerful' },
{ sentence: '4. Daily exercise keeps us strong and _____.', answer: 'healthy' },
{ sentence: '5. The Hubble _____ goes around Earth every 97 minutes.', answer: 'telescope' }
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
title: 'Ask and answer with appropriate intonation.',
items: [
'Is a cheetah faster than a lion?',
'Is football more interesting than volleyball?',
'Are you the tallest person in your family?',
"Is Mercury's orbit different from other planets' orbits?"
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
title: 'A. Write the comparative and superlative forms of the following adjectives.',
wordBank: ['more ... than', 'the most ...'],
items: [
{ sentence: '1. wonderful → _____ / _____', answer: 'more wonderful / the most wonderful' },
{ sentence: '2. interesting → _____ / _____', answer: 'more interesting / the most interesting' },
{ sentence: '3. dangerous → _____ / _____', answer: 'more dangerous / the most dangerous' },
{ sentence: '4. careless → _____ / _____', answer: 'more careless / the most careless' },
{ sentence: '5. useful → _____ / _____', answer: 'more useful / the most useful' }
]
},
{
type: 'singular-plural-task',
title: 'B & C. Compare and find adjectives.',
instructions: [
'B. Compare each pair of things. Write two sentences for each pair. (e.g. Earth is larger than Mars. / Mars is colder than Earth.)',
"C. Read the text in Part I. Find all adjectives and change them into comparative and superlative forms."
]
}
]
}
],
quiz: [
{ q: 'Jupiter is _____ planet of all.', qFa: 'مشتری بزرگ‌ترین سیاره است.', options: ['the largest', 'larger', 'large', 'as large'], correct: 0 },
{ q: 'Mars is _____ than Jupiter.', qFa: 'مریخ کوچک‌تر از مشتری است.', options: ['smaller', 'smallest', 'small', 'as small'], correct: 0 },
{ q: 'The heart _____ blood round the body.', qFa: 'قلب خون را در بدن پمپاژ می‌کند.', options: ['pumps', 'carries', 'defends', 'collects'], correct: 0 },
{ q: 'White cells _____ our body against microbes.', qFa: 'گلبول‌های سفید از بدن در برابر میکروب‌ها دفاع می‌کنند.', options: ['defend', 'carry', 'collect', 'pump'], correct: 0 },
{ q: 'Tigers are as _____ as lions.', qFa: 'ببرها به اندازه شیرها خطرناک‌اند.', options: ['dangerous', 'more dangerous', 'most dangerous', 'danger'], correct: 0 },
{ q: 'This problem is _____ difficult than that one.', qFa: 'این مسئله سخت‌تر از آن یکی است.', options: ['more', 'most', 'the most', 'as'], correct: 0 }
]
},
{
num: 3,
title: 'The Value of Knowledge',
titleFa: 'ارزش دانش',
function: 'The Value of Knowledge',
quote: { en: 'Seek knowledge from the cradle to the grave', ref: 'Holy Prophet (PBUH)', fa: 'از گهواره تا گور دانش بجویید.' },
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'Part One',
instruction: 'A. Match the pictures with the sentences.',
instructionFa: 'تصاویر را با جمله‌ها تطبیق بده.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'This gives us an easier life when there is no light.', fa: 'این وقتی نور نیست زندگی را آسان‌تر می‌کند. (لامپ)', image: 'gr-lightbulb.jpg' },
{ id: 'b', phrase: 'People use this to talk with someone in another place.', fa: 'مردم از این برای صحبت با کسی در جای دیگر استفاده می‌کنند. (تلفن)', image: 'gr-telephone.jpg' },
{ id: 'c', phrase: 'We use this to take and keep pictures very easily.', fa: 'از این برای گرفتن و نگه‌داشتن عکس استفاده می‌کنیم. (دوربین)', image: 'gr-camera.jpg' },
{ id: 'd', phrase: 'This helps us travel very fast to far places.', fa: 'این به ما کمک می‌کند خیلی سریع به جاهای دور سفر کنیم. (هواپیما)', image: 'gr-airplane.jpg' }
],
followup: "B. Order the followings from 'oldest to newest': Camera, Light bulb, Telephone, Airplane.",
followupFa: 'موارد را از قدیمی‌ترین به جدیدترین مرتب کن: دوربین، لامپ، تلفن، هواپیما.',
followupType: 'two-groups',
groupLabels: ['Oldest → Newest', '(Light bulb / Telephone / Camera / Airplane)']
},
{
label: 'Part Two',
instruction: 'A. Match the pictures with the words.',
instructionFa: 'تصاویر را با کلمات تطبیق بده.',
type: 'match-words',
items: [
{ word: 'scientists', fa: 'دانشمندان', image: 'gr-scientists.jpg' },
{ word: 'a laboratory', fa: 'آزمایشگاه', image: 'gr-laboratory.jpg' },
{ word: 'a building', fa: 'ساختمان', image: 'gr-building.jpg' }
],
followup: 'B. Choose an appropriate adjective for each word above. (modern / Iranian / old)',
followupFa: 'برای هر کلمه بالا یک صفت مناسب انتخاب کن: modern / Iranian / old.',
followupType: 'two-groups',
groupLabels: ['Word', 'Adjective (modern/Iranian/old)']
}
]
},
conversation: {
subtitle: 'Leaving the Library',
subtitleFa: 'خروج از کتابخانه',
desc: 'رؤیا و مهسا در حال خروج از کتابخانه هستند و درباره کتابی که مهسا می‌خواند صحبت می‌کنند.',
newWordsHint: ['medicine', 'famous', 'build', 'Believe me!', 'Cool!'],
lines: [
{ speaker: 'Roya', role: 'student', en: 'When I came in, you were reading a book. What was it?', fa: 'وقتی وارد شدم، داشتی کتاب می‌خوندی. چی بود؟' },
{ speaker: 'Mahsa', role: 'student', en: 'I was reading a book about famous Iranian scientists.', fa: 'داشتم کتابی درباره دانشمندان مشهور ایرانی می‌خوندم.' },
{ speaker: 'Roya', role: 'student', en: 'But such books are not very interesting.', fa: 'ولی همچین کتاب‌هایی خیلی جالب نیستن.' },
{ speaker: 'Mahsa', role: 'student', en: 'At first I had the same idea, believe me!', fa: 'اولش منم همین فکرو می‌کردم، باور کن!' },
{ speaker: 'Roya', role: 'student', en: 'Did you find it useful?', fa: 'مفید بود؟' },
{ speaker: 'Mahsa', role: 'student', en: "Oh yes. Actually I learned many interesting things about our scientists' lives.", fa: 'اوه بله. در واقع چیزهای جالب زیادی درباره زندگی دانشمندانمون یاد گرفتم.' },
{ speaker: 'Roya', role: 'student', en: 'Like what?', fa: 'مثلاً چی؟' },
{ speaker: 'Mahsa', role: 'student', en: 'For example Razi taught medicine to many young people while he was working in Ray Hospital. Or Nasireddin Toosi built Maragheh Observatory when he was studying the planets.', fa: 'مثلاً رازی وقتی در بیمارستان ری کار می‌کرد به جوان‌های زیادی پزشکی آموخت. یا خواجه نصیرالدین توسی وقتی سیارات رو مطالعه می‌کرد، رصدخانه مراغه رو ساخت.' },
{ speaker: 'Roya', role: 'student', en: 'Cool! What was the name of the book?', fa: 'عالیه! اسم کتاب چی بود؟' },
{ speaker: 'Mahsa', role: 'student', en: 'Famous Iranian Scientists.', fa: 'دانشمندان مشهور ایرانی.' }
],
questions: [
{ q: 'Were Mahsa and Roya in a laboratory?', fa: 'مهسا و رؤیا در آزمایشگاه بودن؟' },
{ q: 'Who came to the library sooner, Mahsa or Roya?', fa: 'کی زودتر به کتابخانه اومد، مهسا یا رؤیا؟' },
{ q: 'Do you know any interesting story about famous scientists?', fa: 'داستان جالبی درباره دانشمندان مشهور می‌دونی؟' }
]
},
newWords: {
lookRead: [
{ en: 'Melika {tries hard} to learn English.', fa: 'ملیکا برای یادگیری انگلیسی {سخت تلاش می‌کند}.', image: 'nw-tryhard.jpg' },
{ en: 'Babak is an {energetic} boy.', fa: 'بابک پسری {پرانرژی} است.', image: 'nw-energetic.jpg' },
{ en: 'The students do {experiments} in the school laboratory.', fa: 'دانش‌آموزان در آزمایشگاه مدرسه {آزمایش} انجام می‌دهند.', image: 'nw-experiment.jpg' },
{ en: 'Children {grow up} rapidly.', fa: 'بچه‌ها به‌سرعت {بزرگ می‌شوند}.', image: 'nw-growup.jpg' },
{ en: 'She is doing {research} on blood cells.', fa: 'او روی سلول‌های خون {تحقیق} می‌کند.', image: 'nw-research.jpg' },
{ en: 'He has the flu and feels {weak}.', fa: 'او آنفولانزا دارد و احساس {ضعف} می‌کند.', image: 'nw-weak.jpg' },
{ en: 'No {success} is possible without hard work.', fa: 'هیچ {موفقیتی} بدون تلاش سخت ممکن نیست.', image: 'nw-success.jpg' },
{ en: 'Edison {invented} the first light bulb.', fa: 'ادیسون اولین لامپ را {اختراع کرد}.', image: 'nw-invent.jpg' }
],
definitions: [
{ word: 'solve', def: 'to find an answer to a problem', fa: 'حل کردن', example: 'We can help you {solve} your problems.' },
{ word: 'develop', def: 'to grow or change into a stronger, larger or better form', fa: 'توسعه دادن / رشد کردن', example: 'This book can {develop} your speaking skill.' },
{ word: 'belief', def: 'something that you believe', fa: 'باور', example: 'Her {belief} in Allah gave her hope during difficult times.' },
{ word: 'quit / give up', def: 'to stop doing something', fa: 'ترک کردن / دست کشیدن', example: 'Fortunately, his father is going to {quit} smoking. He {gave up} his work.' },
{ word: 'thousands of', def: 'a large number of things or people', fa: 'هزاران', example: 'There are {thousands of} things I want to do.' }
]
},
reading: {
passageTitle: 'No Pain No Gain',
passageTitleFa: 'نابرده رنج گنج میسر نمی‌شود',
paragraphs: [
{ en: "Human knowledge develops with scientists' hard work. Many great men and women try hard to find facts, solve problems and invent things.", fa: 'دانش بشری با تلاش سخت دانشمندان توسعه می‌یابد. بسیاری از مردان و زنان بزرگ سخت تلاش می‌کنند تا واقعیت‌ها را بیابند، مشکلات را حل کنند و چیزها را اختراع کنند.' },
{ en: 'Some of these scientists did not have easy lives. But they tried hard when they were working on problems. They never felt weak when they were studying. They never gave up when they were doing research.', fa: 'برخی از این دانشمندان زندگی آسانی نداشتند. اما وقتی روی مشکلات کار می‌کردند سخت تلاش می‌کردند. هرگز هنگام مطالعه احساس ضعف نمی‌کردند. هرگز هنگام تحقیق دست نمی‌کشیدند.' },
{ en: 'There are great stories about scientists and their lives. One such a story is about Thomas Edison. As a young boy, Edison was very interested in science. He was very energetic and always asked questions. Sadly, young Edison lost his hearing at the age of 12. He did not attend school and learned science by reading books in the library himself. When he grew up he worked in different places, but he never lost his interest in making things. Edison was famous for doing thousands of experiments to find answers to problems. He said, "I never quit until I get what I\'m after". Edison had more than 1,000 inventions and was very successful at the end of his life.', fa: 'داستان‌های بزرگی درباره دانشمندان و زندگی‌شان هست. یکی از این داستان‌ها درباره توماس ادیسون است. ادیسون در کودکی خیلی به علم علاقه داشت. خیلی پرانرژی بود و همیشه سؤال می‌پرسید. متأسفانه ادیسون جوان در ۱۲ سالگی شنوایی‌اش را از دست داد. به مدرسه نرفت و خودش با خواندن کتاب در کتابخانه علم آموخت. وقتی بزرگ شد در جاهای مختلف کار کرد، اما هرگز علاقه‌اش به ساختن چیزها را از دست نداد. ادیسون به‌خاطر انجام هزاران آزمایش برای یافتن پاسخ مشکلات مشهور بود. او گفت: «هرگز دست نمی‌کشم تا به چیزی که می‌خواهم برسم». ادیسون بیش از ۱۰۰۰ اختراع داشت و در پایان عمرش بسیار موفق بود.' },
{ en: 'Many great names had stories like this. But the key to their success is their hard work and belief in themselves. If you want to get what you want, work hard and never give up.', fa: 'بسیاری از نام‌های بزرگ داستان‌هایی مثل این داشتند. اما کلید موفقیتشان تلاش سخت و باور به خودشان است. اگر می‌خواهی به آنچه می‌خواهی برسی، سخت کار کن و هرگز دست نکش.' }
],
glossary: {
'knowledge': 'دانش', 'develops': 'توسعه می‌یابد', 'hard work': 'تلاش سخت', 'facts': 'واقعیت‌ها',
'solve': 'حل کردن', 'invent': 'اختراع کردن', 'tried hard': 'سخت تلاش کردند', 'weak': 'ضعیف',
'gave up': 'دست کشیدند', 'research': 'تحقیق', 'energetic': 'پرانرژی', 'hearing': 'شنوایی',
'attend': 'حاضر شدن', 'grew up': 'بزرگ شد', 'experiments': 'آزمایش‌ها', 'quit': 'دست کشیدن',
'inventions': 'اختراعات', 'successful': 'موفق', 'success': 'موفقیت', 'belief': 'باور', 'science': 'علم'
},
comprehension: [
{
type: 'choose',
title: 'A. Choose the best answer.',
items: [
{ q: 'Where did Edison learn science?', options: ['In the library', 'At school', 'In the laboratory'], correct: 0 },
{ q: 'How did Edison find answers to problems?', options: ['By sleeping in the laboratory', 'By doing many experiments', 'By quitting what he was after'], correct: 1 },
{ q: 'Which is not true about scientists?', options: ['They find facts', 'They invent things', 'They feel weak'], correct: 2 }
]
},
{
type: 'truefalse',
title: 'B. True / False',
items: [
{ q: 'Edison finally lost his interest in inventing things.', answer: false },
{ q: 'Edison did not attend school at all.', answer: true },
{ q: 'Hard work is the key to scientists\' success.', answer: true }
]
},
{
type: 'match-halves',
title: 'C. Match two halves.',
pairs: [
{ left: 'After Edison lost his hearing', right: 'he did not quit studying.', letter: 'b' },
{ left: 'When scientists were working on problems', right: 'they did not give up.', letter: 'c' },
{ left: 'If you like to be successful', right: 'you must not feel weak.', letter: 'a' }
],
distractor: { letter: 'd', right: 'he became a famous person.' }
}
]
},
grammar: {
title: 'Grammar — Past Progressive',
titleFa: 'دستور زبان — گذشته استمراری',
noteText: 'این فعل در زمان <strong>گذشته استمراری</strong> است: <code>was/were + فعل + ing</code>.',
noteMap: {
"was working": "<strong>گذشته استمراری</strong>: <code>was + فعل-ing</code> — کاری که در گذشته در حال انجام بود (با I/he/she/it).",
"were working": "<strong>گذشته استمراری</strong>: <code>were + فعل-ing</code> — با we/you/they.",
"was studying": "<strong>گذشته استمراری</strong>: <code>was + studying</code> — در حال مطالعه بود.",
"was doing": "<strong>گذشته استمراری</strong>: <code>was + doing</code> — در حال انجام بود.",
"were studying": "<strong>گذشته استمراری</strong>: <code>were + studying</code>.",
"were doing": "<strong>گذشته استمراری</strong>: <code>were + doing</code>.",
"was sitting": "<strong>گذشته استمراری</strong>: <code>was + sitting</code> — در حال نشستن بود.",
"was reading": "<strong>گذشته استمراری</strong>: <code>was + reading</code> — در حال خواندن بود.",
"wasn't": "<strong>منفی گذشته استمراری</strong>: <code>wasn't (was not) + فعل-ing</code>.",
"weren't": "<strong>منفی گذشته استمراری</strong>: <code>weren't (were not) + فعل-ing</code>.",
"was not": "<strong>منفی گذشته استمراری</strong>: <code>was not + فعل-ing</code>.",
"Was": "<strong>سؤالی گذشته استمراری</strong>: <code>Was + فاعل + فعل-ing؟</code>",
"Were": "<strong>سؤالی گذشته استمراری</strong>: <code>Were + فاعل + فعل-ing؟</code>",
"was": "<strong>was</strong> — فعل کمکی گذشته استمراری (با I/he/she/it) + فعل-ing.",
"were": "<strong>were</strong> — فعل کمکی گذشته استمراری (با we/you/they) + فعل-ing.",
"myself": "<strong>ضمیر انعکاسی (Self Pronoun)</strong>: «خودم» — وقتی فاعل و مفعول یکی‌اند.",
"herself": "<strong>ضمیر انعکاسی</strong>: «خودش» (مؤنث).",
"himself": "<strong>ضمیر انعکاسی</strong>: «خودش» (مذکر).",
"itself": "<strong>ضمیر انعکاسی</strong>: «خودش» (برای اشیا/حیوان).",
"themselves": "<strong>ضمیر انعکاسی</strong>: «خودشان» (جمع)."
},
readTexts: {
title: 'A. Read the following texts.',
texts: [
{ en: 'Tahereh Saffarzadeh was an Iranian writer, translator and thinker. When other kids {were} still playing outside, she learned reading and reciting the Holy Quran at the age of 6. As a young student, she {was working} very hard to learn new things. She also {was writing} poems at that time. She published her first book while she {was} still studying in the university. She got interested in translating the Holy Quran when she {was studying} and teaching translation. Saffarzadeh passed away in 1387.', fa: 'طاهره صفارزاده نویسنده، مترجم و متفکر ایرانی بود. وقتی بچه‌های دیگر هنوز بیرون بازی می‌کردند، او در ۶ سالگی خواندن و تلاوت قرآن را آموخت. به‌عنوان دانش‌آموزی جوان، برای یادگیری چیزهای جدید سخت کار می‌کرد. در آن زمان شعر هم می‌نوشت. اولین کتابش را وقتی هنوز در دانشگاه درس می‌خواند منتشر کرد. وقتی ترجمه را مطالعه و تدریس می‌کرد به ترجمه قرآن علاقه‌مند شد. صفارزاده در ۱۳۸۷ درگذشت.' },
{ en: 'Alexander Fleming was a great researcher. He {was doing} research in his laboratory in winter 1928. He {was trying} to find a new medicine to save people\'s lives. He found a new medicine when he {was working} on antibiotics. This was the amazing penicillin. Many other doctors {were} also working on this medicine in those days. They helped the first patient with penicillin in 1942 when the flu {was getting} around.', fa: 'الکساندر فلمینگ پژوهشگر بزرگی بود. در زمستان ۱۹۲۸ در آزمایشگاهش تحقیق می‌کرد. تلاش می‌کرد داروی جدیدی برای نجات جان مردم پیدا کند. وقتی روی آنتی‌بیوتیک‌ها کار می‌کرد، داروی جدیدی یافت. این پنی‌سیلین شگفت‌انگیز بود. در آن روزها پزشکان دیگری هم روی این دارو کار می‌کردند. در سال ۱۹۴۲ وقتی آنفولانزا شایع می‌شد، اولین بیمار را با پنی‌سیلین درمان کردند.' }
]
},
explanation: [
'زمان <strong>گذشته استمراری (Past Progressive)</strong> برای کاری به کار می‌رود که در یک لحظه‌ی مشخص در گذشته در حال انجام بود.',
'ساختار: <code>was/were + فعل + ing</code>',
'<strong>was</strong> برای <code>I / he / she / it</code> و <strong>were</strong> برای <code>we / you / they</code>.',
'اغلب با <code>when</code> (گذشته ساده) یا <code>while</code> همراه می‌شود: <code>When the phone rang, I was studying.</code>'
],
tablesTitle: 'B. Read the following examples.',
tables: [
{
title: 'Affirmative (مثبت)',
headers: ['Subject', 'was/were', 'Verb-ing', 'Time'],
rows: [
['I / He / She / It', 'was', 'working on a problem', 'at 4 / when the power went out.'],
['We / You / They', 'were', 'working on a problem', 'at 4 / when the power went out.']
],
examples: [
{ en: 'The scientist {was doing} research in his laboratory during 1370.', fa: 'دانشمند در سال ۱۳۷۰ در آزمایشگاهش تحقیق می‌کرد.' },
{ en: 'Newton {was sitting} under a tree when an apple hit his head.', fa: 'نیوتن زیر درختی نشسته بود که سیبی به سرش خورد.' }
]
},
{
title: 'Negative (منفی)',
headers: ['Subject', "wasn't/weren't", 'Verb-ing'],
rows: [
['I / He / She / It', "wasn't", 'working on a problem.'],
['We / You / They', "weren't", 'working on a problem.']
],
examples: [
{ en: "Tina {wasn't} reading a novel when her mother came in. She was studying her English book.", fa: 'تینا وقتی مادرش وارد شد رمان نمی‌خواند. داشت کتاب انگلیسی‌اش را می‌خواند.' },
{ en: 'Reza {was not} doing an experiment when the phone rang. He was solving a math problem.', fa: 'رضا وقتی تلفن زنگ زد آزمایش نمی‌کرد. داشت مسئله ریاضی حل می‌کرد.' }
]
},
{
title: 'Interrogative (سؤالی)',
headers: ['Was/Were', 'Subject', 'Verb-ing'],
rows: [
['Was', 'I / he / she / it', 'working on a problem?'],
['Were', 'we / you / they', 'working on a problem?']
],
examples: [
{ en: '{Was} Mahsa doing her homework when her mother called?', fa: 'مهسا وقتی مادرش زنگ زد داشت تکالیفش را انجام می‌داد؟' },
{ en: '{Were} they talking when the teacher came in?', fa: 'آن‌ها وقتی معلم وارد شد داشتند صحبت می‌کردند؟' }
]
}
],
notes: [
"C. Tell your teacher how 'past progressive' is made.",
"D. Read the 'Conversation' and underline all 'past progressive verbs'."
],
practice: {
title: 'E. Read the following paragraph and choose the best verb forms.',
instruction: 'داستان غیاث‌الدین جمشید کاشانی را بخوان و فعل درست را انتخاب کن.',
items: [
{ sentence: 'It was raining yesterday. I _____ in the living room.', options: ['was sitting', 'sit'], correct: 0 },
{ sentence: 'I _____ a movie about a great scientist.', options: ['watched', 'was watching'], correct: 1 },
{ sentence: 'Jamshid _____ very interested in numbers and planets.', options: ['is', 'was'], correct: 1 },
{ sentence: 'He _____ many interesting things when he was solving math problems.', options: ['invented', 'invent'], correct: 0 },
{ sentence: 'Someone _____ him when he was working in his observatory.', options: ['was killing', 'killed'], correct: 1 },
{ sentence: 'He _____ only 42 years old.', options: ['was', 'is'], correct: 0 }
]
},
friendWork: {
title: 'F. Pair up and talk about the things you were doing at the given times.',
partA: { instruction: 'با گذشته استمراری بگو در این زمان‌ها چه می‌کردی:', items: ['Yesterday at 5', 'When the teacher came in', 'This morning at 5:30', 'When my father came home'] },
partB: { instruction: 'حالا از دوستت بپرس.', items: ['What were you doing yesterday at 5?', 'What was happening when the teacher came in?'] }
},
goingTo: {
title: 'Self Pronouns (ضمایر انعکاسی)',
note: '<strong>ضمیر انعکاسی</strong> (Self Pronoun): وقتی فاعل کاری را روی خودش انجام می‌دهد یا برای تأکید. مثل: myself, yourself, herself, himself, itself, ourselves, yourselves, themselves.',
readTitle: "A. Read the following examples with 'Self Pronouns'.",
examples: [
{ en: 'Alexander Graham Bell invented the telephone {himself}.', fa: 'الکساندر گراهام بل خودش تلفن را اختراع کرد.' },
{ en: 'Marie Curie found uranium {herself}.', fa: 'ماری کوری خودش اورانیوم را کشف کرد.' },
{ en: 'Alexander Graham Bell {himself} invented the telephone.', fa: '(تأکید) خودِ الکساندر گراهام بل تلفن را اختراع کرد.' },
{ en: 'Marie Curie {herself} found uranium.', fa: '(تأکید) خودِ ماری کوری اورانیوم را کشف کرد.' }
],
table: {
headers: ['Subject', 'Self Pronoun', ''],
rows: [
['I', 'myself', 'did the experiment.'],
['You', 'yourself', 'did the experiment.'],
['Zahra', 'herself', 'did the experiment.'],
['Amir', 'himself', 'did the experiment.'],
['The computer', 'itself', 'did the experiment.'],
['Maryam and I', 'ourselves', 'did the experiment.'],
['You and your friends', 'yourselves', 'did the experiment.'],
['The scientists', 'themselves', 'did the experiment.']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Narrating a story',
strategyTitleFa: 'راهبرد گفتاری — روایت یک داستان',
strategyDesc: "A. You may use 'simple past' and 'past progressive' together to narrate a story. Past progressive gives the background/situation of the story.",
patterns: [
{ q: 'What were you doing yesterday at 8?', a: 'We were sitting in the hall and talking about our day.' },
{ q: 'What was happening yesterday at 8?', a: 'A kitty was eating a cookie in the kitchen.' }
],
patternsList: [
'What were you doing (yesterday at 8)?',
'What was happening (yesterday at 8)?',
'I/We was/were + ...-ing',
'Suddenly + simple past (heard, saw, went ...)'
],
listenComplete: {
title: 'B. Listen to the following conversations and complete the sentences.',
conversations: [
{ num: 1, items: ['Leila was .....................', 'The driver .....................'] },
{ num: 2, items: ['Amir .....................', 'Amir was .....................'] }
]
},
pairWork: {
title: 'Pair up and ask your friends about the things they were doing last weekend in the afternoon.',
box1: { label: 'Activities', verbs: ['talk to someone', 'read a book', 'watch TV', 'play in the yard'] },
box2: { label: 'When solving a problem', verbs: ['study hard', 'work long hours', 'quit working', 'feel weak', 'try hard', 'give up trying'] }
}
},
pronunciation: {
title: 'Pronunciation — Emphatic Stress',
titleFa: 'تلفظ — تکیه تأکیدی',
rule: 'When you want to put special emphasis on something, you say it more strongly. (وقتی می‌خواهی روی چیزی تأکید کنی، آن را قوی‌تر تلفظ می‌کنی.)',
intonationGuide: {
rising: 'تکیهٔ <strong>تأکیدی (Emphatic Stress)</strong>: یک کلمه را قوی‌تر و بلندتر می‌گویی تا معنی خاصی را برسانی. مثلاً «Mina\'s dress is <strong>white</strong>» (نه قرمز) یا «<strong>Mina\'s</strong> dress is white» (نه مال کسی دیگر).'
},
examplesTitle: 'A. Listen to the sentences. Notice how speakers say some words with more emphasis.',
examples: [
{ en: 'Were you doing the research?', a: 'No, Ali was. (emphasis on Ali)' },
{ en: 'Who broke the window?', a: "It wasn't me. (emphasis on me)" },
{ en: 'Why were the students making so much noise?', a: "They weren't. The workers were. (emphasis on workers)" },
{ en: "Is it Jim's car over there?", a: 'No, his car is white. (emphasis on white)' }
],
punctuation: {
title: 'B. One word in each sentence is stressed. Notice how the meaning changes.',
text: "1. Mina's dress is white. (not someone else's) / 2. Mina's dress is white. (not her shoes) / 3. Mina's dress is white. (not another color)",
answer: 'با جابه‌جا کردن تکیه روی کلمات مختلف، معنی جمله عوض می‌شود: تأکید روی Mina\'s = مال مینا (نه دیگری)؛ روی dress = لباس (نه چیز دیگر)؛ روی white = سفید (نه رنگ دیگر).'
}
},
writing: {
title: 'Writing — Verbs (Action & State)',
titleFa: 'نوشتن — افعال (کنشی و حالتی)',
sections: [
{
type: 'lesson-noun',
title: 'Verb',
intro: 'A verb is a word that expresses an action or a state of being.',
introFa: 'فعل کلمه‌ای است که یک کنش (عمل) یا یک حالت را بیان می‌کند.',
categories: [
{ label: '1) Action verbs (کنشی)', examples: ['go', 'write', 'drink', 'He is writing a letter.'] },
{ label: '— more action examples', examples: ['The children went to school by bus.', 'My brother drinks milk every day.'] },
{ label: '2) State verbs (حالتی — احساس/فکر/حس)', examples: ['believe', 'love', 'feel', 'We believe in Allah.'] },
{ label: '— more state examples', examples: ['We love our country.', 'She feels happy.'] }
]
},
{
type: 'lesson-markers',
title: 'Simple and Continuous Forms',
intro: 'When can we use the continuous form?',
markers: [
{ marker: '1) Action verbs', examples: 'can be simple OR continuous → I cleaned my room yesterday. / I am cleaning my room now.' },
{ marker: '2) State verbs', examples: 'usually simple (NOT continuous) → I don\'t know the name. / Kids love chocolate.' }
]
},
{
type: 'circle-task',
title: 'B. Read the following sentences and choose the best verb forms.',
items: [
{ text: 'I [don\'t like/am not liking] reading newspapers.', answers: ["don't like"] },
{ text: 'At 3 o\'clock yesterday, I [needed/was needing] a taxi.', answers: ['needed'] },
{ text: 'She [watches/is watching] television at the moment.', answers: ['is watching'] },
{ text: 'I [want/am wanting] to go to the cinema tonight.', answers: ['want'] },
{ text: "Unfortunately, he [didn't remember/wasn't remembering] my name.", answers: ["didn't remember"] }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a story.',
tasks: [
'1. Sajjad was taking pictures yesterday at .....................',
'1. When he was taking pictures ..................... came to help.',
"2. Listen again and list 'past progressive verbs'."
]
},
reading: {
title: 'B. Now listen to the rest of the story.',
text: 'The firefighters jumped out of their cars. They were working quickly. They were putting out the fire. People were standing near the building. They were watching the fire. It was dangerous. Sajjad put his camera aside and asked people to leave. The firefighters put out the fire when he was talking with people.',
fa: 'آتش‌نشان‌ها از ماشین‌هایشان بیرون پریدند. سریع کار می‌کردند. داشتند آتش را خاموش می‌کردند. مردم نزدیک ساختمان ایستاده بودند. داشتند آتش را تماشا می‌کردند. خطرناک بود. سجاد دوربینش را کنار گذاشت و از مردم خواست آنجا را ترک کنند. آتش‌نشان‌ها وقتی او داشت با مردم صحبت می‌کرد، آتش را خاموش کردند.',
glossary: { 'firefighters': 'آتش‌نشان‌ها', 'jumped out': 'بیرون پریدند', 'putting out': 'خاموش کردن', 'aside': 'کنار', 'leave': 'ترک کردن' },
tasks: [ "3. Underline all 'past progressive verbs'." ]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer. Use appropriate sentence stress and intonation.',
questions: [ 'What was Sajjad doing in the park?', 'Did Sajjad put out the fire?', 'Were the firefighters working slowly?' ]
}
},
workbook: [
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'Who is a scientist?',
passage: "The world around us is full of amazing things. Knowing this beautiful world is very interesting for humans. One group of people who study the world are scientists. A scientist studies nature, animals, or people. Scientists work hard and do research to solve problems, find facts or invent new things. Scientists learn about the world by observing and experimenting. There are different types of scientists. Some of them study plants, earth, seas, or animals. Others study people and how they behave and learn. Some scientists like to study history or languages. Others are interested in making new things. They want to make people's lives easier. Some scientists become very rich and famous. Many people around the world may remember their names and faces. But this is not what they call 'success'. They feel successful when they solve problems and find answers to their questions.",
passageFa: 'دنیای اطراف ما پر از چیزهای شگفت‌انگیز است. شناختن این دنیای زیبا برای انسان‌ها بسیار جالب است. یک گروه از مردم که دنیا را مطالعه می‌کنند، دانشمندان هستند. یک دانشمند طبیعت، حیوانات یا مردم را مطالعه می‌کند. دانشمندان سخت کار می‌کنند و تحقیق می‌کنند تا مشکلات را حل کنند، واقعیت‌ها را بیابند یا چیزهای جدید اختراع کنند. دانشمندان با مشاهده و آزمایش درباره دنیا می‌آموزند. انواع مختلفی از دانشمندان وجود دارد. برخی گیاهان، زمین، دریاها یا حیوانات را مطالعه می‌کنند. برخی دیگر مردم و رفتار و یادگیری آن‌ها را. بعضی دانشمندان دوست دارند تاریخ یا زبان مطالعه کنند. برخی به ساختن چیزهای جدید علاقه دارند. می‌خواهند زندگی مردم را آسان‌تر کنند. بعضی دانشمندان خیلی ثروتمند و مشهور می‌شوند. بسیاری از مردم دنیا ممکن است نام و چهره‌شان را به یاد بیاورند. اما این چیزی نیست که آن‌ها «موفقیت» می‌نامند. آن‌ها وقتی احساس موفقیت می‌کنند که مشکلات را حل کنند و پاسخ سؤالاتشان را بیابند.',
glossary: {
'amazing': 'شگفت‌انگیز', 'scientists': 'دانشمندان', 'study': 'مطالعه کردن', 'nature': 'طبیعت',
'research': 'تحقیق', 'solve': 'حل کردن', 'facts': 'واقعیت‌ها', 'invent': 'اختراع کردن',
'observing': 'مشاهده', 'experimenting': 'آزمایش', 'behave': 'رفتار کردن', 'famous': 'مشهور',
'success': 'موفقیت', 'successful': 'موفق', 'remember': 'به یاد آوردن'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Only scientists like to study the world.', answer: false },
{ q: 'There are different types of scientists.', answer: true },
{ q: "Scientists think 'success' means becoming rich.", answer: false }
]
},
{
type: 'short-answer',
title: 'B. Answer the following questions.',
questions: [
{ q: 'How do scientists learn about the world?', sampleAnswer: 'By observing and experimenting.' },
{ q: 'What does an inventor do?', sampleAnswer: 'An inventor makes/invents new things.' },
{ q: 'Do you like to do research about the world?', sampleAnswer: '(your own answer)' }
]
}
]
},
{
part: 'Part II',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'unscramble-nouns',
title: 'A. Unscramble the following sentences.',
items: [
{ scrambled: 'Shirin / was doing research / when / she / found / a new medicine', answer: 'Shirin was doing research when she found a new medicine.', group: '1' },
{ scrambled: 'they / were trying hard / to save / the injured animal', answer: 'They were trying hard to save the injured animal.', group: '2' },
{ scrambled: 'Hassan / worked / as a translator / when / he / was studying / English / at university', answer: 'Hassan worked as a translator when he was studying English at university.', group: '3' },
{ scrambled: 'Reza / his mother / called him / when / he / was studying / his Arabic book', answer: 'Reza was studying his Arabic book when his mother called him.', group: '4' }
],
groups: ['1', '2', '3', '4']
},
{
type: 'short-answer',
title: 'B. Look at the photo (taken yesterday at 8). Complete the sentences with past progressive.',
questions: [
{ q: 'My father was reading a newspaper. (example)', sampleAnswer: 'My father was reading a newspaper.' },
{ q: 'My mother _____ (was ...).', sampleAnswer: 'My mother was cooking dinner.' },
{ q: 'My sister was _____.', sampleAnswer: 'My sister was doing her homework.' },
{ q: 'My brother was _____.', sampleAnswer: 'My brother was watching TV.' },
{ q: 'My grandfather was _____.', sampleAnswer: 'My grandfather was sleeping.' }
]
},
{
type: 'short-answer',
title: 'C. Write what you were doing at the given times.',
questions: [
{ q: 'Yesterday afternoon, _____', sampleAnswer: 'Yesterday afternoon, I was ...' },
{ q: 'Last week at this moment, _____', sampleAnswer: 'Last week at this moment, I was ...' },
{ q: 'This morning at 5, _____', sampleAnswer: 'This morning at 5, I was sleeping.' },
{ q: 'When my mother was cooking dinner last night, _____', sampleAnswer: 'I was ...' }
]
},
{
type: 'fill-going-to',
title: 'D. Complete the text with appropriate self-pronouns.',
text: "Yesterday I was all alone. I was cleaning the house. As no one was helping me, I was doing everything [1]. It was very difficult. I remember how my mother cleaned the house [2] when we didn't help her. I was still working when my mother came in. I was cleaning the kitchen. She asked: \"Babak, did you do that [3]?\" I answered: \"Yes, mom. I did it [4].\" She said, \"Thank you, dear. But now don't do that [5]. Let's do everything together.\"",
blanks: [
{ num: 1, answer: 'myself' },
{ num: 2, answer: 'herself' },
{ num: 3, answer: 'yourself' },
{ num: 4, answer: 'myself' },
{ num: 5, answer: 'yourself' }
]
}
]
},
{
part: 'Part III',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'match-columns',
title: 'A. Read the descriptions and find the word.',
pairs: [
{ a: 'a person who does research and finds facts', b: 'scientist', letter: 'b' },
{ a: 'to stop doing something', b: 'quit', letter: 'c' },
{ a: 'something that you believe', b: 'belief', letter: 'd' },
{ a: 'to grow or change into a better form', b: 'develop', letter: 'e' },
{ a: 'to find an answer to a problem', b: 'solve', letter: 'a' }
]
},
{
type: 'odd-one-out',
title: 'B. One odd out.',
items: [
{ options: ['find', 'solve', 'invent', 'attend'], odd: 3 },
{ options: ['grow up', 'develop', 'destroy', 'increase'], odd: 2 },
{ options: ['inventor', 'researcher', 'farmer', 'thinker'], odd: 2 },
{ options: ['observatory', 'library', 'laboratory', 'memory'], odd: 3 },
{ options: ['powerful', 'weak', 'strong', 'energetic'], odd: 1 }
]
},
{
type: 'match-columns',
title: 'C. Match columns A and B.',
pairs: [
{ a: 'become', b: 'successful', letter: 'd' },
{ a: 'build', b: 'a laboratory', letter: 'b' },
{ a: 'attend', b: 'an interview', letter: 'a' },
{ a: 'translate', b: 'a poem', letter: 'c' }
]
},
{
type: 'group-words',
title: 'D. Put these famous people in four groups (Poet / Inventor / Translator / Writer).',
words: ['Wright Brothers', 'Parvin Etesami', 'Mohammad Ghazi', 'Victor Hugo', 'Shahriyar', 'Mahmood Hakimi', 'Tahereh Saffarzadeh', 'Alexander Graham Bell'],
groups: ['Poet', 'Inventor', 'Translator/Writer']
},
{
type: 'fill-words',
title: 'E. Fill in the blanks with the given words. (believe, grow up, inventions, bulb, successful)',
wordBank: ['believe', 'grow up', 'inventions', 'bulb', 'successful'],
items: [
{ sentence: '1. The airplane is one of the greatest _____ of human.', answer: 'inventions' },
{ sentence: '2. Some scientists are very _____ in their lives.', answer: 'successful' },
{ sentence: '3. When children _____ their personality changes.', answer: 'grow up' },
{ sentence: '4. Do you _____ what she was saying about Mars?', answer: 'believe' },
{ sentence: '5. He changed the _____ to have more light in the room.', answer: 'bulb' }
]
},
{
type: 'fill-words',
title: 'F. Use appropriate nouns with the following verbs.',
wordBank: ['research/experiment', 'work/smoking', 'a problem', 'a poem/book', 'the world'],
items: [
{ sentence: '1. do _____', answer: 'research / an experiment' },
{ sentence: '2. give up _____', answer: 'smoking / working' },
{ sentence: '3. solve _____', answer: 'a problem' },
{ sentence: '4. translate _____', answer: 'a poem / a book' },
{ sentence: '5. change _____', answer: 'the world / a bulb' }
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
title: 'Say the sentences with emphatic stress over the appropriate element.',
items: [
'I was reading Arabic. (Not Amir → stress on I)',
'I was reading Arabic. (Not writing → stress on reading)',
'I was reading Arabic. (Not English → stress on Arabic)'
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
type: 'unscramble-nouns',
title: 'A. Complete the spelling of words.',
items: [
{ scrambled: 'r _ m _ mb _ r', answer: 'remember', group: 'verb' },
{ scrambled: 'at _ e _ d', answer: 'attend', group: 'verb' },
{ scrambled: 'b u _ _ d', answer: 'build', group: 'verb' },
{ scrambled: 'in _ e _ t', answer: 'invent', group: 'verb' },
{ scrambled: 'cr _ _ te', answer: 'create', group: 'verb' },
{ scrambled: 'b _ l _ _ ve', answer: 'believe', group: 'verb' }
],
groups: ['verb']
},
{
type: 'match-columns',
title: 'B. Complete the word family chart (Verb ↔ Noun).',
pairs: [
{ a: 'invent', b: 'inventor', letter: 'a' },
{ a: 'build', b: 'building', letter: 'b' },
{ a: 'know', b: 'knowledge', letter: 'c' },
{ a: 'think', b: 'thinker', letter: 'd' },
{ a: 'believe', b: 'belief', letter: 'e' },
{ a: 'translate', b: 'translation', letter: 'f' }
]
},
{
type: 'singular-plural-task',
title: 'C. Read the text. Find nouns, adjectives and verbs.',
instructions: [
'Read the text about Maryam (snowing day). Find all nouns, verbs, and adjectives and write them in the appropriate columns.',
'Noun / Verb / Adjective'
]
}
]
}
],
quiz: [
{ q: 'Newton _____ under a tree when an apple hit his head.', qFa: 'نیوتن زیر درخت نشسته بود که سیبی به سرش خورد.', options: ['was sitting', 'sat', 'sits', 'is sitting'], correct: 0 },
{ q: 'They _____ working when the teacher came in.', qFa: 'وقتی معلم وارد شد، آن‌ها در حال کار بودند.', options: ['were', 'was', 'are', 'is'], correct: 0 },
{ q: 'Marie Curie found uranium _____.', qFa: 'ماری کوری خودش اورانیوم را کشف کرد.', options: ['herself', 'himself', 'itself', 'myself'], correct: 0 },
{ q: 'Edison _____ the first light bulb.', qFa: 'ادیسون اولین لامپ را اختراع کرد.', options: ['invented', 'developed', 'solved', 'attended'], correct: 0 },
{ q: 'No success is possible without _____ work.', qFa: 'هیچ موفقیتی بدون کار سخت ممکن نیست.', options: ['hard', 'weak', 'easy', 'energetic'], correct: 0 },
{ q: 'Scientists do _____ to solve problems.', qFa: 'دانشمندان برای حل مشکلات تحقیق می‌کنند.', options: ['research', 'belief', 'success', 'flu'], correct: 0 }
]
},
{
num: 4,
title: 'Traveling the World',
titleFa: 'سفر به دور دنیا',
function: 'Traveling the World',
quote: { en: 'Travel in the Earth and see how He makes the first creation', ref: 'Al-Ankabut 20', fa: 'در زمین سفر کنید و بنگرید که خداوند چگونه آفرینش را آغاز کرد.' },
getReady: {
titleFa: 'آماده شو',
parts: [
{
label: 'Part One',
instruction: 'A. Match the pictures with sentences.',
instructionFa: 'تصاویر را با جمله‌ها تطبیق بده.',
type: 'match-phrases',
items: [
{ id: 'a', phrase: 'Everyone needs this to travel abroad.', fa: 'همه برای سفر به خارج به این نیاز دارند. (گذرنامه)', image: 'gr-passport.jpg' },
{ id: 'b', phrase: 'Asia has many tourist attractions.', fa: 'آسیا جاذبه‌های گردشگری زیادی دارد. (جاذبه)', image: 'gr-attraction.jpg' },
{ id: 'c', phrase: 'You may go to this place to buy air or train tickets.', fa: 'برای خرید بلیط هواپیما یا قطار به این مکان می‌روی. (آژانس)', image: 'gr-agency.jpg' },
{ id: 'd', phrase: 'You can check the destinations on this at the airport.', fa: 'در فرودگاه مقصدها را روی این بررسی می‌کنی. (تابلوی اطلاعات)', image: 'gr-board.jpg' }
],
followup: 'B. Which place do you want to visit? Do you know where they are located? (Iran, Italy, Spain, France, Egypt, Brazil)',
followupFa: 'دوست داری کدام مکان را ببینی؟ می‌دانی کجا قرار دارند؟ (ایران، ایتالیا، اسپانیا، فرانسه، مصر، برزیل)',
followupType: 'two-groups',
groupLabels: ['Country', 'Continent (قاره)']
},
{
label: 'Part Two',
instruction: 'A. Match the pictures with the words.',
instructionFa: 'تصاویر را با کلمات تطبیق بده.',
type: 'match-words',
items: [
{ word: 'pilgrims', fa: 'زائران', image: 'gr-pilgrims.jpg' },
{ word: 'booklet', fa: 'دفترچه', image: 'gr-booklet.jpg' },
{ word: 'sites', fa: 'مکان‌ها/محوطه‌ها', image: 'gr-sites.jpg' },
{ word: 'vacation', fa: 'تعطیلات', image: 'gr-vacation.jpg' }
],
followup: 'B. Complete the sentences with the above words. (vacation / booklet / sites / pilgrims)',
followupFa: 'جمله‌ها را با کلمات بالا کامل کن: 1) summer ___ in Yasooj  2) information ___  3) historical ___  4) The ___ came to Imam Reza Holy Shrine.',
followupType: 'two-groups',
groupLabels: ['Sentence', 'Word']
}
]
},
conversation: {
subtitle: 'At a Travel Agency',
subtitleFa: 'در یک آژانس مسافرتی',
desc: 'دیگو، گردشگری اسپانیایی، برای تعطیلات تابستانش برنامه‌ریزی می‌کند و با کارلوس سباتو، یک مشاور سفر در مادرید، صحبت می‌کند.',
newWordsHint: ['plan', 'agent', 'choice', 'probably', 'hospitable', 'suggestion'],
lines: [
{ speaker: 'Diego', role: 'student', en: 'Excuse me, sir! I am planning for my summer vacation.', fa: 'ببخشید آقا! دارم برای تعطیلات تابستانم برنامه‌ریزی می‌کنم.' },
{ speaker: 'Carlos', role: 'teacher', en: 'How can I help you?', fa: 'چطور می‌تونم کمکتون کنم؟' },
{ speaker: 'Diego', role: 'student', en: 'Actually I want to visit Asia, but I am not sure about my destination. Do you have any suggestion?', fa: 'راستش می‌خوام آسیا رو ببینم، ولی مطمئن نیستم مقصدم کجا باشه. پیشنهادی دارید؟' },
{ speaker: 'Carlos', role: 'teacher', en: 'Well, you may have some choices. You can visit China. It is famous for the Great Wall.', fa: 'خب، چند تا گزینه دارید. می‌تونید چین رو ببینید. به‌خاطر دیوار بزرگش مشهوره.' },
{ speaker: 'Diego', role: 'student', en: 'Yes, but I was in Beijing two years ago.', fa: 'بله، ولی دو سال پیش پکن بودم.' },
{ speaker: 'Carlos', role: 'teacher', en: 'What about India? In fact, the Taj Mahal is a popular destination, but it is hot in summer. Probably Iran is the best choice.', fa: 'هند چطور؟ در واقع تاج‌محل مقصد محبوبیه، ولی تابستون گرمه. احتمالاً ایران بهترین گزینه‌ست.' },
{ speaker: 'Diego', role: 'student', en: "I heard Iran is a great and beautiful country, but I don't know much about it.", fa: 'شنیدم ایران کشور بزرگ و زیباییه، ولی زیاد درباره‌ش نمی‌دونم.' },
{ speaker: 'Carlos', role: 'teacher', en: 'Well, Iran is a four-season country. It has many historical sites and amazing nature. Also, its people are very kind and hospitable.', fa: 'خب، ایران کشوری چهارفصله. مکان‌های تاریخی زیاد و طبیعت شگفت‌انگیزی داره. مردمش هم خیلی مهربون و مهمان‌نوازن.' },
{ speaker: 'Diego', role: 'student', en: 'It seems a suitable choice. But how can I get more information about Iran?', fa: 'گزینه مناسبی به نظر می‌رسه. ولی چطور می‌تونم اطلاعات بیشتری درباره ایران بگیرم؟' },
{ speaker: 'Carlos', role: 'teacher', en: 'You can check this booklet or may see our website.', fa: 'می‌تونید این دفترچه رو ببینید یا به وب‌سایت ما سر بزنید.' }
],
questions: [
{ q: 'What is China famous for?', fa: 'چین به‌خاطر چی مشهوره؟' },
{ q: 'Does Diego like traveling?', fa: 'دیگو سفر رو دوست داره؟' },
{ q: 'Where do you want to go for your vacation?', fa: 'برای تعطیلاتت کجا می‌خوای بری؟' }
]
},
newWords: {
lookRead: [
{ en: 'Mehrabad is one of the first international {airports} of Iran.', fa: 'مهرآباد یکی از اولین {فرودگاه‌های} بین‌المللی ایران است.', image: 'nw-airport.jpg' },
{ en: 'There are more than 100 {pyramids} in Egypt.', fa: 'بیش از ۱۰۰ {هرم} در مصر وجود دارد.', image: 'nw-pyramids.jpg' },
{ en: 'Ancient {wind towers} of Iran are attractive to tourists.', fa: '{بادگیرهای} باستانی ایران برای گردشگران جذاب‌اند.', image: 'nw-windtower.jpg' },
{ en: 'Around one {billion} people live in India.', fa: 'حدود یک {میلیارد} نفر در هند زندگی می‌کنند.', image: 'nw-billion.jpg' },
{ en: 'Camels can travel across hot and dry {deserts} with little food and water.', fa: 'شترها می‌توانند با غذا و آب کم از {بیابان‌های} گرم و خشک عبور کنند.', image: 'nw-desert.jpg' }
],
definitions: [
{ word: 'entertainment', def: 'activities that people enjoy', fa: 'سرگرمی', example: 'He plays the piano only for his {entertainment}.' },
{ word: 'domestic', def: 'relating to one country', fa: 'داخلی', example: '{Domestic} flights are cheaper than international flights.' },
{ word: 'culture', def: 'the way of life, especially the beliefs and behavior of a group of people', fa: 'فرهنگ', example: 'Alice is studying Persian language and {culture}.' },
{ word: 'range', def: 'a set of similar things', fa: 'گستره / مجموعه', example: 'This shop sells a wide {range} of garden fruits.' }
]
},
reading: {
passageTitle: 'Iran: A True Paradise',
passageTitleFa: 'ایران: بهشتی واقعی',
paragraphs: [
{ en: 'Every year, about one billion tourists travel around the world. Tourism is traveling for entertainment, health, sport or learning about the culture of a nation. Tourism can be domestic or international. Domestic tourists travel to different parts of their own country. International tourists travel abroad.', fa: 'هر سال حدود یک میلیارد گردشگر به دور دنیا سفر می‌کنند. گردشگری یعنی سفر برای سرگرمی، سلامتی، ورزش یا یادگیری درباره فرهنگ یک ملت. گردشگری می‌تواند داخلی یا بین‌المللی باشد. گردشگران داخلی به نقاط مختلف کشور خودشان سفر می‌کنند. گردشگران بین‌المللی به خارج سفر می‌کنند.' },
{ en: 'Some countries attract a lot of tourists every year. Egypt is one of the oldest countries of Africa. It is famous for its wonderful pyramids. France, Italy and Spain are three beautiful European countries. They attract many tourists from other parts of the world. Brazil, Peru and Chile are in South America. They are famous for their ancient history and amazing nature.', fa: 'برخی کشورها هر سال گردشگران زیادی جذب می‌کنند. مصر یکی از قدیمی‌ترین کشورهای آفریقاست. به‌خاطر اهرام شگفت‌انگیزش مشهور است. فرانسه، ایتالیا و اسپانیا سه کشور زیبای اروپایی‌اند. گردشگران زیادی از نقاط دیگر دنیا جذب می‌کنند. برزیل، پرو و شیلی در آمریکای جنوبی‌اند. به‌خاطر تاریخ باستانی و طبیعت شگفت‌انگیزشان مشهورند.' },
{ en: 'In Asia, Iran is a great destination for tourists. This beautiful country is a true paradise for people of the world. Each year, many people from all parts of the world visit Iran\'s attractions. Iran is a four-season country and tourists can find a range of activities from skiing to desert touring in different parts of the country. Many Muslims also travel to Iran and go to holy shrines in Mashhad, Qom and Shiraz. Iranian people are hospitable and kind to travelers and tourists.', fa: 'در آسیا، ایران مقصد بزرگی برای گردشگران است. این کشور زیبا بهشتی واقعی برای مردم دنیاست. هر سال بسیاری از مردم از همه نقاط دنیا از جاذبه‌های ایران بازدید می‌کنند. ایران کشوری چهارفصل است و گردشگران می‌توانند گستره‌ای از فعالیت‌ها از اسکی تا بیابان‌گردی را در نقاط مختلف کشور بیابند. بسیاری از مسلمانان نیز به ایران سفر می‌کنند و به حرم‌های مقدس در مشهد، قم و شیراز می‌روند. مردم ایران با مسافران و گردشگران مهمان‌نواز و مهربان‌اند.' }
],
glossary: {
'tourists': 'گردشگران', 'Tourism': 'گردشگری', 'entertainment': 'سرگرمی', 'culture': 'فرهنگ',
'nation': 'ملت', 'domestic': 'داخلی', 'international': 'بین‌المللی', 'abroad': 'خارج از کشور',
'attract': 'جذب کردن', 'oldest': 'قدیمی‌ترین', 'pyramids': 'اهرام', 'European': 'اروپایی',
'ancient': 'باستانی', 'destination': 'مقصد', 'paradise': 'بهشت', 'attractions': 'جاذبه‌ها',
'four-season': 'چهارفصل', 'range': 'گستره', 'skiing': 'اسکی', 'desert': 'بیابان',
'holy shrines': 'حرم‌های مقدس', 'hospitable': 'مهمان‌نواز', 'billion': 'میلیارد'
},
comprehension: [
{
type: 'choose',
title: 'A. Choose the best answer.',
items: [
{ q: 'Which one is a four-season country?', options: ['Brazil', 'Iran', 'Egypt'], correct: 1 },
{ q: 'South American countries are famous for _____.', options: ['amazing nature', 'delicious food', 'traditional ceremonies'], correct: 0 },
{ q: 'In which continent can we visit the ancient pyramids?', options: ['Asia', 'Africa', 'Europe'], correct: 1 }
]
},
{
type: 'truefalse',
title: 'B. True / False',
items: [
{ q: 'Peru and Chile are historical countries.', answer: true },
{ q: 'Holy shrines in Iran are destinations only for domestic tourists.', answer: false },
{ q: 'All countries have tourist attractions for international travelers.', answer: false }
]
},
{
type: 'match-halves',
title: 'C. Match two halves.',
pairs: [
{ left: 'When a country is a four-season one', right: 'people can do both summer and winter activities at the same time.', letter: 'c' },
{ left: 'Many tourists travel to Egypt every year', right: 'to visit the wonderful pyramids.', letter: 'b' },
{ left: 'Both history and nature', right: 'make South America an attractive destination for tourists.', letter: 'd' }
],
distractor: { letter: 'a', right: 'nobody likes to travel there.' }
}
]
},
grammar: {
title: 'Grammar — Modals',
titleFa: 'دستور زبان — افعال کمکی وجهی',
noteText: 'این یک <strong>فعل وجهی (Modal)</strong> است: قبل از فعل اصلی می‌آید و فعل بعدش همیشه ساده است (بدون to و بدون s).',
noteMap: {
"must not": "<strong>must not</strong> — <strong>منع/ممنوعیت</strong>: نباید (کاری انجام دهی). قوی‌تر از shouldn't.",
"may not": "<strong>may not</strong> — منفی <strong>اجازه/احتمال</strong>: ممکن است نه / اجازه نداری.",
"can't": "<strong>can't (cannot)</strong> — منفی <strong>توانایی/امکان</strong>: نمی‌توانی.",
"cannot": "<strong>cannot (can't)</strong> — منفی <strong>توانایی</strong>: نمی‌توانی.",
"shouldn't": "<strong>shouldn't (should not)</strong> — <strong>توصیه منفی</strong>: بهتر است که نکنی.",
"should not": "<strong>should not (shouldn't)</strong> — <strong>توصیه منفی</strong>: نباید (بهتر است نکنی).",
"must": "<strong>must</strong> — <strong>اجبار/الزام</strong>: باید (کاری انجام دهی). فعل بعدش ساده است.",
"should": "<strong>should</strong> — <strong>توصیه/نصیحت</strong>: بهتر است / باید. فعل بعدش ساده است.",
"can": "<strong>can</strong> — <strong>توانایی یا امکان</strong>: می‌توانی. فعل بعدش ساده است.",
"may": "<strong>may</strong> — <strong>اجازه یا احتمال</strong>: ممکن است / اجازه داری. فعل بعدش ساده است.",
"Can": "<strong>Can</strong> — سؤال درباره <strong>توانایی/امکان</strong>: <code>Can + فاعل + فعل ساده؟</code>",
"May": "<strong>May</strong> — سؤال درباره <strong>اجازه</strong>: <code>May I + فعل ساده؟</code>",
"Must": "<strong>Must</strong> — سؤال درباره <strong>اجبار</strong>: <code>Must + فاعل + فعل ساده؟</code>",
"Should": "<strong>Should</strong> — سؤال درباره <strong>توصیه</strong>: <code>Should + فاعل + فعل ساده؟</code>",
"in": "<strong>حرف اضافه (Preposition)</strong>: <code>in</code> برای ماه‌ها، فصل‌ها، سال‌ها، و مکان‌های بزرگ (شهر/کشور/قاره).",
"at": "<strong>حرف اضافه</strong>: <code>at</code> برای ساعت دقیق و زمان‌های خاص (at 8, at night, at noon).",
"on": "<strong>حرف اضافه</strong>: <code>on</code> برای روزها، تاریخ‌ها، و روی سطح (on Friday, on the table).",
"next to": "<strong>حرف اضافه مکان</strong>: <code>next to</code> = کنارِ.",
"in front of": "<strong>حرف اضافه مکان</strong>: <code>in front of</code> = جلوی / روبه‌روی."
},
readTexts: {
title: 'A. Read the following texts.',
texts: [
{ en: 'When people are going abroad, they {must} do many things. They {must} get passports and visas. Most often, they {should} go to the Police to get passports. They {should} go to the embassy of foreign countries to get visas. They {can} do that by buying books, reading booklets, or visiting websites. They {may} buy tickets and book hotels online. When everything is ready, they {can} leave the country safely.', fa: 'وقتی مردم به خارج می‌روند، باید کارهای زیادی انجام دهند. باید گذرنامه و ویزا بگیرند. اغلب باید برای گرفتن گذرنامه به پلیس بروند. باید برای ویزا به سفارت کشورهای خارجی بروند. می‌توانند با خریدن کتاب، خواندن دفترچه یا بازدید از وب‌سایت‌ها این کار را بکنند. ممکن است بلیط بخرند و هتل را آنلاین رزرو کنند. وقتی همه‌چیز آماده شد، می‌توانند با خیال راحت کشور را ترک کنند.' },
{ en: 'As a tourist, we {should} be careful about our behavior in a foreign country. We {must not} break any rule if we want a safe trip. We {may not} like a part of the host\'s culture, but we {should} be polite. We {should not} say bad things about their food or ceremonies. We {must not} hurt animals or plants. We {should not} write anything on buildings.', fa: 'به‌عنوان گردشگر، باید مراقب رفتارمان در کشور خارجی باشیم. اگر سفری امن می‌خواهیم نباید هیچ قانونی را بشکنیم. ممکن است بخشی از فرهنگ میزبان را دوست نداشته باشیم، اما باید مؤدب باشیم. نباید درباره غذا یا مراسمشان حرف بد بزنیم. نباید به حیوانات یا گیاهان آسیب بزنیم. نباید روی ساختمان‌ها چیزی بنویسیم.' }
]
},
explanation: [
'افعال وجهی (Modals) شامل <strong>can, may, must, should</strong> هستند. هر کدام معنای متفاوتی دارند:',
'<code>can</code> = توانایی/امکان · <code>may</code> = اجازه/احتمال · <code>must</code> = اجبار · <code>should</code> = توصیه',
'بعد از modal همیشه <strong>فعل ساده</strong> می‌آید (بدون to، بدون s، بدون ed).',
'منفی: <code>cannot/can\'t · may not · must not · should not/shouldn\'t</code>'
],
tablesTitle: 'B. Read the following examples. Compare their meanings.',
tables: [
{
title: 'Affirmative (مثبت)',
headers: ['Subject', 'Modal', 'Verb'],
rows: [
['I / You / He / She / We / They', 'can', 'speak English.'],
['', 'may', 'watch TV.'],
['', 'must', 'get a passport first.'],
['', 'should', 'be careful in a foreign country.']
],
examples: [
{ en: 'You {must} drive carefully.', fa: 'باید با احتیاط رانندگی کنی.' },
{ en: 'The tourists {may} stay in Iran for two more days.', fa: 'ممکن است گردشگران دو روز دیگر در ایران بمانند.' },
{ en: 'The translator {can} speak four languages.', fa: 'مترجم می‌تواند چهار زبان صحبت کند.' },
{ en: "Everyone {should} respect other people's culture.", fa: 'همه باید به فرهنگ دیگران احترام بگذارند.' }
]
},
{
title: 'Negative (منفی)',
headers: ['Subject', 'Modal + not', 'Verb'],
rows: [
['I / You / He / She / We / They', "cannot (can't)", 'speak Japanese.'],
['', 'may not', 'watch TV.'],
['', 'must not', 'get a passport first.'],
['', "should not (shouldn't)", 'be careless in a foreign country.']
],
examples: [
{ en: 'Children {must not} eat fast food. It is not good for their health.', fa: 'بچه‌ها نباید فست‌فود بخورند. برای سلامتی‌شان خوب نیست.' },
{ en: 'Please help me. I {cannot} swim.', fa: 'لطفاً کمکم کن. نمی‌توانم شنا کنم.' }
]
},
{
title: 'Interrogative (سؤالی)',
headers: ['Modal', 'Subject', 'Verb'],
rows: [
['Can', 'you', 'speak Korean?'],
['May', 'he', 'watch TV?'],
['Must', 'she', 'get a passport first?'],
['Should', 'we / they', 'be careful in a foreign country?']
],
examples: [
{ en: '{Should} travelers protect nature?', fa: 'آیا گردشگران باید از طبیعت محافظت کنند؟' },
{ en: '{May} I sit down?', fa: 'اجازه هست بنشینم؟' }
]
}
],
notes: [
"C. Tell your teacher how 'can, may, must, and should' are used. How are their meanings different?",
"D. Read the 'Conversation' and underline all 'modals'."
],
practice: {
title: 'E. Use the appropriate modal to complete the following sentences.',
instruction: 'فعل وجهی مناسب را انتخاب کن.',
items: [
{ sentence: '1. When people get the flu, they _____ visit a doctor.', options: ['must', 'can'], correct: 0 },
{ sentence: '2. There are many clouds in the sky. It _____ rain.', options: ['may', 'can'], correct: 0 },
{ sentence: '3. I like to travel to Spain. I _____ learn Spanish.', options: ['should', 'may'], correct: 0 },
{ sentence: '4. He _____ do more exercises. His heart is very weak.', options: ['must not', 'may not'], correct: 0 },
{ sentence: '5. You _____ listen to loud music. It hurts your ears.', options: ["shouldn't", 'cannot'], correct: 0 }
]
},
friendWork: {
title: 'F. Pair up and ask and answer the following questions.',
partA: { instruction: 'با هم بپرسید و پاسخ دهید:', items: ['Can you buy air tickets online?', 'May I use your pencil?', 'Should your friend help you with your lessons?', 'Can you swim?', 'Must we finish our English book before Khordad?'] },
partB: { instruction: 'پاسخ‌ها با modal:', items: ['Yes, I can. / No, I can\'t.', 'Yes, you may. / No, you may not.', 'Yes, he should.'] }
},
goingTo: {
title: 'Prepositions (حروف اضافه)',
note: '<strong>حرف اضافه (Preposition)</strong>: کلمه‌ای که رابطه‌ی زمان یا مکان را نشان می‌دهد. <code>in</code> / <code>at</code> / <code>on</code> هر کدام کاربرد خاص دارند.',
readTitle: "A. Read the following examples with 'prepositions'.",
examples: [
{ en: 'I will travel {in} summer. The flight is {at} 8 o\'clock {on} Friday.', fa: 'تابستان سفر می‌کنم. پرواز ساعت ۸ روز جمعه است.' },
{ en: 'Tehran is {in} Asia. The booklet is {on} the table {next to} the window.', fa: 'تهران در آسیاست. دفترچه روی میز کنار پنجره است.' },
{ en: 'We will meet {at} noon {in} front of the station.', fa: 'ظهر جلوی ایستگاه همدیگر را می‌بینیم.' }
],
table: {
headers: ['Preposition', 'Use', 'Examples'],
rows: [
['in', 'months, seasons, years, big places', 'in September / in summer / in 1395 / in Asia'],
['at', 'exact times, special moments', 'at 8 o\'clock / at night / at noon'],
['on', 'days, dates, surfaces', 'on Friday / on vacation / on the table'],
['next to / in front of', 'place', 'next to the bank / in front of the station']
]
}
}
},
listeningSpeaking: {
titleFa: 'شنیدن و گفتن',
strategyTitle: 'Speaking Strategy — Asking about obligations/possibilities',
strategyTitleFa: 'راهبرد گفتاری — پرسش درباره اجبارها و امکان‌ها',
strategyDesc: "A. You may use 'modals' (can, may, should, must) to ask and answer about what you can/must/should/may (not) do.",
patterns: [
{ q: 'May I use your camera for my trip?', a: "Honestly, no. I need it this week. You should buy a camera for yourself." },
{ q: 'Can you help me find a hotel?', a: 'Yes, I can. You may also ask a travel agency.' }
],
patternsList: [
'May I leave the class? — Yes, you may.',
'Should they be more careful? — Yes, they should.',
'Must we drive fast? — No, you must not.',
'Can he speak French? — No, he can\'t.'
],
listenComplete: {
title: 'B. Listen to the following conversations and complete the sentences.',
conversations: [
{ num: 1, items: ['The man .....................', 'Who is coming? .....................'] },
{ num: 2, items: ['The girl must .....................', 'What should she do? .....................'] }
]
},
pairWork: {
title: 'Pair up and ask at least two questions about what your friend can (not) / must (not) do.',
box1: { label: 'Activities', verbs: ['play football', 'do homework', 'help mother', 'speak Arabic', 'study hard'] },
box2: { label: 'May / Should', verbs: ['use a pencil', 'read a book', 'call in the evening'] }
}
},
pronunciation: {
title: 'Pronunciation — Contrastive Stress',
titleFa: 'تلفظ — تکیه تقابلی',
rule: 'When you want to contrast two things, you say both of them with emphasis. (وقتی می‌خواهی دو چیز را مقایسه/تقابل کنی، هر دو را با تأکید می‌گویی.)',
intonationGuide: {
rising: 'تکیهٔ <strong>تقابلی (Contrastive Stress)</strong>: وقتی دو گزینه را با هم مقایسه می‌کنی، هر دو کلمه را با تأکید می‌گویی. مثلاً: «Do you leave on <strong>Tuesday</strong> or <strong>Thursday</strong>؟»'
},
examplesTitle: 'A. Listen to the sentences. Notice how speakers contrast the ideas.',
examples: [
{ en: 'Were you doing research or studying?', a: '(contrast: research / studying)' },
{ en: 'Who broke the window? Ali or Amir?', a: '(contrast: Ali / Amir)' },
{ en: 'Mom, should we help you or dad?', a: '(contrast: you / dad)' },
{ en: "Was Jim's car white or blue?", a: '(contrast: white / blue)' }
],
punctuation: {
title: 'B. Underline the two words that have contrastive stress.',
text: '1. Do you leave on Tuesday or Thursday? / 2. Is the Taj Mahal in India or China? / 3. Should I read the booklet or the website?',
answer: 'کلمات متقابل با تأکید: 1) Tuesday ↔ Thursday  2) India ↔ China  3) booklet ↔ website'
}
},
writing: {
title: 'Writing — Adverbs',
titleFa: 'نوشتن — قیدها',
sections: [
{
type: 'lesson-noun',
title: 'Adverb',
intro: 'An adverb mostly gives more information about the verb. Some adverbs tell you how something happens. These "adverbs of manner" often end in -ly.',
introFa: 'قید بیشتر درباره فعل اطلاعات می‌دهد. برخی قیدها می‌گویند کاری چگونه انجام می‌شود. این «قیدهای حالت» اغلب به -ly ختم می‌شوند.',
categories: [
{ label: 'adjective → adverb', examples: ['easy → easily', 'careful → carefully', 'happy → happily', 'polite → politely'] },
{ label: 'In sentences', examples: ['She drives carefully.', 'She spoke happily.', 'He talks politely.'] }
]
},
{
type: 'circle-nouns-task',
title: 'A. Circle the verbs and underline the adverbs. Then link adverbs to the verbs they describe.',
items: [
{ sentence: 'Nastaran puts her books neatly inside the desk.', nouns: ['puts', 'neatly'] },
{ sentence: 'My uncle painted my room nicely.', nouns: ['painted', 'nicely'] },
{ sentence: 'The firefighters went into the burning house bravely.', nouns: ['went', 'bravely'] },
{ sentence: 'She looked at the child and asked politely.', nouns: ['looked', 'asked', 'politely'] },
{ sentence: 'The students were waiting patiently for the bus.', nouns: ['waiting', 'patiently'] },
{ sentence: 'Soheil never talks to his parents rudely.', nouns: ['talks', 'rudely'] }
]
},
{
type: 'lesson-plural',
title: 'How to Make -ly Adverbs',
intro: 'Most adverbs are formed by adding -ly to an adjective (slow → slowly). But there are spelling rules:',
introFa: 'بیشتر قیدها با افزودن -ly به صفت ساخته می‌شوند، اما قواعد املایی دارند:',
regular: [['quick', 'quickly'], ['real', 'really'], ['slow', 'slowly'], ['polite', 'politely']],
irregular: [['angry → -ily', 'angrily'], ['easy → -ily', 'easily'], ['possible → -bly', 'possibly'], ['probable → -bly', 'probably']]
},
{
type: 'plural-task',
title: 'B. Change the following adjectives to adverbs.',
items: [
{ sentence: '1. polite → _____', words: ['?'], answers: ['politely'] },
{ sentence: '2. loud → _____', words: ['?'], answers: ['loudly'] },
{ sentence: '3. comfortable → _____', words: ['?'], answers: ['comfortably'] },
{ sentence: '4. wonderful → _____', words: ['?'], answers: ['wonderfully'] },
{ sentence: '5. quiet → _____', words: ['?'], answers: ['quietly'] },
{ sentence: '6. slow → _____', words: ['?'], answers: ['slowly'] },
{ sentence: '7. easy → _____', words: ['?'], answers: ['easily'] },
{ sentence: '8. probable → _____', words: ['?'], answers: ['probably'] }
]
},
{
type: 'lesson-markers',
title: 'Irregular Adverbs',
intro: 'Some adverbs do not follow the rule (same as the adjective, or completely different):',
markers: [
{ marker: 'fast', examples: 'fast (He drives fast.)' },
{ marker: 'late', examples: 'late (He came late.)' },
{ marker: 'hard', examples: 'hard (She works hard.)' },
{ marker: 'good → well', examples: 'well (He speaks English well.)' }
]
},
{
type: 'plural-task',
title: 'A. Complete the sentences with the proper form of adverbs.',
items: [
{ sentence: '1. Hooshang came _____ to the class yesterday. (late)', words: ['late'], answers: ['late'] },
{ sentence: '2. The policeman answered the tourists _____. (polite)', words: ['polite'], answers: ['politely'] },
{ sentence: '3. Can you talk _____, please? (quiet)', words: ['quiet'], answers: ['quietly'] },
{ sentence: '4. Behrooz tried _____ to answer all questions. (hard)', words: ['hard'], answers: ['hard'] },
{ sentence: '5. My teacher speaks French _____. (good)', words: ['good'], answers: ['well'] },
{ sentence: '6. The people of the town _____ helped poor people. (generous)', words: ['generous'], answers: ['generously'] }
]
}
]
},
whatYouLearned: {
listening: {
title: 'A. Listen to the first part of a radio program about traveling.',
tasks: [
'1. The prices of ........... may be so ........... on the roads or in the ...........',
'1. Long trips may make you ........... and ........... and this can ........... the risk of illness.',
"2. Listen again and list all 'modals' you hear."
]
},
reading: {
title: 'B. Now read the rest.',
text: 'You can prepare your own meals for your trip. Making your own meals may save time and money, and you know exactly what goes into everything you prepare. Vegetables and sandwiches are easy to make, so they are useful foods for short trips. For very long trips, you may buy food or eat in restaurants. Remember: you should not eat fast or junk food. Good food keeps you healthy and happy and you can enjoy every minute of your trip.',
fa: 'می‌توانی غذای سفرت را خودت آماده کنی. درست کردن غذای خودت ممکن است در زمان و هزینه صرفه‌جویی کند و دقیقاً می‌دانی در هر چیزی که آماده می‌کنی چه می‌رود. سبزیجات و ساندویچ‌ها راحت درست می‌شوند، پس برای سفرهای کوتاه غذاهای مفیدی‌اند. برای سفرهای خیلی طولانی، می‌توانی غذا بخری یا در رستوران بخوری. یادت باشد: نباید فست‌فود یا هله‌هوله بخوری. غذای خوب تو را سالم و شاد نگه می‌دارد و می‌توانی از هر دقیقه‌ی سفرت لذت ببری.',
glossary: { 'prepare': 'آماده کردن', 'meals': 'وعده‌های غذایی', 'save': 'صرفه‌جویی کردن', 'junk food': 'هله‌هوله', 'enjoy': 'لذت بردن' },
tasks: [ "3. Underline all 'modals'." ]
},
pairWork: {
title: 'C. Work in pairs. Ask and answer. Use appropriate sentence stress and intonation.',
questions: [ 'Is food cheap or expensive in airports?', 'Do you like fast food or home-made food when you travel?', 'Are chips and cookies suitable or not suitable for travelers?' ]
}
},
workbook: [
{
part: 'Part I',
section: 'Reading Comprehension',
sectionFa: 'درک مطلب',
tasks: [
{
type: 'reading-passage',
passageTitle: 'How to be a good traveler',
passage: "Travel is about visiting new places and meeting new people. When visiting a destination, a traveler should take care of people, places and cultures. So, before any travel, we must pay attention to some points. First, we must read as much as possible about the main tourist attractions we are going to visit. Searching the Internet is an easy way to know about them. Also, learning a few words and phrases of the local language can be very useful, especially when we meet new people there. When we meet local people, we must not forget that we are guests! So, we must respect their way of living. When visiting historical and especially holy places, we must respect them, too. When we visit natural places such as lakes, forests and deserts, we must protect the plants and wild animals. In this way, every travel can be a great experience for us.",
passageFa: 'سفر یعنی دیدن جاهای جدید و آشنایی با آدم‌های جدید. هنگام بازدید از یک مقصد، مسافر باید مراقب مردم، مکان‌ها و فرهنگ‌ها باشد. پس قبل از هر سفر باید به چند نکته توجه کنیم. اول، باید تا جای ممکن درباره جاذبه‌های گردشگری اصلی که می‌خواهیم ببینیم بخوانیم. جست‌وجو در اینترنت راه آسانی برای شناختن آن‌هاست. همچنین یادگیری چند کلمه و عبارت از زبان محلی می‌تواند بسیار مفید باشد، به‌خصوص وقتی آنجا با آدم‌های جدید آشنا می‌شویم. وقتی با مردم محلی روبه‌رو می‌شویم، نباید فراموش کنیم که مهمان هستیم! پس باید به سبک زندگی‌شان احترام بگذاریم. هنگام بازدید از مکان‌های تاریخی و به‌خصوص مقدس، باید به آن‌ها هم احترام بگذاریم. وقتی از مکان‌های طبیعی مثل دریاچه‌ها، جنگل‌ها و بیابان‌ها بازدید می‌کنیم، باید از گیاهان و حیوانات وحشی محافظت کنیم. به این ترتیب، هر سفر می‌تواند تجربه‌ای عالی برای ما باشد.',
glossary: {
'Travel': 'سفر', 'destination': 'مقصد', 'cultures': 'فرهنگ‌ها', 'attractions': 'جاذبه‌ها',
'local language': 'زبان محلی', 'guests': 'مهمانان', 'respect': 'احترام گذاشتن',
'historical': 'تاریخی', 'holy': 'مقدس', 'protect': 'محافظت کردن', 'experience': 'تجربه'
}
},
{
type: 'truefalse',
title: 'A. True or False',
items: [
{ q: 'Learning about other cultures is not important for a traveler.', answer: false },
{ q: 'Reading is a good way to know about a tourist destination.', answer: true },
{ q: 'A good traveler should pay attention to plants and wildlife.', answer: true }
]
},
{
type: 'short-answer',
title: 'B. Answer the following questions.',
questions: [
{ q: 'Is it good to surf the net to know about our trip?', sampleAnswer: 'Yes, searching the Internet is an easy way to know about attractions.' },
{ q: 'Should we try to know the language of our destination?', sampleAnswer: 'Yes, learning a few words and phrases can be very useful.' },
{ q: 'Do you have another suggestion to be a good traveler?', sampleAnswer: '(your own answer)' }
]
}
]
},
{
part: 'Part II',
section: 'Grammar',
sectionFa: 'دستور زبان',
tasks: [
{
type: 'short-answer',
title: 'A. Answer the following questions with the given words and phrases.',
questions: [
{ q: 'Where can you travel in summer? (North)', sampleAnswer: 'I can travel to the North in summer.' },
{ q: 'When should she buy her ticket? (before her travel)', sampleAnswer: 'She should buy her ticket before her travel.' },
{ q: 'What may they buy? (souvenirs)', sampleAnswer: 'They may buy souvenirs.' },
{ q: 'How can Amir find a good hotel? (searching the net)', sampleAnswer: 'Amir can find a good hotel by searching the net.' },
{ q: 'Which language must we speak in that city? (Chinese)', sampleAnswer: 'We must speak Chinese in that city.' }
]
},
{
type: 'picture-future',
title: 'B. Write a sentence for each picture (using modals).',
items: [
{ hint: 'must not / smoke', image: 'wb-no-smoke.jpg', answer: 'People must not smoke.' },
{ hint: 'may / leave', image: 'wb-leave.jpg', answer: 'You may leave.' },
{ hint: 'can / park', image: 'wb-park.jpg', answer: 'You can park here.' },
{ hint: 'should not / speak loudly', image: 'wb-quiet.jpg', answer: 'You should not speak loudly.' },
{ hint: 'must / drive carefully', image: 'wb-drive.jpg', answer: 'You must drive carefully.' }
]
},
{
type: 'short-answer',
title: 'C. Write five things you do before your travel.',
questions: [
{ q: '1. I can _____', sampleAnswer: 'I can buy tickets online.' },
{ q: '2. I should _____', sampleAnswer: 'I should book a hotel.' },
{ q: '3. I must _____', sampleAnswer: 'I must get a passport.' },
{ q: '4. I may _____', sampleAnswer: 'I may buy a guidebook.' },
{ q: "5. I shouldn't _____", sampleAnswer: "I shouldn't forget my medicines." }
]
},
{
type: 'fill-going-to',
title: 'D. Complete the text with appropriate prepositions (in / at / on / next to).',
text: 'Armin is a student. He lives [1] Shahrood. He usually wakes up [2] 5 o\'clock [3] the morning. [4] Thursdays and Fridays, he wakes up later because he doesn\'t go to school. [5] their house, there is a stadium. [6] noon, he comes back home and rests.',
blanks: [
{ num: 1, answer: 'in' },
{ num: 2, answer: 'at' },
{ num: 3, answer: 'in' },
{ num: 4, answer: 'On' },
{ num: 5, answer: 'Next to' },
{ num: 6, answer: 'At' }
]
},
{
type: 'short-answer',
title: 'E. Now answer the following questions.',
questions: [
{ q: 'Where does Armin live?', sampleAnswer: 'He lives in Shahrood.' },
{ q: 'When does he usually wake up?', sampleAnswer: 'He usually wakes up at 5 o\'clock in the morning.' },
{ q: 'Where is the stadium?', sampleAnswer: 'It is next to their house.' }
]
}
]
},
{
part: 'Part III',
section: 'Vocabulary',
sectionFa: 'واژگان',
tasks: [
{
type: 'word-search',
title: 'A. Find 10 words related to travel.',
instruction: 'در جدول، ۱۰ کلمه مرتبط با سفر را پیدا کن.',
wordBank: ['pilgrim', 'scientist', 'destination', 'ticket', 'check in', 'attraction', 'plant', 'war', 'course', 'poem', 'angry', 'creation', 'baggage', 'brave', 'passport', 'plane', 'vacation', 'invention', 'word', 'train'],
animals: ['pilgrim', 'destination', 'ticket', 'check in', 'attraction', 'baggage', 'passport', 'plane', 'vacation', 'train']
},
{
type: 'odd-one-out',
title: 'B. One odd out.',
items: [
{ options: ['travel', 'trip', 'nation', 'journey'], odd: 2 },
{ options: ['local', 'international', 'domestic', 'national'], odd: 1 },
{ options: ['hospitable', 'kind', 'polite', 'angry'], odd: 3 },
{ options: ['jungle', 'town', 'desert', 'plain'], odd: 1 },
{ options: ['Europe', 'Asia', 'Spain', 'Africa'], odd: 2 }
]
},
{
type: 'match-columns',
title: 'C. Match columns A and B.',
pairs: [
{ a: 'summer', b: 'vacation', letter: 'b' },
{ a: 'historical', b: 'sites', letter: 'e' },
{ a: 'suitable', b: 'choice', letter: 'd' },
{ a: 'check', b: 'websites', letter: 'c' },
{ a: 'four-season', b: 'country', letter: 'a' },
{ a: 'have', b: 'suggestions', letter: 'f' }
]
},
{
type: 'group-words',
title: 'D. Put the words in three groups (means of transportation).',
words: ['bus', 'airplane', 'ship', 'train', 'balloon', 'boat', 'helicopter', 'bicycle'],
groups: ['Land', 'Air', 'Sea']
},
{
type: 'order-lifespan',
title: 'E. Order the means of transportation based on speed (fastest to slowest).',
words: ['airplane', 'train', 'bus', 'ship', 'bicycle'],
answer: ['airplane', 'train', 'bus', 'ship', 'bicycle']
},
{
type: 'fill-words',
title: 'F. Fill in the blanks with the given words.',
wordBank: ['range', 'cultures', 'suggestion', 'attracts', 'famous'],
items: [
{ sentence: '1. Egypt is _____ for its Pyramids.', answer: 'famous' },
{ sentence: '2. Amazing nature of Iran _____ many tourists.', answer: 'attracts' },
{ sentence: '3. We should respect the languages and _____ of other countries.', answer: 'cultures' },
{ sentence: '4. We can do a _____ of activities in our free time.', answer: 'range' },
{ sentence: '5. Do you have any _____ to solve the problem?', answer: 'suggestion' }
]
},
{
type: 'unscramble-nouns',
title: 'G. Unscramble the following sentences.',
items: [
{ scrambled: 'China / is / famous / for / the Great Wall', answer: 'China is famous for the Great Wall.', group: '1' },
{ scrambled: 'Shiraz / has / many historical sites / and an amazing nature', answer: 'Shiraz has many historical sites and an amazing nature.', group: '2' },
{ scrambled: 'Hamedan / attracts / a lot of tourists / from other cities of Iran', answer: 'Hamedan attracts a lot of tourists from other cities of Iran.', group: '3' },
{ scrambled: 'many Muslims / travel / to go to holy shrines / to Mashhad and Qom', answer: 'Many Muslims travel to Mashhad and Qom to go to holy shrines.', group: '4' }
],
groups: ['1', '2', '3', '4']
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
title: 'Ask and answer with contrastive stress and appropriate intonation.',
items: [
'Which country are you from, Iran or Italy?',
'Where do you go, Isfahan or Yazd?',
'Which color do you like more, yellow or brown?',
'What do you want to have, spaghetti or kebab?',
'Should I check it online or offline?'
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
title: 'A. Change the following adjectives into adverbs. Pay attention to spelling.',
wordBank: ['quickly', 'really', 'angrily', 'easily', 'probably', 'well', 'carelessly'],
items: [
{ sentence: '1. quick → _____', answer: 'quickly' },
{ sentence: '2. real → _____', answer: 'really' },
{ sentence: '3. angry → _____', answer: 'angrily' },
{ sentence: '4. easy → _____', answer: 'easily' },
{ sentence: '5. probable → _____', answer: 'probably' },
{ sentence: '6. good → _____', answer: 'well' },
{ sentence: '7. careless → _____', answer: 'carelessly' }
]
},
{
type: 'singular-plural-task',
title: 'B. Read the text; then complete the adjective↔adverb tables.',
instructions: [
'Read the text about means of travel. Find adjectives and their matching adverbs.',
'adjective → adverb (e.g. different → differently, usual → usually, comfortable → comfortably, careful → carefully)'
]
}
]
}
],
quiz: [
{ q: 'You _____ drive carefully on this road.', qFa: 'باید با احتیاط در این جاده رانندگی کنی.', options: ['must', 'may', 'can', 'will'], correct: 0 },
{ q: 'Children _____ eat fast food. It is not healthy.', qFa: 'بچه‌ها نباید فست‌فود بخورند.', options: ['must not', 'may', 'can', 'should'], correct: 0 },
{ q: '_____ I sit down, please?', qFa: 'اجازه هست بنشینم؟', options: ['May', 'Must', 'Should', 'Will'], correct: 0 },
{ q: 'The flight is _____ 8 o\'clock _____ Friday.', qFa: 'پرواز ساعت ۸ روز جمعه است.', options: ['at / on', 'on / at', 'in / on', 'at / in'], correct: 0 },
{ q: 'Egypt is famous for its _____.', qFa: 'مصر به‌خاطر اهرامش مشهور است.', options: ['pyramids', 'deserts', 'airports', 'towers'], correct: 0 },
{ q: 'She speaks French _____.', qFa: 'او خوب فرانسوی صحبت می‌کند.', options: ['well', 'good', 'goodly', 'best'], correct: 0 }
]
}
];
