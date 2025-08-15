import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/html.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/css.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "HTML",
    ket: "Language",
    dad: "900",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "CSS",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },

  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },

  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },

  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/poster1.png";
import Proyek2 from "/assets/proyek/pajak2.png";
import Proyek3 from "/assets/proyek/ibm3.png";

export const listProyek = [
{
  id: 1,
  gambar: Proyek1,
  nama: "Piagam Penghargaan Juara 3 - Desain Poster FLS2N 2023",
  desk: "Rafly Hermansyah meraih Juara 3 dalam bidang Desain Poster pada Festival dan Lomba Seni Siswa Nasional (FLS2N) jenjang SMA tingkat Kabupaten Kuantan Singingi,Riau.",
  tools: ["Lomba", "Design", "Seni"],
  durasi: "200 jam"
},

  
   {
  id: 2,
  gambar: Proyek2,
  nama: "Sertifikat Juara 3 - Lomba Cepat Tepat Perpajakan ICTP ",
  desk: "Rafly Hermansyah meraih Juara 3 pada Lomba Cepat Tepat Perpajakan tingkat SMA/SMK/MA/Sederajat se-Provinsi Riau dengan tema 'Sadar Pajak, Bukti Peduli pada Negeri'.",
  tools: ["Lomba", "Pajak", "Riau"],
  durasi: "150 jam"
},

  {
   
  id: 3,
  gambar: Proyek3,
  nama: "Certificate of Participation - Code Generations and Optimization",
  desk: "Rafly Hermansyah berhasil menyelesaikan sesi eksplorasi 'Code Generations and Optimization' dalam program Student Developer Initiative yang diselenggarakan oleh Hacktiv8 Indonesia.",
  tools: ["Pelatihan", "Code Optimization", "IBM SkillsBuild"],
  durasi: "2 hari"


  },
];
