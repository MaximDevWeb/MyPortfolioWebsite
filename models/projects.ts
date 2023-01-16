import { ProjectItem } from "assets/types/app";

export const thisProject: ProjectItem = {
  name: "nal-frontend",
  description: "My portfolio website",
  created_year: "2023",
  frameworks: ["Nuxt"],
  languages: ["Vue", "TypeScript", "SCSS"],
  commits: 9,
  github_link: "https://github.com/MaximDevWeb/nal-frontend",
};

export const projects: Array<ProjectItem> = [
  {
    name: "DiskReact",
    description: `Фронтенд часть на React 
                для клона Яндекс.Диска`,
    created_year: "2022",
    frameworks: ["React"],
    languages: ["React", "TypeScript", "SCSS"],
    commits: 29,
    link: "https://disk-react.maxim-dev.ru",
    github_link: "https://github.com/MaximDevWeb/DiskReact",
  },
  {
    name: "DiskVue",
    description: `Фронтенд часть на Vue 
                для клона Яндекс.Диска`,
    created_year: "2022",
    frameworks: ["Vue"],
    languages: ["Vue", "TypeScript", "SCSS"],
    commits: 31,
    link: "https://disk-vue.maxim-dev.ru",
    github_link: "https://github.com/MaximDevWeb/DiskVue",
  },
  {
    name: "DiskApi",
    description: `Бакенд часть на Laravel 
                для клона Яндекс.Диска`,
    created_year: "2022",
    frameworks: ["Laravel"],
    languages: ["Php", "Blade"],
    commits: 15,
    github_link: "https://github.com/MaximDevWeb/DiskApi",
  },
  {
    name: "ChatFrontVue",
    description: "Фронтенд часть на Vue для сайта чата",
    created_year: "2022",
    frameworks: ["Vue"],
    languages: ["Vue", "TypeScript", "SCSS"],
    commits: 43,
    github_link: "https://github.com/MaximDevWeb/ChatAPI",
  },
  {
    name: "ChatAPI",
    description: "Бакенд часть на Laravel для сайта чата",
    created_year: "2022",
    frameworks: ["Laravel"],
    languages: ["Php"],
    commits: 18,
    github_link: "https://github.com/MaximDevWeb/ChatAPI",
  },
  {
    name: "Velo_mir",
    description: 'Wordpress сайт для магазина "Веломир34"',
    created_year: "2021",
    frameworks: ["Wordpress"],
    languages: ["Php", "JavaScript"],
    commits: 132,
    link: "https://velomir34.ru/",
    github_link: "https://github.com/Makkssimka/Velo_mir",
  },
  {
    name: "Velo_mir",
    description: 'Сайт для пицерии "Ёpizza" на Vue',
    created_year: "2021",
    frameworks: ["Vue"],
    languages: ["Vue", "JavaScript", "Sass"],
    commits: 35,
    link: "https://epizza.su/",
    github_link: "https://github.com/Makkssimka/epizza",
  },
  {
    name: "dvery",
    description: `Сайт для магазина дверей 
                "Випсервис" на собственном фреймворке`,
    created_year: "2018",
    frameworks: ["Собственный фреймворк"],
    languages: ["Php", "JavaScript", "Sass"],
    commits: 15,
    link: "https://dveri.vipservis.su",
    github_link: "https://github.com/Makkssimka/dvery",
  },
  {
    name: "mebel",
    description: 'Ландинг по корпусной мебели для "Випсервис"',
    created_year: "2019",
    frameworks: ["Без фреймворка"],
    languages: ["Php", "JavaScript", "Sass"],
    commits: 0,
    link: "https://mebel.vipservis.su",
  },
  {
    name: "potolok",
    description: `Сайт для магазина натяжных
                потолков "Випсервис" на Laravel`,
    created_year: "2019",
    frameworks: ["Laravel"],
    languages: ["Php", "JavaScript", "Sass"],
    commits: 0,
    link: "https://potolok.vipservis.su",
  },
  {
    name: "okna",
    description: 'Ландинг по остеклению для "Випсервис"',
    created_year: "2018",
    frameworks: ["Laravel"],
    languages: ["Php", "JavaScript", "Sass"],
    commits: 0,
    link: "https://okno.vipservis.su",
  },
  {
    name: "split",
    description: `Сайт для магазина сплит-систем
                "Випсервис" на Laravel`,
    created_year: "2019",
    frameworks: ["Laravel"],
    languages: ["Php", "JavaScript", "Sass"],
    commits: 0,
    link: "https://split.vipservis.su/",
  },
  {
    name: "mebel",
    description: 'Ландинг для базы отдыха "Золотая рыбка"',
    created_year: "2016",
    frameworks: ["Без фреймворка"],
    languages: ["Php", "JavaScript", "Sass"],
    commits: 0,
    link: "https://don-turbaza.ru",
  },
];
