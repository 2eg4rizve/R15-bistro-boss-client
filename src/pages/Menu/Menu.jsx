
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

import menuImg from '../../assets/menu/menu-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss|| Menu</title>

            </Helmet>

            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>



            menu

        </div>
    );
};

export default Menu;