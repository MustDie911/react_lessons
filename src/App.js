import './App.css';

import SimpsonComponent from "./components/SimpsonComponent/SimpsonComponent";

function App() {
    return (
        <div>
            <SimpsonComponent
                name={'Гомер'}
                surname={'Сімпсон'}
                age={39}
                gender={'male'}
                img={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
            />
            <SimpsonComponent
                name={'Мардж'}
                surname={'Сімпсон'}
                age={37}
                gender={'female'}
                img={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />
            <SimpsonComponent
                name={'Барт'}
                surname={'Сімпсон'}
                age={10}
                gender={'male'}
                img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <SimpsonComponent
                name={'Ліса'}
                surname={'Сімпсон'}
                age={8}
                gender={'female'}
                img={'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/255px-Lisasmiling.png'}
            />
            <SimpsonComponent
                name={'Меґґі'}
                surname={'Сімпсон'}
                age={1}
                gender={'female'}
                img={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
            />
        </div>
    );

}

// Описати всю сім'ю сімпсонів (5 персонажів).
// Характеристики : ім‘я приізвище вік стать, фотографія (посиланням на зовнішній ресурс,тобто не локальна фотка)
// Інфу брати звідки завгодно,хоч придумайте. Але для цього є сайт який ви юзали на жс

export default App;
