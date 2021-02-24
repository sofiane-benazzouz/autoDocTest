==========================
Démarrage facile du projet
==========================

Ici, vous pourrez trouver une documentation rapide afin de démarrer le projet.

**Pour une documentation plus complète, veuillez vous rendre à cette adresse :** https://zarhkoh.github.io/autoDocTest/

Prérequis
=========

- NodeJS_
.. _NodeJS : https://nodejs.org/en/download/
- MySQL_
.. _MySQL : https://www.mysql.com/fr/downloads/



Optionnel
=========

- MySQL Workbench / Datagrip / phpmyadmin

Démarrage rapide
================


Clonage du projet
*****************
Ouvrez un terminal et entrez la commande ``git clone https://github.com/Zarhkoh/autoDocTest.git``


Installation des dépendances
****************************
Dans un terminal, rendez vous dans le dossier du projet et entrez ``npm install``

Configuration des informations de la base de données
****************************************************

Modifier les identifiants dans "apimspr/.env.local"

DB_USER= utilisateur
DB_PASSWORD= votremdp
DB_PORT= port de la base de données


Lancement du serveur
********************
Pour lancez le serveur, utilisez la commande ``npm run local``

Ouvrez un navigateur à l'adresse http://localhost:3000

Documentation sur les requêtes
Utilisez Swagger pour voir les informations concernant les requêtes via l'URL http://localhost:3000/api-docs/

Lancement des tests
*******************
Utilisez la commande ``npm run test``

Plus d'aide
===========
Pour plus d'aide, ou pour savoir comment contribuer au projet, allez voir la documentation en ligne sur https://zarhkoh.github.io/autoDocTest/
