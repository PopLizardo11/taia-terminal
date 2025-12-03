<script lang="ts">
    let input: any;
    let name: string = $state("guest");
    let { termBlocks = $bindable(), command = $bindable(), isDone = $bindable(), onThemeChange, collProg = $bindable()} = $props();

    function setFocus() {
        input.focus();
    }

    function resizeInput() {
        input.style.width = (input.value.length + 1) + "ch";
    }

    let commands: readonly string[] = ["help", "clear", "exit", "date", "banner", "next", "prev", "all", "theme", "repo", "about", "refs", ];
    let themes: readonly string[] = ["default", "abyss", "amber", "arctic", "coffee", "cosmic", "cyberpunk", "forest", "synthwave", "toxic"];

    function callCommand(curr: any) {
        let text = curr.value.trim();
        let textArr = text.split(" ").filter((word: string) => word !== "");
        text = textArr.join(" ");
        if (text === "clear") {
            termBlocks = [{isDone: false}] // this is a weird bug (only autofocus when there is an isDone:false)
            termBlocks.push = termBlocks.push({type: "prompt", command: "", isDone:false});
            return
        }
        if (text === "next" && collProg < 8) {
            collProg++
            text = collProg 
        } 
        if (text === "prev" && collProg > 0) {
            collProg--
            text = collProg 
        } 
                switch(collProg) {
            case 0:
                onThemeChange("default")
                break;
            case 1:
                onThemeChange("coffee")
                break;
            case 2: 
                onThemeChange("arctic")
                break;
            case 3: 
                onThemeChange("synthwave")
                break; 
            case 4: 
                onThemeChange("cosmic")
                break;
            case 5: 
                onThemeChange("forest")
                break;
            case 6: 
                onThemeChange("cyberpunk")
                break;
            case 7: 
                onThemeChange("abyss")
                break;
            case 8: 
                onThemeChange("amber")
                break;
        }
        if (textArr[0] === "theme" && textArr.length == 2) {
            if (textArr[1] !== "ls" && themes.includes(textArr[1])) {
                onThemeChange(textArr[1])
        }}
        termBlocks.push({type: "response", command: text});
        isDone = true;
        termBlocks.push({type: "prompt", command: "", isDone:false});
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
