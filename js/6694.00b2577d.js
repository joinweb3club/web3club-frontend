/*! For license information please see 6694.00b2577d.js.LICENSE.txt */
"use strict";(self.webpackChunkWeb3_club=self.webpackChunkWeb3_club||[]).push([[6694],{4019:function(e,t,i){i(42815)},36694:function(e,t,i){i.r(t),i.d(t,{W3mConnectSocialsView:function(){return k},W3mConnectingFarcasterView:function(){return F},W3mConnectingSocialView:function(){return L}});var o=i(97199),r=i(25707),s=i(35198),n=i(51454),a=i(57019),c=i(26034),l=(i(40289),i(50708),i(36010)),d=i(88249),h=i(78508),u=i(62944),p=i(71655),g=i(94182),w=i(26742),f=(i(95797),i(12710)),b=c.AH`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,m=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let y=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.remoteFeatures=a.H.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=d.N.state.plan.hasExceededUsageLimit,this.unsubscribe.push(l.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[];const t=Boolean(this.authConnector),i=e?.length,r="ConnectSocials"===h.I.state.view;return t&&i||r?(r&&!i&&(e=u.oU.DEFAULT_SOCIALS),o.qy` <wui-flex flexDirection="column" gap="2">
      ${e.map(e=>o.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(e){this.hasExceededUsageLimit?h.I.push("UsageExceeded"):e&&await(0,g.Up)(e)}async handlePwaFrameLoad(){if(w.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof f.Y&&await this.authConnector.provider.init()}catch(e){p.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};y.styles=b,m([(0,r.MZ)()],y.prototype,"tabIdx",void 0),m([(0,r.wk)()],y.prototype,"connectors",void 0),m([(0,r.wk)()],y.prototype,"authConnector",void 0),m([(0,r.wk)()],y.prototype,"remoteFeatures",void 0),m([(0,r.wk)()],y.prototype,"isPwaLoading",void 0),m([(0,r.wk)()],y.prototype,"hasExceededUsageLimit",void 0),y=m([(0,c.EM)("w3m-social-login-list")],y);var v=c.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,x=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let k=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=n.o.state.isLegalCheckboxChecked,this.unsubscribe.push(n.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,i=a.H.state.features?.legalCheckbox,r=Boolean(e||t)&&Boolean(i)&&!this.checked,n=r?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${(0,s.J)(r?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,s.J)(n)}></w3m-social-login-list>
      </wui-flex>
    `}};k.styles=v,x([(0,r.wk)()],k.prototype,"checked",void 0),k=x([(0,c.EM)("w3m-connect-socials-view")],k);var $=i(6056),C=i(18121),E=i(90184),P=i(27508),A=i(21871),R=i(96396),W=i(68996),O=(i(4019),i(53448),i(85589),i(46709),i(21785)),I=i(41482),S=c.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e["ease-out-power-2"]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,_=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let L=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=$.W.getAccountData()?.socialProvider,this.socialWindow=$.W.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=a.H.state.remoteFeatures,this.address=$.W.getAccountData()?.address,this.connectionsByNamespace=C.x.getConnections($.W.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=l.a.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===I.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;const t=this.parseURLError(e.data.resultUri);if(t)return void this.handleSocialError(t);this.closeSocialWindow(),this.updateMessage();const i=e.data.resultUri;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await C.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:i},this.authConnector.chain),this.socialProvider&&(P.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:w.w.parseError(e)}})}}else h.I.goBack(),A.P.showError("Untrusted Origin"),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})};O.R.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.closeSocialWindow()}),this.unsubscribe.push($.W.subscribeChainProp("accountState",e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){const t=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&t?(h.I.replace("ProfileWallets"),A.P.showSuccess("New Wallet Added"),this.address=e.address):(R.W.state.open||a.H.state.enableEmbedded)&&R.W.close())}}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1);$.W.state.activeCaipAddress||!this.socialProvider||this.connecting||E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return o.qy`
      <wui-flex
        data-error=${(0,s.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,s.J)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=W.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}parseURLError(e){try{const t="error=",i=e.indexOf(t);if(-1===i)return null;return e.substring(i+t.length)}catch{return null}}connectSocial(){const e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==h.I.state.view||h.I.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),$.W.setAccountProp("socialWindow",void 0,$.W.state.activeChain))}};L.styles=S,_([(0,r.wk)()],L.prototype,"socialProvider",void 0),_([(0,r.wk)()],L.prototype,"socialWindow",void 0),_([(0,r.wk)()],L.prototype,"error",void 0),_([(0,r.wk)()],L.prototype,"connecting",void 0),_([(0,r.wk)()],L.prototype,"message",void 0),_([(0,r.wk)()],L.prototype,"remoteFeatures",void 0),L=_([(0,c.EM)("w3m-connecting-social-view")],L);i(9526),i(13163),i(22571),i(38215);var T=c.AH`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,U=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let F=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=$.W.getAccountData()?.socialProvider,this.uri=$.W.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=a.H.state.remoteFeatures,this.authConnector=l.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push($.W.subscribeChainProp("accountState",e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate);!$.W.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),o.qy`${this.platformTemplate()}`}platformTemplate(){return w.w.isMobile()?o.qy`${this.mobileTemplate()}`:o.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?o.qy`${this.loadingTemplate()}`:o.qy`${this.qrTemplate()}`}qrTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=W.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&(P.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const e=C.x.getConnections(this.authConnector.chain).length>0;await C.x.connectExternal(this.authConnector,this.authConnector.chain);const t=this.remoteFeatures?.multiWallet;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,e&&t?(h.I.replace("ProfileWallets"),A.P.showSuccess("New Wallet Added")):R.W.close()}catch(e){this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:w.w.parseError(e)}}),h.I.goBack(),A.P.showError(e)}}mobileLinkTemplate(){return o.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&w.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=W.W.state.themeVariables["--apkt-qr-color"]??W.W.state.themeVariables["--w3m-qr-color"];return o.qy` <wui-qr-code
      size=${e}
      theme=${W.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,s.J)(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(w.w.copyToClopboard(this.uri),A.P.showSuccess("Link copied"))}catch{A.P.showError("Failed to copy")}}};F.styles=T,U([(0,r.wk)()],F.prototype,"socialProvider",void 0),U([(0,r.wk)()],F.prototype,"uri",void 0),U([(0,r.wk)()],F.prototype,"ready",void 0),U([(0,r.wk)()],F.prototype,"loading",void 0),U([(0,r.wk)()],F.prototype,"remoteFeatures",void 0),F=U([(0,c.EM)("w3m-connecting-farcaster-view")],F)},38215:function(e,t,i){i(97607)},50708:function(e,t,i){var o=i(97199),r=i(25707),s=i(51454),n=i(57019),a=i(26034),c=i(35198),l=i(91629),d=(i(53014),i(67329),i(66312)),h=i(64551),u=i(85836).AH`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`,p=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const g={lg:"md",md:"sm",sm:"sm"};let w=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const e=g[this.size];return o.qy`
      <label data-size=${this.size}>
        <input
          ${(0,l.K)(this.inputElementRef)}
          ?checked=${(0,c.J)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${e}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};w.styles=[d.W5,u],p([(0,r.MZ)({type:Boolean})],w.prototype,"checked",void 0),p([(0,r.MZ)({type:Boolean})],w.prototype,"disabled",void 0),p([(0,r.MZ)()],w.prototype,"size",void 0),w=p([(0,h.E)("wui-checkbox")],w);i(46709);var f=a.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`,b=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let m=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=s.o.state.isLegalCheckboxChecked,this.unsubscribe.push(s.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,i=n.H.state.features?.legalCheckbox;return(e||t)&&i?o.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=n.H.state;return e?o.qy`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=n.H.state;return e?o.qy`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){s.o.setIsLegalCheckboxChecked(!this.checked)}};m.styles=[f],b([(0,r.wk)()],m.prototype,"checked",void 0),m=b([(0,a.EM)("w3m-legal-checkbox")],m)},51454:function(e,t,i){i.d(t,{o:function(){return n}});var o=i(52095),r=i(4707);const s=(0,o.BX)({isLegalCheckboxChecked:!1}),n={state:s,subscribe(e){return(0,o.B1)(s,()=>e(s))},subscribeKey(e,t){return(0,r.u$)(s,e,t)},setIsLegalCheckboxChecked(e){s.isLegalCheckboxChecked=e}}},53448:function(e,t,i){var o=i(97199),r=i(25707),s=i(66312),n=i(64551),a=i(85836).AH`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,c=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,i=116+t,r=245+t,s=360+1.75*t;return o.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${r}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};l.styles=[s.W5,a],c([(0,r.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,n.E)("wui-loading-thumbnail")],l)},85589:function(e,t,i){var o=i(97199),r=i(25707),s=(i(53014),i(66312)),n=i(64551),a=i(85836).AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,c=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};l.styles=[s.W5,a],c([(0,r.MZ)()],l.prototype,"logo",void 0),l=c([(0,n.E)("wui-logo")],l)},91629:function(e,t,i){i.d(t,{_:function(){return p},K:function(){return f}});var o=i(36752);const{I:r}=o.ge;var s=i(7804);const n=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),n(e,t);return!0},a=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},c=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),h(t)}};function l(e){void 0!==this._$AN?(a(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)n(o[e],!1),a(o[e]);else null!=o&&(n(o,!1),a(o));else n(this,e)}const h=e=>{e.type==s.OA.CHILD&&(e._$AP??=d,e._$AQ??=l)};class u extends s.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(n(this,e),a(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const p=()=>new g;class g{}const w=new WeakMap,f=(0,s.u$)(class extends u{render(e){return o.s6}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=w.get(t);void 0===i&&(i=new WeakMap,w.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?w.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},94182:function(e,t,i){i.d(t,{Up:function(){return p}});var o=i(52095),r=i(24376),s=i(6056),n=i(36010),a=i(90184),c=i(78508),l=i(21871),d=i(26742),h=i(27508);async function u(e){c.I.push("ConnectingSocial");const t=n.a.getAuthConnector();let i=null;try{const n=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(d.w.isTelegram()||(i=function(){try{return d.w.returnOpenHref(`${r.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),i)s.W.setAccountProp("socialWindow",(0,o.KR)(i),s.W.state.activeChain);else if(!d.w.isTelegram())throw new Error("Could not create social popup");const{uri:a}=await t.provider.getSocialRedirectUri({provider:e});if(!a)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=a),d.w.isTelegram()){h.i.setTelegramSocialProvider(e);const t=d.w.formatTelegramSocialLoginUrl(a);d.w.openHref(t,"_top")}clearTimeout(n)}}catch(t){i?.close();const o=d.w.parseError(t);l.P.showError(o),a.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:o}})}}async function p(e){s.W.setAccountProp("socialProvider",e,s.W.state.activeChain),a.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){c.I.push("ConnectingFarcaster");const e=n.a.getAuthConnector();if(e){const t=s.W.getAccountData();if(!t?.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();s.W.setAccountProp("farcasterUrl",t,s.W.state.activeChain)}catch(e){c.I.goBack(),l.P.showError(e)}}}():await u(e)}},95797:function(e,t,i){var o=i(97199),r=i(25707),s=i(35198),n=(i(67329),i(66312)),a=i(64551),c=(i(85589),i(85836).AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`),l=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};d.styles=[n.W5,n.fD,c],l([(0,r.MZ)()],d.prototype,"logo",void 0),l([(0,r.MZ)()],d.prototype,"name",void 0),l([(0,r.MZ)()],d.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=l([(0,a.E)("wui-list-social")],d)},97607:function(e,t,i){var o=i(97199),r=i(25707),s=i(64551),n=i(85836).AH`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,a=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",o.qy`<slot></slot>`}};c.styles=[n],a([(0,r.MZ)()],c.prototype,"width",void 0),a([(0,r.MZ)()],c.prototype,"height",void 0),a([(0,r.MZ)()],c.prototype,"variant",void 0),a([(0,r.MZ)({type:Boolean})],c.prototype,"rounded",void 0),c=a([(0,s.E)("wui-shimmer")],c)}}]);