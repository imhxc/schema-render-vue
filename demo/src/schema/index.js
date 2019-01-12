export default {
  component: 'div',
  attributes: {
    name: 'setp2',
  },
  children: [
    {
      component: 'Button',
      attributes: {
        props: {
          size: 'large',
          type: 'error',
          long: true
        },
        label: '按钮'
      },
    },
    {
      component: 'UserAvatar',
      attributes: {}
    },
    {
      component: 'Steps',
      attributes: {},
      children: [
        {
          component: 'Step',
          attributes: {
            props: {
              title: "已完成",
              content: "这里是该步骤的描述信息"
            }
          },
        },
        {
          component: 'Step',
          attributes: {
            props: {
              title: "进行中",
              content: "这里是该步骤的描述信息"
            }
          },
        },
        {
          component: 'Step',
          attributes: {
            props: {
              title: "已完成",
              content: "这里是该步骤的描述信息"
            }
          },
        },
        {
          component: 'Step',
          attributes: {
            props: {
              title: '待进行',
              content: '这里是该步骤的描述信息'
            }
          },
        }
      ]
    }
  ]
}