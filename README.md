# Challenge_48H

# Installer les packages :
1. cd api 👉 npm install
2. cd client 👉 npm install

# Lancer le serveur et le front :
1. cd api 👉 yarn start
2. cd client 👉 yarn start

# URL racine : http://localhost:3000/
Page d'accueil (vierge actuellement) où s'affichera l'image ou la vidéo mise en avant par un admin.\
![ch_001](https://user-images.githubusercontent.com/87578863/152856249-8230e02a-f14a-4e31-a4d7-84640583fcdd.PNG)

# Appuyer sur la touche Echap :
A n'importe quel moment, cela permet de basculer de la page d'accueil à la page Admin (ou Login si l'utilisateur n'est pas connecté).\

# URL de login : http://localhost:3000/login
![ch_002](https://user-images.githubusercontent.com/87578863/152856635-4a21513e-91e9-4464-aa88-a34ef10a5b53.PNG)

Pour se connecter l'identifiant est 'admin' et le mot de passe 'admin'.\
Une fois connecté(e), on est redirigé vers le Dashboard Admin.

# URL dashboard : http://localhost:3000/dashboard
![ch_003](https://user-images.githubusercontent.com/87578863/152856831-bab3a5c4-e388-4e0a-91e1-52f4b7c9280c.PNG)

Une fois arrivé sur la page Dashboard, l'utilisateur peut naviguer grâce à la barre latérale entre la page 'Dashboard' (actuellement vierge) et la page 'Média'.\

# URL média : http://localhost:3000/media
La page Média permet de visualiser les médias présents dans la base de données et d'en uploader de nouveaux.\
Pour uploader un nouveau média, l'utilisateur doit appuyer sur la petite icône d'image verte pour aller chercher un fichier, puis éventuellement donner un titre au média et enfin appuyer sur le bouton 'Ajouter'.\
Appuyer sur la corbeille permet de supprimer définitivement un média de la base de données.\
![image](https://user-images.githubusercontent.com/87578863/152857411-ca25a061-cb00-4dde-adea-fc0dc71009d7.png)

A tout moment, l'utilisateur peut toujours appuyer sur Echap pour basculer entre la page d'accueil et le dashboard Admin.
