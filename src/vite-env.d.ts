/// <reference types="vite/client" />

declare module '*.svg' {
    import React from 'React';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}