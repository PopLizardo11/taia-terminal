<script lang="ts">
    import { onMount } from "svelte";    
    import ShellPrompt from "$lib/shellPrompt.svelte";
    import ShellResponse from "$lib/shellResponse.svelte";

    let mounted = false;
    let pendingTheme: any = null;

    function handleThemeChange(theme: string) {
        if (mounted) {
            document.body.setAttribute("data-theme", theme)
        } else {
            pendingTheme = theme;
        }   
    }

    onMount( () => {
        mounted = true;
        if (pendingTheme) {
            document.body.setAttribute("data-theme", pendingTheme);
        }
    });

    let termBlocks: any[] = $state([
        {type: "prompt", command: "banner", isDone:true},
        {type: "response", command: "banner"},
        {type: "prompt", command: "", isDone:false}
    ])
</script>
<div id="bg-container" class="h-screen w-screen flex items-center justify-center p-8" style="background-color: var(--color-bg-primary)">
    <div id="term-interface" class="block w-full h-full border-2 rounded-xl box-border p-5 overflow-auto scroll-smooth" style="border-color: var(--color-secondary)">
        {#each termBlocks as block}
            {#if block.type === "prompt"}
                <ShellPrompt bind:termBlocks={termBlocks} command={block.command} isDone={block.isDone} onThemeChange={handleThemeChange} />
            {:else if block.type === "response"}
                <ShellResponse command={block.command}/>
            {/if}
        {/each}
    </div>
</div>
