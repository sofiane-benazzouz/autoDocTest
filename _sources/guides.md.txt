# Guide

Un module Node.js pour charger récursivement un répertoire de fichiers YAML, JSON et Markdown dans un objet JavaScript.

## Installation

```
npm install @github-docs/data-directory
```

## Usage

Étant donné l'arborescence de fichiers suivante:

```
$ tree data
data
├── bar.yaml
├── foo.json
└── nested
    └── baz.md
```

et le contenu suivant dans chaque dossier:

```
$ cat foo.json
{"meaningOfLife": 42}

$ cat bar.yaml
another_markup_language: 'yes'

$ cat nested/baz.md
I am markdown!
```

puis exécution de ce code:

```js
const path = require('path')
const dataDirectory = require('@github-docs/data-directory')
const data = dataDirectory(path.join(__dirname, 'data'))
```

rendra cet objet:

```js
{
  bar: { another_markup_language: 'yes' },
  foo: { meaningOfLife: 42 },
  nested: { baz: 'I am markdown!' }
}
```

## API
Ce module exporte une seule fonction synchrone, `dataDirectory`, qui renvoie
un Objet.

### `dataDirectory(directory, [options])`

- `directory` String (required) - Full path to the directory to read.
- `options` Object
- `extensions` Array - A case-insensitive array of filenames to load. Defaults to `['.json', '.md', '.markdown', '.yaml', '.yml']`
- `ignorePatterns` Array - Filename patterns to ignore. Every value in the array must be a regular expression. Defaults to `[/README\.md$/i]`. To include `README.md` files in your data object, specify an empty array: `[]`.
- `preprocess` Function - A function that can be used to modify each loaded file's content before it's added to the data object. Default is a no-op function that return the unmodified content: `(content) => { return content }`
