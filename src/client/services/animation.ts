import { randomNumberFromMinToMax } from '@client/utils/utils';

export const lineAnimation = (element, sizeX, sizeY, time) => {
    let points: any = [];
    let lastSide: any = '';

    const createPoint = () => {
        const div = document.createElement('div');
        div.classList.add('point');
        div.insertAdjacentHTML('afterbegin', `<div class="line line--hidden"></div>`);
        return div;
    };

    const createRow = () => {
        const div = document.createElement('div');
        div.classList.add('row');
        return div;
    };

    const generateField = (element, sizeX, sizeY) => {
        for (let i = 0; i < sizeY; i++) {
            const $row = createRow();

            for (let j = 0; j < sizeX; j++) {
                const $point = createPoint();
                $row.append($point);
            }
            element.append($row);
        }
    };

    const getAllowSides = (point, sizeX, sizeY) => {
        const sides: any = [];

        if (point.x > 0) {
            sides.push(['left', { x: point.x - 1, y: point.y }]);
        }

        if (point.x < sizeX - 1) {
            sides.push(['right', { x: point.x + 1, y: point.y }]);
        }

        if (point.y > 0) {
            sides.push(['top', { x: point.x, y: point.y - 1 }]);
        }

        if (point.y < sizeY - 1) {
            sides.push(['bottom', { x: point.x, y: point.y + 1 }]);
        }

        return sides.filter((arr) => arr[0] !== lastSide && !points.find((p: any) => p.x === arr[1].x && p.y === arr[1].y));
    };

    const animateField = (element, sizeX, sizeY, width, height) => {
        if (points.length > 2) {
            const clear: any = points[0];
            const $clearElement = element.children[clear.y].children[clear.x];
            const $clearLine = $clearElement.querySelectorAll('.line');
            $clearLine.forEach((l) => l.classList.add('line--hidden'));
            points.splice(0, 1);
        }

        const lastPoint: any = points[points.length - 1];

        const sides = getAllowSides(lastPoint, sizeX, sizeY);

        if (!sides.length) {
            console.log('Тупик');
            return;
        }

        const random = sides[randomNumberFromMinToMax(0, sides.length - 1)];
        const side = random[0];
        const nextPoint = random[1];

        switch (side) {
            case 'top':
                lastSide = 'bottom';
                break;
            case 'bottom':
                lastSide = 'top';
                break;
            case 'left':
                lastSide = 'right';
                break;
            case 'right':
                lastSide = 'left';
                break;
        }

        const $animateElement = element.children[lastPoint.y].children[lastPoint.x];
        const $line = $animateElement.querySelectorAll('.line');

        $line.forEach((l) => {
            l.classList.remove('line--hidden', 'line--right', 'line--left', 'line--top', 'line--bottom');
            l.classList.add('line--' + side);
            l.style.width = side === 'right' || side === 'left' ? width + 'px' : '1px';
            l.style.height = side === 'top' || side === 'bottom' ? height + 'px' : '1px';
        });

        points.push(nextPoint);
    };

    const clearField = (element) => {
        const $lines = element.querySelectorAll('.line');
        $lines.forEach((l) => {
            l.classList.remove('line--bottom');
            l.classList.add('line--hidden');
        });

        points = [{ x: 0, y: 0 }];
        lastSide = 0;
    };

    generateField(element, sizeX, sizeY);
    const width = element.querySelectorAll('.row')[0].querySelectorAll('.point');
    const widthpoint1 = width[0].getBoundingClientRect().left;
    const widthpoint2 = width[1].getBoundingClientRect().left;
    const widthPoint = Math.abs(widthpoint2 - widthpoint1);

    const heightpoint1 = width[0].getBoundingClientRect().top;
    const heightpoint2 = width[1].getBoundingClientRect().top;
    const heightPoint = Math.abs(heightpoint2 - heightpoint1);

    const hp = window.innerWidth >= 1200 ? heightpoint2 * 0.93 : heightpoint2 * 2.1;

    clearField(element);

    (function b() {
        animateField(element, sizeX, sizeY, widthPoint, hp);

        setTimeout(b, time);
    })();
};
