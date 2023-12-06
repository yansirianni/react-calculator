import Button from "./Button";
import Visor from "./Display";

const Calculator = () => {
    return (
        <div key="calculator" className="text-center">
            <Visor />
            <div key="buttons" className="grid ">
                <div className="row gap-2 mt-2">
                    <Button className="col" text="AC" />
                    <Button className="col" text="±" />
                    <Button className="col" text="%" />
                    <Button className="col" text="÷" />
                </div>
                <div className="row gap-2 mt-2">
                    <Button className="col" text="7" />
                    <Button className="col" text="8" />
                    <Button className="col" text="9" />
                    <Button className="col" text="x" />
                </div>
                <div className="row gap-2 mt-2">
                    <Button className="col" text="4" />
                    <Button className="col" text="5" />
                    <Button className="col" text="6" />
                    <Button className="col" text="-" />
                </div>
                <div className="row gap-2 mt-2">
                    <Button className="col" text="1" />
                    <Button className="col" text="2" />
                    <Button className="col" text="3" />
                    <Button className="col" text="+" />
                </div>
                <div className="row gap-2 mt-2">
                    <Button className="col-3" text="0" />
                    <Button className="col-1" text="," />
                    <Button className="col-1" text="=" />
                </div>
            </div>
        </div>
    )
}

export default Calculator;