import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



import {ROUTE_CLIENT, ROUTE_ADMIN} from '../../constant/routePath/RoutePath';



function NavBar() {
  const cartItems = useSelector((state) => state.pizzalist.cartitems)

  const [sticky, setSticky] = useState({
    fixbar: false,
    stickHeight: 0
  })

  const { fixbar, stickHeight } = sticky


  const headerFix = () => {

    let offset_Height = document.getElementById('navbarwrap').offsetHeight
    let sticky_offset = document.getElementById('stickyoffset')

    const stickyFun = () => {
      if (window.scrollY >= sticky_offset.offsetTop + 1) {
        setSticky({
          fixbar: true,
          stickHeight: offset_Height
        })
      }
      else {
        setSticky({
          fixbar: false,
          stickHeight: 0
        })
      }
    }

    return { stickyFun }
  }

  useEffect(() => {
    const { stickyFun } = headerFix()
    window.addEventListener('scroll', stickyFun)
    return () => {
      window.removeEventListener('scroll', stickyFun)
    }
  }, [])

  return (
    <>
      <div id='stickyoffset' style={{ height: stickHeight }}></div>
      <div className={`wrapper bg1 ${fixbar ? "headersticky" : ""}`} id="navbarwrap">
        <div className="cover py-2 bordercolor2_4 border_bottom1">
          <div className='container'>
            <div className="row navbar">
            
              <div className="col"><Link to={ROUTE_CLIENT.HOME_PATH} className="ovr fs-2 fw-bold color5_1 py-1">
                <span className='d-inline-block'><img src={process.env.PUBLIC_URL + '/assets/images/corner_logo.png'} alt="Pizza Corner" /></span>
                <span className='d-inline-block'>Pizza Corner</span>
              </Link></div>
              <div className="col-auto d-flex align-items-center fw-bold"><NavLink to={ROUTE_CLIENT.HOME_PATH}>Home</NavLink></div>
              <div className="col-auto d-flex align-items-center fw-bold"><NavLink to={ROUTE_CLIENT.ABOUT_PATH}>About Us</NavLink></div>
              
              <div className="col-auto d-flex align-items-center fw-bold"><NavLink to={ROUTE_CLIENT.PRODUCTS_PATH}>Product</NavLink></div>
              <div className="col-auto d-flex align-items-center fw-bold"><NavLink to={ROUTE_ADMIN.ADD_PRODUCT_PATH}> Add Pizza</NavLink></div>
              <div className="col-auto d-flex align-items-center">
                <div className="ovr">
                  <NavLink className="d-block fw-bold" to={ROUTE_CLIENT.ADD_TO_CART_PATH}>
                    <div className='d-inline-block'><img src={process.env.PUBLIC_URL + '/assets/images/cart_icon.png'} alt="Cart" /></div>
                    <div className='d-inline-block bg2_2 px-2 color1 ms-2'>{cartItems.length}</div></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar