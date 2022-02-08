# Challenge_48H

# Installation des packages :
1. cd api 👉 npm install
2. cd client 👉 npm install

# Lancer l'API côté serveur et le côté client :
1. cd api 👉 yarn start
2. cd client 👉 yarn start

# Page d'accueil :
Page où s'affiche le flux vidéo (ou l'image) préalablement mis en avant par un administrateur.\
![ch_004](https://user-images.githubusercontent.com/87578863/153003723-41e61e8e-6614-4039-83f8-4900ea7d4e06.PNG)

# Appuyer sur la touche [Échap] :
A n'importe quel moment, cela permet de basculer de la page d'accueil à la page Admin (ou Connexion si l'utilisateur n'est pas connecté).\

# Page de connexion :
![ch_002](https://user-images.githubusercontent.com/87578863/152856635-4a21513e-91e9-4464-aa88-a34ef10a5b53.PNG)

Pour se connecter l'identifiant est 'admin' et le mot de passe 'admin'.\
Une fois connecté(e), on est redirigé vers le Dashboard Admin.

# Dashboard :
![ch_003](https://user-images.githubusercontent.com/87578863/152856831-bab3a5c4-e388-4e0a-91e1-52f4b7c9280c.PNG)

Une fois arrivé sur la page Dashboard, l'utilisateur peut naviguer grâce à la barre latérale entre la page 'Dashboard' (actuellement vierge) et la page 'Média'.\

# Page des médias :
La page Média permet de visualiser les médias présents dans la base de données et d'en uploader de nouveaux.\
L'administateur a le choix entre : uploader une image, uploader une vidéo présente sur son PC, ou télécharger directement une vidéo depuis un URL Youtube.\
Pour uploader un nouveau média, l'utilisateur doit appuyer sur l'une des 3 icônes vertes, puis éventuellement donner un titre au média s'il le souhaite et enfin appuyer sur le bouton 'Ajouter'.\
Appuyer sur l'icône 'Corbeille' permet de supprimer définitivement un média de la base de données.\
Appuyer sur l'icône 'Broadcast' permet de mettre en avant un média pour qu'il apparaisse en page d'accueil.\
Le média actuellement sélectionné est entouré d'une bordure verte et son icône de Broadcast est également verte.
![ch_005](https://user-images.githubusercontent.com/87578863/153005101-74598c29-2ddf-4510-a66f-cfa7b8cf94a0.PNG)

A tout moment, l'utilisateur peut toujours appuyer sur Echap pour basculer entre le dashboard Admin et la page d'accueil, et visualiser le flux vidéo mis à jour.
