# mingoos-stylelint

Basic stylelint rules for CSS, SASS, SCSS

## How to use

1. Install package

```Shell
$npm install --save-dev mingoos-stylelint
/* OR */
$npm install -D mingoos-stylelint
```

2. Exntends on your config file

```JSON
// .stylelintrc.json
{
  "extends": [
    "mingoos-stylelint"
  ],
  "rules": {
    "override": "your rules"
  }
}
```

3. Add npm script (optional)

```JSON
// package.json
{
  "scripts": {
    "stylelint": "npx stylelint \"**/*.{css,sass,scss}\"",
    "stylelint:fix": "npx stylelint \"**/*.{css,sass,scss}\" --fix"
  }
}
```

## Rules

...
