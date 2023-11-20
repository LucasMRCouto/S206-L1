package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

class pokemonRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
