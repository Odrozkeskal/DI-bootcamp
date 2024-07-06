document.addEventListener("DOMContentLoaded", function(){
     let form = document.getElementsByTagName('form')[0];
     let button = document.getElementById('lib-button');
     let story = document.getElementById('story');
     

    button.addEventListener('click', function(e){
        e.preventDefault();

        let noun = document.getElementById('noun').value;
        let adjective = document.getElementById('adjective').value;
        let person = document.getElementById('person').value;
        let verb = document.getElementById('verb').value;
        let place = document.getElementById('place').value;
       // lyrics by "Slick Rick - Children's Story"
        if(noun && adjective && person && verb && place){
            story.textContent = `Once upon a time not long ago.\n
                                 When people wore pajamas and lived life slow.\n
                                 When laws were stern and justice stood.\n
                                 And people were behaving' like they ought ta good.\n
                                 There lived a ${adjective} ${person} who was misled.\n
                                 By another ${adjective} ${person}and this is what he said.\n
                                 "Me and Ty, we gonna make sum cash.\n
                                 ${verb}' old folks and makin' the dash.\n"
                                 They did the job, money came with ease.\n
                                 But one couldn't stop, it's like he had a disease.\n
                                 He ${verb} another and another and a sister and her brother.\n
                                 Tried to rob a man who was a D.T. undercover.\n
                                 The ${noun} grabbed his arm, he started acting erratic.\n
                                 He said "Keep still, ${person}, no need for static.\n"
                                 Punched him in his belly and he gave him a slap.\n
                                 But ${adjective} did he know the little ${person} was strapped.\n
                                 The ${person} pulled out a gun, he said, "Why did ya hit me?"\n
                                 The barrel was set straight for the ${noun}'s kidney.\n
                                 The ${noun} got scared, the ${person}, he starts to figure.\n
                                 "I'll do years if I pull this trigger".\n
                                 So he cold dashed and ran around the block.\n
                                 ${noun} radios in to another lady ${noun}.\n
                                 He ran by a tree, there he saw the sister.\n
                                 Shot for the head, he shot back but he missed her.\n
                                 Looked around good and from expectations.\n
                                 He decided he'd head for the subway stations.\n
                                 But she was coming and he made a left.\n
                                 He was runnin' top speed 'til he was outta breath.\n
                                 Knocked an old man down and swore he killed him.\n
                                 Then he made his move to a ${place}.\n
                                 Ran up the stairs up to the top floor.\n
                                 Opened up the door there, guess who he saw?.\n
                                 Dave the dope fiend shootin'' dope.\n
                                 Who don't know the meaning of water nor soap.\n
                                 The dope fiend brought back a ${adjective} shotgun.\n
                                 He went outside but there was ${noun}s all over.\n
                                 Then he dipped into a car, a stolen Nova.\n
                                 Raced up the block doing 83.\n
                                 Crashed into a tree near ${place}.\n
                                 Escaped alive though the car was battered.\n
                                 Rat-a-tat-tatted and all the ${noun}s scattered.\n
                                 Ran out of bullets and he still had static.\n
                                 Grabbed a ${adjective} lady and out the automatic.\n
                                 Pointed at her head and he said the gun was full o' lead.\n
                                 He told the ${noun}s, "Back off or honey here's dead".\n
                                 Deep in his heart he knew he was wrong.\n
                                 So he let the lady go and he starts to run on.\n 
                                 ${noun}s sounded, he seemed astounded.\n
                                 Before long the ${adjective} ${person} got surrounded.\n
                                 He dropped the gun, so went the glory.\n
                                 And this is the way I have end this story.\n
                                 He was only seventeen, in a madman's dream.\n
                                 The ${noun}s killed the ${adjective} ${person}, I still hear him scream.\n
                                 This ain't funny so don't ya dare laugh.\n 
                                 Just another case 'bout the wrong path.\n
                                 Straight 'n narrow or yo' soul gets cast.\n
                                 Good night! :)
                        `;

                        
        }
    })
});