import React, { useState } from "react"
// import "./App.css"

function App() {


  const [price, setPrice] = useState(0)
  const handleChangePrice = e => {
    setPrice(
      e.target.value
    )
  }
  const clearPrice = (e) => {
    setPrice(e.target.value = '')
    setShipPrice('')
    setVes('')
    setKurs('')
  }

  const [shipPrice, setShipPrice] = useState(0)
  const handleChangeShipPrice = e => {
    setShipPrice(
      e.target.value
    )
  }
  const clearShipPrice = (e) => {
    setShipPrice(e.target.value = '')
  }

  const [ves, setVes] = useState(0)
  const handleChangeVes = e => {
    setVes(
      e.target.value
    )
  }
  const clearVes = (e) => {
    setVes(e.target.value = '')
  }

  const [kurs, setKurs] = useState(0)
  const handleChangeKurs = e => {
    setKurs(
      e.target.value
    )
  }
  const clearKurs = (e) => {
    setKurs(e.target.value = '')
  }

  const [usdRub, setUsdRub] = useState(0)
  const handleChangeUsdRub = e => {
    setUsdRub(
      e.target.value
    )
  }
  const clearUsdRub = (e) => {
    setUsdRub(e.target.value = '')
  }

  const [nacen, setNacen] = useState(0)
  const handleChangeNacen = e => {
    setNacen(
      e.target.value
    )
  }
  const clearNacen = (e) => {
    setNacen(e.target.value = '')
  }

  const [shipLMF, setShipLMF] = useState(0)
  const [priceInUSD, setPriceInUSD] = useState(0)
  const [shipTurcInUSD, setShipTurcInUSD] = useState(0)
  const [commisVikup, setCommisVikup] = useState(0)
  const [strah, setStrah] = useState(0)
  const [posh, setPosh] = useState(0)
  const [konCenInRub, setKonCenInRub] = useState(0)
  const [nacenInRub, setNacenInRub] = useState(0)

  const calcul = () => {
    let priceUSD = Number(price) / Number(kurs)
    setPriceInUSD(priceUSD)

    let shipTurcUSD = Number(shipPrice) / Number(kurs)
    setShipTurcInUSD(shipTurcUSD)

    let commis = (Number(price) / Number(kurs)) * 0.1
    setCommisVikup(commis)

    let strahovka = (Number(price) / Number(kurs)) * 0.02;
    if (strahovka < 3) {
      strahovka = 3
    }
    setStrah(parseFloat(strahovka).toFixed(2))

    let poshlina = 0
    if (priceUSD > 1000) {
      poshlina = (Number(priceUSD) - 1000) * 0.15
    }
    setPosh(poshlina)//+500p.

    if (Number(ves) <= 0.1) {
      setShipLMF(9.5)
    }
    if (Number(ves) > 0.1 && Number(ves) <= 0.3) {
      setShipLMF(10.99)
    }
    if (Number(ves) > 0.3 && Number(ves) <= 0.4) {
      setShipLMF(11.99)
    }
    if (Number(ves) > 0.4 && Number(ves) <= 0.5) {
      setShipLMF(12.99)
    }
    if (Number(ves) > 0.5 && Number(ves) <= 0.7) {
      setShipLMF(15.99)
    }
    if (Number(ves) > 0.7 && Number(ves) <= 1) {
      setShipLMF(16.99)
    }
    if (Number(ves) > 1 && Number(ves) <= 1.1) {
      setShipLMF(19.99)
    }
    if (Number(ves) > 1.1 && Number(ves) <= 1.5) {
      setShipLMF(24.99)
    }
    if (Number(ves) > 1.5 && Number(ves) <= 1.8) {
      setShipLMF(25.99)
    }
    if (Number(ves) > 1.8 && Number(ves) <= 2) {
      setShipLMF(26.99)
    }
    if (Number(ves) > 2 && Number(ves) <= 2.1) {
      setShipLMF(31.99)
    }
    if (Number(ves) > 2.1 && Number(ves) <= 2.5) {
      setShipLMF(36.99)
    }
    if (Number(ves) > 2.5 && Number(ves) <= 3) {
      setShipLMF(39.99)
    }
    if (Number(ves) > 3 && Number(ves) <= 3.6) {
      setShipLMF(47.99)
    }
    if (Number(ves) > 3.6 && Number(ves) <= 3.7) {
      setShipLMF(48.99)
    }
    if (Number(ves) > 3.7 && Number(ves) <= 3.8) {
      setShipLMF(49.99)
    }
    if (Number(ves) > 3.8 && Number(ves) <= 3.9) {
      setShipLMF(50.99)
    }
    if (Number(ves) > 3.9 && Number(ves) <= 4) {
      setShipLMF(51.99)
    }
    if (Number(ves) > 4 && Number(ves) <= 4.5) {
      setShipLMF(59.99)
    }
  }

  const calculSNacen = () => {
    let konCenRub = Number(parseFloat(Number(priceInUSD) + Number(shipTurcInUSD) + Number(shipLMF) + Number(commisVikup) + Number(strah) + Number(posh)).toFixed(2)) * Number(usdRub)
    setKonCenInRub(konCenRub)

    let nacenochkaRub = (konCenRub * Number(nacen)) / 100
    if (nacenochkaRub < 1000) {
      nacenochkaRub = 1000
    }
    setNacenInRub(nacenochkaRub)
  }

  return (
    <div>
      <h1>Конвертер для турецких заказов</h1>
      <form>
        <label>
          Цена товара в турецких лирах:{" "}
          <input
            type="text"
            name="price"
            value={price}
            onClick={clearPrice}
            onChange={handleChangePrice}
          /> TL
        </label>{" "}<br></br><br></br>
        <label>
          Доставка по Турции (если есть):{" "}
          <input
            type="text"
            name="shipPrice"
            value={shipPrice}
            onClick={clearShipPrice}
            onChange={handleChangeShipPrice}
          /> TL
        </label><br></br><br></br>

        <label>
          Примерный вес товара (например 0.4 = 400 г.):{" "}
          <input
            type="text"
            name="ves"
            value={ves}
            onClick={clearVes}
            onChange={handleChangeVes}
          /> кг. 
        </label><br></br><br></br>

        <label>
          Курс доллара по отношению к лире (USD/TRY):{" "}
          <input
            type="text"
            name="kurs"
            value={kurs}
            onClick={clearKurs}
            onChange={handleChangeKurs}
          /> (например: 18.09)
        </label><br></br><br></br>
      </form>
      <br></br>
      <button onClick={calcul}>
        РАСЧИТАТЬ
      </button>
      <h5>
        Цена товара в долларах: {parseFloat(Number(priceInUSD)).toFixed(2)} $<br></br><br></br>
        Доставка по Турции в долларах: {parseFloat(Number(shipTurcInUSD)).toFixed(2)} $<br></br><br></br>
        Ориентировочная цена доставки в Москву от LiteMF* (исходя из веса товара): {shipLMF} $ <br></br>*Цена расчитана для вещей весом до 4.5 кг. <br></br>Если вес вещи больше 4.5 кг. - обратитесь к разработчику, чтобы добавить значения для расчета<br></br><br></br>
        Комиссия LiteMF за выкуп: {parseFloat(Number(commisVikup)).toFixed(2)} $<br></br><br></br>
        Страховка(стандарт): {strah} $<br></br><br></br>
        Пошлина: {posh} $ {posh > 0 ? "+ 500 p." : ""}<br></br>
      </h5>
      <h3>
        Конечная цена в долларах: {parseFloat(Number(priceInUSD) + Number(shipTurcInUSD) + Number(shipLMF) + Number(commisVikup) + Number(strah) + Number(posh)).toFixed(2)} $ {posh > 0 ? "+ 500 p. za oformlen blanka za poshlinu" : ""}
      </h3>
      <br></br><br></br>
      <label>
        Введите курс USD/RUB:{" "}
        <input
          type="text"
          name="usdRub"
          value={usdRub}
          onClick={clearUsdRub}
          onChange={handleChangeUsdRub}
        /> (например: 65)
      </label><br></br><br></br>
      <label>
        Введите свою наценку в процентах:{" "}
        <input
          type="text"
          name="nacenka"
          value={nacen}
          onClick={clearNacen}
          onChange={handleChangeNacen}
        /> %
      </label><br></br><br></br>
      <br></br>
      <button onClick={calculSNacen}>
        РАСЧИТАТЬ С УЧЕТОМ НАЦЕНКИ
      </button>
      <h3>
        Конечная цена товара без наценки, в рублях: {konCenInRub} p.<br></br><br></br>
        Ваша наценка равна: {nacenInRub} p.<br></br><br></br>
        Конечная цена товара с вашей наценкой, в рублях: {Number(konCenInRub) + Number(nacenInRub)} p.<br></br>
      </h3>
      {/* <label>
        Sdelat svou nacenku?
          <input
            type="checkbox"
            name="isChecked"
            checked={check.isChecked}
            onChange={handleChangeCheck}
          />{" "}
          ({check.isChecked ? "Yes" : "No"})
        </label> */}
    </div>
  )
}

export default App
