<script lang="ts">
    let input: any;
    let name: string = $state("guest");

    function setFocus() {
        input.focus();
    }

    function resizeInput() {
        input.style.width = (input.value.length + 1) + "ch"
    }

    let themes: string[] = ["default", "abyss", "amber", "arctic", "coffee", "cosmic", "cyberpunk", "forest", "synthwave", "toxic"]
    let commands: string[] = ["help", "clear", "exit", "date", "banner", "coll", "theme", "contacts", "repo", "why"]

    let terminalFeed: any[] = [
        {type: "prompt", input: "banner"},
        {type: "output", command: ["banner", ""]}
    ]
</script>

<div class="font-mono font-bold anitialised" style="color:  var(--color-text-base)">
    <span style="color: var(--color-tertiary)">{name}</span><span>@</span><span style="color:var(--color-secondary)">term.aiaia.dev</span><span></span><span>:~$</span>
    <br>
    <span>&gt;</span> <input type="text" bind:this={input} onblur={setFocus} oninput={resizeInput} autofocus>
</div>

<style>
    span {
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    input {
        width: 1ch;
        max-width: 100%;
        outline: none;
    }
</style>