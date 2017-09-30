<template>
  <a class="box">		
    <img class="cover" src="src/images/item.png" alt="">
    <div class="first">
      <p>逆天九小姐：帝尊</p>
      <span>水清竹</span>
    </div>
    <img class="second" src="src/images/leaf.png" alt="">
  </a>
</template>
<style lang="sass" scoped>
  *{
    margin: 0;
    padding: 0;
    font-size: .24rem;
  }
  :root {
    --mainColor: blue;
    --danger-theme: {
      color: white;
      background-color: blue;
    };
  }
  .box{
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center; 
    margin: 1rem auto;
    background-color: skyblue;
    & .cover{
      width: 1rem;
      height: 1rem;
    }
    & .first{
      flex: 1;
      height: 1rem;
      background-color: orangered;
      /*color: var(--mainColor);*/
      @apply --danger-theme;
    }
    & .second{
      width: 1rem;
      height: 1rem;
    }
  }
</style>
<script>
  export default{

  }
</script>
