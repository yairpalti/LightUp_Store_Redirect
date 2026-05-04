/**
 * Client-side strings for event-success guide.
 * Locales: add to SUPPORTED, LANG_ORDER, FLAG, NATIVE_NAME, and STRINGS (copy en keys).
 * RTL: set in RTL_LANGS.
 * FLAG uses regional emoji as a compact cue; languages are not limited to one country.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'lightup-event-success-lang';

    /** Base language codes we ship (URL ?lang=xx, localStorage, <html lang>). */
    var SUPPORTED = ['en', 'es', 'ar', 'fr', 'pt', 'ru', 'de', 'it', 'nl', 'he'];

    /**
     * Menu order by approximate global speaker / web reach popularity among this set.
     * (English first, then Spanish, Arabic, French, Portuguese, Russian, German, Italian, Dutch, Hebrew.)
     */
    var LANG_ORDER = ['en', 'es', 'ar', 'fr', 'pt', 'ru', 'de', 'it', 'nl', 'he'];

    /** Regional flag emoji for UI (language ≠ country; used as compact visual cue only). */
    var FLAG = {
        en: '🇬🇧',
        es: '🇪🇸',
        ar: '🇸🇦',
        fr: '🇫🇷',
        pt: '🇧🇷',
        ru: '🇷🇺',
        de: '🇩🇪',
        it: '🇮🇹',
        nl: '🇳🇱',
        he: '🇮🇱'
    };

    var NATIVE_NAME = {
        en: 'English',
        he: 'עברית',
        ar: 'العربية',
        fr: 'Français',
        de: 'Deutsch',
        es: 'Español',
        pt: 'Português',
        it: 'Italiano',
        ru: 'Русский',
        nl: 'Nederlands'
    };

    var RTL_LANGS = ['ar', 'he'];

    var STRINGS = {
        en: {
            metaTitle: 'How to Make Your Light Show a Success — LightUp Crowd',
            metaDescription:
                'Production checklist for a successful LightUp Crowd show: app download and QR comms, venue placement, cameras, presenter cues, and crowd-facing screens.',
            langSelectLabel: 'Language',
            h1: 'How to Make Your Light Show a Success',
            intro:
                'A practical checklist for production and show callers. Share this with your venue, screens team, and stage management so the crowd is ready before the first cue.',
            tocAria: 'On this page',
            tocBefore: 'Before the event',
            tocOnDay: 'On event day',
            tocDuring: 'During the event',
            beforeH2: 'Before the event',
            beforeLead:
                'Line up comms, creative, and venue so guests know how to join and where to look.',
            before1s: 'App download and QR package',
            before1h:
                ' — Send production and marketing the official download link (<a href="../download/index.html">lightupcrowd.com/download</a>) plus the event QR code and any join instructions from your LightUp Crowd event setup. Include short copy for email, SMS, and social.',
            before2s: 'Pre-show audience messaging',
            before2:
                'Add “download before you arrive” (or day-of Wi‑Fi friendly steps) to tickets, confirmations, and preshow slides so the app is already installed when doors open.',
            before3s: 'Screens and print plan',
            before3:
                'Decide where QR will appear (entrances, concourse, seat-back cards, sponsor loops). Reserve space in run-of-show graphics for QR and one-line “scan to join the light show.”',
            before4s: 'Presenter script',
            before4:
                'Draft a short announcer line for the host or MC: open the app, brightness up, hold phones high when cued.',
            before5s: 'Camera and IMAG',
            before5:
                'Confirm high / wide shots for the crowd canvas: truss cams, delay towers, or upper-bowl positions so the light pattern reads on broadcast and in-venue replays.',
            before6s: 'Crowd-facing “live crowd” feeds',
            before6:
                'If you show the audience on LED or side screens, align with video director on cuts that showcase raised phones during key moments.',
            imgSlotBefore1: 'Image placeholder — pre-event comms or QR artwork.',
            imgSlotBefore2: 'Swap this div for a figure with',
            onDayH2: 'On event day',
            onDayLead: 'Make joining obvious the moment people walk in and when they take their seats.',
            on1s: 'QR at entrances and choke points',
            on1:
                'Post readable QR on doors, wristband tables, and main ingress so the first touch is “scan → install → save event.”',
            on2s: 'QR on big screens',
            on2:
                'Run a full-screen slide with QR before house open, during walk-in music, and in hold loops. Keep it on long enough for a clean phone photo from the back row.',
            on3s: 'Staff one-liner',
            on3:
                'Brief ushers and FOH: “The light show is the LightUp Crowd app — scan any QR or use the link on your ticket.”',
            on4s: 'How to open the app and hold the phone',
            on4:
                'On screen and in voiceover: open the app, select this event, turn brightness up, hold the phone steady above shoulder height when the show starts (flashlight or screen mode per your runbook).',
            on5s: 'High cameras ready',
            on5: 'Check wide shots in preview; adjust exposure if LED wash blows out phones.',
            imgSlotOn1: 'Image placeholder — entrance QR or arena screen.',
            duringH2: 'During the event',
            duringLead:
                'Drive participation with clear cues and visuals that show the crowd back to itself.',
            dur1s: 'Singer or presenter call',
            dur1:
                'Have talent explicitly ask everyone to open LightUp Crowd, confirm they are in tonight’s event, and raise phones on the next cue.',
            dur2s: 'Live screens showing the crowd',
            dur2:
                'Cut IMAG or program feed to shots that show the sea of lights; it reinforces behavior for sections that are slower to join.',
            dur3s: 'Operator and showcaller',
            dur3:
                'Keep download + QR slide in backup for late arrivals; repeat a short “get in the app” line before the first mass effect.',
            dur4s: 'Lighting and content',
            dur4:
                'Brief LD on moments when house lights come up slightly so phone lights read on camera without killing mood.',
            imgSlotDur1: 'Image placeholder — crowd with phones up or IMAG example.',
            footerHome: 'LightUp Crowd home'
        },
        he: {
            metaTitle: 'איך להפוך את מופע האורות שלכם להצלחה — LightUp Crowd',
            metaDescription:
                'רשימת בדיקה לייצור: הורדת האפליקציה וחומרי QR, מיקום באולם, מצלמות, הנחיות למנחה ושידור הקהל למסכים.',
            langSelectLabel: 'שפה',
            h1: 'איך להפוך את מופע האורות שלכם להצלחה',
            intro:
                'רשימת בדיקה מעשית לייצור ולמנהלי מופע. שתפו עם האולם, צוות המסכים וניהול הבמה כדי שהקהל יהיה מוכן לפני הקו הראשון.',
            tocAria: 'בעמוד זה',
            tocBefore: 'לפני האירוע',
            tocOnDay: 'ביום האירוע',
            tocDuring: 'במהלך האירוע',
            beforeH2: 'לפני האירוע',
            beforeLead:
                'לסדר תקשורת, קריאייטיב ואולם כדי שהאורחים יידעו איך להצטרף ולאן להסתכל.',
            before1s: 'חבילת הורדת האפליקציה ו־QR',
            before1h:
                ' — שלחו לייצור ולשיווק את קישור ההורדה הרשמי (<a href="../download/index.html">lightupcrowd.com/download</a>) יחד עם קוד ה־QR של האירוע וכל הנחיות ההצטרפות מהגדרת האירוע ב־LightUp Crowd. כללו ניסוח קצר למייל, SMS ורשתות חברתיות.',
            before2s: 'מסרים לקהל לפני המופע',
            before2:
                'הוסיפו ״הורידו לפני שמגיעים״ (או צעדים ידידותיים ל־Wi‑Fi ביום האירוע) לכרטיסים, אישורים ושקפים לפני המופע, כדי שהאפליקציה כבר מותקנת כשפותחים דלתות.',
            before3s: 'תכנון מסכים ודפוס',
            before3:
                'החליטו איפה יופיע QR (כניסות, מסדרון, כרטיסים בגב המושב, לופים של נותני חסות). שמרו מקום בגרפיקת ריצת המופע ל־QR ולשורה אחת: ״סרקו כדי להצטרף למופע האורות״.',
            before4s: 'תסריט למנחה',
            before4:
                'נסחו שורה קצרה למנחה או ל־MC: לפתוח את האפליקציה, להעלות בהירות, להרים טלפונים בגובה כשנותנים את הקו.',
            before5s: 'מצלמה ו־IMAG',
            before5:
                'וודאו צילומים גבוהים / רחבים ל״בד קהל״: מצלמות טראס, מגדלי השהיה או עמדות גלובס עליון, כדי שדפוס האורות ייקרא בשידור ובהקרנות באולם.',
            before6s: 'שידורים חיים של הקהל למסכים',
            before6:
                'אם מציגים את הקהל על LED או מסכי צד, תאמו עם במאי הווידאו חיתוכים שמדגישים טלפונים מורמים ברגעי שיא.',
            imgSlotBefore1: 'מקום לתמונה — חומרי תקשורת לפני האירוע או עיצוב QR.',
            imgSlotBefore2: 'החליפו את הבלוק ב־figure עם',
            onDayH2: 'ביום האירוע',
            onDayLead:
                'הפכו את ההצטרפות למובנת ברגע שנכנסים ובשעה שיושבים.',
            on1s: 'QR בכניסות ובנקודות צוואר בקבוק',
            on1:
                'הציבו QR קריא על דלתות, שולחנות צמידים וכניסה ראשית — המגע הראשון הוא ״סריקה → התקנה → שמירת האירוע״.',
            on2s: 'QR על מסכים גדולים',
            on2:
                'הריצו שקף מסך מלא עם QR לפני פתיחת הבית, במוזיקת כניסה ובלופי המתנה. השאירו מספיק זמן לצילום טלפון נקי גם מהשורה האחורית.',
            on3s: 'משפט אחד לצוות',
            on3:
                'תדרכו דיילים ו־FOH: ״מופע האורות הוא אפליקציית LightUp Crowd — סרקו כל QR או השתמשו בקישור בכרטיס״.',
            on4s: 'איך לפתוח את האפליקציה ולהחזיק את הטלפון',
            on4:
                'במסך ובעמוד הקול: לפתוח את האפליקציה, לבחור את האירוע הזה, להעלות בהירות, להחזיק את הטלפון יציב מעל גובה הכתף כשהמופע מתחיל (פנס או מסך לפי ספר ההפעלה שלכם).',
            on5s: 'מצלמות גבוהות מוכנות',
            on5: 'בדקו צילומים רחבים בפריוויו; כוונו חשיפה אם תאורת LED ״שורפת״ את הטלפונים.',
            imgSlotOn1: 'מקום לתמונה — QR בכניסה או מסך אולם.',
            duringH2: 'במהלך האירוע',
            duringLead:
                'הניעו השתתפות עם קווים ברורים וחזות שמחזירה את הקהל אל עצמו.',
            dur1s: 'קריאה מהזמר או המנחה',
            dur1:
                'בקשו מהאמנים במפורש שכולם יפתחו את LightUp Crowd, יוודאו שהם באירוע של הערב, ויירימו טלפונים בקו הבא.',
            dur2s: 'מסכים חיים שמראים את הקהל',
            dur2:
                'עברו ב־IMAG או בשידור לשוטים שמראים את ים האורות — זה מחזק התנהגות באזורים שמצטרפים לאט יותר.',
            dur3s: 'מפעיל ומנהל מופע',
            dur3:
                'שמרו שקף הורדה + QR בגיבוי למאחרים; חזרו על שורה קצרה ״היכנסו לאפליקציה״ לפני האפקט ההמוני הראשון.',
            dur4s: 'תאורה ותוכן',
            dur4:
                'תדרכו את תאורן הבמה על רגעים שבהם אור הבית עולה מעט כדי שהאורות בטלפון ייראו במצלמה בלי להרוס את האווירה.',
            imgSlotDur1: 'מקום לתמונה — קהל עם טלפונים מורמים או דוגמת IMAG.',
            footerHome: 'דף הבית של LightUp Crowd'
        },
        ar: {
            metaTitle: 'كيف تجعل عرض الأضواء لديك ناجحًا — LightUp Crowd',
            metaDescription:
                'قائمة تحقق للإنتاج: تنزيل التطبيق ومواد QR، الموقع في المكان، الكاميرات، تعليمات المقدّم، وعرض الجمهور على الشاشات.',
            langSelectLabel: 'اللغة',
            h1: 'كيف تجعل عرض الأضواء لديك ناجحًا',
            intro:
                'قائمة تحقق عملية للإنتاج ومنسّقي العروض. شاركوها مع المكان وفريق الشاشات وإدارة المسرح ليكون الجمهور جاهزًا قبل أول إشارة.',
            tocAria: 'في هذه الصفحة',
            tocBefore: 'قبل الفعالية',
            tocOnDay: 'يوم الفعالية',
            tocDuring: 'أثناء الفعالية',
            beforeH2: 'قبل الفعالية',
            beforeLead:
                'نسّقوا الاتصالات والإبداع والمكان ليعرف الضيوف كيف ينضمون وأين ينظرون.',
            before1s: 'حزمة تنزيل التطبيق وQR',
            before1h:
                ' — أرسلوا للإنتاج والتسويق رابط التنزيل الرسمي (<a href="../download/index.html">lightupcrowd.com/download</a>) مع رمز QR للفعالية وأي تعليمات انضمام من إعداد فعالية LightUp Crowd. أضيفوا نصًا قصيرًا للبريد والرسائل النصية ووسائل التواصل.',
            before2s: 'رسائل للجمهور قبل العرض',
            before2:
                'أضيفوا «حمّلوا قبل وصولكم» (أو خطوات مناسبة لشبكة يوم الفعالية) إلى التذاكر والتأكيدات وشرائح ما قبل العرض ليكون التطبيق مثبتًا عند فتح الأبواب.',
            before3s: 'خطة الشاشات والمطبوعات',
            before3:
                'قرروا أين يظهر QR (المداخل، الممر، بطاقات المقاعد، حلقات الرعاة). احجزوا مساحة في رسومات سير العرض لـ QR وسطر واحد: «امسحوا للانضمام إلى عرض الأضواء».',
            before4s: 'نص المقدّم',
            before4:
                'جهّزوا سطرًا قصيرًا للمضيف أو الـ MC: افتحوا التطبيق، ارفعوا السطوع، ارفعوا الهواتف عند الإشارة.',
            before5s: 'الكاميرا وIMAG',
            before5:
                'تأكدوا من لقطات عالية/واسعة لـ«لوحة الجمهور»: كاميرات الجمالون، أبراج التأخير، أو مواقع علوية ليقرأ نمط الإضاءة في البث وإعادات العرض في المكان.',
            before6s: 'بث مباشر للجمهور على الشاشات',
            before6:
                'إذا عرضتم الجمهور على LED أو شاشات جانبية، نسّقوا مع مخرج الفيديو قصاصات تبرز الهواتف المرفوعة في اللحظات المهمة.',
            imgSlotBefore1: 'مكان للصورة — مواد تواصل قبل الفعالية أو تصميم QR.',
            imgSlotBefore2: 'استبدلوا هذا المكوّن بعنصر figure مع',
            onDayH2: 'يوم الفعالية',
            onDayLead:
                'اجعلوا الانضمام واضحًا من لحظة الدخول وحتى الجلوس.',
            on1s: 'QR عند المداخل والاختناقات',
            on1:
                'علّقوا QRًا واضحًا على الأبواب وطاولات الأساور والمدخل الرئيسي — أول تعامل هو «مسح → تثبيت → حفظ الفعالية».',
            on2s: 'QR على الشاشات الكبيرة',
            on2:
                'شغّلوا شريحة ملء الشاشة مع QR قبل فتح البيت، أثناء موسيقى الدخول، وحلقات الانتظار. أبقواها وقتًا كافيًا لالتقاط صورة هاتف واضحة من الصف الخلفي.',
            on3s: 'جملة واحدة للطاقم',
            on3:
                'وجّهوا المرشدين وFOH: «عرض الأضواء هو تطبيق LightUp Crowd — امسحوا أي QR أو استخدموا الرابط في تذكرتكم».',
            on4s: 'كيف تفتح التطبيق وتمسك الهاتف',
            on4:
                'على الشاشة وفي الصوت: افتحوا التطبيق، اختاروا هذه الفعالية، ارفعوا السطوع، أمسكوا الهاتف ثابتًا فوق ارتفاع الكتف عند بدء العرض (فلاش أو شاشة حسب دليلكم).',
            on5s: 'الكاميرات العالية جاهزة',
            on5: 'افحصوا اللقطات الواسعة في المعاينة؛ اضبطوا التعريض إذا أطفأت إضاءة LED الهواتف.',
            imgSlotOn1: 'مكان للصورة — QR عند المدخل أو شاشة الملعب.',
            duringH2: 'أثناء الفعالية',
            duringLead:
                'شجّعوا المشاركة بإشارات واضحة ومشاهد تعيد الجمهور إلى نفسه.',
            dur1s: 'نداء من المغني أو المقدّم',
            dur1:
                'اطلبوا من الفنانين صراحةً أن يفتح الجميع LightUp Crowd، يتأكد أنه في فعالية الليلة، ويرفع الهواتف عند الإشارة التالية.',
            dur2s: 'شاشات حية تعرض الجمهور',
            dur2:
                'انتقلوا في IMAG أو البث إلى لقطات تُظهر بحر الأضواء؛ يعزز ذلك السلوك في الأقسام المتأخرة.',
            dur3s: 'المشغّل ومنسّق العرض',
            dur3:
                'احتفظوا بشريحة التنزيل + QR احتياطًا للواصلين متأخرًا؛ كرروا سطرًا قصيرًا «ادخلوا التطبيق» قبل أول تأثير جماعي.',
            dur4s: 'الإضاءة والمحتوى',
            dur4:
                'أوجزوا لمصمم الإضاءة لحظات يرتفع فيها إضاءة البيت قليلًا لتُقرأ أضواء الهاتف بالكاميرا دون إفساد الأجواء.',
            imgSlotDur1: 'مكان للصورة — جمهور بمرفوعات أو مثال IMAG.',
            footerHome: 'الرئيسية — LightUp Crowd'
        },
        fr: {
            metaTitle: 'Réussir votre spectacle lumineux — LightUp Crowd',
            metaDescription:
                'Checklist production pour un spectacle LightUp Crowd réussi : téléchargement de l’app et QR, placement sur site, caméras, consignes animateur, écrans montrant le public.',
            langSelectLabel: 'Langue',
            h1: 'Comment réussir votre spectacle lumineux',
            intro:
                'Liste pratique pour la production et les régisseurs. Partagez-la avec le lieu, l’équipe écrans et la régie plateau pour que le public soit prêt avant le premier cue.',
            tocAria: 'Sur cette page',
            tocBefore: 'Avant l’événement',
            tocOnDay: 'Le jour J',
            tocDuring: 'Pendant l’événement',
            beforeH2: 'Avant l’événement',
            beforeLead:
                'Alignez communication, création et lieu pour que le public sache comment rejoindre le show et où regarder.',
            before1s: 'Pack téléchargement app et QR',
            before1h:
                ' — Envoyez à la prod et au marketing le lien officiel (<a href="../download/index.html">lightupcrowd.com/download</a>), le QR de l’événement et les consignes d’accès de votre configuration LightUp Crowd. Prévoyez des textes courts pour e-mail, SMS et réseaux.',
            before2s: 'Messages public avant spectacle',
            before2:
                'Ajoutez « téléchargez avant d’arriver » (ou des étapes adaptées au Wi‑Fi le jour J) sur les billets, confirmations et slides preshow pour que l’app soit déjà installée à l’ouverture des portes.',
            before3s: 'Plan écrans et print',
            before3:
                'Décidez où apparaît le QR (entrées, coursives, cartes siège, boucles sponsors). Réservez une place dans les visuels de run of show pour le QR et une ligne « scannez pour rejoindre le spectacle lumineux ».',
            before4s: 'Script présentateur',
            before4:
                'Rédigez une phrase courte pour l’hôte ou le MC : ouvrir l’app, monter la luminosité, lever les téléphones sur le cue.',
            before5s: 'Caméra et IMAG',
            before5:
                'Validez des plans hauts/larges pour la « toile » du public : caméras truss, pylônes de retard, positions hautes pour que le motif se lise au broadcast et sur les replays in situ.',
            before6s: 'Retransmissions « public live »',
            before6:
                'Si le public est montré sur LED ou écrans latéraux, cadrer avec le réalisateur vidéo des cuts qui mettent en avant les téléphones levés aux moments clés.',
            imgSlotBefore1: 'Emplacement image — visuels com ou QR avant événement.',
            imgSlotBefore2: 'Remplacez ce bloc par une figure avec',
            onDayH2: 'Le jour J',
            onDayLead:
                'Rendez l’adhésion évidente dès l’entrée et une fois assis.',
            on1s: 'QR aux entrées et goulets',
            on1:
                'Affichez un QR lisible sur les portes, tables bracelets et entrée principale — le premier gestion est « scan → install → enregistrer l’événement ».',
            on2s: 'QR sur les grands écrans',
            on2:
                'Diffusez un plein écran avec QR avant ouverture salle, pendant la musique d’entrée et les boucles d’attente. Laissez assez longtemps pour une photo nette depuis le fond.',
            on3s: 'Phrase unique pour l’équipe',
            on3:
                'Briefez hôtesses et FOH : « le spectacle lumineux, c’est l’app LightUp Crowd — scannez un QR ou utilisez le lien sur votre billet ».',
            on4s: 'Ouvrir l’app et tenir le téléphone',
            on4:
                'À l’écran et en voix off : ouvrir l’app, choisir cet événement, monter la luminosité, tenir le téléphone stable au-dessus de l’épaule au début du show (lampe ou écran selon votre runbook).',
            on5s: 'Caméras hautes prêtes',
            on5: 'Contrôlez les plans larges au préprogramme ; ajustez l’exposition si le wash LED crame les téléphones.',
            imgSlotOn1: 'Emplacement image — QR entrée ou écran arène.',
            duringH2: 'Pendant l’événement',
            duringLead:
                'Boostez la participation avec des cues clairs et des visuels qui renvoient l’image du public.',
            dur1s: 'Appel chanteur ou présentateur',
            dur1:
                'Demandez explicitement aux artistes d’ouvrir LightUp Crowd, de vérifier qu’ils sont dans l’événement de ce soir et de lever les téléphones au prochain cue.',
            dur2s: 'Écrans montrant le public',
            dur2:
                'Coupez vers l’IMAG ou le programme sur des plans qui montrent la mer de lumières ; cela renforce les zones plus lentes à suivre.',
            dur3s: 'Opérateur et régisseur',
            dur3:
                'Gardez en secours la slide téléchargement + QR pour les arrivées tardives ; répétez une courte phrase « entrez dans l’app » avant le premier effet de masse.',
            dur4s: 'Lumière et contenu',
            dur4:
                'Briefez le LD sur des moments où la lumière salle remonte légèrement pour que les téléphones se lisent à la caméra sans casser l’ambiance.',
            imgSlotDur1: 'Emplacement image — public téléphones levés ou exemple IMAG.',
            footerHome: 'Accueil LightUp Crowd'
        },
        de: {
            metaTitle: 'So wird Ihre Lichtshow ein Erfolg — LightUp Crowd',
            metaDescription:
                'Produktions-Checklist für eine erfolgreiche LightUp Crowd-Show: App-Download und QR, Platzierung vor Ort, Kameras, Ansagen, Live-Bilder vom Publikum.',
            langSelectLabel: 'Sprache',
            h1: 'So wird Ihre Lichtshow ein Erfolg',
            intro:
                'Praktische Checkliste für Produktion und Showcaller. Teilen Sie sie mit Venue, Leinwandteam und Bühnenmanagement, damit das Publikum vor dem ersten Cue bereit ist.',
            tocAria: 'Auf dieser Seite',
            tocBefore: 'Vor der Veranstaltung',
            tocOnDay: 'Am Veranstaltungstag',
            tocDuring: 'Während der Veranstaltung',
            beforeH2: 'Vor der Veranstaltung',
            beforeLead:
                'Kommunikation, Kreation und Location abstimmen, damit Gäste wissen, wie sie mitmachen und wohin sie schauen.',
            before1s: 'Paket App-Download und QR',
            before1h:
                ' — Senden Sie Produktion und Marketing den offiziellen Download-Link (<a href="../download/index.html">lightupcrowd.com/download</a>), den Event-QR und alle Beitrittsinfos aus Ihrem LightUp Crowd-Setup. Kurze Texte für E-Mail, SMS und Social einplanen.',
            before2s: 'Publikumsbotschaften vor der Show',
            before2:
                'Ergänzen Sie Tickets, Bestätigungen und Preshow-Folien um „vor Ankunft herunterladen“ (oder tagetaugliche WLAN-Schritte), damit die App bei Türöffnung schon installiert ist.',
            before3s: 'Plan für Screens und Print',
            before3:
                'Legen Sie fest, wo QR erscheint (Eingänge, Concourse, Sitzkarten, Sponsor-Loops). Platz in der Run-of-Show-Grafik für QR und eine Zeile „scannen, um bei der Lichtshow mitzumachen“.',
            before4s: 'Ansagerskript',
            before4:
                'Formulieren Sie eine kurze Zeile für Host oder MC: App öffnen, Helligkeit hoch, Telefone beim Cue hochhalten.',
            before5s: 'Kamera und IMAG',
            before5:
                'Bestätigen Sie hohe/weite Einstellungen für die Publikumsfläche: Traversenkameras, Delay Towers oder obere Ränge, damit das Lichtmuster in Broadcast und Hallen-Replays lesbar ist.',
            before6s: 'Publikumsnahe „Live Crowd“-Feeds',
            before6:
                'Wenn das Publikum auf LED oder Seitenleinwänden gezeigt wird, mit dem Video-Regisseur Schnitte abstimmen, die erhobene Telefone in Schlüsselmomenten zeigen.',
            imgSlotBefore1: 'Bildplatzhalter — Comms vor dem Event oder QR-Grafik.',
            imgSlotBefore2: 'Ersetzen Sie diesen Block durch eine figure mit',
            onDayH2: 'Am Veranstaltungstag',
            onDayLead:
                'Machen Sie den Beitritt beim Hereinkommen und beim Platznehmen offensichtlich.',
            on1s: 'QR an Eingängen und Engstellen',
            on1:
                'Lesbaren QR an Türen, Armband-Tischen und Haupteingang anbringen — erster Schritt: „scannen → installieren → Event speichern“.',
            on2s: 'QR auf Großleinwänden',
            on2:
                'Vollbild-Folie mit QR vor Hausöffnung, bei Walk-in-Musik und in Warteschleifen zeigen. Genug lange für ein scharfes Handyfoto von hinten.',
            on3s: 'Ein-Satz-Briefing fürs Personal',
            on3:
                'Ordner und FOH briefen: „Die Lichtshow ist die LightUp Crowd App — jeden QR scannen oder Link auf dem Ticket nutzen.“',
            on4s: 'App öffnen und Telefon halten',
            on4:
                'Auf Screen und Voiceover: App öffnen, dieses Event wählen, Helligkeit hoch, Telefon beim Start ruhig über Schulterhöhe halten (Taschenlampe oder Screen laut Runbook).',
            on5s: 'Hohe Kameras bereit',
            on5: 'Weitwinkel in der Vorschau prüfen; Belichtung anpassen, wenn LED-Wash die Telefone überstrahlt.',
            imgSlotOn1: 'Bildplatzhalter — Eingangs-QR oder Arena-Screen.',
            duringH2: 'Während der Veranstaltung',
            duringLead:
                'Teilnahme mit klaren Cues und Bildern fördern, die das Publikum zurückspiegeln.',
            dur1s: 'Ansage Sänger oder Moderator',
            dur1:
                'Talente bitten, ausdrücklich LightUp Crowd zu öffnen, das heutige Event zu bestätigen und die Telefone beim nächsten Cue zu heben.',
            dur2s: 'Live-Screens mit Publikum',
            dur2:
                'Auf IMAG oder Programm zu Einstellungen schneiden, die das „Meer aus Lichtern“ zeigt — verstärkt Nachzügler-Bereiche.',
            dur3s: 'Operator und Showcaller',
            dur3:
                'Download- + QR-Folie für Nachzügler in Reserve; kurze „kommt in die App“-Zeile vor dem ersten Masseneffekt wiederholen.',
            dur4s: 'Licht und Content',
            dur4:
                'LD briefen, wann das Hauslicht leicht hochkommt, damit Telefonlichter in der Kamera lesbar bleiben, ohne die Stimmung zu killen.',
            imgSlotDur1: 'Bildplatzhalter — Publikum mit erhobenen Telefonen oder IMAG-Beispiel.',
            footerHome: 'LightUp Crowd Startseite'
        },
        es: {
            metaTitle: 'Cómo lograr que tu espectáculo de luces sea un éxito — LightUp Crowd',
            metaDescription:
                'Lista de producción para un espectáculo LightUp Crowd exitoso: descarga de la app y QR, ubicación en el recinto, cámaras, indicaciones al presentador, pantallas con el público.',
            langSelectLabel: 'Idioma',
            h1: 'Cómo lograr que tu espectáculo de luces sea un éxito',
            intro:
                'Lista práctica para producción y jefes de pista. Compártela con el recinto, el equipo de pantallas y la dirección de escena para que el público esté listo antes de la primera señal.',
            tocAria: 'En esta página',
            tocBefore: 'Antes del evento',
            tocOnDay: 'El día del evento',
            tocDuring: 'Durante el evento',
            beforeH2: 'Antes del evento',
            beforeLead:
                'Alinea comunicación, creativos y venue para que el público sepa cómo unirse y dónde mirar.',
            before1s: 'Paquete de descarga de la app y QR',
            before1h:
                ' — Envía a producción y marketing el enlace oficial (<a href="../download/index.html">lightupcrowd.com/download</a>), el QR del evento y las instrucciones de acceso de tu configuración LightUp Crowd. Incluye textos breves para email, SMS y redes.',
            before2s: 'Mensajes al público antes del show',
            before2:
                'Añade «descarga antes de llegar» (o pasos amigables con el Wi‑Fi del día) en entradas, confirmaciones y diapositivas previas para que la app ya esté instalada al abrir puertas.',
            before3s: 'Plan de pantallas e impresos',
            before3:
                'Decide dónde aparecerá el QR (entradas, pasillos, tarjetas en el asiento, bucles de patrocinio). Reserva espacio en los gráficos del run of show para el QR y una línea «escanea para unirte al espectáculo de luces».',
            before4s: 'Guión del presentador',
            before4:
                'Redacta una frase corta para el anfitrión o MC: abrir la app, subir brillo, levantar los móviles en la señal.',
            before5s: 'Cámara e IMAG',
            before5:
                'Confirma planos altos/anchos para el «lienzo» del público: cámaras en truss, torres de retardo o posiciones altas para que el patrón se lea en broadcast y repeticiones en sala.',
            before6s: 'Señales en vivo del público en pantalla',
            before6:
                'Si muestras al público en LED o pantallas laterales, coordina con el director de video cortes que destaquen móviles levantados en los momentos clave.',
            imgSlotBefore1: 'Marcador de imagen — comunicación previa o arte QR.',
            imgSlotBefore2: 'Sustituye este bloque por una figure con',
            onDayH2: 'El día del evento',
            onDayLead:
                'Haz que unirse sea obvio al entrar y al sentarse.',
            on1s: 'QR en entradas y cuellos de botella',
            on1:
                'Coloca un QR legible en puertas, mesas de pulseras y acceso principal — el primer paso es «escanear → instalar → guardar evento».',
            on2s: 'QR en pantallas grandes',
            on2:
                'Emite una diapositiva a pantalla completa con QR antes de abrir casa, durante la música de entrada y en bucles de espera. Déjala el tiempo suficiente para una foto nítida desde el fondo.',
            on3s: 'Frase única para el personal',
            on3:
                'Instruye a acomodadores y FOH: «el espectáculo de luces es la app LightUp Crowd — escanea cualquier QR o usa el enlace de tu entrada».',
            on4s: 'Cómo abrir la app y sujetar el móvil',
            on4:
                'En pantalla y voz en off: abrir la app, elegir este evento, subir brillo, sujetar el móvil firme por encima del hombro al empezar (linterna o pantalla según tu guía).',
            on5s: 'Cámaras altas listas',
            on5: 'Revisa planos amplios en previo; ajusta exposición si el wash de LED quema los móviles.',
            imgSlotOn1: 'Marcador de imagen — QR en entrada o pantalla de arena.',
            duringH2: 'Durante el evento',
            duringLead:
                'Impulsa la participación con señales claras e imágenes que devuelvan al público sobre sí mismo.',
            dur1s: 'Llamada del cantante o presentador',
            dur1:
                'Pide explícitamente al talento que todos abran LightUp Crowd, confirmen el evento de esta noche y levanten los móviles en la siguiente señal.',
            dur2s: 'Pantallas en vivo mostrando al público',
            dur2:
                'Corta a IMAG o señal de programa con planos que muestren el mar de luces; refuerza a las zonas que tardan más en unirse.',
            dur3s: 'Operador y jefe de pista',
            dur3:
                'Mantén en reserva la diapositiva de descarga + QR para llegadas tardías; repite una línea corta «entra en la app» antes del primer efecto masivo.',
            dur4s: 'Iluminación y contenido',
            dur4:
                'Instruye al LD sobre momentos en que la luz de sala suba un poco para que los móviles se lean en cámara sin matar el ambiente.',
            imgSlotDur1: 'Marcador de imagen — público con móviles arriba o ejemplo IMAG.',
            footerHome: 'Inicio LightUp Crowd'
        },
        pt: {
            metaTitle: 'Como fazer do seu espetáculo de luzes um sucesso — LightUp Crowd',
            metaDescription:
                'Checklist de produção para um espetáculo LightUp Crowd de sucesso: download da app e QR, local no recinto, câmaras, orientações ao apresentador, ecrãs com o público.',
            langSelectLabel: 'Idioma',
            h1: 'Como fazer do seu espetáculo de luzes um sucesso',
            intro:
                'Lista prática para produção e responsáveis pelo show. Partilhe com o recinto, a equipa de ecrãs e a gestão de palco para o público estar pronto antes da primeira deixa.',
            tocAria: 'Nesta página',
            tocBefore: 'Antes do evento',
            tocOnDay: 'No dia do evento',
            tocDuring: 'Durante o evento',
            beforeH2: 'Antes do evento',
            beforeLead:
                'Alinhe comunicação, criativos e recinto para os convidados saberem como aderir e onde olhar.',
            before1s: 'Pacote de download da app e QR',
            before1h:
                ' — Envie à produção e marketing a ligação oficial (<a href="../download/index.html">lightupcrowd.com/download</a>), o QR do evento e as instruções de adesão da configuração LightUp Crowd. Inclua texto curto para email, SMS e redes.',
            before2s: 'Mensagens ao público antes do show',
            before2:
                'Acrescente «faça download antes de chegar» (ou passos compatíveis com Wi‑Fi no dia) nos bilhetes, confirmações e slides pré-show para a app já estar instalada à abertura de portas.',
            before3s: 'Plano de ecrãs e impressos',
            before3:
                'Decida onde o QR aparece (entradas, corredores, cartões no lugar, loops de patrocínio). Reserve espaço nos gráficos do run of show para o QR e uma linha «digitalize para entrar no espetáculo de luzes».',
            before4s: 'Guião do apresentador',
            before4:
                'Escreva uma frase curta para o anfitrião ou MC: abrir a app, subir o brilho, levantar os telemóveis na deixa.',
            before5s: 'Câmara e IMAG',
            before5:
                'Confirme planos altos/largos para a «tela» do público: câmaras em truss, torres de atraso ou posições altas para o padrão de luz ler-se no broadcast e replays na sala.',
            before6s: 'Feeds ao vivo do público em ecrã',
            before6:
                'Se mostrar o público em LED ou ecrãs laterais, alinhe com o realizador de vídeo cortes que destaquem telemóveis levantados nos momentos-chave.',
            imgSlotBefore1: 'Marcador de imagem — comunicação pré-evento ou arte QR.',
            imgSlotBefore2: 'Substitua este bloco por uma figure com',
            onDayH2: 'No dia do evento',
            onDayLead:
                'Torne a adesão óbvia à entrada e ao sentar.',
            on1s: 'QR nas entradas e estrangulamentos',
            on1:
                'Coloque QR legível nas portas, mesas de pulseiras e entrada principal — o primeiro passo é «digitalizar → instalar → guardar evento».',
            on2s: 'QR nos grandes ecrãs',
            on2:
                'Exiba um slide em ecrã completo com QR antes da abertura da casa, durante a música de entrada e em loops de espera. Mantenha tempo suficiente para foto nítida do fundo.',
            on3s: 'Frase única para a equipa',
            on3:
                'Instrua assistentes e FOH: «o espetáculo de luzes é a app LightUp Crowd — digitalize qualquer QR ou use a ligação no bilhete».',
            on4s: 'Como abrir a app e segurar o telemóvel',
            on4:
                'No ecrã e locução: abrir a app, escolher este evento, subir o brilho, segurar o telemóvel firme acima da altura do ombro quando o show começar (lanterna ou ecrã conforme o manual).',
            on5s: 'Câmaras altas prontas',
            on5: 'Verifique planos largos na pré-visualização; ajuste a exposição se o wash de LED estourar os telemóveis.',
            imgSlotOn1: 'Marcador de imagem — QR na entrada ou ecrã da arena.',
            duringH2: 'Durante o evento',
            duringLead:
                'Impulsione a participação com deivas claras e imagens que mostrem o público a si próprio.',
            dur1s: 'Chamada do cantor ou apresentador',
            dur1:
                'Peça explicitamente aos artistas para abrirem LightUp Crowd, confirmarem o evento de hoje à noite e levantarem os telemóveis na próxima deixa.',
            dur2s: 'Ecrãs ao vivo com o público',
            dur2:
                'Corte para IMAG ou feed de programa com planos que mostrem o mar de luzes; reforça zonas mais lentas a aderir.',
            dur3s: 'Operador e chefe de pista',
            dur3:
                'Guarde slide de download + QR em backup para atrasados; repita uma linha curta «entrem na app» antes do primeiro efeito em massa.',
            dur4s: 'Luz e conteúdo',
            dur4:
                'Informe o LD de momentos em que a luz da sala sobe ligeiramente para os telemóveis lerem-se na câmara sem matar o clima.',
            imgSlotDur1: 'Marcador de imagem — público com telemóveis no ar ou exemplo IMAG.',
            footerHome: 'Início LightUp Crowd'
        },
        it: {
            metaTitle: 'Come rendere un successo il tuo spettacolo di luci — LightUp Crowd',
            metaDescription:
                'Checklist di produzione per uno spettacolo LightUp Crowd riuscito: download app e QR, allestimento in sede, telecamere, indicazioni al presentatore, schermi con il pubblico.',
            langSelectLabel: 'Lingua',
            h1: 'Come rendere un successo il tuo spettacolo di luci',
            intro:
                'Lista pratica per produzione e show caller. Condividetela con il venue, il team schermi e la regia palco così che il pubblico sia pronto prima del primo cue.',
            tocAria: 'In questa pagina',
            tocBefore: 'Prima dell’evento',
            tocOnDay: 'Il giorno dell’evento',
            tocDuring: 'Durante l’evento',
            beforeH2: 'Prima dell’evento',
            beforeLead:
                'Allineate comunicazione, creatività e sede così che gli ospiti sappiano come entrare e dove guardare.',
            before1s: 'Pacchetto download app e QR',
            before1h:
                ' — Inviate a produzione e marketing il link ufficiale (<a href="../download/index.html">lightupcrowd.com/download</a>), il QR dell’evento e le istruzioni di accesso dalla configurazione LightUp Crowd. Includete testi brevi per email, SMS e social.',
            before2s: 'Messaggi al pubblico prima dello show',
            before2:
                'Aggiungete «scaricate prima di arrivare» (o passaggi compatibili col Wi‑Fi del giorno) su biglietti, conferme e slide preshow così che l’app sia già installata all’apertura delle porte.',
            before3s: 'Piano schermi e stampa',
            before3:
                'Decidete dove compare il QR (ingressi, concourse, card sul sedile, loop sponsor). Riservate spazio nei grafici del run of show per il QR e una riga «scansiona per unirti allo spettacolo di luci».',
            before4s: 'Script presentatore',
            before4:
                'Scrivete una riga breve per host o MC: aprire l’app, luminosità su, alzare i telefoni al cue.',
            before5s: 'Telecamera e IMAG',
            before5:
                'Confermate inquadrature alte/larghe per la «tela» del pubblico: cam su truss, torri di ritardo o posizioni alte perché il pattern si legga in broadcast e replay in sala.',
            before6s: 'Feed dal vivo del pubblico sugli schermi',
            before6:
                'Se mostrate il pubblico su LED o schermi laterali, coordinatevi col video director su tagli che evidenzino telefoni alzati nei momenti chiave.',
            imgSlotBefore1: 'Segnaposto immagine — comunicazioni pre-evento o grafica QR.',
            imgSlotBefore2: 'Sostituite questo blocco con una figure con',
            onDayH2: 'Il giorno dell’evento',
            onDayLead:
                'Rendete evidente come aderire appena si entra e quando ci si siede.',
            on1s: 'QR agli ingressi e nei colli di bottiglia',
            on1:
                'Appiccicate QR leggibili su porte, tavoli braccialetti e ingresso principale — il primo passo è «scansiona → installa → salva evento».',
            on2s: 'QR sui maxischermi',
            on2:
                'Mostrate una slide a tutto schermo con QR prima dell’apertura casa, durante la musica d’ingresso e nei loop di attesa. Lasciatela abbastanza a lungo per una foto nittele dal fondo.',
            on3s: 'Frase unica per lo staff',
            on3:
                'Briefate usher e FOH: «lo spettacolo di luci è l’app LightUp Crowd — scansionate un QR o usate il link sul biglietto».',
            on4s: 'Come aprire l’app e tenere il telefono',
            on4:
                'Su schermo e voce fuori campo: aprire l’app, selezionare questo evento, alzare la luminosità, tenere il telefono fermo sopra l’altezza delle spalle all’inizio (torcia o schermo secondo il runbook).',
            on5s: 'Telecamere alte pronte',
            on5: 'Controllate le inquadrature larghe in anteprima; regolate l’esposizione se il wash LED brucia i telefoni.',
            imgSlotOn1: 'Segnaposto immagine — QR ingresso o schermo arena.',
            duringH2: 'Durante l’evento',
            duringLead:
                'Spingete la partecipazione con cue chiari e visual che rimandino il pubblico a se stesso.',
            dur1s: 'Chiamata cantante o presentatore',
            dur1:
                'Chiedete esplicitamente al talento di aprire LightUp Crowd, confermare l’evento di stasera e alzare i telefoni al cue successivo.',
            dur2s: 'Schermi dal vivo che mostrano il pubblico',
            dur2:
                'Tagliate su IMAG o program feed con inquadrature che mostrano il mare di luci; rafforza il comportamento nelle zone più lente ad aderire.',
            dur3s: 'Operatore e show caller',
            dur3:
                'Tenete la slide download + QR di backup per chi arriva tardi; ripetete una breve «entrate nell’app» prima del primo effetto di massa.',
            dur4s: 'Luci e contenuto',
            dur4:
                'Briefate il LD su momenti in cui la luce sala sale leggermente così che le luci dei telefoni si leggano in camera senza uccidere l’atmosfera.',
            imgSlotDur1: 'Segnaposto immagine — pubblico con telefoni alzati o esempio IMAG.',
            footerHome: 'Home LightUp Crowd'
        },
        ru: {
            metaTitle: 'Как сделать ваше световое шоу успешным — LightUp Crowd',
            metaDescription:
                'Чек-лист продакшена для успешного шоу LightUp Crowd: загрузка приложения и QR, размещение на площадке, камеры, реплики ведущего, экраны с зрителями.',
            langSelectLabel: 'Язык',
            h1: 'Как сделать ваше световое шоу успешным',
            intro:
                'Практический чек-лист для продакшена и шоу-коллера. Передайте площадке, команде экранов и сценическому менеджменту, чтобы зрители были готовы до первого кью.',
            tocAria: 'На этой странице',
            tocBefore: 'До мероприятия',
            tocOnDay: 'В день мероприятия',
            tocDuring: 'Во время мероприятия',
            beforeH2: 'До мероприятия',
            beforeLead:
                'Согласуйте коммуникации, креатив и площадку, чтобы гости знали, как подключиться и куда смотреть.',
            before1s: 'Пакет: загрузка приложения и QR',
            before1h:
                ' — Отправьте продакшену и маркетингу официальную ссылку (<a href="../download/index.html">lightupcrowd.com/download</a>), QR мероприятия и инструкции по входу из настройки LightUp Crowd. Добавьте короткие тексты для email, SMS и соцсетей.',
            before2s: 'Сообщения зрителям до шоу',
            before2:
                'Добавьте «скачайте до прихода» (или шаги с учётом Wi‑Fi в день X) в билеты, подтверждения и прешоу-слайды, чтобы приложение было установлено к открытию дверей.',
            before3s: 'План экранов и печати',
            before3:
                'Решите, где будет QR (входы, конкорс, карточки на сиденьях, спонсорские петли). Заложите место в графике шоу для QR и строки «отсканируйте, чтобы присоединиться к световому шоу».',
            before4s: 'Текст ведущего',
            before4:
                'Подготовьте короткую реплику для хоста или MC: открыть приложение, яркость выше, поднять телефоны по кью.',
            before5s: 'Камера и IMAG',
            before5:
                'Подтвердите высокие/широкие планы для «холста» зрителей: камеры на фермах, башни задержки или верхние точки, чтобы узор читался в эфире и на реплеях в зале.',
            before6s: 'Трансляция зала на экраны',
            before6:
                'Если зал показываете на LED или боковых экранах, согласуйте с видеорежиссёром нарезку, где видны поднятые телефоны в ключевые моменты.',
            imgSlotBefore1: 'Заглушка изображения — коммуникации до события или макет QR.',
            imgSlotBefore2: 'Замените этот блок на figure с',
            onDayH2: 'В день мероприятия',
            onDayLead:
                'Сделайте подключение очевидным при входе и когда зрители садятся.',
            on1s: 'QR у входов и узких мест',
            on1:
                'Разместите читаемый QR на дверях, столах с браслетами и главном входе — первый шаг: «скан → установка → сохранить событие».',
            on2s: 'QR на больших экранах',
            on2:
                'Показывайте полноэкранный слайд с QR до открытия зала, во время входной музыки и в ожидании. Держите достаточно долго для чёткого фото с задних рядов.',
            on3s: 'Одна фраза для персонала',
            on3:
                'Инструктируйте хостесс и FOH: «световое шоу — приложение LightUp Crowd — сканируйте любой QR или ссылку на билете».',
            on4s: 'Как открыть приложение и держать телефон',
            on4:
                'На экране и закадром: открыть приложение, выбрать это событие, поднять яркость, держать телефон ровно выше плеча в начале шоу (фонарик или экран по вашему регламенту).',
            on5s: 'Высокие камеры готовы',
            on5: 'Проверьте широкие планы в превью; подстройте экспозицию, если LED «выбивает» телефоны.',
            imgSlotOn1: 'Заглушка — QR у входа или экран арены.',
            duringH2: 'Во время мероприятия',
            duringLead:
                'Усильте участие чёткими кью и картинкой, которая показывает зал самому залу.',
            dur1s: 'Обращение артиста или ведущего',
            dur1:
                'Попросите артистов явно открыть LightUp Crowd, убедиться, что выбрано сегодняшнее событие, и поднять телефоны по следующему кью.',
            dur2s: 'Живые экраны с зрителями',
            dur2:
                'Режьте на IMAG или программный сигнал планы с «морем огней» — это подтягивает отстающие сектора.',
            dur3s: 'Оператор и шоу-коллер',
            dur3:
                'Держите запасной слайд загрузки + QR для опоздавших; повторите короткую фразу «зайдите в приложение» перед первым массовым эффектом.',
            dur4s: 'Свет и контент',
            dur4:
                'Объясните LD, в какие моменты слегка поднимать заловый свет, чтобы подсветка телефонов читалась в камере без убийства атмосферы.',
            imgSlotDur1: 'Заглушка — зал с поднятыми телефонами или пример IMAG.',
            footerHome: 'Главная LightUp Crowd'
        },
        nl: {
            metaTitle: 'Zo maakt u uw lichtshow tot een succes — LightUp Crowd',
            metaDescription:
                'Productiechecklist voor een geslaagde LightUp Crowd-show: app-download en QR, plaatsing in de zaal, camera’s, aanwijzingen presentator, schermen met publiek.',
            langSelectLabel: 'Taal',
            h1: 'Zo maakt u uw lichtshow tot een succes',
            intro:
                'Praktische checklist voor productie en showcaller. Deel met locatie, schermteam en podiummanagement zodat het publiek klaar is vóór de eerste cue.',
            tocAria: 'Op deze pagina',
            tocBefore: 'Vóór het evenement',
            tocOnDay: 'Op de dag zelf',
            tocDuring: 'Tijdens het evenement',
            beforeH2: 'Vóór het evenement',
            beforeLead:
                'Stem communicatie, creatie en locatie af zodat gasten weten hoe ze meedoen en waar ze kijken.',
            before1s: 'Pakket app-download en QR',
            before1h:
                ' — Stuur productie en marketing de officiële downloadlink (<a href="../download/index.html">lightupcrowd.com/download</a>), de event-QR en join-instructies uit uw LightUp Crowd-setup. Voeg korte teksten toe voor e-mail, SMS en socials.',
            before2s: 'Berichten aan publiek vóór show',
            before2:
                'Voeg «download voor u arriveert» (of wifi-vriendelijke stappen op de dag zelf) toe aan tickets, bevestigingen en preshow-slides zodat de app geïnstalleerd is bij deuren open.',
            before3s: 'Plan voor schermen en drukwerk',
            before3:
                'Bepaal waar QR verschijnt (ingangen, concourse, stoelkaarten, sponsorloops). Reserveer ruimte in run-of-show-graphics voor QR en één regel «scan om mee te doen met de lichtshow».',
            before4s: 'Script presentator',
            before4:
                'Schrijf een korte zin voor host of MC: app openen, helderheid omhoog, telefoons hoog bij de cue.',
            before5s: 'Camera en IMAG',
            before5:
                'Bevestig hoge/brede shots voor het publiekscanvas: truss-cameras, delay-torens of hoge posities zodat het patroon leesbaar is op broadcast en zaal-replays.',
            before6s: 'Live publiek op schermen',
            before6:
                'Toont u het publiek op LED of zijschermen, stem dan met de video-regisseur cuts af die opgeheven telefoons in sleutelmomenten tonen.',
            imgSlotBefore1: 'Afbeeldingsplaatshouder — pre-event communicatie of QR-ontwerp.',
            imgSlotBefore2: 'Vervang dit blok door een figure met',
            onDayH2: 'Op de dag zelf',
            onDayLead:
                'Maak meedoen direct duidelijk bij binnenkomst en bij plaatsnemen.',
            on1s: 'QR bij ingangen en knelpunten',
            on1:
                'Plaats leesbare QR op deuren, polsbandtafels en hoofdingang — eerste stap: «scannen → installeren → event opslaan».',
            on2s: 'QR op groot scherm',
            on2:
                'Toon een fullscreenslide met QR vóór zaalopening, tijdens walk-in-muziek en in wachtloops. Laat lang genoeg voor een scherpe telefoonfoto vanaf de achterste rij.',
            on3s: 'Eén zin voor personeel',
            on3:
                'Brief hosts en FOH: «de lichtshow is de LightUp Crowd-app — scan elke QR of gebruik de link op uw ticket».',
            on4s: 'App openen en telefoon vasthouden',
            on4:
                'Op scherm en voice-over: app openen, dit event kiezen, helderheid omhoog, telefoon stabiel boven schouderhoogte bij start (zaklamp of scherm volgens runbook).',
            on5s: 'Hoge camera’s klaar',
            on5: 'Controleer brede shots in preview; pas belichting aan als LED-wash de telefoons uitwast.',
            imgSlotOn1: 'Plaatshouder — QR bij ingang of arenascherm.',
            duringH2: 'Tijdens het evenement',
            duringLead:
                'Stimuleer deelname met duidelijke cues en beeld dat het publiek naar zichzelf terugkaatst.',
            dur1s: 'Oproep zanger of presentator',
            dur1:
                'Laat artiesten expliciet vragen om LightUp Crowd te openen, te controleren of ze in het event van vanavond zitten en telefoons te heffen bij de volgende cue.',
            dur2s: 'Live schermen met publiek',
            dur2:
                'Knip naar IMAG of programmafeed met shots van de lichtzee; versterkt gedrag in tragere secties.',
            dur3s: 'Operator en showcaller',
            dur3:
                'Houd download- + QR-slide achter de hand voor late binnenkomers; herhaal een korte «ga de app in» vóór het eerste massale effect.',
            dur4s: 'Licht en content',
            dur4:
                'Brief de LD over momenten waar het zaallicht iets omhoog gaat zodat telefoonlicht op camera leesbaar blijft zonder de sfeer te breken.',
            imgSlotDur1: 'Plaatshouder — publiek met telefoons omhoog of IMAG-voorbeeld.',
            footerHome: 'LightUp Crowd home'
        }
    };

    function isRtl(lang) {
        return RTL_LANGS.indexOf(lang) >= 0;
    }

    function normalizeLang(code) {
        if (!code || typeof code !== 'string') return null;
        var base = code.toLowerCase().split('-')[0];
        return SUPPORTED.indexOf(base) >= 0 ? base : null;
    }

    function pickInitialLang() {
        var params = new URLSearchParams(window.location.search);
        var fromUrl = normalizeLang(params.get('lang'));
        if (fromUrl) return fromUrl;
        try {
            var stored = normalizeLang(localStorage.getItem(STORAGE_KEY));
            if (stored) return stored;
        } catch (e) {}
        var nav = normalizeLang(navigator.language || navigator.userLanguage);
        if (nav) return nav;
        return 'en';
    }

    function setUrlLang(lang) {
        try {
            var url = new URL(window.location.href);
            if (lang === 'en') {
                url.searchParams.delete('lang');
            } else {
                url.searchParams.set('lang', lang);
            }
            var q = url.searchParams.toString();
            window.history.replaceState({}, '', url.pathname + (q ? '?' + q : '') + url.hash);
        } catch (e) {}
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {}
    }

    function setDockOpen(open) {
        var dock = document.querySelector('[data-lang-dock]');
        var menu = document.querySelector('[data-lang-dock-menu]');
        var btn = document.querySelector('[data-lang-dock-toggle]');
        if (!dock || !menu || !btn) return;
        dock.classList.toggle('is-open', open);
        menu.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function syncLangDock(lang) {
        var t = STRINGS[lang] || STRINGS.en;
        var flagSpan = document.querySelector('[data-lang-dock-flag]');
        var btn = document.querySelector('[data-lang-dock-toggle]');
        if (flagSpan) {
            flagSpan.textContent = FLAG[lang] || '';
        }
        if (btn) {
            btn.setAttribute(
                'aria-label',
                (t.langSelectLabel || 'Language') + ': ' + (NATIVE_NAME[lang] || lang)
            );
        }
        document.querySelectorAll('[data-lang-dock-item]').forEach(function (item) {
            var code = item.getAttribute('data-lang');
            item.classList.toggle('is-active', code === lang);
            if (code === lang) {
                item.setAttribute('aria-current', 'true');
            } else {
                item.removeAttribute('aria-current');
            }
        });
    }

    function buildLangDockMenu(menuEl) {
        if (!menuEl || menuEl.querySelector('[data-lang-dock-item]')) return;
        LANG_ORDER.forEach(function (code) {
            if (SUPPORTED.indexOf(code) < 0) return;
            var item = document.createElement('button');
            item.type = 'button';
            item.setAttribute('role', 'menuitem');
            item.className = 'lang-dock-item';
            item.setAttribute('data-lang-dock-item', '');
            item.setAttribute('data-lang', code);
            var f = document.createElement('span');
            f.className = 'lang-dock-item-flag';
            f.setAttribute('aria-hidden', 'true');
            f.textContent = FLAG[code] || '';
            var n = document.createElement('span');
            n.className = 'lang-dock-item-name';
            n.textContent = NATIVE_NAME[code] || code;
            item.appendChild(f);
            item.appendChild(n);
            menuEl.appendChild(item);
        });
    }

    function initLangDock() {
        var dock = document.querySelector('[data-lang-dock]');
        var menu = document.querySelector('[data-lang-dock-menu]');
        var btn = document.querySelector('[data-lang-dock-toggle]');
        if (!dock || !menu || !btn) return;
        if (dock.getAttribute('data-lang-dock-init') === '1') return;
        dock.setAttribute('data-lang-dock-init', '1');

        buildLangDockMenu(menu);

        dock.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = !dock.classList.contains('is-open');
            setDockOpen(open);
        });

        menu.addEventListener('click', function (e) {
            var item = e.target.closest('[data-lang-dock-item]');
            if (!item || !menu.contains(item)) return;
            e.stopPropagation();
            var lang = normalizeLang(item.getAttribute('data-lang'));
            if (!lang) return;
            setUrlLang(lang);
            applyStrings(lang);
            setDockOpen(false);
        });

        document.addEventListener('click', function () {
            setDockOpen(false);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                setDockOpen(false);
            }
        });
    }

    function applyStrings(lang) {
        var t = STRINGS[lang] || STRINGS.en;
        document.documentElement.lang = lang;
        document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr';

        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', t.metaDescription);
        document.title = t.metaTitle;

        document.querySelectorAll('[data-l10n]').forEach(function (el) {
            var key = el.getAttribute('data-l10n');
            if (!key || t[key] === undefined) return;
            if (el.getAttribute('data-l10n-html') === '1') {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        });

        document.querySelectorAll('[data-l10n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-l10n-aria');
            if (key && t[key] !== undefined) {
                el.setAttribute('aria-label', t[key]);
            }
        });

        syncLangDock(lang);
    }

    window.LightUpEventSuccessL10n = {
        apply: applyStrings,
        init: function () {
            var lang = pickInitialLang();
            setUrlLang(lang);
            initLangDock();
            applyStrings(lang);
        }
    };
})();
