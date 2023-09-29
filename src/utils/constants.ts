import abathurImage from '../images/mock_heroes/abathur.jpg';
import azmodanImage from '../images/mock_heroes/azmodan.jpg';
import alarakImage from '../images/mock_heroes/alarak.jpg';
import alextraszaImage from '../images/mock_heroes/alextrasza.jpg';
import anaImage from '../images/mock_heroes/ana.jpg';
import anduinImage from '../images/mock_heroes/anduin.jpg';

import support5 from '../images/mock_roles/Support5.png'
import rdd2 from '../images/mock_roles/Rdd2.png'
import mdd5 from '../images/mock_roles/Mdd5.png'
import healer4 from '../images/mock_roles/Healer4.png'
import healer5 from '../images/mock_roles/Healer5.png'
import healer2 from '../images/mock_roles/Healer2.png'

export const mockHeroesData = [
  {
    id: 1,
    name: "Абатур",
    role: "support",
    complexity: "very hard",
    image: abathurImage,
    icon: support5,
    isInFreeRotation: true
  },
  {
    id: 2,
    name: "Азмодан",
    role: "range-assassin",
    complexity: "easy",
    image: azmodanImage,
    icon: rdd2,
    isInFreeRotation: false
  },
  {
    id: 3,
    name: "Аларак",
    role: "melee-assassin",
    complexity: "very hard",
    image: alarakImage,
    icon: mdd5,
    isInFreeRotation: true
  },
  {
    id: 4,
    name: "Алекстраза",
    role: "healer",
    complexity: "hard",
    image: alextraszaImage,
    icon: healer4,
    isInFreeRotation: false
  },
  {
    id: 5,
    name: "Ана",
    role: "healer",
    complexity: "very hard",
    image: anaImage,
    icon: healer5,
    isInFreeRotation: true
  },
  {
    id: 6,
    name: "Андуин",
    role: "healer",
    complexity: "easy",
    image: anduinImage,
    icon: healer2,
    isInFreeRotation: false
  },
]

export const mockSiteUpdates = [
  {
    date: "2 июля 2023",
    updateTheme: "Дехака",
    changes: ["обновлены билды", "добавлен раздел с контрпиками"]
  },
  {
    date: "28 июня 2023",
    updateTheme: "Алмазный тир-лист",
    changes: ["обновлен"]
  },
  {
    date: "12 июня 2023",
    updateTheme: "Проклятая лощина",
    changes: ["создан гайд на карту"]
  },
  {
    date: "12 июня 2023",
    updateTheme: "Тираэль",
    changes: ["добавлен билд через автоатаки"]
  },
  {
    date: "11 июня 2023",
    updateTheme: "Тир-лист ARAM-а",
    changes: ["создан"]
  },
]