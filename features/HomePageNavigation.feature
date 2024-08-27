Feature: Pagrindinis puslapis su patogia navigacija

    Su šita funkcija vartotojas galės patogiai naviguoti iš pagrindinio puslapio į kitus puslapius

    Scenario: Matyti pagrindinį puslapį su aiškia navigacija
        Given vartotojas yra pagrindiniame puslapyje
        When puslapis yra įkeliamas
        Then pagrindinis puslapis turi turėti aiškią ir lengvai pasiekiamą navigacijos juostą puslapio viršuje
        And navigacijos elementai turi būti logiškai suskirstyti į kategorijas:
        | Kategorija |
        | Home |
        | Recepts |
        | Saved Recipes |

    
    Scenario: Greita prieiga prie svetainės puslapių
        Given vartotojas yra pagrindiniame puslapyje.
        When vartotojas nori pasiekti tam tikrą puslapį.
        Then vartotojas gali pasirinkti iš navigacijos juostos norimą puslapį.
        And paspaudus vartotojui atsidarys kitas puslapis.