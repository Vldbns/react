import './App.css';
import SimpsonsComponent from "./Components/Simpsons.component";
import RickMorty from "./Components/RickMorty";

function App() {

    return (
        <div>
            <div className={'flex'}>
                <SimpsonsComponent
                    id={'1'}
                    name={"Homer Simpson"}
                    status={'Married, alcoholic'}
                    species={"Human"}
                    gender={"Male"}
                    image={'https://upload.wikimedia.org/wikipedia/ru/b/bd/Homer_Simpson.png'}
                >
                </SimpsonsComponent>

                <SimpsonsComponent
                    id={'2'}
                    name={"Bart Simpson"}
                    status={'Free'}
                    species={"Human"}
                    gender={"Male"}
                    image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                >
                </SimpsonsComponent>

                <SimpsonsComponent
                    id={'3'}
                    name={"Marge"}
                    status={'Married'}
                    species={"Human"}
                    gender={"Female"}
                    image={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
                >
                </SimpsonsComponent>

                <SimpsonsComponent
                    id={'4'}
                    name={"Lisa"}
                    status={'Free'}
                    species={"Human"}
                    gender={"Female"}
                    image={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}
                >
                </SimpsonsComponent>

                <SimpsonsComponent
                    id={'5'}
                    name={"Maggie"}
                    status={'Free'}
                    species={"Human"}
                    gender={"Female"}
                    image={'https://crosti.ru/patterns/00/24/a3/47c36590d6/picture.jpg'}
                >
                </SimpsonsComponent>
            </div>


            <div className={'flex'}>
                <RickMorty
                    id={'1'}
                    name={'Rick Sanchez'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                ></RickMorty>
                <RickMorty
                    id={'2'}
                    name={'Morty Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                ></RickMorty>
                <RickMorty
                    id={'3'}
                    name={'Summer Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                ></RickMorty>
                <RickMorty
                    id={'4'}
                    name={'Beth Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                ></RickMorty>
                <RickMorty
                    id={'25'}
                    name={'Armothy'}
                    status={'Dead'}
                    species={'unknown'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/25.jpeg'}
                ></RickMorty>
                <RickMorty
                    id={'22'}
                    name={'Aqua Rick'}
                    status={'unknown'}
                    species={'Humanoid'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/22.jpeg'}
                ></RickMorty>
            </div>
        </div>
    );
}

export default App;
