import React from 'react';

class SearchForum extends React.Component {
	render() {
		return (
			<li className="navbar-form"  style={{listStyle: "none" , width:'100%' , }}>
				<form action="" method="POST" name="search_form">
					<div style={{display: "flex" , borderColor:'lightgrey',borderWidth:'1px', borderStyle:'solid',borderRadius:'20px', backgroundColor:'#f2f2f2'     }}>
						<input type="text" className="form-control" placeholder="Search..."  style={{backgroundColor: "transparent" , border:'none'}}  />
						<button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
					</div>
				</form>
			</li>
		);
	}
};

export default SearchForum;
