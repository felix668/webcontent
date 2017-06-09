<style lang="less" scoped>
  .CanvasCard {
    display: table;
    position: relative;
    padding: 0.1rem;
    border-radius: 0.1rem;
    background: #87b694;
    margin: auto;
    margin-bottom: 0.64rem;
    .scrapable {
      position: relative;
      width: 6.34rem; height: 1.9rem;
      background: #f5f6dd;
      .taken_before, .prize {
        width: 100%; height: 100%;
        overflow: hidden;
        .p0 {
          font-size: 0.48rem; font-weight: 600;
          text-align: center;
          color: #ef7159;
          margin-top: 0.38rem; margin-bottom: 0.16rem
        }
        .p1 {
          font-size: 0.28rem;
          color: #666666;
          text-align: center;
        }
      }
      .out {
        width: 100%; height: 100%;
        font-size: 0.48rem; font-weight: 600;
        text-align: center; color: #666666;
        line-height: 1.9rem;
      }
      .overlay {
        position: absolute; left: 0; top: 0;
        width: 100%;
      }
    }
  }
</style>

<template>
  <div class="CanvasCard">
    <div class="scrapable">
      
      <div class="taken_before"
      v-show=" data.takenBefore===true ">
        <p class="p0">
          您已获得{{data.bills_taken}}{{name_bill}}
        </p>
        <p class="p1">
          可去我的账户查看
        </p>
      </div>
      <div class="out"
      v-show=" data.takenBefore===false&&data.out===true ">
        很遗憾奖品已被抢完
      </div>
      
      <div class="prize"
      v-show=" data.takenBefore===false&&data.bills_taken>0 ">
        <p class="p0">
          恭喜获得{{data.bills_taken}}{{name_bill}}
        </p>
        <p class="p1">
          可去我的账户查看
        </p>
      </div>
      <div class="out"
      v-show=" data.takenBefore===false&&data.bills_taken===-1 ">
        很遗憾奖品已被抢完
      </div>

      <canvas ref="canvas" class="overlay"
      v-show=" data.out===false && data.takenBefore===false "
      width="634" height="190"></canvas>
    </div>
  </div>
</template>

<script type="text/javascript">
  import REM from '../../common/rem.js';
  export default {
    computed: {
      name_bill() {
        return this.$store.getters.name_bill;
      },
      data() {
        return this.$store.state.data;
      },
      meta() {
        return this.$store.state.meta;
      }
    },
    mounted: function() {
      var el = this.$refs.canvas;
      var rem;
      var ctx = el.getContext('2d');
      var img = new Image();
      img.src = './img/main/overlay_'+this.meta.platform+'.png';
      img.onload = function() {
        REM.update();
      }

      REM.on('updated', () => {
        rem = REM.getRem();
        el.setAttribute('width', 6.34*rem);
        el.setAttribute('height', 1.9*rem);

        ctx.beginPath();
        ctx.drawImage(img, 0, 0, 6.34*rem, 1.9*rem);
        // ctx.rect(0, 0, 6.34*rem, 1.9*rem);
        // ctx.beginPath();
        // ctx.fillStyle = 'grey';
        // ctx.rect(0, 0, el.width, el.height);
        ctx.fill();
        // ctx.globalCompositeOperation = 'destination-out';
        // el.style.cssText += `width: ${6.34*rem}px; height: ${1.9*rem}px;`;
      });
      REM.update();
      
      var offsetLeft = null;
      var offsetTop = null;

      function getOffset(key ,el) {
        var offset = 0;
        function add(el) {
          offset += el['offset'+key];
          if (el.offsetParent) {
            add(el.offsetParent);
          }
        }
        add(el);
        return offset;
      }

      el.addEventListener('touchstart', (e) => {
        if (this.data.state === 'pending') {
          return;
        } else if (this.data.canScrape === false) {
          this.$store.dispatch({
            type: 'TRY_TAKE'
          })
        } else {
          if (offsetLeft === null) {
            offsetLeft = getOffset('Left', el);
            offsetTop = getOffset('Top', el);
          }
          // console.log(offsetTop)
          // console.log(e.changedTouches[0])
          ctx.globalCompositeOperation = 'destination-out';
          let x = e.changedTouches[0].pageX - offsetLeft;
          let y = e.changedTouches[0].pageY - offsetTop;
          ctx.beginPath();
          ctx.fillStyle = 'red';
          ctx.arc(x, y, 0.5*rem, 0, Math.PI * 2, true);
          ctx.fill();
        }
      
      })
      el.addEventListener('touchmove', (e) => {
        if (this.data.canScrape === true) {
          // e.preventDefault();
          // ctx.globalCompositeOperation = 'destination-out';
          let x = e.changedTouches[0].pageX - offsetLeft;
          let y = e.changedTouches[0].pageY - offsetTop;
          ctx.beginPath();
          ctx.fillStyle = 'red';
          ctx.arc(x, y, 0.5*rem, 0, Math.PI * 2, true);
          ctx.fill();
        }
      })
      var Card = Canvas.extend({
        data() {
          return {}
        },
        beforePlay() {

        },
        render() {
          
        }
      })
      // new Card({
      //   el: this.$refs.canvas,

      // })
    }
  }
</script>