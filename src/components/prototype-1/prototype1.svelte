<script>    

    // Simply importing the store, this will be within the same file soon
    import { theme } from "./store";

    // Store the 'theme' Key and its Value
    let storedTheme = localStorage.getItem("theme")

    // Check to see if 'dark' is the current storedTheme, then changing it to 'light'
    // ELSE change the storedTheme to 'dark'
    function toggle(){
        if (storedTheme === "dark") {
            storedTheme = "light"
        } else {
            storedTheme = "dark"     
        }
    }

    // ------------- OUR PROP VARIABLES -----------
    // Unchecked / light
    export let unCheckedLabel;
    // Checked / dark
    export let checkedLabel;
    // Unchecked Theme
    export let unCheckedTheme;
    // Unchecked Theme
    export let checkedTheme;
</script>

<main>
    <h1>Theme: {$theme}</h1>

    <!-- Using .set alerts any subscibers (such as those in the store.js) of any changes -->
    <div class="toggle-switch">

    <br/>

        {#if storedTheme === "dark"}
        <!-- Unchecked / Light Button -->
        <button class={unCheckedTheme}
            on:click={() => theme.set('light')}
            on:click={toggle}
            >
            {unCheckedLabel}
        </button>

        {:else}
        <!-- Checked / Dark Button -->
        <button class={checkedTheme}
            on:click={() => theme.set('dark')}
            on:click={toggle}
            >
            {checkedLabel}
        </button>
        {/if}

    </div>
</main>

<style>
button {
    border-radius: 20px;
    padding: 0.5em;
}
button:hover {
    cursor: pointer;
    filter: brightness(0.5);
}

/* Button Styling for User */
.pinkTheme{
    background-color: rgb(220, 70, 207);
}

.redTheme{
    background-color: rgb(243, 44, 44);
    color: white;;
}

.greenTheme {
    background-color: rgb(22, 189, 22);
}

</style>