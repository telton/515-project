<template>
  <form action="#" method="POST">
    <input type="file" name="meme" accept="image">
    <button type="submit">Upload</button>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
