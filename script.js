

// טעינת תמונה איטית

const { Whitemoji2, Blackmoji2, Whitemoji123 } = require('*.gif');

const pace = require('./pace');

pace.start();

// אנימציות מרגש שנטען
document.querySelector('main').style.display = 'none';
pace.on('done', () => {
   document.querySelector('main').style.display = 'block';
   window.scrollTo(0, 1);
   setTimeout(function () {
        $('.arrow').css('opacity', '1');
   }, 2500);
   // טעינה של אימוגי שחור
   $('.hiddenclass').css('display', 'block');
   $('.hiddenclass').css('display', 'none');
});

window.addEventListener(
   'load',
   function () {
      if (window.innerWidth > 480){
         const elm = $('[data-src=Whitemoji2]');
         elm[0].setAttribute('src', Whitemoji2);
      }
      else{
         const elm = $('[data-src=Whitemoji2]');
         elm[0].setAttribute('src', Whitemoji123);
         $('.hiddenclass').css('display', 'none');
      }
   },
   false
);






// const emergence = require('./emergence.min.js');
const e = require('emergence.js');
const emergence = e();

const HOME_GROUP = 'home-group';
const WORK_GROUP = 'show-me-your-work-group';
const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
const CONTACT_GROUP = 'contact-group';
let buttonsClicked = {};

document.querySelectorAll('.message-block').forEach((el) => (el.style.top = '0px'));
document.querySelectorAll('.group-container').forEach((el, i) => (el.style.order = i));

// קונפטי

var retina = window.devicePixelRatio,
   // Math shorthands
   PI = Math.PI,
   sqrt = Math.sqrt,
   round = Math.round,
   random = Math.random,
   cos = Math.cos,
   sin = Math.sin,
   // Local WindowAnimationTiming interface
   rAF = window.requestAnimationFrame,
   cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
   _now =
      Date.now ||
      function () {
         return new Date().getTime();
      };

// Local WindowAnimationTiming interface polyfill
(function (w) {
   /**
    * Fallback implementation.
    */
   var prev = _now();
   function fallback(fn) {
      var curr = _now();
      var ms = Math.max(0, 16 - (curr - prev));
      var req = setTimeout(fn, ms);
      prev = curr;
      return req;
   }

   /**
    * Cancel.
    */
   var cancel = w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.clearTimeout;

   rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || fallback;

   cAF = function (id) {
      cancel.call(w, id);
   };
})(window);

