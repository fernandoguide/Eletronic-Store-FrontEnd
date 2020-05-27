import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcon from 'material-icons-react';
import { List, ItemList } from './styles';
import { colors } from '../../styles';
import { Types as CategoryTypes } from '../../store/ducks/Category';
import { Types as ProductTypes } from '../../store/ducks/Product';

const CategoryList = () => {
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState('8');
    const categorias = useSelector(state => state.Category.data);

    useEffect(() => {
        dispatch({
            type: CategoryTypes.GET_CATEGORY,
        }); // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch({
            type: ProductTypes.GET_PRODUCT,
            payload: {
                page: pageNumber,
            },
        }); // eslint-disable-next-line
    }, [pageNumber]);

    function iconRender(id) {
        switch (id) {
            case 8: {
                return 'blur_circular';
            }
            case 7: {
                return 'smartphone';
            }
            case 6: {
                return 'laptop';
            }
            case 5: {
                return 'desktop_mac';
            }
            case 4: {
                return 'desktop_windows';
            }
            case 3: {
                return 'mouse';
            }
            case 2: {
                return 'headset_mic';
            }
            case 1: {
                return 'dashboard';
            }
            default:
                return 'cached';
        }
    }

    return (
        <List>
            <h1>Categorias</h1>
            {categorias &&
                categorias.map(item => (
                    <ItemList key={item.id}>
                        <button
                            type="button"
                            onClick={() => {
                                setPageNumber(item.id);
                            }}
                        >
                            <div>
                                <MaterialIcon
                                    icon={iconRender(item.id)}
                                    size={23}
                                    color={colors.grayLight}
                                />
                                <span>{item.nome}</span>
                            </div>
                        </button>
                    </ItemList>
                ))}
        </List>
    );
};
export default CategoryList;
