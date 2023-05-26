import { useState } from "react";
import Crystal from "./20x20";
import './ClickOne.css';
import Crystal_30 from "./30x30";

function ClickOne() {
	const [description, setDescription] = useState(true);
	const [reviews, setReviews] = useState(false);
	const descriptionHandler = () => {
		setDescription(true);
		setReviews(false);
	};
	const reviewsHandler = () => {
		setDescription(false);
		setReviews(true);
	};
	return (
    <div>
			<button onClick={descriptionHandler} className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Deploy 20 mol</span>
                    <h1 className="note">Crystal Copper Sulphate Pentahydrate</h1>
            </button>
            <button onClick={reviewsHandler} className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Deploy 30 mol</span>
            </button>
        {description && (
            <div className="crystal-simu"><Crystal/></div>
            )}
        {reviews && (
            <div className="crystal-simu"><Crystal_30 /></div>
            )}
        
        </div>
	);
}

export default ClickOne;
