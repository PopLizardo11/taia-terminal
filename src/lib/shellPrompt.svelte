<script lang="ts">
    let input: any;
    let name: string = $state("guest");
    let { termBlocks = $bindable(), command = $bindable(), isDone = $bindable() } = $props();

    function setFocus() {
        input.focus();
    }

    function resizeInput() {
        input.style.width = (input.value.length + 1) + "ch";
    }

    let themes: readonly string[] = ["default", "abyss", "amber", "arctic", "coffee", "cosmic", "cyberpunk", "forest", "synthwave", "toxic"];
    let commands: readonly string[] = ["help", "clear", "exit", "date", "banner", "next", "prev", "all", "theme", "repo", "about", "refs", ];

    function callCommand(curr: any) {
        let text = curr.value.trim();
        termBlocks.push({type: "response", command: text});
        isDone = true
        termBlocks.push({type: "prompt", command: "", isDone:false})
    }
</script>

<div class="font-mono font-bold antialised" style="color:  var(--color-text-base)">
    <form onsubmit={e => {
        e.preventDefault();
        callCommand(input);
    }}>
        <span style="color: var(--color-tertiary)">{name}</span><span>@</span><span style="color:var(--color-secondary)">term.taia.dev</span><span></span><span>:~$</span>
        <br>
        <span>&gt;</span> <input type="text" bind:this={input} oninput={resizeInput} onblur={setFocus} autofocus disabled={isDone} bind:value={command}>
    </form>
</div>

<style>
    span {
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    input {
        width: 7ch;
        max-width: 100%;
        outline: none;
    }
</style>