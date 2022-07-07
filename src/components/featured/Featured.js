import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img src="https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=" alt="" />
				<div className="featuredTitles">
					<h1>New Delhi</h1>
					<h2>2,915 Properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img src="https://cf.bstatic.com/xdata/images/city/540x270/620027.webp?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=" alt="" />
				<div className="featuredTitles">
					<h1>Bangkok</h1>
					<h2>4,040 Properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img src="https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=" alt="" />
				<div className="featuredTitles">
					<h1>Mumbai</h1>
					<h2>1,651 Properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Featured;
