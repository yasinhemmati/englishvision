const WORD_DICT = {
iran:{pos:'noun',ipa:'/ɪˈrɑːn/',fa:'ایران'},
iranian:{pos:'adj',ipa:'/ɪˈreɪniən/',fa:'ایرانی'},
france:{pos:'noun',ipa:'/fræns/',fa:'فرانسه'},
french:{pos:'adj',ipa:'/frentʃ/',fa:'فرانسوی'},
england:{pos:'noun',ipa:'/ˈɪŋɡlənd/',fa:'انگلستان'},
english:{pos:'adj',ipa:'/ˈɪŋɡlɪʃ/',fa:'انگلیسی'},
british:{pos:'adj',ipa:'/ˈbrɪtɪʃ/',fa:'اهل بریتانیا'},
china:{pos:'noun',ipa:'/ˈtʃaɪnə/',fa:'چین'},
chinese:{pos:'adj',ipa:'/tʃaɪˈniːz/',fa:'چینی'},
spain:{pos:'noun',ipa:'/speɪn/',fa:'اسپانیا'},
spanish:{pos:'adj',ipa:'/ˈspænɪʃ/',fa:'اسپانیایی'},
brazil:{pos:'noun',ipa:'/brəˈzɪl/',fa:'برزیل'},
brazilian:{pos:'adj',ipa:'/brəˈzɪliən/',fa:'برزیلی'},
italy:{pos:'noun',ipa:'/ˈɪtəli/',fa:'ایتالیا'},
italian:{pos:'adj',ipa:'/ɪˈtæliən/',fa:'ایتالیایی'},
iraq:{pos:'noun',ipa:'/ɪˈrɑːk/',fa:'عراق'},
iraqi:{pos:'adj',ipa:'/ɪˈrɑːki/',fa:'عراقی'},
india:{pos:'noun',ipa:'/ˈɪndiə/',fa:'هند'},
indian:{pos:'adj',ipa:'/ˈɪndiən/',fa:'هندی'},
japan:{pos:'noun',ipa:'/dʒəˈpæn/',fa:'ژاپن'},
japanese:{pos:'adj',ipa:'/ˌdʒæpəˈniːz/',fa:'ژاپنی'},
egypt:{pos:'noun',ipa:'/ˈiːdʒɪpt/',fa:'مصر'},
egyptian:{pos:'adj',ipa:'/ɪˈdʒɪpʃən/',fa:'مصری'},
indonesia:{pos:'noun',ipa:'/ˌɪndəˈniːʒə/',fa:'اندونزی'},
indonesian:{pos:'adj',ipa:'/ˌɪndəˈniːʒən/',fa:'اندونزیایی'},
cousin:{pos:'noun',ipa:'/ˈkʌzən/',fa:'پسر/دخترعمو/دایی/عمه/خاله'},
speak:{pos:'verb',ipa:'/spiːk/',fa:'صحبت کردن'},
little:{pos:'adj',ipa:'/ˈlɪtəl/',fa:'کم، کوچک'},
persian:{pos:'adj',ipa:'/ˈpɜːrʒən/',fa:'فارسی، ایرانی'},
welcome:{pos:'interj',ipa:'/ˈwelkəm/',fa:'خوش‌آمد'},
love:{pos:'verb',ipa:'/lʌv/',fa:'دوست داشتن'},
beautiful:{pos:'adj',ipa:'/ˈbjuːtɪfəl/',fa:'زیبا'},
country:{pos:'noun',ipa:'/ˈkʌntri/',fa:'کشور'},
originally:{pos:'adv',ipa:'/əˈrɪdʒənəli/',fa:'در اصل'},
spell:{pos:'verb',ipa:'/spel/',fa:'هجی کردن'},
correct:{pos:'adj',ipa:'/kəˈrekt/',fa:'صحیح، درست'},
chair:{pos:'noun',ipa:'/tʃer/',fa:'صندلی'},
shoes:{pos:'noun',ipa:'/ʃuːz/',fa:'کفش'},
fruit:{pos:'noun',ipa:'/fruːt/',fa:'میوه'},
fish:{pos:'noun',ipa:'/fɪʃ/',fa:'ماهی'},
chick:{pos:'noun',ipa:'/tʃɪk/',fa:'جوجه'},
chador:{pos:'noun',ipa:'/tʃɑːˈdɔːr/',fa:'چادر'},
peach:{pos:'noun',ipa:'/piːtʃ/',fa:'هلو'},
classroom:{pos:'noun',ipa:'/ˈklæsruːm/',fa:'کلاس درس'},
hello:{pos:'interj',ipa:'/həˈloʊ/',fa:'سلام'},
nice:{pos:'adj',ipa:'/naɪs/',fa:'خوب، دلپذیر'},
meet:{pos:'verb',ipa:'/miːt/',fa:'ملاقات کردن'},
language:{pos:'noun',ipa:'/ˈlæŋɡwɪdʒ/',fa:'زبان'},
professor:{pos:'noun',ipa:'/prəˈfesər/',fa:'استاد'},
born:{pos:'verb',ipa:'/bɔːrn/',fa:'متولد شد'},
teacher:{pos:'noun',ipa:'/ˈtiːtʃər/',fa:'معلم'},
student:{pos:'noun',ipa:'/ˈstuːdənt/',fa:'دانش‌آموز'}
};
const PHRASE_DICT = {
'where are you from':{ipa:'/wer ɑːr juː frʌm/',fa:'اهل کجایی؟',type:'official'},
"i'm from":{ipa:'/aɪm frʌm/',fa:'من اهل ... هستم',type:'official'},
'are you from':{ipa:'/ɑːr juː frʌm/',fa:'آیا اهل ... هستی؟',type:'official'},
'nice to meet you':{ipa:'/naɪs tə miːt juː/',fa:'از دیدنت خوشحالم',type:'official'},
'how do you spell':{ipa:'/haʊ duː juː spel/',fa:'... را چطور هجی می‌کنی؟',type:'official'},
'which is correct':{ipa:'/wɪtʃ ɪz kəˈrekt/',fa:'کدام درست است؟',type:'official'},
'a little':{ipa:'/ə ˈlɪtəl/',fa:'یه‌ذره',type:'common'}
};
const LESSONS = [
{
num: 1,
title: 'My Nationality',
titleFa: 'ملیت من',
function: 'Talking about nationalities',
functionFa: 'صحبت درباره ملیت',
duration: 25,
color: '#A5B4FC',
conversation: {
desc: 'Listen to the conversation. Shayan is introducing his cousin Sam to his teacher.',
descFa: 'به مکالمه گوش دهید. شایان دارد پسرعموی خود سم را به معلمش معرفی می‌کند.',
lines: [
{
speaker: 'Shayan',
role: 'student',
en: 'Mr. Chaychi, this is my cousin Sam. He speaks French, English, and a little Persian.',
fa: 'آقای چایچی، این پسرعموی منه، سم. اون فرانسوی، انگلیسی و یه کم فارسی حرف می‌زنه.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Oh, nice to meet you, Sam.',
fa: 'اوه، از دیدنت خوشحالم، سم.'
},
{
speaker: 'Sam',
role: 'student',
en: 'Nice to meet you, too.',
fa: 'منم از دیدنت خوشحالم.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Are you from Iran?',
fa: 'اهل ایرانی؟'
},
{
speaker: 'Sam',
role: 'student',
en: 'Yes, I\'m originally Iranian, but I live in France.',
fa: 'بله، اصالتاً ایرانی‌ام، ولی توی فرانسه زندگی می‌کنم.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Welcome to our class. How do you like it in Iran?',
fa: 'به کلاس ما خوش اومدی. ایران رو چطور می‌بینی؟'
},
{
speaker: 'Sam',
role: 'student',
en: 'Iran is great! I love it. It\'s a beautiful country.',
fa: 'ایران فوق‌العاده است! عاشقشم. کشور قشنگیه.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Nationalities (1)',
titleFa: 'صحبت درباره ملیت (۱)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Are you from Iran?',
a: 'Yes, I am. / Yes, we are.',
qFa: 'اهل ایرانی؟',
aFa: 'بله، هستم. / بله، هستیم.'
},
{
q: 'Are you from France?',
a: 'No, I\'m not. / No, we\'re not.',
qFa: 'اهل فرانسه‌ای؟',
aFa: 'نه، نیستم. / نه، نیستیم.'
},
{
q: 'Is she/he from England?',
a: 'Yes, she/he is.',
qFa: 'اون اهل انگلستانه؟',
aFa: 'بله، هست.'
},
{
q: 'Is she/he from China?',
a: 'No, she/he isn\'t.',
qFa: 'اون اهل چینه؟',
aFa: 'نه، نیست.'
},
{
q: 'Are they from Spain?',
a: 'Yes, they are.',
qFa: 'اون‌ها اهل اسپانیان؟',
aFa: 'بله، هستن.'
},
{
q: 'Are they from Brazil?',
a: 'No, they aren\'t.',
qFa: 'اون‌ها اهل برزیلن؟',
aFa: 'نه، نیستن.'
}
]
},
{
title: 'Practice 2 — Talking about Nationalities (2)',
titleFa: 'صحبت درباره ملیت (۲)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Are you Iranian?',
a: 'Yes, I am. / Yes, we are.',
qFa: 'ایرانی هستی؟',
aFa: 'بله، هستم. / بله، هستیم.'
},
{
q: 'Are you French?',
a: 'No, I\'m not. / No, we\'re not.',
qFa: 'فرانسوی هستی؟',
aFa: 'نه، نیستم. / نه، نیستیم.'
},
{
q: 'Is she/he British?',
a: 'Yes, she/he is.',
qFa: 'اون انگلیسی‌ست؟',
aFa: 'بله، هست.'
},
{
q: 'Is she/he Chinese?',
a: 'No, she/he isn\'t.',
qFa: 'اون چینی‌ست؟',
aFa: 'نه، نیست.'
},
{
q: 'Are they Spanish?',
a: 'Yes, they are.',
qFa: 'اون‌ها اسپانیایی‌ان؟',
aFa: 'بله، هستن.'
},
{
q: 'Are they Brazilian?',
a: 'No, they aren\'t.',
qFa: 'اون‌ها برزیلی‌ان؟',
aFa: 'نه، نیستن.'
}
]
},
{
title: 'Practice 3 — Talking about Nationalities (3)',
titleFa: 'صحبت درباره ملیت (۳)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Where are you from?',
a: '(I\'m /We\'re from) Iran.',
qFa: 'اهل کجایی؟',
aFa: '(من / ما) از ایران (هستم/هستیم).'
},
{
q: 'Where is Mary/she from?',
a: '(She\'s from) England.',
qFa: 'مری/اون اهل کجاست؟',
aFa: '(اون از) انگلستان (هست).'
},
{
q: 'Where is Mark/he from?',
a: '(He\'s from) France.',
qFa: 'مارک/اون اهل کجاست؟',
aFa: '(اون از) فرانسه (هست).'
},
{
q: 'Where are they from?',
a: '(They\'re from) Spain.',
qFa: 'اون‌ها اهل کجان؟',
aFa: '(اون‌ها از) اسپانیا (هستن).'
}
]
}
],
spelling: {
desc: 'Listen to two students doing a crossword puzzle.',
descFa: 'به دو دانش‌آموز در حال حل جدول کلمات متقاطع گوش دهید.',
dialogue: [
{
speaker: 'Student 1',
en: 'How do you spell "chair"?',
fa: '«chair» را چطور هجی می‌کنی؟'
},
{
speaker: 'Student 2',
en: 'That\'s C-H-A-I-R.',
fa: 'C-H-A-I-R.'
},
{
speaker: 'Student 1',
en: 'And which is correct for کفش in English, S-H-O-O-S or S-H-O-E-S?',
fa: 'و کدوم برای کفش در انگلیسی درسته، S-H-O-O-S یا S-H-O-E-S؟'
},
{
speaker: 'Student 2',
en: 'S-H-O-E-S.',
fa: 'S-H-O-E-S.'
},
{
speaker: 'Student 1',
en: 'Thanks.',
fa: 'ممنون.'
}
],
activity: 'Now do the rest of the puzzle in pairs.',
activityFa: 'حالا بقیه‌ی جدول را به‌صورت دو‌نفره حل کنید.',
crossword: {
size: {rows: 11, cols: 11},
words: {
across: [
{num: 2, clue: 'From China', answer: 'CHINESE', startRow: 2, startCol: 1},
{num: 6, clue: 'A small bird (image)', answer: 'CHICK', startRow: 6, startCol: 3, imageHint: 'A baby chicken'},
{num: 7, clue: 'A sea animal (image)', answer: 'FISH', startRow: 7, startCol: 0, imageHint: 'Fish in water'},
{num: 8, clue: 'You are from ………', answer: 'IRAN', startRow: 8, startCol: 3}
],
down: [
{num: 1, clue: 'A fruit (image)', answer: 'PEACH', startRow: 0, startCol: 1, imageHint: 'A peach'},
{num: 2, clue: 'چادر in English', answer: 'CHADOR', startRow: 2, startCol: 1},
{num: 3, clue: 'From Spain', answer: 'SPANISH', startRow: 2, startCol: 3},
{num: 4, clue: 'From France', answer: 'FRENCH', startRow: 3, startCol: 5},
{num: 5, clue: 'Footwear (image, prefilled)', answer: 'SHOES', startRow: 5, startCol: 7, prefilled: true},
{num: 6, clue: 'صندلی in English', answer: 'CHAIR', startRow: 6, startCol: 3}
]
}
},
talkToTeacher: 'Which is correct?'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'Name', 'Nationality'],
tableHeadsFa: ['مکالمه', 'نام', 'ملیت'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
pairWork: {
title: 'Pair Work',
instruction: 'Look at the cards on Pages 64 and 92. Ask and answer about the people and fill out the cards.',
instructionFa: 'به کارت‌های صفحه‌ی ۶۴ و ۹۲ نگاه کنید. درباره‌ی افراد سؤال و جواب کنید و کارت‌ها را پر کنید.',
studentA: 'Look at the card on Page 64 and answer student B\'s questions.',
studentAFa: 'به کارت صفحه ۶۴ نگاه کن و به سؤالات دانش‌آموز B جواب بده.',
studentB: 'Look at the card on Page 92 and answer student A\'s questions.',
studentBFa: 'به کارت صفحه ۹۲ نگاه کن و به سؤالات دانش‌آموز A جواب بده.'
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Group Work',
roles: [
{
name: 'Student A',
task: 'Introduce one of your relatives/friends to your classmate.',
taskFa: 'یکی از اقوام یا دوستان خود را به همکلاسی‌ات معرفی کن.'
},
{
name: 'Student B',
task: 'Greet your classmate and his/her guest.',
taskFa: 'با همکلاسی‌ات و مهمانش احوال‌پرسی کن.'
},
{
name: 'Student C',
task: 'You are a guest from another country.',
taskFa: 'تو مهمانی از یک کشور دیگر هستی.'
}
],
changeRoles: true
},
vocabulary: [
{
word: 'nationality',
pos: 'noun',
ipa: '/ˌnæʃəˈnæləti/',
fa: 'ملیت',
example: 'What\'s your nationality?'
},
{
word: 'country',
pos: 'noun',
ipa: '/ˈkʌntri/',
fa: 'کشور',
example: 'It\'s a beautiful country.'
},
{
word: 'cousin',
pos: 'noun',
ipa: '/ˈkʌzn/',
fa: 'پسرعمو/دخترعمو/...',
example: 'This is my cousin Sam.'
},
{
word: 'speak',
pos: 'verb',
ipa: '/spiːk/',
fa: 'صحبت کردن',
example: 'He speaks French.'
},
{
word: 'live',
pos: 'verb',
ipa: '/lɪv/',
fa: 'زندگی کردن',
example: 'I live in France.'
},
{
word: 'originally',
pos: 'adv',
ipa: '/əˈrɪdʒənəli/',
fa: 'اصالتاً، در اصل',
example: 'I\'m originally Iranian.'
},
{
word: 'beautiful',
pos: 'adj',
ipa: '/ˈbjuːtɪfl/',
fa: 'زیبا',
example: 'It\'s a beautiful country.'
},
{
word: 'love',
pos: 'verb',
ipa: '/lʌv/',
fa: 'عاشق بودن',
example: 'I love it.'
},
{
word: 'Iran',
pos: 'noun',
ipa: '/ɪˈrɑːn/',
fa: 'ایران',
example: 'I am from Iran.'
},
{
word: 'Iranian',
pos: 'adj',
ipa: '/ɪˈreɪniən/',
fa: 'ایرانی',
example: 'I\'m Iranian.'
},
{
word: 'France',
pos: 'noun',
ipa: '/fræns/',
fa: 'فرانسه',
example: 'I live in France.'
},
{
word: 'French',
pos: 'adj',
ipa: '/frentʃ/',
fa: 'فرانسوی',
example: 'He speaks French.'
},
{
word: 'England',
pos: 'noun',
ipa: '/ˈɪŋɡlənd/',
fa: 'انگلستان',
example: 'She is from England.'
},
{
word: 'British',
pos: 'adj',
ipa: '/ˈbrɪtɪʃ/',
fa: 'انگلیسی',
example: 'Is she British?'
},
{
word: 'China',
pos: 'noun',
ipa: '/ˈtʃaɪnə/',
fa: 'چین',
example: 'He is from China.'
},
{
word: 'Chinese',
pos: 'adj',
ipa: '/tʃaɪˈniːz/',
fa: 'چینی',
example: 'Is he Chinese?'
},
{
word: 'Spain',
pos: 'noun',
ipa: '/speɪn/',
fa: 'اسپانیا',
example: 'They are from Spain.'
},
{
word: 'Spanish',
pos: 'adj',
ipa: '/ˈspænɪʃ/',
fa: 'اسپانیایی',
example: 'Are they Spanish?'
},
{
word: 'Brazil',
pos: 'noun',
ipa: '/brəˈzɪl/',
fa: 'برزیل',
example: 'They are from Brazil.'
},
{
word: 'Brazilian',
pos: 'adj',
ipa: '/brəˈzɪliən/',
fa: 'برزیلی',
example: 'Are they Brazilian?'
},
{
word: 'India',
pos: 'noun',
ipa: '/ˈɪndiə/',
fa: 'هند',
example: 'I am from India.'
},
{
word: 'Egypt',
pos: 'noun',
ipa: '/ˈiːdʒɪpt/',
fa: 'مصر',
example: 'He is from Egypt.'
},
{
word: 'Japan',
pos: 'noun',
ipa: '/dʒəˈpæn/',
fa: 'ژاپن',
example: 'She is from Japan.'
},
{
word: 'Indonesia',
pos: 'noun',
ipa: '/ˌɪndəˈniːʒə/',
fa: 'اندونزی',
example: 'They are from Indonesia.'
},
{
word: 'great',
pos: 'adj',
ipa: '/ɡreɪt/',
fa: 'عالی',
example: 'Iran is great!'
}
],
workbook: [
{
type:'country-map-numbers',
section:'Reading',
title:'معلم جغرافیا تکلیفی تعیین کرده تا میزان آشنایی شما با نقشه ایران و همسایگان بسنجد. شماره مربوط به نام هر کشور را که به زبان انگلیسی داده شده بر روی نقشه آن بنویسید.',
titleEn:'Match each country number to its position on the Iran-and-neighbors map.',
mapImage:'iran-neighbors-map.jpg',
countries:[
{num:1,name:'Iran',fa:'ایران'},
{num:2,name:'Iraq',fa:'عراق'},
{num:3,name:'Oman',fa:'عمان'},
{num:4,name:'Yemen',fa:'یمن'},
{num:5,name:'Saudi Arabia',fa:'عربستان سعودی'},
{num:6,name:'Afghanistan',fa:'افغانستان'},
{num:7,name:'Pakistan',fa:'پاکستان'},
{num:8,name:'Turkey',fa:'ترکیه'}
]
},
{
type:'find-letter-cities',
section:'Reading',
title:'دبیر شما مسابقه‌ای ترتیب داده تا در نقشهٔ کشور چین، شهرهایی را پیدا کنید که حروف "ch" یا "sh" داشته باشند. دور اسامی این شهرها خط بکشید.',
titleEn:'Find Chinese cities containing "ch" or "sh" letter combinations.',
mapImage:'china-map.jpg',
cities:['Burqin','Karamay','Yining','Urumqi','Kashi','Hohhot','Yumen','Yinchuan','Golmud','Xining','Lanzhou','Beijing','Shijiazhuang','Tianjin','Dalian','Yantai','Qingdao','Lianyungang','Taiyuan','Jinan','Zhengzhou','Hefei','Shanghai','Hangzhou','Chongqing','Chengdu','Wuhan','Nanchang','Changsha','Guiyang','Kunming','Xiamen','Guangzhou','Nanning','Hong Kong','Macau','Zhanjiang','Haikou','Hainan','Lhasa','Shiquanhe','Changchun','Shenyang'],
targets:['Kashi','Yinchuan','Shijiazhuang','Shanghai','Hangzhou','Chongqing','Chengdu','Nanchang','Changsha','Xiamen','Zhanjiang','Shiquanhe','Changchun','Shenyang'],
hint:'شهرهای دارای ch یا sh: Kashi, Yinchuan, Shijiazhuang, Shanghai, Hangzhou, Chongqing, Chengdu, Nanchang, Changsha, Xiamen, Zhanjiang, Shiquanhe, Changchun, Shenyang'
},
{
type:'fifa-ranking',
section:'Reading',
title:'دبیر تربیت بدنی‌تان از شما خواسته تا با مراجعه به وبگاه فیفا، اطلاعاتی درباره رتبه‌بندی تیم‌های فوتبال کشورهای زیر به‌دست آورید. رتبه هر کشور را بنویسید.',
titleEn:'Find the FIFA ranking for each country (sample data shown).',
countries:[
{name:'Spain',fa:'اسپانیا',sampleRank:'10'},
{name:'Brazil',fa:'برزیل',sampleRank:'1'},
{name:'Italy',fa:'ایتالیا',sampleRank:'8'},
{name:'England',fa:'انگلستان',sampleRank:'5'},
{name:'Argentina',fa:'آرژانتین',sampleRank:'2'},
{name:'Portugal',fa:'پرتغال',sampleRank:'9'},
{name:'Germany',fa:'آلمان',sampleRank:'14'},
{name:'Netherlands',fa:'هلند',sampleRank:'6'}
],
note:'این رتبه‌ها نمونه است. برای دیدن جدید‌ترین رتبه‌ها به سایت fifa.com مراجعه کنید.'
},
{
type:'reading-circle',
section:'Reading',
title:'در متن زیر دور کلماتی که مربوط به کشورها، ملیت‌ها و زبان‌هاست خط بکشید.',
titleEn:'Circle words about countries, nationalities, and languages in the text.',
text:'Professor Mahmood Hessabi was born in Tehran. When he was seven, his family moved from Iran to Lebanon. At 17, he was educated in Beirut. Later, he got his B.A. in civil engineering while working as a draftsman. He graduated from Engineering School of Beirut. Hessabi worked in French National Railway. He continued his research in Physics at the Sorbonne University in France, and got his Ph.D. in Physics from that University at the age of 25. Hessabi was fluent in five living languages: Persian, French, English, German and Arabic. He was also familiar with Sanskrit, Latin, Greek, Turkish and Italian, which he used for his studies.',
targets:['Tehran','Iran','Lebanon','Beirut','French','France','Persian','English','German','Arabic','Sanskrit','Latin','Greek','Turkish','Italian'],
hint:'کشورها و شهرها: Tehran, Iran, Lebanon, Beirut, France · زبان‌ها/ملیت‌ها: French, Persian, English, German, Arabic, Sanskrit, Latin, Greek, Turkish, Italian'
},
{
type:'city-to-country',
section:'Writing',
title:'دبیر زبان، کاربرگی به شما ارائه کرده که اسامی پنج شهر در آن آمده است. نام کشورهای مربوط به آن‌ها را به زبان انگلیسی بنویسید.',
titleEn:'Write the country for each city in English.',
items:[
{city:'Najaf',answer:'Iraq',example:true},
{city:'Paris',answer:'France'},
{city:'London',answer:'England'},
{city:'Barcelona',answer:'Spain'},
{city:'Shanghai',answer:'China'},
{city:'Sao Paulo',answer:'Brazil'}
]
},
{
type:'route-cities',
section:'Writing',
title:'پس از بازگشت از سفر راهیان نور و بازدید از مناطق جنگی دوران دفاع مقدس، دبیر زبان انگلیسی از شما خواسته تا مسیر زمینی تهران تا شلمچه را به زبان انگلیسی بنویسید.',
titleEn:'Write the route from Tehran to Shalamcheh in English.',
farsiRoute:'تهران - قم - کاشان - اصفهان - شهرضا - شیراز - اهواز - آبادان - خرمشهر - شلمچه',
steps:['Tehran','Qom','Kashan','Isfahan','Shahreza','Shiraz','Ahvaz','Abadan','Khorramshahr','Shalamcheh'],
givenSteps:2
},
{
type:'image-country',
section:'Writing',
title:'در یک مجلهٔ آموزشی ایرانی که به زبان انگلیسی چاپ می‌شود، تمرینی برای آشنایی بیشتر دانش‌آموزان با اسامی کشورها داده شده است. بنویسید هر یک از این تصاویر، معرف چه کشوری از جهان است.',
titleEn:'Write the country each image represents.',
items:[
{emoji:'🗼',hint:'برج ایفل',answer:'France'},
{emoji:'☕',hint:'دانه‌های قهوه',answer:'Brazil'},
{emoji:'🪟',hint:'فرش ایرانی',answer:'Iran'},
{emoji:'🏛️',hint:'برج پیزا',answer:'Italy'},
{emoji:'🧱',hint:'دیوار چین',answer:'China'}
]
},
{
type:'famous-people',
section:'Writing',
title:'در طول تاریخ همواره افراد مهمی از کشورهای مختلف در جوامع بشری تأثیرگذار بوده‌اند. در اینجا چند تن از آن‌ها معرفی شده‌اند. ملیت آن‌ها را به زبان انگلیسی بنویسید.',
titleEn:'Write the nationality of these famous historical figures.',
people:[
{name:'Amir Kabir',answer:'Iranian'},
{name:'Iqbal Lahoori',answer:'Pakistani'},
{name:'Louis Pasteur',answer:'French'},
{name:'Abu Reihane Birooni',answer:'Iranian'},
{name:'Robert Koch',answer:'German'},
{name:'Isaac Newton',answer:'British'}
]
}
],
quiz: [
{q:'Sam: "Where are you from?" — Sara: "_____ Iran."',qFa:'سَم: «اهل کجایی؟» — سارا: «..... ایران.»',options:['I am','I from',"I'm from",'I in'],correct:2},
{q:'A person from Brazil is _____.',qFa:'فردی از برزیل، ..... است.',options:['Brazil','Brazilian','Brazish','Brazilic'],correct:1},
{q:'How do you _____ "chair"?',qFa:'«chair» را چطور هجی می‌کنی؟',options:['speak','spell','say','write'],correct:1},
{q:'Sam is _____ Iranian, but he lives in France.',qFa:'سَم در اصل ایرانی‌ست، ولی در فرانسه زندگی می‌کنه.',options:['really','originally','correctly','beautifully'],correct:1},
{q:'Which is the language of China?',qFa:'زبان چین کدام است؟',options:['Chinese','China','Japanese','Korean'],correct:0}
]
},
{
num: 2,
title: 'My Week',
titleFa: 'هفته‌ی من',
function: 'Talking about daily/weekly activities',
functionFa: 'صحبت درباره‌ی فعالیت‌های روزانه/هفتگی',
duration: 25,
color: '#FB923C',
conversation: {
desc: 'Listen to the English teacher and the student talking about helping a classmate.',
descFa: 'به معلم انگلیسی و دانش‌آموز در حال صحبت درباره کمک به یک همکلاسی گوش دهید.',
lines: [
{
speaker: 'Teacher',
role: 'teacher',
en: 'What do you do in the afternoons, Reihaneh?',
fa: 'بعدازظهرها چی کار می‌کنی، ریحانه؟'
},
{
speaker: 'Student',
role: 'student',
en: 'Well, I go to the gym on Sundays and Tuesdays.',
fa: 'خب، یکشنبه‌ها و سه‌شنبه‌ها به باشگاه می‌رم.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'How about Friday mornings?',
fa: 'صبح‌های جمعه چطور؟'
},
{
speaker: 'Student',
role: 'student',
en: 'I stay at home and relax. Why?',
fa: 'خونه می‌مونم و استراحت می‌کنم. چطور؟'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'You know, Shiva is not very good at English. Can you help her?',
fa: 'می‌دونی، شیوا انگلیسی‌اش خیلی خوب نیست. می‌تونی کمکش کنی؟'
},
{
speaker: 'Student',
role: 'student',
en: 'Oh, sure.',
fa: 'البته.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'That sounds great! When can you start?',
fa: 'این عالیه! کی می‌تونی شروع کنی؟'
},
{
speaker: 'Student',
role: 'student',
en: 'This Wednesday afternoon.',
fa: 'بعدازظهر این چهارشنبه.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'That\'s fine. Thank you. I\'ll let her know.',
fa: 'خیلی خوبه. ممنون. بهش خبر می‌دم.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Daily Activities (1)',
titleFa: 'صحبت درباره فعالیت‌های روزانه (۱)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What do you do in the mornings?',
a: 'I go to school.',
qFa: 'صبح‌ها چی کار می‌کنی؟',
aFa: 'به مدرسه می‌رم.'
},
{
q: 'What do you do in the afternoons?',
a: 'We play sports.',
qFa: 'بعدازظهرها چی کار می‌کنی؟',
aFa: 'ورزش می‌کنیم.'
},
{
q: 'What do you do in the evenings?',
a: 'I study my lessons.',
qFa: 'شب‌ها چی کار می‌کنی؟',
aFa: 'درس‌هام رو می‌خونم.'
},
{
q: 'What do you do on Friday mornings?',
a: 'We watch TV.',
qFa: 'صبح‌های جمعه چی کار می‌کنی؟',
aFa: 'تلویزیون نگاه می‌کنیم.'
},
{
q: 'What do you do on Thursday evenings?',
a: 'I visit my relatives.',
qFa: 'شب‌های پنجشنبه چی کار می‌کنی؟',
aFa: 'به دیدن اقوامم می‌رم.'
}
],
visualPanel: {
title: 'Days & Time Expressions — روزها و عبارات زمانی',
groups: [
{
label: 'جدول روزها و عبارات زمانی',
type: 'table',
columns: ['Weekdays', 'The Weekend', 'Time Expressions'],
rows: [
['Saturday', 'Thursday', 'in the morning'],
['Sunday', 'Friday', 'in the afternoon'],
['Monday', '', 'in the evening'],
['Tuesday', '', 'on weekdays'],
['Wednesday', '', 'on the weekend']
]
}
]
}
},
{
title: 'Practice 2 — Talking about Daily Activities (2)',
titleFa: 'صحبت درباره فعالیت‌های روزانه (۲)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'When/What days do you go to school?',
a: 'Every weekday.',
qFa: 'چه روزهایی به مدرسه می‌ری؟',
aFa: 'هر روز هفته (به‌جز آخر هفته).'
},
{
q: 'When/What days do you go shopping?',
a: 'Every Wednesday afternoon.',
qFa: 'چه روزهایی خرید می‌ری؟',
aFa: 'هر چهارشنبه بعدازظهر.'
},
{
q: 'When/What days do you play sports?',
a: 'On Saturdays and Tuesdays.',
qFa: 'چه روزهایی ورزش می‌کنی؟',
aFa: 'شنبه‌ها و سه‌شنبه‌ها.'
},
{
q: 'When/What days do you study English?',
a: 'On Monday mornings.',
qFa: 'چه روزهایی انگلیسی می‌خونی؟',
aFa: 'صبح‌های دوشنبه.'
},
{
q: 'When/What days do you go to the library?',
a: 'On Sunday afternoons.',
qFa: 'چه روزهایی به کتابخونه می‌ری؟',
aFa: 'بعدازظهرهای یکشنبه.'
}
],
visualPanel: {
title: 'Day & Night Circle — چرخه روز و شب',
groups: [
{
label: 'چرخه روز و شب با زمان‌ها',
type: 'day-night-circle',
image: 'day-night-circle.jpg',
caption: 'بالای نمودار روز (DAY) و پایین آن شب (NIGHT) است. زمان‌ها شامل midday/noon (12:00 ظهر)، sunrise (6 a.m.)، sunset (6 p.m.) و midnight (00:00 نیمه‌شب) هستن. بخش‌های روز با morning/afternoon/evening مشخص شدن.'
}
]
}
}
],
spelling: {
desc: 'Listen to a conversation between the teacher and the student.',
descFa: 'به مکالمه بین معلم و دانش‌آموز گوش دهید.',
dialogue: [
{
speaker: 'Student',
en: 'Excuse me, sir, what\'s روزهای هفته in English?',
fa: 'ببخشید، آقا، «روزهای هفته» به انگلیسی چی می‌شه؟'
},
{
speaker: 'Teacher',
en: 'That\'s \'weekdays\'.',
fa: '«weekdays».'
},
{
speaker: 'Student',
en: 'How do you spell it?',
fa: 'چطور هجی می‌شه؟'
},
{
speaker: 'Teacher',
en: 'W-E-E-K-D-A-Y-S.',
fa: 'W-E-E-K-D-A-Y-S.'
},
{
speaker: 'Student',
en: 'Thanks. And how do you say S-T in \'study\'*?',
fa: 'ممنون. و S-T در «study» چطور تلفظ می‌شه؟'
},
{
speaker: 'Teacher',
en: 'The correct pronunciation is \'study\'.',
fa: 'تلفظ درست «study» است.'
},
{
speaker: 'Student',
en: 'There\'s no /e/ at the beginning, right?',
fa: 'در ابتدا /e/ نیست، درسته؟'
},
{
speaker: 'Teacher',
en: 'No, there isn\'t.',
fa: 'نه، نیست.'
}
],
activity: 'Now find other words with \'st\' at the beginning and practice saying them.',
activityFa: 'حالا کلمات دیگر با st در ابتدا پیدا کن و گفتنشان را تمرین کن.',
note: '* shows wrong pronunciation.',
noteFa: '* نشان‌دهنده تلفظ نادرست است.',
talkToTeacher: 'Excuse me, sir/madam/Miss ……'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'When', 'What'],
tableHeadsFa: ['مکالمه', 'چه زمان', 'چه کاری'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
groupWork: {
title: 'Group Work',
instruction: 'Your teacher will give you cards about weekly activities. Ask 3 classmates what they do during the week and fill out the table below.',
instructionFa: 'معلمت کارت‌هایی درباره فعالیت‌های هفتگی به تو می‌دهد. از ۳ همکلاسی بپرس چه کارهایی در طول هفته انجام می‌دهند و جدول زیر را پر کن.',
model: ['What do you do on weekday mornings, Mina?', 'I go to school.', 'What about the weekend?', 'I watch TV.'],
tableHeads: ['Name', 'On weekday/mornings/afternoons/evenings', 'On the weekend'],
tableHeadsFa: ['نام', 'در روزهای هفته/صبح/بعدازظهر/شب', 'آخر هفته'],
sampleRow: ['Mina', 'go to school', 'watch TV']
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Pair Work',
roles: [
{
name: 'Student A',
task: 'Take the role of a father/mother and answer your friend\'s questions about your weekly activities.',
taskFa: 'نقش یک پدر/مادر را بازی کن و به سؤالات دوستت درباره فعالیت‌های هفتگی‌ات جواب بده.'
},
{
name: 'Student B',
task: 'Prepare some questions and ask your friend about his/her weekly activities.',
taskFa: 'چند سؤال آماده کن و از دوستت درباره فعالیت‌های هفتگی‌اش بپرس.'
}
],
changeRoles: true
},
vocabulary: [
{
word: 'week',
pos: 'noun',
ipa: '/wiːk/',
fa: 'هفته',
example: 'A long week.'
},
{
word: 'weekday',
pos: 'noun',
ipa: '/ˈwiːkdeɪ/',
fa: 'روزهای هفته (شنبه تا چهارشنبه)',
example: 'Every weekday.'
},
{
word: 'weekend',
pos: 'noun',
ipa: '/ˌwiːkˈend/',
fa: 'آخر هفته (پنجشنبه و جمعه)',
example: 'On the weekend.'
},
{
word: 'morning',
pos: 'noun',
ipa: '/ˈmɔːrnɪŋ/',
fa: 'صبح',
example: 'In the morning.'
},
{
word: 'afternoon',
pos: 'noun',
ipa: '/ˌæftərˈnuːn/',
fa: 'بعدازظهر',
example: 'In the afternoons.'
},
{
word: 'evening',
pos: 'noun',
ipa: '/ˈiːvnɪŋ/',
fa: 'شب، عصر',
example: 'In the evenings.'
},
{
word: 'midday',
pos: 'noun',
ipa: '/ˌmɪdˈdeɪ/',
fa: 'ظهر',
example: 'At midday.'
},
{
word: 'noon',
pos: 'noun',
ipa: '/nuːn/',
fa: 'ظهر',
example: 'At noon.'
},
{
word: 'midnight',
pos: 'noun',
ipa: '/ˈmɪdnaɪt/',
fa: 'نیمه‌شب',
example: 'At midnight.'
},
{
word: 'sunrise',
pos: 'noun',
ipa: '/ˈsʌnraɪz/',
fa: 'طلوع آفتاب',
example: 'At sunrise.'
},
{
word: 'sunset',
pos: 'noun',
ipa: '/ˈsʌnset/',
fa: 'غروب آفتاب',
example: 'At sunset.'
},
{
word: 'Saturday',
pos: 'noun',
ipa: '/ˈsætərdeɪ/',
fa: 'شنبه',
example: 'On Saturday.'
},
{
word: 'Sunday',
pos: 'noun',
ipa: '/ˈsʌndeɪ/',
fa: 'یکشنبه',
example: 'On Sunday.'
},
{
word: 'Monday',
pos: 'noun',
ipa: '/ˈmʌndeɪ/',
fa: 'دوشنبه',
example: 'On Monday.'
},
{
word: 'Tuesday',
pos: 'noun',
ipa: '/ˈtuːzdeɪ/',
fa: 'سه‌شنبه',
example: 'On Tuesday.'
},
{
word: 'Wednesday',
pos: 'noun',
ipa: '/ˈwenzdeɪ/',
fa: 'چهارشنبه',
example: 'On Wednesday.'
},
{
word: 'Thursday',
pos: 'noun',
ipa: '/ˈθɜːrzdeɪ/',
fa: 'پنجشنبه',
example: 'On Thursday.'
},
{
word: 'Friday',
pos: 'noun',
ipa: '/ˈfraɪdeɪ/',
fa: 'جمعه',
example: 'On Friday.'
},
{
word: 'gym',
pos: 'noun',
ipa: '/dʒɪm/',
fa: 'باشگاه ورزشی',
example: 'Go to the gym.'
},
{
word: 'relax',
pos: 'verb',
ipa: '/rɪˈlæks/',
fa: 'استراحت کردن',
example: 'Stay home and relax.'
},
{
word: 'study',
pos: 'verb',
ipa: '/ˈstʌdi/',
fa: 'درس خواندن',
example: 'I study my lessons.'
},
{
word: 'sport',
pos: 'noun',
ipa: '/spɔːrt/',
fa: 'ورزش',
example: 'We play sports.'
},
{
word: 'library',
pos: 'noun',
ipa: '/ˈlaɪbreri/',
fa: 'کتابخانه',
example: 'Go to the library.'
},
{
word: 'shopping',
pos: 'noun',
ipa: '/ˈʃɒpɪŋ/',
fa: 'خرید',
example: 'Go shopping.'
},
{
word: 'visit',
pos: 'verb',
ipa: '/ˈvɪzɪt/',
fa: 'دیدار کردن',
example: 'Visit my relatives.'
},
{
word: 'relatives',
pos: 'noun',
ipa: '/ˈrelətɪvz/',
fa: 'اقوام، خویشاوندان',
example: 'I visit my relatives.'
},
{
word: 'help',
pos: 'verb',
ipa: '/help/',
fa: 'کمک کردن',
example: 'Can you help her?'
},
{
word: 'start',
pos: 'verb',
ipa: '/stɑːrt/',
fa: 'شروع کردن',
example: 'When can you start?'
},
{
word: 'sure',
pos: 'adv',
ipa: '/ʃʊr/',
fa: 'حتماً',
example: 'Oh, sure.'
},
{
word: 'every',
pos: 'det',
ipa: '/ˈevri/',
fa: 'هر',
example: 'Every weekday.'
}
],
workbook: [
{
type:'days-checklist',
section:'Reading',
title:'کلاس‌های فوق برنامهٔ زبان انگلیسی مدرسه‌تان، در روزهای فرد برگزار خواهد شد، آن روزها را در جدول زیر مشخص کنید.',
titleEn:"Mark the odd-numbered days when extra English classes are held.",
days:['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'],
odds:['Saturday','Monday','Wednesday','Friday'],
hint:'روزهای فرد هفته شمسی: شنبه (۱)، دوشنبه (۳)، چهارشنبه (۵)، جمعه (۷). یعنی Saturday, Monday, Wednesday, Friday.'
},
{
type:'activity-time-grid',
section:'Reading',
title:'فرض کنید عضو یک تیم ورزشی هستید که مربی آن خارجی است و از زبان انگلیسی استفاده می‌کند. او می‌خواهد برای برنامه‌ریزی‌های خود از طریق جدول زیر با برنامهٔ شما بیشتر آشنا شود. کارهایی را که در طول هفته انجام می‌دهید علامت بزنید.',
titleEn:'Mark which activities you do on weekdays vs the weekend.',
activities:['Go to school','Stay home and relax','Go shopping','Go to the gym','Watch TV','Study your lessons'],
timeColumns:['On Weekdays','On the Weekend']
},
{
type:'translate-phrases-en-fa',
section:'Reading',
title:'یکی از دوستانتان که به زبان انگلیسی آشنایی ندارد از شما درخواست کرده تا عبارات زیر را برایش به فارسی برگردانید.',
titleEn:'Translate the following English phrases to Persian.',
items:[
{en:'morning prayers',answer:'نماز صبح'},
{en:'afternoon paper',answer:'روزنامه عصر'},
{en:'evening class',answer:'کلاس شب'},
{en:'night shift',answer:'شیفت شب'},
{en:'Have a good weekend!',answer:'آخر هفته خوبی داشته باشی!'}
]
},
{
type:'weekly-time-table',
section:'Reading',
title:'دبیر زبانتان کاربرگ زیر را به شما داده تا انجام دهید. علاقه‌مند هستید هفتهٔ خود را با چه کارهایی بگذرانید؟ زمان آن را مشخص کنید.',
titleEn:'Plan your week: which activities at which time on which days?',
days:['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'],
activities:['Go to school','Watch TV','Play sports','Visit your relatives','Go shopping'],
example:{day:'Saturday',activity:'Go to school',time:'7:30-14:00'}
},
{
type:'occasion-day-fa-en',
section:'Writing',
title:'در کلاس زبان از شما خواسته شده که نام روزهای مربوط به مناسبت‌های زیر در سال جاری را با استفاده از تقویم به زبان انگلیسی بنویسید. شما هم یک مناسبت اضافه کنید.',
titleEn:'Use a calendar to write the day name for each occasion in English.',
items:[
{occasion:'Farvardin 1',example:true,answer:'Friday',note:'نمونه'},
{occasion:"Teacher's Day"},
{occasion:'Bahman 22'},
{occasion:'Your Birthday'},
{occasion:'Mehr 1'},
{occasion:'English class at school'}
],
hint:'این تمرین به تقویم سال جاری شما بستگی داره — جواب‌ها هر سال متفاوته.'
},
{
type:'translate-fa-en-list',
section:'Writing',
title:'یکی از بستگانتان در انجام تکالیف خود به کمک شما نیاز دارد و از شما خواسته عبارت‌های زیر را به زبان انگلیسی برگردانید.',
titleEn:'Translate these Persian phrases to English.',
items:[
{fa:'به مدرسه رفتن',answer:'go to school'},
{fa:'در خانه ماندن',answer:'stay at home'},
{fa:'به خرید رفتن',answer:'go shopping'},
{fa:'به کتابخانه رفتن',answer:'go to the library'},
{fa:'به سالن ورزشی رفتن',answer:'go to the gym'}
]
},
{
type:'translate-fa-en-list',
section:'Writing',
title:'او از شما خواسته تا این عبارت‌ها را نیز به زبان انگلیسی برگردانید.',
titleEn:'Translate these time expressions to English.',
items:[
{fa:'هر بعدازظهر',answer:'every afternoon'},
{fa:'شنبه‌ها صبح',answer:'on Saturday mornings'},
{fa:'آخر هفته',answer:'on the weekend'},
{fa:'چهارشنبه غروب',answer:'on Wednesday evening'},
{fa:'در روزهای هفته',answer:'on weekdays'}
]
},
{
type:'sentence-builder',
section:'Writing',
title:'اگر قرار باشد کارهای ایام هفته‌تان را به زبان انگلیسی بنویسید از چه جملاتی استفاده می‌کنید؟ یک نمونه ارائه شده است.',
titleEn:'Write sentences describing your weekly activities. One example is given.',
example:'I go to school every day.',
slots:[
{prefix:'I',suffix:'every afternoon.'},
{prefix:'I study my lessons',suffix:''},
{prefix:'I',suffix:'on Friday mornings.'},
{prefix:'',suffix:''},
{prefix:'',suffix:''}
]
}
],
quiz: [
{q:'What do you do _____ Sundays?',qFa:'یکشنبه‌ها چه کار می‌کنی؟',options:['in','on','at','for'],correct:1},
{q:'I go to school _____ the morning.',qFa:'صبح‌ها به مدرسه می‌روم.',options:['on','at','in','for'],correct:2},
{q:'_____ days do you play sports?',qFa:'چه روزهایی ورزش می‌کنی؟',options:['Where','Why','When/What','How'],correct:2},
{q:'How do you spell "_____"? — W-E-E-K-D-A-Y-S.',qFa:'«weekdays» را چطور هجی می‌کنی؟',options:['weekday','weekdays','weekends','weeks'],correct:1},
{q:'I _____ at home and relax on Friday mornings.',qFa:'صبح‌های جمعه در خانه می‌مانم و استراحت می‌کنم.',options:['stay','study','start','start'],correct:0}
]
},
{
num: 3,
title: 'My Abilities',
titleFa: 'توانایی‌های من',
function: 'Talking about your abilities',
functionFa: 'صحبت درباره توانایی‌های خود',
duration: 30,
color: '#67E8F9',
conversation: {
desc: 'Listen to the students talking about their abilities.',
descFa: 'به دانش‌آموزان در حال صحبت درباره توانایی‌هایشان گوش دهید.',
lines: [
{
speaker: 'Elham',
role: 'student',
en: 'Wow! Your drawing is very good.',
fa: 'وای! نقاشی‌ات خیلی خوبه.'
},
{
speaker: 'Sara',
role: 'student',
en: 'Thanks. Can you draw?',
fa: 'ممنون. تو می‌تونی نقاشی بکشی؟'
},
{
speaker: 'Elham',
role: 'student',
en: 'No, I\'m not good at drawing. But I can take good photos.',
fa: 'نه، تو نقاشی خوب نیستم. ولی می‌تونم عکس‌های خوبی بگیرم.'
},
{
speaker: 'Sara',
role: 'student',
en: 'Really? Can I see your photos?',
fa: 'واقعاً؟ می‌تونم عکس‌هات رو ببینم؟'
},
{
speaker: 'Elham',
role: 'student',
en: 'Why not? Come to my house this afternoon.',
fa: 'چرا که نه؟ بعدازظهر بیا خونه‌ی ما.'
},
{
speaker: 'Sara',
role: 'student',
en: 'Oh, I can\'t make it today. How about Thursday afternoon?',
fa: 'آخ، امروز نمی‌رسم. پنجشنبه بعدازظهر چطور؟'
},
{
speaker: 'Elham',
role: 'student',
en: 'That\'s fine. You can bring your drawing book, too.',
fa: 'باشه خوبه. می‌تونی دفتر نقاشی‌ات رو هم بیاری.'
},
{
speaker: 'Sara',
role: 'student',
en: 'Sure.',
fa: 'حتماً.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Abilities (1)',
titleFa: 'صحبت درباره توانایی‌ها (۱)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Are you good at drawing?',
a: 'Yes, I am. / No, I\'m not.',
qFa: 'در نقاشی خوبی؟',
aFa: 'بله. / نه.'
},
{
q: 'Is she good at cooking?',
a: 'Yes, she is. / No, she isn\'t.',
qFa: 'اون در آشپزی خوبه؟',
aFa: 'بله. / نه.'
},
{
q: 'Is he good at playing football?',
a: 'Yes, he is. / No, he isn\'t.',
qFa: 'اون در فوتبال خوبه؟',
aFa: 'بله. / نه.'
},
{
q: 'Are you good at searching the Web?',
a: 'Yes, we are. / No, we aren\'t.',
qFa: 'در جستجوی اینترنت خوبید؟',
aFa: 'بله. / نه.'
},
{
q: 'Are they good at swimming?',
a: 'Yes, they are. / No, they aren\'t.',
qFa: 'در شنا خوبن؟',
aFa: 'بله. / نه.'
}
]
},
{
title: 'Practice 2 — Talking about Abilities (2)',
titleFa: 'صحبت درباره توانایی‌ها (۲)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Can you make a cake?',
a: 'Yes, I can. / No, I can\'t.',
qFa: 'می‌تونی کیک درست کنی؟',
aFa: 'بله. / نه.'
},
{
q: 'Can she search the Web?',
a: 'Yes, she can. / No, she can\'t.',
qFa: 'اون می‌تونه اینترنت رو جستجو کنه؟',
aFa: 'بله. / نه.'
},
{
q: 'Can he do a puzzle?',
a: 'Yes, he can. / No, he can\'t.',
qFa: 'اون می‌تونه پازل حل کنه؟',
aFa: 'بله. / نه.'
},
{
q: 'Can you ride a bicycle?',
a: 'Yes, we can. / No, we can\'t.',
qFa: 'می‌تونید دوچرخه‌سواری کنید؟',
aFa: 'بله. / نه.'
},
{
q: 'Can they play basketball?',
a: 'Yes, they can. / No, they can\'t.',
qFa: 'می‌تونن بسکتبال بازی کنن؟',
aFa: 'بله. / نه.'
}
]
},
{
title: 'Practice 3 — Talking about Abilities (3)',
titleFa: 'صحبت درباره توانایی‌ها (۳)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Who can work with a computer?',
a: 'All students can.',
qFa: 'کی می‌تونه با کامپیوتر کار کنه؟',
aFa: 'همه‌ی دانش‌آموزها.'
},
{
q: 'Who can play tennis?',
a: 'Ali can play tennis well.',
qFa: 'کی می‌تونه تنیس بازی کنه؟',
aFa: 'علی خوب تنیس می‌زنه.'
},
{
q: 'Who can draw?',
a: 'Parham can, but not very well.',
qFa: 'کی می‌تونه نقاشی بکشه؟',
aFa: 'پرهام می‌تونه، ولی نه خیلی خوب.'
},
{
q: 'Who can take photos?',
a: 'Marjan and Leila can.',
qFa: 'کی می‌تونه عکس بگیره؟',
aFa: 'مرجان و لیلا.'
},
{
q: 'Who is good at telling stories?',
a: 'Me.',
qFa: 'کی در داستان‌گویی خوبه؟',
aFa: 'من.'
}
]
}
],
spelling: {
desc: 'Listen to the conversation between the teacher and the students in the English class.',
descFa: 'به مکالمه‌ی بین معلم و دانش‌آموزان در کلاس انگلیسی گوش دهید.',
dialogue: [
{
speaker: 'Student 1',
en: 'Excuse me, I have a question.',
fa: 'ببخشید، یه سؤال دارم.'
},
{
speaker: 'Teacher',
en: 'Yes?',
fa: 'بفرما؟'
},
{
speaker: 'Student 1',
en: 'How do you say O-O in the words \'football\'* and \'afternoon\'?',
fa: 'O-O رو در کلمه‌های «football» و «afternoon» چطور تلفظ می‌کنیم؟'
},
{
speaker: 'Teacher',
en: 'Say double O. Well, the sound is short in \'football\' and long in \'afternoon\'.',
fa: 'بگو double O. در «football» کوتاهه و در «afternoon» کشیده است.'
},
{
speaker: 'Student 1',
en: 'Thank you.',
fa: 'ممنون.'
},
{
speaker: 'Student 2',
en: 'Excuse me, I have a question, too. We write P-L-A-Y but we say \'play\'*, why?',
fa: 'ببخشید، منم یه سؤال دارم. P-L-A-Y می‌نویسیم ولی «play» می‌گیم، چرا؟'
},
{
speaker: 'Teacher',
en: 'Well, that\'s \'play\'. There\'s no /e/ between P and L, \'play\'!',
fa: 'خب، تلفظ «play» است. بین P و L، /e/ نیست!'
},
{
speaker: 'Student 2',
en: 'Thanks. And how do you say S-W in \'swimming\'*?',
fa: 'ممنون. و S-W در «swimming» چطور تلفظ می‌شه؟'
},
{
speaker: 'Teacher',
en: '\'Swimming\'. Say \'swimming\'.',
fa: '«swimming». بگو «swimming».'
}
],
activity: 'Find, say and write 5 more words with \'oo\' in this lesson.',
activityFa: 'در این درس ۵ کلمه‌ی دیگر با «oo» پیدا کن، بگو و بنویس.',
note: '* shows wrong pronunciation.',
noteFa: '* نشان‌دهنده تلفظ نادرست است.',
talkToTeacher: 'Excuse me, I have a question.'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'Name', 'Abilities'],
tableHeadsFa: ['مکالمه', 'نام', 'توانایی‌ها'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
groupWork: {
title: 'Group Work',
instruction: 'Find classmates with the following abilities and fill out the table below. Add two more abilities. Use these model questions:',
instructionFa: 'همکلاسی‌هایی با توانایی‌های زیر پیدا کن و جدول را پر کن. دو توانایی دیگر اضافه کن. از این سؤال‌های نمونه استفاده کن:',
model: ['Can you ride a bicycle?', 'Who can ride a bicycle?', 'Are you good at riding a bicycle?', 'Who is good at riding a bicycle?'],
tableHeads: ['Ability', 'Your Classmate\'s Name'],
tableHeadsFa: ['توانایی', 'نام همکلاسی'],
rows: ['ride a bicycle', 'use a computer', 'take photos', 'draw', '……………………', '……………………']
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Pair Work',
roles: [
{
name: 'Student A',
task: 'You are an interviewer. Look at the questions on card A and ask your classmate the questions.',
taskFa: 'تو مصاحبه‌گر هستی. به سؤال‌های روی کارت A نگاه کن و از همکلاسی‌ات بپرس.'
},
{
name: 'Student B',
task: 'Imagine you are a famous person. Complete the information on card B and answer the interviewer\'s questions.',
taskFa: 'فرض کن شخص مشهوری هستی. اطلاعات کارت B را کامل کن و به سؤالات مصاحبه‌گر جواب بده.'
}
],
changeRoles: true,
studentACard: ['What\'s your name, please?', 'How old are you?', 'What\'s your job?', 'What\'s your nationality?', 'What city are you from?', 'What\'s it like?', 'What\'s your favorite food?', 'What sports can you do/play?'],
studentBCard: ['My name\'s _____', 'I\'m _____ years old.', 'I\'m a _____', 'I\'m _____', 'I\'m from _____', 'It\'s _____', 'It\'s _____', 'I can _____']
},
vocabulary: [
{
word: 'ability',
pos: 'noun',
ipa: '/əˈbɪləti/',
fa: 'توانایی',
example: 'My abilities.'
},
{
word: 'good at',
pos: 'phrase',
ipa: '/ɡʊd ət/',
fa: 'مهارت داشتن در',
example: 'Are you good at drawing?'
},
{
word: 'can',
pos: 'modal',
ipa: '/kæn/',
fa: 'توانستن',
example: 'I can draw.'
},
{
word: 'can\'t',
pos: 'modal',
ipa: '/kænt/',
fa: 'نمی‌توانم',
example: 'I can\'t draw.'
},
{
word: 'draw',
pos: 'verb',
ipa: '/drɔː/',
fa: 'نقاشی کشیدن',
example: 'I can draw.'
},
{
word: 'drawing',
pos: 'noun',
ipa: '/ˈdrɔːɪŋ/',
fa: 'نقاشی',
example: 'Your drawing is good.'
},
{
word: 'cook',
pos: 'verb',
ipa: '/kʊk/',
fa: 'آشپزی کردن',
example: 'She can cook.'
},
{
word: 'cooking',
pos: 'noun',
ipa: '/ˈkʊkɪŋ/',
fa: 'آشپزی',
example: 'Good at cooking.'
},
{
word: 'take photos',
pos: 'phrase',
ipa: '/teɪk ˈfoʊtoʊz/',
fa: 'عکس گرفتن',
example: 'I can take photos.'
},
{
word: 'search the Web',
pos: 'phrase',
ipa: '/sɜːrtʃ ðə web/',
fa: 'جستجو در اینترنت',
example: 'Can she search the Web?'
},
{
word: 'swim',
pos: 'verb',
ipa: '/swɪm/',
fa: 'شنا کردن',
example: 'They can swim.'
},
{
word: 'swimming',
pos: 'noun',
ipa: '/ˈswɪmɪŋ/',
fa: 'شنا',
example: 'Good at swimming.'
},
{
word: 'ride a bicycle',
pos: 'phrase',
ipa: '/raɪd ə ˈbaɪsɪkəl/',
fa: 'دوچرخه‌سواری کردن',
example: 'Can you ride a bicycle?'
},
{
word: 'do a puzzle',
pos: 'phrase',
ipa: '/duː ə ˈpʌzəl/',
fa: 'پازل حل کردن',
example: 'Can he do a puzzle?'
},
{
word: 'play football',
pos: 'phrase',
ipa: '/pleɪ ˈfʊtbɔːl/',
fa: 'فوتبال بازی کردن',
example: 'Can he play football?'
},
{
word: 'play basketball',
pos: 'phrase',
ipa: '/pleɪ ˈbæskɪtbɔːl/',
fa: 'بسکتبال بازی کردن',
example: 'Can they play basketball?'
},
{
word: 'play tennis',
pos: 'phrase',
ipa: '/pleɪ ˈtenɪs/',
fa: 'تنیس بازی کردن',
example: 'Ali can play tennis.'
},
{
word: 'tell stories',
pos: 'phrase',
ipa: '/tel ˈstɔːriz/',
fa: 'داستان گفتن',
example: 'Good at telling stories.'
},
{
word: 'use a computer',
pos: 'phrase',
ipa: '/juːz ə kəmˈpjuːtər/',
fa: 'با کامپیوتر کار کردن',
example: 'Can you use a computer?'
},
{
word: 'work with a computer',
pos: 'phrase',
ipa: '/wɜːrk wɪð ə kəmˈpjuːtər/',
fa: 'با کامپیوتر کار کردن',
example: 'Who can work with a computer?'
},
{
word: 'photo',
pos: 'noun',
ipa: '/ˈfoʊtoʊ/',
fa: 'عکس',
example: 'Good photos.'
},
{
word: 'bicycle',
pos: 'noun',
ipa: '/ˈbaɪsɪkəl/',
fa: 'دوچرخه',
example: 'Ride a bicycle.'
},
{
word: 'puzzle',
pos: 'noun',
ipa: '/ˈpʌzəl/',
fa: 'پازل، معما',
example: 'Do a puzzle.'
},
{
word: 'computer',
pos: 'noun',
ipa: '/kəmˈpjuːtər/',
fa: 'کامپیوتر',
example: 'A new computer.'
},
{
word: 'well',
pos: 'adv',
ipa: '/wel/',
fa: 'خوب (قید)',
example: 'He can play well.'
},
{
word: 'make it',
pos: 'phrase',
ipa: '/meɪk ɪt/',
fa: 'موفق شدن، رسیدن',
example: 'I can\'t make it today.'
},
{
word: 'bring',
pos: 'verb',
ipa: '/brɪŋ/',
fa: 'آوردن',
example: 'Bring your book.'
}
],
workbook: [
{
type:'ability-checklist',
section:'Reading',
title:'در مدرسه شما، انجمن زبان انگلیسی تشکیل شده است. نماینده انجمن از شما خواسته است تا برای تهیه روزنامه دیواری به مناسبت سالگرد پیروزی انقلاب اسلامی، توانمندی‌هایتان را علامت بزنید.',
titleEn:'Mark the abilities you have for preparing the Islamic Revolution anniversary wall newspaper.',
abilities:['Write a story','Write a report','Take some photos','Draw some pictures','Type','Print','Make a crossword puzzle','Search the web'],
sentenceStarter:'I can _____ . I can also _____ .'
},
{
type:'classmates-abilities',
section:'Reading',
title:'معلم زبان انگلیسی‌تان از شما خواسته افراد توانمند را در زمینه‌های مختلف شناسایی کنید و نام‌شان را در محل نقطه‌چین بنویسید.',
titleEn:"Identify classmates with each ability and write their names.",
questions:[
'Who is very good at reciting the Holy Quran?',
'Who is very good at playing ping-pong?',
'Who is very good at swimming?',
'Who is very good at acting in movies?',
'Who is very good at playing football?',
'Who is very good at running?',
'Who is very good at painting?',
'Who is very good at horse riding?'
]
},
{
type:'job-abilities-grid',
section:'Reading',
title:'به نظر شما، افراد زیر در حوزه کاری خودشان، کدام فعالیت را بهتر انجام می‌دهند؟',
titleEn:'Which activity does each professional do better in their field?',
abilities:['play football','take photos','make a cake','make coffee/tea','search the web','cook food','ride a bicycle','write for a newspaper','speak English','run fast'],
jobs:['Housewife','Journalist','Sportsman']
},
{
type:'self-assessment',
section:'Reading',
title:'پرسشنامه زیر از بخش انگلیسی مجله رشد نوجوان گرفته شده است. شما می‌توانید با تعیین میزان توانمندی‌هایتان نمره کلی خود را در پایان محاسبه کنید. عالی(۴)، خوب(۳)، متوسط(۲)، ضعیف(۱)، عدم توانایی(۰)',
titleEn:'Rate your abilities: Excellent(4), Good(3), Average(2), Weak(1), No ability(0).',
abilities:[
'I can play basketball.',
'I can work with a computer.',
'I can draw pictures.',
'I can tell stories.',
'I can take photos.',
'I can search the web.',
'I can cook food.',
'I can ride a bicycle.',
'I can swim well.',
'I can play tennis.'
],
levels:['No ability (0)','Weak (1)','Average (2)','Good (3)','Excellent (4)']
},
{
type:'image-ability-guess',
section:'Writing',
title:'در کلاس زبان انگلیسی، مسابقه‌ای طراحی شده که با توجه به تصاویر زیر باید حدس بزنید فرد یا افراد مورد نظر در چه فعالیتی مهارت دارند. آن فعالیت را در جای خالی بنویسید.',
titleEn:'Guess and write the ability shown in each picture.',
items:[
{emoji:'🎨',hint:'مرد در حال نقاشی دیوار',pronoun:'He',answer:'painting'},
{emoji:'👨‍🍳',hint:'سرآشپز در حال آشپزی',pronoun:'He',answer:'cooking'},
{emoji:'📸',hint:'خانم در حال عکاسی',pronoun:'She',answer:'taking photos'},
{emoji:'⚽',hint:'پسرها در حال فوتبال',pronoun:'They',answer:'playing football'},
{emoji:'🚲',hint:'پسر در حال دوچرخه‌سواری',pronoun:'He',answer:'riding a bicycle'},
{emoji:'🏓',hint:'بازیکنان پینگ‌پنگ',pronoun:'They',answer:'playing ping-pong'},
{emoji:'🏐',hint:'بازیکنان والیبال',pronoun:'They',answer:'playing volleyball'},
{emoji:'🐎',hint:'مرد در حال اسب‌سواری',pronoun:'He',answer:'horse riding'}
]
},
{
type:'list-fill',
section:'Writing',
title:'نماینده انجمن انگلیسی مدرسه قصد دارد هفته آینده یک گردش علمی برگزار کند و مایل است برایش بنویسید که در چه کارهایی می‌توانید کمک کنید.',
titleEn:'The English club representative wants to know how you can help in next week\'s field trip. List what you can do.',
example:'taking photos',
slots:4,
startNumber:2
},
{
type:'list-fill-template',
section:'Writing',
title:'دبیر زبان انگلیسی‌تان می‌خواهد بداند هر یک از شما در زمینه رایانه چه مهارت‌هایی دارید. مهارت‌های خود را در برگه‌ای بنویسید و به ایشان تحویل دهید.',
titleEn:'Write down your computer skills.',
example:'I can paint with a computer.',
items:[
{text:'I can ___ a text.', placeholder:'verb (type/write/edit)'},
{text:'I ___ some programs.', placeholder:'can / can install / can use'},
{text:'I ___ the web.', placeholder:'can search / can browse'},
{text:'___', placeholder:'یک مهارت دیگر'},
{text:'___', placeholder:'یک مهارت دیگر'}
]
},
{
type:'list-fill-template',
section:'Writing',
title:'اگر قرار باشد کارهایی را که می‌توانید انجام دهید به زبان انگلیسی بنویسید، از چه جملاتی استفاده می‌کنید؟ یک نمونه ارائه شده است.',
titleEn:'Write what you can do in English. A sample is provided.',
example:'I can write my name in English.',
items:[
{text:'I can ___ my favorite food.', placeholder:'say / name / spell'},
{text:'I can ___ my age.', placeholder:'say / tell'},
{text:'I can ___ my family.', placeholder:'describe / talk about'},
{text:'___', placeholder:'یک کار دیگر'},
{text:'___', placeholder:'یک کار دیگر'}
]
}
],
quiz: [
{q:'_____ you good at drawing?',qFa:'تو در نقاشی خوبی؟',options:['Are','Can','Do','Is'],correct:0},
{q:"I'm good _____ photography.",qFa:'من در عکاسی خوبم.',options:['in','on','at','for'],correct:2},
{q:"Ali _____ play tennis very well.",qFa:'علی خیلی خوب تنیس بازی می‌کنه.',options:['can','is','do','are'],correct:0},
{q:'_____ can take photos? — Marjan and Leila can.',qFa:'چه کسی می‌تونه عکس بگیره؟',options:['What','Who','Where','When'],correct:1},
{q:'How do you say "S-W" in "swimming"? — _____',qFa:'صدای S-W در swimming چطور تلفظ می‌شه؟',options:['eswimming','swimming','suimming','sviming'],correct:1}
]
},
{
num: 4,
title: 'My Health',
titleFa: 'سلامتی من',
function: 'Talking about health problems, Giving health advice',
functionFa: 'صحبت درباره مشکلات سلامتی و دادن توصیه‌ی بهداشتی',
duration: 25,
color: '#86EFAC',
conversation: {
desc: 'Listen to the English teacher and the student talking.',
descFa: 'به معلم انگلیسی و دانش‌آموز در حال صحبت گوش دهید.',
lines: [
{
speaker: 'Teacher',
role: 'teacher',
en: 'Are you OK?',
fa: 'حالت خوبه؟'
},
{
speaker: 'Student',
role: 'student',
en: 'No, I\'m not. I have a headache.',
fa: 'نه، خوب نیستم. سردرد دارم.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Oh, you have sore eyes, too. You should go home and rest.',
fa: 'اوه، چشم‌هات هم درد می‌کنه. باید بری خونه و استراحت کنی.'
},
{
speaker: 'Student',
role: 'student',
en: 'Yes, but we have one more class.',
fa: 'بله، ولی یه کلاس دیگه داریم.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Don\'t worry. I\'ll talk to your teacher.',
fa: 'نگران نباش. با معلمت صحبت می‌کنم.'
},
{
speaker: 'Student',
role: 'student',
en: 'Thanks for your help.',
fa: 'ممنون از کمکت.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Let\'s go to the office and call your parents first. Class, be quiet! I\'ll be back in a minute.',
fa: 'بیا اول بریم به دفتر و به والدینت زنگ بزنیم. کلاس، ساکت باشید! یک دقیقه دیگه برمی‌گردم.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about your health problems',
titleFa: 'صحبت درباره مشکلات سلامتی',
desc: 'Listen to the examples. Then use mimes to ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با استفاده از حرکات نمایشی با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Are you OK?',
a: 'No, I have a headache.',
qFa: 'حالت خوبه؟',
aFa: 'نه، سردرد دارم.'
},
{
q: 'Is she all right?',
a: 'No, she has a sore throat.',
qFa: 'حالش خوبه؟',
aFa: 'نه، گلودرد داره.'
},
{
q: 'Is he OK?',
a: 'No, he has a backache.',
qFa: 'حالش خوبه؟',
aFa: 'نه، کمردرد داره.'
},
{
q: 'What\'s wrong?',
a: 'I have a toothache.',
qFa: 'چی شده؟',
aFa: 'دندون‌درد دارم.'
},
{
q: 'What\'s the matter?',
a: 'He has a running nose.',
qFa: 'چی شده؟',
aFa: 'آبریزش بینی داره.'
},
{
q: 'What\'s the problem?',
a: 'I have the flu.',
qFa: 'مشکل چیه؟',
aFa: 'آنفلوآنزا دارم.'
}
]
},
{
title: 'Practice 2 — Giving health advice',
titleFa: 'دادن توصیه‌ی بهداشتی',
desc: 'Listen to the examples. Then practice with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست تمرین کنید.',
pairs: [
{
q: 'I have a headache.',
a: 'Why don\'t you get some rest?',
qFa: 'سردرد دارم.',
aFa: 'چرا یه کم استراحت نمی‌کنی؟'
},
{
q: 'I have a sore throat.',
a: 'You should see a doctor.',
qFa: 'گلودرد دارم.',
aFa: 'باید پیش دکتر بری.'
},
{
q: 'I have a cold.',
a: 'You should rest.',
qFa: 'سرما خوردم.',
aFa: 'باید استراحت کنی.'
},
{
q: 'I have a toothache.',
a: 'Go to the dentist.',
qFa: 'دندون‌درد دارم.',
aFa: 'برو پیش دندون‌پزشک.'
},
{
q: 'I have a running nose.',
a: 'Why don\'t you see a doctor?',
qFa: 'آبریزش بینی دارم.',
aFa: 'چرا پیش دکتر نمی‌ری؟'
}
]
}
],
spelling: {
desc: 'Listen to a conversation between a student and his English teacher.',
descFa: 'به مکالمه‌ی بین یک دانش‌آموز و معلم انگلیسی‌اش گوش دهید.',
dialogue: [
{
speaker: 'Student',
en: 'I see A-C-H-E in some words. What is it?',
fa: 'A-C-H-E را در چند کلمه می‌بینم. چیه؟'
},
{
speaker: 'Teacher',
en: 'It\'s for pain.',
fa: 'برای درد است.'
},
{
speaker: 'Student',
en: 'Thank you. And how do you say it?',
fa: 'ممنون. و چطور تلفظ می‌شه؟'
},
{
speaker: 'Teacher',
en: 'That\'s \'ache\' /eɪk/.',
fa: '«ache» /eɪk/.'
},
{
speaker: 'Student',
en: 'How about E-A in \'headache\'* and \'health\'*?',
fa: 'E-A در «headache» و «health» چطور؟'
},
{
speaker: 'Teacher',
en: 'That\'s /e/ in these words. Say \'headache\' and \'health\'.',
fa: 'در این کلمات /e/ است. بگو «headache» و «health».'
}
],
activity: 'Find and say other words with \'ch\' and \'ea\'.',
activityFa: 'کلمات دیگری با «ch» و «ea» پیدا کن و بگو.',
note: '* shows wrong pronunciation.',
noteFa: '* نشان‌دهنده تلفظ نادرست است.',
talkToTeacher: 'I see/hear ………… in this word. What is it?'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'Health Problem', 'Advice'],
tableHeadsFa: ['مکالمه', 'مشکل سلامتی', 'توصیه'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
groupWork: {
title: 'Group Work',
instruction: 'Your teacher will give you cards about some people\'s health problems. Ask three classmates about their health problems, give them advice and fill out the table below.',
instructionFa: 'معلمت کارت‌هایی درباره مشکلات سلامتی چند نفر می‌دهد. از سه همکلاسی درباره مشکلات سلامتی‌شان بپرس، به آن‌ها توصیه بده و جدول زیر را پر کن.',
model: ['You: I have a headache.', 'Arezoo: You should get some rest.'],
tableHeads: ['Name', 'Health problem', 'Advice'],
tableHeadsFa: ['نام', 'مشکل سلامتی', 'توصیه'],
sampleRow: ['Ali', 'headache', 'get some rest']
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Pair Work',
intro: 'Ask and answer with a friend about health problems and give advice.',
introFa: 'با یک دوست درباره مشکلات سلامتی سؤال و جواب کنید و توصیه بدهید.',
roles: [
{
name: 'Student A',
task: 'Play the role of a patient with a health problem.',
taskFa: 'نقش بیماری با یک مشکل سلامتی را بازی کن.'
},
{
name: 'Student B',
task: 'Play the role of a doctor and give health advice to the patient.',
taskFa: 'نقش دکتر را بازی کن و به بیمار توصیه بهداشتی بده.'
}
],
changeRoles: true
},
vocabulary: [
{
word: 'health',
pos: 'noun',
ipa: '/helθ/',
fa: 'سلامتی',
example: 'My health is good.'
},
{
word: 'healthy',
pos: 'adj',
ipa: '/ˈhelθi/',
fa: 'سالم',
example: 'A healthy life.'
},
{
word: 'ache',
pos: 'noun',
ipa: '/eɪk/',
fa: 'درد',
example: 'A bad ache.'
},
{
word: 'pain',
pos: 'noun',
ipa: '/peɪn/',
fa: 'درد',
example: 'A lot of pain.'
},
{
word: 'headache',
pos: 'noun',
ipa: '/ˈhedeɪk/',
fa: 'سردرد',
example: 'I have a headache.'
},
{
word: 'toothache',
pos: 'noun',
ipa: '/ˈtuːθeɪk/',
fa: 'دندان‌درد',
example: 'I have a toothache.'
},
{
word: 'backache',
pos: 'noun',
ipa: '/ˈbækeɪk/',
fa: 'کمردرد',
example: 'He has a backache.'
},
{
word: 'stomachache',
pos: 'noun',
ipa: '/ˈstʌmək.eɪk/',
fa: 'دل‌درد',
example: 'I have a stomachache.'
},
{
word: 'earache',
pos: 'noun',
ipa: '/ˈɪreɪk/',
fa: 'گوش‌درد',
example: 'She has an earache.'
},
{
word: 'sore throat',
pos: 'phrase',
ipa: '/sɔːr θroʊt/',
fa: 'گلودرد',
example: 'A sore throat.'
},
{
word: 'sore eyes',
pos: 'phrase',
ipa: '/sɔːr aɪz/',
fa: 'چشم‌درد، چشم‌های قرمز',
example: 'You have sore eyes.'
},
{
word: 'running nose',
pos: 'phrase',
ipa: '/ˈrʌnɪŋ noʊz/',
fa: 'آبریزش بینی',
example: 'He has a running nose.'
},
{
word: 'cold',
pos: 'noun',
ipa: '/koʊld/',
fa: 'سرماخوردگی',
example: 'I have a cold.'
},
{
word: 'flu',
pos: 'noun',
ipa: '/fluː/',
fa: 'آنفلوآنزا',
example: 'I have the flu.'
},
{
word: 'doctor',
pos: 'noun',
ipa: '/ˈdɒktər/',
fa: 'دکتر',
example: 'See a doctor.'
},
{
word: 'dentist',
pos: 'noun',
ipa: '/ˈdentɪst/',
fa: 'دندان‌پزشک',
example: 'Go to the dentist.'
},
{
word: 'patient',
pos: 'noun',
ipa: '/ˈpeɪʃənt/',
fa: 'بیمار',
example: 'A doctor and a patient.'
},
{
word: 'rest',
pos: 'verb/noun',
ipa: '/rest/',
fa: 'استراحت کردن، استراحت',
example: 'You should rest.'
},
{
word: 'get some rest',
pos: 'phrase',
ipa: '/ɡet sʌm rest/',
fa: 'کمی استراحت کردن',
example: 'Why don\'t you get some rest?'
},
{
word: 'should',
pos: 'modal',
ipa: '/ʃʊd/',
fa: 'باید (توصیه)',
example: 'You should see a doctor.'
},
{
word: 'advice',
pos: 'noun',
ipa: '/ədˈvaɪs/',
fa: 'توصیه',
example: 'Give some advice.'
},
{
word: 'problem',
pos: 'noun',
ipa: '/ˈprɒbləm/',
fa: 'مشکل',
example: 'What\'s the problem?'
},
{
word: 'matter',
pos: 'noun',
ipa: '/ˈmætər/',
fa: 'موضوع، اشکال',
example: 'What\'s the matter?'
},
{
word: 'wrong',
pos: 'adj',
ipa: '/rɒŋ/',
fa: 'اشتباه، ناجور',
example: 'What\'s wrong?'
},
{
word: 'all right',
pos: 'phrase',
ipa: '/ɔːl raɪt/',
fa: 'حالش خوب',
example: 'Is she all right?'
},
{
word: 'don\'t worry',
pos: 'phrase',
ipa: '/doʊnt ˈwʌri/',
fa: 'نگران نباش',
example: 'Don\'t worry.'
},
{
word: 'office',
pos: 'noun',
ipa: '/ˈɔːfɪs/',
fa: 'دفتر',
example: 'Go to the office.'
},
{
word: 'parents',
pos: 'noun',
ipa: '/ˈperənts/',
fa: 'والدین',
example: 'Call your parents.'
},
{
word: 'quiet',
pos: 'adj',
ipa: '/ˈkwaɪət/',
fa: 'ساکت',
example: 'Be quiet!'
}
],
workbook: [
{
type:'word-suggestions',
section:'Reading',
title:'معمولاً هنگام جستجو در اینترنت، کلمه‌هایی به کاربر پیشنهاد می‌شود، مثلاً با وارد کردن چند حرف اول نام چهار بیماری، چندین مورد به‌طور خودکار پیشنهاد شده است. دور کلمه(ها)ی مربوط به بیماری مورد نظر خط بکشید.',
titleEn:'Web search auto-suggests show many results. Circle the words about diseases.',
searches:[
{query:'back',options:['backpage','backache','backyard'],correct:['backache']},
{query:'ear',options:['earache','eardrum','early'],correct:['earache']},
{query:'the fl',options:['the flash','the flu','the fly'],correct:['the flu']},
{query:'head',options:['headache','headboard','headline'],correct:['headache']}
]
},
{
type:'health-advice-grid',
section:'Reading',
title:'به‌نظر شما، کدام‌یک از موارد زیر، برای بهبود بیماری‌های ارائه شده مؤثرتر است؟',
titleEn:'Which of these activities/foods help with each illness?',
diseases:['Backache','Sore throat','Toothache','The flu'],
items:['Walking','(Drinking) Milk','(Having) Chicken soup','Running','(Getting) Vitamin C','(Drinking) Hot tea','(Eating) Hamburger','Going to the gym','Getting some rest','(Drinking) water'],
examples:[{item:'(Having) Chicken soup',disease:'Sore throat'},{item:'(Having) Chicken soup',disease:'The flu'}]
},
{
type:'underlined-translate',
section:'Reading',
title:'یکی از بستگان شما هنگام خواندن یک متن بهداشتی به چند کلمه و عبارت ناآشنا برخورد کرده و زیر آن‌ها خط کشیده است که از شما کمک بگیرد. معادل فارسی آن‌ها را در محل نقطه‌چین بنویسید.',
titleEn:'Translate the underlined English words to Persian.',
text:'If you have a cold, eat healthy food and drink eight glasses of water in a day. Chicken soup with lemon juice is good for you. Vitamin C is also good for a cold. If you have a running nose and a sore throat, see a doctor. It can be the flu!',
underlined:[
{num:1,word:'have a cold',answer:'سرما خوردن'},
{num:2,word:'healthy food',answer:'غذای سالم'},
{num:3,word:'running nose',answer:'آبریزش بینی'},
{num:4,word:'sore throat',answer:'گلودرد'},
{num:5,word:'the flu',answer:'آنفلوانزا'}
]
},
{
type:'translate-en-fa-list',
section:'Reading',
title:'به مناسبت هفتهٔ سلامت، قرار است نمایشگاهی از پوسترها و شعارهای «بهداشت و سلامت» در مدرسه برگزار شود. عبارت‌های زیر را به فارسی برگردانید.',
titleEn:'Translate these health slogans to Persian.',
items:[
{en:'Good Health, Good Life!',answer:'سلامتی خوب، زندگی خوب!'},
{en:'An Apple a Day, Keeps the Doctor away!',answer:'یک سیب در روز، دکتر را دور نگه می‌دارد!'},
{en:'Say "Yes" to Fruits and Vegetables!',answer:'به میوه‌ها و سبزیجات «بله» بگو!'},
{en:'Say "No" to Fast Food!',answer:'به فست‌فود «نه» بگو!'},
{en:'Good Food, Good Mood!',answer:'غذای خوب، روحیه خوب!'}
]
},
{
type:'image-flashcards',
section:'Writing',
title:'دبیر زبان انگلیسی از شما خواسته تا کلمه یا عبارت مربوط به تصویر فلش‌کارت‌های زیر را بنویسید.',
titleEn:'Write the word/phrase for each health flashcard image.',
items:[
{emoji:'🤧',hint:'فردی در حال عطسه/آبریزش بینی',answer:'running nose'},
{emoji:'🤢',hint:'فردی با دل‌درد',answer:'stomachache'},
{emoji:'🥶',hint:'فردی با سرما/لرز',answer:'cold'},
{emoji:'😣',hint:'فردی با دندان‌درد',answer:'toothache'}
]
},
{
type:'find-equivalent',
section:'Writing',
title:'مربی بهداشت مدرسه برای تهیه یک مقاله، نیاز به معادل انگلیسی برخی کلمات دارد. او متن فارسی را در اختیار شما قرار داده و خواسته در معادل‌یابی کلماتی که زیرشان خط کشیده شده به ایشان کمک کنید.',
titleEn:'Find the English equivalent of the underlined Persian words.',
farsiText:'جهانگردها و مسافران معمولاً بروشوری حاوی توصیه‌های بهداشتی (۱) به همراه دارند. این بروشورها شامل اطلاعاتی در مورد بیماری‌های عمومی و یا شایع در سفر است؛ مثلاً هنگام سرماخوردگی (۲)، بهتر است غذاهای سالم و سبک مصرف کنند. اگر احساس گلودرد (۳) دارند یا دچار کمردرد (۴) شده‌اند، بهتر است استراحت کنند و هر چه سریع‌تر به پزشک مراجعه نمایند (۵).',
englishText:'Tourists and travelers usually have a brochure with health advice. This brochure has information about general or common diseases during travel. For example, when you have a cold, eat healthy and light food. If you have a sore throat or a backache, you should rest and see a doctor as soon as possible.',
pairs:[
{fa:'توصیه‌های بهداشتی',en:'health advice',example:true},
{fa:'سرماخوردگی',en:'cold'},
{fa:'گلودرد',en:'sore throat'},
{fa:'کمردرد',en:'backache'},
{fa:'به پزشک مراجعه نمایند',en:'see a doctor'}
]
},
{
type:'translate-fa-en-list',
section:'Writing',
title:'برای یک کار پژوهشی در کلاس زبان انگلیسی، قرار است در مورد توصیه‌های عمومی مربوط به چند بیماری، جستجوی اینترنتی انجام بدهید. کلید واژه‌های انگلیسی را در مقابل علائم یا نام بیماری بنویسید.',
titleEn:'Write the English keyword for each Persian disease/symptom.',
items:[
{fa:'سوزش چشم',answer:'sore eyes'},
{fa:'دل‌درد',answer:'stomachache'},
{fa:'دندون‌درد',answer:'toothache'},
{fa:'گلودرد',answer:'sore throat'},
{fa:'سرماخوردگی',answer:'cold'}
]
},
{
type:'health-advice-dialog',
section:'Writing',
title:'قرار است به مناسبت هفته سلامت، نمایشی در کلاس زبان انگلیسی اجرا کنید. با توجه به مطالبی که در این درس آموخته‌اید، توصیه‌های بهداشتی مناسب هر یک از بیماری‌های زیر را به زبان انگلیسی بنویسید.',
titleEn:'For Health Week, your class will perform a play. Write health advice for each illness using these phrases.',
phrases:['You should _____', "Why don't you _____?", 'See a _____', 'Get _____', 'Go to a _____'],
prompts:[
{friend:'I have a headache.', placeholder:'مثلاً: You should take a rest.'},
{friend:'I have the flu.', placeholder:'مثلاً: See a doctor.'},
{friend:'I have a toothache.', placeholder:'مثلاً: Go to a dentist.'},
{friend:'I have a sore throat.', placeholder:"مثلاً: Why don't you drink some hot tea?"},
{friend:"I don't feel well today.", placeholder:'مثلاً: Get some rest.'}
]
}
],
quiz: [
{q:"What's _____? — I have a headache.",qFa:'چی شده؟ — سرم درد می‌کنه.',options:['well','wrong','OK','right'],correct:1},
{q:'I _____ the flu.',qFa:'آنفلوانزا گرفتم.',options:['am','have','do','can'],correct:1},
{q:"Why _____ you go to the doctor?",qFa:'چرا پیش دکتر نمی‌ری؟',options:["don't","aren't","can't","won't"],correct:0},
{q:'You _____ get some rest.',qFa:'باید کمی استراحت کنی.',options:['can','do','should','have'],correct:2},
{q:'For a toothache, see the _____.',qFa:'برای دندون‌درد، برو پیش ...',options:['doctor','dentist','teacher','nurse'],correct:1},
{q:"How do you say A-C-H-E? — That's _____.",qFa:'A-C-H-E چطور تلفظ می‌شه؟',options:['/eɪtʃ/','/eɪk/','/ætʃ/','/ɑːk/'],correct:1}
]
},
{
num: 5,
title: 'My City',
titleFa: 'شهر من',
function: 'Talking about a place (city)',
functionFa: 'صحبت درباره یک مکان (شهر)',
duration: 25,
color: '#FCD34D',
conversation: {
desc: 'Listen to Morteza and Phanindra talking about Isfahan.',
descFa: 'به مرتضی و فانیندرا در حال صحبت درباره اصفهان گوش دهید.',
lines: [
{
speaker: 'Phanindra',
role: 'student',
en: 'Morteza, tell me about Isfahan. Where is it?',
fa: 'مرتضی، درباره اصفهان برام بگو. کجاست؟'
},
{
speaker: 'Morteza',
role: 'teacher',
en: 'Well, Isfahan\'s an old city in the center of Iran.',
fa: 'خب، اصفهان یه شهر قدیمی در مرکز ایرانه.'
},
{
speaker: 'Phanindra',
role: 'student',
en: 'What\'s it like?',
fa: 'چه‌جوریه؟'
},
{
speaker: 'Morteza',
role: 'teacher',
en: 'It\'s a big and clean city.',
fa: 'یه شهر بزرگ و تمیزه.'
},
{
speaker: 'Phanindra',
role: 'student',
en: 'Any famous buildings?',
fa: 'بنای مشهور هم داره؟'
},
{
speaker: 'Morteza',
role: 'teacher',
en: 'Yes, many. Actually, Isfahan is very famous for its mosques and palaces.',
fa: 'بله، خیلی. در واقع، اصفهان به‌خاطر مساجد و کاخ‌هاش خیلی معروفه.'
},
{
speaker: 'Phanindra',
role: 'student',
en: 'Are there any museums?',
fa: 'موزه هم داره؟'
},
{
speaker: 'Morteza',
role: 'teacher',
en: 'Yes, some great ones.',
fa: 'بله، چندتای عالی.'
},
{
speaker: 'Phanindra',
role: 'student',
en: 'I should see the city soon.',
fa: 'باید زودی این شهر رو ببینم.'
},
{
speaker: 'Morteza',
role: 'teacher',
en: 'Sure, and we can have special food downtown.',
fa: 'حتماً، و می‌تونیم در مرکز شهر غذای ویژه بخوریم.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about a Place (1)',
titleFa: 'صحبت درباره یک مکان (۱)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Where is Isfahan?',
a: 'It\'s in the center of Iran.',
qFa: 'اصفهان کجاست؟',
aFa: 'در مرکز ایرانه.'
},
{
q: 'Where is Maku?',
a: 'It\'s in the north-west.',
qFa: 'ماکو کجاست؟',
aFa: 'در شمال غرب.'
},
{
q: 'Where is Karaj?',
a: 'It\'s near the capital.',
qFa: 'کرج کجاست؟',
aFa: 'نزدیک پایتخت.'
},
{
q: 'Where is it?',
a: 'It\'s in the south.',
qFa: 'کجاست؟',
aFa: 'در جنوب.'
}
]
},
{
title: 'Practice 2 — Talking about a Place (2)',
titleFa: 'صحبت درباره یک مکان (۲)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What\'s Isfahan like?',
a: 'It\'s old. It\'s a big city. It\'s very clean.',
qFa: 'اصفهان چه‌جوریه؟',
aFa: 'قدیمی‌ست. شهر بزرگیه. خیلی تمیزه.'
},
{
q: 'What is it famous for?',
a: 'It\'s very famous for its old mosques.',
qFa: 'به چی معروفه؟',
aFa: 'به خاطر مساجد قدیمی‌اش خیلی معروفه.'
}
]
},
{
title: 'Practice 3 — Talking about a Place (3)',
titleFa: 'صحبت درباره یک مکان (۳)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Are there any libraries?',
a: 'Yes, there are. / No, there aren\'t.',
qFa: 'هیچ کتابخونه‌ای هست؟',
aFa: 'بله، هست. / نه، نیست.'
},
{
q: 'Is there a metro system?',
a: 'Yes, there is. / No, there isn\'t.',
qFa: 'مترو داره؟',
aFa: 'بله. / نه.'
},
{
q: 'Are there any restaurants?',
a: 'Yes, many.',
qFa: 'رستوران داره؟',
aFa: 'بله، خیلی.'
},
{
q: 'Are there any museums?',
a: 'Yes, some great ones.',
qFa: 'موزه داره؟',
aFa: 'بله، چند تای عالی.'
},
{
q: 'Is there a stadium?',
a: 'Yes, a new one.',
qFa: 'استادیوم داره؟',
aFa: 'بله، یه استادیوم جدید.'
}
]
}
],
spelling: {
desc: 'Listen to a conversation between the student and his teacher.',
descFa: 'به مکالمه‌ی بین دانش‌آموز و معلمش گوش دهید.',
dialogue: [
{
speaker: 'Student',
en: 'Excuse me, what\'s جنوب غربی in English?',
fa: 'ببخشید، «جنوب غربی» به انگلیسی چی می‌شه؟'
},
{
speaker: 'Teacher',
en: '\'South-west\'.',
fa: '«South-west».'
},
{
speaker: 'Student',
en: 'Please say it again.',
fa: 'لطفاً دوباره بگو.'
},
{
speaker: 'Teacher',
en: 'South-west.',
fa: 'South-west.'
},
{
speaker: 'Student',
en: 'But my friends say \'south-west\'*. Is it correct?',
fa: 'ولی دوستام «south-west»* می‌گن. درسته؟'
},
{
speaker: 'Teacher',
en: 'No, that\'s not correct. Say \'south\'.',
fa: 'نه، درست نیست. بگو «south».'
},
{
speaker: 'Student',
en: 'Thank you.',
fa: 'ممنون.'
}
],
activity: 'Can you say and write the location of 5 famous cities in Iran?',
activityFa: 'می‌تونی موقعیت ۵ شهر معروف ایران رو بگی و بنویسی؟',
note: '* shows wrong pronunciation.',
noteFa: '* نشان‌دهنده تلفظ نادرست است.',
talkToTeacher: 'Is it correct?'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'Name of the City', 'What the City is Like', 'The Location of the City'],
tableHeadsFa: ['مکالمه', 'نام شهر', 'چگونگی شهر', 'موقعیت شهر'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
pairWork: {
title: 'Pair Work',
instruction: 'Look at the cards on Pages 64 and 92. Ask and answer about the city and fill out the cards.',
instructionFa: 'به کارت‌های صفحه ۶۴ و ۹۲ نگاه کنید. درباره شهر سؤال و جواب کنید و کارت‌ها را پر کنید.',
studentA: 'Look at the card on Page 64 and answer student B\'s questions.',
studentAFa: 'به کارت صفحه ۶۴ نگاه کن و به سؤالات دانش‌آموز B جواب بده.',
studentB: 'Look at the card on Page 92 and answer student A\'s questions.',
studentBFa: 'به کارت صفحه ۹۲ نگاه کن و به سؤالات دانش‌آموز A جواب بده.'
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Pair Work',
intro: 'In pairs, first decide on a city in Iran.',
introFa: 'دو نفری، اول یک شهر در ایران را انتخاب کنید.',
roles: [
{
name: 'Student A',
task: 'Imagine you are a guest from another country. Think of some questions and ask your classmate about the city.',
taskFa: 'فرض کن مهمانی از یک کشور دیگر هستی. چند سؤال فکر کن و از همکلاسی‌ات درباره شهر بپرس.'
},
{
name: 'Student B',
task: 'Think of some information about the city and answer your classmate\'s questions.',
taskFa: 'چند اطلاعات درباره شهر فکر کن و به سؤالات همکلاسی‌ات جواب بده.'
}
],
changeRoles: true
},
vocabulary: [
{
word: 'city',
pos: 'noun',
ipa: '/ˈsɪti/',
fa: 'شهر',
example: 'A big city.'
},
{
word: 'capital',
pos: 'noun',
ipa: '/ˈkæpɪtl/',
fa: 'پایتخت',
example: 'Near the capital.'
},
{
word: 'downtown',
pos: 'noun/adv',
ipa: '/ˌdaʊnˈtaʊn/',
fa: 'مرکز شهر',
example: 'Special food downtown.'
},
{
word: 'center',
pos: 'noun',
ipa: '/ˈsentər/',
fa: 'مرکز',
example: 'In the center of Iran.'
},
{
word: 'north',
pos: 'noun',
ipa: '/nɔːrθ/',
fa: 'شمال',
example: 'It\'s in the north.'
},
{
word: 'south',
pos: 'noun',
ipa: '/saʊθ/',
fa: 'جنوب',
example: 'It\'s in the south.'
},
{
word: 'east',
pos: 'noun',
ipa: '/iːst/',
fa: 'شرق',
example: 'It\'s in the east.'
},
{
word: 'west',
pos: 'noun',
ipa: '/west/',
fa: 'غرب',
example: 'It\'s in the west.'
},
{
word: 'north-west',
pos: 'noun',
ipa: '/ˌnɔːrθˈwest/',
fa: 'شمال غرب',
example: 'It\'s in the north-west.'
},
{
word: 'south-west',
pos: 'noun',
ipa: '/ˌsaʊθˈwest/',
fa: 'جنوب غرب',
example: 'It\'s in the south-west.'
},
{
word: 'old',
pos: 'adj',
ipa: '/oʊld/',
fa: 'قدیمی',
example: 'An old city.'
},
{
word: 'big',
pos: 'adj',
ipa: '/bɪɡ/',
fa: 'بزرگ',
example: 'A big city.'
},
{
word: 'small',
pos: 'adj',
ipa: '/smɔːl/',
fa: 'کوچک',
example: 'A small village.'
},
{
word: 'clean',
pos: 'adj',
ipa: '/kliːn/',
fa: 'تمیز',
example: 'A clean city.'
},
{
word: 'famous',
pos: 'adj',
ipa: '/ˈfeɪməs/',
fa: 'مشهور، معروف',
example: 'Famous for its mosques.'
},
{
word: 'famous for',
pos: 'phrase',
ipa: '/ˈfeɪməs fər/',
fa: 'به خاطر ... معروف',
example: 'Famous for its palaces.'
},
{
word: 'building',
pos: 'noun',
ipa: '/ˈbɪldɪŋ/',
fa: 'ساختمان',
example: 'Famous buildings.'
},
{
word: 'mosque',
pos: 'noun',
ipa: '/mɒsk/',
fa: 'مسجد',
example: 'Old mosques.'
},
{
word: 'palace',
pos: 'noun',
ipa: '/ˈpæləs/',
fa: 'کاخ',
example: 'Famous palaces.'
},
{
word: 'museum',
pos: 'noun',
ipa: '/mjuˈziːəm/',
fa: 'موزه',
example: 'Some great museums.'
},
{
word: 'shrine',
pos: 'noun',
ipa: '/ʃraɪn/',
fa: 'حرم، زیارتگاه',
example: 'An old shrine.'
},
{
word: 'bridge',
pos: 'noun',
ipa: '/brɪdʒ/',
fa: 'پل',
example: 'A famous bridge.'
},
{
word: 'metro',
pos: 'noun',
ipa: '/ˈmetroʊ/',
fa: 'مترو',
example: 'A metro system.'
},
{
word: 'restaurant',
pos: 'noun',
ipa: '/ˈrestrɒnt/',
fa: 'رستوران',
example: 'Many restaurants.'
},
{
word: 'airport',
pos: 'noun',
ipa: '/ˈerpɔːrt/',
fa: 'فرودگاه',
example: 'The airport is big.'
},
{
word: 'zoo',
pos: 'noun',
ipa: '/zuː/',
fa: 'باغ‌وحش',
example: 'A small zoo.'
},
{
word: 'stadium',
pos: 'noun',
ipa: '/ˈsteɪdiəm/',
fa: 'استادیوم',
example: 'A new stadium.'
},
{
word: 'tell',
pos: 'verb',
ipa: '/tel/',
fa: 'گفتن، تعریف کردن',
example: 'Tell me about Isfahan.'
},
{
word: 'near',
pos: 'prep',
ipa: '/nɪr/',
fa: 'نزدیک',
example: 'Near the capital.'
},
{
word: 'soon',
pos: 'adv',
ipa: '/suːn/',
fa: 'به‌زودی',
example: 'See the city soon.'
},
{
word: 'special',
pos: 'adj',
ipa: '/ˈspeʃəl/',
fa: 'ویژه',
example: 'Special food.'
}
],
workbook: [
{
type:'translate-fa-en-list',
section:'Reading',
title:'شما به همراه خانواده‌تان به یک کشور خارجی سفر کرده‌اید. قصد دارید در طی دو روز اقامت خود، از جاهای زیر بازدید کنید. روز اول و دوم را به انگلیسی برنامه‌ریزی کنید.',
titleEn:'Translate the Persian places to English (Day 1 and Day 2 visit list).',
items:[
{fa:'مسجد (روز اول)',answer:'mosque'},
{fa:'کتابخانه (روز اول)',answer:'library'},
{fa:'پل (روز اول)',answer:'bridge'},
{fa:'کاخ (روز اول)',answer:'palace'},
{fa:'موزه (روز دوم)',answer:'museum'},
{fa:'باغ وحش (روز دوم)',answer:'zoo'},
{fa:'ورزشگاه (روز دوم)',answer:'stadium'},
{fa:'پارک (روز دوم)',answer:'park'}
]
},
{
type:'days-checklist',
section:'Reading',
title:'در هتل تعدادی بروشور موجود است که اطلاعاتی را دربارهٔ هر یک از این اماکن، ارائه می‌دهد. مشخص کنید که کدام‌یک از این بروشورها را برای روز اول و دوم برمی‌دارید. (بروشورهای روز اول را با عدد ۱ و روز دوم را با عدد ۲ مشخص کنید.)',
titleEn:'Mark each brochure as Day 1 (city: traditional) or Day 2 (entertainment).',
days:['City Center Park','City Library','Jameh Mosque','Natural History Museum','Wooden Bridge','Old Palace','City Zoo','National Stadium'],
odds:['City Library','Jameh Mosque','Wooden Bridge','Old Palace'],
hint:'بناهای سنتی روز اول: City Library, Jameh Mosque, Wooden Bridge, Old Palace · جاهای تفریحی روز دوم: City Center Park, Natural History Museum, City Zoo, National Stadium'
},
{
type:'my-city-paragraph',
section:'Reading',
title:'فرض کنید برای عده‌ای جهانگرد که به ایران آمده‌اند می‌خواهید درباره زادگاه‌تان صحبت نمایید. فهرست زیر را تهیه کنید تا هنگام معرفی شهرتان، از آن استفاده نمایید.',
titleEn:'Prepare a guide for tourists about your city: name famous places by category.',
prompt:'Name of the city you are from: _____\n\nShrine: امام‌زاده صالح(ع)\nMosque: _____\nMuseum: _____\nLibrary: _____\nStadium: _____\nBoulevard: _____\nPark: _____',
rows:8
},
{
type:'city-features-grid',
section:'Reading',
title:'در کلاس انگلیسی از طریق یک کاربرگ، از شما خواسته شده تا با توجه به اطلاعات خود، مشخص کنید هر یک از شهرهای زیر دارای کدامیک از موارد است.',
titleEn:'Mark which features each Iranian city has (✓).',
cities:['Bojnoord','Kish','Shiraz','Sanandaj','Kerman','Kermanshah'],
features:['Metro System','Old Bridges','Old Airport','Museum','Mosques']
},
{
type:'city-country-continent',
section:'Reading',
title:'در کلاس زبان انگلیسی، دبیرتان در قالب یک فعّالیت از شما خواسته تا شهرها یا ایالت‌های زیر را مطابق با کشور و قارّهٔ مربوط به آن‌ها مشخص کنید. جلوی هر شهر، کشور و قارّهٔ مرتبط با آن، یک شماره بگذارید.',
titleEn:'Match each city/state with its country and continent. Use the same number for matching items (1, 2, 3, ...).',
example:{num:1, city:'(example) — Tehran', country:'Iran', continent:'Asia'},
cities:[
{num:1, name:'Queensland'},
{num:2, name:'Philadelphia'},
{num:3, name:'Manila'},
{num:4, name:'Rio de Janeiro'},
{num:5, name:'Johannesburg'},
{num:6, name:'Amsterdam'}
],
countries:['Brazil','The Netherlands','South Africa','The Philippines','Australia','The USA'],
continents:['Asia','Africa','Europe','North America','South America','Australia']
},
{
type:'people-info',
section:'Writing',
title:'دبیر زبان انگلیسی از شما خواسته تا به انتخاب خود، سه شهر از ایران و جاهای دیدنی و معروف آن را برای ارائه در کلاس معرفی کنید. از والدین، دوستان و در صورت امکان از اینترنت کمک بگیرید.',
titleEn:'Introduce 3 Iranian cities and their famous places. Example: Rasht — Rasht Museum, Morghaneh Pord Bridge, Rasht Old Library, Saravan Park.',
columns:['City','Famous/Important Places in the City'],
rows:3
},
{
type:'people-info',
section:'Writing',
title:'معلم زبان انگلیسی از شما می‌خواهد تا نام سه شهر در دنیا را که بیشتر از همه دوست دارید بنویسید و حداقل اسم یک جای مهم دیدنی یا مشهور در آن‌ها را ذکر کنید.',
titleEn:'Write 3 cities in the world you like best, with at least one famous place each. Example: Medina — Holy Prophet\'s Mosque.',
columns:['City','Famous/Important Places in the City'],
rows:3
},
{
type:'find-equivalent',
section:'Writing',
title:'برادر شما در یک مؤسسه تبلیغاتی کار می‌کند، او در حال تهیه بروشوری برای معرفی برخی شهرهای ایران است و برای معادل‌یابی برخی کلمات و عبارات از شما کمک خواسته است. به وی در این کار کمک کنید. دو کلمهٔ اوّل برای نمونه به انگلیسی برگردانده شده است.',
titleEn:'Help your brother find English equivalents for these Persian terms about Khorramshahr.',
farsiText:'اگر به ایران می‌آیید باید از خرّمشهر، شهر شجاعت و شهادت، دیدن کنید. خرّمشهر یکی از شهرهای جنوب غربی استان خوزستان است. این شهر در نزدیکی رودخانه‌های اروندرود و کارون قرار دارد که از اهمیّت ویژه‌ای برخوردار است. جاهای دیدنی آن عبارت‌اند از پل بهمنشیر، موزه، مسجد جامع و خیابان‌های بسیار زیبا. شادگان در غرب، آبادان در جنوب غربی، اهواز در شمال و هویزه در شمال غربی خرّمشهر قرار دارند.',
englishText:'If you are coming to Iran, you should visit Khorramshahr, the city of bravery and martyrdom. Khorramshahr is one of the cities in the south-west of Khuzestan Province. This city is located near the Arvand and Karoon rivers and has special importance. Its tourist attractions include Bahmanshir bridge, the museum, Jameh Mosque, and very beautiful streets. Shadegan is in the west, Abadan is in the south-west, Ahvaz is in the north, and Hoveyzeh is in the north-west of Khorramshahr.',
pairs:[
{fa:'شجاعت',en:'bravery',example:true},
{fa:'شهادت',en:'martyrdom',example:true},
{fa:'جنوب غربی',en:'south-west'},
{fa:'پل',en:'bridge'},
{fa:'موزه',en:'museum'},
{fa:'مسجد',en:'mosque'},
{fa:'غرب',en:'west'},
{fa:'شمال',en:'north'},
{fa:'شمال غربی',en:'north-west'}
]
},
{
type:'city-description',
section:'Writing',
title:'از شما خواسته شده تا با پر کردن جملات زیر، محل زندگی خود را به زبان انگلیسی توصیف کنید.',
titleEn:'Describe where you live by completing these sentences.',
heading:'What my city is like',
sentences:[
{text:"It's a ___ and ___ city.", placeholders:['beautiful','old']},
{text:'There is/are ___ in my city.', placeholders:['some old mosques']},
{text:"There isn't/aren't ___ in my city.", placeholders:['a metro system']},
{text:"It's famous for ___.", placeholders:['its handicrafts']},
{text:'You can have ___ in my city.', placeholders:['a great trip']}
]
}
],
quiz: [
{q:'Where _____ Isfahan?',qFa:'اصفهان کجاست؟',options:['is','are','am','do'],correct:0},
{q:"It's _____ the center of Iran.",qFa:'در مرکز ایرانه.',options:['on','at','in','for'],correct:2},
{q:'_____ a metro system? — Yes, there is.',qFa:'سیستم مترو هست؟',options:['Is','Is there','Are','Are there'],correct:1},
{q:'Isfahan is _____ for its mosques.',qFa:'اصفهان به‌خاطر مساجدش معروفه.',options:['famous','known','great','beautiful'],correct:0},
{q:"What's Isfahan _____? — It's old.",qFa:'اصفهان چطوره؟',options:['for','about','like','at'],correct:2},
{q:'How do you say "south-west"? — _____',qFa:'south-west چطور تلفظ می‌شه؟',options:['/saʊθ-west/','/eswest/','/saʊθ-est/','/saʊd-west/'],correct:0}
]
},
{
num: 6,
title: 'My Village',
titleFa: 'روستای من',
function: 'Talking about a place (village), Talking about the weather',
functionFa: 'صحبت درباره یک مکان (روستا) و درباره آب‌وهوا',
duration: 25,
color: '#FB7185',
conversation: {
desc: 'Listen to Sam and Hamid talking about a village.',
descFa: 'به سام و حمید در حال صحبت درباره یک روستا گوش دهید.',
lines: [
{
speaker: 'Sam',
role: 'student',
en: 'Where are you from, Hamid?',
fa: 'اهل کجایی، حمید؟'
},
{
speaker: 'Hamid',
role: 'teacher',
en: 'Ghez-ghal\'eh.',
fa: 'قز قلعه.'
},
{
speaker: 'Sam',
role: 'student',
en: 'Where is it?',
fa: 'کجاست؟'
},
{
speaker: 'Hamid',
role: 'teacher',
en: 'It\'s a village in West Azarbaijan, near the city of Khoy.',
fa: 'یه روستا در آذربایجان غربی، نزدیک شهر خوی.'
},
{
speaker: 'Sam',
role: 'student',
en: 'What\'s it like?',
fa: 'چه‌جوریه؟'
},
{
speaker: 'Hamid',
role: 'teacher',
en: 'It\'s a mountain village with many trees and flowers. It\'s famous for its sunflower fields.',
fa: 'یه روستای کوهستانی با درخت‌ها و گل‌های زیاد. به خاطر مزرعه‌های آفتابگردونش معروفه.'
},
{
speaker: 'Sam',
role: 'student',
en: 'What\'s the people\'s job?',
fa: 'شغل مردم چیه؟'
},
{
speaker: 'Hamid',
role: 'teacher',
en: 'They work on farms and raise animals.',
fa: 'تو مزرعه‌ها کار می‌کنن و حیوون پرورش می‌دن.'
},
{
speaker: 'Sam',
role: 'student',
en: 'What about the weather?',
fa: 'هوای اونجا چطوره؟'
},
{
speaker: 'Hamid',
role: 'teacher',
en: 'There\'s a lot of wind in summer, fall and winter. It\'s very cold from Aban to Farvardin.',
fa: 'تابستان، پاییز و زمستان باد زیاده. از آبان تا فروردین خیلی سرده.'
},
{
speaker: 'Sam',
role: 'student',
en: 'It sounds to be a very interesting place.',
fa: 'به نظر می‌رسه جای خیلی جالبیه.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about a Place (1)',
titleFa: 'صحبت درباره یک مکان (۱)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What is Ghez-ghal\'eh like?',
a: 'It\'s a mountain village.',
qFa: 'قز قلعه چه‌جوریه؟',
aFa: 'یه روستای کوهستانیه.'
},
{
q: 'Is it near the city?',
a: 'Yes, it is. / No, it isn\'t.',
qFa: 'نزدیک شهره؟',
aFa: 'بله. / نه.'
},
{
q: 'What is it famous for?',
a: 'It\'s famous for its sunflower fields.',
qFa: 'به چی معروفه؟',
aFa: 'به خاطر مزرعه‌های آفتابگردونش معروفه.'
},
{
q: 'What\'s the people\'s job?',
a: 'They work on farms and raise animals.',
qFa: 'شغل مردم چیه؟',
aFa: 'تو مزرعه‌ها کار می‌کنن و حیوون پرورش می‌دن.'
}
]
},
{
title: 'Practice 2 — Talking about a Place (2)',
titleFa: 'صحبت درباره یک مکان (۲)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Are there any fields?',
a: 'Yes, there are.',
qFa: 'مزرعه هست؟',
aFa: 'بله.'
},
{
q: 'Is there a river?',
a: 'No, there isn\'t.',
qFa: 'رودخونه هست؟',
aFa: 'نه.'
},
{
q: 'Is there a mountain?',
a: 'Yes, there is.',
qFa: 'کوه هست؟',
aFa: 'بله.'
},
{
q: 'Are there many people in the village?',
a: 'No, there aren\'t.',
qFa: 'تو روستا آدم زیاد هست؟',
aFa: 'نه.'
}
]
},
{
title: 'Practice 3 — Talking about the Weather and Seasons',
titleFa: 'صحبت درباره آب‌وهوا و فصل‌ها',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What\'s the weather like in Ghez-ghal\'eh?',
a: 'It\'s windy/sunny/rainy/snowy in summer.',
qFa: 'هوای قز قلعه چطوره؟',
aFa: 'تو تابستان بادی/آفتابی/بارونی/برفی.'
},
{
q: 'What about the weather?',
a: 'It\'s hot/cold/warm/wet/dry.',
qFa: 'هوا چطوره؟',
aFa: 'گرم/سرد/معتدل/مرطوب/خشک.'
},
{
q: 'Is it cold in winter?',
a: 'Yes, it is. / No, it isn\'t.',
qFa: 'تو زمستون سرده؟',
aFa: 'بله. / نه.'
},
{
q: 'Is there much rain in spring?',
a: 'Yes, there is. / No, there isn\'t.',
qFa: 'تو بهار بارون زیاد هست؟',
aFa: 'بله. / نه.'
}
]
}
],
spelling: {
desc: 'Listen to the conversation between a student and her English teacher.',
descFa: 'به مکالمه‌ی بین یک دانش‌آموز و معلم انگلیسی‌اش گوش دهید.',
dialogue: [
{
speaker: 'Student',
en: 'Can you help me, madam?',
fa: 'می‌تونی کمکم کنی، خانم؟'
},
{
speaker: 'Teacher',
en: 'Yes, what\'s the problem?',
fa: 'بله، مشکل چیه؟'
},
{
speaker: 'Student',
en: 'How do you say T-H? Is it the same in all words?',
fa: 'T-H چطور تلفظ می‌شه؟ توی همه‌ی کلمات یکیه؟'
},
{
speaker: 'Teacher',
en: 'No, it\'s sometimes different.',
fa: 'نه، گاهی متفاوته.'
},
{
speaker: 'Student',
en: 'Can you give me some examples?',
fa: 'می‌تونی چند مثال بزنی؟'
},
{
speaker: 'Teacher',
en: 'Yes, in \'there\', \'this\', and \'they\', it\'s /ð/. In \'north\', \'south\', \'thank\', and \'three\', it\'s /θ/.',
fa: 'بله، در «there»، «this»، و «they» صدای /ð/ داره. در «north»، «south»، «thank»، و «three» صدای /θ/ داره.'
},
{
speaker: 'Student',
en: 'Thank you.',
fa: 'ممنون.'
}
],
activity: 'Can you say and write some other words with \'th\'?',
activityFa: 'می‌تونی چند کلمه‌ی دیگه با «th» بگی و بنویسی؟',
talkToTeacher: 'Is it the same?'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'What is it Like', 'What\'s the Weather Like'],
tableHeadsFa: ['مکالمه', 'چه‌جوریه', 'هوا چطوره'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
pairWork: {
title: 'Pair Work',
instruction: 'Look at the cards on Pages 65 and 93. Ask and answer about the place and fill out the cards. Can you guess the name of the place?',
instructionFa: 'به کارت‌های صفحه ۶۵ و ۹۳ نگاه کنید. درباره مکان سؤال و جواب کنید و کارت‌ها را پر کنید. می‌توانید نام مکان را حدس بزنید؟',
studentA: 'Look at the card on Page 65 and answer student B\'s questions.',
studentAFa: 'به کارت صفحه ۶۵ نگاه کن و به سؤالات دانش‌آموز B جواب بده.',
studentB: 'Look at the card on Page 93 and answer student A\'s questions.',
studentBFa: 'به کارت صفحه ۹۳ نگاه کن و به سؤالات دانش‌آموز A جواب بده.'
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Pair Work',
roles: [
{
name: 'Student A',
task: 'Imagine you are a tourist. Think of some questions and ask your classmate about a village.',
taskFa: 'فرض کن گردشگر هستی. چند سؤال فکر کن و از همکلاسی‌ات درباره یک روستا بپرس.'
},
{
name: 'Student B',
task: 'Think of some information about the village and answer your classmate\'s questions.',
taskFa: 'چند اطلاعات درباره روستا فکر کن و به سؤالات همکلاسی‌ات جواب بده.'
}
],
changeRoles: true
},
vocabulary: [
{
word: 'village',
pos: 'noun',
ipa: '/ˈvɪlɪdʒ/',
fa: 'روستا',
example: 'A mountain village.'
},
{
word: 'mountain',
pos: 'noun',
ipa: '/ˈmaʊntən/',
fa: 'کوه',
example: 'A high mountain.'
},
{
word: 'field',
pos: 'noun',
ipa: '/fiːld/',
fa: 'مزرعه، دشت',
example: 'Sunflower fields.'
},
{
word: 'farm',
pos: 'noun',
ipa: '/fɑːrm/',
fa: 'مزرعه',
example: 'Work on farms.'
},
{
word: 'river',
pos: 'noun',
ipa: '/ˈrɪvər/',
fa: 'رودخانه',
example: 'A big river.'
},
{
word: 'tree',
pos: 'noun',
ipa: '/triː/',
fa: 'درخت',
example: 'Many trees.'
},
{
word: 'flower',
pos: 'noun',
ipa: '/ˈflaʊər/',
fa: 'گل',
example: 'Beautiful flowers.'
},
{
word: 'sunflower',
pos: 'noun',
ipa: '/ˈsʌnflaʊər/',
fa: 'آفتابگردان',
example: 'Sunflower fields.'
},
{
word: 'cattle',
pos: 'noun',
ipa: '/ˈkætl/',
fa: 'گاو، احشام',
example: 'Raise cattle.'
},
{
word: 'plow',
pos: 'noun',
ipa: '/plaʊ/',
fa: 'گاوآهن',
example: 'A plow on the farm.'
},
{
word: 'tractor',
pos: 'noun',
ipa: '/ˈtræktər/',
fa: 'تراکتور',
example: 'A red tractor.'
},
{
word: 'animal',
pos: 'noun',
ipa: '/ˈænɪmæl/',
fa: 'حیوان',
example: 'Raise animals.'
},
{
word: 'raise',
pos: 'verb',
ipa: '/reɪz/',
fa: 'پرورش دادن',
example: 'Raise animals.'
},
{
word: 'weather',
pos: 'noun',
ipa: '/ˈweðər/',
fa: 'آب‌وهوا',
example: 'What\'s the weather like?'
},
{
word: 'sunny',
pos: 'adj',
ipa: '/ˈsʌni/',
fa: 'آفتابی',
example: 'It\'s sunny.'
},
{
word: 'cloudy',
pos: 'adj',
ipa: '/ˈklaʊdi/',
fa: 'ابری',
example: 'It\'s cloudy.'
},
{
word: 'rainy',
pos: 'adj',
ipa: '/ˈreɪni/',
fa: 'بارانی',
example: 'It\'s rainy.'
},
{
word: 'snowy',
pos: 'adj',
ipa: '/ˈsnoʊi/',
fa: 'برفی',
example: 'It\'s snowy.'
},
{
word: 'windy',
pos: 'adj',
ipa: '/ˈwɪndi/',
fa: 'بادی',
example: 'It\'s windy.'
},
{
word: 'icy',
pos: 'adj',
ipa: '/ˈaɪsi/',
fa: 'یخی',
example: 'It\'s icy.'
},
{
word: 'hot',
pos: 'adj',
ipa: '/hɒt/',
fa: 'گرم',
example: 'It\'s hot.'
},
{
word: 'cold',
pos: 'adj',
ipa: '/koʊld/',
fa: 'سرد',
example: 'It\'s cold.'
},
{
word: 'warm',
pos: 'adj',
ipa: '/wɔːrm/',
fa: 'گرم (معتدل)',
example: 'It\'s warm.'
},
{
word: 'wet',
pos: 'adj',
ipa: '/wet/',
fa: 'مرطوب',
example: 'It\'s wet.'
},
{
word: 'dry',
pos: 'adj',
ipa: '/draɪ/',
fa: 'خشک',
example: 'It\'s dry.'
},
{
word: 'wind',
pos: 'noun',
ipa: '/wɪnd/',
fa: 'باد',
example: 'A lot of wind.'
},
{
word: 'rain',
pos: 'noun',
ipa: '/reɪn/',
fa: 'باران',
example: 'Much rain.'
},
{
word: 'snow',
pos: 'noun',
ipa: '/snoʊ/',
fa: 'برف',
example: 'A lot of snow.'
},
{
word: 'spring',
pos: 'noun',
ipa: '/sprɪŋ/',
fa: 'بهار',
example: 'In spring.'
},
{
word: 'summer',
pos: 'noun',
ipa: '/ˈsʌmər/',
fa: 'تابستان',
example: 'In summer.'
},
{
word: 'fall',
pos: 'noun',
ipa: '/fɔːl/',
fa: 'پاییز',
example: 'In fall.'
},
{
word: 'autumn',
pos: 'noun',
ipa: '/ˈɔːtəm/',
fa: 'پاییز',
example: 'In autumn.'
},
{
word: 'winter',
pos: 'noun',
ipa: '/ˈwɪntər/',
fa: 'زمستان',
example: 'In winter.'
},
{
word: 'season',
pos: 'noun',
ipa: '/ˈsiːzən/',
fa: 'فصل',
example: 'Four seasons.'
},
{
word: 'interesting',
pos: 'adj',
ipa: '/ˈɪntrəstɪŋ/',
fa: 'جالب',
example: 'An interesting place.'
},
{
word: 'people',
pos: 'noun',
ipa: '/ˈpiːpəl/',
fa: 'مردم',
example: 'The people\'s job.'
}
],
workbook: [
{
type:'city-village-sort',
section:'Reading',
title:'در کلاس زبان انگلیسی از طریق کاربرگ، متنی به شما داده شده که زندگی در شهر و روستا را با هم مقایسه می‌کند. مشخص کنید کدامیک از کلمات و عبارات، مربوط به زندگی روستایی(V) یا زندگی شهری(C) یا هردو(CV) است.',
titleEn:'Read the text and label each word/phrase as City (C), Village (V), or Both (CV).',
images:[
{file:'city.jpg', label:'City life · زندگی شهری'},
{file:'village.jpg', label:'Village life · زندگی روستایی'}
],
text:"I was born in Khomedeh, a small village near Tehran, and lived there for some years. Life in this village was not that much hard. There were things which made life more pleasant and much more relaxed for us. We enjoyed the clean air. In winter, there was a lot of snow and rain. But, it was wet and warm in spring, and sunny and hot in summer.\n\nNow, I live in Tehran. Life in a city is much harder than life in a village. In cities, there are lots of facilities such as universities, libraries, museums, cinemas, airports, bus terminals, shopping centers, sports centers, etc. But, there are problems, too. Heavy traffic, pollution, and noise are some examples.\n\nIn villages, people have a different life. They are busy working in fields or on farms. They raise animals such as cows, sheep, and horses. They prepare the farms in fall and raise crops. They are happy when it is rainy and snowy. Some farmers use tractors to plow their farms.",
items:[
{word:'clean air',answer:'V'},
{word:'universities',answer:'C'},
{word:'libraries',answer:'CV'},
{word:'museums',answer:'C'},
{word:'airports',answer:'C'},
{word:'shopping centers',answer:'C'},
{word:'heavy traffic',answer:'C'},
{word:'pollution',answer:'C'},
{word:'noise',answer:'C'},
{word:'fields',answer:'V'},
{word:'farms',answer:'V'},
{word:'animals (cows, sheep, horses)',answer:'V'},
{word:'tractors',answer:'V'}
]
},
{
type:'directions-villages',
section:'Reading',
title:'فرض کنید یک جهانگرد قصد دارد از مناطق مختلف کشورمان بازدید کند. از هر جهت جغرافیایی کشورمان ایران، یک جاذبه گردشگری روستایی یا شهری را به وی معرفی کنید.',
titleEn:'Recommend a rural or urban tourist attraction from each direction of Iran.',
directions:['North','East','West','South','Center']
},
{
type:'tabriz-kandovan',
section:'Reading',
title:'در اینجا تصویر بخشی از شهر تبریز و روستای کندوان را می‌بینید. با دانش زبان انگلیسی که تاکنون کسب کرده‌اید مشخص کنید کدام عبارات مربوط به تبریز (T) و کدام مربوط به کندوان (K) است.',
titleEn:'Label each phrase as Tabriz (T) or Kandovan (K).',
images:[
{file:'tabriz.jpg', label:'Tabriz (T) · شهر تبریز'},
{file:'kandovan.jpg', label:'Kandovan (K) · روستای کندوان'}
],
items:[
{phrase:'Great mosques',answer:'T'},
{phrase:'beautiful farms',answer:'K'},
{phrase:'big stadiums',answer:'T'},
{phrase:'old museums',answer:'T'},
{phrase:'old palaces',answer:'T'},
{phrase:'modern buildings',answer:'T'},
{phrase:'nice boulevards',answer:'T'},
{phrase:'stone houses',answer:'K'},
{phrase:'tall mountains',answer:'K'},
{phrase:'a small river',answer:'K'}
]
},
{
type:'season-activities',
section:'Reading',
title:'دبیر زبانتان تصاویر زیر را به شما ارائه کرده و خواسته که مشخص کنید هرکدام از این فعّالیت‌ها در چه فصلی انجام می‌گیرد. شمارهٔ فصل را در کادر سفید بنویسید.',
titleEn:'Match each farming activity to its season (1.spring 2.summer 3.fall 4.winter).',
seasons:['spring (1)','summer (2)','fall (3)','winter (4)'],
activities:[
{hint:'باغبان در حال هرس کردن (با ابزار باغبانی)',emoji:'✂️',answer:'2'},
{hint:'برداشت گردو (سبد پر از گردو)',emoji:'🌰',answer:'3'},
{hint:'پاک‌سازی برگ‌های پاییزی',emoji:'🍂',answer:'3'},
{hint:'برداشت گندم در زمین',emoji:'🌾',answer:'2'},
{hint:'چیدن میوه از بوته',emoji:'🍓',answer:'1'},
{hint:'سمپاشی محصول',emoji:'🌿',answer:'1'},
{hint:'شخم‌زدن زمین کشاورزی با تراکتور',emoji:'🚜',answer:'3'},
{hint:'پیوند زدن درخت',emoji:'🌳',answer:'4'}
]
},
{
type:'image-flashcards',
section:'Writing',
title:'دبیر زبان از شما خواسته تا برای یادگیری واژگان مربوط به آب و هوا، فلش‌کارت بسازید. کلمهٔ مربوط به تصاویر زیر را بنویسید تا فلش‌کارت‌ها کامل شوند. دو نمونه ارائه شده است.',
titleEn:'Make weather flashcards. Fill in the words for each weather image. Two examples given.',
items:[
{emoji:'☁️',hint:'آسمان ابری بدون باران',answer:'Cloudy',example:true},
{emoji:'💨',hint:'درخت‌ها در حال تکان خوردن از باد',answer:'Windy'},
{emoji:'🌳',hint:'مزرعه با هوای خنک',answer:'Cool'},
{emoji:'🌡️',hint:'دماسنج بالا/خورشید درخشان',answer:'Hot/Sunny'},
{emoji:'🌧️',hint:'باران در حال باریدن',answer:'Rainy'},
{emoji:'❄️',hint:'جنگل پر از برف',answer:'Snowy'},
{emoji:'🏜️',hint:'زمین خشک و ترک‌خورده',answer:'Dry'},
{emoji:'🌂',hint:'فردی در باران',answer:'Wet'},
{emoji:'🥶',hint:'درخت‌های پر از برف',answer:'Cold',example:true}
]
},
{
type:'route-cities',
section:'Writing',
title:'دبیر زبان انگلیسی یک مسابقه مربوط به دانش جغرافیا طراحی کرده و شما با کمک گرفتن از نقشهٔ ایران باید بنویسید که چهار روستای ورسک، سربیشه، کوشک و دهمرده در کجای کشورمان قرار دارند.',
titleEn:'Locate 4 Iranian villages on the map: write the direction and province.',
mapImage:'iran-map-villages.jpg',
farsiRoute:'مثال: Abyaneh is in the center of Iran in Isfahan province. (آبیانه در مرکز ایران در استان اصفهان است.)',
steps:['Abyaneh — center of Iran — Isfahan province','Veresk — north — Mazandaran province','Sarbisheh — west — Ilam province','Kooshk — south — Hormozgan province','Dahmardeh — east — Sistan and Baluchestan province'],
givenSteps:1
},
{
type:'doctor-dialog-builder',
section:'Writing',
title:'فرض کنید یک گردشگر خارجی دربارهٔ روستای شما پرسش‌هایی را مطرح می‌کند. چه پاسخی به هر یک از سؤالات ایشان می‌دهید؟ از الگوهای زیر پاسخ‌ها را تکمیل کنید.',
titleEn:'A foreign tourist asks about your village. Complete the answers using the patterns below.',
starter:[
{speaker:"What's your village like?",line:'____________ (It is a _____ village.)'},
{speaker:'What is it famous for?',line:'____________ (It is famous for _____ .)'},
{speaker:'What is the weather like in summer?',line:'____________ (The weather _____ in summer.)'},
{speaker:'Can we go fishing?',line:'____________ (There is a _____ nearby, so you can _____ .)'},
{speaker:'Is there a mountain or a river around?',line:'____________ (There are tall _____ around our village.)'}
]
},
{
type:'poster-form',
section:'Writing',
title:'دبیر زبان انگلیسی از دانش‌آموزان کلاس خواسته است یک صفحه وب برای معرفی روستا یا شهر محل زندگی خود بسازند. صفحهٔ وب را شما کامل کنید. برخی از واژه‌ها داده شده است.',
titleEn:'Build a webpage to introduce your village/city. Some Persian-English vocabulary keys provided.',
keys:[
{fa:'شهید',en:'Martyr'},
{fa:'موقعیت جغرافیایی',en:'Geographical location'},
{fa:'سوغات',en:'Souvenirs'},
{fa:'محصولات',en:'Products'},
{fa:'جمعیت',en:'Population'}
],
formTitle:'In the Name of Allah',
fields:[
{label:'Weblog Name'},
{label:'Name of Village/City'},
{label:'Geographical Location'},
{label:'Number of Martyrs'},
{label:'Products'},
{label:'Population'},
{label:'Souvenirs'},
{label:'Famous for'},
{label:'Weather in Spring'},
{label:'Weather in Summer'},
{label:'Weather in Fall'},
{label:'Weather in Winter'}
]
}
],
quiz: [
{q:"What's the weather _____ in summer?",qFa:'هوای تابستون چطوره؟',options:['for','at','like','about'],correct:2},
{q:"It's very _____ in winter.",qFa:'زمستون خیلی سرده.',options:['hot','warm','cold','sunny'],correct:2},
{q:"It's a _____ village with many trees.",qFa:'یه روستای کوهستانی با درخت‌های زیاد.',options:['mountain','sea','desert','river'],correct:0},
{q:"It's famous _____ its sunflower fields.",qFa:'به‌خاطر مزارع آفتاب‌گردانش معروفه.',options:['for','about','to','with'],correct:0},
{q:'They _____ animals like cows and horses.',qFa:'دام‌هایی مثل گاو و اسب پرورش می‌دن.',options:['work','raise','grow','give'],correct:1},
{q:"How do you say T-H in 'three'? — _____",qFa:'صدای T-H در three چطوره؟',options:['/ð/','/θ/','/tʃ/','/d/'],correct:1}
]
},
{
num: 7,
title: 'My Hobbies',
titleFa: 'سرگرمی‌های من',
function: 'Talking about your hobbies and free time activities',
functionFa: 'صحبت درباره سرگرمی‌ها و فعالیت‌های اوقات فراغت',
duration: 25,
color: '#A78BFA',
conversation: {
desc: 'Listen to two students and their English teacher talking about their hobbies.',
descFa: 'به دو دانش‌آموز و معلم انگلیسی‌شون در حال صحبت درباره سرگرمی‌هاشون گوش دهید.',
lines: [
{
speaker: 'Teacher',
role: 'teacher',
en: 'Do you have any hobbies, Zahra?',
fa: 'سرگرمی داری، زهرا؟'
},
{
speaker: 'Zahra',
role: 'student',
en: 'Yes, I do. I watch movies as a hobby.',
fa: 'بله، دارم. فیلم دیدن سرگرمی منه.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Interesting! How about you, Samira?',
fa: 'جالبه! تو چی، سمیرا؟'
},
{
speaker: 'Samira',
role: 'student',
en: 'Well, I love reading.',
fa: 'خب، عاشق مطالعه‌ام.'
},
{
speaker: 'Zahra',
role: 'student',
en: 'Really? What sort of things do you read?',
fa: 'واقعاً؟ چه چیزهایی می‌خونی؟'
},
{
speaker: 'Samira',
role: 'student',
en: 'Books, magazines, sports news on the Net, and sometimes poems.',
fa: 'کتاب، مجله، اخبار ورزشی روی اینترنت، و گاهی شعر.'
},
{
speaker: 'Zahra',
role: 'student',
en: 'And how about you, Mrs. Emami?',
fa: 'و شما چی، خانم امامی؟'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Actually, I don\'t have any hobbies. But I usually go to the gym in my free time.',
fa: 'راستش، من سرگرمی ندارم. ولی معمولاً تو اوقات فراغتم به باشگاه می‌رم.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Your Hobbies',
titleFa: 'صحبت درباره سرگرمی‌های شما',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Do you have any hobbies?',
a: 'Yes, listening to stories on the radio.',
qFa: 'سرگرمی داری؟',
aFa: 'بله، گوش کردن به داستان از رادیو.'
},
{
q: 'What do you do as a hobby?',
a: 'I watch movies as a hobby.',
qFa: 'به‌عنوان سرگرمی چی کار می‌کنی؟',
aFa: 'به‌عنوان سرگرمی فیلم می‌بینم.'
},
{
q: 'Do you like reading?',
a: 'Yes, very much.',
qFa: 'مطالعه دوست داری؟',
aFa: 'بله، خیلی.'
},
{
q: 'What\'s your hobby?',
a: 'I enjoy searching the Web.',
qFa: 'سرگرمی‌ات چیه؟',
aFa: 'از جستجوی اینترنت لذت می‌برم.'
}
]
},
{
title: 'Practice 2 — Talking about Your Free Time Activities',
titleFa: 'صحبت درباره فعالیت‌های اوقات فراغت',
desc: 'Listen to the examples. Then practice with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست تمرین کنید.',
pairs: [
{
q: 'What do you do in your free time?',
a: 'I go horse riding.',
qFa: 'تو اوقات فراغت چی کار می‌کنی؟',
aFa: 'اسب‌سواری می‌کنم.'
},
{
q: 'What do you do in your free time?',
a: 'I play tennis.',
qFa: 'تو اوقات فراغت چی کار می‌کنی؟',
aFa: 'تنیس بازی می‌کنم.'
},
{
q: 'What do you like to do in your free time?',
a: 'I usually go shopping.',
qFa: 'تو اوقات فراغت چی دوست داری انجام بدی؟',
aFa: 'معمولاً خرید می‌رم.'
},
{
q: 'What do you like to do in your free time?',
a: 'I walk in the park.',
qFa: 'تو اوقات فراغت چی دوست داری انجام بدی؟',
aFa: 'تو پارک قدم می‌زنم.'
},
{
q: 'What do you like to do in your free time?',
a: 'I like playing computer games.',
qFa: 'تو اوقات فراغت چی دوست داری انجام بدی؟',
aFa: 'دوست دارم بازی کامپیوتری بازی کنم.'
}
]
}
],
spelling: {
desc: 'Listen to a conversation between a student and her English teacher.',
descFa: 'به مکالمه‌ی بین یک دانش‌آموز و معلم انگلیسی‌اش گوش دهید.',
dialogue: [
{
speaker: 'Student',
en: 'Excuse me. How do you say I-N-G in \'reading\'*, \'playing\'*, and \'searching\'*?',
fa: 'ببخشید. I-N-G در «reading»، «playing» و «searching» چطور تلفظ می‌شه؟'
},
{
speaker: 'Teacher',
en: 'Oh, there\'s no /g/ at the end. Say \'reading\', \'playing\', and \'searching\'.',
fa: 'اوه، در آخر صدای /g/ نیست. بگو «reading»، «playing»، و «searching».'
},
{
speaker: 'Student',
en: 'Thanks. How about B-R-O-W-S-I-N-G? How do you say it?',
fa: 'ممنون. B-R-O-W-S-I-N-G چطور؟ چطور تلفظ می‌شه؟'
},
{
speaker: 'Teacher',
en: 'That\'s \'browsing\'.',
fa: '«browsing».'
}
],
activity: 'Find and say some other words with \'-ing\'.',
activityFa: 'کلمات دیگری با «-ing» پیدا کن و بگو.',
note: '* shows wrong pronunciation.',
noteFa: '* نشان‌دهنده تلفظ نادرست است.',
talkToTeacher: 'How about …………?'
},
listening: {
title: 'Listening and Writing',
desc: 'Listen to the conversations and fill out the table below.',
descFa: 'به مکالمه‌ها گوش دهید و جدول زیر را پر کنید.',
tableHeads: ['Conversations', 'Hobbies', 'Free Time Activities'],
tableHeadsFa: ['مکالمه', 'سرگرمی‌ها', 'فعالیت‌های اوقات فراغت'],
numRows: 2
},
speakingWriting: {
title: 'Reading, Speaking and Writing',
groupWork: {
title: 'Group Work',
instruction: 'Your teacher will give you cards about hobbies and free time activities. Ask three classmates what they do or like to do as their hobbies and in their free time. Then fill out the table below.',
instructionFa: 'معلمت کارت‌هایی درباره سرگرمی‌ها و فعالیت‌های اوقات فراغت به تو می‌دهد. از سه همکلاسی بپرس چه کاری می‌کنند یا دوست دارند به‌عنوان سرگرمی و در اوقات فراغت انجام دهند. سپس جدول زیر را پر کن.',
tableHeads: ['Name', 'Hobbies', 'Free Time Activities'],
tableHeadsFa: ['نام', 'سرگرمی‌ها', 'فعالیت‌های اوقات فراغت'],
sampleRow: ['Nahid', 'Watching movies', 'Going shopping']
}
},
rolePlay: {
title: 'Role Play',
subtitle: 'Pair Work',
roles: [
{
name: 'Student A',
task: 'Play the role of a famous person and answer your classmate\'s questions about your hobbies and free time activities.',
taskFa: 'نقش یک فرد مشهور را بازی کن و به سؤالات همکلاسی‌ات درباره سرگرمی‌ها و فعالیت‌های اوقات فراغتت جواب بده.'
},
{
name: 'Student B',
task: 'Play the role of an interviewer and ask your classmate some questions.',
taskFa: 'نقش یک مصاحبه‌گر را بازی کن و از همکلاسی‌ات چند سؤال بپرس.'
}
],
changeRoles: true
},
vocabulary: [
{
word: 'hobby',
pos: 'noun',
ipa: '/ˈhɒbi/',
fa: 'سرگرمی',
example: 'What\'s your hobby?'
},
{
word: 'free time',
pos: 'phrase',
ipa: '/friː taɪm/',
fa: 'اوقات فراغت',
example: 'In my free time.'
},
{
word: 'activity',
pos: 'noun',
ipa: '/ækˈtɪvəti/',
fa: 'فعالیت',
example: 'Free time activities.'
},
{
word: 'reading',
pos: 'noun',
ipa: '/ˈriːdɪŋ/',
fa: 'مطالعه، خواندن',
example: 'I love reading.'
},
{
word: 'watching movies',
pos: 'phrase',
ipa: '/ˈwɒtʃɪŋ ˈmuːviz/',
fa: 'تماشای فیلم',
example: 'Watching movies as a hobby.'
},
{
word: 'movie',
pos: 'noun',
ipa: '/ˈmuːvi/',
fa: 'فیلم',
example: 'A good movie.'
},
{
word: 'magazine',
pos: 'noun',
ipa: '/ˌmæɡəˈziːn/',
fa: 'مجله',
example: 'Read magazines.'
},
{
word: 'poem',
pos: 'noun',
ipa: '/ˈpoʊəm/',
fa: 'شعر',
example: 'Read poems.'
},
{
word: 'news',
pos: 'noun',
ipa: '/nuːz/',
fa: 'اخبار',
example: 'Sports news.'
},
{
word: 'radio',
pos: 'noun',
ipa: '/ˈreɪdioʊ/',
fa: 'رادیو',
example: 'Listen to the radio.'
},
{
word: 'walking in the park',
pos: 'phrase',
ipa: '/ˈwɔːkɪŋ ɪn ðə pɑːrk/',
fa: 'قدم زدن در پارک',
example: 'I like walking in the park.'
},
{
word: 'park',
pos: 'noun',
ipa: '/pɑːrk/',
fa: 'پارک',
example: 'Walk in the park.'
},
{
word: 'horse riding',
pos: 'phrase',
ipa: '/hɔːrs ˈraɪdɪŋ/',
fa: 'اسب‌سواری',
example: 'I go horse riding.'
},
{
word: 'horse',
pos: 'noun',
ipa: '/hɔːrs/',
fa: 'اسب',
example: 'A black horse.'
},
{
word: 'shopping',
pos: 'noun',
ipa: '/ˈʃɒpɪŋ/',
fa: 'خرید',
example: 'Going shopping.'
},
{
word: 'computer games',
pos: 'phrase',
ipa: '/kəmˈpjuːtər ɡeɪmz/',
fa: 'بازی‌های کامپیوتری',
example: 'Playing computer games.'
},
{
word: 'game',
pos: 'noun',
ipa: '/ɡeɪm/',
fa: 'بازی',
example: 'A new game.'
},
{
word: 'tennis',
pos: 'noun',
ipa: '/ˈtenɪs/',
fa: 'تنیس',
example: 'I play tennis.'
},
{
word: 'enjoy',
pos: 'verb',
ipa: '/ɪnˈdʒɔɪ/',
fa: 'لذت بردن از',
example: 'I enjoy searching the Web.'
},
{
word: 'listen',
pos: 'verb',
ipa: '/ˈlɪsən/',
fa: 'گوش دادن',
example: 'Listen to stories.'
},
{
word: 'story',
pos: 'noun',
ipa: '/ˈstɔːri/',
fa: 'داستان',
example: 'Listen to stories.'
},
{
word: 'browse',
pos: 'verb',
ipa: '/braʊz/',
fa: 'گشت زدن (در اینترنت)',
example: 'That\'s \'browsing\'.'
},
{
word: 'browsing',
pos: 'noun',
ipa: '/ˈbraʊzɪŋ/',
fa: 'گشت زدن (در اینترنت)',
example: 'That\'s \'browsing\'.'
},
{
word: 'usually',
pos: 'adv',
ipa: '/ˈjuːʒuəli/',
fa: 'معمولاً',
example: 'I usually go to the gym.'
},
{
word: 'sometimes',
pos: 'adv',
ipa: '/ˈsʌmtaɪmz/',
fa: 'گاهی',
example: 'Sometimes poems.'
},
{
word: 'actually',
pos: 'adv',
ipa: '/ˈæktʃuəli/',
fa: 'در واقع، راستش',
example: 'Actually, I don\'t have any hobbies.'
},
{
word: 'interesting',
pos: 'adj',
ipa: '/ˈɪntrəstɪŋ/',
fa: 'جالب',
example: 'Interesting!'
},
{
word: 'sort',
pos: 'noun',
ipa: '/sɔːrt/',
fa: 'نوع',
example: 'What sort of things?'
},
{
word: 'as',
pos: 'prep',
ipa: '/æz/',
fa: 'به عنوان',
example: 'As a hobby.'
},
{
word: 'Net',
pos: 'noun',
ipa: '/net/',
fa: 'اینترنت',
example: 'On the Net.'
},
{
word: 'Web',
pos: 'noun',
ipa: '/web/',
fa: 'وب، اینترنت',
example: 'Search the Web.'
},
{
word: 'interviewer',
pos: 'noun',
ipa: '/ˈɪntərvjuːər/',
fa: 'مصاحبه‌گر',
example: 'An interviewer.'
},
{
word: 'famous person',
pos: 'phrase',
ipa: '/ˈfeɪməs ˈpɜːrsən/',
fa: 'فرد مشهور',
example: 'A famous person.'
}
],
workbook: [
{
type:'image-flashcards',
section:'Reading',
title:'در کلاس درس زبان انگلیسی، دبیرتان به شما دو نوع فلش‌کارت (تصویری و نوشتاری) داده است. مشخص کنید هر یک از فلش‌کارت‌های نوشتاری مربوط به کدام فلش‌کارت تصویری است.',
titleEn:'Look at each picture and write the hobby/activity it shows.',
items:[
{image:'hobby-walking.jpg',emoji:'🚶',answer:'walking in the park'},
{image:'hobby-shopping.jpg',emoji:'🛒',answer:'going shopping'},
{image:'hobby-horse-riding.jpg',emoji:'🐎',answer:'horse riding'},
{image:'hobby-fishing.jpg',emoji:'🎣',answer:'going fishing'},
{image:'hobby-climbing.jpg',emoji:'⛰️',answer:'mountain climbing'},
{image:'hobby-pingpong.jpg',emoji:'🏓',answer:'playing ping-pong'}
]
},
{
type:'hobby-survey',
section:'Reading',
title:'در کاربرگ زیر، علاقه‌مندی‌های خود را مشخص کنید.',
titleEn:'Mark your interests (Yes/No) in this worksheet.',
hobbies:['Playing football','Playing tennis','Swimming','Going shopping','Playing computer games','Reading story books','Going to the gym']
},
{
type:'self-assessment',
section:'Reading',
title:'در صفحه‌ای از یک مجلهٔ آموزشی داخلی به زبان انگلیسی، از شما خواسته شده سرگرمی‌ها و فعالیت‌های اوقات فراغت خود را علامت بزنید. میزان علاقهٔ خود را از ۵ (بسیار زیاد) تا ۱ (بسیار کم) در جدول زیر مشخص کنید.',
titleEn:'Rate your interests from 5 (very much) to 1 (very little).',
abilities:[
'Watching TV',
'Playing ping-pong',
'Walking in the park',
'Going to the movies (cinema)',
'Listening to the radio',
'Reading newspapers/magazines',
'Fishing',
'Working in the garden'
],
levels:['1 (very little)','2','3','4','5 (very much)']
},
{
type:'city-village-sort',
section:'Reading',
title:'دبیر زبان انگلیسی کاربرگی ارائه نموده و از شما خواسته تا سرگرمی‌ها و فعّالیت‌های اوقات فراغت مناطق شهری و روستایی را مشخص کنید (مناطق شهری با (C)، روستایی با (V) و سرگرمی‌ها و فعّالیت‌های مشترک با (VC)).',
titleEn:'Mark each hobby/activity as City (C), Village (V), or Both (VC).',
text:'Hobbies and Free time activities are different in city and village areas. Some are common to both, like reading or playing football. Others are specific to one area — for example, mountain climbing is more common in villages, while browsing the internet is more common in cities.',
items:[
{word:'working in the garden',answer:'VC'},
{word:'horse riding',answer:'V'},
{word:'fishing',answer:'V'},
{word:'walking in the park',answer:'VC'},
{word:'going shopping',answer:'C'},
{word:'visiting relatives',answer:'VC'},
{word:'browsing the internet',answer:'C'},
{word:'mountain climbing',answer:'V'},
{word:'reading poems',answer:'VC'},
{word:'swimming',answer:'VC'}
]
},
{
type:'application-form',
section:'Writing',
title:'کانون تربیتی منطقهٔ آموزش و پرورش شما در طول تابستان برنامهٔ علمی/فرهنگی به زبان انگلیسی نیز ارائه می‌دهد. به منظور شرکت در این برنامه‌ها برگهٔ زیر را کامل کنید.',
titleEn:"Fill out the registration form for the Educational Center's summer program.",
formTitle:'Educational Center — Registration Form',
fields:[
{label:'First name'},
{label:'Last name'},
{label:"Father's name"},
{label:'Age'},
{label:'E-mail address'},
{label:'Mobile phone number'},
{label:'Home address (No, Street)'},
{label:'Home telephone number'},
{label:'Favorite class time'},
{label:'Hobbies and Free time activities'}
]
},
{
type:'people-info',
section:'Writing',
title:'دبیر زبان انگلیسی کاربرگی به شما ارائه کرده که سرگرمی‌ها و فعّالیت‌های اوقات فراغت خود و اعضای گروه‌تان را بنویسید.',
titleEn:"Write your group members' hobbies and free time activities.",
columns:['Group members','Hobbies','Free time activities'],
rows:3,
firstRow:'1. You'
},
{
type:'security-questions',
section:'Writing',
title:'به وبگاهی مراجعه کرده‌اید که برای ورود، از شما نام کاربری و گذرواژه می‌خواهد. برای ثبت‌نام، لازم است سؤالاتی را پاسخ دهید تا در صورت فراموشی گذرواژه، از طریق پاسخ به سؤالات، وارد وبگاه شوید. به این سؤالات پاسخ دهید.',
titleEn:"Answer these security questions for your website registration.",
questions:[
"What's your favorite food?",
"What's your hobby?",
'What do you do in your free time?'
]
},
{
type:'brainstorm-hobby',
section:'Writing',
title:'معلم زبان انگلیسی خواسته تا چند جمله کوتاه درباره موارد سرگرمی و پر کردن اوقات فراغت خود بنویسید. اما قبل از نوشتن لازم است از طریق بارش فکری، جدول زیر را پر کنید.',
titleEn:"Brainstorm your hobbies and free time activities. Fill in the table, then write short sentences.",
promptCells:[
{label:'Hobbies', placeholder:'مثلاً: reading, playing tennis...'},
{label:'Free time activities', placeholder:'مثلاً: watching movies, walking...'},
{label:'When (time)', placeholder:'مثلاً: weekends, after school...'},
{label:'With whom', placeholder:'مثلاً: family, friends...'}
],
finalPrompt:'حالا با استفاده از موارد بالا، ۳-۵ جمله بنویس:',
sentenceRows:5
}
],
quiz: [
{q:"What's your _____? — Playing tennis.",qFa:'سرگرمی‌ات چیه؟',options:['hobby','sport','game','work'],correct:0},
{q:'I _____ go to the gym in my free time.',qFa:'تو وقت آزادم معمولاً به باشگاه می‌رم.',options:['always','usually','never','sometimes'],correct:1},
{q:'Do you have _____ hobbies?',qFa:'سرگرمی داری؟',options:['some','any','many','no'],correct:1},
{q:'I love _____ books and magazines.',qFa:'کتاب و مجله خوندن دوست دارم.',options:['read','reading','reads','to reading'],correct:1},
{q:'_____ about you?',qFa:'تو چطور؟',options:['What','How','When','Why'],correct:1},
{q:"How do you say I-N-G in 'reading'? — _____",qFa:'صدای I-N-G در reading چطوره؟',options:['/ɪŋɡ/','/ɪŋ/','/ɪnɡ/','/aɪŋ/'],correct:1}
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
summary:'این مرور تو رو با ساختار "Check if" در پایه هشتم آشنا می‌کنه. به ازای هر مهارت، چند جمله نمونه با جای خالی هست که باید کامل کنی تا مطمئن بشی اون مهارت رو بلدی.',
summaryItems: [
{icon:'🌍',title:'ملیت‌ها',desc:'I\'m... / I am from... / Where are...?'},
{icon:'📅',title:'فعالیت‌های روزانه',desc:'I... in the... / What do you...?'},
{icon:'🔤',title:'املا و تلفظ',desc:'Countries, Nationalities, Days, letters'},
{icon:'📚',title:'سبک کتاب',desc:'الگوها مستقیماً از کتاب درسی پایه ۸'}
],
sections: [
{
title: 'Talking about Nationalities',
titleFa: 'صحبت درباره ملیت‌ها',
color: '#FFD4B8',
items: [
{ask:"a) you can say what your nationality is.",askFa:'الف) می‌تونی ملیتت رو بگی.',template:"I'm _____ .\nI am from _____ .",inputs:2,placeholder1:'e.g., Iranian',placeholder2:'e.g., Tehran, Iran'},
{ask:"b) you can ask about other people's nationalities.",askFa:'ب) می‌تونی درباره ملیت دیگران بپرسی.',template:'Where are _____ ?\nAre you _____ ?',inputs:2,placeholder1:'you from',placeholder2:'Iranian'}
]
},
{
title: 'Talking about Daily Activities',
titleFa: 'صحبت درباره فعالیت‌های روزانه',
color: '#C5DCF5',
items: [
{ask:"a) you can say what you do in the week.",askFa:'الف) می‌تونی بگی توی هفته چی‌کار می‌کنی.',template:'I _____ in the _____ .\nI _____ on _____ .',inputs:4,placeholder1:'go to school',placeholder2:'morning',placeholder3:'play football',placeholder4:'Fridays'},
{ask:"b) you can ask other people about their week.",askFa:'ب) می‌تونی از دیگران درباره هفته‌شون بپرسی.',template:'What do you _____ ?\nWhen do you _____ ?',inputs:2,placeholder1:'do on Fridays',placeholder2:'go to school'}
]
},
{
title: 'Spelling and Pronunciation',
titleFa: 'املا و تلفظ',
color: '#FCEBC9',
items: [
{ask:"a) you can write the names of 5 countries and their nationalities.",askFa:'الف) می‌تونی نام ۵ کشور و ملیت آن‌ها رو بنویسی.',type:'pairs-list',leftLabel:'Country',rightLabel:'Nationality',rows:5},
{ask:"b) you can write the days of the week.",askFa:'ب) می‌تونی روزهای هفته رو بنویسی.',type:'list',rows:7,placeholder:'e.g., Saturday'},
{ask:"c) you can say and write one word for each of the following sounds.",askFa:'ج) می‌تونی برای هر یک از صداهای زیر یک کلمه بنویسی.',type:'sounds-list',sounds:['ch','sh','fr','sp','br','st','ee','ay']}
]
}
]
},
{
num:2,
title:'Review 2',
covers:'Lessons 3-4',
description:'مرور درس‌های ۳ و ۴',
summary:'این مرور درباره توانایی‌ها و مشکلات سلامتی هست — موضوعاتی که در درس‌های ۳ و ۴ یاد گرفتی.',
summaryItems: [
{icon:'💪',title:'توانایی‌ها',desc:"I'm good at... / I can... / Can you...?"},
{icon:'🤒',title:'مشکلات سلامتی',desc:'I have... / What\'s wrong?'},
{icon:'💊',title:'توصیه',desc:"Why don't you...? / You should..."},
{icon:'🔤',title:'املا و تلفظ',desc:'health words, letter clusters'}
],
sections: [
{
title: 'Talking about Abilities',
titleFa: 'صحبت درباره توانایی‌ها',
color: '#E0E0FA',
items: [
{ask:"a) you can say what abilities you have.",askFa:'الف) می‌تونی توانایی‌هات رو بگی.',template:"I'm good at _____ .\nI can _____ .",inputs:2,placeholder1:'football',placeholder2:'swim'},
{ask:"b) you can ask other people about their abilities.",askFa:'ب) می‌تونی درباره توانایی دیگران بپرسی.',template:'Are you good _____ ?\nCan you _____ ?\nWho can _____ ?',inputs:3,placeholder1:'at math',placeholder2:'ride a bike',placeholder3:'speak English'}
]
},
{
title: 'Talking about Health Problems',
titleFa: 'صحبت درباره مشکلات سلامتی',
color: '#FFD4B8',
items: [
{ask:"a) you can say what health problems you may have.",askFa:'الف) می‌تونی مشکلات سلامتی‌ات رو بگی.',template:'I have _____ .',inputs:1,placeholder1:'a headache'},
{ask:"b) you can ask other people about their health problems.",askFa:'ب) می‌تونی از دیگران درباره مشکلات سلامتی‌شون بپرسی.',template:'Are you _____ ?\nWhat\'s _____ ?',inputs:2,placeholder1:'OK',placeholder2:'wrong'},
{ask:"c) you can give health advice to other people.",askFa:'ج) می‌تونی به دیگران توصیه سلامتی بدی.',template:"Why don't you _____ ?\nYou should _____ .",inputs:2,placeholder1:'rest',placeholder2:'see a doctor'}
]
},
{
title: 'Spelling and Pronunciation',
titleFa: 'املا و تلفظ',
color: '#C8E6C9',
items: [
{ask:"a) you can write the names of 5 health problems.",askFa:'الف) می‌تونی نام ۵ مشکل سلامتی رو بنویسی.',type:'list',rows:5,placeholder:'e.g., headache'},
{ask:"b) you can say and write one word for each of the following sounds.",askFa:'ب) می‌تونی برای هر یک از صداهای زیر یک کلمه بنویسی.',type:'sounds-list',sounds:['oo','ll','pl','sw','ch','ea']}
]
}
]
},
{
num:3,
title:'Review 3',
covers:'Lessons 5-7',
description:'مرور درس‌های ۵ تا ۷',
summary:'این مرور درباره شهر، روستا، آب و هوا، سرگرمی‌ها و اوقات فراغت هست.',
summaryItems: [
{icon:'🏙️',title:'شهر',desc:'It is... / It\'s famous for... / There is/are...'},
{icon:'🏡',title:'روستا',desc:'It is in (Fars)... / What is...?'},
{icon:'🌦️',title:'آب و هوا',desc:'It is... / What is the weather like?'},
{icon:'🎨',title:'سرگرمی‌ها',desc:'I... / What is your hobby?'},
{icon:'🎮',title:'اوقات فراغت',desc:"I... / What do you do in your free time?"},
{icon:'🗺️',title:'املا',desc:'مکان‌های ایران روی نقشه'}
],
sections: [
{
title: 'Talking about a Place (City)',
titleFa: 'صحبت درباره مکان (شهر)',
color: '#FFE4B5',
items: [
{ask:"a) you can say what your city is like.",askFa:'الف) می‌تونی بگی شهرت چه‌جوریه.',template:'It is _____ .\nIt is famous for _____ .',inputs:2,placeholder1:'a big city',placeholder2:'its bazaar'},
{ask:"b) you can say where a city is on the map.",askFa:'ب) می‌تونی بگی شهر کجای نقشه‌ست.',template:"It's in _____ .",inputs:1,placeholder1:'the north of Iran'},
{ask:"c) you can say what there are in your city.",askFa:'ج) می‌تونی بگی توی شهرت چی هست.',template:'There is _____ .\nThere are _____ .',inputs:2,placeholder1:'a museum',placeholder2:'many parks'},
{ask:"d) you can ask other people about their cities.",askFa:'د) می‌تونی از دیگران درباره شهرشون بپرسی.',template:'What is _____ ?\nIs there _____ ?\nAre there _____ ?',inputs:3,placeholder1:'your city like',placeholder2:'a park',placeholder3:'many schools'}
]
},
{
title: 'Talking about a Place (Village)',
titleFa: 'صحبت درباره مکان (روستا)',
color: '#C8E6C9',
items: [
{ask:"a) you can say where a village is.",askFa:'الف) می‌تونی بگی روستا کجاست.',template:'_____ is in (Fars) .\n_____ is near _____ .',inputs:3,placeholder1:'Pasargad',placeholder2:'My village',placeholder3:'Shiraz'},
{ask:"b) you can describe a village.",askFa:'ب) می‌تونی روستا رو توصیف کنی.',template:'It is _____ .\nIt is famous for _____ .\nThere is _____ .\nThere are _____ .',inputs:4,placeholder1:'a beautiful village',placeholder2:'its flowers',placeholder3:'a river',placeholder4:'many trees'},
{ask:"c) you can ask where a village is.",askFa:'ج) می‌تونی بپرسی روستا کجاست.',template:'Where is _____ ?',inputs:1,placeholder1:'your village'},
{ask:"d) you can ask others to describe a village.",askFa:'د) می‌تونی از دیگران بخوای روستا رو توصیف کنن.',template:'What is _____ ?',inputs:1,placeholder1:'your village like'}
]
},
{
title: 'Talking about the Weather',
titleFa: 'صحبت درباره آب و هوا',
color: '#E0E0FA',
items: [
{ask:"a) you can say what the weather is like in your place.",askFa:'الف) می‌تونی بگی آب و هوای شهرت چطوریه.',template:'It is _____ .',inputs:1,placeholder1:'sunny and hot'},
{ask:"b) you can ask other people about the weather.",askFa:'ب) می‌تونی از دیگران درباره آب و هوا بپرسی.',template:'What is the _____ ?\nIs it _____ ?',inputs:2,placeholder1:'weather like',placeholder2:'cold today'}
]
},
{
title: 'Talking about Hobbies',
titleFa: 'صحبت درباره سرگرمی‌ها',
color: '#FFD4B8',
items: [
{ask:"a) you can say what hobbies you have.",askFa:'الف) می‌تونی سرگرمی‌هات رو بگی.',template:'I _____ .',inputs:1,placeholder1:'paint pictures'},
{ask:"b) you can ask other people about their hobbies.",askFa:'ب) می‌تونی از دیگران درباره سرگرمی‌هاشون بپرسی.',template:'What is your _____ ?\nDo you _____ ?\nWhat do you _____ ?',inputs:3,placeholder1:'hobby',placeholder2:'play chess',placeholder3:'like to do'}
]
},
{
title: 'Talking about Free Time Activities',
titleFa: 'صحبت درباره فعالیت‌های اوقات فراغت',
color: '#FAD0E1',
items: [
{ask:"a) you can say what you do in your free time.",askFa:'الف) می‌تونی بگی در اوقات فراغت چی‌کار می‌کنی.',template:'I _____ .',inputs:1,placeholder1:'read books'},
{ask:"b) you can ask other people about their free time.",askFa:'ب) می‌تونی از دیگران درباره اوقات فراغتشون بپرسی.',template:'What do you _____ ?\nWhat do you like _____ ?',inputs:2,placeholder1:'do in your free time',placeholder2:'to do'}
]
},
{
title: 'Spelling and Pronunciation',
titleFa: 'املا و تلفظ',
color: '#FCEBC9',
items: [
{ask:"a) you can write the geographical position of 5 places on the map of Iran.",askFa:'الف) می‌تونی موقعیت جغرافیایی ۵ مکان روی نقشه ایران رو بنویسی.',type:'pairs-list',leftLabel:'Place',rightLabel:'Position',rows:5}
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
