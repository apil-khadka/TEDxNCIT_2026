import NcitImg from '@images/sponsors/ncit.svg';
import BroadwayImg from '@images/sponsors/broadway_infosys.svg';
import DonutDroolImg from '@images/sponsors/donut_drool.jpg';
import DlSurfImg from '@images/sponsors/dl_surf.svg';
import FrenzieFriesImg from '@images/sponsors/frenzie_fries.jpg';
import HangryGenImg from '@images/sponsors/hangry_gen.png';
import MandiraFoodsImg from '@images/sponsors/mandhira.png';
import NextSkillsImg from '@images/sponsors/next_skills.png';
import RadheyOrganicsImg from '@images/sponsors/radhey_organic.png';
import SuiroTeasImg from '@images/sponsors/suiro-logo.png';
import VertexSpecialTechImg from '@images/sponsors/vertex_special.png';
import OopsNepalImg from '@images/sponsors/oops_nepal.png';
import HimaAusImg from '@images/sponsors/hima_aus.png';
import TheWonderlandImg from '@images/sponsors/the_wonderland.jpg';
import LahanaHasImg from '@images/sponsors/lahana_hastakala.jpeg';
import CakeWavesImg from '@images/sponsors/cake_wars.jpeg';
import LeoClubBhrikutiImg from '@images/sponsors/Leo_Club_of_Bhrikuti.jpg';
import RotaractClubMadhyapurImg from '@images/sponsors/Rotract_Club_of_Madhyapur.jpg';
import SipNSkipImg from '@images/sponsors/Sip_N_Skip.jpg';
import TedxThimphuImg from '@images/sponsors/TEDxThimpu.jpg';
import BiheNepalImg from '@images/sponsors/bihe_nepal.png';
import BennevisImg from '@images/sponsors/bennevis.jpg';

// Define Types
export interface Sponsor {
  id: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  url: string;
  img: ImageMetadata;
}

/* =======================
   GOLD SPONSORS
======================= */
export const goldSponsors: ({ id: string; name: string; type: string; description: string; longDescription: string; url: string; img: {} })[] = [
  {
    id: 'g1',
    name: 'Nepal College of Information Technology (NCIT)',
    type: 'Title Sponsor',
    description: 'Empowering future engineers and innovators.',
    longDescription:
      'Nepal College of Information Technology (NCIT), located in Balkumari, is one of Nepal’s leading engineering institutions. NCIT supports this event by fostering innovation, technical excellence, and industry-ready education among students.',
    url: 'https://ncit.edu.np',
    img: NcitImg,
  },
  {
    id: 'g2',
    name: 'Hima Aus Education Consultancy',
    type: 'Title Sponsor',
    description: 'Leading international education and visa consultancy.',
    longDescription:
      'HIMAUS Consultancy (Hima Aus Education Australia Pty Ltd) is a licensed and internationally-operating education and visa consultancy founded in Sydney in 2008. The organization provides end-to-end support for students pursuing study abroad opportunities by offering personalized counseling, course and university selection, test preparation, admissions and documentation support, visa assistance, pre-departure briefings, and airport pickup services. With a presence in multiple countries including Nepal, Australia, India, Sri Lanka, and Thailand, HIMAUS is deeply committed to helping students achieve their global education goals. As the Title Sponsor of TEDxNCIT, HIMAUS champions global opportunities, student support, and future-focused journeys.',
    url: 'https://himaaus.com/',
    img: HimaAusImg,
  },
];

/* =======================
   SILVER / EDUCATION
======================= */
export const silverSponsors: {
  id: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  url: string;
  img: {}
}[] = [
  {
    id: 's1',
    name: 'Broadway Infosys',
    type: 'Education Partner',
    description: 'Learning beyond classrooms.',
    longDescription:
      'Broadway Infosys contributes as an education partner by providing pens and notebooks to participants, supporting learning and note-taking throughout the event.',
    url: 'https://broadwayinfosys.com',
    img: BroadwayImg,
  },
];

