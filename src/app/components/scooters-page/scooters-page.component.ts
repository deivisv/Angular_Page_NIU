import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-scooters-page',
	templateUrl: './scooters-page.component.html',
	styleUrls: ['./scooters-page.component.css']
})
export class ScootersPageComponent implements AfterViewInit, OnInit {
	
	imgColor = 'White';

	@ViewChild('ngtSelectWhite') asBotonWhite!:ElementRef;
	@ViewChild('ngtSelectRed') asBotonRed!:ElementRef;
	@ViewChild('ngtSelectGray') asBotonGray!:ElementRef;
	@ViewChild('ngtSelectBlack') asBotonBlack!:ElementRef;
	@ViewChild('ngtSelectDark') asBotonDark!:ElementRef;
	@ViewChild("asNgtImgOne") public asImgOne!: ElementRef;
	@ViewChild("asNgtImgTwo") public asImgTwo!: ElementRef;
	@ViewChild("asNgtImgThree") public asImgThree!: ElementRef;
	@ViewChild("asNgtImgFour") public asImgFour!: ElementRef;
	
	@ViewChild('ngSportSelectWhite') asBotonSportWhite!:ElementRef;
	@ViewChild('ngSportSelectRed') asBotonSportRed!:ElementRef;
	@ViewChild('ngSportSelectGray') asBotonSportGray!:ElementRef;
	@ViewChild('ngSportSelectBlack') asBotonSportBlack!:ElementRef;
	@ViewChild('ngSportSelectDark') asBotonSportDark!:ElementRef;

	ngOnInit(): void {
	}

	constructor(private renderer: Renderer2) { }

	ngAfterViewInit(): void {

		const urlWhiteOne = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtWhiteOne.png'
		const urlWhiteTwo = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtWhiteTwo.png'
		const urlWhiteThree = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtWhiteThree.png'
		const urlWhiteFour = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtWhiteFour.png'

		const urlRedOne = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtRedOne.png'
		const urlRedTwo = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtRedTwo.png'
		const urlRedThree = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtRedThree.png'
		const urlRedFour = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtRedFour.png'

		const urlGrayOne = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtGrayOne.png'
		const urlGrayTwo = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtGrayTwo.png'
		const urlGrayThree = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtGrayThree.png'
		const urlGrayFour = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtGrayFour.png'

		const urlBlackOne = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtBlackOne.png'
		const urlBlackTwo = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtBlackTwo.png'
		const urlBlackThree = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtBlackThree.png'
		const urlBlackFour = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtBlackFour.png'

		const urlDarkOne = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtDarkOne.png'
		const urlDarkTwo = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtDarkTwo.png'
		const urlDarkThree = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtDarkThree.png'
		const urlDarkFour = 'assets/img/imScootersPage/imgCarouselNgts/imgNgtDarkFour.png'

		this.asBotonWhite.nativeElement.addEventListener('click', ()=>{
			/* alert("Se hizo click en el boton blanco"); */
			this.renderer.setAttribute(this.asImgOne.nativeElement, 'src', urlWhiteOne)
			this.renderer.setAttribute(this.asImgTwo.nativeElement, 'src', urlWhiteTwo)
			this.renderer.setAttribute(this.asImgThree.nativeElement, 'src', urlWhiteThree)
			this.renderer.setAttribute(this.asImgFour.nativeElement, 'src', urlWhiteFour)
		}, false)
		this.asBotonRed.nativeElement.addEventListener('click', ()=>{
			/* alert("Se hizo click en el boton rojo"); */
			this.renderer.setAttribute(this.asImgOne.nativeElement, 'src', urlRedOne)
			this.renderer.setAttribute(this.asImgTwo.nativeElement, 'src', urlRedTwo)
			this.renderer.setAttribute(this.asImgThree.nativeElement, 'src', urlRedThree)
			this.renderer.setAttribute(this.asImgFour.nativeElement, 'src', urlRedFour)
		}, false)
		this.asBotonGray.nativeElement.addEventListener('click', ()=>{
			/* alert("Se hizo click en el boton gris"); */
			this.renderer.setAttribute(this.asImgOne.nativeElement, 'src', urlGrayOne)
			this.renderer.setAttribute(this.asImgTwo.nativeElement, 'src', urlGrayTwo)
			this.renderer.setAttribute(this.asImgThree.nativeElement, 'src', urlGrayThree)
			this.renderer.setAttribute(this.asImgFour.nativeElement, 'src', urlGrayFour)
		}, false)
		this.asBotonBlack.nativeElement.addEventListener('click', ()=>{
			/* alert("Se hizo click en el boton negro"); */
			this.renderer.setAttribute(this.asImgOne.nativeElement, 'src', urlBlackOne)
			this.renderer.setAttribute(this.asImgTwo.nativeElement, 'src', urlBlackTwo)
			this.renderer.setAttribute(this.asImgThree.nativeElement, 'src', urlBlackThree)
			this.renderer.setAttribute(this.asImgFour.nativeElement, 'src', urlBlackFour)
		}, false)
		this.asBotonDark.nativeElement.addEventListener('click', ()=>{
			/* alert("Se hizo click en el boton oscuro"); */
			this.renderer.setAttribute(this.asImgOne.nativeElement, 'src', urlDarkOne)
			this.renderer.setAttribute(this.asImgTwo.nativeElement, 'src', urlDarkTwo)
			this.renderer.setAttribute(this.asImgThree.nativeElement, 'src', urlDarkThree)
			this.renderer.setAttribute(this.asImgFour.nativeElement, 'src', urlDarkFour)
		}, false)

		this.asBotonSportWhite.nativeElement.addEventListener('click', ()=>{
			this.imgColor = 'White';
		}, false)
		this.asBotonSportRed.nativeElement.addEventListener('click', ()=>{
			this.imgColor = 'Red';
		}, false)
		this.asBotonSportGray.nativeElement.addEventListener('click', ()=>{
			this.imgColor = 'Gray';
		}, false)
		this.asBotonSportBlack.nativeElement.addEventListener('click', ()=>{
			this.imgColor = 'Black';
		}, false)
		this.asBotonSportDark.nativeElement.addEventListener('click', ()=>{
			this.imgColor = 'Dark';
		}, false)
	}
	
}

