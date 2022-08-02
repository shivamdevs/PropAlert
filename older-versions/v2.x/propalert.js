Js.styleSheet({
  'propalert-messages' : {
    zIndex : '999998 !important',
  },
  '.propalert-container' : {
    '-PropAlertColor' : '#121212',
    '-PropAlertBg' : '#fff',
    '-PropAlertBorder' : '0,0,0,.1',
    '-PropAlertShadowColor' : '0 0 0 / 20%',
    '-PropAlertShadow' : '0px 2px 8px 0px rgb(var(--prop-alert-shadow-color))',
    '-PropAlertHover' : '0,0,0,.2',
    '-PropAlertActive' : '0,0,0,.1',

    position : 'fixed !important',
    fontSize : '16px !important',
    fontWeight : '400 !important',
    background : 'none !important',
    //transition : '.2s all ease !important',
    transitionProperty: 'top, bottom, transform, opacity',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease',
    zIndex : '999999 !important',
  },
  '.propalert-container[data-theme="dark"]' : {
    '-PropAlertColor' : '#d0d7de',
    '-PropAlertBg' : '#232323',
    '-PropAlertBorder' : '255,255,255,.1',
    '-PropAlertShadowColor' : '0 0 0 / 60%',
    '-PropAlertHover' : '255,255,255,.2',
    '-PropAlertActive' : '255,255,255,.1',
  },
  '.propalert-container[data-type="success"]' : {
    '-PropAlertColor' : '#fff',
    '-PropAlertBg' : '#4bb543',
    '-PropAlertHover' : '255,255,255,.2',
    '-PropAlertActive' : '255,255,255,.1',
  },
  '.propalert-container[data-type="error"]' : {
    '-PropAlertColor' : '#121212',
    '-PropAlertBg' : '#f8b7bd',
    '-PropAlertHover' : '255,255,255,.2',
    '-PropAlertActive' : '255,255,255,.1',
  },
  '.propalert-container[data-type="clear"]' : {
    '-PropAlertColor' : '#fff',
    '-PropAlertBg' : '#2E5090',
    '-PropAlertHover' : '255,255,255,.2',
    '-PropAlertActive' : '255,255,255,.1',
  },
  '.propalert-container[data-position="left"]' : {
    left : '5vw',
    maxWidth : 'calc(100vw - 10vw)',
  },
  '.propalert-container[data-position="center"]' : {
    left : '50%',
    transform : 'translateX(-50%)',
    maxWidth : 'calc(100vw - 10vw)',
  },
  '.propalert-container[data-position="right"]' : {
    right : '5vw',
    maxWidth : 'calc(100vw - 10vw)',
  },
  '.propalert-container[data-align="top"]' : {
    top : '10px',
  },
  '.propalert-container[data-align="bottom"]' : {
    bottom : '10px',
  },
  ':root.mobile-device .propalert-container, :root.mobile-device-ratio .propalert-container' : {
    maxWidth : '95vw',
    width: '95vw',
    left : '2.5vw',
    right : '2.5vw',
    transform : 'none',
  },
  '.propalert-content' : {
    background : 'var(--prop-alert-bg)',
    color : 'var(--prop-alert-color)',
    borderRadius : '6px',
    border : '1px solid rgba(var(--prop-alert-border))',
    boxShadow : 'var(--prop-alert-shadow)',
    transition: 'all .2s ease',
  },
  '.propalert-clickable' : {
    cursor : 'pointer',
    userSelect : 'none',
  },
  '.propalert-hidden .propalert-content' : {
    transform : 'scale(.7)',
    opacity : '0',
  },
  '.propalert-wrap' : {
    paddingRight : '10px',
    display : 'inline-flex',
    flexDirection : 'row-reverse',
    flexWrap : 'nowrap',
    justifyContent : 'space-between',
    alignItems : 'center',
    maxWidth : '100%',
  },
  '.propalert-linear' : {
    padding : '10px 0 10px 20px',
    display : 'inline-block',
    maxWidth : '100%',
    maxHeight : '40vh',
    overflow : 'auto',
  },
  '.propalert-text, .propalert-option' : {
    display : 'inline-block',
    wordWrap : 'break-word',
  },
  '.propalert-cancel' : {
    display : 'inline-flex',
    flexWrap : 'nowrap',
    alignItems : 'center',
    justifyContent : 'center',
    paddingLeft : '10px',
  },
  '.propalert-button' : {
    color : 'var(--prop-alert-color)',
    margin : '4px 8px',
    padding : '5px 20px',
    display : 'inline-flex',
    borderRadius : '4px',
    justifyContent : 'center',
    alignItems : 'center',
    border : '1px solid rgba(var(--prop-alert-border))',
    transition : '.2s',
  },
  '.propalert-cancel-button' : {
    width : '24px',
    height : '24px',
    maxWidth : '24px',
    maxHeight : '24px',
    display : 'inline-flex',
    borderRadius : '4px',
    justifyContent : 'center',
    alignItems : 'center',
    flexWrap : 'nowrap',
    overflow : 'hidden',
    transition : '.2s',
  },
  '.propalert-button:hover, .propalert-cancel-button:hover' : {
    cursor : 'pointer',
    background : 'rgba(var(--prop-alert-hover))',
  },
  '.propalert-button:active, .propalert-cancel-button:active' : {
    background : 'rgba(var(--prop-alert-active))',
  },
  '.propalert-cancel-button svg' : {
    width : '100%',
    height : '100%',
    fill : 'var(--prop-alert-color)',
    transform : 'scale(.7)',
  },
  '.propalert-linear::-webkit-scrollbar' : {
    width : '12px',
    height : '12px',
    cursor : 'default',
  },
  '.propalert-linear::-webkit-scrollbar-thumb' : {
    background : '#777777',
    backgroundClip : 'padding-box',
    border : '4px solid transparent',
    minHeight : '28px',
    minWidth : '28px',
    cursor : 'default',
    WebkitBorderRadius : '8px',
    borderRadius : '8px',
    WebkitBoxShadow : 'none',
    boxShadow : 'none',
  },
  '.propalert-linear::-webkit-scrollbar-track' : {
    background: 'none',
    border: 'none',
  },
  '.propalert-content a' : {
    color : 'var(--prop-alert-color)',
    transition : 'none !important',
    textDecoration : 'underline',
  },
  '' : {},
  '' : {},
  '' : {},
} , 'head' , '#propalert-style-agent');

