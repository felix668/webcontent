<template>
  <img class="BtnShare" :src=" img+'main/btn_share.png' "
  v-show="share_btn.show===true"
  :class=" pressed?'pressed':'' "
  @touchstart="touchstart"
  @touchmove="touchmove"
  @touchend="touchend"
  @touchcancel="touchcancel"/>
</template>

<style lang="less" scoped>
	.BtnShare {
    position: fixed; right: 0.96rem; bottom: 2.3rem;
    width: 1.17rem;
    z-index: 100;
    transition-property: transform;
    transition-duration: 0.5s;
    transform: scale(1);
		&.pressed {
      transform: scale(0.9);
		}
	}
</style>

<script type="text/javascript">
	export default {
    computed: {
      pic(){
        return this.$store.state.pic;
      },
      share_btn(){
        return this.$store.state.share_btn;
      },
      img(){
        return this.$store.state.img;
      }
    },
		data: function(){
			return {
				pressed: false
			}
		},
		methods: {
			touchstart: function(){
				this.pressed = true;
			},
			touchmove: function(){
				this.pressed = false;
			},
			touchend: function(){
				if( this.pressed ){
					this.$store.dispatch({type:'SHARE_PIC'});
				};
				this.pressed = false;
			},
			touchcancel: function(){
				this.pressed = false;
			}
		}
	}
</script>