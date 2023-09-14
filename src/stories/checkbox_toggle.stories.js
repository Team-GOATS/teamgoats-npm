import Prototype2 from '../components/prototype-2/checkbox_toggle.svelte'

export default {
    title: 'Stories/checkbox_toggle',
    component: Prototype2,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },

};

export const Primary = {
    args: {
        Primary: true,
        Component: Prototype2,
    },
};
