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

            fetch('send_telegram.php', {
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

/**
 * Game Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // Shared Elements
    const canvas = document.getElementById('gameCanvas');
    const gridCanvas = document.getElementById('gridGameCanvas');
    const gridLayout = document.getElementById('grid-game-layout');
    const workspace = document.getElementById('workspace');
    const clearWorkspaceBtn = document.getElementById('clear-workspace-btn');
    const runCodeBtn = document.getElementById('run-code-btn');
    if (!canvas || !gridCanvas) return;

    const ctx = canvas.getContext('2d');
    const gridCtx = gridCanvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const overlay = document.getElementById('game-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const startBtn = document.getElementById('start-btn');
    const gameDesc = document.getElementById('game-desc');
    const gameInstructions = document.getElementById('game-instructions');
    const tabBtns = document.querySelectorAll('.tab-btn');

    // Touch Controls
    const touchUp = document.getElementById('touch-up');
    const touchDown = document.getElementById('touch-down');
    const touchLeft = document.getElementById('touch-left');
    const touchRight = document.getElementById('touch-right');
    const touchControls = document.querySelector('.touch-controls');

    let currentGame = 'action'; // 'action' or 'grid'
    let score = 0;
    let gameActive = false;
    let animationId;
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;

    // --- Action Game State ---
    let obstacles = [];
    let coins = [];
    let particles = [];
    const PLAYER_SIZE = 30;
    const COIN_SIZE = 15;
    const OBSTACLE_SIZE = 25;
    const PLAYER_SPEED = 5;

    const player = {
        x: 0, y: 0, width: PLAYER_SIZE, height: PLAYER_SIZE,
        color: '#5AB5E5', dx: 0, dy: 0
    };

    // --- Grid Game State ---
    const GRID_SIZE = 10;
    let cellSize;
    const gridPlayer = { x: 0, y: 0, angle: 0, color: '#10B981' };
    let gridItems = [];
    let isExecuting = false;
    let commandQueue = [];
    const GRID_ITEM_COUNT = 3;

    const keys = {
        ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
        w: false, s: false, a: false, d: false
    };

    function init() {
        resize();
        resetGame();
    }

    function resize() {
        const container = canvas.parentElement;
        if (!container) return;

        const containerWidth = container.clientWidth;
        const isMobile = window.innerWidth <= 768;

        // Action Game Canvas
        canvas.width = containerWidth;
        canvas.height = isMobile ? 430 : 480;

        // Grid Game Canvas — calculate explicitly to avoid clientWidth=0 timing issues
        if (isMobile) {
            gridCanvas.width = Math.max(containerWidth, 280);
            gridCanvas.height = 310;
        } else {
            const editorWidth = 244; // .block-editor-container flex: 0 0 240px + 4px border
            gridCanvas.width = Math.max(containerWidth - editorWidth, 200);
            gridCanvas.height = 540;
        }

        cellSize = Math.min(gridCanvas.width, gridCanvas.height) / GRID_SIZE;

        if (currentGame === 'action') {
            player.x = Math.min(player.x, canvas.width - player.width);
            player.y = Math.min(player.y, canvas.height - player.height);
        }

        isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;
        updateControlsVisibility();
    }

    function resetGame() {
        score = 0;
        scoreElement.textContent = score;
        
        if (currentGame === 'action') {
            obstacles = [];
            coins = [];
            particles = [];
            player.x = canvas.width / 2 - PLAYER_SIZE / 2;
            player.y = canvas.height / 2 - PLAYER_SIZE / 2;
            player.dx = 0;
            player.dy = 0;
            for (let i = 0; i < 3; i++) spawnCoin();
        } else {
            gridPlayer.x = 0;
            gridPlayer.y = 0;
            gridPlayer.angle = 0;
            gridItems = [];
            isExecuting = false;
            commandQueue = [];
            for (let i = 0; i < GRID_ITEM_COUNT; i++) spawnGridItem();
        }
    }

    // --- Action Game Functions ---
    function spawnObstacle() {
        const side = Math.floor(Math.random() * 4);
        let x, y, dx, dy;
        const speed = 2 + Math.random() * 2 + (score / 10);
        if (side === 0) { x = Math.random() * canvas.width; y = -OBSTACLE_SIZE; dx = (Math.random() - 0.5) * 2; dy = speed; }
        else if (side === 1) { x = canvas.width + OBSTACLE_SIZE; y = Math.random() * canvas.height; dx = -speed; dy = (Math.random() - 0.5) * 2; }
        else if (side === 2) { x = Math.random() * canvas.width; y = canvas.height + OBSTACLE_SIZE; dx = (Math.random() - 0.5) * 2; dy = -speed; }
        else { x = -OBSTACLE_SIZE; y = Math.random() * canvas.height; dx = speed; dy = (Math.random() - 0.5) * 2; }
        obstacles.push({ x, y, width: OBSTACLE_SIZE, height: OBSTACLE_SIZE, dx, dy, color: '#E56B9C' });
    }

    function spawnCoin() {
        const x = Math.random() * (canvas.width - COIN_SIZE);
        const y = Math.random() * (canvas.height - COIN_SIZE);
        coins.push({ x, y, size: COIN_SIZE, color: '#FDB85C' });
    }

    function createParticles(x, y, color) {
        for (let i = 0; i < 8; i++) {
            particles.push({
                x, y, dx: (Math.random() - 0.5) * 5, dy: (Math.random() - 0.5) * 5,
                size: Math.random() * 4, life: 1, color
            });
        }
    }

    function updateActionGame() {
        if (keys.ArrowUp || keys.w) player.dy = -PLAYER_SPEED;
        else if (keys.ArrowDown || keys.s) player.dy = PLAYER_SPEED;
        else player.dy = 0;

        if (keys.ArrowLeft || keys.a) player.dx = -PLAYER_SPEED;
        else if (keys.ArrowRight || keys.d) player.dx = PLAYER_SPEED;
        else player.dx = 0;

        player.x += player.dx;
        player.y += player.dy;

        // Boundary check
        player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

        obstacles.forEach((obs, index) => {
            obs.x += obs.dx;
            obs.y += obs.dy;
            // Remove off-screen obstacles
            if (obs.x < -100 || obs.x > canvas.width + 100 || obs.y < -100 || obs.y > canvas.height + 100) {
                obstacles.splice(index, 1);
            }
            if (rectIntersect(player.x, player.y, player.width, player.height, obs.x, obs.y, obs.width, obs.height)) {
                gameOver();
            }
        });

        coins.forEach((coin, index) => {
            if (rectIntersect(player.x, player.y, player.width, player.height, coin.x, coin.y, coin.size, coin.size)) {
                coins.splice(index, 1);
                score++;
                scoreElement.textContent = score;
                createParticles(coin.x + coin.size/2, coin.y + coin.size/2, coin.color);
                spawnCoin();
                if (score % 5 === 0) spawnObstacle();
            }
        });

        particles.forEach((p, index) => {
            p.x += p.dx;
            p.y += p.dy;
            p.life -= 0.02;
            if (p.life <= 0) particles.splice(index, 1);
        });

        if (Math.random() < 0.02) spawnObstacle();
    }

    function drawActionGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = player.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = player.color;
        roundRect(ctx, player.x, player.y, player.width, player.height, 8, true);
        ctx.shadowBlur = 0;

        coins.forEach(coin => {
            ctx.fillStyle = coin.color;
            ctx.beginPath();
            ctx.arc(coin.x + coin.size/2, coin.y + coin.size/2, coin.size/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = coin.color;
            ctx.stroke();
            ctx.shadowBlur = 0;
        });

        obstacles.forEach(obs => {
            ctx.fillStyle = obs.color;
            roundRect(ctx, obs.x, obs.y, obs.width, obs.height, 5, true);
        });

        particles.forEach(p => {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    // --- Grid Game Functions ---
    function spawnGridItem() {
        let x, y;
        let overlap;
        do {
            overlap = false;
            x = Math.floor(Math.random() * GRID_SIZE);
            y = Math.floor(Math.random() * GRID_SIZE);
            if (x === gridPlayer.x && y === gridPlayer.y) overlap = true;
            gridItems.forEach(item => { if (item.x === x && item.y === y) overlap = true; });
        } while (overlap);
        gridItems.push({ x, y, color: '#FDB85C' });
    }

    async function executeCommands() {
        if (isExecuting) return;
        
        const blocks = workspace.querySelectorAll('.block');
        if (blocks.length === 0) return;

        isExecuting = true;
        runCodeBtn.disabled = true;
        runCodeBtn.style.opacity = '0.5';

        for (let block of blocks) {
            const command = block.dataset.command;
            
            // Visual feedback for current block
            block.style.boxShadow = '0 0 10px #fff';
            block.style.filter = 'brightness(1.2)';

            if (command === 'moveForward') {
                await moveForward();
            } else if (command === 'turnLeft') {
                gridPlayer.angle -= Math.PI / 2;
                await sleep(300);
            } else if (command === 'turnRight') {
                gridPlayer.angle += Math.PI / 2;
                await sleep(300);
            }
            
            block.style.boxShadow = 'none';
            block.style.filter = 'none';
            
            checkGridCollision();
        }

        isExecuting = false;
        runCodeBtn.disabled = false;
        runCodeBtn.style.opacity = '1';
    }

    // --- Block Editor Logic ---
    function addBlockToWorkspace(command, text) {
        if (isExecuting) return;
        
        // Remove placeholder if it exists
        const placeholder = workspace.querySelector('.placeholder-text');
        if (placeholder) placeholder.remove();

        const block = document.createElement('div');
        block.className = 'block';
        block.dataset.command = command;
        block.textContent = text;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            block.remove();
            if (workspace.querySelectorAll('.block').length === 0) {
                workspace.innerHTML = '<p class="placeholder-text">Ավելացրեք հրամաններ այստեղ...</p>';
            }
        };
        
        block.appendChild(removeBtn);
        workspace.appendChild(block);
        workspace.scrollTop = workspace.scrollHeight;
    }

    document.querySelectorAll('.available-blocks .block').forEach(btn => {
        btn.addEventListener('click', () => {
            addBlockToWorkspace(btn.dataset.command, btn.textContent);
        });
    });

    clearWorkspaceBtn.addEventListener('click', () => {
        if (isExecuting) return;
        workspace.innerHTML = '<p class="placeholder-text">Ավելացրեք հրամաններ այստեղ...</p>';
    });

    async function moveForward() {
        const dx = Math.round(Math.cos(gridPlayer.angle));
        const dy = Math.round(Math.sin(gridPlayer.angle));
        
        const newX = gridPlayer.x + dx;
        const newY = gridPlayer.y + dy;
        
        if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
            gridPlayer.x = newX;
            gridPlayer.y = newY;
        }
        await sleep(300);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function checkGridCollision() {
        gridItems.forEach((item, index) => {
            if (item.x === gridPlayer.x && item.y === gridPlayer.y) {
                gridItems.splice(index, 1);
                score++;
                scoreElement.textContent = score;
                spawnGridItem();
            }
        });
    }

    function drawGridGame() {
        const w = gridCanvas.width;
        const h = gridCanvas.height;

        gridCtx.clearRect(0, 0, w, h);

        // Background
        gridCtx.fillStyle = '#050510';
        gridCtx.fillRect(0, 0, w, h);

        // Subtle checkerboard cells
        for (let x = 0; x < GRID_SIZE; x++) {
            for (let y = 0; y < GRID_SIZE; y++) {
                if ((x + y) % 2 === 0) {
                    gridCtx.fillStyle = 'rgba(100, 100, 220, 0.05)';
                    gridCtx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        // Grid lines
        gridCtx.strokeStyle = 'rgba(80, 80, 180, 0.25)';
        gridCtx.lineWidth = 1;
        for (let i = 0; i <= GRID_SIZE; i++) {
            gridCtx.beginPath();
            gridCtx.moveTo(i * cellSize, 0);
            gridCtx.lineTo(i * cellSize, h);
            gridCtx.stroke();
            gridCtx.beginPath();
            gridCtx.moveTo(0, i * cellSize);
            gridCtx.lineTo(w, i * cellSize);
            gridCtx.stroke();
        }

        // Highlight player's current cell
        gridCtx.fillStyle = 'rgba(16, 185, 129, 0.12)';
        gridCtx.fillRect(gridPlayer.x * cellSize + 1, gridPlayer.y * cellSize + 1, cellSize - 2, cellSize - 2);

        // Draw items (glowing coins)
        gridItems.forEach(item => {
            const cx = (item.x + 0.5) * cellSize;
            const cy = (item.y + 0.5) * cellSize;
            const r = cellSize * 0.28;

            gridCtx.shadowBlur = 20;
            gridCtx.shadowColor = '#FDB85C';
            gridCtx.fillStyle = '#FDB85C';
            gridCtx.beginPath();
            gridCtx.arc(cx, cy, r, 0, Math.PI * 2);
            gridCtx.fill();
            gridCtx.shadowBlur = 0;

            // Inner shine
            gridCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            gridCtx.beginPath();
            gridCtx.arc(cx - r * 0.28, cy - r * 0.28, r * 0.32, 0, Math.PI * 2);
            gridCtx.fill();
        });

        // Draw Robot (forward direction = right = +X in local coords)
        gridCtx.save();
        gridCtx.translate((gridPlayer.x + 0.5) * cellSize, (gridPlayer.y + 0.5) * cellSize);
        gridCtx.rotate(gridPlayer.angle);

        const c = cellSize;

        // Outer chassis glow
        gridCtx.shadowBlur = 18;
        gridCtx.shadowColor = '#0ea5e9';
        gridCtx.fillStyle = '#0f2744';
        roundRect(gridCtx, -c*0.33, -c*0.28, c*0.66, c*0.56, c*0.08, true);
        gridCtx.shadowBlur = 0;

        // Body inner panel
        gridCtx.fillStyle = '#0a1628';
        roundRect(gridCtx, -c*0.25, -c*0.2, c*0.34, c*0.4, c*0.05, true);

        // Head / face plate (right side = forward direction)
        gridCtx.fillStyle = '#0c3352';
        roundRect(gridCtx, c*0.09, -c*0.24, c*0.26, c*0.48, c*0.07, true);
        // Face plate border highlight
        gridCtx.strokeStyle = '#0ea5e9';
        gridCtx.lineWidth = c*0.022;
        gridCtx.stroke();

        // Visor — glowing cyan horizontal bar
        gridCtx.shadowBlur = 14;
        gridCtx.shadowColor = '#0ea5e9';
        gridCtx.fillStyle = '#0ea5e9';
        roundRect(gridCtx, c*0.12, -c*0.065, c*0.2, c*0.13, c*0.04, true);
        gridCtx.shadowBlur = 0;

        // Visor eye highlight
        gridCtx.fillStyle = 'rgba(255,255,255,0.92)';
        gridCtx.beginPath();
        gridCtx.arc(c*0.22, 0, c*0.038, 0, Math.PI * 2);
        gridCtx.fill();
        gridCtx.fillStyle = '#0369a1';
        gridCtx.beginPath();
        gridCtx.arc(c*0.23, c*0.006, c*0.02, 0, Math.PI * 2);
        gridCtx.fill();

        // Antenna (angled up from face plate top)
        gridCtx.strokeStyle = '#7dd3fc';
        gridCtx.lineWidth = c*0.022;
        gridCtx.beginPath();
        gridCtx.moveTo(c*0.18, -c*0.24);
        gridCtx.lineTo(c*0.08, -c*0.44);
        gridCtx.stroke();
        // Antenna tip (glowing red ball)
        gridCtx.shadowBlur = 12;
        gridCtx.shadowColor = '#ef4444';
        gridCtx.fillStyle = '#ef4444';
        gridCtx.beginPath();
        gridCtx.arc(c*0.08, -c*0.47, c*0.042, 0, Math.PI * 2);
        gridCtx.fill();
        gridCtx.shadowBlur = 0;

        // Arms (top and bottom stubs)
        gridCtx.fillStyle = '#164e63';
        roundRect(gridCtx, -c*0.13, -c*0.38, c*0.22, c*0.12, c*0.03, true);
        roundRect(gridCtx, -c*0.13, c*0.26, c*0.22, c*0.12, c*0.03, true);

        // Tread (left side = back of robot)
        gridCtx.fillStyle = '#1e2d3d';
        roundRect(gridCtx, -c*0.38, -c*0.22, c*0.08, c*0.44, c*0.04, true);
        gridCtx.fillStyle = '#334155';
        for (let t = 0; t < 3; t++) {
            gridCtx.fillRect(-c*0.37, -c*0.15 + t*c*0.13, c*0.06, c*0.08);
        }

        // Chest LED detail strips
        gridCtx.fillStyle = 'rgba(14, 165, 233, 0.28)';
        roundRect(gridCtx, -c*0.21, -c*0.13, c*0.27, c*0.05, c*0.02, true);
        roundRect(gridCtx, -c*0.21, -c*0.02, c*0.27, c*0.05, c*0.02, true);
        roundRect(gridCtx, -c*0.21, c*0.09, c*0.17, c*0.05, c*0.02, true);

        // Direction arrow — solid filled triangle pointing RIGHT (forward)
        gridCtx.shadowBlur = 8;
        gridCtx.shadowColor = 'rgba(255,255,255,0.7)';
        gridCtx.fillStyle = 'rgba(255, 255, 255, 0.93)';
        gridCtx.beginPath();
        gridCtx.moveTo(c*0.085, 0);       // tip → pointing forward (right)
        gridCtx.lineTo(-c*0.105, -c*0.13); // top-left corner
        gridCtx.lineTo(-c*0.105, c*0.13);  // bottom-left corner
        gridCtx.closePath();
        gridCtx.fill();
        gridCtx.shadowBlur = 0;

        gridCtx.restore();
    }

    // --- Common Game Loop ---
    function gameLoop() {
        if (!gameActive) return;

        if (currentGame === 'action') {
            updateActionGame();
            drawActionGame();
        } else {
            drawGridGame();
        }

        animationId = requestAnimationFrame(gameLoop);
    }

    function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        return x2 < x1 + w1 && x2 + w2 > x1 && y2 < y1 + h1 && y2 + h2 > y1;
    }

    function roundRect(ctx, x, y, width, height, radius, fill) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) ctx.fill();
    }

    function startGame() {
        gameActive = true;
        overlay.classList.add('hidden');
        resetGame();
        gameLoop();
        
        // Show/hide touch controls based on device and current game
        updateControlsVisibility();
    }

    function updateControlsVisibility() {
        if (isTouchDevice && currentGame === 'action' && gameActive) {
            touchControls.style.display = 'flex';
        } else {
            touchControls.style.display = 'none';
        }
    }

    function gameOver() {
        gameActive = false;
        cancelAnimationFrame(animationId);
        overlayTitle.textContent = 'Խաղն ավարտվեց!';
        startBtn.textContent = 'Կրկնել';
        overlay.classList.remove('hidden');
        updateControlsVisibility();
    }

    // --- Tab Switching ---
    const gameContainer = document.getElementById('game-container');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;

            // Stop current game
            gameActive = false;
            cancelAnimationFrame(animationId);
            overlay.classList.remove('hidden');
            overlayTitle.textContent = 'Պատրա՞ստ եք';
            startBtn.textContent = 'Սկսել խաղը';

            // Switch tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentGame = btn.dataset.game;

            if (currentGame === 'action') {
                canvas.style.display = 'block';
                gridLayout.style.display = 'none';
                gameContainer.classList.remove('grid-mode');
                gameDesc.textContent = 'Հավաքեք մետաղադրամները և խուսափեք խոչընդոտներից:';
                if (isTouchDevice) {
                    gameInstructions.innerHTML = '<p>Օգտագործեք <b>Կոճակները</b> շարժվելու համար:</p>';
                } else {
                    gameInstructions.innerHTML = '<p>Օգտագործեք <b>WASD</b> կամ <b>Սլաքները</b> շարժվելու համար:</p>';
                }
                resize();
            } else {
                canvas.style.display = 'none';
                gridLayout.style.display = 'flex';
                gameContainer.classList.add('grid-mode');
                gameDesc.textContent = 'Ավելացրեք հրամաններ՝ հերոսին կառավարելու համար:';
                gameInstructions.innerHTML = `
                    <p>Ինչպես խաղալ:<br>
                    1. Սեղմեք կապույտ կամ մանուշակագույն հրամանների վրա դրանք ավելացնելու համար:<br>
                    2. Սեղմեք <b>Աշխատեցնել ▶</b>՝ ռոբոտին կառավարելու համար:</p>
                `;
                resize();
            }

            resetGame();
        });
    });

    // Event Listeners
    window.addEventListener('keydown', e => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
            // Removed manual grid movement from keys
        }
    });
    window.addEventListener('keyup', e => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; });
    
    startBtn.addEventListener('click', startGame);
    runCodeBtn.addEventListener('click', executeCommands);
    window.addEventListener('resize', resize);

    // Touch button event listeners
    const setupTouchBtn = (btn, key) => {
        const start = (e) => {
            e.preventDefault();
            keys[key] = true;
        };
        const end = (e) => {
            e.preventDefault();
            keys[key] = false;
        };
        btn.addEventListener('touchstart', start);
        btn.addEventListener('touchend', end);
        btn.addEventListener('mousedown', () => keys[key] = true);
        btn.addEventListener('mouseup', () => keys[key] = false);
        btn.addEventListener('mouseleave', () => keys[key] = false);
    };

    if (touchUp) setupTouchBtn(touchUp, 'ArrowUp');
    if (touchDown) setupTouchBtn(touchDown, 'ArrowDown');
    if (touchLeft) setupTouchBtn(touchLeft, 'ArrowLeft');
    if (touchRight) setupTouchBtn(touchRight, 'ArrowRight');

    if (isTouchDevice && currentGame === 'action') {
        gameInstructions.innerHTML = '<p>Օգտագործեք <b>Կոճակները</b> շարժվելու համար:</p>';
    } else if (currentGame === 'action') {
        gameInstructions.innerHTML = '<p>Օգտագործեք <b>WASD</b> կամ <b>Սլաքները</b> շարժվելու համար:</p>';
    }

    init();
});