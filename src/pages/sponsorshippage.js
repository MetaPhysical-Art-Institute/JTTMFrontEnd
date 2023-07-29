import React from 'react';
import Sponsor from '../components/Sponsors/sponsor';
import './sponsorshippage.css'; 

const SponsorshipPage = () => {
  return (
    <div>
      <p className="sponsorship-paragraph">
        <h1>On-Chain Sponsorships</h1>
      Dear Potential Sponsor,

We are delighted to present you with an exceptional sponsorship opportunity to support our innovative gaming project. The purpose of this sponsorship is to fund the gasless transactions that take place behind the scenes within our game, ensuring a seamless and efficient gaming experience for our users.

As a sponsor, your advertisement will enjoy prominent exposure throughout various levels of the game, at its inception, and also in the credits. The duration of the advertisement will be determined by the number of days you select for the sponsorship.

The advertisement format we offer is image-based, providing a visually engaging showcase for your brand. To maintain the integrity of our decentralized platform, your ad will be uploaded to the InterPlanetary File System (IPFS), and you will simply need to pass the corresponding URL into the designated "Image URI" input field.

One of the unique aspects of this sponsorship is its on-chain nature, facilitated by the Fantom blockchain. While this might be unfamiliar territory for some, it offers numerous benefits. First and foremost, by leveraging blockchain technology, our gasless transactions eliminate the need for users to pay transaction fees, enhancing user experience and encouraging greater participation. Additionally, the transparency and immutability of the blockchain ensure that your sponsorship is recorded securely, providing clear proof of your valuable contribution.

Regarding donation amounts, you have the flexibility to choose an amount that aligns with your preferences and budget. However, it's worth noting that higher donations will be prioritized in terms of the sponsorship duration.

To contribute, you'll need to connect your wallet to the FTM blockchain, which may sound complex, but we're here to guide you through the process, ensuring a smooth and secure transaction.

As an exclusive perk of your sponsorship, we will mint an NFT (Non-Fungible Token) without any metadata attached. Only our developers will be able to view the details, which include the duration of your sponsorship, your company name, and the payment amount. This NFT serves as a receipt of your sponsorship and will be minted and sent to your company's wallet, providing an enduring testament of your support.

We are excited about the prospect of partnering with you on this innovative initiative. Should you have any questions about sponsorships or if you prefer to make a Fiat donation, please don't hesitate to contact us at MetaPhysicalArt@gmail.com.

Thank you very much for considering this opportunity to be part of our groundbreaking gaming project.

Sincerely,
Journey to the Mothership Team
      </p>
      <Sponsor />
      {/* Add other components or content for the sponsorship page below */}
    </div>
  );
};

export default SponsorshipPage;
