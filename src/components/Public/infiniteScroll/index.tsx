import React, { useEffect, useRef, useState } from 'react';

interface props {
    callback: VoidFunction,
    children: React.ReactNode
}

const InfiniteScrollComponent: React.FC<props> = ({ callback, children }: props) => {

    const observer = useRef(
        new IntersectionObserver(callback)
    );
    
    const lastElement = useRef(null);

    useEffect(() => {
        const currentElement = lastElement.current;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    return (
        <div>
            {children}
            <div ref={lastElement}></div>
        </div>
    )

}

export default InfiniteScrollComponent;