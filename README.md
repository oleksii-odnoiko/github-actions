# Test

## Folder Structure

- 📂 **packages/excalidraw** - contains UI components from excalidraw lib
- 📂 **packages/utils** - contains utils for excalidraw lib
- 📂 **scripts** - contains scripts for release, build etc
- 📂 **app** - contains our application

## Commit message convention

Commit pattern:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (delimiter options: "/", "\" and ",")
```

Possible types:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

Follow semantic commit message head format: if it is a feature `feat(scope): <message>`, if it is a fix, then `fix(scope): <message>`

Rules:

- Type is required and should be at lowercase

```
echo ": some message" # fails
echo "fix: some message" # passes


echo "FIX: some message" # fails
echo "fix: some message" # passes
```

- Message:

```
echo "fix(scope): Some message" # fails
echo "fix(scope): Some Message" # fails
echo "fix(scope): SomeMessage" # fails
echo "fix(scope): SOMEMESSAGE" # fails
echo "fix(scope): some message" # passes
echo "fix(scope): some Message" # passes
echo "fix: some message." # fails
echo "fix: some message" # passes
```

[More info](https://github.com/semantic-release/semantic-release?tab=readme-ov-file#how-does-it-work)

### Branch name convention

Branch name pattern:

```sh
type/NH-<issue-number>-feature-name # feature name should be delimited by `-`
```

Examples:

```
feature/HN-1-example-message
fix/HN-2-example-message-2
chore/HN-3-chore-message
```
