
export default {
  name: 'SchemaRenderVue',
  props: {
   /**
     * The JSON Schema object.
     *
     * @default {}
     */
    schema: { type: Object, default: () => ({}) },
    /**
     * custom component list
     * @default {}
     */
    components: {
      type: Object,
      default: () => {}
    }
  },
  render(h) {
    const { component, attributes, children } = this.schema;
    const { label } = attributes;
    let nodes = [];
    if(children && children instanceof Array && children.length) {
      nodes = this.getRender(h, children);
    }
    // Displays the label if there is no child element
    nodes = nodes && nodes.length ? nodes : label;
    return h(this.components[component] || component, { ...attributes }, nodes)
  },
  methods: {
    /**
     * 
     * @param {function} h createElement function
     * @param {Array} children 子元素数组列表
     */
    getRender (h, children) {
      const arr = children.map(childItem => {
        const { children: child, component: childComp, attributes: childAttrs } = childItem;
        const { label } = childAttrs;
        let nodes = [];
        if (child) {
          nodes = this.getRender(h, child);
        }
        // Displays the label if there is no child element
        nodes = nodes && nodes.length ? nodes : label;
        return h(this.components[childComp] || childComp, { ...childAttrs }, nodes);
      })
      return arr;
    }
    
  }
}