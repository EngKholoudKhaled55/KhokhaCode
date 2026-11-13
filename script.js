
// ======================================
// 1. بيانات اللغات والمناهج التعليمية
// ======================================

const courses = {
    html: {
        name: "HTML",
        symbol: "5",
        description: "تعلم بناء صفحات الويب وتنظيم النصوص والصور والروابط والنماذج.",
        color: "#fb923c",
        chapters: [
            {
                title: "الفصل الأول: مقدمة إلى HTML",
                lessons: [
                    {
                        title: "ما هي HTML؟",
                        content: `
                            <h3>تعريف HTML</h3>
                            <p>HTML اختصار لـ HyperText Markup Language، وتعني لغة ترميز النص التشعبي. تُستخدم لبناء هيكل صفحات الويب وتحديد عناصرها مثل العناوين والفقرات والصور والروابط.</p>
                            <h3>هل HTML لغة برمجة؟</h3>
                            <p>لا، هي لغة ترميز؛ لأنها تصف بنية المحتوى ولا تنفذ منطقًا برمجيًا مثل الشروط والحلقات.</p>
                            <h3>أين تُستخدم؟</h3>
                            <ul><li>بناء صفحات المواقع.</li><li>تنظيم النصوص والصور والروابط.</li><li>إنشاء النماذج التي يستقبل بها الموقع البيانات.</li></ul>
                            <div class="info-box">تخيّل صفحة الويب كمنزل: HTML هي الهيكل والغرف، وCSS هي الديكور، وJavaScript هي الحركة والتفاعل.</div>
                        `
                    },
                    {
                        title: "أول صفحة HTML",
                        content: `
                            <h3>البنية الأساسية للصفحة</h3>
                            <p>كل صفحة HTML تبدأ ببنية أساسية تخبر المتصفح بنوع المستند وتحدد مكان الرأس والمحتوى.</p>
                            <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="ar"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;صفحتي الأولى&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;أهلاً بالعالم&lt;/h1&gt;
    &lt;p&gt;هذه أول صفحة لي.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                            <h3>شرح الأجزاء</h3>
                            <ul>
                                <li><b>DOCTYPE:</b> يحدد أن المستند يستخدم HTML5.</li>
                                <li><b>html:</b> العنصر الجذر الذي يحتوي الصفحة.</li>
                                <li><b>head:</b> معلومات الصفحة وإعداداتها.</li>
                                <li><b>title:</b> عنوان الصفحة في لسان المتصفح.</li>
                                <li><b>body:</b> المحتوى الظاهر للمستخدم.</li>
                            </ul>
                        `
                    },
                    {
                        title: "العناوين والفقرات",
                        content: `
                            <h3>العناوين</h3>
                            <p>توجد ستة مستويات للعناوين من h1 إلى h6. استخدمها حسب أهمية العنوان وترتيب المحتوى، وليس لمجرد تغيير حجم الخط.</p>
                            <pre>&lt;h1&gt;عنوان رئيسي&lt;/h1&gt;
&lt;h2&gt;عنوان فرعي&lt;/h2&gt;
&lt;h3&gt;عنوان أصغر&lt;/h3&gt;</pre>
                            <h3>الفقرات وفواصل الأسطر</h3>
                            <pre>&lt;p&gt;هذه فقرة نصية.&lt;/p&gt;
&lt;br&gt;
&lt;hr&gt;</pre>
                            <p>العنصر p ينشئ فقرة، وbr ينقل النص لسطر جديد، وhr ينشئ فاصلًا موضوعيًا.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثاني: عناصر المحتوى",
                lessons: [
                    {
                        title: "الروابط والصور",
                        content: `
                            <h3>إنشاء رابط</h3>
                            <pre>&lt;a href="https://example.com"&gt;
    افتح الموقع
&lt;/a&gt;</pre>
                            <p>الخاصية href تحدد الوجهة التي ينتقل إليها المستخدم عند الضغط على الرابط.</p>
                            <h3>إضافة صورة</h3>
                            <pre>&lt;img src="photo.jpg" alt="وصف الصورة"&gt;</pre>
                            <p>src يحدد مسار الصورة، وalt يقدم وصفًا بديلًا يفيد عند عدم ظهورها ويساعد تقنيات قراءة الشاشة.</p>
                            <div class="info-box">استخدمي وصفًا واضحًا في alt، ولا تتركيه فارغًا إلا عندما تكون الصورة للزينة فقط.</div>
                        `
                    },
                    {
                        title: "القوائم",
                        content: `
                            <h3>القائمة غير المرتبة</h3>
                            <pre>&lt;ul&gt;
    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
&lt;/ul&gt;</pre>
                            <h3>القائمة المرتبة</h3>
                            <pre>&lt;ol&gt;
    &lt;li&gt;الخطوة الأولى&lt;/li&gt;
    &lt;li&gt;الخطوة الثانية&lt;/li&gt;
&lt;/ol&gt;</pre>
                            <p>li تمثل عنصرًا داخل القائمة، وul قائمة بعلامات، أما ol فقائمة مرقمة.</p>
                        `
                    },
                    {
                        title: "الجداول",
                        content: `
                            <h3>إنشاء جدول</h3>
                            <pre>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;الاسم&lt;/th&gt;
    &lt;th&gt;الدرجة&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;أحمد&lt;/td&gt;
    &lt;td&gt;95&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>
                            <p>table ينشئ الجدول، tr صف، th خلية عنوان، وtd خلية بيانات.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثالث: النماذج",
                lessons: [
                    {
                        title: "Forms وحقول الإدخال",
                        content: `
                            <h3>ما هي النماذج؟</h3>
                            <p>النماذج تسمح للمستخدم بإدخال بيانات مثل الاسم والبريد الإلكتروني وكلمة المرور.</p>
                            <pre>&lt;form&gt;
  &lt;label for="name"&gt;الاسم&lt;/label&gt;
  &lt;input id="name" type="text"&gt;
  &lt;button type="submit"&gt;إرسال&lt;/button&gt;
&lt;/form&gt;</pre>
                            <p>label يوضح وظيفة الحقل، وinput يستقبل البيانات، وbutton ينفذ الإجراء.</p>
                        `
                    },
                    {
                        title: "أنواع input",
                        content: `
                            <pre>&lt;input type="text"&gt;
&lt;input type="email"&gt;
&lt;input type="password"&gt;
&lt;input type="number"&gt;
&lt;input type="date"&gt;
&lt;input type="checkbox"&gt;
&lt;input type="radio"&gt;</pre>
                            <p>اختيار النوع الصحيح يساعد المتصفح على تقديم طريقة إدخال مناسبة والتحقق الأولي من البيانات.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الرابع: HTML الدلالية",
                lessons: [
                    {
                        title: "Semantic HTML",
                        content: `
                            <h3>ما المقصود بالعناصر الدلالية؟</h3>
                            <p>هي عناصر يوضح اسمها معنى الجزء الذي تحتويه، مما يساعد المتصفح ومحركات البحث وتقنيات المساعدة على فهم بنية الصفحة.</p>
                            <pre>&lt;header&gt;رأس الصفحة&lt;/header&gt;
&lt;nav&gt;روابط التنقل&lt;/nav&gt;
&lt;main&gt;
  &lt;article&gt;مقال&lt;/article&gt;
  &lt;section&gt;قسم&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;تذييل الصفحة&lt;/footer&gt;</pre>
                            <p>استخدمي العنصر حسب معناه، وليس لمجرد شكله الافتراضي.</p>
                        `
                    }
                ]
            }
        ]
    },

    css: {
        name: "CSS",
        symbol: "✧",
        description: "تعلم تنسيق صفحات الويب والتحكم في الألوان والخطوط والتخطيطات والحركة.",
        color: "#38bdf8",
        chapters: [
            {
                title: "الفصل الأول: مقدمة CSS",
                lessons: [
                    {
                        title: "ما هي CSS؟",
                        content: `
                            <h3>تعريف CSS</h3>
                            <p>CSS اختصار لـ Cascading Style Sheets، وهي لغة تنسيق تُستخدم للتحكم في مظهر صفحات HTML.</p>
                            <h3>ماذا يمكن أن تفعل؟</h3>
                            <ul><li>تغيير الألوان والخطوط.</li><li>التحكم في الأحجام والمسافات.</li><li>ترتيب العناصر داخل الصفحة.</li><li>إنشاء تصميم متجاوب مع الشاشات.</li><li>إضافة الانتقالات والحركات.</li></ul>
                            <h3>طرق إضافة CSS</h3>
                            <p>يمكن كتابة التنسيق داخل الخاصية style، أو داخل عنصر style، أو في ملف خارجي بامتداد css. والملف الخارجي هو الأنسب للمشروعات المنظمة.</p>
                        `
                    },
                    {
                        title: "أول قاعدة CSS",
                        content: `
                            <h3>شكل القاعدة</h3>
                            <pre>p {
    color: purple;
    font-size: 18px;
}</pre>
                            <p>المحدد p يختار الفقرات. الخاصية color تحدد لون النص، والقيمة purple هي اللون المختار.</p>
                            <p>كل قاعدة تتكون من محدد selector، ثم مجموعة تصريحات declarations داخل الأقواس.</p>
                        `
                    },
                    {
                        title: "Selectors المحددات",
                        content: `
                            <pre>p { color: white; }
.title { color: violet; }
#main { padding: 20px; }
* { box-sizing: border-box; }</pre>
                            <ul>
                                <li>اسم العنصر يحدد كل العناصر من النوع نفسه.</li>
                                <li>.class يحدد العناصر التي تحمل الفئة.</li>
                                <li>#id يحدد العنصر الذي يحمل المعرف.</li>
                                <li>* يحدد جميع العناصر.</li>
                            </ul>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثاني: الألوان والنصوص",
                lessons: [
                    {
                        title: "الألوان والخلفيات",
                        content: `
                            <h3>طرق كتابة الألوان</h3>
                            <pre>h1 { color: red; }
p { color: #ffffff; }
body { background-color: rgb(20, 20, 40); }</pre>
                            <p>يمكن كتابة اللون باسمه، أو باستخدام HEX، أو RGB، أو HSL.</p>
                            <h3>الخلفيات</h3>
                            <pre>body {
    background: linear-gradient(
        120deg, #171727, #402060
    );
}</pre>
                        `
                    },
                    {
                        title: "الخطوط والنصوص",
                        content: `
                            <pre>p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1.8;
    text-decoration: none;
}</pre>
                            <p>تتحكم هذه الخصائص في نوع الخط وحجمه وسُمكه ومحاذاته وارتفاع السطر والزخرفة.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثالث: Box Model",
                lessons: [
                    {
                        title: "نموذج الصندوق",
                        content: `
                            <p>كل عنصر في CSS يمكن فهمه كصندوق يتكون من المحتوى Content، والحشو الداخلي Padding، والحد Border، والهامش الخارجي Margin.</p>
                            <pre>.card {
    width: 300px;
    padding: 20px;
    border: 2px solid white;
    margin: 15px;
    box-sizing: border-box;
}</pre>
                            <div class="info-box">استخدام box-sizing: border-box يجعل حساب العرض يشمل الحشو والحدود، مما يسهل التحكم في الأبعاد.</div>
                        `
                    },
                    {
                        title: "الأبعاد والمسافات",
                        content: `
                            <pre>.box {
    width: 80%;
    max-width: 500px;
    min-height: 150px;
    margin: 20px auto;
    padding: 15px;
}</pre>
                            <p>يمكن استخدام px و% وrem وvw وغيرها من وحدات القياس، واختيار الوحدة يعتمد على طبيعة التصميم.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الرابع: التخطيط",
                lessons: [
                    {
                        title: "Flexbox",
                        content: `
                            <p>Flexbox نظام لتوزيع العناصر وترتيبها في اتجاه واحد، صف أو عمود.</p>
                            <pre>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}</pre>
                            <p>justify-content يتحكم في التوزيع على المحور الرئيسي، وalign-items على المحور العرضي.</p>
                        `
                    },
                    {
                        title: "CSS Grid",
                        content: `
                            <p>Grid نظام تخطيط ثنائي الأبعاد يتحكم في الصفوف والأعمدة.</p>
                            <pre>.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}</pre>
                            <p>repeat تنشئ أعمدة متكررة، و1fr تعني جزءًا من المساحة المتاحة.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الخامس: التصميم المتجاوب",
                lessons: [
                    {
                        title: "Media Queries",
                        content: `
                            <p>تسمح Media Queries بتغيير التصميم حسب خصائص الشاشة مثل عرض نافذة المتصفح.</p>
                            <pre>.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 600px) {
    .cards {
        grid-template-columns: 1fr;
    }
}</pre>
                            <p>هنا تتحول البطاقات إلى عمود واحد عندما يصبح العرض 600px أو أقل.</p>
                        `
                    }
                ]
            }
        ]
    },

    javascript: {
        name: "JavaScript",
        symbol: "JS",
        description: "تعلم البرمجة والتفاعل والمنطق والتحكم في صفحات الويب.",
        color: "#facc15",
        chapters: [
            {
                title: "الفصل الأول: أساسيات JavaScript",
                lessons: [
                    {
                        title: "ما هي JavaScript؟",
                        content: `
                            <h3>تعريف اللغة</h3>
                            <p>JavaScript لغة برمجة تُستخدم لإضافة السلوك والتفاعل إلى صفحات الويب، ويمكن استخدامها أيضًا في الخوادم والتطبيقات وأدوات أخرى.</p>
                            <h3>أمثلة على استخدامها</h3>
                            <ul><li>التحقق من النماذج.</li><li>التعامل مع ضغطات الأزرار.</li><li>تحديث محتوى الصفحة.</li><li>بناء تطبيقات ويب.</li><li>التعامل مع البيانات وواجهات API.</li></ul>
                            <div class="info-box">JavaScript مختلفة عن Java؛ هما لغتان مختلفتان رغم تشابه الاسم.</div>
                        `
                    },
                    {
                        title: "المتغيرات",
                        content: `
                            <h3>ما هو المتغير؟</h3>
                            <p>المتغير اسم نستخدمه للإشارة إلى قيمة نحتاجها في البرنامج.</p>
                            <pre>let age = 17;
const country = "Egypt";
var oldVariable = true;</pre>
                            <p>let تسمح بإعادة إسناد قيمة، وconst تمنع إعادة إسناد المتغير، أما var فلها نطاق وسلوك مختلفان، وغالبًا نستخدم let وconst في الكود الحديث.</p>
                        `
                    },
                    {
                        title: "أنواع البيانات",
                        content: `
                            <pre>let name = "Kholoud"; // String
let age = 17;        // Number
let active = true;   // Boolean
let result;          // Undefined
let empty = null;    // Null</pre>
                            <p>من الأنواع الأساسية: String للنصوص، Number للأرقام، Boolean للقيم المنطقية، Undefined للقيمة غير المحددة، وNull لغياب القيمة عمدًا.</p>
                        `
                    },
                    {
                        title: "عمليات الحساب والمقارنة",
                        content: `
                            <pre>let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let division = 10 / 5;

console.log(10 > 5);  // true
console.log(10 === 5); // false</pre>
                            <p>تشمل العمليات الحسابية الجمع والطرح والضرب والقسمة وباقي القسمة، وتشمل المقارنة أكبر من وأصغر من والمساواة الصارمة.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثاني: التحكم في البرنامج",
                lessons: [
                    {
                        title: "الشروط if",
                        content: `
                            <p>تسمح الشروط بتنفيذ تعليمات مختلفة حسب تحقق شرط معين.</p>
                            <pre>let grade = 85;

if (grade >= 90) {
    console.log("ممتاز");
} else if (grade >= 70) {
    console.log("جيد");
} else {
    console.log("حاول مرة أخرى");
}</pre>
                            <p>if تختبر الشرط الأول، وelse if تختبر شرطًا إضافيًا، وelse تنفذ عندما لا يتحقق أي شرط سابق.</p>
                        `
                    },
                    {
                        title: "حلقات التكرار",
                        content: `
                            <h3>حلقة for</h3>
                            <pre>for (let i = 0; i < 5; i++) {
    console.log(i);
}</pre>
                            <p>تتكون for من بداية، وشرط استمرار، وتحديث للعداد.</p>
                            <h3>حلقة while</h3>
                            <pre>let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}</pre>
                            <p>تستمر while طالما الشرط صحيح. تأكدي من تحديث المتغير حتى لا تنشأ حلقة لا نهائية.</p>
                        `
                    },
                    {
                        title: "الدوال Functions",
                        content: `
                            <p>الدالة مجموعة تعليمات يمكن استدعاؤها عند الحاجة، مما يساعد على تنظيم الكود وإعادة استخدامه.</p>
                            <pre>function greet(name) {
    return "Hello " + name;
}

let message = greet("Ali");
console.log(message);</pre>
                            <p>name معامل تستقبله الدالة، وreturn تعيد النتيجة إلى المكان الذي استدعى الدالة.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثالث: هياكل البيانات",
                lessons: [
                    {
                        title: "Arrays المصفوفات",
                        content: `
                            <p>المصفوفة تخزن مجموعة من القيم في متغير واحد، وتبدأ الفهارس عادة من صفر.</p>
                            <pre>let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
fruits.push("Mango");
console.log(fruits.length);</pre>
                            <p>push تضيف عنصرًا في النهاية، وlength تعطي عدد العناصر.</p>
                        `
                    },
                    {
                        title: "Objects الكائنات",
                        content: `
                            <p>الكائن يخزن بيانات في صورة خصائص وقيم مرتبطة بأسماء.</p>
                            <pre>let student = {
    name: "Ali",
    age: 17,
    grade: "Second"
};

console.log(student.name);
student.age = 18;</pre>
                            <p>يمكن الوصول إلى الخاصية باستخدام النقطة أو الأقواس المربعة، ويمكن تعديل قيمها.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الرابع: DOM والتفاعل",
                lessons: [
                    {
                        title: "التعامل مع عناصر الصفحة",
                        content: `
                            <p>DOM هو تمثيل منظم لصفحة HTML، ويسمح لـ JavaScript بقراءة العناصر وتعديلها.</p>
                            <pre>let title = document.querySelector("h1");

title.textContent = "عنوان جديد";
title.style.color = "purple";</pre>
                            <p>querySelector يبحث عن أول عنصر يطابق المحدد، وtextContent تغير النص الظاهر.</p>
                        `
                    },
                    {
                        title: "الأحداث Events",
                        content: `
                            <p>الأحداث تمثل أفعالًا تحصل في الصفحة، مثل الضغط على زر أو الكتابة داخل حقل.</p>
                            <pre>let button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("أهلاً بك!");
});</pre>
                            <p>addEventListener تربط حدثًا بوظيفة تنفذ عند وقوعه.</p>
                        `
                    }
                ]
            }
        ]
    },

    python: {
        name: "Python",
        symbol: "Py",
        description: "تعلم لغة متعددة الاستخدامات في التطبيقات وتحليل البيانات والذكاء الاصطناعي.",
        color: "#34d399",
        chapters: [
            {
                title: "الفصل الأول: مقدمة Python",
                lessons: [
                    {
                        title: "ما هي Python؟",
                        content: `
                            <h3>تعريف اللغة</h3>
                            <p>Python لغة برمجة عامة الاستخدام، معروفة بسهولة قراءة الكود ووضوح صياغته، وتُستخدم في مجالات كثيرة.</p>
                            <h3>أهم الاستخدامات</h3>
                            <ul><li>تطوير تطبيقات الويب.</li><li>تحليل البيانات.</li><li>الذكاء الاصطناعي وتعلم الآلة.</li><li>أتمتة المهام.</li><li>التعليم والبرمجة العلمية.</li></ul>
                            <h3>ما الذي يميزها؟</h3>
                            <p>صياغتها واضحة، وتحتوي على مكتبات كثيرة، ولديها مجتمع كبير من المطورين.</p>
                        `
                    },
                    {
                        title: "أول برنامج",
                        content: `
                            <p>يمكن طباعة رسالة على الشاشة باستخدام print.</p>
                            <pre>print("Hello World!")
print("Welcome to Python")</pre>
                            <p>النصوص توضع بين علامات اقتباس، وprint تعرض القيمة للمستخدم.</p>
                        `
                    },
                    {
                        title: "المتغيرات",
                        content: `
                            <p>المتغير اسم يشير إلى قيمة. لا نحتاج إلى كتابة نوع المتغير صراحة في كل مرة.</p>
                            <pre>name = "Ali"
age = 17
height = 1.70
is_student = True</pre>
                            <p>علامة = هنا تعني إسناد قيمة إلى متغير، وليست اختبار مساواة.</p>
                        `
                    },
                    {
                        title: "أنواع البيانات",
                        content: `
                            <pre>name = "Sara"       # str
age = 17            # int
price = 25.5        # float
active = True       # bool
items = [1, 2, 3]   # list</pre>
                            <p>من الأنواع المهمة: str للنصوص، int للأعداد الصحيحة، float للأعداد العشرية، bool للقيم المنطقية، وlist للقوائم.</p>
                            <h3>معرفة النوع</h3>
                            <pre>print(type(age))</pre>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثاني: العمليات والشروط",
                lessons: [
                    {
                        title: "العمليات الحسابية",
                        content: `
                            <pre>a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)</pre>
                            <p>العمليات تشمل الجمع والطرح والضرب والقسمة، والقسمة الصحيحة //، وباقي القسمة %، والأسّ **.</p>
                        `
                    },
                    {
                        title: "الشروط if",
                        content: `
                            <p>تُستخدم الشروط لاتخاذ قرار بناءً على نتيجة تعبير منطقي. المسافات البادئة جزء أساسي من صياغة Python.</p>
                            <pre>age = 18

if age >= 18:
    print("Adult")
else:
    print("Under 18")</pre>
                            <p>نستخدم elif لإضافة شرط آخر بين if وelse.</p>
                        `
                    },
                    {
                        title: "المقارنة والمنطق",
                        content: `
                            <pre>x = 10

print(x > 5)
print(x == 10)
print(x != 3)

print(x > 5 and x < 20)
print(x < 5 or x == 10)
print(not x == 10)</pre>
                            <p>and تعني تحقق الشرطين، وor تعني تحقق شرط واحد على الأقل، وnot تعكس القيمة المنطقية.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الثالث: التكرار",
                lessons: [
                    {
                        title: "حلقة for",
                        content: `
                            <p>تستخدم for للمرور على عناصر مجموعة أو تكرار تعليمات ضمن نطاق.</p>
                            <pre>for i in range(5):
    print(i)</pre>
                            <p>range(5) تنتج الأعداد من 0 حتى 4، ولا تشمل العدد 5.</p>
                        `
                    },
                    {
                        title: "حلقة while",
                        content: `
                            <pre>number = 1

while number <= 5:
    print(number)
    number += 1</pre>
                            <p>تستمر الحلقة طالما الشرط صحيح. يجب الانتباه إلى تحديث المتغير حتى لا تستمر الحلقة بلا نهاية.</p>
                        `
                    },
                    {
                        title: "break وcontinue",
                        content: `
                            <pre>for i in range(10):
    if i == 5:
        break
    print(i)</pre>
                            <p>break تنهي الحلقة، بينما continue تتخطى بقية تعليمات الدورة الحالية وتنتقل للدورة التالية.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الرابع: هياكل البيانات",
                lessons: [
                    {
                        title: "القوائم Lists",
                        content: `
                            <pre>fruits = ["apple", "banana", "orange"]

print(fruits[0])
fruits.append("mango")
fruits.remove("banana")
print(len(fruits))</pre>
                            <p>القائمة تحفظ مجموعة عناصر مرتبة وقابلة للتعديل. append تضيف عنصرًا، وremove تحذف عنصرًا مطابقًا، وlen تحسب عدد العناصر.</p>
                        `
                    },
                    {
                        title: "Tuples وSets",
                        content: `
                            <pre>point = (10, 20)

colors = {"red", "blue", "green"}
colors.add("yellow")</pre>
                            <p>Tuple مجموعة مرتبة لا يمكن تغيير عناصرها بعد إنشائها، أما Set فهي مجموعة لا تحتفظ بتكرار العناصر.</p>
                        `
                    },
                    {
                        title: "Dictionaries",
                        content: `
                            <pre>student = {
    "name": "Ali",
    "age": 17
}

print(student["name"])
student["age"] = 18</pre>
                            <p>القاموس يخزن البيانات على شكل أزواج مفتاح وقيمة key-value، ويمكن الوصول للقيمة عن طريق المفتاح.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل الخامس: الدوال",
                lessons: [
                    {
                        title: "إنشاء Function",
                        content: `
                            <pre>def greet(name):
    print("Hello", name)

greet("Ali")</pre>
                            <p>def تبدأ تعريف دالة، والاسم يحدد طريقة استدعائها، ويمكنها استقبال معاملات.</p>
                        `
                    },
                    {
                        title: "return والمعاملات",
                        content: `
                            <pre>def add(a, b):
    result = a + b
    return result

answer = add(5, 3)
print(answer)</pre>
                            <p>return تعيد نتيجة الدالة. المعاملات تسمح بإدخال بيانات مختلفة في كل استدعاء.</p>
                        `
                    }
                ]
            },
            {
                title: "الفصل السادس: التعامل مع الأخطاء والملفات",
                lessons: [
                    {
                        title: "الأخطاء والاستثناءات",
                        content: `
                            <pre>try:
    number = int(input("Enter a number: "))
    print(number)
except ValueError:
    print("Please enter a valid number")</pre>
                            <p>try تحتوي على تعليمات قد ينتج عنها استثناء، وexcept تتعامل مع نوع الخطأ المتوقع.</p>
                        `
                    },
                    {
                        title: "قراءة وكتابة الملفات",
                        content: `
                            <pre>with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python")

with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)</pre>
                            <p>الوضع w للكتابة، وr للقراءة. استخدام with يساعد على إغلاق الملف تلقائيًا بعد الانتهاء.</p>
                        `
                    }
                ]
            }
        ]
    }
};


// ======================================
// 2. التنقل بين صفحات الموقع
// ======================================

const pages = ["homePage", "coursePage", "editorPage", "quizPage"];

function showPage(pageId) {
    pages.forEach(id => {
        document.getElementById(id).classList.toggle("hidden", id !== pageId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
    showPage("homePage");
}

function showLanguages() {
    showPage("homePage");
    document.getElementById("languageCards").scrollIntoView({
        behavior: "smooth"
    });
}

function showEditor() {
    showPage("editorPage");
}

function showQuiz() {
    showPage("quizPage");
}


// ======================================
// 3. عرض كروت اللغات
// ======================================

const languageCards = document.getElementById("languageCards");

Object.entries(courses).forEach(([key, course]) => {
    const card = document.createElement("article");
    card.className = "language-card";

    card.innerHTML = `
        <div class="language-icon" style="background:${course.color}22;color:${course.color}">
            ${course.symbol}
        </div>
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <button class="main-btn" onclick="openCourse('${key}')">
            ادخل المسار ←
        </button>
    `;

    languageCards.appendChild(card);
});


// ======================================
// 4. نظام الفصول والدروس
// ======================================

let activeCourse = null;
let activeChapter = 0;
let activeLesson = 0;

const completedLessons = new Set();

function openCourse(language) {
    activeCourse = language;
    activeChapter = 0;
    activeLesson = 0;

    const course = courses[language];

    document.getElementById("courseTitle").textContent = course.name;
    document.getElementById("courseDescription").textContent = course.description;
    document.getElementById("courseSymbol").textContent = course.symbol;

    renderChapters();
    renderLesson();
    showPage("coursePage");
}

function renderChapters() {
    const list = document.getElementById("chapterList");
    const course = courses[activeCourse];

    list.innerHTML = "";

    course.chapters.forEach((chapter, chapterIndex) => {
        const heading = document.createElement("h4");
        heading.textContent = chapter.title;
        heading.style.cssText = "color:#a78bfa;font-size:12px;margin:18px 5px 5px;";
        list.appendChild(heading);

        chapter.lessons.forEach((lesson, lessonIndex) => {
            const button = document.createElement("button");
            button.className = "chapter-button";

            const key = `${activeCourse}-${chapterIndex}-${lessonIndex}`;
            const done = completedLessons.has(key);

            button.textContent = `${done ? "✓ " : ""}${lesson.title}`;

            if (chapterIndex === activeChapter && lessonIndex === activeLesson) {
                button.classList.add("active");
            }

            button.onclick = () => {
                activeChapter = chapterIndex;
                activeLesson = lessonIndex;
                renderChapters();
                renderLesson();
            };

            list.appendChild(button);
        });
    });
}

function renderLesson() {
    const course = courses[activeCourse];
    const chapter = course.chapters[activeChapter];
    const lesson = chapter.lessons[activeLesson];

    document.getElementById("lessonMeta").textContent =
        `${chapter.title}  •  الدرس ${activeLesson + 1}`;

    document.getElementById("lessonTitle").textContent = lesson.title;
    document.getElementById("lessonContent").innerHTML = lesson.content;
}

function getAllLessons() {
    const result = [];

    courses[activeCourse].chapters.forEach((chapter, chapterIndex) => {
        chapter.lessons.forEach((lesson, lessonIndex) => {
            result.push({ chapterIndex, lessonIndex });
        });
    });

    return result;
}

function moveLesson(direction) {
    const all = getAllLessons();

    let index = all.findIndex(item =>
        item.chapterIndex === activeChapter &&
        item.lessonIndex === activeLesson
    );

    index += direction;

    if (index < 0 || index >= all.length) return;

    activeChapter = all[index].chapterIndex;
    activeLesson = all[index].lessonIndex;

    renderChapters();
    renderLesson();
}

function nextLesson() {
    moveLesson(1);
}

function previousLesson() {
    moveLesson(-1);
}

function completeLesson() {
    const key = `${activeCourse}-${activeChapter}-${activeLesson}`;
    completedLessons.add(key);

    updateProgress();
    renderChapters();

    alert("أحسنت! تم تسجيل إكمال الدرس.");
}

function updateProgress() {
    document.getElementById("progressText").textContent =
        `${completedLessons.size} درس مكتمل`;
}


// ======================================
// 5. محرر الأكواد
// ======================================

const codeInput = document.getElementById("codeInput");
const codeOutput = document.getElementById("codeOutput");
const textOutput = document.getElementById("textOutput");
const editorLanguage = document.getElementById("editorLanguage");

const codeExamples = {
    html: `<h1>Hello CodeNova!</h1>
<p>This is my first page.</p>
<button onclick="alert('Welcome!')">Click me</button>`,
    css: `body {
    background: #171727;
    color: white;
    font-family: Arial;
    text-align: center;
}

h1 {
    color: violet;
}`,
    javascript: `let name = "CodeNova";
console.log("Welcome to " + name);
console.log(10 + 20);`,
    python: `name = "CodeNova"
print("Welcome to", name)
print(10 + 20)`
};

function changeEditorLanguage() {
    codeInput.value = codeExamples[editorLanguage.value];
    codeOutput.classList.add("hidden");
    textOutput.classList.add("hidden");
}

function resetCode() {
    changeEditorLanguage();
}

function runCode() {
    const language = editorLanguage.value;
    const code = codeInput.value;

    textOutput.classList.add("hidden");
    codeOutput.classList.add("hidden");

    if (language === "html") {
        codeOutput.classList.remove("hidden");
        codeOutput.srcdoc = code;
        return;
    }

    if (language === "css") {
        codeOutput.classList.remove("hidden");
        codeOutput.srcdoc = `
            <style>${code}</style>
            <h1>CSS Preview</h1>
            <p>Try changing the styles in the editor.</p>
            <button>Example button</button>
        `;
        return;
    }

    if (language === "javascript") {
        textOutput.classList.remove("hidden");

        const safeCode = code.replace(/<\/script/gi, "<\\/script");
        const outputDocument = `
            <script>
                const originalLog = console.log;
                console.log = (...args) => {
                    parent.postMessage({
                        type: "CODE_OUTPUT",
                        values: args.map(value => String(value))
                    }, "*");
                };

                try {
                    ${safeCode}
                } catch (error) {
                    parent.postMessage({
                        type: "CODE_ERROR",
                        message: error.message
                    }, "*");
                }
            <\/script>
        `;

        textOutput.textContent = "جاري التشغيل...";

        const frame = document.createElement("iframe");
        frame.sandbox = "allow-scripts";
        frame.style.display = "none";
        document.body.appendChild(frame);

        const listener = event => {
            if (event.source !== frame.contentWindow) return;

            if (event.data.type === "CODE_OUTPUT") {
                textOutput.textContent += "\n" + event.data.values.join(" ");
            }

            if (event.data.type === "CODE_ERROR") {
                textOutput.textContent += "\nخطأ: " + event.data.message;
            }
        };

        window.addEventListener("message", listener);

        frame.srcdoc = outputDocument;

        setTimeout(() => {
            window.removeEventListener("message", listener);
            frame.remove();
        }, 2000);

        return;
    }

    if (language === "python") {
        textOutput.classList.remove("hidden");
        textOutput.textContent =
            "تشغيل Python يحتاج تحميل بيئة Pyodide داخل المتصفح. هنضيفها في خطوة تشغيل Python.";
    }
}


// ======================================
// 6. بنك الأسئلة حسب اللغة والمستوى
// ======================================

const questionBank = {
    html: {
        easy: [
            {
                q: "ما وظيفة HTML؟",
                a: ["تنسيق الصفحة", "بناء هيكل الصفحة", "إدارة قواعد البيانات"],
                c: 1,
                e: "HTML تحدد بنية الصفحة وعناصرها."
            },
            {
                q: "ما العنصر المستخدم لإنشاء فقرة؟",
                a: ["<p>", "<h1>", "<img>"],
                c: 0,
                e: "العنصر p يستخدم لكتابة الفقرات."
            },
            {
                q: "ما الخاصية التي تحدد مسار الصورة؟",
                a: ["href", "src", "alt"],
                c: 1,
                e: "src تحدد مصدر الصورة."
            }
        ],
        medium: [
            {
                q: "ما الفرق بين ul و ol؟",
                a: ["لا يوجد فرق", "ul قائمة غير مرتبة وol مرتبة", "ul للصور"],
                c: 1,
                e: "ul تعرض قائمة غير مرتبة، وol قائمة مرتبة."
            },
            {
                q: "ما وظيفة alt في img؟",
                a: ["تغيير حجم الصورة", "وصف بديل للصورة", "إضافة رابط"],
                c: 1,
                e: "alt يقدم نصًا بديلًا يصف الصورة."
            },
            {
                q: "أي عنصر يمثل المحتوى الرئيسي للصفحة؟",
                a: ["main", "footer", "nav"],
                c: 0,
                e: "main يمثل المحتوى الرئيسي الفريد للصفحة."
            }
        ],
        hard: [
            {
                q: "لماذا نستخدم العناصر الدلالية Semantic HTML؟",
                a: ["لتلوين الصفحة", "لتوضيح معنى وبنية المحتوى", "لتشغيل JavaScript"],
                c: 1,
                e: "العناصر الدلالية توضح معنى المحتوى للمتصفح ومحركات البحث وتقنيات المساعدة."
            },
            {
                q: "ما السمة التي تربط label بحقل إدخال؟",
                a: ["for مع id", "src مع href", "class مع style"],
                c: 0,
                e: "قيمة for في label يجب أن تطابق id في حقل الإدخال."
            },
            {
                q: "ما العنصر الأنسب لمجموعة روابط التنقل الرئيسية؟",
                a: ["nav", "article", "aside"],
                c: 0,
                e: "nav مخصص لمجموعة روابط التنقل."
            }
        ]
    },

    css: {
        easy: [
            {
                q: "ما وظيفة CSS؟",
                a: ["بناء هيكل الصفحة", "تنسيق مظهر الصفحة", "تخزين البيانات"],
                c: 1,
                e: "CSS تتحكم في الألوان والخطوط والتخطيط والمظهر."
            },
            {
                q: "ما المحدد الذي يبدأ بنقطة؟",
                a: ["ID", "Class", "Element"],
                c: 1,
                e: "محدد class يبدأ بنقطة مثل .card."
            },
            {
                q: "ما الخاصية المسؤولة عن لون النص؟",
                a: ["background", "font-size", "color"],
                c: 2,
                e: "color تحدد لون النص."
            }
        ],
        medium: [
            {
                q: "ما وظيفة display: flex؟",
                a: ["إخفاء العنصر", "إنشاء تخطيط مرن", "تغيير لون النص"],
                c: 1,
                e: "Flexbox نظام لترتيب العناصر وتوزيع المساحات."
            },
            {
                q: "ما وظيفة padding؟",
                a: ["المسافة الداخلية", "المسافة الخارجية", "لون الحدود"],
                c: 0,
                e: "padding هي المسافة بين المحتوى وحدود العنصر."
            },
            {
                q: "ماذا تفعل Media Query؟",
                a: ["تخزن الصور", "تغير التنسيق حسب خصائص الجهاز", "تشغل JavaScript"],
                c: 1,
                e: "تسمح بتطبيق قواعد CSS حسب عرض الشاشة أو خصائص أخرى."
            }
        ],
        hard: [
            {
                q: "ما الفرق الأساسي بين Grid و Flexbox؟",
                a: ["لا فرق", "Grid ثنائي الأبعاد وFlexbox غالبًا أحادي البعد", "Flexbox للصور فقط"],
                c: 1,
                e: "Grid يتعامل مع الصفوف والأعمدة معًا، وFlexbox يرتب العناصر على محور رئيسي."
            },
            {
                q: "ما فائدة box-sizing: border-box؟",
                a: ["إخفاء الحدود", "احتساب الحشو والحدود ضمن الأبعاد المحددة", "إلغاء الهوامش"],
                c: 1,
                e: "يسهل حساب العرض والارتفاع لأن padding وborder يدخلان ضمن القياس."
            },
            {
                q: "أي وحدة تعتمد على حجم خط العنصر الجذر؟",
                a: ["px", "rem", "vw"],
                c: 1,
                e: "rem تعتمد على حجم الخط في العنصر الجذر html."
            }
        ]
    },

    javascript: {
        easy: [
            {
                q: "ما وظيفة JavaScript في صفحات الويب؟",
                a: ["إضافة التفاعل", "بناء الهيكل فقط", "تنسيق الألوان فقط"],
                c: 0,
                e: "JavaScript تضيف السلوك والتفاعل للصفحات."
            },
            {
                q: "أي كلمة نستخدمها لتعريف متغير قابل لإعادة الإسناد؟",
                a: ["const", "let", "fixed"],
                c: 1,
                e: "let تسمح بإعادة إسناد قيمة جديدة للمتغير."
            },
            {
                q: "ما نتيجة 5 + 3؟",
                a: ["53", "8", "2"],
                c: 1,
                e: "الجمع الحسابي لخمسة وثلاثة يساوي ثمانية."
            }
        ],
        medium: [
            {
                q: "ما وظيفة return داخل الدالة؟",
                a: ["إنشاء حلقة", "إرجاع قيمة من الدالة", "طباعة النص فقط"],
                c: 1,
                e: "return تنهي تنفيذ الدالة وتعيد قيمة اختيارية."
            },
            {
                q: "ما أول فهرس في Array؟",
                a: ["1", "0", "-1"],
                c: 1,
                e: "فهرسة المصفوفات في JavaScript تبدأ من الصفر."
            },
            {
                q: "ما وظيفة addEventListener؟",
                a: ["ربط حدث بوظيفة", "حذف عنصر", "إنشاء متغير"],
                c: 0,
                e: "تربط مستمعًا بحدث مثل click أو input."
            }
        ],
        hard: [
            {
                q: "ما الفرق بين == و ===؟",
                a: ["لا فرق", "=== تقارن القيمة والنوع دون تحويل تلقائي", "== تقارن النوع فقط"],
                c: 1,
                e: "المساواة الصارمة تتحقق من القيمة والنوع، بينما == قد تجري تحويلًا للأنواع."
            },
            {
                q: "ما نتيجة typeof [] في JavaScript؟",
                a: ["array", "object", "list"],
                c: 1,
                e: "المصفوفات في JavaScript نوع خاص من الكائنات، ولذلك typeof [] يعيد object."
            },
            {
                q: "ما وظيفة Promise؟",
                a: ["تمثيل نتيجة عملية غير متزامنة", "تنسيق الصفحة", "تعريف مصفوفة"],
                c: 0,
                e: "Promise تمثل نتيجة عملية غير متزامنة قد تنجح أو تفشل."
            }
        ]
    },

    python: {
        easy: [
            {
                q: "ما الأمر المستخدم لطباعة نص في Python؟",
                a: ["echo()", "print()", "write()"],
                c: 1,
                e: "print() تعرض النص أو القيمة على الشاشة."
            },
            {
                q: "أي نوع بيانات يستخدم للنصوص؟",
                a: ["int", "str", "bool"],
                c: 1,
                e: "str هو نوع البيانات المخصص للنصوص."
            },
            {
                q: "كيف نكتب تعليقًا في Python؟",
                a: ["//", "#", "<!-- -->"],
                c: 1,
                e: "علامة # تستخدم لبدء تعليق في Python."
            }
        ],
        medium: [
            {
                q: "ماذا تنتج range(5)؟",
                a: ["1 إلى 5", "0 إلى 4", "0 إلى 5"],
                c: 1,
                e: "range(5) تنتج 0 و1 و2 و3 و4، ولا تشمل 5."
            },
            {
                q: "ما الكلمة المستخدمة لتعريف دالة؟",
                a: ["function", "def", "method"],
                c: 1,
                e: "def هي الكلمة المحجوزة لتعريف دالة."
            },
            {
                q: "أي بنية بيانات تخزن أزواج مفتاح وقيمة؟",
                a: ["List", "Tuple", "Dictionary"],
                c: 2,
                e: "Dictionary يخزن البيانات في صورة مفتاح وقيمة."
            }
        ],
        hard: [
            {
                q: "ما الفرق بين == و is؟",
                a: ["لا فرق", "== تقارن القيم وis تتحقق من هوية الكائن", "is تقارن النصوص فقط"],
                c: 1,
                e: "== تختبر تساوي القيم، بينما is تختبر هل المرجعان يشيران إلى الكائن نفسه."
            },
            {
                q: "ما فائدة with open() عند التعامل مع الملفات؟",
                a: ["تغيير اسم الملف", "إدارة إغلاق الملف تلقائيًا", "تحويل الملف إلى صورة"],
                c: 1,
                e: "مدير السياق with يغلق الملف تلقائيًا بعد انتهاء الكتلة."
            },
            {
                q: "ما وظيفة try وexcept؟",
                a: ["إنشاء قائمة", "التعامل مع الاستثناءات والأخطاء المتوقعة", "تكرار الكود"],
                c: 1,
                e: "تسمح try وexcept بالتعامل مع الاستثناءات بدل توقف البرنامج دون معالجة."
            }
        ]
    }
};


// ======================================
// 7. تشغيل الاختبارات
// ======================================

let quizQuestions = [];
let quizIndex = 0;
let quizPoints = 0;
let hasAnswered = false;

function startQuiz() {
    const language = document.getElementById("quizLanguage").value;
    const level = document.getElementById("quizLevel").value;

    quizQuestions = questionBank[language][level];
    quizIndex = 0;
    quizPoints = 0;

    document.getElementById("quizSettings").classList.add("hidden");
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quizArea").classList.remove("hidden");

    showQuizQuestion();
}

function showQuizQuestion() {
    hasAnswered = false;

    const item = quizQuestions[quizIndex];

    document.getElementById("quizCounter").textContent =
        `السؤال ${quizIndex + 1} من ${quizQuestions.length}`;

    document.getElementById("quizScore").textContent =
        `النتيجة: ${quizPoints}`;

    document.getElementById("quizProgress").style.width =
        `${(quizIndex / quizQuestions.length) * 100}%`;

    document.getElementById("quizQuestion").textContent = item.q;
    document.getElementById("quizFeedback").textContent = "";

    document.getElementById("nextQuestionBtn").classList.add("hidden");

    const answers = document.getElementById("quizAnswers");
    answers.innerHTML = "";

    item.a.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "quiz-answer";
        button.textContent = answer;

        button.onclick = () => chooseAnswer(index);

        answers.appendChild(button);
    });
}

function chooseAnswer(index) {
    if (hasAnswered) return;

    hasAnswered = true;

    const item = quizQuestions[quizIndex];
    const buttons = document.querySelectorAll(".quiz-answer");

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === item.c) button.classList.add("correct");
    });

    if (index === item.c) {
        quizPoints++;
        document.getElementById("quizFeedback").textContent =
            "إجابة صحيحة! " + item.e;
        document.getElementById("quizFeedback").style.color = "#4ade80";
    } else {
        buttons[index].classList.add("wrong");
        document.getElementById("quizFeedback").textContent =
            "الإجابة غير صحيحة. " + item.e;
        document.getElementById("quizFeedback").style.color = "#f87171";
    }

    document.getElementById("quizScore").textContent =
        `النتيجة: ${quizPoints}`;

    const nextButton = document.getElementById("nextQuestionBtn");
    nextButton.textContent =
        quizIndex === quizQuestions.length - 1
            ? "عرض النتيجة"
            : "السؤال التالي ←";

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    quizIndex++;

    if (quizIndex < quizQuestions.length) {
        showQuizQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById("quizArea").classList.add("hidden");
    document.getElementById("quizResult").classList.remove("hidden");

    document.getElementById("quizProgress").style.width = "100%";

    document.getElementById("finalScore").textContent =
        `نتيجتك ${quizPoints} من ${quizQuestions.length}. ${
            quizPoints === quizQuestions.length
                ? "ممتاز! كل إجاباتك صحيحة 🎉"
                : "استمر في التعلم والتدريب، هتتحسن مع الوقت 💜"
        }`;
}

function restartQuiz() {
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quizSettings").classList.remove("hidden");
}
