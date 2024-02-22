import { prompt } from "../prompt.js";

const ordinals: Record<string, string> = {
  definition: prompt`
    # Bitcoin Ordinals
    ## Definition

    Bitcoin ordinals assign a unique identifier to each satoshi, the smallest unit of Bitcoin, allowing them to carry individual pieces of data like images or text. This process, known as inscription, transforms these satoshis into unique digital assets. Essentially, it's a way to utilize the Bitcoin blockchain for more than just transactions, enabling the creation and transfer of digital collectibles or art directly on Bitcoin. It leverages Bitcoin's security and network but introduces a new layer of utility and creativity.
  `,
  inscriptions: prompt`
    # Bitcoin Ordinals
    ## Inscriptions

    Inscriptions are a way to mark individual satoshis, the smallest unit of Bitcoin, with unique content, making each one distinct. It's like digitally carving a message or image onto a tiny digital coin. This content is stored directly on the Bitcoin blockchain, making it as secure and permanent as any Bitcoin transaction. Since it's on the blockchain, anyone can see it, and it can't be changed or removed, giving these inscribed satoshis a unique identity and potentially adding value or significance beyond their monetary worth.
  `,
  bitcoinPeriodicEvents: prompt`
    # Bitcoin Ordinals
    ## Bitcoin periodic events
  
    Bitcoin has periodic events, some frequent, some more uncommon, and these naturally lend themselves to a system of rarity. These periodic events are:

    - Blocks: A new block is mined approximately every 10 minutes, from now until the end of time.
    - Difficulty adjustments: Every 2016 blocks, or approximately every two weeks, the Bitcoin network responds to changes in hashrate by adjusting the difficulty target which blocks must meet in order to be accepted.
    - Halvings: Every 210,000 blocks, or roughly every four years, the amount of new sats created in every block is cut in half.
    - Cycles: Every six halvings, something magical happens: the halving and the difficulty adjustment coincide. This is called a conjunction, and the time period between conjunctions a cycle. A conjunction occurs roughly every 24 years. The first conjunction should happen some time in 2032.
  `,
  rarity: prompt`
    # Bitcoin Ordinals
    ## Satoshi rarity

    Rarity within Bitcoin ordinals offers a unique lens through which to view the significance of individual satoshis. Two primary methods categorize this rarity: the Rodarmor Rarity Index and what could be termed "Historical Milestones."

    The Rodarmor Rarity Index classifies satoshis based on significant events in Bitcoin's timeline, such as mining difficulty adjustments and halving events. Its categories are Uncommon, Rare, Epic, Legendary, and Mythic - each signifying a distinct moment in Bitcoin's history.

    Historical Milestones, on the other hand, highlight satoshis associated with notable events or traits within Bitcoin's narrative. This includes categories like Nakamoto, First Transaction, Palindrome, Vintage, Pizza, Block 9, Block 78, and several others introduced in 2024, each offering a glimpse into the rich tapestry of Bitcoin's development and cultural milestones.
  `,
  rarityIndex: prompt`
    # Bitcoin Ordinals
    ## Rodarmor Rarity Index

    Uncommon Satoshi: The first satoshi of every block. Given that a new block is added to the Bitcoin blockchain approximately every 10 minutes, these sats capture the very beginning of that timeframe. Total supply: 6,929,999.

    Rare Satoshi: The first satoshi of each mining difficulty adjustment period. This reflects the ever-evolving nature of the network's security and consensus mechanisms. Total supply: 3437.

    Epic Satoshi: The first satoshi of each halving epoch. This marks a significant moment in Bitcoin's economic model. Total supply: 32.

    Legendary Satoshi: The first satoshi of each cycle. Every six halvings the halving and the difficulty adjustment coincide. This is called a conjunction, and the time period between conjunctions a cycle. A conjunction occurs roughly every 24 years. The first conjunction should happen some time in 2032. Total supply: 5.

    Mythic Satoshi: The first satoshi of the genesis block. This is the first satoshi ever created, and it's the only one that can be said to have existed before Bitcoin itself. Total supply: 1.
  `,
  rarityByHistoricalMilestones: prompt`
    # Bitcoin Ordinals
    ## Rarity by Historical Milestones

    Nakamoto Satoshi: Satoshis mined by Bitcoin's pseudonymous creator, highly coveted for their origin.

    First Transaction Satoshi: From the historic first Bitcoin transaction, embodying the genesis of peer-to-peer exchange.

    Palindrome Satoshi: Numerically symmetrical satoshis, adding a layer of rarity through their unique sequence.

    Vintage Satoshi: Mined within Bitcoin's initial 1,000 blocks, representing the dawn of the cryptocurrency.

    Pizza Satoshi: Linked to the legendary purchase of pizzas, marking a key cultural moment.

    Block 9 Satoshi: From one of the earliest mined blocks, connecting to Bitcoin's inception.

    Block 78 Satoshi: Mined by Hal Finney, highlighting community contributions beyond Nakamoto.
  `,
  recursion: prompt`
    # Bitcoin Ordinals
    ## Ordinal Recursion

    The concept of ordinal recursion introduces a a transformative approach to digital asset creation, blending the realms of art, finance, and technology on the blockchain. It enables the creation of unique digital artifacts that are recursively linked to one another. This process allows for the creation of a new digital artifact from an existing one, creating a chain of linked artifacts that share a common origin. The ordinals protocol allows the creation of interconnected digital assets that reference and utilize data from previous inscriptions, forming a complex web of interlinked content.
  `,
  nftComparison: prompt`
    # Bitcoin Ordinals
    ## Ordinals vs. NFTs
    
    Bitcoin ordinals bring a fresh perspective to digital collectibles by embedding them directly into individual satoshis, the smallest units of Bitcoin, leveraging the robustness and simplicity of the Bitcoin blockchain. This method stands in contrast to traditional NFTs, which are often built on separate blockchain layers that require more complex interactions and dependencies. With ordinals, ownership is absolute and transparent, rooted in the Bitcoin network's proven security and decentralization. This ensures that each digital artifact is complete, uncensorable, and uniquely owned, without the need for intermediary platforms or contracts.
    
    Compared to traditional NFTs, ordinals offer a more straightforward and resilient approach to digital ownership, where the integrity, longevity, and resistance to censorship of collectibles are inherently enhanced by Bitcoin's foundational principles.
  `,
};

export default ordinals;
