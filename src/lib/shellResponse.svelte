<script lang="ts">
    let { command } = $props()
</script>
<div class="font-mono antialised" style="color:  var(--color-text-base)">
    {#if command === "help"}
        <pre>
Available commands:

System:
  help
  clear
  exit
  date
  banner

Navigation:
  next
  prev
  all

History:
  [↑] - previous command
  [↓] - more recent command

Customization:
  theme
  banner

Contact:
  repo
  about
  refs

</pre>
    {:else if command === "banner"}
        <pre>
#    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
#    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
#       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
#       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
#       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
#       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
#                                                              
#    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
#    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
#    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
#    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
#    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
#    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

Type 'help' to see list of available commands.</pre>
    {:else if command === "exit"}
        <pre>please close the tab window to exit</pre>
    {:else if command === "date"}
        <pre>{new Date()}</pre>
    {:else if command === "about"}
        <pre>
    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
                                                                  
    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

</pre>
<p class="w-[100ch] text-justify indent-[4ch]">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a metus purus. Mauris nec mi eu arcu sodales egestas
semper id risus. Quisque ante ipsum, varius sed est quis, congue tempus elit. Praesent ac maximus nunc. Nullam
tincidunt consectetur maximus. Morbi volutpat mattis interdum. Nullam mollis ex eget dolor elementum, sed consectetur
ligula rutrum. Etiam molestie congue consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada\
fames ac turpis egestas. Nullam tincidunt erat id congue finibus. Quisque vitae tellus iaculis, vehicula nibh ut,
malesuada ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed
volutpat augue, mollis viverra nisl. In nec mi in mi commodo blandit. 
</p>
<br>
<p class="w-[100ch] text-justify indent-[4ch]">
Donec leo tortor, bibendum tristique convallis vitae, suscipit a orci. Phasellus nec commodo arcu. Quisque ut
placerat elit. Phasellus consequat viverra mi, a pellentesque ipsum dignissim ut. Nam at mauris accumsan, dignissim
tortor id, scelerisque leo. Integer bibendum elementum aliquet. Donec vitae dictum lacus. 
</p>
<br>
<p class="w-[100ch] text-justify indent-[4ch]">
    Sed non congue nunc, et vulputate orci. Nullam cursus ut erat ac ullamcorper. Aenean scelerisque tortor tincidunt
nunc faucibus commodo. Proin eu nibh urna. Quisque tincidunt vitae tortor in commodo. Donec pretium leo a neque
molestie faucibus. Donec tincidunt, risus vitae fermentum blandit, ex erat mollis purus, non scelerisque velit est ut
dolor. Donec quis massa scelerisque, porta est ut, varius lacus. Vestibulum ut mauris mi. Praesent et magna eget
mauris semper ullamcorper rhoncus non eros. Sed semper sapien eu orci fringilla sodales. Sed euismod metus nec nulla
tincidunt imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
</p>
    {:else if command === "refs"}
<pre>
    ████████╗██╗  ██╗███████╗     █████╗ ██████╗ ████████╗    
    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝    
       ██║   ███████║█████╗      ███████║██████╔╝   ██║       
       ██║   ██╔══██║██╔══╝      ██╔══██║██╔══██╗   ██║       
       ██║   ██║  ██║███████╗    ██║  ██║██║  ██║   ██║       
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       
                                                                  
    ██╗███╗   ██╗     █████╗ ██╗     █████╗ ██████╗ ████████╗ 
    ██║████╗  ██║    ██╔══██╗██║    ██╔══██╗██╔══██╗╚══██╔══╝ 
    ██║██╔██╗ ██║    ███████║██║    ███████║██████╔╝   ██║
    ██║██║╚██╗██║    ██╔══██║██║    ██╔══██║██╔══██╗   ██║    
    ██║██║ ╚████║    ██║  ██║██║    ██║  ██║██║  ██║   ██║    
    ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     v1.0.0

</pre>
<p class="w-[100ch] text-justify indent-[4ch]">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a metus purus. Mauris nec mi eu arcu sodales egestas
semper id risus. Quisque ante ipsum, varius sed est quis, congue tempus elit. Praesent ac maximus nunc. Nullam
tincidunt consectetur maximus. Morbi volutpat mattis interdum. Nullam mollis ex eget dolor elementum, sed consectetur
ligula rutrum. Etiam molestie congue consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada\
fames ac turpis egestas. Nullam tincidunt erat id congue finibus. Quisque vitae tellus iaculis, vehicula nibh ut,
malesuada ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed
volutpat augue, mollis viverra nisl. In nec mi in mi commodo blandit. 
</p>
<br>
<p class="w-[100ch] text-justify indent-[4ch]">
Donec leo tortor, bibendum tristique convallis vitae, suscipit a orci. Phasellus nec commodo arcu. Quisque ut
placerat elit. Phasellus consequat viverra mi, a pellentesque ipsum dignissim ut. Nam at mauris accumsan, dignissim
tortor id, scelerisque leo. Integer bibendum elementum aliquet. Donec vitae dictum lacus. 
</p>
<br>
<p class="w-[100ch] text-justify indent-[4ch]">
    Sed non congue nunc, et vulputate orci. Nullam cursus ut erat ac ullamcorper. Aenean scelerisque tortor tincidunt
nunc faucibus commodo. Proin eu nibh urna. Quisque tincidunt vitae tortor in commodo. Donec pretium leo a neque
molestie faucibus. Donec tincidunt, risus vitae fermentum blandit, ex erat mollis purus, non scelerisque velit est ut
dolor. Donec quis massa scelerisque, porta est ut, varius lacus. Vestibulum ut mauris mi. Praesent et magna eget
mauris semper ullamcorper rhoncus non eros. Sed semper sapien eu orci fringilla sodales. Sed euismod metus nec nulla
tincidunt imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
</p>
    {/if}
</div>