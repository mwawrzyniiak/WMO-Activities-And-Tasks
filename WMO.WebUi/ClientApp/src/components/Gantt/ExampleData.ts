import { Task } from "./Task";

export default function ExampleData(): Array<Task> {

    return [
        // {
        //     id: 0,
        //     name: "test",
        //     duration: 3,
        //     role: "jwl",
        //     predecessors: [5]
        // },
        // {
        //     id: 1,
        //     name: "Wyświetlenie informacji o warunkach realizacji zlecenia – opracowanie przepływu zasadniczego",
        //     duration: 2,
        //     role: "Analityk",
        //     predecessors: []
        // },
        // {
        //     id: 2,
        //     name: "Generowanie dokumentu wydania zamówienia – opracowanie przepływu zasadniczego",
        //     duration: 2,
        //     role: "Analityk",
        //     predecessors: []
        // },
        // {
        //     id: 3,
        //     name: "Generowanie dokumentu wydania zamówienia – opracowanie przepływów alternatywnych",
        //     duration: 3,
        //     role: "Analityk",
        //     predecessors: [
        //         2
        //     ]
        // },
        // {
        //     id: 4,
        //     name: "Poinformowanie o wydłużeniu zamówienia – wykonanie oprogramowania",
        //     duration: 5,
        //     role: "Deweloper",
        //     predecessors: []
        // },
        // {
        //     id: 5,
        //     name: "Wyświetlenie informacji o warunkach realizacji zlecenia – stworzenie projektu oprogramowania dla przepływu zasadniczego",
        //     duration: 3,
        //     role: "Projektant",
        //     predecessors: [
        //         1
        //     ]
        // },
        // {
        //     id: 6,
        //     name: "Wyświetlenie informacji o warunkach realizacji zlecenia – wykonanie oprogramowania",
        //     duration: 4,
        //     role: "Deweloper",
        //     predecessors: [
        //         5
        //     ]
        // },
        // {
        //     id: 7,
        //     name: "Generowanie dokumentu wydania zamówienia – stworzenie projektu oprogramowania dla przepływu zasadniczego i alternatywnych",
        //     duration: 3,
        //     role: "Projektant",
        //     predecessors: [
        //         3
        //     ]
        // },
        // {
        //     id: 8,
        //     name: "Generowanie dokumentu wydania zamówienia – wykonanie oprogramowania",
        //     duration: 8,
        //     role: "Deweloper",
        //     predecessors: [
        //         7
        //     ]
        // },
        // {
        //     id: 9,
        //     name: "Wyświetlenie informacji o warunkach realizacji – zaprojektowanie środowiska wdrożeniowego",
        //     duration: 4,
        //     role: "Architekt",
        //     predecessors: [
        //         6
        //     ]
        // },
        // {
        //     id: 10,
        //     name: "Generowanie dokumentu wydania zamówienia – zaprojektowanie środowiska wdrożeniowego",
        //     duration: 4,
        //     role: "Architekt",
        //     predecessors: [
        //         8
        //     ]
        // },
        // {
        //     id: 11,
        //     name: "Integracja oprogramowania",
        //     duration: 5,
        //     role: "Architekt",
        //     predecessors: [
        //         9,
        //         10
        //     ]
        // },
        // {
        //     id: 12,
        //     name: "Wyświetlenie informacji o warunkach realizacji – wdrożenie na środowisku testowym",
        //     duration: 1,
        //     role: "Wdrożeniowiec",
        //     predecessors: [
        //         11
        //     ]
        // },
        // {
        //     id: 13,
        //     name: "Wyświetlenie informacji o warunkach realizacji – wykonanie testów akceptacyjnych",
        //     duration: 2,
        //     role: "Tester",
        //     predecessors: [
        //         12
        //     ]
        // },
        // {
        //     id: 14,
        //     name: "Generowanie dokumentu wydania zamówienia – wdrożenie na środowisku testowym",
        //     duration: 1,
        //     role: "Wdrożeniowiec",
        //     predecessors: [
        //         11
        //     ]
        // },
        // {
        //     id: 15,
        //     name: "Generowanie dokumentu wydania zamówienia – wykonanie testów akceptacyjnych",
        //     duration: 2,
        //     role: "Tester",
        //     predecessors: [
        //         14
        //     ]
        // },
        // {
        //     id: 16,
        //     name: "Poinformowanie o gotowości do odbioru – opracowanie przepływu zasadniczego",
        //     duration: 2,
        //     role: "Analityk",
        //     predecessors: []
        // },
        // {
        //     id: 17,
        //     name: "Poinformowanie o gotowości do odbioru – opracowanie przepływów alternatywnych",
        //     duration: 1,
        //     role: "Analityk",
        //     predecessors: [
        //         16
        //     ]
        // },
        // {
        //     id: 18,
        //     name: "Poinformowanie o gotowości do odbioru – stworzenie projektu oprogramowania dla przepływu zasadniczego",
        //     duration: 2,
        //     role: "Projektant",
        //     predecessors: [
        //         17
        //     ]
        // },
        // {
        //     id: 19,
        //     name: "Poinformowanie o gotowości do odbioru – stworzenie projektu oprogramowania dla przepływów alternatywnych",
        //     duration: 3,
        //     role: "Projektant",
        //     predecessors: [
        //         18
        //     ]
        // },
        // {
        //     id: 20,
        //     name: "Poinformowanie o gotowości do odbioru – wykonanie oprogramowania na podstawie projektu",
        //     duration: 4,
        //     role: "Deweloper",
        //     predecessors: [
        //         19
        //     ]
        // },
        // {
        //     id: 21,
        //     name: "Poinformowanie o gotowości do odbioru – zaprojektowanie środowiska wdrożeniowego",
        //     duration: 4,
        //     role: "Architekt",
        //     predecessors: [
        //         20
        //     ]
        // },
        // {
        //     id: 22,
        //     name: "Integracja oprogramowania",
        //     duration: 5,
        //     role: "Architekt",
        //     predecessors: [
        //         21,
        //         11
        //     ]
        // },
        // {
        //     id: 23,
        //     name: "Poinformowanie o gotowości do odbioru – wdrożenie na środowisku testowym",
        //     duration: 1,
        //     role: "Wdrożeniowiec",
        //     predecessors: [
        //         22
        //     ]
        // },
        // {
        //     id: 24,
        //     name: "Poinformowanie o gotowości do odbioru – wykonanie testów akceptacyjnych",
        //     duration: 3,
        //     role: "Tester",
        //     predecessors: [
        //         23
        //     ]
        // },
        // {
        //     id: 25,
        //     name: "Poszukiwanie wykonawców",
        //     duration: 20,
        //     role: "Kierownik projektu",
        //     predecessors: []
        // },
        // {
        //     id: 26,
        //     name: "Utrzymywanie architektury",
        //     duration: 20,
        //     role: "Architekt",
        //     predecessors: []
        // },
        // {
        //     id: 27,
        //     name: "Założenie repozytorium na kod",
        //     duration: 4,
        //     role: "Kierownik projektu",
        //     predecessors: []
        // },
        // {
        //     id: 28,
        //     name: "Przydzielenie ról i uprawnień dostępu do repozytorium",
        //     duration: 4,
        //     role: "Kierownik projektu",
        //     predecessors: [
        //         27
        //     ]
        // },
        // {
        //     id: 29,
        //     name: "Monitorowanie przebiegu iteracji",
        //     duration: 20,
        //     role: "Kierownik projektu",
        //     predecessors: []
        // },
        // {
        //     id: 30,
        //     name: "Zamknięcie iteracji",
        //     duration: 1,
        //     role: "Kierownik projektu",
        //     predecessors: [
        //         24,
        //         29
        //     ]
        // },
        // {
        //     id: 31,
        //     name: "Podsumowanie i ocena iteracji",
        //     duration: 2,
        //     role: "Kierownik projektu",
        //     predecessors: [
        //         30
        //     ]
        // }

    ]
}