"use strict";(self.webpackChunkWeb3_club=self.webpackChunkWeb3_club||[]).push([[7850],{3830:function(e,t,i){i.d(t,{J:function(){return l}});var a=i(97199),r=i(25707),o=i(78508),n=i(26034),s=(i(89056),n.AH`
  :host {
    display: block;
    width: inherit;
  }
`),c=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.viewState=o.I.state.view,this.history=o.I.state.history.join(","),this.unsubscribe.push(o.I.subscribeKey("view",()=>{this.history=o.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return a.qy`${this.templatePageContainer()}`}templatePageContainer(){return a.qy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=o.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return a.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return a.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return a.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return a.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return a.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return a.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return a.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return a.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return a.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return a.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return a.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return a.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return a.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return a.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return a.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return a.qy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return a.qy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return a.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return a.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return a.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return a.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return a.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return a.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return a.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return a.qy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return a.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return a.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return a.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return a.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return a.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return a.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return a.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return a.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return a.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return a.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return a.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return a.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return a.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return a.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return a.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return a.qy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return a.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return a.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return a.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return a.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return a.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return a.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return a.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return a.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return a.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return a.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return a.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return a.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return a.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return a.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return a.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return a.qy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return a.qy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return a.qy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return a.qy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return a.qy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};l.styles=[s],c([(0,r.wk)()],l.prototype,"viewState",void 0),c([(0,r.wk)()],l.prototype,"history",void 0),l=c([(0,n.EM)("w3m-router")],l)},34558:function(e,t,i){i.d(t,{y:function(){return s}});var a=i(24376),r=i(78508),o=i(57019),n=i(41482);const s={getTabsByNamespace(e){return Boolean(e)&&e===a.o.CHAIN.EVM?!1===o.H.state.remoteFeatures?.activity?n.o.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):n.o.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){const e=r.I.state.view;if(n.o.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=o.H.state,i=o.H.state.features?.legalCheckbox;return!(!e&&!t||i)}return n.o.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}}},46514:function(e,t,i){var a=i(97199),r=i(25707),o=(i(53014),i(67329),i(66312)),n=i(64551),s=i(85836).AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`,c=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"md-medium":"sm-medium",t="md"===this.size?"md":"sm";return a.qy`
      ${this.icon?a.qy`<wui-icon size=${t} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${e}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};l.styles=[o.W5,s],c([(0,r.MZ)()],l.prototype,"variant",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-tag")],l)},73812:function(e,t,i){i(46514)},74625:function(e,t,i){var a=i(97199),r=i(25707),o=i(99598),n=i(26034),s=(i(40289),i(13163),i(46709),n.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`),c=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.open=o.I.state.open,this.message=o.I.state.message,this.triggerRect=o.I.state.triggerRect,this.variant=o.I.state.variant,this.unsubscribe.push(o.I.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,a.qy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};l.styles=[s],c([(0,r.wk)()],l.prototype,"open",void 0),c([(0,r.wk)()],l.prototype,"message",void 0),c([(0,r.wk)()],l.prototype,"triggerRect",void 0),c([(0,r.wk)()],l.prototype,"variant",void 0),l=c([(0,n.EM)("w3m-tooltip")],l)},84954:function(e,t,i){var a=i(97199),r=i(25707),o=i(35198),n=(i(53014),i(67329),i(42815),i(66312)),s=i(64551),c=(i(96771),i(85836)),l=c.AH`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`,w=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return a.qy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>a.qy`
          <wui-wallet-image
            size="sm"
            imageSrc=${e}
            name=${(0,o.J)(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>a.qy` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};u.styles=[n.W5,l],w([(0,r.MZ)({type:Array})],u.prototype,"walletImages",void 0),u=w([(0,s.E)("wui-all-wallets-image")],u);i(46514);var m=c.AH`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`,d=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const p={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton"};let h=class extends a.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,a.qy`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${(0,o.J)(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){return this.namespaces?.length?a.qy`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((e,t)=>a.qy`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${2*(this.namespaces?.length??0)-t}
              class="namespace-icon"
            >
              <wui-icon
                name=${(0,o.J)(p[e])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`)}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?a.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?a.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?a.qy`<wui-wallet-image
        size=${(0,o.J)("sm"===this.size?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:a.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?a.qy`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?a.qy`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};h.styles=[n.W5,n.fD,m],d([(0,r.MZ)({type:Array})],h.prototype,"walletImages",void 0),d([(0,r.MZ)()],h.prototype,"imageSrc",void 0),d([(0,r.MZ)()],h.prototype,"name",void 0),d([(0,r.MZ)()],h.prototype,"size",void 0),d([(0,r.MZ)()],h.prototype,"tagLabel",void 0),d([(0,r.MZ)()],h.prototype,"tagVariant",void 0),d([(0,r.MZ)()],h.prototype,"walletIcon",void 0),d([(0,r.MZ)()],h.prototype,"tabIdx",void 0),d([(0,r.MZ)({type:Array})],h.prototype,"namespaces",void 0),d([(0,r.MZ)({type:Boolean})],h.prototype,"disabled",void 0),d([(0,r.MZ)({type:Boolean})],h.prototype,"showAllWallets",void 0),d([(0,r.MZ)({type:Boolean})],h.prototype,"loading",void 0),d([(0,r.MZ)({type:String})],h.prototype,"loadingSpinnerColor",void 0),h=d([(0,s.E)("wui-list-wallet")],h)},89056:function(e,t,i){i.d(t,{H:function(){return u}});var a=i(97199),r=i(25707),o=i(78508),n=i(90184),s=i(26034),c=(i(55743),i(78306),i(34558)),l=s.AH`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`,w=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=o.I.state.view}firstUpdated(){this.status=c.y.hasFooter()?"show":"hide",this.unsubscribe.push(o.I.subscribeKey("view",e=>{if(this.view=e,this.status=c.y.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}})),this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return a.qy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return c.y.hasFooter()?a.qy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return a.qy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return a.qy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return a.qy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){n.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),o.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};u.styles=[l],w([(0,r.wk)()],u.prototype,"status",void 0),w([(0,r.wk)()],u.prototype,"view",void 0),u=w([(0,s.EM)("w3m-footer")],u)},96771:function(e,t,i){var a=i(97199),r=i(25707),o=(i(53014),i(17381),i(66312)),n=i(64551),s=(i(42815),i(85836).AH`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`),c=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`\n       --local-border-radius: var(--apkt-borderRadius-${e});\n   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),a.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?a.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?a.qy`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:a.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};l.styles=[o.W5,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"name",void 0),c([(0,r.MZ)()],l.prototype,"imageSrc",void 0),c([(0,r.MZ)()],l.prototype,"walletIcon",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"installed",void 0),c([(0,r.MZ)()],l.prototype,"badgeSize",void 0),l=c([(0,n.E)("wui-wallet-image")],l)},99598:function(e,t,i){i.d(t,{I:function(){return c}});var a=i(52095),r=i(4707),o=i(23082);const n=(0,a.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),s={state:n,subscribe(e){return(0,a.B1)(n,()=>e(n))},subscribeKey(e,t){return(0,r.u$)(n,e,t)},showTooltip({message:e,triggerRect:t,variant:i}){n.open=!0,n.message=e,n.triggerRect=t,n.variant=i},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}},c=(0,o.X)(s)}}]);