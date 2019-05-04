<template>
  <div class="footer">
    <div class="container row">
      <div class="copyright col-lg-4 col-md-4 col-sm-12">Copyright</div>
      <div class="fact col-lg-4 col-md-4 col-sm-12">
        Working out sharpens your memory
      </div>
      <div class="author col-lg-4 col-md-4 col-sm-12">
        <span class="bold">Workout Lovers</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.copyright {
  text-align: left;
}
.fact {
  text-align: center;
}
.author {
  text-align: right;
}

@media only screen and (max-width: 600px) {
  .fact,
  .copyright,
  .author {
    text-align: center;
  }
}
</style>
