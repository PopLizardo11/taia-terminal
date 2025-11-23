<script lang="ts">
    import ShellPrompt from "$lib/shellPrompt.svelte";

    const themes = ["default", "hackerman", "githubdark", "synthwave", "dracula", "gruvboxdark"]
</script>
<div id="bg-container" class="h-screen w-screen flex items-center justify-center p-8" style="background-color: var(--color-bg-primary)">
    <div id="term-interface" class="block w-full h-full border-2 rounded-xl box-border p-5 overflow-auto" style="border-color: var(--color-secondary)">
        <ShellPrompt/>
    </div>
</div>
