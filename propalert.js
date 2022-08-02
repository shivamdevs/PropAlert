// Solonet.in :: PropAlert - Javascript Library
// Version :: 2.0.0 - MIT License

// For detailed information visit :: https://www.solonet.in/propalert

// Essential modules
// jScript Library :: https://www.solonet.in/jscript

(function() {
  if ( !window.jScript ) return console.log( '%c\'PropAlert\' needs \'jScript Library\' to run.\nGet from https://www.solonet.in/jscript\nOr get \'PropAlert Vanilla\' from https://www.solonet.in/propalert#propalert-in-vanilla-js' , 'font-weight: 500' );
  Js.styleSheet({
    'propalert-container' : {
      zIndex : '999996 !important',
    },
    'propalert-container, propalert-container *' : {
      wordWrap: 'break-word',
      boxSizing: 'border-box',
      WebkitTextSizeAdjust: '100%',
      WebkitFontSmoothing: 'antialiased',
      WebkitTapHighlightColor: 'transparent',
    },
    'propalert-container button' : {
      outline : 'none !important',
      border : 'none',
      background : 'inherit',
    },
    '.propalert-5tgh7' : {
      position : 'fixed !important',
      zIndex : '999997 !important',
      fontSize : '15px',
      minWidth : '100vw !important',
      width : '100vw !important',
      maxWidth : '100vw !important',
      minHeight : '100vh !important',
      height : '100vh !important',
      maxHeight : '100vh !important',
      inset : '0 !important',
    },
    '.propalert-5tgh7, .propalert-5tgh7[data-theme=light]' : {
      '--prop-alert-color' : '#121212',
      '--prop-alert-color-2' : '#545454',
      '--prop-alert-color-3' : '#727888',
      '--prop-alert-bg' : '#0009',
      '--prop-alert-bg-2' : '#fff',
      '--prop-alert-border' : '0,0,0,.1',
      '--prop-alert-shadow-color' : '0,0,0,.4',
      '--prop-alert-shadow' : '0px 2px 8px 0px rgb(var(--prop-alert-shadow-color))',
      '--prop-alert-hover' : '0,0,0,.2',
      '--prop-alert-active' : '0,0,0,.1',
    },
    '.propalert-5tgh7[data-theme="dark"]' : {
      '--prop-alert-color' : '#fff',
      '--prop-alert-color-2' : '#bbb',
      '--prop-alert-color-3' : '#999',
      '--prop-alert-bg' : '#0004',
      '--prop-alert-bg-2' : '#232323',
      '--prop-alert-border' : '255,255,255,.1',
      '--prop-alert-shadow-color' : '0 0 0 / 60%',
      '--prop-alert-hover' : '255,255,255,.2',
      '--prop-alert-active' : '255,255,255,.1',
    },
    '.propalert-2rrf7' : {
      width : '100% !important',
      height : '100% !important',
      minWidth : '100% !important',
      minHeight : '100% !important',
      maxWidth : '100% !important',
      maxHeight : '100% !important',
      background : 'var(--prop-alert-bg)',
      transition: 'all .2s ease',
      overflow : 'auto !important',
    },
    '.propalert-2rrf7::-webkit-scrollbar' : {
      width : '12px',
      height : '12px',
      cursor : 'default',
    },
    '.propalert-2rrf7::-webkit-scrollbar-thumb' : {
      background : '#d3d3d3',
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
    '.propalert-2rrf7::-webkit-scrollbar-track' : {
      background: 'none',
      border: 'none',
    },
    '.propalert-2rrf7::-webkit-scrollbar-corner' : {
      background : 'none',
    },
    '.propalert-2rrf7::-webkit-scrollbar-thumb:active' : {
      borderWidth : '3px',
      borderRadius : '0',
    },
    '.propalert-0khg8' : {
      display : 'flex',
      flexDirection : 'column',
      flexWrap : 'nowrap',
      minHeight : '100%',
      width : '100%',
    },
    '.propalert-0khg8::before, .propalert-0khg8::after' : {
      content : '" "',
      display : 'flex',
      width : '100%',
      flex : '1',
      minHeight : '30px',
    },
    '.propalert-0dsr3' : {
      display : 'flex',
      width : '100%',
      flexDirection : 'row',
      flexWrap : 'nowrap',
    },
    '.propalert-0dsr3::before, .propalert-0dsr3::after' : {
      content : '" "',
      display : 'flex',
      height : '100%',
      flex : '1',
      minWidth : '10px',
    },
    '.propalert-3gjk6' : {
      background : 'var(--prop-alert-bg-2)',
      color : 'var(--prop-alert-color)',
      fontFamily : 'inherit',
      borderRadius : '5px',
      border : '1px solid rgba(var(--prop-alert-border))',
      boxShadow : 'var(--prop-alert-shadow)',
      transition: 'all .2s ease',
      maxWidth : '100% !important',
    },
    ':root.mobile-device .propalert-3gjk6, :root.mobile-device-ratio .propalert-3gjk6' : {
      width : '100% !important',
    },
  }, 'head' , '[propalert-style]' );
}());


class PropAlert {
  constructor( options ) {
    if ( !window.jScript ) return;
    var defaults = {
      allowHTML : [ false , true ],
      closeButton : [ false , true ],
      outerclick : [ false , true ],
      theme : [ 'light' , 'dark' ],
    };
    var root = function( text , options , timeout ) {
      if ( !Js.ce( 'div' ).html( text ?? '' ).text() ) throw new Error( 'Failed to construct \'PropAlert\'.\nText argument in not defined.' );
      if ( parseInt( options ) || options === null ) timeout = options , options = {};
      return new class {
        constructor() {
          var alert = this;
          alert.placeholder = text;

          alert.elements = {};
          alert.elements.container = Js.ce( '.propalert.propalert-5tgh7' ).appendTo( Js.cm( 'propalert-container' , 'body' ) );
          alert.elements.outer = Js.ce( '.propalert-2rrf7' ).appendTo( alert.elements.container );
          alert.elements.wrapY = Js.ce( '.propalert-0khg8' ).appendTo( alert.elements.outer );
          alert.elements.wrapX = Js.ce( '.propalert-0dsr3' ).appendTo( alert.elements.wrapY );
          alert.elements.inner = Js.ce( '.propalert-3gjk6' ).appendTo( alert.elements.wrapX ).html((function() {
            var string = '';
            for (var i = 0; i < 100; i++) string += Js.random.string( null , Js.random.number( 20 , 50 ) ) + ' ';
            return string;
          }()));

        }
      }( text , options , timeout );
    };
    root.options = {
      addClass : null,
      addContentClass : null,
      allowHTML : false,
      buttons : null,
      closeButton : false,
      input : null,
      onclose : null,
      ontimeout : null,
      outerclick : false,
      position : 'center',
      theme : 'light',
      timeout : null,
    };
    root.setDefault = function( option , value ) {
      var options = Js.arrObj.valToObj( option , value );
      for (var variable in options) {
        if (options.hasOwnProperty(variable)) {
          if( defaults[ variable ] ) {
            if ( defaults[ variable ].includes( options[ variable ] ) ) {
              this.options[ variable ] = options[ variable ];
            }
          } else {
            this.options[ variable ] = options[ variable ];
          }
        }
      }
      return root.options;
    };
    root.setDefault( options );
    root.get = function( element ) {
      return root.getElements().match( element ).proto( '_propalert' ) || null;
    };
    root.getAll = function() {
      var result = [];
      root.getElements().each(function( item ) {
        result.push( item.proto( '_propalert' ) || {} );
      });
      return result;
    };
    root.getElements = function() {
      return Js( '.propalert' );
    };
    return root;
  }
};
const Propalert = new PropAlert();
