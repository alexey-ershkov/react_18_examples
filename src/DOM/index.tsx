import {useEffect, useRef} from 'react';

import {Center} from '../common/Center';

export const DOM = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const div = document.createElement("div");
        div.style.width = "300px"
        div.style.height = "300px"
        div.style.backgroundColor = "green"

        div.onclick = () => div.style.backgroundColor = "red"

        ref.current?.appendChild(div)

        return () => {
            ref.current?.removeChild(div)
        }
    }, []);

    return <Center ref={ref} />;
};