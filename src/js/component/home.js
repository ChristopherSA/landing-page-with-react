import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="container">
				<div className="container row-sm g-12 p-5">
					<Jumbotron />
				</div>
				<div className="row row-sm g-3 d-grid gap-3 padding-center p-5">
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3">
						<Cards />
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
