<script lang="ts">
    let input: any;
    let name = $state("guest");

    function setFocus() {
        input.focus();
    }

    function resizeInput() {
        input.style.width = (input.value.length + 1) + "ch"
    }
</script>

<div class="font-mono font-bold anitialised" style="color:  var(--color-text-base)">
    <span style="color: var(--color-tertiary)">{name}</span><span>@</span><span style="color:var(--color-secondary)">term.taia.dev</span><span></span><span>:~$</span>
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