.PHONY: setup

setup:
	@echo "Backing up package.json..."
	cp package.json .setup/package.json.bak
	@echo "Running setup script..."
	npx tsx .setup/setup.ts
	@echo "Installing dependencies with npm ci..."
	npm ci
	@echo "Staging and committing changes..."
	git add .
	git commit -m "chore: initial commit"
	@echo "\x1b[33mSetup complete. Please push to the repository before starting work:\033[0m"
	@echo "\x1b[33m  git push origin main\033[0m"
	@echo ""
	@echo "\x1b[33mYou may now delete the .setup folder to keep the project clean.\033[0m"