function myFunction123() {
   var speed = 50,
      duration = 1.0 / speed,
      confettiRibbonCount = 11,
      ribbonPaperCount = 30,
      ribbonPaperDist = 8.0,
      ribbonPaperThick = 8.0,
      confettiPaperCount = 95,
      DEG_TO_RAD = PI / 180,
      RAD_TO_DEG = 180 / PI,
      colors = [
         ['#df0049', '#660671'],
         ['#00e857', '#005291'],
         ['#2bebbc', '#05798a'],
         ['#ffd200', '#b06c00'],
      ];

   function Vector2(_x, _y) {
      (this.x = _x), (this.y = _y);
      this.Length = function () {
         return sqrt(this.SqrLength());
      };
      this.SqrLength = function () {
         return this.x * this.x + this.y * this.y;
      };
      this.Add = function (_vec) {
         this.x += _vec.x;
         this.y += _vec.y;
      };
      this.Sub = function (_vec) {
         this.x -= _vec.x;
         this.y -= _vec.y;
      };
      this.Div = function (_f) {
         this.x /= _f;
         this.y /= _f;
      };
      this.Mul = function (_f) {
         this.x *= _f;
         this.y *= _f;
      };
      this.Normalize = function () {
         var sqrLen = this.SqrLength();
         if (sqrLen != 0) {
            var factor = 1.0 / sqrt(sqrLen);
            this.x *= factor;
            this.y *= factor;
         }
      };
      this.Normalized = function () {
         var sqrLen = this.SqrLength();
         if (sqrLen != 0) {
            var factor = 1.0 / sqrt(sqrLen);
            return new Vector2(this.x * factor, this.y * factor);
         }
         return new Vector2(0, 0);
      };
   }
   Vector2.Lerp = function (_vec0, _vec1, _t) {
      return new Vector2((_vec1.x - _vec0.x) * _t + _vec0.x, (_vec1.y - _vec0.y) * _t + _vec0.y);
   };
   Vector2.Distance = function (_vec0, _vec1) {
      return sqrt(Vector2.SqrDistance(_vec0, _vec1));
   };
   Vector2.SqrDistance = function (_vec0, _vec1) {
      var x = _vec0.x - _vec1.x;
      var y = _vec0.y - _vec1.y;
      return x * x + y * y + z * z;
   };
   Vector2.Scale = function (_vec0, _vec1) {
      return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
   };
   Vector2.Min = function (_vec0, _vec1) {
      return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
   };
   Vector2.Max = function (_vec0, _vec1) {
      return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
   };
   Vector2.ClampMagnitude = function (_vec0, _len) {
      var vecNorm = _vec0.Normalized;
      return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
   };
   Vector2.Sub = function (_vec0, _vec1) {
      return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
   };

   function EulerMass(_x, _y, _mass, _drag) {
      this.position = new Vector2(_x, _y);
      this.mass = _mass;
      this.drag = _drag;
      this.force = new Vector2(0, 0);
      this.velocity = new Vector2(0, 0);
      this.AddForce = function (_f) {
         this.force.Add(_f);
      };
      this.Integrate = function (_dt) {
         var acc = this.CurrentForce(this.position);
         acc.Div(this.mass);
         var posDelta = new Vector2(this.velocity.x, this.velocity.y);
         posDelta.Mul(_dt);
         this.position.Add(posDelta);
         acc.Mul(_dt);
         this.velocity.Add(acc);
         this.force = new Vector2(0, 0);
      };
      this.CurrentForce = function (_pos, _vel) {
         var totalForce = new Vector2(this.force.x, this.force.y);
         var speed = this.velocity.Length();
         var dragVel = new Vector2(this.velocity.x, this.velocity.y);
         dragVel.Mul(this.drag * this.mass * speed);
         totalForce.Sub(dragVel);
         return totalForce;
      };
   }

   function ConfettiPaper(_x, _y) {
      this.pos = new Vector2(_x, _y);
      this.rotationSpeed = random() * 600 + 800;
      this.angle = DEG_TO_RAD * random() * 360;
      this.rotation = DEG_TO_RAD * random() * 360;
      this.cosA = 1.0;
      this.size = 5.0;
      this.oscillationSpeed = random() * 1.5 + 0.5;
      this.xSpeed = 40.0;
      this.ySpeed = random() * 60 + 50.0;
      this.corners = new Array();
      this.time = random();
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      for (var i = 0; i < 4; i++) {
         var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
         var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
         this.corners[i] = new Vector2(dx, dy);
      }
      this.Update = function (_dt) {
         this.time += _dt;
         this.rotation += this.rotationSpeed * _dt;
         this.cosA = cos(DEG_TO_RAD * this.rotation);
         this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt;
         this.pos.y += this.ySpeed * _dt;
         if (this.pos.y > ConfettiPaper.bounds.y) {
            this.pos.x = random() * ConfettiPaper.bounds.x;
            this.pos.y = 0;
         }
      };
      this.Draw = function (_g) {
         if (this.cosA > 0) {
            _g.fillStyle = this.frontColor;
         } else {
            _g.fillStyle = this.backColor;
         }
         _g.beginPath();
         _g.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);
         for (var i = 1; i < 4; i++) {
            _g.lineTo((this.pos.x + this.corners[i].x * this.size) * retina, (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina);
         }
         _g.closePath();
         _g.fill();
      };
   }
   ConfettiPaper.bounds = new Vector2(0, 0);

   function ConfettiRibbon(_x, _y, _count, _dist, _thickness, _angle, _mass, _drag) {
      this.particleDist = _dist;
      this.particleCount = _count;
      this.particleMass = _mass;
      this.particleDrag = _drag;
      this.particles = new Array();
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      this.xOff = cos(DEG_TO_RAD * _angle) * _thickness;
      this.yOff = sin(DEG_TO_RAD * _angle) * _thickness;
      this.position = new Vector2(_x, _y);
      this.prevPosition = new Vector2(_x, _y);
      this.velocityInherit = random() * 2 + 4;
      this.time = random() * 100;
      this.oscillationSpeed = random() * 2 + 2;
      this.oscillationDistance = random() * 40 + 40;
      this.ySpeed = random() * 40 + 80;
      for (var i = 0; i < this.particleCount; i++) {
         this.particles[i] = new EulerMass(_x, _y - i * this.particleDist, this.particleMass, this.particleDrag);
      }
      this.Update = function (_dt) {
         var i = 0;
         this.time += _dt * this.oscillationSpeed;
         this.position.y += this.ySpeed * _dt;
         this.position.x += cos(this.time) * this.oscillationDistance * _dt;
         this.particles[0].position = this.position;
         var dX = this.prevPosition.x - this.position.x;
         var dY = this.prevPosition.y - this.position.y;
         var delta = sqrt(dX * dX + dY * dY);
         this.prevPosition = new Vector2(this.position.x, this.position.y);
         for (i = 1; i < this.particleCount; i++) {
            var dirP = Vector2.Sub(this.particles[i - 1].position, this.particles[i].position);
            dirP.Normalize();
            dirP.Mul((delta / _dt) * this.velocityInherit);
            this.particles[i].AddForce(dirP);
         }
         for (i = 1; i < this.particleCount; i++) {
            this.particles[i].Integrate(_dt);
         }
         for (i = 1; i < this.particleCount; i++) {
            var rp2 = new Vector2(this.particles[i].position.x, this.particles[i].position.y);
            rp2.Sub(this.particles[i - 1].position);
            rp2.Normalize();
            rp2.Mul(this.particleDist);
            rp2.Add(this.particles[i - 1].position);
            this.particles[i].position = rp2;
         }
         if (this.position.y > ConfettiRibbon.bounds.y + this.particleDist * this.particleCount) {
            this.Reset();
         }
      };
      this.Reset = function () {
         this.position.y = -random() * ConfettiRibbon.bounds.y;
         this.position.x = random() * ConfettiRibbon.bounds.x;
         this.prevPosition = new Vector2(this.position.x, this.position.y);
         this.velocityInherit = random() * 2 + 4;
         this.time = random() * 100;
         this.oscillationSpeed = random() * 2.0 + 1.5;
         this.oscillationDistance = random() * 40 + 40;
         this.ySpeed = random() * 40 + 80;
         var ci = round(random() * (colors.length - 1));
         this.frontColor = colors[ci][0];
         this.backColor = colors[ci][1];
         this.particles = new Array();
         for (var i = 0; i < this.particleCount; i++) {
            this.particles[i] = new EulerMass(this.position.x, this.position.y - i * this.particleDist, this.particleMass, this.particleDrag);
         }
      };
      this.Draw = function (_g) {
         for (var i = 0; i < this.particleCount - 1; i++) {
            var p0 = new Vector2(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff);
            var p1 = new Vector2(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);
            if (this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, p1.x, p1.y) < 0) {
               _g.fillStyle = this.frontColor;
               _g.strokeStyle = this.frontColor;
            } else {
               _g.fillStyle = this.backColor;
               _g.strokeStyle = this.backColor;
            }
            if (i == 0) {
               _g.beginPath();
               _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
               _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
               _g.lineTo((this.particles[i + 1].position.x + p1.x) * 0.5 * retina, (this.particles[i + 1].position.y + p1.y) * 0.5 * retina);
               _g.closePath();
               _g.stroke();
               _g.fill();
               _g.beginPath();
               _g.moveTo(p1.x * retina, p1.y * retina);
               _g.lineTo(p0.x * retina, p0.y * retina);
               _g.lineTo((this.particles[i + 1].position.x + p1.x) * 0.5 * retina, (this.particles[i + 1].position.y + p1.y) * 0.5 * retina);
               _g.closePath();
               _g.stroke();
               _g.fill();
            } else if (i == this.particleCount - 2) {
               _g.beginPath();
               _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
               _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
               _g.lineTo((this.particles[i].position.x + p0.x) * 0.5 * retina, (this.particles[i].position.y + p0.y) * 0.5 * retina);
               _g.closePath();
               _g.stroke();
               _g.fill();
               _g.beginPath();
               _g.moveTo(p1.x * retina, p1.y * retina);
               _g.lineTo(p0.x * retina, p0.y * retina);
               _g.lineTo((this.particles[i].position.x + p0.x) * 0.5 * retina, (this.particles[i].position.y + p0.y) * 0.5 * retina);
               _g.closePath();
               _g.stroke();
               _g.fill();
            } else {
               _g.beginPath();
               _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
               _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
               _g.lineTo(p1.x * retina, p1.y * retina);
               _g.lineTo(p0.x * retina, p0.y * retina);
               _g.closePath();
               _g.stroke();
               _g.fill();
            }
         }
      };
      this.Side = function (x1, y1, x2, y2, x3, y3) {
         return (x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2);
      };
   }
   ConfettiRibbon.bounds = new Vector2(0, 0);
   confetti = {};
   confetti.Context = function (id) {
      var i = 0;
      var canvas = document.getElementById(id);
      var canvasParent = canvas.parentNode;
      var canvasWidth = canvasParent.offsetWidth;
      var canvasHeight = canvasParent.offsetHeight;
      canvas.width = canvasWidth * retina;
      canvas.height = canvasHeight * retina;
      var context = canvas.getContext('2d');
      var interval = null;
      var confettiRibbons = new Array();
      ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
      for (i = 0; i < confettiRibbonCount; i++) {
         confettiRibbons[i] = new ConfettiRibbon(random() * canvasWidth, -random() * canvasHeight * 2, ribbonPaperCount, ribbonPaperDist, ribbonPaperThick, 45, 1, 0.05);
      }
      var confettiPapers = new Array();
      ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
      for (i = 0; i < confettiPaperCount; i++) {
         confettiPapers[i] = new ConfettiPaper(random() * canvasWidth, random() * canvasHeight);
      }
      this.resize = function () {
         canvasWidth = canvasParent.offsetWidth;
         canvasHeight = canvasParent.offsetHeight;
         canvas.width = canvasWidth * retina;
         canvas.height = canvasHeight * retina;
         ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
         ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
      };
      this.start = function () {
         this.stop();
         var context = this;
         this.update();
      };
      this.stop = function () {
         cAF(this.interval);
      };
      this.update = function () {
         var i = 0;
         context.clearRect(0, 0, canvas.width, canvas.height);
         for (i = 0; i < confettiPaperCount; i++) {
            confettiPapers[i].Update(duration);
            confettiPapers[i].Draw(context);
         }
         for (i = 0; i < confettiRibbonCount; i++) {
            confettiRibbons[i].Update(duration);
            confettiRibbons[i].Draw(context);
         }
         this.interval = rAF(function () {
            confetti.update();
         });
      };
   };
   var confetti = new confetti.Context('confetti');
   confetti.start();
   window.addEventListener('resize', function (event) {
      confetti.resize();
   });

   var canvas = document.getElementById('confetti');

   canvas.width = window.innerWidth; // equals window dimension
   canvas.height = window.innerHeight;
}

