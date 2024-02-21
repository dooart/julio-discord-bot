import { useActions, useProcessManager, useSoulMemory, useSoulStore } from "soul-engine";
import content from "./content/index.js";
import { djb2Hash } from "./utils.js";

export async function initializeSoulStore() {
  const { log } = useActions();

  const savedHash = useSoulMemory("soulStoreHash", "");
  const currentHash = djb2Hash(JSON.stringify(content)).toString(16);

  if (savedHash.current === currentHash) {
    log("Soul store already initialized");
    return;
  }

  savedHash.current = currentHash;

  await reindexContent();
}

export async function reindexContent() {
  const { log } = useActions();
  const { set } = useSoulStore();
  const { wait } = useProcessManager();

  log("Indexing content in soul store...");

  let count = 0;
  for (const [groupKey, groupItems] of Object.entries(content)) {
    for (const [itemKey, itemContent] of Object.entries(groupItems)) {
      set(`${groupKey}-${itemKey}`, itemContent);

      count++;
    }
  }

  await wait(3000);

  log(`${count} content items embedded in soul store`);
}
