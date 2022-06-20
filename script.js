const liczby = document.querySelectorAll('.liczba')
const operatory = document.querySelectorAll('.operator')
const wyczysc = document.querySelector('.wyczysc')
const usun = document.querySelector('.usun')
const rownosc = document.querySelector('.rownosc')
const wynikiPoprzednie = document.querySelector('.poprzednie-dzialanie')
const wynikiAktualne = document.querySelector('.aktualne-dzialanie')

let aktualneDzialanie = ''
let poprzednieDzialanie = ''
let operacja = undefined

const oblicz = () => {
    let dzialanie
    if(!poprzednieDzialanie || !aktualneDzialanie) {
        return
    }
    const poprzednie = parseFloat(poprzednieDzialanie)
    const aktualne = parseFloat(aktualneDzialanie)

    if(isNaN(poprzednie) || isNan(aktualne)) {
        return
    }
    switch(operacja) {
        case '+':
            dzialanie = poprzednie + aktualne
           break;
           case '-':
            działanie = poprzednie - aktualne
            break;
               case '×':
            działanie = poprzednie * aktualne
            break;
               case ':':
            działanie = poprzednie / aktualne
            break;
               case '√':
            działanie = Math.pow(poprzednie, 1/aktualny)
            break;
               case '%':
            działanie = poprzednie / 100 * aktualne
            break;
               case '^':
            działanie = Math.pow(poprzednie, aktualne)
            break;
               case 'log':
            działanie = Math.log(poprzednie) / Math.log(aktualne)
            break;

            default:
                return 
    }
    aktualneDzialanie = dzialanie
    operacja = undefined
    poprzednieDzialanie = ''
}

const wybierzOperacje = (operator) => {
    if(aktualneDzialanie === '') {
        return
    }
    if(poprzednieDzialanie !== '') {
        oblicz ()
    }
    operacja = operator
    poprzednieDzialanie = aktualneDzialanie
    aktualneDzialane = ''
}

const zaktualizujWynik = () => {
	wynikiAktualne.innerText = aktualneDzialanie
	if(operacja != null) {
		wynikiPoprzednie.innerText = poprzednieDzialanie + operacja
	} else {
		wynikiPoprzednie.innerText = ''
	}
}
const dodajLiczbe = (liczba) => {
    if(liczba === '•') {
        if(aktualneDzialanie.includes('.')) {
            return
        }
        liczba = '.'
    }
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}
const usunLiczbe = () => {
    aktualneDzialanie = aktualneDzialanie.slice(0, -1)
}

liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
});
usun.addEventListener('click', () => {
    usunLiczbe()
    zaktualizujWynik()
})
operatory.forEach((operator) =>
{
    operator.addEventListener('click', () => {
        wybierzOperacje(operator.innerText)
        zaktualizujWynik()
    })
});