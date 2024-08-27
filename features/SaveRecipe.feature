Feature: Išsaugoti mėgstamus receptus

    Vartotojas turi galimybę išsaugoti mėgstamus receptus pasinaudodamas paruoštu mygtuku.

    Scenario: Vartotojas sėkmingai išsaugo receptą kaip mėgstamą.
        Given vartotojas yra pradiniame puslapyje.
        And vartotojas mato receptų sąrašą.
        When vartotojas pasirenka receptą ir spusteli pridėjimo mygtuką.
        Then receptas yra išsaugomas kaip mėgstamas.

    Scenario: Vartotojas peržiūri savo mėgstamus receptus.
        Given vartotojas yra pradiniame puslapyje.
        And vartotojas turi išsaugotų receptų sąrašą.
        When vartotojas atidaro išsaugotų receptų puslapį.
        Then vartotojas mato visų išsaugotų mėgstamų receptų sąrašą.

    Scenario: Pašalinti receptą iš mėgstamų.
        Given vartotojas yra mėgstamų receptų puslapyje.
        When vartotojas paspaudžia tą patį mygtuką, su kuriuo galėjo išsaugoti receptą.
        Then receptas turi būti pašalintas iš mėgstamų puslapio.
        And vartotojas neturi matyti šio pašalinto recepto išsaugotų receptų puslapyje.