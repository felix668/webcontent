<template>
  <div class="CanvasCounter">
    <canvas unselectable="on" ref="canvas" width="512" height="74"></canvas>
  </div>
</template>

<style lang="less" scoped>
  .CanvasCounter {
    position: absolute; left: 1.18rem; top: 6.37rem;
    width: 5.12rem;
    margin: auto;
    // background: #ECF0F1;
    canvas {
      display: block;
      width: 100%;
    }
  }
</style>

<script>
  var arr = [];
  var uid = 0;

  // var img = new Image();
  // img.src = './img/red/panel.png';

  function start( el ){

    var Score = function(el,fontSize,paneWidth) {
      this.canvas = el;
      this.fontSize = fontSize || "18";
      this.paneWidth = paneWidth || 18; 
      this.ctx = this.canvas.getContext("2d");
      this.w =  this.canvas.width;
      this.h = this.canvas.height;
      this.plates = [null, null, null, null, null, null, null, null, null],
      this.number = "000000000";
      this.update(0);
      this.render();
    }

    Score.prototype = {
      update: function(new_val) {
        new_val = new_val.toString();
        var len = this.plates.length - new_val.length;
        // implement the digits with whitespace
        for (var i = 0; i < len; i++) {
          new_val = " " + new_val;
        }
        var arr_old = this.number.split("");
        var arr_new = new_val.split("");

        for (var i = 0; i < arr_old.length; i++) {
          if (arr_new[i] !== " ") {
            arr_old[i] === " " && (arr_old[i] = "0");
            this.plates[i] = new Plate( this, parseInt(arr_old[i]), parseInt(arr_new[i]), this.paneWidth*(i) );
          }else{
            // the old digit is 0
            this.plates[i] = new Plate( this, 0, 0, this.paneWidth*(i) );
          }
        }
        this.number = new_val;
      },
      render: function() {
        var self = this;
        this.stimer = requestAnimFrame(function() {
          self.render();
        });
        this.ctx.clearRect(0, 0, this.w, this.h);
        // draw background img
        for( let i = 0; i<this.plates.length; i++ ){
          // this.ctx.drawImage( img,4+61*i,0 );
        };
        this.plates.forEach(a=>{
          // draw the number
          if( a!==null ){
            a.draw( this.fontSize );
            a.step();
          }
        })
        // for( let i = 0; i<8; i++ ){
        //     if (this.plates[i] != null) {
        //         this.plates[i].draw(this.ctx,this.fontSize);
        //         this.plates[i].move();
        //     }
        // }
      }
    }

  var Plate = function(cv, ov, nv, x) {
    var self = this;
    this.cv = cv;
    this.ov = ov;// the old value
    this.nv = nv;// the new value
    // height
    this.paneHeight = 66;
    this.fontSize = 46;
    this.x = x;//ºá×ø±ê
    this.y = 4;
    this.over = false;
    this.distance = (function(){
      if( self.nv>=self.ov ){
        return self.paneHeight*(self.nv-self.ov);
      }else{
        return self.paneHeight*(10-self.ov+self.nv);
      }
    })(),
    // height of one number
    this.speedY = 5;
    // the numbers
    this.nubs = [];
    this.__init();
  }
  Plate.prototype = {
    __init: function() {
      this.nubs[0] = this.ov;
      for( let i = 1; i<10; i++ ){
        let candidate = this.nubs[0] + i;
        this.nubs[i] = candidate<=9? candidate: (candidate-10);
      }
    },
    draw: function() {
      var ctx = this.cv.ctx;
      ctx.save();
      ctx.font = '600 ' + this.fontSize + 'px arial';
      //       var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
      // ctx.shadowColor = "#000";
      //       ctx.shadowOffsetX = 1;
      //       ctx.shadowOffsetY = 1;
      //       gradient.addColorStop("0", "#fff");
      //       gradient.addColorStop("0.2", "#444");
      //       gradient.addColorStop("0.6", "#fff");
      //       gradient.addColorStop("0.8", "#444");
      //       gradient.addColorStop("1", "#fff");
      // color of the text
      ctx.fillStyle = '#f0dabf';
      // draw the ten numbers
      this.nubs.forEach((a,i)=>{
        // remember that the number will be drawn at the top-right of its coordinates
        var numberX = this.x + 16;
        var numberY = this.y + i*this.paneHeight + 50;
        if ( numberY > 0 && numberY < 130) {
          ctx.fillText( a, numberX, numberY );
        }
      })
      ctx.restore();
    },
    step: function() {
      if ( this.nv!==this.ov&&this.over===false ) {
        this.y -= this.speedY;
        if( this.y <= 4 - this.distance ){
          this.y = 4 - this.distance;
          this.over = true;
        }
      }
    }
  }


  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback,element) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  window.cancelAFrame = (function() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
    function(id) {
      window.clearTimeout(id);
    };
  })();


    //¼ÆÈëÊý×Ö
    var score1 = 0;
    var s1 = new Score( el , 46,57);
    // setTimeout(function() {
    //   s1.update(12345);
    // },
    // 1000)
    // setInterval(function() {
    //     var d = score1 += 12345;
    //     s1.update(d);
    // },
    // 3000)
    arr.push(s1);
    uid++;    
  }
  export default {
    // props: ['act','num'],
    data: function(){
      return {
        uid: 0,
        num: 0
      }
    },
    computed: {
      donated () {
        return this.$store.state.donated;
      }
    },
    watch: {
      '$store.state.stage.current': function(nv){
        setTimeout(()=>{
          arr[this.uid].update( this.donated.minutes );
        },500);
      }
    },
    mounted: function(){
      this.uid = uid;
      start(this.$refs.canvas);
      // setInterval(()=>{
      //   this.num += 12345;
      // },2000);
    },
    methods: {

    }

  }
</script>