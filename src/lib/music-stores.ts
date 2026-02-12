import { FaAmazon, FaApple, FaDeezer, FaSpotify, FaYoutube } from 'react-icons/fa6';
import { TbBrandTidal } from 'react-icons/tb';

export const MUSIC_STORES = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/2opN2BRNgnBJIO932Kyr3U',
    icon: FaSpotify,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/john-rod-dondoyano/1716913960',
    icon: FaApple,
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCKk0kHA3fmAkxoaqYj_2RSw',
    icon: FaYoutube,
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/artists/B088P7883M/john-rod-dondoyano',
    icon: FaAmazon,
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/artist/94847662',
    icon: FaDeezer,
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/artist/19629668',
    icon: TbBrandTidal,
  },
];
