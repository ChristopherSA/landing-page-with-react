import React from "react";

export function Cards() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="card-deck">
					<div className="card">
						<img
							src="https://picsum.photos/500/325"
							className="card-img"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text-top">
								Some quick example text to build on the card
								title and make up the bulk of the cards content.
							</p>
						</div>
						<div className="modal-footer justify-content-center">
							<a href="#" className="btn btn-primary btn-sm">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
