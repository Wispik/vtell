<template>
  <div class="progress">
    <div class="progress__line">
      <div
        class="progress__line-success"
        :style="{'width': `${successWidth}%`}" 
      ></div>
    </div>
    <div class="progess__info">
      <span>$0.00</span>
      <span 
        class="price-pos"
        :style="{'left': `${successWidth}%`}" 
      >
        $123.00
      </span>
      <img src="@/assets/images/inf.png">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successWidth: 30
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 80px;

  @media (max-width: 980px) {
    margin-bottom: 40px;
  }
}
.progress__line {
  border-radius: 36px;
  height: 10px;
  width: 100%;
  background: $red-color;
  position: relative;
}
.progress__line-success {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  background: $green-color;
  border-radius: 36px;
}
.progess__info {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;

  & > img {
    margin-left: auto;
  }
}
.price-pos {
  position: absolute;
  top: 0;
}
</style>