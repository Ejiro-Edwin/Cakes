<div className="landing">
	<div className="dark-overlay landing-inner text-light">
		<div className="container">
			<div className="panel panel-default">
				<div className="panel-heading">
					{/* <h3 className="panel-title">
          Cakes CATALOG
    </h3> */}
				</div>
				<div className="panel-body">
					<Link to="/create">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true" /> Add Cake
					</Link>
					{this.state.cakes.map((cake) => (
						<div className="card">
							<div className="card-body">
								<h1 className="card-title">{cake.name}</h1>
								<a href="#" className="btn btn-primary">
									{cake.name}
								</a>
								<a href="#" className="btn btn-primary">
									{cake.comment}
								</a>
							</div>
							<Link to={`/Show/${cake._id}`}>
								{' '}
								<Img className="card-img-top" src={cake.imageUrl} alt="Card image" />
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
</div>;
