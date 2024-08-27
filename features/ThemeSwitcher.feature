Feature: Dieninis ir naktinis režimas

    Vartotojas puslapyje gali pasirinkti dieninį ir naktinį režimą, kad galėtų lengviau skaityti įvairiu paros metu.

    Scenario: Dieninio režimo perjungimas
        Given vartotojas yra pradiniame puslapyje ir naktinis režimas yra aktyvus. 
        When vartotojas paspaudžia mygtuką perjungti į dieninį režimą puslapio viršuje.
        Then puslapis turi pereiti į dieninį režimą.
        And puslapio dizainas turi būti šviesus ir lengvai skaitomas
        And spalvos turi atitikti dieninį režimą.

    Scenario: Naktinio režimo perjungimas
        Given vartotojas yra pradiniame puslapyje ir dieninis režimas yra aktyvus.
        When vartotojas paspaudžia mygtuką perjungti į naktinį režimą puslapio viršuje.
        Then puslapis turi pereiti į naktinį režimą.
        And puslapio dizainas turi būti tamsus ir lengvai skaitomas.
        And spalvos turi atitikti naktinį režimą.
