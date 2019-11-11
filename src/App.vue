<template>
  <div id="app">
    Vue app running...
    check vuex store from devtools
    <p>is parent Module Dynamically registered? {{ isParentRegistered }}</p>
    <p>is child Module Dynamically registered? {{ isChildRegistered }}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import DynamicRegister from './components/mixins/DynamicRegister';

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },
  mixins: [DynamicRegister],
  computed: {
    isParentRegistered() {
      return !!this.$store._modulesNamespaceMap['nested-parent/'];
    },
    isChildRegistered() {
      return !!this.$store._modulesNamespaceMap['nested-parent/child/'];
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