//סוף קונפטי

document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).addEventListener('click', () => {
   showPage(WORK_GROUP, 1);
   document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).remove();
   document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).remove();
   createGallery('.gallery-block-show-me-your-work');

   // const smoothAnimationButton = createButton('Give me more', '#smooth-animation-group', WORK_GROUP);
   const whatYouCanDoButton = createButton('What can you do?', '#what-you-can-do-group', WORK_GROUP);

   if (whatYouCanDoButton) {
      whatYouCanDoButton.addEventListener('click', () => {
         // removeButton(smoothAnimationButton);
         removeButton(whatYouCanDoButton);
         showPage(WHAT_YOU_CAN_DO_GROUP, 2);
         const w_contactInfoButton = createButton('How can I contact you?', '#contact-group', WHAT_YOU_CAN_DO_GROUP);
         if (w_contactInfoButton) {
            w_contactInfoButton.addEventListener('click', () => {
               removeButton(w_contactInfoButton);
               showPage(CONTACT_GROUP, 3);
               $('#confetti').addClass('opa');
               myFunction123();
            });
         }
      });
   }

   // if (smoothAnimationButton) {
   //    smoothAnimationButton.addEventListener('click', () => {
   //       removeButton(whatYouCanDoButton);
   //       removeButton(smoothAnimationButton);
   //       showPage(SMOOTH_ANIMATION_GROUP, 2);
   //       createGallery('.gallery-block-smooth-animation');

   //       const s_whatYouCanDoButton = createButton('What you can do?', '#what-you-can-do-group', SMOOTH_ANIMATION_GROUP);
   //       if (s_whatYouCanDoButton) {
   //          s_whatYouCanDoButton.addEventListener('click', () => {
   //             removeButton(s_whatYouCanDoButton);
   //             showPage(WHAT_YOU_CAN_DO_GROUP, 3);
   //             const s_contactInfoButton = createButton('How can I contact you?', '#contact-group', WHAT_YOU_CAN_DO_GROUP);
   //             if (s_contactInfoButton) {
   //                s_contactInfoButton.addEventListener('click', () => {
   //                   removeButton(s_contactInfoButton);
   //                   showPage(CONTACT_GROUP, 4);
   //                   $('#confetti').addClass('opa');
   //                   myFunction123();
   //                });
   //             }
   //          });
   //       }
   //    });
   // }
});

