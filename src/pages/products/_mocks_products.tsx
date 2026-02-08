import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Concept Design",
    title: "Koncepcja architektoniczna",
    shortDescription:
      "Pierwszy etap projektu – wizja, układ funkcjonalny i kierunek estetyczny.",
    description:
      "Opracowanie koncepcji architektonicznej inwestycji, która stanowi fundament dalszych etapów projektowych. " +
      "W ramach usługi powstaje układ funkcjonalny, bryła budynku, wstępne rozwiązania materiałowe " +
      "oraz ogólna idea estetyczna. Koncepcja umożliwia świadome decyzje inwestycyjne " +
      "i pozwala ocenić potencjał działki oraz założenia projektowe przed rozpoczęciem prac technicznych.",
    image:
      "https://www.modelical.com/wp-content/uploads/2014/03/Rhinoceros-400x250-1.jpg.webp",
    price: 4500,
    duration: 120,
  },
  {
    id: "2",
    name: "Building Permit",
    title: "Projekt do pozwolenia na budowę",
    shortDescription:
      "Kompletny projekt wymagany do uzyskania decyzji administracyjnej.",
    description:
      "Przygotowanie projektu architektoniczno-budowlanego zgodnie z obowiązującymi przepisami " +
      "i wymaganiami urzędowymi. Dokumentacja obejmuje część architektoniczną, " +
      "uzgodnienia formalne oraz niezbędne opracowania pozwalające na złożenie wniosku " +
      "o pozwolenie na budowę. Projekt stanowi spójne rozwinięcie zatwierdzonej koncepcji.",
    image:
      "https://www.modelical.com/wp-content/uploads/2014/02/PloteadoAutocad.NET-400x250-1.jpg.webp",
    price: 9800,
    duration: 240,
  },
  {
    id: "3",
    name: "Interior Design",
    title: "Projekt wnętrz",
    shortDescription:
      "Funkcjonalne i estetyczne wnętrza dopasowane do użytkownika.",
    description:
      "Kompleksowy projekt wnętrz obejmujący układ funkcjonalny, " +
      "dobór materiałów, kolorystyki, oświetlenia oraz elementów wyposażenia. " +
      "Projekt uwzględnia zarówno estetykę, jak i ergonomię przestrzeni, " +
      "tworząc spójne i ponadczasowe wnętrza dopasowane do charakteru inwestycji.",
    image: "https://inzynierbudownictwa.pl/images/magda/AutodeskRevitpol2.jpg",
    price: 7200,
    duration: 180,
  },
];
