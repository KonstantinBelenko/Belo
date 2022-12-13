import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'belo-callout',
  styleUrl: 'belo-callout.css',
})
export class BeloCallout {
  @Prop() color: string = "black";

  render() {
    return (
      <belo-box p="24px" rounded='10px' borderWidth='2px' borderColor='#ddddddff' maxW='409px'>
        <belo-flex direction='row' justifyContent='space-between' alignItems='center' gap="16px">
          
          <belo-text>
            <slot></slot>
          </belo-text>

          <belo-box minW="32px">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.20435 16.1344L2.98254 5.59885C3.04642 4.73401 3.73404 4.04639 4.59888 3.98251L15.1344 3.20432C15.642 3.16682 16.1408 3.3522 16.5007 3.71213L28.7331 15.9445C29.4165 16.6279 29.4165 17.736 28.7331 18.4194L17.4194 29.7331C16.736 30.4165 15.628 30.4165 14.9445 29.7331L2.71216 17.5007C2.35223 17.1408 2.16685 16.642 2.20435 16.1344Z" stroke="#D70466" stroke-width="1.5"/>
              <path d="M4.41387 15.5158L5.20365 6.43101C5.21416 6.31003 5.31008 6.21411 5.43105 6.2036L14.5159 5.41382C14.8102 5.38824 15.1007 5.49408 15.3096 5.70296L26.0815 16.4748C26.472 16.8654 26.472 17.4985 26.0815 17.889L16.8891 27.0814C16.4986 27.472 15.8654 27.472 15.4749 27.0814L4.70301 16.3096C4.49413 16.1007 4.38829 15.8101 4.41387 15.5158Z" fill="#F6D7DF"/>
              <circle cx="8.40381" cy="9.40378" r="1.75" transform="rotate(-45 8.40381 9.40378)" stroke="#D70466" stroke-width="1.5"/>
            </svg>
          </belo-box>

        </belo-flex>
      </belo-box>
    );
  }

}
