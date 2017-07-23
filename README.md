# TwitterReplyingBot

Voici deux petits robots sur Twitter concoctés par Ofnik et moi les mardi soir, avec node.js, à lancer via le terminal sur Mac.

Il faut au préalable avoir installé npm et le twit package :
<ul><li>https://www.npmjs.com/</li>
<li>https://github.com/ttezel/twit</li></ul>

# Objectif de départ
L'objectif de départ était de fabriquer un robot à qui l'on puisse signaler des mots ou phrases caractéristiques d'un hoax diffusé sur Twitter, face auquel le robot répondrait instantanément, en rétablissant les faits. Ce combattant des fake news s'appelle True_Newz_.

# Première étape : interagir avec les personnes qui répondent aux tweets
Première étape : le ReplyingBot, ou bot15.js. Il a la particularité de n'interagir qu'avec les personnes qui répondent à ses tweets. Il répond alors "Hello !". 

Avouons-le, ce n'est pas très utile. Mais il nous a permis de mieux comprendre comment  fonctionne "répondre à" dans Twitter. Car simplement adjoindre @ au nom de l'usager ne suffit pas. Pour afficher la réponse du robot en-dessous du twit initial, il faut utiliser "in_reply_to_status_id".

# Deuxième étape : répondre à des mots diffusés sur Twitter
Le Bot qui a du répondant, ou bot14.js. Il répond à toute personne disant "supercallifragilistoc" sur Twitter : "c'toi l'toc". Eh oui, pour le tester, il nous a fallu trouver un mot que peu de gens allaient utiliser sur Twitter ;-)

Mais sur le principe, True_Newz_ est opérationnel. Il peut répondre à des mots qui seront caractéristiques d'un hoax diffusé sur Twitter.

# Source d'apprentissage
Ces bots ont été développés après avoir regardé les <a href="https://www.youtube.com/watch?v=RF5_MPSNAtU&list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV">très bonnes vidéos</a> de Daniel Shiffmann. 


# Annexe : Comprendre les différents éléments d'un tweet

<ul><li>La <a href="https://dev.twitter.com/overview/api/tweets">liste</a> des éléments d'un tweet</li>
<li><a href="https://github.com/beeglebug/game-idea-machine">Exemple</a> de bot qui répond à des tweets qui lui sont adressés (ses réponses s'affichent en dessous du tweet de départ)</li>
<li>Le <a href="https://github.com/beeglebug/game-idea-machine/search?utf8=✓&q=reply&type=">passage</a> sur la reply</li></ul>



