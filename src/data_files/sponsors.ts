import NcitImg from '@images/sponsors/ncit.svg';
import BroadwayImg from '@images/sponsors/broadway_infosys.svg';
import DonutDroolsImg from '@images/sponsors/donut_drool.jpg';
import DlSurfImg from '@images/sponsors/dl_surf.svg';
import FrenzeFriesImg from '@images/sponsors/frenzie_fries.jpg';
import HangryGenImg from '@images/sponsors/hangry_gen.png';
import MandiraFoodsImg from '@images/sponsors/mandhira.png';
import NextSkillsImg from '@images/sponsors/next_skills.png';
import RadheyOrganicsImg from '@images/sponsors/radhey_organic.png';
import SuiroTeasImg from '@images/sponsors/suiro-logo.png';

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
export const goldSponsors: Sponsor[] = [
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
];

/* =======================
   SILVER SPONSORS
======================= */
export const silverSponsors: Sponsor[] = [
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
   BRONZE SPONSORS
======================= */
export const bronzeSponsors: Sponsor[] = [
  {
    id: 'b1',
    name: 'Donut Drools',
    type: 'Refreshments',
    description: 'Sweet treats for attendees.',
    longDescription:
      'Donut Drools supports the event by providing discount vouchers to attendees and gift hampers for 10 speakers, adding a delightful experience throughout the event.',
    url: 'https://www.instagram.com/donut_drool/?hl=en',
    img: DonutDroolsImg,
  },
];

/* =======================
   COMMUNITY / SUPPORTERS
======================= */
export const communitySponsors: Sponsor[] = [
  {
    id: 'c1',
    name: 'Frenzie Fries',
    type: 'Food Partner',
    description: 'Crispy fries for everyone.',
    longDescription:
      'Frenzie Fries offers a 15% discount to all attendees and provides five vouchers worth NPR 500 each, encouraging participants to enjoy quality meals during the event.',
    url: 'https://www.instagram.com/frenzie_fries/?hl=en',
    img: FrenzeFriesImg,
  },
  {
    id: 'c2',
    name: 'Hangry Gen',
    type: 'Food Partner',
    description: 'Never stay hungry.',
    longDescription:
      'Hangry Gen supports the event by offering a 10% discount to all attendees and providing 12 meal vouchers worth NPR 1000 each to speakers.',
    url: 'https://hangrygen.com',
    img: HangryGenImg,
  },
  {
    id: 'c3',
    name: 'DL Surf',
    type: 'Education Partner',
    description: 'Premium digital access.',
    longDescription:
      'DL Surf provides five premium accounts of their platform to attendees, enhancing digital engagement and learning opportunities.',
    url: 'https://dlsurf.com',
    img: DlSurfImg,
  },
  {
    id: 'c4',
    name: 'Next Skills',
    type: 'Skills Partner',
    description: 'Empowering future skills.',
    longDescription:
      'Next Skills supports the event through financial contribution, helping strengthen skill-focused initiatives and activities.',
    url: 'https://nsacademy.com.np/',
    img: NextSkillsImg,
  },
  {
    id: 'c5',
    name: 'Radhey Organics',
    type: 'Organic Food Partner',
    description: 'Pure and organic nutrition.',
    longDescription:
      'Radhey Organics contributes organic dairy products for 10 speakers, ensuring healthy and natural refreshments during the event.',
    url: 'https://radheyorganics.com',
    img: RadheyOrganicsImg,
  },
  {
    id: 'c6',
    name: 'Mandira Foods',
    type: 'Food Gifts Partner',
    description: 'Taste that cares.',
    longDescription:
      'Mandira Foods supports the event by providing curated gift hampers for 10 speakers as a token of appreciation.',
    url: 'https://mandirafoods.com',
    img: MandiraFoodsImg,
  },
  {
    id: 'c7',
    name: 'Suiro Teas',
    type: 'Beverage Partner',
    description: 'Premium tea experience.',
    longDescription:
      'Suiro Teas contributes premium tea gift hampers for 10 speakers, adding a refined beverage experience to the event.',
    url: 'https://suiroteas.com',
    img: SuiroTeasImg,
  },
];
