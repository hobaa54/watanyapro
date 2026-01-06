export const Info = [
    {
        id: 'rehab',
        name: 'محطة الرحاب',
        phone: '0101234567',
        location: {
            lat: 30.057,
            lng: 31.320,
            address: 'محمد نجيب، ثانى القاهرة الجديدة'
        },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء عالي للمحركات الحديثة' },
                { name: 'بنزين 92', desc: 'الأكثر استخدامًا واقتصادي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'قهوة ساخنة', desc: 'AbuAuf breakfast coffee' },
                { icon: 'fa-solid fa-glass-water', title: 'قهوة مثلجة', desc: 'مشروبات منعشة لجميع الأذواق.' },
                { icon: 'fa-solid fa-blender', title: 'مشروبات خاصة', desc: 'لاتيه – كابتشينو – موكا.' },
                { icon: 'fa-solid fa-cake-candles', title: 'حلويات', desc: 'دونات – كيك – كرواسون.' },
            ],
            features: [
                'Playstation corner and Coffee',
                'يوجد دورات مياه داخل الكافيه',
                'يوجد إمكانية حجز الطلبات لحين الوصول',
                'بنقدم قهوة طازة محضّرة من أجود أنواع البن.',
                'المشروبات بتتحضر في وقت قياسي أثناء توقفك.',
                'مكان هادي ومناسب للراحة السريعة.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://i.pinimg.com/1200x/61/af/a9/61afa93da177a65749b53506c6ff20a4.jpg',
                'https://i.pinimg.com/736x/ea/82/df/ea82df375393b9980685116e440c1dc5.jpg',
                'https://i.pinimg.com/736x/53/58/a0/5358a06dbc0db4a755ca833a0c575bc3.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-dharmachakra', title: 'فحص الإطارات', desc: 'ضبط ضغط الهواء لقيادة آمنة.' },
                { icon: 'fa-solid fa-gauge-high', title: 'فحص السوائل', desc: 'مياه – فرامل – تبريد.' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
                'نلتزم بأعلى معايير الأمان أثناء تنفيذ الخدمات.',
            ],
            images: [
                'https://i.pinimg.com/736x/06/e0/d2/06e0d2ec186626696b7243d0081fbedb.jpg',
                'https://i.pinimg.com/736x/d8/a3/32/d8a332078f19443d677750b15d561d09.jpg',
                'https://i.pinimg.com/736x/3d/99/b9/3d99b9b7b27c484bbb7d7a8603f2f9a6.jpg',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },
                {
                    logo: 'https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg',
                    name: 'KFC',
                    desc: 'دجاج مقلي مقرمش بوصفات خاصة.'
                },
                {
                    logo: '../../../assets/images/hardees-logo-vector-2023.png',
                    name: "Hardee’s",
                    desc: 'برجر غني ونكهات قوية.'
                },
                {
                    logo: '../../../assets/images/pand-house.png',
                    name: 'Panda',
                    desc: 'مأكولات آسيوية سريعة ولذيذة.'
                }
            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://images.unsplash.com/photo-1550547660-d9450f859349',
                'https://images.unsplash.com/photo-1521305916504-4a1121188589',
                'https://images.unsplash.com/photo-1551218808-94e220e084d2'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'assets/images/circleK.png',
                    name: 'Circle K',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.'
                },
                {
                    logo: 'assets/images/master.png',
                    name: 'Master Market',
                    desc: 'منتجات متنوعة بأسعار مناسبة.'
                }
            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1604719312566-8912e9227c6a',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx9ybp49N-f6S1-VZjtFxmrIti7YKennIz_StRJpvt4ZWWP0FzvwCzoJQt0-MCll22X8SRJq74RJcuX-1i53m1qYH6wIlyaiLx9LvCxUO1AomijlXDnawGF1UlTe64Qdis57xL8=s1360-w1360-h1020-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1603398938378-e54eab446dde',
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [

            ],
            images: [

            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const MYDINTI_INFO = [
    {
        id: 'madinty', // ✅ كان رقم
        name: 'محطة مدينتي',
        phone: '0109876543',
        location: { lat: 30.0, lng: 31.0, label: 'Madinty' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'قهوة ساخنة', desc: 'قهوة طازة ومحمصة يوميًا' },
                { icon: 'fa-solid fa-cake-candles', title: 'Dukes', desc: 'كيك – كرواسون – دونات' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyB7BsOQcuve4FUCbuPFY4jMl5RA2Z8cgEDewMjlh7PhuH6umKh1TDYtMwrf4qUd6jtTbfM0jUnzMEXIvAvYGsqjKx3xDZaRnwjKO-0vZkEUBgRxTWX1AjigS5mnxfS9BcM0tYUHQ=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy9b_TgKCX15m_vcHTKC4mlsCXkckDh5WkqlWQv2OsGF1FQ4Ot3yTyOBNEY55UEEY2EH1Jqe76J3jUI-fwjPqs6qHykx4URH_8RtPkiLGeFXAHQs-cbkUf0PqFnCKx-s5JmB2i36A=s680-w680-h510-rw',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-gauge-high', title: 'فحص السوائل', desc: 'مياه – فرامل – تبريد.' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw2FdXsywY2VPsFtoZ3WR9nWklgqO9JwGaoTez_S8_HGTcoG5DqsGYS9konHJOsS8EEc_mCTTJICIPNFeBR8H6FNDpE4O9CxVYCUA2JMuL-lALm0KecJkEIPnWjQx49SlunACXSUSaqNeg=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw1SxLh415JPd-o-UL2gz8sH3jv1e_qAz75oSe3EL2QMVyIkmMD6bv3Jw7l3NxFFH__Hlo8c_J0FWc36drkWjUTa2gmFQ53f6jZZRmEG5bk6YaxlKkN1jZNl5-JoQZWCcbfOqg=s680-w680-h510-rw',
                '',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqU_l8EYZwDIlvjXbuZgP4afvBdDZGrwE-Q&s',
                    name: 'SPIN',
                    desc: 'عالم الشاورما'
                },
                {
                    logo: 'https://static.vecteezy.com/system/resources/previews/012/814/272/non_2x/seafood-restaurant-logo-vector.jpg',
                    name: "SeaFood",
                    desc: 'الطعم الأصلي للسمك البلدي'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIUo-wjqbw30KICSi_3TJVwEAOisnNDXv_A&s',
                    name: 'ElFALAH أليكس',
                    desc: 'الفلاح أصول الكبده في مصر'
                }
            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzKPJPPHLwLz3ZSLS8x5J0HD6roe82wdYvfaEDHIq24_QxOdydNzU1wvM396mfX4g4Gy6zhykRpIV-11Af_-Ni18nDl0Q5EXWfY09RpX0E1n9PUaO2McUYSuZRWZDLnc6L3VUWz=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzP4pcBcQ99I99a-9iD7CLfspL2Dg2E9AFHj2unbHSAY3DxfljU5z3UikKdTppA-JQQ_WbU5ZhwMWsRWVtmZ_K6lVKJDZwyo1jf_aYEXp9CwgsoTlNn8TN4mFZr6Di8lF78L3HC=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzyRtdVYv62OihzVuAL4Sv6XgMIkc307h5fdKIIIwaNkRgKuuoGrvlCbE6pywgBaW9sFgm3S4qGulpeIuqMPgwWiYZna2AKPHQFvWp3Y-xcmSScE4tDBbe7RSl1fHkm7juD5FTI=s680-w680-h510-rw'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'assets/images/circleK.png',
                    name: 'Circle K',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.'
                },
                {
                    logo: 'assets/images/master.png',
                    name: 'Master Market',
                    desc: 'منتجات متنوعة بأسعار مناسبة.'
                }
            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxAsCA4PWmQeU7uQ9nPJInTFDV1O18eDVrWSjkTRs2hPxuPMae7KP2BmPmeLFyjB1GCkZ2uEfhXPzsoKr-l3GaBQM71CHKySENrVY4KgD26uNLJiLIpAX9ED3WMuuiqtOckbaSY=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyOaiOyYeCZh_7RkZEj8NnjKVuK5EF9zajnylMQNWVH7YZN6vqMpOHUrV8LUEATdKMhTyV3GMoCfHxAbFGNDzLjutOpWLLeEk3HB-EAFj-zt05cshnta1huwlkEdgufQ82g7ZSBYg=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Tirumph = [
    {
        id: 'tirumph', // ✅ كان رقم
        name: 'محطة تريومف',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Tirumph' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'AbuAuf', desc: 'أجود أنواع البن في مصر' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipM8yESMA4e8PdUnvEySFNynTYKCar_N5n4gQO7D=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx_t1HQvCcHo5e1R7HGyC-2T75m3mM49zJLZ3Z63na8lrJPgjm7sAt_momJz_GDFqyRN5CIfEJdEyvRaIqN7w-J5DQ32ggkWEKF8fwd5xUcC9Fej98DuD4Asl6HhLbJobYNm3_APMK-AXg=s680-w680-h510-rw',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-gauge-high', title: 'Mansour Motour', desc: 'لإيجار وبيع جميع أنواع السيارات' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw02kl6eGmz4tnSlyYH1V4Nu8colmuiAzYm6QKxH2pcL8HCgj6df58mSxHUxroipcuCf_jqdbxLJT41rDOHyx_sIuYsXBF-yDR6JFwPl1O0I5b6sbL2RRUnoWrY_Th-uv5QgvE=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw1SxLh415JPd-o-UL2gz8sH3jv1e_qAz75oSe3EL2QMVyIkmMD6bv3Jw7l3NxFFH__Hlo8c_J0FWc36drkWjUTa2gmFQ53f6jZZRmEG5bk6YaxlKkN1jZNl5-JoQZWCcbfOqg=s680-w680-h510-rw',
                '',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqU_l8EYZwDIlvjXbuZgP4afvBdDZGrwE-Q&s',
                    name: 'SPIN',
                    desc: 'عالم الشاورما'
                },
                {
                    logo: 'https://static.vecteezy.com/system/resources/previews/012/814/272/non_2x/seafood-restaurant-logo-vector.jpg',
                    name: "SeaFood",
                    desc: 'الطعم الأصلي للسمك البلدي'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIUo-wjqbw30KICSi_3TJVwEAOisnNDXv_A&s',
                    name: 'ElFALAH أليكس',
                    desc: 'الفلاح أصول الكبده في مصر'
                }
            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzKPJPPHLwLz3ZSLS8x5J0HD6roe82wdYvfaEDHIq24_QxOdydNzU1wvM396mfX4g4Gy6zhykRpIV-11Af_-Ni18nDl0Q5EXWfY09RpX0E1n9PUaO2McUYSuZRWZDLnc6L3VUWz=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzP4pcBcQ99I99a-9iD7CLfspL2Dg2E9AFHj2unbHSAY3DxfljU5z3UikKdTppA-JQQ_WbU5ZhwMWsRWVtmZ_K6lVKJDZwyo1jf_aYEXp9CwgsoTlNn8TN4mFZr6Di8lF78L3HC=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzyRtdVYv62OihzVuAL4Sv6XgMIkc307h5fdKIIIwaNkRgKuuoGrvlCbE6pywgBaW9sFgm3S4qGulpeIuqMPgwWiYZna2AKPHQFvWp3Y-xcmSScE4tDBbe7RSl1fHkm7juD5FTI=s680-w680-h510-rw'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'assets/images/circleK.png',
                    name: 'Circle K',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9OtQ-LCRRM45c30hReggUHmu0lITweXQfA&s',
                    name: 'Hayper Market',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },

            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyOaiOyYeCZh_7RkZEj8NnjKVuK5EF9zajnylMQNWVH7YZN6vqMpOHUrV8LUEATdKMhTyV3GMoCfHxAbFGNDzLjutOpWLLeEk3HB-EAFj-zt05cshnta1huwlkEdgufQ82g7ZSBYg=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'Lavieen Rose',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxIZrEoQsUudsUTzLs-BQ-JjfGjq5xNmfw0me9yxav6kniN2Q16GUVHv1xy42NxIginqVEphtn2HLqfdrBRr4nT-nNqqZLgwphOln2xU9inBqwWZwMmuPXyd7z4oZmzcC1sqWrsOQ=s680-w680-h510-rw',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        }, clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Tagamo35 = [
    {
        id: 'tagamo35', // ✅ كان رقم
        name: 'محطةالتجمع الخامس ',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Tagamo3' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'AbuAuf', desc: 'أجود أنواع البن في مصر' },
                { icon: 'fa-solid fa-mug-hot', title: 'Dunkin’ Donut', desc: 'تشتهر هذه السلسلة العريقة بأطباق الفطور المميّزة ومجموعة متنوعة من مشروبات القهوة.' },
                { icon: 'fa-solid fa-mug-hot', title: 'حلواني طيبه', desc: 'حكاية الحلو كله ' },
                { icon: 'fa-solid fa-mug-hot', title: 'حلواني voilaa', desc: 'جميع أنواع الحلويات ' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipM8yESMA4e8PdUnvEySFNynTYKCar_N5n4gQO7D=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx_t1HQvCcHo5e1R7HGyC-2T75m3mM49zJLZ3Z63na8lrJPgjm7sAt_momJz_GDFqyRN5CIfEJdEyvRaIqN7w-J5DQ32ggkWEKF8fwd5xUcC9Fej98DuD4Asl6HhLbJobYNm3_APMK-AXg=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxRG5rYxxLqzY_Zkk_EXY1nCByFhOG6ZYMl9Uylliu-q3EP8fUC3ZI0iYVMY5EMhQ4MKixOl3CIee89XzJQmcDVwnlfbXgDk7I_dfj5UOXCq0wPQB1XRKMeQV4LVCnQiMuMCHUx=w408-h544-k-no',
                'https://smartrehabcity.co/UploadedImages/eebbf4a7-ec5a-415a-9cda-b4f7d19c65880.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-gauge-high', title: 'Mansour Motour', desc: 'لإيجار وبيع جميع أنواع السيارات' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw02kl6eGmz4tnSlyYH1V4Nu8colmuiAzYm6QKxH2pcL8HCgj6df58mSxHUxroipcuCf_jqdbxLJT41rDOHyx_sIuYsXBF-yDR6JFwPl1O0I5b6sbL2RRUnoWrY_Th-uv5QgvE=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw1SxLh415JPd-o-UL2gz8sH3jv1e_qAz75oSe3EL2QMVyIkmMD6bv3Jw7l3NxFFH__Hlo8c_J0FWc36drkWjUTa2gmFQ53f6jZZRmEG5bk6YaxlKkN1jZNl5-JoQZWCcbfOqg=s680-w680-h510-rw',
                '',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqU_l8EYZwDIlvjXbuZgP4afvBdDZGrwE-Q&s',
                    name: 'SPIN',
                    desc: 'عالم الشاورما'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bPt-2COVY78h4oGDy3xRldOkRDgyhAVvIg&s',
                    name: "Panda House",
                    desc: 'chicken sweet & sour'
                },
                {
                    logo: '../../../assets/images/paba jons.png',
                    name: 'papa john’s pizza',
                    desc: 'better ingrediants better pizza'
                },
                {
                    logo: 'https://www.hyper-design.com/uploads/project/source/14631.png',
                    name: ' BAZOOKA Fried Chicken',
                    desc: 'ملوك السعاده في الوطن العربي'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K-_i0NN98DJj6KRhi3tc9NNpVYX0hscMrQ&s',
                    name: ' كشري التحرير',
                    desc: 'أصل الكشري في مصر'
                },
                {
                    logo: 'data:image/png;base64,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',
                    name: ' dominos pizza',
                    desc: 'جميع أنواع البيتزا والمعجنات'
                },
            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwn6D1H4toUf4TQpohkZ2xj_4FGA6EO-NkbXy5FQbbKk58D0GKI91HJPBIp3ikTjSCYlKvUGnNVswYFnXd05awCl-Ye_8E6yAw3hHGX4PrQsbYVXbFULJ6ht3j3D8NZ-U9tmDY2=w408-h544-k-no',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzP4pcBcQ99I99a-9iD7CLfspL2Dg2E9AFHj2unbHSAY3DxfljU5z3UikKdTppA-JQQ_WbU5ZhwMWsRWVtmZ_K6lVKJDZwyo1jf_aYEXp9CwgsoTlNn8TN4mFZr6Di8lF78L3HC=s680-w680-h510-rw',
                'https://welp-prod.s3.amazonaws.com/media/businesss/31-03-2024/1711905908.jpeg'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'assets/images/circleK.png',
                    name: 'Circle K',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },
                {
                    logo: 'assets/images/juice.png',
                    name: 'عصائر يايا ',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },

            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyOaiOyYeCZh_7RkZEj8NnjKVuK5EF9zajnylMQNWVH7YZN6vqMpOHUrV8LUEATdKMhTyV3GMoCfHxAbFGNDzLjutOpWLLeEk3HB-EAFj-zt05cshnta1huwlkEdgufQ82g7ZSBYg=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const AUC = [
    {
        id: 'AUC', // ✅ كان رقم
        name: 'محطةالتجمع الخامس ',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Tagamo3' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'AbuAuf', desc: 'أجود أنواع البن في مصر' },
                { icon: 'fa-solid fa-mug-hot', title: 'Dunkin’ Donut', desc: 'تشتهر هذه السلسلة العريقة بأطباق الفطور المميّزة ومجموعة متنوعة من مشروبات القهوة.' },
                { icon: 'fa-solid fa-mug-hot', title: 'حلواني طيبه', desc: 'حكاية الحلو كله ' },
                { icon: 'fa-solid fa-mug-hot', title: 'حلواني voilaa', desc: 'جميع أنواع الحلويات ' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipM8yESMA4e8PdUnvEySFNynTYKCar_N5n4gQO7D=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx_t1HQvCcHo5e1R7HGyC-2T75m3mM49zJLZ3Z63na8lrJPgjm7sAt_momJz_GDFqyRN5CIfEJdEyvRaIqN7w-J5DQ32ggkWEKF8fwd5xUcC9Fej98DuD4Asl6HhLbJobYNm3_APMK-AXg=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxRG5rYxxLqzY_Zkk_EXY1nCByFhOG6ZYMl9Uylliu-q3EP8fUC3ZI0iYVMY5EMhQ4MKixOl3CIee89XzJQmcDVwnlfbXgDk7I_dfj5UOXCq0wPQB1XRKMeQV4LVCnQiMuMCHUx=w408-h544-k-no',
                'https://smartrehabcity.co/UploadedImages/eebbf4a7-ec5a-415a-9cda-b4f7d19c65880.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-gauge-high', title: 'Mansour Motour', desc: 'لإيجار وبيع جميع أنواع السيارات' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw02kl6eGmz4tnSlyYH1V4Nu8colmuiAzYm6QKxH2pcL8HCgj6df58mSxHUxroipcuCf_jqdbxLJT41rDOHyx_sIuYsXBF-yDR6JFwPl1O0I5b6sbL2RRUnoWrY_Th-uv5QgvE=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw1SxLh415JPd-o-UL2gz8sH3jv1e_qAz75oSe3EL2QMVyIkmMD6bv3Jw7l3NxFFH__Hlo8c_J0FWc36drkWjUTa2gmFQ53f6jZZRmEG5bk6YaxlKkN1jZNl5-JoQZWCcbfOqg=s680-w680-h510-rw',
                '',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqU_l8EYZwDIlvjXbuZgP4afvBdDZGrwE-Q&s',
                    name: 'SPIN',
                    desc: 'عالم الشاورما'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bPt-2COVY78h4oGDy3xRldOkRDgyhAVvIg&s',
                    name: "Panda House",
                    desc: 'chicken sweet & sour'
                },
                {
                    logo: '../../../assets/images/paba jons.png',
                    name: 'papa john’s pizza',
                    desc: 'better ingrediants better pizza'
                },
                {
                    logo: 'https://www.hyper-design.com/uploads/project/source/14631.png',
                    name: ' BAZOOKA Fried Chicken',
                    desc: 'ملوك السعاده في الوطن العربي'
                },
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K-_i0NN98DJj6KRhi3tc9NNpVYX0hscMrQ&s',
                    name: ' كشري التحرير',
                    desc: 'أصل الكشري في مصر'
                },
                {
                    logo: 'data:image/png;base64,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',
                    name: ' dominos pizza',
                    desc: 'جميع أنواع البيتزا والمعجنات'
                },
            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwn6D1H4toUf4TQpohkZ2xj_4FGA6EO-NkbXy5FQbbKk58D0GKI91HJPBIp3ikTjSCYlKvUGnNVswYFnXd05awCl-Ye_8E6yAw3hHGX4PrQsbYVXbFULJ6ht3j3D8NZ-U9tmDY2=w408-h544-k-no',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzP4pcBcQ99I99a-9iD7CLfspL2Dg2E9AFHj2unbHSAY3DxfljU5z3UikKdTppA-JQQ_WbU5ZhwMWsRWVtmZ_K6lVKJDZwyo1jf_aYEXp9CwgsoTlNn8TN4mFZr6Di8lF78L3HC=s680-w680-h510-rw',
                'https://welp-prod.s3.amazonaws.com/media/businesss/31-03-2024/1711905908.jpeg'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'assets/images/circleK.png',
                    name: 'Circle K',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },
                {
                    logo: 'assets/images/juice.png',
                    name: 'عصائر يايا ',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },

            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyOaiOyYeCZh_7RkZEj8NnjKVuK5EF9zajnylMQNWVH7YZN6vqMpOHUrV8LUEATdKMhTyV3GMoCfHxAbFGNDzLjutOpWLLeEk3HB-EAFj-zt05cshnta1huwlkEdgufQ82g7ZSBYg=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Forest = [
    {
        id: 'forest', // ✅ كان رقم
        name: 'محطةالغابه المتحجره ',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Tagamo3' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'Santos Coffee', desc: 'أجود أنواع البن والمشروبات في مصر' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwjxeS-j3HmYMfplFw3M5l7hdoBdzbpZHmqsWkGEMhdDrygCoSekMv4K6id73lR-G2f2z2vX1J6VQzxsGoLR5Ubnh6_ac-Z7eL6uFlNWKIOdtsNduyUA9XRxRtQ8EMbyzvIxFmm=s680-w680-h510-rw',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-gauge-high', title: 'Mansour Motour', desc: 'لإيجار وبيع جميع أنواع السيارات' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
                { icon: 'fa-solid fa-car-side', title: 'مقر لشحن الســيارات', desc: 'شحن السيارات الكهربائيه والموتورز' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipPxrkADUq_oZfdbWVfzNSwqnKRfoJhYaDPGTMhp=w408-h272-k-no',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw1SxLh415JPd-o-UL2gz8sH3jv1e_qAz75oSe3EL2QMVyIkmMD6bv3Jw7l3NxFFH__Hlo8c_J0FWc36drkWjUTa2gmFQ53f6jZZRmEG5bk6YaxlKkN1jZNl5-JoQZWCcbfOqg=s680-w680-h510-rw',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },
                {
                    logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/2f9959146143713.Y3JvcCw5MDAsNzAzLDAsOTg.jpg',
                    name: 'Cook Door',
                    desc: 'وجبات سريعة ومتنوعة'
                },

            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwr5o15S2cDMWowmmVTuIpyQ6-Wswze5p8d2dAa8SS5AMtY2n16Z0JXsQdKP1oKc324OsyG9dnTapwVf40pGjK4J-tMddrrPvChqid3ns0t0Q1Or_D5Py6IGXElJP3TAMXNGIKe=w408-h544-k-no',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6loBURHwVu896BggLQECejMn6M4Z6RzR07Q&s',
                'https://media.licdn.com/dms/image/v2/C4D1BAQEHlWjRvKZBIA/company-background_10000/company-background_10000/0/1632560862061/cookdoor_cover?e=2147483647&v=beta&t=PRHehpzsiHDQIH_ShphA_dKKBnw_yqDK3QImqsuKPxQ'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiojdmEIVmTKaK7tqt5GJG3A1Msv4lgpVweg&s',
                    name: 'Master Express',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },


            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Matser = [
    {
        id: 'Master', // ✅ كان رقم
        name: 'السخنه ماستر 1 ',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Master1' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'Starbucks', desc: 'A little bite, a lot of good' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://cdn.mos.cms.futurecdn.net/C6Qf6YSUH7nQf2dQPAbzuZ.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-gauge-high', title: 'DUCATI', desc: 'وكيل معتمد لشركة دوكاتي' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
                { icon: 'fa-solid fa-bicycle', title: 'صيانة موتوسيكلات', desc: 'صيانة موتوسيكلات متنوعة.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwae0mfHLJBADLyYohYMg_S49kzazEuLGHDqlyEZ-AYICL6fYJrifMg2-kgZ2C-qMvQ-R5T3VhnOCEolSFdTLbE75HkN1X30aFlhLvARrtBGktmgOJKdnN5-4Ql7fwFX69jw9R5=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxWTeDyUcFknBGKEZLaLrDaG0i8Mdfv4gpg5bOGaPOvFg09xlntvUCjelI_952K-a5KpZk29IZv38QL4T61iR_1in1QwEE4ZufGhc0PfFSNWzK3ncYr_JArJrga17GCdba-Cc7L=s680-w680-h510-rw',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },


            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://t3.ftcdn.net/jpg/04/33/82/38/360_F_433823865_FKA6TMSysqCSqYIiPECzZ2RPjejsNDzT.jpg'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiojdmEIVmTKaK7tqt5GJG3A1Msv4lgpVweg&s',
                    name: 'Master Express',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },


            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Matser2 = [
    {
        id: 'Master2', // ✅ كان رقم
        name: 'السخنه ماستر 2 ',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Master1' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'Starbucks', desc: 'A little bite, a lot of good' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://cdn.mos.cms.futurecdn.net/C6Qf6YSUH7nQf2dQPAbzuZ.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
                { icon: 'fa-solid fa-bicycle', title: 'مقر شحن سيارات', desc: 'شحن واستيراد جميع السيارات.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwae0mfHLJBADLyYohYMg_S49kzazEuLGHDqlyEZ-AYICL6fYJrifMg2-kgZ2C-qMvQ-R5T3VhnOCEolSFdTLbE75HkN1X30aFlhLvARrtBGktmgOJKdnN5-4Ql7fwFX69jw9R5=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxWTeDyUcFknBGKEZLaLrDaG0i8Mdfv4gpg5bOGaPOvFg09xlntvUCjelI_952K-a5KpZk29IZv38QL4T61iR_1in1QwEE4ZufGhc0PfFSNWzK3ncYr_JArJrga17GCdba-Cc7L=s680-w680-h510-rw',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },


            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://t3.ftcdn.net/jpg/04/33/82/38/360_F_433823865_FKA6TMSysqCSqYIiPECzZ2RPjejsNDzT.jpg'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiojdmEIVmTKaK7tqt5GJG3A1Msv4lgpVweg&s',
                    name: 'Master Express',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },


            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Academy = [
    {
        id: 'Academy', // ✅ كان رقم
        name: 'خلف الأكاديمــية ',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Academy' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'Starbucks', desc: 'A little bite, a lot of good' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://cdn.mos.cms.futurecdn.net/C6Qf6YSUH7nQf2dQPAbzuZ.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
                { icon: 'fa-solid fa-bicycle', title: 'مقر شحن سيارات', desc: 'شحن واستيراد جميع السيارات.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwae0mfHLJBADLyYohYMg_S49kzazEuLGHDqlyEZ-AYICL6fYJrifMg2-kgZ2C-qMvQ-R5T3VhnOCEolSFdTLbE75HkN1X30aFlhLvARrtBGktmgOJKdnN5-4Ql7fwFX69jw9R5=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxWTeDyUcFknBGKEZLaLrDaG0i8Mdfv4gpg5bOGaPOvFg09xlntvUCjelI_952K-a5KpZk29IZv38QL4T61iR_1in1QwEE4ZufGhc0PfFSNWzK3ncYr_JArJrga17GCdba-Cc7L=s680-w680-h510-rw',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },


            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://t3.ftcdn.net/jpg/04/33/82/38/360_F_433823865_FKA6TMSysqCSqYIiPECzZ2RPjejsNDzT.jpg'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiojdmEIVmTKaK7tqt5GJG3A1Msv4lgpVweg&s',
                    name: 'Master Express',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },


            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/p/AF1QipOiP0ulVwanP_6PDfhraEL7lLBW1jmPnhU4nbhC=s680-w680-h510-rw',
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyTKlLb5gtu01680POupFYLaSmZ9Efun_0Wg8yiwpA2DU590zALCpxX1hY4SOd4j5s4h2pK2pZEHVMOyBKbOLJjfcEFQ_4KxJiH0-Rpi9Tr5-eJIFNa9dw8JztvciF_kQfJsu0=s680-w680-h510-rw'
            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const Loutas = [
    {
        id: 'Loutas', // ✅ كان رقم
        name: 'اللوتس',
        phone: '0109876543',
        location: { lat: 31.39972518650697, lng: 30.00629370835832, label: 'Loutas' },
        gaz: {
            fuels: [
                { name: 'بنزين 95', desc: 'أداء ممتاز لمحركات حديثة' },
                { name: 'بنزين 92', desc: 'اقتصادي ومناسب للاستخدام اليومي' },
            ]
        },
        coffee: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-mug-hot', title: 'Starbucks', desc: 'A little bite, a lot of good' },
            ],
            features: [
                'مكان مريح للراحة السريعة',
                'إمكانية حجز الطلبات قبل الوصول',
            ],
            hours: '9:00 صباحًا – 1:00 بعد منتصف الليل',
            images: [
                'https://cdn.mos.cms.futurecdn.net/C6Qf6YSUH7nQf2dQPAbzuZ.jpg',
            ]
        },
        cars: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-oil-can', title: 'تغيير الزيت', desc: 'زيوت معتمدة تحافظ على عمر المحرك.' },
                { icon: 'fa-solid fa-car-side', title: 'غسيل سيارات', desc: 'تنظيف داخلي وخارجي باحتراف.' },
                { icon: 'fa-solid fa-bicycle', title: 'مقر شحن سيارات', desc: 'شحن واستيراد جميع السيارات.' },
            ],
            features: [
                'جميع خدمات السيارات تتم بواسطة فنيين متخصصين.',
                'نستخدم أدوات حديثة لضمان أفضل نتيجة.',
                'الخدمة سريعة لتوفير وقتك بدون انتظار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwae0mfHLJBADLyYohYMg_S49kzazEuLGHDqlyEZ-AYICL6fYJrifMg2-kgZ2C-qMvQ-R5T3VhnOCEolSFdTLbE75HkN1X30aFlhLvARrtBGktmgOJKdnN5-4Ql7fwFX69jw9R5=s680-w680-h510-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxWTeDyUcFknBGKEZLaLrDaG0i8Mdfv4gpg5bOGaPOvFg09xlntvUCjelI_952K-a5KpZk29IZv38QL4T61iR_1in1QwEE4ZufGhc0PfFSNWzK3ncYr_JArJrga17GCdba-Cc7L=s680-w680-h510-rw',
            ]
        },
        restaurant: {
            available: true,
            cards: [
                {
                    logo: "../../../assets/images/McDonald's_Golden_Arches.svg.png",
                    name: "McDonald's",
                    desc: 'وجبات سريعة عالمية بطعم مميز.'
                },


            ],
            features: [
                'جميع المطاعم تعمل طوال اليوم لخدمة المسافرين.',
                'اختيارات متنوعة تناسب جميع الأذواق.',
                'خدمة سريعة ونظافة عالية.',
                'أماكن جلوس مريحة للعائلات.'
            ],
            images: [
                'https://t3.ftcdn.net/jpg/04/33/82/38/360_F_433823865_FKA6TMSysqCSqYIiPECzZ2RPjejsNDzT.jpg'
            ]
        },
        market: {
            available: true,
            cards: [
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAf7AfIFGt4gSYH9cYP7owWVCr-UCcadQTg&s',
                    name: 'Sofia Market',
                    desc: 'مشروبات – سناكس – مستلزمات السفر.',
                },


            ],
            features: [
                'الماركت متوفر 24 ساعة لخدمة المسافرين.',
                'تشكيلة واسعة من المنتجات اليومية.',
                'أسعار واضحة ومناسبة للجميع.',
                'سرعة في الخدمة لتوفير وقتك.'
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwPoXA_j9-lRk-OVMRAwHbOWCvlvTXEnW7FEF2YZ_0zNapTbSKalK2J2am8mxIieU6NKH30ofykAidxCnLAR7GkFOzxON1Z1THInGjRKDPAqukfy_nvwnmJLBCOwLZBB0xkf7jI=s680-w680-h510-rw',

            ]
        },
        pharmacy: {
            available: true,
            cards: [
                { icon: 'fa-solid fa-pills pharmacy-icon', title: 'أدوية أساسية', desc: 'أدوية موثوقة للاستخدام اليومي.' },
                { icon: 'fa-solid fa-briefcase-medical pharmacy-icon', title: 'إسعافات أولية', desc: 'مستلزمات الطوارئ والجروح.' },
                { icon: 'fa-solid fa-heart-pulse pharmacy-icon', title: 'مستلزمات طبية', desc: 'أجهزة قياس الضغط والسكر.' },
                { icon: 'fa-solid fa-prescription-bottle-medical pharmacy-icon', title: 'فيتامينات', desc: 'مكملات غذائية لدعم صحتك.' },
            ],
            features: [
                'صيدلي مختص متواجد للرد على الاستفسارات.',
                'جميع المنتجات معتمدة من وزارة الصحة.',
                'التزام كامل بإجراءات السلامة.',
                'خدمة سريعة لتوفير وقتك.'
            ],
            images: [
                'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
                'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
            ]
        },
        flowers: {
            available: true,
            title: 'عاشقة الورد',
            subtitle: 'جميع انواع الورد والهدايا القيمه',
            cards: [
                { icon: 'fa-solid fa-seedling flower-icon', title: 'ورد طبيعي', desc: 'أجود أنواع الورد الطازج يوميًا.' },
                { icon: 'fa-solid fa-gift flower-icon', title: 'بوكيهات مناسبات', desc: 'أفراح – خطوبة – أعياد ميلاد.' },
                { icon: 'fa-solid fa-heart flower-icon', title: 'هدايا رومانسية', desc: 'ورد مع شوكولاتة وبوكسات مميزة.' },
                { icon: 'fa-solid fa-palette flower-icon', title: 'تنسيق حسب الطلب', desc: 'اختاري الألوان والتنسيق بنفسك.' },
            ],
            features: [
                'نوفر تنسيقات تناسب كل المناسبات.',
                'ورد طازج يتم اختياره بعناية.',
                'إمكانية تجهيز الطلب في وقت قياسي.',
                'خدمة عملاء لمساعدتك في الاختيار.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtB9UOJEPSaUquUWbiPQmm2pi044dBtiW7FLYXf8Cv7uOeVbk2xHCS5X8923csEIgBd1NSrP5mDYOBWamRTRyUCqAxl6NS7PeDaX1kDE19oAqlwIeVlISv3zCNaaO5YVDihmNJ=s1360-w1360-h1020-rw',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
            ]
        },
        atm: {
            available: true,
            title: 'ATM & الخدمات البنكية',
            subtitle: 'معاملاتك البنكية والمالية بسهولة وأمان',
            cards: [
                { type: 'icon', icon: 'fa-solid fa-building-columns service-icon', title: 'ماكينات ATM', desc: 'سحب – إيداع – استعلام رصيد.' },

                { type: 'img', logo: 'assets/images/National_Bank_of_Egypt.svg.png', title: 'البنك الأهلي المصري', desc: 'جميع المعاملات البنكية الأساسية.' },
                { type: 'img', logo: 'assets/images/Banque_Misr.svg.png', title: 'بنك مصر', desc: 'خدمات سحب وإيداع وتحويل.' },
                { type: 'img', logo: 'assets/images/Vodafone_2017_logo.svg.png', title: 'Vodafone Cash', desc: 'تحويل – سحب – إيداع فوري.' },
                { type: 'img', logo: 'assets/images/Fawry_Logo.png', title: 'Fawry', desc: 'دفع فواتير وخدمات إلكترونية.' },

                { type: 'icon', icon: 'fa-solid fa-qrcode service-icon', title: 'InstaPay', desc: 'تحويلات فورية بين الحسابات.' },
            ],
            features: [
                'جميع المعاملات تتم بأعلى معايير الأمان.',
                'ماكينات ATM تعمل على مدار 24 ساعة.',
                'دعم كامل لخدمات الدفع الإلكتروني.',
                'فريق الدعم جاهز للمساعدة.',
            ]
        },
        vap: {
            available: true,
            title: 'VAP Station',
            subtitle: 'منتجات الفيب والإكسسوارات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-droplet', title: 'E-Liquids', desc: 'نكهات متعددة وتركيزات مختلفة.' },
                { icon: 'fa-solid fa-battery-full', title: 'أجهزة', desc: 'أجهزة مناسبة للمبتدئين والمحترفين.' },
                { icon: 'fa-solid fa-gears', title: 'إكسسوارات', desc: 'Coils – Pods – Chargers.' },
                { icon: 'fa-solid fa-box', title: 'Disposable', desc: 'خيارات جاهزة وسهلة الاستخدام.' },
            ],
            features: [
                'تشكيلة متنوعة من النكهات.',
                'إكسسوارات متوفرة حسب نوع الجهاز.',
                'مساعدة في اختيار المنتج المناسب.',
                'تنبيه: البيع للبالغين فقط.',
            ],
            images: [
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4g5tDubBVPgL_wUrCEhTuE_N4iv1UoWfC0AonuzCP3GOdiulqIgO-YGnvRDBeBP8E_TAFTozHu1JJFppRu7e_lcUeGOGr7sn2d3h_A_-3wKyA5hwoOzffsm3DOBB2j3UhKDhTuQ=s680-w680-h510-rw',
            ]
        },
        clothes: {
            available: true,
            title: 'متجر الملابس',
            subtitle: 'ملابس وإكسسوارات للرحلات في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-shirt', title: 'ملابس رجالي', desc: 'تيشيرتات – بناطيل – جاكيتات.' },
                { icon: 'fa-solid fa-person-dress', title: 'ملابس حريمي', desc: 'فساتين – كاجوال – سويت شيرت.' },
                { icon: 'fa-solid fa-child', title: 'ملابس أطفال', desc: 'مقاسات متعددة وخامات مريحة.' },
                { icon: 'fa-solid fa-bag-shopping', title: 'إكسسوارات', desc: 'شنط – نظارات – محافظ.' },
                { icon: 'fa-solid fa-socks', title: 'أساسيات', desc: 'شرابات – قبعات – أحزمة.' },
                { icon: 'fa-solid fa-tags', title: 'عروض', desc: 'خصومات موسمية وباقات.' },
            ],
            features: [
                'خامات عملية مناسبة للسفر.',
                'مقاسات متنوعة وخيارات كثيرة.',
                'مساعدة في اختيار المقاس المناسب.',
                'إمكانية استبدال حسب سياسة المحل.',
            ],
            hours: '10:00 صباحًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=1200&q=80',
            ]


        },
        beauty: {
            available: true,
            title: 'Beauty Center',
            subtitle: 'خدمات العناية والجمال في مكان واحد',
            cards: [
                { icon: 'fa-solid fa-scissors', title: 'Hair Styling', desc: 'قص – سيشوار – صبغات – بروتين.' },
                { icon: 'fa-solid fa-spa', title: 'Skin Care', desc: 'ماسكات – تنظيف بشرة – جلسات ترطيب.' },
                { icon: 'fa-solid fa-hand-sparkles', title: 'Nails', desc: 'مانيكير – باديكير – جيل.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Makeup', desc: 'مكياج مناسبات – عرائس – تصوير.' },
            ],
            features: [
                'متخصصين بخبرة عالية.',
                'حجز مسبق لتقليل وقت الانتظار.',
                'منتجات أصلية ومعتمدة.',
                'تنبيه: الخدمة للسيدات فقط (لو حابب).',
            ],
            hours: '12:00 ظهرًا – 12:00 منتصف الليل',
            images: [
                'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
                'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
            ]
        },
    }
];
export const ALL_STATIONS = [...Info, ...MYDINTI_INFO, ...Tirumph, ...Tagamo35, ...AUC, ...Forest, ...Matser, ...Matser2, ...Academy, ...Loutas];
