import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faCab, faCar, faPerson, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
	const [openDate, setOpenDate] = useState("");
	const [openOptions, setOpenOptions] = useState(false);
	const [destination, setDestination] = useState("");
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	const navigate = useNavigate();
	const handleSearch = () => {
		navigate("/hotels", { state: { destination, date, options } });
	};
	return (
		<div className="header">
			<div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car Rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCab} />
						<span>Airport Taxis</span>
					</div>
				</div>
				{type !== "list" && (
					<>
						<h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
						<p className="headerDesc">Get rewarded for you travels ~ unlock instant saving of 10% or more with a free bookie account</p>
						<button className="headerBtn">Sign in / Register</button>
						<div className="headerSearch">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faBed} className="headerIcon" />
								<input type="text" onChange={(e) => setDestination(e.target.value)} placeholder="where are you going?" className="headerSearchInput" />
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faCalendarDays} className="headerIon" />
								<span
									className="headerSearchText"
									onClick={() => {
										setOpenDate(!openDate);
									}}
								>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
								{openDate && <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} className="headerIon" />
								<span
									className="headerSearchText"
									onClick={() => {
										setOpenOptions(!openOptions);
									}}
								>{`${options.adult} adult · ${options.children} Children · ${options.room} Room`}</span>
								{openOptions && (
									<div className="options">
										<div className="optionItems">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<button className="optionCounterButton" onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>
													-
												</button>
												<span className="optionCounterNumber">{options.adult}</span>
												<button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>
													+
												</button>
											</div>
										</div>

										<div className="optionItems">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button className="optionCounterButton" onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>
													-
												</button>
												<span className="optionCounterNumber">{options.children}</span>
												<button className="optionCounterButton" onClick={() => handleOption("children", "i")}>
													+
												</button>
											</div>
										</div>
										<div className="optionItems">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<button className="optionCounterButton" onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>
													-
												</button>
												<span className="optionCounterNumber">{options.room}</span>
												<button className="optionCounterButton" onClick={() => handleOption("room", "i")}>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} className="headerIon" />
								<button className="headerBtn" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
