import {classNames} from 'shared/lib/classNames/classNames';
import cls from './CanvasHero.module.scss';
import {useEffect, useRef} from "react";

interface ICanvasHeroProps {
    className?: string;
}

export const CanvasHero = ({className}: ICanvasHeroProps) => {
    const canvasWrap = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(!canvasWrap.current || !canvasRef.current) return;
        const c = canvasRef.current;
        const $ = c.getContext('2d'),
            _t = 1 / 540,
            num = window.screen.width >= 1199.98 ? canvasWrap.current?.clientWidth - 100 : 500;

            let b: number, x: number,  y: number, _u: number, _x: number, _y: number,
                u= 0,
                t = 0,
                w = c.width = canvasWrap.current?.clientWidth,
                h = c.height = canvasWrap.current?.clientHeight;

        const anim = function() {
            if(!$) return;
            $.globalCompositeOperation = 'source-over';
            $.fillStyle = '#101010';
            $.fillRect(0, 0, w, h);
            $.globalCompositeOperation = 'lighter';

            for (let i = 0; i < 1; i++) {
                x = 0; _u = (u/2) +i;
                $.beginPath();
                for (let j = 0; j < num; j++) {
                    x += .55 * Math.sin(11);
                    y = x * Math.sin(i + 3.5 * t + x /40) / 2;
                    _x = x * Math.cos(b) - y * Math.sin(b);
                    _y = x * Math.sin(b) + y * Math.cos(b);
                    b = (j+1) * Math.PI / 2;
                    $.lineWidth = .12;
                    $.lineTo(w / 2- _x, h / 2 -_y);
                }
                const g = $.createLinearGradient(w  + _x, h  + _y,1, w  + _x);
                g.addColorStop(0.1, 'hsla('+u+',100%,50%,1)');
                g.addColorStop(0.5, 'hsla('+_u+',95%,50%,1)');
                g.addColorStop(1, 'hsla(0,0%,25%,1)');
                $.strokeStyle = g;
                $.stroke();
            }

            t += _t;
            u-=.2;
            window.requestAnimationFrame(anim);
        };
        anim();

        window.addEventListener('resize', function() {
            if(!canvasWrap.current || !canvasRef.current) return;
            c.width = w = canvasWrap.current.clientWidth;
            c.height = h = canvasWrap.current.clientHeight;
        }, false);

    }, [canvasRef, canvasWrap])

    return (
        <div ref={canvasWrap} className={classNames(cls.root, {}, [className])}>
            <canvas ref={canvasRef} />
        </div>
    );
};