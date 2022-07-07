import "./featuredProperties.css";

const FeaturedProperties = () => {
	return (
		<div className="fp">
			<div className="fpItem">
				<img src="https://cf.bstatic.com/xdata/images/hotel/max500/16379302.jpg?k=55494e13bb009658f0b7114e816e647c36c26851bf214b6fbc2f05558f9edf86&o=" alt="" className="fpImg" />
				<span className="fpName">Villa Domina</span>
				<span className="fpCity">Split</span>
				<span className="fpPrice">Starting from ₹ 12,046</span>
				<div className="fpRating">
					<button>9.5</button>
					<span>Exceptional</span>
				</div>
			</div>
			<div className="fpItem">
				<img src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="" className="fpImg" />
				<span className="fpName">Sugar Loft Apartments</span>
				<span className="fpCity">Rio de Janeiro</span>
				<span className="fpPrice">Starting from ₹ 2,489</span>
				<div className="fpRating">
					<button>9.1</button>
					<span>Superb</span>
				</div>
			</div>
			<div className="fpItem">
				<img src="https://cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=" alt="" className="fpImg" />
				<span className="fpName">Appartamento</span>
				<span className="fpCity">Rome</span>
				<span className="fpPrice">Starting from ₹ 20,212</span>
				<div className="fpRating">
					<button>9.7</button>
					<span>Exceptional</span>
				</div>
			</div>
			<div className="fpItem">
				<img src="https://cf.bstatic.com/xdata/images/hotel/max500/71184956.jpg?k=4f0dd080f161eb3d2631565c7df9b6e634442addd10dc715b8dd519092a4517f&o=" alt="" className="fpImg" />
				<span className="fpName">Chiado Mercy Apartments</span>
				<span className="fpCity">Lisbon</span>
				<span className="fpPrice">Starting from ₹ 48,187</span>
				<div className="fpRating">
					<button>9.5</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fpItem">
				<img src="https://cf.bstatic.com/xdata/images/hotel/max500/90327438.jpg?k=c685ade6f4cfb9f0577e4508bcc9f5262d57775452af7997822f0d84b373afc1&o=" alt="" className="fpImg" />
				<span className="fpName">Urbana Hipster Downtown Budapest</span>
				<span className="fpCity">Budapest</span>
				<span className="fpPrice">Starting from ₹ 6,387</span>
				<div className="fpRating">
					<button>9.5</button>
					<span>Excellent</span>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
