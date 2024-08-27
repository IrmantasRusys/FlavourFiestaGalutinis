Feature: Paieškos juosta receptams ieškoti

    Vartotojas gali atlikti paiešką pasinaudodamas paieškos laukeliu/juosta

    Scenario: Paieškos juostos matomumas ir pasiekiamumas
        Given vartotojas yra pagrindinio puslapio viršuje.
        When vartotojas žiūri į puslapį.
        Then paieškos juosta yra matoma ir pasiekiama puslapio viršuje.

    Scenario: Sėkminga paieška pagal paieškos frazę
        Given vartotojas mato paieškos juostą puslapio viršuje.
        When vartotojas paspaudžia ant paieškos laukelio.
        And vartotojas įveda paieškos frazę į paieškos juostą.
        And vartotojas paspaudžia Enter.
        Then sistema parodo receptus, susijusius su paieškos fraze.
        And receptai turi būti rodomi pagal atitikties lygį, tiksliausi atitikimai viršuje.

    Scenario: Nesėkminga paieška pagal paieškos frazę.
        Given vartotojas mato paieškos juostą puslapio viršuje.
        When vartotojas paspaudžia ant paieškos laukelio.
        And vartotojas įveda paieškos frazę į paieškos juostą.
        And vartotojas paspaudžia mygtuką “ieškoti” arba Enter.
        Then sistema parodo receptus, susijusius su paieškos fraze.
        
    Scenario: Paieškos rezultatų išvalymas
        Given vartotojas atliko paiešką ir mato rezultatus.
        When vartotojas ištrina frazę paieškos juostoje.
        Then paieškos juosta turi būti išvalyta.
        