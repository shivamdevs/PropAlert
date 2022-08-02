/* Alert Finit * Version : 1.1.1 * Copyright Solonet 2021 * finit-javascript */

HTMLElement.prototype.closest = function(b) {
  var a = this;
  while (a && a !== window) {
    if (a && a === b) return a;
    a = a.parentElement;
  }
}
class Alert {
  constructor(title, options = {}) {
    var title = title;
    var option = options;
    if(new.target === undefined) { throw new Error('Failed to construct \'Alert\': Please use the \'new\' operator, this DOM object constructor cannot be called as a function.'); }
    if (!(title) || title == "") { throw new Error('Failed to construct \'Alert\': 1 argument required, but only 0 present.'); }
    if (title && (typeof title !== 'string' || title.constructor !== String)) { throw new Error('Failed to construct \'Alert\': The provided value at argument 1 is not of \'String\' type.'); }
    if (options && (typeof options !== 'object' || options.constructor !== Object)) { throw new Error('Failed to construct \'Alert\': The provided value at argument 2 is not of \'Object\' type.'); }
    var alert = this
      , op = (option || {})
      , title = (title || op.title)
      , subtitle = ((((op.text || op.subtext) || op.subtitle) || op.message) || "")
      , description = ((op.detail || op.description) || "")
      , icon = ((op.icon || op.logo) || false)
      , cancel = ((op.cancel || op.dismiss) || undefined)
      , cancelevent = null
      , buttons = ((op.button || op.buttons) || undefined)
      , defaultEvent = ((op.default || op.always) || null)
      , click = ((((op.click || op.onclick) || op.outerclick) || op.backclick) || undefined)
      , icons = {
        success : '<div class="success"><svg class="mark" viewBox="0 0 52 52"><circle class="_circle" cx="26" cy="26" r="25" fill="none" /><path class="_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg></div>',
        error : '<div class="error"><svg viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/><line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/></svg></div>',
        info : '<div class="info"><span class="dot"></span><span class="body"></span></div>',
        warning : '<div class="warning"><span class="body"></span><span class="dot"></span></div>',
        loading : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(0, 0, 0, 0); display: block;" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="40" stroke="rgba(255, 255, 255, 0.23245166409400198)" stroke-width="5" fill="none"></circle><circle cx="50" cy="50" r="40" stroke="#ff0000" stroke-width="5" stroke-linecap="square" fill="none"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.6666666666666667s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform><animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.6666666666666667s" values="0 251.32741228718345;226.1946710584651 25.132741228718345;0 251.32741228718345" keyTimes="0;0.5;1"></animate></circle></svg>'
      }
      , definebutton = function(n,o) {
        if (typeof o === 'undefined' || typeof o === 'boolean') {
          n.innerHTML = 'Ok';
        } else if (typeof o === 'string') {
          n.innerHTML = o;
        } else if (typeof o === 'object') {
          n.innerHTML = ((o.text || o.html) || 'Ok');
          var fn = ((((o.fn || o.fun) || o.perform) || o.function) || null);
          if (fn && typeof fn === 'function') {
            n.addEventListener('click', function() { alert.callback(fn); }, true);
          }
          if (o.type) { n.type = o.type; }
        } else if (typeof o === 'function') {
          n.innerHTML = 'Ok';
          n.addEventListener('click', function() { alert.callback(o); }, true);
        } else {
          n.innerHTML = 'Ok';
        }
        n.addEventListener('click', function() { alert.close(); }, true);
        n.setAttribute('ripple', 'rgba(66 133 244 / 70%)');
      }
      , a = document.createElement('alert')
      , b = document.createElement('div')
      , c = document.createElement('div')
      , d = document.createElement('div')
      , e = document.createElement('div')
      , f = document.createElement('div')
      , g = document.createElement('div')
      , h = document.createElement('div')
      , i = document.createElement('div')
      , j = document.createElement('button')
      , k = document.createElement('button');

    if (icon === true) { icon = 'warning'; }

    a.setAttribute('__alert','');
    a.appendChild(b);
    b.classList.add('__aeWtEg');
    b.appendChild(c);
    if (cancel || buttons) { b.appendChild(i); }
    c.classList.add('__aiuTyk');
    c.appendChild(d);
    c.appendChild(e);
    d.classList.add('__aicoYt');
    if (icon) {
      d.innerHTML = (icons[icon] || icon);
    }
    e.classList.add('__atCtou');
    e.appendChild(f);
    e.appendChild(g);
    e.appendChild(h);
    f.classList.add('__areWtt');
    f.innerHTML = title;
    g.classList.add('__areWts');
    if (subtitle) { g.innerHTML = subtitle; }
    h.classList.add('__areWtd');
    if (description) { h.innerHTML = description; }
    i.classList.add('__altBgl');
    if (buttons) {
      k.type = 'button';
      if (typeof buttons === 'string' || typeof buttons === 'function' || (typeof buttons === 'object' && !(Object.prototype.toString.call(buttons) == '[object Array]'))) {
        i.appendChild(k);
        definebutton(k,buttons);
      } else if ((typeof buttons === 'object' && Object.prototype.toString.call(buttons) == '[object Array]')) {
        buttons.forEach((btk) => {
          var l = k.cloneNode();
          i.appendChild(l);
          definebutton(l,btk);
        });
      }
    }
    if (cancel) {
      j.type = 'cancel';
      if (!buttons) { j.classList.add('__alErGy'); }
      i.appendChild(j);
      definebutton(j,cancel);
    }
    document.body.appendChild(a);
    this.element = a;
    this.compulsoryEvent = defaultEvent;
    this.clickEvent = click;
    (function() {
      if (alert && alert.element) {
        alert.element.classList.add('__aNiStr');
        setTimeout(function () {if (alert && alert.element) {alert.element.classList.remove('__aNiStr');}}, 400);
      }
    })();
    a.addEventListener('click', function(event) {
      if (!event.target.closest(b)) {
        if (alert.clickEvent === false || typeof alert.clickEvent === 'undefined') {
          if (alert && alert.element) {
            clearTimeout(alert.element.getAttribute('pop-alert'));
            alert.element.removeAttribute('pop-alert');
            alert.element.setAttribute('pop-alert', setTimeout(function () {
              alert.element.removeAttribute('pop-alert');
            }, 200));
          }
        } else if (typeof alert.clickEvent === 'boolean' && alert.clickEvent === true) {
          alert.close();
        } else if (typeof alert.clickEvent === 'function') {
          alert.close(alert.clickEvent);
        }
      }
    }, true);
  }
  callback(fn=null) {
    setTimeout(fn);
  }
  close(fn=null) {
    var a = this;
    if (a && a.element) {
      a.element.classList.add('__aNieNd');
      return setTimeout(function () {
        if (a && a.element) {a.removeElement();}
        if (fn) {a.callback(fn);}
        if (a.compulsoryEvent) { a.callback(a.compulsoryEvent); }
      }, 400);
    }
    return false;
  }
  cancel(fn=null) {
    return this.close(fn);
  }
  dismiss(fn=null) {
    return this.close(fn);
  }
  remove(fn=null) {
    return this.close(fn);
  }
  click(onclick=false) {
    var a = this;
    a.clickEvent = onclick;
    return a;
  }
  outerclick(onclick=false) {
    return this.click(onclick);
  }
  onclick(onclick=false) {
    return this.click(onclick);
  }
  backclick(onclick=false) {
    return this.click(onclick);
  }
  default(event=null) {
    var a = this;
    a.compulsoryEvent = event;
    return a;
  }
  defaultEvent(event=null) {
    return this.default(event);
  }
  onclose(event=null) {
    return this.default(event);
  }
  oncancel(event=null) {
    return this.default(event);
  }
  removeElement() {
    var a = this;
    if (a && a.element) {
      var p = a.element.parentNode;
      if (p && p.contains(a.element)) {
        p.removeChild(a.element);
      }
    }
  }
  title(title="") {
    if (title) {
      var a = this;
      if (a && a.element) {
        a.element.querySelector('.__areWtt').innerHTML = title;
        return a;
      }
    }
    return false;
  }
  text(text="") {
    var a = this;
    if (a && a.element) {
      a.element.querySelector('.__areWts').innerHTML = text;
      return a;
    }
    return false;
  }
  subtext(subtext="") {
    return this.text(subtext);
  }
  subtitle(subtitle="") {
    return this.text(subtitle);
  }
  message(message="") {
    return this.text(message);
  }
  detail(detail="") {
    var a = this;
    if (a && a.element) {
      a.element.querySelector('.__areWtd').innerHTML = detail;
      return a;
    }
    return false;
  }
  description(description="") {
    return this.detail(description);
  }
  icon(icon='') {
    if (icon) {
      var a = this, icons = {
        success : '<div class="success"><svg class="mark" viewBox="0 0 52 52"><circle class="_circle" cx="26" cy="26" r="25" fill="none" /><path class="_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg></div>',
        error : '<div class="error"><svg viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/><line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/></svg></div>',
        info : '<div class="info"><span class="dot"></span><span class="body"></span></div>',
        warning : '<div class="warning"><span class="body"></span><span class="dot"></span></div>',
        loading : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(0, 0, 0, 0); display: block;" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="40" stroke="rgba(255, 255, 255, 0.23245166409400198)" stroke-width="5" fill="none"></circle><circle cx="50" cy="50" r="40" stroke="#ff0000" stroke-width="5" stroke-linecap="square" fill="none"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.6666666666666667s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform><animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.6666666666666667s" values="0 251.32741228718345;226.1946710584651 25.132741228718345;0 251.32741228718345" keyTimes="0;0.5;1"></animate></circle></svg>'
      };
      if (a && a.element) {
        a.element.querySelector('.__aicoYt').innerHTML = icons[icon] || icon;
        return a;
      }
    }
    return false;
  }
  logo(logo=''){
    return this.icon(logo);
  }
};
(function() {
  var a = `@import url("/utilities/apis-font/index.css");@import url("/utilities/web-icons/index.css");alert[__alert] {display: flex;justify-content: center;align-items: center;flex-direction: row;flex-wrap: nowrap;position: fixed;inset: 0;top: 0;left: 0;right: 0;bottom: 0;margin: 0;padding: 10px;box-sizing: border-box;background: rgba(0 0 0 / 55%);color: #000000;z-index: 111111;transition: 0.2s;font-family: "Poppins", "Segoe Alt Regular", sans-serif;}alert[__alert] * {-webkit-tap-highlight-color: transparent;box-sizing: border-box;font-family: "Poppins", "Segoe Alt Regular", sans-serif;}alert[__alert] .__aeWtEg {display: flex;flex-direction: column;flex-wrap: nowrap;max-width: 460px;min-width: 240px;max-height: 100%;padding: 10px 0;margin: 0;background: #ffffff;border-radius: 6px;border: 1px solid rgba(0,0,0,.12);box-shadow: 0 0 16px rgb(0 0 0 / 12%), 0 16px 16px rgb(0 0 0 / 24%);overflow: hidden;position: relative;}alert[__alert] .__aeWtEg .__aiuTyk {display: flex;flex-direction: column;flex-wrap: nowrap;flex-grow: 1;padding: 10px;margin: 0;width: 100%;max-height: 100%;overflow: hidden auto;}alert[__alert] .__aeWtEg .__aiuTyk::-webkit-scrollbar {width: 16px;}alert[__alert] .__aeWtEg .__aiuTyk::-webkit-scrollbar-thumb {background: #dadce0;background-clip: padding-box;border: 4px solid transparent;-webkit-border-radius: 8px;border-radius: 8px;-webkit-box-shadow: none;box-shadow: none;}alert[__alert] .__aeWtEg .__aiuTyk::-webkit-scrollbar-track {background: none;border: none;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt {display: flex;flex-wrap: nowrap;max-height: 150px;flex-direction: row;width: 100%;justify-content: center;align-items: center;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt svg, alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt img {max-width: 100%;max-height: 100%;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .error {width: 100%;display: flex;justify-content: center;margin: 20px auto;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .error svg {width: 100px;margin: auto;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .error .path {stroke-dasharray: 1000;stroke-dashoffset: 0;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .error .circle {animation: alert__alert__aeWtEg__aiuTyk__aicoYt__e_dash .9s ease-in-out;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .error .line {stroke-dashoffset: 1000;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__e_dash .9s .35s ease-in-out forwards;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .error .check {stroke-dashoffset: -100;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__e_check .9s .35s ease-in-out forwards;}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__e_dash {0% {stroke-dashoffset: 1000;}100% {stroke-dashoffset: 0;}}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__e_check {0% {stroke-dashoffset: -100;}100% {stroke-dashoffset: 900;}}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .info {border-radius: 50%;border: 4px solid gray;box-sizing: content-box;height: 80px;margin: 20px auto;padding: 0;position: relative;width: 80px;border-color: #9de0f6;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__i_pulse .75s infinite alternate;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .info:before {background-color: transparent !important;border-radius: 50%;content: "";display: inline-block;height: 100%;opacity: 0;position: absolute;width: 100%;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .info:after {background-color: transparent !important;border-radius: 50%;content: "";display: block;height: 100%;position: absolute;width: 100%;z-index: 1;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .info .body {background-color: #3fc3ee;border-radius: 2px;height: 47px;left: 50%;margin-left: -2px;position: absolute;top: 10px;width: 5px;z-index: 2;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__i .75s infinite alternate;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .info .dot {background-color: #3fc3ee;border-radius: 50%;bottom: 10px;height: 7px;left: 50%;margin-left: -3px;position: absolute;width: 7px;z-index: 2;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__i .75s infinite alternate;}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__i {0% {background-color: #3fc3ee }100% {background-color: #9de0f6 }}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__i_pulse {0% {border-color: #3fc3ee }100% {border-color: #9de0f6 }}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .success {width: 100%;display: flex;justify-content: center;margin: 20px auto;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .success .mark {width: 100px;height: 100px;border-radius: 50%;display: block;stroke-width: 2;stroke: #4bb71b;stroke-miterlimit: 10;box-shadow: inset 0px 0px 0px #4bb71b;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__s_fill .4s ease-in-out .4s forwards, alert__alert__aeWtEg__aiuTyk__aicoYt__s_scale .3s ease-in-out .9s both;position : relative;top: 5px;right: 5px;margin: 0 auto;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .success ._circle {stroke-dasharray: 166;stroke-dashoffset: 166;stroke-width: 2;stroke-miterlimit: 10;stroke: #4bb71b;fill: #fff;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__s_stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .success ._check {transform-origin: 50% 50%;stroke-dasharray: 48;stroke-dashoffset: 48;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__s_stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__s_stroke {100% {stroke-dashoffset: 0;}}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__s_scale {0%, 100% {transform: none;}50% {transform: scale3d(1.1, 1.1, 1);}}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__s_fill {100% {box-shadow: inset 0px 0px 0px 30px #4bb71b;}}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .warning {border-radius: 50%;border: 4px solid #F8BB86;box-sizing: content-box;height: 80px;margin: 20px auto;padding: 0;position: relative;width: 80px;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__w_pulse .75s infinite alternate;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .warning:after {background-color: transparent !important;border-radius: 50%;content: "";display: block;height: 100%;position: absolute;width: 100%;z-index: 1;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .warning .body {background-color: #F8BB86;border-radius: 2px;height: 47px;left: 50%;margin-left: -2px;position: absolute;top: 10px;width: 5px;z-index: 2;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__w .75s infinite alternate;}alert[__alert] .__aeWtEg .__aiuTyk .__aicoYt .warning .dot {background-color: #F8BB86;border-radius: 50%;bottom: 10px;height: 7px;left: 50%;margin-left: -3px;position: absolute;width: 7px;z-index: 2;animation: alert__alert__aeWtEg__aiuTyk__aicoYt__w .75s infinite alternate;}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__w {0% {background-color: #F8D486 }100% {background-color: #F8BB86 }}@keyframes alert__alert__aeWtEg__aiuTyk__aicoYt__w_pulse {0% {border-color: #F8D486 }100% {border-color: #F8BB86 }}alert[__alert] .__aeWtEg .__aiuTyk .__atCtou {display: block;width: 100%;word-wrap: break-word;text-align: justify;}alert[__alert] .__aeWtEg .__aiuTyk .__atCtou .__areWtt {font-size: 22px;font-weight: 500;color: #000000;margin: 8px auto;text-align: center;}alert[__alert] .__aeWtEg .__aiuTyk .__atCtou .__areWts {font-size: 16px;font-weight: normal;color: #5f6368;margin: 8px auto;text-align: center;}alert[__alert] .__aeWtEg .__aiuTyk .__atCtou .__areWtd {font-size: 14px;font-weight: normal;color: #727888;margin: 8px auto;text-align: center;}alert[__alert][pop-alert] .__aeWtEg {animation: alert__alert_pop_alert__aeWtEg_pop 200ms linear;}alert[__alert].__aNiStr {animation: alert__alert__aNiStr_fi 150ms linear;}alert[__alert].__aNiStr .__aeWtEg {animation: alert__alert__aNiStr__aeWtEg_pi 300ms linear;}alert[__alert].__aNieNd {animation: alert__alert__aNieNd_fo 100ms linear 100ms forwards;}alert[__alert].__aNieNd .__aeWtEg {animation: alert__alert__aNieNd__aeWtEg_po 200ms linear forwards;}@keyframes alert__alert_pop_alert__aeWtEg_pop {0%,100% {transform: none;}50% {transform: scale3d(1.03, 1.03, 1);}}@keyframes alert__alert__aNiStr_fi {0% {opacity: 0;}100% {opacity: 1;}}@keyframes alert__alert__aNiStr__aeWtEg_pi {0% {opacity: 0;transform: scale3d(.1, .1, 1);}50% {opacity: 0;}90% {opacity: .8;transform: scale3d(1.07, 1.07, 1);}100% {opacity: 1;transform: none;}}@keyframes alert__alert__aNieNd_fo {0% {opacity: 1;}70% {opacity: 0;}100% {opacity: 0;}}@keyframes alert__alert__aNieNd__aeWtEg_po {0% {opacity: 1;transform: scale3d(1, 1, 1);}100% {opacity: 0;transform: scale3d(.1, .1, 1);}}alert[__alert] .__aeWtEg .__altBgl {width: 100%;display: flex;align-items: center;justify-content: center;margin-top: 5px;padding: 0 5px;}alert[__alert] .__aeWtEg .__altBgl button {display: flex;width: auto;padding: 6px 10px;min-width: 80px;justify-content: center;align-items: center;margin: 5px;font-size: 14px;font-weight: inherit;background: inherit;border-radius: 4px;color: inherit;cursor: pointer;border: none;border: 1px solid rgba(0,0,0,.2);color: #4285f4;transition: 0.2s;box-sizing: border-box;font-family: "Poppins", "Segoe Alt Regular", sans-serif;}alert[__alert] .__aeWtEg .__altBgl button:active, alert[__alert] .__aeWtEg .__altBgl button:hover {border-color: #4285f4;background: #ebf2ff;}alert[__alert] .__aeWtEg .__altBgl button.__alErGy {border: none;color: #5f6368;width: 100%;height: 40px;background: transparent }alert[__alert] .__aeWtEg .__altBgl button.__alErGy:active, alert[__alert] .__aeWtEg .__altBgl button.__alErGy:hover {color: #4285f4;}alert[__alert] .__aeWtEg .__altBgl button[type="button"] {border: 1px solid #4285f4;}alert[__alert] .__aeWtEg .__altBgl button[type="button"]:hover {background: #4285f4;color: #ffffff;}alert[__alert] .__aeWtEg .__altBgl button[type="confirm"] {border: 1px solid #4285f4;background: dodgerblue;color: #ffffff;}alert[__alert] .__aeWtEg .__altBgl button[type="confirm"]:hover {background: #4285f4;color: #ffffff;}`
    , b = new Blob([a], {type: 'text/css'})
    , c = document.createElement('link');
c.rel = 'stylesheet';
c.href = window.URL.createObjectURL(b);
c.setAttribute('module', 'alert');
document.head.appendChild(c);
})();
