import "dotenv/config";
import { initBot } from "./helpers/initBot";
import { initDatabase } from "./helpers/initDatabase";
import { initServer } from "./server/server";

initDatabase();
initServer();
initBot();
