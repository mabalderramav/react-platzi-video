import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';

/**
 * This class handles Home component.
 */
export default class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
        <ModalContainer>
          <h1>This is a portal</h1>
        </ModalContainer>
      </HomeLayout>)
  }
}