document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).addEventListener('click', () => {
   showPage(WHAT_YOU_CAN_DO_GROUP, 1);
   document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).remove();
   document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).remove();

   const showMeYourWorkButton = createButton('Show your work', '#show-me-your-work-group', WHAT_YOU_CAN_DO_GROUP);
   // const smoothAnimationButton = createButton("Show me more!", '#smooth-animation-group', WHAT_YOU_CAN_DO_GROUP);

   showMeYourWorkButton.addEventListener('click', () => {
      // removeButton(smoothAnimationButton);
      removeButton(showMeYourWorkButton);
      showPage(WORK_GROUP, 2);
      createGallery('.gallery-block-show-me-your-work');

      //const w_smoothAnimationButton = createButton('What about XR?', '#smooth-animation-group', WORK_GROUP);
      const w_contactInfoButton = createButton('How can I contact you?', '#contact-group', WORK_GROUP);

      // w_smoothAnimationButton.addEventListener('click', () => {
      //    removeButton(w_contactInfoButton);
      //    removeButton(w_smoothAnimationButton);
      //    showPage(SMOOTH_ANIMATION_GROUP, 3);
      //    createGallery('.gallery-block-smooth-animation');
      //    const w_contactInfoButton1 = createButton('How can I contact you?', '#contact-group', SMOOTH_ANIMATION_GROUP);
      //    w_contactInfoButton1.addEventListener('click', () => {
      //       removeButton(w_contactInfoButton1);
      //       showPage(CONTACT_GROUP, 4);
      //       $('#confetti').addClass('opa');
      //       myFunction123();
      //    });
      // });

      w_contactInfoButton.addEventListener('click', () => {
         removeButton(w_contactInfoButton);
         // removeButton(w_smoothAnimationButton);
         showPage(CONTACT_GROUP, 3);
         $('#confetti').addClass('opa');
         myFunction123();
      });

      /*   s_contactInfoButton.addEventListener('click', () => {
         removeButton(w_contactInfoButton);
         removeButton(w_smoothAnimationButton);
         showPage(CONTACT_GROUP, 4);
       }); */
   });
});

