import React, { Component } from 'react';
import { compose } from 'react-apollo'
import uuidv4 from 'uuid/v4'

import './App.css';

import Header from "./components/Header"
import CookbookWrapper from "./components/CookbookWrapper"
import RecipeOverview from "./components/RecipeOverview"

import * as resolver from './graphql/resolvers/index'


class App extends Component {

  state = {
    name: "",
    ingredient: "",
    direction: "",
    ingredients: [],
    directions: []
  }

  componentDidMount() {
    this.props.subscribeToDeletedRecipes()
    this.props.subscribeToNewRecipes()
  }

  onChange = (key, value) => {
    this.setState({[key]: value})
  }
  addIngredient = () => {
    if (this.state.ingredient === '') return
    const ingredients = this.state.ingredients
    ingredients.push(this.state.ingredient)
    this.setState({
      ingredient: ''
    })
  }

  addDirection = () => {
    if (this.state.direction === '') return
    const directions = this.state.directions
    directions.push(this.state.direction)
    this.setState({
      direction: ''
    })
  }

  addRecipe = () => {
    const { name, ingredients, directions } = this.state
    this.props.onAdd({
      id: uuidv4(), name, ingredients, directions
    })
    this.setState({name: '', directions: [], ingredients: []})
  }

  render() {
    console.log(`props: `, this.props)
    return (
      <div className="App">
        <Header />
        <CookbookWrapper name={this.state.name}
                         ingredient={this.state.ingredient}
                         direction={this.state.direction}
                         ingredients={this.state.ingredients}
                         directions={this.state.directions}
                         onChange={this.onChange}
                         addIngredient={this.addIngredient}
                         addDirection={this.addDirection}
                         addRecipe={this.addRecipe}
        />
        <RecipeOverview recipes={this.props.recipes} deleteRecipeById={this.props.deleteRecipeById} />

      </div>
    );
  }
}

export default compose(resolver.listRecipeGQLAction, resolver.createRecipeGQLAction, resolver.deleteRecipeAction)(App);
