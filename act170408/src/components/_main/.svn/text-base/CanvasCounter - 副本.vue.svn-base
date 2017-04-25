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

    var Score = function(el,fontSize,fontWidth) {
      this.canvas = el;
      this.fontSize = fontSize || "18";
      this.fontWidth = fontWidth || 18; 
      this.ctx = this.canvas.getContext("2d");
      this.w =  this.canvas.width;
      this.h = this.canvas.height;
      this.plates = [null, null, null, null, null, null, null, null, null],
      this.number = "000000000";
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
            this.plates[i] = new Plate(this, parseInt(arr_old[i]), parseInt(arr_new[i]), this.fontWidth*(i), 1.5, 65);
          }else{
            // the old digit is 0
            this.plates[i] = new Plate(this, 0, 0, this.fontWidth*(i), 9 - i, 65);
          }
        }
        this.number = new_val;
      },
      draw: function() {
        var self = this;
        this.stimer = requestAnimFrame(function() {
          self.draw();
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

  var Plate = function(cv, ov, nv, x, speed, h) {
    this.cv = cv;
    this.ov = ov;// the old value
    this.nv = nv;// the new value
    // height
    this.h = h;
    this.x = x;//ºá×ø±ê
    this.y = -( 4*this.h ) - 8;
    // height of one number
    this.speed = speed;//×ª¶¯ËÙ¶È
    // the numbers
    this.nubs = [];
    this.__init();
  }
  Plate.prototype = {
    __init: function() {
      this.nubs[5] = this.ov;
      for (var i = 6; i < 10; i++) {
        this.nubs[i] = this.nubs[i - 1] === 0 ? 9 : this.nubs[i - 1] - 1;
      }
      for (var i = 4; i >= 0; i--) {
        this.nubs[i] = this.nubs[i + 1] === 9 ? 0 : this.nubs[i + 1] + 1;
      }
    },
    draw: function( fontSize ) {
      var ctx = this.cv.ctx;
      ctx.save();
      ctx.font = '600 ' + fontSize + 'px arial';
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
        var _y = this.y + i * this.h;
        if (_y > 0 && _y < 130) {
          ctx.fillText( a, this.x+16, _y );
        }
      })
      ctx.restore();
    },
    step: function() {
      if (this.nv !== this.nubs[5]) {
        this.y += 7.5 / this.speed;
        if ((this.h * 4 + 8 + this.y) == this.h) {
          this.nubs.splice(0, 0, this.nubs.pop());
          this.y = -this.h * 4 - 8;
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
    s1.update(score1);
    s1.draw();
    // setInterval(function() {
    //     var d = score1 += 9234;
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