var __propalert__custom__event__ = function() {
  var bottom = 10 , top = 10;
  Js( '.propalert-container' ).reverse().each(function( item , i ) {
    if ( item.data( 'align' ) === 'top' ) item.css( 'top' , top + 'px' ) , top += item.height() + 10; else item.css( 'bottom' , bottom + 'px' ) , bottom += item.height() + 10;
  });
};

Js( window ).bind( 'resize' , __propalert__custom__event__ );



class PropAlert {
  constructor( options ) {
    this.options = ( Is.object( options ) ) ? options : {};
  }
  setDefault( option , value ) {
    var object = this.options;
    if ( !Is.object( object ) ) object = {};
    if ( Is.object( option ) ) {
      for (var key in option) {
        var val = option[ key ];
        if ( Is.function( val ) ) val = val();
        if ( val ) object[ key ] = val; else delete object[ key ];
      }
    } else if ( Is.string( option ) ) {
      if ( Is.function( value ) ) value = value();
      if ( value ) object[ option ] = value; else delete object[ option ];
    }
    return this;
  }
  new( text , options , timeout ) {
    if ( Is.function( text ) ) text = text();
    if ( !String( text ) ) throw new Error( 'PropAlert : Can\'t specify \'TEXT\' argument.' );
    var parent = this;
    if ( parseFloat( options ) || options === null ) timeout = options , options = {};
    class PropElement {
      __timeout = null;
      __timeoutevent = null;
      constructor( text , options , timeout ) {
        var root = this;
        this.__text = String( text );
        this.default = parent.options;
        this.options = ( Is.object( options ) ) ? options : {};
        if ( !String( root.__text ) ) throw new Error( 'PropAlert : \'TEXT\' argument is not of string type.' );

        var opt = {}
          , ro = root.options
          , rpo = root.default;

        (function() {
          opt.align = ro.align ?? rpo.align;
          opt.buttons = ro.buttons ?? rpo.buttons;
          opt.cancelButton = ro.cancelButton ?? rpo.cancelButton;
          opt.clickable = ro.clickable ?? rpo.clickable;
          opt.onclose = ro.onclose ?? rpo.onclose;
          opt.ontimeout = ro.ontimeout ?? rpo.ontimeout;
          opt.position = ro.position ?? rpo.position;
          opt.style = ro.style ?? rpo.style;
          opt.theme = ro.theme ?? rpo.theme;
          opt.type = ro.type ?? rpo.type;
          opt.timeout = timeout === null ? false : parseFloat( timeout ) || parseFloat( ro.timeout ) || parseFloat( rpo.timeout ) || false;
        }());

        (function() {
          if ( ![ 'top' , 'bottom' ].includes( opt.align ) ) opt.align = 'bottom';
          if ( ![ true , false ].includes( opt.cancelButton ) ) opt.cancelButton = false;
          if ( ![ true , false ].includes( opt.clickable ) ) opt.clickable = false;
          if ( ![ 'left' , 'center' , 'right' ].includes( opt.position ) ) opt.position = 'left';
          if ( ![ 'light' , 'dark' , 'success' , 'error' ].includes( opt.theme ) ) opt.theme = 'light';
          if ( ![ 'default' , 'success' , 'error' , 'clear' ].includes( opt.type ) ) opt.type = 'default';
          opt.style = Js.cssStyle.block( opt.style ?? '' );
        }());

        root.element = Js.ce(
          'div',
          '.propalert-container.propalert-hidden',
          Js.ce(
            'div',
            '.propalert-content',
            Js.ce(
              'div',
              '.propalert-wrap',
              [
                Js.ce(
                'div',
                '.propalert-cancel',
              ),
                Js.ce(
                  'div',
                  '.propalert-linear',
                  [
                    Js.ce(
                      'span',
                      '.propalert-text',
                      root.__text
                    ),
                    Js.ce(
                      'span',
                      '.propalert-option',
                    ),
                  ]
                ),
              ]
            )
          )
        );

        root.element.data({
          align : opt.align,
          position : opt.position,
          theme : opt.theme,
          type : opt.type,
        }).appendTo( Js.cd( 'propalert-messages' , null , 'body' ) );
        setTimeout(function() {
          root.element.removeClass( 'propalert-hidden' );
        }, 200);

        if ( opt.buttons ) {
          (function() {
            var setButtons = function( param ) {
              if ( Is.array( param ) ) return param.forEach(( item ) => { setButtons( item ); });
              var btnName = '';
              var btnClick = null;
              if ( Is.object( param ) ) {
                btnName = param.name || param.text || param.html;
                btnClick = param.click || param.onclick;
              } else {
                btnName = param;
              }
              if ( Is.function( btnName ) ) btnName = btnName();
              btnName = String( btnName );
              if ( btnName ) {
                root.element.find( '.propalert-option' ).append(
                  Js.ce(
                    'span',
                    '.propalert-button',
                    btnName,
                  ).bind( 'click' , function( eve ) {
                    eve.preventDefault();
                    eve.stopPropagation();
                    root.close( btnClick );
                  }, { once : true })
                );
              }
            };
            setButtons( opt.buttons );
          }());
        }

        if ( opt.cancelButton ) {
          root.element.find( '.propalert-cancel' ).append(
            Js.ce(
              'span',
              '.propalert-cancel-button',
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>',
            ).bind( 'click' , function( eve ) {
              eve.preventDefault();
              eve.stopPropagation();
              root.close();
            },{once:true})
          );
        }
        root.element.find( '.propalert-content' )[ 0 ].style.cssText = opt.style;

        if ( opt.clickable ) {
          root.element.find( '.propalert-content' ).addClass( 'propalert-clickable' ).bind( 'click' , function() {
            root.close();
          },{once:true});
        }

        if ( opt.onclose ) root.onclose = opt.onclose;
        if ( opt.ontimeout ) root.ontimeout = opt.ontimeout;

        if ( opt.timeout !== false ) {
          root.__timeoutevent = setTimeout(function() {
            root.close( root.ontimeout );
          }, opt.timeout);
        }
        __propalert__custom__event__();

        if ( opt.timeout !== false ) root.__timeout = parseInt( opt.timeout );

        root.element.prototype( '_propalert' , this );

        return this;
      }
      close( callback ) {
        var root = this;
        var element = root.element;
        var onclose = root.onclose || function() {};
        callback = callback || function() {};

        if ( element ) {
          element.addClass( 'propalert-hidden' );
          setTimeout(function () {
            element.remove();
            __propalert__custom__event__();
            if ( onclose ) onclose();
            if ( callback ) callback();
          }, 200);
        }

        for(var param in root) delete root[ param ];
        return this;
      }
      onclose = null;
      ontimeout = null;
      setTimeout( time ) {
        return this.timeout( time );
      }
      text( text ) {
        if ( Is.function( text ) ) text = text();
        text = String( text );
        if ( Is.string( text ) ) {
          this.element.find( '.propalert-text' ).html( text );
          this.__text = text;
        }
        return this;
      }
      timeout( time ) {
        var root = this;
        if ( parseInt ( time ) ) {
          clearTimeout( root.__timeoutevent );
          root.__timeoutevent = setTimeout(function() {
            root.close( root.ontimeout );
          }, parseInt( time ) );
          root.__timeout = parseInt( time );
        } else if ( time === null ) {
          clearTimeout( root.__timeoutevent );
          root.__timeout = null;
        }
        return this;
      }
      update( text ) {
        return this.text( text );
      }
    }
    return new PropElement( text , options , timeout );
  }
}
var Prop = new PropAlert();
