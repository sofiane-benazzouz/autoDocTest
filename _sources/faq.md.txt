# Frequently Asked Questions

- [Spell-check doesn't work; how do I enable it?](#spell-check-doesnt-work-how-do-i-enable-it)
- [Some of my Markdown elements aren't highlighted](#some-of-my-markdown-elements-arent-highlighted)
- [Which elements of Markdown are supported?](#which-elements-of-markdown-are-supported)
- [Autocompletion doesn't work](#autocompletion-doesnt-work)
- [Syntax-highlighting is broken after uninstall](#syntax-highlighting-is-broken-after-uninstall)
- [Trailing whitespace is automatically removed, but I don't want that](#trailing-whitespace-is-automatically-removed-but-i-dont-want-that)

## Le correcteur orthographique ne fonctionne pas ; comment l'activer ?

Le paquet de base "vérification orthographique" ne scanne pas les documents dans le "text.md" par défaut. Vous pouvez facilement l'ajouter vous-même :

- Ouvrez les paramètres Atom, et trouvez l'onglet Paquets
- Recherchez le paquet "correcteur orthographique" ; vous pouvez le trouver sous les paquets de base
- Ouvrez les paramètres du "correcteur orthographique".
- Ajoutez `text.md` à la liste des grammaires (veillez à ce que les champs soient séparés par des virgules)
- Rechargez Atom pour vous assurer que les paramètres mis à jour prennent effet

## Certains de mes éléments de Markdown ne sont pas mis en évidence

La fonction "language markdown" analyse votre document Markdown ; elle ne colore pas directement les différents éléments. Cela est fait par le thème syntaxique que vous utilisez. Il y a de fortes chances que votre thème syntaxique ne prenne pas en charge tous les différents éléments que "language markdown" reconnaît. Vous pouvez demander à l'auteur du thème d'ajouter un meilleur support pour "language markdown", ou [ajouter des styles à votre feuille de style personnalisée] (http://flight-manual.atom.io/using-atom/sections/basic-customization/#style-tweaks). Vous pouvez également essayer l'un des thèmes syntaxiques éprouvés présentés ci-dessus. Si vous ne parvenez pas à le faire fonctionner, n'hésitez pas à [ouvrir un numéro] (https://github.com/burodepeper/language-markdown/issues/new/), et je verrai ce que je peux faire.

## Quels sont les éléments de la démarque qui sont pris en charge ?

Comme il n'y a pas de norme de démarquage claire, j'ai choisi de suivre la [CommonMark Spec] (http://spec.commonmark.org/) aussi fidèlement que possible dans l'environnement Atom. De plus, j'ai mis en place un support pour quelques extensions : Github Flavored Markdown, Markdown Extra, CriticMark, Front Matter et R Markdown. Ensemble, je pense que ces spécifications couvrent 98% de vos besoins quotidiens en matière de démarque. Si vous pensez qu'un élément manque, veuillez [ouvrir un numéro] (https://github.com/burodepeper/language-markdown/issues/new/).

#### Notes sur la mise en œuvre

- Raw `html` is included when you have the default `language-html` grammar enabled
- Les "listes de tâches" aromatisées à la Github sont mises en œuvre dans le cadre des "listes" normales.
- Les en-têtes de texte (soulignés) ne sont pas pris en charge
- Les "blocs de code indenté" ont été désactivés pour éviter les faux positifs ; utilisez plutôt des "blocs de code clôturé" ([plus de détails](https://github.com/burodepeper/language-markdown/issues/88#issuecomment-183344420))
- Les tables Github nécessitent des tuyaux au début de chaque ligne, et les cellules ont besoin d'un rembourrage d'au moins un espace ; c'est une convention suggérée pour éviter les faux positifs

## L'auto-complétion ne fonctionne pas

L'auto-complétion ne fonctionne pas avec les documents de démarque. Il est possible de l'activer, mais il pourrait nécessiter quelques retouches. Dans les paramètres de l'option `autocomplete-plus`, assurez-vous que les fichiers Markdown ne sont pas mis sur liste noire. De plus, il peut être utile de changer le fournisseur d'accès par défaut pour Fuzzy.

Pour qu'Atom puisse indexer vos documents Markdown sous forme de symboles, vous devez ajouter ce qui suit à votre fichier `config.cson` :

```coffee
'.text.md':
    autocomplete:
        symbols:
            constant:
                selector: "*"
                typePriority: 1
```

Vous trouverez des informations complémentaires dans [ce numéro] (https://github.com/burodepeper/language-markdown/issues/150).

## La mise en évidence de la syntaxe est cassée après la désinstallation

Le paquet de base `language-gfm` est automatiquement désactivé (sauf si vous avez activé le paramètre qui l'empêche) lors de l'utilisation de `language-markdown` pour éviter tout conflit. Parce que `language-markdown` est conçu comme un remplacement de remplacement, vous n'aurez probablement pas besoin des deux de toute façon. Cependant, si vous désinstallez `language-markdown`, `language-gfm` ne sera pas automatiquement réactivé. Il n'y a pas d'API disponible pour faire cela, donc vous devrez réactiver `language-gfm` manuellement, ce qui est assez facile.

1. Ouvrez les "Paramètres" et allez à l'onglet "Paquets
2. Recherche de "langue-gfm
3. Cliquez sur "Activer" pour le réactiver
4. Vous voulez probablement recharger Atom pour vous assurer que le changement prend effet

## Les espaces vides sont automatiquement supprimés, mais je ne veux pas que

Par défaut, Atom supprime tous les espaces arrière lors de l'enregistrement d'un fichier. Vous pouvez le désactiver en plaçant le drapeau suivant dans votre fichier `config.cson` pour la portée `.md.text`. Pour plus d'informations, voir [#115](https://github.com/burodepeper/language-markdown/issues/115).

```coffee
'*':
  # all current config
'.md.text':
  whitespace:
    removeTrailingWhitespace: false
```