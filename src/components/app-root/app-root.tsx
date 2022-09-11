import '@stencil/router';
import { Component, Element, State,Listen, h } from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';
import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @Element() el!: HTMLElement;
  history ? : RouterHistory;
  @State() isLeftSidebarIn: boolean = false;

  elements = [
    'app-header',
    'app-footer',
    'app-sidemenu',
    'main'
  ];

  componentDidLoad() {
    this.isLeftSidebarIn = false;

  }


  private setHistory = ({
    history
  }: {
    history: RouterHistory
  }) => {
    if (!this.history) {
      this.history = history;
      console.log(this.history, 'ini his');
      this.history.listen((location: LocationSegments) => {
        console.log(location, 'ini loc');
        (window as any).gtag = function () {
          (window as any).dataLayer.push('config', 'UA-44023830-34', {
            'page_path': location.pathname + location.search
          });
        };
      });
    }
  }

  @Listen('resize', {
    target: 'window'
  })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768 && this.isLeftSidebarIn) {
        this.isLeftSidebarIn = false;
        document.body.classList.remove('no-scroll');
        this.elements.forEach((el) => {
          this.el.querySelector(el) !.classList.remove('left-sidebar-in');
        });
      }
    });
  }

  private toggleLeftSidebar = () => {
    if (window.innerWidth >= 768) {
      return;
    }
    const elements = this.elements
      .map(el => this.el.querySelector(el))
      .filter(el => !!el) as Element[];

    if (this.isLeftSidebarIn) {
      this.isLeftSidebarIn = false;
      document.body.classList.remove('no-scroll');
      elements.forEach(el => {
        el.classList.remove('left-sidebar-in');
        el.classList.add('left-sidebar-out');
      });
    } else {
      this.isLeftSidebarIn = true;
      document.body.classList.add('no-scroll');
      elements.forEach(el => {
        el.classList.add('left-sidebar-in');
        el.classList.remove('left-sidebar-out');
      });
    }
  }
  
  render() {
    const siteState: SiteState = {
      isLeftSidebarIn: this.isLeftSidebarIn,
      toggleLeftSidebar: this.toggleLeftSidebar
    };

    return (

      <SiteProviderConsumer.Provider state={siteState}>


        <main class="main-scroll">
          <stencil-router scrollTopOffset={0}>
            <stencil-route style={{ display: 'none' }} routeRender={this.setHistory} />
            <stencil-route-switch>
              <stencil-route url="/" component="page-login" exact={true}/>
              <stencil-route url="/register" component="page-register"/>
              <stencil-route url="/dashboard" component="page-dashboard" />
              <stencil-route url="/form" component="page-form"/>
              <stencil-route url="/prodi" component="page-prodi-list"/>
              <stencil-route url="/profile" component="page-profile"/>
            </stencil-route-switch>
          </stencil-router>
        </main>

      </SiteProviderConsumer.Provider>
    );
  }
}
