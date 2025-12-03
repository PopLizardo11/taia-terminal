<script lang="ts">
    let { command, collProg = $bindable() } = $props()
    let themes: readonly string[] = ["default", "abyss", "amber", "arctic", "coffee", "cosmic", "cyberpunk", "forest", "synthwave", "toxic"];
</script>
<div class="font-mono antialised flex-col" style="color:  var(--color-text-base)">
    {#if command === "help"}
        <pre>
Available commands:

System:
  help
  clear
  exit
  date

Navigation:
  next
  prev

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

Type 'help' to see list of available commands.
Type 'next' to proceed through the collection.</pre>
    {:else if command === "exit"}
        <pre>please close the tab window to exit</pre>
    {:else if command === "date"}
        <pre>{new Date()}</pre>
    {:else if command === "theme"}
        <pre>
Usage: theme [args]
  ls: list all available themes
  [theme]: set your theme of choice from the theme list

[Examples]:
  theme ls
  theme cyberpunk </pre>
  {:else if command === "theme ls"}
        <pre>Theme list:
- default 
- abyss
- amber
- arctic
- coffee 
- cosmic 
- cyberpunk
- forest
- synthwave
- toxic</pre>
  {:else if themes.includes((command + " ").split(" ")[1])} <!--Changed string to other form-->
        <pre>Theme successfully changed to {command.split(" ")[1]}</pre>
  {:else if command === 0}
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

Type 'help' to see list of available commands.
Type 'next' to proceed through the collection.</pre>
  {:else if command === 1}
  <div class="block-con">
          <div class="img-con">
            <img src="src/lib/assets/imgs /img1.jpg" alt="" id="img1">
          </div>
          <p class="w-[100ch] text-justify indent-[4ch]">
  <i>What is art?</i> This already blurry line has become more blurred out with the rise of generative artificial intelligence where “creativity” from a machine can match those of a human. The piece above was intended to serve as a reminder that even with the seemingly increasing number of machine made art, it is still noteworthy to remember the importance of the human spirit that is embedded in the art we create.  Ironically, just like how the message is held by a robot in the image, the artwork itself is AI Generated. Its self-contradicting nature mirrors the tension society is currently experiencing as we rethink what AI-made art really means. 
  </p>
</div>
  {:else if command === 2}
  <div class="block-con">
        <div class="iframe-con">
          <iframe width="570.75" height="321" src="https://www.youtube.com/embed/gYbFUM6gB7Q" title="Tralalero Tralala vs Bombardino Crocodilo BATTLE ALL FIGHTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
          <p class="w-[100ch] text-justify indent-[4ch]">
  "Tralalero tralala vs Bombardino Crocodilo" is one of the most well-known piece of media that AI has brought in the internet. It is one of the few many that popped up in what is collectively known in internet culture as brainrot. Brainrot is characterized by low quality and addictive medias with the idea of it preoccupying one's mind to the point of mental deterioration of the audience. It brought significant contributions to how we view AI art as of today. In a way, it can be seen as the first informal art movement brought by the spread of artificial intelligence. 
  </p>
</div>
  {:else if command === 3}
        <iframe width="570.75" height="321" src="https://www.youtube.com/embed/cZiEtknJ5KE" title="Nouvelle Story - She Said I&#39;m Gloomy 「Remastered」" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p class="w-[100ch] text-justify indent-[4ch]">
"She said I'm Gloomy" by Nouvelle Story is an instrumental music which in itself is purely made by a human. Its cover photo as seen in the thumbnail however is an AI Generated artwork as confirmed by its creator. One can expect that it would receive backlash due to this but the internet argued that practicality wise, AI art like this help out small artist to be discovered. This example highlights AI art not as a replacement as most would fear it but as a tool, as something that we can leverage to improve and show the world the marvels of our own  creativity. 
</p>
  {:else if command === 4}
        <iframe width="570.75" height="321" src="https://www.youtube.com/embed/E5h2kta9EE8" title="Frank Sinatra (A.I Cover) - &#39;Five Nights at Freddy&#39;s&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p class="w-[100ch] text-justify indent-[4ch]">
This is an AI rendition of the song "Five Nights at Freddy's" as how it would be sang by Frank Sinatra in 1970s. This piece unlike the previous one uses AI in the music creation process by using a machine-generated Frank Sinatra's voice to sing a video game inspired song. While some may view this as a form of digital impersonation or even plagiarism, its difficult to deny that AI also opens up possibilities in enabling us to explore more and put our imaginations to reality. The piece hihglights that despite the ethical concerns towards the use of AI in art, what it creates can still count as art.
</p>
  {:else if command === 5}
      <div id="img-con5">
        <img src="src/lib/assets/imgs /img5.jpg" alt="">
      </div>
        <p class="w-[100ch] text-justify indent-[4ch]">
"AI God: Portrait of Alan Turing" is an AI robot's painting of one of computer science's important figures that has been sold for $1.08 million becoming to what has yet to be the most valuable AI made art. The person painted, Alan Turing, laid the foundations for the development of early computers which in return helped to go to what we have today in the form of artificial intelligence. The portrait can be seen as a creation's homage to its old long gone creator grateful to what it has become today. The piece is also one the major leaps of AI art as it penetrates the field of high art, a space long defined by exclusivity, tradition, and human craft. Its acceptance in the "elite level" could be attributed to the increasing number of young collectors which are more familiar and open to the technology, another effect of the everchanging elements of art circulation. 
</p>
  {:else if command === 6}
        <iframe width="570.75" height="321" src="https://www.youtube.com/embed/wY_K5El781E" title="Step into the world of Chingu Cafe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p class="w-[100ch] text-justify indent-[4ch]">
The ability of artificial intelligence to generate fast, quality visuals in mass quantities quickly caught the attention of corporations, an unsurprising occurence given the capitalism based system of our society. NutriAsia’s Chingu Café advertisement stands as one of the earliest and most prominent commercial uses of AI-generated imagery in the Philippines. Most of the people who watched AI made advertisements point out its lazy and greedy nature and how it affects real-world artists in getting jobs. Additionally, It can also be seen as one of the first attempts of commodifying AI art as how it is used solely for the sake of cutting cost and gaining more profit. 
</p>
  {:else if command === 7}
      <div id="img-con10">
        <img src="src/lib/assets/imgs /img9.jpg" alt="">
      </div>
        <p class="w-[100ch] text-justify indent-[4ch]">
The political nature of art is one of its most interesting characteristics as it shows that it has real bearing on real-world events and does not exist solely for the purpose of just being an art. Above is an AI generated editorial cartoon posted by Manila Bulletin in their facebook page which received a lack of backlash from the internet. Even though the reasons for criticisms are valid mostly talking about the livelihood of editorial cartoonist and effect of AI on climate change, the hate on AI Art has led for the message of the editorial cartoon to be lost. 
</p>
  {:else if command === 8}
        <p class="w-[100ch] text-justify indent-[4ch]">
AI art has proven to be one of the most difficult challenges present in the current state of art in the modern world. Despite the ethical concerns and problems it has brought, its hard to deny that it allows us to expand our capabilities to express ourselves more in ways we cannot before. If used correctly, AI acts as a modern paintbrush that allows those who struggle with the craft of artmaking create art as it is something that should not be only exclusive to those who have the skills only. Like any other forms or art, AI art is not immune to the everchanging landscape of the world and whatever changes may occur on the arts might be as well a reflection of what is happening in the real world. The rise of AI artificial have brought upon a new perspective on art which by denying it can result for us on having a narrower view on its effects. Afterall, art should not be only classified as something that humans create but also as the ones that creates us. 
</p>
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
This terminal app serves as the home for The Art in AI Art, a small curatorial exhibition presented through a stripped-down, code-driven interface. Instead of the usual gallery walls, everything unfolds in a command-line space—letting the ideas behind each piece stand on their own, without polish or pretense. It’s a quieter, more deliberate way to explore how AI-generated images fit into the wider conversation about creativity, authorship, and what we choose to call art. ^^
</p>
<br>
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
<pre>
“A.I. God. Portrait of Alan Turing | Digital Art Day Auction | Contemporary NFT | Sotheby’s.” Sotheby’s, www.sothebys.com/en/buy/auction/2024/digital-art-day-auction-2/a-i-god-portrait-of-alan-turing.

Manila Bulletin. “Dangerous crests.” Facebook.com, Aug. 2025, www.facebook.com/ManilaStandardPH/posts/opinionaited-august-2-2025-dangerous-crestsprompt-generate-a-political-cartoon-i/1195403229298618. Accessed 3 Dec. 2025.

UnionPacifik. “People really hate on AI art.” Reddit.com, 2023, www.reddit.com/r/ChatGPT/comments/171phbq/people_really_hate_on_ai_art. Accessed 3 Dec. 2025.
</pre>
<br>
{:else}
<p>{command}: command not found</p>
    {/if}
</div>

<style>
  .img-con {
    width: 420px;
    height: 355px;
  }

  iframe {
    margin-bottom: 15px;
    margin-top: 15px;
    border-radius: 15px ;
    transform: scale(0.90);
  }

  .block-con {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px ;
    transform: scale(0.90);
  }

  #img1 {
    object-position: top;
    transform: scale(0.90);
  }

  p {
    margin-bottom: 5px;
  }

  #img-con5 {
    width: 500px;
    height: 330px;
  }

  /* #img-con9 {
    width: 500px;
    height: 330px;
  } */
  #img-con10 {
    width: 500px;
    height: 330px;
  }
</style>