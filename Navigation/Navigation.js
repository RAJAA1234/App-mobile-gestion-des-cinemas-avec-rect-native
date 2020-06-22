import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail '
import  WelcomePage from '../Components/FilmDetail '

const SearchStackNavigator = createStackNavigator({

  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      title: 'Rechercher'
    }},
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)
