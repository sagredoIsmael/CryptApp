import React from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from '../actions/cryptos'
import Colors from '../utils/constants'
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import CryptoRow from '../components/cryptoRow'

class CryptoList extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Crypto pairs now',
      headerTitleStyle: {
        color: 'white',
        fontSize: 28
      },
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
    }
  }

  componentDidMount() {
    this.fetchCryptos()
  }

  fetchCryptos = () => {
    this.props.fetchCryptos()
  }

  renderItem = ({ item }) => {
    const itemInfo = "Bid price:" + item.bidPrice + "\nBid Qty:" + item.bidQty + "\nAsk price:" + item.askPrice + "\nAsk Qty:" + item.askQty
    return (
      <CryptoRow
          title={item.symbol}
          description={itemInfo}
          isFavorite={item["isFavorite"]}
      />
    )
  }

  _onRefresh = () => this.props.fetchCryptos()

  render() {
    const { cryptos, loading } = this.props
    return (
      <FlatList
        refreshControl = {
          <RefreshControl refreshing = {loading} onRefresh = {this._onRefresh} />
        }
        styles={styles.container}
        data={cryptos.items}
        renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkGreyColor,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos,
    loading: state.cryptos.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => {
      dispatch(fetchCryptos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList)
