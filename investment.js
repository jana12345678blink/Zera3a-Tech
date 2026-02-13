 // ========== تهيئة المتغيرات ==========
        let isDarkMode = false;
        let isEnglishMode = false;
        let currentOpenDetails = null;

        // نظام الترجمة المحدث مع جميع النصوص
        const translations = {
            ar: {
                // Navigation
                'nav.home': 'الرئيسية',
                'nav.categories': 'التصنيفات',
                'nav.agriculture': 'الزراعة',
                'nav.livestock': 'الثروة الحيوانية',
                
                // Hero section
                'hero.title': 'منصة للاستثمار الزراعي والحيواني',
                'hero.subtitle': 'أول منصة عربية تربط ملاك الأراضي الزراعية بالمستثمرين لتحقيق أعلى عائد من الاستثمار الزراعي والحيواني',
                'hero.browse': 'استعرض الأقسام',
                
                // Categories section
                'categories.title': 'التصنيفات الرئيسية',
                'categories.desc': 'اختر التصنيف الذي يناسب اهتماماتك الاستثمارية وابدأ رحلة الاستثمار الزراعي الناجحة',
                'categories.agriculture.title': 'الزراعة',
                'categories.agriculture.desc': 'جميع الخدمات والأقسام المتعلقة بالزراعة والمحاصيل والأراضي والاستثمار الزراعي بكافة أنواعه',
                'categories.livestock.title': 'الثروة الحيوانية',
                'categories.livestock.desc': 'جميع الخدمات والأقسام المتعلقة بالثروة الحيوانية والمواشي والدواجن والاستثمار الحيواني بكافة أنواعه',
                'categories.view.agriculture': 'استعرض الزراعة',
                'categories.view.livestock': 'استعرض الثروة الحيوانية',
                'categories.stats.subsections': 'أقسام فرعية',
                'categories.stats.success': 'نسبة النجاح',
                'categories.stats.return': 'العائد السنوي',
                
                // Agriculture sections
                'agriculture.title': 'أقسام الزراعة',
                'agriculture.desc': 'اختر القسم الزراعي الذي تريد الاستثمار فيه واستفد من فرص الاستثمار المربحة',
                'agriculture.investment': 'الاستثمار الزراعي',
                'agriculture.investment.desc': 'ربط الفلاحين بالمستثمرين في مشاريع زراعية متنوعة',
                'agriculture.crops': 'المحاصيل الزراعية',
                'agriculture.crops.desc': 'المحاصيل الحقلية والخضر والفواكه بأنواعها المختلفة',
                'agriculture.equipment': 'المعدات الزراعية',
                'agriculture.equipment.desc': 'الجرارات، المحاريث، ماكينات الرش والحصاد',
                'agriculture.irrigation': 'أنظمة الري',
                'agriculture.irrigation.desc': 'أنظمة الري الحديثة والتنقيط والرش',
                'agriculture.greenhouses': 'البيوت المحمية',
                'agriculture.greenhouses.desc': 'الصوبات الزراعية والبيوت البلاستيكية',
                'agriculture.organic': 'الزراعة العضوية',
                'agriculture.organic.desc': 'الزراعة بدون كيماويات ومنتجات عضوية',
                'agriculture.hydroponics': 'الزراعة المائية',
                'agriculture.hydroponics.desc': 'الزراعة بدون تربة باستخدام المحاليل المغذية',
                'agriculture.smart': 'الزراعة الذكية',
                'agriculture.smart.desc': 'استخدام التكنولوجيا في الزراعة والتحكم الذكي',
                'agriculture.landRental': 'إيجار الأرض الزراعية',
                'agriculture.landRental.desc': 'إيجار الأراضي الزراعية للزراعة الموسمية أو الطويلة الأمد',
                'agriculture.landSale': 'بيع الأرض الزراعية',
                'agriculture.landSale.desc': 'بيع وشراء الأراضي الزراعية بجميع مساحاتها وأنواعها',
                'agriculture.view.details': 'عرض التفاصيل',
                
                // Livestock sections
                'livestock.title': 'أقسام الثروة الحيوانية',
                'livestock.desc': 'اختر القسم الحيواني الذي تريد الاستثمار فيه واحصل على عوائد مضمونة',
                'livestock.large': 'المواشي الكبيرة',
                'livestock.large.desc': 'تربية وتسمين الأبقار، الإبل، والخيول',
                'livestock.sheep': 'الأغنام والماعز',
                'livestock.sheep.desc': 'تربية الأغنام والماعز لإنتاج اللحوم والصوف والحليب',
                'livestock.poultry': 'الدواجن',
                'livestock.poultry.desc': 'مشاريع تربية الدواجن لإنتاج اللحوم والبيض',
                'livestock.fish': 'تربية الأسماك',
                'livestock.fish.desc': 'مشاريع تربية الأسماك في المزارع السمكية',
                'livestock.bees': 'تربية النحل',
                'livestock.bees.desc': 'مشاريع تربية النحل لإنتاج العسل والشمع',
                'livestock.small': 'الحيوانات الصغيرة',
                'livestock.small.desc': 'تربية الأرانب والطيور والحيوانات الصغيرة',
                'livestock.barnRental': 'إيجار الحظائر',
                'livestock.barnRental.desc': 'إيجار الحظائر والمزارع الحيوانية الجاهزة للتربية',
                
                // Footer
                'footer.about': 'منصة عربية رائدة لربط ملاك الأراضي والمستثمرين في المجال الزراعي والحيواني لتحقيق أعلى العوائد.',
                'footer.main': 'الأقسام الرئيسية',
                'footer.quick': 'روابط سريعة',
                'footer.info': 'معلومات الاتصال',
                'footer.copyright': 'جميع الحقوق محفوظة © 2023 زراعة-تك | منصة الاستثمار الزراعي والحيواني العربي',
                
                // Form labels and info
                'form.fullName': 'الاسم الكامل',
                'form.phone': 'رقم الهاتف',
                'form.email': 'البريد الإلكتروني',
                'form.userType': 'نوع المستخدم',
                'form.investmentAmount': 'مبلغ الاستثمار',
                'form.location': 'المنطقة',
                'form.duration': 'مدة الاستثمار',
                'form.message': 'رسالة إضافية',
                'form.cancel': 'إلغاء',
                'form.submit': 'إرسال الطلب',
                'form.selectOption': 'اختر',
                'form.farmer': 'فلاح / مزارع',
                'form.investor': 'مستثمر',
                'form.landOwner': 'مالك أرض',
                'form.equipmentOwner': 'مالك معدات',
                'form.livestockOwner': 'مالك مواشي',
                'form.techCompany': 'شركة تقنية',
                'form.landRenter': 'مستأجر أرض',
                'form.landBuyer': 'مشتري أرض',
                'form.barnRenter': 'مستأجر حظيرة',
                'form.info': 'هذا النموذج مخصص لتقديم طلبات الاستثمار في القسم المحدد. سنقوم بمراجعة طلبك والاتصال بك خلال 24 ساعة لتحديد التفاصيل والمتابعة.',
                'form.currency': 'جنيه مصري',
                'form.success.title': 'تم تقديم الطلب بنجاح!',
                'form.success.message': 'شكراً لتقديم طلبك. سيتم مراجعة طلبك الآن من خلال فريق موقع <strong>zera3a-tech.com</strong> وسنتواصل معك في أقرب وقت.',
                
                // Subsection details
                'details.features': 'المميزات الرئيسية',
                'details.statistics': 'إحصائيات القسم',
                'details.close': 'إغلاق',
                'details.minimumInvestment': 'الحد الأدنى للاستثمار'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.categories': 'Categories',
                'nav.agriculture': 'Agriculture',
                'nav.livestock': 'Livestock',
                
                // Hero section
                'hero.title': 'Agricultural and Livestock Investment Platform',
                'hero.subtitle': 'The first Arab platform connecting agricultural landowners with investors to achieve the highest returns from agricultural and livestock investment',
                'hero.browse': 'Browse Sections',
                
                // Categories section
                'categories.title': 'Main Categories',
                'categories.desc': 'Choose the category that suits your investment interests and start your successful agricultural investment journey',
                'categories.agriculture.title': 'Agriculture',
                'categories.agriculture.desc': 'All services and sections related to agriculture, crops, lands, and all types of agricultural investment',
                'categories.livestock.title': 'Livestock',
                'categories.livestock.desc': 'All services and sections related to livestock, animals, poultry, and all types of animal investment',
                'categories.view.agriculture': 'Browse Agriculture',
                'categories.view.livestock': 'Browse Livestock',
                'categories.stats.subsections': 'Subsections',
                'categories.stats.success': 'Success Rate',
                'categories.stats.return': 'Annual Return',
                
                // Agriculture sections
                'agriculture.title': 'Agriculture Sections',
                'agriculture.desc': 'Choose the agricultural section you want to invest in and benefit from profitable investment opportunities',
                'agriculture.investment': 'Agricultural Investment',
                'agriculture.investment.desc': 'Connecting farmers with investors in various agricultural projects',
                'agriculture.crops': 'Agricultural Crops',
                'agriculture.crops.desc': 'Field crops, vegetables and fruits of various types',
                'agriculture.equipment': 'Agricultural Equipment',
                'agriculture.equipment.desc': 'Tractors, plows, sprayers and harvesters',
                'agriculture.irrigation': 'Irrigation Systems',
                'agriculture.irrigation.desc': 'Modern irrigation systems, drip and sprinkler',
                'agriculture.greenhouses': 'Greenhouses',
                'agriculture.greenhouses.desc': 'Agricultural greenhouses and plastic houses',
                'agriculture.organic': 'Organic Farming',
                'agriculture.organic.desc': 'Farming without chemicals and organic products',
                'agriculture.hydroponics': 'Hydroponics',
                'agriculture.hydroponics.desc': 'Soil-less farming using nutrient solutions',
                'agriculture.smart': 'Smart Agriculture',
                'agriculture.smart.desc': 'Using technology in agriculture and smart control',
                'agriculture.landRental': 'Agricultural Land Rental',
                'agriculture.landRental.desc': 'Renting agricultural lands for seasonal or long-term farming',
                'agriculture.landSale': 'Agricultural Land Sale',
                'agriculture.landSale.desc': 'Buying and selling agricultural lands of all sizes and types',
                'agriculture.view.details': 'View Details',
                
                // Livestock sections
                'livestock.title': 'Livestock Sections',
                'livestock.desc': 'Choose the animal section you want to invest in and get guaranteed returns',
                'livestock.large': 'Large Livestock',
                'livestock.large.desc': 'Breeding and fattening cows, camels, and horses',
                'livestock.sheep': 'Sheep and Goats',
                'livestock.sheep.desc': 'Breeding sheep and goats for meat, wool and milk production',
                'livestock.poultry': 'Poultry',
                'livestock.poultry.desc': 'Poultry farming projects for meat and egg production',
                'livestock.fish': 'Fish Farming',
                'livestock.fish.desc': 'Fish farming projects in fish farms',
                'livestock.bees': 'Beekeeping',
                'livestock.bees.desc': 'Beekeeping projects for honey and wax production',
                'livestock.small': 'Small Animals',
                'livestock.small.desc': 'Breeding rabbits, birds and small animals',
                'livestock.barnRental': 'Barn Rental',
                'livestock.barnRental.desc': 'Renting barns and animal farms ready for breeding',
                
                // Footer
                'footer.about': 'A leading Arab platform connecting landowners and investors in the agricultural and animal fields to achieve the highest returns.',
                'footer.main': 'Main Sections',
                'footer.quick': 'Quick Links',
                'footer.info': 'Contact Information',
                'footer.copyright': 'All rights reserved © 2023 Zera3a-Tech | Arab Agricultural and Livestock Investment Platform',
                
                // Form labels and info
                'form.fullName': 'Full Name',
                'form.phone': 'Phone Number',
                'form.email': 'Email Address',
                'form.userType': 'User Type',
                'form.investmentAmount': 'Investment Amount',
                'form.location': 'Location',
                'form.duration': 'Investment Duration',
                'form.message': 'Additional Message',
                'form.cancel': 'Cancel',
                'form.submit': 'Submit Request',
                'form.selectOption': 'Select',
                'form.farmer': 'Farmer',
                'form.investor': 'Investor',
                'form.landOwner': 'Land Owner',
                'form.equipmentOwner': 'Equipment Owner',
                'form.livestockOwner': 'Livestock Owner',
                'form.techCompany': 'Technology Company',
                'form.landRenter': 'Land Renter',
                'form.landBuyer': 'Land Buyer',
                'form.barnRenter': 'Barn Renter',
                'form.info': 'This form is for submitting investment requests in the selected section. We will review your request and contact you within 24 hours to determine details and follow up.',
                'form.currency': 'Egyptian Pound',
                'form.success.title': 'Request Submitted Successfully!',
                'form.success.message': 'Thank you for submitting your request. Your request is now being reviewed by the <strong>zera3a-tech.com</strong> team and we will contact you as soon as possible.',
                
                // Subsection details
                'details.features': 'Key Features',
                'details.statistics': 'Section Statistics',
                'details.close': 'Close',
                'details.minimumInvestment': 'Minimum Investment'
            }
        };

        // ========== نظام الترجمة ==========
        function translateText(key) {
            const lang = isEnglishMode ? 'en' : 'ar';
            return translations[lang][key] || key;
        }

        function updateAllTranslations() {
            // تحديث جميع العناصر التي تحتوي على data-translate
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                const translated = translateText(key);
                if (translated) {
                    element.innerHTML = translated;
                }
            });
            
            // تحديث الزر اللغوي
            const languageBtn = document.getElementById('languageBtn');
            if (languageBtn) {
                languageBtn.textContent = isEnglishMode ? 'ع' : 'EN';
                languageBtn.title = isEnglishMode ? 'العربية' : 'English';
            }
            
            // تحديث زر الوضع المظلم
            const themeBtn = document.getElementById('themeModeBtn');
            if (themeBtn) {
                const icon = themeBtn.querySelector('i');
                if (isDarkMode) {
                    icon.className = 'fas fa-sun';
                    themeBtn.title = isEnglishMode ? 'Light Mode' : 'الوضع الفاتح';
                } else {
                    icon.className = 'fas fa-moon';
                    themeBtn.title = isEnglishMode ? 'Dark Mode' : 'الوضع المظلم';
                }
            }
        }

        // ========== نظام الوضع المظلم ==========
        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                enableDarkMode();
            } else {
                enableLightMode();
            }
        }

        function enableDarkMode() {
            document.body.classList.add('dark-mode');
            isDarkMode = true;
            localStorage.setItem('theme', 'dark');
            updateAllTranslations();
        }

        function enableLightMode() {
            document.body.classList.remove('dark-mode');
            isDarkMode = false;
            localStorage.setItem('theme', 'light');
            updateAllTranslations();
        }

        function toggleThemeMode() {
            if (isDarkMode) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        }

        // ========== نظام اللغة ==========
        function initializeLanguage() {
            const savedLang = localStorage.getItem('language');
            if (savedLang === 'en') {
                switchToEnglish();
            } else {
                switchToArabic();
            }
        }

        function switchToArabic() {
            isEnglishMode = false;
            document.body.classList.remove('english-mode');
            document.body.dir = 'rtl';
            document.documentElement.lang = 'ar';
            localStorage.setItem('language', 'ar');
            updateAllTranslations();
        }

        function switchToEnglish() {
            isEnglishMode = true;
            document.body.classList.add('english-mode');
            document.body.dir = 'ltr';
            document.documentElement.lang = 'en';
            localStorage.setItem('language', 'en');
            updateAllTranslations();
        }

        function toggleLanguage() {
            if (isEnglishMode) {
                switchToArabic();
            } else {
                switchToEnglish();
            }
        }

        // ========== بيانات تفاصيل جميع الأقسام ==========
        const subsectionDetails = {
            // أقسام الزراعة
            'agricultural-investment': {
                title: {
                    ar: 'الاستثمار الزراعي',
                    en: 'Agricultural Investment'
                },
                category: 'زراعة',
                description: {
                    ar: 'الاستثمار الزراعي هو استثمار طويل الأجل في الأراضي الزراعية والمشاريع الزراعية. نحن نربط بين ملاك الأراضي الزراعية والمستثمرين لتحقيق أعلى عائد من الاستثمار في المجال الزراعي.',
                    en: 'Agricultural investment is a long-term investment in agricultural lands and projects. We connect agricultural landowners with investors to achieve the highest returns from investment in the agricultural field.'
                },
                features: {
                    ar: [
                        'ربط ملاك الأراضي بالمستثمرين',
                        'توفير دراسات جدوى للمشاريع الزراعية',
                        'متابعة وتنفيذ المشاريع الزراعية',
                        'ضمان جودة المحاصيل والإنتاج',
                        'توفير التمويل اللازم للمشاريع'
                    ],
                    en: [
                        'Connecting landowners with investors',
                        'Providing feasibility studies for agricultural projects',
                        'Follow-up and implementation of agricultural projects',
                        'Ensuring crop and production quality',
                        'Providing necessary funding for projects'
                    ]
                },
                stats: [
                    { value: '30-45%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '3-5 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '95%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '10,000+', label: { ar: 'مشروع منفذ', en: 'Projects Implemented' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب الاستثمار الزراعي',
                    en: 'Agricultural Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'land_owner', label: 'form.landOwner' }
                ],
                minimumInvestment: '10,000 EGP'
            },
            'crops': {
                title: {
                    ar: 'المحاصيل الزراعية',
                    en: 'Agricultural Crops'
                },
                category: 'زراعة',
                description: {
                    ar: 'تتخصص زراعة-تك في استثمار المحاصيل الزراعية بأنواعها المختلفة بما في ذلك المحاصيل الحقلية والخضروات والفواكه. نقدم حلولاً متكاملة لزراعة وتسويق المحاصيل.',
                    en: 'Zera3a-Tech specializes in investing in various agricultural crops including field crops, vegetables and fruits. We provide integrated solutions for cultivation and marketing of crops.'
                },
                features: {
                    ar: [
                        'زراعة المحاصيل الحقلية (قمح، ذرة، أرز)',
                        'زراعة الخضروات الموسمية',
                        'زراعة الفواكه والأشجار المثمرة',
                        'توفير البذور والأسمدة عالية الجودة',
                        'تسويق المحاصيل محلياً ودولياً'
                    ],
                    en: [
                        'Cultivation of field crops (wheat, corn, rice)',
                        'Cultivation of seasonal vegetables',
                        'Cultivation of fruits and fruit trees',
                        'Providing high-quality seeds and fertilizers',
                        'Marketing crops locally and internationally'
                    ]
                },
                stats: [
                    { value: '25-40%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '6-18 شهر', label: { ar: 'مدة الدورة الزراعية', en: 'Agricultural Cycle Duration' } },
                    { value: '90%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '50+', label: { ar: 'نوع محصول', en: 'Crop Types' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار المحاصيل',
                    en: 'Crops Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'land_owner', label: 'form.landOwner' }
                ],
                minimumInvestment: '5,000 EGP'
            },
            'equipment': {
                title: {
                    ar: 'المعدات الزراعية',
                    en: 'Agricultural Equipment'
                },
                category: 'زراعة',
                description: {
                    ar: 'نوفر أحدث المعدات والآلات الزراعية للمزارعين والمستثمرين لتحسين الإنتاجية وخفض التكاليف. تشمل المعدات الجرارات والحصادات وأنظمة الري الحديثة.',
                    en: 'We provide the latest agricultural equipment and machinery for farmers and investors to improve productivity and reduce costs. Equipment includes tractors, harvesters and modern irrigation systems.'
                },
                features: {
                    ar: [
                        'تأجير وبيع المعدات الزراعية',
                        'صيانة وتجديد المعدات',
                        'تدريب العمالة على استخدام المعدات',
                        'توفير قطع الغيار الأصلية',
                        'استشارات فنية متخصصة'
                    ],
                    en: [
                        'Rental and sale of agricultural equipment',
                        'Maintenance and renewal of equipment',
                        'Training labor on equipment use',
                        'Providing original spare parts',
                        'Specialized technical consultations'
                    ]
                },
                stats: [
                    { value: '20-35%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '1-3 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '85%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '100+', label: { ar: 'نوع معدات', en: 'Equipment Types' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب المعدات الزراعية',
                    en: 'Agricultural Equipment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'equipment_owner', label: 'form.equipmentOwner' }
                ],
                minimumInvestment: '15,000 EGP'
            },
            'irrigation': {
                title: {
                    ar: 'أنظمة الري',
                    en: 'Irrigation Systems'
                },
                category: 'زراعة',
                description: {
                    ar: 'نقدم حلولاً متكاملة لأنظمة الري الحديثة التي تساعد في ترشيد استخدام المياه وزيادة الإنتاجية.',
                    en: 'We provide integrated solutions for modern irrigation systems that help rationalize water use and increase productivity.'
                },
                features: {
                    ar: [
                        'توفير أنظمة الري بالتنقيط',
                        'توفير أنظمة الري بالرش',
                        'صيانة أنظمة الري',
                        'استشارات متخصصة في أنظمة الري',
                        'تركيب أنظمة الري'
                    ],
                    en: [
                        'Providing drip irrigation systems',
                        'Providing sprinkler irrigation systems',
                        'Maintenance of irrigation systems',
                        'Specialized consultations on irrigation systems',
                        'Installation of irrigation systems'
                    ]
                },
                stats: [
                    { value: '20-30%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '1-2 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '85%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '50+', label: { ar: 'نظام ري', en: 'Irrigation Systems' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب أنظمة الري',
                    en: 'Irrigation Systems Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '8,000 EGP'
            },
            'greenhouses': {
                title: {
                    ar: 'البيوت المحمية',
                    en: 'Greenhouses'
                },
                category: 'زراعة',
                description: {
                    ar: 'نقدم حلولاً متكاملة للبيوت المحمية التي تتيح زراعة المحاصيل في بيئة محكمة طوال العام.',
                    en: 'We provide integrated solutions for greenhouses that allow crop cultivation in a controlled environment throughout the year.'
                },
                features: {
                    ar: [
                        'تصميم وبناء البيوت المحمية',
                        'توفير أنظمة التحكم في المناخ',
                        'صيانة البيوت المحمية',
                        'استشارات متخصصة للزراعة المحمية',
                        'توفير مستلزمات البيوت المحمية'
                    ],
                    en: [
                        'Design and construction of greenhouses',
                        'Providing climate control systems',
                        'Maintenance of greenhouses',
                        'Specialized consultations for protected agriculture',
                        'Providing greenhouse supplies'
                    ]
                },
                stats: [
                    { value: '25-35%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '2-3 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '90%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '100+', label: { ar: 'بيت محمي', en: 'Greenhouses' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب البيوت المحمية',
                    en: 'Greenhouses Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '20,000 EGP'
            },
            'organic': {
                title: {
                    ar: 'الزراعة العضوية',
                    en: 'Organic Farming'
                },
                category: 'زراعة',
                description: {
                    ar: 'نقدم حلولاً متكاملة للزراعة العضوية التي تحافظ على البيئة وتنتج محاصيل خالية من الكيماويات.',
                    en: 'We provide integrated solutions for organic farming that preserve the environment and produce chemical-free crops.'
                },
                features: {
                    ar: [
                        'توفير مستلزمات الزراعة العضوية',
                        'استشارات متخصصة في الزراعة العضوية',
                        'تصدير المنتجات العضوية',
                        'شهادات عضوية معتمدة',
                        'تسويق المنتجات العضوية'
                    ],
                    en: [
                        'Providing organic farming supplies',
                        'Specialized consultations in organic farming',
                        'Export of organic products',
                        'Certified organic certificates',
                        'Marketing organic products'
                    ]
                },
                stats: [
                    { value: '30-40%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '1-2 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '88%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '20+', label: { ar: 'منتج عضوي', en: 'Organic Products' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب الزراعة العضوية',
                    en: 'Organic Farming Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '12,000 EGP'
            },
            'hydroponics': {
                title: {
                    ar: 'الزراعة المائية',
                    en: 'Hydroponics'
                },
                category: 'زراعة',
                description: {
                    ar: 'نقدم حلولاً متكاملة للزراعة المائية التي تتيح زراعة المحاصيل بدون تربة باستخدام محاليل مغذية.',
                    en: 'We provide integrated solutions for hydroponics that allow crop cultivation without soil using nutrient solutions.'
                },
                features: {
                    ar: [
                        'تصميم وبناء أنظمة الزراعة المائية',
                        'توفير محاليل التغذية',
                        'صيانة أنظمة الزراعة المائية',
                        'استشارات متخصصة في الزراعة المائية',
                        'توفير مستلزمات الزراعة المائية'
                    ],
                    en: [
                        'Design and construction of hydroponic systems',
                        'Providing nutrient solutions',
                        'Maintenance of hydroponic systems',
                        'Specialized consultations in hydroponics',
                        'Providing hydroponic supplies'
                    ]
                },
                stats: [
                    { value: '35-45%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '1-2 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '92%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '30+', label: { ar: 'نظام مائي', en: 'Hydroponic Systems' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب الزراعة المائية',
                    en: 'Hydroponics Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '25,000 EGP'
            },
            'smart-agriculture': {
                title: {
                    ar: 'الزراعة الذكية',
                    en: 'Smart Agriculture'
                },
                category: 'زراعة',
                description: {
                    ar: 'نقدم حلولاً متكاملة للزراعة الذكية باستخدام التكنولوجيا الحديثة لمراقبة وتحسين الإنتاجية.',
                    en: 'We provide integrated solutions for smart agriculture using modern technology to monitor and improve productivity.'
                },
                features: {
                    ar: [
                        'توفير أجهزة الاستشعار والمراقبة',
                        'برامج تحليل البيانات الزراعية',
                        'أنظمة التحكم الآلي',
                        'استشارات متخصصة في الزراعة الذكية',
                        'توفير حلول إنترنت الأشياء'
                    ],
                    en: [
                        'Providing sensors and monitoring devices',
                        'Agricultural data analysis programs',
                        'Automatic control systems',
                        'Specialized consultations in smart agriculture',
                        'Providing IoT solutions'
                    ]
                },
                stats: [
                    { value: '40-50%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '2-3 سنوات', label: { ar: 'مدة الاستثمار', en: 'Investment Duration' } },
                    { value: '95%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '40+', label: { ar: 'مشروع ذكي', en: 'Smart Projects' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب الزراعة الذكية',
                    en: 'Smart Agriculture Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'tech_company', label: 'form.techCompany' }
                ],
                minimumInvestment: '30,000 EGP'
            },
            'land-rental': {
                title: {
                    ar: 'إيجار الأرض الزراعية',
                    en: 'Agricultural Land Rental'
                },
                category: 'زراعة',
                description: {
                    ar: 'نوفر خدمة إيجار الأراضي الزراعية بجميع أنواعها ومساحاتها. نربط بين ملاك الأراضي والمستأجرين بأسعار تنافسية وعقود آمنة.',
                    en: 'We provide agricultural land rental services of all types and sizes. We connect landowners with tenants at competitive prices and secure contracts.'
                },
                features: {
                    ar: [
                        'أراضي زراعية للإيجار الموسمي والسنوي',
                        'عقود إيجار موثقة قانونياً',
                        'توفير أراضي بجميع المساحات',
                        'استشارات فنية لاختيار الأرض المناسبة',
                        'وساطة بين المالك والمستأجر'
                    ],
                    en: [
                        'Agricultural lands for seasonal and annual rental',
                        'Legally documented rental contracts',
                        'Providing lands of all sizes',
                        'Technical consultations for choosing the right land',
                        'Mediation between owner and tenant'
                    ]
                },
                stats: [
                    { value: '15-25%', label: { ar: 'العائد السنوي للمالك', en: 'Annual Return for Owner' } },
                    { value: '1-5 سنوات', label: { ar: 'مدة الإيجار', en: 'Rental Duration' } },
                    { value: '90%', label: { ar: 'نسبة الرضا', en: 'Satisfaction Rate' } },
                    { value: '5,000+', label: { ar: 'أرض للإيجار', en: 'Lands for Rent' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب إيجار أرض زراعية',
                    en: 'Agricultural Land Rental Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'land_owner', label: 'form.landOwner' },
                    { value: 'land_renter', label: 'form.landRenter' }
                ],
                minimumInvestment: '3,000 EGP'
            },
            'land-sale': {
                title: {
                    ar: 'بيع الأرض الزراعية',
                    en: 'Agricultural Land Sale'
                },
                category: 'زراعة',
                description: {
                    ar: 'نسهل عملية بيع وشراء الأراضي الزراعية بجميع أنواعها. نضمن صفقات آمنة وشروط واضحة لجميع الأطراف.',
                    en: 'We facilitate the buying and selling of agricultural lands of all types. We ensure safe deals and clear terms for all parties.'
                },
                features: {
                    ar: [
                        'عروض أراضي زراعية للبيع',
                        'تقييم الأراضي وتقدير الأسعار',
                        'وساطة في عملية البيع والشراء',
                        'إجراءات قانونية آمنة',
                        'استشارات استثمارية للأراضي'
                    ],
                    en: [
                        'Offers of agricultural lands for sale',
                        'Land evaluation and price estimation',
                        'Mediation in the buying and selling process',
                        'Secure legal procedures',
                        'Investment consultations for lands'
                    ]
                },
                stats: [
                    { value: '20-35%', label: { ar: 'متوسط الربح', en: 'Average Profit' } },
                    { value: '3-6 أشهر', label: { ar: 'مدة الصفقة', en: 'Deal Duration' } },
                    { value: '95%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '2,000+', label: { ar: 'أرض مباعة', en: 'Lands Sold' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب شراء/بيع أرض زراعية',
                    en: 'Agricultural Land Sale/Purchase Request Form'
                },
                userTypes: [
                    { value: 'investor', label: 'form.investor' },
                    { value: 'land_owner', label: 'form.landOwner' },
                    { value: 'land_buyer', label: 'form.landBuyer' }
                ],
                minimumInvestment: '50,000 EGP'
            },
            
            // أقسام الثروة الحيوانية
            'large-livestock': {
                title: {
                    ar: 'المواشي الكبيرة',
                    en: 'Large Livestock'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نتخصص في تربية وتسمين المواشي الكبيرة مثل الأبقار والإبل والخيول. نقدم حلولاً متكاملة تشمل التغذية والرعاية الصحية والتسويق.',
                    en: 'We specialize in breeding and fattening large livestock such as cows, camels, and horses. We provide integrated solutions including nutrition, health care and marketing.'
                },
                features: {
                    ar: [
                        'تربية وتسمين الأبقار للحوم والألبان',
                        'تربية الإبل للسباقات واللحوم',
                        'تربية الخيول للرياضة والترفيه',
                        'توفير الرعاية البيطرية المتخصصة',
                        'تسويق المنتجات الحيوانية'
                    ],
                    en: [
                        'Breeding and fattening cows for meat and milk',
                        'Breeding camels for races and meat',
                        'Breeding horses for sports and entertainment',
                        'Providing specialized veterinary care',
                        'Marketing animal products'
                    ]
                },
                stats: [
                    { value: '40-60%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '1-2 سنوات', label: { ar: 'مدة التربية', en: 'Breeding Duration' } },
                    { value: '88%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '5,000+', label: { ar: 'رأس ماشية', en: 'Livestock Heads' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار المواشي الكبيرة',
                    en: 'Large Livestock Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'livestock_owner', label: 'form.livestockOwner' }
                ],
                minimumInvestment: '20,000 EGP'
            },
            'sheep-goats': {
                title: {
                    ar: 'الأغنام والماعز',
                    en: 'Sheep and Goats'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نتخصص في تربية الأغنام والماعز لإنتاج اللحوم والحليب والصوف. نقدم حلولاً متكاملة تبدأ من التربية حتى التسويق.',
                    en: 'We specialize in breeding sheep and goats for meat, milk and wool production. We provide integrated solutions from breeding to marketing.'
                },
                features: {
                    ar: [
                        'تربية الأغنام للحوم والصوف',
                        'تربية الماعز للحليب واللحوم',
                        'توفير السلالات عالية الإنتاجية',
                        'الرعاية الصحية والبيطرية',
                        'تسويق منتجات الأغنام والماعز'
                    ],
                    en: [
                        'Breeding sheep for meat and wool',
                        'Breeding goats for milk and meat',
                        'Providing high-productivity breeds',
                        'Health and veterinary care',
                        'Marketing sheep and goat products'
                    ]
                },
                stats: [
                    { value: '35-55%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '6-12 شهر', label: { ar: 'مدة التربية', en: 'Breeding Duration' } },
                    { value: '90%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '20,000+', label: { ar: 'رأس من الأغنام والماعز', en: 'Sheep and Goats Heads' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار الأغنام والماعز',
                    en: 'Sheep and Goats Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '8,000 EGP'
            },
            'poultry': {
                title: {
                    ar: 'الدواجن',
                    en: 'Poultry'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نتخصص في مشاريع تربية الدواجن لإنتاج اللحوم والبيض. نقدم حلولاً متكاملة من المزرعة إلى المستهلك مع ضمان الجودة والسلامة.',
                    en: 'We specialize in poultry farming projects for meat and egg production. We provide integrated solutions from farm to consumer with guaranteed quality and safety.'
                },
                features: {
                    ar: [
                        'مشاريع تسمين الدواجن للحوم',
                        'مزارع إنتاج البيض',
                        'توفير الكتاكيت والأعلاف',
                        'الرعاية الصحية والبيطرية',
                        'تسويق منتجات الدواجن'
                    ],
                    en: [
                        'Poultry fattening projects for meat',
                        'Egg production farms',
                        'Providing chicks and feed',
                        'Health and veterinary care',
                        'Marketing poultry products'
                    ]
                },
                stats: [
                    { value: '35-50%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '45-60 يوم', label: { ar: 'مدة دورة التسمين', en: 'Fattening Cycle Duration' } },
                    { value: '92%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '1M+', label: { ar: 'طير سنوياً', en: 'Birds Annually' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار الدواجن',
                    en: 'Poultry Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '10,000 EGP'
            },
            'fish-farming': {
                title: {
                    ar: 'تربية الأسماك',
                    en: 'Fish Farming'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نقدم حلولاً متكاملة لتربية الأسماك في المزارع السمكية باستخدام أحدث التقنيات لضمان الإنتاجية العالية والجودة المتميزة.',
                    en: 'We provide integrated solutions for fish farming in fish farms using the latest technologies to ensure high productivity and excellent quality.'
                },
                features: {
                    ar: [
                        'إنشاء المزارع السمكية',
                        'توفير الزريعة والأعلاف',
                        'أنظمة التربية المكثفة',
                        'الرعاية الصحية والبيطرية',
                        'تسويق الأسماك محلياً ودولياً'
                    ],
                    en: [
                        'Establishment of fish farms',
                        'Providing fry and feed',
                        'Intensive breeding systems',
                        'Health and veterinary care',
                        'Marketing fish locally and internationally'
                    ]
                },
                stats: [
                    { value: '30-45%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '6-8 أشهر', label: { ar: 'مدة دورة التربية', en: 'Breeding Cycle Duration' } },
                    { value: '90%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '10+', label: { ar: 'نوع سمكي', en: 'Fish Types' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار تربية الأسماك',
                    en: 'Fish Farming Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '15,000 EGP'
            },
            'beekeeping': {
                title: {
                    ar: 'تربية النحل',
                    en: 'Beekeeping'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نتخصص في مشاريع تربية النحل وإنتاج العسل والشمع ومنتجات النحل الأخرى. نقدم خبرة متكاملة في هذا المجال.',
                    en: 'We specialize in beekeeping projects and production of honey, wax and other bee products. We offer comprehensive expertise in this field.'
                },
                features: {
                    ar: [
                        'توفير خلايا النحل والمعدات',
                        'تدريب على تربية النحل',
                        'إنتاج وتسويق العسل الطبيعي',
                        'الرعاية الصحية للنحل',
                        'توفير غذاء ملكات النحل'
                    ],
                    en: [
                        'Providing beehives and equipment',
                        'Training on beekeeping',
                        'Production and marketing of natural honey',
                        'Health care for bees',
                        'Providing queen bee food'
                    ]
                },
                stats: [
                    { value: '40-60%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '3-6 أشهر', label: { ar: 'مدة المشروع', en: 'Project Duration' } },
                    { value: '85%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '5,000+', label: { ar: 'خلية نحل', en: 'Beehives' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار تربية النحل',
                    en: 'Beekeeping Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '5,000 EGP'
            },
            'small-animals': {
                title: {
                    ar: 'الحيوانات الصغيرة',
                    en: 'Small Animals'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نقدم حلولاً متكاملة لتربية الحيوانات الصغيرة مثل الأرانب والطيور وغيرها، مع ضمان أعلى معايير الجودة والرعاية.',
                    en: 'We provide integrated solutions for breeding small animals such as rabbits, birds and others, while ensuring the highest standards of quality and care.'
                },
                features: {
                    ar: [
                        'تربية الأرانب للحوم والفراء',
                        'تربية الطيور (الحمام، البط، الإوز)',
                        'توفير السلالات عالية الجودة',
                        'الرعاية الصحية والبيطرية',
                        'تسويق منتجات الحيوانات الصغيرة'
                    ],
                    en: [
                        'Breeding rabbits for meat and fur',
                        'Breeding birds (pigeons, ducks, geese)',
                        'Providing high-quality breeds',
                        'Health and veterinary care',
                        'Marketing small animal products'
                    ]
                },
                stats: [
                    { value: '25-40%', label: { ar: 'العائد السنوي المتوقع', en: 'Expected Annual Return' } },
                    { value: '3-6 أشهر', label: { ar: 'مدة التربية', en: 'Breeding Duration' } },
                    { value: '88%', label: { ar: 'نسبة النجاح', en: 'Success Rate' } },
                    { value: '50,000+', label: { ar: 'حيوان صغير', en: 'Small Animals' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب استثمار الحيوانات الصغيرة',
                    en: 'Small Animals Investment Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' }
                ],
                minimumInvestment: '3,000 EGP'
            },
            'barn-rental': {
                title: {
                    ar: 'إيجار الحظائر',
                    en: 'Barn Rental'
                },
                category: 'حيوانية',
                description: {
                    ar: 'نوفر خدمة إيجار الحظائر والمزارع الحيوانية الجاهزة لتربية المواشي والدواجن بجميع أنواعها وبأسعار تنافسية.',
                    en: 'We provide barn and animal farm rental services ready for breeding livestock and poultry of all types at competitive prices.'
                },
                features: {
                    ar: [
                        'حظائر جاهزة للإيجار',
                        'مزارع حيوانية مجهزة',
                        'صيانة دورية للحظائر',
                        'توفير الخدمات اللازمة',
                        'عقود إيجار مرنة'
                    ],
                    en: [
                        'Ready barns for rent',
                        'Equipped animal farms',
                        'Regular barn maintenance',
                        'Providing necessary services',
                        'Flexible rental contracts'
                    ]
                },
                stats: [
                    { value: '12-20%', label: { ar: 'العائد السنوي للمالك', en: 'Annual Return for Owner' } },
                    { value: '1-3 سنوات', label: { ar: 'مدة الإيجار', en: 'Rental Duration' } },
                    { value: '85%', label: { ar: 'نسبة الرضا', en: 'Satisfaction Rate' } },
                    { value: '1,000+', label: { ar: 'حظيرة للإيجار', en: 'Barns for Rent' } }
                ],
                formTitle: {
                    ar: 'نموذج طلب إيجار حظيرة',
                    en: 'Barn Rental Request Form'
                },
                userTypes: [
                    { value: 'farmer', label: 'form.farmer' },
                    { value: 'investor', label: 'form.investor' },
                    { value: 'livestock_owner', label: 'form.livestockOwner' },
                    { value: 'barn_renter', label: 'form.barnRenter' }
                ],
                minimumInvestment: '4,000 EGP'
            }
        };

        // ========== عرض تفاصيل القسم الفرعي ==========
        function showSubsectionDetails(subsectionId) {
            // إغلاق أي تفاصيل مفتوحة حالياً
            if (currentOpenDetails) {
                currentOpenDetails.classList.remove('active');
            }
            
            const details = subsectionDetails[subsectionId];
            if (!details) {
                alert(isEnglishMode ? 'Sorry, no details available for this section.' : 'عذراً، لا توجد تفاصيل لهذا القسم حالياً.');
                return;
            }
            
            // تحديد القسم الأصلي (زراعة أم حيوانية)
            const isAgriculture = subsectionId.includes('agricultural') || 
                                  subsectionId.includes('crop') || 
                                  subsectionId.includes('equipment') || 
                                  subsectionId.includes('irrigation') || 
                                  subsectionId.includes('greenhouse') || 
                                  subsectionId.includes('organic') || 
                                  subsectionId.includes('hydroponic') || 
                                  subsectionId.includes('smart') ||
                                  subsectionId.includes('land-');
            
            const containerId = isAgriculture ? 'agriculture-details' : 'livestock-details';
            const container = document.getElementById(containerId);
            
            // ترجمة خيارات نوع المستخدم
            const userTypeOptions = details.userTypes.map(type => 
                `<option value="${type.value}">${translateText(type.label)}</option>`
            ).join('');
            
            // تحديد الأيقونة المناسبة للقسم
            let subsectionIcon = isAgriculture ? 'fas fa-seedling' : 'fas fa-cow';
            
            // تحديد الأيقونة الخاصة للأقسام الجديدة
            if (subsectionId === 'land-rental') subsectionIcon = 'fas fa-handshake';
            if (subsectionId === 'land-sale') subsectionIcon = 'fas fa-money-bill-wave';
            if (subsectionId === 'barn-rental') subsectionIcon = 'fas fa-warehouse';
            
            // الحصول على البيانات المترجمة
            const title = isEnglishMode ? details.title.en : details.title.ar;
            const description = isEnglishMode ? details.description.en : details.description.ar;
            const features = isEnglishMode ? details.features.en : details.features.ar;
            const formTitle = isEnglishMode ? details.formTitle.en : details.formTitle.ar;
            
            // إنشاء محتوى التفاصيل
            const detailsHTML = `
                <div class="subsection-header">
                    <div class="subsection-title">
                        <i class="${subsectionIcon}"></i>
                        ${title}
                    </div>
                    <button class="close-details" onclick="closeSubsectionDetails('${containerId}')">
                        <i class="fas fa-times"></i>
                        ${isEnglishMode ? 'Close' : 'إغلاق'}
                    </button>
                </div>
                <div class="subsection-content">
                    <div class="subsection-info">
                        <p class="subsection-description">${description}</p>
                        <h4>
                            <i class="fas fa-star" style="color: var(--secondary);"></i>
                            ${isEnglishMode ? 'Key Features' : 'المميزات الرئيسية'}:
                        </h4>
                        <ul class="subsection-features">
                            ${features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                        </ul>
                        <h4>
                            <i class="fas fa-chart-line" style="color: var(--secondary);"></i>
                            ${isEnglishMode ? 'Section Statistics' : 'إحصائيات القسم'}:
                        </h4>
                        <div class="subsection-stats">
                            ${details.stats.map(stat => `
                                <div class="subsection-stat">
                                    <span class="subsection-stat-value">${stat.value}</span>
                                    <span class="subsection-stat-label">${isEnglishMode ? stat.label.en : stat.label.ar}</span>
                                </div>
                            `).join('')}
                            <div class="subsection-stat">
                                <span class="subsection-stat-value">${details.minimumInvestment}</span>
                                <span class="subsection-stat-label">
                                    ${isEnglishMode ? 'Minimum Investment' : 'الحد الأدنى للاستثمار'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="modern-form compact-form">
                        <div class="form-header-modern">
                            <h3>${formTitle}</h3>
                            <p class="form-info-text">
                                <i class="fas fa-info-circle" style="color: var(--secondary);"></i>
                                ${translateText('form.info')}
                            </p>
                        </div>
                        <form onsubmit="submitInvestmentForm(event, '${subsectionId}')" id="investment-form-${subsectionId}">
                            <div class="form-group-modern">
                                <label class="form-label-modern">
                                    <i class="fas fa-user"></i> 
                                    <span>${translateText('form.fullName')}</span> *
                                </label>
                                <input type="text" class="form-input-modern" placeholder="${isEnglishMode ? 'Enter your full name' : 'أدخل اسمك الكامل'}" required>
                            </div>
                            <div class="form-row-modern">
                                <div class="form-group-modern">
                                    <label class="form-label-modern">
                                        <i class="fas fa-phone"></i> 
                                        <span>${translateText('form.phone')}</span> *
                                    </label>
                                    <input type="tel" class="form-input-modern" placeholder="${isEnglishMode ? '+20 1XX XXX XXXX' : '+20 1XX XXX XXXX'}" required>
                                </div>
                                <div class="form-group-modern">
                                    <label class="form-label-modern">
                                        <i class="fas fa-envelope"></i> 
                                        <span>${translateText('form.email')}</span> *
                                    </label>
                                    <input type="email" class="form-input-modern" placeholder="${isEnglishMode ? 'example@domain.com' : 'example@domain.com'}" required>
                                </div>
                            </div>
                            <div class="form-row-modern">
                                <div class="form-group-modern">
                                    <label class="form-label-modern">
                                        <i class="fas fa-users"></i> 
                                        <span>${translateText('form.userType')}</span> *
                                    </label>
                                    <select class="form-input-modern" required>
                                        <option value="">${translateText('form.selectOption')}</option>
                                        ${userTypeOptions}
                                    </select>
                                </div>
                                <div class="form-group-modern">
                                    <label class="form-label-modern">
                                        <i class="fas fa-money-bill-wave"></i> 
                                        <span>${translateText('form.investmentAmount')}</span> *
                                    </label>
                                    <div style="display: flex; align-items: center;">
                                        <input type="number" class="form-input-modern" placeholder="${translateText('form.currency')}" min="1000" required style="flex: 1;">
                                        <span style="margin-right: 10px; color: var(--secondary); font-weight: 600;">${isEnglishMode ? 'EGP' : 'ج.م'}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group-modern">
                                <label class="form-label-modern">
                                    <i class="fas fa-comment"></i> 
                                    <span>${translateText('form.message')}</span>
                                </label>
                                <textarea class="form-input-modern" rows="2" placeholder="${isEnglishMode ? 'Any additional information you want to add...' : 'أي معلومات إضافية ترغب في إضافتها...'}" style="min-height: 70px;"></textarea>
                            </div>
                            <div class="form-actions-modern">
                                <button type="button" class="btn-modern btn-secondary-modern" onclick="closeSubsectionDetails('${containerId}')">
                                    <i class="fas fa-times"></i>
                                    <span>${translateText('form.cancel')}</span>
                                </button>
                                <button type="submit" class="btn-modern btn-primary-modern">
                                    <i class="fas fa-paper-plane"></i>
                                    <span>${translateText('form.submit')}</span>
                                </button>
                            </div>
                        </form>
                        <!-- رسالة النجاح -->
                        <div class="success-message" id="success-message-${subsectionId}">
                            <i class="fas fa-check-circle"></i>
                            <h4>${translateText('form.success.title')}</h4>
                            <p>${translateText('form.success.message')}</p>
                        </div>
                    </div>
                </div>
            `;
            
            // إضافة المحتوى للحاوية
            container.innerHTML = detailsHTML;
            container.classList.add('active');
            currentOpenDetails = container;
            
            // التمرير إلى القسم
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function closeSubsectionDetails(containerId) {
            const container = document.getElementById(containerId);
            container.classList.remove('active');
            currentOpenDetails = null;
        }

        // ========== إرسال نموذج الاستثمار ==========
        function submitInvestmentForm(event, subsectionId) {
            event.preventDefault();
            
            const form = event.target;
            const successMessage = document.getElementById(`success-message-${subsectionId}`);
            
            // إخفاء الفورم وإظهار رسالة النجاح
            form.style.display = 'none';
            successMessage.classList.add('active');
            
            // التمرير لأسفل لرؤية رسالة النجاح
            setTimeout(() => {
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }

        // ========== وظائف التنقل ==========
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // إغلاق القائمة على الجوال
                closeMobileMenu();
            }
        }

        // ========== القائمة المتحركة للجوال ==========
        function toggleMobileMenu() {
            const navContent = document.getElementById('navContent');
            navContent.classList.toggle('active');
            
            // تغيير الأيقونة
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const icon = mobileBtn.querySelector('i');
            if (navContent.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        }

        function closeMobileMenu() {
            const navContent = document.getElementById('navContent');
            navContent.classList.remove('active');
            
            // إعادة أيقونة البرجر
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const icon = mobileBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        }

        // ========== تحديث القائمة النشطة أثناء التمرير ==========
        function updateActiveNav() {
            // مش مشكلة دلوقتي لأن مفيش روابط في الناف بار
        }

        // ========== مستمعي الأحداث ==========
        document.addEventListener('DOMContentLoaded', function() {
            // تهيئة الوضع المظلم واللغة
            initializeTheme();
            initializeLanguage();
            
            // زر الوضع المظلم/الفاتح
            document.getElementById('themeModeBtn').addEventListener('click', toggleThemeMode);
            
            // زر اللغة
            document.getElementById('languageBtn').addEventListener('click', toggleLanguage);
            
            // زر القائمة للجوال
            document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
            
            // زر العودة للأعلى
            document.getElementById('scrollToTop').addEventListener('click', scrollToTop);
            
            // إغلاق القائمة عند النقر خارجها
            document.addEventListener('click', function(event) {
                const navContent = document.getElementById('navContent');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                
                if (navContent && mobileMenuBtn && 
                    navContent.classList.contains('active') &&
                    !navContent.contains(event.target) && 
                    !mobileMenuBtn.contains(event.target)) {
                    closeMobileMenu();
                }
            });
            
            // التمرير السلس للروابط
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        
                        // التمرير إلى القسم
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // إغلاق القائمة على الجوال
                        closeMobileMenu();
                    }
                });
            });
            
            // الأحداث الخاصة بالتمرير
            window.addEventListener('scroll', function() {
                // زر العودة للأعلى
                const scrollToTopBtn = document.getElementById('scrollToTop');
                if (window.scrollY > 500) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
                
                // تأثير شريط التنقل
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        });

        // إضافة دوال للاستخدام العام
        window.showSubsectionDetails = showSubsectionDetails;
        window.closeSubsectionDetails = closeSubsectionDetails;
        window.scrollToSection = scrollToSection;
