# Intégration Continue (CI)

Le projet utilise GitHub Actions pour automatiser le lint et le build à chaque push ou pull request sur la branche `main`. Le workflow est défini dans `.github/workflows/ci.yml`.

## Structure du workflow

- **Job lint** :
	- Installe les dépendances
	- Exécute le lint (bloquant)
- **Job build** :
	- S'exécute uniquement si le lint passe
	- Utilise le cache pour accélérer l'installation des dépendances
	- Exécute le build

```yaml
name: CI

on:
	push:
		branches: [ main ]
	pull_request:
		branches: [ main ]

jobs:
	lint:
		runs-on: ubuntu-latest
		steps:
			- name: Checkout code
				uses: actions/checkout@v4
			- name: Set up Node.js
				uses: actions/setup-node@v4
				with:
					node-version: '20'
			- name: Install dependencies
				run: npm ci
			- name: Lint (blocking)
				run: npm run lint

	build:
		runs-on: ubuntu-latest
		needs: lint
		steps:
			- name: Checkout code
				uses: actions/checkout@v4
			- name: Set up Node.js
				uses: actions/setup-node@v4
				with:
					node-version: '20'
			- name: Cache node_modules
				uses: actions/cache@v4
				with:
					path: node_modules
					key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
					restore-keys: |
						${{ runner.os }}-node-
			- name: Install dependencies
				run: npm ci
			- name: Build
				run: npm run build
```
