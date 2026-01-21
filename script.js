// Course data
const courseData = {
    scratch: {
        image: 'images/scratch.png',
        title: 'Scratch - Սկսնակներ',
        age: '8-12 տարեկան',
        duration: '6 ամիս (48 դաս)',
        price: '25,000 ՀՀ դրամ/ամիս',
        description: 'Scratch-ը լավագույն ծրագիրն է երեխաներին ծրագրավորման հետ ծանոթացնելու համար։',
        topics: [
            'Ծրագրավորման հիմնական հասկացություններ',
            'Անիմացիաների ստեղծում',
            'Խաղերի մշակում',
            'Տրամաբանական մտածողություն',
            'Ալգորիթմներ և ցիկլեր',
            'Իրադարձությունների կառավարում'
        ],
        schedule: 'Շաբաթը 2 անգամ, 1.5 ժամ'
    },
    python: {
        image: 'images/python.jpeg',
        title: 'Python Ծրագրավորում',
        age: '10-13 տարեկան',
        duration: '8 ամիս (64 դաս)',
        price: '30,000 ՀՀ դրամ/ամիս',
        description: 'Python-ը ժամանակակից և հզոր ծրագրավորման լեզու է՝ AI և Data Science-ի համար։',
        topics: [
            'Python հիմունքներ',
            'Փոփոխականներ և տվյալների տիպեր',
            'Ֆունկցիաներ և մոդուլներ',
            'Օբյեկտային ծրագրավորում',
            'AI-ի հիմունքներ',
            'Պրոյեկտների ստեղծում'
        ],
        schedule: 'Շաբաթը 2 անգամ, 1.5 ժամ'
    },
    javascript: {
        image: 'images/javascript.jpg',
        title: 'JavaScript & Web Development',
        age: '12-16 տարեկան',
        duration: '10 ամիս (80 դաս)',
        price: '30,000 ՀՀ դրամ/ամիս',
        description: 'Սովորեք ստեղծել ինտերակտիվ կայքեր և վեբ հավելվածներ։',
        topics: [
            'HTML & CSS հիմունքներ',
            'JavaScript ծրագրավորում',
            'DOM մանիպուլյացիա',
            'Responsive դիզայն',
            'React.js հիմունքներ',
            'Իրական պրոյեկտներ'
        ],
        schedule: 'Շաբաթը 2 անգամ, 1.5 ժամ'
    },
    robotics: {
        image: 'images/robotics.png',
        title: 'Ռոբոտաշինություն',
        age: '8+ տարեկան',
        duration: '6 ամիս (48 դաս)',
        price: '35,000 ՀՀ դրամ/ամիս',
        description: 'Ստեղծեք և ծրագրավորեք ռոբոտներ LEGO Mindstorms-ի միջոցով։',
        topics: [
            'Ռոբոտաշինության հիմունքներ',
            'Սենսորներ և մոտորներ',
            'Ռոբոտների ծրագրավորում',
            'Մեխանիկայի հիմունքներ',
            'Պրոբլեմների լուծում',
            'Մրցույթների նախապատրաստում'
        ],
        schedule: 'Շաբաթը 2 անգամ, 1.5 ժամ'
    },
    math: {
        image: 'images/math.png',
        title: 'Մաթեմատիկա և Տրամաբանություն',
        age: 'Բոլոր տարիքներ',
        duration: '6 ամիս (48 դաս)',
        price: '25,000 ՀՀ դրամ/ամիս',
        description: 'Զարգացրեք տրամաբանական և հաշվողական մտածողությունը։',
        topics: [
            'Մաթեմատիկական տրամաբանություն',
            'Խնդիրների լուծման ռազմավարություններ',
            'Ալգորիթմական մտածողություն',
            'Թվաբանություն և հավասարումներ',
            'Երկրաչափություն',
            'Օլիմպիադային խնդիրներ'
        ],
        schedule: 'Շաբաթը 2 անգամ, 1.5 ժամ'
    },
    english: {
        image: 'images/english.png',
        title: 'Անգլերեն Լեզու',
        age: 'Բոլոր տարիքներ',
        duration: '8 ամիս (64 դաս)',
        price: '28,000 ՀՀ դրամ/ամիս',
        description: 'Տեխնոլոգիական անգլերեն և մասնագիտական հաղորդակցություն։',
        topics: [
            'Տեխնիկական անգլերեն',
            'IT տերմինոլոգիա',
            'Գրավոր հաղորդակցություն',
            'Բանավոր հաղորդակցություն',
            'Presentation skills',
            'Մասնագիտական զրույց'
        ],
        schedule: 'Շաբաթը 2 անգամ, 1.5 ժամ'
    },
    design: {
        image: 'images/design.jpg',
        title: 'Գրաֆիկական Դիզայն',
        age: '10+ տարեկան',
        duration: '6 ամիս (48 դաս)',
        price: '30,000 ՀՀ դրամ/ամիս',
        description: 'Սովորեք թվային դիզայնի և ստեղծագործության հիմունքները։',
        topics: [
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Figma դիզայն',
            'UI/UX հիմունքներ',
            'Գույների տեսություն',
            'Պրոյեկտների պորտֆոլիո'
        ],
        schedule: 'Շաբաթը 2 անգամ, 2 ժամ'
    }
};

