# RockPaperScissors
First attempt at a Rock Paper Scissors game using Javascript

I attempted to go for a forest/woodsy theme. I'm not sure why you'd find scissors or paper
in a forest, but hopefully the user can suspend their disbelief for that.

This was a good first project for me to practice integrating javascript into html/css. Very simple,
but I think the use of clickable buttons and injecting text here and there will stick with me and be
useful in the future.

Biggest hurdle: I was using () when referencing functions for .addEventListener, which created the big
problem of having the referenced function run when I didn't want it to! This could have been avoided
probably just by reading the documentation a bit more closely, but I chose to learn this one the hard
way, so hopefully it sticks!

I thought the "Play Again?" button would require a lot more work to refresh the game, but using
location.reload() made it very very easy for me. The only drawback I can see is there is no keeping
track of how many matches have been won/lost. If I wanted to do that in the future then I might
need to rework the "Play Again?" button, but I'm happy with it for now!


