import HearoLogo from './HearoLogo.png';
import TaskfullLogo from './TaskFullRounded.png';
import LetMeAskLogo from './LetMeAskRounded.png';
import hymnRounded from './hymnRounded.png';
import NUPayLogo from './NUWalletRounded.png';
import ICSRounded from './ICSRounded.png';
import tagalongRounded from './tagalongRounded.png';
import ARNLPRounded from './AllRecipes-NLPRounded.png';
import HarunLogo from './HarunLogo.png';
import RetrieveLogo from './RetrieveAwardsLogo.png';
import MeetMe from './MeetMe.png';

export const PROJECTS = {
  projects: [
    {
      name: "Aaron Kaneti's website",
      github_link: 'https://github.com/ahkaneti/aaronkaneti.com/tree/master',
      used_technologies: 'React.js',
      short_description: 'My portfolio website.',
      description:
        'The website that you are viewing right now. I built this website from the ground up to be a display of my abilities in React.js.',
      logo: HarunLogo,
      color: 'blue',
    },
    {
      name: 'LetMeAsk',
      github_link: 'https://github.com/cs394-s20/LetMeAsk',
      used_technologies: 'React Native',
      short_description: 'Ask your questions to the authors of your classes!',
      description:
        "Project created for the class CS 394. The point of this project was to create an application where students could ask questions directly to the author's of textbooks.",
      contributors:
        'Brian Sui, Zhuping Yu, Patrice Powers, Jordan Zax, Andrew Courtner and Zev Stravitz',
      logo: LetMeAskLogo,
      color: 'lightblue',
    },
    {
      name: 'TaskFull',
      github_link: 'https://github.com/cs394-s20/TaskFull',
      used_technologies: 'React.js',
      short_description: 'Share your tasks with eligible other task-doers!',
      description:
        'Project created for the class CS 394. This web app was created to help people in need with tasks that were too cumbersome to overcome, by having other people help the user.',
      icon: '../assets/TaskfullLogo.jpg',
      contributors:
        'Brian Sui, Zhuping Yu, Patrice Powers, Jordan Zax, Andrew Courtner and Zev Stravitz',
      logo: TaskfullLogo,
      color: 'mediumpurple',
    },
    {
      name: 'AllRecipes-NLP',
      github_link: 'https://github.com/wdnnll21/allrecipes-nlp',
      used_technologies: 'Python',
      short_description: 'Change your recipes using NLP!',
      description:
        'A Natural Language Processing project for the class CS 337. The point of this application was to adapt recipes by handling prompts from user inputs.',
      contributors: 'Adnan Can Turkay',
      logo: ARNLPRounded,
      color: 'black',
    },
    {
      name: 'Retrieving Awards',
      github_link:
        'https://github.com/canturkay/NLP-Projects/tree/master/Project1',
      used_technologies: 'Python',
      short_description:
        'Check tweets and see who won what using this NLP project.',
      description:
        "A Natural Language Processing project for the class CS 337. This project skimmed through tweets to find award names and winners for the Academy Awards by being trained with previous years' tweets.",
      contributors: 'Adnan Can Turkay',
      logo: RetrieveLogo,
      color: 'purple',
    },
    {
      name: 'MeetMe',
      github_link: 'https://github.com/397-F19/red',
      used_technologies: 'React.js, Auth0, Firebase',
      description:
        'A web application created for the class CS 397. Designed to help busy people meet with their friends at their own accords.',
      short_description: 'Busy? Meet with your friends easily',
      contributors: 'Bradley Ramos, Danyil Pysmak and Terry Tan',
      video_link: 'https://www.youtube.com/embed/A9nDgV5uQt8',
      logo: MeetMe,
      color: 'white',
    },
    {
      name: 'I-Come-Sopra',
      github_link: 'https://github.com/i-come-sopra/i-come-sopra.github.io',
      used_technologies: 'Python, TensorFlow, HTML, CSS',
      short_description:
        'An anagram for AI Composer, I-Come-Sopra is a machine learning project that composes English Folk Music.',
      description:
        'I Come Sopra was a Machine Learning project that was fed in English Folk Music and was asked to create new music using the data that was fed in. Examples are visible in website with more detailed explanation of project.',
      contributors: 'Efe Saatci and Emre Arda Genc',
      other_links: 'https://i-come-sopra.github.io',
      logo: ICSRounded,
      color: 'darkblue',
    },
    {
      name: 'Tagalong',
      github_link: 'https://github.com/ahkaneti/AppDev',
      presentation_link:
        'https://docs.google.com/presentation/d/1D-HSyiHXLehmH0bztF0n6qnSt9edA44f1-h6EQNfWGU/edit?usp=sharing',
      used_technologies: 'React Native',
      description:
        'An application created to help people in groups safely travel to different locations.',
      short_description:
        'Let your close friends tag along for your lonely travels!',
      contributors: 'Kieran Bondy, Adnan Can Turkay, Bradley Ramos and Ka Wong',
      logo: tagalongRounded,
      color: 'mediumpurple',
    },
    {
      name: 'NUPay',
      github_link: 'https://github.com/ahkaneti/nupay',
      used_technologies: 'HTML5, CSS3, JavaScript',
      short_description: 'The internet wallet',
      description:
        'A web page created for the class CS 330. The point of the app was to create a prototype of Venmo where you could just send money to other people by touching phones.',
      contributors: 'Deokcelmo Filho, Danyil Pysmak and Ishaan Madan',
      video_link: 'https://www.youtube.com/embed/hj_7ktIy6tA',
      logo: NUPayLogo,
      color: 'purple',
    },
    {
      name: 'hymn',
      github_link: 'https://github.com/ahkaneti/hymn',
      used_technologies: 'HTML5, CSS3, JavaScript',
      short_description: 'Internet Music Database',
      description:
        'A startup that was built to give music suggestions and music ratings, with the intent of becoming an internet music database.',
      contributors: 'Cem Unuvar, Adnan Can Turkay and Alp Kismir',
      video_link: 'https://www.youtube.com/embed/hbupW_D4230',
      logo: hymnRounded,
      color: 'black',
    },
    {
      name: 'Hearo',
      github_link: 'https://github.com/ralfisalhon/Hearo-noSensitive',
      used_technologies:
        'React Native, Voximplant API, Google Speech-to-Text API, Twilio API',
      short_description: 'Your conference call personal assistant.',
      description:
        "Hearo is an application that can transcribe any voice call made through it. The transcriptions can be saved inside of the user's phone or emailed directly to an email address.",
      icon: '../assets/HearoLogo.png',
      contributors: 'Ralfi Salhon and Eytan Nahmiyas',
      video_link: 'https://www.youtube.com/embed/QadrLYQTbFI',
      logo: HearoLogo,
      color: 'teal',
    },
  ],
};
