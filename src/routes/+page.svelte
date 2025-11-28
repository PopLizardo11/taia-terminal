<script lang="ts">
    import ShellPrompt from "$lib/shellPrompt.svelte";
    import ShellResponse from "$lib/shellResponse.svelte";

    let termBlocks: any[] = [
        {type: "prompt", input: "banner"},
        {type: "shellRes", command: "banner"},
        {type: "prompt", input: ""},
        {type: "shellRes", command: "help"},
    ]
</script>
<div id="bg-container" class="h-screen w-screen flex items-center justify-center p-8" style="background-color: var(--color-bg-primary)">
    <div id="term-interface" class="block w-full h-full border-2 rounded-xl box-border p-5 overflow-auto" style="border-color: var(--color-secondary)">
        {#each termBlocks as block}
            {#if block.type === "prompt"}
                <ShellPrompt/>
            {:else if block.type === "shellRes"}
                <ShellResponse command={block.command}/>
            {/if}
        {/each}
    </div>
</div>
