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
        }
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
        }
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
        }
        
    }
]
export const Tagamo35 =[
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
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxQxxCVZVq1uZGuGJGDSJiu62LpDZ37H5FIkUERtDHQhAjQw_PT2ybrtRuQotKjVJndVus-J3H3MVgP0Q0BSFLrDHZypuTNIOmMAQIZBoZ_Xgx9CejVNOibU4Omh0wpVJZ3fzyTWg=s680-w680-h510-rw',
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
        }
        
    }
]

export const ALL_STATIONS = [...Info, ...MYDINTI_INFO, ...Tirumph, ...Tagamo35];
