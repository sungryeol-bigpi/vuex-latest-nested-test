import parentStore from '../../store/parent';

export default {
  beforeMount() {
    console.log('module is dynamically registered');
    this.$store.registerModule('nested-parent', parentStore);
  },
  beforeDestroy() {
    this.$store.unregisterModule('nested-parent');
  },
};
