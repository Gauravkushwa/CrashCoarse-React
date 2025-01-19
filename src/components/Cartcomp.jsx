export default function Cartcomp({ img, temp, cost }) {
    return (
      <div className="comp">
        <div className="render">
          <img src={img} alt={temp} /> 
          <p>
            {temp} <span>{cost}</span>
          </p>
        </div>
      </div>
    );
  }