
const magnifier = {
    mounted(el) {
        const oImgWrap = el,
            wrapX = el.offsetLeft,
            wrapY = el.offsetTop,
            oMagWrap = oImgWrap.querySelector(".mag-wrapper"),
            oMagImg = oMagWrap.querySelector(".mag-img"),
            magWidth = parseInt(window.getComputedStyle(oMagWrap, null)["width"]),
            magHeight = parseInt(window.getComputedStyle(oMagWrap, null)["height"]),
            imgWidth = parseInt(window.getComputedStyle(oMagImg, null)["width"],),
            imgHeight = parseInt(window.getComputedStyle(oMagImg, null)["height"])

        const init = () => {
            bindEvent();
        };

        function bindEvent() {
            oImgWrap.addEventListener('mouseover', (e) => {
                oMagWrap.className += ' show';
                const { x, y } = getXY(e)
                showMag(x, y)
                document.addEventListener('mousemove', handleMouseMove, false)
            }, false)

            oImgWrap.addEventListener('mouseout', () => {
                oMagWrap.className = 'mag-wrapper';

                document.removeEventListener('mousemove', handleMouseMove, false)
            }, false)
        }

        function handleMouseMove(e) {
            const { x, y, mouseX, mouseY } = getXY(e)

            showMag(x, y, mouseX, mouseY)
        }

        function showMag(x, y, mouseX, mouseY) {
            oMagWrap.style.left = x + 'px'
            oMagWrap.style.top = y + 'px'
            oMagImg.style.left = -x + 'px'
            oMagImg.style.top = -y + 'px'

            if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
                oMagWrap.className = 'mag-wrapper';
            }
        }

        function getXY(e) {
            return {
                x: e.pageX - wrapX - magWidth / 2,
                y: e.pageY - wrapY - magHeight / 2,
                mouseX: e.pageX - wrapX,
                mouseY: e.pageY - wrapY
            }
        }
        init()
    },
};


export default magnifier;
