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

const zaktualizujWynik = () => {
    wynikiAktualne.innerText = aktualneDzialanie
    wynikiPoprzednie.innerText = poprzednieDzialanie
}
const dodajLiczbe = (liczba) => {
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}
liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
});