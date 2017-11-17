import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';

class RecipeItem extends Component{
	constructor(){
		super();
		this.state = {
			favorite:false
		}
	}
	favorite(recipe){
		this.props.favoriteRecipe(recipe);
		this.setState({favorite:true});
	}
	render(){
		let { recipe }  = this.props;
		return(
			<div className="recipe-item">
				{
					this.props.favoriteButton ? 
						this.state.favorite ? 
							<div className="star">&#9733;</div>
						:
							<div onClick = {() => this.favorite(recipe)} className="star">
								&#9734;
							</div>
					:
					<div></div>
				}
				<div className="recipe-text">
					<a href={recipe.href}><h4 className="recipe-title"> {recipe.title} </h4></a>
					<p >{recipe.ingredients}</p>
				</div>
				<img src={recipe.thumbnail} alt={recipe.title} className="recipe-image"/>
			</div>
		)
	}
}

export default connect(null, { favoriteRecipe })(RecipeItem);