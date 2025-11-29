<script lang="ts">
    import { onMount } from "svelte";    
    import ShellPrompt from "$lib/shellPrompt.svelte";
    import ShellResponse from "$lib/shellResponse.svelte";

    let mounted = false;
    let pendingTheme: any = null;
    let collProg: number = $state(0);

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
<div id="bg-container" 
class="h-screen w-screen flex items-center justify-center p-8 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
    <div id="term-interface" class="block w-full h-full border-2 rounded-xl box-border p-5 overflow-auto scroll-smooth" style="border-color: var(--color-secondary)">
        {#each termBlocks as block}
            {#if block.type === "prompt"}
                <ShellPrompt bind:termBlocks={termBlocks} command={block.command} isDone={block.isDone} onThemeChange={handleThemeChange} bind:collProg={collProg}/>
            {:else if block.type === "response"}
                <ShellResponse command={block.command} {collProg}/>
            {/if}
        {/each}
    </div>
</div>
