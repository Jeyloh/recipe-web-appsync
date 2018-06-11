import React from "react";



export default class CookbookWrapper extends React.Component {

  render() {

    return (
      <div style={styles.wrapper}>

        <div style={styles.leftContainer}>
          <h3>Add ingredients and directions for recipe</h3>
          <input
            style={styles.input}
            placeholder="Ingredient name"
            name="ingredient"
            value={this.props.ingredient}
            onChange={e => this.props.onChange('ingredient', e.target.value)}
          />
          <button onClick={this.props.addIngredient} style={styles.btn}>Add Ingredient</button>

          <input
            style={styles.input}
            placeholder="Direction name"
            name="direction"
            value={this.props.direction}
            onChange={e => this.props.onChange('direction', e.target.value)}
          />
          <button onClick={this.props.addDirection} style={styles.btn}>Add Direction</button>

        </div>

        <div style={styles.rightContainer}>

          <div style={styles.ingredientsContainer}>
            <h4>Ingredients:</h4>
            { this.props.ingredients.length === 0 &&
            <p>add some ingredients</p>}
            { this.props.ingredients.map( (ingredient, index) => (
              <div key={index}>
                <p>{index + 1}: {ingredient}</p>
              </div>
            ))
            }
          </div>

          <div style={styles.directionsContainer}>
            <h4>Directions:</h4>
            { this.props.directions.length === 0 &&
            <p>add some directions</p>}
            { this.props.directions.map( (direction, index) => (
              <div key={index}>
                <p>{index + 1}: {direction}</p>
              </div>
            ))
            }
          </div>

          <input
            style={styles.input}
            placeholder="Recipe name"
            name="recipeName"
            value={this.props.name}
            onChange={e => this.props.onChange('name', e.target.value)}
          />
          <button onClick={this.props.addRecipe} style={styles.btn}>Add Recipe</button>

        </div>

      </div>
    )
  }
}


const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: window.innerWidth > 767 ? 'row' : 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: window.innerWidth > 767 ? '40vw' : '80vw',
    border: '2px solid rgb(255, 128, 0)',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,

  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: window.innerWidth > 767 ? '40vw' : '80vw',
    padding: 20,
    background: 'rgba(255, 128, 0, 0.5)'

  },
  directionsContainer: {
    width: '100%'
  },
  ingredientsContainer: {
    width: '100%'
  },
  input: {
    height: 30,
    marginBottom: 10,
    width: '100%',
    padding: 5,
    border: 'none',
    borderBottom: '2px solid rgb(255, 128, 0)',
    outline: 'none',
  },
  btn: {
    height: 30,
    marginBottom: 10,
    width: '100%',
  }
}