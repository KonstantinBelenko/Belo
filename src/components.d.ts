/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BeloHeader {
        "align": 'left' | 'right' | 'center';
        "size": any;
    }
    interface HsButton {
        "size": string;
        "variant": string;
    }
}
export interface HsButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsButtonElement;
}
declare global {
    interface HTMLBeloHeaderElement extends Components.BeloHeader, HTMLStencilElement {
    }
    var HTMLBeloHeaderElement: {
        prototype: HTMLBeloHeaderElement;
        new (): HTMLBeloHeaderElement;
    };
    interface HTMLHsButtonElement extends Components.HsButton, HTMLStencilElement {
    }
    var HTMLHsButtonElement: {
        prototype: HTMLHsButtonElement;
        new (): HTMLHsButtonElement;
    };
    interface HTMLElementTagNameMap {
        "belo-header": HTMLBeloHeaderElement;
        "hs-button": HTMLHsButtonElement;
    }
}
declare namespace LocalJSX {
    interface BeloHeader {
        "align"?: 'left' | 'right' | 'center';
        "size"?: any;
    }
    interface HsButton {
        "onClicked"?: (event: HsButtonCustomEvent<any>) => void;
        "size"?: string;
        "variant"?: string;
    }
    interface IntrinsicElements {
        "belo-header": BeloHeader;
        "hs-button": HsButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "belo-header": LocalJSX.BeloHeader & JSXBase.HTMLAttributes<HTMLBeloHeaderElement>;
            "hs-button": LocalJSX.HsButton & JSXBase.HTMLAttributes<HTMLHsButtonElement>;
        }
    }
}
