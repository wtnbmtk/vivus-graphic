new Vivus('logo', {
  start: 'autostart',
  type: 'scenario-sync',
  pathTimingFunction: Vivus.EASE_OUT
  },
  function(obj){
    obj.el.classList.add('fill-1', 'fill-2', 'fill-3', 'clear-stroke');
  });

  $(window).on( 'load',function() {
    $('main').hide();
    $('svg').fadeIn(0);
    setTimeout(function(){
      $('svg').fadeOut(3000, 'linear',function(){
        $('main').show();
      });
  	},9000);
    });
    $('head').append( // append()内の引数を</head>の手前に追加する
        '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>' // contanerを表示、loaderを非表示
    );