function showPage(group, order) {
   document.getElementById(group).style.order = order;
   document.getElementById(group).classList.remove('hidden');
}

function createButton(text, link, group) {
   if (!buttonsClicked[`${link}${group}`]) {
      const button = document.createElement('a');
      var t = document.createTextNode(text);
      button.appendChild(t);
      button.setAttribute('href', link);
      button.classList.add('btn');
      document.querySelector(`#${group} .button-group`).appendChild(button);
      buttonsClicked[`${link}${group}`] = true;
      return button;
   }
   return null;
}

function removeButton(el) {
   el.remove();
}

createGallery('.gallery-block-home-group');

emergence.init({
   container: window,
   reset: false,
   handheld: true,
   throttle: 25,
   elemCushion: 0.15,
   offsetTop: 0,
   offsetRight: 0,
   offsetBottom: 0,
   offsetLeft: 0,
   callback: function (element, state) {
      var getVisibles = document.querySelectorAll('.message-block[data-emergence=visible]');
      getVisibles.forEach((el) => {
         const domRectTop = el.getBoundingClientRect().top;
         const outerHeight = window.outerHeight;
         if (domRectTop >= 0 && domRectTop <= outerHeight) {
            const elementClientPosition = (domRectTop / outerHeight) * 100;
            if (elementClientPosition >= 0 && elementClientPosition <= 8) {
               el.style.top = (domRectTop / outerHeight) * 100 + -120 + 'px';
            } else if (elementClientPosition > 8 && elementClientPosition <= 25) {
               el.style.top = (domRectTop / outerHeight) * 100 + -100 + 'px';
            } else if (elementClientPosition > 25 && elementClientPosition <= 50) {
               el.style.top = (domRectTop / outerHeight) * 100 + -85 + 'px';
            } else if (elementClientPosition > 50 && elementClientPosition <= 75) {
               el.style.top = (domRectTop / outerHeight) * 70 + -60 + 'px';
            } else if (elementClientPosition > 75 && elementClientPosition <= 100) {
               el.style.top = (domRectTop / outerHeight) * 50 + -40 + 'px';
            }
         }
      });
   },
});

