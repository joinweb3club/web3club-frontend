"use strict";(self.webpackChunkWeb3_club=self.webpackChunkWeb3_club||[]).push([[2658],{4277:function(t,e,i){i.d(e,{u:function(){return d}});var a=i(46036),n=i(24376),s=i(88249),r=i(75595),o=i(6056),c=i(74496),l=i(73495);class u{constructor(t){this.getNonce=t.getNonce}async createMessage(t){const e={accountAddress:t.accountAddress,chainId:t.chainId,version:"1",domain:"undefined"==typeof document?"Unknown Domain":document.location.host,uri:"undefined"==typeof document?"Unknown URI":document.location.href,resources:this.resources,nonce:await this.getNonce(t),issuedAt:this.stringifyDate(new Date),statement:void 0,expirationTime:void 0,notBefore:void 0},i={toString:()=>this.stringify(e)};return Object.assign(e,i)}stringify(t){const e=this.getNetworkName(t.chainId);return[`${t.domain} wants you to sign in with your ${e} account:`,t.accountAddress,t.statement?`\n${t.statement}\n`:"",`URI: ${t.uri}`,`Version: ${t.version}`,`Chain ID: ${t.chainId}`,`Nonce: ${t.nonce}`,t.issuedAt&&`Issued At: ${t.issuedAt}`,t.expirationTime&&`Expiration Time: ${t.expirationTime}`,t.notBefore&&`Not Before: ${t.notBefore}`,t.requestId&&`Request ID: ${t.requestId}`,t.resources?.length&&t.resources.reduce((t,e)=>`${t}\n- ${e}`,"Resources:")].filter(t=>"string"==typeof t).join("\n").trim()}getNetworkName(t){const e=o.W.getAllRequestedCaipNetworks();return l.L.getNetworkNameByCaipNetworkId(e,t)}stringifyDate(t){return t.toISOString()}}class d{constructor(t={}){this.otpUuid=null,this.listeners={sessionChanged:[]},this.localAuthStorageKey=t.localAuthStorageKey||a.Ws.SIWX_AUTH_TOKEN,this.localNonceStorageKey=t.localNonceStorageKey||a.Ws.SIWX_NONCE_TOKEN,this.required=t.required??!0,this.messenger=new u({getNonce:this.getNonce.bind(this)})}async createMessage(t){return this.messenger.createMessage(t)}async addSession(t){const e=await this.request({method:"POST",key:"authenticate",body:{data:t.data,message:t.message,signature:t.signature,clientId:this.getClientId(),walletInfo:this.getWalletInfo()},headers:["nonce","otp"]});this.setStorageToken(e.token,this.localAuthStorageKey),this.emit("sessionChanged",t),this.setAppKitAccountUser(function(t){const e=t.split(".");if(3!==e.length)throw new Error("Invalid token");const i=e[1];if("string"!=typeof i)throw new Error("Invalid token");const a=i.replace(/-/gu,"+").replace(/_/gu,"/"),n=a.padEnd(a.length+(4-a.length%4)%4,"=");return JSON.parse(atob(n))}(e.token)),this.otpUuid=null}async getSessions(t,e){try{if(!this.getStorageToken(this.localAuthStorageKey))return[];const i=await this.request({method:"GET",key:"me",query:{},headers:["auth"]});if(!i)return[];const a=i.address.toLowerCase()===e.toLowerCase(),n=i.caip2Network===t;if(!a||!n)return[];const s={data:{accountAddress:i.address,chainId:i.caip2Network},message:"",signature:""};return this.emit("sessionChanged",s),this.setAppKitAccountUser(i),[s]}catch{return[]}}async revokeSession(t,e){return Promise.resolve(this.clearStorageTokens())}async setSessions(t){if(0===t.length)this.clearStorageTokens();else{const e=t.find(t=>t.data.chainId===(0,c.kg)()?.caipNetworkId)||t[0];await this.addSession(e)}}getRequired(){return this.required}async getSessionAccount(){if(!this.getStorageToken(this.localAuthStorageKey))throw new Error("Not authenticated");return this.request({method:"GET",key:"me",body:void 0,query:{includeAppKitAccount:!0},headers:["auth"]})}async setSessionAccountMetadata(t=null){if(!this.getStorageToken(this.localAuthStorageKey))throw new Error("Not authenticated");return this.request({method:"PUT",key:"account-metadata",body:{metadata:t},headers:["auth"]})}on(t,e){return this.listeners[t].push(e),()=>{this.listeners[t]=this.listeners[t].filter(t=>t!==e)}}removeAllListeners(){Object.keys(this.listeners).forEach(t=>{this.listeners[t]=[]})}async requestEmailOtp({email:t,account:e}){const i=await this.request({method:"POST",key:"otp",body:{email:t,account:e}});return this.otpUuid=i.uuid,this.messenger.resources=[`email:${t}`],i}confirmEmailOtp({code:t}){return this.request({method:"PUT",key:"otp",body:{code:t},headers:["otp"]})}async request({method:t,key:e,query:i,body:a,headers:s}){const{projectId:r,st:o,sv:c}=this.getSDKProperties(),l=new URL(`${n.o.W3M_API_URL}/auth/v1/${String(e)}`);l.searchParams.set("projectId",r),l.searchParams.set("st",o),l.searchParams.set("sv",c),i&&Object.entries(i).forEach(([t,e])=>l.searchParams.set(t,String(e)));const u=await fetch(l,{method:t,body:a?JSON.stringify(a):void 0,headers:Array.isArray(s)?s.reduce((t,e)=>{switch(e){case"nonce":t["x-nonce-jwt"]=`Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;break;case"auth":t.Authorization=`Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;break;case"otp":this.otpUuid&&(t["x-otp"]=this.otpUuid)}return t},{}):void 0});if(!u.ok)throw new Error(await u.text());return u.headers.get("content-type")?.includes("application/json")?u.json():null}getStorageToken(t){return a.Ud.getItem(t)}setStorageToken(t,e){a.Ud.setItem(e,t)}clearStorageTokens(){this.otpUuid=null,a.Ud.removeItem(this.localAuthStorageKey),a.Ud.removeItem(this.localNonceStorageKey),this.emit("sessionChanged",void 0)}async getNonce(){const{nonce:t,token:e}=await this.request({method:"GET",key:"nonce"});return this.setStorageToken(e,this.localNonceStorageKey),t}getClientId(){return r.T.state.clientId}getWalletInfo(){const t=o.W.getAccountData()?.connectedWalletInfo;if(!t)return;if("social"in t&&"identifier"in t){return{type:"social",social:t.social,identifier:t.identifier}}const{name:e,icon:i}=t;let a="unknown";switch(t.type){case"EXTERNAL":case"INJECTED":case"ANNOUNCED":a="extension";break;case"WALLET_CONNECT":a="walletconnect";break;default:a="unknown"}return{type:a,name:e,icon:i}}getSDKProperties(){return s.N._getSdkProperties()}emit(t,e){this.listeners[t].forEach(t=>t(e))}setAppKitAccountUser(t){const{email:e}=t;e&&Object.values(n.o.CHAIN).forEach(t=>{o.W.setAccountProp("user",{email:e},t)})}}},32658:function(t,e,i){i.r(e),i.d(e,{W3mDataCaptureOtpConfirmView:function(){return x},W3mDataCaptureView:function(){return E},W3mEmailSuffixesWidget:function(){return l},W3mRecentEmailsWidget:function(){return h}});var a=i(97199),n=i(25707),s=i(26034),r=a.AH`
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,o=function(t,e,i,a){var n,s=arguments.length,r=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};const c=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"];let l=class extends a.WF{constructor(){super(...arguments),this.email=""}render(){const t=c.filter(this.filter.bind(this)).map(this.item.bind(this));return 0===t.length?null:a.qy`<div class="email-sufixes">${t}</div>`}filter(t){if(!this.email)return!1;const e=this.email.split("@");if(e.length<2)return!0;const i=e.pop();return t.includes(i)&&t!==`@${i}`}item(t){return a.qy`<wui-button variant="neutral" size="sm" @click=${()=>{const e=this.email.split("@");e.length>1&&e.pop();const i=e[0]+t;this.dispatchEvent(new CustomEvent("change",{detail:i,bubbles:!0,composed:!0}))}}
      >${t}</wui-button
    >`}};l.styles=[r],o([(0,n.MZ)()],l.prototype,"email",void 0),l=o([(0,s.EM)("w3m-email-suffixes-widget")],l);var u=a.AH`
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`,d=function(t,e,i,a){var n,s=arguments.length,r=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends a.WF{constructor(){super(...arguments),this.emails=[]}render(){return 0===this.emails.length?null:a.qy`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(t){return a.qy`<wui-list-item
      @click=${()=>{this.dispatchEvent(new CustomEvent("select",{detail:t,bubbles:!0,composed:!0}))}}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${t}</wui-text>
    </wui-list-item>`}};h.styles=[u],d([(0,n.MZ)()],h.prototype,"emails",void 0),h=d([(0,s.EM)("w3m-recent-emails-widget")],h);var g=i(57019),p=i(78508),m=i(6056),w=i(21871),f=i(4277),y=i(76892),v=function(t,e,i,a){var n,s=arguments.length,r=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let x=class extends y.H{constructor(){super(...arguments),this.siwx=g.H.state.siwx,this.onOtpSubmit=async t=>{await this.siwx.confirmEmailOtp({code:t}),p.I.replace("SIWXSignMessage")},this.onOtpResend=async t=>{const e=m.W.getAccountData();if(!e?.caipAddress)throw new Error("No account data found");await this.siwx.requestEmailOtp({email:t,account:e.caipAddress})}}connectedCallback(){this.siwx&&this.siwx instanceof f.u||w.P.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===y.H.OTP_LENGTH}};v([(0,n.wk)()],x.prototype,"siwx",void 0),x=v([(0,s.EM)("w3m-data-capture-otp-confirm-view")],x);var b=i(46036),k=a.AH`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`,S=function(t,e,i,a){var n,s=arguments.length,r=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let E=class extends a.WF{constructor(){super(...arguments),this.email=p.I.state.data?.email??m.W.getAccountData()?.user?.email??"",this.address=m.W.getAccountData()?.address??"",this.loading=!1,this.appName=g.H.state.metadata?.name??"AppKit",this.siwx=g.H.state.siwx,this.isRequired=Array.isArray(g.H.state.remoteFeatures?.emailCapture)&&g.H.state.remoteFeatures?.emailCapture.includes("required"),this.recentEmails=this.getRecentEmails()}connectedCallback(){this.siwx&&this.siwx instanceof f.u||w.P.showError("ReownAuthentication is not initialized. Please contact support."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return a.qy`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return a.qy`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(t){return a.qy`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${t.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(t){return a.qy`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${t}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?a.qy`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${s.Zv.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?a.qy`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:a.qy`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;const t=t=>{this.email=t.detail};return a.qy`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${t}
          @keydown=${t=>{"Enter"===t.key&&this.onSubmit()}}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${t}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){if(0===this.recentEmails.length||this.loading)return null;return a.qy`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${t=>{this.email=t.detail,this.onSubmit()}}
      ></w3m-recent-emails-widget>
    `}footerActions(){return a.qy`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:a.qy`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){if(!(this.siwx instanceof f.u))return void w.P.showError("ReownAuthentication is not initialized. Please contact support.");const t=m.W.getActiveCaipAddress();if(!t)throw new Error("Account is not connected.");if(this.isValidEmail(this.email))try{this.loading=!0;const e=await this.siwx.requestEmailOtp({email:this.email,account:t});this.pushRecentEmail(this.email),null===e.uuid?p.I.replace("SIWXSignMessage"):p.I.replace("DataCaptureOtpConfirm",{email:this.email})}catch(t){w.P.showError("Failed to send email OTP"),this.loading=!1}else w.P.showError("Please provide a valid email.")}onSkip(){p.I.replace("SIWXSignMessage")}getRecentEmails(){const t=b.Ud.getItem(b.Ws.RECENT_EMAILS);return(t?t.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(t){const e=this.getRecentEmails(),i=Array.from(new Set([t,...e])).slice(0,3);b.Ud.setItem(b.Ws.RECENT_EMAILS,i.join(","))}isValidEmail(t){return/^\S+@\S+\.\S+$/u.test(t)}};E.styles=[k],S([(0,n.wk)()],E.prototype,"email",void 0),S([(0,n.wk)()],E.prototype,"address",void 0),S([(0,n.wk)()],E.prototype,"loading",void 0),S([(0,n.wk)()],E.prototype,"appName",void 0),S([(0,n.wk)()],E.prototype,"siwx",void 0),S([(0,n.wk)()],E.prototype,"isRequired",void 0),S([(0,n.wk)()],E.prototype,"recentEmails",void 0),E=S([(0,s.EM)("w3m-data-capture-view")],E)}}]);