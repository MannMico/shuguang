export default{
  toThisRoute(toThis) {
    if (toThis) {
      this.$router.push({
        path: `/${toThis}`
      });
    } else {
      this.$router.push({
        path: '/'
      });
    }
  }
}