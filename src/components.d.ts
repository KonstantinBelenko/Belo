/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BeloButton {
    }
    interface BeloCaption {
        "align": 'left' | 'right' | 'center';
    }
    interface BeloHeader {
        "align": 'left' | 'right' | 'center';
        "size": any;
    }
    interface BeloP {
        "align": 'left' | 'right' | 'center';
    }
}
declare global {
    interface HTMLBeloButtonElement extends Components.BeloButton, HTMLStencilElement {
    }
    var HTMLBeloButtonElement: {
        prototype: HTMLBeloButtonElement;
        new (): HTMLBeloButtonElement;
    };
    interface HTMLBeloCaptionElement extends Components.BeloCaption, HTMLStencilElement {
    }
    var HTMLBeloCaptionElement: {
        prototype: HTMLBeloCaptionElement;
        new (): HTMLBeloCaptionElement;
    };
    interface HTMLBeloHeaderElement extends Components.BeloHeader, HTMLStencilElement {
    }
    var HTMLBeloHeaderElement: {
        prototype: HTMLBeloHeaderElement;
        new (): HTMLBeloHeaderElement;
    };
    interface HTMLBeloPElement extends Components.BeloP, HTMLStencilElement {
    }
    var HTMLBeloPElement: {
        prototype: HTMLBeloPElement;
        new (): HTMLBeloPElement;
    };
    interface HTMLElementTagNameMap {
        "belo-button": HTMLBeloButtonElement;
        "belo-caption": HTMLBeloCaptionElement;
        "belo-header": HTMLBeloHeaderElement;
        "belo-p": HTMLBeloPElement;
    }
}
declare namespace LocalJSX {
    interface BeloButton {
    }
    interface BeloCaption {
        "align"?: 'left' | 'right' | 'center';
    }
    interface BeloHeader {
        "align"?: 'left' | 'right' | 'center';
        "size"?: any;
    }
    interface BeloP {
        "align"?: 'left' | 'right' | 'center';
    }
    interface IntrinsicElements {
        "belo-button": BeloButton;
        "belo-caption": BeloCaption;
        "belo-header": BeloHeader;
        "belo-p": BeloP;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "belo-button": LocalJSX.BeloButton & JSXBase.HTMLAttributes<HTMLBeloButtonElement>;
            "belo-caption": LocalJSX.BeloCaption & JSXBase.HTMLAttributes<HTMLBeloCaptionElement>;
            "belo-header": LocalJSX.BeloHeader & JSXBase.HTMLAttributes<HTMLBeloHeaderElement>;
            "belo-p": LocalJSX.BeloP & JSXBase.HTMLAttributes<HTMLBeloPElement>;
        }
    }
}
