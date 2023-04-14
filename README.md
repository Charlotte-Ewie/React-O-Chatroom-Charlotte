**Création d'un chatroom en react**

# plan création composant de connexion 

1- Creation du composant settings qui contient au départ : 
  - Un form
  - un input de type email
  - un input de type password
  - un bouton envoyer

2- Gestion de l'état de l'affichage du menu settings
  - Etat par défaut à false (le menu n'est pas affiché)
  - Ajout de l'état dans le reducer (exemple settings : false)
  - Si l'état du menu est à false alors on affiche l'icone circle-plus 

3- Gestion du clic sur le bouton
  - Au clic sur le bouton, on passe l'état de settings à true
  - On affiche le formulaire du menu
  - On change le circle-plus en cross-plus
