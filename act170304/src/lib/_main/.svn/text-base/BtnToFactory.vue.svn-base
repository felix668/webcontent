<template>
  <img class="BtnToFactory" 
  :src=" img+'/main/to_factory.png' "
  :class=" pressed?'pressed':'' "
  @touchstart="touchstart"
  @touchmove="touchmove"
  @touchend="touchend"
  @touchcancel="touchcancel"/>
</template>

<style lang="less" scoped>
	.BtnToFactory {
    width: 5.28rem;
    margin: auto; margin-bottom: 1rem;
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
					this.$store.dispatch({type:'TO_FACTORY'});
				};
				this.pressed = false;
			},
			touchcancel: function(){
				this.pressed = false;
			}
		}
	}
</script>