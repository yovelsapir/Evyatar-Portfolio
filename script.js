// const emergence = require('./emergence.min.js');
const e = require('emergence.js');
const emergence = e();

const HOME_GROUP = 'home-group';
const WORK_GROUP = 'show-me-your-work-group';
const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
const CONTACT_GROUP = 'contact-group';
let buttonsClicked = {};

// const HOME_GROUP_BTN = 'home-group';
// const WORK_GROUP = 'show-me-your-work-group';
// const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
// const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
// const CONTACT_GROUP = 'contact-group';

document.querySelectorAll('.message-block').forEach((el) => el.style.top = "0px");
document.querySelectorAll('.group-container').forEach((el, i) => el.style.order = i);

document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).addEventListener('click', () => {
    showPage(WORK_GROUP, 1);
    document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).remove();
    document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).remove();
    createGallery('.gallery-block-show-me-your-work');

    const whatYouCanDoButton = createButton("What you can do?", '#what-you-can-do-group', WORK_GROUP);
    const smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WORK_GROUP);

    if (whatYouCanDoButton) {
        whatYouCanDoButton.addEventListener('click', () => {
            removeButton(smoothAnimationButton);
            removeButton(whatYouCanDoButton);
            showPage(WHAT_YOU_CAN_DO_GROUP, 2);
            const w_smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WHAT_YOU_CAN_DO_GROUP);
            if (w_smoothAnimationButton) {
                w_smoothAnimationButton.addEventListener('click', () => {
                    removeButton(w_smoothAnimationButton);
                    showPage(SMOOTH_ANIMATION_GROUP, 3);
                    createGallery('.gallery-block-smooth-animation');
                    const w_contactInfoButton = createButton("Contact info", '#contact-group', SMOOTH_ANIMATION_GROUP);
                    if (w_contactInfoButton) {
                        w_contactInfoButton.addEventListener('click', () => {
                            removeButton(w_contactInfoButton);
                            showPage(CONTACT_GROUP, 4);
                        });
                    }
                });
            }
        });
    }

    if (smoothAnimationButton) {
        smoothAnimationButton.addEventListener('click', () => {
            removeButton(whatYouCanDoButton);
            removeButton(smoothAnimationButton);
            showPage(SMOOTH_ANIMATION_GROUP, 2);
            createGallery('.gallery-block-smooth-animation');

            const s_whatYouCanDoButton = createButton("What you can do?", '#what-you-can-do-group', SMOOTH_ANIMATION_GROUP);
            if (s_whatYouCanDoButton) {
                s_whatYouCanDoButton.addEventListener('click', () => {
                    removeButton(s_whatYouCanDoButton);
                    showPage(WHAT_YOU_CAN_DO_GROUP, 3);
                    const s_contactInfoButton = createButton("Contact info", '#contact-group', WHAT_YOU_CAN_DO_GROUP);
                    if (s_contactInfoButton) {
                        s_contactInfoButton.addEventListener('click', () => {
                            removeButton(s_contactInfoButton);
                            showPage(CONTACT_GROUP, 4);
                        });
                    }
                });
            }
        });
    }
});

document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).addEventListener('click', () => {
    showPage(WHAT_YOU_CAN_DO_GROUP, 1);
    document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).remove();
    document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).remove();

    const showMeYourWorkButton = createButton("Show me Your work", '#show-me-your-work-group', WHAT_YOU_CAN_DO_GROUP);
    const smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WHAT_YOU_CAN_DO_GROUP);

    showMeYourWorkButton.addEventListener('click', () => {
        removeButton(smoothAnimationButton);
        removeButton(showMeYourWorkButton);
        showPage(WORK_GROUP, 2);
        createGallery('.gallery-block-show-me-your-work');

        const w_smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WORK_GROUP);
        w_smoothAnimationButton.addEventListener('click', () => {
            removeButton(w_smoothAnimationButton);
            showPage(SMOOTH_ANIMATION_GROUP, 3);
            createGallery('.gallery-block-smooth-animation');
            const w_contactInfoButton = createButton("Contact info", '#contact-group', SMOOTH_ANIMATION_GROUP);
            w_contactInfoButton.addEventListener('click', () => {
                removeButton(w_contactInfoButton);
                showPage(CONTACT_GROUP, 4);
            });
        });

    });

    smoothAnimationButton.addEventListener('click', () => {
        removeButton(showMeYourWorkButton);
        removeButton(smoothAnimationButton);
        showPage(SMOOTH_ANIMATION_GROUP, 2);
        createGallery('.gallery-block-smooth-animation');

        const s_showMeYourWorkButton = createButton("Show me Your work", '#show-me-your-work-group', SMOOTH_ANIMATION_GROUP);
        s_showMeYourWorkButton.addEventListener('click', () => {
            removeButton(s_showMeYourWorkButton);
            showPage(WORK_GROUP, 3);
            createGallery('.gallery-block-show-me-your-work');

            const w_contactInfoButton = createButton("Contact info", '#contact-group', WORK_GROUP);
            w_contactInfoButton.addEventListener('click', () => {
                removeButton(w_contactInfoButton);
                showPage(CONTACT_GROUP, 4);
            });
        });
    });

});

function showPage(group, order) {
    document.getElementById(group).style.order = order;
    document.getElementById(group).classList.remove('hidden');
}

function createButton(text, link, group) {
    console.log(buttonsClicked);
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
            if (domRectTop >= 0 && domRectTop <= (outerHeight)) {
                const elementClientPosition = (domRectTop / outerHeight) * 100;
                if (elementClientPosition >= 0 && elementClientPosition <= 8) {
                    el.style.top = ((((domRectTop) / outerHeight) * 100) + -120) + 'px';
                } else if (elementClientPosition > 8 && elementClientPosition <= 25) {
                    el.style.top = ((((domRectTop) / outerHeight) * 100) + -100) + 'px';
                } else if (elementClientPosition > 25 && elementClientPosition <= 50) {
                    el.style.top = ((((domRectTop) / outerHeight) * 100) + -85) + 'px';
                } else if (elementClientPosition > 50 && elementClientPosition <= 75) {
                    el.style.top = ((((domRectTop) / outerHeight) * 70) + -60) + 'px';
                } else if (elementClientPosition > 75 && elementClientPosition <= 100) {
                    el.style.top = ((((domRectTop) / outerHeight) * 50) + -40) + 'px';
                }
            }
        });
    }
});

function createGallery(selector, horizontalAlign) {
    const galleryBlock = document.querySelector(selector);
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
                galleryBlock.style[_horizontalAlign] = -galleryBlockChildrenOffset + 'px'
                galleryBlockStep = 0;
            } else {
                if (galleryBlockStep == galleryBlockChildrenCount - 1) {
                    galleryBlock.style[_horizontalAlign] = '0px';
                } else {
                    galleryBlock.style[_horizontalAlign] = (galleryBlockPos) + (galleryBlockChildrenClientWidth / galleryBlockChildrenCount) + 'px';
                }
            }
        });
    }
}

setTimeout(function () {
    window.scrollTo(0, 0);
}, 200);