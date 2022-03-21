import { Task } from "./Task";

export default function ExampleData(): Array<Task> {

    return [
        {
            Id: 0,
            Name: "test",
            Duration: 3,
            Role: "jwl",
            Predecessors: [5]
        },
        {
            Id: 1,
            Name: "Wyświetlenie informacji o warunkach realizacji zlecenia – opracowanie przepływu zasadniczego",
            Duration: 2,
            Role: "Analityk",
            Predecessors: []
        },
        {
            Id: 2,
            Name: "Generowanie dokumentu wydania zamówienia – opracowanie przepływu zasadniczego",
            Duration: 2,
            Role: "Analityk",
            Predecessors: []
        },
        {
            Id: 3,
            Name: "Generowanie dokumentu wydania zamówienia – opracowanie przepływów alternatywnych",
            Duration: 3,
            Role: "Analityk",
            Predecessors: [
                2
            ]
        },
        {
            Id: 4,
            Name: "Poinformowanie o wydłużeniu zamówienia – wykonanie oprogramowania",
            Duration: 5,
            Role: "Deweloper",
            Predecessors: []
        },
        {
            Id: 5,
            Name: "Wyświetlenie informacji o warunkach realizacji zlecenia – stworzenie projektu oprogramowania dla przepływu zasadniczego",
            Duration: 3,
            Role: "Projektant",
            Predecessors: [
                1
            ]
        },
        {
            Id: 6,
            Name: "Wyświetlenie informacji o warunkach realizacji zlecenia – wykonanie oprogramowania",
            Duration: 4,
            Role: "Deweloper",
            Predecessors: [
                5
            ]
        },
        {
            Id: 7,
            Name: "Generowanie dokumentu wydania zamówienia – stworzenie projektu oprogramowania dla przepływu zasadniczego i alternatywnych",
            Duration: 3,
            Role: "Projektant",
            Predecessors: [
                3
            ]
        },
        {
            Id: 8,
            Name: "Generowanie dokumentu wydania zamówienia – wykonanie oprogramowania",
            Duration: 8,
            Role: "Deweloper",
            Predecessors: [
                7
            ]
        },
        {
            Id: 9,
            Name: "Wyświetlenie informacji o warunkach realizacji – zaprojektowanie środowiska wdrożeniowego",
            Duration: 4,
            Role: "Architekt",
            Predecessors: [
                6
            ]
        },
        {
            Id: 10,
            Name: "Generowanie dokumentu wydania zamówienia – zaprojektowanie środowiska wdrożeniowego",
            Duration: 4,
            Role: "Architekt",
            Predecessors: [
                8
            ]
        },
        {
            Id: 11,
            Name: "Integracja oprogramowania",
            Duration: 5,
            Role: "Architekt",
            Predecessors: [
                9,
                10
            ]
        },
        {
            Id: 12,
            Name: "Wyświetlenie informacji o warunkach realizacji – wdrożenie na środowisku testowym",
            Duration: 1,
            Role: "Wdrożeniowiec",
            Predecessors: [
                11
            ]
        },
        {
            Id: 13,
            Name: "Wyświetlenie informacji o warunkach realizacji – wykonanie testów akceptacyjnych",
            Duration: 2,
            Role: "Tester",
            Predecessors: [
                12
            ]
        },
        {
            Id: 14,
            Name: "Generowanie dokumentu wydania zamówienia – wdrożenie na środowisku testowym",
            Duration: 1,
            Role: "Wdrożeniowiec",
            Predecessors: [
                11
            ]
        },
        {
            Id: 15,
            Name: "Generowanie dokumentu wydania zamówienia – wykonanie testów akceptacyjnych",
            Duration: 2,
            Role: "Tester",
            Predecessors: [
                14
            ]
        },
        {
            Id: 16,
            Name: "Poinformowanie o gotowości do odbioru – opracowanie przepływu zasadniczego",
            Duration: 2,
            Role: "Analityk",
            Predecessors: []
        },
        {
            Id: 17,
            Name: "Poinformowanie o gotowości do odbioru – opracowanie przepływów alternatywnych",
            Duration: 1,
            Role: "Analityk",
            Predecessors: [
                16
            ]
        },
        {
            Id: 18,
            Name: "Poinformowanie o gotowości do odbioru – stworzenie projektu oprogramowania dla przepływu zasadniczego",
            Duration: 2,
            Role: "Projektant",
            Predecessors: [
                17
            ]
        },
        {
            Id: 19,
            Name: "Poinformowanie o gotowości do odbioru – stworzenie projektu oprogramowania dla przepływów alternatywnych",
            Duration: 3,
            Role: "Projektant",
            Predecessors: [
                18
            ]
        },
        {
            Id: 20,
            Name: "Poinformowanie o gotowości do odbioru – wykonanie oprogramowania na podstawie projektu",
            Duration: 4,
            Role: "Deweloper",
            Predecessors: [
                19
            ]
        },
        {
            Id: 21,
            Name: "Poinformowanie o gotowości do odbioru – zaprojektowanie środowiska wdrożeniowego",
            Duration: 4,
            Role: "Architekt",
            Predecessors: [
                20
            ]
        },
        {
            Id: 22,
            Name: "Integracja oprogramowania",
            Duration: 5,
            Role: "Architekt",
            Predecessors: [
                21,
                11
            ]
        },
        {
            Id: 23,
            Name: "Poinformowanie o gotowości do odbioru – wdrożenie na środowisku testowym",
            Duration: 1,
            Role: "Wdrożeniowiec",
            Predecessors: [
                22
            ]
        },
        {
            Id: 24,
            Name: "Poinformowanie o gotowości do odbioru – wykonanie testów akceptacyjnych",
            Duration: 3,
            Role: "Tester",
            Predecessors: [
                23
            ]
        },
        {
            Id: 25,
            Name: "Poszukiwanie wykonawców",
            Duration: 20,
            Role: "Kierownik projektu",
            Predecessors: []
        },
        {
            Id: 26,
            Name: "Utrzymywanie architektury",
            Duration: 20,
            Role: "Architekt",
            Predecessors: []
        },
        {
            Id: 27,
            Name: "Założenie repozytorium na kod",
            Duration: 4,
            Role: "Kierownik projektu",
            Predecessors: []
        },
        {
            Id: 28,
            Name: "Przydzielenie ról i uprawnień dostępu do repozytorium",
            Duration: 4,
            Role: "Kierownik projektu",
            Predecessors: [
                27
            ]
        },
        {
            Id: 29,
            Name: "Monitorowanie przebiegu iteracji",
            Duration: 20,
            Role: "Kierownik projektu",
            Predecessors: []
        },
        {
            Id: 30,
            Name: "Zamknięcie iteracji",
            Duration: 1,
            Role: "Kierownik projektu",
            Predecessors: [
                24,
                29
            ]
        },
        {
            Id: 31,
            Name: "Podsumowanie i ocena iteracji",
            Duration: 2,
            Role: "Kierownik projektu",
            Predecessors: [
                30
            ]
        }

    ]
}