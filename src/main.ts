import './style.css';
import { Board } from '@/application';
import { HtmlRenderer, HtmlTexture, MeasurementUnit, UnitType, ShapeStyle, Color } from '@/infrastructure';
import { Element, Observer, Transform } from '@/domain/entities';
import { Vector2 } from './core/math';
import { Event } from '@/adapters';

const renderer = new HtmlRenderer(document.querySelector('#board') as HTMLDivElement);
const board = new Board(renderer);

const elementA = new Element("A", new Transform(Vector2.zero));
const elementTexture = new HtmlTexture(
	new ShapeStyle({
		color: new Color(255, 255, 255, 1),
		width: new MeasurementUnit(250, UnitType.PX),
		height: new MeasurementUnit(250, UnitType.PX),
		cornerRadius: new MeasurementUnit(12, UnitType.PX)
	})
);

elementA.texture = elementTexture;

board.AttachElement(elementA);

Event.observable.Subscribe(new Observer("on-mouse-down", (pos) => {
	console.log(pos);
}));
