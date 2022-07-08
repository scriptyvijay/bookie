import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [option, setOption] = useState(location.state.option);
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch"></div>
					<div className="listResult">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label htmlFor="">Destination</label>
							{/* todo create checkin */}
							<input type="text" />
						</div>
						<div className="lsItem">
							<label htmlFor="">Check-in Date</label>
							<input type="text" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
