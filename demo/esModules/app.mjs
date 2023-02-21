import { characters, greet } from "./characters.mjs";

for (const c of characters) {
	setTimeout(() => greet(c), 5000)
}