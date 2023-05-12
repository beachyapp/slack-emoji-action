# Random Slack Emoji

This action will return a random emoji

## Inputs

## `token`

**Required** Slack token (make sure the scope allows `emoji:read`)

## `list`

**Required** Option between all/custom. Defaults to 'all'

## Outputs

## `emoji`

a reutrns a random emoji

## Example usage

```
- name: Get Random Emoji
  id: reaction
  uses: beachyapp/slack-emoji-action@v0.2
  with:
    list: 'custom'
- name: output
  run: |
    echo "Random emoji: ${{ steps.reaction.outputs.emoji }}"
```


## Developing

- use node 16.x - e.g. `nvm use 16`
- `npm ci` or `npm install` if you're updating packages
- use `ncc` to build the distribution after updating packages or modifying code
  - `npm i -g @vercel/ncc`
  - `ncc build index.js --license licenses.txt`
