import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-sidemenu',
  styleUrl: 'app-sidemenu.css',
  shadow: true,
})
export class AppSidemenu implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
