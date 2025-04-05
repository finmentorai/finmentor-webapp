export const SEED_TERMS = [
  {
    id: '11111111-1111-1111-1111-111111111101',
    name: 'Blockchain',
    link: 'https://ethereum.org/en/what-is-ethereum/',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png',
    description:
      'A distributed ledger technology that records transactions across multiple computers.',
    content:
      "A blockchain is a distributed database or ledger shared among computer network nodes. They store information in digital format and are best known for their crucial role in cryptocurrency systems for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record and generates trust without the need for a trusted third party. Blockchains differ from traditional databases in how they store information; blockchains store data in blocks that are then linked together via cryptography, as new data comes in, it's entered into a fresh block, and once the block is filled with data, it's chained onto the previous block, making the data chained together in chronological order.",
    startingBidPrice: 0.5,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Token',
    link: 'https://ethereum.org/en/developers/docs/standards/tokens/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Digital asset residing on a blockchain that represents value or utility.',
    content:
      'In blockchain, a token is a digital asset created on an existing blockchain. Unlike coins such as Bitcoin or Ethereum which operate on their own blockchain, tokens are built on top of existing blockchain networks, most commonly Ethereum. Tokens can represent virtually anything from physical assets to digital rights. They adhere to specific standards on each blockchain (e.g., ERC-20 or ERC-721 on Ethereum) which enable them to be easily exchanged and integrated into wallets and applications. Tokens can function as currency, represent real-world assets (security tokens), provide access to services (utility tokens), represent unique items (non-fungible tokens), or grant governance rights in decentralized organizations.',
    startingBidPrice: 0.75,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'NFT',
    link: 'https://opensea.io/learn/what-are-nfts',
    logoUrl: 'https://opensea.io/static/images/logos/opensea-logo.svg',
    description:
      'Unique digital asset representing ownership of a specific item.',
    content:
      "NFT stands for Non-Fungible Token. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible (interchangeable with one another), NFTs are unique digital assets that represent ownership of a specific item. Each NFT has distinct information and properties that make it irreplaceable or non-fungible. They're built using similar programming to cryptocurrencies, but there the similarity ends. NFTs can represent digital art, music, videos, virtual real estate, gaming items, collectibles, and even real-world assets. They provide proof of ownership through blockchain technology, creating scarcity in the digital realm where copying was previously trivial. The value of an NFT comes from its uniqueness, creator reputation, utility, and the market's perception of its worth.",
    startingBidPrice: 1.0,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Liquidity Pool',
    link: 'https://uniswap.org/',
    logoUrl: 'https://uniswap.org/favicon.ico',
    description:
      'Collection of funds locked in a smart contract to facilitate trading and provide liquidity.',
    content:
      'Liquidity pools are collections of tokens locked in smart contracts that provide liquidity to decentralized exchanges (DEXs) and DeFi applications. These pools solve the liquidity problem faced by order book exchanges in a decentralized context by creating asset pools that traders can trade against. Users called liquidity providers (LPs) deposit an equivalent value of two tokens to create a market, enabling others to trade against that pool. In return for providing liquidity, LPs receive trading fees proportional to their share of the pool and sometimes additional incentives in the form of governance tokens. Automated Market Makers (AMMs) like Uniswap, Curve, and Balancer use mathematical formulas to price assets within these pools rather than using order books. While liquidity pools enable decentralized trading and earning opportunities, they come with risks including impermanent loss, smart contract vulnerabilities, and economic attacks.',
    startingBidPrice: 0.8,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Yield',
    link: 'https://curve.fi/',
    logoUrl: 'https://curve.fi/favicon.ico',
    description:
      'Returns earned from providing crypto assets to protocols or platforms.',
    content:
      "In the context of cryptocurrency and decentralized finance (DeFi), yield refers to the return earned on crypto assets when they're deployed in various protocols or platforms. Unlike traditional finance where returns come primarily from lending, crypto yield can be generated through multiple strategies including staking, liquidity provision, lending, yield farming, and more. Yield is typically expressed as an annual percentage rate (APR) or annual percentage yield (APY) when compounding is involved. Common yield-generating activities include providing liquidity to decentralized exchanges, lending assets on platforms like Aave or Compound, staking tokens to secure proof-of-stake networks, and participating in yield optimization protocols. While crypto yield can often be higher than traditional finance returns, it carries additional risks including smart contract vulnerabilities, impermanent loss, protocol insolvency, and market volatility.",
    startingBidPrice: 0.6,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Smart Contract',
    link: 'https://ethereum.org/en/developers/docs/smart-contracts/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Self-executing code deployed on a blockchain that automatically executes when conditions are met.',
    content:
      "Smart contracts are self-executing programs stored on a blockchain that run when predetermined conditions are met. They operate on the simple premise of 'if/when X event happens, then execute Y action.' Once deployed to a blockchain, smart contracts automatically execute according to their programmed conditions without requiring intermediaries or central authorities. They can handle complex transactions, escrow services, multi-sig wallets, decentralized applications, and much more. Ethereum popularized smart contracts, but they're now available on many blockchains. The code of a smart contract is transparent and immutable, meaning all participants can verify the logic, and once deployed, it can't be changed (unless specifically designed with upgrade mechanisms). While smart contracts enable trustless agreements and automation, they're only as good as their code, and vulnerabilities have led to significant hacks and fund losses in the past.",
    startingBidPrice: 0.9,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'DAO',
    link: 'https://ethereum.org/en/dao/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Decentralized Autonomous Organization - Community-led entity with no central authority.',
    content:
      "A DAO (Decentralized Autonomous Organization) is a community-led entity with no central authority that's governed by code and smart contracts rather than traditional organizational hierarchies. Members collectively make decisions about the organization's direction, funding allocations, and rule changes through token-based voting mechanisms. DAOs are typically formed around specific missions or purposes—investment collectives, charity organizations, protocol governance, social clubs, or creative endeavors. They operate transparently, with rules and transactions recorded on a blockchain visible to all members. DAOs coordinate resources through treasury management, often controlled by multi-signature wallets or governance contracts. While DAOs promise more democratic and transparent governance, they face challenges including governance attacks (if token distribution is uneven), regulatory uncertainty, technical limitations, coordination difficulties, and finding the right balance between decentralization and efficiency.",
    startingBidPrice: 0.7,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'DeFi',
    link: 'https://ethereum.org/en/defi/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Decentralized Finance - Financial services built on blockchain technology without traditional intermediaries.',
    content:
      "DeFi, or Decentralized Finance, refers to an ecosystem of financial applications built on blockchain networks, primarily Ethereum, that operate without centralized intermediaries like banks or brokerages. DeFi aims to create an open, permissionless, and transparent financial system accessible to anyone with an internet connection. Core DeFi services include lending and borrowing platforms, decentralized exchanges, stablecoins, derivatives, insurance, and asset management tools. These services are composable, meaning they can be combined like 'money legos' to create complex financial products. Unlike traditional finance, DeFi operates 24/7, requires no permission to access, offers greater transparency, and provides users with full control over their assets. However, it also comes with significant risks including smart contract vulnerabilities, high volatility, regulatory uncertainty, and complex user experiences that can be intimidating for newcomers.",
    startingBidPrice: 1.2,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Wallet',
    link: 'https://metamask.io/',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png',
    description:
      'Software or hardware that stores private keys for crypto assets.',
    content:
      "In the blockchain ecosystem, a wallet is not a physical container for cryptocurrencies but rather software or hardware that stores private keys—the cryptographic codes that give you access and control over your blockchain assets. Wallets don't actually store your cryptocurrencies; those remain recorded on the blockchain. Instead, they store the keys that prove your ownership and allow you to sign transactions. Wallets come in various forms: hot wallets (connected to the internet) include web wallets, desktop applications, mobile apps, and browser extensions like MetaMask; cold wallets (offline storage) include hardware devices like Ledger or Trezor and paper wallets. Each wallet has a public address (similar to an email address) that others can use to send you assets, and a private key (like a password) that should never be shared. Some wallets support multiple cryptocurrencies, while others are blockchain-specific. Modern wallets often include additional features like in-app exchanges, DApp browsers, and staking capabilities.",
    startingBidPrice: 0.65,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Gas Fee',
    link: 'https://ethereum.org/en/developers/docs/gas/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Cost to perform transactions or execute smart contracts on a blockchain.',
    content:
      "Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain network. The concept is most prominent on Ethereum and similar networks, where each operation (sending tokens, trading on DEXs, minting NFTs, or interacting with smart contracts) requires computational resources. Gas is measured in small units specific to each blockchain, with the total fee determined by multiplying the gas used by the current gas price, which fluctuates based on network demand. During periods of high network congestion, gas prices can spike dramatically, making transactions expensive. Different operations consume different amounts of gas—a simple token transfer might cost less than complex smart contract interactions. Many networks have implemented various scaling solutions to reduce gas costs, including Layer 2 solutions like Optimism and Arbitrum, sidechains, and alternative consensus mechanisms. Users can often prioritize their transactions by selecting higher gas prices for faster processing or lower prices if they're willing to wait.",
    startingBidPrice: 0.55,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Layer 2',
    link: 'https://ethereum.org/en/layer-2/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Scaling solutions built on top of existing blockchains to improve transaction speeds and reduce costs.',
    content:
      "Layer 2 (L2) refers to a set of scaling solutions built on top of existing blockchains (Layer 1) designed to improve transaction throughput, reduce fees, and maintain security. These solutions process transactions off the main chain but derive their security from the underlying blockchain. Major Layer 2 approaches include: Rollups, which bundle (or 'roll up') multiple transactions into a single transaction on the main chain, with variations like Optimistic Rollups (which assume transactions are valid but allow for challenges) and Zero-Knowledge Rollups (which use cryptographic proofs to validate transaction batches); State Channels, which allow participants to conduct multiple transactions off-chain before settling the final state on-chain; Plasma chains, which create child chains that process transactions independently but use the main chain for security; and Sidechains, which are separate blockchains that run parallel to the main chain with their own consensus mechanisms. By moving transaction processing off the main chain, Layer 2 solutions can achieve significantly higher throughput (often thousands of transactions per second) and lower costs while inheriting the security guarantees of the underlying blockchain.",
    startingBidPrice: 0.85,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Staking',
    link: 'https://ethereum.org/en/staking/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Process of actively participating in transaction validation on a proof-of-stake blockchain.',
    content:
      "Staking is the process of committing your crypto assets to support a blockchain network's operations, security, and consensus mechanism. In proof-of-stake (PoS) networks, staking serves as an alternative to mining found in proof-of-work systems. When you stake your coins, you 'lock' them in a smart contract to become a validator or support validators in verifying transactions and creating new blocks. In return, you earn rewards proportional to the amount staked and duration of participation. Different networks have varying staking requirements—some require minimum amounts or lock-up periods, while others allow for more flexible participation. Staking can be performed directly (running a validator node), through delegation (supporting an existing validator), or via staking pools and liquid staking services that allow users to maintain some liquidity while staking. Besides generating passive income, staking provides additional benefits including participation in governance decisions, network security contributions, and potentially reduced environmental impact compared to mining. However, it also carries risks such as slashing penalties for validator misbehavior, price volatility during lock-up periods, and smart contract vulnerabilities in staking platforms.",
    startingBidPrice: 0.75,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Metaverse',
    link: 'https://ethereum.org/en/nft/#nft-domains',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Collective virtual shared spaces created by the convergence of physical and digital reality.',
    content:
      "The metaverse represents a collective of persistent, shared virtual spaces that are interconnected and accessible through various devices. It's often described as the next evolution of the internet—moving from flat, text-and-image based experiences to immersive, three-dimensional environments where users can interact with digital content and each other in real-time. In the blockchain context, the metaverse is being built with decentralized technologies that enable true digital ownership, interoperable assets, and user-governed economies. Key components include virtual worlds (like Decentraland or The Sandbox), avatars that represent users, digital assets owned as NFTs, decentralized social experiences, and virtual economies with their own currencies and marketplaces. The blockchain-based metaverse is distinguished from traditional virtual worlds by its emphasis on user ownership of assets, creator economies where value flows directly to contributors, open standards allowing for asset portability between platforms, and decentralized governance where users have a say in platform development. While still in its early stages, the metaverse aims to eventually blend physical and digital experiences, potentially transforming how we work, socialize, learn, and engage with digital content.",
    startingBidPrice: 1.1,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Mining',
    link: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Process of validating transactions and adding them to a blockchain ledger.',
    content:
      "Mining is the process by which new transactions are verified and added to a blockchain in proof-of-work systems like Bitcoin. Miners compete to solve complex mathematical puzzles that require substantial computational power and energy. The first miner to solve the puzzle gets the right to add a new block of transactions to the blockchain and receives a reward in the form of newly minted coins and transaction fees. This process serves multiple purposes: it secures the network against attacks, distributes new coins into circulation according to a predetermined schedule, and provides a decentralized mechanism for reaching consensus on the state of the blockchain. Mining difficulty automatically adjusts based on the total computational power of the network to maintain a consistent block time. While initially possible with standard computers, mining for established cryptocurrencies now typically requires specialized hardware like Application-Specific Integrated Circuits (ASICs). Due to its energy-intensive nature, many newer blockchains have moved to alternative consensus mechanisms like proof-of-stake, which don't require mining.",
    startingBidPrice: 0.65,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Consensus Mechanism',
    link: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Method for blockchain networks to achieve agreement on the state of the network.',
    content:
      "A consensus mechanism is the protocol that allows blockchain networks to achieve agreement on the state of the distributed ledger among decentralized participants who don't necessarily trust each other. These mechanisms solve the Byzantine Generals' Problem by establishing rules that ensure all honest participants reach the same conclusions about the validity of transactions and the order in which they occurred. The two most widely used consensus mechanisms are Proof of Work (PoW), where participants (miners) compete to solve complex mathematical puzzles to validate transactions and create new blocks, and Proof of Stake (PoS), where validators are selected to create blocks based on the amount of cryptocurrency they're willing to 'stake' as collateral. Other mechanisms include Delegated Proof of Stake (DPoS), where token holders vote for a small number of delegates who validate transactions; Proof of Authority (PoA), where a set of pre-approved validators confirm transactions; and Practical Byzantine Fault Tolerance (PBFT), which relies on a voting system among known validators. Each consensus mechanism makes different trade-offs between security, decentralization, energy efficiency, and transaction throughput.",
    startingBidPrice: 0.7,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Airdrop',
    link: 'https://ethereum.org/en/developers/tutorials/uniswap-v2-annotated-code/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description: 'Distribution of crypto tokens for free to wallet addresses.',
    content:
      'An airdrop is a distribution of cryptocurrency tokens or NFTs sent for free to multiple wallet addresses, typically to raise awareness, build community, reward loyal users, or decentralize token holdings. Projects use airdrops as a marketing strategy to bootstrap their ecosystem by creating an instant user base with skin in the game. There are several types of airdrops: standard airdrops distribute tokens to a broad set of wallet addresses; holder airdrops target users who already hold specific cryptocurrencies; participation airdrops reward users who have engaged with a protocol; and retroactive airdrops compensate users who previously used a service before the token existed. Recipients are usually identified through snapshot mechanisms that capture wallet activity at a specific time or by meeting certain criteria like holding minimum balances, transaction history, or governance participation. While airdrops provide free assets to recipients, they should be approached with caution due to potential tax implications, the risk of phishing attempts disguised as legitimate airdrops, and the possibility of receiving scam tokens with malicious smart contracts.',
    startingBidPrice: 0.5,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Bridge',
    link: 'https://ethereum.org/en/bridges/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Connection that allows the transfer of tokens and data between different blockchain networks.',
    content:
      'Blockchain bridges are protocols that enable the transfer of tokens, data, and state between different blockchain networks that would otherwise be unable to interact directly. They solve the interoperability challenge created by the siloed nature of separate blockchains, allowing users to access applications and assets across multiple networks. The two main types of bridges are: Trusted or Custodial bridges, which rely on a central entity or federated system to verify and process cross-chain transactions; and Trustless bridges, which use smart contracts and cryptographic verification methods to operate without centralized intermediaries. Bridges typically work by either locking assets on the source chain and minting wrapped representations on the destination chain, or using liquidity pools on both networks to facilitate swaps. While bridges expand the utility of blockchains by enabling cross-chain applications and capital efficiency, they introduce security considerations—bridge exploits have resulted in some of the largest hacks in DeFi history. Users should consider factors like security, decentralization, speed, and costs when choosing bridges, and understand that different designs make varying trade-offs between these factors.',
    startingBidPrice: 0.8,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Dapp',
    link: 'https://ethereum.org/en/dapps/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Decentralized Application - Application that runs on a decentralized network.',
    content:
      'A dApp (decentralized application) is an application built on blockchain infrastructure that operates without centralized control. Unlike traditional applications where backend code runs on centralized servers, dApps run on a peer-to-peer network of computers using blockchain technology for data storage and smart contracts for backend logic. This architecture ensures no single entity controls the application or its data. DApps typically have open-source code, operate autonomously through smart contracts, have their data cryptographically stored on a public blockchain, and often utilize cryptographic tokens to access the application and incentivize network participants. Common categories of dApps include decentralized finance (DeFi) platforms, NFT marketplaces, decentralized exchanges, social media networks, games, and governance applications. Users interact with dApps through web interfaces or mobile apps connected to blockchain networks via wallet software. While dApps offer benefits including censorship resistance, transparency, and user data control, they face challenges such as scalability limitations, user experience complexity, smart contract vulnerabilities, and regulatory uncertainty.',
    startingBidPrice: 0.75,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Web3',
    link: 'https://ethereum.org/en/web3/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'New iteration of the web based on blockchain technology that incorporates decentralization and token-based economics.',
    content:
      "Web3 represents the next evolution of the internet, characterized by decentralization, blockchain technology, and token-based economics. While Web1 (1990s-early 2000s) was primarily read-only with static websites, and Web2 (2000s-present) introduced interactive, user-generated content but with centralized data control by major platforms, Web3 aims to redistribute power to users through decentralized infrastructure. Core principles of Web3 include: ownership, where users control their data and digital assets through wallets and private keys; censorship resistance through decentralized networks; permissionless access that doesn't discriminate based on geography, income, or demographics; native payments via cryptocurrencies without relying on traditional financial infrastructure; and trustless operation that doesn't require trusted intermediaries. Web3 technologies include blockchains providing decentralized consensus, smart contracts enabling automated agreements, decentralized storage systems, self-sovereign identity solutions, and decentralized autonomous organizations (DAOs) for governance. While Web3 has made significant progress, it still faces challenges including scalability limitations, user experience barriers, regulatory uncertainty, and the need for better interoperability between different blockchains and Web2 systems.",
    startingBidPrice: 1.25,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Governance Token',
    link: 'https://ethereum.org/en/dao/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Token that gives holders voting rights in a protocol or platform.',
    content:
      "Governance tokens are cryptographic assets that grant holders voting rights on the future development, operations, and policy changes of blockchain protocols, DAOs, or decentralized applications. Unlike utility tokens which provide access to a network's services or cryptocurrencies designed primarily as value transfer mechanisms, governance tokens specifically enable participation in decentralized governance. Token holders can propose changes and vote on proposals ranging from technical upgrades, parameter adjustments (like interest rates in lending protocols), treasury allocations, to policy decisions. Governance systems typically employ token-weighted voting where influence corresponds to the number of tokens held, though some platforms use quadratic voting or other mechanisms to limit large holder dominance. Beyond voting rights, governance tokens often provide additional utility including protocol fee sharing, preferential access to services, or staking rewards. Major examples include Compound's COMP, Uniswap's UNI, and MakerDAO's MKR, each with its unique implementation of on-chain governance. While governance tokens enable decentralized decision-making, they face challenges including voter apathy, plutocracy concerns where wealthy token holders have outsized influence, regulatory questions about securities classification, and governance attacks when token distribution is too concentrated.",
    startingBidPrice: 0.85,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Tokenomics',
    link: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/tokenomics/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Study of the economics of crypto tokens, including supply, distribution, and incentives.',
    content:
      'Tokenomics refers to the economic design of cryptocurrency tokens, encompassing all aspects that make a token valuable and functional within its ecosystem. This includes token supply mechanics (fixed, inflationary, or deflationary), distribution methods (public sales, airdrops, mining/staking rewards), utility within the ecosystem (governance, access to services, fee payments), market dynamics (liquidity, trading pairs), and incentive structures that align participant behavior with project success. Well-designed tokenomics creates sustainable value by balancing stakeholder interests, encouraging network participation, and supporting long-term growth. Key components include: initial distribution fairness, clear utility that drives demand, supply management balancing scarcity against accessibility, value accrual mechanisms like buy-back-and-burn or dividend distribution, and governance rights that decentralize control. Different types of tokens require different tokenomic approaches—utility tokens focus on service access, governance tokens on participation incentives, security tokens on investment returns, and social tokens on community engagement. The field continues to evolve with innovations like dynamic supply adjustment, time-locked tokenomics, and hybrid models combining multiple token types within a single ecosystem.',
    startingBidPrice: 0.95,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Impermanent Loss',
    link: 'https://ethereum.org/en/defi/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Risk of providing liquidity to automated market makers when asset prices change.',
    content:
      "Impermanent loss is a phenomenon experienced by liquidity providers in automated market maker (AMM) protocols when the price of assets deposited into a liquidity pool changes compared to when they were deposited. The term 'impermanent' comes from the fact that the loss is only realized when liquidity is withdrawn; if prices return to their original level, the loss disappears. This occurs because AMMs use mathematical formulas (like x*y=k) to maintain a constant product between assets, forcing the pool to always contain a balanced value of both tokens. When external market prices change, arbitrageurs trade with the pool until its prices match the market, changing the ratio of tokens in the pool and creating a divergence from simply holding the assets. Impermanent loss is most significant in volatile asset pairs and less severe in stable pairs. While liquidity providers earn trading fees that may offset these losses, understanding impermanent loss is crucial for assessing the true profitability of liquidity provision. Some protocols attempt to mitigate this risk through concentrated liquidity positions, impermanent loss insurance, or one-sided liquidity provision models.",
    startingBidPrice: 0.6,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Zero-Knowledge Proof',
    link: 'https://ethereum.org/en/zero-knowledge-proofs/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Cryptographic method allowing one party to prove to another that a statement is true without revealing additional information.',
    content:
      "Zero-knowledge proofs (ZKPs) are cryptographic methods that allow one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information beyond the validity of the statement itself. In blockchain, this technology enables private transactions, confidential smart contracts, and scaling solutions. ZKPs must satisfy three properties: completeness (if the statement is true, an honest verifier will be convinced by an honest prover), soundness (if the statement is false, no cheating prover can convince an honest verifier that it's true), and zero-knowledge (the verifier learns nothing except the statement's validity). Two main types are commonly used: zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge), which are compact and fast to verify but require a trusted setup, and zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge), which don't require trusted setup and are quantum-resistant but produce larger proofs. ZKPs power applications including private transactions on blockchains like Zcash, Layer 2 scaling solutions like zkRollups, identity verification without revealing personal information, and confidential smart contracts that keep inputs and business logic private while proving computations were performed correctly.",
    startingBidPrice: 1.0,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'MEV',
    link: 'https://ethereum.org/en/developers/docs/mev/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Maximal Extractable Value - Profit that can be extracted from reordering or including/excluding transactions in a block.',
    content:
      'MEV (Maximal Extractable Value, formerly Miner Extractable Value) refers to the maximum value that can be extracted from block production beyond the standard block rewards and gas fees by including, excluding, or reordering transactions within blocks. This value can be captured by various participants including validators, miners, searchers (specialized MEV extractors), and users. Common MEV extraction strategies include: frontrunning, where bots place transactions ahead of pending transactions to profit from price movements; sandwich attacks, which surround a large swap with buy and sell orders to profit from price impacts; arbitrage between decentralized exchanges to exploit price differences; liquidations in lending protocols; and NFT sniping to purchase rare items before others. While MEV represents a blockchain inefficiency that can harm users through higher costs and transaction failures, the ecosystem has developed mitigations including private transaction pools, fair sequencing services, and MEV-Boost protocols that separate block building from block proposal. Flash Boys 2.0 and other research have highlighted MEV as a fundamental challenge in blockchain design that creates economic incentives potentially working against network security and user experience.',
    startingBidPrice: 0.7,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
  {
    name: 'Slippage',
    link: 'https://ethereum.org/en/defi/',
    logoUrl:
      'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp',
    description:
      'Price difference between expected and actual execution when trading crypto assets.',
    content:
      "Slippage refers to the difference between the expected price of a transaction and the actual executed price. In cryptocurrency trading, particularly on decentralized exchanges (DEXs), slippage occurs because market conditions can change during the time between when a transaction is submitted and when it's confirmed on the blockchain. Slippage is typically expressed as a percentage and can be positive (better price than expected) or negative (worse price). The primary causes include: insufficient liquidity in trading pools, where large orders cause significant price impact; market volatility, where asset prices change rapidly; blockchain congestion, causing transaction delays and wider price gaps; and MEV (Maximal Extractable Value) activities like frontrunning. To manage slippage, traders can set slippage tolerance—the maximum acceptable price difference—in their trading interface; use limit orders on DEXs that support them; break large trades into smaller portions; or trade during periods of higher liquidity and lower volatility. Understanding slippage is essential for effective crypto trading, as it directly impacts trading costs and execution quality, especially for large orders or trades involving less liquid assets.",
    startingBidPrice: 0.55,
    creatorId: 'cceb3e6b-be2b-40b4-855a-169fa0701f87',
  },
]

export const SEED_AUCTIONS_FROM_TERMS = [
  ...SEED_TERMS.map((term) => ({
    status: 'ACTIVE',
    startDate: new Date('2024-04-05T00:00:00Z'),
    endDate: new Date('2024-04-11T23:59:59Z'),
    dailyBudget: term.startingBidPrice * 100,
    totalBudget: term.startingBidPrice * 700, // 7 days total budget
    spentBudget: 0,
    creatorId: term.creatorId,
    termId: term.id,
    newsId: null,
    createdAt: new Date('2024-04-05T00:00:00Z'),
    updatedAt: new Date('2024-04-05T00:00:00Z'),
  })),
]