function createGallery(selector, horizontalAlign) {
   const galleryBlock = document.querySelector(selector);
   if (galleryBlock) {
      if (!galleryBlock.classList.contains('gallery-active')) {
         const _horizontalAlign = horizontalAlign == 'right' ? horizontalAlign : 'left';
         galleryBlock.classList.add('gallery-active');
         galleryBlock.style.position = 'relative';
         const galleryBlockChildrenCount = galleryBlock.childElementCount;
         const galleryBlockChildrenClientWidth = galleryBlock.clientWidth;
         const galleryBlockChildrenOffset = (galleryBlockChildrenCount * (galleryBlockChildrenClientWidth / galleryBlockChildrenCount)) / 1.5;
         galleryBlock.style[_horizontalAlign] = -galleryBlockChildrenOffset + 'px';
         let galleryBlockStep = 0;

         galleryBlock.addEventListener('click', () => {
            const galleryBlockPos = parseInt(galleryBlock.style[_horizontalAlign].replace('px', ''));
            galleryBlockStep++;
            if (galleryBlockStep >= galleryBlockChildrenCount) {
               galleryBlock.style[_horizontalAlign] = -galleryBlockChildrenOffset + 'px';
               galleryBlockStep = 0;
            } else {
               if (galleryBlockStep == galleryBlockChildrenCount - 1) {
                  galleryBlock.style[_horizontalAlign] = '0px';
               } else {
                  galleryBlock.style[_horizontalAlign] = galleryBlockPos + galleryBlockChildrenClientWidth / galleryBlockChildrenCount + 'px';
               }
            }
         });
      }
   }
}



