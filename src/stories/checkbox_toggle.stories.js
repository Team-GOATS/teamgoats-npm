import Prototype2 from '../components/prototype-2/checkbox_toggle.svelte'

export default {
    component: Prototype2,
    tags: ['autodocs'],
};


export const Primary = {
    render: (args) => ({
        Component: Prototype2,
        props: args
    }),
    // Underneath is our Props for us to interact with
    args: {

    }
};