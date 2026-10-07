/* ═══════════════════════════════════════════════
   GRADE 8 — PHOTO DICTIONARY DATA
   تمام کلمات photo dictionary پایه ۸ مطابق کتاب
   ═══════════════════════════════════════════════ */

const PHOTO_DICT_G8 = [
  {
    section: 'Lesson 1 — My Nationality',
    sectionFa: 'درس ۱ — ملیت من',
    color: '#7C3AED',
    words: [
      // Continents
      {en:'Asia / Asian', fa:'آسیا / آسیایی', ipa:'/ˈeɪʒə/ /ˈeɪʒən/'},
      {en:'Europe / European', fa:'اروپا / اروپایی', ipa:'/ˈjʊrəp/ /ˌjʊrəˈpiːən/'},
      {en:'Africa / African', fa:'آفریقا / آفریقایی', ipa:'/ˈæfrɪkə/ /ˈæfrɪkən/'},
      {en:'North America / North American', fa:'آمریکای شمالی', ipa:'/nɔːrθ əˈmerɪkə/'},
      {en:'South America / South American', fa:'آمریکای جنوبی', ipa:'/saʊθ əˈmerɪkə/'},
      {en:'Australia / Australian', fa:'استرالیا / استرالیایی', ipa:'/ɔːˈstreɪliə/'},
      // Countries
      {en:'Iran / Iranian', fa:'ایران / ایرانی', ipa:'/ɪˈrɑːn/ /ɪˈreɪniən/'},
      {en:'China / Chinese', fa:'چین / چینی', ipa:'/ˈtʃaɪnə/ /tʃaɪˈniːz/'}
    ]
  },
  {
    section: 'Lesson 2 — My Week',
    sectionFa: 'درس ۲ — هفته من',
    color: '#2A8C6E',
    words: [
      // Time concepts
      {en:'weekdays', fa:'روزهای کاری هفته', ipa:'/ˈwiːkdeɪz/'},
      {en:'weekend', fa:'آخر هفته', ipa:'/ˈwiːkend/'},
      // Days
      {en:'Saturday', fa:'شنبه', ipa:'/ˈsætərdeɪ/'},
      {en:'Sunday', fa:'یکشنبه', ipa:'/ˈsʌndeɪ/'},
      {en:'Monday', fa:'دوشنبه', ipa:'/ˈmʌndeɪ/'},
      {en:'Tuesday', fa:'سه‌شنبه', ipa:'/ˈtuːzdeɪ/'},
      {en:'Wednesday', fa:'چهارشنبه', ipa:'/ˈwenzdeɪ/'},
      {en:'Thursday', fa:'پنج‌شنبه', ipa:'/ˈθɜːrzdeɪ/'},
      {en:'Friday', fa:'جمعه', ipa:'/ˈfraɪdeɪ/'},
      // Activities
      {en:'go to the gym', fa:'به باشگاه رفتن', ipa:'/ɡoʊ tuː ðə dʒɪm/'},
      {en:'visit relatives', fa:'دیدن اقوام', ipa:'/ˈvɪzɪt ˈrelətɪvz/'},
      {en:'watch TV', fa:'تلویزیون دیدن', ipa:'/wɑːtʃ ˌtiːˈviː/'},
      {en:'day', fa:'روز', ipa:'/deɪ/'},
      {en:'go to school', fa:'به مدرسه رفتن', ipa:'/ɡoʊ tuː skuːl/'},
      {en:'go to library', fa:'به کتابخانه رفتن', ipa:'/ɡoʊ tuː ˈlaɪbreri/'},
      {en:'go shopping', fa:'خرید رفتن', ipa:'/ɡoʊ ˈʃɑːpɪŋ/'},
      {en:'relax', fa:'استراحت کردن', ipa:'/rɪˈlæks/'},
      {en:'climb a mountain', fa:'کوهنوردی', ipa:'/klaɪm ə ˈmaʊntən/'},
      {en:'study lessons', fa:'درس خواندن', ipa:'/ˈstʌdi ˈlesənz/'},
      {en:'play sports', fa:'ورزش کردن', ipa:'/pleɪ spɔːrts/'}
    ]
  },
  {
    section: 'Lesson 3 — My Abilities',
    sectionFa: 'درس ۳ — توانایی‌های من',
    color: '#C8541A',
    words: [
      {en:'recite the Holy Quran', fa:'قرائت قرآن کریم', ipa:'/rɪˈsaɪt ðə ˈhoʊli kɔːrˈɑːn/'},
      {en:'type', fa:'تایپ کردن', ipa:'/taɪp/'},
      {en:'read', fa:'خواندن', ipa:'/riːd/'},
      {en:'speak (English)', fa:'صحبت کردن (انگلیسی)', ipa:'/spiːk/'},
      {en:'draw', fa:'نقاشی کشیدن', ipa:'/drɔː/'},
      {en:'act in movies', fa:'بازیگری در فیلم‌ها', ipa:'/ækt ɪn ˈmuːviz/'},
      {en:'do a puzzle', fa:'حل کردن پازل', ipa:'/duː ə ˈpʌzəl/'},
      {en:'make tea', fa:'چای دم کردن', ipa:'/meɪk tiː/'},
      {en:'swim', fa:'شنا کردن', ipa:'/swɪm/'},
      {en:'cook food', fa:'آشپزی', ipa:'/kʊk fuːd/'},
      {en:'search the Web', fa:'جستجو در اینترنت', ipa:'/sɜːrtʃ ðə web/'},
      {en:'make a cake', fa:'کیک پختن', ipa:'/meɪk ə keɪk/'},
      {en:'tell a story', fa:'داستان گفتن', ipa:'/tel ə ˈstɔːri/'},
      {en:'run', fa:'دویدن', ipa:'/rʌn/'},
      {en:'take photos', fa:'عکس گرفتن', ipa:'/teɪk ˈfoʊtoʊz/'},
      {en:'ride a horse', fa:'اسب‌سواری', ipa:'/raɪd ə hɔːrs/'},
      {en:'ride a bicycle', fa:'دوچرخه‌سواری', ipa:'/raɪd ə ˈbaɪsɪkəl/'},
      {en:'draw a picture', fa:'نقاشی کشیدن', ipa:'/drɔː ə ˈpɪktʃər/'},
      {en:'play basketball', fa:'بسکتبال بازی کردن', ipa:'/pleɪ ˈbæskətbɔːl/'},
      {en:'work with a computer', fa:'کار با کامپیوتر', ipa:'/wɜːrk wɪð ə kəmˈpjuːtər/'},
      {en:'play ping-pong', fa:'پینگ‌پنگ بازی کردن', ipa:'/pleɪ ˈpɪŋpɑːŋ/'},
      {en:'play football', fa:'فوتبال بازی کردن', ipa:'/pleɪ ˈfʊtbɔːl/'},
      {en:'play tennis', fa:'تنیس بازی کردن', ipa:'/pleɪ ˈtenɪs/'},
      {en:'play chess', fa:'شطرنج بازی کردن', ipa:'/pleɪ tʃes/'},
      {en:'play badminton', fa:'بدمینتون بازی کردن', ipa:'/pleɪ ˈbædmɪntən/'},
      {en:'play volleyball', fa:'والیبال بازی کردن', ipa:'/pleɪ ˈvɑːlibɔːl/'}
    ]
  },
  {
    section: 'Lesson 4 — My Health',
    sectionFa: 'درس ۴ — سلامتی من',
    color: '#D4A04A',
    words: [
      {en:'patient', fa:'بیمار', ipa:'/ˈpeɪʃənt/'},
      {en:'cough', fa:'سرفه', ipa:'/kɒf/'},
      {en:'headache', fa:'سردرد', ipa:'/ˈhedeɪk/'},
      {en:'sneeze', fa:'عطسه', ipa:'/sniːz/'},
      {en:'backache', fa:'کمردرد', ipa:'/ˈbækeɪk/'},
      {en:'have a temperature', fa:'تب داشتن', ipa:'/hæv ə ˈtemprətʃər/'},
      {en:'fever', fa:'تب', ipa:'/ˈfiːvər/'},
      {en:'toothache', fa:'دندان‌درد', ipa:'/ˈtuːθeɪk/'},
      {en:'hospital', fa:'بیمارستان', ipa:'/ˈhɑːspɪtəl/'},
      {en:'stomachache', fa:'دل‌درد', ipa:'/ˈstʌmək.eɪk/'},
      {en:'doctor', fa:'دکتر', ipa:'/ˈdɑːktər/'},
      {en:'sore eyes', fa:'سوزش چشم', ipa:'/sɔːr aɪz/'},
      {en:'nurse', fa:'پرستار', ipa:'/nɜːrs/'},
      {en:'sore throat', fa:'گلودرد', ipa:'/sɔːr θroʊt/'},
      {en:'drugstore', fa:'داروخانه', ipa:'/ˈdrʌɡstɔːr/'},
      {en:'running nose', fa:'آبریزش بینی', ipa:'/ˈrʌnɪŋ noʊz/'},
      {en:'mumps', fa:'اوریون', ipa:'/mʌmps/'},
      {en:'measles', fa:'سرخک', ipa:'/ˈmiːzəlz/'}
    ]
  },
  {
    section: 'Lesson 5 — My City',
    sectionFa: 'درس ۵ — شهر من',
    color: '#2D5DC4',
    words: [
      // Directions
      {en:'north (N)', fa:'شمال', ipa:'/nɔːrθ/'},
      {en:'north-east (NE)', fa:'شمال شرقی', ipa:'/nɔːrθ iːst/'},
      {en:'south (S)', fa:'جنوب', ipa:'/saʊθ/'},
      {en:'north-west (NW)', fa:'شمال غربی', ipa:'/nɔːrθ west/'},
      {en:'east (E)', fa:'شرق', ipa:'/iːst/'},
      {en:'south-east (SE)', fa:'جنوب شرقی', ipa:'/saʊθ iːst/'},
      {en:'west (W)', fa:'غرب', ipa:'/west/'},
      {en:'south-west (SW)', fa:'جنوب غربی', ipa:'/saʊθ west/'},
      // Places
      {en:'mosque', fa:'مسجد', ipa:'/mɒsk/'},
      {en:'minaret', fa:'مناره', ipa:'/ˌmɪnəˈret/'},
      {en:'palace', fa:'کاخ', ipa:'/ˈpælɪs/'},
      {en:'store', fa:'فروشگاه', ipa:'/stɔːr/'},
      {en:'church', fa:'کلیسا', ipa:'/tʃɜːrtʃ/'},
      {en:'restaurant', fa:'رستوران', ipa:'/ˈrestrɒnt/'},
      {en:'tourists', fa:'گردشگران', ipa:'/ˈtʊrɪsts/'},
      {en:'stadium', fa:'ورزشگاه', ipa:'/ˈsteɪdiəm/'},
      {en:'building', fa:'ساختمان', ipa:'/ˈbɪldɪŋ/'},
      {en:'shrine', fa:'زیارتگاه', ipa:'/ʃraɪn/'},
      {en:'bridge', fa:'پل', ipa:'/brɪdʒ/'},
      {en:'metro', fa:'مترو', ipa:'/ˈmetroʊ/'},
      {en:'zoo', fa:'باغ‌وحش', ipa:'/zuː/'},
      {en:'airport', fa:'فرودگاه', ipa:'/ˈerpɔːrt/'},
      {en:'museum', fa:'موزه', ipa:'/mjuˈziːəm/'},
      {en:'train station', fa:'ایستگاه قطار', ipa:'/treɪn ˈsteɪʃən/'},
      {en:'park', fa:'پارک', ipa:'/pɑːrk/'},
      {en:'bus station', fa:'ایستگاه اتوبوس', ipa:'/bʌs ˈsteɪʃən/'},
      {en:'boulevard', fa:'بلوار', ipa:'/ˈbʊləvɑːrd/'},
      {en:'cinema', fa:'سینما', ipa:'/ˈsɪnəmə/'}
    ]
  },
  {
    section: 'Lesson 6 — My Village',
    sectionFa: 'درس ۶ — روستای من',
    color: '#5C7A3F',
    words: [
      {en:'village', fa:'روستا', ipa:'/ˈvɪlɪdʒ/'},
      {en:'tree', fa:'درخت', ipa:'/triː/'},
      {en:'flower', fa:'گل', ipa:'/ˈflaʊər/'},
      {en:'thermometer', fa:'دماسنج', ipa:'/θərˈmɑːmɪtər/'},
      {en:'field', fa:'مزرعه', ipa:'/fiːld/'},
      {en:'dry', fa:'خشک', ipa:'/draɪ/'},
      {en:'hot', fa:'گرم', ipa:'/hɒt/'},
      {en:'warm', fa:'ملایم/گرم', ipa:'/wɔːrm/'},
      {en:'cold', fa:'سرد', ipa:'/koʊld/'},
      {en:'farm', fa:'مزرعه', ipa:'/fɑːrm/'},
      {en:'rainy', fa:'بارانی', ipa:'/ˈreɪni/'},
      {en:'icy', fa:'یخی', ipa:'/ˈaɪsi/'},
      {en:'sunny', fa:'آفتابی', ipa:'/ˈsʌni/'},
      {en:'river', fa:'رودخانه', ipa:'/ˈrɪvər/'},
      {en:'snowy', fa:'برفی', ipa:'/ˈsnoʊi/'},
      {en:'summer', fa:'تابستان', ipa:'/ˈsʌmər/'},
      {en:'spring', fa:'بهار', ipa:'/sprɪŋ/'},
      {en:'winter', fa:'زمستان', ipa:'/ˈwɪntər/'},
      {en:'fall', fa:'پاییز', ipa:'/fɔːl/'},
      {en:'mountain', fa:'کوه', ipa:'/ˈmaʊntən/'},
      {en:'hill', fa:'تپه', ipa:'/hɪl/'},
      {en:'tractor', fa:'تراکتور', ipa:'/ˈtræktər/'},
      {en:'sunflower', fa:'آفتابگردان', ipa:'/ˈsʌnflaʊər/'},
      {en:'plow', fa:'شخم زدن', ipa:'/plaʊ/'},
      {en:'work on the farm', fa:'کار در مزرعه', ipa:'/wɜːrk ɒn ðə fɑːrm/'},
      {en:'animals', fa:'حیوانات', ipa:'/ˈænɪməlz/'},
      {en:'wind', fa:'باد', ipa:'/wɪnd/'},
      {en:'cow', fa:'گاو', ipa:'/kaʊ/'},
      {en:'dog', fa:'سگ', ipa:'/dɒɡ/'},
      {en:'horse', fa:'اسب', ipa:'/hɔːrs/'},
      {en:'hen', fa:'مرغ', ipa:'/hen/'},
      {en:'chicken', fa:'جوجه', ipa:'/ˈtʃɪkən/'},
      {en:'cattle', fa:'گاو/دام', ipa:'/ˈkætəl/'}
    ]
  },
  {
    section: 'Lesson 7 — My Hobbies',
    sectionFa: 'درس ۷ — سرگرمی‌های من',
    color: '#D4A04A',
    words: [
      {en:'magazine', fa:'مجله', ipa:'/ˌmæɡəˈziːn/'},
      {en:'walking in the park', fa:'قدم زدن در پارک', ipa:'/ˈwɔːkɪŋ ɪn ðə pɑːrk/'},
      {en:'watching movies', fa:'فیلم دیدن', ipa:'/ˈwɑːtʃɪŋ ˈmuːviz/'},
      {en:'fishing', fa:'ماهیگیری', ipa:'/ˈfɪʃɪŋ/'},
      {en:'skiing', fa:'اسکی', ipa:'/ˈskiːɪŋ/'},
      {en:'playing computer games', fa:'بازی‌های کامپیوتری', ipa:'/ˈpleɪɪŋ kəmˈpjuːtər ɡeɪmz/'},
      {en:'listening to the radio', fa:'گوش دادن رادیو', ipa:'/ˈlɪsənɪŋ tuː ðə ˈreɪdioʊ/'},
      {en:'working in the garden', fa:'کار در باغ', ipa:'/ˈwɜːrkɪŋ ɪn ðə ˈɡɑːrdən/'},
      {en:'sports news', fa:'اخبار ورزشی', ipa:'/spɔːrts nuːz/'},
      {en:'going to the movies', fa:'به سینما رفتن', ipa:'/ˈɡoʊɪŋ tuː ðə ˈmuːviz/'},
      {en:'browsing the Internet', fa:'گشتن در اینترنت', ipa:'/ˈbraʊzɪŋ ðə ˈɪntərnet/'}
    ]
  }
];