// אנימציה ברגע שנטען

window.addEventListener('load', function () {
   $('body').scrollTop($('#day').offset().top);
});

$(document).ready(function () {
   $('.profile').addClass('animate');
   $('.page').addClass('move');
   $('.header').addClass('opac');
});

// אנימציה ברגע שזז

$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $('.profile.animate').addClass('smaller');
      $('.frame').addClass('animatef');
    //  $('.warp').addClass('hidden');
       $('.arrow').addClass('nothing');
   } else {
      $('.profile.animate').removeClass('smaller');
      $('.frame').removeClass('animatef');
      // $('.warp').addClass('hidden');
       $('.arrow').removeClass('nothing');
   }
});


//שעון 

window.onload = function () {
   clock();
   function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'PM';
      if (min < 10) {
         min = '0' + min;
      }
      if (hour > 12) {
         hour = hour - 12;
      }
      if (hour == 0) {
         hour = 12;
      }
      if (TwentyFourHour < 12) {
         mid = 'AM';
      }
      document.getElementById('currentTime').innerHTML = hour + ':' + min + ' ' + mid;
      //setTimeout(clock, 1000);
   }
};

// מחליף בין דארק ללייט

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
   if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      $('.profile').attr('src', (src = `${Blackmoji2}`));
      $('.profile').css('mix-blend-mode', 'screen');
      $('.profile').attr('src', (src = `${Blackmoji2}`));
      $('#imgi1, #imgi2, #imgi3').css('display', 'none');
      $('#imgi1-dark, #imgi2-dark, #imgi3-dark').css('display', 'block');
      } 
      else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (window.innerWidth > 480){
         $('.profile').attr('src', (src = `${Whitemoji2}`));
      }
      else{
         $('.profile').attr('src', (src = `${Whitemoji123}`));
      }
      $('.profile').css('mix-blend-mode', 'multiply');
      $('#imgi1, #imgi2, #imgi3').css('display', 'block');
      $('#imgi1-dark, #imgi2-dark, #imgi3-dark').css('display', 'none');
   }
}

toggleSwitch.addEventListener('change', switchTheme, false);

/**
 * Create the routing function for different comapnies
 */

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const [name, code] = [
   params.get('name'), 
   params.get("code")
];

var company = name || 'you';
document.getElementById('companyName').textContent = `Hi ${company} ✌🏻`;


if(code === "open-sesame") { // change to a real value
   const myWorksSecretElement = document.getElementById("showcase-my-works-secret");
   myWorksSecretElement.style.display = "flex";
} else {
   const myWorksElement = document.getElementById("showcase-my-works");
   myWorksElement.style.display = "flex";
}
// סקילים

/**
 * inViewport jQuery plugin by Roko C.B.
 * http://stackoverflow.com/a/26831113/383904
 * Returns a callback function with an argument holding
 * the current amount of px an element is visible in viewport
 * (The min returned value is 0 (element outside of viewport)
 */
(function ($, win) {
   $.fn.inViewport = function (cb) {
      return this.each(function (i, el) {
         function visPx() {
            var elH = $(el).outerHeight(),
               H = $(win).height(),
               r = el.getBoundingClientRect(),
               t = r.top,
               b = r.bottom;
            return cb.call(el, Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H)));
         }
         visPx();
         $(win).on('resize scroll', visPx);
      });
   };
})(jQuery, window);

$('.bigger').inViewport(function (px) {
   if (px) $(this).addClass('triggeredCSS3');
});

$('.box').inViewport(function (px) {
   if (px) $(this).addClass('load');
});
