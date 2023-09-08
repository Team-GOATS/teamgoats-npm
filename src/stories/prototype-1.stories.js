import prototype1 from '../components/prototype-1/prototype1.svelte'

export default {
    component: prototype1,
    tags: ['autodocs'],
};
export const Primary = {
    render: (args) => ({
        Component: prototype1,
        props: args
    }),
    // Underneath is our Props for us to interact with
    args: {
        unCheckedLabel: 'unChecked',
        checkedLabel: "checked",
        unCheckedTheme: "pinkTheme",
        checkedTheme: "redTheme"
    }
}



