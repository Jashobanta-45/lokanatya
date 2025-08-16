import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

interface Partys {
  id: number;
  title: string;
  gananatya: string;
  date: string;
  location: string;
  primaryImage: string;
  hoverImage: string;
  available: boolean;
  tag: string;
  link: string
}

@Component({
  selector: 'app-all-party',
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './all-party.html',
  styleUrl: './all-party.css'
})
export class AllParty {
  partysList: Partys[] = [
  {
    id: 1,
    title: "Bar Girl, 2nd Night",
    gananatya: "NatyaMandapa",
    date: "",
    location: "",
    primaryImage: "upload/pab_386092834_IMG_20250808_WA0110.jpg",
    hoverImage: "upload/pab_371092834_FB_IMG_1754546787732.jpg",
    available: true,
    tag: "#BarGirl2ndNight",
    link: "/party-details/1"
  },
  {
    id: 2,
    title: "Ei Bodhe Sesa Dekha, 3rd Night",
    gananatya: "Tulasi Gananatya",
    date: "",
    location: "",
    primaryImage: "upload/pab_461091250_IMG_20250726_WA0012.jpg",
    hoverImage: "upload/pab_823091250_IMG_20250726_WA0013.jpg",
    available: true,
    tag: "#EiBodheSesaDekha3rdNight",
    link: "/party-details/2"
  },
  {
    id: 3,
    title: "Kahai Dasa Jagannath, 2nd Night",
    gananatya: "Apera Sri Mandir",
    date: "",
    location: "",
    primaryImage: "upload/pab_923084725_FB_IMG_1754812883932.jpg",
    hoverImage: "upload/pab_502084725_FB_IMG_1754534248351.jpg",
    available: true,
    tag: "#KahaiDasaJagannath2ndNight",
    link: "/party-details/3"
  },
  {
    id: 4,
    title: "Chandaashok, 4th Night",
    gananatya: "Jatra Dhauli",
    date: "",
    location: "",
    primaryImage: "upload/pab_371094223_FB_IMG_1753952262947.jpg",
    hoverImage: "upload/pab_796094223_FB_IMG_1753890062114.jpg",
    available: true,
    tag: "#Chandaashok4thNight",
    link: "/party-details/4"
  },
  {
    id: 5,
    title: "Priya Priti Priyatama, 3rd Night",
    gananatya: "Opera Suryamandir",
    date: "",
    location: "",
    primaryImage: "upload/pab_693094705_FB_IMG_1754023115070.jpg",
    hoverImage: "upload/pab_666094705_FB_IMG_1754022982110.jpg",
    available: true,
    tag: "#PriyaPritiPriyatama3rdNight",
    link: "/party-details/5"
  },
  {
    id: 6,
    title: "A Samparkara Sesa Nahin, 3rd Night",
    gananatya: "Jtra Shree Biswadarabar",
    date: "",
    location: "",
    primaryImage: "upload/pab_672090117_FB_IMG_1754218414093.jpg",
    hoverImage: "upload/pab_799090117_FB_IMG_1754218432232.jpg",
    available: true,
    tag: "#ASamparkaraSesaNahin3rdNight",
    link: "/party-details/6"
  },
  {
    id: 7,
    title: "Sakala Tortha To Charane, 1st Night",
    gananatya: "Jatra Indrabhuban",
    date: "",
    location: "",
    primaryImage: "upload/pab_894085208_Screenshot_20250801_102446_Facebook.jpg",
    hoverImage: "upload/pab_402085208_FB_IMG_1754024045366.jpg",
    available: true,
    tag: "#SakalaTorthaToCharane1stNight",
    link: "/party-details/7"
  },
  {
    id: 8,
    title: "Daria Kulara Daradi Bandhu, 3rd Night",
    gananatya: "Ranga Mahala",
    date: "",
    location: "",
    primaryImage: "upload/pab_189084914_FB_IMG_1754023195913.jpg",
    hoverImage: "upload/pab_374084914_FB_IMG_1754023325506.jpg",
    available: true,
    tag: "#DariaKularaDaradiBandhu3rdNight",
    link: "/party-details/8"
  },
  {
    id: 9,
    title: "Jajabara, 3rd Night",
    gananatya: "Jatra Singha Bahini",
    date: "",
    location: "",
    primaryImage: "upload/pab_676083838_FB_IMG_1754967067204.jpg",
    hoverImage: "upload/pab_116083838_FB_IMG_1753934628878.jpg",
    available: true,
    tag: "#Jajabara3rdNight",
    link: "/party-details/9"
  },
  {
    id: 10,
    title: "A Mana Kaashi Brundabana, 4th Night",
    gananatya: "Sibani Gananatya",
    date: "",
    location: "",
    primaryImage: "upload/pab_172084411_FB_IMG_1753876965345.jpg",
    hoverImage: "upload/pab_473084411_FB_IMG_1753408845227.jpg",
    available: true,
    tag: "#AManaKaashiBrundabana4thNight",
    link: "/party-details/10"
  },
  {
    id: 11,
    title: "To Prema Lage Nua Nua, 1st Night",
    gananatya: "Kalinga Gananatya",
    date: "",
    location: "",
    primaryImage: "upload/pab_482093151_FB_IMG_1752809895990.jpg",
    hoverImage: "upload/pab_837093151_FB_IMG_1752730978310.jpg",
    available: true,
    tag: "#ToPremaLageNuaNua1stNight",
    link: "/party-details/11"
  },
  {
    id: 12,
    title: "Garibara Loka Dekhichhi Kie, Last Night",
    gananatya: "Swarna Mahal",
    date: "",
    location: "",
    primaryImage: "upload/pab_728090941_Screenshot_20250804_093908_Facebook.jpg",
    hoverImage: "upload/pab_330090941_FB_IMG_1753877762452.jpg",
    available: true,
    tag: "#GaribaraLokaDekhichhiKieLastNight",
    link: "/party-details/12"
  },
  {
    id: 13,
    title: "Shree Krushna Akhire Sudama Luha",
    gananatya: "Konarka Gananatya",
    date: "",
    location: "",
    primaryImage: "upload/pab_122084141_FB_IMG_1753448035456.jpg",
    hoverImage: "upload/pab_872084141_FB_IMG_1753426198003.jpg",
    available: true,
    tag: "#ShreeKrushnaAkhireSudamaLuha",
    link: "/party-details/13"
  }
]

}
