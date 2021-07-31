import { Button } from "../Button";
import './styles.css';
import 'tachyons';

export const Calculadora: any = () => {
  return (
    <main>
      <div className="F1">Começando a caculadora</div>
      <div className="visor">
        <div className="displayVisor"></div>
      </div>
     <div className="button-Container">
     <div className="more-operations">
        <Button text="C"/>
        <Button text="%"/>
        <Button text="x^2"/>
      </div>
      <div className="basic-operations">
        <Button text="+"/>
        <Button text="-"/>
        <Button text="/"/>
        <Button text="*"/>
        <Button text="Enter"/>
      </div>
      <div className="Numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>,</button>
      </div>
     </div>
    </main>
  );
};
