function allCards(){
    return [
    // Lesson 1
    {front:"Das Buch", back:"Le livre"},
    {front:"Das Loch", back:"Le trou"},
    {front:"Die Nacht", back:"La nuit"},
    {front:"Die Wiedervereinigung", back:"La réunification"},
    {front:"Ich spreche Deutsch", back:"Je parle allemand"},
    {front:"Das Geschäft", back:"Le magasin"},
    {front:"Zurückkommen", back:"Revenir"},
    // Lesson 2
    {front:"Ich spreche nicht gut Deutsch", back:"Je ne parle pas bien allemand"},
    {front:"Ich spreche ein bisschen Deutsch", back:"Je parle un peu allemand"},
    {front:"Ich verstehe ziemlich gut, aber es fällt mich schwer zu sprechen", back:"Je comprends assez bien mais j'ai du mal à parler"},
    {front:"Ich hatte Deutsch in der Schule", back:"J'ai étudié l'allemand à l'école"},
    {front:"Wie bitte?", back:"Comment? Pardon?"},
    {front:"Es tut mir leid, aber ich verstehe das nicht", back:"Désolé, mais je ne comprends pas"},
    {front:"Kannst du das wiederholen?", back:"Peux-tu répéter?"},
    {front:"Könntest du lauter sprechen?", back:"Pourrais-tu parler plus fort?"},
    {front:"Langsamer, bitte", back:"Plus lentement s'il te plaît"},
    {front:"Kannst du das buchstabieren?", back:"Peux-tu l'épeler?"},
    {front:"Wie shreibt man das?", back:"Comment ca s'écrit?"},
    {front:"Ich verstehe das nicht", back:"Je ne comprends pas"},
    {front:"Ich verstehe nichts", back:"Je ne comprends rien"},
    {front:"Ich habe nichts verstanden", back:"Je n'ai rien compris"},
    {front:"Wie nennt man das?", back:"Comment appelle-t-on ca?"},
    {front:"Wie sagt man ... auf Deutch?", back:"Comment dit on ... en allemand?"},
    {front:"Was bedeutet ...?", back:"Qu'est ce que ... veut dire?"},
    {front:"Wie spricht man ... aus?", back:"Comment se prononce ... ?"},
    // Lesson 3
    {front:"Der Sozialismus", back:"Le socialisme"},
    {front:"Der Sozialist", back:"Le socialist"},
    {front:"Die Sozialistin", back:"La socialiste"},
    {front:"Der Verkäufer", back:"Le vendeur"},
    {front:"Die Verkäuferin", back:"La vendeuse"},
    {front:"Die Toleranz", back:"La tolérance"},
    {front:"Die Revolution", back:"La révolution"},
    {front:"Das Fenster", back:"La fenêtre"},
    {front:"Der Junge", back:"Le garcon"},
    {front:"Die Schwester", back:"La soeur"},
    {front:"Der Sänger", back:"Le chanteur"},
    {front:"Die Sängerin", back:"La chanteuse"},
    {front:"Der Pazifist", back:"Le pacifiste"},
    {front:"Die Pazifistin", back:"La pacifiste"},
    {front:"Der Student", back:"L'étudiant"},
    {front:"Die Studentin", back:"L'étudiante"},
    {front:"Der Kollege", back:"Le collègue"},
    {front:"Die Kollegin", back:"La collègue"},
    {front:"Das Brötchen", back:"Le petit pain"},
    {front:"Das Konto", back:"Le compte"},
    {front:"Das Argument", back:"L'argument"},
    {front:"Das Geschenk", back:"Le cadeau"},
    // Lesson 4
    {front:"Könnten Sie mir helfen?", back:"Pourriez-vous m'aider?"},
    {front:"Könnten Sie ...?", back:"Pourriez-vous ...?"},
    {front:"Kann ich ...?", back:"Puis-je ...?"},
    {front:"Haben Sie ...?", back:"Avez-vous ...?"},
    {front:"Gibt es ...?", back:"Y a-t-il ...?"},
    {front:"Wo gibt es ...?", back:"Ou y a-t-il ...?"},
    {front:"Ich suche nach ...", back:"Je cherche ..."},
    {front:"Ich möchte ...", back:"Je voudrais ..."},
    {front:"Ich brauche ...", back:"J'ai besoin de ..."},
    {front:"Vielen Dank", back:"Merci beaucoup"},
    {front:"Danke für Ihre Hilfe", back:"Merci pour votre aide"},
    {front:"Ich bin Ihnen für ... sehr dankbar", back:"Je vous suis très reconnaissant pour ..."},
    {front:"Nichts zu danken", back:"De rien"},
    {front:"Gern geschehen", back:"Il n'y a pas de quoi"},
    {front:"Entschuldigung!", back:"Excusez-moi!"},
    {front:"Verzeihung!", back:"Pardon!"},
    {front:"Es tut mir wirklich leid", back:"Je suis vraiment désolé"},
    {front:"Es tut mir leid, dass ich zu spät bin", back:"Je suis désolé d'être en retard"},
    {front:"Das ist nicht schlimm", back:"Ce n'est pas grave"},
    // Lesson 5
    {front:"Das Büro", back:"Le bureau"},
    {front:"Das Kind", back:"L'enfant"},
    {front:"Die Zeitung", back:"Le journal"},
    {front:"Die Möglichkeit", back:"La possibilité"},
    {front:"Der Kuss", back:"Le baiser"},
    {front:"Der Traum", back:"Le rêve"},
    {front:"Der Bus", back:"Le bus"},
    {front:"Das Schloss", back:"La serrure"},
    // Lesson 6
    {front:"Guten Morgen", back:"Bonjour (le matin)"},
    {front:"Guten Tag", back:"Bonjour (toute la journée)"},
    {front:"Guten Abend", back:"Bonsoir"},
    {front:"Wilkommen", back:"Bienvenue"},
    {front:"Sehr erfreut!", back:"Enchanté!"},
    {front:"Ich muss gehen", back:"Je dois y aller"},
    {front:"Auf Wiedersehen!", back:"Au revoir"},
    {front:"Schönen Abend noch!", back:"Bonne soirée!"},
    {front:"Gute Nacht", back:"Bonne nuit"},
    {front:"Bis gleich!", back:"A tout de suite!"},
    {front:"Bis später!", back:"A plus tard!"},
    {front:"Bis bald!", back:"A bientôt!"},
    {front:"Bis nächstes Mal!", back:"A la prochaine!"},
    {front:"Bis morgen!", back:"A demain!"},
    {front:"Grüss ... von mir", back:"Passe le bonjour à..."},
    // Lesson 8
    {front:"Ich heisse ...", back:"Je m'appelle ..."},
    {front:"Ich möchte Ihnen meine Frau vorstellen", back:"Je voudrais vous présenter ma femme"},
    {front:"Ich stelle dich meiner Vater vor", back:"Je te présente mon père"},
    {front:"Darf ich Ihnen Frau Mueller vorstellen?", back:"Puis-je vous présenter madame Mueller?"},
    {front:"Sehr efreut!", back:"Enchanté!"},
    {front:"Angenehm!", back:"Enchanté!"},
    {front:"Es freut mich, Ihre Bekanntschaft zu machen", back:"Ravi de faire votre connaissance (formel)"},
    {front:"Schön, dich kennenzulernen!", back:"Ravi de faire ta connaissance (informel)"},
    {front:"Ganz meinerseits!", back:"Tout le plaisir est pour moi (formel)"},
    {front:"Gleichfalls", back:"Moi de même (formel)"},
    {front:"Ich freue mich auch", back:"Pareillement (informel)"},
    {front:"Das Duzen", back:"Le tutoiement"},
    {front:"Das Siezen", back:"Le vouvoiement"},
    {front:"Sollen wir uns duzen?", back:"On se tutoie?"},
    // Lesson 9
    {front:"Der Vater zeigt dem Sohn den Brief des Opas", back:"Le père montre au fils la lettre du grand-père"},
    {front:"Die Mutter gibt der Nachbarin die Zeitung der Oma", back:"La mère donne à la voisine le journal de la grand-mère"},
    {front:"Das Mädchen reicht dem Au-Pair-Mädchen das Glas des Kindes", back:"La jeune fille tend le verre de l'enfant à la jeune fille au pair"},
    {front:"Die Eltern geben den Kindern die Geschenke der GrossEltern", back:"Les parents donnent aux enfants les cadeaux des grand-parents"},
    // Lesson 10
    {front:"Der Arm", back:"Le bras"},
    {front:"Das Auge", back:"L'oeil"},
    {front:"Der Bauch", back:"Le ventre"},
    {front:"Das Bein", back:"La jambe"},
    {front:"Die Brust", back:"La poitrine"},
    {front:"Der Ellenbogen", back:"Le coude"},
    {front:"Der Finger", back:"Le doigt"},
    {front:"Der Fuss", back:"Le pied"},
    {front:"Das Gesicht", back:"Le visage"},
    {front:"Das Haar", back:"Les cheveux"},
    {front:"Der Hals", back:"Le coup"},
    {front:"Die Hand", back:"La main"},
    {front:"Das Handgelenk", back:"Le poignet"},
    {front:"Der Hintern", back:"Les fesses"},
    {front:"Die Hüfte", back:"La hanche"},
    {front:"Das Knie", back:"Le genou"},
    {front:"Der Knöchel", back:"La cheville"},
    {front:"Der Kopf", back:"La tête"},
    {front:"Die Lippe", back:"La lèvre"},
    {front:"Der Mund", back:"La bouche"},
    {front:"Die Nase", back:"Le nez"},
    {front:"Der Oberschenkel", back:"La cuisse"},
    {front:"Das Ohr", back:"L'oreille"},
    {front:"Der Rücken", back:"Le dos"},
    {front:"Die Schulter", back:"L'épaule"},
    {front:"Die Stirn", back:"Le front"},
    {front:"Der Zahn", back:"La dent"},
    {front:"Der Zeh", back:"L'orteil"},
    {front:"Die Zunge", back:"La langue"},
    // Lesson 11
    {front:"Ein Mann zeigt einem Freund einem Brief eines Schriftstellers", back:"Un homme montre à un ami une lettre d'un écrivain"},
    {front:"Eine Frau zeigt einer Freundin eine Zeitung einer Nachbarin", back:"Une femme montre à une amie un journal d'une voisine"},
    {front:"Ein Au-Pair-Mädchen reicht einem Mädchen ein Glas eines Kindes", back:"Une jeune fille au pair tend à une jeunne fille un verre d'un enfant"},
    {front:"Der Wal", back:"La baleine"},
    {front:"Wale schwammen neben dem Boot", back:"Des baleines nageaient près du bateau"},
    //Lesson 12,
    {front:"Das T-Shirt", back:"Le T-Shirt"},
    {front:"Das Hemd", back:"La chemise"},
    {front:"Die Bluse", back:"Le chemisier"},
    {front:"Der Pulli", back:"Le pull"},
    {front:"Die Hose", back:"Le pantalon"},
    {front:"Die Jeans", back:"Le jean"},
    {front:"Der Rock", back:"La jupe"},
    {front:"Das Kleid", back:"La robe"},
    {front:"Die Kleidung", back:"Les vêtements"},
    {front:"Der Anzug", back:"Le costume"},
    {front:"Die Jacke", back:"La veste"},
    {front:"Der Blouson", back:"Le blouson"},
    {front:"Der Mantel", back:"Le manteau"},
    {front:"Diese Jeans stehen dir nicht", back:"Ce jean ne te va pas"},
    {front:"Die Unterhose", back:"La culotte"},
    {front:"Der Slip", back:"Le slip"},
    {front:"Die Boxershorts", back:"Le caleçon"},
    {front:"Der Büstenhalter", back:"Le soutien-gorge"},
    {front:"Die Socken", back:"Les chaussettes"},
    {front:"Die Strumpfhose", back:"Les collants"},
    {front:"Der Schuh", back:"La chaussure"},
    {front:"Der Turnschuh", back:"La basket (chaussure)"},
    {front:"Der Stiefel", back:"La botte"},
    {front:"Die Sandale", back:"La sandale"},
    {front:"Der Flip-Flop", back:"La tong"},
    {front:"Der Schuh mit hohem Absatz", back:"La chaussure à talon"},
    {front:"Die Kravatte", back:"La cravate"},
    {front:"Der Gürtel", back:"La ceinture"},
    {front:"Der Hut", back:"Le chapeau"},
    {front:"Die Mütze", back:"Le bonnet"},
    {front:"Die Kappe", back:"La casquette"},
    {front:"Tragen", back:"Porter"},


]
}
