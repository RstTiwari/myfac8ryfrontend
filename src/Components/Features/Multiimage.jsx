import "../Features/Multiimage.css"
import cardDatas from '../../Data/Data/Multiimageprocess';

export default function CardGroupExample() {
  return (
    <>
    
    <h1 style={{marginTop:'2vw',marginLeft:"4vw"}}>Process capabilities</h1>
    <div className="mainimage">
      {cardDatas.map((card) => (
        <div className="card" key={card.id}>
          <img className="img-test" src={card.image} alt={card.title} />
          <div>
            <li>{card.title}</li>
            <li>{card.text}</li>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
