const WORD_DICT = {
hi:{pos:'interj',ipa:'/haɪ/',fa:'سلام (غیررسمی)'},
hello:{pos:'interj',ipa:'/həˈloʊ/',fa:'سلام'},
class:{pos:'noun',ipa:'/klæs/',fa:'کلاس'},
teacher:{pos:'noun',ipa:'/ˈtiːtʃər/',fa:'معلم'},
thank:{pos:'verb',ipa:'/θæŋk/',fa:'تشکر کردن'},
you:{pos:'pron',ipa:'/juː/',fa:'تو، شما'},
sit:{pos:'verb',ipa:'/sɪt/',fa:'نشستن'},
down:{pos:'adv',ipa:'/daʊn/',fa:'پایین'},
please:{pos:'adv',ipa:'/pliːz/',fa:'لطفاً'},
english:{pos:'adj',ipa:'/ˈɪŋɡlɪʃ/',fa:'انگلیسی'},
name:{pos:'noun',ipa:'/neɪm/',fa:'اسم، نام'},
fine:{pos:'adj',ipa:'/faɪn/',fa:'خوب'},
thanks:{pos:'noun',ipa:'/θæŋks/',fa:'ممنون'},
great:{pos:'adj',ipa:'/ɡreɪt/',fa:'عالی'},
today:{pos:'adv',ipa:'/təˈdeɪ/',fa:'امروز'},
now:{pos:'adv',ipa:'/naʊ/',fa:'حالا'},
tell:{pos:'verb',ipa:'/tel/',fa:'گفتن'},
me:{pos:'pron',ipa:'/miː/',fa:'به من'},
your:{pos:'adj',ipa:'/jʊr/',fa:'مال تو'},
my:{pos:'adj',ipa:'/maɪ/',fa:'مال من'},
is:{pos:'verb',ipa:'/ɪz/',fa:'است'},
am:{pos:'verb',ipa:'/æm/',fa:'هستم'},
are:{pos:'verb',ipa:'/ɑːr/',fa:'هستند، هستی'},
how:{pos:'adv',ipa:'/haʊ/',fa:'چطور'},
what:{pos:'pron',ipa:'/wɒt/',fa:'چه، چی'},
good:{pos:'adj',ipa:'/ɡʊd/',fa:'خوب'},
morning:{pos:'noun',ipa:'/ˈmɔːrnɪŋ/',fa:'صبح'},
afternoon:{pos:'noun',ipa:'/ˌæftərˈnuːn/',fa:'بعد از ظهر'},
first:{pos:'adj',ipa:'/fɜːrst/',fa:'اول'},
last:{pos:'adj',ipa:'/læst/',fa:'آخر'},
spell:{pos:'verb',ipa:'/spel/',fa:'هجی کردن'},
do:{pos:'verb',ipa:'/duː/',fa:'انجام دادن'},
mr:{pos:'noun',ipa:'/ˈmɪstər/',fa:'آقای'},
mrs:{pos:'noun',ipa:'/ˈmɪsɪz/',fa:'خانم (متأهل)'},
miss:{pos:'noun',ipa:'/mɪs/',fa:'دوشیزه'},
boy:{pos:'noun',ipa:'/bɔɪ/',fa:'پسر'},
girl:{pos:'noun',ipa:'/ɡɜːrl/',fa:'دختر'},
man:{pos:'noun',ipa:'/mæn/',fa:'مرد'},
woman:{pos:'noun',ipa:'/ˈwʊmən/',fa:'زن'},
friend:{pos:'noun',ipa:'/frend/',fa:'دوست'},
classmate:{pos:'noun',ipa:'/ˈklæsmeɪt/',fa:'همکلاسی'},
this:{pos:'pron',ipa:'/ðɪs/',fa:'این'},
that:{pos:'pron',ipa:'/ðæt/',fa:'آن'},
who:{pos:'pron',ipa:'/huː/',fa:'چه کسی'},
nice:{pos:'adj',ipa:'/naɪs/',fa:'خوب، دلپذیر'},
meet:{pos:'verb',ipa:'/miːt/',fa:'ملاقات کردن'},
too:{pos:'adv',ipa:'/tuː/',fa:'هم، نیز'},
can:{pos:'verb',ipa:'/kæn/',fa:'توانستن'},
help:{pos:'verb',ipa:'/help/',fa:'کمک کردن'},
sorry:{pos:'adj',ipa:'/ˈsɒri/',fa:'ببخشید'},
again:{pos:'adv',ipa:'/əˈɡen/',fa:'دوباره'},
age:{pos:'noun',ipa:'/eɪdʒ/',fa:'سن'},
birthday:{pos:'noun',ipa:'/ˈbɜːrθdeɪ/',fa:'تولد'},
old:{pos:'adj',ipa:'/oʊld/',fa:'قدیمی، سن دار'},
years:{pos:'noun',ipa:'/jɪrz/',fa:'سال‌ها'},
when:{pos:'adv',ipa:'/wen/',fa:'چه زمان'},
happy:{pos:'adj',ipa:'/ˈhæpi/',fa:'خوشحال'},
really:{pos:'adv',ipa:'/ˈriːəli/',fa:'واقعاً'},
say:{pos:'verb',ipa:'/seɪ/',fa:'گفتن'},
in:{pos:'prep',ipa:'/ɪn/',fa:'در'},
family:{pos:'noun',ipa:'/ˈfæməli/',fa:'خانواده'},
mother:{pos:'noun',ipa:'/ˈmʌðər/',fa:'مادر'},
father:{pos:'noun',ipa:'/ˈfɑːðər/',fa:'پدر'},
sister:{pos:'noun',ipa:'/ˈsɪstər/',fa:'خواهر'},
brother:{pos:'noun',ipa:'/ˈbrʌðər/',fa:'برادر'},
uncle:{pos:'noun',ipa:'/ˈʌŋkəl/',fa:'عمو، دایی'},
aunt:{pos:'noun',ipa:'/ænt/',fa:'عمه، خاله'},
job:{pos:'noun',ipa:'/dʒɒb/',fa:'شغل'},
mechanic:{pos:'noun',ipa:'/məˈkænɪk/',fa:'مکانیک'},
doctor:{pos:'noun',ipa:'/ˈdɒktər/',fa:'دکتر'},
nurse:{pos:'noun',ipa:'/nɜːrs/',fa:'پرستار'},
housewife:{pos:'noun',ipa:'/ˈhaʊswaɪf/',fa:'خانه‌دار'},
dentist:{pos:'noun',ipa:'/ˈdentɪst/',fa:'دندان‌پزشک'},
pilot:{pos:'noun',ipa:'/ˈpaɪlət/',fa:'خلبان'},
driver:{pos:'noun',ipa:'/ˈdraɪvər/',fa:'راننده'},
picture:{pos:'noun',ipa:'/ˈpɪktʃər/',fa:'عکس، تصویر'},
shopkeeper:{pos:'noun',ipa:'/ˈʃɒpkiːpər/',fa:'فروشنده'},
write:{pos:'verb',ipa:'/raɪt/',fa:'نوشتن'},
for:{pos:'prep',ipa:'/fɔːr/',fa:'برای'},
tall:{pos:'adj',ipa:'/tɔːl/',fa:'قدبلند'},
short:{pos:'adj',ipa:'/ʃɔːrt/',fa:'کوتاه'},
young:{pos:'adj',ipa:'/jʌŋ/',fa:'جوان'},
suit:{pos:'noun',ipa:'/suːt/',fa:'کت و شلوار'},
shirt:{pos:'noun',ipa:'/ʃɜːrt/',fa:'پیراهن'},
jacket:{pos:'noun',ipa:'/ˈdʒækɪt/',fa:'کاپشن، ژاکت'},
trousers:{pos:'noun',ipa:'/ˈtraʊzərz/',fa:'شلوار'},
pants:{pos:'noun',ipa:'/pænts/',fa:'شلوار'},
manteau:{pos:'noun',ipa:'/mænˈtoʊ/',fa:'مانتو'},
scarf:{pos:'noun',ipa:'/skɑːrf/',fa:'روسری'},
chador:{pos:'noun',ipa:'/tʃɑːˈdɔːr/',fa:'چادر'},
shoes:{pos:'noun',ipa:'/ʃuːz/',fa:'کفش‌ها'},
gloves:{pos:'noun',ipa:'/ɡlʌvz/',fa:'دستکش‌ها'},
black:{pos:'adj',ipa:'/blæk/',fa:'سیاه'},
white:{pos:'adj',ipa:'/waɪt/',fa:'سفید'},
red:{pos:'adj',ipa:'/red/',fa:'قرمز'},
blue:{pos:'adj',ipa:'/bluː/',fa:'آبی'},
yellow:{pos:'adj',ipa:'/ˈjeloʊ/',fa:'زرد'},
green:{pos:'adj',ipa:'/ɡriːn/',fa:'سبز'},
brown:{pos:'adj',ipa:'/braʊn/',fa:'قهوه‌ای'},
gray:{pos:'adj',ipa:'/ɡreɪ/',fa:'خاکستری'},
orange:{pos:'adj',ipa:'/ˈɒrɪndʒ/',fa:'نارنجی'},
pink:{pos:'adj',ipa:'/pɪŋk/',fa:'صورتی'},
wear:{pos:'verb',ipa:'/wer/',fa:'پوشیدن'},
which:{pos:'pron',ipa:'/wɪtʃ/',fa:'کدام'},
house:{pos:'noun',ipa:'/haʊs/',fa:'خانه'},
room:{pos:'noun',ipa:'/ruːm/',fa:'اتاق'},
bedroom:{pos:'noun',ipa:'/ˈbedruːm/',fa:'اتاق خواب'},
kitchen:{pos:'noun',ipa:'/ˈkɪtʃən/',fa:'آشپزخانه'},
garage:{pos:'noun',ipa:'/ɡəˈrɑːʒ/',fa:'گاراژ'},
office:{pos:'noun',ipa:'/ˈɒfɪs/',fa:'اداره، دفتر'},
lunch:{pos:'noun',ipa:'/lʌntʃ/',fa:'ناهار'},
hand:{pos:'noun',ipa:'/hænd/',fa:'دست'},
cook:{pos:'verb',ipa:'/kʊk/',fa:'پختن'},
wash:{pos:'verb',ipa:'/wɒʃ/',fa:'شستن'},
watch:{pos:'verb',ipa:'/wɒtʃ/',fa:'تماشا کردن'},
play:{pos:'verb',ipa:'/pleɪ/',fa:'بازی کردن'},
read:{pos:'verb',ipa:'/riːd/',fa:'خواندن'},
study:{pos:'verb',ipa:'/ˈstʌdi/',fa:'مطالعه کردن'},
work:{pos:'verb',ipa:'/wɜːrk/',fa:'کار کردن'},
come:{pos:'verb',ipa:'/kʌm/',fa:'آمدن'},
fix:{pos:'verb',ipa:'/fɪks/',fa:'تعمیر کردن'},
call:{pos:'verb',ipa:'/kɔːl/',fa:'صدا کردن، تماس گرفتن'},
where:{pos:'adv',ipa:'/wer/',fa:'کجا'},
doing:{pos:'verb',ipa:'/ˈduːɪŋ/',fa:'انجام دادن (در حال)'},
pardon:{pos:'noun',ipa:'/ˈpɑːrdən/',fa:'ببخشید'},
address:{pos:'noun',ipa:'/əˈdres/',fa:'آدرس'},
home:{pos:'noun',ipa:'/hoʊm/',fa:'خانه'},
street:{pos:'noun',ipa:'/striːt/',fa:'خیابان'},
telephone:{pos:'noun',ipa:'/ˈteləfoʊn/',fa:'تلفن'},
number:{pos:'noun',ipa:'/ˈnʌmbər/',fa:'شماره'},
mobile:{pos:'noun',ipa:'/ˈmoʊbəl/',fa:'موبایل'},
go:{pos:'verb',ipa:'/ɡoʊ/',fa:'رفتن'},
live:{pos:'verb',ipa:'/lɪv/',fa:'زندگی کردن'},
visit:{pos:'verb',ipa:'/ˈvɪzɪt/',fa:'دیدار کردن'},
time:{pos:'noun',ipa:'/taɪm/',fa:'زمان، وقت'},
oclock:{pos:'noun',ipa:'/əˈklɒk/',fa:'ساعت (دقیقاً)'},
evening:{pos:'noun',ipa:'/ˈiːvnɪŋ/',fa:'عصر، شب'},
food:{pos:'noun',ipa:'/fuːd/',fa:'غذا'},
drink:{pos:'noun',ipa:'/drɪŋk/',fa:'نوشیدنی'},
hungry:{pos:'adj',ipa:'/ˈhʌŋɡri/',fa:'گرسنه'},
thirsty:{pos:'adj',ipa:'/ˈθɜːrsti/',fa:'تشنه'},
favorite:{pos:'adj',ipa:'/ˈfeɪvərɪt/',fa:'مورد علاقه'},
bread:{pos:'noun',ipa:'/bred/',fa:'نان'},
rice:{pos:'noun',ipa:'/raɪs/',fa:'برنج'},
kebab:{pos:'noun',ipa:'/kəˈbɑːb/',fa:'کباب'},
chicken:{pos:'noun',ipa:'/ˈtʃɪkɪn/',fa:'مرغ'},
salad:{pos:'noun',ipa:'/ˈsæləd/',fa:'سالاد'},
fruit:{pos:'noun',ipa:'/fruːt/',fa:'میوه'},
juice:{pos:'noun',ipa:'/dʒuːs/',fa:'آبمیوه'},
dates:{pos:'noun',ipa:'/deɪts/',fa:'خرما'},
cake:{pos:'noun',ipa:'/keɪk/',fa:'کیک'},
milk:{pos:'noun',ipa:'/mɪlk/',fa:'شیر'},
tea:{pos:'noun',ipa:'/tiː/',fa:'چای'},
water:{pos:'noun',ipa:'/ˈwɔːtər/',fa:'آب'},
jelly:{pos:'noun',ipa:'/ˈdʒeli/',fa:'ژله'},
quince:{pos:'noun',ipa:'/kwɪns/',fa:'به (میوه)'},
coconut:{pos:'noun',ipa:'/ˈkoʊkənʌt/',fa:'نارگیل'},
zucchini:{pos:'noun',ipa:'/zuːˈkiːni/',fa:'کدو سبز'},
feel:{pos:'verb',ipa:'/fiːl/',fa:'احساس کردن'},
like:{pos:'verb',ipa:'/laɪk/',fa:'دوست داشتن'},
enough:{pos:'adj',ipa:'/ɪˈnʌf/',fa:'کافی'},
some:{pos:'det',ipa:'/sʌm/',fa:'مقداری'},
about:{pos:'prep',ipa:'/əˈbaʊt/',fa:'درباره'}
};
const PHRASE_DICT = {
'good morning':{ipa:'/ɡʊd ˈmɔːrnɪŋ/',fa:'صبح بخیر',type:'official'},
'good afternoon':{ipa:'/ɡʊd ˌæftərˈnuːn/',fa:'عصر بخیر',type:'official'},
'first name':{ipa:'/fɜːrst neɪm/',fa:'نام کوچک',type:'official'},
'last name':{ipa:'/læst neɪm/',fa:'نام خانوادگی',type:'official'},
'how are you':{ipa:'/haʊ ɑːr juː/',fa:'حالت چطوره؟',type:'official'},
'thank you':{ipa:'/θæŋk juː/',fa:'متشکرم',type:'official'},
'sit down':{ipa:'/sɪt daʊn/',fa:'بنشین',type:'official'},
'my name':{ipa:'/maɪ neɪm/',fa:'اسم من',type:'common'},
"what's your name":{ipa:'/wɒts jʊr neɪm/',fa:'اسمت چیه؟',type:'common'},
'nice to meet you':{ipa:'/naɪs tə miːt juː/',fa:'از دیدنت خوشحالم',type:'official'},
'how old':{ipa:'/haʊ oʊld/',fa:'چند ساله',type:'common'},
'years old':{ipa:'/jɪrz oʊld/',fa:'ساله',type:'common'},
'happy birthday':{ipa:'/ˈhæpi ˈbɜːrθdeɪ/',fa:'تولدت مبارک',type:'official'},
'living room':{ipa:'/ˈlɪvɪŋ ruːm/',fa:'اتاق نشیمن',type:'official'},
'cell phone':{ipa:'/sel foʊn/',fa:'تلفن همراه',type:'official'}
};
const LESSONS = [
{
num: 1,
title: 'My Name',
titleFa: 'نام من',
function: 'Introducing yourself, Greeting',
functionFa: 'معرفی خود و احوال‌پرسی',
sounds: ['Aa', 'Kk', 'Mm'],
duration: 20,
color: '#FFE0B5',
conversation: {
desc: 'به مکالمه‌ی معلم انگلیسی هنگام احوال‌پرسی با دانش‌آموزانش گوش دهید.',
descEn: 'Listen to the English teacher greeting his students in class.',
lines: [
{
speaker: 'Teacher',
role: 'teacher',
en: 'Hi, class!',
fa: 'سلام، بچه‌ها!'
},
{
speaker: 'Students',
role: 'student',
en: 'Hello, Teacher.',
fa: 'سلام، استاد.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Thank you, sit down, please. I\'m your English teacher. My name is Ahmad Karimi.',
fa: 'ممنون، لطفاً بنشینید. من معلم انگلیسی شما هستم. اسمم احمد کریمی است.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Now, you tell me your names. What\'s your name?',
fa: 'حالا، شما اسم‌هاتون رو به من بگید. اسم تو چیه؟'
},
{
speaker: 'Student 1',
role: 'student',
en: 'My name is Ali Mohammadi.',
fa: 'اسم من علی محمدی است.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'How are you, Ali?',
fa: 'حالت چطوره، علی؟'
},
{
speaker: 'Student 1',
role: 'student',
en: 'Fine, thank you.',
fa: 'خوبم، ممنون.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'And what\'s your name?',
fa: 'و اسم تو چیه؟'
},
{
speaker: 'Student 2',
role: 'student',
en: 'My name is ......... .',
fa: 'اسم من ......... .'
}
]
},
practices: [
{
title: 'Practice 1 — Greeting',
titleFa: 'احوال‌پرسی',
desc: 'Listen to the examples. Then ask and answer with a classmate/your teacher.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک هم‌کلاسی/معلم خود سؤال و جواب کنید.',
pairs: [
{
q: 'Hi, Ali.',
a: 'Hi, Reza.',
qFa: 'سلام علی.',
aFa: 'سلام رضا.'
},
{
q: 'Hello, Maryam.',
a: 'Hello, Kimia.',
qFa: 'سلام مریم.',
aFa: 'سلام کیمیا.'
},
{
q: 'How are you?',
a: 'Fine, thanks / thank you.',
qFa: 'حالت چطوره؟',
aFa: 'خوبم، ممنون.'
},
{
q: 'How are you today?',
a: 'Great, thanks.',
qFa: 'امروز چطوری؟',
aFa: 'عالی، ممنون.'
},
{
q: 'Good morning.',
a: 'Good morning, Mrs. Azari.',
qFa: 'صبح بخیر.',
aFa: 'صبح بخیر، خانم آذری.'
},
{
q: 'Good afternoon.',
a: 'Good afternoon, Miss Moniri.',
qFa: 'بعدازظهر بخیر.',
aFa: 'بعدازظهر بخیر، دوشیزه منیری.'
},
{
q: 'Good morning.',
a: 'Good morning, Mr. Ahmadi.',
qFa: 'صبح بخیر.',
aFa: 'صبح بخیر، آقای احمدی.'
}
]
},
{
title: 'Practice 2 — Introducing Yourself',
titleFa: 'معرفی خود',
desc: 'Listen to the examples. Then ask and answer with a classmate.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک هم‌کلاسی سؤال و جواب کنید.',
pairs: [
{
q: 'What\'s your name?',
a: 'My name\'s Ali. / I\'m Ali.',
qFa: 'اسمت چیه؟',
aFa: 'اسمم علی است. / من علی هستم.'
},
{
q: 'What\'s your first name?',
a: 'My first name is Mina.',
qFa: 'نام کوچکت چیه؟',
aFa: 'نام کوچکم مینا است.'
},
{
q: 'What\'s your last name?',
a: 'My last name is Karimi.',
qFa: 'نام خانوادگی‌ات چیه؟',
aFa: 'نام خانوادگی‌ام کریمی است.'
}
]
}
],
soundsAndLetters: {
letters: ['Aa', 'Kk', 'Mm'],
desc: 'Listen to the teacher greeting her students in class.',
descFa: 'به معلم در حال احوال‌پرسی با دانش‌آموزانش در کلاس گوش دهید.',
dialogue: [
{
speaker: 'Teacher',
en: 'Hi, class! I am Moradi, your English teacher.',
fa: 'سلام، بچه‌ها! من مرادی هستم، معلم انگلیسی شما.'
},
{
speaker: 'Class',
en: 'Hello, Mrs. Moradi.',
fa: 'سلام، خانم مرادی.'
},
{
speaker: 'Teacher',
en: 'Now you say your names one by one. You, please. What\'s your name?',
fa: 'حالا یکی‌یکی اسم‌هاتون رو بگید. شما، لطفاً. اسمت چیه؟'
},
{
speaker: 'Kimia',
en: 'I\'m Kimia Komijani.',
fa: 'من کیمیا کمیجانی هستم.'
},
{
speaker: 'Teacher',
en: 'Excuse me. How do you spell your last name?',
fa: 'ببخشید. نام خانوادگی‌ات رو چطور هجی می‌کنی؟'
},
{
speaker: 'Kimia',
en: 'Komijani, K-O-M-I-J-A-N-I.',
fa: 'کمیجانی، K-O-M-I-J-A-N-I.'
},
{
speaker: 'Teacher',
en: 'Thank you, Kimia. Now, you please say your name.',
fa: 'ممنون، کیمیا. حالا شما لطفاً اسمتون رو بگید.'
},
{
speaker: 'Student',
en: 'My name is.....',
fa: 'اسم من .......'
}
],
activity: 'Can you spell your name?',
activityFa: 'می‌تونی اسم خودت رو هجی کنی؟',
talkToTeacher: 'How do you spell ……………?'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'First Name',
labelFa: 'نام کوچک',
options: ['Mina', 'Azar', 'Kimia']
},
{
label: 'Last Name',
labelFa: 'نام خانوادگی',
options: ['Momeni', 'Ahmadi', 'Kabiri']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'First Name',
labelFa: 'نام کوچک',
options: ['Ali', 'Kamran', 'Mahdi']
},
{
label: 'Last Name',
labelFa: 'نام خانوادگی',
options: ['Mardani', 'Azari', 'Karimi']
}
]
}
],
speakingWriting: {
groupWork: {
title: 'Group Work',
instruction: 'Talk to three classmates, and fill out the table below.',
instructionFa: 'با سه نفر از همکلاسی‌هایت صحبت کن و جدول زیر را پر کن.',
cols: 3,
colHeads: ['1', '2', '3'],
rows: ['First name', 'Last name'],
rowsFa: ['نام کوچک', 'نام خانوادگی']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Do the conversation.',
lines: [
{
speaker: 'Student A',
text: 'Hi, how are you?'
},
{
speaker: 'Student B',
text: '……………………………… .'
},
{
speaker: 'Student A',
text: 'My name is ……………………… . What\'s your name?'
},
{
speaker: 'Student B',
text: '……………………………… .'
}
]
}
},
vocabulary: [
{
word: 'name',
pos: 'noun',
ipa: '/neɪm/',
fa: 'اسم، نام',
example: 'My name is Ali.'
},
{
word: 'first name',
pos: 'phrase',
ipa: '/fɜːrst neɪm/',
fa: 'نام کوچک',
example: 'My first name is Mina.'
},
{
word: 'last name',
pos: 'phrase',
ipa: '/læst neɪm/',
fa: 'نام خانوادگی',
example: 'My last name is Karimi.'
},
{
word: 'hello',
pos: 'interj',
ipa: '/həˈloʊ/',
fa: 'سلام',
example: 'Hello, Maryam!'
},
{
word: 'hi',
pos: 'interj',
ipa: '/haɪ/',
fa: 'سلام (غیررسمی)',
example: 'Hi, Ali.'
},
{
word: 'good morning',
pos: 'phrase',
ipa: '/ɡʊd ˈmɔːrnɪŋ/',
fa: 'صبح بخیر',
example: 'Good morning, Mr. Ahmadi.'
},
{
word: 'good afternoon',
pos: 'phrase',
ipa: '/ɡʊd ˌæftərˈnuːn/',
fa: 'بعدازظهر بخیر',
example: 'Good afternoon, Miss Moniri.'
},
{
word: 'how are you',
pos: 'phrase',
ipa: '/haʊ ɑːr juː/',
fa: 'حالت چطوره؟',
example: 'How are you today?'
},
{
word: 'fine',
pos: 'adj',
ipa: '/faɪn/',
fa: 'خوب',
example: 'Fine, thank you.'
},
{
word: 'thanks',
pos: 'noun',
ipa: '/θæŋks/',
fa: 'ممنون',
example: 'Great, thanks.'
},
{
word: 'thank you',
pos: 'phrase',
ipa: '/θæŋk juː/',
fa: 'متشکرم',
example: 'Fine, thank you.'
},
{
word: 'great',
pos: 'adj',
ipa: '/ɡreɪt/',
fa: 'عالی',
example: 'Great, thanks.'
},
{
word: 'class',
pos: 'noun',
ipa: '/klæs/',
fa: 'کلاس',
example: 'Hi, class!'
},
{
word: 'teacher',
pos: 'noun',
ipa: '/ˈtiːtʃər/',
fa: 'معلم',
example: 'I\'m your English teacher.'
},
{
word: 'sit down',
pos: 'phrase',
ipa: '/sɪt daʊn/',
fa: 'بنشین',
example: 'Sit down, please.'
},
{
word: 'please',
pos: 'adv',
ipa: '/pliːz/',
fa: 'لطفاً',
example: 'Sit down, please.'
},
{
word: 'spell',
pos: 'verb',
ipa: '/spel/',
fa: 'هجی کردن',
example: 'How do you spell your name?'
},
{
word: 'Mr.',
pos: 'noun',
ipa: '/ˈmɪstər/',
fa: 'آقای',
example: 'Mr. Ahmadi.'
},
{
word: 'Mrs.',
pos: 'noun',
ipa: '/ˈmɪsɪz/',
fa: 'خانم (متأهل)',
example: 'Mrs. Azari.'
},
{
word: 'Miss',
pos: 'noun',
ipa: '/mɪs/',
fa: 'دوشیزه',
example: 'Miss Moniri.'
}
],
workbook: [
{
type: 'reading-circle',
section: 'Reading',
title: 'اسامی کوچک را در متن زیر پیدا کنید و دور آن‌ها خط بکشید.',
titleEn: 'Find the first names in the text below and circle them.',
text: "Akram and Kimia are sisters. They go to Mahan School in Kerman. They like their school. They have many friends there. Akram's best friend is Mana and Kimia's best friend is Aram. Akram's English teacher is Mrs. Makani and Kimia's English teacher is Mrs. Kamali. They are both very happy at school.",
targets: ['Akram','Kimia','Mana','Aram'],
hint: 'اسامی کوچک: Akram، Kimia، Mana، Aram. (نام‌های خانوادگی Makani، Kamali و نام مدرسه/شهر شامل نمی‌شوند.)'
},
{
type: 'check-known',
section: 'Reading',
title: 'نام‌هایی را که در بین اعضای خانواده، بستگان و دوستان شما وجود دارند مشخص کنید.',
titleEn: 'Check the names that exist among your family members, relatives, and friends.',
items: ['Aram','Makan','Karam','Mana','Akram','Kamal','Ava','Kimia']
},
{
type: 'sort-girl-boy',
section: 'Writing',
title: 'خانواده‌ای به تازگی صاحب دو فرزند دیگر شده‌اند، یک پسر و یک دختر. به آن‌ها در انتخاب اسامی کوچک نوزادانشان کمک کنید و اسم موردنظر را به هر یک از موارد زیر وصل کنید.',
titleEn: 'A family has just had two new babies — a boy and a girl. Help them choose names by sorting the names below.',
names: ['Ali','Masoomeh','Kaveh','Azar','Mohammad','Kiana','Mohsen','Kimia','Mahdi','Maryam','Kamran','Alireza','Ahmad','Amir','Mahsa','Kamand','Azita','Mahmood']
},
{
type: 'id-card',
section: 'Writing',
title: 'با نوشتن نام و نام‌خانوادگی و نام مدرسه خود، کارت شناسایی زیر را تکمیل کنید.',
titleEn: 'Complete the ID card below with your name, last name, and school name.',
fields: [
{label:'School',type:'text',placeholder:'Enter your school name'},
{label:'First Name',type:'text',placeholder:'Enter your first name'},
{label:'Last Name',type:'text',placeholder:'Enter your last name'},
{label:'Grade',type:'text',value:'7',readonly:true}
]
},
{
type: 'table-fill',
section: 'Writing',
title: 'نام و نام خانوادگی سه نفر از همکلاسی‌های خود را بنویسید.',
titleEn: 'Write the first and last names of three of your classmates.',
headers: ['#','First Name','Last Name'],
rows: 3
},
{
type: 'martyr-names',
section: 'Writing',
title: 'اسامی کوچک این شهدای گران‌قدر را بنویسید.',
titleEn: 'Write the first names of these honorable martyrs.',
items: [
{label:'Shahid', placeholder:'……………………', suffix:'Motahari', answer:'Morteza'},
{label:'Shahid', placeholder:'……………………', suffix:'Rajaee', answer:'Mohammad-Ali'},
{label:'Shahid', placeholder:'……………………', suffix:'Shahriari', answer:'Majid'}
]
},
{
type: 'family-names',
section: 'Writing',
title: 'نام کوچک اعضای خانواده خود را بنویسید.',
titleEn: 'Write the first names of your family members.',
slots: 8
}
],
quiz: [
{q:'Choose the correct answer: "_____, how are you?"',qFa:'گزینه صحیح را انتخاب کنید: «..... ، حالت چطوره؟»',options:['Goodbye','Hi','Thanks','Sorry'],correct:1},
{q:'"What\'s your name?" → "_____ Ali."',qFa:'«اسمت چیه؟» → «..... علی.»',options:['Your name is','You are','My name is','Name'],correct:2},
{q:'Which one is a greeting in the morning?',qFa:'کدام یک سلام صبح است؟',options:['Good night','Goodbye','Good morning','See you'],correct:2}
]
},
{
num: 2,
title: 'My Classmates',
titleFa: 'همکلاسی‌های من',
function: 'Asking someone\'s name, Introducing others',
functionFa: 'پرسیدن نام دیگران و معرفی آن‌ها',
sounds: ['Ee', 'Bb', 'Pp'],
duration: 25,
color: '#FAD0E1',
conversation: {
desc: 'Listen to the students talking in the school yard.',
descFa: 'به مکالمه‌ی دانش‌آموزان در حیاط مدرسه گوش دهید.',
lines: [
{
speaker: 'Ali',
role: 'student',
en: 'Who is that boy?',
fa: 'اون پسر کیه؟'
},
{
speaker: 'Parham',
role: 'student',
en: 'That\'s Erfan. He\'s our new classmate.',
fa: 'اون عرفانه. همکلاسی جدید ماست.'
},
{
speaker: 'Ali',
role: 'student',
en: 'Let\'s talk to him.',
fa: 'بیا باهاش حرف بزنیم.'
},
{
speaker: 'Parham',
role: 'student',
en: 'Hi, Erfan. This is Ali.',
fa: 'سلام عرفان. این علیه.'
},
{
speaker: 'Ali',
role: 'student',
en: 'Nice to meet you, Erfan.',
fa: 'از دیدنت خوشحالم، عرفان.'
},
{
speaker: 'Erfan',
role: 'student',
en: 'Nice to meet you, too.',
fa: 'منم از دیدنت خوشحالم.'
},
{
speaker: 'Ali',
role: 'student',
en: 'Welcome to our school.',
fa: 'به مدرسه‌ی ما خوش اومدی.'
},
{
speaker: 'Erfan',
role: 'student',
en: 'Thank you.',
fa: 'ممنون.'
}
]
},
practices: [
{
title: 'Practice 1 — Introducing Others',
titleFa: 'معرفی دیگران',
desc: 'Listen to the introductions and greetings.',
descFa: 'به معرفی‌ها و احوال‌پرسی‌ها گوش دهید.',
note: '💡 در این تمرین، یک‌نفر دوستش رو معرفی می‌کنه و طرف مقابل با Nice to meet you پاسخ می‌ده. به ساختار <code>This is my [friend/classmate/teacher] [Name]</code> دقت کن.',
statements: [
{en: 'This is my friend Parham.', fa: 'این دوستم پرهامه.'},
{en: 'This is my classmate Parisa.', fa: 'این همکلاسی‌ام پریساست.'},
{en: 'This is my English teacher Mr. Kamali.', fa: 'این معلم انگلیسی‌ام آقای کمالیه.'},
{en: 'Nice to meet you.', fa: 'از دیدنت خوشحالم.'},
{en: 'Nice to meet you, too.', fa: 'منم از دیدنت خوشحالم.'}
]
},
{
title: 'Practice 2 — Asking Someone\'s Name',
titleFa: 'پرسیدن نام دیگران',
desc: 'Listen to the examples. In pairs, ask and answer about other students\' names.',
descFa: 'به مثال‌ها گوش دهید. به‌صورت دونفره، درباره نام دانش‌آموزان دیگر سؤال و جواب کنید.',
pairs: [
{
q: 'Who is that boy?',
a: 'He\'s my friend Erfan.',
qFa: 'اون پسر کیه؟',
aFa: 'دوستم عرفانه.'
},
{
q: 'Who is that girl?',
a: 'She\'s my classmate Parisa.',
qFa: 'اون دختر کیه؟',
aFa: 'همکلاسی‌ام پریساست.'
},
{
q: 'Who is that man?',
a: 'He\'s my teacher Mr. Karimi.',
qFa: 'اون آقا کیه؟',
aFa: 'معلمم آقای کریمیه.'
},
{
q: 'Who is that woman?',
a: 'She\'s my teacher Miss/Mrs. Bahrami.',
qFa: 'اون خانم کیه؟',
aFa: 'معلمم دوشیزه/خانم بهرامیه.'
}
]
}
],
soundsAndLetters: {
letters: ['Ee', 'Bb', 'Pp'],
desc: 'Listen to the conversation between a student and a librarian.',
descFa: 'به مکالمه بین یک دانش‌آموز و کتابدار گوش دهید.',
dialogue: [
{
speaker: 'Librarian',
en: 'Can I help you?',
fa: 'می‌تونم کمکت کنم؟'
},
{
speaker: 'Student',
en: 'Yes. Can I have my library card, please?',
fa: 'بله. لطفاً می‌تونم کارت کتابخانه‌ام رو بگیرم؟'
},
{
speaker: 'Librarian',
en: 'Sure. What\'s your name?',
fa: 'حتماً. اسمت چیه؟'
},
{
speaker: 'Student',
en: 'I\'m Parisa Behparvar.',
fa: 'من پریسا بهپرورم.'
},
{
speaker: 'Librarian',
en: 'Sorry, what\'s your last name again?',
fa: 'ببخشید، نام خانوادگی‌ات دوباره چی بود؟'
},
{
speaker: 'Student',
en: 'Behparvar. B-E-H-P-A-R-V-A-R.',
fa: 'بهپرور. B-E-H-P-A-R-V-A-R.'
},
{
speaker: 'Librarian',
en: 'OK. Here\'s your card.',
fa: 'خوبه. این کارتته.'
}
],
activity: 'Fill out the card below.',
activityFa: 'کارت زیر را پر کن.',
talkToTeacher: 'Can you help me, please? I can\'t spell ……… .'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'First Name',
labelFa: 'نام کوچک',
options: ['Parisa', 'Bita', 'Elaheh']
},
{
label: 'Last Name',
labelFa: 'نام خانوادگی',
options: ['Bahrami', 'Ebadi', 'Parsa']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'First Name',
labelFa: 'نام کوچک',
options: ['Babak', 'Pedram', 'Ehsan']
},
{
label: 'Last Name',
labelFa: 'نام خانوادگی',
options: ['Ehsani', 'Pakzad', 'Bakeri']
}
]
}
],
speakingWriting: {
groupWork: {
title: 'Group Work',
instruction: 'Talk to your friends and fill out the table below.',
instructionFa: 'با دوستانت صحبت کن و جدول زیر را پر کن.',
cols: 2,
colHeads: ['The Shortest Name', 'The Longest Name'],
rows: ['First name', 'Last name'],
rowsFa: ['نام کوچک', 'نام خانوادگی']
},
dialog: {
title: 'Role Play',
subtitle: 'Group Work — Do the conversation.',
lines: [
{
speaker: 'Student A',
text: 'Hi, ……………………… . This is my friend ………………… .'
},
{
speaker: 'Student B',
text: 'Hi, ……………………… . Nice to meet you.'
},
{
speaker: 'Student C',
text: 'Nice to meet you, too.'
}
]
}
},
vocabulary: [
{
word: 'boy',
pos: 'noun',
ipa: '/bɔɪ/',
fa: 'پسر',
example: 'Who is that boy?'
},
{
word: 'girl',
pos: 'noun',
ipa: '/ɡɜːrl/',
fa: 'دختر',
example: 'Who is that girl?'
},
{
word: 'man',
pos: 'noun',
ipa: '/mæn/',
fa: 'مرد',
example: 'Who is that man?'
},
{
word: 'woman',
pos: 'noun',
ipa: '/ˈwʊmən/',
fa: 'زن',
example: 'Who is that woman?'
},
{
word: 'friend',
pos: 'noun',
ipa: '/frend/',
fa: 'دوست',
example: 'He\'s my friend Erfan.'
},
{
word: 'classmate',
pos: 'noun',
ipa: '/ˈklæsmeɪt/',
fa: 'همکلاسی',
example: 'She\'s my classmate Parisa.'
},
{
word: 'this',
pos: 'pron',
ipa: '/ðɪs/',
fa: 'این',
example: 'This is my friend Ali.'
},
{
word: 'that',
pos: 'pron',
ipa: '/ðæt/',
fa: 'آن',
example: 'That\'s Erfan.'
},
{
word: 'who',
pos: 'pron',
ipa: '/huː/',
fa: 'چه کسی',
example: 'Who is that boy?'
},
{
word: 'nice to meet you',
pos: 'phrase',
ipa: '/naɪs tə miːt juː/',
fa: 'از دیدنت خوشحالم',
example: 'Nice to meet you, Erfan.'
},
{
word: 'welcome',
pos: 'interj',
ipa: '/ˈwelkəm/',
fa: 'خوش آمدی',
example: 'Welcome to our school.'
},
{
word: 'school',
pos: 'noun',
ipa: '/skuːl/',
fa: 'مدرسه',
example: 'Welcome to our school.'
},
{
word: 'new',
pos: 'adj',
ipa: '/nuː/',
fa: 'جدید',
example: 'He\'s our new classmate.'
},
{
word: 'let\'s',
pos: 'verb',
ipa: '/lets/',
fa: 'بیا...',
example: 'Let\'s talk to him.'
},
{
word: 'talk',
pos: 'verb',
ipa: '/tɔːk/',
fa: 'صحبت کردن',
example: 'Let\'s talk to him.'
},
{
word: 'librarian',
pos: 'noun',
ipa: '/laɪˈbrer.i.ən/',
fa: 'کتابدار',
example: 'The librarian helps me.'
},
{
word: 'library card',
pos: 'phrase',
ipa: '/ˈlaɪ.brer.i kɑːrd/',
fa: 'کارت کتابخانه',
example: 'Can I have my library card?'
},
{
word: 'sorry',
pos: 'adj',
ipa: '/ˈsɒri/',
fa: 'ببخشید',
example: 'Sorry, what\'s your last name again?'
},
{
word: 'again',
pos: 'adv',
ipa: '/əˈɡen/',
fa: 'دوباره',
example: 'What\'s your last name again?'
}
],
workbook: [
{
type:'group-match',
section:'Reading',
title:'در کلاس انگلیسی، دانش‌آموزان برای انجام فعالیت به چند گروه تقسیم شده‌اند و اسامی آن‌ها بر روی برگه‌ای روی تابلو به صورت زیر نصب شده است. یکی از هم‌کلاسی‌هایتان به نام «امکانیان» که غایب بوده بعد از مدرسه رایانامه‌ای داده و می‌خواهد که او را هم در جریان این موضوع بگذارید. نام گروه و اعضای دیگر را برایش ارسال کنید.',
titleEn:'In English class, students were divided into groups. Find your absent classmate "Emkanian" and tell them which group they\'re in and the other members.',
groups:[
{name:'Group A',members:['Akbari','Kameli','Maleki','Pakan','Amani']},
{name:'Group B',members:['Kamkar','Aram','Emkanian','Paknam','Behkam']},
{name:'Group C',members:['Paya','Kamali','Makani','Emadi','Bamdad']},
{name:'Group D',members:['Emami','Bakeri','Pamenari','Karimi','Makarem']}
],
targetMember:'Emkanian',
correctGroup:'Group B'
},
{
type:'check-known',
section:'Reading',
title:'نام‌های خانوادگی را که در بین بستگان، همسایگان و دوستان شما وجود دارند مشخص کنید.',
titleEn:'Check the last names that exist among your relatives, neighbors, and friends.',
items:['Behparvar','Ebadi','Babaee','Pakbaz','Babaki','Pakdaman','Ekrami','Emami']
},
{
type:'sort-alphabetical',
section:'Reading',
title:'کتابدار مدرسه از شما خواسته در مرتب نمودن کتاب‌های انگلیسی که تازه به کتابخانه رسیده به او کمک کنید. با نوشتن عدد، ترتیب آن‌ها را براساس حروف الفبا مشخص کنید.',
titleEn:'Help the school librarian sort the new English books in alphabetical order.',
items:['English Idioms in Use','Knitting','Physics','Art of Ancient Iran','Biology','Mechanics of Materials'],
correctOrder:['Art of Ancient Iran','Biology','English Idioms in Use','Knitting','Mechanics of Materials','Physics']
},
{
type:'teacher-list',
section:'Writing',
title:'نام خانوادگی سه نفر از دبیران خود را بنویسید.',
titleEn:'Write the last names of three of your teachers.',
rows:3
},
{
type:'word-builder',
section:'Writing',
title:'اسامی افراد یا کلمات انگلیسی‌ای بنویسید که حداقل شامل یکی از حروف k، m، e، b، p و a باشد.',
titleEn:'Write English names or words that contain at least one of the letters k, m, e, b, p, a.',
letters:['k','m','e','b','p','a'],
slots:4
},
{
type:'martyrs',
section:'Writing',
title:'نام خانوادگی این شهدای گران‌قدر را بنویسید.',
titleEn:'Write the last names of these honorable martyrs.',
martyrs:[
{firstName:'Shahid Mohammad',lastNameAnswer:'Beheshti'},
{firstName:'Shahid Mohammad Javad',lastNameAnswer:'Bahonar'},
{firstName:'Shahid Mohammad Ebrahim',lastNameAnswer:'Hemmat'}
]
}
],
quiz: [
{q:"Who's that boy? _____ my friend.",qFa:'«اون پسره کیه؟» — «..... دوستمه.»',options:['She is','It is','He is','You are'],correct:2},
{q:'Choose the right reply: "This is my friend, Ali."',qFa:'پاسخ درست را انتخاب کنید: «این دوستمه، علی.»',options:['Goodbye','Nice to meet you','Sorry','How old are you'],correct:1},
{q:'"_____ that woman?" — "She is my teacher."',qFa:'«اون خانم کیه؟» — «معلممه.»',options:["What's","Who's","Where's","How's"],correct:1}
]
},
{
num: 3,
title: 'My Age',
titleFa: 'سن من',
function: 'Talking about your age, Talking about dates',
functionFa: 'صحبت درباره سن و تاریخ تولد',
sounds: ['Ii', 'Tt', 'Nn'],
duration: 25,
color: '#C5DCF5',
conversation: {
desc: 'Listen to the teacher and her students talking about birthdays.',
descFa: 'به مکالمه معلم و دانش‌آموزانش درباره تولدها گوش دهید.',
lines: [
{
speaker: 'Teacher',
role: 'teacher',
en: 'Nargess, when is your birthday?',
fa: 'نرگس، تولدت کیه؟'
},
{
speaker: 'Nargess',
role: 'student',
en: 'It\'s in Mehr.',
fa: 'مهر ماه.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'Really? How old are you now?',
fa: 'واقعاً؟ الان چند سالته؟'
},
{
speaker: 'Nargess',
role: 'student',
en: 'I\'m 12.',
fa: 'دوازده سالمه.'
},
{
speaker: 'Teacher',
role: 'teacher',
en: 'What about you, Tahereh?',
fa: 'تو چطور، طاهره؟'
},
{
speaker: 'Tahereh',
role: 'student',
en: 'My birthday is in …………… .',
fa: 'تولد من در …………… .'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Your Age',
titleFa: 'صحبت درباره سن خود',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'How old are you?',
a: 'I\'m 12.',
qFa: 'چند سالته؟',
aFa: 'دوازده سالمه.'
},
{
q: 'How old are you?',
a: 'I\'m 12 years old.',
qFa: 'چند سالته؟',
aFa: 'دوازده سالمه.'
}
]
},
{
title: 'Practice 2 — Talking about Date',
titleFa: 'صحبت درباره تاریخ',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'When is your birthday?',
a: 'It\'s in Bahman.',
qFa: 'تولدت کیه؟',
aFa: 'بهمن ماهه.'
},
{
q: 'When\'s your birthday?',
a: 'In Bahman.',
qFa: 'تولدت کیه؟',
aFa: 'بهمن ماه.'
}
]
}
],
soundsAndLetters: {
letters: ['Ii', 'Tt', 'Nn'],
desc: 'Listen to the conversation between two students.',
descFa: 'به مکالمه بین دو دانش‌آموز گوش دهید.',
dialogue: [
{
speaker: 'Nader',
en: 'How old is your brother, Iman?',
fa: 'برادرت چند سالشه، ایمان؟'
},
{
speaker: 'Iman',
en: 'He\'s thirteen.',
fa: 'سیزده سالشه.'
},
{
speaker: 'Nader',
en: 'Thirty?',
fa: 'سی؟'
},
{
speaker: 'Iman',
en: 'No, thirteen, T-H-I-R-T-E-E-N.',
fa: 'نه، سیزده، T-H-I-R-T-E-E-N.'
},
{
speaker: 'Nader',
en: 'Oh, I see.',
fa: 'آها، فهمیدم.'
}
],
activities: [
{
num: 1,
text: 'Say your age and spell the number.',
textFa: 'سنت را بگو و عدد را هجی کن.'
},
{
num: 2,
text: 'Circle the month and day of your birth in the tables below.',
textFa: 'ماه و روز تولدت را در جدول‌های زیر دور بزن.'
}
],
months: ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Day', 'Bahman', 'Esfand'],
days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
talkToTeacher: 'How do you say this in English?'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'Day',
labelFa: 'روز',
options: ['11', '12', '13']
},
{
label: 'Month',
labelFa: 'ماه',
options: ['Bahman', 'Mordad', 'Azar']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'Day',
labelFa: 'روز',
options: ['15', '17', '19']
},
{
label: 'Month',
labelFa: 'ماه',
options: ['Tir', 'Day', 'Mehr']
}
]
}
],
speakingWriting: {
groupWork: {
title: 'Group Work',
instruction: 'Ask your classmates and fill out the table below.',
instructionFa: 'از همکلاسی‌هایت بپرس و جدول زیر را پر کن.',
tableHeads: ['Name', 'Age', 'Month'],
tableHeadsFa: ['نام', 'سن', 'ماه'],
sampleRow: ['Maryam', '12', 'Esfand']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Do the conversation.',
lines: [
{
speaker: 'You',
text: 'How old are you?'
},
{
speaker: 'Your friend',
text: 'I\'m ……………………… . How about you?'
},
{
speaker: 'You',
text: '……………………………… . When\'s your birthday?'
},
{
speaker: 'Your friend',
text: 'It\'s in ……………………… . What about you?'
},
{
speaker: 'You',
text: '……………………………… .'
}
]
}
},
vocabulary: [
{
word: 'age',
pos: 'noun',
ipa: '/eɪdʒ/',
fa: 'سن',
example: 'How old are you?'
},
{
word: 'birthday',
pos: 'noun',
ipa: '/ˈbɜːrθdeɪ/',
fa: 'تولد',
example: 'When\'s your birthday?'
},
{
word: 'old',
pos: 'adj',
ipa: '/oʊld/',
fa: 'پیر / دارای سن',
example: 'I\'m 12 years old.'
},
{
word: 'years old',
pos: 'phrase',
ipa: '/jɪrz oʊld/',
fa: 'سالم (در بیان سن)',
example: 'I\'m 13 years old.'
},
{
word: 'when',
pos: 'adv',
ipa: '/wen/',
fa: 'چه زمانی',
example: 'When\'s your birthday?'
},
{
word: 'how old',
pos: 'phrase',
ipa: '/haʊ oʊld/',
fa: 'چند ساله',
example: 'How old are you?'
},
{
word: 'really',
pos: 'adv',
ipa: '/ˈriːəli/',
fa: 'واقعاً',
example: 'Really? How old are you?'
},
{
word: 'happy birthday',
pos: 'phrase',
ipa: '/ˈhæpi ˈbɜːrθdeɪ/',
fa: 'تولدت مبارک',
example: 'Happy birthday, Ali!'
},
{
word: 'Farvardin',
pos: 'noun',
ipa: '/fær.værˈdiːn/',
fa: 'فروردین',
example: 'It\'s in Farvardin.'
},
{
word: 'Ordibehesht',
pos: 'noun',
ipa: '/ɔːr.di.beˈheʃt/',
fa: 'اردیبهشت',
example: 'It\'s in Ordibehesht.'
},
{
word: 'Khordad',
pos: 'noun',
ipa: '/xorˈdɑːd/',
fa: 'خرداد',
example: 'It\'s in Khordad.'
},
{
word: 'Tir',
pos: 'noun',
ipa: '/tiːr/',
fa: 'تیر',
example: 'It\'s in Tir.'
},
{
word: 'Mordad',
pos: 'noun',
ipa: '/morˈdɑːd/',
fa: 'مرداد',
example: 'It\'s in Mordad.'
},
{
word: 'Shahrivar',
pos: 'noun',
ipa: '/ʃæh.riˈvær/',
fa: 'شهریور',
example: 'It\'s in Shahrivar.'
},
{
word: 'Mehr',
pos: 'noun',
ipa: '/mehr/',
fa: 'مهر',
example: 'It\'s in Mehr.'
},
{
word: 'Aban',
pos: 'noun',
ipa: '/ɑːˈbɑːn/',
fa: 'آبان',
example: 'It\'s in Aban.'
},
{
word: 'Azar',
pos: 'noun',
ipa: '/ɑːˈzær/',
fa: 'آذر',
example: 'It\'s in Azar.'
},
{
word: 'Day',
pos: 'noun',
ipa: '/deɪ/',
fa: 'دی',
example: 'It\'s in Day.'
},
{
word: 'Bahman',
pos: 'noun',
ipa: '/bæhˈmæn/',
fa: 'بهمن',
example: 'It\'s in Bahman.'
},
{
word: 'Esfand',
pos: 'noun',
ipa: '/esˈfænd/',
fa: 'اسفند',
example: 'It\'s in Esfand.'
}
],
workbook: [
{
type:'match-line',
section:'Reading',
title:'روز تولد افراد زیر را با کشیدن خط به اعداد مرتبط متصل کنید.',
titleEn:'Match each person\'s birthday to the correct date by drawing a line.',
leftItems:['روز تولدم','روز تولد پدرم','روز تولد مادرم','روز تولد دوست صمیمی‌ام'],
rightType:'number-grid',
instruction:'تولد هر کس رو روز مناسب از این جدول وصل کن.'
},
{
type:'match-line',
section:'Reading',
title:'ماه تولد اشخاص زیر را با کشیدن خط به ماه مرتبط وصل کنید.',
titleEn:'Match each person\'s birth month to the correct month.',
leftItems:['ماه تولدم','ماه تولد پدرم','ماه تولد مادرم','ماه تولد دوست صمیمی‌ام'],
rightItems:['Farvardin','Ordibehesht','Khordad','Tir','Mordad','Shahrivar','Mehr','Aban','Azar','Dey','Bahman','Esfand']
},
{
type:'reading-circle',
section:'Reading',
title:'در متن زیر دور کلماتی که همه حروف‌شان را تاکنون آموخته‌اید خط بکشید.',
titleEn:'In the text below, circle the words whose letters you have all learned.',
text:'Matin Bateni is a student. He is ten years old. His birthday is in Aban. His father works in a bank, and his mother is a clerk in a paint company. Matin has a younger sister. Her name is Mina. They are very kind to each other.',
targets:['Matin','Bateni','is','a','ten','He','in','Aban','bank','his','an','Mina','He','name','He'],
hint:'حروف یاد گرفته تا این درس: a, k, m, e, b, p, i, t, n. کلماتی مثل Matin، Bateni، ten، in، Aban همه حروفشون از این مجموعه‌اند.'
},
{
type:'date-occasion',
section:'Writing',
title:'عدد مربوط به هر یک از مناسبت‌های زیر را به انگلیسی بنویسید.',
titleEn:'Write the date number for each of the following Iranian occasions in English.',
items:[
{occasion:'سالگرد پیروزی انقلاب اسلامی',month:'Bahman',correctDay:'22'},
{occasion:'آغاز هفته دفاع مقدس',month:'Shahrivar',correctDay:'31'},
{occasion:'روز دانش‌آموز',month:'Aban',correctDay:'13'},
{occasion:'روز جمهوری اسلامی',month:'Farvardin',correctDay:'12'},
{occasion:'سالروز آزادی خرّمشهر',month:'Khordad',correctDay:'3'},
{occasion:'روز معلّم',month:'Ordibehesht',correctDay:'12'}
]
},
{
type:'word-builder',
section:'Writing',
title:'با حروف داده شده، شش کلمه به انگلیسی بنویسید.',
titleEn:'Using the given letters, write six English words.',
letters:['a','k','m','e','b','p','i','t','n'],
slots:6
},
{
type:'people-info',
section:'Writing',
title:'جدول زیر را با اطلاعات مربوط به سه نفر از افرادی که می‌شناسید پر کنید.',
titleEn:'Fill the table with info about three people you know.',
columns:['Name','Age','Month and Day of Birth'],
rows:3
}
],
quiz: [
{q:'How _____ are you?',qFa:'چند سالته؟',options:['old','many','much','tall'],correct:0},
{q:'When _____ your birthday?',qFa:'تولدت کیه؟',options:['is','are','am','was'],correct:0},
{q:"I'm 13 _____ old.",qFa:'من ۱۳ ساله هستم.',options:['year','years','old','old years'],correct:1}
]
},
{
num: 4,
title: 'My Family',
titleFa: 'خانواده من',
function: 'Talking about your family (age, job)',
functionFa: 'صحبت درباره خانواده (سن و شغل)',
sounds: ['Uu', 'Ss', 'Gg'],
duration: 25,
color: '#D4D4D4',
conversation: {
desc: 'Listen to the students talking about their families.',
descFa: 'به مکالمه‌ی دانش‌آموزان درباره خانواده‌هاشون گوش دهید.',
lines: [
{
speaker: 'Student 1',
role: 'student',
en: 'Nice picture! Is that your father?',
fa: 'چه عکس قشنگی! اون پدرته؟'
},
{
speaker: 'Student 2',
role: 'student',
en: 'Yes, he is.',
fa: 'بله، خودشه.'
},
{
speaker: 'Student 1',
role: 'student',
en: 'How old is he?',
fa: 'چند سالشه؟'
},
{
speaker: 'Student 2',
role: 'student',
en: '38.',
fa: 'سی‌وهشت.'
},
{
speaker: 'Student 1',
role: 'student',
en: 'What\'s his job?',
fa: 'شغلش چیه؟'
},
{
speaker: 'Student 2',
role: 'student',
en: 'He\'s a mechanic.',
fa: 'مکانیکه.'
},
{
speaker: 'Student 1',
role: 'student',
en: 'And your mother?',
fa: 'و مادرت؟'
},
{
speaker: 'Student 2',
role: 'student',
en: 'She\'s 35. She is a housewife.',
fa: 'سی‌وپنج سالشه. خانه‌داره.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Your Family (Age)',
titleFa: 'صحبت درباره خانواده (سن)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'How old is your father?',
a: 'He\'s 38 (years old).',
qFa: 'پدرت چند سالشه؟',
aFa: 'سی‌وهشت سالشه.'
},
{
q: 'How old is your mother?',
a: 'She\'s 35 (years old).',
qFa: 'مادرت چند سالشه؟',
aFa: 'سی‌وپنج سالشه.'
},
{
q: 'How old is your brother?',
a: 'He\'s 14 (years old).',
qFa: 'برادرت چند سالشه؟',
aFa: 'چهارده سالشه.'
},
{
q: 'How old is your sister?',
a: 'She\'s 8 (years old).',
qFa: 'خواهرت چند سالشه؟',
aFa: 'هشت سالشه.'
},
{
q: 'How old is your uncle?',
a: 'He\'s 45 (years old).',
qFa: 'عمو/دایی‌ت چند سالشه؟',
aFa: 'چهل‌وپنج سالشه.'
},
{
q: 'How old is your aunt?',
a: 'She\'s 30 (years old).',
qFa: 'عمه/خاله‌ات چند سالشه؟',
aFa: 'سی سالشه.'
}
]
},
{
title: 'Practice 2 — Talking about Your Family (Job)',
titleFa: 'صحبت درباره خانواده (شغل)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What is your father\'s job?',
a: 'He\'s a mechanic.',
qFa: 'شغل پدرت چیه؟',
aFa: 'مکانیکه.'
},
{
q: 'What is your mother\'s job?',
a: 'She\'s a housewife.',
qFa: 'شغل مادرت چیه؟',
aFa: 'خانه‌داره.'
},
{
q: 'What is his uncle\'s job?',
a: 'He\'s a doctor.',
qFa: 'شغل عموی او چیه؟',
aFa: 'دکتره.'
},
{
q: 'What is her aunt\'s job?',
a: 'She\'s a nurse.',
qFa: 'شغل عمه‌اش چیه؟',
aFa: 'پرستاره.'
},
{
q: 'What is his job?',
a: 'He\'s a teacher.',
qFa: 'شغلش چیه؟',
aFa: 'معلمه.'
},
{
q: 'What is her job?',
a: 'She\'s a dentist.',
qFa: 'شغلش چیه؟',
aFa: 'دندانپزشکه.'
}
]
}
],
soundsAndLetters: {
letters: ['Uu', 'Ss', 'Gg'],
desc: 'Listen to the school secretary and a student talking. He\'s completing a school form for the student.',
descFa: 'به منشی مدرسه و یک دانش‌آموز در حال صحبت گوش دهید. او در حال پر کردن فرم مدرسه برای دانش‌آموز است.',
dialogue: [
{
speaker: 'School Secretary',
en: 'What\'s your father\'s name?',
fa: 'اسم پدرت چیه؟'
},
{
speaker: 'Student',
en: 'Goodarz Safari.',
fa: 'گودرز صفری.'
},
{
speaker: 'School Secretary',
en: 'How do you spell his first name?',
fa: 'نام کوچکش رو چطور هجی می‌کنی؟'
},
{
speaker: 'Student',
en: 'That\'s G-O-O-D-A-R-Z.',
fa: 'G-O-O-D-A-R-Z.'
},
{
speaker: 'School Secretary',
en: 'Thank you.',
fa: 'ممنون.'
}
],
activity: 'Say your father\'s name and spell it.',
activityFa: 'اسم پدرت رو بگو و هجی کن.',
talkToTeacher: 'Can you write it for me, please?'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'Relationship',
labelFa: 'نسبت',
options: ['brother', 'father', 'uncle']
},
{
label: 'Job',
labelFa: 'شغل',
options: ['teacher', 'dentist', 'driver']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'Relationship',
labelFa: 'نسبت',
options: ['sister', 'aunt', 'mother']
},
{
label: 'Job',
labelFa: 'شغل',
options: ['nurse', 'housewife', 'doctor']
}
]
}
],
speakingWriting: {
groupWork: {
title: 'Group Work',
instruction: 'Ask your classmates about their family members and fill out the table below.',
instructionFa: 'از همکلاسی‌هایت درباره اعضای خانواده‌شان بپرس و جدول زیر را پر کن.',
tableHeads: ['Name', 'Relationship', 'Age'],
tableHeadsFa: ['نام', 'نسبت', 'سن'],
sampleRow: ['Saeed', 'Ali\'s father', '40']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Do the conversation.',
lines: [
{
speaker: 'You',
text: 'How old is your ……………………?'
},
{
speaker: 'Your friend',
text: 'He\'s/She\'s ……………………… .'
},
{
speaker: 'You',
text: 'What\'s ……………………… job?'
},
{
speaker: 'Your friend',
text: 'He\'s/She\'s ……………………… .'
},
{
speaker: 'You',
text: 'And your ……………………?'
},
{
speaker: 'Your friend',
text: 'He\'s/She\'s …………………… and is ……………………… .'
}
]
}
},
vocabulary: [
{
word: 'family',
pos: 'noun',
ipa: '/ˈfæməli/',
fa: 'خانواده',
example: 'My family is big.'
},
{
word: 'father',
pos: 'noun',
ipa: '/ˈfɑːðər/',
fa: 'پدر',
example: 'How old is your father?'
},
{
word: 'mother',
pos: 'noun',
ipa: '/ˈmʌðər/',
fa: 'مادر',
example: 'She\'s my mother.'
},
{
word: 'brother',
pos: 'noun',
ipa: '/ˈbrʌðər/',
fa: 'برادر',
example: 'How old is your brother?'
},
{
word: 'sister',
pos: 'noun',
ipa: '/ˈsɪstər/',
fa: 'خواهر',
example: 'My sister is 8.'
},
{
word: 'uncle',
pos: 'noun',
ipa: '/ˈʌŋkəl/',
fa: 'عمو، دایی',
example: 'He\'s my uncle.'
},
{
word: 'aunt',
pos: 'noun',
ipa: '/ænt/',
fa: 'عمه، خاله',
example: 'She\'s my aunt.'
},
{
word: 'job',
pos: 'noun',
ipa: '/dʒɒb/',
fa: 'شغل',
example: 'What\'s his job?'
},
{
word: 'mechanic',
pos: 'noun',
ipa: '/məˈkænɪk/',
fa: 'مکانیک',
example: 'He\'s a mechanic.'
},
{
word: 'doctor',
pos: 'noun',
ipa: '/ˈdɒktər/',
fa: 'دکتر',
example: 'He\'s a doctor.'
},
{
word: 'nurse',
pos: 'noun',
ipa: '/nɜːrs/',
fa: 'پرستار',
example: 'She\'s a nurse.'
},
{
word: 'housewife',
pos: 'noun',
ipa: '/ˈhaʊswaɪf/',
fa: 'خانه‌دار',
example: 'She is a housewife.'
},
{
word: 'teacher',
pos: 'noun',
ipa: '/ˈtiːtʃər/',
fa: 'معلم',
example: 'He\'s a teacher.'
},
{
word: 'dentist',
pos: 'noun',
ipa: '/ˈdentɪst/',
fa: 'دندانپزشک',
example: 'She\'s a dentist.'
},
{
word: 'pilot',
pos: 'noun',
ipa: '/ˈpaɪlət/',
fa: 'خلبان',
example: 'He\'s a pilot.'
},
{
word: 'driver',
pos: 'noun',
ipa: '/ˈdraɪvər/',
fa: 'راننده',
example: 'He\'s a driver.'
},
{
word: 'picture',
pos: 'noun',
ipa: '/ˈpɪktʃər/',
fa: 'عکس، تصویر',
example: 'Nice picture!'
},
{
word: 'secretary',
pos: 'noun',
ipa: '/ˈsekrəteri/',
fa: 'منشی',
example: 'The school secretary is helpful.'
},
{
word: 'form',
pos: 'noun',
ipa: '/fɔːrm/',
fa: 'فرم',
example: 'Complete the form.'
}
],
workbook: [
{
type:'reading-circle',
section:'Reading',
title:'در متن زیر دور کلماتی که نسبت‌های خانوادگی را نشان می‌دهند خط بکشید.',
titleEn:'In the text below, circle the words that show family relationships.',
text:'There are 8 people in my family. My father is a farmer. My mother is a housewife. I have one brother and two sisters. My grandmother and grandfather also live with us.',
targets:['family','father','mother','brother','sisters','grandmother','grandfather'],
hint:'کلمات نسبت‌های خانوادگی: family, father, mother, brother, sisters, grandmother, grandfather'
},
{
type:'image-job-match',
section:'Reading',
title:'دبیر انگلیسی‌تان از شما خواسته است تا کلمات زیر را به تصاویر مرتبط وصل کنید.',
titleEn:'Your English teacher has asked you to match the words to the images.',
jobs:[
{word:'doctor',icon:'👨‍⚕️',fa:'دکتر'},
{word:'nurse',icon:'👩‍⚕️',fa:'پرستار'},
{word:'mechanic',icon:'👨‍🔧',fa:'مکانیک'},
{word:'teacher',icon:'👨‍🏫',fa:'معلم'},
{word:'dentist',icon:'🦷',fa:'دندان‌پزشک'}
]
},
{
type:'reading-questions',
section:'Reading',
title:'با استفاده از متن زیر به پرسش‌های داده شده پاسخ دهید.',
titleEn:'Use the text to answer the following questions.',
text:"Our English teacher's name is Miss Samimi. She's 23 years old. She's from Semnan. (She is an English teacher of grades seven and nine.) She has been a teacher for two years. She is a very good teacher and all students like her very much. She likes her students, too. I hope she will be our teacher again next year.",
questions:[
{q:"What is her teacher's name?",hint:'Miss Samimi'},
{q:'How old is Miss Samimi?',hint:"She's 23 years old."}
]
},
{
type:'short-answer',
section:'Writing',
title:'دبیر زبان انگلیسی شما برای مرور واژه‌های درس، موارد زیر را مطرح کرده است. پاسخ‌های خود را به انگلیسی در جای مشخص شده بنویسید.',
titleEn:'Your teacher has asked these review questions. Write English answers.',
items:[
{askFa:'از پرسش "How old are you?" برای مشخص شدن آن استفاده می‌کنیم:',hint:'a',answer:'age'},
{askFa:'خواهر پدر یا مادر شما:',hint:'a',answer:'aunt'},
{askFa:'لقبی است که قبل از نام‌خانوادگی خانم‌ها به‌کار می‌رود:',hint:'M',answer:'Mrs / Miss'},
{askFa:'علامت اختصاری «پیامک»:',hint:'S',answer:'SMS'},
{askFa:'برای پاسخ دادن به همین موارد این را انجام می‌دهید:',hint:'g',answer:'guess'}
]
},
{
type:'word-builder',
section:'Writing',
title:'با حروف داده شده شش کلمه به انگلیسی بنویسید.',
titleEn:'Using the given letters, write six English words.',
letters:['a','k','m','e','b','p','i','t','n','u','s','g'],
slots:6
},
{
type:'people-info',
section:'Writing',
title:'جدول زیر را با اطلاعات مربوط به سه نفر از بستگان خود پر کنید.',
titleEn:'Fill the table with info about three of your relatives.',
columns:['Name','Relationship','Age','Job'],
rows:3
}
],
quiz: [
{q:'My mother\'s sister is my _____.',qFa:'خواهر مادرم ..... من است.',options:['uncle','aunt','sister','brother'],correct:1},
{q:'"What\'s your father\'s _____?" — "He\'s a doctor."',qFa:'«شغل پدرت چیه؟» — «دکتره.»',options:['name','age','job','family'],correct:2},
{q:'A person who flies a plane is a _____.',qFa:'کسی که هواپیما هدایت می‌کند، ..... است.',options:['driver','pilot','doctor','nurse'],correct:1}
]
},
{
num: 5,
title: 'My Appearance',
titleFa: 'ظاهر من',
function: 'Talking about appearance (height, age, clothes, color)',
functionFa: 'صحبت درباره ظاهر (قد، سن، لباس، رنگ)',
sounds: ['Dd', 'Ll'],
duration: 25,
color: '#FFE9A8',
conversation: {
desc: 'Listen to the student and his father talking about the student\'s teachers at school.',
descFa: 'به دانش‌آموز و پدرش در حال صحبت درباره معلم‌های دانش‌آموز در مدرسه گوش دهید.',
lines: [
{
speaker: 'Father',
role: 'student',
en: 'Is that your English teacher?',
fa: 'اون معلم انگلیسی‌ته؟'
},
{
speaker: 'Student',
role: 'teacher',
en: 'No, my English teacher is the tall man. He\'s wearing a gray suit. He\'s over there.',
fa: 'نه، معلم انگلیسی‌م اون آقای قدبلنده. کت‌وشلوار خاکستری پوشیده. اونجاست.'
},
{
speaker: 'Father',
role: 'student',
en: 'And which one is your math teacher?',
fa: 'و کدوم معلم ریاضی‌ته؟'
},
{
speaker: 'Student',
role: 'teacher',
en: 'He\'s wearing a blue suit and a white shirt.',
fa: 'کت‌وشلوار آبی و پیراهن سفید پوشیده.'
},
{
speaker: 'Father',
role: 'student',
en: 'Let\'s meet your English teacher first.',
fa: 'بیا اول با معلم انگلیسی‌ت ملاقات کنیم.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Appearance (Height, Clothes, and Color)',
titleFa: 'صحبت درباره ظاهر (قد، لباس، رنگ)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Who is Mr. Davoodi?',
a: 'He\'s the tall man. He\'s wearing a gray suit.',
qFa: 'آقای داوودی کیه؟',
aFa: 'مرد قدبلنده. کت‌وشلوار خاکستری پوشیده.'
},
{
q: 'Who\'s Mrs. Lari?',
a: 'She\'s the tall woman. She\'s wearing a black chador.',
qFa: 'خانم لاری کیه؟',
aFa: 'زن قدبلنده. چادر سیاه پوشیده.'
},
{
q: 'Which one is Laleh?',
a: 'She\'s the tall girl. She\'s wearing a brown scarf.',
qFa: 'کدوم لاله است؟',
aFa: 'دختر قدبلنده. روسری قهوه‌ای پوشیده.'
},
{
q: 'Which one is Reza?',
a: 'He\'s the short boy. He\'s wearing a white shirt.',
qFa: 'کدوم رضاست؟',
aFa: 'پسر قدکوتاهه. پیراهن سفید پوشیده.'
}
]
},
{
title: 'Practice 2 — Talking about Appearance (Age, Clothes, and Color)',
titleFa: 'صحبت درباره ظاهر (سن، لباس، رنگ)',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Who is Mr. Lotfi?',
a: 'He\'s the old man. He\'s wearing a green jacket.',
qFa: 'آقای لطفی کیه؟',
aFa: 'مرد سالخورده‌ست. کاپشن سبز پوشیده.'
},
{
q: 'Who\'s Mrs. Danesh?',
a: 'She\'s the old woman. She\'s wearing a brown manteau.',
qFa: 'خانم دانش کیه؟',
aFa: 'زن سالخورده‌ست. مانتوی قهوه‌ای پوشیده.'
},
{
q: 'Which one is Dorna?',
a: 'She\'s the young girl. She\'s wearing a gray scarf.',
qFa: 'کدوم درناست؟',
aFa: 'دختر جوونه. روسری خاکستری پوشیده.'
},
{
q: 'Which one is your teacher?',
a: 'He\'s the young man. He\'s wearing a blue suit.',
qFa: 'کدوم معلمته؟',
aFa: 'مرد جوونه. کت‌وشلوار آبی پوشیده.'
}
],
visualPanel: {
title: 'Colors & Clothes — رنگ‌ها و لباس‌ها',
groups: [
{
label: 'Colors · رنگ‌ها',
type: 'colors',
items: [
{word:'blue', fa:'آبی', color:'#2D5DC4'},
{word:'red', fa:'قرمز', color:'#D32F2F'},
{word:'yellow', fa:'زرد', color:'#FBC02D'},
{word:'green', fa:'سبز', color:'#388E3C'},
{word:'brown', fa:'قهوه‌ای', color:'#795548'},
{word:'black', fa:'سیاه', color:'#212121'},
{word:'white', fa:'سفید', color:'#F5F5F5'},
{word:'gray', fa:'خاکستری', color:'#9E9E9E'},
{word:'orange', fa:'نارنجی', color:'#F57C00'},
{word:'pink', fa:'صورتی', color:'#E91E63'}
]
},
{
label: 'Clothes · لباس‌ها',
type: 'images',
items: [
{word:'shirt', fa:'پیراهن', image:'shirt.jpg'},
{word:'trousers', fa:'شلوار', image:'trousers.jpg'},
{word:'jacket', fa:'کاپشن', image:'jacket.jpg'},
{word:'suit', fa:'کت‌وشلوار', image:'suit.jpg'},
{word:'chador', fa:'چادر', image:'chador.jpg'},
{word:'manteau', fa:'مانتو', image:'manteau.jpg'},
{word:'scarf', fa:'روسری', image:'scarf.jpg'},
{word:'shoes', fa:'کفش', image:'shoes.jpg'}
]
}
]
}
}
],
soundsAndLetters: {
letters: ['Dd', 'Ll'],
desc: 'Listen to the student and her teacher talking.',
descFa: 'به دانش‌آموز و معلمش در حال صحبت گوش دهید.',
dialogue: [
{
speaker: 'Student',
en: 'Excuse me, teacher? What\'s چادر in English?',
fa: 'ببخشید، استاد؟ چادر به انگلیسی چی می‌شه؟'
},
{
speaker: 'Teacher',
en: 'Chador.',
fa: 'چادر (Chador).'
},
{
speaker: 'Student',
en: 'And دستکش?',
fa: 'و دستکش؟'
},
{
speaker: 'Teacher',
en: 'Gloves.',
fa: 'دستکش (Gloves).'
},
{
speaker: 'Student',
en: 'And how do you spell them?',
fa: 'و چطور هجی‌شون می‌کنی؟'
},
{
speaker: 'Teacher',
en: 'C-H-A-D-O-R, and G-L-O-V-E-S.',
fa: 'C-H-A-D-O-R، و G-L-O-V-E-S.'
}
],
activity: 'Now say the words for clothing items in English and spell them.',
activityFa: 'حالا لغات لباس‌ها رو به انگلیسی بگو و هجی‌شون کن.',
talkToTeacher: 'What\'s ……… in English?'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'Height',
labelFa: 'قد',
options: ['tall', 'short']
},
{
label: 'Clothes',
labelFa: 'لباس',
options: ['suit', 'T-shirt']
},
{
label: 'Color',
labelFa: 'رنگ',
options: ['brown', 'blue']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'Height',
labelFa: 'قد',
options: ['tall', 'short']
},
{
label: 'Clothes',
labelFa: 'لباس',
options: ['chador', 'manteau']
},
{
label: 'Color',
labelFa: 'رنگ',
options: ['black', 'gray']
}
]
}
],
speakingWriting: {
groupWork: {
title: 'Group Work',
instruction: 'Ask your classmates about their family members and fill out the table below.',
instructionFa: 'از همکلاسی‌هایت درباره اعضای خانواده‌شان بپرس و جدول زیر را پر کن.',
tableHeads: ['Name', 'Relationship', 'Age', 'Height'],
tableHeadsFa: ['نام', 'نسبت', 'سن', 'قد'],
sampleRow: ['Rahman', 'Ali\'s uncle', '42', 'tall']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Ask and answer with a friend about other classmates.',
lines: [
{
speaker: 'You',
text: 'Who is that ………………?'
},
{
speaker: 'Your friend',
text: 'Which one?'
},
{
speaker: 'You',
text: 'He\'s/She\'s wearing ……………………………… .'
},
{
speaker: 'Your friend',
text: 'He\'s/She\'s ……………………… .'
}
]
}
},
vocabulary: [
{
word: 'tall',
pos: 'adj',
ipa: '/tɔːl/',
fa: 'قدبلند',
example: 'He\'s the tall man.'
},
{
word: 'short',
pos: 'adj',
ipa: '/ʃɔːrt/',
fa: 'قدکوتاه',
example: 'He\'s the short boy.'
},
{
word: 'young',
pos: 'adj',
ipa: '/jʌŋ/',
fa: 'جوان',
example: 'She\'s the young girl.'
},
{
word: 'old',
pos: 'adj',
ipa: '/oʊld/',
fa: 'پیر، سالخورده',
example: 'He\'s the old man.'
},
{
word: 'wear',
pos: 'verb',
ipa: '/wer/',
fa: 'پوشیدن',
example: 'He\'s wearing a gray suit.'
},
{
word: 'wearing',
pos: 'verb',
ipa: '/ˈwerɪŋ/',
fa: 'پوشیده / در حال پوشیدن',
example: 'She\'s wearing a chador.'
},
{
word: 'suit',
pos: 'noun',
ipa: '/suːt/',
fa: 'کت و شلوار',
example: 'He\'s wearing a blue suit.'
},
{
word: 'shirt',
pos: 'noun',
ipa: '/ʃɜːrt/',
fa: 'پیراهن',
example: 'A white shirt.'
},
{
word: 'jacket',
pos: 'noun',
ipa: '/ˈdʒækɪt/',
fa: 'کاپشن، ژاکت',
example: 'A green jacket.'
},
{
word: 'trousers',
pos: 'noun',
ipa: '/ˈtraʊzərz/',
fa: 'شلوار',
example: 'Blue trousers.'
},
{
word: 'pants',
pos: 'noun',
ipa: '/pænts/',
fa: 'شلوار',
example: 'Black pants.'
},
{
word: 'chador',
pos: 'noun',
ipa: '/tʃɑːˈdɔːr/',
fa: 'چادر',
example: 'A black chador.'
},
{
word: 'manteau',
pos: 'noun',
ipa: '/mænˈtoʊ/',
fa: 'مانتو',
example: 'A brown manteau.'
},
{
word: 'scarf',
pos: 'noun',
ipa: '/skɑːrf/',
fa: 'روسری، شال',
example: 'A gray scarf.'
},
{
word: 'shoes',
pos: 'noun',
ipa: '/ʃuːz/',
fa: 'کفش',
example: 'Black shoes.'
},
{
word: 'gloves',
pos: 'noun',
ipa: '/ɡlʌvz/',
fa: 'دستکش',
example: 'I have gloves.'
},
{
word: 'red',
pos: 'adj',
ipa: '/red/',
fa: 'قرمز',
example: 'A red shirt.'
},
{
word: 'blue',
pos: 'adj',
ipa: '/bluː/',
fa: 'آبی',
example: 'A blue suit.'
},
{
word: 'yellow',
pos: 'adj',
ipa: '/ˈjeloʊ/',
fa: 'زرد',
example: 'A yellow shirt.'
},
{
word: 'green',
pos: 'adj',
ipa: '/ɡriːn/',
fa: 'سبز',
example: 'A green jacket.'
},
{
word: 'brown',
pos: 'adj',
ipa: '/braʊn/',
fa: 'قهوه‌ای',
example: 'A brown scarf.'
},
{
word: 'black',
pos: 'adj',
ipa: '/blæk/',
fa: 'سیاه',
example: 'A black chador.'
},
{
word: 'white',
pos: 'adj',
ipa: '/waɪt/',
fa: 'سفید',
example: 'A white shirt.'
},
{
word: 'gray',
pos: 'adj',
ipa: '/ɡreɪ/',
fa: 'خاکستری',
example: 'A gray suit.'
},
{
word: 'orange',
pos: 'adj',
ipa: '/ˈɒrɪndʒ/',
fa: 'نارنجی',
example: 'An orange T-shirt.'
},
{
word: 'pink',
pos: 'adj',
ipa: '/pɪŋk/',
fa: 'صورتی',
example: 'A pink scarf.'
}
],
workbook: [
{
type:'reading-circle',
section:'Reading',
title:'در متن زیر، دور کلماتی که مربوط به «پوشاک» می‌شوند، خط بکشید.',
titleEn:'In the text below, circle the words related to clothing.',
text:'In Iran, we have our special dressing style. Men usually wear suits or jackets in cold seasons, and shirts and T-shirts during spring and summer. Women wear chadors, scarves and manteaus. On cold days, both men and women wear gloves, hats and boots.',
targets:['suits','jackets','shirts','T-shirts','chadors','scarves','manteaus','gloves','hats','boots'],
hint:'کلمات پوشاک: suits, jackets, shirts, T-shirts, chadors, scarves, manteaus, gloves, hats, boots'
},
{
type:'reading-mcq',
section:'Reading',
title:'با توجه به متن زیر پاسخ صحیح را انتخاب کنید.',
titleEn:'According to the text, choose the correct answer.',
text:'Mr. Danesh is our math teacher. He is a tall man. He is wearing a gray suit, a white shirt and black shoes today. He is young. He is 25 years old. He teaches us very well. We like him very much.',
questions:[
{q:'Mr. Danesh is a _____ .',options:['mechanic','teacher','doctor'],correct:1},
{q:'Mr. Danesh is wearing a _____ suit.',options:['white','black','gray'],correct:2},
{q:'Mr. Danesh is _____ .',options:['tall','short','old'],correct:0}
]
},
{
type:'reading-circle',
section:'Reading',
title:'پدرتان قرار است به استقبال یک مهمان خارجی برود که تاکنون او را ندیده است. وی رایانامه‌ای برای شما ارسال کرده و در آن اطلاعاتی را ارائه نموده است. زیر کلمات مربوط به مشخصات ظاهری او خط بکشید.',
titleEn:'Your father is going to meet a foreign guest he has never seen. The guest has emailed about himself. Underline the words about his appearance.',
text:"Dear ......., I am very glad to see you tomorrow. My flight number is «Iran Air 344», and the arrival time at Imam Khomeini Airport will be 11:00 a.m. I am a tall young man, with black eyes. I will be wearing a gray suit and a pink shirt. I'll have a brown bag with me. See you there. Yours, .........",
targets:['tall','young','black','gray','pink','brown'],
hint:'مشخصات ظاهری: tall, young, black eyes, gray suit, pink shirt, brown bag'
},
{
type:'color-survey',
section:'Writing',
title:'در یک پرسشنامه اینترنتی از شما خواسته شده است به انگلیسی بنویسید که برای موارد زیر، چه رنگی را ترجیح می‌دهید.',
titleEn:'In an online survey, write what color you prefer for each clothing item.',
items:[
{item:'jacket',fa:'کت'},
{item:'suit',fa:'کت و شلوار'},
{item:'scarf',fa:'روسری'},
{item:'shoes',fa:'کفش'},
{item:'gloves',fa:'دستکش'},
{item:'shirt',fa:'پیراهن'},
{item:'trousers/pants',fa:'شلوار'}
]
},
{
type:'translate-list',
section:'Writing',
title:'فرض کنید عموی شما تولیدکننده و فروشنده لباس است و مشتریان خارجی هم از مغازه‌اش خرید می‌کنند. او از شما می‌خواهد برای اجناس زیر، فهرستی به انگلیسی تهیه کنید تا برای ارائه صورت‌حساب به خریداران خارجی، در رایانه مغازه ذخیره کند.',
titleEn:'Translate the clothing items to English for your uncle\'s shop inventory.',
items:[
{fa:'تی شرت',en:'T-shirt'},
{fa:'روسری',en:'scarf'},
{fa:'مانتو',en:'manteau'},
{fa:'دستکش',en:'gloves'},
{fa:'کاپشن',en:'jacket'},
{fa:'پیراهن',en:'shirt'},
{fa:'شلوار',en:'trousers / pants'},
{fa:'کفش',en:'shoes'},
{fa:'کت و شلوار',en:'suit'},
{fa:'چادر',en:'chador'}
]
},
{
type:'international-words',
section:'Writing',
title:'با این حروف کلماتی به انگلیسی بنویسید که ما در زبان فارسی از آن‌ها استفاده می‌کنیم.',
titleEn:'Write English words using these letters that we also use in Farsi.',
letters:['a','k','m','e','b','p','i','t','n','u','s','g','d','l','r'],
examples:['Bank','Manteau'],
slots:6
}
],
quiz: [
{q:'A person who is not old is _____.',qFa:'کسی که پیر نیست، ..... است.',options:['short','tall','young','black'],correct:2},
{q:'"What\'s he _____?" — "A blue shirt."',qFa:'«چی پوشیده؟» — «یه پیراهن آبی.»',options:['wearing','having','watching','eating'],correct:0},
{q:'The color of grass is _____.',qFa:'رنگ علف ..... است.',options:['blue','red','green','white'],correct:2}
]
},
{
num: 6,
title: 'My House',
titleFa: 'خانه من',
function: 'Talking about places at home, Talking about actions in progress',
functionFa: 'صحبت درباره مکان‌های خانه و کارهای در حال انجام',
sounds: ['Ff', 'Vv', 'Ww'],
duration: 25,
color: '#D9C5E8',
conversation: {
desc: 'Listen to Farid and his mother talking at home.',
descFa: 'به فرید و مادرش در حال صحبت در خانه گوش دهید.',
lines: [
{
speaker: 'Farid',
role: 'student',
en: 'Mom, where are you?',
fa: 'مامان، کجایی؟'
},
{
speaker: 'Mom',
role: 'teacher',
en: 'I\'m in the kitchen.',
fa: 'تو آشپزخونه‌ام.'
},
{
speaker: 'Farid',
role: 'student',
en: 'Hello. Where\'s Dad?',
fa: 'سلام. بابا کجاست؟'
},
{
speaker: 'Mom',
role: 'teacher',
en: 'In the garage.',
fa: 'تو گاراژ.'
},
{
speaker: 'Farid',
role: 'student',
en: 'What\'s he doing? I\'m so hungry.',
fa: 'چیکار می‌کنه؟ خیلی گرسنه‌ام.'
},
{
speaker: 'Mom',
role: 'teacher',
en: 'OK, wash your hands and come for lunch. I\'ll call Dad; he\'s fixing the car.',
fa: 'باشه، دست‌هات رو بشور و بیا برای ناهار. من بابا رو صدا می‌کنم؛ داره ماشین رو تعمیر می‌کنه.'
},
{
speaker: 'Farid',
role: 'student',
en: 'OK.',
fa: 'باشه.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Where People Are',
titleFa: 'صحبت درباره مکان افراد',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'Where are you?',
a: 'I\'m in the bedroom.',
qFa: 'کجایی؟',
aFa: 'تو اتاق خوابم.'
},
{
q: 'Where is he?',
a: 'He\'s in the living room.',
qFa: 'اون (آقا) کجاست؟',
aFa: 'تو اتاق نشیمنه.'
},
{
q: 'Where is she?',
a: 'She is in her office.',
qFa: 'اون (خانم) کجاست؟',
aFa: 'تو دفترشه.'
},
{
q: 'Where are they?',
a: 'They\'re in the garage.',
qFa: 'اون‌ها کجان؟',
aFa: 'تو گاراژن.'
}
]
},
{
title: 'Practice 2 — Talking about What People Are Doing',
titleFa: 'صحبت درباره کاری که افراد انجام می‌دهند',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What are you doing?',
a: 'I\'m cooking.',
qFa: 'داری چیکار می‌کنی؟',
aFa: 'دارم آشپزی می‌کنم.'
},
{
q: 'What is he doing?',
a: 'He\'s watching TV.',
qFa: 'داره چیکار می‌کنه؟',
aFa: 'داره تلویزیون می‌بینه.'
},
{
q: 'What is she doing?',
a: 'She\'s reading a book.',
qFa: 'داره چیکار می‌کنه؟',
aFa: 'داره کتاب می‌خونه.'
},
{
q: 'What are they doing?',
a: 'They\'re playing football.',
qFa: 'دارن چیکار می‌کنن؟',
aFa: 'دارن فوتبال بازی می‌کنن.'
}
]
}
],
soundsAndLetters: {
letters: ['Ff', 'Vv', 'Ww'],
desc: 'Listen to the conversation between Fatemeh and her teacher.',
descFa: 'به مکالمه بین فاطمه و معلمش گوش دهید.',
dialogue: [
{
speaker: 'Teacher',
en: 'Fatemeh, look at this picture. What\'s the man doing?',
fa: 'فاطمه، به این عکس نگاه کن. مرد داره چیکار می‌کنه؟'
},
{
speaker: 'Fatemeh',
en: 'He\'s working*.',
fa: 'He\'s working (تلفظ نادرست).'
},
{
speaker: 'Teacher',
en: 'Say it again.',
fa: 'دوباره بگو.'
},
{
speaker: 'Fatemeh',
en: 'He\'s working*.',
fa: 'He\'s working (تلفظ نادرست).'
},
{
speaker: 'Teacher',
en: 'He\'s working. It\'s /w/, not /v/.',
fa: 'He\'s working. صدای /w/ هست، نه /v/.'
}
],
activity: 'Do you know any other words in English with the letter w? Example: window, wall, ...',
activityFa: 'کلمات دیگری در انگلیسی با حرف w می‌شناسی؟ مثال: window، wall، ...',
note: '* Wrong Pronunciation',
noteFa: '* تلفظ اشتباه',
talkToTeacher: 'Pardon? Can you say that again?'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'Where',
labelFa: 'کجا',
options: ['kitchen', 'garden', 'bedroom']
},
{
label: 'What... doing',
labelFa: 'چیکار می‌کنه',
options: ['cooking', 'working', 'studying']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'Where',
labelFa: 'کجا',
options: ['kitchen', 'office', 'garage']
},
{
label: 'What... doing',
labelFa: 'چیکار می‌کنه',
options: ['washing', 'working', 'reading']
}
]
}
],
speakingWriting: {
pairWork: {
title: 'Pair Work',
instruction: 'Say the name of a classmate. Your partner says what he/she is doing. Then change roles. Fill out the table below.',
instructionFa: 'اسم یک همکلاسی رو بگو. شریکت بگه که اون چیکار می‌کنه. بعد جا عوض کنید. جدول زیر رو پر کنید.',
tableHeads: ['Name', 'What... doing'],
tableHeadsFa: ['نام', 'چیکار می‌کنه'],
sampleRow: ['Fatemeh', 'reading a book']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Ask and answer with a friend using mime.',
lines: [
{
speaker: 'You',
text: 'What am I doing?'
},
{
speaker: 'Your friend',
text: 'You\'re …………………………… .'
},
{
speaker: 'You',
text: 'No, that\'s not correct.'
},
{
speaker: 'Your friend',
text: 'Are you ……………………………… ?'
},
{
speaker: 'You',
text: 'Yes.'
}
]
}
},
vocabulary: [
{
word: 'house',
pos: 'noun',
ipa: '/haʊs/',
fa: 'خانه',
example: 'My house is big.'
},
{
word: 'home',
pos: 'noun',
ipa: '/hoʊm/',
fa: 'خانه (محل زندگی)',
example: 'I\'m at home.'
},
{
word: 'kitchen',
pos: 'noun',
ipa: '/ˈkɪtʃɪn/',
fa: 'آشپزخانه',
example: 'I\'m in the kitchen.'
},
{
word: 'living room',
pos: 'phrase',
ipa: '/ˈlɪvɪŋ ruːm/',
fa: 'اتاق نشیمن',
example: 'He\'s in the living room.'
},
{
word: 'bedroom',
pos: 'noun',
ipa: '/ˈbedruːm/',
fa: 'اتاق خواب',
example: 'I\'m in the bedroom.'
},
{
word: 'office',
pos: 'noun',
ipa: '/ˈɔːfɪs/',
fa: 'دفتر کار',
example: 'She is in her office.'
},
{
word: 'garage',
pos: 'noun',
ipa: '/ˈɡærɑːʒ/',
fa: 'گاراژ، پارکینگ',
example: 'In the garage.'
},
{
word: 'garden',
pos: 'noun',
ipa: '/ˈɡɑːrdn/',
fa: 'باغ، حیاط',
example: 'In the garden.'
},
{
word: 'where',
pos: 'adv',
ipa: '/wer/',
fa: 'کجا',
example: 'Where are you?'
},
{
word: 'mom',
pos: 'noun',
ipa: '/mɒm/',
fa: 'مامان',
example: 'Mom, where are you?'
},
{
word: 'dad',
pos: 'noun',
ipa: '/dæd/',
fa: 'بابا',
example: 'Where\'s Dad?'
},
{
word: 'hungry',
pos: 'adj',
ipa: '/ˈhʌŋɡri/',
fa: 'گرسنه',
example: 'I\'m so hungry.'
},
{
word: 'lunch',
pos: 'noun',
ipa: '/lʌntʃ/',
fa: 'ناهار',
example: 'Come for lunch.'
},
{
word: 'wash',
pos: 'verb',
ipa: '/wɒʃ/',
fa: 'شستن',
example: 'Wash your hands.'
},
{
word: 'hands',
pos: 'noun',
ipa: '/hændz/',
fa: 'دست‌ها',
example: 'Wash your hands.'
},
{
word: 'call',
pos: 'verb',
ipa: '/kɔːl/',
fa: 'صدا کردن، زنگ زدن',
example: 'I\'ll call Dad.'
},
{
word: 'fix',
pos: 'verb',
ipa: '/fɪks/',
fa: 'تعمیر کردن',
example: 'He\'s fixing the car.'
},
{
word: 'car',
pos: 'noun',
ipa: '/kɑːr/',
fa: 'ماشین',
example: 'He\'s fixing the car.'
},
{
word: 'cook',
pos: 'verb',
ipa: '/kʊk/',
fa: 'آشپزی کردن',
example: 'I\'m cooking.'
},
{
word: 'watch',
pos: 'verb',
ipa: '/wɒtʃ/',
fa: 'نگاه کردن',
example: 'He\'s watching TV.'
},
{
word: 'TV',
pos: 'noun',
ipa: '/ˌtiːˈviː/',
fa: 'تلویزیون',
example: 'Watching TV.'
},
{
word: 'read',
pos: 'verb',
ipa: '/riːd/',
fa: 'خواندن',
example: 'She\'s reading a book.'
},
{
word: 'book',
pos: 'noun',
ipa: '/bʊk/',
fa: 'کتاب',
example: 'Reading a book.'
},
{
word: 'play',
pos: 'verb',
ipa: '/pleɪ/',
fa: 'بازی کردن',
example: 'They\'re playing football.'
},
{
word: 'football',
pos: 'noun',
ipa: '/ˈfʊtbɔːl/',
fa: 'فوتبال',
example: 'Playing football.'
},
{
word: 'work',
pos: 'verb',
ipa: '/wɜːrk/',
fa: 'کار کردن',
example: 'He\'s working.'
},
{
word: 'study',
pos: 'verb',
ipa: '/ˈstʌdi/',
fa: 'درس خواندن',
example: 'She\'s studying.'
}
],
workbook: [
{
type:'activity-place-grid',
section:'Reading',
title:'با توجه به آنچه تاکنون آموخته‌اید هر کدام از این فعالیت‌ها معمولاً در کدام یک از مکان‌های زیر انجام می‌شود؟',
titleEn:'According to what you\'ve learned, which place is each activity usually done in?',
activities:['Cooking','Washing','Watching TV','Reading','Sleeping','Studying'],
places:['Kitchen','Living room','Bedroom'],
correct:{
'Cooking':'Kitchen','Washing':'Kitchen','Watching TV':'Living room',
'Reading':'Living room','Sleeping':'Bedroom','Studying':'Bedroom'
}
},
{
type:'reading-circle',
section:'Reading',
title:'در متن زیر، کلماتی را که مربوط به قسمت‌های مختلف منزل می‌باشند پیدا کنید و دورشان خط بکشید.',
titleEn:'In the text below, find and circle the words related to different parts of a house.',
text:'We live in a big house in a small town. Our house has three bedrooms, a living room, a kitchen and a bathroom. There is a small garden in our yard. We have a garage in the corner of the yard. My father fixes his car there.',
targets:['house','bedrooms','living room','kitchen','bathroom','garden','yard','garage'],
hint:'قسمت‌های خانه: house, bedrooms, living room, kitchen, bathroom, garden, yard, garage'
},
{
type:'translate-rooms',
section:'Reading',
title:'یک مهندس عمران برای پدر شما نقشهٔ ساختمانی را طراحی کرده است. از آنجا که تمامی قسمت‌ها توسط رایانه طراحی و به زبان انگلیسی ارائه شده است، پدرتان از شما خواسته تا نوشته‌های روی نقشه را برایش به فارسی بنویسید.',
titleEn:'Translate each room name from English to Persian for your father.',
rooms:[
{en:'Kitchen',fa:'آشپزخانه'},
{en:'Office',fa:'دفتر کار'},
{en:'Garage',fa:'گاراژ'},
{en:'Hall',fa:'سالن'},
{en:'Bathroom',fa:'حمام'},
{en:'Store room',fa:'انباری'},
{en:'Bedroom',fa:'اتاق خواب'},
{en:'Living room',fa:'اتاق نشیمن'}
]
},
{
type:'short-answer',
section:'Writing',
title:'دبیر زبان انگلیسی شما چند چیستان مطرح کرده است. پاسخ‌های خود را به انگلیسی در جای مشخص شده بنویسید.',
titleEn:'Your teacher asks riddles. Write English answers.',
items:[
{askFa:'کلمهٔ پرسشی برای پرسیدن محل:',hint:'w',answer:'where'},
{askFa:'نوعی خانه است که در مناطق ییلاقی بیشتر یافت می‌شود:',hint:'v',answer:'villa'},
{askFa:'در درس جغرافیا یاد گرفتید که سه چهارم کره زمین را در بر می‌گیرد:',hint:'w',answer:'water'},
{askFa:'این وسیله باعث می‌شود که موتور خودرو خنک شود:',hint:'f',answer:'fan'},
{askFa:'نوعی وسیله نقلیه عمومی:',hint:'v',answer:'van'}
]
},
{
type:'international-words',
section:'Writing',
title:'با این حروف، کلماتی به انگلیسی بنویسید که ما در زبان فارسی هم از آن‌ها استفاده می‌کنیم.',
titleEn:'Write English words using these letters that we use in Farsi too.',
letters:['a','k','m','e','b','p','i','t','n','u','s','g','d','l','r','f','v','w'],
examples:['Garage','Nurse'],
slots:6
},
{
type:'group-friday',
section:'Writing',
title:'در یک کار گروهی، معلم زبان انگلیسی می‌خواهد بداند شما و اعضای گروهتان، تعطیلی روز جمعه را چگونه و در کجا می‌گذرانید. جدول زیر را کامل کنید.',
titleEn:'In group work: how do you and your group spend Friday holiday? Fill the table.',
columns:['Group Members','Activity','Place'],
rows:4
}
],
quiz: [
{q:'"Where _____ they?" — "They\'re in the garage."',qFa:'«اون‌ها کجان؟» — «تو گاراژن.»',options:['is','am','are','do'],correct:2},
{q:'A place where you cook is called a _____.',qFa:'مکانی که در آن آشپزی می‌کنیم ..... نام دارد.',options:['bedroom','kitchen','garage','office'],correct:1},
{q:'"What is she _____?" — "She\'s reading."',qFa:'«اون داره چی کار می‌کنه؟» — «داره می‌خونه.»',options:['do','doing','does','done'],correct:1}
]
},
{
num: 7,
title: 'My Address',
titleFa: 'آدرس من',
function: 'Talking about your address/phone number, Telling the time',
functionFa: 'صحبت درباره آدرس، شماره تلفن و گفتن ساعت',
sounds: ['Oo', 'Hh', 'Xx', 'Yy'],
duration: 30,
color: '#A8E0E0',
conversation: {
desc: 'Listen to the students talking about going to a friend\'s house.',
descFa: 'به دانش‌آموزان در حال صحبت درباره رفتن به خانه دوستشان گوش دهید.',
lines: [
{
speaker: 'Omid',
role: 'student',
en: 'Ali\'s not well. I\'m going to visit him today. Are you coming with me?',
fa: 'علی حالش خوب نیست. می‌خوام امروز برم دیدنش. تو هم باهام میای؟'
},
{
speaker: 'Hossein',
role: 'teacher',
en: 'What time are you going?',
fa: 'چه ساعتی می‌ری؟'
},
{
speaker: 'Omid',
role: 'student',
en: 'Around 5 in the afternoon.',
fa: 'حدود ساعت ۵ بعدازظهر.'
},
{
speaker: 'Hossein',
role: 'teacher',
en: 'I\'m not sure I can, but I\'ll try. What\'s his address?',
fa: 'مطمئن نیستم بتونم، ولی سعی می‌کنم. آدرسش چیه؟'
},
{
speaker: 'Omid',
role: 'student',
en: '5 Azadi Street.',
fa: 'خیابان آزادی، پلاک ۵.'
},
{
speaker: 'Hossein',
role: 'teacher',
en: 'Call me before you go. My phone number is 586-2144.',
fa: 'قبل از اینکه بری، بهم زنگ بزن. شماره‌ام ۵۸۶-۲۱۴۴ه.'
},
{
speaker: 'Omid',
role: 'student',
en: 'OK, bye.',
fa: 'باشه، خداحافظ.'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Your Address',
titleFa: 'صحبت درباره آدرس',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What\'s your address?',
a: '15 Shahid Hakim Street, Manzarieh.',
qFa: 'آدرست چیه؟',
aFa: 'خیابان شهید حکیم، پلاک ۱۵، منظریه.'
},
{
q: 'Where do you live?',
a: '24 Laleh Street, Sa\'dieh.',
qFa: 'کجا زندگی می‌کنی؟',
aFa: 'خیابان لاله، پلاک ۲۴، سعدیه.'
},
{
q: 'What\'s his address?',
a: '39 Kargar Street, Baharestan.',
qFa: 'آدرسش چیه؟',
aFa: 'خیابان کارگر، پلاک ۳۹، بهارستان.'
},
{
q: 'What\'s her address?',
a: '67 Mahan Street.',
qFa: 'آدرسش چیه؟',
aFa: 'خیابان ماهان، پلاک ۶۷.'
},
{
q: 'What\'s their address?',
a: '81 Farnam Street.',
qFa: 'آدرسشون چیه؟',
aFa: 'خیابان فرنام، پلاک ۸۱.'
}
]
},
{
title: 'Practice 2 — Talking about Your Telephone Number',
titleFa: 'صحبت درباره شماره تلفن',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What\'s your telephone number?',
a: '433-7891',
qFa: 'شماره تلفنت چیه؟',
aFa: '۴۳۳-۷۸۹۱'
},
{
q: 'What\'s Ali\'s home number?',
a: '652-0796',
qFa: 'شماره خونه‌ی علی چیه؟',
aFa: '۶۵۲-۰۷۹۶'
},
{
q: 'What\'s his mobile phone number?',
a: '0925-3345462',
qFa: 'شماره موبایلش چیه؟',
aFa: '۰۹۲۵-۳۳۴۵۴۶۲'
},
{
q: 'What\'s her office phone number?',
a: '213-4561',
qFa: 'شماره دفترش چیه؟',
aFa: '۲۱۳-۴۵۶۱'
},
{
q: 'What\'s their telephone number?',
a: '598-9863',
qFa: 'شماره تلفنشون چیه؟',
aFa: '۵۹۸-۹۸۶۳'
}
]
},
{
title: 'Practice 3 — Telling the Time',
titleFa: 'گفتن ساعت',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What time is it?',
a: '10 (O\'clock).',
qFa: 'ساعت چنده؟',
aFa: 'ساعت ۱۰.'
},
{
q: 'What time are you going?',
a: 'At 5:45 in the afternoon/p.m.',
qFa: 'چه ساعتی می‌ری؟',
aFa: 'ساعت ۵:۴۵ بعدازظهر.'
},
{
q: 'What time is he going?',
a: '8:20 in the morning/a.m.',
qFa: 'چه ساعتی می‌ره؟',
aFa: 'ساعت ۸:۲۰ صبح.'
},
{
q: 'What time is she coming back?',
a: '7:15 in the evening/p.m.',
qFa: 'چه ساعتی برمی‌گرده؟',
aFa: 'ساعت ۷:۱۵ غروب.'
},
{
q: 'What time are they leaving?',
a: 'At 9:30.',
qFa: 'چه ساعتی می‌رن؟',
aFa: 'ساعت ۹:۳۰.'
}
],
visualPanel: {
title: 'Telling the Time — ساعت‌ها',
groups: [
{
label: 'ساعت‌های نمونه',
type: 'clocks',
items: [
{time:'10:00', label:"10 o'clock"},
{time:'5:45', label:'5:45 p.m.'},
{time:'8:20', label:'8:20 a.m.'},
{time:'7:15', label:'7:15 p.m.'},
{time:'9:30', label:'9:30'}
]
}
]
}
}
],
soundsAndLetters: {
letters: ['Oo', 'Hh', 'Xx', 'Yy'],
desc: 'Listen to the man giving his contact information to a secretary.',
descFa: 'به مرد در حال دادن اطلاعات تماسش به منشی گوش دهید.',
dialogue: [
{
speaker: 'Secretary',
en: 'What\'s your phone number?',
fa: 'شماره تلفنت چیه؟'
},
{
speaker: 'Man',
en: 'It\'s 344-5302.',
fa: '۳۴۴-۵۳۰۲.'
},
{
speaker: 'Secretary',
en: 'And your e-mail address?',
fa: 'و آدرس ایمیلت؟'
},
{
speaker: 'Man',
en: 'h-omidi60@xymail.com',
fa: 'h-omidi60@xymail.com'
}
],
activity: 'Say your e-mail address and spell it.',
activityFa: 'آدرس ایمیلت رو بگو و هجی کن.',
talkToTeacher: 'I don\'t know. / I\'m not sure. / I don\'t understand.'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'Address',
labelFa: 'آدرس',
options: ['13 Aban Street', '30 Mahan Street']
},
{
label: 'Telephone Number',
labelFa: 'شماره تلفن',
options: ['623-4521', '623-3512']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'Address',
labelFa: 'آدرس',
options: ['15 Hejab Street', '50 Shahed Street']
},
{
label: 'Telephone Number',
labelFa: 'شماره تلفن',
options: ['544-3329', '544-4139']
}
]
}
],
speakingWriting: {
pairWork: {
title: 'Pair Work',
instruction: 'Suppose you and your friend are in an office. You are the secretary. Ask your friend about his/her address and telephone number. Then change roles. Fill out the table below.',
instructionFa: 'فرض کن تو و دوستت در یک دفتر هستید. تو منشی هستی. از دوستت آدرس و شماره تلفنش رو بپرس. بعد جا عوض کنید. جدول زیر رو پر کنید.',
tableHeads: ['Name', 'Address', 'Telephone Number'],
tableHeadsFa: ['نام', 'آدرس', 'شماره تلفن'],
sampleRow: ['Hamid', '12 Namdar Street, Hafezieh', '786-4523']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Do the conversation.',
lines: [
{
speaker: 'You',
text: 'I\'m going to visit ……………………… this ……………………… . Are you coming with me?'
},
{
speaker: 'Your friend',
text: 'What time are you going?'
},
{
speaker: 'You',
text: '……………………… in the ……………………………… .'
},
{
speaker: 'Your friend',
text: 'I\'m not sure I can, but I\'ll try. What\'s ……………………… address?'
},
{
speaker: 'You',
text: '……………………………… .'
},
{
speaker: 'Your friend',
text: 'Call me before you go. My phone number is ……………………… .'
},
{
speaker: 'You',
text: 'OK, bye.'
}
]
}
},
vocabulary: [
{
word: 'address',
pos: 'noun',
ipa: '/ˈædres/',
fa: 'آدرس، نشانی',
example: 'What\'s your address?'
},
{
word: 'street',
pos: 'noun',
ipa: '/striːt/',
fa: 'خیابان',
example: '5 Azadi Street.'
},
{
word: 'live',
pos: 'verb',
ipa: '/lɪv/',
fa: 'زندگی کردن',
example: 'Where do you live?'
},
{
word: 'visit',
pos: 'verb',
ipa: '/ˈvɪzɪt/',
fa: 'ملاقات کردن، دیدار',
example: 'I\'m going to visit him.'
},
{
word: 'go',
pos: 'verb',
ipa: '/ɡoʊ/',
fa: 'رفتن',
example: 'What time are you going?'
},
{
word: 'come',
pos: 'verb',
ipa: '/kʌm/',
fa: 'آمدن',
example: 'Are you coming with me?'
},
{
word: 'telephone',
pos: 'noun',
ipa: '/ˈtelɪfoʊn/',
fa: 'تلفن',
example: 'What\'s your telephone number?'
},
{
word: 'phone',
pos: 'noun',
ipa: '/foʊn/',
fa: 'تلفن',
example: 'My phone number is...'
},
{
word: 'number',
pos: 'noun',
ipa: '/ˈnʌmbər/',
fa: 'شماره',
example: 'What\'s your number?'
},
{
word: 'mobile',
pos: 'noun',
ipa: '/ˈmoʊbaɪl/',
fa: 'موبایل',
example: 'What\'s his mobile number?'
},
{
word: 'cell phone',
pos: 'phrase',
ipa: '/sel foʊn/',
fa: 'تلفن همراه',
example: 'My cell phone number.'
},
{
word: 'home',
pos: 'noun',
ipa: '/hoʊm/',
fa: 'خانه',
example: 'What\'s your home number?'
},
{
word: 'office',
pos: 'noun',
ipa: '/ˈɔːfɪs/',
fa: 'دفتر',
example: 'Her office phone number.'
},
{
word: 'e-mail',
pos: 'noun',
ipa: '/ˈiːmeɪl/',
fa: 'ایمیل، پست الکترونیک',
example: 'What\'s your e-mail address?'
},
{
word: 'time',
pos: 'noun',
ipa: '/taɪm/',
fa: 'زمان، ساعت',
example: 'What time is it?'
},
{
word: 'o\'clock',
pos: 'adv',
ipa: '/əˈklɒk/',
fa: 'ساعت (تمام)',
example: 'It\'s 10 o\'clock.'
},
{
word: 'a.m.',
pos: 'abbr',
ipa: '/ˌeɪ ˈem/',
fa: 'قبل از ظهر',
example: '8 a.m.'
},
{
word: 'p.m.',
pos: 'abbr',
ipa: '/ˌpiː ˈem/',
fa: 'بعدازظهر',
example: '5 p.m.'
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
example: 'In the afternoon.'
},
{
word: 'evening',
pos: 'noun',
ipa: '/ˈiːvnɪŋ/',
fa: 'غروب، عصر',
example: 'In the evening.'
},
{
word: 'around',
pos: 'prep',
ipa: '/əˈraʊnd/',
fa: 'حدود',
example: 'Around 5.'
},
{
word: 'try',
pos: 'verb',
ipa: '/traɪ/',
fa: 'تلاش کردن',
example: 'I\'ll try.'
},
{
word: 'before',
pos: 'prep',
ipa: '/bɪˈfɔːr/',
fa: 'قبل از',
example: 'Call me before you go.'
}
],
workbook: [
{
type:'find-equivalent',
section:'Reading',
title:'معادل کلمات فارسی مشخص شده را در متن انگلیسی پیدا کنید. (یک نمونه، انجام شده است.)',
titleEn:'Find the equivalent of the highlighted Persian words in the English text.',
farsiText:'حسن امیدی در یک اداره کار می‌کند. او چهل و هفت ساله است و در خانه‌ای در خیابان بهمن زندگی می‌کند. وی متأهل است و دو پسر و دو دختر دارد. اسامی آن‌ها حمید، هادی، هما و هدی است. همهٔ آن‌ها دانش‌آموز هستند. شماره تلفن آقای امیدی ۳۴۴-۵۳۰۲ است و نشانی رایانامهٔ او: «h-omidi60@xymail.com» می‌باشد.',
englishText:'Hassan Omidi works in an office. He is forty seven years old. He lives in a house on Bahman Street. He is married and has two sons and two daughters. Their names are Hamid, Hadi, Homa and Hoda. They are all students. Mr Omidi\'s phone number is 344-5302 and his e-mail address is "h-omidi60@xymail.com".',
pairs:[
{fa:'اداره',en:'office',example:true},
{fa:'چهل و هفت ساله',en:'forty seven years old'},
{fa:'خانه',en:'house'},
{fa:'خیابان',en:'Street'},
{fa:'دانش‌آموز',en:'students'},
{fa:'شماره تلفن',en:'phone number'},
{fa:'نشانی رایانامه',en:'e-mail address'}
]
},
{
type:'reading-circle',
section:'Reading',
title:'متن زیر را بخوانید و در آن کلماتی را مشخص کنید که در زبان فارسی هم به‌کار می‌روند.',
titleEn:'Read the text and circle words that are also used in Persian.',
text:'I am Mansoor Mohammadi. I am 12 years old. I am from Ilam, but I live in Isfahan. I live in an apartment on Sohrevardi Street. I am a student in Grade 7. I go to Shahid Fakoori School. There are seven people in my family. My father is a taxi driver, and my mother is a housewife. I have two sisters and two brothers. My telephone number is 6543257 and my e-mail address is "mm1381@xmail.com".',
targets:['Ilam','Isfahan','apartment','Sohrevardi','Street','Grade','Shahid','Fakoori','School','taxi','telephone','e-mail'],
hint:'کلمات مشترک با فارسی: Ilam, Isfahan, apartment, Sohrevardi, Street, Grade, Shahid, Fakoori, School, taxi, telephone, e-mail'
},
{
type:'address-translate',
section:'Reading',
title:'نامه‌رسان محله‌تان پاکت نامه‌ای را به خانوادهٔ شما داده است. پس از دیدن نشانی متوجه شدید که وی آن را اشتباهی به شما داده است. حال نشانی فرد گیرنده را به فارسی بنویسید و پاکت را در صندوق پست بیندازید تا به دست گیرندهٔ اصلی برسد.',
titleEn:'You received a wrong letter. Translate the recipient address from English to Persian.',
envelope:[
{label:'From',value:'Hediyeh Yarhmohammadi\n433, Rose Alley,\nJulan Duta Street,\nKuala Lumpur, Malaysia.'},
{label:'To',value:'Yasaman Yari\nApt.23, No.4\nShahid Ardakani Street,\nYazd, Iran.'}
],
sampleAnswer:'یاسمن یاری\nآپارتمان ۲۳، شماره ۴\nخیابان شهید اردکانی،\nیزد، ایران.'
},
{
type:'poster-form',
section:'Writing',
title:'قرار است در مدرسهٔ شما همایشی با عنوان «مدرسهٔ شاد» به زبان انگلیسی برگزار شود. دبیر زبان انگلیسی‌تان از شما خواسته تا با استفاده از اطلاعات زیر، پوستری به زبان انگلیسی تهیه کنید.',
titleEn:'Make an English poster for the Student Conference using the given Persian info.',
farsiInfo:[
'همایش دانش‌آموزی «مدرسهٔ شاد»',
'تاریخ: ۲۵ فروردین',
'زمان: ۸-۱۲',
'مکان: مدرسهٔ شهید اوحدی',
'آدرس: خیابان مهر، پلاک ۱۹',
'تلفن: ۳۱۲۷۸۴۴'
],
formFields:[
{label:'Title',hint:'Happy School',answer:'Happy School'},
{label:'Date',hint:'25 Farvardin',answer:'25 Farvardin'},
{label:'Time',hint:'8-12',answer:'8-12'},
{label:'Place',hint:'Shahid Owhadi School',answer:'Shahid Owhadi School'},
{label:'Address',hint:'19, Mehr Street',answer:'19, Mehr Street'},
{label:'Telephone No',hint:'3127844',answer:'3127844'}
]
},
{
type:'application-form',
section:'Writing',
title:'قرار است ادارهٔ آموزش و پرورش، انجمن زبان انگلیسی را در منطقهٔ شما راه‌اندازی کند. برای عضوگیری برگه‌ای به شما ارائه شده است تا با توجه به اطلاعات فردی خود، آن را تکمیل کنید.',
titleEn:'Fill out the English Language Association membership form with your personal info.',
formTitle:'English Language Association (ELA) Application Form',
fields:[
{label:'Name',type:'text'},
{label:'Telephone number',type:'text'},
{label:'Address',type:'textarea'},
{label:'School Name',type:'text'},
{label:'School Phone Number',type:'text'},
{label:'Address',type:'textarea'},
{label:'E-mail Address',type:'text'}
]
},
{
type:'international-words',
section:'Writing',
title:'با این حروف، کلماتی انگلیسی بنویسید که در زبان فارسی هم از آن‌ها استفاده می‌کنیم.',
titleEn:'Write English words using these letters, also used in Persian.',
letters:['a','k','m','e','b','p','i','t','n','u','s','g','d','l','r','f','v','w','h','o','x','y'],
examples:['Metro','Mobile'],
slots:6
}
],
quiz: [
{q:'"What\'s your _____?" — "It\'s 5, Azadi Street."',qFa:'«آدرست چیه؟» — «پلاک ۵، خیابان آزادی.»',options:['name','address','time','number'],correct:1},
{q:'"What _____ is it?" — "It\'s 7 o\'clock."',qFa:'«ساعت چنده؟» — «ساعت ۷ هست.»',options:['name','time','where','how'],correct:1},
{q:'"Where do you _____?" — "I live in Tehran."',qFa:'«کجا زندگی می‌کنی؟» — «تهران زندگی می‌کنم.»',options:['live','go','do','are'],correct:0}
]
},
{
num: 8,
title: 'My Favorite Food',
titleFa: 'غذای مورد علاقه من',
function: 'Talking about your favorite food, Making suggestions',
functionFa: 'صحبت درباره غذای مورد علاقه و پیشنهاد دادن',
sounds: ['Cc', 'Jj', 'Qq', 'Zz'],
duration: 25,
color: '#FFB59B',
conversation: {
desc: 'Listen to the students talking about their favorite food.',
descFa: 'به دانش‌آموزان در حال صحبت درباره غذای مورد علاقه‌شون گوش دهید.',
lines: [
{
speaker: 'Student 1',
role: 'student',
en: 'Look, it\'s enough. I\'m hungry. How about you?',
fa: 'ببین، کافیه. گرسنه‌ام. تو چی؟'
},
{
speaker: 'Student 2',
role: 'student',
en: 'Me, too. Let\'s have some cake and milk.',
fa: 'منم همینطور. بیا کیک و شیر بخوریم.'
},
{
speaker: 'Student 1',
role: 'student',
en: 'Sounds good, but I\'d like some tea with my cake. That\'s my favorite!',
fa: 'خوبه، ولی من با کیکم چای می‌خوام. این مورد علاقه‌مه!'
},
{
speaker: 'Student 2',
role: 'student',
en: 'OK, let\'s go to the kitchen. Mom?',
fa: 'باشه، بریم به آشپزخونه. مامان؟'
}
]
},
practices: [
{
title: 'Practice 1 — Talking about Your Favorite Food and Drinks',
titleFa: 'صحبت درباره غذا و نوشیدنی مورد علاقه',
desc: 'Listen to the examples. Then ask and answer with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست سؤال و جواب کنید.',
pairs: [
{
q: 'What\'s your favorite food?',
a: 'Rice and kebab.',
qFa: 'غذای مورد علاقه‌ات چیه؟',
aFa: 'برنج و کباب.'
},
{
q: 'What\'s your favorite drink?',
a: 'Orange juice.',
qFa: 'نوشیدنی مورد علاقه‌ات چیه؟',
aFa: 'آب پرتقال.'
},
{
q: 'What do you like to eat/drink?',
a: 'Some cake and milk.',
qFa: 'چی دوست داری بخوری/بنوشی؟',
aFa: 'کیک و شیر.'
}
],
visualPanel: {
title: 'Foods & Drinks — غذاها و نوشیدنی‌ها',
groups: [
{
label: 'Favorite Foods · غذاهای مورد علاقه',
type: 'images',
items: [
{word:'bread', fa:'نان', image:'food-bread.jpg'},
{word:'rice', fa:'برنج', image:'food-rice.jpg'},
{word:'kebab', fa:'کباب', image:'food-kebab.jpg'},
{word:'chicken', fa:'مرغ', image:'food-chicken.jpg'},
{word:'salad', fa:'سالاد', image:'food-salad.jpg'},
{word:'fruit', fa:'میوه', image:'food-fruit.jpg'},
{word:'dates', fa:'خرما', image:'food-dates.jpg'},
{word:'cake', fa:'کیک', image:'food-cake.jpg'},
{word:'milk', fa:'شیر', image:'food-milk.jpg'},
{word:'tea', fa:'چای', image:'food-tea.jpg'}
]
}
]
}
},
{
title: 'Practice 2 — Making Suggestions',
titleFa: 'پیشنهاد دادن',
desc: 'Listen to the examples. Then practice with a friend.',
descFa: 'به مثال‌ها گوش دهید. سپس با یک دوست تمرین کنید.',
pairs: [
{
q: 'I\'m hungry.',
a: 'How about some cake and milk?',
qFa: 'گرسنه‌ام.',
aFa: 'نظرت درباره کیک و شیر چیه؟'
},
{
q: 'I\'m thirsty.',
a: 'Let\'s have something to drink.',
qFa: 'تشنه‌ام.',
aFa: 'بیا یه چیزی بنوشیم.'
},
{
q: 'I feel hungry/thirsty.',
a: 'Let\'s take something to eat/drink.',
qFa: 'احساس گرسنگی/تشنگی می‌کنم.',
aFa: 'بیا یه چیزی برای خوردن/نوشیدن بگیریم.'
}
]
}
],
soundsAndLetters: {
letters: ['Cc', 'Jj', 'Qq', 'Zz'],
desc: 'Listen to the conversation between Majid and his English teacher.',
descFa: 'به مکالمه بین مجید و معلم انگلیسی‌اش گوش دهید.',
dialogue: [
{
speaker: 'Majid',
en: 'Excuse me, sir? How do you say these words in English? نارگیل، ژله، به، and کدو?',
fa: 'ببخشید، آقا؟ این کلمات رو به انگلیسی چی می‌گیم؟ نارگیل، ژله، به، و کدو؟'
},
{
speaker: 'Teacher',
en: 'Coconut, C-O-C-O-N-U-T for نارگیل, jelly, J-E-L-L-Y for ژله, quince, Q-U-I-N-C-E for به, and zucchini, Z-U-C-C-H-I-N-I for کدو.',
fa: 'Coconut، C-O-C-O-N-U-T برای نارگیل، Jelly، J-E-L-L-Y برای ژله، Quince، Q-U-I-N-C-E برای به، و Zucchini، Z-U-C-C-H-I-N-I برای کدو.'
},
{
speaker: 'Majid',
en: 'Thank you.',
fa: 'ممنون.'
}
],
activity: 'Say English words for food and drinks and spell them.',
activityFa: 'کلمات انگلیسی برای غذا و نوشیدنی بگو و هجی‌شون کن.',
talkToTeacher: 'How do you say ……… in English?'
},
listenings: [
{
title: 'Conversation 1',
rows: [
{
label: 'Food',
labelFa: 'غذا',
options: ['rice', 'chicken', 'kebab']
},
{
label: 'Drink',
labelFa: 'نوشیدنی',
options: ['milk', 'tea', 'water']
}
]
},
{
title: 'Conversation 2',
rows: [
{
label: 'Food',
labelFa: 'غذا',
options: ['cake', 'dates', 'fruit']
},
{
label: 'Drink',
labelFa: 'نوشیدنی',
options: ['milk', 'tea', 'water']
}
]
}
],
speakingWriting: {
groupWork: {
title: 'Group Work',
instruction: 'Ask your classmates about what they like to eat and drink and fill out the table below.',
instructionFa: 'از همکلاسی‌هایت بپرس چی دوست دارن بخورن و بنوشن و جدول زیر رو پر کن.',
tableHeads: ['Name', 'Food', 'Drink'],
tableHeadsFa: ['نام', 'غذا', 'نوشیدنی'],
sampleRow: ['Zohreh', 'rice and kebab', 'water']
},
dialog: {
title: 'Your Conversation',
subtitle: 'Pair Work — Do the conversation.',
lines: [
{
speaker: 'You',
text: 'I\'m hungry. How ……………………… ?'
},
{
speaker: 'Your friend',
text: 'Me, too. Let\'s have ……………………………… .'
},
{
speaker: 'You',
text: 'Sounds good, but I\'d like ……………………………… . That\'s my favorite!'
},
{
speaker: 'Your friend',
text: 'OK, let\'s go ……………………………… .'
}
]
}
},
vocabulary: [
{
word: 'food',
pos: 'noun',
ipa: '/fuːd/',
fa: 'غذا',
example: 'What\'s your favorite food?'
},
{
word: 'drink',
pos: 'noun',
ipa: '/drɪŋk/',
fa: 'نوشیدنی',
example: 'What\'s your favorite drink?'
},
{
word: 'favorite',
pos: 'adj',
ipa: '/ˈfeɪvərɪt/',
fa: 'مورد علاقه',
example: 'That\'s my favorite!'
},
{
word: 'hungry',
pos: 'adj',
ipa: '/ˈhʌŋɡri/',
fa: 'گرسنه',
example: 'I\'m hungry.'
},
{
word: 'thirsty',
pos: 'adj',
ipa: '/ˈθɜːrsti/',
fa: 'تشنه',
example: 'I\'m thirsty.'
},
{
word: 'feel',
pos: 'verb',
ipa: '/fiːl/',
fa: 'احساس کردن',
example: 'I feel hungry.'
},
{
word: 'like',
pos: 'verb',
ipa: '/laɪk/',
fa: 'دوست داشتن',
example: 'What do you like to eat?'
},
{
word: 'eat',
pos: 'verb',
ipa: '/iːt/',
fa: 'خوردن',
example: 'What do you like to eat?'
},
{
word: 'have',
pos: 'verb',
ipa: '/hæv/',
fa: 'داشتن، خوردن',
example: 'Let\'s have cake.'
},
{
word: 'enough',
pos: 'adj',
ipa: '/ɪˈnʌf/',
fa: 'کافی',
example: 'It\'s enough.'
},
{
word: 'bread',
pos: 'noun',
ipa: '/bred/',
fa: 'نان',
example: 'I like bread.'
},
{
word: 'rice',
pos: 'noun',
ipa: '/raɪs/',
fa: 'برنج',
example: 'Rice and kebab.'
},
{
word: 'kebab',
pos: 'noun',
ipa: '/kɪˈbɑːb/',
fa: 'کباب',
example: 'Kebab is delicious.'
},
{
word: 'chicken',
pos: 'noun',
ipa: '/ˈtʃɪkɪn/',
fa: 'مرغ',
example: 'I like chicken.'
},
{
word: 'salad',
pos: 'noun',
ipa: '/ˈsæləd/',
fa: 'سالاد',
example: 'A green salad.'
},
{
word: 'fruit',
pos: 'noun',
ipa: '/fruːt/',
fa: 'میوه',
example: 'Fresh fruit.'
},
{
word: 'dates',
pos: 'noun',
ipa: '/deɪts/',
fa: 'خرما',
example: 'I like dates.'
},
{
word: 'cake',
pos: 'noun',
ipa: '/keɪk/',
fa: 'کیک',
example: 'Some cake and milk.'
},
{
word: 'jelly',
pos: 'noun',
ipa: '/ˈdʒeli/',
fa: 'ژله',
example: 'I like jelly.'
},
{
word: 'coconut',
pos: 'noun',
ipa: '/ˈkoʊkənʌt/',
fa: 'نارگیل',
example: 'Coconut milk.'
},
{
word: 'quince',
pos: 'noun',
ipa: '/kwɪns/',
fa: 'به (میوه)',
example: 'Quince jam.'
},
{
word: 'zucchini',
pos: 'noun',
ipa: '/zuːˈkiːni/',
fa: 'کدو',
example: 'Stuffed zucchini.'
},
{
word: 'milk',
pos: 'noun',
ipa: '/mɪlk/',
fa: 'شیر',
example: 'A glass of milk.'
},
{
word: 'tea',
pos: 'noun',
ipa: '/tiː/',
fa: 'چای',
example: 'Hot tea.'
},
{
word: 'water',
pos: 'noun',
ipa: '/ˈwɔːtər/',
fa: 'آب',
example: 'Cold water.'
},
{
word: 'juice',
pos: 'noun',
ipa: '/dʒuːs/',
fa: 'آبمیوه',
example: 'Orange juice.'
},
{
word: 'orange juice',
pos: 'phrase',
ipa: '/ˈɒrɪndʒ dʒuːs/',
fa: 'آب پرتقال',
example: 'A glass of orange juice.'
},
{
word: 'let\'s',
pos: 'phrase',
ipa: '/lets/',
fa: 'بیا (پیشنهاد)',
example: 'Let\'s have cake.'
},
{
word: 'how about',
pos: 'phrase',
ipa: '/haʊ əˈbaʊt/',
fa: 'نظرت درباره... چیه؟',
example: 'How about some milk?'
},
{
word: 'sounds good',
pos: 'phrase',
ipa: '/saʊndz ɡʊd/',
fa: 'به نظر خوب می‌رسه',
example: 'Sounds good!'
}
],
workbook: [
{
type:'find-equivalent',
section:'Reading',
title:'معادل کلمات فارسی مشخص شده را در متن انگلیسی پیدا کنید. (یک نمونه، انجام شده است.)',
titleEn:'Find the equivalent of the highlighted Persian words in the English text.',
farsiText:'شما برای حفظ سلامتی و تقویت بدنتان به تمامی انواع غذاها نیاز دارید. پزشکان می‌گویند که بهتر است غلاتی مانند نان مصرف کنید. باید تخم‌مرغ و پنیر بخورید و شیر بنوشید. همچنین باید گوشت، ماهی و حبوبات مصرف کنید. پزشکان همچنین می‌گویند که نیاز دارید هر روز مقدار زیادی میوه و سالاد میل کنید. اما توصیه می‌شود بیش از اندازه موادغذایی مانند کیک و بستنی که روغن یا شکر فراوانی دارند نخورید. همچنین لازم است آب کافی بنوشید.',
englishText:'You need all kinds of foods to keep your body strong and healthy. Doctors say you should eat grains, like bread. You should eat eggs, cheese, and drink milk. You should also eat meat, fish, and beans. Doctors also say you need to eat plenty of fruits and salad every day. But you should not eat too many foods with lots of fat or sugar such as cake and ice-cream. You also need to drink enough water.',
pairs:[
{fa:'نان',en:'bread',example:true},
{fa:'تخم‌مرغ',en:'eggs'},
{fa:'پنیر',en:'cheese'},
{fa:'شیر',en:'milk'},
{fa:'گوشت',en:'meat'},
{fa:'ماهی',en:'fish'},
{fa:'میوه',en:'fruits'},
{fa:'سالاد',en:'salad'},
{fa:'کیک',en:'cake'},
{fa:'بستنی',en:'ice-cream'},
{fa:'آب',en:'water'}
]
},
{
type:'food-preference',
section:'Reading',
title:'دبیر زبان انگلیسی جدول زیر را به شما داده تا غذاها و نوشیدنی‌های مورد علاقهٔ خود را مشخص کنید. دور آن‌ها خط بکشید.',
titleEn:'Your teacher gave you this table. Circle your favorite foods and drinks.',
foods:[
['rice and kebab','bread and kebab','rice and chicken'],
['fish','chicken','Spaghetti']
],
drinks:['cake and jelly','water','tea','coffee','Orange juice']
},
{
type:'fill-table-from-text',
section:'Reading',
title:'با استفاده از متن داده شده، جاهای خالی را پر کنید.',
titleEn:'Use the text to fill the table.',
text:'Iranians have different eating habits. Some people like honey, cream, bread, and milk for breakfast. Some others like bread, cheese, dates, and tea. Still some others like cake and orange juice. For lunch, people sometimes have chicken, kebab, fish and rice. For dinner, they usually have an early light dinner including soup, salad, yoghurt, and bread.',
tableHeaders:['Food','Drink'],
sampleAnswers:{
Food:['honey, cream, bread, cheese, dates, cake, chicken, kebab, fish, rice, soup, salad, yoghurt'],
Drink:['milk, tea, orange juice']
}
},
{
type:'image-flashcards',
section:'Writing',
title:'معلم زبان انگلیسی از شما خواسته است تا برای موارد زیر فلش‌کارت بسازید. معادل انگلیسی تصاویر را در جاهای خالی بنویسید.',
titleEn:'Make flashcards. Write the English word for each food image.',
items:[
{emoji:'🌴',hint:'خرما',answer:'dates'},
{emoji:'🍢',hint:'کباب',answer:'kebab'},
{emoji:'💧',hint:'آب',answer:'water'},
{emoji:'🥗',hint:'سالاد',answer:'salad'},
{emoji:'🍚',hint:'برنج',answer:'rice'},
{emoji:'🍇',hint:'میوه',answer:'fruit'},
{emoji:'🍐',hint:'به',answer:'quince'},
{emoji:'☕',hint:'چای',answer:'tea'},
{emoji:'🍰',hint:'کیک',answer:'cake'},
{emoji:'🍞',hint:'نان',answer:'bread'},
{emoji:'🍗',hint:'مرغ',answer:'chicken'},
{emoji:'🥛',hint:'شیر',answer:'milk'}
]
},
{
type:'international-words',
section:'Writing',
title:'با این حروف، کلماتی انگلیسی بنویسید که در زبان فارسی نیز از آن‌ها استفاده می‌شود.',
titleEn:'Write English words using these letters, also used in Persian.',
letters:['a','k','m','e','b','p','i','t','n','u','s','g','d','l','r','f','v','w','h','o','x','y','c','j','q','z'],
examples:['Television','Omelet'],
slots:6
},
{
type:'family-meals',
section:'Writing',
title:'غذاهای دلخواه خود و اعضای خانواده‌تان را برای وعده‌های غذایی در جدول زیر بنویسید.',
titleEn:'Write favorite foods for each family member at each meal time.',
columns:['Name','Breakfast','Lunch','Dinner'],
rows:6
}
],
quiz: [
{q:'"What\'s your favorite _____?" — "Kebab."',qFa:'«غذای مورد علاقه‌ات چیه؟» — «کباب.»',options:['drink','food','color','number'],correct:1},
{q:'"I\'m thirsty." — "How about some _____?"',qFa:'«تشنمه.» — «یه کم ..... چطوره؟»',options:['kebab','rice','water','bread'],correct:2},
{q:'A drink that comes from oranges is _____.',qFa:'نوشیدنی که از پرتقال درست می‌شود ..... است.',options:['milk','juice','tea','water'],correct:1}
]
}
];
const WELCOME = {
words: ['Hotel','Headphones','Football','Ambulance','Iran','Laptop','Start','Telephone','Bank','Police','Delete','Bus','Taxi','Stop','SMS'],
alphabet: ['Aa','Bb','Cc','Dd','Ee','Ff','Gg','Hh','Ii','Jj','Kk','Ll','Mm','Nn','Oo','Pp','Qq','Rr','Ss','Tt','Uu','Vv','Ww','Xx','Yy','Zz'],
numbers: [1,2,3,4,5,6,7,8,9,10],
numberWords: ['one','two','three','four','five','six','seven','eight','nine','ten'],
colors: [
{name:'red',fa:'قرمز',hex:'#E74C3C'},
{name:'blue',fa:'آبی',hex:'#3498DB'},
{name:'yellow',fa:'زرد',hex:'#F1C40F'},
{name:'green',fa:'سبز',hex:'#27AE60'},
{name:'white',fa:'سفید',hex:'#FFFFFF'},
{name:'black',fa:'سیاه',hex:'#2C3E50'},
{name:'orange',fa:'نارنجی',hex:'#E67E22'},
{name:'pink',fa:'صورتی',hex:'#FF9FF3'},
{name:'gray',fa:'خاکستری',hex:'#95A5A6'}
],
classroom: ['door','blackboard','desk','pencil','chair','notebook','eraser','pen']
};
const REVIEWS = [
{
num: 1,
title: 'Review 1',
covers: 'Lessons 1-2',
description: 'مرور درس‌های ۱ و ۲',
summary: 'در درس‌های ۱ و ۲ یاد گرفتی چطور خودت رو معرفی کنی، با دیگران احوال‌پرسی کنی، نام دیگران رو بپرسی و دوست‌هات رو معرفی کنی.',
summaryItems: [
{icon:'👋',title:'احوال‌پرسی',desc:'Hi, Hello, Good morning/afternoon, How are you?'},
{icon:'🪪',title:'معرفی خود',desc:"What's your name? My name is..., I'm..., My first/last name is..."},
{icon:'👥',title:'معرفی دیگران',desc:"Who's that? He's/She's my friend. This is..., Nice to meet you."},
{icon:'🔤',title:'حروف یاد گرفته',desc:'Aa, Kk, Mm, Ee, Bb, Pp'}
],
sections: [
{
title: 'Introducing Oneself',
titleFa: 'معرفی خود',
color: '#FBC8B0',
items: [
{ask:'you can say your first and last name.',askFa:'می‌تونی نام و نام خانوادگی‌ات رو بگی.',template:'My first name is _____ . My last name is _____ .',inputs:2},
{ask:"you can ask other people's names.",askFa:'می‌تونی نام دیگران رو بپرسی.',template:"What's your _____ ?",inputs:1}
]
},
{
title: 'Introducing Others',
titleFa: 'معرفی دیگران',
color: '#FFE9A8',
items: [
{ask:'you can introduce a friend to the class.',askFa:'می‌تونی دوستت رو به کلاس معرفی کنی.',template:'This is _____ .',inputs:1},
{ask:'you can greet people.',askFa:'می‌تونی به دیگران سلام و خوش‌آمد بگی.',template:'Nice to _____ .',inputs:1},
{ask:"you can answer people's greetings.",askFa:'می‌تونی به سلام و خوش‌آمد دیگران جواب بدی.',template:'Nice to _____ .',inputs:1}
]
},
{
title: 'Sounds and Letters',
titleFa: 'حروف و اصوات',
color: '#D9C5E8',
items: [
{ask:'you can spell and write your name.',askFa:'می‌تونی اسم خودت رو هجی کنی و بنویسی.',template:'_____',inputs:1,placeholder:'Your name'},
{ask:'you can say and write one word for each of the following letters.',askFa:'می‌تونی برای هر حرف یک کلمه بگی و بنویسی.',type:'letters',letters:['Aa','Kk','Mm','Ee','Bb','Pp']}
]
}
]
},
{
num: 2,
title: 'Review 2',
covers: 'Lessons 3-4',
description: 'مرور درس‌های ۳ و ۴',
summary: 'در درس‌های ۳ و ۴ یاد گرفتی چطور درباره سن، تاریخ تولد و خانواده‌ات صحبت کنی.',
summaryItems: [
{icon:'🎂',title:'سن و تولد',desc:'How old are you? When\'s your birthday?'},
{icon:'📅',title:'ماه‌ها',desc:'In Farvardin, Ordibehesht, Khordad...'},
{icon:'👨‍👩‍👧‍👦',title:'خانواده',desc:'My father, mother, sister, brother, uncle, aunt'},
{icon:'💼',title:'شغل‌ها',desc:'Doctor, teacher, nurse, pilot, mechanic, driver'},
{icon:'🔤',title:'حروف یاد گرفته',desc:'Ii, Tt, Nn, Uu, Ss, Gg'}
],
sections: [
{
title: 'Talking about Age and Birthdays',
titleFa: 'صحبت درباره سن و تولد',
color: '#FBC8B0',
items: [
{ask:'you can say your age.',askFa:'می‌تونی سنت رو بگی.',template:'I am _____ .',inputs:1},
{ask:"you can ask your friend's age.",askFa:'می‌تونی سن دوستت رو بپرسی.',template:'How _____ ?',inputs:1},
{ask:'you can say the month of your birth.',askFa:'می‌تونی ماه تولدت رو بگی.',template:'My birthday is _____ .',inputs:1},
{ask:"you can ask the month of your friend's birth.",askFa:'می‌تونی ماه تولد دوستت رو بپرسی.',template:"When's _____ ?",inputs:1}
]
},
{
title: 'Talking about your Family',
titleFa: 'صحبت درباره خانواده',
color: '#FFE9A8',
items: [
{ask:'you can introduce your family members.',askFa:'می‌تونی اعضای خانواده‌ات رو معرفی کنی.',template:"My _____'s name is _____ .",inputs:2},
{ask:'you can say their jobs.',askFa:'می‌تونی شغل اعضای خانواده‌ات رو بگی.',template:'My _____ is a _____ .',inputs:2}
]
},
{
title: 'Sounds and Letters',
titleFa: 'حروف و اصوات',
color: '#D9C5E8',
items: [
{ask:'you can spell and write what your family members do.',askFa:'می‌تونی شغل اعضای خانواده رو هجی کنی و بنویسی.',type:'family-jobs',fields:[
{label:"Your father's job",labelFa:'شغل پدرت'},
{label:"Your mother's job",labelFa:'شغل مادرت'},
{label:"Your brother's job",labelFa:'شغل برادرت'},
{label:"Your sister's job",labelFa:'شغل خواهرت'}
]},
{ask:'you can count from 1 to 20.',askFa:'می‌تونی از ۱ تا ۲۰ بشماری.',type:'count-check'},
{ask:'you can say and write one word for each of the following letters.',askFa:'می‌تونی برای هر حرف یک کلمه بگی و بنویسی.',type:'letters',letters:['Ii','Tt','Nn','Uu','Ss','Gg']}
]
}
]
},
{
num: 3,
title: 'Review 3',
covers: 'Lessons 5-6',
description: 'مرور درس‌های ۵ و ۶',
summary: 'در درس‌های ۵ و ۶ یاد گرفتی درباره ظاهر افراد، خانه و فعالیت‌هایی که افراد در حال انجام دادن هستند صحبت کنی.',
summaryItems: [
{icon:'👔',title:'توصیف ظاهر',desc:'Tall, short, young, old · suit, shirt, jacket'},
{icon:'🎨',title:'رنگ‌ها',desc:'Black, white, red, blue, green, yellow...'},
{icon:'🏠',title:'اتاق‌های خانه',desc:'Bedroom, kitchen, living room, garage'},
{icon:'🏃',title:'فعالیت‌های جاری',desc:"He's cooking. She's reading. They're playing."},
{icon:'🔤',title:'حروف یاد گرفته',desc:'Dd, Ll, Rr, Ff, Vv, Ww'}
],
sections: [
{
title: 'Talking about Appearance',
titleFa: 'صحبت درباره ظاهر',
color: '#FBC8B0',
items: [
{ask:'you can say what you look like (height and clothes).',askFa:'می‌تونی ظاهر خودت (قد و لباس) رو توصیف کنی.',template:'I am _____ . I am wearing _____ .',inputs:2},
{ask:"you can describe your friend's appearance (age, clothes, and color).",askFa:'می‌تونی ظاهر دوستت (سن، لباس و رنگ) رو توصیف کنی.',template:'He/She is _____ .',inputs:1}
]
},
{
title: 'Naming Parts of a House',
titleFa: 'نام بردن قسمت‌های خانه',
color: '#B5D88A',
items: [
{ask:'you can name four places in your house.',askFa:'می‌تونی چهار قسمت از خانه‌ات رو نام ببری.',type:'four-rooms'}
]
},
{
title: 'Talking about What You Are Doing',
titleFa: 'صحبت درباره فعالیت جاری',
color: '#FFE9A8',
items: [
{ask:'you can say what people around you are doing now.',askFa:'می‌تونی بگی افراد اطرافت در حال چه کاری هستند.',template:'(Ali) is _____ . (Maryam and Nahid) are _____ .',inputs:2}
]
},
{
title: 'Sounds and Letters',
titleFa: 'حروف و اصوات',
color: '#D9C5E8',
items: [
{ask:'you can say and write one word for each of the following letters.',askFa:'می‌تونی برای هر حرف یک کلمه بگی و بنویسی.',type:'letters',letters:['Dd','Ll','Rr','Ff','Vv','Ww']}
]
}
]
},
{
num: 4,
title: 'Review 4',
covers: 'Lessons 7-8',
description: 'مرور درس‌های ۷ و ۸',
summary: 'در درس‌های ۷ و ۸ یاد گرفتی درباره آدرس، شماره تلفن، گفتن ساعت و غذای مورد علاقه‌ات صحبت کنی.',
summaryItems: [
{icon:'📍',title:'آدرس',desc:"What's your address? Where do you live?"},
{icon:'📞',title:'شماره تلفن',desc:'My phone number is...'},
{icon:'⏰',title:'گفتن ساعت',desc:"It's 5 o'clock. It's 7:30 in the evening."},
{icon:'🍽️',title:'غذا و نوشیدنی',desc:'Kebab, rice, chicken, fruit, juice, tea'},
{icon:'💡',title:'پیشنهاد دادن',desc:"Let's have... How about some...?"},
{icon:'🔤',title:'حروف یاد گرفته',desc:'Oo, Hh, Xx, Yy, Cc, Jj, Qq, Zz'}
],
sections: [
{
title: 'Talking about Your Address',
titleFa: 'صحبت درباره آدرس',
color: '#FBC8B0',
items: [
{ask:'you can say your home address.',askFa:'می‌تونی آدرس خونه‌ات رو بگی.',template:'My address is _____ .',inputs:1},
{ask:'you can say your home/mobile phone number.',askFa:'می‌تونی شماره تلفن خونه/موبایلت رو بگی.',template:'My _____ phone number is _____ .',inputs:2},
{ask:"you can ask your friend's address and telephone number.",askFa:'می‌تونی آدرس و شماره تلفن دوستت رو بپرسی.',template:'What _____ ?',inputs:1}
]
},
{
title: 'Telling the Time',
titleFa: 'گفتن ساعت',
color: '#FFE9A8',
items: [
{ask:'you can say what time it is now.',askFa:'می‌تونی بگی الان ساعت چنده.',template:'It is _____ .',inputs:1},
{ask:'you can ask your friend the time.',askFa:'می‌تونی از دوستت ساعت رو بپرسی.',template:'What _____ ?',inputs:1}
]
},
{
title: 'Talking about Your Favorite Food',
titleFa: 'صحبت درباره غذای مورد علاقه',
color: '#B5D88A',
items: [
{ask:'you can say your favorite food.',askFa:'می‌تونی غذای مورد علاقه‌ات رو بگی.',template:'My favorite _____ is _____ .',inputs:2},
{ask:"you can ask your friend about his/her favorite food.",askFa:'می‌تونی از دوستت بپرسی غذای مورد علاقه‌اش چیه.',template:'What _____ ?',inputs:1},
{ask:'you can suggest your friend have something to eat or drink.',askFa:'می‌تونی به دوستت پیشنهاد بدی چیزی بخوره یا بنوشه.',template:"Let's _____ . How _____ ?",inputs:2}
]
},
{
title: 'Sounds and Letters',
titleFa: 'حروف و اصوات',
color: '#D9C5E8',
items: [
{ask:'you can say and write one word for each of the following letters.',askFa:'می‌تونی برای هر حرف یک کلمه بگی و بنویسی.',type:'letters',letters:['Oo','Hh','Xx','Yy','Cc','Jj','Qq','Zz']}
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
