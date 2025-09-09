'use client';
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


type IProps = {
    providerCls?: string;
    children: React.ReactNode
}
export default function ModalProvider({ children,providerCls }:IProps) {
    const modalRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            modalRef.current = providerCls ? document.querySelector(`.${providerCls}`) : document.body;
        }
    }, [providerCls]);
    return (
        <>
            {modalRef.current && createPortal(
                <React.Fragment>
                    {children}
                </React.Fragment>,
                modalRef.current
            )}
        </>
    )
}