/* =======================
   BRONZE / TECH / REFRESHMENTS
======================= */
export const bronzeSponsors: ({ id: string; name: string; type: string; description: string; longDescription: string; url: string; img: {} })[] = [
  {
    id: 'b1',
    name: 'Donut Drool',
    type: 'Bronze Sponsor',
    description: 'Sweet treats for attendees.',
    longDescription:
      'Donut Drool supports the event by providing discount vouchers to attendees and gift hampers for 10 speakers, adding a delightful experience throughout the event.',
    url: 'https://www.instagram.com/donut_drool/?hl=en',
    img: DonutDroolImg,
  },
  {
    id: 'b2',
    name: 'Vertex Special Technology',
    type: 'Technology Partner',
    description: 'Innovative tech solutions.',
    longDescription:
      'Vertex Special Technology is a Nepal-based technology company that delivers modern digital and software solutions to businesses and organizations. They provide technical support and innovative solutions that enhance the overall experience for attendees and organizers.',
    url: 'https://vertexspecial.com/',
    img: VertexSpecialTechImg,
  },
];

/* =======================
   COMMUNITY / SUPPORTERS
======================= */
export const communitySponsors: ({
  id: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  url: string;
  img: {}
})[] = [
  {
    id: 'c1',
    name: 'Frenzie Fries',
    type: 'Supporting Partner',
    description: 'Crispy fries for everyone.',
    longDescription:
      'Frenzie Fries offers a discount to attendees and provides vouchers to encourage participants to enjoy quality meals during the event.',
    url: 'https://www.instagram.com/frenzie_fries/?hl=en',
    img: FrenzieFriesImg,
  },
  {
    id: 'c2',
    name: 'Hangry Gen',
    type: 'Supporting Partner',
    description: 'Never stay hungry.',
    longDescription:
      'Hangry Gen supports the event by offering a discount to attendees and providing meal vouchers to speakers.',
    url: 'https://hangrygen.com',
    img: HangryGenImg,
  },
  {
    id: 'c3',
    name: 'DL Surf',
    type: 'Supporting Partner',
    description: 'Premium digital access.',
    longDescription:
      'DL Surf provides premium accounts of their platform to attendees, enhancing digital engagement and learning opportunities.',
    url: 'https://dlsurf.com',
    img: DlSurfImg,
  },
  {
    id: 'c4',
    name: 'Next Skills Academy',
    type: 'Supporting Partner',
    description: 'Empowering future skills.',
    longDescription:
      'Next Skills supports the event through financial contribution, helping strengthen skill-focused initiatives and activities.',
    url: 'https://nsacademy.com.np/',
    img: NextSkillsImg,
  },
  {
    id: 'c5',
    name: 'Radhey Organics',
    type: 'Supporting Partner',
    description: 'Pure and organic nutrition.',
    longDescription:
      'Radhey Organics contributes organic dairy products for speakers, ensuring healthy and natural refreshments during the event.',
    url: 'https://radheyorganics.com',
    img: RadheyOrganicsImg,
  },
  {
    id: 'c6',
    name: 'Mandira Foods',
    type: 'Supporting Partner',
    description: 'Taste that cares.',
    longDescription:
      'Mandira Foods supports the event by providing curated gift hampers for speakers as a token of appreciation.',
    url: 'https://mandirafoods.com',
    img: MandiraFoodsImg,
  },
  {
    id: 'c7',
    name: 'Suiro Teas',
    type: 'Gifting Partner',
    description: 'Premium tea experience.',
    longDescription:
      'Suiro Teas contributes premium tea gift hampers for speakers, adding a refined beverage experience to the event.',
    url: 'https://suiroteas.com',
    img: SuiroTeasImg,
  },
  {
    id: 'c8',
    name: 'OOPS Nepal',
    type: 'Gaming Partner',
    description: 'Family entertainment and experience partner.',
    longDescription:
      'OOPS Nepal is a family entertainment centre offering arcade games, VR and simulation activities. As a supporter, OOPS Nepal provides redeemable vouchers and influencer/gift vouchers for speakers.',
    url: 'https://www.instagram.com/oopsinnepal/?hl=en',
    img: OopsNepalImg,
  },
  {
    id: 'c9',
    name: 'The Wonderland',
    type: 'Entertainment Partner',
    description: 'Nepal’s premier amusement park and family adventure hub.',
    longDescription:
      'The Wonderland provides premium entertainment experiences and supports events through venue/experience collaboration and promotional offers.',
    url: 'https://www.instagram.com/the_wonderland_ktm/?hl=en',
    img: TheWonderlandImg,
  },
  {
    id: 'c10',
    name: 'Lahana Hastakala Udhyog',
    type: 'Supporting Partner',
    description: 'Eco-friendly paper crafts and traditional handmade accessories.',
    longDescription:
      'Lahana Hastakala Udhyog specializes in sustainable handmade products and contributes locally-made crafts and gift items.',
    url: 'https://www.instagram.com/lahana.papercrafts/?hl=en',
    img: LahanaHasImg,
  },
  {
    id: 'c11',
    name: 'Cake Waves',
    type: 'Cake Partner',
    description: 'Customized cakes and delightful treats.',
    longDescription:
      'Cake Waves is a modern bakery and cake studio in Kathmandu, providing signature confectionery for the event.',
    url: 'https://www.instagram.com/cakewavesbakery/',
    img: CakeWavesImg,
  },
  {
    id: 'c12',
    name: 'Leo Club of Kathmandu Bhrikuti',
    type: 'Community Partner',
    description: 'Youth volunteer organization.',
    longDescription:
      'The Leo Club of Kathmandu Bhrikuti is a youth volunteer service organization focused on community initiatives and volunteering.',
    url: 'https://www.instagram.com/lck_bhrikuti/?hl=en',
    img: LeoClubBhrikutiImg,
  },
  {
    id: 'c13',
    name: 'Rotaract Club of Madhyapur',
    type: 'Community Partner',
    description: 'Leadership, professional development and community impact.',
    longDescription:
      'The Rotaract Club of Madhyapur engages young leaders in community projects and local social initiatives.',
    url: 'https://rotaractmadhyapur.com',
    img: RotaractClubMadhyapurImg,
  },
  {
    id: 'c14',
    name: 'Sip N Skip',
    type: 'Supporting Partner',
    description: 'Rooftop restaurant and bar in Putalisadak.',
    longDescription:
      'Sip N Skip provides hospitality services and a versatile space suitable for community interaction and social celebrations.',
    url: 'https://www.instagram.com/sipskip/?hl=en',
    img: SipNSkipImg,
  },
  {
    id: 'c15',
    name: 'TEDxThimphu',
    type: 'International Community Partner',
    description: 'Independent TEDx event from Bhutan.',
    longDescription:
      'TEDxThimphu is an independently organized TED event in Bhutan that collaborates cross-border to spread ideas worth sharing.',
    url: 'https://www.tedxthimphu.com',
    img: TedxThimphuImg,
  },
  {
    id: 'c16',
    name: 'Bennevis',
    type: 'Supporting Partner',
    description: 'Premium ice cream brand.',
    longDescription:
      'Bennevis provides high-quality frozen treats and supports events by supplying desserts and ice-cream offerings.',
    url: 'https://www.instagram.com/bennevisicecream/?hl=en',
    img: BennevisImg,
  },
  {
    id: 'c17',
    name: 'Bihe Nepal',
    type: 'Supporting Partner',
    description: 'Commitment-based dating & matchmaking platform.',
    longDescription:
      'Bihe Nepal is a local matchmaking and dating platform that focuses on meaningful long-term connections and supports community-building initiatives.',
    url: 'https://bihenepal.com',
    img: BiheNepalImg,
  },
];
