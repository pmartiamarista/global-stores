import Card from "./components/Card";
import Counter from "./components/Counter";
import Slider from "./components/Slider";

const Counters = () =>
  [...Array(3)].map((element, index) => (
    <Counter {...{ key: index, multiplier: index + 1 }} />
  ));

const Sliders = () =>
  [...Array(3)].map((element, index) => (
    <Slider {...{ key: index, multiplier: index + 1 }} />
  ));

export default function Redirect() {
  return (
    <div className="m-5 p-6">
      <Card {...{ header: "Counter Store" }}>{Counters()}</Card>
      <Card {...{ header: "Slider Store" }}>{Sliders()}</Card>
    </div>
  );
}
