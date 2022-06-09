import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CartModal from './cartModal/index';

interface props {
    children: React.ReactNode
}

const LayoutComponent: React.FC<props> = ({ children }: props) => {

    const [cartModalShow, setCartModalShowShow] = useState<boolean>(false);

    return (
        <>
            <div>
                <Button onClick={() => setCartModalShowShow(true)}> carts </Button>
            </div>

            {children}

            <CartModal
                show={cartModalShow}
                onHide={() => setCartModalShowShow(false)}
            />
        </>
    )
}

export default LayoutComponent;