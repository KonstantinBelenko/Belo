/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BeloButtonPrimary {
        "disabled": boolean;
        "pill": boolean;
    }
    interface BeloButtonSecondary {
        "disabled": boolean;
        "pill": boolean;
    }
    interface BeloCaption {
        "align": 'left' | 'right' | 'center';
    }
    interface BeloCard {
        "details": any;
        "image": any;
        "location": any;
        "price_per_night": any;
        "score": any;
        "total_price": any;
    }
    interface BeloHeader {
        "align": 'left' | 'right' | 'center';
        "size": any;
    }
    interface BeloInput {
        "disabled": boolean;
        "hint": boolean;
        "hinttext": any;
        "label": any;
        "placeholder": any;
        "required": boolean;
    }
    interface BeloLink {
        "link": any;
    }
    interface BeloP {
        "align": 'left' | 'right' | 'center';
    }
    interface BeloTextArea {
        "disabled": any;
        "maxlength": any;
        "placeholder": any;
    }
}
declare global {
    interface HTMLBeloButtonPrimaryElement extends Components.BeloButtonPrimary, HTMLStencilElement {
    }
    var HTMLBeloButtonPrimaryElement: {
        prototype: HTMLBeloButtonPrimaryElement;
        new (): HTMLBeloButtonPrimaryElement;
    };
    interface HTMLBeloButtonSecondaryElement extends Components.BeloButtonSecondary, HTMLStencilElement {
    }
    var HTMLBeloButtonSecondaryElement: {
        prototype: HTMLBeloButtonSecondaryElement;
        new (): HTMLBeloButtonSecondaryElement;
    };
    interface HTMLBeloCaptionElement extends Components.BeloCaption, HTMLStencilElement {
    }
    var HTMLBeloCaptionElement: {
        prototype: HTMLBeloCaptionElement;
        new (): HTMLBeloCaptionElement;
    };
    interface HTMLBeloCardElement extends Components.BeloCard, HTMLStencilElement {
    }
    var HTMLBeloCardElement: {
        prototype: HTMLBeloCardElement;
        new (): HTMLBeloCardElement;
    };
    interface HTMLBeloHeaderElement extends Components.BeloHeader, HTMLStencilElement {
    }
    var HTMLBeloHeaderElement: {
        prototype: HTMLBeloHeaderElement;
        new (): HTMLBeloHeaderElement;
    };
    interface HTMLBeloInputElement extends Components.BeloInput, HTMLStencilElement {
    }
    var HTMLBeloInputElement: {
        prototype: HTMLBeloInputElement;
        new (): HTMLBeloInputElement;
    };
    interface HTMLBeloLinkElement extends Components.BeloLink, HTMLStencilElement {
    }
    var HTMLBeloLinkElement: {
        prototype: HTMLBeloLinkElement;
        new (): HTMLBeloLinkElement;
    };
    interface HTMLBeloPElement extends Components.BeloP, HTMLStencilElement {
    }
    var HTMLBeloPElement: {
        prototype: HTMLBeloPElement;
        new (): HTMLBeloPElement;
    };
    interface HTMLBeloTextAreaElement extends Components.BeloTextArea, HTMLStencilElement {
    }
    var HTMLBeloTextAreaElement: {
        prototype: HTMLBeloTextAreaElement;
        new (): HTMLBeloTextAreaElement;
    };
    interface HTMLElementTagNameMap {
        "belo-button-primary": HTMLBeloButtonPrimaryElement;
        "belo-button-secondary": HTMLBeloButtonSecondaryElement;
        "belo-caption": HTMLBeloCaptionElement;
        "belo-card": HTMLBeloCardElement;
        "belo-header": HTMLBeloHeaderElement;
        "belo-input": HTMLBeloInputElement;
        "belo-link": HTMLBeloLinkElement;
        "belo-p": HTMLBeloPElement;
        "belo-text-area": HTMLBeloTextAreaElement;
    }
}
declare namespace LocalJSX {
    interface BeloButtonPrimary {
        "disabled"?: boolean;
        "pill"?: boolean;
    }
    interface BeloButtonSecondary {
        "disabled"?: boolean;
        "pill"?: boolean;
    }
    interface BeloCaption {
        "align"?: 'left' | 'right' | 'center';
    }
    interface BeloCard {
        "details"?: any;
        "image"?: any;
        "location"?: any;
        "price_per_night"?: any;
        "score"?: any;
        "total_price"?: any;
    }
    interface BeloHeader {
        "align"?: 'left' | 'right' | 'center';
        "size"?: any;
    }
    interface BeloInput {
        "disabled"?: boolean;
        "hint"?: boolean;
        "hinttext"?: any;
        "label"?: any;
        "placeholder"?: any;
        "required"?: boolean;
    }
    interface BeloLink {
        "link"?: any;
    }
    interface BeloP {
        "align"?: 'left' | 'right' | 'center';
    }
    interface BeloTextArea {
        "disabled"?: any;
        "maxlength"?: any;
        "placeholder"?: any;
    }
    interface IntrinsicElements {
        "belo-button-primary": BeloButtonPrimary;
        "belo-button-secondary": BeloButtonSecondary;
        "belo-caption": BeloCaption;
        "belo-card": BeloCard;
        "belo-header": BeloHeader;
        "belo-input": BeloInput;
        "belo-link": BeloLink;
        "belo-p": BeloP;
        "belo-text-area": BeloTextArea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "belo-button-primary": LocalJSX.BeloButtonPrimary & JSXBase.HTMLAttributes<HTMLBeloButtonPrimaryElement>;
            "belo-button-secondary": LocalJSX.BeloButtonSecondary & JSXBase.HTMLAttributes<HTMLBeloButtonSecondaryElement>;
            "belo-caption": LocalJSX.BeloCaption & JSXBase.HTMLAttributes<HTMLBeloCaptionElement>;
            "belo-card": LocalJSX.BeloCard & JSXBase.HTMLAttributes<HTMLBeloCardElement>;
            "belo-header": LocalJSX.BeloHeader & JSXBase.HTMLAttributes<HTMLBeloHeaderElement>;
            "belo-input": LocalJSX.BeloInput & JSXBase.HTMLAttributes<HTMLBeloInputElement>;
            "belo-link": LocalJSX.BeloLink & JSXBase.HTMLAttributes<HTMLBeloLinkElement>;
            "belo-p": LocalJSX.BeloP & JSXBase.HTMLAttributes<HTMLBeloPElement>;
            "belo-text-area": LocalJSX.BeloTextArea & JSXBase.HTMLAttributes<HTMLBeloTextAreaElement>;
        }
    }
}