// Open Modal
function openModal(course) {
    const data = courseData[course];
    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${data.image}" alt="${data.title}" class="modal-icon">
            <h3>${data.title}</h3>
            <p style="color: #666; font-size: 1.1em;">${data.age}</p>
        </div>
        <div class="modal-body">
            <p style="font-size: 1.1em; margin-bottom: 20px;">${data.description}</p>
            
            <h4>⏱️ Տևողություն</h4>
            <p>${data.duration}</p>
            <p>${data.schedule}</p>
            
            <div class="price-tag">
                 ${data.price}
            </div>
            
            <h4>📚 Ինչ Կսովորեք</h4>
            <ul>
                ${data.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
            
            <div style="margin-top: 30px; padding: 20px; background: #F0F9FF; border-radius: 15px;">
                <p style="text-align: center; color: #5AB5E5; font-weight: 600; margin-bottom: 10px;">
                    ⭐ Հատուկ զեղչեր սոցիալապես անապահով և պատերազմում զոհվածների ընտանիքների երեխաների համար
                </p>
               
            </div>
            
            <button onclick="scrollToRegister(); closeModal();" style="width: 100%; margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #5AB5E5, #8B68E5); color: white; border: none; border-radius: 25px; font-size: 1.1em; cursor: pointer; font-weight: 600;">
                📝 Գրանցվել Հիմա
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('courseModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});

// Toggle Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Scroll to Register
function scrollToRegister() {
    const registerSection = document.getElementById('register');
    if (registerSection) {
        registerSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Registration Form Submit
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Ուղարկվում է...';
            submitBtn.disabled = true;

            const formData = new FormData(form);

            fetch('send_mail.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    showSuccessModal();
                    form.reset();
                } else {
                    showErrorModal('Տեղի է ունեցել սխալ: Խնդրում ենք փորձել կրկին կամ կապ հաստատել մեզ հետ հեռախոսով:');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showErrorModal('Տեղի է ունեցել սխալ կապի հետ: Խնդրում ենք ստուգել ինտերնետ կապը:');
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});

// Success Modal
function showSuccessModal() {
    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">🎉</div>
            <h2 style="color: #5AB5E5; margin-bottom: 15px;">Շնորհակալություն!</h2>
            <p style="font-size: 1.2em; color: #666; margin-bottom: 30px;">
                Ձեր դիմումը հաջողությամբ ուղարկվել է։<br>
                Մենք շուտով կկապվենք ձեզ հետ։
            </p>
            <button onclick="closeModal()" style="padding: 12px 40px; background: linear-gradient(135deg, #5AB5E5, #8B68E5); color: white; border: none; border-radius: 25px; font-size: 1.1em; cursor: pointer; font-weight: 600;">
                Փակել
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Error Modal
function showErrorModal(message) {
    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <div style="font-size: 80px; margin-bottom: 20px;">⚠️</div>
            <h2 style="color: #E55A5A; margin-bottom: 15px;">Սխալ</h2>
            <p style="font-size: 1.1em; color: #666; margin-bottom: 30px;">
                ${message}
            </p>
            <button onclick="closeModal()" style="padding: 12px 40px; background: linear-gradient(135deg, #E55A5A, #E58B68); color: white; border: none; border-radius: 25px; font-size: 1.1em; cursor: pointer; font-weight: 600;">
                Փակել
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}