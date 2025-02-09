"use client";

import { useCallback, useContext, useRef, createContext } from "react";
// types
import type { ReactNode } from "react";

const ScrollbarContext = createContext({ hideScrollbar: () => {}, showScrollbar: () => {} });
export function useScrollbar() {
    return useContext(ScrollbarContext);
}

export interface ScrollbarProviderProps {
    children: ReactNode;
}

function ScrollbarProvider(props: ScrollbarProviderProps) {
    const scrollPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const hideScrollbar = useCallback(() => {
        if (typeof window === undefined) return;
        // 紀錄x, y show的時候要位移
        scrollPositionRef.current.x = window.scrollX;
        scrollPositionRef.current.y = window.scrollY;
        // fixed right left bottom 0, top用scrollY計算就會留下scrollbar又不會移動畫面
        document.body.classList.add("hide_scrollbar");
        document.body.style.top = -scrollPositionRef.current.y + "px";
    }, []);
    const showScrollbar = useCallback(() => {
        if (typeof window === undefined) return;
        document.body.classList.remove("hide_scrollbar");
        document.body.style.top = "";
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
    }, []);
    return (
        <ScrollbarContext.Provider value={{ hideScrollbar, showScrollbar }}>{props.children}</ScrollbarContext.Provider>
    );
}

export default ScrollbarProvider;
