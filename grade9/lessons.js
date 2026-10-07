const WORD_DICT = {
shy:{pos:'adj',ipa:'/ʃaɪ/',fa:'خجالتی'},
angry:{pos:'adj',ipa:'/ˈæŋɡri/',fa:'عصبانی'},
brave:{pos:'adj',ipa:'/breɪv/',fa:'شجاع'},
cruel:{pos:'adj',ipa:'/ˈkruːəl/',fa:'بی‌رحم'},
rude:{pos:'adj',ipa:'/ruːd/',fa:'بی‌ادب'},
careless:{pos:'adj',ipa:'/ˈkerləs/',fa:'بی‌دقت'},
careful:{pos:'adj',ipa:'/ˈkerfəl/',fa:'دقیق'},
nervous:{pos:'adj',ipa:'/ˈnɜːrvəs/',fa:'مضطرب'},
selfish:{pos:'adj',ipa:'/ˈselfɪʃ/',fa:'خودخواه'},
quiet:{pos:'adj',ipa:'/ˈkwaɪət/',fa:'ساکت'},
neat:{pos:'adj',ipa:'/niːt/',fa:'مرتب'},
funny:{pos:'adj',ipa:'/ˈfʌni/',fa:'بامزه'},
kind:{pos:'adj',ipa:'/kaɪnd/',fa:'مهربان'},
patient:{pos:'adj',ipa:'/ˈpeɪʃənt/',fa:'صبور'},
clever:{pos:'adj',ipa:'/ˈklevər/',fa:'باهوش'},
helpful:{pos:'adj',ipa:'/ˈhelpfəl/',fa:'کمک‌کننده'},
talkative:{pos:'adj',ipa:'/ˈtɔːkətɪv/',fa:'پرحرف'},
serious:{pos:'adj',ipa:'/ˈsɪriəs/',fa:'جدی'},
generous:{pos:'adj',ipa:'/ˈdʒenərəs/',fa:'سخاوتمند'},
upset:{pos:'adj',ipa:'/ʌpˈset/',fa:'ناراحت'},
friendly:{pos:'adj',ipa:'/ˈfrendli/',fa:'دوستانه'},
teacher:{pos:'noun',ipa:'/ˈtiːtʃər/',fa:'معلم'},
student:{pos:'noun',ipa:'/ˈstuːdənt/',fa:'دانش‌آموز'},
classroom:{pos:'noun',ipa:'/ˈklæsruːm/',fa:'کلاس درس'},
beautiful:{pos:'adj',ipa:'/ˈbjuːtɪfəl/',fa:'زیبا'}
};
const PHRASE_DICT = {
"what's he like":{ipa:'/wʌts hi laɪk/',fa:'چه‌جور آدمیه؟',type:'official'},
"what's she like":{ipa:'/wʌts ʃi laɪk/',fa:'چه‌جور آدمیه؟',type:'official'},
"what are you like":{ipa:'/wʌt ɑːr juː laɪk/',fa:'چه‌جور آدمی هستی؟',type:'official'},
'best friend':{ipa:'/best frend/',fa:'بهترین دوست',type:'common'},
'hard-working':{ipa:'/hɑːrd ˈwɜːrkɪŋ/',fa:'سخت‌کوش',type:'common'},
"i'm not":{ipa:'/aɪm nɒt/',fa:'من نیستم',type:'common'}
};
const LESSONS = [
{
num: 1,
title: 'Personality',
titleFa: 'شخصیت',
function: 'Talking about Personality',
functionFa: 'صحبت درباره شخصیت',
grammar: 'Simple Present Tense (to be)',
grammarFa: 'زمان حال ساده (to be)',
languageMelody: 'Falling Intonation (to be statements)',
duration: 30,
color: '#FFE4B5',
conversation: {
desc: 'به مکالمه دو پسرعمو گوش دهید.',
lines: [
{speaker:'Ehsan',role:'student',en:'Who is your best friend at school?',fa:'بهترین دوستت توی مدرسه کیه؟'},
{speaker:'Parham',role:'student',en:'Reza.',fa:'رضا.'},
{speaker:'Ehsan',role:'student',en:"What's he like?",fa:'چه‌جور آدمیه؟'},
{speaker:'Parham',role:'student',en:"Oh, he is really great! He's clever and kind.",fa:'وای، خیلی عالیه! باهوش و مهربونه.'},
{speaker:'Ehsan',role:'student',en:'Is he hard-working too?',fa:'سخت‌کوش هم هست؟'},
{speaker:'Parham',role:'student',en:"Yes! And he's always very helpful.",fa:'بله! و همیشه خیلی کمک‌کننده‌ست.'},
{speaker:'Ehsan',role:'student',en:'How?',fa:'چطور؟'},
{speaker:'Parham',role:'student',en:'He always helps me with my lessons.',fa:'همیشه با درس‌هام بهم کمک می‌کنه.'}
]
},
practices: [
{
title: 'Practice 1 — Talking about Personality (1)',
titleFa: 'صحبت درباره شخصیت (۱)',
explanation: "این تمرین درباره <strong>سؤالات بله/خیر با فعل to be</strong> هست. ساختش ساده‌ست: فعل to be (Are/Is) + فاعل + صفت؟",
pairs: [
{q:'Are you hard-working?',a:'Yes, I am.',qFa:'تو سخت‌کوشی؟',aFa:'بله، هستم.'},
{q:'Is he clever?',a:'Yes, he is.',qFa:'اون باهوشه؟',aFa:'بله، هست.'},
{q:'Is Zahra talkative?',a:"No, she isn't.",qFa:'زهرا پرحرفه؟',aFa:'نه، نیست.'},
{q:'Are they neat?',a:'Yes, they are.',qFa:'اون‌ها مرتبن؟',aFa:'بله، هستن.'},
{q:'Are they upset?',a:"No, they're not.",qFa:'اون‌ها ناراحتن؟',aFa:'نه، نیستن.'}
]
},
{
title: 'Practice 2 — Talking about Personality (2)',
titleFa: 'صحبت درباره شخصیت (۲)',
explanation: "این تمرین درباره <strong>سؤال \"What is ... like?\"</strong> هست — برای پرسیدن از شخصیت یا ویژگی کسی استفاده می‌شه. مثل «اون چه‌جور آدمیه؟» در فارسی.",
pairs: [
{q:"What's your friend like?",a:"He's very funny.",qFa:'دوستت چه‌جور آدمیه؟',aFa:'خیلی بامزه‌ست.'},
{q:"What's your mother like?",a:"She's very kind and patient.",qFa:'مادرت چه‌جور آدمیه؟',aFa:'خیلی مهربون و صبوره.'},
{q:"What's he like?",a:'He is quiet.',qFa:'اون چه‌جور آدمیه؟',aFa:'ساکته.'},
{q:"What's she like?",a:'She is clever.',qFa:'اون چه‌جور آدمیه؟',aFa:'باهوشه.'},
{q:'What are you like?',a:"I'm a bit serious.",qFa:'تو چه‌جور آدمی هستی؟',aFa:'یه‌کم جدی هستم.'},
{q:'What are they like?',a:'They are very kind.',qFa:'اون‌ها چه‌جورن؟',aFa:'خیلی مهربونن.'}
]
}
],
languageMelodySection: {
title: 'Language Melody — Falling Intonation',
titleFa: 'ملودی زبان — لحن نزولی',
desc: 'به مکالمه گوش بده و به لحن (intonation) جملات «خبری» (affirmative) دقت کن.',
intonationGuide: {
falling: 'لحن <strong>نزولی (↘)</strong>: صدا در پایان جمله <strong>پایین</strong> می‌آد. در جملات خبری (مثل «او باهوشه») این لحن استفاده می‌شه — مثل وقتی که خبری رو با اطمینان و قاطعیت می‌گی. آخر جمله رو با صدای پایین‌رونده تموم کن.'
},
conversation: [
{speaker:'Teacher',en:'Farzaneh is a clever student. Everybody likes her.'},
{speaker:'Samira',en:'Yes. I know. She is also very helpful.'},
{speaker:'Teacher',en:"Well, you can ask her for help."},
{speaker:'Samira',en:"OK, I'll ask her to help me with my English."}
],
defaultArrow: '↘',
examples: [
"He's very kind.",
"She's very patient.",
"You are very clever.",
"Everybody likes her.",
"I do my homework.",
"She works for a company."
],
talkToTeacher: 'Let me check it in the dictionary.'
},
grammarSection: {
title: 'Grammar — Simple Present (to be)',
titleFa: 'دستور زبان — حال ساده (to be)',
explanation: [
'فعل <code>to be</code> در زبان انگلیسی پرکاربردترین فعله. این فعل در حال ساده سه شکل داره:',
'<code><strong>am</strong></code> برای ضمیر <code>I</code>، <code><strong>is</strong></code> برای <code>he/she/it</code> و اسم‌های مفرد، <code><strong>are</strong></code> برای <code>we/you/they</code> و اسم‌های جمع.',
'برای منفی کردن، فقط بعد از فعل <code>not</code> اضافه می‌کنیم: <code>I am not</code>, <code>He is not</code>, <code>They are not</code>. در سؤال هم جای فعل و فاعل عوض می‌شه: <code>Am I ...?</code>, <code>Is he ...?</code>, <code>Are they ...?</code>'
],
tip: "برای جواب کوتاه می‌تونی بگی <code>Yes, I am.</code> یا <code>No, he isn't.</code> — جواب کوتاه باید فعل to be رو همراه با ضمیر داشته باشه.",
tables: [
{
title: 'Affirmative (مثبت)',
titleFa: 'مثبت',
headers: ['Subject', 'Verb', 'Rest'],
rows: [
['I', 'am', 'happy.'],
['He / She / It', 'is', 'happy.'],
['We / You / They', 'are', 'happy.']
],
examples: [
{en:'Ali is clever.', fa:'علی باهوشه.'},
{en:'It is red.', fa:'اون قرمزه.'},
{en:'Zahra and Nadia are generous.', fa:'زهرا و نادیا سخاوتمند هستند.'}
]
},
{
title: 'Question / Negative (سؤالی / منفی)',
titleFa: 'سؤالی / منفی',
headers: ['Verb', 'Subject', 'Rest'],
rows: [
['Am', 'I', 'careful?'],
['Is', 'he / she / it', 'careful?'],
['Are', 'we / you / they', 'careful?']
],
examples: [
{en:'I am not talkative.', fa:'من پرحرف نیستم.'},
{en:'He is not shy.', fa:'او خجالتی نیست.'},
{en:'They are not rude.', fa:'اونا بی‌ادب نیستن.'}
]
},
{
title: 'There is / There are',
titleFa: 'وجود داشتن (هست / هستند)',
headers: ['There', 'is/are', 'Number/Article', 'Noun', 'Place'],
rows: [
['There', 'is', 'an', 'eraser', 'in the classroom.'],
['There', 'is', 'a / one', 'computer', 'in the classroom.'],
['There', 'are', 'two / three / many / some', 'students', 'in the classroom.']
],
examples: [
{en:'Is there an apple on the table? Yes, there is.', fa:'آیا یه سیب روی میز هست؟ بله، هست.'},
{en:"There aren't / are not many tourists in this city.", fa:'گردشگران زیادی توی این شهر نیستن.'}
]
}
]
},
seeAlso: {
title: 'See also — Contractions',
titleFa: 'همچنین ببین — مخفف کردن',
col1Label: 'Full Form',
col2Label: 'Contraction',
pairs: [
{full:'I am a teacher.', short:"I'm a teacher."},
{full:'He is polite.', short:"He's polite."},
{full:'It is cold.', short:"It's cold."},
{full:'We are Iranian.', short:"We're Iranian."},
{full:'You are students.', short:"You're students."},
{full:'They are hard-working.', short:"They're hard-working."}
],
otherForms: [
"I'm not talkative.",
"He's not shy. = He isn't shy.",
"They're not rude. = They aren't rude."
]
},
listeningReadingWriting: {
title: 'Listening, Reading and Writing',
sections: [
{
type: 'listen-table-A',
title: 'A — Listen and fill out the table',
desc: 'به مکالمه گوش کن و جدول رو پر کن.',
columns: ['Name', 'Personality'],
columnRows: [1, 3]
},
{
type: 'listen-questions-B',
title: 'B — Listen and answer',
desc: 'به فایل صوتی گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:"What's Iran like?", template:'Iran is a _____ country.'},
{q:'What are Iranian people like?', template:'Iranian people are _____, _____, _____ and _____.'}
]
},
{
type: 'find-it',
title: 'Find it',
desc: 'افعال "to be" را در متن زیر پیدا کن و زیر آن‌ها خط بکش.',
example: 'My sister is really kind.',
text: "I'm Mohsen. This is my classroom. There are 25 students in my class. I have a lot of friends. My best friend is Vahid. He's a good student. He is helpful and hard-working, but he is not very careful. He usually forgets important things. It's a big problem.",
targets: ["I'm", 'is', 'are', 'is', "He's", 'is', 'is', "It's"]
},
{
type: 'tell-classmates',
title: 'Tell Your Classmates',
desc: 'پنج چیز درباره خودت و اعضای خانواده‌ات به همکلاسی‌هات بگو.'
}
]
},
speakingWriting: {
title: 'Reading, Speaking, Listening and Writing',
desc: 'سؤالات روی Card A را بخون. سپس از همکلاسی‌ها بپرس و جواب‌ها را روی Card B بنویس.',
cardA: [
'Are you brave?',
'Is your brother talkative?',
'Are your family members neat?',
'Who is brave?',
'Who is friendly?',
"What's your father like?"
],
rolePlay: {
title: 'Role Play',
desc: 'با همکلاسی‌هات درباره شخصیت دوستان، همکلاسی‌ها، معلم‌ها یا اقوامت صحبت کن.'
}
},
vocabulary: [
{word:'personality', pos:'noun', ipa:'/ˌpɜːrsəˈnæləti/', fa:'شخصیت', example:"What's your personality like?"},
{word:'shy', pos:'adj', ipa:'/ʃaɪ/', fa:'خجالتی', example:"He's shy."},
{word:'angry', pos:'adj', ipa:'/ˈæŋɡri/', fa:'عصبانی', example:'She is angry.'},
{word:'brave', pos:'adj', ipa:'/breɪv/', fa:'شجاع', example:'Iranian people are brave.'},
{word:'cruel', pos:'adj', ipa:'/ˈkruːəl/', fa:'بی‌رحم', example:'The man is cruel.'},
{word:'rude', pos:'adj', ipa:'/ruːd/', fa:'بی‌ادب', example:"They're not rude."},
{word:'careless', pos:'adj', ipa:'/ˈkerləs/', fa:'بی‌دقت', example:'He is careless.'},
{word:'nervous', pos:'adj', ipa:'/ˈnɜːrvəs/', fa:'مضطرب، نگران', example:"I'm nervous."},
{word:'selfish', pos:'adj', ipa:'/ˈselfɪʃ/', fa:'خودخواه', example:'My friend is not selfish.'},
{word:'quiet', pos:'adj', ipa:'/ˈkwaɪət/', fa:'ساکت', example:'He is quiet.'},
{word:'neat', pos:'adj', ipa:'/niːt/', fa:'مرتب', example:'Are they neat?'},
{word:'funny', pos:'adj', ipa:'/ˈfʌni/', fa:'بامزه', example:"He's very funny."},
{word:'kind', pos:'adj', ipa:'/kaɪnd/', fa:'مهربان', example:"She's very kind."},
{word:'patient', pos:'adj', ipa:'/ˈpeɪʃənt/', fa:'صبور', example:'My mother is patient.'},
{word:'clever', pos:'adj', ipa:'/ˈklevər/', fa:'باهوش', example:'He is clever.'},
{word:'hard-working', pos:'adj', ipa:'/hɑːrd ˈwɜːrkɪŋ/', fa:'سخت‌کوش', example:'Are you hard-working?'},
{word:'helpful', pos:'adj', ipa:'/ˈhelpfəl/', fa:'کمک‌کننده', example:'He is helpful.'},
{word:'talkative', pos:'adj', ipa:'/ˈtɔːkətɪv/', fa:'پرحرف', example:"I'm not talkative."},
{word:'serious', pos:'adj', ipa:'/ˈsɪriəs/', fa:'جدی', example:"I'm a bit serious."},
{word:'generous', pos:'adj', ipa:'/ˈdʒenərəs/', fa:'سخاوتمند', example:'They are generous.'},
{word:'upset', pos:'adj', ipa:'/ʌpˈset/', fa:'ناراحت', example:'Are they upset?'},
{word:'friendly', pos:'adj', ipa:'/ˈfrendli/', fa:'دوستانه', example:'Iranians are friendly.'},
{word:'best friend', pos:'phrase', ipa:'/best frend/', fa:'بهترین دوست', example:'Reza is my best friend.'},
{word:'careful', pos:'adj', ipa:'/ˈkerfəl/', fa:'دقیق', example:'Am I careful?'}
],
workbook: [
{
type:'multiple-choice-inline',
section:'Reading',
title:'گزینهٔ صحیح را انتخاب کنید.',
titleEn:'Choose the correct forms.',
items:[
{sentence:'Kate _____ funny.', options:["isn't","aren't"], correct:0},
{sentence:'There _____ a car in the street.', options:['is','are'], correct:0},
{sentence:'There _____ fifteen benches in the class.', options:['is','are'], correct:1},
{sentence:'It _____ really beautiful.', options:['is','are'], correct:0},
{sentence:'Iranians _____ very brave.', options:['is','are'], correct:1}
]
},
{
type:'fill-blanks-paragraph',
section:'Reading',
title:'جاهای خالی را با افعال to be پر کنید.',
titleEn:'Fill in the blanks. (to be verbs)',
text:'I am Ali Rasooli. I [1] 14 years old. I go to Shahid Kazemi school. My school [2] beautiful. There [3] 30 students in my class. My classmates [4] clever and friendly. Mr. Ahmadi is our English teacher. He [5] hard-working but he [6] nervous at all. He\'[7] very kind and patient.',
blanks:[
{num:1,answer:'am'},
{num:2,answer:'is'},
{num:3,answer:'are'},
{num:4,answer:'are'},
{num:5,answer:'is'},
{num:6,answer:"isn't"},
{num:7,answer:'s'}
]
},
{
type:'unscramble-sentences',
section:'Reading',
title:'جملات زیر را مرتب کنید.',
titleEn:'Unscramble the following sentences.',
items:[
{scrambled:'am / I / nervous / not', answer:'I am not nervous.'},
{scrambled:'and / you / your friend / selfish / not / are', answer:'You and your friend are not selfish.'},
{scrambled:'Mina / is / careless / ?', answer:'Is Mina careless?'},
{scrambled:'Our house / two / rooms / are / in / there', answer:'There are two rooms in our house.'},
{scrambled:'there / an / orange / table / is / on the / ?', answer:'Is there an orange on the table?'}
]
},
{
type:'match-sentence-image',
section:'Reading',
title:'جملات زیر را به تصاویر مرتبط وصل کنید.',
titleEn:'Match the sentences with the pictures.',
sentences:[
{text:'My teacher is kind.', matchTo:'C'},
{text:'The man is cruel.', matchTo:'A'},
{text:'The girl is quiet.', matchTo:'B'},
{text:'They are not neat.', matchTo:'D'},
{text:'There is a book on the desk.', matchTo:'F'},
{text:'There are five students in the classroom.', matchTo:'E'}
],
images:[
{id:'A', image:'wb-ex4-cruel-man.jpg', hint:'مرد بی‌رحم'},
{id:'B', image:'wb-ex4-quiet-girl.jpg', hint:'دختر ساکت'},
{id:'C', image:'wb-ex4-kind-teacher.jpg', hint:'معلم مهربان'},
{id:'D', image:'wb-ex4-messy.jpg', hint:'اتاق نامرتب'},
{id:'E', image:'wb-ex4-classroom.jpg', hint:'پنج دانش‌آموز در کلاس'},
{id:'F', image:'wb-ex4-book-on-desk.jpg', hint:'کتاب روی میز'}
]
},
{
type:'image-sentence-write',
section:'Writing',
title:'برای هر یک از تصاویر زیر یک جمله بنویسید.',
titleEn:'Write a sentence for each picture.',
items:[
{image:'wb-ex5-angry-girl.jpg', hint:'دختر عصبانی', example:true, answer:'She is angry.'},
{image:'wb-ex5-2.jpg', hint:'تصویر دوم', expected:'He is quiet.'},
{image:'wb-ex5-3.jpg', hint:'تصویر سوم', expected:'They are funny.'},
{image:'wb-ex5-4.jpg', hint:'تصویر چهارم', expected:'They are brave.'},
{image:'wb-ex5-5.jpg', hint:'تصویر پنجم', expected:'He is careless.'},
{image:'wb-ex5-6.jpg', hint:'تصویر ششم', expected:'They are brave.'}
]
},
{
type:'word-search',
section:'Writing',
title:'الف) چند صفت مربوط به شخصیت افراد را در جدول زیر بیابید. (۶ کلمه) — ب) کلماتی را که یافته‌اید در ستون مناسب قرار دهید.',
titleEn:'A) Find six personality words in the grid. B) Sort them as Positive or Negative.',
grid:[
['B','G','A','C','R','U','A','E'],
['T','B','N','O','P','C','L','N'],
['A','R','G','N','R','L','A','E'],
['C','A','R','E','L','E','S','S'],
['D','V','Y','A','P','V','E','H'],
['O','E','S','T','E','E','T','Y'],
['T','A','S','A','T','R','M','I']
],
targetWords:['CARELESS','BRAVE','ANGRY','RUDE','NEAT','PATIENT'],
positives:['BRAVE','NEAT','PATIENT'],
negatives:['CARELESS','ANGRY','RUDE']
},
{
type:'fill-with-image',
section:'Writing',
title:'پ) جملات زیر را با کلمات مناسب پر کنید.',
titleEn:'C) Complete the sentences with the correct words.',
items:[
{sentence:'My little brother is _____ . He is not talkative.', answer:'shy', image:'wb-ex7-shy.jpg', hint:'پسر کوچکی که خجالتیه'},
{sentence:'The waiter is very _____ . He clears the table very well.', answer:'neat', image:'wb-ex7-neat.jpg', hint:'گارسون مرتب در حال تمیز کردن میز'},
{sentence:'He is a _____ student. He studies hard.', answer:'hard-working', image:'wb-ex7-hardworking.jpg', hint:'دانش‌آموز در حال درس خواندن'},
{sentence:'Jack is a _____ driver. He drives too fast.', answer:'careless', image:'wb-ex7-careless.jpg', hint:'راننده‌ای که با سرعت زیاد رانندگی می‌کند'}
]
},
{
type:'sentence-list',
section:'Writing',
title:'دربارهٔ خود و اعضای خانواده یا دوستانتان چند جمله بنویسید.',
titleEn:'Write some sentences about you, your family or your friends.',
example:'I am clever.',
slots:6,
startNumber:2
},
{
type:'yes-no-table',
section:'Writing',
title:'بله یا خیر؟',
titleEn:'Yes or No?',
items:[
'Mothers are kind.',
'Iranian people are hard-working.',
'Actors are shy.',
'Waiters are neat.',
'Best friends are cruel.'
]
},
{
type:'reading-comprehension',
section:'Reading',
title:'الف) متن زیر را که نوشتهٔ یک دانش‌آموز ژاپنی است بخوانید و زیر افعال be to خط بکشید. ب) به پرسش‌های زیر پاسخ دهید. پ) این متن را دربارهٔ خود بازنویسی کنید.',
titleEn:'A) Underline the "to be" verbs. B) Answer the questions. C) Rewrite the text about yourself.',
text:"I'm Ino Hitachi. I am 14 years old. I am Japanese. I live in Tokyo, the capital of Japan. People of my country are very kind and hard-working. They are also very busy and serious. There are many cities and villages in my country. About 127 million people live in Japan. I love my country very much. I also like to visit other countries.",
targets:["I'm",'am','am','are','are','are'],
questions:[
{q:'How old is Ino Hitachi?', sampleAnswer:'He is 14 years old.'},
{q:'Where is he from?', sampleAnswer:'He is from Japan / Tokyo.'},
{q:'What are Japanese people like?', sampleAnswer:'They are very kind and hard-working. They are also very busy and serious.'},
{q:'Are there many cities and villages in Japan?', sampleAnswer:'Yes, there are.'}
],
rewriteSlots:8,
rewriteLabel:'پ) این متن را دربارهٔ خود بازنویسی کنید (C) Rewrite the text about yourself:'
}
],
quiz: [
{q:"What's your friend _____? — He's very funny.", qFa:'دوستت چه‌جوریه؟', options:['like','look','about','for'], correct:0},
{q:'_____ they hard-working? — Yes, they are.', qFa:'اون‌ها سخت‌کوشن؟', options:['Is','Am','Are','Do'], correct:2},
{q:"He's not careful. He is _____ .", qFa:'اون دقیق نیست. بی‌دقته.', options:['careful','careless','clever','kind'], correct:1},
{q:"Reza isn't talkative. He's _____ .", qFa:'رضا پرحرف نیست. ساکته.', options:['quiet','funny','rude','brave'], correct:0},
{q:'There _____ many tourists in this city.', qFa:'گردشگران زیادی توی این شهر هست.', options:['is','are','am','be'], correct:1},
{q:'I am a teacher. (mukhaffaf): _____ a teacher.', qFa:'مخفف I am: ___ a teacher.', options:["I'm","Im","I's","Iam"], correct:0}
]
}
,
{
num: 2,
title: 'Travel',
titleFa: 'سفر',
function: 'Talking about Travel',
functionFa: 'صحبت درباره سفر',
grammar: 'Present Continuous Tense',
grammarFa: 'زمان حال استمراری',
languageMelody: 'Rising Intonation (Yes/No questions with to be)',
duration: 30,
color: '#FFD4B8',
conversation: {
desc: 'به مکالمه بین یک گردشگر و متصدی پذیرش هتل گوش دهید.',
lines: [
{speaker:'Receptionist',role:'teacher',en:'Welcome to our hotel sir, how can I help you?',fa:'به هتل ما خوش آمدید آقا، چطور می‌تونم کمکتون کنم؟'},
{speaker:'Tourist',role:'student',en:"My name is Paul Kress. I'm from Germany. I have a reservation here.",fa:'اسم من پل کرس‌ـه. از آلمانم. اینجا رزرو کردم.'},
{speaker:'Receptionist',role:'teacher',en:'I see! Are you staying here for two nights?',fa:'خب! آیا برای دو شب اینجا می‌مونید؟'},
{speaker:'Tourist',role:'student',en:'Yes, my wife and I are visiting Tehran for three days.',fa:'بله، من و همسرم برای سه روز به تهران سفر می‌کنیم.'},
{speaker:'Receptionist',role:'teacher',en:'Where is she now? I need to check her passport.',fa:'الان کجاست؟ باید پاسپورتش رو چک کنم.'},
{speaker:'Tourist',role:'student',en:"She's standing over there, by the gift shop. Here is her passport.",fa:'اونجا، کنار مغازه سوغات‌فروشی ایستاده. این پاسپورتشه.'},
{speaker:'Receptionist',role:'teacher',en:"Thank you. This is your key. It's room 213. Hope you enjoy your stay in Tehran.",fa:'متشکرم. این کلید شماست. اتاق ۲۱۳. امیدوارم از اقامتتون در تهران لذت ببرید.'}
]
},
practices: [
{
title: 'Practice 1 — Talking about Travel (1)',
titleFa: 'صحبت درباره سفر (۱)',
explanation: "این تمرین درباره <strong>سؤالات بله/خیر در حال استمراری</strong> هست. ساختار: Are/Is + فاعل + فعل + ing؟",
pairs: [
{q:'Are you visiting Tehran?',a:'Yes, I am.',qFa:'تهران می‌رید؟',aFa:'بله، می‌رم.'},
{q:'Are they traveling around the world?',a:"No, they aren't.",qFa:'دور دنیا سفر می‌کنن؟',aFa:'نه، نمی‌کنن.'},
{q:'Is Paul booking a room?',a:'Yes, he is.',qFa:'پل داره اتاق رزرو می‌کنه؟',aFa:'بله، داره می‌کنه.'},
{q:'Is Kate checking the map?',a:"No, she's reading the guide book.",qFa:'کیت داره نقشه رو نگاه می‌کنه؟',aFa:'نه، داره کتاب راهنما می‌خونه.'}
]
},
{
title: 'Practice 2 — Talking about Travel (2)',
titleFa: 'صحبت درباره سفر (۲)',
explanation: "این تمرین درباره <strong>سؤالات Wh- در حال استمراری</strong> هست. ساختار: Wh + Are/Is + فاعل + فعل + ing؟",
pairs: [
{q:'Who is speaking English now?',a:'Sara.',qFa:'الان کی داره انگلیسی صحبت می‌کنه؟',aFa:'سارا.'},
{q:'What is he doing?',a:'He is buying a ticket.',qFa:'داره چی‌کار می‌کنه؟',aFa:'داره بلیط می‌خره.'},
{q:'Where is Ali going?',a:"He's going to Mehrabad Airport.",qFa:'علی کجا می‌ره؟',aFa:'داره به فرودگاه مهرآباد می‌ره.'},
{q:'What are you doing?',a:"I'm filling out the reservation form.",qFa:'داری چی‌کار می‌کنی؟',aFa:'دارم فرم رزرو رو پر می‌کنم.'},
{q:'How are they traveling?',a:'They are traveling by train.',qFa:'چطور سفر می‌کنن؟',aFa:'با قطار سفر می‌کنن.'}
]
}
],
languageMelodySection: {
title: 'Language Melody — Rising Intonation',
titleFa: 'ملودی زبان — لحن صعودی',
desc: 'به مکالمه گوش بده و به لحن سؤالات «بله/خیر» (با to be) دقت کن.',
intonationGuide: {
rising: 'لحن <strong>صعودی (↗)</strong>: صدا در پایان جمله <strong>بالا</strong> می‌ره. در سؤالات بله/خیر (که جوابشون Yes یا No هست) از این لحن استفاده می‌کنیم — مثل وقتی که با کنجکاوی چیزی رو می‌پرسی. آخر جمله رو با صدای بالارونده تموم کن.'
},
defaultArrow: '↗',
conversation: [
{speaker:'Kiana',en:'Are you working with the computer now?'},
{speaker:'Sara',en:"Yes, I'm searching for a hotel in Sanandaj."},
{speaker:'Kiana',en:'Is it possible to book it online?'},
{speaker:'Sara',en:'Yes, of course.'}
],
examples: [
'Is it a beautiful country?',
'Is he a tourist?',
'Are you staying here?',
'Is she searching for a hotel?',
'Are you traveling to Shiraz?',
'Are they checking out?'
],
talkToTeacher: 'I am interested in ... , How about you?'
},
grammarSection: {
title: 'Grammar — Present Continuous',
titleFa: 'دستور زبان — حال استمراری',
explanation: [
'زمان <code>حال استمراری</code> برای کارهایی استفاده می‌شه که <strong>الان در حال انجامه</strong> یا <strong>این روزها داره اتفاق می‌افته</strong>.',
'ساختش ساده‌ست: <code>فعل to be</code> + <code>فعل اصلی + ing</code>. مثلاً: <code>I am reading</code> = دارم می‌خونم.',
'برای منفی کردن، بعد از <code>am/is/are</code> یه <code>not</code> می‌ذاریم. برای سؤال، <code>am/is/are</code> رو میاریم اول جمله.'
],
tip: "کلماتی مثل <code>now</code>, <code>at the moment</code>, <code>today</code> نشون می‌دن که داریم درباره الان حرف می‌زنیم — این‌ها سرنخ مهمی برای استفاده از حال استمراری‌ان.",
tables: [
{
title: 'Affirmative (مثبت)',
titleFa: 'مثبت',
headers: ['Subject', 'be', 'Verb-ing', 'Object'],
rows: [
['I', 'am', 'speaking', 'Persian / English / Arabic.'],
['He', 'is', 'speaking', 'French / German.'],
['They', 'are', 'speaking', 'Persian / English / Arabic.']
],
examples: [
{en:'I am not speaking Persian. = I\'m not speaking Persian.', fa:'من فارسی صحبت نمی‌کنم.'},
{en:'She is not writing a letter. = She\'s not writing a letter. = She isn\'t writing a letter.', fa:'او نامه نمی‌نویسه.'},
{en:'You are not reading a book. = You\'re not reading a book. = You aren\'t reading a book.', fa:'تو کتاب نمی‌خونی.'}
]
},
{
title: 'Yes/No Questions',
titleFa: 'سؤال بله/خیر',
headers: ['be', 'Subject', 'Verb-ing', 'Object'],
rows: [
['Am', 'I', 'reading', 'a book?'],
['Is', 'he', 'reading', 'short stories / a poem?'],
['Are', 'they', 'reading', 'newspapers?']
],
examples: [
{en:'Is Sara booking online?', fa:'سارا داره آنلاین رزرو می‌کنه؟'},
{en:'Are you visiting Iran?', fa:'داری ایران رو می‌بینی؟'}
]
},
{
title: 'Wh-Questions',
titleFa: 'سؤال با کلمات پرسشی',
headers: ['Wh', 'be', 'Subject', 'Verb-ing'],
rows: [
['How', 'am', 'I', 'going?'],
['Where', 'is', 'he', 'going?'],
['(How/Where)', 'are', 'they', 'going?']
],
examples: [
{en:'What is she playing?', fa:'داره چی بازی می‌کنه؟'},
{en:'Who is speaking to the teacher?', fa:'کی داره با معلم صحبت می‌کنه؟'}
]
}
]
},
seeAlso: {
title: "See also — Possessives ('s and of)",
titleFa: "همچنین ببین — مالکیت با 's و of",
col1Label: 'Possessive Form',
col2Label: 'معنی',
intro: "برای نشون دادن مالکیت در انگلیسی دو روش اصلی داریم: ۱) برای انسان‌ها و موجودات زنده از <strong>'s</strong> (یا 's' در جمع) استفاده می‌کنیم. ۲) برای اشیاء و چیزها از <strong>of</strong> استفاده می‌کنیم. تفاوت مهم اینه که 's بعد از مالک میاد ولی of قبلش — یعنی ترتیب کلمات معکوس می‌شه.",
pairs: [
{full:"Kate's scarf", short:'روسری کیت', type:'apostrophe-s'},
{full:"Jack's shirt", short:'پیراهن جک', type:'apostrophe-s'},
{full:"Teachers' office", short:'دفتر معلم‌ها (جمع)', type:'plural-s'},
{full:'The wheels of the car', short:'چرخ‌های ماشین', type:'of'},
{full:'The legs of the chair', short:'پایه‌های صندلی', type:'of'},
{full:'The door of the room', short:'درب اتاق', type:'of'}
],
otherForms: [
"👤 برای افراد یک‌نفره: <strong>'s</strong> اضافه می‌کنیم — مثلاً <code>Kate's scarf</code> (روسری کیت)",
"👥 برای افراد جمع که با s تموم می‌شه: فقط <strong>'</strong> (آپاستروف) — مثلاً <code>Teachers' office</code> (دفتر معلم‌ها)",
"🪑 برای اشیاء از <strong>of</strong> استفاده می‌کنیم — مثلاً <code>The wheels of the car</code> (چرخ‌های ماشین)، نه «Car's wheels»"
]
},
listeningReadingWriting: {
title: 'Listening, Reading and Writing',
sections: [
{
type: 'find-it',
title: 'Find it',
desc: 'افعال «حال استمراری» را در متن زیر پیدا کن.',
text: "This is Paul. He is a tourist from Germany. He's going into a gift shop with his wife. They are opening the door of the shop. Now, they're talking to the shopkeeper to find suitable gifts for their daughters. Paul's daughters are living in Spain now.",
targets: ['is going','are opening',"they're talking",'are living']
},
{
type: 'tell-classmates',
title: 'Tell Your Classmates',
desc: 'پنج فعالیت که حدس می‌زنی اعضای خانواده‌ات الان دارن انجام می‌دن، به همکلاسی‌هات بگو.',
example: 'I guess my brother is praying now.'
},
{
type: 'listen-questions-A',
title: 'A — Listen and answer',
desc: 'به مکالمه گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'Where is Brenda from?', template:'She is from _____.'},
{q:"What's Brenda doing?", template:'She _____ the website.'},
{q:'What is her problem?', template:'_____.'}
]
},
{
type: 'listen-questions-B',
title: 'B — Listen and answer',
desc: 'به فایل صوتی گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'Where is Mehmet from?', template:'He is from _____.'},
{q:'Where is Mehmet going to?', template:"He's _____."},
{q:"What's he asking about?", template:'_____.'}
]
}
]
},
speakingWriting: {
title: 'Reading, Speaking, Listening and Writing',
desc: 'سؤالات روی Card A را بخون. سپس از همکلاسی‌ها بپرس و جواب‌ها را روی Card B بنویس.',
cardA: [
'What are you doing now?',
'What is he/she doing?',
'Who is brave?',
"What's our teacher doing?",
'What is your best friend doing?',
'Who is doing his/her homework?'
],
rolePlay: {
title: 'Role Play',
desc: 'با یکی از همکلاسی‌هات نقش گردشگر و پذیرشگر هتل رو بازی کنید. از مکالمه درس استفاده کنید.'
}
},
vocabulary: [
{word:'travel',pos:'verb',ipa:'/ˈtrævəl/',fa:'سفر کردن',example:'They are traveling by train.'},
{word:'tourist',pos:'noun',ipa:'/ˈtʊrɪst/',fa:'گردشگر',example:'He is a tourist from Germany.'},
{word:'reservation',pos:'noun',ipa:'/ˌrezərˈveɪʃən/',fa:'رزرو',example:'I have a reservation.'},
{word:'receptionist',pos:'noun',ipa:'/rɪˈsepʃənɪst/',fa:'متصدی پذیرش',example:'Talk to the receptionist.'},
{word:'passport',pos:'noun',ipa:'/ˈpæspɔːrt/',fa:'پاسپورت',example:'Here is her passport.'},
{word:'hotel',pos:'noun',ipa:'/hoʊˈtel/',fa:'هتل',example:'Welcome to our hotel.'},
{word:'room',pos:'noun',ipa:'/ruːm/',fa:'اتاق',example:"It's room 213."},
{word:'wife',pos:'noun',ipa:'/waɪf/',fa:'همسر (زن)',example:'My wife and I.'},
{word:'gift shop',pos:'phrase',ipa:'/ɡɪft ʃɒp/',fa:'مغازه سوغات',example:"She's by the gift shop."},
{word:'buy a ticket',pos:'phrase',ipa:'/baɪ ə ˈtɪkɪt/',fa:'بلیط خریدن',example:'He is buying a ticket.'},
{word:'check the passport',pos:'phrase',ipa:'/tʃek ðə ˈpæspɔːrt/',fa:'پاسپورت را چک کردن',example:'I need to check her passport.'},
{word:'check in',pos:'phrase',ipa:'/tʃek ɪn/',fa:'چک‌این کردن',example:'They check in at the hotel.'},
{word:'check the timetable',pos:'phrase',ipa:'/tʃek ðə ˈtaɪmˌteɪbəl/',fa:'برنامه را چک کردن',example:'He is checking the timetable.'},
{word:'take off',pos:'phrase',ipa:'/teɪk ɒf/',fa:'بلند شدن (هواپیما)',example:'The plane takes off.'},
{word:'land',pos:'verb',ipa:'/lænd/',fa:'فرود آمدن',example:'The plane lands at 8.'},
{word:'exchange money',pos:'phrase',ipa:'/ɪksˈtʃeɪndʒ ˈmʌni/',fa:'تبدیل پول',example:'Where can I exchange money?'},
{word:'fill out the form',pos:'phrase',ipa:'/fɪl aʊt ðə fɔːrm/',fa:'فرم را پر کردن',example:"I'm filling out the form."},
{word:'book a hotel',pos:'phrase',ipa:'/bʊk ə hoʊˈtel/',fa:'هتل رزرو کردن',example:'They book a hotel online.'},
{word:'pack for a trip',pos:'phrase',ipa:'/pæk fɔːr ə trɪp/',fa:'برای سفر بسته‌بندی کردن',example:"I'm packing for a trip."},
{word:'visit',pos:'verb',ipa:'/ˈvɪzɪt/',fa:'دیدن، بازدید کردن',example:'We are visiting Tehran.'},
{word:'stay',pos:'verb',ipa:'/steɪ/',fa:'ماندن',example:'Are you staying here for two nights?'},
{word:'guide book',pos:'noun',ipa:'/ɡaɪd bʊk/',fa:'کتاب راهنما',example:"She's reading the guide book."},
{word:'map',pos:'noun',ipa:'/mæp/',fa:'نقشه',example:'Is Kate checking the map?'}
],
workbook: [
{
type:'multiple-choice-inline',
section:'Reading',
title:'گزینهٔ صحیح را انتخاب کنید.',
titleEn:'Choose the correct forms.',
items:[
{sentence:'My brother and I _____ checking the website.',options:['am','is','are'],correct:2},
{sentence:'The tourist _____ buying gifts.',options:['am','is','are'],correct:1},
{sentence:'The officer _____ checking the passports.',options:['am','is','are'],correct:1},
{sentence:'John and his wife _____ staying here for three days.',options:['am','is','are'],correct:2}
]
},
{
type:'fill-blanks-paragraph',
section:'Reading',
title:'جملات زیر را با زمان حال استمراری کامل نمایید.',
titleEn:'Complete the sentences. (present continuous tense)',
text:'1. I [1] to Mashhad. (travel)\n2. Brenda [2] a room online. (book)\n3. They [3] their car now. (wash)\n4. We [4] money at the airport. (exchange)',
blanks:[
{num:1,answer:'am traveling'},
{num:2,answer:'is booking'},
{num:3,answer:'are washing'},
{num:4,answer:'are exchanging'}
]
},
{
type:'unscramble-sentences',
section:'Reading',
title:'جملات زیر را مرتب کنید.',
titleEn:'Unscramble the following sentences.',
items:[
{scrambled:'form / a reservation / filling out / is / the tourist',answer:'The tourist is filling out a reservation form.'},
{scrambled:'checking / your brother / is / the map / ?',answer:'Is your brother checking the map?'},
{scrambled:'now / your little brothers / what / are / doing / ?',answer:'What are your little brothers doing now?'},
{scrambled:"traveling / my friend's / is / father / now",answer:"My friend's father is traveling now."}
]
},
{
type:'image-sentence-write',
section:'Reading',
title:'برای هر یک از تصاویر یک عبارت بنویسید.',
titleEn:'Write a phrase for each picture.',
items:[
{image:'wb-ex4-1-zahra-notebook.jpg', hint:"Zahra's notebook (مالکیت با 's)", example:true, answer:"Zahra's notebook."},
{image:'wb-ex4-2-iran-map.jpg', hint:'map of Iran', example:true, answer:'The map of Iran.'},
{image:'wb-ex4-3.jpg', hint:'تصویر سوم', expected:'The door of the class.'},
{image:'wb-ex4-4.jpg', hint:'تصویر چهارم', expected:'The window of the house.'},
{image:'wb-ex4-5.jpg', hint:'تصویر پنجم', expected:'The legs of the chair.'},
{image:'wb-ex4-6.jpg', hint:'تصویر ششم', expected:"Ahmad's passport."}
]
},
{
type:'image-sentence-write',
section:'Writing',
title:'برای هر یک از تصاویر زیر یک جمله بنویسید.',
titleEn:'Write a sentence for each picture.',
items:[
{image:'wb-ex5-1-check-timetable.jpg', hint:'check the timetable', example:true, answer:'He is checking the timetable.'},
{image:'wb-ex5-2-shop.jpg', hint:'shop', expected:'She is shopping.'},
{image:'wb-ex5-3-fill-form.jpg', hint:'fill out a form', expected:'He is filling out a form.'},
{image:'wb-ex5-4-check-in.jpg', hint:'check in a hotel', expected:'They are checking in a hotel.'},
{image:'wb-ex5-5-airport.jpg', hint:'go to the airport', expected:'He is going to the airport.'},
{image:'wb-ex5-6-train.jpg', hint:'travel by train', expected:'He is traveling by train.'}
]
},
{
type:'word-search',
section:'Writing',
title:'الف) کلمات مربوط به مضمون درس را در جدول زیر بیابید. (۶ کلمه) — ب) کلماتی را که یافته‌اید در ستون مناسب قرار دهید (اسم/فعل). — پ) با کلماتی که یافته‌اید، جمله بسازید.',
titleEn:'A) Find six travel words. B) Sort them as Verb or Noun. C) Make sentences with them.',
grid:[
['P','N','G','P','A','C','K','H','J'],
['O','I','V','T','I','C','K','E','T'],
['Y','L','W','L','R','B','U','K','A'],
['P','A','S','S','P','O','R','T','L'],
['H','N','S','P','O','O','D','O','S'],
['A','D','U','Q','R','K','C','R','A'],
['F','L','O','A','T','G','S','T','P']
],
targetWords:['PACK','TICKET','PASSPORT','VISA','LAND','FLOAT'],
sortLabels:['Noun (اسم)', 'Verb (فعل)'],
sortGroup1:['TICKET','PASSPORT','VISA'],
sortGroup2:['PACK','LAND','FLOAT'],
sentenceCount:6
},
{
type:'edit-text',
section:'Writing',
title:'یکی از دوستانتان که به آموزشگاه زبان می‌رود، متنی را دربارهٔ این تصویر نوشته و از شما خواسته که در اصلاح آن به او کمک کنید. (۴ غلط)',
titleEn:'Edit the following text. (4 mistakes)',
original:"This is Mrs. Kress. She is Paul wife. She is stand at a gift shop. The door the shop is not open. Mrs. Kress wearing a scarf and a manteau. She wants to buy some gifts for her family.",
corrected:"This is Mrs. Kress. She is Paul's wife. She is standing at a gift shop. The door of the shop is not open. Mrs. Kress is wearing a scarf and a manteau. She wants to buy some gifts for her family.",
mistakes:[
{wrong:'Paul wife', right:"Paul's wife", explain:"باید از 's برای مالکیت استفاده کرد"},
{wrong:'is stand', right:'is standing', explain:'با to be باید فعل + ing بیاد'},
{wrong:'The door the shop', right:'The door of the shop', explain:"باید of برای مالکیت اشیاء استفاده کرد"},
{wrong:'Mrs. Kress wearing', right:'Mrs. Kress is wearing', explain:'فعل to be (is) جا افتاده'}
]
},
{
type:'order-and-write',
section:'Writing',
title:'الف) تصاویر زیر مربوط به سفر یک خانوادهٔ ایرانی است. آنها را بر اساس ترتیب زمانی مرتب کنید. ب) برای هر یک از تصاویر، جمله‌ای بسازید.',
titleEn:'A) Put the pictures in the correct order. B) Write a sentence for each picture.',
actions:[
{image:'wb-ex8-buy-ticket.jpg', label:'buy a ticket'},
{image:'wb-ex8-go-airport.jpg', label:'go to airport'},
{image:'wb-ex8-check-in.jpg', label:'check in'},
{image:'wb-ex8-talk.jpg', label:'talk to (an officer)'},
{image:'wb-ex8-take-off.jpg', label:'take off'},
{image:'wb-ex8-land.jpg', label:'land'}
],
correctOrder:[0,1,2,3,4,5]
},
{
type:'time-sentences',
section:'Writing',
title:'با توجه به تصاویر، جملات زیر را دربارهٔ خودتان کامل کنید.',
titleEn:'Complete the sentences about yourself.',
items:[
{time:'5:30 a.m.', sentence:"It's 5:30 a.m. Now I am praying.", example:true},
{time:'6:00 a.m.', sentence:"It's 6 a.m. _____ now.", placeholder:'مثلاً: I am having breakfast'},
{time:'1:00 p.m.', sentence:"It's 1 p.m. _____ now.", placeholder:'مثلاً: I am eating lunch'},
{time:'5:00 p.m.', sentence:"It's 5 p.m. Now _____.", placeholder:'مثلاً: I am studying English'},
{time:'10:00 p.m.', sentence:"It's 10 p.m. _____ now.", placeholder:'مثلاً: I am sleeping'}
]
},
{
type:'reading-comprehension',
section:'Reading',
title:'الف) مکالمهٔ زیر را بخوانید و زیر زمان «حال استمراری» خط بکشید. ب) بله یا خیر؟ پ) به پرسش‌های زیر پاسخ دهید.',
titleEn:'A) Underline "present continuous tense". B) Yes or No? C) Answer the following questions.',
text:"Frank: Hi Sam! How is it going?\nSam: Fine, thanks. I want to go to Berlin but the fan of my laptop is not working again.\nFrank: Oh, what's the problem with it?\nSam: I'm not sure. It's making a noise. My brother is working on it.\nFrank: When is your flight?\nSam: It's at 5:30 p.m.\nFrank: Don't worry. You still have time. I think it is not serious.",
targets:['is going','is not working',"It's making",'is working','is','is not'],
yesNoQuestions:[
{q:'Frank is traveling to Berlin.', answer:'no'},
{q:"Sam's computer is not working again.", answer:'yes'},
{q:'The flight is at five thirty.', answer:'yes'},
{q:"Sam's father is working on his laptop.", answer:'no'}
],
questions:[
{q:"What's the problem with Sam's computer?", sampleAnswer:'The fan of his laptop is not working / making a noise.'},
{q:'Who is working on his computer?', sampleAnswer:'His brother is working on it.'},
{q:'How is Sam traveling?', sampleAnswer:'He is traveling by plane (flight).'},
{q:'Is the problem serious?', sampleAnswer:"No, Frank thinks it is not serious."}
]
}
],
quiz: [
{q:'They _____ to Mashhad now.',qFa:'الان به مشهد سفر می‌کنن.',options:['travel','traveling','are traveling','is traveling'],correct:2},
{q:'_____ Paul booking a room?',qFa:'پل داره اتاق رزرو می‌کنه؟',options:['Is','Are','Am','Do'],correct:0},
{q:"This is _____ scarf.",qFa:'این روسری کیت‌ـه.',options:['Kate','Kate is','Kates',"Kate's"],correct:3},
{q:'I am buying a _____.',qFa:'دارم بلیط می‌خرم.',options:['ticket','tickets','tikit','tiket'],correct:0},
{q:"What _____ you doing?",qFa:'تو داری چی‌کار می‌کنی؟',options:['is','am','are','do'],correct:2},
{q:"How do you say T-K-T? — _____",qFa:'تلفظ ticket چیه؟',options:['/ˈtɪkɪt/','/teɪkɪt/','/tɪkti/','/tikat/'],correct:0}
]
},
{
num: 3,
title: 'Festivals and Ceremonies',
titleFa: 'جشن‌ها و مراسم',
function: 'Talking about Festivals',
functionFa: 'صحبت درباره جشن‌ها',
grammar: 'Simple Present Tense (do/does)',
grammarFa: 'زمان حال ساده (do/does)',
languageMelody: 'Rising Intonation (Yes/No questions with do/does)',
duration: 30,
color: '#C8E6C9',
conversation: {
desc: 'به مکالمه بین دو دوست گوش دهید.',
lines: [
{speaker:'Elham',role:'student',en:'I just love New Year holidays!',fa:'من خیلی تعطیلات سال نو رو دوست دارم!'},
{speaker:'Nasrin',role:'student',en:"Oh, yes, me too. It's really great.",fa:'وای، بله، منم همینطور. واقعاً عالیه.'},
{speaker:'Elham',role:'student',en:"We normally visit our relatives in Norooz. It's fun!",fa:'ما معمولاً نوروز به دیدن اقواممون می‌ریم. خوش می‌گذره!'},
{speaker:'Nasrin',role:'student',en:'Do you get New Year gifts too?',fa:'عیدی هم می‌گیرید؟'},
{speaker:'Elham',role:'student',en:'Sure! We usually get money. I really like it.',fa:'البته! معمولاً پول می‌گیریم. خیلی دوستش دارم.'},
{speaker:'Nasrin',role:'student',en:"Well..., We always go to my grandparents' houses.",fa:'خب...، ما همیشه به خونه پدربزرگ‌ها و مادربزرگ‌هام می‌ریم.'},
{speaker:'Elham',role:'student',en:"That's nice! Does your grandmother cook the New Year meal?",fa:'چه عالی! مادربزرگت غذای سال نو رو می‌پزه؟'},
{speaker:'Nasrin',role:'student',en:"Actually, she doesn't. My mother makes it.",fa:'راستش، نه. مادرم اون رو درست می‌کنه.'}
]
},
practices: [
{
title: 'Practice 1 — Talking about Festivals and Ceremonies (1)',
titleFa: 'صحبت درباره جشن‌ها و مراسم (۱)',
explanation: "این تمرین درباره <strong>سؤالات بله/خیر با do/does</strong> هست — برای پرسیدن درباره عادت‌ها و کارهای تکراری.",
pairs: [
{q:'Do you buy new clothes for the New Year?',a:'Yes, I do.',qFa:'برای سال نو لباس نو می‌خرید؟',aFa:'بله، می‌خرم.'},
{q:'Do you and your cousins set the Haft Seen table?',a:"No, we don't.",qFa:'تو و عموزاده‌هات سفره هفت‌سین می‌چینید؟',aFa:'نه، نمی‌چینیم.'},
{q:'Do young children color the eggs?',a:'Yes, they usually color them.',qFa:'بچه‌های کوچیک تخم‌مرغ‌ها رو رنگ می‌کنن؟',aFa:'بله، معمولاً رنگ می‌کنن.'},
{q:'Do Chinese people buy goldfish for the New Year?',a:"No, they don't buy goldfish.",qFa:'مردم چین برای سال نو ماهی قرمز می‌خرن؟',aFa:'نه، ماهی قرمز نمی‌خرن.'}
]
},
{
title: 'Practice 2 — Talking about Festivals and Ceremonies (2)',
titleFa: 'صحبت درباره جشن‌ها و مراسم (۲)',
explanation: "این تمرین درباره <code><strong>does + he/she</strong></code> هست. وقتی فاعل سوم شخص مفرد (he/she/it) باشه، از does استفاده می‌کنیم.",
pairs: [
{q:'Does he recite the Holy Quran at the turn of the year?',a:'Yes, he does.',qFa:'موقع تحویل سال قرآن می‌خونه؟',aFa:'بله، می‌خونه.'},
{q:'Does your father give you New Year gifts?',a:"No, he doesn't.",qFa:'پدرت بهت عیدی می‌ده؟',aFa:'نه، نمی‌ده.'},
{q:'Does she have many friends?',a:'Yes, she has many friends.',qFa:'دوستان زیادی داره؟',aFa:'بله، دوستان زیادی داره.'},
{q:'Does your mom make a special food for Norooz?',a:"No, she doesn't make a special food.",qFa:'مامانت برای نوروز غذای ویژه‌ای درست می‌کنه؟',aFa:'نه، غذای ویژه‌ای درست نمی‌کنه.'}
]
}
],
languageMelodySection: {
title: 'Language Melody — Rising Intonation',
titleFa: 'ملودی زبان — لحن صعودی',
desc: 'به لحن صعودی سؤالات «بله/خیر» (با do/does) دقت کن.',
intonationGuide: {
rising: 'لحن <strong>صعودی (↗)</strong>: صدا در پایان جمله <strong>بالا</strong> می‌ره. سؤالاتی که با do یا does شروع می‌شن و جوابشون Yes یا No هست، با این لحن خونده می‌شن. آخر جمله رو با صدای بالارونده تموم کن.'
},
defaultArrow: '↗',
conversation: [
{speaker:'Sam',en:'Shayan, do you like spring?'},
{speaker:'Shayan',en:'Yes, I like spring a lot.'},
{speaker:'Sam',en:'Do you like rainy weather?'},
{speaker:'Shayan',en:'Oh yes! But not on Nature Day.'},
{speaker:'Sam',en:'Why not?'},
{speaker:'Shayan',en:'Because we always go out on 13th of Farvardin.'}
],
examples: [
'Do you like rainy weather?',
'Does it rain a lot in Tehran?',
'Does she cook lunch?',
'Do you tell stories?',
'Does he like spring?',
'Does she eat nuts?'
],
talkToTeacher: 'Wish you a great holiday! • Happy New Year!'
},
grammarSection: {
title: 'Grammar — Simple Present (do/does)',
titleFa: 'دستور زبان — حال ساده (do/does)',
explanation: [
'زمان <code>حال ساده</code> برای کارهایی استفاده می‌شه که <strong>عادت یا تکرار می‌شن</strong> — مثل کارهای روزانه، عادت‌ها، حقایق و علایق.',
'با ضمایر <code>I/you/we/they</code> فعل بدون تغییر می‌مونه: <code>I like</code>. اما با <code>he/she/it</code> به آخر فعل <code>s</code> یا <code>es</code> اضافه می‌کنیم: <code>He likes</code>.',
"برای منفی و سؤال از <code>do</code> یا <code>does</code> کمک می‌گیریم: <code>I don't like</code>, <code>Does she like?</code>"
],
tip: "وقتی از <code>do/does</code> استفاده می‌کنی، فعل اصلی همیشه به شکل ساده می‌مونه — نه <code>likes</code>، بلکه <code>like</code>. مثلاً: <code>Does she like</code> ✓ نه <code>Does she likes</code> ✗",
tables: [
{
title: 'Affirmative (مثبت)',
titleFa: 'مثبت',
headers: ['Subject', 'Verb', 'Object'],
rows: [
['I / We / You / They', 'like', 'New Year holidays.'],
['He / She', 'likes', 'New Year holidays.']
],
examples: [
{en:'We study English.', fa:'ما انگلیسی می‌خونیم.'},
{en:'Yasin reads a newspaper.', fa:'یاسین روزنامه می‌خونه.'},
{en:'Ali watches TV.', fa:'علی تلویزیون نگاه می‌کنه.'},
{en:'Zahra studies her lessons.', fa:'زهرا درس‌هاش رو می‌خونه.'}
]
},
{
title: 'Negative (منفی)',
titleFa: 'منفی',
headers: ['Subject', 'do/does + not', 'Verb', 'Object'],
rows: [
['I / We / You / They', 'do not', 'buy', 'new clothes.'],
['He / She', 'does not', 'buy', 'new clothes.']
],
examples: [
{en:"I don't play tennis.", fa:'تنیس بازی نمی‌کنم.'},
{en:"Zahra doesn't wash the dishes.", fa:'زهرا ظرف نمی‌شوره.'}
]
},
{
title: 'Question (سؤالی)',
titleFa: 'سؤالی',
headers: ['Do/Does', 'Subject', 'Verb', 'Object'],
rows: [
['Do', 'I / we / you / they', 'buy', 'goldfish?'],
['Does', 'he / she / Hamid', 'buy', 'goldfish?']
],
examples: [
{en:'Do you celebrate Norooz?', fa:'نوروز رو جشن می‌گیری؟'},
{en:'Does she bake a cake?', fa:'اون کیک می‌پزه؟'}
]
}
]
},
seeAlso: {
title: 'See also — Possessive Adjectives',
titleFa: 'همچنین ببین — صفات ملکی',
pairs: [
{full:'I → my', short:'مال من'},
{full:'you → your', short:'مال تو / مال شما'},
{full:'he → his', short:'مال او (مرد)'},
{full:'she → her', short:'مال او (زن)'},
{full:'it → its', short:'مال آن'},
{full:'we → our', short:'مال ما'},
{full:'they → their', short:'مال آن‌ها'}
],
otherForms: [
'I read my book.',
'You wash your car.',
'He cleans his room.',
'She studies her lessons.',
'The cat drinks its milk.',
'We paint our house.',
'They eat their lunch.'
]
},
listeningReadingWriting: {
title: 'Listening, Reading and Writing',
sections: [
{
type: 'find-it',
title: 'Find it',
desc: 'افعال «حال ساده» را در متن زیر پیدا کن و زیر آن‌ها خط بکش. سپس «صفات ملکی» را پیدا کن و زیر آن‌ها خط بکش.',
text: "Ahmed is from Turkey and he lives in Istanbul. Fitr Eid is an important religious holiday in his country. He likes this day a lot. It's on the first day of Shawwal. On Fitr Eid, Muslims don't fast. They say their Eid prayers before noon. In all Muslim countries people hold the same ceremony.",
targets: ['is','lives','is','likes',"It's","don't",'say','hold','his','their']
},
{
type: 'tell-classmates',
title: 'Tell Your Classmates',
desc: 'پنج کاری که در نوروز انجام می‌دی به همکلاسی‌هات بگو.',
example: 'I clean my room before Norooz.'
},
{
type: 'listen-questions-A',
title: 'A — Listen and answer',
desc: 'به مکالمه گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'What do they eat?', template:'They eat _____ and _____.'},
{q:'What do they listen to?', template:'They listen to _____.'},
{q:'Do they stay home at Yalda Night?', template:'_____.'}
]
},
{
type: 'listen-questions-B',
title: 'B — Listen and answer',
desc: 'به فایل صوتی گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'Does the New Year start in March?', template:'No, it starts in _____ or _____.'},
{q:'Does it change every year?', template:'Yes, it _____.'},
{q:'What does everyone wear?', template:'_____.'},
{q:'What do older people give to children?', template:'_____.'}
]
}
]
},
speakingWriting: {
title: 'Reading, Speaking, Listening and Writing',
desc: 'سؤالات روی Card A را بخون و از همکلاسی‌ها بپرس.',
cardA: [
'Does your grandparent tell you stories?',
'Do you wear special clothes on New Year holidays?',
'Do you visit your relatives?',
'Do you get gifts?',
'Does your father work on holidays?'
],
rolePlay: {
title: 'Role Play',
desc: 'با همکلاسی‌هات درباره جشن‌های ملی و بین‌المللی صحبت کن.'
}
},
vocabulary: [
{word:'festival',pos:'noun',ipa:'/ˈfestɪvəl/',fa:'جشن',example:'Norooz is a festival.'},
{word:'ceremony',pos:'noun',ipa:'/ˈserəmoʊni/',fa:'مراسم',example:'They hold a ceremony.'},
{word:'New Year',pos:'phrase',ipa:'/njuː jɪər/',fa:'سال نو',example:'Happy New Year!'},
{word:'Norooz',pos:'noun',ipa:'/noʊˈruːz/',fa:'نوروز',example:'Norooz is Persian New Year.'},
{word:'holiday',pos:'noun',ipa:'/ˈhɒlədeɪ/',fa:'تعطیلات',example:'New Year holidays.'},
{word:'celebrate',pos:'verb',ipa:'/ˈseləbreɪt/',fa:'جشن گرفتن',example:'We celebrate Norooz.'},
{word:'visit relatives',pos:'phrase',ipa:'/ˈvɪzɪt ˈrelətɪvz/',fa:'دیدن اقوام',example:'We visit our relatives.'},
{word:'gift',pos:'noun',ipa:'/ɡɪft/',fa:'هدیه',example:'New Year gifts.'},
{word:'goldfish',pos:'noun',ipa:'/ˈɡoʊldfɪʃ/',fa:'ماهی قرمز',example:'Buy goldfish for the New Year.'},
{word:'Haft Seen',pos:'noun',ipa:'/hæft siːn/',fa:'هفت‌سین',example:'Set the Haft Seen table.'},
{word:'recite',pos:'verb',ipa:'/rɪˈsaɪt/',fa:'تلاوت کردن',example:'Recite the Holy Quran.'},
{word:'turn of the year',pos:'phrase',ipa:'/tɜːrn əv ðə jɪər/',fa:'تحویل سال',example:'At the turn of the year.'},
{word:'cook',pos:'verb',ipa:'/kʊk/',fa:'پختن',example:'My grandmother cooks lunch.'},
{word:'make lunch',pos:'phrase',ipa:'/meɪk lʌntʃ/',fa:'ناهار درست کردن',example:'My mother makes lunch.'},
{word:'bake a cake',pos:'phrase',ipa:'/beɪk ə keɪk/',fa:'کیک پختن',example:'She bakes a cake.'},
{word:'set the table',pos:'phrase',ipa:'/set ðə ˈteɪbəl/',fa:'سفره چیدن',example:'They set the table.'},
{word:'sing the national anthem',pos:'phrase',ipa:'/sɪŋ ðə ˈnæʃənəl ˈænθəm/',fa:'سرود ملی خواندن',example:'Students sing the anthem.'},
{word:'hold a ceremony',pos:'phrase',ipa:'/hoʊld ə ˈserəmoʊni/',fa:'مراسم برگزار کردن',example:'They hold a ceremony.'},
{word:'Nature Day',pos:'phrase',ipa:'/ˈneɪtʃər deɪ/',fa:'روز طبیعت',example:'Nature Day is on April 1st.'},
{word:'Farvardin',pos:'noun',ipa:'/færˌvɑːrˈdiːn/',fa:'فروردین',example:'13th of Farvardin.'},
{word:'spring',pos:'noun',ipa:'/sprɪŋ/',fa:'بهار',example:'I like spring.'},
{word:'rainy',pos:'adj',ipa:'/ˈreɪni/',fa:'بارانی',example:'Do you like rainy weather?'},
{word:'eggs',pos:'noun',ipa:'/eɡz/',fa:'تخم‌مرغ‌ها',example:'Color the eggs.'},
{word:'eat nuts',pos:'phrase',ipa:'/iːt nʌts/',fa:'آجیل خوردن',example:'Does she eat nuts?'},
{word:'special',pos:'adj',ipa:'/ˈspeʃəl/',fa:'ویژه',example:'A special food.'},
{word:'tell stories',pos:'phrase',ipa:'/tel ˈstɔːriz/',fa:'داستان گفتن',example:'Do you tell stories?'}
],
workbook: [
{
type:'multiple-choice-inline',
section:'Reading',
title:'گزینهٔ صحیح را انتخاب کنید.',
titleEn:'Choose the correct forms.',
items:[
{sentence:'Jane is a teacher. She _____ French.',options:['teach','teaches'],correct:1},
{sentence:"Emily _____ the dinner table every night.",options:["doesn't set","doesn't sets"],correct:0},
{sentence:"I _____ Molavi's poems in my free time.",options:['read','reads'],correct:0},
{sentence:'Does Tim _____ to the cinema on Fridays?',options:['go','goes'],correct:0},
{sentence:'He _____ know the correct answer.',options:["don't","doesn't"],correct:1},
{sentence:'Do they _____ the table after dinner?',options:['clears','clear'],correct:1}
]
},
{
type:'fill-blanks-paragraph',
section:'Reading',
title:'جاهای خالی را پر کنید. (زمان حال ساده)',
titleEn:'Fill in the blanks. (simple present tense)',
text:'1. Leila [1] some films of Roshd Festival with her mother each year. (watch)\n2. Tom [2] special clothes on festivals. (not wear)\n3. Do Johnny and Danny [3] in the river in the summer? (swim)\n4. Does the ceremony [4] at 8 in the morning? (start)\n5. We [5] our relatives during the week. (not visit)\n6. Bahram and his family [6] on Nature Day. (go out)',
blanks:[
{num:1,answer:'watches'},
{num:2,answer:"doesn't wear"},
{num:3,answer:'swim'},
{num:4,answer:'start'},
{num:5,answer:"don't visit"},
{num:6,answer:'go out'}
]
},
{
type:'fill-blanks-paragraph',
section:'Reading',
title:'جاهای خالی را پر کنید. (صفات ملکی)',
titleEn:'Fill in the blanks. (possessive adjectives)',
text:'1. Parsa likes [1] grandmother a lot.\n2. We have an important ceremony. [2] name is Fitr.\n3. They\'re making dinner. [3] mother isn\'t home.\n4. She always bakes a birthday cake for [4] brother.\n5. I wear [5] new clothes on New Year\'s Day.\n6. She loves [6] colorful dress.',
blanks:[
{num:1,answer:'his'},
{num:2,answer:'Its'},
{num:3,answer:'Their'},
{num:4,answer:'her'},
{num:5,answer:'my'},
{num:6,answer:'her'}
]
},
{
type:'match-sentence-image',
section:'Reading',
title:'عبارات زیر را به تصاویر مرتبط وصل کنید.',
titleEn:'Match the phrases with the pictures.',
sentences:[
{text:'go out on Nature Day', matchTo:'A'},
{text:'visit relatives', matchTo:'B'},
{text:'wash carpets', matchTo:'C'},
{text:'clean the house', matchTo:'D'},
{text:'cook lunch', matchTo:'E'},
{text:'color eggs', matchTo:'F'},
{text:'set the table', matchTo:'G'},
{text:'buy new clothes', matchTo:'H'}
],
images:[
{id:'A', image:'wb-ex4-nature-day.jpg', hint:'روز طبیعت'},
{id:'B', image:'wb-ex4-visit-relatives.jpg', hint:'دیدن اقوام'},
{id:'C', image:'wb-ex4-wash-carpets.jpg', hint:'شستن فرش'},
{id:'D', image:'wb-ex4-clean-house.jpg', hint:'تمیز کردن خانه'},
{id:'E', image:'wb-ex4-cook-lunch.jpg', hint:'پختن ناهار'},
{id:'F', image:'wb-ex4-color-eggs.jpg', hint:'رنگ کردن تخم‌مرغ'},
{id:'G', image:'wb-ex4-set-table.jpg', hint:'چیدن میز'},
{id:'H', image:'wb-ex4-buy-clothes.jpg', hint:'خرید لباس نو'}
]
},
{
type:'fill-blanks-images',
section:'Writing',
title:'با توجه به تصاویر زیر جملات را کامل کنید.',
titleEn:'Complete the sentences with the correct form.',
items:[
{image:'wb-ex5-1-brown-bus.jpg', hint:'آقای براون با اتوبوس', before:'Mr. Brown goes to work by bus. He', after:'his car. (not drive)', answer:"doesn't drive"},
{image:'wb-ex5-2-mahdi-toy.jpg', hint:'مهدی با ماشین اسباب‌بازی', before:'Mahdi plays with his toy car. He', after:"with his father's car. (not play)", answer:"doesn't play"},
{image:'wb-ex5-3-sahar-flowers.jpg', hint:'سحر و گل‌ها', before:"Sahar doesn't water the garden. She", after:'the flowers. (water)', answer:'waters'},
{image:'wb-ex5-4-george-room.jpg', hint:'جورج و اتاق', before:'George cleans his bedroom. He', after:'the garden. (not clean)', answer:"doesn't clean"},
{image:'wb-ex5-5-nafiseh-bag.jpg', hint:'نفیسه و کیف خاکستری', before:"Nafiseh doesn't have a black bag. She", after:'a gray bag. (have)', answer:'has'}
]
},
{
type:'fill-blanks-paragraph',
section:'Writing',
title:'معلمِ پیام از او خواسته است برای روزنامه دیواری مدرسه، متنی دربارهٔ نوروز بنویسد. به پیام در تکمیل متن کمک کنید. (از عبارات صفحات قبل استفاده کنید)',
titleEn:'Complete the text about Norooz with the phrases above.',
text:"I really like New Year holidays. We have a lot of fun. We go shopping and [1]. We [2] our house and [3] our carpets. My cousins and I [4] the eggs. My sister [5] the Haft Seen table. On New Year's Day my mother [6] rice with fish. We always [7] my grandparents and our relatives. And on Nature Day we [8] and play.",
blanks:[
{num:1,answer:'buy new clothes'},
{num:2,answer:'clean'},
{num:3,answer:'wash'},
{num:4,answer:'color'},
{num:5,answer:'sets'},
{num:6,answer:'cooks'},
{num:7,answer:'visit'},
{num:8,answer:'go out'}
]
},
{
type:'word-search',
section:'Writing',
title:'الف) کلمات مربوط به مضمون درس را بیابید. (۵ کلمه) — ب) کلماتی را که یافته‌اید مقابل فعل‌های مرتبط قرار دهید. — پ) برای هر یک از عبارات بالا یک جمله بنویسید.',
titleEn:'A) Find five festival words. B) Write found words in front of the correct verbs. C) Make five sentences.',
grid:[
['F','I','R','E','W','O','R','K','S'],
['C','O','O','K','I','E','S','B','T'],
['E','L','U','N','C','H','M','A','A'],
['R','C','E','R','E','M','O','N','Y'],
['E','T','A','B','L','E','D','K','I'],
['M','S','I','N','G','H','O','L','D'],
['O','W','A','T','C','H','M','A','K'],
['N','B','A','K','E','C','L','E','A'],
['Y','C','L','E','A','R','M','A','D']
],
targetWords:['FIREWORKS','CEREMONY','COOKIES','TABLE','LUNCH'],
verbNounMatch:[
{verb:'watch', noun:'fireworks'},
{verb:'hold', noun:'a ceremony'},
{verb:'bake', noun:'cookies'},
{verb:'clear', noun:'the table'},
{verb:'make', noun:'lunch'}
],
sentenceCount:5
},
{
type:'edit-text',
section:'Writing',
title:'بهاره به مناسبت سال نو متنی را تهیه کرده است تا آن را بر روی وب‌نوشت خود قرار دهد. از شما خواسته متن نوشته‌شده را ویرایش کنید. (۶ غلط)',
titleEn:'Edit the text. (six mistakes)',
original:"Hi, my name is Bahareh. I'm from Iran. In our country, people celebrates the first day of spring. That's on March 20th or 21st. This is our New Year. The celebration continues for two weeks. Before New Year we cleans our houses and buy new clothes. My father give some money to the poor people. My sister and I always sets the Haft Seen Table. We put the Holy Quran and a mirror on the table too. On New Year day, we sit around the table and recites the Holy Quran. My mother cook a special food for lunch. Then we visit our relatives.",
corrected:"Hi, my name is Bahareh. I'm from Iran. In our country, people celebrate the first day of spring. That's on March 20th or 21st. This is our New Year. The celebration continues for two weeks. Before New Year we clean our houses and buy new clothes. My father gives some money to the poor people. My sister and I always set the Haft Seen Table. We put the Holy Quran and a mirror on the table too. On New Year day, we sit around the table and recite the Holy Quran. My mother cooks a special food for lunch. Then we visit our relatives.",
mistakes:[
{wrong:'people celebrates', right:'people celebrate', explain:'people جمع است، پس فعل s نمی‌گیرد'},
{wrong:'we cleans', right:'we clean', explain:'با we فعل s نمی‌گیرد'},
{wrong:'My father give', right:'My father gives', explain:'با father (سوم‌شخص مفرد) فعل s می‌گیرد'},
{wrong:'I always sets', right:'I always set', explain:'با I فعل s نمی‌گیرد'},
{wrong:'we ... recites', right:'we ... recite', explain:'با we فعل s نمی‌گیرد'},
{wrong:'My mother cook', right:'My mother cooks', explain:'با mother (سوم‌شخص مفرد) فعل s می‌گیرد'}
],
rewriteSlots:8,
rewriteLabel:'ب) این متن را دربارهٔ خود بازنویسی کنید (Rewrite the text about yourself):'
},
{
type:'yes-no-table',
section:'Writing',
title:'بله یا خیر؟',
titleEn:'Yes or No?',
items:[
'We eat fruits at Yalda Night.',
'My mother cooks a special food on Norooz day.',
'We watch fireworks on Sha\'ban 15th.',
'I color eggs for our Haft Seen table.',
'We visit our relatives on holidays.'
]
},
{
type:'reading-comprehension',
section:'Reading',
title:'الف) متن را بخوانید و زیر افعال «حال ساده» خط بکشید. ب) بله یا خیر؟ پ) به پرسش‌ها پاسخ دهید. ت) دربارهٔ فعالیت‌های خود در یکی از مناسبت‌های اسلامی-ایرانی چند جمله بنویسید.',
titleEn:'A) Underline "simple present tense". B) Yes or No? C) Answer the questions. D) Write about an Islamic-Iranian festival.',
text:'"Solnal" is one of Korea\'s holidays. Solnal is the Korean New Year. Families travel to visit relatives. An important part of the holiday is the "Sebae". It means showing respect for old family members. People eat rice cakes and noodles and play old games. People don\'t sleep and are awake till midnight to say goodbye to the past year. And they think if you sleep, your hair changes white. Most children know this is not true, but they like to stay awake.',
targets:['is','is','travel','means','eat','play',"don't sleep",'are','think','changes','know','like'],
yesNoQuestions:[
{q:'Koreans visit their families on Solnal.', answer:'yes'},
{q:'Old family members are important for Koreans.', answer:'yes'},
{q:'They eat different foods on Solnal.', answer:'yes'},
{q:'They stay awake all night.', answer:'yes'},
{q:"People's hair changes white in Solnal.", answer:'no'}
],
questions:[
{q:'What is "Solnal"?', sampleAnswer:'It is the Korean New Year / one of Korea\'s holidays.'},
{q:'Do Korean people eat chocolate cakes on "Solnal"?', sampleAnswer:'No, they eat rice cakes and noodles.'},
{q:'Does "Solnal" mean "family members"?', sampleAnswer:'No. "Sebae" means showing respect for old family members.'},
{q:'Do they play new games?', sampleAnswer:'No, they play old games.'}
],
rewriteSlots:7,
rewriteLabel:'ت) دربارهٔ فعالیت‌های خود در یک مناسبت اسلامی-ایرانی بنویس (Write about an Islamic-Iranian Festival):'
}
],
quiz: [
{q:'My mother _____ a cake on Fridays.',qFa:'مادرم جمعه‌ها کیک می‌پزه.',options:['bake','bakes','baking','baked'],correct:1},
{q:'_____ you celebrate Norooz?',qFa:'نوروز رو جشن می‌گیری؟',options:['Is','Are','Do','Does'],correct:2},
{q:'Ali _____ play tennis on Saturdays.',qFa:'علی شنبه‌ها تنیس بازی نمی‌کنه.',options:["doesn't","don't","isn't","aren't"],correct:0},
{q:"On Norooz, we set the _____ Seen table.",qFa:'نوروز سفره هفت‌سین می‌چینیم.',options:['Five','Six','Seven','Eight'],correct:2},
{q:'Children _____ eggs on Norooz.',qFa:'بچه‌ها نوروز تخم‌مرغ‌ها رو رنگ می‌کنن.',options:['cook','color','bake','buy'],correct:1},
{q:'How do you say "happy" in greetings? — _____ New Year!',qFa:'سال نو مبارک:',options:['Sad','Happy','Big','Many'],correct:1}
]
},
{
num: 4,
title: 'Services',
titleFa: 'خدمات',
function: 'Talking about Services',
functionFa: 'صحبت درباره خدمات',
grammar: 'Wh-Questions',
grammarFa: 'سؤالات با کلمات پرسشی',
languageMelody: 'Falling Intonation (Wh-questions)',
duration: 30,
color: '#E0E0FA',
conversation: {
desc: 'به مکالمه بین پدرام و یک گردشگر گوش دهید.',
lines: [
{speaker:'Tourist',role:'student',en:'Excuse me sir! Can you help me please?',fa:'ببخشید آقا! می‌تونید کمکم کنید؟'},
{speaker:'Pedram',role:'student',en:'What can I do for you?',fa:'چطور می‌تونم کمکتون کنم؟'},
{speaker:'Tourist',role:'student',en:'I want a postcard, an envelope and a stamp.',fa:'یه کارت پستال، یه پاکت و یه تمبر می‌خوام.'},
{speaker:'Pedram',role:'student',en:'Umm…, you can get them from a post office.',fa:'اوم...، می‌تونید از اداره پست تهیه‌شون کنید.'},
{speaker:'Tourist',role:'student',en:'Where is the post office?',fa:'اداره پست کجاست؟'},
{speaker:'Pedram',role:'student',en:"Actually it's near here. It's just round the corner.",fa:'در واقع همین نزدیکیه. درست سر این پیچ‌ـه.'},
{speaker:'Tourist',role:'student',en:'Good! Thank you. What time does it open?',fa:'خوبه! ممنونم. چه ساعتی باز می‌کنه؟'},
{speaker:'Pedram',role:'student',en:'It opens at 8.',fa:'ساعت ۸ باز می‌کنه.'},
{speaker:'Tourist',role:'student',en:'Thanks a lot!',fa:'خیلی ممنون!'}
]
},
practices: [
{
title: 'Practice 1 — Talking about Services (1)',
titleFa: 'صحبت درباره خدمات (۱)',
explanation: "این تمرین درباره <strong>سؤالات Wh + to be</strong> هست — مثل Where is...?, What is...?, Who is...?",
pairs: [
{q:'What is her job?',a:"She's an employee.",qFa:'شغلش چیه؟',aFa:'کارمنده.'},
{q:'Where is the post office?',a:"It's over there.",qFa:'اداره پست کجاست؟',aFa:'اونجاست.'},
{q:"Who's that man?",a:'He is a postman.',qFa:'اون مرد کیه؟',aFa:'پستچی‌ـه.'},
{q:'When is the break?',a:"It's at 9:30.",qFa:'استراحت کی هست؟',aFa:'ساعت ۹:۳۰.'}
]
},
{
title: 'Practice 2 — Talking about Services (2)',
titleFa: 'صحبت درباره خدمات (۲)',
explanation: "این تمرین درباره <strong>سؤالات Wh + do/does</strong> هست — برای پرسیدن جزئیات درباره کارها و فعالیت‌ها.",
pairs: [
{q:'What time does it open?',a:'It opens at 8 in the morning.',qFa:'چه ساعتی باز می‌کنه؟',aFa:'ساعت ۸ صبح باز می‌کنه.'},
{q:'When do they work?',a:'They work from Saturday to Wednesday.',qFa:'کی کار می‌کنن؟',aFa:'از شنبه تا چهارشنبه.'},
{q:'Who helps lost children?',a:'The police help them.',qFa:'کی به بچه‌های گم‌شده کمک می‌کنه؟',aFa:'پلیس بهشون کمک می‌کنه.'},
{q:'Where does she buy stamps?',a:'She buys them from a post office.',qFa:'تمبر از کجا می‌خره؟',aFa:'از اداره پست می‌خره.'},
{q:'Why does he go to work by bus?',a:"Because it's fast and cheap.",qFa:'چرا با اتوبوس می‌ره سر کار؟',aFa:'چون سریع و ارزونه.'},
{q:'How do you come to school?',a:'I take a bus.',qFa:'چطور به مدرسه می‌آی؟',aFa:'با اتوبوس میام.'}
]
}
],
languageMelodySection: {
title: 'Language Melody — Falling Intonation',
titleFa: 'ملودی زبان — لحن نزولی',
desc: 'به مکالمه گوش بده و به لحن نزولی سؤالات «Wh-» دقت کن.',
intonationGuide: {
falling: 'لحن <strong>نزولی (↘)</strong>: صدا در پایان جمله <strong>پایین</strong> می‌آد. سؤالاتی که با کلمات پرسشی Wh (مثل What/Where/When/Who/Why/How) شروع می‌شن، با این لحن خونده می‌شن — برخلاف سؤالات بله/خیر که صعودی‌ان. آخر جمله رو با صدای پایین‌رونده تموم کن.'
},
defaultArrow: '↘',
conversation: [
{speaker:'Clara',en:"Excuse me sir! I'm lost."},
{speaker:'Police officer',en:"Don't worry. What's your name?"},
{speaker:'Clara',en:"My name's Clara."},
{speaker:'Police officer',en:'Where do you live?'},
{speaker:'Clara',en:'On Main Street, near the gas station.'},
{speaker:'Police officer',en:"Don't worry. I can take you home."},
{speaker:'Clara',en:'Thank you sir.'}
],
examples: [
"What's your name?",
'How old are you?',
'Where do you live?',
'Why are you here?',
'When does it open?',
'Who is that man?'
],
talkToTeacher: "I'd like to know about ... ."
},
grammarSection: {
title: 'Grammar — Wh-Questions',
titleFa: 'دستور زبان — سؤالات با Wh',
explanation: [
'سؤالات با <code>Wh-</code> کلمات (مثل <code>What, Where, When, Who, Why, How</code>) برای گرفتن اطلاعات کامل استفاده می‌شن — جوابشون فقط بله/خیر نیست.',
'ساختار سؤال Wh: <strong>کلمه پرسشی + فعل کمکی + فاعل + فعل اصلی</strong>.',
'با فعل <code>to be</code>: <code>Where is the bank?</code> — با فعل‌های دیگه از <code>do/does</code> استفاده می‌کنیم: <code>Where do you live?</code>'
],
tip: "هر کلمه پرسشی برای یه نوع اطلاعات استفاده می‌شه: <code>What</code> (چی)، <code>Where</code> (کجا)، <code>When</code> (کی)، <code>Who</code> (کی - شخص)، <code>Why</code> (چرا)، <code>How</code> (چطور).",
tables: [
{
title: 'Wh + to be',
titleFa: 'با فعل to be',
headers: ['Wh', 'be', 'Subject'],
rows: [
['What / Where', 'is', 'that?'],
['What / Where', 'are', 'those?'],
['Who', 'is', 'your best friend?']
],
examples: [
{en:'Who is your best friend?', fa:'بهترین دوستت کیه؟'}
]
},
{
title: 'Wh + do/does',
titleFa: 'با do/does',
headers: ['Wh', 'do/does', 'Subject', 'Verb'],
rows: [
['When / Where / Why / How', 'do', 'I / you / we / they', 'go?'],
['When / Where / Why / How', 'does', 'he / she', 'go?']
],
examples: [
{en:'What do you study? — I study French.', fa:'چی می‌خونی؟ — فرانسوی می‌خونم.'},
{en:'Where do you live? — We live in Marivan.', fa:'کجا زندگی می‌کنی؟ — تو مریوان زندگی می‌کنیم.'},
{en:'What does your father do? — He teaches English.', fa:'پدرت چی‌کاره‌ست؟ — انگلیسی درس می‌ده.'},
{en:'When does she wake up? — She wakes up at 6:00.', fa:'کی بیدار می‌شه؟ — ساعت ۶ بیدار می‌شه.'},
{en:'Who helps children? — The teacher helps children.', fa:'کی به بچه‌ها کمک می‌کنه؟ — معلم به بچه‌ها کمک می‌کنه.'}
]
}
]
},
seeAlso: {
title: 'See also — Adverbs of Frequency',
titleFa: 'همچنین ببین — قیدهای تکرار',
pairs: [
{full:'always', short:'همیشه (۱۰۰٪)'},
{full:'usually', short:'معمولاً'},
{full:'often', short:'اغلب'},
{full:'sometimes', short:'گاهی'},
{full:'never', short:'هرگز (۰٪)'}
],
otherForms: [
'They never come late.',
'She always studies hard.',
'I always wake up at 5:30.',
'He often plays outside.'
]
},
listeningReadingWriting: {
title: 'Listening, Reading and Writing',
sections: [
{
type: 'find-it',
title: 'Find it',
desc: 'سؤالات Wh- را در مکالمه زیر پیدا کن و زیر آن‌ها خط بکش.',
text: "Parsa: What's your favorite job? Hamid: I like to be a firefighter. Parsa: What does a firefighter do? Hamid: He puts out fire and saves people's lives. Parsa: And is it an easy job?! Hamid: No! Actually it's very hard. Parsa: When does a firefighter go to work? Hamid: I think he goes to work on shifts. Parsa: Oh! Where does he work? Hamid: At a fire station. Parsa: Is there a fire station near here? Hamid: Yes, there's one over there.",
targets: ['What','What','When','Where']
},
{
type: 'tell-classmates',
title: 'Tell Your Classmates',
desc: 'پنج سؤال درباره مکان‌های شهر از همکلاسی‌هات بپرس.',
example: 'Where is the bank?'
},
{
type: 'listen-questions-A',
title: 'A — Listen and answer',
desc: 'به مکالمه گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'What does he do?', template:'He is _____.'},
{q:'Where does he work?', template:'He _____.'},
{q:'When does his work start?', template:'_____.'}
]
},
{
type: 'listen-questions-B',
title: 'B — Listen and answer',
desc: 'به فایل صوتی گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'What does Amir do?', template:'He is a _____.'},
{q:'Where does he work?', template:'He works at _____.'},
{q:'When does he go to work?', template:'He goes _____.'},
{q:'What time does he work?', template:'_____.'}
]
}
]
},
speakingWriting: {
title: 'Reading, Speaking, Listening and Writing',
desc: 'سؤالات روی Card A را بخون و از همکلاسی‌ها بپرس.',
cardA: [
"What's your name?",
'What do you do?',
'How old are you?',
'Where do you live?',
'What time do you wake up?',
'Why do you learn English?',
'When does your school start?'
],
rolePlay: {
title: 'Role Play',
desc: 'با همکلاسی‌هات درباره خدمات شهرتون صحبت کن. از مکالمه درس استفاده کن.'
}
},
vocabulary: [
{word:'service',pos:'noun',ipa:'/ˈsɜːrvɪs/',fa:'خدمات',example:'Public services.'},
{word:'post office',pos:'phrase',ipa:'/poʊst ˈɒfɪs/',fa:'اداره پست',example:'Where is the post office?'},
{word:'postcard',pos:'noun',ipa:'/ˈpoʊstkɑːrd/',fa:'کارت پستال',example:'I want a postcard.'},
{word:'envelope',pos:'noun',ipa:'/ˈenvəloʊp/',fa:'پاکت نامه',example:'I need an envelope.'},
{word:'stamp',pos:'noun',ipa:'/stæmp/',fa:'تمبر',example:'Buy stamps from the post office.'},
{word:'postman',pos:'noun',ipa:'/ˈpoʊstmæn/',fa:'پستچی',example:'He is a postman.'},
{word:'employee',pos:'noun',ipa:'/ɪmˈplɔɪiː/',fa:'کارمند',example:"She's an employee."},
{word:'job',pos:'noun',ipa:'/dʒɒb/',fa:'شغل',example:'What is her job?'},
{word:'break',pos:'noun',ipa:'/breɪk/',fa:'استراحت',example:'When is the break?'},
{word:'open',pos:'verb',ipa:'/ˈoʊpən/',fa:'باز کردن',example:'It opens at 8.'},
{word:'work',pos:'verb',ipa:'/wɜːrk/',fa:'کار کردن',example:'They work from Saturday.'},
{word:'police',pos:'noun',ipa:'/pəˈliːs/',fa:'پلیس',example:'The police help them.'},
{word:'lost',pos:'adj',ipa:'/lɒst/',fa:'گم‌شده',example:'Lost children.'},
{word:'fast',pos:'adj',ipa:'/fæst/',fa:'سریع',example:"It's fast and cheap."},
{word:'cheap',pos:'adj',ipa:'/tʃiːp/',fa:'ارزان',example:"It's cheap."},
{word:'take a bus',pos:'phrase',ipa:'/teɪk ə bʌs/',fa:'با اتوبوس رفتن',example:'I take a bus.'},
{word:'call the emergency',pos:'phrase',ipa:'/kɔːl ði ɪˈmɜːrdʒənsi/',fa:'تماس با اورژانس',example:'Call 115.'},
{word:'send an e-mail',pos:'phrase',ipa:'/send ən ˈiːmeɪl/',fa:'ایمیل فرستادن',example:'I want to send an e-mail.'},
{word:'take out money',pos:'phrase',ipa:'/teɪk aʊt ˈmʌni/',fa:'پول گرفتن (ATM)',example:'Take out money from the ATM.'},
{word:'get on a bus',pos:'phrase',ipa:'/ɡet ɒn ə bʌs/',fa:'سوار اتوبوس شدن',example:'I get on a bus.'},
{word:'get off a bus',pos:'phrase',ipa:'/ɡet ɒf ə bʌs/',fa:'پیاده شدن از اتوبوس',example:'I get off a bus.'},
{word:'round the corner',pos:'phrase',ipa:'/raʊnd ðə ˈkɔːrnər/',fa:'سر پیچ، نزدیک',example:"It's round the corner."}
],
workbook: [
{
type:'multiple-choice-inline',
section:'Reading',
title:'گزینهٔ صحیح را انتخاب کنید.',
titleEn:'Choose the correct answer.',
items:[
{sentence:'A: _____ do the children play football? — B: They play outside.',options:['Who','Why','Where'],correct:2},
{sentence:'A: _____ does she take the bus? — B: Because it\'s fast.',options:['How','Who','Why'],correct:2},
{sentence:'A: _____ do the banks open? — B: At 8 o\'clock.',options:['What','When','Where'],correct:1},
{sentence:'A: _____ works in the ER? — B: Doctors work there.',options:['Who','What','When'],correct:0},
{sentence:'A: _____ is on the table? — B: The radio.',options:['How','Where','What'],correct:2},
{sentence:'A: _____ do you go to work every morning? — B: I go to work by car.',options:['How','Where','Why'],correct:0}
]
},
{
type:'make-questions',
section:'Reading',
title:'با افزودن do یا does پرسش مناسب بسازید.',
titleEn:'Make correct questions by adding "do" or "does".',
example:{wrong:'How Ali go to school?', right:'How does Ali go to school?'},
items:[
{prompt:'What you do in your free time?', answer:'What do you do in your free time?'},
{prompt:'When your brother get up in the morning?', answer:'When does your brother get up in the morning?'},
{prompt:'Where a baker work?', answer:'Where does a baker work?'},
{prompt:'How she go to school?', answer:'How does she go to school?'},
{prompt:'Why they learn English?', answer:'Why do they learn English?'}
]
},
{
type:'match-pairs',
section:'Reading',
title:'پرسش‌ها را به پاسخ مناسب وصل کنید.',
titleEn:'Match the questions with the correct answers.',
pairs:[
{q:'Where do they stay on their holiday?', a:'I think in a hotel.', letter:'b'},
{q:'When does the festival start?', a:'It starts in March.', letter:'d'},
{q:'Why does Mike come late to school?', a:'Because his house is far.', letter:'a'},
{q:'What does a firefighter do?', a:'He puts out fire.', letter:'c'}
]
},
{
type:'rewrite-adverbs',
section:'Writing',
title:'جملات زیر را با توجه به کلمات داخل کمانک بازنویسی کنید.',
titleEn:'Rewrite the following sentences with the given words.',
example:{original:'They go to the movies. (often)', answer:'They often go to the movies.'},
items:[
{original:'He reads the newspaper. (sometimes)', answer:'He sometimes reads the newspaper.'},
{original:'She helps her daughter with her homework. (often)', answer:'She often helps her daughter with her homework.'},
{original:'We watch television in the evening. (usually)', answer:'We usually watch television in the evening.'},
{original:'I eat vegetables and fruits. (always)', answer:'I always eat vegetables and fruits.'},
{original:'They hire a taxi to work. (never)', answer:'They never hire a taxi to work.'}
]
},
{
type:'fill-blanks-images',
section:'Writing',
title:'با توجه به تصاویر، جاهای خالی را با کلمات پرسشی (Wh) پر کنید. سپس به آن‌ها پاسخ دهید.',
titleEn:'Fill in the blanks with Wh-Questions. Then answer the questions.',
withAnswer:true,
items:[
{image:'wb-ex5-1-sleep.jpg', hint:'9:00 p.m.', before:'', after:'do you sleep at night?', answer:'When', answerPlaceholder:'پاسخ: At 9 p.m.'},
{image:'wb-ex5-2-school.jpg', hint:'رفتن به مدرسه', before:'', after:'do they go to school?', answer:'How', answerPlaceholder:'پاسخ: By bus / on foot...'},
{image:'wb-ex5-3-brown-live.jpg', hint:'محل زندگی آقای براون', before:'', after:'does Mr. Brown live?', answer:'Where', answerPlaceholder:'پاسخ: In...'},
{image:'wb-ex5-4-breakfast.jpg', hint:'نوشیدنی صبحانه', before:'', after:'does she drink for breakfast?', answer:'What', answerPlaceholder:'پاسخ: Milk / tea...'},
{image:'wb-ex5-5-nervous.jpg', hint:'دلیل اضطراب', before:'', after:'is he nervous?', answer:'Why', answerPlaceholder:'پاسخ: Because...'}
]
},
{
type:'match-3way',
section:'Reading',
title:'تصاویر و پرسش و پاسخ‌های مرتبط را به هم وصل کنید.',
titleEn:'Match the pictures with the questions and answers.',
questions:[
{num:1, q:'Who plays with his friends?', answerLetter:'c'},
{num:2, q:'Where is the driver?', answerLetter:'a'},
{num:3, q:'What does a firefighter do?', answerLetter:'b'},
{num:4, q:'When do you wake up in the morning?', answerLetter:'e'},
{num:5, q:'How do the children go to school?', answerLetter:'d'}
],
answers:[
{letter:'a', text:"He's at the gas station."},
{letter:'b', text:'He puts out fire and saves lives.'},
{letter:'c', text:'Mahdi plays with his friends.'},
{letter:'d', text:'They always go by bus.'},
{letter:'e', text:'I usually wake up very early.'}
],
images:[
{id:'A', image:'wb-ex6-a.jpg', hint:'تصویر A'},
{id:'B', image:'wb-ex6-b.jpg', hint:'تصویر B'},
{id:'C', image:'wb-ex6-c.jpg', hint:'تصویر C'},
{id:'D', image:'wb-ex6-d.jpg', hint:'تصویر D'},
{id:'E', image:'wb-ex6-e.jpg', hint:'تصویر E'}
]
},
{
type:'word-search',
section:'Writing',
title:'الف) کلمات مرتبط با مضمون درس را پیدا کنید و آن‌ها را در جای خالی جمله‌ها بنویسید. (۶ کلمه) — ب) کلمات را در ستون مناسب قرار دهید (اسم/فعل/صفت). — پ) با کلماتی که یافته‌اید چند جمله بسازید.',
titleEn:'A) Find six service words and fill the blanks. B) Sort as Noun/Verb/Adjective. C) Write sentences.',
grid:[
['H','I','R','E','S','C','W'],
['A','A','C','G','I','L','U'],
['R','B','L','E','R','E','L'],
['D','E','E','T','D','A','B'],
['A','C','C','O','U','N','T'],
['Q','V','T','F','I','R','E'],
['S','F','N','F','M','R','S']
],
targetWords:['HIRE','FIRE','ACCOUNT','HARD','CLEAN','GET OFF'],
fillSentences:[
{sentence:'A firefighter puts out _____.', answer:'fire'},
{sentence:'Mr. Ahmadi goes to work by taxi. He _____ a taxi.', answer:'hires'},
{sentence:'Mahya has some money. She wants to open an _____ (in the bank).', answer:'account'},
{sentence:'get on a bus ≠ _____ a bus.', answer:'get off'},
{sentence:'Pilots have a _____ job. (≠ easy)', answer:'hard'},
{sentence:'We try to keep the city _____. (≠ dirty)', answer:'clean'}
],
sortLabels3:['Noun (اسم)', 'Verb (فعل)', 'Adjective (صفت)'],
sortGroupN:['fire','account'],
sortGroupV:['hire','get off'],
sortGroupA:['hard','clean'],
sentenceCount:4
},
{
type:'edit-text',
section:'Writing',
title:'امیرعلی می‌خواهد برای انجمن زبان مدرسهٔ خود پرسش‌نامه‌ای با عنوان «خدمات شهری» تنظیم کند. از شما خواسته آن را بررسی و در صورت نیاز اصلاح کنید. (۵ غلط)',
titleEn:'Edit the following questionnaire. (5 mistakes)',
original:"1. Do your father use an E-ticket?\n2. Are there a hospital near your house?\n3. Does you give money to charity?\n4. How does you keep your city clean?\n5. Does your classmates do volunteer work for your school?",
corrected:"1. Does your father use an E-ticket?\n2. Is there a hospital near your house?\n3. Do you give money to charity?\n4. How do you keep your city clean?\n5. Do your classmates do volunteer work for your school?",
mistakes:[
{wrong:'Do your father', right:'Does your father', explain:'father سوم‌شخص مفرد است، پس Does'},
{wrong:'Are there a hospital', right:'Is there a hospital', explain:'hospital مفرد است، پس Is there'},
{wrong:'Does you give', right:'Do you give', explain:'با you از Do استفاده می‌شود'},
{wrong:'How does you keep', right:'How do you keep', explain:'با you از do استفاده می‌شود'},
{wrong:'Does your classmates', right:'Do your classmates', explain:'classmates جمع است، پس Do'}
]
},
{
type:'yes-no-table',
section:'Writing',
title:'بله یا خیر؟',
titleEn:'Yes or No?',
items:[
'I take out money from ATM once a week.',
'Our school never takes us to museums.',
'I like to do voluntary work.',
'I always send an e-mail to my friend.',
'I usually use an E-Ticket to get on the bus.',
'In my family, we always donate blood.'
]
},
{
type:'reading-comprehension',
section:'Reading',
title:'الف) فرانک دربارهٔ گردش علمی مدرسهٔ خود متن زیر را نوشته است. آن را بخوانید و زیر «قیدهای تکرار» خط بکشید. ب) بله یا خیر؟ پ) سؤال‌های زیر را دربارهٔ اردوی مدرسهٔ خود پاسخ دهید.',
titleEn:'A) Underline "adverbs of frequency". B) Yes or No? C) Answer the questions about yourself.',
text:'We sometimes go out with our school. We go with a school bus. We have a lot of fun. Some of our teachers come with us. We often visit a museum. We sometimes meet a famous writer. The writer usually tells us some interesting stories. At noon we pray and have lunch. In the afternoon we go to a park and play and have a lot of fun. We come home at 6 p.m. and go to bed early.',
targets:['sometimes','often','sometimes','usually'],
targetsLabel:'قیدهای تکرار در متن',
yesNoQuestions:[
{q:'The students always go to a museum.', answer:'no'},
{q:'Sometimes they meet a famous person.', answer:'yes'},
{q:"They don't stay up late at night.", answer:'yes'},
{q:'The students have a good time.', answer:'yes'},
{q:'They listen to stories.', answer:'yes'}
],
questions:[
{q:'Where do you usually go on school trips?', sampleAnswer:'(your answer) We usually go to...'},
{q:'How do you go there?', sampleAnswer:'(your answer) We go by...'},
{q:'What special activities do you do?', sampleAnswer:'(your answer) We...'},
{q:'When do you usually come back?', sampleAnswer:'(your answer) We come back at...'},
{q:'Do you enjoy school trips?', sampleAnswer:'(your answer) Yes, I do. / No, I don\'t.'}
]
}
],
quiz: [
{q:'_____ is your school? — On Azadi Street.',qFa:'مدرسه‌ات کجاست؟',options:['What','Where','Who','When'],correct:1},
{q:'_____ time does the post office open?',qFa:'اداره پست چه ساعتی باز می‌کنه؟',options:['What','Where','When','How'],correct:0},
{q:'_____ helps lost people? — The police.',qFa:'کی به افراد گم‌شده کمک می‌کنه؟',options:['Who','When','Where','How'],correct:0},
{q:'_____ do you come to school? — By bus.',qFa:'چطور به مدرسه می‌آی؟',options:['Why','How','When','What'],correct:1},
{q:'You can take out money at the _____.',qFa:'می‌تونی از خودپرداز پول بگیری.',options:['ATM','Bank','Hotel','Post'],correct:0},
{q:'I want to send a letter. I need a _____.',qFa:'می‌خوام نامه بفرستم، تمبر لازم دارم.',options:['stamp','postcard','bag','book'],correct:0}
]
},
{
num: 5,
title: 'Media',
titleFa: 'رسانه',
function: 'Talking about Media',
functionFa: 'صحبت درباره رسانه',
grammar: 'Past Tense (Regular Verbs)',
grammarFa: 'زمان گذشته (افعال باقاعده)',
languageMelody: 'Rising Intonation (surprises)',
duration: 30,
color: '#FFE0E0',
conversation: {
desc: 'به مکالمه میناً و مهسا از طریق تلفن گوش دهید.',
lines: [
{speaker:'Mina',role:'student',en:'Did you enjoy your weekend?',fa:'آخر هفته‌ات خوب بود؟'},
{speaker:'Mahsa',role:'student',en:'Yes, it was wonderful! I attended Fajr International Film Festival.',fa:'بله، عالی بود! تو جشنواره بین‌المللی فیلم فجر شرکت کردم.'},
{speaker:'Mina',role:'student',en:'Really? I am also interested in its events and movies.',fa:'واقعاً؟ منم به برنامه‌ها و فیلم‌هاش علاقه‌مندم.'},
{speaker:'Mahsa',role:'student',en:'Oh, did you watch the reports on TV last night?',fa:'وای، گزارش‌های دیشب تلویزیون رو دیدی؟'},
{speaker:'Mina',role:'student',en:'Yes, I did, but I like to read about them.',fa:'بله، دیدم، ولی دوست دارم درباره‌شون بخونم.'},
{speaker:'Mahsa',role:'student',en:"Well, you can surf its website if you like. There are many interesting things there.",fa:'خب، اگه دوست داری می‌تونی توی سایتش بگردی. خیلی چیزای جالبی اونجاست.'},
{speaker:'Mina',role:'student',en:"That's great! Could you please give me the website address?",fa:'عالیه! ممکنه آدرس وب‌سایت رو برام بفرستی؟'},
{speaker:'Mahsa',role:'student',en:'Why not! Just a moment. Umm... I just texted it.',fa:'چرا که نه! یه لحظه. اوم... الان فرستادم.'},
{speaker:'Mina',role:'student',en:'Thanks a lot.',fa:'خیلی ممنون.'}
]
},
practices: [
{
title: 'Practice 1 — Talking about Media (1)',
titleFa: 'صحبت درباره رسانه (۱)',
explanation: "این تمرین درباره <strong>سؤالات بله/خیر با Did</strong> هست — برای پرسیدن از کارهای انجام‌شده در گذشته.",
pairs: [
{q:'Did the girls listen to the radio?',a:'Yes, they did.',qFa:'دخترها به رادیو گوش کردن؟',aFa:'بله، گوش کردن.'},
{q:'Did Mina surf the Internet?',a:"No, she didn't.",qFa:'مینا توی اینترنت گشت؟',aFa:'نه، نگشت.'},
{q:'Did you watch the cartoon?',a:'Yes, we watched it.',qFa:'کارتون رو دیدی؟',aFa:'بله، دیدیم.'},
{q:'Did Amir work with his computer?',a:'No, he worked with his mobile.',qFa:'امیر با کامپیوترش کار کرد؟',aFa:'نه، با موبایلش کار کرد.'}
]
},
{
title: 'Practice 2 — Talking about Media (2)',
titleFa: 'صحبت درباره رسانه (۲)',
explanation: "این تمرین درباره <strong>سؤالات Wh- در گذشته</strong> هست. ساختار: Wh + did + فاعل + فعل ساده؟",
pairs: [
{q:'Who watched the movie last night?',a:'My sister.',qFa:'دیشب کی فیلم دید؟',aFa:'خواهرم.'},
{q:'What did you do last week?',a:'I attended Fajr International Film Festival.',qFa:'هفته قبل چی‌کار کردی؟',aFa:'تو جشنواره فیلم فجر شرکت کردم.'},
{q:'What did Ali receive?',a:'He received an email.',qFa:'علی چی دریافت کرد؟',aFa:'یه ایمیل دریافت کرد.'},
{q:'When did they download the book?',a:'They downloaded it yesterday.',qFa:'کی کتاب رو دانلود کردن؟',aFa:'دیروز دانلودش کردن.'},
{q:'Where did she connect to the Internet?',a:'She connected to the Internet at school.',qFa:'کجا به اینترنت وصل شد؟',aFa:'تو مدرسه به اینترنت وصل شد.'}
]
}
],
languageMelodySection: {
title: 'Language Melody — Rising Intonation (Surprises)',
titleFa: 'ملودی زبان — لحن صعودی (تعجب)',
desc: 'به مکالمه گوش بده و به لحن صعودی جملاتی که تعجب نشان می‌دن دقت کن.',
intonationGuide: {
rising: 'لحن <strong>صعودی (↗)</strong>: صدا در پایان جمله <strong>بالا</strong> می‌ره. جملات تعجبی و هیجانی (مثل «چه عالی!» یا «آفرین!») با این لحن خونده می‌شن تا احساس تعجب یا خوشحالی رو نشون بدن. آخر جمله رو با انرژی و صدای بالارونده تموم کن.'
},
defaultArrow: '↗',
conversation: [
{speaker:'Mahdi',en:'There is a football match on TV tonight.'},
{speaker:'Sam',en:"That's great news! When?"},
{speaker:'Mahdi',en:'Around 7, I think.'},
{speaker:'Sam',en:'Really?! I get home at 6. We can watch it together.'},
{speaker:'Mahdi',en:"It's excellent! Please buy some fruits."},
{speaker:'Sam',en:"Ok. That'll be all fun!"}
],
examples: [
'How fantastic!',
"That's great!",
"That's really nice!",
"It's brilliant!",
'Well done!',
"It's amazing!",
'What a wonderful day!',
'What a beautiful flower!'
],
talkToTeacher: 'Could you please give it to me?'
},
grammarSection: {
title: 'Grammar — Past Tense (Regular Verbs)',
titleFa: 'دستور زبان — زمان گذشته (افعال باقاعده)',
explanation: [
'زمان <code>گذشته ساده</code> برای کارهایی استفاده می‌شه که <strong>در گذشته انجام شدن و تموم شدن</strong>.',
'برای افعال باقاعده، فقط به آخر فعل <code>-ed</code> اضافه می‌کنیم: <code>watch → watched</code>, <code>listen → listened</code>.',
"برای منفی و سؤال از <code>did</code> کمک می‌گیریم — و فعل اصلی به شکل ساده برمی‌گرده: <code>I didn't watch</code>, <code>Did you watch?</code>"
],
tip: "کلمات زمانی مثل <code>yesterday</code>, <code>last night</code>, <code>last week</code>, <code>two days ago</code> نشون می‌دن داریم درباره گذشته حرف می‌زنیم.",
tables: [
{
title: 'Affirmative (مثبت)',
titleFa: 'مثبت',
headers: ['Subject', 'V-ed', 'Object', 'Time'],
rows: [
['I / You / We / They / He / She', 'watched', 'TV', 'yesterday / last night / last week / two days ago.']
],
examples: [
{en:'He received an e-mail.', fa:'او یک ایمیل دریافت کرد.'},
{en:'They closed the door yesterday.', fa:'دیروز در رو بستن.'}
]
},
{
title: 'Negative (منفی)',
titleFa: 'منفی',
headers: ['Subject', 'did not / didn\'t', 'Verb', 'Object'],
rows: [
['I / You / We / They / He / She', "did not / didn't", 'download', 'the book.']
],
examples: [
{en:"I didn't download the book.", fa:'کتاب رو دانلود نکردم.'}
]
},
{
title: 'Yes/No Question',
titleFa: 'سؤال بله/خیر',
headers: ['Did', 'Subject', 'Verb', 'Object'],
rows: [
['Did', 'I / you / we / they / he / she', 'search', 'the Internet?']
],
examples: [
{en:'Who listened to the poem?', fa:'کی به شعر گوش داد؟'},
{en:'What did she do?', fa:'اون چی‌کار کرد؟'},
{en:'What did Amir update?', fa:'امیر چی رو به‌روز کرد؟'},
{en:'When did they connect to the Internet?', fa:'کی به اینترنت وصل شدن؟'},
{en:'Where did you watch the movie?', fa:'کجا فیلم رو دیدی؟'}
]
}
]
},
seeAlso: {
title: 'See also — Past Tense of "To Be"',
titleFa: 'همچنین ببین — گذشته فعل to be',
col1Label: 'Present',
col2Label: 'Past',
intro: 'فعل to be در گذشته دو شکل داره: <strong>was</strong> برای <code>I / he / she / it</code> و <strong>were</strong> برای <code>we / you / they</code>. برای منفی کردن، بعد از was/were یه not می‌ذاریم: <code>wasn\'t / weren\'t</code>.',
pairs: [
{full:'I am happy.', short:'I was happy yesterday.', type:'was'},
{full:'He is happy.', short:'He was happy last week.', type:'was'},
{full:'She is happy.', short:'She was happy last month.', type:'was'},
{full:'They are happy.', short:'They were happy last winter.', type:'were'},
{full:'You are happy.', short:'You were happy yesterday.', type:'were'},
{full:'I am not happy.', short:"I was not / wasn't happy.", type:'was'}
],
otherForms: [
'🟦 <strong>was</strong> برای I / he / she / it استفاده می‌شه',
'🟩 <strong>were</strong> برای we / you / they استفاده می‌شه',
'There <strong>was</strong> a newspaper in the library. (یک روزنامه در کتابخانه بود.)',
'There <strong>were</strong> many messages in my mailbox. (پیام‌های زیادی در صندوق پستی‌ام بود.)'
]
},
listeningReadingWriting: {
title: 'Listening, Reading and Writing',
sections: [
{
type: 'find-it',
title: 'Find it',
desc: 'افعال زمان گذشته را در متن زیر پیدا کن و زیر آن‌ها خط بکش.',
text: "Last weekend, something happened to our TV. It didn't work. At first, we were upset. But then we talked about our day. It was really fun! Later, we helped our mother and cleaned the house. In the afternoon, my grandfather showed us how to play an old game. We enjoyed it a lot. All day we were busy doing different things. At night, we all were happy. No one talked about TV!",
targets: ['happened',"didn't",'were','talked','was','helped','cleaned','showed','enjoyed','were','were','talked']
},
{
type: 'tell-classmates',
title: 'Tell Your Classmates',
desc: 'پنج کاری که دیروز انجام دادی به همکلاسی‌ها بگو.',
example: 'I watched a movie yesterday.'
},
{
type: 'listen-questions-A',
title: 'A — Listen and answer',
desc: 'به مکالمه گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:"How was Behnam's summer?", template:'It was _____.'},
{q:'What did he learn?', template:'He _____ for doing his homework.'},
{q:'Did he learn to use the Internet for his English classes?', template:'_____.'}
]
},
{
type: 'listen-questions-B',
title: 'B — Listen and answer',
desc: 'به فایل صوتی گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'How many movies were there in cinemas this summer?', template:'There were _____.'},
{q:'What did she watch in the cinema?', template:'She _____.'},
{q:'Where did she watch the comedy?', template:'_____.'}
]
}
]
},
speakingWriting: {
title: 'Reading, Speaking, Listening and Writing',
desc: 'سؤالات روی Card A را بخون و از همکلاسی‌ها بپرس.',
cardA: [
'Did you connect the Internet yesterday?',
'Did you call your grandmother last night?',
'What did your teacher do this morning?',
'Where did you watch your favorite movie?',
'Who used Information Technology in your class?'
],
rolePlay: {
title: 'Role Play',
desc: 'با همکلاسی‌هات درباره رسانه‌ها (تلویزیون، اینترنت، رادیو) صحبت کن.'
}
},
vocabulary: [
{word:'media',pos:'noun',ipa:'/ˈmiːdiə/',fa:'رسانه',example:'Mass media.'},
{word:'connect',pos:'verb',ipa:'/kəˈnekt/',fa:'وصل شدن',example:'Connect to the Internet.'},
{word:'download',pos:'verb',ipa:'/ˌdaʊnˈloʊd/',fa:'دانلود کردن',example:'Download a file.'},
{word:'attend',pos:'verb',ipa:'/əˈtend/',fa:'شرکت کردن',example:'I attended the festival.'},
{word:'festival',pos:'noun',ipa:'/ˈfestɪvəl/',fa:'جشنواره',example:'Fajr Film Festival.'},
{word:'movie',pos:'noun',ipa:'/ˈmuːvi/',fa:'فیلم',example:'Watch a movie.'},
{word:'film',pos:'noun',ipa:'/fɪlm/',fa:'فیلم',example:'A great film.'},
{word:'report',pos:'noun',ipa:'/rɪˈpɔːrt/',fa:'گزارش',example:'Watch the reports on TV.'},
{word:'TV',pos:'noun',ipa:'/ˌtiːˈviː/',fa:'تلویزیون',example:'Watch TV.'},
{word:'radio',pos:'noun',ipa:'/ˈreɪdioʊ/',fa:'رادیو',example:'Listen to the radio.'},
{word:'website',pos:'noun',ipa:'/ˈwebsaɪt/',fa:'وب‌سایت',example:'Surf its website.'},
{word:'surf',pos:'verb',ipa:'/sɜːrf/',fa:'گشتن (در اینترنت)',example:'Surf the Internet.'},
{word:'online',pos:'adv',ipa:'/ˌɒnˈlaɪn/',fa:'آنلاین',example:'I work online.'},
{word:'Internet',pos:'noun',ipa:'/ˈɪntərnet/',fa:'اینترنت',example:'I connect to the Internet.'},
{word:'e-mail',pos:'noun',ipa:'/ˈiːmeɪl/',fa:'ایمیل',example:'I received an e-mail.'},
{word:'receive',pos:'verb',ipa:'/rɪˈsiːv/',fa:'دریافت کردن',example:'He received a letter.'},
{word:'text',pos:'verb',ipa:'/tekst/',fa:'پیامک فرستادن',example:'I just texted it.'},
{word:'message',pos:'noun',ipa:'/ˈmesɪdʒ/',fa:'پیام',example:'A text message.'},
{word:'cartoon',pos:'noun',ipa:'/kɑːrˈtuːn/',fa:'کارتون',example:'Did you watch the cartoon?'},
{word:'interview',pos:'verb/noun',ipa:'/ˈɪntərvjuː/',fa:'مصاحبه',example:'Interview somebody.'},
{word:'update a blog',pos:'phrase',ipa:'/ʌpˈdeɪt ə blɒɡ/',fa:'بلاگ به‌روز کردن',example:'I update my blog daily.'},
{word:'participate',pos:'verb',ipa:'/pɑːrˈtɪsɪpeɪt/',fa:'شرکت کردن',example:'Participate in an online course.'},
{word:'online course',pos:'phrase',ipa:'/ˌɒnˈlaɪn kɔːrs/',fa:'دوره آنلاین',example:'An online course.'},
{word:'enjoy',pos:'verb',ipa:'/ɪnˈdʒɔɪ/',fa:'لذت بردن',example:'Did you enjoy your weekend?'},
{word:'wonderful',pos:'adj',ipa:'/ˈwʌndərfəl/',fa:'فوق‌العاده',example:'It was wonderful!'},
{word:'last night',pos:'phrase',ipa:'/læst naɪt/',fa:'دیشب',example:'I watched TV last night.'},
{word:'last week',pos:'phrase',ipa:'/læst wiːk/',fa:'هفته قبل',example:'I attended last week.'},
{word:'two days ago',pos:'phrase',ipa:'/tuː deɪz əˈɡoʊ/',fa:'دو روز پیش',example:'I called him two days ago.'}
],
workbook: [
{
type:'fill-blanks-paragraph',
section:'Reading',
title:'جاهای خالی را با زمان «گذشته» افعال پر کنید.',
titleEn:'Fill in the blanks. (past tense)',
text:'This Mehr my mother and I [1] (attend) International Children Film Festival in Isfahan. This is a festival for children\'s movies. We [2] (watch) many interesting movies there. One movie [3] (be) about an Indian family. They [4] (live) near the sea. It [5] (show) many things about their life. I [6] (like) it very much. I also [7] (learn) many things about India.',
blanks:[
{num:1,answer:'attended'},
{num:2,answer:'watched'},
{num:3,answer:'was'},
{num:4,answer:'lived'},
{num:5,answer:'showed'},
{num:6,answer:'liked'},
{num:7,answer:'learned'}
]
},
{
type:'rewrite-adverbs',
section:'Reading',
title:'جملات را با به‌کاربردن زمان گذشته بازنویسی کنید.',
titleEn:'Rewrite the sentences in the past tense.',
items:[
{original:'We visit a museum each summer. (last summer)', answer:'We visited a museum last summer.'},
{original:'The teacher is very happy today. (yesterday)', answer:'The teacher was very happy yesterday.'},
{original:'Amir walks to the park.', answer:'Amir walked to the park.'},
{original:'My mother bakes a cake every Friday. (last Friday)', answer:'My mother baked a cake last Friday.'},
{original:'There is an apple on the table.', answer:'There was an apple on the table.'},
{original:'I like cartoons.', answer:'I liked cartoons.'}
]
},
{
type:'chart-complete',
section:'Reading',
title:'جدول زیر را کامل کنید. (یک نمونه حل شده است)',
titleEn:'Complete the chart. There is an example.',
rows:[
{question:'_____ you watch an old movie?', shortAnswer:'No, I _____', completeAnswer:'I _____ a cartoon.', example:true, exQ:'Did', exShort:"didn't", exComplete:'watched'},
{question:'_____ he like computer games?', shortAnswer:'Yes, he _____', completeAnswer:'He _____'},
{question:'_____ the student use a mobile in the class?', shortAnswer:'No, she _____', completeAnswer:'She _____ a computer.'},
{question:'_____ it sunny yesterday?', shortAnswer:'Yes, it _____', completeAnswer:'It _____'},
{question:'_____ they upset last week?', shortAnswer:'No, they _____', completeAnswer:'They _____'}
]
},
{
type:'unscramble-sentences',
section:'Reading',
title:'جملات زیر را مرتب کنید.',
titleEn:'Unscramble the following sentences.',
items:[
{scrambled:'call / Mina / her grandparents / on Friday / did / ?',answer:'Did Mina call her grandparents on Friday?'},
{scrambled:"the movie / didn't / the boys / like / .",answer:"The boys didn't like the movie."},
{scrambled:'where / watch / you / the movie / did / ?',answer:'Where did you watch the movie?'},
{scrambled:'yesterday / happy / the girls / were / ?',answer:'Were the girls happy yesterday?'},
{scrambled:"her brother's / did / edit / she / text / ?",answer:"Did she edit her brother's text?"}
]
},
{
type:'short-answer',
section:'Writing',
title:'به پرسش‌های زیر پاسخ دهید.',
titleEn:'Answer the following questions.',
questions:[
{q:'Was it cold yesterday?', sampleAnswer:'Yes, it was. / No, it wasn\'t.'},
{q:'Did she receive a letter?', sampleAnswer:'Yes, she did. / No, she didn\'t.'},
{q:'Were the children upset?', sampleAnswer:'Yes, they were. / No, they weren\'t.'},
{q:'Did they walk home?', sampleAnswer:'Yes, they did. / No, they didn\'t.'},
{q:'Did they watch the movie in the cinema?', sampleAnswer:'Yes, they did. / No, they didn\'t.'}
]
},
{
type:'order-dialogue',
section:'Reading',
title:'با مرتب کردن جملات، مکالمه‌ای بسازید.',
titleEn:'Put the sentences in correct order to make a dialogue.',
lines:[
{text:'How did you answer the questions?', order:5},
{text:'Yes, it was an online test.', order:4},
{text:'Did you have a test at home?', order:3},
{text:'I was at home. I participated in a test.', order:2, given:true},
{text:'Where were you this morning?', order:1, given:true},
{text:'I used my computer.', order:6}
]
},
{
type:'word-search',
section:'Writing',
title:'الف) کلمات مربوط به مضمون درس را بیابید. (۶ کلمه) — ب) کلمات را نوشته و به تصاویر وصل کنید. — پ) کلمات را در ستون مناسب قرار دهید (read/listen/watch/speak). — ت) جملات را با کلمات یافته‌شده کامل کنید.',
titleEn:'A) Find six media words. B) Match words with pictures. C) Sort by read/listen/watch/speak. D) Complete sentences.',
grid:[
['M','O','B','I','L','E','A','B','H'],
['T','P','L','O','R','S','T','C','O'],
['C','O','M','P','U','T','E','R','L'],
['P','Q','M','C','O','T','J','D','K'],
['R','A','D','I','O','L','M','G','O'],
['Q','S','I','E','M','A','I','L','T'],
['T','V','I','J','G','K','B','O','O'],
['Y','P','O','M','C','E','R','S','K']
],
targetWords:['MOBILE','COMPUTER','RADIO','EMAIL','TV','BOOK'],
sortLabels4:['read', 'listen', 'watch', 'speak'],
fillSentences:[
{sentence:'I received a(an) _____ this morning.', answer:'email'},
{sentence:"My _____ didn't work last night. I didn't connect to the Internet.", answer:'computer'},
{sentence:'There was an interesting war movie on _____.', answer:'TV'},
{sentence:'Sima listened to the news on the _____.', answer:'radio'},
{sentence:'It was a funny _____.', answer:'book'}
],
matchImages:[
{image:'wb-ex7-mobile.jpg', word:'mobile'},
{image:'wb-ex7-computer.jpg', word:'computer'},
{image:'wb-ex7-radio.jpg', word:'radio'},
{image:'wb-ex7-email.jpg', word:'email'},
{image:'wb-ex7-tv.jpg', word:'TV'},
{image:'wb-ex7-book.jpg', word:'book'}
]
},
{
type:'edit-text',
section:'Writing',
title:'سینا برای پسرعمویش که در استرالیا زندگی می‌کند رایانامه‌ای نوشته و از شما خواسته آن را اصلاح کنید. (۶ غلط)',
titleEn:'Edit the following e-mail. (six mistakes)',
original:"Dear Sam,\nI am writing this e-mail with my tablet. Last week our neighbor invited us to a village near a river. It were a nice and quiet place. There was tall trees and beautiful flowers. The sky were blue and clean. The water of the river were clean and cool. We not use our computers or mobiles a lot. But we were very happy. We play a lot all day.",
corrected:"Dear Sam,\nI am writing this e-mail with my tablet. Last week our neighbor invited us to a village near a river. It was a nice and quiet place. There were tall trees and beautiful flowers. The sky was blue and clean. The water of the river was clean and cool. We did not use our computers or mobiles a lot. But we were very happy. We played a lot all day.",
mistakes:[
{wrong:'It were a nice', right:'It was a nice', explain:'با It از was استفاده می‌شود'},
{wrong:'There was tall trees', right:'There were tall trees', explain:'trees جمع است، پس were'},
{wrong:'The sky were blue', right:'The sky was blue', explain:'sky مفرد است، پس was'},
{wrong:'The water ... were clean', right:'The water ... was clean', explain:'water مفرد است، پس was'},
{wrong:'We not use', right:'We did not use', explain:'منفی گذشته با did not'},
{wrong:'We play a lot', right:'We played a lot', explain:'زمان گذشته: play → played'}
],
rewriteSlots:8,
rewriteLabel:'ب) این متن را دربارهٔ خود بازنویسی کنید (Rewrite the text about yourself):'
},
{
type:'multiple-choice-inline',
section:'Writing',
title:'گزینهٔ صحیح را انتخاب کنید.',
titleEn:'Choose the correct forms.',
items:[
{sentence:'In 1329, there _____ a mobile.',options:['was','wasn\'t'],correct:1},
{sentence:'You _____ absent last Saturday.',options:['were','weren\'t'],correct:1},
{sentence:'Your family _____ your school celebration this year.',options:['attended',"didn't attend"],correct:0},
{sentence:'In 1350, there _____ 30 TV channels in Iran.',options:['were',"weren't"],correct:1}
]
},
{
type:'reading-comprehension',
section:'Reading',
title:'الف) بخش‌هایی از گزارش مینا دربارهٔ هفته گذشته است. آن را بخوانید و زیر افعال «زمان گذشته» خط بکشید. ب) بله یا خیر؟ پ) به پرسش‌ها پاسخ دهید.',
titleEn:'A) Underline "past tense". B) Yes or No? C) Answer the questions.',
text:'Saturday, Esfand 2, February 21\nI attended a ceremony in our school today. It was a small party for girls of grade 3. It was Taklif Celebration. I enjoyed it a lot.\n\nMonday, Esfand 4, February 23\nWe watched a short movie at school about the history of Iran. It was interesting. I like to watch it again.\n\nWednesday, Esfand 6, February 25\nMahsa was absent today. I called her in the evening. She was not OK. She visited a doctor. She needs to rest. I miss her.',
targets:['attended','was','was','enjoyed','watched','was','was','called','was','visited'],
yesNoQuestions:[
{q:'Taklif Celebration was for students of grade 5.', answer:'no'},
{q:'Mahsa was not OK on Wednesday.', answer:'yes'},
{q:'The movie was about Iraq.', answer:'no'},
{q:'Mina called Mahsa in the evening.', answer:'yes'}
],
questions:[
{q:'Did she attend Taklif Celebration on Monday?', sampleAnswer:'No, she attended it on Saturday.'},
{q:'Did she like the movie about Iran?', sampleAnswer:'Yes, she did. It was interesting.'},
{q:'Who was absent on Wednesday?', sampleAnswer:'Mahsa was absent.'},
{q:'Did they watch the movie in the cinema?', sampleAnswer:'No, they watched it at school.'}
]
}
],
quiz: [
{q:'Yesterday, I _____ a movie on TV.',qFa:'دیروز یه فیلم تلویزیون دیدم.',options:['watch','watched','watching','watches'],correct:1},
{q:'_____ you connect to the Internet last night?',qFa:'دیشب به اینترنت وصل شدی؟',options:['Did','Do','Are','Is'],correct:0},
{q:'She _____ download the book.',qFa:'اون کتاب رو دانلود نکرد.',options:["doesn't","didn't","isn't","aren't"],correct:1},
{q:'I _____ an e-mail from my friend.',qFa:'از دوستم ایمیل دریافت کردم.',options:['received','receive','receiving','receives'],correct:0},
{q:'It _____ wonderful!',qFa:'فوق‌العاده بود!',options:['is','was','are','were'],correct:1},
{q:'Past form of "watch" is _____.',qFa:'گذشته فعل watch:',options:['watched','watch','watching','watches'],correct:0}
]
},
{
num: 6,
title: 'Health and Injuries',
titleFa: 'سلامت و جراحت‌ها',
function: 'Talking about Health and Injuries',
functionFa: 'صحبت درباره سلامت و جراحت‌ها',
grammar: 'Past Tense (Irregular Verbs)',
grammarFa: 'زمان گذشته (افعال بی‌قاعده)',
languageMelody: 'Review of Intonation',
duration: 30,
color: '#D7CCC8',
conversation: {
desc: 'به مکالمه دو دوست گوش دهید.',
lines: [
{speaker:'Reza',role:'student',en:'We plan to go to the lake. Do you want to come?',fa:'ما برنامه داریم بریم دریاچه. می‌خوای بیای؟'},
{speaker:'Ehsan',role:'student',en:"I don't think so. I don't like school trips. Last summer I fell and broke my leg.",fa:'فکر نکنم. اردوهای مدرسه رو دوست ندارم. تابستون پارسال افتادم و پام شکست.'},
{speaker:'Reza',role:'student',en:'It sometimes happens. I twisted my ankle last winter. I stayed home for two weeks!',fa:'این گاهی پیش میاد. زمستون پارسال مچ پام پیچ خورد. دو هفته خونه موندم!'},
{speaker:'Ehsan',role:'student',en:"That's too bad! I didn't know that.",fa:'وای، خیلی بد بوده! من خبر نداشتم.'},
{speaker:'Reza',role:'student',en:'Yeah..., but after that, I participated in Helal-e-Ahmar first aid classes. I learned how to take care of myself.',fa:'آره...، ولی بعد از اون، تو کلاس‌های کمک‌های اولیه هلال احمر شرکت کردم. یاد گرفتم چطور از خودم مراقبت کنم.'},
{speaker:'Ehsan',role:'student',en:'I like that. Can you give me some advice?',fa:'خوبه. می‌تونی به من هم چند توصیه بدی؟'},
{speaker:'Reza',role:'student',en:'Sure!',fa:'حتماً!'}
]
},
practices: [
{
title: 'Practice 1 — Talking about Health and Injuries (1)',
titleFa: 'صحبت درباره سلامت و جراحت‌ها (۱)',
explanation: "این تمرین درباره <strong>سؤالات بله/خیر با افعال بی‌قاعده</strong> هست. توجه کن که در سؤال، فعل به شکل ساده برمی‌گرده (نه گذشته).",
pairs: [
{q:'Did Mina have an accident?',a:'Yes, she did.',qFa:'مینا تصادف کرد؟',aFa:'بله، کرد.'},
{q:'Did Ali cut his finger?',a:"No, he didn't.",qFa:'علی انگشتش رو برید؟',aFa:'نه، نبرید.'},
{q:'Did you break your leg?',a:'Yes, I broke my leg.',qFa:'پات شکست؟',aFa:'بله، پام شکست.'},
{q:'Did you hurt your back?',a:"No, I didn't hurt my back.",qFa:'پشتت آسیب دید؟',aFa:'نه، پشتم آسیب ندید.'}
]
},
{
title: 'Practice 2 — Talking about Health and Injuries (2)',
titleFa: 'صحبت درباره سلامت و جراحت‌ها (۲)',
explanation: "این تمرین درباره <strong>سؤالات Wh- با افعال بی‌قاعده</strong> هست — برای پرسیدن جزئیات حوادث گذشته.",
pairs: [
{q:'Who had an accident?',a:'Reza.',qFa:'کی تصادف کرد؟',aFa:'رضا.'},
{q:'Where did she break her leg?',a:'She broke her leg in the park.',qFa:'پاش کجا شکست؟',aFa:'تو پارک پاش شکست.'},
{q:'How did Amir hurt his head?',a:'He hit his head on the door.',qFa:'سر امیر چطور آسیب دید؟',aFa:'سرش به در خورد.'},
{q:'Why did they have an accident?',a:'Because they drove fast.',qFa:'چرا تصادف کردن؟',aFa:'چون با سرعت رانندگی کردن.'}
]
}
],
languageMelodySection: {
title: 'Language Melody — Rising & Falling Intonation',
titleFa: 'ملودی زبان — لحن صعودی و نزولی',
desc: 'به مکالمه گوش بده و به لحن صعودی و نزولی دقت کن.',
intonationGuide: {
rising: 'لحن <strong>صعودی (↗)</strong>: صدا در پایان جمله <strong>بالا</strong> می‌ره. معمولاً در سؤالات بله/خیر (Yes/No) و جملات تعجبی استفاده می‌شه. مثل وقتی که با تعجب یا کنجکاوی می‌پرسی.',
falling: 'لحن <strong>نزولی (↘)</strong>: صدا در پایان جمله <strong>پایین</strong> می‌آد. معمولاً در جملات خبری و سؤالات Wh (با What/Where/When...) استفاده می‌شه. مثل وقتی که خبری رو با اطمینان می‌گی.'
},
conversation: [
{speaker:'Student 1',en:'Excuse me teacher! Hamid cut his finger.'},
{speaker:'Teacher',en:'What?! Let me see. Oh, does anyone have a plaster?'},
{speaker:'Student 2',en:'I think I have one. Just a second!'},
{speaker:'Teacher',en:"Please hurry up! It's bleeding."},
{speaker:'Student 2',en:'I found it. Here you are.'}
],
risingExamples: [
'Is he clever?',
'Are they playing football?',
'Does he like summer?',
'Do they have their lunch at school?',
'It is fantastic!',
'What a beautiful flower!'
],
fallingExamples: [
'There is a cat in the yard.',
'We had an accident.',
'We live in Isfahan.',
'Where is my coat?',
'What do you study?',
'When did they go to school?'
],
talkToTeacher: 'Do you need help?'
},
grammarSection: {
title: 'Grammar — Past Tense (Irregular Verbs)',
titleFa: 'دستور زبان — زمان گذشته (افعال بی‌قاعده)',
explanation: [
'بعضی افعال در گذشته <strong>قواعد عادی رو دنبال نمی‌کنن</strong> و شکل کاملاً متفاوتی پیدا می‌کنن. این‌ها رو افعال <code>بی‌قاعده</code> می‌گیم.',
'مثال‌های مهم: <code>go → went</code>, <code>break → broke</code>, <code>have → had</code>, <code>fall → fell</code>, <code>cut → cut</code> (تغییر نمی‌کنه!).',
'این افعال رو باید حفظ کرد. ساختار جمله مثل گذشته‌ست: <code>I broke my leg.</code> در سؤال و منفی فعل به شکل ساده برمی‌گرده: <code>Did you break your leg?</code>'
],
tip: "لیست کامل افعال بی‌قاعده رو می‌تونی در صفحه «<a href=\"../english-vision/irregular-verbs.html\" style=\"color:var(--primary);text-decoration:underline\">افعال بی‌قاعده</a>» ببینی و حفظ کنی.",
tables: [
{
title: 'Affirmative (مثبت)',
titleFa: 'مثبت',
headers: ['Subject', 'V (Past)', 'Object', 'Time'],
rows: [
['I / You / We / They / He / She', 'spoke', 'English', 'two days ago / yesterday / last night.']
],
examples: [
{en:'I broke my leg. (break → broke)', fa:'پام شکست.'},
{en:'She fell down. (fall → fell)', fa:'افتاد.'},
{en:'He cut his finger. (cut → cut)', fa:'انگشتش رو برید.'},
{en:'They went to the hospital. (go → went)', fa:'رفتن بیمارستان.'},
{en:'I had an accident. (have → had)', fa:'تصادف کردم.'}
]
},
{
title: 'Negative (منفی)',
titleFa: 'منفی',
headers: ['Subject', 'did not / didn\'t', 'V (base)', 'Object', 'Time'],
rows: [
['I / You / We / They / He / She', "did not / didn't", 'speak', 'English', 'yesterday / last night.']
],
examples: [
{en:"I didn't sleep well last night. (sleep → slept)", fa:'دیشب خوب نخوابیدم.'},
{en:"He didn't break his leg.", fa:'پاش نشکست.'}
]
},
{
title: 'Yes/No Questions',
titleFa: 'سؤال بله/خیر',
headers: ['Did', 'Subject', 'V (base)', 'Object'],
rows: [
['Did', 'I / you / we / they / he / she', 'speak', 'English?']
],
examples: [
{en:'Did Mina have an accident? — Yes, she did.', fa:'مینا تصادف کرد؟ — بله.'},
{en:'Did Ali cut his finger? — No, he didn\'t.', fa:'علی انگشتش رو برید؟ — نه.'},
{en:'Did you break your leg? — Yes, I broke my leg.', fa:'پات شکست؟ — بله، پام شکست.'},
{en:'Did you hurt your back? — No, I didn\'t hurt my back.', fa:'کمرت آسیب دید؟ — نه.'}
]
},
{
title: 'Wh-Questions',
titleFa: 'سؤال با کلمات پرسشی',
headers: ['Wh', 'did', 'Subject', 'V (base)', 'Object'],
rows: [
['Where / How / Why', 'did', 'I / you / we / they / he / she', 'break', 'your leg?'],
['Who', '—', '(subject)', 'had', 'an accident?']
],
examples: [
{en:'Who had an accident? — Reza.', fa:'کی تصادف کرد؟ — رضا.'},
{en:'Where did she break her leg? — She broke her leg in the park.', fa:'کجا پاش شکست؟ — توی پارک.'},
{en:'How did Amir hurt his head? — He hit his head on the door.', fa:'امیر چطور سرش رو آسیب زد؟ — سرش به در خورد.'},
{en:'Why did they have an accident? — Because they drove fast.', fa:'چرا تصادف کردن؟ — چون تند رانندگی کردن.'}
]
}
]
},
seeAlso: {
title: 'See also — Object Pronouns',
titleFa: 'همچنین ببین — ضمایر مفعولی',
pairs: [
{full:'I → me', short:'He called me.'},
{full:'you → you', short:'I am talking to you.'},
{full:'he → him', short:'They saw Ali/him in the park.'},
{full:'she → her', short:'Mina looked at Zahra/her.'},
{full:'it → it', short:'You hurt the cat/it.'},
{full:'we → us', short:'They invited us.'},
{full:'they → them', short:'She read the books/them.'}
],
otherForms: [
'Reza saw me yesterday.',
'My mother called us.',
'I helped him with his homework.',
'They visited her in the hospital.',
'We met them at the park.'
]
},
listeningReadingWriting: {
title: 'Listening, Reading and Writing',
sections: [
{
type: 'find-it',
title: 'Find it',
desc: 'افعال زمان گذشته را در متن زیر پیدا کن و زیر آن‌ها خط بکش.',
text: "My mom just baked some cookies. She put them on the table. My little brother Reza was hungry. He wanted a cookie. He climbed a chair to take it. He fell down and hurt his head. He climbed the chair again. He took one this time. The cookie was hot. He burnt his hand and started crying.",
targets: ['baked','put','was','wanted','climbed','fell','hurt','climbed','took','was','burnt','started']
},
{
type: 'tell-classmates',
title: 'Tell Your Classmates',
desc: 'یه تصادف یا جراحت گذشته‌ات رو به همکلاسی‌هات تعریف کن.',
example: 'Last year, I cut my finger.'
},
{
type: 'listen-questions-A',
title: 'A — Listen and answer',
desc: 'به مکالمه گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'Why did the girl fall down?', template:"Because she didn't see _____."},
{q:'How did she break her leg?', template:'She _____.'},
{q:'What did her mother do?', template:'_____.'}
]
},
{
type: 'listen-questions-B',
title: 'B — Listen and answer',
desc: 'به فایل صوتی گوش کن و به سؤالات پاسخ بده.',
questions: [
{q:'Who was in the fire?', template:'_____.'},
{q:'How did Omid hurt his back?', template:'_____.'},
{q:'Where is Omid now?', template:'_____.'}
]
}
]
},
speakingWriting: {
title: 'Reading, Speaking, Listening and Writing',
desc: 'سؤالات روی Card A را بخون و از همکلاسی‌ها بپرس.',
cardA: [
'What was your last accident?',
'Where did it happen?',
'When did it happen?',
'What did you do?',
'Who helped you?'
],
rolePlay: {
title: 'Role Play',
desc: 'با همکلاسی‌هات نقش دو دوستی که درباره جراحت‌هاشون صحبت می‌کنن رو بازی کن. از مکالمه درس استفاده کن.'
}
},
vocabulary: [
{word:'health',pos:'noun',ipa:'/helθ/',fa:'سلامت',example:'Take care of your health.'},
{word:'injury',pos:'noun',ipa:'/ˈɪndʒəri/',fa:'جراحت',example:'A serious injury.'},
{word:'accident',pos:'noun',ipa:'/ˈæksɪdənt/',fa:'تصادف',example:'Did Mina have an accident?'},
{word:'break',pos:'verb',ipa:'/breɪk/',fa:'شکستن',example:'I broke my leg.'},
{word:'broke',pos:'verb (past)',ipa:'/broʊk/',fa:'شکست (گذشته)',example:'She broke her arm.'},
{word:'fall',pos:'verb',ipa:'/fɔːl/',fa:'افتادن',example:'I fall sometimes.'},
{word:'fell',pos:'verb (past)',ipa:'/fel/',fa:'افتاد (گذشته)',example:'I fell down.'},
{word:'cut',pos:'verb',ipa:'/kʌt/',fa:'بریدن',example:'Did Ali cut his finger?'},
{word:'hurt',pos:'verb',ipa:'/hɜːrt/',fa:'آسیب رساندن',example:'It hurts a lot.'},
{word:'twist',pos:'verb',ipa:'/twɪst/',fa:'پیچ خوردن',example:'I twisted my ankle.'},
{word:'twisted',pos:'verb (past)',ipa:'/ˈtwɪstɪd/',fa:'پیچ خورد',example:'She twisted her ankle.'},
{word:'bleed',pos:'verb',ipa:'/bliːd/',fa:'خونریزی',example:'It is bleeding.'},
{word:'burn',pos:'verb',ipa:'/bɜːrn/',fa:'سوزاندن',example:'She burned her hand.'},
{word:'hit',pos:'verb',ipa:'/hɪt/',fa:'برخورد کردن',example:'He hit his head on the door.'},
{word:'leg',pos:'noun',ipa:'/leɡ/',fa:'پا',example:'My leg hurts.'},
{word:'arm',pos:'noun',ipa:'/ɑːrm/',fa:'دست (بازو)',example:'I broke my arm.'},
{word:'hand',pos:'noun',ipa:'/hænd/',fa:'دست',example:'She burned her hand.'},
{word:'finger',pos:'noun',ipa:'/ˈfɪŋɡər/',fa:'انگشت',example:'I cut my finger.'},
{word:'head',pos:'noun',ipa:'/hed/',fa:'سر',example:'He hit his head.'},
{word:'back',pos:'noun',ipa:'/bæk/',fa:'پشت',example:'My back hurts.'},
{word:'ankle',pos:'noun',ipa:'/ˈæŋkəl/',fa:'مچ پا',example:'I twisted my ankle.'},
{word:'first aid',pos:'phrase',ipa:'/fɜːrst eɪd/',fa:'کمک‌های اولیه',example:'First aid classes.'},
{word:'Helal-e-Ahmar',pos:'noun',ipa:'/heˌlæl e æhˈmær/',fa:'هلال احمر',example:'Helal-e-Ahmar first aid classes.'},
{word:'hospital',pos:'noun',ipa:'/ˈhɒspɪtəl/',fa:'بیمارستان',example:'He went to the hospital.'},
{word:'doctor',pos:'noun',ipa:'/ˈdɒktər/',fa:'دکتر',example:'See a doctor.'},
{word:'take care',pos:'phrase',ipa:'/teɪk ker/',fa:'مراقبت کردن',example:'Take care of yourself.'},
{word:'advice',pos:'noun',ipa:'/ədˈvaɪs/',fa:'توصیه',example:'Give me some advice.'},
{word:'plaster',pos:'noun',ipa:'/ˈplæstər/',fa:'گچ',example:'A plaster on the leg.'},
{word:'bruise',pos:'noun',ipa:'/bruːz/',fa:'کبودی',example:'A bruise on my arm.'}
],
workbook: [
{
type:'multiple-choice-inline',
section:'Reading',
title:'پاسخ صحیح را انتخاب کنید.',
titleEn:'Choose the correct forms.',
items:[
{sentence:'What happened to Amir?',options:['He breaks his leg.','He broke his leg.'],correct:1},
{sentence:'Did you cut your finger yesterday?',options:['Yes, I did.','Yes, I do.'],correct:0},
{sentence:"What happened to Samira's eyes?",options:['She hurt them.','She hurt it.'],correct:0},
{sentence:'Did she eat in a restaurant?',options:["No, she wasn't.","No, she didn't."],correct:1},
{sentence:'Who burnt his hand?',options:['Ali','Him'],correct:0},
{sentence:'Did mom call Sina?',options:['Yes, she called it.','Yes, she called him.'],correct:1}
]
},
{
type:'fill-blanks-paragraph',
section:'Reading',
title:'مکالمه را با افزودن «did» یا «didn\'t» کامل کنید.',
titleEn:"Complete the conversation with 'did' or 'didn't'.",
text:'Man: [1] you hit my car?\nReza: No, I [2].\nMan: Who did?\nReza: A little boy.\nMan: How [3] a little boy hit my car?\nReza: He was on a bike.\nMan: [4] he hurt himself?\nReza: No, he [5].',
blanks:[
{num:1,answer:'Did'},
{num:2,answer:"didn't"},
{num:3,answer:'did'},
{num:4,answer:'Did'},
{num:5,answer:"didn't"}
]
},
{
type:'make-questions',
section:'Reading',
title:'جملات را سؤالی کنید.',
titleEn:'Change the sentences into questions.',
items:[
{prompt:'We played in the yard this morning.', answer:'Did you play in the yard this morning?'},
{prompt:'Ali and Omid participated in an online English course last summer.', answer:'Did Ali and Omid participate in an online English course last summer?'},
{prompt:'Sima spoke English well.', answer:'Did Sima speak English well?'},
{prompt:'Behnam sent a message to his cousin.', answer:'Did Behnam send a message to his cousin?'},
{prompt:'The children saw the movie in the afternoon.', answer:'Did the children see the movie in the afternoon?'}
]
},
{
type:'sentence-builder',
section:'Writing',
title:'با انتخاب کلمات مناسب از جدول، پنج جمله بسازید.',
titleEn:'Make five correct sentences.',
columns:{
A:['We','They','My teacher','Sima','Roya','The worker','My sister'],
B:['break','twisted','burned','hurt','look after','cut','hit'],
C:['his','her','their','my','our','your','its'],
D:['leg(s)','head(s)','mother(s)','hand(s)','ankle(s)','back(s)','finger(s)']
},
example:'We burned our hands.',
slots:5
},
{
type:'report-complete',
section:'Reading',
title:'گزارش مصدومان یک حادثه را بخوانید و سپس جملات را کامل کنید.',
titleEn:'Read a report of an accident and complete the paragraph.',
chartHeaders:['Injuries', 'Old people', 'Kids', 'Students'],
chartRows:[
['Leg', '1', '1', '0'],
['Hand', '2', '2', '1'],
['Back', '3', '4', '0'],
['Head', '4', '5', '3']
],
text:'Yesterday was very cold. It snowed heavily. [1] kids, [2] old people, and [3] students were hurt. One kid broke his leg and two kids [4] their hands. Three old people [5] their backs and four old people [6] their heads. Three students also [7] their heads. The firefighters and policemen were everywhere. They helped people.',
blanks:[
{num:1,answer:'Five / 5'},
{num:2,answer:'Ten / 10'},
{num:3,answer:'Four / 4'},
{num:4,answer:'hurt'},
{num:5,answer:'hurt'},
{num:6,answer:'hurt'},
{num:7,answer:'hurt'}
]
},
{
type:'short-answer-context',
section:'Writing',
title:'با در نظر گرفتن اتفاقات زندگی پارسا به پرسش‌های زیر پاسخ دهید.',
titleEn:"Answer the following questions about Parsa's life.",
context:[
'He was born in Khorramabad. (1380)',
'He went to school. (1386)',
'He moved to Shiraz with his family. (1387)',
'He broke his hand. (1389)',
'He participated in Helal-e Ahmar ceremony. (1391)',
'He joined Helal-e Ahmar. (1392)'
],
questions:[
{q:'Where did Parsa live in 1383?', sampleAnswer:'He lived in Khorramabad.'},
{q:'When did he join Helal-e Ahmar?', sampleAnswer:'He joined it in 1392.'},
{q:'Did he break his hand?', sampleAnswer:'Yes, he did. (in 1389)'},
{q:'Did he go to school in Mashhad?', sampleAnswer:"No, he didn't."},
{q:'What did he do in 1391?', sampleAnswer:'He participated in Helal-e Ahmar ceremony.'}
]
},
{
type:'word-search',
section:'Writing',
title:'الف) کلمات مربوط به مضمون درس را بیابید. (۶ کلمه) — ب) کلماتی را که یافته‌اید در جملات قرار دهید. — پ) کلمات را در ستون مناسب قرار دهید (Body/Verbs). — ت) با کلمات یافته‌شده چند جمله بسازید.',
titleEn:'A) Find six words. B) Put words in sentences. C) Sort Body/Verbs. D) Write sentences.',
grid:[
['I','H','I','T','Z','U','M','A'],
['B','W','V','B','A','C','K','Q'],
['C','P','U','G','J','T','N','C'],
['B','L','E','E','D','I','N','G'],
['K','E','C','B','R','O','K','E'],
['F','G','L','A','N','K','L','E']
],
targetWords:['HIT','BACK','BLEEDING','BROKE','ANKLE','BURN'],
fillSentences:[
{sentence:'Her finger is _____.', answer:'bleeding'},
{sentence:'Reza _____ his leg.', answer:'broke'},
{sentence:'They twisted their _____.', answer:'ankle'},
{sentence:'She _____ her head into a door.', answer:'hit'},
{sentence:'Her _____ hurts.', answer:'back'},
{sentence:'Her _____ hurts a lot.', answer:'ankle'}
],
sortLabels:['Body (اعضای بدن)', 'Verbs (افعال)'],
sortGroup1:['back','ankle'],
sortGroup2:['hit','bleeding','broke','burn'],
sentenceCount:6
},
{
type:'edit-text',
section:'Writing',
title:'سحر به متن انگلیسی گوش کرده و آن را یادداشت نموده است. آن را اصلاح کنید. (۵ غلط)',
titleEn:'Edit the following text. (five mistakes)',
original:"We has a long trip to our uncle's house last year. We taking a bus to their city. There were many cities on the way. There were some jungles and rivers, too. We enjoyed everything. But, we sees an injured goat near the road. We stopped to help it. The animal hurting its neck. Luckily, it were not a bad wound. We took the goat to the police station.",
corrected:"We had a long trip to our uncle's house last year. We took a bus to their city. There were many cities on the way. There were some jungles and rivers, too. We enjoyed everything. But, we saw an injured goat near the road. We stopped to help it. The animal hurt its neck. Luckily, it was not a bad wound. We took the goat to the police station.",
mistakes:[
{wrong:'We has a long trip', right:'We had a long trip', explain:'گذشته have → had'},
{wrong:'We taking a bus', right:'We took a bus', explain:'گذشته take → took'},
{wrong:'we sees an injured goat', right:'we saw an injured goat', explain:'گذشته see → saw'},
{wrong:'The animal hurting its neck', right:'The animal hurt its neck', explain:'گذشته hurt → hurt'},
{wrong:'it were not', right:'it was not', explain:'با it از was استفاده می‌شود'}
],
rewriteSlots:8,
rewriteLabel:'ب) این متن را دربارهٔ خود بازنویسی کنید (Rewrite the text about yourself):'
},
{
type:'short-answer',
section:'Writing',
title:'به پرسش‌های زیر دربارهٔ خودتان پاسخ دهید.',
titleEn:'Answer the following questions about yourself.',
questions:[
{q:'Were you absent this Wednesday?', sampleAnswer:'Yes, I was. / No, I wasn\'t.'},
{q:'What did you eat for lunch this Sunday?', sampleAnswer:'I ate...'},
{q:'When did you come to school this Monday?', sampleAnswer:'I came at...'},
{q:'Who needed help at your home on Friday?', sampleAnswer:'My... needed help.'}
]
},
{
type:'reading-comprehension',
section:'Reading',
title:'الف) زیر «افعال گذشته» این داستان خط بکشید. ب) بله یا خیر؟ پ) به پرسش‌ها پاسخ دهید.',
titleEn:'A) Underline "past tense". B) Yes or No? C) Answer the questions.',
text:'Elina was a young and happy girl. When she was 7 years old, she had a bad accident. She was in the car with her family. Their car hit a big tree. Elina hurt her legs. She did not walk after the accident. But she was very brave. She stayed at home and studied hard. She wrote many nice stories. She became a famous writer. She wrote stories for children. Many children read her stories.',
targets:['was','was','had','was','hit','hurt','did not walk','was','stayed','studied','wrote','became','wrote','read'],
yesNoQuestions:[
{q:'Elina was a boy.', answer:'no'},
{q:'When Elina was 7, her father broke his hand.', answer:'no'},
{q:'She was brave.', answer:'yes'},
{q:'She hurt her legs.', answer:'yes'}
],
questions:[
{q:'What happened to Elina when she was 7?', sampleAnswer:'She had a bad accident / hurt her legs.'},
{q:'Did she study at school?', sampleAnswer:'No, she studied at home.'},
{q:'Who read her stories?', sampleAnswer:'Many children read her stories.'},
{q:'Was she a famous writer?', sampleAnswer:'Yes, she was.'}
]
}
],
quiz: [
{q:'Yesterday, I _____ my leg.',qFa:'دیروز پام شکست.',options:['break','broke','breaks','breaking'],correct:1},
{q:'_____ you have an accident?',qFa:'تصادف کردی؟',options:['Did','Do','Does','Are'],correct:0},
{q:'She _____ from her bike.',qFa:'از دوچرخه‌اش افتاد.',options:['fall','fell','fallen','falls'],correct:1},
{q:'I cut my _____ with the knife.',qFa:'انگشتم رو با چاقو بریدم.',options:['head','arm','finger','leg'],correct:2},
{q:'He _____ his head on the door.',qFa:'سرش به در خورد.',options:['hit','hits','hitting','hitten'],correct:0},
{q:'Past form of "go" is _____.',qFa:'گذشته فعل go:',options:['goed','went','gone','goes'],correct:1}
]
}
];
const WELCOME = {
};
const REVIEWS = [
{
num:1,
title:'Review 1',
covers:'Lessons 1-2',
description:'مرور درس‌های ۱ و ۲',
summary:'این مرور درباره شخصیت و سفر هست. الگوهای Check if مستقیماً از کتاب درسی پایه نهم گرفته شدن.',
summaryItems: [
{icon:'🧑',title:'شخصیت',desc:'My teacher is... / What\'s ... like?'},
{icon:'✈️',title:'سفر',desc:'Are you traveling...? / Where is...?'},
{icon:'🎵',title:'ملودی زبان',desc:'لحن نزولی و صعودی'},
{icon:'📚',title:'واژگان',desc:'کلمات شخصیت و سفر'},
{icon:'📐',title:'گرامر',desc:'تبدیل جملات (مخفف، سؤال، منفی)'}
],
sections: [
{
title: 'Talking about Personality',
titleFa: 'صحبت درباره شخصیت',
color: '#FFE4B5',
items: [
{ask:"a) you can talk about people's personalities.",askFa:'الف) می‌تونی درباره شخصیت افراد صحبت کنی.',template:'My teacher is _____ .\nYour father is _____ .\nThey _____ .',inputs:3,placeholder1:'kind and patient',placeholder2:'serious',placeholder3:'are very friendly'},
{ask:"b) you can ask about personality.",askFa:'ب) می‌تونی درباره شخصیت بپرسی.',template:"What's _____ like?\nWhat are _____ ?",inputs:2,placeholder1:'your sister',placeholder2:'they like'}
]
},
{
title: 'Talking about Travel',
titleFa: 'صحبت درباره سفر',
color: '#FFD4B8',
items: [
{ask:"a) you can ask about travel.",askFa:'الف) می‌تونی درباره سفر بپرسی.',template:'Are you traveling _____ ?\nIs _____ ?',inputs:2,placeholder1:'to Shiraz',placeholder2:'he visiting Tehran'},
{ask:"b) you can ask about travel (Wh-).",askFa:'ب) می‌تونی با کلمات پرسشی درباره سفر بپرسی.',template:'Who is traveling to _____ ?\nWhere is _____ ?\nHow _____ ?\nWhat _____ ?',inputs:4,placeholder1:'Isfahan',placeholder2:'she going',placeholder3:'are they traveling',placeholder4:'is he doing'}
]
},
{
title: 'Language Melody',
titleFa: 'ملودی زبان',
color: '#FAD0E1',
items: [
{ask:"a) You can produce some sentences with falling and rising intonations.",askFa:'الف) می‌تونی جملاتی با لحن نزولی و صعودی تولید کنی.',examples:['He is funny. ↘','Is he funny? ↗']},
{ask:"b) You can write some sentences with falling and rising intonations.",askFa:'ب) می‌تونی جملاتی با لحن نزولی و صعودی بنویسی.',type:'list',rows:4,placeholder:'e.g., She is kind. ↘'}
]
},
{
title: 'Vocabulary',
titleFa: 'واژگان',
color: '#C5DCF5',
items: [
{ask:"a) you can write some words related to personality and travel.",askFa:'الف) می‌تونی کلمات مرتبط با شخصیت و سفر بنویسی.',type:'list',rows:9,placeholder:'e.g., clever / passport'},
{ask:"b) You can write the relevant word(s) for each picture (personality and travel).",askFa:'ب) می‌تونی برای هر تصویر کلمه مناسب رو بنویسی (شخصیت و سفر).',type:'image-words-list',images:[
{image:'review1-vocab-1.jpg',hint:'صفت شخصیت'},
{image:'review1-vocab-2.jpg',hint:'صفت شخصیت'},
{image:'review1-vocab-3.jpg',hint:'سفر'},
{image:'review1-vocab-4.jpg',hint:'سفر'},
{image:'review1-vocab-5.jpg',hint:'سفر/پول'},
{image:'review1-vocab-6.jpg',hint:'سفر'}
]}
]
},
{
title: 'Grammar',
titleFa: 'دستور زبان',
color: '#C8E6C9',
items: [
{ask:"a) You can change the sentences below.",askFa:'الف) می‌تونی جملات زیر را تغییر بدی (مخفف / سؤال / منفی).',type:'sentence-transform',sentences:[
{original:'She is talkative.',forms:['Contracted form','Question (Is...)','Negative']},
{original:'There is a gift shop here.',forms:['Question (Is...)','Negative']}
]},
{ask:"b) You can change the sentences below.",askFa:'ب) می‌تونی جملات زیر را تغییر بدی.',type:'sentence-transform',sentences:[
{original:'John is reading a short story.',forms:['Contracted form','Question (Is...)','Negative']},
{original:'Minoo is traveling to Gorgan by plane.',forms:['Wh-question (Who is...)','Wh-question (Where...)','Wh-question (How...)']}
]}
]
}
]
},
{
num:2,
title:'Review 2',
covers:'Lessons 3-4',
description:'مرور درس‌های ۳ و ۴',
summary:'این مرور درباره جشن‌ها و خدمات هست.',
summaryItems: [
{icon:'🎉',title:'جشن‌ها',desc:'We wear... / Do you celebrate...?'},
{icon:'🏛️',title:'خدمات',desc:'Banks open at... / What time...?'},
{icon:'🎵',title:'ملودی زبان',desc:'لحن صعودی (do/does) / لحن نزولی (Wh-)'},
{icon:'📚',title:'واژگان',desc:'کلمات جشن و خدمات'},
{icon:'📐',title:'گرامر',desc:'do/does + Wh-questions + adverbs'}
],
sections: [
{
title: 'Talking about Festivals and Ceremonies',
titleFa: 'صحبت درباره جشن‌ها و مراسم',
color: '#C8E6C9',
items: [
{ask:"a) You can talk about festival activities.",askFa:'الف) می‌تونی درباره فعالیت‌های جشن صحبت کنی.',template:'We wear _____ .\nIranians _____ .\nShe _____ .',inputs:3,placeholder1:'new clothes',placeholder2:'celebrate Norooz',placeholder3:'bakes a cake'},
{ask:"b) You can ask about festival activities.",askFa:'ب) می‌تونی درباره فعالیت‌های جشن بپرسی.',template:'Do you celebrate _____ ?\nDo _____ ?\nDoes _____ ?',inputs:3,placeholder1:'Norooz',placeholder2:'they visit relatives',placeholder3:'she cook the meal'}
]
},
{
title: 'Talking about Services',
titleFa: 'صحبت درباره خدمات',
color: '#E0E0FA',
items: [
{ask:"a) You can talk about services.",askFa:'الف) می‌تونی درباره خدمات صحبت کنی.',template:'Banks open at _____ .\nFirefighters _____ .\nPolice _____ .',inputs:3,placeholder1:'8 AM',placeholder2:'help in emergencies',placeholder3:'help lost children'},
{ask:"b) You can ask about services.",askFa:'ب) می‌تونی درباره خدمات بپرسی.',template:'What time do _____ ?\nWhere _____ ?\nWhat _____ ?\nWhy _____ ?',inputs:4,placeholder1:'banks open',placeholder2:'is the post office',placeholder3:'do they sell',placeholder4:'do you go by bus'}
]
},
{
title: 'Language Melody',
titleFa: 'ملودی زبان',
color: '#FAD0E1',
items: [
{ask:"a) You can produce some sentences with falling and rising intonations.",askFa:'الف) می‌تونی جملاتی با لحن نزولی و صعودی تولید کنی.',examples:['Do they eat nuts? ↗','What do they eat? ↘']},
{ask:"b) You can write some sentences with falling and rising intonations.",askFa:'ب) می‌تونی جملاتی با لحن نزولی و صعودی بنویسی.',type:'list',rows:4,placeholder:'e.g., Does she sing? ↗'}
]
},
{
title: 'Vocabulary',
titleFa: 'واژگان',
color: '#C5DCF5',
items: [
{ask:"a) You can write some words related to festivals and services.",askFa:'الف) می‌تونی کلمات مرتبط با جشن و خدمات بنویسی.',type:'list',rows:9,placeholder:'e.g., celebrate / post office'},
{ask:"b) You can write the relevant word(s) or phrase(s) for each picture.",askFa:'ب) می‌تونی برای هر تصویر کلمه/عبارت مناسب رو بنویسی.',type:'image-words-list',images:[
{image:'review2-vocab-1.jpg',hint:'جشن'},
{image:'review2-vocab-2.jpg',hint:'جشن'},
{image:'review2-vocab-3.jpg',hint:'جشن'},
{image:'review2-vocab-4.jpg',hint:'خدمات'},
{image:'review2-vocab-5.jpg',hint:'خدمات'},
{image:'review2-vocab-6.jpg',hint:'خدمات'}
]}
]
},
{
title: 'Grammar',
titleFa: 'دستور زبان',
color: '#C8E6C9',
items: [
{ask:"a) You can change the sentences below.",askFa:'الف) می‌تونی جملات زیر را تغییر بدی (سؤال / منفی).',type:'sentence-transform',sentences:[
{original:'Mary enjoys New Year holidays.',forms:['Question (Does she...?)','Negative']},
{original:'Alex helps his mother a lot.',forms:['Question (Does...?)','Negative']}
]},
{ask:"b) You can write correct questions.",askFa:'ب) می‌تونی سؤالات صحیح بنویسی.',type:'sentence-transform',sentences:[
{original:'Mike studies his lessons in the afternoons.',forms:['Wh-question (What does he...?)','Wh-question (When...?)','Wh-question (Who...?)']},
{original:'Clara drives her car carefully on the highway.',forms:['Wh-question (How does...?)','Wh-question (Where...?)','Wh-question (What...?)']}
]},
{ask:"c) You can rewrite these sentences correctly.",askFa:'ج) می‌تونی این جملات را با ضمیر مناسب کامل کنی.',type:'fill-sentences',items:[
{sentence:'Jack and Jill have a house. _____ house is really big.',answer:'Their'},
{sentence:"Phillip's car is new. _____ car is very fast.",answer:'His'},
{sentence:'My brother and I go to Shahid-e-Gomnaam School. _____ school has 12 classes.',answer:'Our'}
]},
{ask:"d) You can write some sentences with adverbs of frequency.",askFa:'د) می‌تونی جملاتی با قیدهای تکرار بنویسی (always, usually, sometimes, never).',type:'list',rows:3,placeholder:'e.g., She always helps her mother.'}
]
}
]
},
{
num:3,
title:'Review 3',
covers:'Lessons 5-6',
description:'مرور درس‌های ۵ و ۶',
summary:'این مرور درباره رسانه و سلامت/جراحت‌ها هست — همراه با تمرین زمان گذشته (افعال باقاعده و بی‌قاعده).',
summaryItems: [
{icon:'📺',title:'رسانه',desc:'I received... / Did you use...?'},
{icon:'🏥',title:'سلامت',desc:'I cut my... / When did...?'},
{icon:'🎵',title:'ملودی زبان',desc:'لحن تعجب و مرور'},
{icon:'📚',title:'واژگان',desc:'کلمات رسانه و سلامت'}
],
sections: [
{
title: 'Talking about Media',
titleFa: 'صحبت درباره رسانه',
color: '#FFE0E0',
items: [
{ask:"a) You can talk about media.",askFa:'الف) می‌تونی درباره رسانه صحبت کنی.',template:'I received a(n) _____ .\nMy mother _____ .\nHe _____ .',inputs:3,placeholder1:'e-mail',placeholder2:'watched TV last night',placeholder3:'surfed the Internet'},
{ask:"b) You can ask about media.",askFa:'ب) می‌تونی درباره رسانه بپرسی.',template:'Did you use your computer this morning?\nDid she _____ ?\nDid they _____ ?',inputs:2,placeholder1:'download a book',placeholder2:'watch the cartoon'}
]
},
{
title: 'Talking about Health and Injuries',
titleFa: 'صحبت درباره سلامت و جراحت‌ها',
color: '#D7CCC8',
items: [
{ask:"a) You can talk about injuries.",askFa:'الف) می‌تونی درباره جراحت‌ها صحبت کنی.',template:'I cut my _____ .\nMy grandmother _____ .\nThe children _____ .',inputs:3,placeholder1:'finger',placeholder2:'broke her leg',placeholder3:'had an accident'},
{ask:"b) You can ask about injuries.",askFa:'ب) می‌تونی درباره جراحت‌ها بپرسی.',template:'When did the workers hurt _____ ?\nWhere _____ ?\nWho _____ ?',inputs:3,placeholder1:'their hands',placeholder2:'did she fall',placeholder3:'had an accident'}
]
},
{
title: 'Language Melody',
titleFa: 'ملودی زبان',
color: '#FAD0E1',
items: [
{ask:"a) You can produce some sentences with falling and rising intonations.",askFa:'الف) می‌تونی جملاتی با لحن نزولی و صعودی تولید کنی.',examples:["It's wonderful! ↗","That's great! ↗",'I like it. ↘','She burnt her hand. ↘']},
{ask:"b) You can write some sentences with falling and rising intonations.",askFa:'ب) می‌تونی جملاتی با لحن نزولی و صعودی بنویسی.',type:'list',rows:4,placeholder:'e.g., I broke my leg. ↘'}
]
},
{
title: 'Vocabulary',
titleFa: 'واژگان',
color: '#C5DCF5',
items: [
{ask:"a) You can write some words about media and health & injuries.",askFa:'الف) می‌تونی کلمات مرتبط با رسانه و سلامت/جراحت بنویسی.',type:'list',rows:9,placeholder:'e.g., download / hospital'},
{ask:"b) You can write the relevant word(s) or phrase(s) for each picture.",askFa:'ب) می‌تونی برای هر تصویر کلمه/عبارت مناسب رو بنویسی.',type:'image-words-list',images:[
{image:'review3-vocab-1.jpg',hint:'رسانه'},
{image:'review3-vocab-2.jpg',hint:'رسانه'},
{image:'review3-vocab-3.jpg',hint:'رسانه'},
{image:'review3-vocab-4.jpg',hint:'سلامت/جراحت'},
{image:'review3-vocab-5.jpg',hint:'سلامت/جراحت'},
{image:'review3-vocab-6.jpg',hint:'سلامت/جراحت'}
]},
{ask:"c) You can write 5 irregular verbs (V1 → V2).",askFa:'ج) می‌تونی ۵ فعل بی‌قاعده (ساده → گذشته) بنویسی.',type:'pairs-list',leftLabel:'Base (V1)',rightLabel:'Past (V2)',rows:5}
]
}
]
}
];
const COMMON_WORDS = {
'i':{pos:'pron',ipa:'/aɪ/',fa:'من'},
'you':{pos:'pron',ipa:'/juː/',fa:'تو، شما'},
'he':{pos:'pron',ipa:'/hi/',fa:'او (مذکر)'},
'she':{pos:'pron',ipa:'/ʃi/',fa:'او (مؤنث)'},
'it':{pos:'pron',ipa:'/ɪt/',fa:'آن'},
'we':{pos:'pron',ipa:'/wi/',fa:'ما'},
'they':{pos:'pron',ipa:'/ðeɪ/',fa:'آنها'},
'me':{pos:'pron',ipa:'/mi/',fa:'به من'},
'him':{pos:'pron',ipa:'/hɪm/',fa:'به او (مذکر)'},
'her':{pos:'pron',ipa:'/hɜːr/',fa:'به او / مال او'},
'us':{pos:'pron',ipa:'/ʌs/',fa:'به ما'},
'them':{pos:'pron',ipa:'/ðem/',fa:'به آنها'},
'my':{pos:'pron',ipa:'/maɪ/',fa:'مال من'},
'your':{pos:'pron',ipa:'/jɔːr/',fa:'مال تو'},
'his':{pos:'pron',ipa:'/hɪz/',fa:'مال او (مذکر)'},
'its':{pos:'pron',ipa:'/ɪts/',fa:'مال آن'},
'our':{pos:'pron',ipa:'/ɑːr/',fa:'مال ما'},
'their':{pos:'pron',ipa:'/ðer/',fa:'مال آنها'},
'this':{pos:'pron',ipa:'/ðɪs/',fa:'این'},
'that':{pos:'pron',ipa:'/ðæt/',fa:'آن'},
'these':{pos:'pron',ipa:'/ðiːz/',fa:'این‌ها'},
'those':{pos:'pron',ipa:'/ðoʊz/',fa:'آن‌ها'},
'am':{pos:'verb',ipa:'/æm/',fa:'هستم'},
'is':{pos:'verb',ipa:'/ɪz/',fa:'هست'},
'are':{pos:'verb',ipa:'/ɑːr/',fa:'هستی، هستند'},
'was':{pos:'verb',ipa:'/wʌz/',fa:'بود'},
'were':{pos:'verb',ipa:'/wɜːr/',fa:'بودند'},
'be':{pos:'verb',ipa:'/bi/',fa:'بودن'},
'been':{pos:'verb',ipa:'/biːn/',fa:'بوده'},
'being':{pos:'verb',ipa:'/ˈbiːɪŋ/',fa:'در حال بودن'},
'have':{pos:'verb',ipa:'/hæv/',fa:'داشتن'},
'has':{pos:'verb',ipa:'/hæz/',fa:'دارد'},
'had':{pos:'verb',ipa:'/hæd/',fa:'داشت'},
'do':{pos:'verb',ipa:'/du/',fa:'انجام دادن'},
'does':{pos:'verb',ipa:'/dʌz/',fa:'انجام می‌دهد'},
'did':{pos:'verb',ipa:'/dɪd/',fa:'انجام داد'},
'go':{pos:'verb',ipa:'/ɡoʊ/',fa:'رفتن'},
'goes':{pos:'verb',ipa:'/ɡoʊz/',fa:'می‌رود'},
'went':{pos:'verb',ipa:'/went/',fa:'رفت'},
'come':{pos:'verb',ipa:'/kʌm/',fa:'آمدن'},
'came':{pos:'verb',ipa:'/keɪm/',fa:'آمد'},
'see':{pos:'verb',ipa:'/si/',fa:'دیدن'},
'saw':{pos:'verb',ipa:'/sɔː/',fa:'دید'},
'seen':{pos:'verb',ipa:'/siːn/',fa:'دیده'},
'get':{pos:'verb',ipa:'/ɡet/',fa:'گرفتن، رسیدن'},
'got':{pos:'verb',ipa:'/ɡɒt/',fa:'گرفت'},
'make':{pos:'verb',ipa:'/meɪk/',fa:'ساختن'},
'made':{pos:'verb',ipa:'/meɪd/',fa:'ساخت'},
'know':{pos:'verb',ipa:'/noʊ/',fa:'دانستن'},
'knew':{pos:'verb',ipa:'/njuː/',fa:'دانست'},
'think':{pos:'verb',ipa:'/θɪŋk/',fa:'فکر کردن'},
'thought':{pos:'verb',ipa:'/θɔːt/',fa:'فکر کرد'},
'want':{pos:'verb',ipa:'/wɒnt/',fa:'خواستن'},
'wants':{pos:'verb',ipa:'/wɒnts/',fa:'می‌خواهد'},
'wanted':{pos:'verb',ipa:'/ˈwɒntɪd/',fa:'خواست'},
'like':{pos:'verb',ipa:'/laɪk/',fa:'دوست داشتن، مثل'},
'likes':{pos:'verb',ipa:'/laɪks/',fa:'دوست دارد'},
'liked':{pos:'verb',ipa:'/laɪkt/',fa:'دوست داشت'},
'love':{pos:'verb',ipa:'/lʌv/',fa:'عشق ورزیدن، خیلی دوست داشتن'},
'loves':{pos:'verb',ipa:'/lʌvz/',fa:'عشق می‌ورزد'},
'help':{pos:'verb',ipa:'/help/',fa:'کمک کردن'},
'helps':{pos:'verb',ipa:'/helps/',fa:'کمک می‌کند'},
'helped':{pos:'verb',ipa:'/helpt/',fa:'کمک کرد'},
'tell':{pos:'verb',ipa:'/tel/',fa:'گفتن'},
'told':{pos:'verb',ipa:'/toʊld/',fa:'گفت'},
'say':{pos:'verb',ipa:'/seɪ/',fa:'گفتن'},
'said':{pos:'verb',ipa:'/sed/',fa:'گفت'},
'ask':{pos:'verb',ipa:'/æsk/',fa:'پرسیدن'},
'asks':{pos:'verb',ipa:'/æsks/',fa:'می‌پرسد'},
'asked':{pos:'verb',ipa:'/æskt/',fa:'پرسید'},
'give':{pos:'verb',ipa:'/ɡɪv/',fa:'دادن'},
'gives':{pos:'verb',ipa:'/ɡɪvz/',fa:'می‌دهد'},
'gave':{pos:'verb',ipa:'/ɡeɪv/',fa:'داد'},
'take':{pos:'verb',ipa:'/teɪk/',fa:'گرفتن، بردن'},
'takes':{pos:'verb',ipa:'/teɪks/',fa:'می‌برد'},
'took':{pos:'verb',ipa:'/tʊk/',fa:'برد'},
'put':{pos:'verb',ipa:'/pʊt/',fa:'گذاشتن'},
'find':{pos:'verb',ipa:'/faɪnd/',fa:'پیدا کردن'},
'found':{pos:'verb',ipa:'/faʊnd/',fa:'پیدا کرد'},
'use':{pos:'verb',ipa:'/juːz/',fa:'استفاده کردن'},
'uses':{pos:'verb',ipa:'/ˈjuːzɪz/',fa:'استفاده می‌کند'},
'used':{pos:'verb',ipa:'/juːzd/',fa:'استفاده کرد'},
'try':{pos:'verb',ipa:'/traɪ/',fa:'تلاش کردن'},
'tries':{pos:'verb',ipa:'/traɪz/',fa:'تلاش می‌کند'},
'tried':{pos:'verb',ipa:'/traɪd/',fa:'تلاش کرد'},
'play':{pos:'verb',ipa:'/pleɪ/',fa:'بازی کردن'},
'plays':{pos:'verb',ipa:'/pleɪz/',fa:'بازی می‌کند'},
'played':{pos:'verb',ipa:'/pleɪd/',fa:'بازی کرد'},
'read':{pos:'verb',ipa:'/riːd/',fa:'خواندن'},
'reads':{pos:'verb',ipa:'/riːdz/',fa:'می‌خواند'},
'write':{pos:'verb',ipa:'/raɪt/',fa:'نوشتن'},
'writes':{pos:'verb',ipa:'/raɪts/',fa:'می‌نویسد'},
'wrote':{pos:'verb',ipa:'/roʊt/',fa:'نوشت'},
'speak':{pos:'verb',ipa:'/spiːk/',fa:'صحبت کردن'},
'speaks':{pos:'verb',ipa:'/spiːks/',fa:'صحبت می‌کند'},
'spoke':{pos:'verb',ipa:'/spoʊk/',fa:'صحبت کرد'},
'talk':{pos:'verb',ipa:'/tɔːk/',fa:'صحبت کردن'},
'talks':{pos:'verb',ipa:'/tɔːks/',fa:'صحبت می‌کند'},
'talked':{pos:'verb',ipa:'/tɔːkt/',fa:'صحبت کرد'},
'listen':{pos:'verb',ipa:'/ˈlɪsən/',fa:'گوش کردن'},
'listens':{pos:'verb',ipa:'/ˈlɪsənz/',fa:'گوش می‌کند'},
'watch':{pos:'verb',ipa:'/wɒtʃ/',fa:'تماشا کردن'},
'watches':{pos:'verb',ipa:'/ˈwɒtʃɪz/',fa:'تماشا می‌کند'},
'watched':{pos:'verb',ipa:'/wɒtʃt/',fa:'تماشا کرد'},
'work':{pos:'verb/noun',ipa:'/wɜːrk/',fa:'کار، کار کردن'},
'works':{pos:'verb',ipa:'/wɜːrks/',fa:'کار می‌کند'},
'worked':{pos:'verb',ipa:'/wɜːrkt/',fa:'کار کرد'},
'live':{pos:'verb',ipa:'/lɪv/',fa:'زندگی کردن'},
'lives':{pos:'verb',ipa:'/lɪvz/',fa:'زندگی می‌کند'},
'lived':{pos:'verb',ipa:'/lɪvd/',fa:'زندگی کرد'},
'eat':{pos:'verb',ipa:'/iːt/',fa:'خوردن'},
'eats':{pos:'verb',ipa:'/iːts/',fa:'می‌خورد'},
'ate':{pos:'verb',ipa:'/eɪt/',fa:'خورد'},
'drink':{pos:'verb',ipa:'/drɪŋk/',fa:'نوشیدن'},
'drinks':{pos:'verb',ipa:'/drɪŋks/',fa:'می‌نوشد'},
'drank':{pos:'verb',ipa:'/dræŋk/',fa:'نوشید'},
'sleep':{pos:'verb',ipa:'/sliːp/',fa:'خوابیدن'},
'sleeps':{pos:'verb',ipa:'/sliːps/',fa:'می‌خوابد'},
'slept':{pos:'verb',ipa:'/slept/',fa:'خوابید'},
'wake':{pos:'verb',ipa:'/weɪk/',fa:'بیدار شدن'},
'wakes':{pos:'verb',ipa:'/weɪks/',fa:'بیدار می‌شود'},
'woke':{pos:'verb',ipa:'/woʊk/',fa:'بیدار شد'},
'study':{pos:'verb',ipa:'/ˈstʌdi/',fa:'مطالعه کردن'},
'studies':{pos:'verb',ipa:'/ˈstʌdiz/',fa:'مطالعه می‌کند'},
'studied':{pos:'verb',ipa:'/ˈstʌdid/',fa:'مطالعه کرد'},
'learn':{pos:'verb',ipa:'/lɜːrn/',fa:'یاد گرفتن'},
'learns':{pos:'verb',ipa:'/lɜːrnz/',fa:'یاد می‌گیرد'},
'learned':{pos:'verb',ipa:'/lɜːrnd/',fa:'یاد گرفت'},
'teach':{pos:'verb',ipa:'/tiːtʃ/',fa:'درس دادن'},
'taught':{pos:'verb',ipa:'/tɔːt/',fa:'درس داد'},
'open':{pos:'verb/adj',ipa:'/ˈoʊpən/',fa:'باز کردن، باز'},
'opens':{pos:'verb',ipa:'/ˈoʊpənz/',fa:'باز می‌کند'},
'opened':{pos:'verb',ipa:'/ˈoʊpənd/',fa:'باز کرد'},
'close':{pos:'verb',ipa:'/kloʊz/',fa:'بستن'},
'closes':{pos:'verb',ipa:'/ˈkloʊzɪz/',fa:'می‌بندد'},
'closed':{pos:'verb',ipa:'/kloʊzd/',fa:'بست'},
'start':{pos:'verb',ipa:'/stɑːrt/',fa:'شروع کردن'},
'starts':{pos:'verb',ipa:'/stɑːrts/',fa:'شروع می‌کند'},
'started':{pos:'verb',ipa:'/ˈstɑːrtɪd/',fa:'شروع کرد'},
'stop':{pos:'verb',ipa:'/stɒp/',fa:'متوقف کردن'},
'stops':{pos:'verb',ipa:'/stɒps/',fa:'متوقف می‌کند'},
'stopped':{pos:'verb',ipa:'/stɒpt/',fa:'متوقف کرد'},
'enjoy':{pos:'verb',ipa:'/ɪnˈdʒɔɪ/',fa:'لذت بردن'},
'enjoys':{pos:'verb',ipa:'/ɪnˈdʒɔɪz/',fa:'لذت می‌برد'},
'enjoyed':{pos:'verb',ipa:'/ɪnˈdʒɔɪd/',fa:'لذت برد'},
'meet':{pos:'verb',ipa:'/miːt/',fa:'ملاقات کردن'},
'meets':{pos:'verb',ipa:'/miːts/',fa:'ملاقات می‌کند'},
'met':{pos:'verb',ipa:'/met/',fa:'ملاقات کرد'},
'visit':{pos:'verb',ipa:'/ˈvɪzɪt/',fa:'ملاقات کردن، بازدید'},
'visits':{pos:'verb',ipa:'/ˈvɪzɪts/',fa:'بازدید می‌کند'},
'visited':{pos:'verb',ipa:'/ˈvɪzɪtɪd/',fa:'بازدید کرد'},
'travel':{pos:'verb/noun',ipa:'/ˈtrævəl/',fa:'سفر، سفر کردن'},
'travels':{pos:'verb',ipa:'/ˈtrævəlz/',fa:'سفر می‌کند'},
'traveled':{pos:'verb',ipa:'/ˈtrævəld/',fa:'سفر کرد'},
'send':{pos:'verb',ipa:'/send/',fa:'فرستادن'},
'sends':{pos:'verb',ipa:'/sendz/',fa:'می‌فرستد'},
'sent':{pos:'verb',ipa:'/sent/',fa:'فرستاد'},
'receive':{pos:'verb',ipa:'/rɪˈsiːv/',fa:'دریافت کردن'},
'receives':{pos:'verb',ipa:'/rɪˈsiːvz/',fa:'دریافت می‌کند'},
'received':{pos:'verb',ipa:'/rɪˈsiːvd/',fa:'دریافت کرد'},
'buy':{pos:'verb',ipa:'/baɪ/',fa:'خریدن'},
'buys':{pos:'verb',ipa:'/baɪz/',fa:'می‌خرد'},
'bought':{pos:'verb',ipa:'/bɔːt/',fa:'خرید'},
'sell':{pos:'verb',ipa:'/sel/',fa:'فروختن'},
'sells':{pos:'verb',ipa:'/selz/',fa:'می‌فروشد'},
'sold':{pos:'verb',ipa:'/soʊld/',fa:'فروخت'},
'cook':{pos:'verb',ipa:'/kʊk/',fa:'پختن'},
'cooks':{pos:'verb',ipa:'/kʊks/',fa:'می‌پزد'},
'cooked':{pos:'verb',ipa:'/kʊkt/',fa:'پخت'},
'celebrate':{pos:'verb',ipa:'/ˈselɪbreɪt/',fa:'جشن گرفتن'},
'celebrates':{pos:'verb',ipa:'/ˈselɪbreɪts/',fa:'جشن می‌گیرد'},
'celebrated':{pos:'verb',ipa:'/ˈselɪbreɪtɪd/',fa:'جشن گرفت'},
'wear':{pos:'verb',ipa:'/wer/',fa:'پوشیدن'},
'wears':{pos:'verb',ipa:'/werz/',fa:'می‌پوشد'},
'wore':{pos:'verb',ipa:'/wɔːr/',fa:'پوشید'},
'can':{pos:'modal',ipa:'/kæn/',fa:'توانستن'},
'could':{pos:'modal',ipa:'/kʊd/',fa:'توانست (گذشته)'},
'will':{pos:'modal',ipa:'/wɪl/',fa:'خواهد (آینده)'},
'would':{pos:'modal',ipa:'/wʊd/',fa:'می‌خواست'},
'should':{pos:'modal',ipa:'/ʃʊd/',fa:'باید'},
'must':{pos:'modal',ipa:'/mʌst/',fa:'باید (الزام)'},
'may':{pos:'modal',ipa:'/meɪ/',fa:'ممکن است'},
'might':{pos:'modal',ipa:'/maɪt/',fa:'شاید'},
'a':{pos:'article',ipa:'/ə/',fa:'یک (نامعین)'},
'an':{pos:'article',ipa:'/æn/',fa:'یک (قبل از حروف صدادار)'},
'the':{pos:'article',ipa:'/ðə/',fa:'(حرف تعریف)'},
'in':{pos:'prep',ipa:'/ɪn/',fa:'در'},
'on':{pos:'prep',ipa:'/ɒn/',fa:'روی، در روز'},
'at':{pos:'prep',ipa:'/æt/',fa:'در، ساعت'},
'to':{pos:'prep',ipa:'/tu/',fa:'به، برای'},
'from':{pos:'prep',ipa:'/frɒm/',fa:'از'},
'of':{pos:'prep',ipa:'/ɒv/',fa:'از، مالکیت'},
'for':{pos:'prep',ipa:'/fɔːr/',fa:'برای'},
'with':{pos:'prep',ipa:'/wɪð/',fa:'با'},
'without':{pos:'prep',ipa:'/wɪˈðaʊt/',fa:'بدون'},
'by':{pos:'prep',ipa:'/baɪ/',fa:'توسط، با'},
'about':{pos:'prep',ipa:'/əˈbaʊt/',fa:'درباره'},
'into':{pos:'prep',ipa:'/ˈɪntu/',fa:'به داخل'},
'between':{pos:'prep',ipa:'/bɪˈtwiːn/',fa:'بین'},
'near':{pos:'prep',ipa:'/nɪr/',fa:'نزدیک'},
'next':{pos:'prep/adj',ipa:'/nekst/',fa:'بعدی، کنار'},
'before':{pos:'prep',ipa:'/bɪˈfɔːr/',fa:'قبل از'},
'after':{pos:'prep',ipa:'/ˈæftər/',fa:'بعد از'},
'during':{pos:'prep',ipa:'/ˈdjʊrɪŋ/',fa:'در طی'},
'over':{pos:'prep',ipa:'/ˈoʊvər/',fa:'روی، بیش از'},
'under':{pos:'prep',ipa:'/ˈʌndər/',fa:'زیر'},
'and':{pos:'conj',ipa:'/ænd/',fa:'و'},
'but':{pos:'conj',ipa:'/bʌt/',fa:'اما'},
'or':{pos:'conj',ipa:'/ɔːr/',fa:'یا'},
'so':{pos:'conj',ipa:'/soʊ/',fa:'پس، خیلی'},
'because':{pos:'conj',ipa:'/bɪˈkɔːz/',fa:'چون'},
'if':{pos:'conj',ipa:'/ɪf/',fa:'اگر'},
'when':{pos:'conj',ipa:'/wen/',fa:'وقتی، چه زمانی'},
'while':{pos:'conj',ipa:'/waɪl/',fa:'در حالی که'},
'than':{pos:'conj',ipa:'/ðæn/',fa:'از (مقایسه)'},
'what':{pos:'pron',ipa:'/wʌt/',fa:'چی'},
'where':{pos:'adv',ipa:'/wer/',fa:'کجا'},
'who':{pos:'pron',ipa:'/hu/',fa:'کی'},
'why':{pos:'adv',ipa:'/waɪ/',fa:'چرا'},
'how':{pos:'adv',ipa:'/haʊ/',fa:'چطور'},
'which':{pos:'pron',ipa:'/wɪtʃ/',fa:'کدام'},
'whose':{pos:'pron',ipa:'/huːz/',fa:'مال کی'},
'not':{pos:'adv',ipa:'/nɒt/',fa:'نه، نمی‌'},
'no':{pos:'adv',ipa:'/noʊ/',fa:'نه'},
'yes':{pos:'adv',ipa:'/jes/',fa:'بله'},
'very':{pos:'adv',ipa:'/ˈveri/',fa:'خیلی'},
'really':{pos:'adv',ipa:'/ˈriːəli/',fa:'واقعاً'},
'too':{pos:'adv',ipa:'/tuː/',fa:'هم، خیلی'},
'also':{pos:'adv',ipa:'/ˈɔːlsoʊ/',fa:'همچنین'},
'just':{pos:'adv',ipa:'/dʒʌst/',fa:'فقط، تازه'},
'always':{pos:'adv',ipa:'/ˈɔːlweɪz/',fa:'همیشه'},
'usually':{pos:'adv',ipa:'/ˈjuːʒuəli/',fa:'معمولاً'},
'often':{pos:'adv',ipa:'/ˈɒfən/',fa:'اغلب'},
'sometimes':{pos:'adv',ipa:'/ˈsʌmtaɪmz/',fa:'گاهی'},
'never':{pos:'adv',ipa:'/ˈnevər/',fa:'هرگز'},
'here':{pos:'adv',ipa:'/hɪr/',fa:'اینجا'},
'there':{pos:'adv',ipa:'/ðer/',fa:'آنجا'},
'now':{pos:'adv',ipa:'/naʊ/',fa:'الان'},
'today':{pos:'adv',ipa:'/təˈdeɪ/',fa:'امروز'},
'tonight':{pos:'adv',ipa:'/təˈnaɪt/',fa:'امشب'},
'tomorrow':{pos:'adv',ipa:'/təˈmɒroʊ/',fa:'فردا'},
'yesterday':{pos:'adv',ipa:'/ˈjestərdeɪ/',fa:'دیروز'},
'well':{pos:'adv',ipa:'/wel/',fa:'خوب'},
'fast':{pos:'adv/adj',ipa:'/fæst/',fa:'سریع'},
'slow':{pos:'adj',ipa:'/sloʊ/',fa:'آهسته'},
'slowly':{pos:'adv',ipa:'/ˈsloʊli/',fa:'به آهستگی'},
'only':{pos:'adv',ipa:'/ˈoʊnli/',fa:'فقط'},
'still':{pos:'adv',ipa:'/stɪl/',fa:'هنوز'},
'again':{pos:'adv',ipa:'/əˈɡen/',fa:'دوباره'},
'maybe':{pos:'adv',ipa:'/ˈmeɪbi/',fa:'شاید'},
'right':{pos:'adv/adj',ipa:'/raɪt/',fa:'درست، راست'},
'left':{pos:'adj/adv',ipa:'/left/',fa:'چپ'},
'first':{pos:'adj/adv',ipa:'/fɜːrst/',fa:'اول'},
'last':{pos:'adj',ipa:'/læst/',fa:'آخر، گذشته'},
'good':{pos:'adj',ipa:'/ɡʊd/',fa:'خوب'},
'bad':{pos:'adj',ipa:'/bæd/',fa:'بد'},
'big':{pos:'adj',ipa:'/bɪɡ/',fa:'بزرگ'},
'small':{pos:'adj',ipa:'/smɔːl/',fa:'کوچک'},
'old':{pos:'adj',ipa:'/oʊld/',fa:'قدیمی، پیر'},
'new':{pos:'adj',ipa:'/njuː/',fa:'جدید'},
'young':{pos:'adj',ipa:'/jʌŋ/',fa:'جوان'},
'hot':{pos:'adj',ipa:'/hɒt/',fa:'داغ، گرم'},
'cold':{pos:'adj',ipa:'/koʊld/',fa:'سرد'},
'happy':{pos:'adj',ipa:'/ˈhæpi/',fa:'خوشحال'},
'sad':{pos:'adj',ipa:'/sæd/',fa:'ناراحت'},
'tired':{pos:'adj',ipa:'/ˈtaɪərd/',fa:'خسته'},
'busy':{pos:'adj',ipa:'/ˈbɪzi/',fa:'مشغول'},
'easy':{pos:'adj',ipa:'/ˈiːzi/',fa:'آسان'},
'hard':{pos:'adj',ipa:'/hɑːrd/',fa:'سخت'},
'great':{pos:'adj',ipa:'/ɡreɪt/',fa:'عالی'},
'nice':{pos:'adj',ipa:'/naɪs/',fa:'خوب، دلپذیر'},
'fine':{pos:'adj',ipa:'/faɪn/',fa:'خوب'},
'ok':{pos:'adj',ipa:'/ˌoʊˈkeɪ/',fa:'خوب، باشه'},
'okay':{pos:'adj',ipa:'/ˌoʊˈkeɪ/',fa:'خوب، باشه'},
'sure':{pos:'adj',ipa:'/ʃʊr/',fa:'حتماً، مطمئن'},
'true':{pos:'adj',ipa:'/truː/',fa:'درست، واقعی'},
'false':{pos:'adj',ipa:'/fɔːls/',fa:'غلط'},
'beautiful':{pos:'adj',ipa:'/ˈbjuːtɪfəl/',fa:'زیبا'},
'famous':{pos:'adj',ipa:'/ˈfeɪməs/',fa:'مشهور'},
'next':{pos:'adj',ipa:'/nekst/',fa:'بعدی'},
'long':{pos:'adj',ipa:'/lɒŋ/',fa:'بلند، طولانی'},
'short':{pos:'adj',ipa:'/ʃɔːrt/',fa:'کوتاه'},
'high':{pos:'adj',ipa:'/haɪ/',fa:'بلند، بالا'},
'low':{pos:'adj',ipa:'/loʊ/',fa:'کوتاه، پایین'},
'far':{pos:'adv/adj',ipa:'/fɑːr/',fa:'دور'},
'cheap':{pos:'adj',ipa:'/tʃiːp/',fa:'ارزان'},
'expensive':{pos:'adj',ipa:'/ɪkˈspensɪv/',fa:'گران'},
'free':{pos:'adj',ipa:'/friː/',fa:'آزاد، رایگان'},
'full':{pos:'adj',ipa:'/fʊl/',fa:'پر'},
'empty':{pos:'adj',ipa:'/ˈempti/',fa:'خالی'},
'wonderful':{pos:'adj',ipa:'/ˈwʌndərfəl/',fa:'فوق‌العاده'},
'interesting':{pos:'adj',ipa:'/ˈɪntrəstɪŋ/',fa:'جالب'},
'important':{pos:'adj',ipa:'/ɪmˈpɔːrtənt/',fa:'مهم'},
'different':{pos:'adj',ipa:'/ˈdɪfrənt/',fa:'متفاوت'},
'same':{pos:'adj',ipa:'/seɪm/',fa:'یکسان'},
'many':{pos:'adj',ipa:'/ˈmeni/',fa:'بسیاری'},
'much':{pos:'adj/adv',ipa:'/mʌtʃ/',fa:'مقدار زیاد'},
'more':{pos:'adj/adv',ipa:'/mɔːr/',fa:'بیشتر'},
'most':{pos:'adj/adv',ipa:'/moʊst/',fa:'بیشترین'},
'some':{pos:'adj',ipa:'/sʌm/',fa:'مقداری'},
'any':{pos:'adj',ipa:'/ˈeni/',fa:'هیچ، هر'},
'few':{pos:'adj',ipa:'/fjuː/',fa:'تعداد کم'},
'all':{pos:'adj',ipa:'/ɔːl/',fa:'همه'},
'every':{pos:'adj',ipa:'/ˈevri/',fa:'هر'},
'another':{pos:'adj',ipa:'/əˈnʌðər/',fa:'دیگری'},
'each':{pos:'adj',ipa:'/iːtʃ/',fa:'هر یک'},
'own':{pos:'adj',ipa:'/oʊn/',fa:'خود'},
'name':{pos:'noun',ipa:'/neɪm/',fa:'نام'},
'family':{pos:'noun',ipa:'/ˈfæməli/',fa:'خانواده'},
'friend':{pos:'noun',ipa:'/frend/',fa:'دوست'},
'friends':{pos:'noun',ipa:'/frendz/',fa:'دوستان'},
'father':{pos:'noun',ipa:'/ˈfɑːðər/',fa:'پدر'},
'mother':{pos:'noun',ipa:'/ˈmʌðər/',fa:'مادر'},
'brother':{pos:'noun',ipa:'/ˈbrʌðər/',fa:'برادر'},
'sister':{pos:'noun',ipa:'/ˈsɪstər/',fa:'خواهر'},
'son':{pos:'noun',ipa:'/sʌn/',fa:'پسر (فرزند)'},
'daughter':{pos:'noun',ipa:'/ˈdɔːtər/',fa:'دختر (فرزند)'},
'boy':{pos:'noun',ipa:'/bɔɪ/',fa:'پسر'},
'girl':{pos:'noun',ipa:'/ɡɜːrl/',fa:'دختر'},
'man':{pos:'noun',ipa:'/mæn/',fa:'مرد'},
'woman':{pos:'noun',ipa:'/ˈwʊmən/',fa:'زن'},
'people':{pos:'noun',ipa:'/ˈpiːpəl/',fa:'مردم'},
'person':{pos:'noun',ipa:'/ˈpɜːrsən/',fa:'شخص'},
'children':{pos:'noun',ipa:'/ˈtʃɪldrən/',fa:'بچه‌ها'},
'child':{pos:'noun',ipa:'/tʃaɪld/',fa:'بچه'},
'home':{pos:'noun',ipa:'/hoʊm/',fa:'خانه'},
'house':{pos:'noun',ipa:'/haʊs/',fa:'خانه'},
'school':{pos:'noun',ipa:'/skuːl/',fa:'مدرسه'},
'class':{pos:'noun',ipa:'/klæs/',fa:'کلاس'},
'classroom':{pos:'noun',ipa:'/ˈklæsruːm/',fa:'کلاس درس'},
'teacher':{pos:'noun',ipa:'/ˈtiːtʃər/',fa:'معلم'},
'student':{pos:'noun',ipa:'/ˈstuːdənt/',fa:'دانش‌آموز'},
'lesson':{pos:'noun',ipa:'/ˈlesən/',fa:'درس'},
'lessons':{pos:'noun',ipa:'/ˈlesənz/',fa:'درس‌ها'},
'book':{pos:'noun',ipa:'/bʊk/',fa:'کتاب'},
'books':{pos:'noun',ipa:'/bʊks/',fa:'کتاب‌ها'},
'time':{pos:'noun',ipa:'/taɪm/',fa:'زمان'},
'day':{pos:'noun',ipa:'/deɪ/',fa:'روز'},
'days':{pos:'noun',ipa:'/deɪz/',fa:'روزها'},
'week':{pos:'noun',ipa:'/wiːk/',fa:'هفته'},
'month':{pos:'noun',ipa:'/mʌnθ/',fa:'ماه'},
'year':{pos:'noun',ipa:'/jɪr/',fa:'سال'},
'morning':{pos:'noun',ipa:'/ˈmɔːrnɪŋ/',fa:'صبح'},
'afternoon':{pos:'noun',ipa:'/ˌæftərˈnuːn/',fa:'بعد از ظهر'},
'evening':{pos:'noun',ipa:'/ˈiːvnɪŋ/',fa:'عصر'},
'night':{pos:'noun',ipa:'/naɪt/',fa:'شب'},
'weekend':{pos:'noun',ipa:'/ˈwiːkend/',fa:'آخر هفته'},
'thing':{pos:'noun',ipa:'/θɪŋ/',fa:'چیز'},
'things':{pos:'noun',ipa:'/θɪŋz/',fa:'چیزها'},
'way':{pos:'noun',ipa:'/weɪ/',fa:'راه'},
'place':{pos:'noun',ipa:'/pleɪs/',fa:'مکان'},
'world':{pos:'noun',ipa:'/wɜːrld/',fa:'دنیا'},
'country':{pos:'noun',ipa:'/ˈkʌntri/',fa:'کشور'},
'city':{pos:'noun',ipa:'/ˈsɪti/',fa:'شهر'},
'life':{pos:'noun',ipa:'/laɪf/',fa:'زندگی'},
'food':{pos:'noun',ipa:'/fuːd/',fa:'غذا'},
'water':{pos:'noun',ipa:'/ˈwɔːtər/',fa:'آب'},
'money':{pos:'noun',ipa:'/ˈmʌni/',fa:'پول'},
'job':{pos:'noun',ipa:'/dʒɒb/',fa:'شغل'},
'work':{pos:'noun',ipa:'/wɜːrk/',fa:'کار'},
'hand':{pos:'noun',ipa:'/hænd/',fa:'دست'},
'foot':{pos:'noun',ipa:'/fʊt/',fa:'پا'},
'eye':{pos:'noun',ipa:'/aɪ/',fa:'چشم'},
'head':{pos:'noun',ipa:'/hed/',fa:'سر'},
'hello':{pos:'interj',ipa:'/həˈloʊ/',fa:'سلام'},
'hi':{pos:'interj',ipa:'/haɪ/',fa:'سلام'},
'goodbye':{pos:'interj',ipa:'/ɡʊdˈbaɪ/',fa:'خداحافظ'},
'bye':{pos:'interj',ipa:'/baɪ/',fa:'خداحافظ'},
'please':{pos:'adv',ipa:'/pliːz/',fa:'لطفاً'},
'thanks':{pos:'noun',ipa:'/θæŋks/',fa:'ممنون'},
'sorry':{pos:'adj',ipa:'/ˈsɒri/',fa:'متأسفم'},
'welcome':{pos:'noun',ipa:'/ˈwelkəm/',fa:'خوش‌آمد'},
'excuse':{pos:'verb',ipa:'/ɪkˈskjuːz/',fa:'ببخشید'},
'one':{pos:'num',ipa:'/wʌn/',fa:'یک'},
'two':{pos:'num',ipa:'/tuː/',fa:'دو'},
'three':{pos:'num',ipa:'/θriː/',fa:'سه'},
'four':{pos:'num',ipa:'/fɔːr/',fa:'چهار'},
'five':{pos:'num',ipa:'/faɪv/',fa:'پنج'},
'six':{pos:'num',ipa:'/sɪks/',fa:'شش'},
'seven':{pos:'num',ipa:'/ˈsevən/',fa:'هفت'},
'eight':{pos:'num',ipa:'/eɪt/',fa:'هشت'},
'nine':{pos:'num',ipa:'/naɪn/',fa:'نه'},
'ten':{pos:'num',ipa:'/ten/',fa:'ده'},
'eleven':{pos:'num',ipa:'/ɪˈlevən/',fa:'یازده'},
'twelve':{pos:'num',ipa:'/twelv/',fa:'دوازده'}
};
const COMMON_PHRASES = {
'sounds good':{ipa:'/saʊndz ɡʊd/',fa:'به نظر خوبه',type:'common'},
"that's great":{ipa:"/ðæts ɡreɪt/",fa:'عالیه',type:'common'},
"that's right":{ipa:"/ðæts raɪt/",fa:'درسته',type:'common'},
'good morning':{ipa:'/ɡʊd ˈmɔːrnɪŋ/',fa:'صبح بخیر',type:'common'},
'good afternoon':{ipa:'/ɡʊd ˌæftərˈnuːn/',fa:'بعد از ظهر بخیر',type:'common'},
'good night':{ipa:'/ɡʊd naɪt/',fa:'شب بخیر',type:'common'},
'good evening':{ipa:'/ɡʊd ˈiːvnɪŋ/',fa:'عصر بخیر',type:'common'},
'good luck':{ipa:'/ɡʊd lʌk/',fa:'موفق باشی',type:'common'},
'thank you':{ipa:'/θæŋk juː/',fa:'متشکرم',type:'common'},
'thanks a lot':{ipa:'/θæŋks ə lɒt/',fa:'خیلی ممنون',type:'common'},
'no problem':{ipa:'/noʊ ˈprɒbləm/',fa:'مشکلی نیست',type:'common'},
'you are welcome':{ipa:'/juː ɑːr ˈwelkəm/',fa:'خواهش می‌کنم',type:'common'},
"you're welcome":{ipa:'/jʊr ˈwelkəm/',fa:'خواهش می‌کنم',type:'common'},
'excuse me':{ipa:'/ɪkˈskjuːz miː/',fa:'ببخشید',type:'common'},
'how are you':{ipa:'/haʊ ɑːr juː/',fa:'حالت چطوره',type:'common'},
"how's it going":{ipa:'/haʊz ɪt ˈɡoʊɪŋ/',fa:'اوضاع چطوره',type:'common'},
'how about':{ipa:'/haʊ əˈbaʊt/',fa:'چطوره...',type:'common'},
'how much':{ipa:'/haʊ mʌtʃ/',fa:'چقدر',type:'common'},
'how many':{ipa:'/haʊ ˈmeni/',fa:'چند تا',type:'common'},
'how old':{ipa:'/haʊ oʊld/',fa:'چند ساله',type:'common'},
'how often':{ipa:'/haʊ ˈɒfən/',fa:'هر چند وقت یکبار',type:'common'},
"what's up":{ipa:'/wʌts ʌp/',fa:'چه خبر',type:'common'},
'what time':{ipa:'/wʌt taɪm/',fa:'چه ساعتی',type:'common'},
'what about':{ipa:'/wʌt əˈbaʊt/',fa:'درباره... چی',type:'common'},
"what's wrong":{ipa:'/wʌts rɒŋ/',fa:'چی شده',type:'common'},
'a lot':{ipa:'/ə lɒt/',fa:'خیلی',type:'common'},
'a lot of':{ipa:'/ə lɒt ʌv/',fa:'تعداد زیاد',type:'common'},
'a few':{ipa:'/ə fjuː/',fa:'تعداد کم',type:'common'},
'a little':{ipa:'/ə ˈlɪtəl/',fa:'مقدار کم',type:'common'},
'of course':{ipa:'/ʌv kɔːrs/',fa:'البته',type:'common'},
'by the way':{ipa:'/baɪ ðə weɪ/',fa:'راستی',type:'common'},
'at the moment':{ipa:'/æt ðə ˈmoʊmənt/',fa:'در حال حاضر',type:'common'},
'right now':{ipa:'/raɪt naʊ/',fa:'همین الان',type:'common'},
'all right':{ipa:'/ɔːl raɪt/',fa:'باشه، خیلی خوب',type:'common'},
'just a moment':{ipa:'/dʒʌst ə ˈmoʊmənt/',fa:'یک لحظه',type:'common'},
'last night':{ipa:'/læst naɪt/',fa:'دیشب',type:'common'},
'last week':{ipa:'/læst wiːk/',fa:'هفته گذشته',type:'common'},
'last year':{ipa:'/læst jɪr/',fa:'سال گذشته',type:'common'},
'next week':{ipa:'/nekst wiːk/',fa:'هفته بعد',type:'common'},
'next year':{ipa:'/nekst jɪr/',fa:'سال بعد',type:'common'},
"let's go":{ipa:"/lets ɡoʊ/",fa:'بریم',type:'common'},
"see you":{ipa:'/siː juː/',fa:'می‌بینمت',type:'common'},
'take care':{ipa:'/teɪk ker/',fa:'مراقب باش',type:'common'},
'have fun':{ipa:'/hæv fʌn/',fa:'خوش بگذره',type:'common'},
"i think":{ipa:'/aɪ θɪŋk/',fa:'فکر می‌کنم',type:'common'},
"i don't think so":{ipa:"/aɪ doʊnt θɪŋk soʊ/",fa:'فکر نکنم',type:'common'},
'first aid':{ipa:'/fɜːrst eɪd/',fa:'کمک‌های اولیه',type:'common'}
};
if (typeof WORD_DICT !== 'undefined') {
for (const k in COMMON_WORDS) {
if (!WORD_DICT[k]) WORD_DICT[k] = COMMON_WORDS[k];
}
}
if (typeof PHRASE_DICT !== 'undefined') {
for (const k in COMMON_PHRASES) {
if (!PHRASE_DICT[k]) PHRASE_DICT[k] = COMMON_PHRASES[k];
}
}
if (typeof LESSONS !== 'undefined' && typeof WORD_DICT !== 'undefined') {
LESSONS.forEach(lesson => {
if (!lesson.vocabulary) return;
lesson.vocabulary.forEach(v => {
if (!v || !v.word) return;
const key = v.word.toLowerCase();
if (v.word.includes(' ') || v.word.includes('-')) {
if (typeof PHRASE_DICT !== 'undefined' && !PHRASE_DICT[key]) {
PHRASE_DICT[key] = {
ipa: v.ipa || '',
fa: v.fa || '',
type: 'official'
};
}
} else {
if (!WORD_DICT[key]) {
WORD_DICT[key] = {
pos: v.pos || 'word',
ipa: v.ipa || '',
fa: v.fa || ''
};
}
}
});
});
}
const EXTRA_WORDS = {
'cakes':{pos:'noun',ipa:'/keɪks/',fa:'کیک‌ها'},
'car':{pos:'noun',ipa:'/kɑːr/',fa:'ماشین'},
'clock':{pos:'noun',ipa:'/klɒk/',fa:'ساعت دیواری'},
'cooking':{pos:'verb/noun',ipa:'/ˈkʊkɪŋ/',fa:'آشپزی، در حال پختن'},
'fixing':{pos:'verb',ipa:'/ˈfɪksɪŋ/',fa:'در حال تعمیر'},
'going':{pos:'verb',ipa:'/ˈɡoʊɪŋ/',fa:'در حال رفتن'},
'living':{pos:'verb',ipa:'/ˈlɪvɪŋ/',fa:'در حال زندگی، زنده'},
'look':{pos:'verb',ipa:'/lʊk/',fa:'نگاه کردن'},
'looks':{pos:'verb',ipa:'/lʊks/',fa:'به نظر می‌رسد'},
'looking':{pos:'verb',ipa:'/ˈlʊkɪŋ/',fa:'در حال نگاه کردن'},
'names':{pos:'noun',ipa:'/neɪmz/',fa:'اسامی'},
'oh':{pos:'interj',ipa:'/oʊ/',fa:'اوه (ندا)'},
'oranges':{pos:'noun',ipa:'/ˈɔːrɪndʒɪz/',fa:'پرتقال‌ها'},
'phone':{pos:'noun',ipa:'/foʊn/',fa:'تلفن'},
'phones':{pos:'noun',ipa:'/foʊnz/',fa:'تلفن‌ها'},
'playing':{pos:'verb',ipa:'/ˈpleɪɪŋ/',fa:'در حال بازی کردن'},
'reading':{pos:'verb',ipa:'/ˈriːdɪŋ/',fa:'در حال خواندن'},
'something':{pos:'pron',ipa:'/ˈsʌmθɪŋ/',fa:'چیزی'},
'sounds':{pos:'verb',ipa:'/saʊndz/',fa:'به نظر می‌رسد، صداها'},
'studying':{pos:'verb',ipa:'/ˈstʌdiɪŋ/',fa:'در حال مطالعه'},
'wearing':{pos:'verb',ipa:'/ˈwerɪŋ/',fa:'در حال پوشیدن'},
'yours':{pos:'pron',ipa:'/jʊrz/',fa:'مال تو'},
'let':{pos:'verb',ipa:'/let/',fa:'اجازه دادن'},
'around':{pos:'prep/adv',ipa:'/əˈraʊnd/',fa:'اطراف، حدود'},
'actually':{pos:'adv',ipa:'/ˈæktʃuəli/',fa:'در واقع'},
'afternoons':{pos:'noun',ipa:'/ˌæftərˈnuːnz/',fa:'بعدازظهرها'},
'mornings':{pos:'noun',ipa:'/ˈmɔːrnɪŋz/',fa:'صبح‌ها'},
'evenings':{pos:'noun',ipa:'/ˈiːvnɪŋz/',fa:'عصرها'},
'nights':{pos:'noun',ipa:'/naɪts/',fa:'شب‌ها'},
'aren\'t':{pos:'verb',ipa:'/ɑːrnt/',fa:'نیستی، نیستند'},
'aren':{pos:'verb',ipa:'/ɑːrn/',fa:'(aren\'t — نیستی)'},
'isn\'t':{pos:'verb',ipa:'/ˈɪzənt/',fa:'نیست'},
'isn':{pos:'verb',ipa:'/ˈɪzən/',fa:'(isn\'t — نیست)'},
'don\'t':{pos:'verb',ipa:'/doʊnt/',fa:'انجام نمی‌دهم/دهی'},
'don':{pos:'verb',ipa:'/doʊn/',fa:'(don\'t — نمی‌)'},
'doesn\'t':{pos:'verb',ipa:'/ˈdʌzənt/',fa:'انجام نمی‌دهد'},
'doesn':{pos:'verb',ipa:'/ˈdʌzən/',fa:'(doesn\'t — نمی‌)'},
'didn\'t':{pos:'verb',ipa:'/ˈdɪdənt/',fa:'انجام نداد'},
'didn':{pos:'verb',ipa:'/ˈdɪdən/',fa:'(didn\'t — انجام نداد)'},
'as':{pos:'conj/prep',ipa:'/æz/',fa:'به‌عنوان، در حالی که'},
'back':{pos:'noun/adv',ipa:'/bæk/',fa:'پشت، برگشت'},
'basketball':{pos:'noun',ipa:'/ˈbæskɪtbɔːl/',fa:'بسکتبال'},
'bicycle':{pos:'noun',ipa:'/ˈbaɪsɪkəl/',fa:'دوچرخه'},
'bring':{pos:'verb',ipa:'/brɪŋ/',fa:'آوردن'},
'buildings':{pos:'noun',ipa:'/ˈbɪldɪŋz/',fa:'ساختمان‌ها'},
'cake':{pos:'noun',ipa:'/keɪk/',fa:'کیک'},
'call':{pos:'verb',ipa:'/kɔːl/',fa:'صدا زدن، تماس گرفتن'},
'calls':{pos:'verb',ipa:'/kɔːlz/',fa:'تماس می‌گیرد'},
'computer':{pos:'noun',ipa:'/kəmˈpjuːtər/',fa:'کامپیوتر'},
'eh':{pos:'interj',ipa:'/eɪ/',fa:'اِ (ندا)'},
'eyes':{pos:'noun',ipa:'/aɪz/',fa:'چشم‌ها'},
'farms':{pos:'noun',ipa:'/fɑːrmz/',fa:'مزرعه‌ها'},
'fields':{pos:'noun',ipa:'/fiːldz/',fa:'مزرعه‌ها، زمین‌ها'},
'flowers':{pos:'noun',ipa:'/ˈflaʊərz/',fa:'گل‌ها'},
'football':{pos:'noun',ipa:'/ˈfʊtbɔːl/',fa:'فوتبال'},
'games':{pos:'noun',ipa:'/ɡeɪmz/',fa:'بازی‌ها'},
'hobbies':{pos:'noun',ipa:'/ˈhɒbiz/',fa:'سرگرمی‌ها'},
'horse':{pos:'noun',ipa:'/hɔːrs/',fa:'اسب'},
'libraries':{pos:'noun',ipa:'/ˈlaɪbrəriz/',fa:'کتابخانه‌ها'},
'library':{pos:'noun',ipa:'/ˈlaɪbreri/',fa:'کتابخانه'},
'listening':{pos:'verb',ipa:'/ˈlɪsənɪŋ/',fa:'در حال گوش دادن'},
'minute':{pos:'noun',ipa:'/ˈmɪnɪt/',fa:'دقیقه'},
'minutes':{pos:'noun',ipa:'/ˈmɪnɪts/',fa:'دقیقه‌ها'},
'matter':{pos:'noun',ipa:'/ˈmætər/',fa:'موضوع، مسئله'},
'mosques':{pos:'noun',ipa:'/mɒsks/',fa:'مساجد'},
'mosque':{pos:'noun',ipa:'/mɒsk/',fa:'مسجد'},
'movies':{pos:'noun',ipa:'/ˈmuːviz/',fa:'فیلم‌ها'},
'movie':{pos:'noun',ipa:'/ˈmuːvi/',fa:'فیلم'},
'mr':{pos:'noun',ipa:'/ˈmɪstər/',fa:'آقای'},
'mrs':{pos:'noun',ipa:'/ˈmɪsɪz/',fa:'خانم (متأهل)'},
'museums':{pos:'noun',ipa:'/mjuːˈziːəmz/',fa:'موزه‌ها'},
'museum':{pos:'noun',ipa:'/mjuːˈziːəm/',fa:'موزه'},
'news':{pos:'noun',ipa:'/njuːz/',fa:'خبر'},
'nose':{pos:'noun',ipa:'/noʊz/',fa:'بینی'},
'ones':{pos:'noun',ipa:'/wʌnz/',fa:'یک‌ها (اشاره به اشیاء)'},
'palaces':{pos:'noun',ipa:'/ˈpælɪsɪz/',fa:'کاخ‌ها'},
'palace':{pos:'noun',ipa:'/ˈpælɪs/',fa:'کاخ'},
'parents':{pos:'noun',ipa:'/ˈperənts/',fa:'والدین'},
'photos':{pos:'noun',ipa:'/ˈfoʊtoʊz/',fa:'عکس‌ها'},
'photo':{pos:'noun',ipa:'/ˈfoʊtoʊ/',fa:'عکس'},
'problem':{pos:'noun',ipa:'/ˈprɒbləm/',fa:'مشکل'},
'puzzle':{pos:'noun',ipa:'/ˈpʌzəl/',fa:'پازل، معما'},
'quiet':{pos:'adj',ipa:'/ˈkwaɪət/',fa:'ساکت'},
'radio':{pos:'noun',ipa:'/ˈreɪdioʊ/',fa:'رادیو'},
'rain':{pos:'noun/verb',ipa:'/reɪn/',fa:'باران، باریدن'},
'relatives':{pos:'noun',ipa:'/ˈrelətɪvz/',fa:'فامیل'},
'restaurants':{pos:'noun',ipa:'/ˈrestərɒnts/',fa:'رستوران‌ها'},
'restaurant':{pos:'noun',ipa:'/ˈrestərɒnt/',fa:'رستوران'},
'ride':{pos:'verb',ipa:'/raɪd/',fa:'سواری کردن'},
'riding':{pos:'verb',ipa:'/ˈraɪdɪŋ/',fa:'در حال سواری'},
'running':{pos:'verb',ipa:'/ˈrʌnɪŋ/',fa:'دویدن، در حال دویدن'},
'soon':{pos:'adv',ipa:'/suːn/',fa:'به‌زودی'},
'sore':{pos:'adj',ipa:'/sɔːr/',fa:'درد می‌کند'},
'special':{pos:'adj',ipa:'/ˈspeʃəl/',fa:'خاص'},
'stay':{pos:'verb',ipa:'/steɪ/',fa:'ماندن'},
'staying':{pos:'verb',ipa:'/ˈsteɪɪŋ/',fa:'در حال ماندن'},
'stayed':{pos:'verb',ipa:'/steɪd/',fa:'ماند'},
'stories':{pos:'noun',ipa:'/ˈstɔːriz/',fa:'داستان‌ها'},
'story':{pos:'noun',ipa:'/ˈstɔːri/',fa:'داستان'},
'students':{pos:'noun',ipa:'/ˈstuːdənts/',fa:'دانش‌آموزان'},
'system':{pos:'noun',ipa:'/ˈsɪstəm/',fa:'سیستم'},
'telling':{pos:'verb',ipa:'/ˈtelɪŋ/',fa:'در حال گفتن'},
'tennis':{pos:'noun',ipa:'/ˈtenɪs/',fa:'تنیس'},
'thank':{pos:'verb',ipa:'/θæŋk/',fa:'تشکر کردن'},
'throat':{pos:'noun',ipa:'/θroʊt/',fa:'گلو'},
'trees':{pos:'noun',ipa:'/triːz/',fa:'درختان'},
'tree':{pos:'noun',ipa:'/triː/',fa:'درخت'},
'tv':{pos:'noun',ipa:'/ˌtiːˈviː/',fa:'تلویزیون'},
'walk':{pos:'verb',ipa:'/wɔːk/',fa:'راه رفتن'},
'walks':{pos:'verb',ipa:'/wɔːks/',fa:'راه می‌رود'},
'walked':{pos:'verb',ipa:'/wɔːkt/',fa:'راه رفت'},
'walking':{pos:'verb',ipa:'/ˈwɔːkɪŋ/',fa:'در حال راه رفتن'},
'web':{pos:'noun',ipa:'/web/',fa:'وب'},
'wind':{pos:'noun',ipa:'/wɪnd/',fa:'باد'},
'worry':{pos:'verb',ipa:'/ˈwʌri/',fa:'نگرانی، نگران بودن'},
'wow':{pos:'interj',ipa:'/waʊ/',fa:'وای (تعجب)'},
'wrong':{pos:'adj',ipa:'/rɒŋ/',fa:'اشتباه، غلط'},
'search':{pos:'verb/noun',ipa:'/sɜːrtʃ/',fa:'جستجو'},
'searches':{pos:'verb',ipa:'/ˈsɜːrtʃɪz/',fa:'جستجو می‌کند'},
'searching':{pos:'verb',ipa:'/ˈsɜːrtʃɪŋ/',fa:'در حال جستجو'},
'address':{pos:'noun',ipa:'/əˈdres/',fa:'آدرس'},
'addresses':{pos:'noun',ipa:'/əˈdresɪz/',fa:'آدرس‌ها'},
'aid':{pos:'noun',ipa:'/eɪd/',fa:'کمک'},
'airport':{pos:'noun',ipa:'/ˈerpɔːrt/',fa:'فرودگاه'},
'attended':{pos:'verb',ipa:'/əˈtendɪd/',fa:'شرکت کرد'},
'attend':{pos:'verb',ipa:'/əˈtend/',fa:'شرکت کردن'},
'best':{pos:'adj',ipa:'/best/',fa:'بهترین'},
'bit':{pos:'noun',ipa:'/bɪt/',fa:'کمی'},
'booking':{pos:'noun/verb',ipa:'/ˈbʊkɪŋ/',fa:'رزرو، در حال رزرو'},
'bus':{pos:'noun',ipa:'/bʌs/',fa:'اتوبوس'},
'buying':{pos:'verb',ipa:'/ˈbaɪɪŋ/',fa:'در حال خریدن'},
'care':{pos:'noun/verb',ipa:'/ker/',fa:'مراقبت'},
'check':{pos:'verb',ipa:'/tʃek/',fa:'چک کردن'},
'checking':{pos:'verb',ipa:'/ˈtʃekɪŋ/',fa:'در حال بررسی'},
'chinese':{pos:'adj/noun',ipa:'/tʃaɪˈniːz/',fa:'چینی'},
'classes':{pos:'noun',ipa:'/ˈklæsɪz/',fa:'کلاس‌ها'},
'clothes':{pos:'noun',ipa:'/kloʊðz/',fa:'لباس‌ها'},
'color':{pos:'noun',ipa:'/ˈkʌlər/',fa:'رنگ'},
'colors':{pos:'noun',ipa:'/ˈkʌlərz/',fa:'رنگ‌ها'},
'connected':{pos:'verb/adj',ipa:'/kəˈnektɪd/',fa:'متصل، وصل شد'},
'connect':{pos:'verb',ipa:'/kəˈnekt/',fa:'وصل کردن'},
'corner':{pos:'noun',ipa:'/ˈkɔːrnər/',fa:'گوشه'},
'cousins':{pos:'noun',ipa:'/ˈkʌzənz/',fa:'پسرعموها/دخترعموها'},
'cousin':{pos:'noun',ipa:'/ˈkʌzən/',fa:'پسرعمو/دخترعمو'},
'doing':{pos:'verb',ipa:'/ˈduːɪŋ/',fa:'در حال انجام دادن'},
'door':{pos:'noun',ipa:'/dɔːr/',fa:'در'},
'downloaded':{pos:'verb',ipa:'/ˌdaʊnˈloʊdɪd/',fa:'دانلود کرد'},
'download':{pos:'verb',ipa:'/ˌdaʊnˈloʊd/',fa:'دانلود کردن'},
'drove':{pos:'verb',ipa:'/droʊv/',fa:'رانندگی کرد'},
'drive':{pos:'verb',ipa:'/draɪv/',fa:'رانندگی کردن'},
'email':{pos:'noun',ipa:'/ˈiːmeɪl/',fa:'ایمیل'},
'emails':{pos:'noun',ipa:'/ˈiːmeɪlz/',fa:'ایمیل‌ها'},
'english':{pos:'adj/noun',ipa:'/ˈɪŋɡlɪʃ/',fa:'انگلیسی'},
'events':{pos:'noun',ipa:'/ɪˈvents/',fa:'رویدادها'},
'event':{pos:'noun',ipa:'/ɪˈvent/',fa:'رویداد'},
'filling':{pos:'verb',ipa:'/ˈfɪlɪŋ/',fa:'پر کردن، در حال پر کردن'},
'fill':{pos:'verb',ipa:'/fɪl/',fa:'پر کردن'},
'form':{pos:'noun',ipa:'/fɔːrm/',fa:'فرم'},
'fun':{pos:'noun/adj',ipa:'/fʌn/',fa:'تفریح، باحال'},
'gifts':{pos:'noun',ipa:'/ɡɪfts/',fa:'هدیه‌ها'},
'gift':{pos:'noun',ipa:'/ɡɪft/',fa:'هدیه'},
'grandmother':{pos:'noun',ipa:'/ˈɡrænmʌðər/',fa:'مادربزرگ'},
'grandfather':{pos:'noun',ipa:'/ˈɡrænfɑːðər/',fa:'پدربزرگ'},
'grandparents':{pos:'noun',ipa:'/ˈɡrænperənts/',fa:'پدربزرگ و مادربزرگ'},
'guide':{pos:'noun/verb',ipa:'/ɡaɪd/',fa:'راهنما'},
'happens':{pos:'verb',ipa:'/ˈhæpənz/',fa:'اتفاق می‌افتد'},
'happen':{pos:'verb',ipa:'/ˈhæpən/',fa:'اتفاق افتادن'},
'happened':{pos:'verb',ipa:'/ˈhæpənd/',fa:'اتفاق افتاد'},
'holidays':{pos:'noun',ipa:'/ˈhɒlɪdeɪz/',fa:'تعطیلات'},
'holiday':{pos:'noun',ipa:'/ˈhɒlɪdeɪ/',fa:'تعطیلی'},
'holy':{pos:'adj',ipa:'/ˈhoʊli/',fa:'مقدس'},
'hope':{pos:'verb/noun',ipa:'/hoʊp/',fa:'امیدوار بودن، امید'},
'hopes':{pos:'verb',ipa:'/hoʊps/',fa:'امیدوار است'},
'hoped':{pos:'verb',ipa:'/hoʊpt/',fa:'امیدوار بود'},
'houses':{pos:'noun',ipa:'/ˈhaʊzɪz/',fa:'خانه‌ها'},
'interested':{pos:'adj',ipa:'/ˈɪntrəstɪd/',fa:'علاقه‌مند'},
'international':{pos:'adj',ipa:'/ˌɪntərˈnæʃənəl/',fa:'بین‌المللی'},
'key':{pos:'noun',ipa:'/kiː/',fa:'کلید'},
'keys':{pos:'noun',ipa:'/kiːz/',fa:'کلیدها'},
'lake':{pos:'noun',ipa:'/leɪk/',fa:'دریاچه'},
'makes':{pos:'verb',ipa:'/meɪks/',fa:'می‌سازد'},
'meal':{pos:'noun',ipa:'/miːl/',fa:'وعده غذایی'},
'meals':{pos:'noun',ipa:'/miːlz/',fa:'وعده‌های غذایی'},
'mobile':{pos:'adj/noun',ipa:'/ˈmoʊbaɪl/',fa:'موبایل'},
'mom':{pos:'noun',ipa:'/mɒm/',fa:'مامان'},
'moment':{pos:'noun',ipa:'/ˈmoʊmənt/',fa:'لحظه'},
'myself':{pos:'pron',ipa:'/maɪˈself/',fa:'خودم'},
'yourself':{pos:'pron',ipa:'/jʊrˈself/',fa:'خودت'},
'himself':{pos:'pron',ipa:'/hɪmˈself/',fa:'خودش (مذکر)'},
'herself':{pos:'pron',ipa:'/hɜːrˈself/',fa:'خودش (مؤنث)'},
'itself':{pos:'pron',ipa:'/ɪtˈself/',fa:'خودش (آن)'},
'ourselves':{pos:'pron',ipa:'/ɑːrˈselvz/',fa:'خودمان'},
'themselves':{pos:'pron',ipa:'/ðemˈselvz/',fa:'خودشان'},
'need':{pos:'verb',ipa:'/niːd/',fa:'نیاز داشتن'},
'needs':{pos:'verb',ipa:'/niːdz/',fa:'نیاز دارد'},
'needed':{pos:'verb',ipa:'/ˈniːdɪd/',fa:'نیاز داشت'},
'normally':{pos:'adv',ipa:'/ˈnɔːrməli/',fa:'به‌طور معمول'},
'office':{pos:'noun',ipa:'/ˈɒfɪs/',fa:'دفتر'},
'out':{pos:'adv/prep',ipa:'/aʊt/',fa:'بیرون'},
'park':{pos:'noun',ipa:'/pɑːrk/',fa:'پارک'},
'parks':{pos:'noun',ipa:'/pɑːrks/',fa:'پارک‌ها'},
'participated':{pos:'verb',ipa:'/pɑːrˈtɪsɪpeɪtɪd/',fa:'شرکت کرد'},
'participate':{pos:'verb',ipa:'/pɑːrˈtɪsɪpeɪt/',fa:'شرکت کردن'},
'plan':{pos:'noun/verb',ipa:'/plæn/',fa:'برنامه'},
'plans':{pos:'noun',ipa:'/plænz/',fa:'برنامه‌ها'},
'planning':{pos:'verb',ipa:'/ˈplænɪŋ/',fa:'در حال برنامه‌ریزی'},
'post':{pos:'noun/verb',ipa:'/poʊst/',fa:'پست'},
'reports':{pos:'noun/verb',ipa:'/rɪˈpɔːrts/',fa:'گزارش‌ها'},
'report':{pos:'noun/verb',ipa:'/rɪˈpɔːrt/',fa:'گزارش'},
'round':{pos:'adj',ipa:'/raʊnd/',fa:'گرد'},
'shop':{pos:'noun/verb',ipa:'/ʃɒp/',fa:'مغازه، خرید کردن'},
'shops':{pos:'noun',ipa:'/ʃɒps/',fa:'مغازه‌ها'},
'shopping':{pos:'noun',ipa:'/ˈʃɒpɪŋ/',fa:'خرید کردن'},
'sir':{pos:'noun',ipa:'/sɜːr/',fa:'آقا (احترام)'},
'speaking':{pos:'verb',ipa:'/ˈspiːkɪŋ/',fa:'در حال صحبت'},
'stamps':{pos:'noun',ipa:'/stæmps/',fa:'تمبرها'},
'stamp':{pos:'noun',ipa:'/stæmp/',fa:'تمبر'},
'standing':{pos:'verb',ipa:'/ˈstændɪŋ/',fa:'ایستاده'},
'stand':{pos:'verb',ipa:'/stænd/',fa:'ایستادن'},
'stood':{pos:'verb',ipa:'/stʊd/',fa:'ایستاد'},
'summer':{pos:'noun',ipa:'/ˈsʌmər/',fa:'تابستان'},
'winter':{pos:'noun',ipa:'/ˈwɪntər/',fa:'زمستان'},
'spring':{pos:'noun',ipa:'/sprɪŋ/',fa:'بهار'},
'autumn':{pos:'noun',ipa:'/ˈɔːtəm/',fa:'پاییز'},
'fall':{pos:'noun',ipa:'/fɔːl/',fa:'پاییز، افتادن'},
'table':{pos:'noun',ipa:'/ˈteɪbəl/',fa:'میز'},
'tables':{pos:'noun',ipa:'/ˈteɪbəlz/',fa:'میزها'},
'texted':{pos:'verb',ipa:'/ˈtekstɪd/',fa:'پیامک فرستاد'},
'text':{pos:'noun/verb',ipa:'/tekst/',fa:'متن، پیامک'},
'ticket':{pos:'noun',ipa:'/ˈtɪkɪt/',fa:'بلیط'},
'tickets':{pos:'noun',ipa:'/ˈtɪkɪts/',fa:'بلیط‌ها'},
'train':{pos:'noun',ipa:'/treɪn/',fa:'قطار'},
'trains':{pos:'noun',ipa:'/treɪnz/',fa:'قطارها'},
'traveling':{pos:'verb',ipa:'/ˈtrævəlɪŋ/',fa:'در حال سفر'},
'trips':{pos:'noun',ipa:'/trɪps/',fa:'سفرها'},
'trip':{pos:'noun',ipa:'/trɪp/',fa:'سفر'},
'turn':{pos:'verb/noun',ipa:'/tɜːrn/',fa:'چرخیدن، نوبت'},
'umm':{pos:'interj',ipa:'/əm/',fa:'(صدای فکر کردن)'},
'visiting':{pos:'verb',ipa:'/ˈvɪzɪtɪŋ/',fa:'در حال بازدید'},
'weeks':{pos:'noun',ipa:'/wiːks/',fa:'هفته‌ها'},
'months':{pos:'noun',ipa:'/mʌnθs/',fa:'ماه‌ها'},
'years':{pos:'noun',ipa:'/jɪrz/',fa:'سال‌ها'},
'working':{pos:'verb',ipa:'/ˈwɜːrkɪŋ/',fa:'در حال کار کردن'},
'yeah':{pos:'interj',ipa:'/jeə/',fa:'آره'},
'saturday':{pos:'noun',ipa:'/ˈsætərdeɪ/',fa:'شنبه'},
'sunday':{pos:'noun',ipa:'/ˈsʌndeɪ/',fa:'یکشنبه'},
'monday':{pos:'noun',ipa:'/ˈmʌndeɪ/',fa:'دوشنبه'},
'tuesday':{pos:'noun',ipa:'/ˈtjuːzdeɪ/',fa:'سه‌شنبه'},
'wednesday':{pos:'noun',ipa:'/ˈwenzdeɪ/',fa:'چهارشنبه'},
'thursday':{pos:'noun',ipa:'/ˈθɜːrzdeɪ/',fa:'پنجشنبه'},
'friday':{pos:'noun',ipa:'/ˈfraɪdeɪ/',fa:'جمعه'},
'saturdays':{pos:'noun',ipa:'/ˈsætərdeɪz/',fa:'شنبه‌ها'},
'sundays':{pos:'noun',ipa:'/ˈsʌndeɪz/',fa:'یکشنبه‌ها'},
'mondays':{pos:'noun',ipa:'/ˈmʌndeɪz/',fa:'دوشنبه‌ها'},
'tuesdays':{pos:'noun',ipa:'/ˈtjuːzdeɪz/',fa:'سه‌شنبه‌ها'},
'wednesdays':{pos:'noun',ipa:'/ˈwenzdeɪz/',fa:'چهارشنبه‌ها'},
'thursdays':{pos:'noun',ipa:'/ˈθɜːrzdeɪz/',fa:'پنجشنبه‌ها'},
'fridays':{pos:'noun',ipa:'/ˈfraɪdeɪz/',fa:'جمعه‌ها'},
're':{pos:'verb',ipa:'/ər/',fa:'(\'re — هستی، هستند)'},
'll':{pos:'verb',ipa:'/əl/',fa:'(\'ll — خواهد)'},
've':{pos:'verb',ipa:'/əv/',fa:'(\'ve — حال کامل)'},
's':{pos:'verb',ipa:'/z/',fa:'(\'s — هست/مالکیت)'},
't':{pos:'verb',ipa:'/t/',fa:'(\'t — نفی)'},
'd':{pos:'verb',ipa:'/d/',fa:'(\'d — would/had)'},
'm':{pos:'verb',ipa:'/əm/',fa:'(\'m — هستم)'}
};
if (typeof WORD_DICT !== 'undefined') {
for (const k in EXTRA_WORDS) {
if (!WORD_DICT[k]) WORD_DICT[k] = EXTRA_WORDS[k];
}
}
const FINAL_EXTRA = {
'lot':{pos:'noun',ipa:'/lɒt/',fa:'مقدار، تعداد زیاد'},
'set':{pos:'verb',ipa:'/set/',fa:'قرار دادن، تنظیم کردن'},
'girls':{pos:'noun',ipa:'/ɡɜːrlz/',fa:'دخترها'},
'boys':{pos:'noun',ipa:'/bɔɪz/',fa:'پسرها'},
'net':{pos:'noun',ipa:'/net/',fa:'تور، شبکه'},
'quran':{pos:'noun',ipa:'/kɔːrˈɑːn/',fa:'قرآن'}
};
if (typeof WORD_DICT !== 'undefined') {
for (const k in FINAL_EXTRA) {
if (!WORD_DICT[k]) WORD_DICT[k] = FINAL_EXTRA[k];
}
}
const CONTRACTIONS = {
"i'm":{pos:'verb',ipa:'/aɪm/',fa:'مخفف <strong>I am</strong> — من هستم'},
"i'll":{pos:'verb',ipa:'/aɪl/',fa:'مخفف <strong>I will</strong> — من خواهم'},
"i've":{pos:'verb',ipa:'/aɪv/',fa:'مخفف <strong>I have</strong> — من دارم/داشته‌ام'},
"i'd":{pos:'verb',ipa:'/aɪd/',fa:'مخفف <strong>I would</strong> یا <strong>I had</strong>'},
"you're":{pos:'verb',ipa:'/jʊr/',fa:'مخفف <strong>you are</strong> — تو هستی'},
"you'll":{pos:'verb',ipa:'/juːl/',fa:'مخفف <strong>you will</strong> — تو خواهی'},
"you've":{pos:'verb',ipa:'/juːv/',fa:'مخفف <strong>you have</strong> — تو داری/داشته‌ای'},
"you'd":{pos:'verb',ipa:'/juːd/',fa:'مخفف <strong>you would</strong> یا <strong>you had</strong>'},
"he's":{pos:'verb',ipa:'/hiz/',fa:'مخفف <strong>he is</strong> یا <strong>he has</strong> — اوست/او دارد'},
"he'll":{pos:'verb',ipa:'/hil/',fa:'مخفف <strong>he will</strong> — او خواهد'},
"he'd":{pos:'verb',ipa:'/hid/',fa:'مخفف <strong>he would</strong> یا <strong>he had</strong>'},
"she's":{pos:'verb',ipa:'/ʃiz/',fa:'مخفف <strong>she is</strong> یا <strong>she has</strong> — اوست/او دارد'},
"she'll":{pos:'verb',ipa:'/ʃil/',fa:'مخفف <strong>she will</strong> — او خواهد'},
"she'd":{pos:'verb',ipa:'/ʃid/',fa:'مخفف <strong>she would</strong> یا <strong>she had</strong>'},
"it's":{pos:'verb',ipa:'/ɪts/',fa:'مخفف <strong>it is</strong> یا <strong>it has</strong>'},
"it'll":{pos:'verb',ipa:'/ˈɪtəl/',fa:'مخفف <strong>it will</strong>'},
"it'd":{pos:'verb',ipa:'/ˈɪtəd/',fa:'مخفف <strong>it would</strong> یا <strong>it had</strong>'},
"we're":{pos:'verb',ipa:'/wɪr/',fa:'مخفف <strong>we are</strong> — ما هستیم'},
"we'll":{pos:'verb',ipa:'/wil/',fa:'مخفف <strong>we will</strong> — ما خواهیم'},
"we've":{pos:'verb',ipa:'/wiv/',fa:'مخفف <strong>we have</strong> — ما داریم/داشته‌ایم'},
"we'd":{pos:'verb',ipa:'/wid/',fa:'مخفف <strong>we would</strong> یا <strong>we had</strong>'},
"they're":{pos:'verb',ipa:'/ðer/',fa:'مخفف <strong>they are</strong> — آنها هستند'},
"they'll":{pos:'verb',ipa:'/ðel/',fa:'مخفف <strong>they will</strong> — آنها خواهند'},
"they've":{pos:'verb',ipa:'/ðev/',fa:'مخفف <strong>they have</strong> — آنها دارند/داشته‌اند'},
"they'd":{pos:'verb',ipa:'/ðed/',fa:'مخفف <strong>they would</strong> یا <strong>they had</strong>'},
"isn't":{pos:'verb',ipa:'/ˈɪzənt/',fa:'مخفف <strong>is not</strong> — نیست'},
"aren't":{pos:'verb',ipa:'/ɑːrnt/',fa:'مخفف <strong>are not</strong> — نیستی/نیستند'},
"wasn't":{pos:'verb',ipa:'/ˈwʌzənt/',fa:'مخفف <strong>was not</strong> — نبود'},
"weren't":{pos:'verb',ipa:'/wɜːrnt/',fa:'مخفف <strong>were not</strong> — نبودند'},
"don't":{pos:'verb',ipa:'/doʊnt/',fa:'مخفف <strong>do not</strong> — انجام نمی‌دهم/دهی'},
"doesn't":{pos:'verb',ipa:'/ˈdʌzənt/',fa:'مخفف <strong>does not</strong> — انجام نمی‌دهد'},
"didn't":{pos:'verb',ipa:'/ˈdɪdənt/',fa:'مخفف <strong>did not</strong> — انجام نداد'},
"haven't":{pos:'verb',ipa:'/ˈhævənt/',fa:'مخفف <strong>have not</strong> — ندارم/نداری'},
"hasn't":{pos:'verb',ipa:'/ˈhæzənt/',fa:'مخفف <strong>has not</strong> — ندارد'},
"hadn't":{pos:'verb',ipa:'/ˈhædənt/',fa:'مخفف <strong>had not</strong> — نداشت'},
"won't":{pos:'verb',ipa:'/woʊnt/',fa:'مخفف <strong>will not</strong> — نخواهد'},
"wouldn't":{pos:'verb',ipa:'/ˈwʊdənt/',fa:'مخفف <strong>would not</strong> — نمی‌خواست'},
"shouldn't":{pos:'verb',ipa:'/ˈʃʊdənt/',fa:'مخفف <strong>should not</strong> — نباید'},
"couldn't":{pos:'verb',ipa:'/ˈkʊdənt/',fa:'مخفف <strong>could not</strong> — نتوانست'},
"can't":{pos:'verb',ipa:'/kænt/',fa:'مخفف <strong>cannot</strong> — نمی‌توانم/توانی'},
"mustn't":{pos:'verb',ipa:'/ˈmʌsənt/',fa:'مخفف <strong>must not</strong> — نباید'},
"what's":{pos:'wh',ipa:'/wʌts/',fa:'مخفف <strong>what is</strong> یا <strong>what has</strong>'},
"where's":{pos:'wh',ipa:'/werz/',fa:'مخفف <strong>where is</strong> یا <strong>where has</strong>'},
"who's":{pos:'wh',ipa:'/huz/',fa:'مخفف <strong>who is</strong> یا <strong>who has</strong>'},
"how's":{pos:'wh',ipa:'/haʊz/',fa:'مخفف <strong>how is</strong>'},
"why's":{pos:'wh',ipa:'/waɪz/',fa:'مخفف <strong>why is</strong>'},
"when's":{pos:'wh',ipa:'/wenz/',fa:'مخفف <strong>when is</strong>'},
"that's":{pos:'verb',ipa:'/ðæts/',fa:'مخفف <strong>that is</strong> — آن است'},
"there's":{pos:'verb',ipa:'/ðerz/',fa:'مخفف <strong>there is</strong> — وجود دارد'},
"here's":{pos:'verb',ipa:'/hɪrz/',fa:'مخفف <strong>here is</strong> — اینجاست'},
"let's":{pos:'verb',ipa:'/lets/',fa:'مخفف <strong>let us</strong> — بیا...'},
"ain't":{pos:'verb',ipa:'/eɪnt/',fa:'مخفف عامیانه — نیست/ندارد (غیررسمی)'}
};
if (typeof WORD_DICT !== 'undefined') {
for (const k in CONTRACTIONS) {
if (!WORD_DICT[k]) WORD_DICT[k] = CONTRACTIONS[k];
}
}
