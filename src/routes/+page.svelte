<script lang="ts">
    import ShellPrompt from "$lib/shellPrompt.svelte";
    import ShellResponse from "$lib/shellResponse.svelte";

    let termBlocks: any[] = $state([
        {type: "prompt", command: "banner", isDone:true},
        {type: "response", command: "banner"},
        {type: "prompt", command: "", isDone:false}
    ])
</script>
<div id="bg-container" class="h-screen w-screen flex items-center justify-center p-8" style="background-color: var(--color-bg-primary)">
    <div id="term-interface" class="block w-full h-full border-2 rounded-xl box-border p-5 overflow-auto" style="border-color: var(--color-secondary)">
        {#each termBlocks as block, i}
            {#if block.type === "prompt"}
                <ShellPrompt bind:termBlocks={termBlocks} command={block.command} isDone={block.isDone}/>
            {:else if block.type === "response"}
                <ShellResponse command={block.command}/>
            {:else if block.type === "response"}
                <ShellResponse command={block.command}/>
            {/if}
        {/each}
    </div>
</div>
