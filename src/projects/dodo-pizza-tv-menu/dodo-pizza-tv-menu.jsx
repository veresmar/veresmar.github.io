import pic1 from './img/1.png';


export default function DodoPizzaTVMenu() {
  return (
    <div className="project-wrap">
      
      <h1>Dodo Pizza TV Menu</h1>
      
      <div className="project-description">
          <img src={pic1} alt="" />
          <p>возьми описание из дока</p>
      </div>

      
      <h2>What i did:</h2>
      
        
      <div className="key-point">
        
        <img src={pic1} alt="" />
        
        <ul>
          <li>Фильтр макетов по типу, формату и периоду</li>
          <li>запоминание выбора</li>
          <li>запрет на выбор горизонтального для определенных макетов</li>
          <li>Копирование названия макета по клику</li>
          <li>Дропдаун-меню автоматически закрывается после выбора варианта</li>
          <li></li>
          <li>адаптивная верстка</li>
        </ul>
      </div>
      <div className="project-point"></div>
      <div className="project-point"></div>
      <div className="project-point"></div>
      <div className="project-point"></div>
      <div className="project-point"></div>
    </div>
  );
}

