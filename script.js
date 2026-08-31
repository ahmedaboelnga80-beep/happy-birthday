/* ==========================================================================
   HAPPY BIRTHDAY - INTERACTIVE JAVASCRIPT LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. ASSETS MANIFEST & DATA
  const photoAssets = [
    { src: 'assets/PHOTO-2026-08-16-05-37-58.jpg', caption: 'ضحكتك دي هي نور حياتي ❤️' },
    { src: 'assets/PHOTO-2026-08-16-05-37-59.jpg', caption: 'أجمل ذكريات العمر سوا ✨' },
    { src: 'assets/PHOTO-2026-08-16-05-38-00.jpg', caption: 'كل يوم معاكي هو عيد 🌸' },
    { src: 'assets/PHOTO-2026-08-16-05-38-03.jpg', caption: 'جمالك ملوش مثيل 💖' },
    { src: 'assets/PHOTO-2026-08-16-05-38-07.jpg', caption: 'عيونك فيها سر السعادة 💫' },
    { src: 'assets/PHOTO-2026-08-16-05-38-08.jpg', caption: 'أغلى إنسانة في الوجود 👑' },
    { src: 'assets/PHOTO-2026-08-17-13-12-41.jpg', caption: 'لحظات محفورة في القلب 📸' },
    { src: 'assets/PHOTO-2026-08-12-06-53-00.jpg', caption: 'ابتسامتك تفتح كل الأبواب 🌺' },
    { src: 'assets/PHOTO-2026-08-12-07-20-40.jpg', caption: 'قلبك الأبيض النقي 🤍' },
    { src: 'assets/IMG_3978.JPG', caption: 'روحك الحلوة بتنور المكان ✨' },
    { src: 'assets/IMG_3979.JPG', caption: 'أحلى صدفة في حياتي 💕' },
    { src: 'assets/IMG_3981.JPG', caption: 'أميرة قلبي للأبد 💍' },
    { src: 'assets/IMG_4832.PNG', caption: 'كل لحظة جنبك بحبها 🌟' },
    { src: 'assets/21638c66-c1f8-4a05-9935-824d6d049de7.JPG', caption: 'سعادتي بدأت معاكي ❤️' },
    { src: 'assets/41c80512-3523-4648-9141-f29d1befc2aa.JPG', caption: 'حنيتك ورقتك مفيش زيها 🌹' },
    { src: 'assets/5ce096e6-c9c7-4429-8d77-4ea16f4e8752.JPG', caption: 'أنتِ السند والأمان 🌟' },
    { src: 'assets/7cf60b9b-10d0-46b8-a2dc-306a1cdfdb04.JPG', caption: 'شخصيتك الجذابة والفريدة ✨' },
    { src: 'assets/db4272b8-c95e-4f02-ae89-6c689642fc4e.JPG', caption: 'ذكريات لا تُمحى من البال 💖' },
    { src: 'assets/eb78f176-deb8-4a10-9985-254695234400.JPG', caption: 'نجمتي الساطعة دائماً 🌌' },
    { src: 'assets/fd0c0d23-a12d-4910-ae56-cfd9c0c680cd.JPG', caption: 'أجمل هدية من ربنا ليا 🎁' }
  ];

  const videoAssets = [
    { src: 'assets/VIDEO-2026-08-16-05-38-00.mp4', caption: 'فيديو من أجمل اللحظات 🎥' },
    { src: 'assets/VIDEO-2026-08-16-05-38-01.mp4', caption: 'ضحك وفرحة سوا 🎉' },
    { src: 'assets/VIDEO-2026-08-16-05-38-02.mp4', caption: 'ذكريات الفيديو الجميلة ✨' },
    { src: 'assets/VIDEO-2026-08-16-05-38-04.mp4', caption: 'لحظة عفوية تثلج الصدر 💕' },
    { src: 'assets/VIDEO-2026-08-16-05-38-05.mp4', caption: 'فيديو عيد الميلاد السعيد 🎂' },
    { src: 'assets/VIDEO-2026-08-16-05-38-06.mp4', caption: 'مقطع خاص للذكرى ❤️' },
    { src: 'assets/3cf720a4a5974b90af97fd64cc9e6c25.MP4', caption: 'ذكريات مميزة ومبهجة 🌟' }
  ];

  const reasonsList = [
    { num: '١', icon: 'fa-heart', text: 'قلبك النقّي اللي مليان حنية واهتمام بكل من حولك ❤️' },
    { num: '٢', icon: 'fa-smile-beam', text: 'ضحكتك الفريدة اللي بتغيّر مود اليوم وتخليه أجمل ✨' },
    { num: '٣', icon: 'fa-gem', text: 'أنكِ شخصية نادرة واستثنائية مفيش زيها في الدنيا 💎' },
    { num: '٤', icon: 'fa-sun', text: 'وجودك دايماً بيدي أمل وطاقة إيجابية ونور للحياة ☀️' },
    { num: '٥', icon: 'fa-hands-holding-heart', text: 'طريقتك الطيبة في التعامل ومشاعر الصادقة 💖' },
    { num: '٦', icon: 'fa-star', text: 'ذكاؤك وطموحك ورؤيتك الجميلة لكل الأشياء 🌟' },
    { num: '٧', icon: 'fa-face-laugh-wink', text: 'خفة دمك واللحظات الممتعة اللي بنقضيها سوا 😂' },
    { num: '٨', icon: 'fa-wand-magic-sparkles', text: 'أنكِ بتخلي أي مكان تروحي فيه أحلى وأرقى 🪄' },
    { num: '٩', icon: 'fa-shield-halved', text: 'وقوفك جنبي ودعمك اللي بيحسسني بأعلى درجات الأمان 🛡️' },
    { num: '١٠', icon: 'fa-crown', text: 'لأنك ببساطة ملكة قلبي وأعز إنسانة في الوجود 👑' }
  ];

  const loveLetterText = `إلى أغلى وأحب إنسانة لقلبي...

في هذا اليوم الخاص جداً، 17 أكتوبر 2026، أود أن أقول لكِ أن وجودكِ في حياتي هو أكبر نِعمة وأجمل هدية أكرمني الله بها. 

أنتِ لستِ فقط شخصاً تحتفل به الأيام، بل أنتِ الأيام السعيدة التي أعيشها. ضحكتكِ تهوّن الصعاب، وعيونكِ تمنحني الأمان والهدوء. 

أتمنى لكِ في عامكِ الجديد أن تحققي كل ما يتمنى قلبكِ الرقيق، وأن تبقى ابتسامتكِ مشرقَة دائماً كما عرفتها... 

كل عام وأنتِ بقلبي، وكل عام وأنتِ أجمل حكاياتي ❤️`;

  // 2. BACKGROUND CANVAS & PARTICLES
  const bgCanvas = document.getElementById('bgCanvas');
  const ctx = bgCanvas.getContext('2d');
  let width, height;
  let particles = [];

  function resizeCanvas() {
    width = bgCanvas.width = window.innerWidth;
    height = bgCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * 0.8 + 0.2;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.color = Math.random() > 0.3 ? '#ff758c' : '#ffd700';
    }
    update() {
      this.y -= this.speedY;
      if (this.y < 0) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // 3. CONFETTI CANVAS EFFECT
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confettiCtx = confettiCanvas.getContext('2d');
  let confettiPieces = [];

  function resizeConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfetti);
  resizeConfetti();

  function triggerConfetti() {
    confettiPieces = [];
    const colors = ['#ff2a6d', '#ff758c', '#ffd700', '#ffffff', '#b30f40'];
    for (let i = 0; i < 150; i++) {
      confettiPieces.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 5 + 3,
        speedX: Math.random() * 4 - 2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
      });
    }
  }

  function renderConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach((p, idx) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      
      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      confettiCtx.restore();

      if (p.y > confettiCanvas.height) confettiPieces.splice(idx, 1);
    });
    requestAnimationFrame(renderConfetti);
  }
  renderConfetti();

  document.getElementById('confettiBtn')?.addEventListener('click', () => {
    triggerConfetti();
    playChimeSound();
  });

  // 4. WELCOME GATE & AUDIO
  const welcomeGate = document.getElementById('welcomeGate');
  const enterBtn = document.getElementById('enterBtn');
  const appContainer = document.getElementById('appContainer');
  const bgAudio = document.getElementById('bgAudio');
  const togglePlayBtn = document.getElementById('togglePlayBtn');
  const playIcon = document.getElementById('playIcon');
  const muteBtn = document.getElementById('muteBtn');
  const muteIcon = document.getElementById('muteIcon');
  const musicDisc = document.getElementById('musicDisc');
  const trackStatus = document.getElementById('trackStatus');

  enterBtn.addEventListener('click', () => {
    welcomeGate.style.opacity = '0';
    setTimeout(() => {
      welcomeGate.classList.add('hidden');
      appContainer.classList.remove('hidden');
      triggerConfetti();
    }, 600);

    // Play Background Song
    bgAudio.play().then(() => {
      updateAudioState(true);
    }).catch(err => {
      console.log('Audio autoplay prevented:', err);
      updateAudioState(false);
    });
  });

  togglePlayBtn.addEventListener('click', () => {
    if (bgAudio.paused) {
      bgAudio.play();
      updateAudioState(true);
    } else {
      bgAudio.pause();
      updateAudioState(false);
    }
  });

  muteBtn.addEventListener('click', () => {
    bgAudio.muted = !bgAudio.muted;
    muteIcon.className = bgAudio.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
  });

  function updateAudioState(isPlaying) {
    if (isPlaying) {
      playIcon.className = 'fa-solid fa-pause';
      musicDisc.classList.add('active');
      trackStatus.innerText = 'قيد التشغيل 🎶';
    } else {
      playIcon.className = 'fa-solid fa-play';
      musicDisc.classList.remove('active');
      trackStatus.innerText = 'متوقف مؤقتاً ⏸️';
    }
  }

  // Synthesized Chime sound effect via Web Audio API
  function playChimeSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const actx = new AudioContext();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, actx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + i * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start(actx.currentTime + i * 0.1);
        osc.stop(actx.currentTime + i * 0.1 + 0.4);
      });
    } catch(e) {}
  }

  // 5. COUNTDOWN TIMER (Target: 17 October 2026)
  const targetDate = new Date('2026-10-17T00:00:00');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const birthdayMsg = document.getElementById('birthdayMessage');
  const countdownGrid = document.getElementById('countdownGrid');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownGrid.classList.add('hidden');
      birthdayMsg.classList.remove('hidden');
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerText = d.toString().padStart(2, '0');
    hoursEl.innerText = h.toString().padStart(2, '0');
    minutesEl.innerText = m.toString().padStart(2, '0');
    secondsEl.innerText = s.toString().padStart(2, '0');
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 6. CAKE & CANDLE BLOWING
  const blowBtn = document.getElementById('blowBtn');
  const makeWishBtn = document.getElementById('makeWishBtn');
  const flames = document.querySelectorAll('.flame');
  const wishStatus = document.getElementById('wishStatus');
  const wishModal = document.getElementById('wishModal');
  const closeWishModal = document.getElementById('closeWishModal');
  const sendWishBtn = document.getElementById('sendWishBtn');
  const wishInput = document.getElementById('wishInput');

  blowBtn.addEventListener('click', () => {
    flames.forEach(f => f.classList.add('blown-out'));
    wishStatus.innerText = '✨ تم إطفاء الشموع! تحققت الأمنية وجاء وقت الفرح 🎂 🎉';
    triggerConfetti();
    playChimeSound();
  });

  makeWishBtn.addEventListener('click', () => {
    wishModal.classList.remove('hidden');
  });

  closeWishModal.addEventListener('click', () => {
    wishModal.classList.add('hidden');
  });

  sendWishBtn.addEventListener('click', () => {
    const val = wishInput.value.trim();
    if (val) {
      wishModal.classList.add('hidden');
      wishStatus.innerText = `🌌 تم إطلاق أمنيتك ("${val.substring(0, 20)}...") للنجوم ✨`;
      wishInput.value = '';
      triggerConfetti();
      playChimeSound();
    }
  });

  // 7. MEMORIES GALLERY (POLAROID GRID)
  const polaroidGrid = document.getElementById('polaroidGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightbox = document.getElementById('closeLightbox');
  const tabBtns = document.querySelectorAll('.tab-btn');

  function renderGallery(filter = 'all') {
    polaroidGrid.innerHTML = '';
    
    let items = [];
    if (filter === 'all' || filter === 'photos') {
      items = items.concat(photoAssets.map(p => ({ ...p, type: 'photo' })));
    }
    if (filter === 'all' || filter === 'videos') {
      items = items.concat(videoAssets.map(v => ({ ...v, type: 'video' })));
    }

    items.forEach((item, index) => {
      const rot = (index % 5 - 2) * 3; // Random tilt angle
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      card.style.setProperty('--rotation', rot);

      let mediaHtml = '';
      if (item.type === 'photo') {
        mediaHtml = `<img src="${item.src}" alt="${item.caption}" loading="lazy">`;
      } else {
        mediaHtml = `
          <video src="${item.src}" muted preload="metadata"></video>
          <div class="video-play-badge"><i class="fa-solid fa-circle-play"></i></div>
        `;
      }

      card.innerHTML = `
        <div class="polaroid-img-wrapper">${mediaHtml}</div>
        <div class="polaroid-caption">${item.caption}</div>
      `;

      card.addEventListener('click', () => {
        lightbox.classList.remove('hidden');
        lightboxCaption.innerText = item.caption;
        if (item.type === 'photo') {
          lightboxVideo.classList.add('hidden');
          lightboxVideo.pause();
          lightboxImg.src = item.src;
          lightboxImg.classList.remove('hidden');
        } else {
          lightboxImg.classList.add('hidden');
          lightboxVideo.src = item.src;
          lightboxVideo.classList.remove('hidden');
          lightboxVideo.play();
        }
      });

      polaroidGrid.appendChild(card);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery('all');

  closeLightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxVideo.pause();
  });

  // 8. 10 REASONS WHY YOU ARE SPECIAL
  const reasonsGrid = document.getElementById('reasonsGrid');
  reasonsList.forEach(item => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
      <div class="reason-inner">
        <div class="reason-front">
          <div class="reason-num">${item.num}</div>
          <div class="reason-icon"><i class="fa-solid ${item.icon}"></i></div>
          <span class="reason-hint">اضغطي لاكتشاف السبب ✨</span>
        </div>
        <div class="reason-back">
          <div class="reason-text">${item.text}</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      playChimeSound();
    });

    reasonsGrid.appendChild(card);
  });

  // 9. GIFT BOX & VOUCHERS
  const giftBox = document.getElementById('giftBox');
  const vouchersContainer = document.getElementById('vouchersContainer');

  giftBox.addEventListener('click', () => {
    giftBox.classList.add('open');
    setTimeout(() => {
      vouchersContainer.classList.remove('hidden');
      triggerConfetti();
      playChimeSound();
    }, 600);
  });

  // 10. HEARTFELT LOVE LETTER & TYPEWRITER EFFECT
  const envelope = document.getElementById('envelope');
  const letterPaper = document.getElementById('letterPaper');
  const typedLetter = document.getElementById('typedLetter');
  let letterOpened = false;

  envelope.addEventListener('click', () => {
    if (letterOpened) return;
    letterOpened = true;
    letterPaper.classList.remove('hidden');
    playChimeSound();

    let i = 0;
    typedLetter.innerHTML = '';
    function typeWriter() {
      if (i < loveLetterText.length) {
        const char = loveLetterText.charAt(i);
        typedLetter.innerHTML += char === '\n' ? '<br>' : char;
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  });

  // 11. LOVE QUIZ MINI-GAME
  const quizBox = document.getElementById('quizBox');
  const quizQuestions = [
    {
      q: 'ما هو الشيء الأكثر جاذبية وسحراً في شخصيتك؟',
      opts: ['ابتسامتك وحنيتك ❤️', 'ذكاؤك وحسك الراقي ✨', 'كل تفصيلة فيكِ بلا استثناء 👑'],
      correct: 2
    },
    {
      q: 'كم تبلغ نسبة معزتك ومكانتك بالقلب؟',
      opts: ['100%', '1000%', 'لا تُقاس بمليارات النسب لأنكِ كل شيء 💖'],
      correct: 2
    }
  ];
  let currentQ = 0;

  function renderQuiz() {
    if (currentQ >= quizQuestions.length) {
      quizBox.innerHTML = `
        <div style="text-align:center;">
          <h3 style="font-size:1.8rem; color:var(--accent-gold); margin-bottom:15px;">🎉 نتيجة الاختبار النهائي 🎉</h3>
          <p style="font-size:1.2rem; color:#fff;">فزتِ بأعلى نقطة: أنتِ الأغلى والأجمل للأبد! ❤️</p>
        </div>
      `;
      triggerConfetti();
      return;
    }

    const qData = quizQuestions[currentQ];
    quizBox.innerHTML = `
      <h3 class="quiz-question-title">السؤال ${currentQ + 1}: ${qData.q}</h3>
      <div class="quiz-options">
        ${qData.opts.map((opt, idx) => `<button class="quiz-opt-btn" data-idx="${idx}">${opt}</button>`).join('')}
      </div>
    `;

    document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        triggerConfetti();
        playChimeSound();
        currentQ++;
        renderQuiz();
      });
    });
  }

  renderQuiz();

});
